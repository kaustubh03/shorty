/*
    Node Modules Import
*/
const express = require("express");
const bcrypt = require("bcryptjs");


const router = express.Router();

const envVars = require("../config/vars");

/*
    Model Imports
*/
const Entries = require('../models/entries.model');


///-------------------------------------------Routes Start--------------------------------------/////

/*
    Add URL Entry
*/
router.post('/add', (req, res) => {
    insertEntry(req, res);
});

/* List of Entries */
router.get('/list', (req, res) => {
    list(req, res)
});

///-------------------------------------------Routes End----------------------------/////

async function list(req, res){
    const urls = await Entries.findAll({attributes: ['shortenUrl', 'url', 'expirationDate', 'passwordRequire']});
    res.status(200).send({ code:200, message:'URLs fetched successfully', data:urls })
}

/*
    Insert URL Entry and create shortened URL
*/
function insertEntry(req, res) {
    var entries = new Entries();
    entries.url = req.body.url;
    entries.shortenUrl = `${createShortenUrl()}`;
    entries.expirationDate = req.body.expirationDate;
    entries.logging = req.body.logging;
    entries.created_at=new Date().toString();
    /*
        Hash Password
    */
   if(req.body.password){
    entries.passwordRequire = 1;
    entries.password = bcrypt.hashSync(req.body.password, 10);
   }
    entries.save().then(doc=>{
        res.send(doc);
    }).catch(err=>{
        if (err.name == 'ValidationError') {
            handleValidationError(err, req.body);
            res.status(422).send(err);
        }
        else
            console.log(err);
            res.status(500).send(err);
    });
}

/*
Handle Validation Errors
*/
function handleValidationError(err, body) {
    for (field in err.errors) {
        switch (err.errors[field].path) {
            case 'url':
                body['urlError'] = err.errors[field].message;
                break;
            case 'shortenUrl':
                body['shortenUrlError'] = err.errors[field].message;
                break;
            case 'expirationDate':
                body['expirationDateError'] = err.errors[field].message;
                break;
            case 'logging':
                body['loggingError'] = err.errors[field].message;
                break;
            default:
                break;
        }
    }
    return body;
}

function createShortenUrl(){
    const randomURL = Math.random().toString(32).substring(2, 5) + Math.random().toString(32).substring(2, 5);
    return randomURL;
}

module.exports = {
  router: router,
};

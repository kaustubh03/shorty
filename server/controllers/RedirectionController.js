/*
    Node Modules Import
*/
const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");

const envVars = require("../config/vars");
/*
    Model Imports
*/
const Entries = require('../models/entries.model');
const Logs = require('../models/logs.model');

/*
    Add User
*/
router.get('/*', (req, res) => {
    handleURLAction(req, res);
});

async function handleURLAction(req, res){
    let currentUrl = req.params[0];
    const urlObject = await Entries.findOne({ where: { shortenUrl:currentUrl }});
    if(urlObject){
        let isExpired = await checkURLExpiry(urlObject);
        if(isExpired){
            res.redirect(`${envVars().frontend}/status/expired`);
        }
        else{
            if(urlObject.logging){
                logInfo(req, urlObject);
            }
            if(urlObject.passwordRequire){
                res.redirect(`${envVars().frontend}/auth/${urlObject.shortenUrl}`)
            }
            else{
                res.redirect(urlObject.url)
            }
        }
    }
    else{
        res.redirect(`${envVars().frontend}/status/notfound`);
    }
}

async function handleAuth(req, res){
    const password = req.body.password;
    const currentUrl = `${req.body.url}`;
    console.log(req.body)
    const urlObject = await Entries.findOne({ where: { shortenUrl:currentUrl }});
    if(urlObject){
        let isExpired = await checkURLExpiry(urlObject);
        if(isExpired){
            res.send({verified:false, url:`${envVars().frontend}/status/expired`})
        }
        if(urlObject.logging){
            logInfo(req, urlObject);
        }
        if(bcrypt.compare(password, urlObject.password)){
            res.send({verified:true, url:urlObject.url})
        }
    }
    else{
        console.log('je');
        res.send({verified:false, url:`${envVars().frontend}/status/notfound`})
    }
}

async function checkURLExpiry(urlObject){
    if(urlObject.isExpired){
        return true;
    }
    else if(urlObject.expirationDate!==null && new Date(urlObject.expirationDate) < new Date()){
        const updateUrlExpiry = await urlObject.update({
            isExpired : true
        });
        if(updateUrlExpiry){
            return true;
        }
    }
    else{
        return false;
    }
}

async function logInfo(req, urlObject){
    var logs = new Logs();
    logs.urlId = urlObject.id;
    logs.ip = req.connection.remoteAddress;
    logs.userAgent = req.get('User-Agent');
    logs.save().then(doc=>{
        console.log('Logged Successfully')
    }).catch(err=>{
        console.log('Error in logging', err.toString());
    })
}

module.exports = {
  router: router,
  handleAuth:handleAuth
};

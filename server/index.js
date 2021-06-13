// Imports
import express from 'express';
import bodyparser from 'body-parser';
import cors from 'cors';


/*
  Controller Imports
*/
import URLController from './controllers/URLController';
import RedirectionController from './controllers/RedirectionController';

/*
  Model Imports
*/
const db = require('./models');
const router = express.Router();


var app = express();

db.sequelize.sync();

app.use(cors());

app.use(bodyparser.urlencoded({
    extended: true
}));
app.use(bodyparser.json());


app.listen(5000, () => {
    console.log('Express server started at port : 5000');
});
app.get('/api/v1/health', (req, res)=>{
 res.send("API Enabled");
});
app.use('/api/v1', router);
router.use("/url", URLController.router);

app.get('/*', RedirectionController.router);
app.post('/auth', RedirectionController.handleAuth);
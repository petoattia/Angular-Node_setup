const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
require('./insert')();
var corsOptions = {
    origin: 'http://localhost:4200',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204 
};
app.use(bodyParser.json());
app.listen(4300, () => {
    console.log('Server started!');
});
app.use(cors(corsOptions));
app.route('/api/:data').get((req, res) => {
    const requestedCatName = req.params['data'];
    console.log(req);
    res.send({ name: requestedCatName });
});
app.route('/api').post((req, res) => {
    // console.log(req.body);
    res.send(201, insertFeedback(req.body));
    // res.send(201, req.body);
});
app.route('/api/:data').put((req, res) => {
    console.log(req.body);
    res.send(200, req.body);
});
app.route('/api/:data').delete((req, res) => {
    console.log(req);
    res.sendStatus(204);
});
const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/posts');
const app = express();
app.use(bodyParser.json());

/*app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Methods','GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers','Content-Type, Authorization');
});*/

app.use(routes);


app.listen('7080');
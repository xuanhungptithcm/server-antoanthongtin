var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var app = express();

app.use(cors()); //cấp quyền cho phép sử dụng api
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/post', require('./route/post.route')())
const PORT = process.env.PORT || 80;
app.listen(PORT);
console.log('serve is listening port ' + 80);

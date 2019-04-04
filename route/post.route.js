var router = require('express').Router();
var postsControler = require('../controler/post.contronler');

module.exports = function () {
    router.get('/', postsControler.posts);   
    router.get('/getpost', postsControler.getPost); 
    return router;
}
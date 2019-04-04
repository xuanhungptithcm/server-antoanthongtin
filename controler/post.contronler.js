module.exports = {
  posts: posts,
  getPost: getPost
};
var array = [];
function posts(req, res) {
  console.log(req.query.content);
  const data = {
      content: req.query.content,
      auth: req.query.auth,
  };

  array.push(data);
  res.send({ status: 'success' });
}

function getPost(req, res) {
    res.send({array: array})
}
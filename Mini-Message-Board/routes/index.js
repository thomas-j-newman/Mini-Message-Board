var express = require('express');
var router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
]

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: "Mini Messageboard", messages: messages })
});
router.get('/new', function(req, res, next) {
  res.render('form', {title: "Message Form", messages: messages})
})

router.post('/new', function(req, res) {
  let newComment = req.body.text;
  let newUser = req.body.user;
  let newDate = new Date()

  messages.push({text: newComment, user: newUser, added: newDate});
  res.redirect('/')
})

router.post('/index', function(req, res) {
  res.redirect('/new')
})

module.exports = router;

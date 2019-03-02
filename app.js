const dotenv = require('dotenv').config();

var cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');

const express = require('express');
const app = express();

app.use(cookieParser()); // Add this after you initialize express.

const exphbs = require('express-handlebars');

const mongoose = require('mongoose');

// Set db
const db = require('./data/reddit-db');

//middleware for JSON data
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');

//middleware for putting something when you post it
const methodOverride = require('method-override');

// Use Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

var checkAuth = (req, res, next) => {
  console.log("Checking authentication");
  if (typeof req.cookies.nToken === "undefined" || req.cookies.nToken === null) {
    req.user = null;
  } else {
    var token = req.cookies.nToken;
    var decodedToken = jwt.decode(token, { complete: true }) || {};
    req.user = decodedToken.payload;
  }

  next();
};
app.use(checkAuth);

const Post = require('./models/post');
const posts = require('./controllers/posts')(app);
const Comment = require('./models/comment');
const comments = require('./controllers/comments.js')(app);
const User = require('./models/user.js');
const auth = require('./controllers/auth.js')(app);
const replies = require('./controllers/replies.js')(app);

const port = process.env.PORT || 13000;





// Add after body parser initialization!
app.use(expressValidator());

//must come below const app, but before routes
app.use(bodyParser.urlencoded({ extended: true }));

// override with POST having ?_method=DELETE or ?_method=PUT
app.use(methodOverride('_method'))

app.use(express.static('public'));

// //heroku database.
// mongoose.connect((process.env.MONGODB_URI || 'mongodb://localhost/rotten-potatoes'), { useNewUrlParser: true });

// local host database
mongoose.connect('mongodb://localhost/rotten-potatoes');

//views middleware
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


// INDEX
    app.get('/', (req, res) => {
            res.render('landing');
            // res.render('home', {});
        })


// SIGN-UP_GO
app.get('/sign-up_go', (req, res) => {
    var currentUser = req.user;
    if (currentUser) {
        res.redirect('/');
    } else {
        res.render('sign-up_go', currentUser);
    }
});

// SIGN-UP_WHO
app.get('/sign-up_who', (req, res) => {
    var currentUser = req.user;
    if (currentUser) {
        res.redirect('/');
    } else {
        res.render('sign-up_who', currentUser);
    }
});

// SIGN UP POST
app.post("/sign-up_who", (req, res) => {
  // Create User and JWT
  const user = new User(req.body);
  console.log(req.body)

  user.save().then((user) => {
      var token = jwt.sign({ _id: user._id }, process.env.SECRET, { expiresIn: "60 days" });
      res.cookie('nToken', token, { maxAge: 900000, httpOnly: true });
      res.redirect('/');
      })
    .catch(err => {
      console.log(err.message);
      return res.status(400).send({ err: err });
    });

});


// SIGN UP POST
app.post("/sign-up_go", (req, res) => {
  // Create User and JWT
  const user = new User(req.body);
  console.log(req.body)

  user.save().then((user) => {
      var token = jwt.sign({ _id: user._id }, process.env.SECRET, { expiresIn: "60 days" });
      res.cookie('nToken', token, { maxAge: 900000, httpOnly: true });
      res.redirect('/');
      })
    .catch(err => {
      console.log(err.message);
      return res.status(400).send({ err: err });
    });

});



app.listen(port);



module.exports = app;

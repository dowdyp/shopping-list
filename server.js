require('dotenv').config()

const PORT = process.env.PORT || 3001;

const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const passport = require("passport");
const cookieParser = require("cookie-parser");
const bcrypt = require("bcryptjs");
const session = require("express-session");
const User = require("./models/user");
const bodyParser = require("body-parser");

const app = express();
app.use(
  session({
    secret: process.env.APPLICATION_SECRET,
    saveUninitialized: false,
    resave: false
  })
);
require("./passportconfig")(passport);
app.use(passport.initialize())
app.use(passport.session());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors({
  origin: "http://localhost:3000",
  credentials: true
}));
app.use(cookieParser(process.env.APPLICATION_SECRET));

const lists = {
  "poop123" : [
    { id: 1, name: "Home Depot", total: 127.4, numberOfItems: 3 },
    { id: 2, name: "Microcenter", total: 2938.49, numberOfItems: 2 },
    { id: 3, name: "Sam's Club", total: 144.44, numberOfItems: 14 },
  ]
};

app.post("/login", (req, res) => {
  passport.authenticate("local", (err, user, info) => {
    console.log(user)
    if (err) console.log(err);
    if (!user) res.json({ message: "No user found."} )
    else {
      req.logIn(user, (err) => {
        if (err) console.log(err);
        res.json({ message: "Logged in."});
        console.log(req.user);
      })
    }
  })
});

app.post("/register", (req, res) => {
  console.log(req.body)
  User.findOne({email : req.body.email}, (err, doc) => {
    if (err) console.log(err);
    if (doc) res.json({ message: "User already exists."});
    if (!doc) {
      bcrypt.hash(req.body.password, 10).then((hash) => {
        const newUser = new User({
          email: req.body.email,
          password: hash,
          lists: []
        });
        newUser.save()
      })
      res.status(200).json({ message : "User successfully created."})
    }
  })
})

app.get("/lists", (req, res) => {
  res.send(lists);
});

mongoose.connect(process.env.MONGO_URL).then((result) => {
  console.log("Mongoose has connected.");
  app.listen(PORT, () => {
      console.log(`Server listening on ${PORT}`);
    })
}).catch((error) => console.log(error));

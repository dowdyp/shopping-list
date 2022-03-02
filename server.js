require("dotenv").config();
const PORT = process.env.NODE_PORT || 3001;
const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const passport = require("passport");
const passportLocal = require("passport-local").Strategy;
const cookieParser = require("cookie-parser");
const bcrypt = require("bcryptjs");
const session = require("express-session");
const bodyParser = require("body-parser");
const app = express();
const cookieLife = 1000 * 60 * 60 * 24;

// Mongo Setup
const User = require("./models/user");

const db_url = process.env.MONGO_URL;
mongoose.connect(
  db_url,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log("Mongoose is connected.");
    const db = mongoose.connection;
  }
);
//-----------------------------------

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
  session({
    secret: process.env.APP_SECRET,
    saveUninitialized: true,
    resave: false,
    cookie: {
      secure: false,
      maxAge: cookieLife,
    },
  })
);

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(cookieParser(process.env.APP_SECRET));
app.use(passport.initialize());
app.use(passport.session());
require("./passportconfig")(passport);

//---------------------------

app.post("/login", (req, res, next) => {
  passport.authenticate("local", (err, user) => {
    if (err) console.log(err);
    if (!user) res.status(401).json({ message: "No user found." });
    else {
      req.login(user, (err) => {
        if (err) console.log(err);
        res.status(200).json({ message: "Logged in." });
      });
    }
  })(req, res, next);
});

app.post("/register", (req, res) => {
  User.findOne({ username: req.body.username }, (err, doc) => {
    if (err) console.log(err);
    if (doc) res.json({ message: "User already exists." });
    if (!doc) {
      bcrypt.hash(req.body.password, 10).then((hash) => {
        const newUser = new User({
          username: req.body.username,
          password: hash,
        });
        newUser.save();
      });
      res.status(200).json({ message: "User successfully created." });
    }
  });
});

app.post("/add-list", (req, res) => {
  User.findOne({ username: req.user.username }, (err, doc) => {
    if (err) res.status(500).json({ message: "An error has ocurred." });
    if (!doc) res.status(401).json({ message: "Unauthorzed." });
    const newList = {
      owner: req.user._id,
      listName: req.body.listName || "Untitled List",
      items: req.body.items,
      listTotal: req.body.total,
      numberOfItems: req.body.items.length,
    };
    doc.lists.push(newList);
    doc.save();
    res.status(200).json({ message: "list added" });
  });
});

app.get("/profile", (req, res) => {
  res.json({ user: req.user });
});

app.get("/list/:list_id", (req, res) => {
  User.findOne({ username: req.user.username }, (err, doc) => {
    if (err) console.log(err);
    if (!doc) console.log("poo");
    if (doc) {
      console.log(doc.lists.id(req.params.list_id))
      res.status(200).json({
        list: doc.lists.id(req.params.list_id)
      });
    }
  });
});

app.get("/lists", (req, res) => {
  if (req.user) {
    res.status(200).json(req.user.lists);
  } else {
    res.status(200).json({ lists: [] });
  }
});

app.post("/logout", (req, res) => {
  req.logout();
  res.status(200).json({ message: "Successfully logged out." });
});

app.get("/is-authenticated", (req, res) => {
  if (req.user) {
    res.status(200).json({ success: true });
  } else {
    res.status(401).json({ success: false });
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

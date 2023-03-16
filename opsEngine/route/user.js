const express = require("express");
const router = express.Router();
const { user } = require("../schema/schema");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const salt = 10;
const SECTER_CODE = "Qwdseew344e43esd4";

router.post("/signup", async (req, res) => {
  // creating a user in database
  bcrypt.genSalt(salt, (saltErr, saltValue) => {
    if (saltErr) {
      res.status(401).send("unable to process");
    } else {
      bcrypt.hash(req.body.password, saltValue, (hashErr, hashValue) => {
        if (hashErr) {
          res.status(401).send("unable to process hasherr");
        } else {
          user
            .create({
              username: req.body.username,
              password: hashValue,
              email: req.body.email | "",
              mobile: req.body.mobile | "",
            })
            .then((user) => {
              res.status(200).send(user);
            })
            .catch((err) => {
              res.status(400).send(err.message);
            });
        }
      });
    }
  });
});

router.post("/login", async (req, res) => {
  //reading the user from database
  user.findOne({ username: req.body.username })
  .then((user) => {
    if (!user) {
      res.status(401).send("User not exist!");
    } else {
      if (!bcrypt.compareSync(req.body.password, user.password)) {
        res.status(401).send("invalid password");
      } else {
        const token = jwt.sign(
          { id: user._id, username: user.username },
          SECTER_CODE
        );
        res
          .status(200)
          .send({ message: "user logged in successfully", token: token });
      }
    }
  }).catch(()=>{console.log(err)});
});
module.exports = router;

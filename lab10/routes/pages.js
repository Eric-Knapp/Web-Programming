const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const users = require("../data/users");

function Authenticate(req, res, next) {
  if (req.session.user) return next();
  else res.status(403).render("error", { title: "Invalid Entry" }); //changed invalid to error
}

router.get("/", function (req, res) {
  if (req.session.user) {
    res.redirect("/private");
  } else {
    res.render("login", { title: "Login" });
  }
});

router.get("/private", Authenticate, (req, res) => {
  res.render("description", req.session.user);
});

router.get("/logout", async (req, res) => {
  req.session.destroy();
  res.render("logout", { message: "Logged out successfully!" });
});

router.post("/login", async (req, res) => {
  let inval = false;
  if (req.body.username && req.body.password) {
    for (let user in users) {
      if (users[user].username == req.body.username) {
        let match = await bcrypt.compare(
          req.body.password,
          users[user].hashedPassword
        );

        if (match) {
          req.session.user = {
            username: users[user].username,
            password: users[user].hashedPassword,
            _id: users[user]._id,
            firstName: users[user].firstName,
            lastName: users[user].lastName,
            profession: users[user].profession,
            bio: users[user].bio,
          };

          res.redirect("/private");
        } else {
          inval = true;
        }
      } else {
        inval = true;
      }
    }
  } else {
    inval = true;
  }
  if (inval) {
    res.status(401).render("login", {
      title: "Username/Password Invalid",
      error: "Username/Password Invalid",
    });
  }
});

module.exports = router;

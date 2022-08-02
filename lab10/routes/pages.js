const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const users = require("../data/users");

//renders error if not authenticated
function Authenticate(req, res, next) {
  if (req.session.person) return next();
  else res.status(403).render("error", { title: "Invalid Entry" });
}

//renders login screen
router.get("/", function (req, res) {
  if (req.session.person) {
    res.redirect("/private");
  } else {
    res.render("login", { title: "Login" });
  }
});

//description
router.get("/private", Authenticate, (req, res) => {
  res.render("description", req.session.person);
});

//logout screen
router.get("/logout", async (req, res) => {
  req.session.destroy();
  res.render("logout", { message: "Logged out successfully!" });
});

router.post("/login", async (req, res) => {
  let err = false;
  if (req.body.username && req.body.password) {
    //loop through users using bcryot to check username and password
    for (let person in users) {
      if (users[person].username == req.body.username) {
        let pair = await bcrypt.compare(
          req.body.password,
          users[person].hashedPassword
        );

        //if username/password non existent/false, then below gets thrown
        if (err) {
          res.status(401).render("login", {
            title: "Username/Password Invalid",
            error: "Username/Password Invalid",
          });
        }

        //if correct info - descriptive info below
        if (pair) {
          req.session.person = {
            username: users[person].username,
            password: users[person].hashedPassword,
            _id: users[person]._id,
            firstName: users[person].firstName,
            lastName: users[person].lastName,
            profession: users[person].profession,
            bio: users[person].bio,
          };
          res.redirect("/private");
        } else {
          err = true;
        }
      } else {
        err = true;
      }
    }
  } else {
    err = true;
  }
});

module.exports = router;

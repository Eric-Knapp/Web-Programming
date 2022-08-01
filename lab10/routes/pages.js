const bcrypt = require('bcrypt');
const users = require('../data/users');
const express = require("express");
const router = express.Router();

//authentication middleware
//reference: https://scotch.io/tutorials/route-middleware-to-check-if-a-user-is-authenticated-in-node-js
function isAuthenticated(req, res, next) {
    if (req.session.user)
        return next();
    else res.status(403).render("invalid", {title:"Invalid Entry"});
  }

router.get('/', function(req, res) {
    if (req.session.user) {
        res.redirect('/private')
    } else {
        res.render('login', {title: "Login"})
    }
  });

router.post('/login', async(req, res) => {
  //to fix: "Cannot set headers after they are sent to the client"
  let inval = false;
      if(req.body.username && req.body.password){
        for(let user in users){
          if(users[user].username == req.body.username){
            let match = await bcrypt.compare(req.body.password, users[user].hashedPassword);

            if(match){
              req.session.user = { 
              'username': users[user].username, 
              'password':users[user].hashedPassword, 
              '_id':users[user]._id,
              'firstName':users[user].firstName,
              'lastName':users[user].lastName,
              'profession':users[user].profession,
              'bio':users[user].bio};

              res.redirect('/private');
            }
            else{
              inval = true;
            }
          }
          else{
            inval = true;
          }
        }
      }
      else{
        inval=true;
      }
    if(inval){
        res.status(401).render('login', {title : "Incorrect Username and/or Password", error:"Incorrect Username and/or Password"});
    }
/*     catch(err){
      res.status(401);
      res.render('login', {message : "Incorrect Username and/or Password", error:"Incorrect Username and/or Password"});
    } */
  });

router.get("/private",isAuthenticated,(req,res) => {
    //console.log(req.session.user);
    res.render('details', req.session.user);
});

router.get("/logout", async (req, res) => {
    //res.clearCookie("AuthCookie");
    req.session.destroy();
    res.render('logout', { message: "Logged out successfully!" });
});

module.exports = router
const exp = require("express");
const exp_router = exp.Router();

// education array
const edu = [
  {
    schoolName: "Harvard University",
    degree: "PhD, Computer Science",
    favoriteClass: "Web Programming SUPER advanced",
    favoriteMemory: "Hanging with Mark and the Winklevoss twins",
  },
  {
    schoolName: "Stevens Institute of Technology",
    degree: "MS, Computer Science",
    favoriteClass: "Web Programming",
    favoriteMemory: "Hanging with my boys",
  },
  {
    schoolName: "Rutgers University",
    degree: "BA, Information Technology",
    favoriteClass: "Objet-Oriented Programming",
    favoriteMemory: "Olde Queens with friends",
  },
  {
    schoolName: "West Virginia University",
    degree: "BS, Finance",
    favoriteClass: "Intro to Business",
    favoriteMemory: "Freshman Year",
  },
];

//get request for edu
exp_router.get("/", async (req, res) => {
  res.json(edu);
});

//exporting exp_router
module.exports = exp_router;

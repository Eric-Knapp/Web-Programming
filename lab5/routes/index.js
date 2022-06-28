const about = require("./about.js");
const story = require("./story.js");
const education = require("./education.js");

//initiating id paths
const pages = (page) => {
  page.use("/about", about);
  page.use("/story", story);
  page.use("/education", education);

  // 404 error if page is not found
  page.use("*", (req, res) => {
    res.status(404).json({ error: "404 Error - Page Not Found" });
  });
};

//exporting pages function
module.exports = pages;

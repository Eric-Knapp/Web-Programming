const showRoutes = require("./shows");
const searchRoutes = require("./search");
const path = require("path");

const constructorMethod = (app) => {
  app.use("/show", showRoutes);
  app.use("/search", searchRoutes);
  app.get("/", (req, res) => {
    res.sendFile(path.resolve("views/layouts/main.handlebars"));
  });

  app.use("*", (req, res) => {
    res.redirect("/");
  });
};

module.exports = constructorMethod;

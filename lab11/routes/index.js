const constructorMethod = (app) => {
  app.get("/", function (req, res) {
    console.log(__dirname);
    res.sendFile(__dirname + "/index.html");
  });

  app.use("*", (req, res) => {
    res.sendStatus(404);
  });
};

module.exports = constructorMethod;

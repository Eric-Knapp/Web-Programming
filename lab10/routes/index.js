const pageRoutes = require('./pages');

const constructorMethod = (app) => {
  app.use('/', pageRoutes);

  app.use('*', (req, res) => {
    res.sendStatus(404);
  });
};

module.exports = constructorMethod;
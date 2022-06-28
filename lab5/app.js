const express = require("express");
const exp = express();
const exp_routes = require("./Routes");

exp_routes(exp);

// setting up local host 3000
exp.listen(3000, () => {
  console.log(
    "The server is live - Routes now running on http://localhost:3000"
  );
});

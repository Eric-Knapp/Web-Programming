const express = require("express");
const router = express.Router();
const data = require("../data");
const recipeData = data.recipes;

//working correctly - gets by specific id
router.get("/:id", async (req, res) => {
  try {
    let recipe = await recipeData.get(req.params.id);
    res.json(recipe);
  } catch (e) {
    res.status(404).json({ error: "User not found" });
  }
});

//working correctly - gets all in db
router.get("/", async (req, res) => {
  try {
    let recipeList = await recipeData.getAll();
    res.json(recipeList);
  } catch (e) {
    res.sendStatus(500);
  }
});

// still needs more work - for some reason showing nulls
router.post("/", async (req, res) => {
  let recipeInfo = req.body;

  try {
    const newRecipe = await recipeData.createRecipe(
      recipeInfo.title,
      recipeInfo.ingredients,
      recipeInfo.steps
    );

    res.json(newRecipe);
  } catch (e) {
    res.sendStatus(500);
  }
});

//questionable - circle back
router.put("/:id", async (req, res) => {
  let recipeInfo = req.body;
  try {
    await recipeData.get(req.params.id);
  } catch (e) {
    return res.status(404).json({ error: "User not found" });
  }
  try {
    const updatedUser = await recipeData.update(req.params.id, recipeInfo);
    res.json(updatedUser);
  } catch (e) {
    res.status(500).send("Internal Server Error");
  }
});

//working correctly - deletes specific record by id
router.delete("/:id", async (req, res) => {
  try {
    await recipeData.get(req.params.id);
  } catch (e) {
    return res.status(404).json({ error: "User not found" });
  }

  try {
    await recipeData.remove(req.params.id);
    res.json({ deleted: true });
  } catch (e) {
    res.status(500).send("Internal Server Error");
  }

  //------PATCH-------

  // continue fixing for patch
});

module.exports = router;

const mongoCollections = require("../config/mongoCollections");
const recipes = mongoCollections.recipes;
const { ObjectId } = require("mongodb");

module.exports = {
  // ----------- create ------------
  async createRecipe(title, ingredients, steps) {
    const recipeCollection = await recipes(); //await recipe data
    const newRecipe = {
      title: title, //create title, ingredients, and steps
      ingredients: ingredients,
      steps: steps,
    };
    const insertedInfo = await recipeCollection.insertOne(newRecipe);
    const newId = insertedInfo.insertedId.toString();
    return await this.get(newId);
  },
  //error handling

  // --------------- get() -----------
  async get(id) {
    if (!id) throw "error - An id must be provided.";
    if (typeof id !== "string")
      throw "error - The argument id must be a string.";
    if (id.trim().length === 0)
      throw "error -  Id cannot be just spaces or an empty string.";
    id = id.trim();
    if (!ObjectId.isValid(id)) throw "error - Object id is invalid.";

    const recipeCollection = await recipes();
    const recipe = await recipeCollection.findOne({ _id: ObjectId(id) }); //finding valid id
    if (recipe == null) throw "error -  You must provide a valid Id.";
    return recipe;
  },

  //------------------------- getAll() --------------
  //returns all records in the db
  async getAll() {
    const recipeCollection = await recipes();
    const recipeList = await recipeCollection.find({}).toArray();
    if (!recipeList) throw "error - could not get list of all recipes.";
    return recipeList;
  },

  // --------- remove() -------------
  //removes 1 record chosed by id
  async remove(id) {
    //error handling
    if (!id) throw "error - An id must be provided.";
    if (typeof id !== "string")
      throw "error - The argument id must be a string.";
    if (id.trim().length === 0)
      throw "error-  Id cannot be just spaces or an empty string.";
    id = id.trim();
    if (!ObjectId.isValid(id)) throw "error -  please use a valid id.";
    const recipeCollection = await recipes();
    //deleteOne function used to delete recipe
    const deleteRecipeInfo = await recipeCollection.deleteOne({
      _id: ObjectId(id),
    });
    if (deleteRecipeInfo.deletedCount === 0) {
      throw `error - Could not delete recipe with id of ${id}`;
    }
    return { deleted: true }; //output when successfully deleted record in the db
  },

  //------------update() ----------------
  //update still questionable - need to circle back on this
  async update(id, updatedRecipe) {
    let updatedRecipeInfo = {
      // returning nulls for title, ingredients, and steps when I post -  how to fix?
      title: updatedRecipe.title,
      ingredients: updatedRecipe.ingredients,
      steps: updatedRecipe.steps,
    };
    const recipeCollection = await recipes();
    const updateInfo = await recipeCollection.updateOne(
      { _id: ObjectId(id) },
      { $set: updatedRecipeInfo }
    );
    const recipe_Collection = await recipes();
    await recipe_Collection.updateMany(
      //updateMany function? added from professor github code.. circle back and check correct functionality
      { _id: ObjectId(id) },
      {
        $set: {
          "recipes.name": `${updatedRecipe.title} ${updatedRecipe.ingredients} ${updatedRecipe.steps}`,
        },
      }
    );
    return await this.get(id);
  },
};

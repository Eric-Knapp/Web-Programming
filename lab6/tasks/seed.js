const dbConnection = require("../config/mongoConnection");
const data = require("../data/");
const recipes = data.recipes;

async function main() {
  const db = await dbConnection.dbConnection();
  await db.dropDatabase();

  const newRecipe = await recipes.createRecipe(
    "Mac and Cheese",
    "Milk, butter, cheese, macaroni",
    "boil water, put in pasta, mix with milk cheese and buttter"
  );

  const newRecipe2 = await recipes.createRecipe(
    "Mac and Cheese 3 ",
    "Milk, butter, cheese, macaroni 3",
    "boil water, put in pasta, mix with milk cheese and buttter 3"
  );

  // try {
  //   const recipe1 = await recipes.get(newRecipe2._id.toString());
  //   console.log(recipe1);
  // } catch (e) {
  //   console.log(e);
  // }

  try {
    const renamed = await recipes.update(
      newRecipe2._id.toString(),
      "changed title"
    );
    console.log(renamed);
  } catch (e) {
    console.log(e);
  }

  // try {
  //   const allRecipes = await recipes.getAll();
  //   console.log(allRecipes);
  // } catch (e) {
  //   console.log(e);
  // }

  await dbConnection.closeConnection();
}
console.log("done seeding the DB");

main();

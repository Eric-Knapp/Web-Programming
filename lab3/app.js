const work = require("./work");
const weather = require("./weather");
const people = require("./people");

async function main() {
  //   console.log(await getData.getWork());
  //   console.log(await getData1.getWeather());
  //   console.log(await getData2.getPeople());
  //---------------------------------------------------------------------------------------------- getPersonByID()
  console.log(" ");
  console.log(
    "Testing getPersonByID() ------------------------------------------------------------------------\n"
  );
  console.log(await people.getPersonById(112));
  console.log(await people.getPersonById(2));
  console.log(await people.getPersonById(22));
  console.log(await people.getPersonById(43)); // Returns: "Brew Peat"
  console.log(" ");
  //Error Handling Tests
  console.log("ERROR HANDLING TESTS: \n");
  try {
    console.log(await people.getPersonById("dog"));
  } catch (error) {
    console.log(error);
  }
  try {
    console.log(await people.getPersonById());
  } catch (error) {
    console.log(error);
  }
  try {
    console.log(await people.getPersonById(1000));
  } catch (error) {
    console.log(error);
  }
  try {
    console.log(await people.getPersonById(-1));
  } catch (error) {
    console.log(error);
  }

  console.log(" ");
  /*
  await getPersonById(43) \\ Returns: "Brew Peat"
  await getPersonById(-1) \\ Throws Error
  await getPersonById(1000) \\ Throws Error
  await getPersonById() \\ Throws Error
  */
  //-------------------------------------------------------------------------------------------------- LexIndex()
  console.log(
    "Testing lexIndex() ------------------------------------------------------------------------\n"
  );
  console.log(await people.lexIndex(2));
  console.log(" ");
  //error handling tests
  console.log("ERROR HANDLING TESTS: \n");
  try {
    console.log(await people.lexIndex("dog"));
  } catch (error) {
    console.log(error);
  }
  try {
    console.log(await people.lexIndex());
  } catch (error) {
    console.log(error);
  }
  try {
    console.log(await people.lexIndex(1000));
  } catch (error) {
    console.log(error);
  }
  try {
    console.log(await people.lexIndex(-1));
  } catch (error) {
    console.log(error);
  }
  /*
  await lexIndex(2); // Returns: "Dermot Abberley"
  await lexIndex(-1); // Throws Error
  await lexIndex(1000); // Throws Error
  await lexIndex(); // Throws Error
  */
  //----------------------------------------------------------------------------- firstNameMetrics()
  console.log(" ");
  console.log(
    "Testing firstNameMetrics() ------------------------------------------------------------------------\n"
  );
  console.log(await people.firstNameMetrics());

  //----------------------------------------------------------------------------- shouldTheyGoOutside()
  console.log(" ");
  console.log(
    "Testing shouldTheyGoOutside() ------------------------------------------------------------------------\n"
  );
  console.log(await weather.shouldTheyGoOutside("Alden", "Whittock"));
  console.log(await weather.shouldTheyGoOutside("Wilfred", "Eminson"));
  console.log(await weather.shouldTheyGoOutside("Gene", "Leeuwerink"));
  console.log(await weather.shouldTheyGoOutside("Scotty", "Barajaz")); // Returns "Yes, Scotty should go outside."
  console.log(await weather.shouldTheyGoOutside("Calli", "Ondrasek"));
  console.log(" "); // Returns "No, Calli should not go outside."
  //Error handling
  console.log("ERROR HANDLING TESTS: \n");
  try {
    console.log(await weather.shouldTheyGoOutside()); // Throws Error
  } catch (error) {
    console.log(error);
  }
  try {
    console.log(await weather.shouldTheyGoOutside("Bob")); // Throws Error
  } catch (error) {
    console.log(error);
  }
  try {
    console.log(await weather.shouldTheyGoOutside("Bob", "Smith")); // Throws Error
  } catch (error) {
    console.log(error);
  }

  // ------------------------------------------------------------------------------ whereDoTheyWork()
  console.log(" ");
  console.log(
    "Testing whereDoTheyWork() ------------------------------------------------------------------------\n"
  );
  console.log(await work.whereDoTheyWork("Alden", "Whittock"));
  console.log(await work.whereDoTheyWork("Demetra", "Durrand")); // Returns: "Demetra Durrand - Nuclear Power Engineer at Buzzshare. They will be fired."
  console.log(await work.whereDoTheyWork("Hank", "Tarling")); // Returns: "Hank Tarling - Technical Writer at Babbleblab. They will not be fired."
  console.log(" ");
  //Error handling
  console.log("ERROR HANDLING TESTS: \n");

  try {
    console.log(await work.whereDoTheyWork()); // Throws Error
  } catch (error) {
    console.log(error);
  }

  try {
    console.log(await work.whereDoTheyWork("Bob")); // Throws Error
  } catch (error) {
    console.log(error);
  }
  try {
    console.log(await work.whereDoTheyWork("Bob", "Smith")); // Throws Error
  } catch (error) {
    console.log(error);
  }

  /*
  whereDoTheyWork("Demetra", "Durrand") // Returns: "Demetra Durrand - Nuclear Power Engineer at Buzzshare. They will be fired."
  whereDoTheyWork("Hank", "Tarling") // Returns: "Hank Tarling - Technical Writer at Babbleblab. They will not be fired."
  whereDoTheyWork() // Throws Error
  whereDoTheyWork("Bob") // Throws Error
  whereDoTheyWork("Bob", "Smith") // Throws Error
  */
  // ------------------------------------------------------------------------------ findTheHacker()
  console.log(" ");
  console.log(
    "Testing findTheHacker() ------------------------------------------------------------------------\n"
  );
  console.log(await work.findTheHacker("79.222.167.180")); // Returns: "Robert Herley is the hacker!"
  console.log("");
  //error handling
  console.log("ERROR HANDLING TESTS: \n");
  /*
  findTheHacker("foobar") // Throws Error
  findTheHacker() // Throws Error
  */
  try {
    console.log(await work.findTheHacker("foobar"));
  } catch (error) {
    console.log(error);
  }
  try {
    console.log(await work.findTheHacker());
  } catch (error) {
    console.log(error);
  }
}

main();

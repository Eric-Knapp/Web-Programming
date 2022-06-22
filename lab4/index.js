const connection = require("./config/mongoConnection");
const bands = require("./data/bands");

// Index.js steps/directions:
// 1. Create a band of your choice.
// 2. Log the newly created band. (Just that band, not all bands)
// 3. Create another band of your choice.
// 4. Query all bands, and log them all
// 5. Create the 3rd band of your choice.
// 6.  Log the newly created 3rd band. (Just that band, not all bands)
// 7. Rename the first band
// 8. Log the first band with the updated name.
// 9. Remove the second band you created.
// 10. Query all bands, and log them all
// 11. Try to create a band with bad input parameters to make sure it throws errors.
// 12. Try to remove a band that does not exist to make sure it throws errors.
// 13.  Try to rename a band that does not exist to make sure it throws errors.
// 14. Try to rename a band passing in invalid data for the newName parameter to make sure it throws errors.
// 15. Try getting a band by ID that does not exist to make sure it throws errors.

async function main() {
  const db = await connection.dbConnection();
  // remove all data in mongoDB if needed:
  await db.dropDatabase();

  console.log();
  console.log(
    "**************************   1. Create a band of your choice. ******************************** \n"
  );

  try {
    ledZeppelin = await bands.create(
      "Led Zeppelin",
      ["Progressive Rock", "Psychedelic rock", "Classic Rock"],
      "http://www.lettheledout.com",
      "record company",
      ["Led", "Led1", "Led2", "Led3", "Led4"],
      1962
    );
    console.log(ledZeppelin);
  } catch (e) {
    console.log(e);
  }

  console.log();
  console.log(
    "**************************  2. Log the newly created band. (Just that band, not all bands) ******************************** \n"
  );

  try {
    const band = await bands.get(ledZeppelin._id.toString());
    console.log(band);
  } catch (e) {
    console.log(e);
  }

  console.log();
  console.log(
    "**************************  3. Create another band of your choice. ******************************** \n"
  );

  try {
    pinkFloyd = await bands.create(
      "Pink Floyd",
      ["Progressive Rock", "Psychedelic rock", "Classic Rock"],
      "http://www.pinkfloyd.com",
      "EMI",
      [
        "Roger Waters",
        "David Gilmour",
        "Nick Mason",
        "Richard Wright",
        "Sid Barrett",
      ],
      1965
    );
    console.log(pinkFloyd);
  } catch (e) {
    console.log(e);
  }

  console.log();
  console.log(
    "**************************  4. Query all bands, and log them all ******************************** \n"
  );

  try {
    const allBands = await bands.getAll();
    console.log(allBands);
  } catch (e) {
    console.log(e);
  }

  console.log();
  console.log(
    "************************** 5. Create the 3rd band of your choice. ******************************** \n" //works fine
  );

  try {
    gratefulDead = await bands.create(
      "Grateful Dead",
      ["Progressive Rock", "Psychedelic rock", "Classic Rock"],
      "http://www.gratefuldead.com",
      "EMI",
      [
        "Jerry Garcia",
        "Jerry Garcia1",
        "Jerry Garcia2",
        "Jerry Garcia3",
        "Jerry Garcia3",
      ],
      1965
    );
    console.log(gratefulDead);
  } catch (e) {
    console.log(e);
  }

  console.log();
  console.log(
    "************************** 6. Log the newly created 3rd band. (Just that band, not all bands) ******************************** \n" //works fine
  );

  try {
    const band = await bands.get(gratefulDead._id.toString());
    console.log(band);
  } catch (e) {
    console.log(e);
  }

  console.log();
  console.log(
    "************************** 7. Rename the first band ******************************** \n" //works fine
  );

  try {
    const renamed = await bands.rename(
      ledZeppelin._id.toString(),
      "Not Led Zeppelin" // rename led zeppelin to Not led zeppelin
    );
    console.log(renamed);
  } catch (e) {
    console.log(e);
  }

  console.log();
  console.log(
    "**************************  8. Log the first band with the updated name. ******************************** \n" //works fine
  );

  try {
    const band = await bands.get(ledZeppelin._id.toString());
    console.log(band);
  } catch (e) {
    console.log(e);
  }

  console.log();
  console.log(
    "************************** 9. Remove the second band you created. ******************************** \n" //works fine
  );

  try {
    const byePF = await bands.remove(pinkFloyd._id.toString());
    console.log(byePF);
  } catch (e) {
    console.log(e);
  }

  console.log();
  console.log(
    "************************** 10. Query all bands, and log them all ******************************** \n" //works fine
  );

  try {
    const allBands = await bands.getAll();
    console.log(allBands);
  } catch (e) {
    console.log(e);
  }

  //ERROR HANDLING NEGATIVE TESTING

  console.log();
  console.log(
    "************************** 11. Try to create a band with bad input parameters to make sure it throws errors. ******************************** \n" //works fine
  );

  try {
    failBand = await bands.create(
      " name of band",
      ["Progressive Rock", "Psychedelic rock", "Classic Rock"],
      "http://www.lettheledout.com",
      "record company",
      ["Led", "Led1", "Led2", "Led3", "Led4"],
      1800
    );
    console.log(failBand);
  } catch (e) {
    console.log(e);
  }

  console.log();
  console.log(
    "************************** 12. Try to remove a band that does not exist to make sure it throws errors. ******************************** \n" //works fine
  );

  try {
    const byePF = await bands.remove("sadfsda");
    console.log(byePF);
  } catch (e) {
    console.log(e);
  }

  console.log();
  console.log(
    "************************** 13. Try to rename a band that does not exist to make sure it throws errors. ******************************** \n" //works fine
  );

  try {
    const renamedError = await bands.rename(
      "asdfsasdf",
      "babsled drama" // rename led zeppelin to Not led zeppelin
    );
    console.log(renamedError);
  } catch (e) {
    console.log(e);
  }

  console.log();
  console.log(
    "************************** 14. Try to rename a band passing in invalid data for the newName parameter to make sure it throws errors. ****************************** \n" //works fine
  );

  try {
    const renamed = await bands.rename(ledZeppelin._id.toString(), 3);
    console.log(renamed);
  } catch (e) {
    console.log(e);
  }

  console.log();
  console.log(
    "************************** 15. Try getting a band by ID that does not exist to make sure it throws errors. **************************** \n" //works fine
  );

  try {
    const band = await bands.get("nonExistentBand");
    console.log(band);
  } catch (e) {
    console.log(e);
  }

  console.log();
  //close db connection
  await connection.closeConnection();
  console.log("Done!");
}

main();

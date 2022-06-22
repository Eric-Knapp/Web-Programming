const mongoCollections = require("../config/mongoCollections");
const bands = mongoCollections.bands;
const { ObjectId } = require("mongodb");

module.exports = {
  // This is a fun new syntax that was brought forth in ES6, where we can define
  // methods on an object with this shorthand!

  //create function - creates band record within mongoDB
  async create(name, genre, website, recordLabel, bandMembers, yearFormed) {
    // error handling - making sure there are entered arguments
    // If name, genre, website, recordLabel, bandMembers, yearFormed are not provided at all, the method should throw.
    if (!name) throw "error  - need a name";
    if (!genre) throw "error  - need a genre";
    if (!website) throw "error  - need a website";
    if (!recordLabel) throw "error  - need a record label";
    if (!bandMembers) throw "error  - need a band member";
    if (!yearFormed) throw "error  - need a year formed";

    if (!website.includes("http://www."))
      // If name, website, recordLabel are not strings or are empty strings, the method should throw.
      throw "website needs to include http://www.";
    if (!website.includes(".com")) throw "website needs to include .com";

    if (!Array.isArray(genre)) throw "You must provide an array genre";
    if (!Array.isArray(bandMembers)) throw "You must provide an array genre";

    if (genre.length === 0) throw "genre is empty";
    if (bandMembers.length === 0) throw "band members is empty";

    if (typeof name !== "string") throw "name must be a string";
    if (typeof website !== "string") throw "website must be a string";
    if (typeof recordLabel !== "string") throw "record label must be a string";

    if (name.trim().length === 0)
      throw "name cannot be an empty string or just spaces";
    if (website.trim().length === 0)
      throw "website cannot be an empty string or just spaces";
    if (recordLabel.trim().length === 0)
      throw "record label cannot be an empty string or just spaces";

    if (yearFormed < 1900 || yearFormed > 2022)
      throw "year cannot be less than 1900 or greater than 2022";

    if (typeof yearFormed !== "number") throw "year formed must be a number";

    const bandCollection = await bands();

    let newBand = {
      name: name,
      genre: genre,
      website: website,
      recordLabel: recordLabel,
      bandMembers: bandMembers,
      yearFormed: yearFormed,
    };

    const newInsert = await bandCollection.insertOne(newBand);
    const newId = newInsert.insertedId.toString();

    const band = await this.get(newId);
    return band;
  },

  //get function - gets bang by id in mongoDB
  async get(id) {
    if (!id) throw "error  - need a proper id";
    if (id.trim().length === 0)
      throw "Id cannot be an empty string or just spaces";
    if (!ObjectId.isValid(id)) throw "invalid object ID";
    if (typeof id !== "string") throw "id must be a string";

    const bandCollection = await bands();
    const bandd = await bandCollection.findOne({ _id: ObjectId(id) });
    if (bandd == null) throw "cannot find band";

    return bandd;
  },

  //getall function - gets all bands in mongoDB
  async getAll() {
    const bandCollection = await bands();
    const list_Artists = await bandCollection.find({}).toArray();
    if (!list_Artists) throw "Could not get all Artists";

    return list_Artists;
  },

  //remove function - removes band from mongoDB
  async remove(id) {
    if (!id) throw "error  - need a proper id";
    if (typeof id !== "string") throw "id must be a string";
    if (id.trim().length === 0) throw "Id must not be an empty string";
    if (!ObjectId.isValid(id)) throw "invalid object ID, please put valid id";

    const bandCollection = await bands();
    const deleteBandInfo = bandCollection.deleteOne({ _id: ObjectId(id) });

    if (deleteBandInfo.deletedCount === 0) throw "${id} was not deleted";

    return { deleted: true };
  },

  //rename function - renames band in mongoDB
  async rename(id, newName) {
    const bandCollection = await bands();

    if (!id) throw "error  - need a proper id";
    if (typeof id !== "string") throw "id must be a string";
    if (!newName) throw "error  - need a newName";
    if (typeof newName !== "string") throw "id must be a string";
    if (id.trim().length === 0)
      throw "Id cannot be an empty string or just spaces";
    if (newName.trim().length === 0)
      throw "newName cannot be an empty string or just spaces";
    if (!ObjectId.isValid(id)) throw "invalid object ID, please put valid one";

    const modifiedArtist = {
      id: id,
      name: newName,
    };

    const updatedInfo = await bandCollection.updateOne(
      { _id: ObjectId(id) },
      { $set: modifiedArtist }
    );

    return await this.get(id);
  },
};

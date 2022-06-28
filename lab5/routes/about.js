const exp = require("express");
const exp_router = exp.Router();

//aboutME function with details about me (including school and work)
const aboutMe = {
  name: "Eric Knapp",
  cwid: "10473686",
  biography:
    "Hello, My name is Eric Knapp. I am a CS Master's student at Stevens Institute of Technology. Prior to attending Stevens, I attended my undergrad at Rutgers University. I studied Information Technology at Rutgers, where I finished up graduation in the year of 2017. \n Upon graduation, I went to work as a programmer for a year at a market research company. The following year, I left to go work at a medical device company as a Data Analyst. I spend three years doing that, until I left to become a consultant at KPMG. I have been working at KPMG for a year and look forward to switching jobs after graduation to become a software engineer somewhere in industry. ",
  favoriteShows: [
    "Yellowstone",
    "The Office",
    "Entourage",
    "Silicon Valley",
    "Ozark",
    "Breaking Bad",
  ],
  hobbies: ["Golf", "Snowboarding", "Traveling", "Going out with friends"],
};

//get request for aboutMe
exp_router.get("/", async (req, res) => {
  res.json(aboutMe);
});

//exporting exp_router
module.exports = exp_router;

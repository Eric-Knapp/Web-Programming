const exp = require("express");
const exp_router = exp.Router();

// Implementing story page
const longStory = {
  storyTitle: "Good Will Hunting",
  story:
    "At Harvard University, a renown Ivy league school, There was a janiter working there cleaning the school after hours when classes would be finished. The professor would leave hard problems on the baord at the end of class where students of the classes would have an extrememly hard time figuring out the answers to the problems. The Janitor named Will Hunting, would walk by and quickly and secretely write out the answers to the problems. The next day when the professor and students would join class, everyone including the professor was amazed with his work and how Will was able to solve the problems. He kept solving these problems left on the boards within the school until he was caught by one of the professors. He worked with one of the professors for a bit, as well as going to a psychiatrist to help with his problems. He was dating a girl at the school where he worked too. He also worked as a construction worker with his cousin, until one day his cousin came to pick him up in the morning to go to work and he was gone. He left to go to california to see about a girl and take a new job and build a new life. I don't remember every detail to the movie as it has been a very long time, but you get the idea of it. If you have not seen this movie, it is a good one and I recommend. ",
};

// get request for longStory
exp_router.get("/", async (req, res) => {
  res.json(longStory);
});

//exporting function
module.exports = exp_router;

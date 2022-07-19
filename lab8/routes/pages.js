const express = require("express");
const axios = require("axios");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    res.render("pages/showFinder", { title: "Show Finder" });
  } catch (e) {
    res.status(400).json({ error: "show finder not found" });
  }
});

router.post("/search", async (req, res) => {
  if (!req.body) {
    res.status(400).render("pages/errorFile");
    return;
  }
  const { searchTerm } = req.body;
  if (searchTerm.trim().length === 0) {
    res.status(400).render("pages/errorFile");
    return;
  }
  try {
    const { data } = await axios.get(
      `http://api.tvmaze.com/search/shows?q=${searchTerm}`
    );
    data.slice(0, 20);
    res.render("pages/showsFound", {
      title: "Shows Found",
      showAmount: data.length !== 0,
      shows: data,
      searchTerm: searchTerm,
    });
  } catch (e) {
    res.sendStatus(500);
  }
});

router.get("/shows/:id", async (req, res) => {
  try {
    const { id } = req.params;

    if (isNaN(id)) {
      res.status(404).render("pages/errorFile");
    }
    if (!Number.isInteger(parseFloat(id)) || parseFloat(id) < 0) {
      res.status(404).render("pages/errorFile");
    }

    const { data } = await axios.get(`http://api.tvmaze.com/shows/${id}`);
    data.summary = data.summary.replace(/(<([^>]+)>)/gi, "");

    res.render("pages/showFound", { title: data.name, show: data });
  } catch (e) {
    res.sendStatus(500);
  }
});

module.exports = router;

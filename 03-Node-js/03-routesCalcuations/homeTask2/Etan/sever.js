const express = require("express");
const res = require('express/lib/response');
const app = express();
const port = process.env.PORT || 3000;
app.use(express.static("public"));

//diagram: https://drive.google.com/file/d/1HVkokuPUKtb7wZC9RTWwZuB4tG_tXpYj/view?usp=sharing
const articles = [
  {
    title: "A repeating fast radio burst source in a globular cluster",
    text: "The fast radio burst FRB 20200120E is shown to originate from a globular cluster in the galaxy M81, and may be a collapsed white dwarf or a merged compact binary star system.",
    link: "https://www.nature.com/articles/s41586-021-04354-w",
  },
  {
    title: "French nuclear regulator halts assembly of huge fusion reactor",
    text: "ITER must satisfy safety concerns before welding reactor vessel",
    link: "https://www.science.org/content/article/french-nuclear-regulator-halts-assembly-huge-fusion-reactor",
  },
  {
    title: "WHO says Omicron subvariant is not more virulent",
    text: "Real-world data on severity of COVID-19 cases from countries where BA.2 has surged are reassuring",
    link: "https://www.science.org/content/article/who-says-omicron-subvariant-not-more-virulent",
  },
  {
    title: "Articles | Frontiers",
    text: "All 299611 Frontiers' articles are peer-reviewed around themes of cutting-edge research published in highly cited open-access journals.",
    link: "https://www.frontiersin.org/articles?domain=all",
  },
  {
    title: "HTML Color Picker - W3Schools",
    text: "HTML Color Picker. ❮ Previous Next ❯. Pick a Color: colormap. Or Enter a Color: OK. Wrong Input. Or Use HTML5: Selected Color: Black Text Shadow",
    link: "https://www.w3schools.com/colors/colors_picker.asp",
  },
  {
    title: "60 Best Easy Dinners | The Modern Proper",
    text: "We've rounded up our 60 best, easy dinner recipes! From grilled steak to braised chickpeas to allll the sheet pan dinners—we've got you covered.",
    link: "https://themodernproper.com/60-best-easy-dinners",
  },
  {
    title: "Google Doodles",
    text: "Calling all US K-12 students: The US Doodle for Google contest is now open! Feb 25, 2022. Kuwait National Day 2022 · Estonia Independence Day 2022.",
    link: "https://www.google.com/doodles",
  },
];
app.get("/get-articles", (req, res) => {
  const searchTerm = req.query.searchTerm;

  res.send(articles);
});
app.listen(port, () => {
  console.log(`server listen on port`, port);
});

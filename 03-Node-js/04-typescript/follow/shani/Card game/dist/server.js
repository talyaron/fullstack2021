"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
const port = process.env.PORT || 3000;
app.use(express_1.default.json());
app.use(express_1.default.static("public"));
const cards = [
    { name: "Harry Potter", imgUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d7/Harry_Potter_character_poster.jpg/220px-Harry_Potter_character_poster.jpg" },
    { name: "Harry Potter", imgUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d7/Harry_Potter_character_poster.jpg/220px-Harry_Potter_character_poster.jpg" },
    { name: "Hermione Granger", imgUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Hermione_Granger_poster.jpg/220px-Hermione_Granger_poster.jpg" },
    { name: "Hermione Granger", imgUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Hermione_Granger_poster.jpg/220px-Hermione_Granger_poster.jpg" },
    { name: "Ron Weasley", imgUrl: "https://c.tenor.com/SEqy2-RaIxcAAAAC/harry-potter-chocolate-frog-card.gif" },
    { name: "Ron Weasley", imgUrl: "https://c.tenor.com/SEqy2-RaIxcAAAAC/harry-potter-chocolate-frog-card.gif" },
    { name: "Severus Snape", imgUrl: "https://thumbs.gfycat.com/HatefulConsiderateGreatwhiteshark-max-1mb.gif" },
    { name: "Severus Snape", imgUrl: "https://thumbs.gfycat.com/HatefulConsiderateGreatwhiteshark-max-1mb.gif" },
    { name: "Albus Dumbledore", imgUrl: "https://i.pinimg.com/474x/da/b3/d1/dab3d1f464ee0488f6b765af61d3c65f--albus-perkamentus-harry-potter-albus-dumbledore.jpg" },
    { name: "Albus Dumbledore", imgUrl: "https://i.pinimg.com/474x/da/b3/d1/dab3d1f464ee0488f6b765af61d3c65f--albus-perkamentus-harry-potter-albus-dumbledore.jpg" },
    { name: "Dobby", imgUrl: "https://i.pinimg.com/originals/fb/1e/f5/fb1ef50d144e10869844fe4eecff7395.jpg" },
    { name: "Dobby", imgUrl: "https://i.pinimg.com/originals/fb/1e/f5/fb1ef50d144e10869844fe4eecff7395.jpg" },
    { name: "Rubeus Hagrid", imgUrl: "https://upload.wikimedia.org/wikipedia/en/1/10/RubeusHagrid.jpg" },
    { name: "Rubeus Hagrid", imgUrl: "https://upload.wikimedia.org/wikipedia/en/1/10/RubeusHagrid.jpg" },
    { name: "Lord Voldemort", imgUrl: "https://i.pinimg.com/originals/e9/f4/f0/e9f4f00602aa1c226a0b911033121dbd.png" },
    { name: "Lord Voldemort", imgUrl: "https://i.pinimg.com/originals/e9/f4/f0/e9f4f00602aa1c226a0b911033121dbd.png" }
];
app.get("/new-game", (req, res) => {
    // const shuffleCards = cards => {
    //   for (let i = cards.length - 1; i > 0; i--) {
    //     const j = Math.floor(Math.random() * (i + 1));
    //     const temp = cards[i];
    //     cards[i] =cards[j];
    //     cards[j] = temp;
    //   }
    // }
    res.send(cards);
});
app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});

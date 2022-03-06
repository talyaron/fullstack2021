"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
const port = process.env.PORT || 3000;
app.use(express_1.default.static("public"));
app.use(express_1.default.json());
const cards = [
    { name: 'Porsche', back: 'https://th.bing.com/th/id/OIP.qftlWysRgjXnDy_ZYojpHAHaE8?pid=ImgDet&rs=1', front: 'https://th.bing.com/th?id=OIF.UO%2f4eosGnY88kwe14VwbeQ&pid=ImgDet&rs=1' },
    { name: 'Porsche', back: 'https://th.bing.com/th/id/OIP.qftlWysRgjXnDy_ZYojpHAHaE8?pid=ImgDet&rs=1', front: 'https://th.bing.com/th?id=OIF.UO%2f4eosGnY88kwe14VwbeQ&pid=ImgDet&rs=1' },
    { name: 'McLaren', back: 'https://th.bing.com/th/id/R.76e14ac66e5ea73cb86c4a20a66fbdcc?rik=oMAVxqptagMZ6Q&pid=ImgRaw&r=0', front: 'https://th.bing.com/th?id=OIF.UO%2f4eosGnY88kwe14VwbeQ&pid=ImgDet&rs=1' },
    { name: 'McLaren', back: 'https://th.bing.com/th/id/R.76e14ac66e5ea73cb86c4a20a66fbdcc?rik=oMAVxqptagMZ6Q&pid=ImgRaw&r=0', front: 'https://th.bing.com/th?id=OIF.UO%2f4eosGnY88kwe14VwbeQ&pid=ImgDet&rs=1' },
    { name: 'Bugatti', back: 'https://th.bing.com/th/id/R.950cf2b763d7109afe7034dbe0f63dfa?rik=qJzflVI%2fbQYSjQ&pid=ImgRaw&r=0', front: 'https://th.bing.com/th?id=OIF.UO%2f4eosGnY88kwe14VwbeQ&pid=ImgDet&rs=1' },
    { name: 'Bugatti', back: 'https://th.bing.com/th/id/R.950cf2b763d7109afe7034dbe0f63dfa?rik=qJzflVI%2fbQYSjQ&pid=ImgRaw&r=0', front: 'https://th.bing.com/th?id=OIF.UO%2f4eosGnY88kwe14VwbeQ&pid=ImgDet&rs=1' },
    { name: 'Lamborghini ', back: 'https://th.bing.com/th/id/R.844f571bcd87ff91d3a02906d951a437?rik=CVkCXPRg2i85hA&pid=ImgRaw&r=0', front: 'https://th.bing.com/th?id=OIF.UO%2f4eosGnY88kwe14VwbeQ&pid=ImgDet&rs=1' },
    { name: 'Lamborghini ', back: 'https://th.bing.com/th/id/R.844f571bcd87ff91d3a02906d951a437?rik=CVkCXPRg2i85hA&pid=ImgRaw&r=0', front: 'https://th.bing.com/th?id=OIF.UO%2f4eosGnY88kwe14VwbeQ&pid=ImgDet&rs=1' },
    { name: 'Maserati', back: 'https://th.bing.com/th/id/R.f8c43c48a09267393809c9d93719ce79?rik=%2bi8xS3wTqrO9wA&pid=ImgRaw&r=0', front: 'https://th.bing.com/th?id=OIF.UO%2f4eosGnY88kwe14VwbeQ&pid=ImgDet&rs=1' },
    { name: 'Maserati', back: 'https://th.bing.com/th/id/R.f8c43c48a09267393809c9d93719ce79?rik=%2bi8xS3wTqrO9wA&pid=ImgRaw&r=0', front: 'https://th.bing.com/th?id=OIF.UO%2f4eosGnY88kwe14VwbeQ&pid=ImgDet&rs=1' },
    { name: 'Lykan', back: 'https://th.bing.com/th/id/OIP.YmgJFpZpmmedec6sOIIQrQHaE8?pid=ImgDet&rs=1', front: 'https://th.bing.com/th?id=OIF.UO%2f4eosGnY88kwe14VwbeQ&pid=ImgDet&rs=1' },
    { name: 'Lykan', back: 'https://th.bing.com/th/id/OIP.YmgJFpZpmmedec6sOIIQrQHaE8?pid=ImgDet&rs=1', front: 'https://th.bing.com/th?id=OIF.UO%2f4eosGnY88kwe14VwbeQ&pid=ImgDet&rs=1' },
    { name: 'Mercedes-Benz', back: 'https://th.bing.com/th/id/R.99a4df0800e6036cae3ec8339e6dcfd2?rik=xRGJ1LS7skWMnw&riu=http%3a%2f%2fwww.carsinvasion.com%2fwp-content%2fuploads%2f2014%2f01%2fMercedes-Benz-Fascination-Concept-2008-wallpaper.jpg&ehk=WExaVkeCRRsFEFqX6sQh2X6ED9nyPyh8sh6kQ57%2fK34%3d&risl=&pid=ImgRaw&r=0', front: 'https://th.bing.com/th?id=OIF.UO%2f4eosGnY88kwe14VwbeQ&pid=ImgDet&rs=1' },
    { name: 'Mercedes-Benz', back: 'https://th.bing.com/th/id/R.99a4df0800e6036cae3ec8339e6dcfd2?rik=xRGJ1LS7skWMnw&riu=http%3a%2f%2fwww.carsinvasion.com%2fwp-content%2fuploads%2f2014%2f01%2fMercedes-Benz-Fascination-Concept-2008-wallpaper.jpg&ehk=WExaVkeCRRsFEFqX6sQh2X6ED9nyPyh8sh6kQ57%2fK34%3d&risl=&pid=ImgRaw&r=0', front: 'https://th.bing.com/th?id=OIF.UO%2f4eosGnY88kwe14VwbeQ&pid=ImgDet&rs=1' },
    { name: 'bmw', back: 'https://i0.gmx.at/image/248/32956248,pd=1,f=opengraph/bmw-m5-competition.jpg', front: 'https://th.bing.com/th?id=OIF.UO%2f4eosGnY88kwe14VwbeQ&pid=ImgDet&rs=1' },
    { name: 'bmw', back: 'https://i0.gmx.at/image/248/32956248,pd=1,f=opengraph/bmw-m5-competition.jpg', front: 'https://th.bing.com/th?id=OIF.UO%2f4eosGnY88kwe14VwbeQ&pid=ImgDet&rs=1' },
];
app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.get('/newgame', (req, res) => {
    shuffle(cards);
    res.send(cards);
});
function shuffle(cards) {
    let shuffle = cards.length, temporaryValue, randomIndex;
    while (0 !== shuffle) {
        randomIndex = Math.floor(Math.random() * (shuffle));
        shuffle -= 1;
        temporaryValue = cards[shuffle];
        cards[shuffle] = cards[randomIndex];
        cards[randomIndex] = temporaryValue;
    }
    return shuffle;
}
app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});

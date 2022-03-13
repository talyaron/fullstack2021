import express from 'express';
const app = express();
const port = process.env.PORT || 3000;
app.use(express.static("public"));
app.use(express.json());

let store = [
    {
        title: "Hearts of Iron IV",
        price: 9.99,
        description: "Hearts of Iron IV also known as Hoi4, is a grand strategy computer wargame developed by Paradox Development Studio and published by Paradox Interactive. It was released worldwide on 6 June 2016. It is the sequel to 2009's Hearts of Iron III and the fourth main installment in the Hearts of Iron series.",
        img: "https://upload.wikimedia.org/wikipedia/en/thumb/b/b3/Hearts_of_Iron_IV_packshot.jpg/220px-Hearts_of_Iron_IV_packshot.jpg",
        type: "strategy",
        id: "0str0"
    },
    {
        title: "Crusader Kings III",
        price: 179.99,
        description: "Crusader Kings III is a grand strategy role-playing video game set in the Middle Ages, developed by Paradox Development Studio and published by Paradox Interactive as a sequel to Crusader Kings and Crusader Kings II. ",
        img: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a3/Crusader_Kings_III.jpg/220px-Crusader_Kings_III.jpg",
        type: "strategy",
        id: "1str1"
    },
    {
        title: "XCOM 2",
        price: 189.99,
        description: "XCOM 2 is a 2016 turn-based tactics video game developed by Firaxis Games and published by 2K Games. It is the sequel to 2012's reboot of the series, XCOM: Enemy Unknown; it takes place 20 years after the events of Enemy Unknown. ",
        img: "https://upload.wikimedia.org/wikipedia/en/c/c3/XCOM_2_cover_art.jpg",
        type: "strategy",
        id: "2str2"
    },
    {
        title: "Lost Ark",
        price: 79.99,
        description: "Lost Ark is an isometric 2.5D fantasy massively multiplayer online action role-playing game. It is co-developed by Tripod Studio and Smilegate's game development subsidiary Smilegate RPG. It was fully released in the South Korean region on December 4, 2019.",
        img: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSylObVvIpNu_ftQLq2m5wxKpcmZJCej42XOoaXO-DbA8wEboSp",
        type: "strategy",
        id: "3str3"
    },
    {
        title: "Warhammer III",
        price: 89.99,
        description: "Total War: Warhammer III is a turn-based strategy and real-time tactics video game developed by Creative Assembly and published by Sega. It is part of the Total War series, and the third to be set in Games Workshop's Warhammer Fantasy fictional universe.",
        img: "https://upload.wikimedia.org/wikipedia/en/thumb/2/27/Total_War_Warhammer_3_cover_art.jpg/220px-Total_War_Warhammer_3_cover_art.jpg",
        type: "strategy",
        id: "4str4"
    },
    {
        title: "Counter-Strike",
        price: 19.99,
        description: "Counter-Strike: Global Offensive is a multiplayer first-person shooter developed by Valve and Hidden Path Entertainment. It is the fourth game in the Counter-Strike series. Developed for over two years, Global Offensive was released for Windows, macOS, Xbox 360, and PlayStation 3 in August 2012, and for Linux in 2014.",
        img: "https://s1.gaming-cdn.com/images/products/9459/271x377/counter-strike-global-offensive-pc-mac-game-steam-cover.jpg",
        type: "shooter",
        id: "5sho5"
    },
    {
        title: "Destiny 2",
        price: 39.99,
        description: "Destiny 2 is a free-to-play online-only multiplayer first-person shooter video game developed by Bungie. It was originally released as a pay to play game in 2017 for PlayStation 4, Xbox One, and Microsoft Windows.",
        img: "https://upload.wikimedia.org/wikipedia/en/0/05/Destiny_2_%28artwork%29.jpg",
        type: "shooter",
        id: "6sho6"
    },
    {
        title: "Ready Or Not",
        price: 129.99,
        description: "Ready or Not is a tactical first-person shooter by VOID Interactive. It was released through Steam early access on 17 December 2021. ",
        img: "https://cdn.dlcompare.com/others_jpg/upload/gameimage/file/01e7-ready_or_not.jpeg",
        type: "shooter",
        id: "7sho7"
    },
    {
        title: "Call of Duty: Black Ops III",
        price: 139.99,
        description: "Call of Duty: Black Ops III is a 2015 first-person shooter game developed by Treyarch and published by Activision. It is the twelfth entry in the Call of Duty series and the sequel to the 2012 video game Call of Duty: Black Ops II. It was released on Microsoft Windows, PlayStation 4, and Xbox One on November 6, 2015. ",
        img: "https://upload.wikimedia.org/wikipedia/en/b/b1/Black_Ops_3.jpg",
        type: "shooter",
        id: "8sho8"
    },
    {
        title: "Tom Clancy's Rainbow Six Siege",
        price: 99.99,
        description: "Tom Clancy's Rainbow Six Siege is an online tactical shooter video game developed by Ubisoft Montreal and published by Ubisoft. ",
        img: "https://upload.wikimedia.org/wikipedia/en/4/47/Tom_Clancy%27s_Rainbow_Six_Siege_cover_art.jpg",
        type: "shooter",
        id: "9sho9"
    },
    {
        title: "Team Fortress 2",
        price: 49.99,
        description: "Team Fortress 2 is a multiplayer first-person shooter game developed and published by Valve Corporation. It is the sequel to the 1996 Team Fortress mod for Quake and its 1999 remake, Team Fortress Classic.",
        img: "https://upload.wikimedia.org/wikipedia/he/c/c6/Tf2_standaloneboxHE.jpg",
        type: "rpg",
        id: "10rpg10"
    },
    {
        title: "Sea of Thieves",
        price: 119.99,
        description: "Sea of Thieves is a first-person action-adventure game developed by Rare and published by Microsoft Studios. In the game, players explore an open world via a pirate ship.",
        img: "https://upload.wikimedia.org/wikipedia/en/thumb/7/77/Sea_of_thieves_cover_art.jpg/220px-Sea_of_thieves_cover_art.jpg",
        type: "rpg",
        id: "11rpg11"
    },
    {
        title: "Fallout: New Vegas",
        price: 149.99,
        description: "allout: New Vegas is a 2010 action role-playing game developed by Obsidian Entertainment and published by Bethesda Softworks. It was announced in April 2009 and released for Microsoft Windows, PlayStation 3, and Xbox 360 on October 19, 2010.",
        img: "https://upload.wikimedia.org/wikipedia/en/3/34/Fallout_New_Vegas.jpg",
        type: "rpg",
        id: "12rpg12"
    },
    {
        title: "Dota 2",
        price: 29.99,
        description: "Dota 2 is a multiplayer online battle arena video game developed and published by Valve. The game is a sequel to Defense of the Ancients, which was a community-created mod for Blizzard Entertainment's Warcraft III: Reign of Chaos.",
        img: "https://thumbnails.pcgamingwiki.com/d/db/Dota_2_cover.jpg/300px-Dota_2_cover.jpg",
        type: "rpg",
        id: "13rpg13"
    },
    {
        title: "Grand Theft Auto V",
        price: 59.99,
        description: "Grand Theft Auto V is a 2013 action-adventure game developed by Rockstar North and published by Rockstar Games. It is the seventh main entry in the Grand Theft Auto series, following 2008's Grand Theft Auto IV, and the fifteenth instalment overall.",
        img: "https://upload.wikimedia.org/wikipedia/he/thumb/d/d6/GTA_V_COVER.jpg/800px-GTA_V_COVER.jpg",
        type: "rpg",
        id: "14rpg14"
    },
    {
        title: "Risk of Rain 2",
        price: 69.99,
        description: "Risk of Rain 2 is a roguelike third-person shooter developed by Hopoo Games and published by Gearbox Publishing.",
        img: "https://upload.wikimedia.org/wikipedia/en/c/c1/Risk_of_Rain_2.jpg",
        type: "survival",
        id: "15sur15"
    },
    {
        title: "Rust",
        price: 79.99,
        description: "Rust is a multiplayer-only survival video game developed by Facepunch Studios. Rust was first released in early access in December 2013 and received its full release in February 2018. Rust is available on Microsoft Windows and macOS.",
        img: "https://www.gameinformer.com/sites/default/files/styles/product_box_art/public/2021/04/19/bce7dfa5/rust.jpg",
        type: "survival",
        id: "16sur16"
    },
    {
        title: "Dying Light 2",
        price: 109.99,
        description: "Dying Light 2 Stay Human is a 2022 action role-playing game developed and published by Techland. The sequel to Dying Light, the game was released on February 4, 2022 for Microsoft Windows, PlayStation 4, PlayStation 5, Xbox One, and Xbox Series X/S. A Nintendo Switch version for the cloud is currently in development. ",
        img: "https://s3.gaming-cdn.com/images/products/8921/271x377/dying-light-2-stay-human-deluxe-edition-deluxe-edition-pc-game-steam-cover.jpg",
        type: "survival",
        id: "17sur17"
    },
    {
        title: "DayZ",
        price: 159.99,
        description: "DayZ is a survival video game developed and published by Bohemia Interactive. It is the standalone successor of the mod of the same name for the game ARMA 2.",
        img: "https://s1.gaming-cdn.com/images/products/3393/271x377/dayz-pc-game-steam-europe-cover.jpg",
        type: "survival",
        id: "18sur18"
    },
    {
        title: "GTFO",
        price: 169.99,
        description: "GTFO is a survival horror first-person shooter cooperative game developed by Swedish indie studio 10 Chambers. GTFO had its initial release on December 9, 2019, for Microsoft Windows, on Steam's Early Access to a positive user reception.",
        img: "https://s1.gaming-cdn.com/images/products/4524/271x377/gtfo-pc-game-steam-cover.jpg",
        type: "survival",
        id: "19sur19"
    }
]

app.get("/get-games", (req, res) => {
    res.send(store);
});

app.post("/add-games", (req, res) => {
    const newGameTitle = req.body.title
    const newGamePrice = req.body.price
    const newGameDescription = req.body.description
    const newGameImg = req.body.img
    const newGameType = req.body.type
    const newGameId = req.body.id
    const erpStore = addGames(newGameTitle, newGamePrice, newGameDescription, newGameImg, newGameType, newGameId)
    res.send(erpStore);
});

app.post("/delete-games", (req, res) => {
    const id = req.body.id;
    const erpStore = deleteGames(id)
    res.send(erpStore)
})

app.patch("/update-games", (req, res) => {
    const { title, price, description, img, type, id } = req.body
    const index = store.findIndex((game) => game.id === id);
    if (index > -1) {
        store[index].title = title;
        store[index].price = price;
        store[index].description = description;
        store[index].img = img;
        store[index].type = type;
        store[index].id = id;

        res.send({ ok: true, store })
    };
});




function addGames(title, price, description, img, type, id) {
    store.push({ title, price, description, img, type, id })
    return store
}

function deleteGames(id) {
    store = store.filter(game => game.id !== id)
    return store;
}


app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});
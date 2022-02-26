const express = require('express');
const app = express()
const port = process.env.PORT || 3000;

const articales = [{
        title: "station 19",
        articale: "ABC’s Station 19 Season 5 Episode 9, “Started From the Bottom,” is jam-packed with action. Ben Warren (Jason George) and Robert Sullivan (Boris Kodjoe) head down the side of a mountain to rescue Owen Hunt (Kevin McKidd) from Grey’s Anatomy. Plus, Andy Herrera (Jaina Lee Ortiz) leads the team while the new Fire Chief Natasha Ross watches from the sidelines. Merle Dandridge joins the Station 19 Season 5 cast as the new Fire Chief.",
        year: "2022",
        type: "tv",
        photo:"https://m.media-amazon.com/images/M/MV5BOWY2NDE2NjktNTZkMi00MDNlLTliZTctYzY5OGJkMjYxOTI4XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1000_.jpg"
    },
    {
        title: "grey's anatomy",
        articale: "Grey’s Anatomy Season 18 left fans on a major cliffhanger — literally — when Owen Hunt (Kevin McKidd) fell 100 feet trapped inside of a car. Now, many viewers are wondering whether McKidd will be leaving with his character’s death. So did Owen die in the crash from the Grey’s Anatomy Season 18 winter finale? A new teaser from the winter premiere episode just spoiled Owen’s fate.",
        year: "2022",
        type: "tv",
        photo:"https://m.media-amazon.com/images/M/MV5BODA2Mjk0N2MtNGY0Mi00ZWFjLTkxODEtZDFjNDg4ZDliMGVmXkEyXkFqcGdeQXVyMzAzNTY3MDM@._V1_.jpg"
    },
    {
        title: "leverage",
        articale: "Leverage reinvented the caper genre with a team of crooks dubbed hacker, hitter, grifter, thief, and mastermind. The series aired for five seasons on TNT before being canceled in 2012. But to the delight of fans, the show is returning with most of the original cast. Here’s what we know so far about the reboot.",
        year: "2020",
        type: "tv",
        photo:"https://m.media-amazon.com/images/M/MV5BMmNiNWQzMjctMTU4OS00YWVmLTgzMzgtMmRjMTk3ZTY1MWEwXkEyXkFqcGdeQXVyMTI1NDE3MjE2._V1_.jpg"
    },
    {
        title: "the originals",
        articale: "Debuting on The CW in 2013, The Originals soon became the favorite spinoff cousin of its predecessor, The Vampire Diaries. The show bowed out in 2018 with a tear-jerking finale that sent Klaus and Elijah into the ethers and left Hope Mikaelson an orphan. Fans were as attached to these characters as they were to the ones on TVD, and many have wondered what’s been going with the cast since the show ended. Here’s a peek at what some of them have been up to.",
        year: "2019",
        type: "tv",
        photo:"https://www.tvguide.com/a/img/catalog/provider/1/1/1-6018506677.jpg"
    },
    {
        title: "moon knight",
        articale: "Marvel’s Moon Knight trailer featured a panicked Oscar Isaac as Marc Spector. Marvel fans saw glimpses of pyramids, Egypt, and a strange bird-like figure frantically stalking toward the hero in an elevator. In Moon Knight, Khonshu, the Egyptian god that gives Marc Spector his powers, might stand as the most important character in the Disney+ show. And Marvel hid a first look at the ancient god in three seconds of the Moon Knight trailer.",
        year: "2022",
        type: "movie",
        photo:"https://i.annihil.us/u/prod/marvel/i/mg/e/90/611bd32e9baca/clean.jpg"
    },
    {
        title: "captain marvel",
        articale: "After more than a year without a new Marvel Cinematic Universe theatrical release, fans were delighted to learn of finalized dates and titles for its upcoming Phase 4. Among the projects beginning production is the Captain Marvel sequel. How did the studio land on its new title, The Marvels?",
        year: "2021",
        type: "movie",
        photo:"https://themoviespoiler.com/wp-content/uploads/2019/03/captain_marvel_ver18_xlg.jpg"
    },
    {
        title: "step up",
        articale: "The plan was not to write about how good Step Up is 10 years later, honestly, because the plan was to write about the idea that Step Up was part of an early-aughts wave of urban dance movies, wherein “urban” was a euphemism for “skimming off the surface of black culture to give edge to a movie about white people”. The early 2000s were a weird time in pop culture, when we celebrated a lot of trashy stuff that we would rip apart today: Justin Timberlake’s cornrow/bandana headband combo, the not-so latent homophobia in Superbad, the sexism percolating throughout Knocked Up.",
        year: "2016",
        type: "movie",
        photo:"https://m.media-amazon.com/images/I/61aBkLHlJoL.jpg"
    },
    {
        title: "bring it on",
        articale: "Bring It On shows every evidence of beginning life as a potentially funny, hard-edged, R-rated comedy. There's raunchy language, a half-nude locker room scene, jokes about sex and those startling cheerleader songs. I smiled at the songs; I might have enjoyed the movie if it had developed along the lines of Animal House or American Pie. Instead we get a strange mutant beast, half Nickelodeon movie, half R-rated comedy. It's like kids with potty-mouth playing grownup.",
        year: "2000",
        type: "movie",
        photo:"https://m.media-amazon.com/images/M/MV5BNWRlODA3NjItNWI2MC00NDJmLTg5NmEtMGEzNjZiOGI1ZTRkXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg"
    }
]
app.use(express.static("public"))

app.get("/getArticale", (req, res) => {
    console.log(req.query);
    const search = req.query.search;
    const year = req.query.year
    const type = req.query.type
    // const regex = new RegExp(search, "i");
    console.log(search);
    setTimeout(() => {
        if (search) {

            res.send(articales);


        }if (year) {
            console.log(year);
            // const filterUsers = data.filter((user) => user.year === year)
            // console.log(filterUsers);
            res.send(articales)
        } else if (type) {
            console.log(type);
            // const filters = data.filter((user) => user.type === type)
            // console.log(filters);
            res.send(articales)
        }
         else {
            res.send(articales);
        }
    }, 2000);
})
app.listen(port, () => {
    console.log("server listen on port", port);
})
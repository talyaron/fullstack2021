const express = require('express')
const app = express()
const port = process.env.PORT || 3007

const articels = [
    {
        title: 'Should the West arm a Ukrainian resistance?',
        subject: 'Ukraine Conflict',
        paragraph: "The US and UK have been training Ukrainian troops on how to resist a Russian invasion for years. Now a full-scale invasion is under way, there is a debate over how far to support longer-term resistance."
    },

    {
        title: 'What is Swift and why is banning Russia so significant?',
        subject: 'Ukraine Conflict',
        paragraph: "The European Union, US, UK and allies have agreed to exclude a number of Russian banks from Swift, an international payment system used by thousands of financial institutions."
    },

    {
        title: 'Covid protests: Hundreds fined and dozens arrested as convoy enters Paris',
        subject: 'Coronavirus pandemic',
        paragraph: "Police have intercepted hundreds of vehicles trying to enter Paris as part of a protest against France's coronavirus regulations.Tear gas was fired in the city as demonstrators defied an order banning the Freedom Convoy."
    },

    {
        title: 'Canada protests: After police cleared bridge, is this the end?',
        subject: 'Coronavirus pandemic',
        paragraph: "A police raid has finally put an end to the costly bridge blockade at Windsor, Ontario, with the crossing reopening for traffic on Sunday night after a six-day protest. But with the demonstrations in Ottawa still going strong, is any end in sight for the anti-mandate movement?"
    },

    {
        title: 'Israeli inquiry finds no indication police used spyware unlawfully',
        subject: 'World News',
        paragraph: "An inquiry has found no indications that Israeli police used NSO Group's Pegasus spyware to hack the phones of public figures without authorisation."
    },

    {
        title: 'Nigerian kidnapping kingpin sentenced to life',
        subject: 'World News',
        paragraph: "Nigerian kidnapping kingpin Chukwudimeme Onwuamadike, widely known as Evans, 'has been sentenced to life in prison."
    },

    {
        title: 'Global warming and land use change to drive more extreme wildfires',
        subject: 'Climate',
        paragraph: "Extreme wildfires are set to become more frequent, increasing by around 50% by the end of this century, according to a new UN report."
    },

    {
        title: 'Government climate advisers say cut fossil fuels to lower energy bills',
        subject: 'Climate',
        paragraph: "The best way to ease consumers' pain from high energy prices is to stop using fossil fuels rather than drill for more of them, the government's climate advisers say."
    },

    {
        title: 'NBA: Kyrie Irving leads Brooklyn Nets to win at Milwaukee Bucks',
        subject: 'Basketball',
        paragraph: "Unvaccinated Brooklyn Nets star Kyrie Irving says he is hopeful of turning the page after his season-high 38 points led his team to a 126-123 win at the Milwaukee Bucks."
    },

    {
        title: 'Formula 1 pre-season testing: Why are the cars bouncing, and will racing be closer in 2022?',
        subject: 'Formula 1',
        paragraph: "The first pre-season test of a new era of Formula 1 ended on Friday, and a glance at the timesheets might suggest very little has changed."
    }
]

app.use(express.static('public'));

app.get('/getArticels', (req, res) => {
    const searchTerm = req.query.searchTerm;
    const filterdArticels = filterdArtiels(searchTerm);
    res.send(filterdArticels)
})

app.listen(port, () => { console.log('server listen to port', port) });

function filterdArtiels(searchTerm) {
    const regex = new RegExp(searchTerm, 'i')
    try {
        let filterdArticels = []
        if (searchTerm.length > 0) {
            filterdArticels = articels.filter((article) => article.title.match(regex) || article.subject.match(regex) || article.paragraph.match(regex))
            return filterdArticels;
        } else{
            return '';
        }
            
        } catch (error) {
            console.error(error);
        }
    }
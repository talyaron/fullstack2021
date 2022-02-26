var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

const article = [
    {name: 'p1', content: `1. Adopt a “fixed volume” approach to productivity
    We all need to make tough choices about what we can realistically get done, so that we can prioritize the activities that matter most, instead of reacting to a constant barrage of demands.
    
    One way is to keep two to-do lists — one for everything on your plate, and one for the 10 or fewer things that you’re currently working on. Fill up the 10 slots on the second list with items from the first, then set to work. The rule is not to move any further items from the first list onto the second until you’ve freed up a slot by finishing one of the 10 items.
    
    A related strategy is to set a pre-established time boundary for certain types of daily work — for example, to resolve to write from 8AM to 11AM — and to make sure you stop when time’s up.`},

    {name: 'p2', content: `2. Serialize
    Focus only on one big project at a time. Though it’s alluring to try to alleviate the anxiety of having too many responsibilities or ambitions by getting started on them all at once, you’ll make little progress that way. Multitasking rarely works well — and you’ll soon find that serializing helps you to complete more projects anyway, thereby helping relieve your anxiety.`},

    {name: 'p3', content: `3. Decide in advance what to fail at
    You’ll inevitably underachieve at something, simply because your time and energy are finite. But strategic underachievement — nominating in advance the areas of your life in which you won’t expect excellence — helps you focus your time and energy more effectively.
    
    For example, you might decide in advance that it’s OK to have a cluttered kitchen while you finish your novel, or to do the bare minimum on a particular work project so you can spend more time with your children.
    
    To live this way is to replace the high-pressure quest for work-life balance with something more reasonable — a deliberate kind of imbalance.`},

    {name: 'p4', content: `4. Focus on what you’ve already completed, not just what’s left to do
    Since the quest to get everything done is interminable by definition, it’s easy to grow despondent and self-reproachful when you can’t get through your whole to-do list. One counter-strategy is to keep a “done list,” which starts empty first thing in the morning, but which you can gradually fill in throughout the day as you get things done. It’s a cheering reminder that you could have spent the day doing nothing remotely constructive … yet you didn’t.`},

    {name: `p5`, content: `5. Consolidate your caring
    Social media is a giant machine for getting you to spend your time caring about the wrong things — and too many of them at once. We’re exposed to an unending stream of atrocities and injustices, each of which might have a legitimate claim on our time and our charitable donations, but which add up to something no human could ever effectively address comprehensively.
    
    Once you grasp that fact fully, it’s good to consciously pick your battles in charity, activism, and politics — and devote your spare time only to those specific causes. Focus your capacity for care, so you don’t burn out.`},

    {name: `p6`, content: `6. Embrace boring and single-purpose technology
    Digital distractions allow us to escape to a realm where painful human limitations don’t seem to apply — scrolling idly around online, you need never feel bored or constrained in your freedom of action, which isn’t the case when it comes to doing work that matters.
    
    You can combat this by making your devices as boring as possible, removing social media apps and, if you dare, email. It’s also helpful to choose devices with only one purpose, such as the Kindle reader. Otherwise, temptations will be only a swipe away, and you’ll feel the urge to check your screens anytime you’re bored or facing a challenge in your work.`},

    {name:`p7`, content: `7. Seek out novelty in the mundane
    Time seems to speed up as we age, likely because our brains encode the passage of years based on how much information we process in any given interval. While children have many novel experiences and time therefore seems slower to them, the routinization of older people’s lives means that time seems to pass at an ever-increasing rate.
    
    The standard advice is to combat this by cramming more novel experiences into your life. That can help, but it’s not always practical.
    
    An alternative is to pay more attention to every moment, however mundane — to find novelty by plunging more deeply into your present life. Try going on unplanned walks to see where they lead you, taking up drawing or birdwatching or playing “I Spy” with a child — whatever draws your attention into the moment more fully.`},

    {name:`p8`, content: `8. Be a researcher in relationships
    The desire to feel in control of our limited time causes numerous problems in relationships, resulting not only in controlling behavior, but also commitment-phobia, the inability to listen, boredom, and missing out on the richness of communal experiences with others.
    
    When faced with a challenging or boring moment in a relationship, try being curious about the person you’re with, rather than controlling. Curiosity is a stance well-suited to the inherent unpredictability of life with others, because it can be satisfied by their behaving in ways you like or dislike — whereas if you demand a certain result instead, you’ll often be frustrated.`},


    {name: `p9`, content: `9. Cultivate instantaneous generosity
    Whenever a generous impulse arises in your mind, give in to it right away rather than putting it off. Don’t wait to figure out if the recipient deserves your generosity or if you really have the time to be generous right now (with all of the work you have left to do!). Just do it. The rewards are immediate, too, because generous action reliably makes you feel much happier.`},

    {name:`p10`, content: `10. Practice doing nothing
    When it comes to the challenge of using your 4,000 weeks well, the capacity to do nothing is indispensable, because if you can’t bear the discomfort of not acting, you’re far more likely to make poor choices with your time, such as attempting to hurry activities that can’t be rushed or feeling you ought to spend every moment being “productive,” regardless of whether the tasks in question really matter.
    
    Doing nothing means resisting the urge to manipulate your experience or the people and things in the world around you, and to let things be as they are. You can try the “do-nothing” meditation, where you set a timer for 5-10 minutes and then try doing nothing. If you catch yourself doing something — thinking, say, or even just focusing on your breath — gently let go of doing it.
    
    As you keep letting go, you’ll increase your ability to do nothing and gradually regain your autonomy. You’ll no longer be so motivated by the attempt to evade how reality feels here and now; instead, you’ll learn to calm down and to make better choices with your brief allotment of life.` },
]

app.use(express.static('public')) //connects the public folder 

app.get('/get-article', function (req, res) {

    let filteredArticle = [];

    const regex = new RegExp(req, "i");
    
    filteredArticle = article.forEach(paragraph => {
        if(regex.test(paragraph.content)){
            filteredArticle.push(paragraph)
        }
    })

    res.send(filteredArticle);
});


app.listen(port,()=>{
    return console.log(`Express is listening at http://localhost:${port}`);
});
"use strict";

var express = require('express');

var app = express();
var port = process.env.PORT || 3000;
var article = [{
  name: 'p1',
  content: "1. Adopt a \u201Cfixed volume\u201D approach to productivity\n    We all need to make tough choices about what we can realistically get done, so that we can prioritize the activities that matter most, instead of reacting to a constant barrage of demands.\n    \n    One way is to keep two to-do lists \u2014 one for everything on your plate, and one for the 10 or fewer things that you\u2019re currently working on. Fill up the 10 slots on the second list with items from the first, then set to work. The rule is not to move any further items from the first list onto the second until you\u2019ve freed up a slot by finishing one of the 10 items.\n    \n    A related strategy is to set a pre-established time boundary for certain types of daily work \u2014 for example, to resolve to write from 8AM to 11AM \u2014 and to make sure you stop when time\u2019s up."
}, {
  name: 'p2',
  content: "2. Serialize\n    Focus only on one big project at a time. Though it\u2019s alluring to try to alleviate the anxiety of having too many responsibilities or ambitions by getting started on them all at once, you\u2019ll make little progress that way. Multitasking rarely works well \u2014 and you\u2019ll soon find that serializing helps you to complete more projects anyway, thereby helping relieve your anxiety."
}, {
  name: 'p3',
  content: "3. Decide in advance what to fail at\n    You\u2019ll inevitably underachieve at something, simply because your time and energy are finite. But strategic underachievement \u2014 nominating in advance the areas of your life in which you won\u2019t expect excellence \u2014 helps you focus your time and energy more effectively.\n    \n    For example, you might decide in advance that it\u2019s OK to have a cluttered kitchen while you finish your novel, or to do the bare minimum on a particular work project so you can spend more time with your children.\n    \n    To live this way is to replace the high-pressure quest for work-life balance with something more reasonable \u2014 a deliberate kind of imbalance."
}, {
  name: 'p4',
  content: "4. Focus on what you\u2019ve already completed, not just what\u2019s left to do\n    Since the quest to get everything done is interminable by definition, it\u2019s easy to grow despondent and self-reproachful when you can\u2019t get through your whole to-do list. One counter-strategy is to keep a \u201Cdone list,\u201D which starts empty first thing in the morning, but which you can gradually fill in throughout the day as you get things done. It\u2019s a cheering reminder that you could have spent the day doing nothing remotely constructive \u2026 yet you didn\u2019t."
}, {
  name: "p5",
  content: "5. Consolidate your caring\n    Social media is a giant machine for getting you to spend your time caring about the wrong things \u2014 and too many of them at once. We\u2019re exposed to an unending stream of atrocities and injustices, each of which might have a legitimate claim on our time and our charitable donations, but which add up to something no human could ever effectively address comprehensively.\n    \n    Once you grasp that fact fully, it\u2019s good to consciously pick your battles in charity, activism, and politics \u2014 and devote your spare time only to those specific causes. Focus your capacity for care, so you don\u2019t burn out."
}, {
  name: "p6",
  content: "6. Embrace boring and single-purpose technology\n    Digital distractions allow us to escape to a realm where painful human limitations don\u2019t seem to apply \u2014 scrolling idly around online, you need never feel bored or constrained in your freedom of action, which isn\u2019t the case when it comes to doing work that matters.\n    \n    You can combat this by making your devices as boring as possible, removing social media apps and, if you dare, email. It\u2019s also helpful to choose devices with only one purpose, such as the Kindle reader. Otherwise, temptations will be only a swipe away, and you\u2019ll feel the urge to check your screens anytime you\u2019re bored or facing a challenge in your work."
}, {
  name: "p7",
  content: "7. Seek out novelty in the mundane\n    Time seems to speed up as we age, likely because our brains encode the passage of years based on how much information we process in any given interval. While children have many novel experiences and time therefore seems slower to them, the routinization of older people\u2019s lives means that time seems to pass at an ever-increasing rate.\n    \n    The standard advice is to combat this by cramming more novel experiences into your life. That can help, but it\u2019s not always practical.\n    \n    An alternative is to pay more attention to every moment, however mundane \u2014 to find novelty by plunging more deeply into your present life. Try going on unplanned walks to see where they lead you, taking up drawing or birdwatching or playing \u201CI Spy\u201D with a child \u2014 whatever draws your attention into the moment more fully."
}, {
  name: "p8",
  content: "8. Be a researcher in relationships\n    The desire to feel in control of our limited time causes numerous problems in relationships, resulting not only in controlling behavior, but also commitment-phobia, the inability to listen, boredom, and missing out on the richness of communal experiences with others.\n    \n    When faced with a challenging or boring moment in a relationship, try being curious about the person you\u2019re with, rather than controlling. Curiosity is a stance well-suited to the inherent unpredictability of life with others, because it can be satisfied by their behaving in ways you like or dislike \u2014 whereas if you demand a certain result instead, you\u2019ll often be frustrated."
}, {
  name: "p9",
  content: "9. Cultivate instantaneous generosity\n    Whenever a generous impulse arises in your mind, give in to it right away rather than putting it off. Don\u2019t wait to figure out if the recipient deserves your generosity or if you really have the time to be generous right now (with all of the work you have left to do!). Just do it. The rewards are immediate, too, because generous action reliably makes you feel much happier."
}, {
  name: "p10",
  content: "10. Practice doing nothing\n    When it comes to the challenge of using your 4,000 weeks well, the capacity to do nothing is indispensable, because if you can\u2019t bear the discomfort of not acting, you\u2019re far more likely to make poor choices with your time, such as attempting to hurry activities that can\u2019t be rushed or feeling you ought to spend every moment being \u201Cproductive,\u201D regardless of whether the tasks in question really matter.\n    \n    Doing nothing means resisting the urge to manipulate your experience or the people and things in the world around you, and to let things be as they are. You can try the \u201Cdo-nothing\u201D meditation, where you set a timer for 5-10 minutes and then try doing nothing. If you catch yourself doing something \u2014 thinking, say, or even just focusing on your breath \u2014 gently let go of doing it.\n    \n    As you keep letting go, you\u2019ll increase your ability to do nothing and gradually regain your autonomy. You\u2019ll no longer be so motivated by the attempt to evade how reality feels here and now; instead, you\u2019ll learn to calm down and to make better choices with your brief allotment of life."
}];
app.use(express["static"]('public')); //connects the public folder 

app.get('/get-article', function (req, res) {
  var html = "";

  if (searchTerm == 0) {
    root.innerHTML = html;
    return;
  }

  res.send(photos);
});
app.listen(port, function () {
  return console.log("Express is listening at http://localhost:".concat(port));
});
"use strict";

var express = require("express");

var app = express();
var port = 3000;
app.use(express["static"]("public"));
var articles = [{
  title: 'Review: 7iDP Project 23 Carbon Helmet',
  URL: 'https://www.pinkbike.com/news/thomus-maxon-launches-2022-xc-race-team-with-mathias-flueckiger-alessandra-keller-and-more.html',
  text: 'The Project 23 Carbon sits at the very top of 7iDPs collection, a collection that not only includes helmets but also pretty much another other protective mountain bike wear you can think of. The helmet was built to be reasonably light, but places ventilation highest in its priorities. The design ethos seems to be about making something safe enough, whatever that weight is, and then making it as vented and comfortable as possible. I recently wrote an article about how I mistrust some enduro full-face helmets. In that, I argue that there are some far better executions than others, but I want my helmet to focus on protection primarily, with ventilation a distant second and that I would rather have something a bit heavier than something that feels light but unsubstantial. I would say the Project 23 Carbon manages to balance these priorities well. There is no flexing chin bar or gawky looks. Its a full-face helmet for riding mountain bikes that you just so happened to have pedaled to the top, not a helmet that is so concerned with being great for pedaling that it forgets to offer the protection that would have you reaching for a full-face in the first place. 7iDP says that this helmet was developed over a two-year period and was heavily influenced by EWS racers explaining how they wanted the compromise of weight and ventilation to lie. The result is a hardshell helmet that places an emphasis on airflow.'
}, {
  title: 'Thömus Maxon Launches 2022 XC Race Team',
  URL: 'https://www.pinkbike.com/news/thomus-maxon-launches-2022-xc-race-team-with-mathias-flueckiger-alessandra-keller-and-more.html',
  text: '2021 was the most successful season of Thömus maxon Swiss Mountain Bike Racing so far. By winning the UCI Mountain Bike Overall World Cup and the outstanding performances of Mathias Flückiger, the Swiss team has reached the top of the world. However, the successes have not made the Swiss team fed up, but hungry for more. At the moment, the entire team is in a training camp in Girona, Spain. In addition to basic training on the road and mountain bike, the program includes material tests and, last but not least, team building. On Saturday (Alessandra Keller ) and Sunday (Vital Albin, Luke Wiedmann, Timo Müller, Roman Holzer) the whole team will compete in the first race of the season at the Copa Catalana Internacional in Banyoles against top-class competition.'
}, {
  title: 'Throwback Thursday: 7 Bikes Turning 30 in 2022',
  URL: 'https://www.pinkbike.com/news/throwback-thursday-7-bikes-turning-30-in-2022.html',
  text: 'As we make our way through 2022 and await all of the exciting new product developments lets take a look back through the archives at some of the bikes turning 30 this year. 1992 saw Cannondale launch one of its first proper full suspension mountain bikes with the Delta V 1000. Using Cannondales Delta V fork this bike offered 2"/50mm of travel with an enlarged headtube to house the inner components for the forks. Another early full suspension bike released in 1992 was the IRD FS. With a more conventional front fork, the IRD used an elastomer stack attached to the bottom bracket by a braided cable. Coming before its time, the IRD also featured adjustable geometry. IRDs product catalog said: "Adjustment is accomplished by elastomer durometer and threaded ends of the cable which terminate in the swing arm cavity. By tightening the cable ends several interesting things happen. The chain stay dimension shortens, the bottom bracket raises, and the head angle gets steeper. Of course, the opposite happens when the cable in lengthened, permitting you to fine tune the handling to your own preference."'
}, {
  title: 'Jared Graves Retires from Racing - Will Become Yeti Team Coach',
  URL: 'https://www.pinkbike.com/news/jared-graves-retires-from-racing-will-become-yeti-team-performance-coach.html',
  text: 'Jared Graves has announced today that he is retiring from full-time racing. His final race was the Australian National Championships last weekend, where he won the short-track cross country race. After a total of fourteen years of racing for Yeti throughout his career, most recently on the Yeti / OneUp Pro Team, Graves will remain on the Colorado brands bikes, but will transition from racer to Team Performance Coach.During his long career, Graves won world championships in 4X and Enduro, earned a bronze medal in downhill at the World Championships, represented Australia in BMX in the 2008 Olympics, and has won a total of 10 elite Australian national titles across five disciplines. Graves is also a cancer survivor after being diagnosed with a brain tumor in October 2018 and publicly battled through chemo and radiation treatments.'
}, {
  title: 'How to Accurately Calculate What Spring Rate You Need',
  URL: 'https://www.pinkbike.com/news/how-to-accurately-calculate-what-spring-rate-you-need.html',
  text: 'If you have a coil shock, finding the right spring rate can be tricky. In an ideal world, youd experiment with a few different options until you find the right one. But with some springs running into three figures, that can be very expensive, not to mention time-consuming, so you want to have a very good idea of what spring rate you need before you order one. For clarity, the spring rate, or stiffness, is the amount of force required to compress the spring by a certain distance. This is usually measured in pounds per inch (lb/in) or occasionally Newtons per millimeter (N/mm). So, for a 400 lb/in spring, it would take 400 lb of force to compress it one inch, or 800 lb to compress it two inches, and so on. What spring rate you need will depend on your weight and on the suspension design of your bike. In particular, its leverage ratio, which is how far the axle moves for every millimeter the shock compresses. You can easily work out the average leverage ratio by dividing the wheel travel by the shock stroke. A higher leverage ratio means youll need a stiffer spring to provide the same sag.'
}, {
  title: 'The Proxy War Between Discovery & Red Bull Is Official',
  URL: 'https://www.pinkbike.com/news/opinion-the-proxy-war-between-discovery-and-redbull-is-official.html',
  text: 'The mountain bike industry has always had a complicated relationship with Red Bull. The Salzburg-based energy drink brand has undoubtedly poured money into the sport, supported untold numbers of riders, and been the reason that the best events have had massive global audiences. Theyve provided the canvases for many of mountain bikings biggest moments. But most of all, over the past decade theyve entrenched their position as holding the keys to the kingdom of free access to the sports most important broadcasts. Until now. Every year or two we see a groundswell of “is Red Bull good for the sport?” type articles and opinions pop up. Including on this site. And a lot of it is compelling—nobody believes Red Bull supports the sport purely out of the goodness of their hearts. Their revenue broke €5B in 2018, and free access to broadcasts isnt free; theyre marketing to an audience they believe is important to their business. The money they bring into the sport comes from somewhere, and some critics have been uneasy about the ethics of marketing energy drinks to action-sport audiences.'
}, {
  title: 'Review: 2022 Kona Process 153 DL 29',
  URL: 'https://www.pinkbike.com/news/review-2022-kona-process-153-dl-29.html',
  text: 'The original Kona Process 153 was one of the bikes of the mid-2010s and championed short rear ends and new school geometry in a no-nonsense alloy frame around 7 years ago. Of course, nothing stays the same forever, but there is still the same blood in the veins of the Process in 2022. The Process family has swelled in recent times, and now not only includes the 153 and the 134 in both 29” and 27.5” wheels, but also the 170mm travel Process X. That said, there is no longer a spot for the fan favorite and very downcountry-esque Process 111, but maybe that will change one day. The new Process is a “perfect balance of descending prowess and climbing efficiency,” according to Kona at least. However, theyre not far off. It does offer a well rounded character that will suit many people who ride tech, steep or fast trails, even if they have no want or need of a big enduro bike. Its funny, the Process 153 was the enduro bike of the range, and if you had told me then that a bike with that amount of travel paired to a 160mm fork wasnt enduro I would have chucked my race-legal pre-workout drink right in your face, but I think the times are changing slightly. Maybe thats best represented with the Process Xs place in Konas range.'
}, {
  title: 'Nino Schurters New Special Edition Spark RC',
  URL: 'https://www.pinkbike.com/news/bike-check-nino-schurters-new-special-edition-spark-rc.html',
  text: 'It was a familiar scene last summer when Nino Schurter pulled away in the final sprint and stormed across the line first at World Champs 2021 to claim the rainbow stripes... again. Actually, Nino Schurter winning another World Championship title might be one of the least surprising things to happen in all of mountain biking. Still, that doesnt make it any less of a monumental achievement. Nino Schurter, now 35, is the oldest mountain biker in history to earn the XC rainbow stripes. Back in 2009, when he took his first World Championship win at age 22, he was also the youngest. From 2009 to the present day, hes picked up nine World titles and he continues to charge onward. To mark the beginning of another promising season, Scott worked with Nino to design a bike that reflects his shiny riding career. Wildly, too, Nino has won all of his titles while riding for Scott, making the Spark one of the most successful cross country bikes ever. Talk about an animal.'
}];
app.get("/getList", function (req, res) {
  var term = req.query.searchTerm;
  var filteredItems = filterArcticles(term);
  res.send(filteredItems);
});

function filterArcticles(term) {
  if (term) {
    var regex = new RegExp(term, "i");
    return articles.filter(function (article) {
      return regex.test(article.text) || regex.test(article.title);
    });
  } else {
    return [];
  }
}

app.listen(port, function () {
  console.log("running on port ".concat(port));
});
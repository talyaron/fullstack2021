"use strict";

var express = require('express');

var app = express();
var port = 3000;
var data = [{
  title: "You're No Good",
  text: "Well I don't know why I love you like I do. Nobody in the world can get along with you. You got the ways of a devil sleeping in a lion's den. I come home last night you wouldn't even let me in. Well sometimes you're as sweet as anybody want to be. When you get a crazy notion of jumpin' all over me. Well you give me the blues I guess you're satisfied. An' you give me the blues I wanna lay down and die.I helped you when you had no shoes on your feet, pretty mama. I helped you when you had no food to eat. You're the kind of woman I just don't understand. You're takin' all my money and give it to another man. Well you're the kinda woman makes a man lose his brain. You're the kinda woman drives a man insane. You give me the blues, I guess you're satisfied. You give me the blues, I wanna lay down and die. Well you give me the blues, I wanna lay down and die"
}, {
  title: "Talkin' New York",
  text: "Rambling outta the Wild West, Leaving the towns I love the best, Thought I'd seen some ups and downs Till I come into New York town: People going down to the ground, Buildings going up to the sky. Wintertime in New York town, The wind blowing the snow around, Walk around with nowhere to go, Somebody could freeze right to the bone I froze right to the bone. New York Times said it was the coldest winter in seventeen years I didn't feel so cold then. I swung on to my old guitar, Grabbed hold of a subway car, And after a rocking, reeling, rolling ride I landed up on the downtown side, Greenwich Village. I walked down there and ended up In one of them coffeehouses on the block. I'd get on the stage and sing and play, Man there said, Come back some other day.You sound like a hillbilly.We want folksingers here. Well, I got a harmonica job, begun to play, Blowing my lungs out for a dollar a day. I blowed inside out and upside down, The man there said he loved my sound, He was raving about how he loved my sound Dollar a day's worth. Now, after weeks and weeks of hanging around, I finally got a job in New York town. In a bigger place, bigger money too, Even joined a union, paid my dues. Now, a very great man once said That some people rob you with a fountain pen. It don't take too long to find out Just what he was talking about. A lot of people don't have much food on their table, But they got a lot of forks and knives  And they gotta cut something. So, one morning when the sun was warm I rambled out of New York town, Pulled my cap down over my eyes, Headed out for the western skies. So long, New York! Howdy, East Orange!"
}, {
  title: "In My Time of Dyin'",
  text: "Well, in my time of dying, don't want nobody to mourn. All I want for you to do is take my body home, Well, well, well, so I can die easy, Well, well, well, Well, well, well, so I can die easy, Jesus gonna make up Jesus gonna make up Jesus gonna make up my dying bed. Well, meet me, Jesus, meet me, Meet me in the middle of the air. If these wings should fail me, Lord, Won't you meet me with another pair? Well, well, well, so I can die easy, Well, well, well, Well, well, well, so I can die easy, Jesus gonna make upJesus gonna make up Jesus gonna make up my dying bed. Lord, in my time of dying, don't want nobody to cry. All I want you to do is take me when I die, Well, well, well, so I can die easy, Well, well, well, Well, well, well, so I can die easy, Jesus gonna make up Jesus gonna make up Jesus gonna make up my dying bed."
}, {
  title: "Man of Constant Sorrow",
  text: "I am a man of constant sorrow, I've seen trouble all my days. I'll say goodbye to Colorado, Where I was born and partly raised. Your mother says I'm a stranger, My face you'll never see no more. But there's one promise, darling: I'll see you on God's golden shore. Through this open world I'm bound to ramble, Through ice and snow, sleet and rain. I'm bound to ride that morning railroad. Perhaps I'll die on that train. I'm going back to Colorado, The place that I started from. If I'd knowed how bad you'd treat me, Honey, I never would have come."
}, {
  title: "Fixin' to Die",
  text: "Feeling funny in my mind, Lord, I believe I'm fixing to die. Feeling funny in my mind, Lord, I believe I'm fixing to die. Well, I don't mind dying, But I hate to leave my children crying. Well, look over yonder to that burying ground! Look over yonder to that burying ground! Sure seems lonesome, Lord, when the sun goes down. Feeling funny in my eyes, Lord, I believe I'm fixing to die, fixing to die. Feeling funny in my eyes, Lord, I believe I'm fixing to die. Well, I don't mind dying, But I hate to leave my children crying. There's a black smoke rising, Lord, It's rising up above my head, up above my head. Well, there's black smoke rising, Lord, It's rising up above my head, And tell Jesus make up my dying bed. Well, I'm walking kind of funny, Lord, I believe I'm fixing to die, fixing to die. Yes, I'm walking kind of funny, Lord, I believe I'm fixing to die, Fixing to die, fixing to die. Well, I don't mind dying, But I hate to leave my children crying."
}, {
  title: "Pretty Peggy-O",
  text: "I've been around this whole country, But I never yet found Fennario. Well, as we marched down, as we marched down, Well, as we marched down to Fennario, Well, our captain fell in love with a lady like a dove. Her name that she had was Pretty Peggy-O. Well, what will your mother say, what will your mother say, What will your mother say, Pretty Peggy-O? What will your mother say to know you're going away, You're never, never, never coming back-i-O? Come running down your stairs, come running down your stairs, Come running down your stairs, Pretty Peggy-O! Come running down your stairs, combing back your yellow hair, You're the prettiest darned girl I ever seen-i-O! The lieutenant, he has gone, the lieutenant, he has gone, The lieutenant, he has gone, Pretty Peggy-O! The lieutenant, he has gone, long gone. He's riding down in Texas with the rodeo. Well, the captain, he is dead, our captain, he is dead, Our captain, he is dead, Pretty Peggy-O! Well, our captain, he is dead died for a maid. He's buried somewheres in Louisiana-O."
}];
app.use(express["static"]('public'));
app.get('/get-songs', function (req, res) {
  var searchTerm = req.query.searchTerm;

  function searchFilter(searchTerm) {
    if (searchTerm) {
      var regex = new RegExp(searchTerm, "i");
      return data.filter(function (searchTerm) {
        return regex.test(searchTerm.text) || regex.test(searchTerm.title);
      });
    }
  }

  res.send(searchFilter(searchTerm));
});
app.listen(port, function () {
  console.log("app listening on port ".concat(port));
});
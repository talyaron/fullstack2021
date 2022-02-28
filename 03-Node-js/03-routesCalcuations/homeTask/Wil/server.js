const express = require('express')
const app = express()
const port = process.env.PORT || 3000;

const facts = [{ title: 'Competitive art used to be in the Olympics.', fact: 'Between 1912 and 1948, the Olympic Games awarded medals in sculpture, music, painting, and architecture, according to Smithsonian magazine. After a heated debate in the post-war years, the competitions were scrapped. John Copley of Britain won one of the final medals: At 73, he would be the oldest medalist in Olympic history if his silver, awarded for his 1948 engraving Polo Players, were still counted' },
{ title: 'A chefs hat has exactly 100 pleats.', fact: 'Bon Appétit magazine brings us this tasty tidbit. A chefs tall hat (officially known as a "toque") is traditionally made with 100 pleats, meant to represent the 100 ways to cook an egg.' },
{ title: '"OMG" usage can be traced back to 1917.', fact: 'One of the earliest uses—perhaps the earliest use—of "OMG" appeared in a letter to the then-member of Parliament, as The Atlantic reports. In 1917, British Navy Admiral John Arbuthnot Fisher wrote to Winston Churchill about rumors of new titles that would soon be bestowed. "I hear that a new order of Knighthood is on the tapis," he wrote. "O.M.G. (Oh! My God!)—Shower it on the Admiralty!" OMG, indeed' },
{ title: 'Some cats are actually allergic to humans.', fact: 'Though its uncommon—since humans bathe more than your typical animal, and dont shed as much hair or skin—some animals can still be allergic to humans, according to Popular Science. (However, its more often because of the perfume or cologne we wear, or the soap we use.)' },
{ title: 'The majority of your brain is fat.', fact: 'You can literally call someone a fathead, but its still unkind: According to Psychology Today, 60 percent of human brain matter is made of fat.' }
]

app.use(express.static("public"));

app.get('/get-Users', (req, res) => {
 
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
"use strict";

var mather = {
  firstname: 'chani',
  last: 'cohen',
  adult: true,
  age: 32
};
var father = {
  firstname: 'chaim',
  last: 'cohen',
  adult: true,
  age: 34
};
var childa = {
  firstname: 'menachem',
  last: 'cohen',
  adult: false,
  age: 6
};
var childb = {
  firstname: 'hodaya',
  last: 'cohen',
  adult: false,
  age: 5
};
var childc = {
  firstname: 'meir',
  last: 'cohen',
  adult: false,
  age: 2
};
var childd = {
  firstname: 'sarahila',
  last: 'cohen',
  adult: false,
  age: 3 + "  month"
};

function tellAboutThefamily(family) {
  {
    if (family.adult) console.log("".concat(family.firstname, " ").concat(family.last, " ").concat(family.age, " is years old he is adult"));else console.log("".concat(family.firstname, " ").concat(family.last, " ").concat(family.age, " years old is child"));
  }
}

;
tellAboutThefamily(mather);
var freinds = ['sara', 'miri', 'ruty'];
console.log('the freinds of chani: ' + freinds);
tellAboutThefamily(father);
var freindsc = ['noam', 'moshe', 'yoni'];
console.log('the freinds of chaim: ' + freindsc);
tellAboutThefamily(childa);
var freindsn = ['shmuel', 'yosi', 'israel'];
console.log('the freinds of menachem: ' + freindsn);
tellAboutThefamily(childb);
var freindsh = ['sara', 'riki', 'ruti'];
console.log('the freinds of hodaya: ' + freindsh);
tellAboutThefamily(childc);
var freindsm = ['chaim', 'yosi', 'david'];
console.log('the freinds of meir: ' + freindsm);
tellAboutThefamily(childd);
var freindss = ['efrat', 'chaya', 'chani'];
console.log('the freinds of sara: ' + freindss);
var fam = [mather, father, childa, childb, childc, childd];

for (var y in fam) {
  console.log(fam[y++]);
}

var fre = [freinds, freindsc, freindsn, freindsh, freindsm, freindss];
var first = [mather.firstname, father.firstname, childa.firstname, childb.firstname, childc.firstname, childd.firstname];
var all = first.concat(fre);

for (var x in all) {
  if (x < 6) console.log('the freind of ' + first[x] + ' is: ' + fre[x]);
}
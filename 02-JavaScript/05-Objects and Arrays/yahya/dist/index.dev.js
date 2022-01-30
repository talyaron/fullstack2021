"use strict";

//const garde ={
//    math:22,
//    englesh:65,
//    physics:70,
//    larabic:80,
//    lhebrew:73,
//    isSucsses:false
//  
//
//}
//unction studentGrad(student){
//   if (student.isSucsses) {
//       console.log(`${student.math} ${student.englesh}${student.physics} ${student.larabic}${lhebrew}${student.isSucsses}`)
//   } else{ 
//       console.log(`${student.math} ${student.englesh}${student.physics} ${student.larabic}${lhebrew}${student.isSucsses}`)    
//
//   }
//;
//tudentGrad(garde);
////////////////////////////////////////////////////////////////////////////
// month
//let num = window.prompt("enter the month number")
//function munth(num)
//i=parsent(i)
//{
//    let list=["مُحرّم,صفر,ربيع اول,ربيع ثاني,جمادي اول,جمادي اخر,رجب,شعبان ,رمضان,شوال,ذو حجة,ذوالقعدة "]
//
//return console.log(list[i+1])
//}
//
//
//munth(num)
///////////////////////////////////////////////////////////////////////////////////
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>=>1<=<<<<<<<<<<<<<<<<<<<<<<<
var Yahya = {
  name: "Yahya",
  lastName: "alhawajra",
  age: 19
};
var Monder = {
  name: "Monder",
  lastName: "alhawajra",
  age: 18
};
var Taher = {
  name: "Taher",
  lastName: "alhawjra",
  age: 15
}; //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>=>2<=<<<<<<<<<<<<<<<<<<<<<<<

var family = [yahya, Taher, Monder]; //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>=>3<=<<<<<<<<<<<<<<<<<<<<<<<

for (var i = 0; i < family.length; i++) {
  alert(family[i].name);
} //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>=>4<=<<<<<<<<<<<<<<<<<<<<<<<


Yahya.friends = ["Islam", "Nassar", "Dahaam"];
Monder.friends = ["Ibraheem"];
Taher.friends = ["Mohamed", "Omar"]; //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>=>5<=<<<<<<<<<<<<<<<<<<<<<<<

var names = "";

for (var _i = 0; _i < family.length; _i++) {
  for (var j = 0; j < family[_i].friends.length; j++) {
    names = names + " " + family[_i].friends[j];
  }

  alert("".concat(family[_i].name, " has the following friends: ").concat(names));
} //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>=>6<=<<<<<<<<<<<<<<<<<<<<<<<


function tellFriends(person) {
  for (var _j = 0; _j < person.friends.length; _j++) {
    names = names + " " + person.friends[_j];
  }

  alert("".concat(person.name, " has the following friends: ").concat(names));
}
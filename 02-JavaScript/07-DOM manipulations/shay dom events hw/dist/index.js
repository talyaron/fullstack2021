var betty = document.getElementById("betty");
var selena = document.getElementById("selena");
var tom = document.getElementById("tom");
var zendaya = document.getElementById("zendaya");
var text = document.getElementById("text");
var img = document.querySelectorAll("img");
var _loop_1 = function (item) {
    item.addEventListener("mouseenter", function () {
        text.innerHTML = item.alt;
        console.log(item.alt);
    });
};
for (var _i = 0, img_1 = img; _i < img_1.length; _i++) {
    var item = img_1[_i];
    _loop_1(item);
}
//   switch(text){
// case betty:
//   text.style.top = '400px'
//   text.style.left = '50px'
//   break;
//  case selena:
//   text.style.top = '400px'
//   text.style.left = '100px'
//   break;
//   case tom:
//     text.style.top = '400px'
//     text.style.left = '150px'
//     break;
//     case zendaya:
//       text.style.top = '400px'
//       text.style.left = '200px'
//       break;
//   }
//     if(img == betty){
//   text.style.top = '300px'
//   text.style.left = '20px'
// }
// if(item.alt == "selena"){
//   text.style.top = '300px'
//   text.style.left = '150px'
// }
// if(item.alt == "tom"){
//   text.style.top = '300px'
//   text.style.left = '200px'
// }
// if(item.alt == "zendaya"){
//   text.style.top = '300px'
//   text.style.left = '250px'
// }

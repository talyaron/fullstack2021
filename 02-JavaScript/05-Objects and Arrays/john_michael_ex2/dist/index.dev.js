"use strict";

var singers = ['thom yorke', 'gilad kahana', 'omer adam', 'shlomi perez']; // REGULAR LOOP //
// for( let i = 0; i<singers.length; i++){
// console.log(singers[i]);
// }
// IN LOOP //
// for(let i in singers){
//     console.log(singers[i]);
// }
// OF LOOP //
// for(let i of singers){
//     console.log(i);
// }
// CALLBACK //

singers.forEach(function (i) {
  console.log(i);
});
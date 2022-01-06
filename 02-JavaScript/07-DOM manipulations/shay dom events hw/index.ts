const betty = document.getElementById("betty")
const selena = document.getElementById("selena")
const tom = document.getElementById("tom")
const zendaya = document.getElementById("zendaya")

const text = document.getElementById("text")

const img = document.querySelectorAll("img")

for(const item of img){
  item.addEventListener("mouseenter", ()=>{
    text.innerHTML = item.alt;
 console.log(item.alt)

    
  })
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
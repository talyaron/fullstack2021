// let m:number=24

// let w:number=22

// function average( a:number ,b:number ):number {
//     try{
//         const avg = (a+b)/2;
//         console.log(`The average of m & w is ${avg}`);

//     }
//     catch(error){
//        console.error(error);
//         return 0;

//     }
// }

// console.log(average(m,w))


//console.dir(navigator);

let btn = document.querySelector('#btn');

function display() {
    alert('It was clicked!');
}

btn.addEventListener('click',display);
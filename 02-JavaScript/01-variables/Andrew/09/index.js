let j = [];
let k = [];
for(let i=100; i < 1000; i++){
    j = (""+i).split("");
    k = (j[0]**3)+(j[1]**3)+(j[2]**3);
    if(i == k){
        console.log(i +"is an armstrong number");
    }
}
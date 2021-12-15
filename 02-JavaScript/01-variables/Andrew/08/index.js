let num = [];
let happy = [];
for (let i = 1; happy.length < 5; i++){

    num = ("" + i).split("");
    let a=0;
    let k=0;
    while (k !== 1 && k !== i && a < (10*100)){
        a++;
        k = 0;
        for (let j = 0; j < num.length; j++) {
            k = k + (num[j] * num[j]);
        }
        num = ("" + k).split("");
        if(k == 1){
            happy.push(i);
        }
    }
}
console.log(happy + " are a happy numbers, but i am sad :(");
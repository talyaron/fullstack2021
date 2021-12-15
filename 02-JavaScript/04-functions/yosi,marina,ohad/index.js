function bmi(messa, height) {
    let res = (messa / (height * height));
    return res;
}

let q = bmi(50, 1.6)
console.log(q);
if (q <= 18.5) {
    console.log("Under weight");
}
if (q >= 18.5 && q < 25) {
    console.log("normal weight");
}
if (q >= 25 && q < 30) {
    console.log("class 1");
}
if (q >= 30 && q < 35) {
    console.log("class 2");
}
if (q >= 35 && q < 40) {
    console.log("class 3");
}
if (q >= 40) {
    console.log("class 4");
}
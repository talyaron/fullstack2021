const word = "UcUNFYGaFYFYGtNUH";

function SplitSort(string) {
    return string.split('')
    

}

const hide = (string) => {
    let a = "";
    for (let i = 0; i < string.length; i++) {
        if (string[i] === string[i].toLowerCase()) {
            a += (string[i]);
        }
    }
    return a;
};

console.log(hide("UcUNFYGaFYFYGtNUH"));
console.log(hide("bEEFGBuFBRrHgUHlNFYaYr"));
console.log(hide("YFemHUFBbezFBYzFBYLleGBYEFGBMENTment"));

console.log(SplitSort(`UcUNFYGaFYFYGtNUH`));
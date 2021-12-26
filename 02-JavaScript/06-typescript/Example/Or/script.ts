let or:number = 22;
let refael:number=25;
function avg(a:number, b:number):string{
    try {
        let avgAge:number = (a+b)/avg.length;
        return `the avarage age of refael and or is ${avgAge}`
    } catch (error) {
        console.error(error)

    }

}
console.log(avg(or,refael))
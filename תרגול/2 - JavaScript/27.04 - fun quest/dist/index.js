// 1
/*
4xx and 5xx HTTP codes families are for errors. The main different is:
a.  4xx are client errors.5xx are server errors. V
b.  4xx and 5xx are servr errors.
c.  4xx are known errors. 5xx are for unknown errors.
d.  4xx are for network errors. 5xx are server errors.
*/
//What will be the values of "a" and "b" of the attached code:*/
// (function () {
//     var a = b = 3 //let a = b //let b = 3;
// }())
// console.log(a)
// console.log(b)
/*
a.  A defuned B undefined
b.  A defuned B defuned
c.  A undefined B defuned  V
d.  A undefined B undefined
*/
//3
/*
The output will be:
*/
// function foo(...args) {
//     console.log(args)
//     return args.reduce((a, b) => a / b)
// }
// console.log(foo(4, 2, .5))//2//4
/*
a.1
b.Error
c.undefined
d.4 V
*/
//4
// try {
//     throw new Error('some-error')
//     console.log('A')
// } catch (error) {
//     console.log('B')
// } finally {
//     console.log('C')
// }
//5
// var myObject = {
//     foo: "bar",
//     func: function () {
//         var self = this;
//         console.log("outer func:  this.foo = " + this.foo);
//         console.log("outer func:  self.foo = " + self.foo);
//         (function () {
//             console.log("inner func:  this.foo = " + this.foo);
//             console.log("inner func:  self.foo = " + self.foo);
//         }());
//     }
// };
// myObject.func();
// 6
// console.log(1 + "2" + "2"); //122
// console.log(1 + +"2" + "2"); //32
// console.log(1 + -"1" + "2"); //02
// console.log(+"1" + "1" + "2"); //112
// console.log("A" - "B" + "2"); //NaN2
// console.log("A" - "B" + 2); //NaN
//7
// console.log(4.55.toFixed(1) + 1) //4.51
// console.log(typeof 4.55.toFixed(1))
// console.log("1 " + 1)
//8
// const arr = [1, 3, , 7]
// arr.forEach((element) => {
//     console.log(element)
// })
//9
// console.log(undefined == false)
// console.log(null == undefined)
// console.log(null == false)
//10
// console.log("This is the outer level");
// console.group();
// console.log("Level 2");
// console.group();
// console.log("Level 3");
// console.warn("More of level 3");
// console.groupEnd();
// console.log("Back to level 2");
// console.groupEnd();
// console.log("Back to the outer level");
//11
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// arr.length = 4
// console.log(arr)

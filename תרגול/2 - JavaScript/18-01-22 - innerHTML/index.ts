// interface obj {
//     name: string
//     age?: number //without (?)- allert
// }

// const Alex: obj = {
//     name: "Alex",
//     // age: 5
// }

// // 1,1,1,1,1

// const array = [
//     { name: "one", age: 5 },
//     { name: "two", age: 10 },
//     { name: "tree", age: 15 },
// ]

// console.log(array)

// array.forEach((index, arr) => {
//     console.log(index)
//     console.log(arr)
// })

// interface Obj {
//     books: Array<string>
//     clothes: Array<string>
//     movies: Array<string>
//     addItems?: any
// }



// const myHome: Obj = {
//     books: [],
//     clothes: [],
//     movies: [],
//     addItems: function () {
//         this.books.push("text", "blablall lueiegjniowthweiotjh", "ergiuhweruighwe")
//         this.clothes.push("text")
//         this.movies.push("text")

//         return this
//     }
// }

// console.log(myHome.addItems())

const formObj = {};

function hendleSubmit(event) {
    event.preventDefault();

    console.log(event)
    for (let field of event.target) {
        console.dir(field)
        console.log(field.name, field.value)

        if (field.name !== 'submit') formObj[field.name] = field.value;
    }
}


 interface Obj {
     books: Array<string>
     clothes: Array<string>
     movies: Array<string>
     addItems?: any
 }



 const myHome: Obj = {
     books: [],
     clothes: [],
     movies: [],
     addItems: function () {
         this.books.push("tora", "mishna", "gmara")
         this.clothes.push("tushert")
         this.movies.push("tora",)

         return this
     }
 }

 console.log(myHome.addItems())
 
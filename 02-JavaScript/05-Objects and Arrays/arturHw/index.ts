interface obj{
    books: Array<string>
    clothes:Array<string>
    movies:Array<string>
    addBook(name:string,author:string)
    addClothes(item:string,brand:string)
    addMovies(name:string,category:string)

}
const myHome:obj = {
    books: [
        {name:'the 5 second rule' , author: 'mel robbins'},{name:'The Monk Who Sold His Ferrari' , author:'Robin Sharma'}],
    clothes: [{item: 't-shirt' , brand:'castro'},{item: 'swedder' , brand:'adidas'}],
    movies: [{name:'dont mess with the zohan' , category:'comedy'}],

    addBook: function(name:string,author:string){
        this.books.foreach(book=>{

        })
    }


}
console.log(myHome)

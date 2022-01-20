interface obj {
  books:Array<string> //books is an array containing strings
  clothes:Array<string> //clothes is an array containing strings
  movies:Array<string> //movies is an array containing strings
  addItems?:any //adding ? makes it optional
}


const myHome: obj = { //myHome is an object
  books:[],
  clothes:[],
  movies:[],
  addItems: function() {
    this.books.push()
  }
}
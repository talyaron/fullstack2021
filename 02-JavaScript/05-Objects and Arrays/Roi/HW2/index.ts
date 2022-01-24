interface obj {
  books:Array<{ name: string }>; //books is an array containing strings
  bands:Array<{ name: string }>; //clothes is an array containing strings
  movies:Array<{ name: string }>; //movies is an array containing strings
  addItems?:any //adding ? makes it optional
  removeItem?: any;
}


const myHome: obj = { //myHome is an object

  books:[{name:'Harry Potter'}, {name:'Moby Dick'}, {name:'The Great Gatsby'}, {name:'Ulysses'},],
  
  bands:[{name:'U2'}, {name:'Iron Maiden'}, {name:'The Smiths'}, {name:'Blind Faith'},],
  
  movies:[{name:'Jaws'}, {name:'The Godfather'}, {name:'The Dark Knight'}, {name:"Schindler's List"},],
  
  addItems: function(obj: Array<string>,title) {
    this.books.push({ name: title })
    return this    
  }
  removeItem: function (obj: Array<string>, title: string){
    let index = obj.indexOf(title);
    obj.splice(index)
    return this
 }
}

myHome.addItems(myHome.books, `xxx`);
myHome.removeItem(myHome.bands, `Blind Faith`);
console.dir (myHome)



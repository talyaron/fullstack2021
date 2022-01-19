interface Obj{
    myMovies:Array<{name:string}>,
    myFoods:Array<{name:string}>,
    myBooks:Array<{name:string}>,
    addItem?:any,
    removItem?:any
}
const myHome:Obj = {
myMovies:[
    {name: 'spider - man'},
    {name: 'the parents trap'},
    {name: 'step - up'},
    {name: 'pitch pirfect'} 
],
myFoods:[
    {name: 'Bamba'},
    {name: 'Godyva'},
    {name: 'Danish'},
    {name: 'Milki'} 
],
myBooks:[
    {name: 'Shadowhunter'},
    {name: 'The Dark Artifices'},
    {name: 'Run Away'},
    {name: 'The Vampire Diaries'}
],
addItem:function (newMovie:Array<{name:string}>, newFood:Array<{name:string}>, newBook:Array<{name:string}>){
    this.myMovies.push(newMovie);
     this.myMovies.forEach((myMovie,i) => {
        this.myMovies[this.myMovies.length-1] = {name: newMovie};
        
    });
     
    myHome.myFoods.push(this.myFood);
    this.myFoods.forEach((myFood, i) => {
        this.myFoods[this.myFoods.length-1] = {name: newFood};
    });
     myHome.myBooks.push(this.myBook);
    this.myBooks.forEach((myBook, i) => {
        this.myBooks[this.myBooks.length-1] = {name: newBook};
    });
},
removItem:function(reMovie:Array<{name:string}>, reFood:Array<{name:string}>, reBook:Array<{name:string}>){
    let index = 1;
    
   this.myMovies.splice(reMovie, index);
   this.myMovies.forEach((myMovie,i) => {
      this.myMovies[this.myMovies.length-1] = {name: reMovie};
      
  });
   
  this.myFoods.splice(reFood, index);
  this.myFoods.forEach((myFood, i) => {
      this.myFoods[this.myFoods.length-1] = {name: reFood};
  });
   this.myBooks.splice(reBook, index);
  this.myBooks.forEach((myBook, i) => {
      this.myBooks[this.myBooks.length-1] = {name: reBook};
  });
}

};
console.log(myHome.addItem( 'super - man', 'wine', 'The Hunger Games'));
console.log(myHome.removItem( 'spider - man', 'Milki', 'The Dark Artifices'));

console.log(myHome);


function home(myHome:Obj, domElement:any){
let html:string = '';

let movieName = `<h2> my movies are- `
movieName+='</h2>';
html+=movieName;
myHome.myMovies.forEach(movie =>{
    
    let movieHtml = `<div class= 'card'><p>${movie.name}<p>`;
    
    
    
    movieHtml+= '</div>';
    html+=movieHtml;
})
 movieName = `<h2> my foods are- `
movieName+='</h2>';
html+=movieName;
myHome.myFoods.forEach(food =>{
    let movieHtml = `<div class= 'card'><p>${food.name}<p>`;
    
    
    
    movieHtml+= '</div>';
    html+=movieHtml;
})
 movieName = `<h2> my books are- `
movieName+='</h2>';
html+=movieName;
myHome.myBooks.forEach(book =>{
    let movieHtml = `<div class= 'card'><p>${book.name}<p>`;
    
    
    
    movieHtml+= '</div>';
    html+=movieHtml;
})
domElement.innerHTML=html;

}
const root = document.querySelector('#rootHome');

home(myHome, root);
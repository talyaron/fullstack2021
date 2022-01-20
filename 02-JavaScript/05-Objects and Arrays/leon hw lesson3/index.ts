interface myHome  {
    books:Array<string>
    clothes:Array<string>
    movies:Array<string>
     addItems:any
}


const myHome:any={
    books:[],
    clothes:[],
    movies:[],
    addItems:function(){
        this.books.push({name:`harry potter`},{name:`god of war`}),
        this.clothes.push({name:`jeans`},{name:`shirt`})
        this.movies.push({name:`name:fast and furious`},{name:`the saw`})
        return this
    }
}
console.log(myHome.addItems())


function renderItems(myHome,domElement){
    let html: string = `
    <h1>My Home</h1>
    <h1>books:</h1>`
    myHome.books.forEach(book=>{
        let homeHtml = `<div class='card'><h2>${book.name}</h2> </div>`;    
        html += homeHtml;
     })
    
    myHome.movies.forEach(movie=>{
       let homeHtml = `<div class='card'><h2>${movie.name}</h2> </div>`;    
       html += homeHtml;
    })
    html += `<h1>clothes:</h1>`
    myHome.clothes.forEach(clothes=>{
       let homeHtml = `<div class='card'><h2>${clothes.name}</h2> </div>`;  
       html += homeHtml;
    })

    domElement.innerHtml = html;

}
const root = document.querySelector(`#rootItems`);
renderItems(myHome,root)





    




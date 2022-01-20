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
        this.books.push(`harry potter`,`king of jungle`,`yolo`)
        this.clothes.push(`jeans`,`T shirts`,`jacket`)
        this.movies.push(`fast and furious`,`the saw`)
        return this
    }
}
console.log(myHome.addItems())


function renderItems(myHome){
    let html: string = '';
    

}


var home = {
    myMovies: [],
    myFoods: ['Bamba', 'Godyva', 'Danish', 'Milki'],
    myBooks: ['Shadowhunter', 'The Dark Artifices', 'Run Away', 'The Vampire Diaries']
};
console.log(home);
function newAdding(movies, foods, books) {
    var _this = this;
    //this.MyHome.push({myMovies:movies, myFoods:foods, myBooks:books});
    this.MyHome.forEach(function (movies, foods, books, i) {
        _this.myMovies[_this.myMovies.length - 1].myMovies[i] = { myMovies: movies };
        _this.myFoods[_this.myFoods.length - 1].myFoods[i] = { myFoods: foods };
        _this.myBooks[_this.myBooks.length - 1].myBooks[i] = { myBooks: books };
    });
    // for(let i=0; i<movies.length; i++){
    //     for(let j=0; j<foods.length; j++){
    //         for(let k=0; k<books.length; k++){
    //            this.myMovies[i].push(movies[i]); 
    //            this.myFoods[j].push(foods[j]); 
    //            this.myBooks[k].push(books[k]); 
    //            console.log(this.myMovie);
    //         }
    //     }
    // }
    console.log(home);
    // addItem: function(movies, foods, books){
    //     this.myMovies.push(movies);
    //     this.myFoods.push(foods);
    //     this.myBooks.push(books);
    //     return this;
    // }
}
;
// console.log(newAdding('superman', 'wine', 'the hunger games'));
newAdding('super - man', 'wine', 'The Hunger Games');

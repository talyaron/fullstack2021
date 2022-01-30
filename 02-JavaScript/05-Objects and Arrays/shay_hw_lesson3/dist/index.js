var myHome = {
    myMovies: [
        { name: 'spider - man' },
        { name: 'the parents trap' },
        { name: 'step - up' },
        { name: 'pitch pirfect' }
    ],
    myFoods: [
        { name: 'Bamba' },
        { name: 'Godyva' },
        { name: 'Danish' },
        { name: 'Milki' }
    ],
    myBooks: [
        { name: 'Shadowhunter' },
        { name: 'The Dark Artifices' },
        { name: 'Run Away' },
        { name: 'The Vampire Diaries' }
    ],
    addItem: function (newMovie, newFood, newBook) {
        var _this = this;
        this.myMovies.push(newMovie);
        this.myMovies.forEach(function (myMovie, i) {
            _this.myMovies[_this.myMovies.length - 1] = { name: newMovie };
        });
        myHome.myFoods.push(this.myFood);
        this.myFoods.forEach(function (myFood, i) {
            _this.myFoods[_this.myFoods.length - 1] = { name: newFood };
        });
        myHome.myBooks.push(this.myBook);
        this.myBooks.forEach(function (myBook, i) {
            _this.myBooks[_this.myBooks.length - 1] = { name: newBook };
        });
    },
    removItem: function (reMovie, reFood, reBook) {
        var _this = this;
        var index = 1;
        this.myMovies.splice(reMovie, index);
        this.myMovies.forEach(function (myMovie, i) {
            _this.myMovies[_this.myMovies.length - 1] = { name: reMovie };
        });
        this.myFoods.splice(reFood, index);
        this.myFoods.forEach(function (myFood, i) {
            _this.myFoods[_this.myFoods.length - 1] = { name: reFood };
        });
        this.myBooks.splice(reBook, index);
        this.myBooks.forEach(function (myBook, i) {
            _this.myBooks[_this.myBooks.length - 1] = { name: reBook };
        });
    }
};
// console.log(myHome.addItem('super - man', 'wine', 'The Hunger Games'));
console.log(myHome.removItem('spider - man', 'Milki', 'The Dark Artifices'));
console.log(myHome);
function home(myHome, domElement) {
    var html = '';
    var movieName = "<h2> my movies are- ";
    movieName += '</h2>';
    html += movieName;
    myHome.myMovies.forEach(function (movie) {
        var movieHtml = "<div class= 'card'><p>" + movie.name + "<p>";
        movieHtml += '</div>';
        html += movieHtml;
    });
    movieName = "<h2> my foods are- ";
    movieName += '</h2>';
    html += movieName;
    myHome.myFoods.forEach(function (food) {
        var movieHtml = "<div class= 'card'><p>" + food.name + "<p>";
        movieHtml += '</div>';
        html += movieHtml;
    });
    movieName = "<h2> my books are- ";
    movieName += '</h2>';
    html += movieName;
    myHome.myBooks.forEach(function (book) {
        var movieHtml = "<div class= 'card'><p>" + book.name + "<p>";
        movieHtml += '</div>';
        html += movieHtml;
    });
    domElement.innerHTML = html;
}
var root = document.querySelector('#rootHome');
home(myHome, root);

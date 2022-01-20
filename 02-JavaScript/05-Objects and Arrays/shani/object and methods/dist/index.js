var myHome = {
    books: [
        { name: "The Girl with the Dragon Tattoo", imgSrc: "https://m.media-amazon.com/images/I/51L+3fbhYML.jpg", year: 2005 },
        { name: "The 5 AM Club", imgSrc: "https://images-na.ssl-images-amazon.com/images/I/71QmjMGNeoL.jpg", year: 2018 },
        { name: "You Are Dead", imgSrc: "https://images-na.ssl-images-amazon.com/images/I/81sJapWgC+L.jpg", year: 2015 },
        { name: "The Land of Stories: A Grimm Warning", imgSrc: "https://images-na.ssl-images-amazon.com/images/I/91Q5WZ7+TlL.jpg", year: 2014 },
    ],
    movies: [
        { name: "Shark Tale", imgSrc: "https://m.media-amazon.com/images/M/MV5BMTMxMjY0NzE2M15BMl5BanBnXkFtZTcwNTc3ODcyMw@@._V1_.jpg", year: 2004 },
        { name: "Some Like It Hot", imgSrc: "https://upload.wikimedia.org/wikipedia/commons/b/b8/Some_Like_It_Hot_%281959_poster%29.png", year: 1959 },
        { name: "Hannah Montana The Movie", imgSrc: "https://upload.wikimedia.org/wikipedia/en/b/be/Hannah-montana-movie-poster.jpg", year: 2009 },
        { name: "The Secret Life of Walter Mitty", imgSrc: "https://images-na.ssl-images-amazon.com/images/I/81WY2Uril+L.jpg", year: 2013 },
    ],
    expired: [
        { name: "Banana", description: "My sister claims she will be making banana bread since December .", year: 2021 },
        { name: "Sunscreen", description: "It smells good", year: 2019 },
        { name: "Neosporin", description: "It still seems to work", year: 2018 },
        { name: "Bagel", description: "No one wants to be the asshole that takes the last bagel", year: 2017 },
    ],
    addItem: function (title, img, when, itemName, about) {
        this[itemName].push({ name: title, imgSrc: img, description: about, year: when });
    },
    removeItem: function () {
        // var newArray = myArray.filter(function(f) { return f !== 'two' })
        //  console.log(newArray)
    }
};
myHome.addItem("apple", "nope", 1998, 'expired', "i dont remember");
myHome.removeItem(); //?
console.log(myHome);
function renderitemsBooks(classObj, domElement) {
    var html = '';
    classObj.books.forEach(function (book) {
        var bookHTML = "<div class='card'> \n         <div class=\"books\">\n         <h2>" + book.name + "(" + book.year + ")</h2> <img src=" + book.imgSrc + "></div>";
        bookHTML += '</div>';
        html += bookHTML;
    });
    domElement.innerHTML = html;
}
var rootB = document.querySelector('#bookItems');
renderitemsBooks(myHome, rootB);
function renderitemsMovies(classObj, domElement) {
    var html = '';
    classObj.movies.forEach(function (movie) {
        var movieHTML = "<div class='card'> \n        <div class=\"movies\">\n        <h2>" + movie.name + "(" + movie.year + ")</h2> <img src=" + movie.imgSrc + "></div>";
        movieHTML += '</div>';
        html += movieHTML;
    });
    domElement.innerHTML = html;
}
var rootM = document.querySelector('#movieItems');
renderitemsMovies(myHome, rootM);
function renderitemsExipired(classObj, domElement) {
    var html = '';
    classObj.expired.forEach(function (exItem) {
        var exItemHTML = "<div class='card'> \n        <div class=\"expired\">\n        <h2>" + exItem.name + "(" + exItem.year + ") Reason:\"" + exItem.description + "\" </h2>\n        \n        </div>";
        exItemHTML += '</div>';
        html += exItemHTML;
    });
    domElement.innerHTML = html;
}
var rootE = document.querySelector('#expiredItems');
renderitemsExipired(myHome, rootE);

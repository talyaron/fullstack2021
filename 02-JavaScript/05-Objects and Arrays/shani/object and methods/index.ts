interface stuff {
    books: Array<{
        name: string;
        imgSrc: string;
        year: number;

    }>
    movies: Array<{
        name: string;
        imgSrc: string;
        year: number;

    }>
    expired: Array<{
        name: string;
        description: string;
        year: number;

    }>
    addItem: any;
    removeItem: any;
}

let myHome: stuff = {

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
    addItem(title, img, when, itemName, about) {
        this[itemName].push({ name: title, imgSrc: img, description: about, year: when });
    },
    removeItem( ) {
        // var myIndex = myHome.books.indexOf({ name: title, imgSrc: img, year: when });
        // if (myIndex !== -1) {
        //     myHome.books.splice(myIndex);
        // }
        // return myHome

        const removeBooks = myHome.books.pop()
        const removeMovies = myHome.movies.pop()
        const removeExipred = myHome.expired.pop()

    }
}
myHome.addItem("apple", "nope", 1998, 'expired', "i dont remember");
myHome.removeItem();

console.log(myHome)






function renderitemsBooks(classObj, domElement: any) {
    let html: string = '';

    classObj.books.forEach(book => {
        let bookHTML = `<div class='card'> 
         <div class="books">
         <h2>${book.name}(${book.year})</h2> <img src=${book.imgSrc}></div>`;


        bookHTML += '</div>';
        html += bookHTML;

    });

    domElement.innerHTML = html;
}

const rootB = document.querySelector('#bookItems');

renderitemsBooks(myHome, rootB);



function renderitemsMovies(classObj, domElement: any) {
    let html: string = '';
    classObj.movies.forEach(movie => {
        let movieHTML = `<div class='card'> 
        <div class="movies">
        <h2>${movie.name}(${movie.year})</h2> <img src=${movie.imgSrc}></div>`;


        movieHTML += '</div>';
        html += movieHTML;

    });

    domElement.innerHTML = html;


}
const rootM = document.querySelector('#movieItems');

renderitemsMovies(myHome, rootM);




function renderitemsExipired(classObj, domElement: any) {
    let html: string = '';

    classObj.expired.forEach(exItem => {
        let exItemHTML = `<div class='card'> 
        <div class="expired">
        <h2>${exItem.name}(${exItem.year}) Reason:"${exItem.description}" </h2>
        
        </div>`;


        exItemHTML += '</div>';
        html += exItemHTML;

    });

    domElement.innerHTML = html;



}
const rootE = document.querySelector('#expiredItems');

renderitemsExipired(myHome, rootE);


//input my form




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
        imgSrc: string;
        description:string;
        year: number;

    }>
    addItem: any;
    removeItem:any;
}

let myHome:stuff = {

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
        { name: "Banana", imgSrc: "", description: "My sister claims she will be making banana bread since December .", year: 2021 },
        { name: "Sunscreen", imgSrc: "", description: "It smells good", year: 2019 },
        { name: "Neosporin", imgSrc: "", description: "It still seems to work", year: 2018 },
        { name: "Bagel", description: "", imgSrc: "No one wants to be the asshole that takes the last bagel", year: 2017 },


    ],
    addItem(title, img, when): void {
        this.expired.push({ name: title, imgSrc: img, year: when });
    },
    removeItem(): void {
        for (let i = 0; i < myHome.books.length; i++) {
            if (myHome.books[i].name ==="Shark Tale" ) {
                myHome.books.splice(i,0);
                break;
            }

        }

    }
}
myHome.addItem("apple", "nope", 1998)
myHome.removeItem()

console.log(myHome)




// function renderitems(classObj, domElement: any) {
//     let html: string = '';
   
//     classObj.books.forEach(book => {
//         let bookHTML = `<div class='card'>
//         <div class="books">
//         <h2>${book.name}(${book.year})</h2> <img src=${book.imgSrc}></div>`;
        
//         // lesson.grades.forEach(student => {
//         //     lessonHTML += `<p>${student.name}: ${student.grade}</p>`
//         // })
        
//         bookHTML += '</div>';
//         html += bookHTML;

//     });

//     domElement.innerHTML = html;
// }

// const root = document.querySelector('#rootLessons');

// renderitems(myHome, root);
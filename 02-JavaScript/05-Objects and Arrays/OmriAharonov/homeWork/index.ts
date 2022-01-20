interface myHome {
    Books: Array<{
        arrayName: string,
        name: string,
        numberOfPages: number,
        author: string
    }>;

    addItem: any;
    removeItem: any;
}

const myHome = {
    books: [

        {
            title: 'Troubled Blood',
            numberOfPages: 869,
            author: 'Robert Galbraith'
        },

        {
            title: 'Orphan X',
            numberOfPages: 368,
            author: 'Gregg Hurwitz'
        }
    ],

    movies: [

        {
            title: 'The Pianist',
            director: 'Roman Polanski',
            lenghtMinutes: 142
        },

        {
            title: 'The Shawshank Redemption',
            director: 'Frank Darabont',
            lenghtMinutes: 150
        }
    ],

    tvShows: [
        {
            title: 'Narcos',
            seasons: 3,
            topRate: 9.5
        },

        {
            title: 'Money Heist',
            seasons: 3,
            topRate: 9.4
        }
    ],

    addItem: function (item: Array<any>, newtitle: string, category1: any, category2: any) {

        if (this.books === item) {
            this.books.push({ title: newtitle, numberOfPages: category1, author: category2 });
        }
        else if (this.movies === item) {
            this.movies.push({ title: newtitle, director: category1, lenghtMinutes: category2 });
        }
        else {
            this.tvShows.push({ title: newtitle, seasons: category1, topRate: category2 });
        }
        return this;
    },

    removeItem: function (item: Array<any>, titleToRemove: string): myHome {
        if (this.books === item) {
            for (let i = 1; i < this.books.length; i++) {
                if (this.books[i].title === titleToRemove) {
                    this.books.splice(i, 1);
                }
            }
        }
        else if (this.movies === item) {
            for (let i = 1; i < this.movies.length; i++) {
                if (this.movies[i].title === titleToRemove) {
                    this.movies.splice(i, 1);
                }
            }
        }
        else {
            for (let i = 1; i < this.tvShows.length; i++) {
                if (this.tvShows[i].title === titleToRemove) {
                    this.tvShows.splice(i, 1);
                }
            }
        }
        return this;
    }

};


myHome.addItem(myHome.books, 'The chemist', 480, 'Stephenie Meyer');
myHome.addItem(myHome.movies, 'Forrest Gump', 'Robert Zemeckis', 142);
myHome.addItem(myHome.tvShows, 'Breaking bad', 5, 10);
// console.log(myHome['movies'][0].arrayTitle);
// myHome.removeItem(myHome.books, 'Orphan X');
// myHome.removeItem(myHome.tvShows, 'Breaking bad');
// console.log(myHome);


function renderMyHome(obj: myHome, domElem: any) {
    let html: string = '';
    for (let [array]  of Object.entries(obj)) {
        if (obj[array][0] !== undefined){
            let arrayHtml = `<div class = 'card'> <h2> ${[array]}: </h2>`;

            obj[array].forEach((item,i) =>{
                arrayHtml += `<h4> ${obj[array][i].title} </h4>`;

            })
            
            arrayHtml += `</div>`;
            html += arrayHtml;
        }

    }

    domElem.innerHTML = html;
}

const homeRoot = document.querySelector('#rootHome');
console.log(myHome)
renderMyHome(myHome, homeRoot);
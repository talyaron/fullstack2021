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

        {arrayTitle: 'Books'},

        {
            name: 'Troubled Blood',
            numberOfPages: 869,
            author: 'Robert Galbraith'
        },

        {
            name: 'Orphan X',
            numberOfPages: 368,
            author: 'Gregg Hurwitz'
        }
    ],

    movies: [

        {arrayTitle: 'Movies'},

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

        {arrayTitle: 'TV-Shows'},

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

    addItem: function (item: Array<any>,newtitle:string, category1:any, category2: any) {
        
        if(this.books === item){
            this.books.push({name: newtitle, numberOfPages: category1, author:category2 })
        }
        else if(this.movies === item){
            this.movies.push({title: newtitle, director: category1, lenghtMinutes:category2 })
        }
        else{
            
            this.tvShows.push({title: newtitle, seasons: category1, topRate:category2 })
        }
        return this;
    },

    // removeItem: function (item: Array<any>, titleToRemove: string): myHome {
    //     let index = item.indexOf(titleToRemove)
    //     item.splice(index);
    //     return this;
    // }

}


myHome.addItem(myHome.books,'The chemist', 480, 'Stephenie Meyer')
myHome.addItem(myHome.movies,'Forrest Gump', 'Robert Zemeckis', 142)
myHome.addItem(myHome.tvShows,'Breaking bad', 5, 10 )
console.log(myHome)






function renderMyHome(obj:myHome,domElem:any){
    let html:string = '';

  for(let array in myHome){
       
  }
    domElem.innerHTML = html;
}

const homeRoot = document.getElementById('rootHome');






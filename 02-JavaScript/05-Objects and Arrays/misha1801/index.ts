interface Home {

    books: Array<{
        title: string
        author: string
    }>;

    shoes: Array<{
        brand: string
        price: number
    }>;

    guitars: Array<{
        brand: string
        yearmade: number
    }>;

    addItems(section, item)

}


let myHome: Home = {

    books: [
        {
            title: 'The Silent Treatment',
            author: 'Alex Michalids'
        },
        {
            title: 'Last Mikve in Sibir',
            author: 'Eshkol Nevo'
        },
        {
            title: 'Bakery Names Passion',
            author: 'Tomer Kaufman'
        }
    ],


    shoes: [
        {
            brand: 'Adidas',
            price: 350
        },
        {
            brand: 'Reebok',
            price: 250
        },
        {
            brand: 'Timberland',
            price: 700
        },


    ],

    guitars: [

        {
            brand: 'Fender',
            yearmade: 2008
        },
        {
            brand: 'Yamaha',
            yearmade: 2008
        },
    ],

    addItems(section, item){
        section.push()
    }

}
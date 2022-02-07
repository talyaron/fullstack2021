var uid = function () {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
};
var litlife = {
    books: [
        {
            title: "Hemlock Veils",
            autor: "Davenport Jennie",
            genre: "science fiction",
            year: 2014,
            grade: 3.62,
            img: "https://litlife.club/data/Book/0/234000/234306/BC3_1422109172.jpg?w=600&h=600&q=90"
        },
        {
            title: "One by One",
            autor: " Carter Chris",
            genre: "detective",
            year: 2013,
            grade: 9.83,
            img: "https://litlife.club/data/Book/0/217000/217759/BC3_1410688094.jpg?w=600&h=600&q=90"
        },
        {
            title: "Fight Club",
            autor: "Palahniuk Chuck",
            genre: "prose",
            year: 2009,
            grade: 9.63,
            img: "https://litlife.club/data/Book/0/87000/87828/BC3_1474544490.jpg?w=600&h=600&q=90"
        },
        {
            title: "Ramage",
            autor: " Pope Dudley",
            genre: "adventures",
            year: 2010,
            grade: 10.0,
            img: "https://litlife.club/data/Book/0/119000/119128/BCS_1349028836.jpg?w=600&h=600&q=90"
        },
        {
            title: "Grimms` Fairy Tales",
            autor: "Davenport Jennie",
            genre: "children",
            year: 1994,
            grade: 9.5,
            img: "https://litlife.club/data/Book/0/0/707/BC3_1386593820.jpg?w=600&h=600&q=90"
        },
        {
            title: "Revelation",
            autor: "Karpyshyn Drew",
            genre: "science fiction",
            year: 2010,
            grade: 7.8,
            img: "https://litlife.club/data/Book/0/91000/91909/BCS_1349020826.jpg?w=600&h=600&q=90"
        },
        {
            title: "Deception Point",
            autor: " Brown Dan",
            genre: "detective",
            year: 2010,
            grade: 9.99,
            img: "https://litlife.club/data/Book/0/125000/125823/BCS_1349021980.jpg?w=600&h=600&q=90"
        },
        {
            title: "The Secret History",
            autor: "Tartt Donna",
            genre: "prose",
            year: 2011,
            grade: 9.89,
            img: "https://litlife.club/data/Book/0/94000/94365/BC3_1474425076.jpg?w=600&h=600&q=90"
        },
        {
            title: "Hornblower and the Crisis",
            autor: "Forester Cecil Scott",
            genre: "adventures",
            year: 1990,
            grade: 0.23,
            img: "https://litlife.club/data/Book/0/126000/126284/BCS_1349022091.jpg?w=600&h=600&q=90"
        },
        {
            title: "The Adventures of Huckleberry Finn",
            autor: "Twain Mark",
            genre: "children",
            year: 1981,
            grade: 10.0,
            img: "https://litlife.club/data/Book/0/0/755/BC3_1386593870.jpg?w=600&h=600&q=90"
        },
    ],
    storeData: function () {
        localStorage.setItem("storeData", JSON.stringify(this.books));
    },
    getData: function () {
        var booksStorage = JSON.parse(localStorage.getItem("storeData"));
    },
    addBook: function (title, autor, genre, year, grade, img) {
        var id = uid();
        this.books.push({ title: title, autor: autor, genre: genre, year: year, grade: grade, img: img, id: id });
        this.storeData();
    },
    render: function (list, domElement) {
        var html = " ";
        list.forEach(function (book) {
            html += "<div class=\"item\">\n           <p>" + book.title + "</p>\n           <img class=\"img\" src=\"" + book.img + "\">\n           <p>" + book.year + "</p>\n           </div>";
        });
        domElement.innerHTML = html;
    },
    renderAllBooks: function (domElement) {
        var items = this.books;
        this.render(items, domElement);
    }
};
function handleAddBook(e) {
    e.preventDefault();
    var id = uid();
    console.log(e.target);
    var title = e.target.title.value;
    var autor = e.target.autor.value;
    var genre = e.target.genre.value;
    var year = e.target.year.valueAsNumber;
    var grade = e.target.grade.valueAsNumber;
    var img = e.target.img.value;
    litlife.addBook(title, autor, genre, year, grade, img);
    var root = document.querySelector(".root");
    litlife.renderAllBooks(root);
    litlife.storeData();
}
litlife.getData();
var root = document.querySelector(".root");
litlife.renderAllBooks(root);
// LOCAL STORAGE TEST
// let data: number = 0;
// function handleUpdateData(e) {
//   data = e.target.valueAsNumber;
//   console.log(data);
// }
// function handleAddDataToStorage() {
//   localStorage.setItem("storeData", JSON.stringify(data));
// }
// function getData() {
//   data = +JSON.parse(localStorage.getItem("storeData"));
//   console.log(data);
// }
// getData();

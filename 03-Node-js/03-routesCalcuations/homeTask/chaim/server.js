const books =[
{img: `https://www.google.com/aclk?sa=l&ai=DChcSEwjNo-_KgqL2AhWxBnsKHR0kA_wYABANGgJsZQ&sig=AOD64_2BlnBRqhMj1MMSzddTjeU69F2DJw&adurl&ctype=5&ved=2ahUKEwi0kdPKgqL2AhUIsyoKHfHyCHEQvhd6BQgBEIEB`,name: `תניא`},
{img: `https://www.google.com/aclk?sa=l&ai=DChcSEwjflf-thKL2AhV7j2gJHSBTDH0YABADGgJ3Zg&sig=AOD64_116uRP0lB-p0c2BSU6GuEnsmWc_g&adurl&ctype=5&ved=2ahUKEwi00-6thKL2AhUu2-AKHXJtDM0Qvhd6BAgBEEs`,name: `שלחן ערוך`},
{img: `https://www.google.com/aclk?sa=l&ai=DChcSEwjflf-thKL2AhV7j2gJHSBTDH0YABADGgJ3Zg&sig=AOD64_116uRP0lB-p0c2BSU6GuEnsmWc_g&adurl&ctype=5&ved=2ahUKEwi00-6thKL2AhUu2-AKHXJtDM0Qvhd6BAgBEEs`,name: `שיחות`},
{img: `https://www.google.com/aclk?sa=l&ai=DChcSEwjtjdmghaL2AhXyg4MHHeA5C4EYABAJGgJlZg&sig=AOD64_1-vgLXtvrNdWw_hDffYhpAggYupw&adurl&ctype=5&ved=2ahUKEwje0r2ghaL2AhUyi_0HHaWRDNQQvhd6BAgBEFk`,name: `מאמרים`},
{img: `https://www.google.com/url?sa=i&url=https%3A%2F%2Fhe.wikipedia.org%2Fwiki%2F%25D7%2594%25D7%2599%25D7%2595%25D7%259D_%25D7%2599%25D7%2595%25D7%259D&psig=AOvVaw0lKUufkwdwC9VY8_GirHFb&ust=1646125782105000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCPiT4oiHovYCFQAAAAAdAAAAABAK`,name: `היום יום`},
]

const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('/get-books' ,function (req, res) {
    console.log(req.query)
    const books = req.query.books
    console.log(books)


    const img = req.query.img
    if(books){
    const filterdbooks = books.filter(auto => auto.name === books); 
    res.send(filterdbooks) 
    }else if(img){
        const filterimg = books.filter(auto => auto.img === img); 
        res.send(filterdimg)
    } 
    else{
        res.send(books)
    }
})


app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});




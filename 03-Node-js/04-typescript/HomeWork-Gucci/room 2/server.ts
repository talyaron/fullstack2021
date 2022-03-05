const uid = function () {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
  };

import express from 'express';
const app = express();
const port = process.env.PORT || 3000;




interface product {
    id: string;
    title: string;
    price: number;
    gender: string;
    category: "Sneakers" | "Boots" | "Hi Tops" | "Flip Flops";
    pictureFront: string;
    pictureBack: string;
    color: string;
    description: string;
    shoeSize: number;
  }

const shoes:Array<product> = [
    {id: uid(), title: "superstar shoes", price:100, gender:"unisex",category:"Hi Tops",pictureFront:"https://st-adidas-isr.mncdn.com/content/images/thumbs/0086956_x-speedflow1-messi-firm-ground-boots_fy6879_top-portrait-view.jpeg", pictureBack:"https://st-adidas-isr.mncdn.com/content/images/thumbs/0086954_x-speedflow1-messi-firm-ground-boots_fy6879_side-lateral-center-view.jpeg",color:"blue",description:"B-ball legend. Street symbol. Cultural icon. Still going strong after five decades, the adidas Superstar Shoes have millions of stories to tell. Smooth leather combines with serrated 3-Stripes and the authentic rubber shell toe. Ready for the next fifty years of iconic adidas style? Lets do it.",shoeSize:44 },
    {id: uid(), title: "superstar shoes", price:300, gender:"men",category:"Sneakers",pictureFront:"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/829f3fe9a70e4876ada3ad52007abce2_9366/4DFWD_Shoes_White_Q46448_02_standard.jpg", pictureBack:"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/9083f87851264ec0a264ad52007aaf27_9366/4DFWD_Shoes_White_Q46448_01_standard.jpg",color:"white",description:"B-ball legend. Street symbol. Cultural icon. Still going strong after five decades, the adidas Superstar Shoes have millions of stories to tell. Smooth leather combines with serrated 3-Stripes and the authentic rubber shell toe. Ready for the next fifty years of iconic adidas style? Lets do it.",shoeSize:45 },
    {id: uid(), title: "superstar shoes", price:200, gender:"women",category:"Boots",pictureFront:"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/6de0c5963a954ae3bbc5ad7400b4be9e_9366/adidas_Racer_TR21_x_LEGO(r)_Shoes_White_GW3680_02_standard_hover.jpg", pictureBack:"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/7a378343253d4f73817cad7400b4b0b1_9366/adidas_Racer_TR21_x_LEGO(r)_Shoes_White_GW3680_01_standard.jpg",color:"white",description:"B-ball legend. Street symbol. Cultural icon. Still going strong after five decades, the adidas Superstar Shoes have millions of stories to tell. Smooth leather combines with serrated 3-Stripes and the authentic rubber shell toe. Ready for the next fifty years of iconic adidas style? Lets do it.",shoeSize:42 },
    {id: uid(), title: "superstar shoes", price:100, gender:"unisex",category:"Hi Tops",pictureFront:"https://st-adidas-isr.mncdn.com/content/images/thumbs/0086956_x-speedflow1-messi-firm-ground-boots_fy6879_top-portrait-view.jpeg", pictureBack:"https://st-adidas-isr.mncdn.com/content/images/thumbs/0086954_x-speedflow1-messi-firm-ground-boots_fy6879_side-lateral-center-view.jpeg",color:"blue",description:"B-ball legend. Street symbol. Cultural icon. Still going strong after five decades, the adidas Superstar Shoes have millions of stories to tell. Smooth leather combines with serrated 3-Stripes and the authentic rubber shell toe. Ready for the next fifty years of iconic adidas style? Lets do it.",shoeSize:44 },
    {id: uid(), title: "superstar shoes", price:300, gender:"men",category:"Sneakers",pictureFront:"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/829f3fe9a70e4876ada3ad52007abce2_9366/4DFWD_Shoes_White_Q46448_02_standard.jpg", pictureBack:"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/9083f87851264ec0a264ad52007aaf27_9366/4DFWD_Shoes_White_Q46448_01_standard.jpg",color:"white",description:"B-ball legend. Street symbol. Cultural icon. Still going strong after five decades, the adidas Superstar Shoes have millions of stories to tell. Smooth leather combines with serrated 3-Stripes and the authentic rubber shell toe. Ready for the next fifty years of iconic adidas style? Lets do it.",shoeSize:45 },
    {id: uid(), title: "superstar shoes", price:200, gender:"women",category:"Boots",pictureFront:"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/6de0c5963a954ae3bbc5ad7400b4be9e_9366/adidas_Racer_TR21_x_LEGO(r)_Shoes_White_GW3680_02_standard_hover.jpg", pictureBack:"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/7a378343253d4f73817cad7400b4b0b1_9366/adidas_Racer_TR21_x_LEGO(r)_Shoes_White_GW3680_01_standard.jpg",color:"white",description:"B-ball legend. Street symbol. Cultural icon. Still going strong after five decades, the adidas Superstar Shoes have millions of stories to tell. Smooth leather combines with serrated 3-Stripes and the authentic rubber shell toe. Ready for the next fifty years of iconic adidas style? Lets do it.",shoeSize:42 }
];

app.use(express.static("public"));
app.use(express.json());

app.get("/get-all-shoes", (req, res) => {
    const shoes = getShoes();
    res.send(shoes);
  });

  app.post("/add-Shoe", (req, res) => {
    console.log(req.body);
    const newTitle = req.body.title;
    const newPrice = req.body.price;
    const newGender = req.body.gender;
    const newCategory = req.body.category;
    const newPictureFront= req.body.pictureFront;
    const newPictureBack= req.body.pictureBack;
    const newColor= req.body.color;
    const newDescription= req.body.description;
    const newShoeSize= req.body.shoeSize;
    const shoes = addShoe(newTitle,newPrice,newGender,newCategory,newPictureFront,newPictureBack,newColor,newDescription,newShoeSize);
    res.send(shoes)
  });


  function getShoes() {
    return shoes;
  }


  

  function addShoe(title: string,price: number,gender: string,category: "Sneakers" | "Boots" | "Hi Tops" | "Flip Flops",pictureFront: string,pictureBack: string,color: string,description: string,shoeSize: number){
      const id:string = Math.random().toString(36);
      shoes.push({id,title,price,gender,category,pictureFront,pictureBack,color,description,shoeSize})
      return shoes;
  }







app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});

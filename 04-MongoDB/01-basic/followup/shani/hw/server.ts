import express from 'express';
const app = express();
const port = process.env.PORT || 3058;
app.use(express.static("public"));
app.use(express.json());

import mongoose from "mongoose";
//connects to my database which i just created called DunderMifflin
mongoose.connect('mongodb+srv://ShaniRom:ynbUaPL3oHZKGl8a@cluster0.vh1hg.mongodb.net/DunderMifflin?retryWrites=true&w=majority');



const EmployeeSchema = new mongoose.Schema({
    firstName:String,
    lastName:String,
    imgUrl:String,
    role:String

})

//'DunderMifflinEmployee', is my collection and it will work by the EmployeeSchema template 
const Employee= mongoose.model('DunderMifflinEmployee', EmployeeSchema)

// app.get("/get-employees", async(req,res)=>{

// })

app.post("/add-employee", async(req,res)=>{
    try{
        const{firstName,lastName,imgUrl,role}=req.body;
        const newEmployee= new Employee({firstName,lastName,imgUrl,role})
        const data= await newEmployee.save();
        //.save saves it to the mongoDB
        console.log(data)
        res.send(data)

        if (!firstName || !lastName ||!imgUrl ||!role) throw new Error("no values in app.post(add-employee)");

    }catch(error){
        console.error(error)
        res.send({error: error.message})

    }
});




app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});

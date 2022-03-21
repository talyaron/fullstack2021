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


//start with add so you can see if it shows on the page or add from the mongodb
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

app.get("/get-employee",async(req,res)=>{

    //Employee holds the info. when the{} are empty it means it shows everything
    const employees= await Employee.find({})
    res.send({theEmployees:employees})
})

app.get("/get-salesman",async(req,res)=>{

    //Employee holds the info. it is finding here everything with the role of salesman
    const salesman= await Employee.find({role:"Salesman"})
    res.send({theEmployees:salesman})
})

app.get("/get-useless",async(req,res)=>{

    //Employee holds the info. here is finding here everything with the name toby
    const useless= await Employee.find({firstName:"Toby"})
    res.send({theEmployees:useless})
})

app.patch("/update-role",async(req,res)=>{
    try{
        const {employeeId,role}=req.body;
        if(employeeId && role){
            //we found the user by its id and then we update the role
            const employees= await Employee.updateOne({_id:employeeId},{role:role})
            res.send({theEmployees:employees})
        }else{
            throw new Error("employeeId or role is missing")
        }
    }catch(error){
        console.log(error.error);
        res.send({error:error.message})
    }
})

app.delete("/delete-employee", async(req,res)=>{
    try{
        const{employeeId}=req.body;
        if(employeeId){
            //deletes by the id 
            const deletedEmployee= await Employee.deleteOne({_id:employeeId})
            res.send({theDeletedEmployee:deletedEmployee})
        }else{
            throw new Error("employeeId is missing")
        }

    }catch(error){
        console.log(error.error);
        res.send({error:error.message})
    }
});




app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});

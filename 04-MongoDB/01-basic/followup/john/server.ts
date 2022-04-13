import express from "express";
const app = express();
const port: number = 3000;

app.use(express.static("public"));
app.use(express.json());
app.post('/add-user',async(req,res)=>{
    try{
        let{username,password}=req.body;
    }catch(error){
}
})



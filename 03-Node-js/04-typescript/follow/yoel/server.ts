
import express from 'express';
const app = express();
const port = process.env.PORT || 3000;
app.use(express.static("public"));//only in this way , we have secceed to the folder "pablic" in their files 
app.use(express.json());

interface Student {
  name:string, 
  id:string
}
const student = [
  { name: 'yoel', id: '19' },
  { name: 'daniel', id: "21" }
]
app.get("/get-student" , (req ,res)=>{
    const student = getstudent();
    res.send(student);
})
app.post("/add-student" ,(req , res)=>{
  
  console.log(req.body);
  const newStudent = req.body.name;
  
  const student = addStudent(newStudent)
  res.send(student)
})
function addStudent(name){
  const id:string = Math.random().toString(36);
  student.push({name , id})
  return student;
}
function getstudent(){
  return student;
}

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});

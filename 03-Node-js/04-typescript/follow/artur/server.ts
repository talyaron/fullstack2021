import express, { request } from 'express';
const app = express();
const port = 3000;
app.use(express.static("public"));
app.use(express.json());
app.get('/', (req, res) => {

});
const Students = [{name:"noa" , id:0}]
function getStudents(){
    return Students

}
app.post("/add-student") , (req,res) =>{
    console.log(req.body);
    const newStudent = req.body.name;

}
app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
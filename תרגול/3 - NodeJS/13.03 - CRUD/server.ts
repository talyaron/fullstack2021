import express from "express";
const app = express();
const port: number = 30001;
app.use(express.json());
app.use(express.static("public"));

let tasks = [
    { id: "1", title: "one" },
    { id: "2", title: "two" },
    { id: "3", title: "three" },
    { id: "4", title: "four" }
]

app.listen(port, () => {
    console.log(`Server listen on port http://localhost:${port}`);
});


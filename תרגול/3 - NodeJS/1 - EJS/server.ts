import express from "express";
const app = express();
const port: number = 3000;

interface User {
    name: string,
    age: number
}
const users: Array<User> = [
    { name: "aaa", age: 15 },
    { name: "bbb", age: 23 },
    { name: "ccc", age: 43 },
    { name: "ddd", age: 56 },
    { name: "eee", age: 78 }
]


app.listen(port, () => {
    console.log(`Server listen on port http://localhost:${port}`);
});


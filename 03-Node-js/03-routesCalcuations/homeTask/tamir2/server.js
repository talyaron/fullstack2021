const express = require('express');
const {
    title
} = require('process');
const app = express()
const port = process.env.PORT || 3000;

const data1 = [{
    title: 'facbook',
    text: 'in facbook we heve a lot of friends'
}]


app.use(express.static("public"));

app.get('/tamir', function (req, res) {
        const user = req.query.user;
        const filterdata1 = filterduser(user)
        res.send(filterdata1)
    }),
    function filterduser(user) {
        if (user) {
            const regex = new RegExp(user, "i")
            return data1.filter((user) => regex.test(user.title) || regex.test(user.text))
        }
    }

app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});
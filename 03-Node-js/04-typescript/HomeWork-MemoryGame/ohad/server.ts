import express from 'express';
const app = express();
const port = process.env.PORT || 3000;
app.use(express.static("public"));
app.use(express.json());

const cards = [
    { name: 'frog',  url: 'https://h5p.org/sites/default/files/h5p/content/441774/images/image-5c73c2eab7464.png'},
    { name: 'cow', url: 'https://h5p.org/sites/default/files/h5p/content/441774/images/image-5c73c2f5a07ac.png'},
    { name: 'elephant', url: 'https://h5p.org/sites/default/files/h5p/content/441774/images/image-5c73c3070603f.png'},
    { name: 'dog', url: 'https://h5p.org/sites/default/files/h5p/content/441774/images/image-5c73c35b6bd02.png'},
    { name: 'cat', url: 'https://h5p.org/sites/default/files/h5p/content/441774/images/image-5c73c3360c26a.png'},
    { name: 'Chicken', url: 'https://h5p.org/sites/default/files/h5p/content/441774/images/image-5c73c3c3276ba.png'},
    // { name: 'bird', url: 'https://h5p.org/sites/default/files/h5p/content/441774/images/image-5c73c2fe20e2e.png'},
    { name: 'frog',  url: 'https://h5p.org/sites/default/files/h5p/content/441774/images/image-5c73c2eab7464.png'},
    { name: 'cow', url: 'https://h5p.org/sites/default/files/h5p/content/441774/images/image-5c73c2f5a07ac.png'},
    { name: 'elephant', url: 'https://h5p.org/sites/default/files/h5p/content/441774/images/image-5c73c3070603f.png'},
    { name: 'dog', url: 'https://h5p.org/sites/default/files/h5p/content/441774/images/image-5c73c35b6bd02.png'},
    { name: 'cat', url: 'https://h5p.org/sites/default/files/h5p/content/441774/images/image-5c73c3360c26a.png'},
    { name: 'Chicken', url: 'https://h5p.org/sites/default/files/h5p/content/441774/images/image-5c73c3c3276ba.png'},
    // { name: 'bird', url: 'https://h5p.org/sites/default/files/h5p/content/441774/images/image-5c73c2fe20e2e.png'},
    
]


app.get('/get-cards', (req, res) => {
  res.send(cards);
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});

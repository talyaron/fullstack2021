import { useState } from "react";
import './view/styles/global.scss';
import { Typography, Input } from '@mui/material'


interface Image {
  title: string,
  url: string,
  id: any
}


let id: any = 0
function App() {
  const [title, setTitle] = useState<string>('enter title')
  const [url, setUrl] = useState<string>('enter image url')
  const [images, setImages] = useState<Array<Image>>([])

  function handleDelete(id: any) {
    console.log(id)
    setImages(images.filter(image => image.id !== id))

    console.log(images);

  }

  function handleCreateImage(ev: any) {
    ev.preventDefault()
    setTitle(ev.target.elements.title.value)
    setUrl(ev.target.elements.url.value)
    id = id + 1
    const newImage: any = { title, url, id }
    setImages([...images, newImage])
    console.log(images)
  }

  function handleUpdateImage(ev: any) {
    ev.preventDefault()
    const newTitle = ev.target.elements.newTitle.value
    const index = images.findIndex(image => image.id === id)
    images[index].title = newTitle
    setImages([...images])
    console.log(images);

  }


  return (
    <div className="App">
      <header className="App-header">
        <Typography variant="h1" position={"relative"}>Enter your image title and URL</Typography>
        <form onSubmit={handleCreateImage}>
          <Input type="text" name="title" placeholder="title" />
          <Input type="text" name="url" placeholder="url" />
          <Input type="submit" />
        </form>

        {images.map((image, i) =>
          <div key={i}>
            <button onClick={() => handleDelete(image.id)}>X</button>
            <h2>{image.title}</h2>
            <img src={url} />
            <form onSubmit={handleUpdateImage}>
              <Input type="text" name="newTitle" placeholder="enter new title" />
              <Input type="submit" />
            </form>
          </div>)}
      </header>
    </div>
  );
}

export default App;

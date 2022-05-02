import { useState } from "react";

interface Image {
  title: string,
  url: string,
  id:any
}


let id:any = 0
function ImageInput() {
  const [title, setTitle] = useState<string>('enter title')
  const [url, setUrl] = useState<string>('enter image url')
  const [images, setImages] = useState<Array<Image>>([])

  function handleDelete(id){
    const deletedId = images.filter((image)=>image.id !== id)
    setImages(deletedId)
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
  
  return (
    <div className="img-input">
      <form onSubmit={handleCreateImage}>
        <input type="text" name="title" placeholder="title" />
        <input type="text" name="url" placeholder="url" />
        <input type="submit" />
      </form>

      {images.map((image,i)=>
      <div key={i}>
        <button onClick={handleDelete}>X</button>
      <h2>{image.title}</h2>
      <img src={url} />
      </div>)}

    </div>
  )
  
}

export default ImageInput
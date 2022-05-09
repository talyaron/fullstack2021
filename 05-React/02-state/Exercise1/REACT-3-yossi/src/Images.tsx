
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { useState } from 'react'


function uid() {
    return Math.random().toString(36).slice(-4)
}
interface Image {
    title: string,
    url: string,
    id: any
}

function Images() {
    const [title, setTitle] = useState<string>('enter title')
    const [url, setUrl] = useState<string>('enter image url')
    const [images, setImages] = useState<Array<Image>>([])
    console.log(images)
    function handleCreateImage(ev: any) {
        ev.preventDefault()

        setTitle(ev.target.title.value)
        setUrl(ev.target.url.value)
        let newImage: any = { title, url, id: uid() }
        setImages([...images, newImage])
    }

    function handleDelete(id: any) {
        console.log(id)
        const newImages = images.filter(image => image.id !== id)
        setImages([...newImages])
        console.log(newImages)
    }

    function handleUpdateImageName(ev: any, id: any) {
        ev.preventDefault()
        const newTitle = ev.target.elements.newTitle.value
        const index = images.findIndex(image => image.id === id)
        images[index].title = newTitle
        setImages([...images])
    }

    return (
        <header className="App-header">
            <h1>Enter your image title and URL</h1>
            <form className="card" onSubmit={handleCreateImage}>
                <input type="text" name="title" placeholder="title" />
                <input type="text" name="url" placeholder="url" />
                <input type="submit" className="submit" />
            </form>
            <TransitionGroup component="ul">
                {images.map((image, id) =>
                    <CSSTransition key={id} timeout={1000} classNames="item">
                        <div>
                            <h2>{image.title}</h2>
                            <img src={image.url} alt="" />
                            <form onSubmit={(ev) => handleUpdateImageName(ev, image.id)}>
                                <input type="text" name="newTitle" placeholder="enter new title" />
                                <input type="submit" className="submit" />
                                <div className="delete"><button onClick={() => handleDelete(image.id)}>DELETE</button></div>
                            </form>
                        </div></CSSTransition>)}
            </TransitionGroup>  </header>
    )
}

export default Images
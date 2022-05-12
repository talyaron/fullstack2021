import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { useState } from 'react'
import Update from "./Update";
import Footer from './Footer';

function uid() {
    return Math.random().toString(36).slice(-4)
}

interface Image {
    title: string,
    url: string,
    id: any
}

function Images() {

    const [images, setImages] = useState<Array<Image>>([]);
    const [count, setCount] = useState<number>(0)
    const [imageId, setImageId] = useState()
    const [imageTitel, setImageTitel] = useState()
    const [imageUrl, setImageUrl] = useState()

    function handleCreateImage(ev: any) {
        ev.preventDefault();
        const title: string = ev.target.title.value;
        const url: string = ev.target.url.value;
        let newImage: Image = { title: title, url: url, id: uid() };
        setImages([...images, newImage]);

        let count: any = images.length + 1
        setCount(count)
        ev.target.reset()
        console.log(images, count)
    }


    function handleUpdateFooter(ev: any, id: any, title: any, url: any) {
        ev.preventDefault()
        console.log(id, title, url)
        let imageId = id
        let imageTitel = title
        let imageUrl = url
        setImageId(imageId)
        setImageTitel(imageTitel)
        setImageUrl(imageUrl)
        handleUpdateImageName(ev,id)
        ev.target.reset()
    }


    function handleUpdateImageName(ev: any, id: any) {
        ev.preventDefault()
        const newTitle = ev.target.newTitle.value
        const newUrl = ev.target.newUrl.value
        const index = images.findIndex(image => image.id === id)
        images[index].title = newTitle
        images[index].url = newUrl

        setImages([...images])
        console.log('update', images)
    }

    function handleDelete(id: any) {
        const newImages = images.filter(image => image.id !== id)
        setImages(newImages)
        setCount(newImages.length)
        console.log('delete', newImages, count)
    }


    return (
        <div>
            <div className='header'><h1>{count}</h1></div>
            <div className="App-body">
                <div><h1>Enter your image title and URL</h1></div>
                <div className="form" ><form onSubmit={handleCreateImage}>
                    <input type="text" name="title" placeholder="title" />
                    <input type="text" name="url" placeholder="url" />
                    <input type="submit" className="submit" value={'ADD NEW IMAGE'} />
                </form></div>

                <div className='card-wrapper'>
                    <TransitionGroup component="ul">
                        {images.map((image, id) =>
                            <CSSTransition key={id} timeout={700} classNames="item">
                                <div className='card'>
                                    <div><h2>{image.title}</h2></div>
                                    <div><button onClick={(ev) => handleUpdateFooter(ev, image.id, image.title, image.url)}><img src={image.url} alt="" /></button></div>

                                    <Update image={image} url={image.url} title={image.title} handleUpdateImageName={handleUpdateImageName} handleDelete={handleDelete} />

                                </div>
                            </CSSTransition>)}
                    </TransitionGroup >
                   
                </div>
                <div className='footer'><Footer handleUpdateFooter={handleUpdateFooter} handleDelete={handleDelete} id={imageId} title={imageTitel} url={imageUrl}/></div>
            </div>
        </div>
    )
}

export default Images
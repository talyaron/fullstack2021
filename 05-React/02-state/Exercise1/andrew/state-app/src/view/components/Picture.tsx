import { Img } from '../../App'
interface pictureProp {
    picture: Img;
    deleteFunction: Function;
    updateFunction: Function;
}

const Picture = (props: pictureProp) => {
    const { picture, deleteFunction, updateFunction } = props
    return (
        <div className='image'>
            <h3>{picture.text}</h3>
            <img src={picture.img} alt={picture.text} />
            <button onClick={() => deleteFunction(picture.id)}>Delete</button>
            <button onClick={() => updateFunction(picture.id)}>update</button>
        </div>
    )
}

export default Picture;
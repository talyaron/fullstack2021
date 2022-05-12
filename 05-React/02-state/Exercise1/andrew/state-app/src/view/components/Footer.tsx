import { Img } from '../../App';
interface HeaderProps {
    picture: Img;
    updateFunction: Function;
}
const Footer = (props: HeaderProps) => {
    const { picture, updateFunction } = props;
    return (

        <form onSubmit={(event) => updateFunction(picture.id, event)} className='footer in-vis'>
            <label htmlFor="text">Update image name</label>
            <input type="text" name='text' id='text' defaultValue={picture.text}/>
            <label htmlFor="img">Update image URL</label>
            <input type="text" name='img' id='img' defaultValue={picture.img} />
            <input type="submit" />
        </form>

    )
}

export default Footer;
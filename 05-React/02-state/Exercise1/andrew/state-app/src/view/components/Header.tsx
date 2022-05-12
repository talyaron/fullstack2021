import { Img } from '../../App';

interface HeaderProps{
    pictures: Array<Img>;
}

const Header = (props:HeaderProps) => {
    const {pictures}  = props;
    return (
        <div>
            <h3>Total Amount of Items: {pictures.length}</h3>
        </div>
    )
}

export default Header;
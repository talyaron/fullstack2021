import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Button from '@mui/material/Button';

interface PopUpProps {
    handleImg: Function;
}


const PopUpsAttach = (props: PopUpProps ) => {
    const {handleImg} = props;

    return (
        <div>
            <input type="file" name="img" className='imgInput' onChange={(event) => { handleImg(event) }} />
            <Fab className='add' color="primary" aria-label="add" >
                <AddIcon />
            </Fab>
            <Fab className='edit' color="secondary" aria-label="edit">
                <EditIcon />
            </Fab>
            <Fab className='like' color="success" name="like" aria-label="like" >
                <FavoriteIcon />
            </Fab>
        </div>
    )
}

export default PopUpsAttach
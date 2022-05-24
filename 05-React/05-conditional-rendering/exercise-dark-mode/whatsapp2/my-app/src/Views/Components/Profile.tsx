import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';
import AddSharpIcon from '@mui/icons-material/AddSharp';
import couple from '../images/couple.png';

const Profile = () => {
  return (
    <div className='box profile'>
      <div>
      <MoreHorizRoundedIcon className='dots' fontSize='small'/>
      <AddSharpIcon className='sharp'/>
      </div>
      <img src={couple} />

    </div>
  )
}

export default Profile
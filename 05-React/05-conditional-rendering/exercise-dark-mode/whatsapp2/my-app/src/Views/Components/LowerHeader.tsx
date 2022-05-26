import frankel from '../images/frankel.png';
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';
import SearchIcon from '@mui/icons-material/Search';
import Switch from '@mui/material/Switch';

interface LowerHeader {
  setDark: Function;
  dark: Boolean;
}


const LowerHeader = (props: LowerHeader) => {
  const {dark, setDark} = props;

  return (

    <div className='box lowerHeader'>
      <div className="icon">
        <MoreHorizRoundedIcon className='dots' fontSize='small' />
        <SearchIcon className='magnify' />
      </div>
      <p style={{ color: 'grey' }}>לחץ כאן לפרטי הקבוצה</p>
      <h3>הפרנקלים</h3>
      <img src={frankel} alt="" />
      <Switch onChange={()=> {
        setDark(!dark);
      }} />

    </div>

  )
}

export default LowerHeader
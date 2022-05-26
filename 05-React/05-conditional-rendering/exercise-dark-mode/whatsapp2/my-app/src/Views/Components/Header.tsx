import CloseIcon from '@mui/icons-material/Close';
import MinimizeIcon from '@mui/icons-material/Minimize';
import attachm from '../../../images/attachm.png';

interface HeaderProps {
  dark: Boolean;
}


const Header = (props: HeaderProps) => {
  const {dark} = props;

  return (
    <div className='box header' style={dark? {background: "rgb(70, 170, 110)"} : {background: "grey"}}>
      <div className="minimize">
        <CloseIcon />
        <MinimizeIcon className='minimizeIcon' />
      </div>
      <div className="whatsApp">WhatsApp</div>
    </div>
  )
}

export default Header
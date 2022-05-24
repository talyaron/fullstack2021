import frankel from '../images/frankel.png';
import attachm from '../images/attachm.png';
import couple from '../images/couple.png';


const DashBoard = () => {
  return (
    <div className='box dashboard'>
      <div className="box">
        <p>משפחת סיון</p>
        <img src={frankel} alt="" />
      </div>
      <div className="box">
        <p>משפחת סיון</p>
        <img src={frankel} alt="" />
      </div>
      <div className="box">
        <p>משפחת סיון</p>
        <img src={couple} alt="" />
      </div>
      <div className="box">
        <p>משפחת סיון</p>
        <img src={frankel} alt="" />
      </div>
      <div className="box">
        <p>משפחת סיון</p>
        <img src={attachm} alt="" />
      </div>
      <div className="box">
        <p>משפחת סיון</p>
        <img src={couple} alt="" />
      </div>
    </div>
  )
}

export default DashBoard
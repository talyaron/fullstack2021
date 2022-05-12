import {Overscroll} from '../../overscroll/overscroll'

function Eegg2() {
    const overscroll = new Overscroll;
    window.onload = function () {
        overscroll.bindElement(document.querySelector('.Eegg2'), 'top')
    }
  return (
        <p className="Eegg2">
        מה זה ESLint?
        </p>
  )
}

export default Eegg2
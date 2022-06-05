import {motion} from 'framer-motion'
import { createBrowserHistory } from 'history';


function Next() {
    const history = createBrowserHistory();

  return (
    <button className="comp-backButton"
    onClick={() => {
console.dir(history);
console.log(history.location.pathname.at(-1));
const current:any = history.location.pathname.at(-1);


    }}
  >
    next
  </button>
  )
}

export default Next
import {motion} from 'framer-motion'
import { createBrowserHistory } from 'history';


function Back() {
    const history = createBrowserHistory();

  return (
    <button className="comp-backButton"
      onClick={() => {
        history.go(-1);
        
      }}
    >
      Back
    </button>
  );
}

export default Back;

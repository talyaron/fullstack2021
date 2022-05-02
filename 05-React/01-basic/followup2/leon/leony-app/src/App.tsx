import React from 'react';
import logo from './logo.svg';
import Footer from './view/components/Footer';
import Box from './view/components/Box';
import './styles/global.scss';
import { text } from 'stream/consumers';
interface BoxProps {
  text: String;
  title: String;
  img: String;
}
const boxes = [

  { title: 'Manchester', text: 'United', img: <img src="https://imgresizer.eurosport.com/unsafe/1200x0/filters:format(jpeg):focal(1025x302:1027x300)/origin-imgresizer.eurosport.com/2021/09/17/3221931-65955888-2560-1440.jpg" alt="" />  },
  { title: 'Manchester', text: 'United', img: <img src="https://imgresizer.eurosport.com/unsafe/1200x0/filters:format(jpeg):focal(1025x302:1027x300)/origin-imgresizer.eurosport.com/2021/09/17/3221931-65955888-2560-1440.jpg" alt="" />  },
  { title:'Manchester', text: 'United', img: <img src="https://imgresizer.eurosport.com/unsafe/1200x0/filters:format(jpeg):focal(1025x302:1027x300)/origin-imgresizer.eurosport.com/2021/09/17/3221931-65955888-2560-1440.jpg" alt="" />  },
  { title:'Manchester', text: 'United', img: <img src="https://imgresizer.eurosport.com/unsafe/1200x0/filters:format(jpeg):focal(1025x302:1027x300)/origin-imgresizer.eurosport.com/2021/09/17/3221931-65955888-2560-1440.jpg" alt="" />  },
  { title:'Manchester', text: 'United', img: <img src="https://imgresizer.eurosport.com/unsafe/1200x0/filters:format(jpeg):focal(1025x302:1027x300)/origin-imgresizer.eurosport.com/2021/09/17/3221931-65955888-2560-1440.jpg" alt="" />  },
  { title:'Manchester', text: 'United', img: <img src="https://imgresizer.eurosport.com/unsafe/1200x0/filters:format(jpeg):focal(1025x302:1027x300)/origin-imgresizer.eurosport.com/2021/09/17/3221931-65955888-2560-1440.jpg" alt="" />  },
  { title:'Manchester', text: 'United', img: <img src="https://imgresizer.eurosport.com/unsafe/1200x0/filters:format(jpeg):focal(1025x302:1027x300)/origin-imgresizer.eurosport.com/2021/09/17/3221931-65955888-2560-1440.jpg" alt="" />  },
  { title:'Manchester', text: 'United', img: <img src="https://imgresizer.eurosport.com/unsafe/1200x0/filters:format(jpeg):focal(1025x302:1027x300)/origin-imgresizer.eurosport.com/2021/09/17/3221931-65955888-2560-1440.jpg" alt="" />  },
  { title:'Manchester', text: 'United', img: <img src="https://imgresizer.eurosport.com/unsafe/1200x0/filters:format(jpeg):focal(1025x302:1027x300)/origin-imgresizer.eurosport.com/2021/09/17/3221931-65955888-2560-1440.jpg" alt="" />  },
  { title:'Manchester', text: 'United', img: <img src="https://imgresizer.eurosport.com/unsafe/1200x0/filters:format(jpeg):focal(1025x302:1027x300)/origin-imgresizer.eurosport.com/2021/09/17/3221931-65955888-2560-1440.jpg" alt="" />  },
]

function App() {
  

  
  return (
    <div className="App">
<div className="footer">
<Footer text='HJVHVH'/>


</div>
      
      {boxes.map((box, i) => { return <Box key={i} img={box.img} text={box.text} title={box.title} /> })}
    </div>
  );
}

export default App;

import React from 'react';
import logo from './logo.svg';

import Box from './view/components/Box';
import './styles/global.scss';
import { text } from 'stream/consumers';



function App() {
  

  const boxes = [

    { title: 'sdfsd', text: 'asdad', img: <img src="https://imgresizer.eurosport.com/unsafe/1200x0/filters:format(jpeg):focal(1025x302:1027x300)/origin-imgresizer.eurosport.com/2021/09/17/3221931-65955888-2560-1440.jpg" alt="" />  },
    { title: 'fdsafsd', text: 'asdad', img: <img src="https://imgresizer.eurosport.com/unsafe/1200x0/filters:format(jpeg):focal(1025x302:1027x300)/origin-imgresizer.eurosport.com/2021/09/17/3221931-65955888-2560-1440.jpg" alt="" />  },
    { title:'dfsdsf', text: 'asdad', img: <img src="https://imgresizer.eurosport.com/unsafe/1200x0/filters:format(jpeg):focal(1025x302:1027x300)/origin-imgresizer.eurosport.com/2021/09/17/3221931-65955888-2560-1440.jpg" alt="" />  },

  ]
  return (
    <div className="App">

      {boxes.map((box) =>(box.title, box.text, box.img))}
    </div>
  );
}

export default App;

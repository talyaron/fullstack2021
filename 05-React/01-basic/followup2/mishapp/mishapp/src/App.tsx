
import Box from './view/components/Box';

import './view/styles/global.scss';

interface BoxProps {
  img: string;
}

const boxes: Array<BoxProps> = [

  {img:'https://upload.wikimedia.org/wikipedia/en/thumb/1/17/Bugs_Bunny.svg/1200px-Bugs_Bunny.svg.png'},
  {img:'https://www.google.com/url?sa=i&url=https%3A%2F%2Far.linkedin.com%2Fcompany%2Fimg-golf-course-management&psig=AOvVaw3dsbk8BbwrFaKO5uQdTq8l&ust=1651317362387000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCNDTttiSufcCFQAAAAAdAAAAABAI'},
  {img:'https://www.google.com/url?sa=i&url=https%3A%2F%2Far.linkedin.com%2Fcompany%2Fimg-golf-course-management&psig=AOvVaw3dsbk8BbwrFaKO5uQdTq8l&ust=1651317362387000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCNDTttiSufcCFQAAAAAdAAAAABAI'},
  {img:'https://www.google.com/url?sa=i&url=https%3A%2F%2Far.linkedin.com%2Fcompany%2Fimg-golf-course-management&psig=AOvVaw3dsbk8BbwrFaKO5uQdTq8l&ust=1651317362387000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCNDTttiSufcCFQAAAAAdAAAAABAI'},
  {img:'https://www.google.com/url?sa=i&url=https%3A%2F%2Far.linkedin.com%2Fcompany%2Fimg-golf-course-management&psig=AOvVaw3dsbk8BbwrFaKO5uQdTq8l&ust=1651317362387000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCNDTttiSufcCFQAAAAAdAAAAABAI'},
  {img:'https://www.google.com/url?sa=i&url=https%3A%2F%2Far.linkedin.com%2Fcompany%2Fimg-golf-course-management&psig=AOvVaw3dsbk8BbwrFaKO5uQdTq8l&ust=1651317362387000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCNDTttiSufcCFQAAAAAdAAAAABAI'},
  {img:'https://www.google.com/url?sa=i&url=https%3A%2F%2Far.linkedin.com%2Fcompany%2Fimg-golf-course-management&psig=AOvVaw3dsbk8BbwrFaKO5uQdTq8l&ust=1651317362387000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCNDTttiSufcCFQAAAAAdAAAAABAI'},
  {img:'https://www.google.com/url?sa=i&url=https%3A%2F%2Far.linkedin.com%2Fcompany%2Fimg-golf-course-management&psig=AOvVaw3dsbk8BbwrFaKO5uQdTq8l&ust=1651317362387000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCNDTttiSufcCFQAAAAAdAAAAABAI'},
  {img:'https://www.google.com/url?sa=i&url=https%3A%2F%2Far.linkedin.com%2Fcompany%2Fimg-golf-course-management&psig=AOvVaw3dsbk8BbwrFaKO5uQdTq8l&ust=1651317362387000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCNDTttiSufcCFQAAAAAdAAAAABAI'}

]


function App() {

  return (
    <div className="App">
        {boxes.map ((box, i) => <Box key={i} img={box.img}/>)}
    </div>
  );
}

export default App;

import {useParams} from 'react-router-dom';

function Combination() {
  const params = useParams();
  const {CombinationType} = params;
  console.log(CombinationType);
  
  return (
    <div>Combination</div>
  )
}

export default Combination
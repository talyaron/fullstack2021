import { useEffect,useState } from 'react'
import axios from "axios";
import { Link} from "react-router-dom";

interface IceCream {
    _id: any;
    flavourType: String;
    name: String;
    img: string;
  }

const Vanilla = () => {
    const [dataVanilla,setDataVanilla]=useState<Array<IceCream>>([]);
    useEffect(()=>{
       (async()=>{
           const {data}=await axios.get('/getVanillaIceCreams');
           console.log(data);
           setDataVanilla(data.vanilla)
       })();
    },[]);

    console.log(dataVanilla)
  return (
    <div >
        <h1>Vanilla</h1>
        {dataVanilla.length>0?(
            <div>
                {dataVanilla.map((vanilla)=>{
                    return (
                        <div key={vanilla._id}>
                            <p>{vanilla.name}</p>
                            <Link to={vanilla._id}>{vanilla.name}</Link>
                        </div>
                    );
                })}
            </div>
        ):(
            <div>no vanilla ice cream available... sorry</div>
        )}

    </div>
  );
};

export default Vanilla
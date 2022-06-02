import React from "react";
import {Outlet, Link} from 'react-router-dom'

interface Types {
    name: string;
    combinationIds: Array<string>;
}

interface HomePageProps {
    iceCreamTypes: Array<Types>
    handleTypeAdd:Function;
    handleCombinationAdd:Function;
}
function HomePage(props: HomePageProps) {
    const {iceCreamTypes , handleTypeAdd, handleCombinationAdd } = props;
  return (
    <div className="wrapper">
      <form
        onSubmit={(ev:any) => {
          handleTypeAdd(ev);
        }}
      >
          <input type="text" name="addType" placeholder="add a new base type" />
          <input type="submit"  />
      </form>
        <div className="wrapper__links">{iceCreamTypes? iceCreamTypes.map((iceCream, i) => {return(<Link key={i} to={iceCream.name}>{iceCream.name}</Link>)}):<div></div>}</div>
      <form className="wrapper__combination-form"
        onSubmit={(ev:any) => {
          handleCombinationAdd(ev);
        }}
      >
          <select name="selectType">
              {iceCreamTypes.map((type, i) =>{
                  return (<option key={i} value={type.name}>{type.name}</option>)
              })}
          </select>

          <textarea >

          </textarea>
      </form>
      <Outlet/>
    </div>
  );
}

export default HomePage;

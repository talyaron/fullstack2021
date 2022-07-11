import React from "react";
import axios from "axios";

const Search = (props:any) => {
  const {users,setUsers} = props;

  async function searchData(ev: any) {
    ev.preventDefault();
    const searchText = ev.target.inputText.value;
    console.log(searchText);

    // const regex = new RegExp(`${searchText}`, "i");
    // console.log(regex);
    // setUsers(searchText);

    const data =  await axios("/matchings/search-matches",searchText).then((data) => console.log(data));
    console.log(data);
    
  }

  React.useEffect(() => {
    axios("/api/matchings/get-matches").then((data) => console.log(data));
      // setUsers(users)
  
  }, [users]);

  return (
    <div>
      <form onSubmit={searchData}>
        <input type="text" name="inputText" />
        <button>search</button>
        <p>{users}</p>
       
      </form>
    </div>
  );
};

export default Search;

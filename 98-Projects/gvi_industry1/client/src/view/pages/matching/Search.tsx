import React from "react";

const Search = (props:any) => {
  const {users,setUsers} = props;

  async function searchData(ev: any) {
    ev.preventDefault();
    const searchText = ev.target.inputText.value;
    console.log(searchText);

    const regex = new RegExp(`${searchText}`, "i");
    console.log(regex);
    setUsers(searchText);
  }

//   React.useEffect(() => {
//     fetch("/get-matches")
//       .then((res) => res.json())
//       .then((data) => console.log(data));
//       setUsers(users)
//   }, [users]);

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

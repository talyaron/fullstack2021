import React from 'react';
import Search from './view/pages/matching/Search';

function App() {
const [users,setUsers] = React.useState([""])
React.useEffect(() => {
  fetch("/get-matches")
    .then((res) => res.json())
    .then((data) => console.log(data));
    setUsers(users)
}, [users]);
  return (
    <div className="App">

  <Search 
  users={users} setUsers={setUsers}/>
{map((user)=>{
  <div>{user}</div>
})} 
  
    </div>
  );
}

export default App;

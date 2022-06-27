import React from 'react';
// import axios from 'axios'

function App() {
const [update,setUpdate] = React.useState(false);

async function searchData(ev:any){
ev.preventDefault();

const searchText = ev.target.inputText.value;
console.log(searchText);

const regex = new RegExp(searchText,'ig') 
console.log(regex);
setUpdate(searchText)
}


React.useEffect(()=>{
fetch("/get-matches")
.then(res=>res.json())
.then(data=>console.log(data))
},[update])
  
  return (
    <div className="App">

   <form    onSubmit={ searchData}>
   <input type="text" name="inputText" />
   <button>search</button>
   <p>{update}</p>
   </form>
    </div>
  );
}

export default App;

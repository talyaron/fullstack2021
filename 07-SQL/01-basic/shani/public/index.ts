async function handleNewDB() {
  try {
    //
     const {data} = await axios.post('/api/create-database',{});
     console.log(data)
    //const {data} = await axios.delete('/api/delete-databse',{});
    console.log(data)
  } catch (error) {
    console.error(error)
  }
};

async function handleNewTable() {
  try {
    
     const {data} = await axios.post('/api/create-table',{});
    
    console.log(data)
  } catch (error) {
    console.error(error)
  }
} 
async function handleAddCat(ev:any) {
  ev.preventDefault()
  try {

  const age=ev.target.elements.age.value;
  const color=ev.target.elements.color.value;
  const owner=ev.target.elements.owner.value;
  
  const name=ev.target.elements.catName.value;
  if(!age || !color ||!owner|| !name) throw new Error('missing data')
  const {data} = await axios.post('/api/add-cat',{color,age,owner,name});
    console.log(data)
  } catch (error) {
    console.error(error)
  }
} 
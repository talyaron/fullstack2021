async function handleClick() {
  try {
    //
    const {data} = await axios.post('/api/create-databse',{});
    // const {data} = await axios.delete('/api/delete-databse',{});
    console.log(data)
  } catch (error) {
    console.error(error)
  }
}

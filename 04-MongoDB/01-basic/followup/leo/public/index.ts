async function handleSubmit(e) {
    e.preventDefault();

    const { name, password } = e.target.elements
    console.log(name.value,password.value);
    

     const {data} = await axios.post('/user', {name: name.value, password: password.value})
    //  console.log(data);
    
}



async function handleRegister(ev) {
    try{
    ev.preventDeafult();

    const { username, password, confirmPassword, email, confirmEmail } = ev.target.elements;

    console.log(username, password, confirmPassword, email, confirmEmail)
    // if (password !== confirmPassword) {
    //     window.alert('passwords dont match')
    // }
    // if (email !== confirmEmail) {
    //     window.alert('emails dont match')
    // }

    // if (password === confirmPassword && email === confirmEmail) {
    //     const {data} = axios.post('/add-user', {username, password, email})
    //     return data
    // }
    }
    catch{
        
    }
}


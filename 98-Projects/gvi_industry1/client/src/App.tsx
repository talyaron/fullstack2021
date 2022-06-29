import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.scss';
import ListAllUsers from './Pages/ListAllUsers';
import UserForm from './View/Components/UserForm';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Pages/Navbar';


function App() {
  const [userList, setUserList] = useState([])
  const [load, isLoad] = useState(false);
  const [RegClassShow, setRegClassShow]: any = useState('formWrapper-none')
  const [RegTwoClassShow, setRegTwoClassShow]: any = useState('formWrapper-none')


  useEffect(() => {
    if (!load) {
      (async () => {
        const { data } = await axios.get('/api/getUsers')
        const allUsers = data.allUsers;
        setUserList(allUsers)
        console.log(allUsers)
      })();
    }
  }, [load])


  async function handleRegister(ev: any) {
    ev.preventDefault();
    handleSubmit(ev)
    const localData: any = localStorage.getItem('newLocalUser')
    const fromLocal = JSON.parse(localData)


    const firstName = fromLocal.firstName
    const lastName = fromLocal.lastName
    const email = fromLocal.email
    const phone = fromLocal.phone
    const Linkedin = fromLocal.Linkedin
    const country = fromLocal.country

    const companyName = ev.target.companyName.value
    const stage = ev.target.elements.stage.value;
    const sectors = ev.target.elements.sectors.value;
    const website = ev.target.website.value
    const presentations = ev.target.elements.presentations.value;
    const linkToOnePager = ev.target.elements.linkToOnePager.value;
    const description = ev.target.elements.description.value;

    const name = { firstName, lastName };

    const userFormAll = { name, email, phone, Linkedin, country, companyName, stage, sectors, website, presentations, linkToOnePager, description }
    
    console.log(userFormAll)

    isLoad(true)

    const registerResponse = await axios.post('/api/addUser', userFormAll)
  

    if (registerResponse.data === 'Already exists') {
      window.alert('User name Already Exists')
    }
    isLoad(false)
    console.log(registerResponse.data)
    // window.location.reload();
  }


  function handleSubmit(ev: any) {
    ev.preventDefault();

    const companyName = ev.target.companyName.value
    const stage = ev.target.elements.stage.value;
    const sectors = ev.target.elements.sectors.value;
    const website = ev.target.website.value
    const presentations = ev.target.elements.presentations.value;
    const linkToOnePager = ev.target.elements.linkToOnePager.value;
    const description = ev.target.elements.description.value;


    const userForm = { companyName, stage, sectors, website, presentations, linkToOnePager, description }
    return userForm
  }

  function handleShowWindow() {
    setRegClassShow('formWrapper')
  }
  function handleShowWindowTwo() {
    setRegTwoClassShow('formWrapper-none')
  }


  function handLocalStorage(ev: any) {
    ev.preventDefault();

    const firstName = ev.target.firstName.value
    const lastName = ev.target.lastName.value
    const email = ev.target.email.value
    const phone = ev.target.phone.value
    const Linkedin = ev.target.Linkedin.value
    const country = ev.target.country.value


    const userFormLocal: any = { firstName, lastName, email, country, phone, Linkedin }

    localStorage.setItem('newLocalUser', JSON.stringify(userFormLocal))

    setRegTwoClassShow('formWrapper')

    return userFormLocal
  }

  return (
    <div className="App">
      <div>
        <BrowserRouter>
          <Navbar RegClassShow={RegClassShow} handleShowWindow={handleShowWindow} />
          <Routes>
            <Route path='/' element={<ListAllUsers userList={userList} />}></Route>
          </Routes>
        </BrowserRouter>
        <UserForm handleRegister={handleRegister} handLocalStorage={handLocalStorage} RegClassShow={RegClassShow} RegTwoClassShow={RegTwoClassShow} handleShowWindowTwo={handleShowWindowTwo}
        />
      </div>
    </div>
  );
}

export default App;

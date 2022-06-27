import React from 'react';
import './App.css';
import axios from 'axios';
import Card from './view/pages/mentee/Card';
// import Card from './view/pages/mentee/Card';
import Profile from './view/pages/mentee/Profile';

function App() {

  async function handleSubmit(ev: any) {
    ev.preventDefault();
    try {
      const first = ev.target.first.value;
      const last = ev.target.last.value;
      const description = ev.target.description.value;
      const image = ev.target.image.value;
      const email = ev.target.email.value;
      const country = ev.target.country.value;
      const linkedInProfile = ev.target.linkedInProfile.value;
      const phone = ev.target.phone.value;
      const password = ev.target.password.value;
      const profession = ev.target.profession.value;
      const company = ev.target.company.value;
      await axios.post('/api/users/add-user', {
        first,
        last,
        description,
        image,
        email,
        country,
        linkedInProfile,
        phone,
        password,
        profession
      })
      console.log(first, last)
      // ev.target.reset()
    } catch (error) {
      console.error(error);
    }
  }


  async function handleSubmitcomp(ev: any) {
    ev.preventDefault();
    try {
      const id = ev.target.id.value;
      const company = ev.target.company.value;
      await axios.post('/api/companies/add-company', {
        id,
        company
      })
    } catch (error) {
      console.error(error);
    }

  }

  return (
    <>

      <form onSubmit={handleSubmit}>
        <input type="text" name='first' placeholder='first name' />
        <input type="text" name='last' placeholder='last name' />
        <input type="text" name='description' placeholder='description' />
        <input type="text" name='image' placeholder='image' />
        <input type="email" name='email' placeholder='E-mail' />
        <input type="text" name='country' placeholder='country' />
        <input type="link" name='linkedInProfile' placeholder='linkedIn Profile' />
        <input type="text" name='phone' placeholder='phone number' />
        <input type="text" name='password' placeholder='password' />
        <input type="text" name='profession' placeholder='profession' />
        <input type="submit" value='submit' />
      </form>


      <form onSubmit={handleSubmitcomp}>
        <input type="text" name='id' placeholder='id' />
        <input type="text" name='company' placeholder='company name' />
        <input type="submit" value='submit' />
      </form>


      <Card />
      {/* <Profile /> */}

      {/* <Card/> */}
      <Profile _id={"1234"} />

    </>
  )
}

export default App;

import React from 'react'
import {Container} from '@mui/material';
import '../styles/global.scss';

import HeaderComponent from '../components/HeaderComponent'
import FooterComponent from "../components/FooterComponent";
import BodyComponent from "../components/Home/BodyComponent";

import {ICity} from "../../interfaces";
import cities from '../../data.json'

const Home = () => {
    const [citiesData, setCitiesData] = React.useState<ICity[]>(cities)

    const filterCities = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>): void => {
        const newValue = event.currentTarget.value.toLowerCase();
        const foundHotels = cities.map( city => {
            return {
                ...city,
                tours: city.tours.filter( tour => tour.name.toLowerCase().includes(newValue))
            }
        })

        setCitiesData(foundHotels)
    }

  return (
      <>
        <HeaderComponent filterCities={filterCities} />
        <Container sx={{ marginY: 5 }}>
            <BodyComponent citiesData={citiesData}/>
        </Container>
        <FooterComponent />
      </>
  )
}

export default Home

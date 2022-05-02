import React from 'react'
import '../styles/global.scss';
import TourCard from '../components/TourCard';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import SearchAppBar from '../components/Appbar'
import cities from '../../data.json'
import { Typography } from '@mui/material';

const Home = () => {

    const [citiesData, setCitiesData] = React.useState(cities)

    const filterCities = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        const newValue = event.currentTarget.value;
    }

  return (
      <>
    <SearchAppBar filterCities={filterCities} />
    <Container sx={{ marginY: 5 }}>
      {citiesData.map((city) => (
        <>
          <Typography variant='h4' component='h2' marginTop={5} marginBottom={3}>
            Top {city.name} Tours
          </Typography>
          <Grid container spacing={5}>
            {city.tours.map((tour, index) => <TourCard tour={tour} key={index} />)}
          </Grid>
        </>
      )
      )}

    </Container>
    </>
  )
}

export default Home
// import * as React from 'react';
import './view/styles/global.scss';
import TourCard from './view/components/TourCard';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import SearchAppBar from './view/components/Appbar';
import cities from './data.json'
import { Typography } from '@mui/material';

// interface Tour {
//   id: Number
//   name: String
//   duration: Number
//   rating: Number
//   numberOfReviews: Number
//   price: Number;
//   image: String; 
// }

// const tour:Tour = {};

export default function App() {
  return (
    <div className='app'>
      <SearchAppBar />
      <Container sx={{ marginY: 5 }}>
        {cities.map((city) => (
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
    </div>
  );
}
















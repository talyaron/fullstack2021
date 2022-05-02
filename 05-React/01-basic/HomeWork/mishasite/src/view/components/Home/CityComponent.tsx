import {Grid, Typography} from "@mui/material";
import TourCardComponent from "./TourCardComponent";
import React from "react";
import {ICity} from "../../../interfaces";
import NotFoundComponent from "../NotFoundComponent";

interface IProps {
    index: number;
    city: ICity
}

const CityComponent = (props: IProps) => {
    const {index, city} = props

    return (
        <div key={index}>
            <Typography variant='h4' component='h2' marginTop={5} marginBottom={3}>
                Top {city.name} Tours
            </Typography>
            <Grid container spacing={5}>
                {
                    city.tours.length ? city.tours.map((tour, index) =>
                        <TourCardComponent tour={tour} key={index} />) : <NotFoundComponent />
                }
            </Grid>
        </div>
    )
}

export default CityComponent;

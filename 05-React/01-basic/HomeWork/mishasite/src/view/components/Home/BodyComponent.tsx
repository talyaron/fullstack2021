import React from "react";
import {Container} from "@mui/material";
import {ICity} from "../../../interfaces";
import CityComponent from "./CityComponent";

interface IProps {
    citiesData: ICity[]
}

const BodyComponent = (props: IProps) => {
    const {citiesData} = props

    return (
        <Container sx={{ marginY: 5 }}>
            {citiesData.map((city, index) => <CityComponent index={index} city={city}/>)}
        </Container>
    )
}

export default BodyComponent

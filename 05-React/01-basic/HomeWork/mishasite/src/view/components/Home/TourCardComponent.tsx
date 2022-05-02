import { AccessTime } from '@mui/icons-material';
import {Rating, Typography, Grid, Box, Paper} from '@mui/material';
import {ITour} from "../../../interfaces";

interface IProps {
    tour: ITour;
}

const TourCardComponent = (props: IProps) => {
    const {tour} = props;

    return (
        <Grid item xs={3}>
            <Paper elevation={3}>
                <img src={tour.image} alt=""
                    className='img' />
                <Box paddingX={1}>
                    <Typography variant="subtitle1" component="h2">
                        {tour.name}
                    </Typography>

                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center'
                        }}
                    >
                        <AccessTime sx={{ width: 12.5 }} />
                        <Typography variant='body1' component='p' marginLeft={0.5}>

                            {tour.duration} hours

                        </Typography>
                    </Box>
                </Box>
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',

                }}
                    marginTop={3}>

                    <Rating name="read-only" value={tour.rating} precision={0.5} size='small' readOnly />
                    <Typography variant='body1' component='p' marginLeft={0.5}>
                        {tour.rating}
                    </Typography>
                    <Typography variant='body1' component='p' marginLeft={0.5}>
                        ({tour.numberOfReviews} reviews)
                    </Typography>
                </Box>

                <Box>

                    <Typography variant='h6' component='h3' marginTop={0} marginLeft={0.5}>
                        From ${tour.price}
                    </Typography>
                </Box>

            </Paper>
        </Grid>
    )
}

export default TourCardComponent

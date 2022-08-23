import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import Image from '../images/nature1.jpg';
import Carousel from '../Carousel.js'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const styles = {
    paperContainer: {
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundImage: `url(${Image})`,
    }
};

function SectionFive() {
    return ( 
        <div>
            <Box style={styles.paperContainer}>
                <Grid
                    container
                    sx={{ 
                        display: 'flex',
                        flexDirection: 'column',
                        mx: 'auto',
                    }}
                >
                    <Grid 
                        item
                        md={8}
                        sx={{ 
                            mx:'auto',
                            pt: 15,
                        }}
                    >
                        <Typography
                            variant='h3'
                            fontWeight='bold'
                            color="primary"
                            align="center"
                        >
                            All about stationary and <br/> travel gear
                        </Typography>
                    </Grid>
                    <Grid 
                        item
                        md={10}
                        sm={10}
                        xs={10}
                        sx={{ 
                            mx: 'auto',
                            my: 10
                        }}
                    >
                        <Carousel />
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
}

export default SectionFive;
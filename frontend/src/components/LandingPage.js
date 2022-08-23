import { Box, Paper, Grid, Typography } from '@mui/material';
import React from 'react';
import Image from '../images/nature1.jpg';

const styles = {
    paperContainer: {
        height: '100%',
        width: '100%',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundImage: `url(${Image})`,
    }
};


function LandingPage() {
    return ( 
        <div>
            <Box
                sx={{ 
                    height: "90vh",
                    overflow: 'hidden',
                }}
            >
                <Paper
                    style={styles.paperContainer}
                >
                    
                    <Grid container >
                        <Grid
                            item
                            md={8}
                            sm={8}
                            xs={10}
                            sx={{ 
                                mx: 'auto',
                                mt: 30
                            }}
                        >
                            <Box
                                display="flex"
                                justifyContent="center"
                                alignItems="center"
                            >
                                <Typography
                                    color="primary"
                                    variant='h2'
                                    align='center'
                                    fontWeight="medium"
                                >
                                    My Personal Journey <br/>for Inspiration
                                </Typography>
                            </Box>    
                        </Grid>
                    </Grid>
                </Paper>
            </Box>
        </div>
    );  
}

export default LandingPage;
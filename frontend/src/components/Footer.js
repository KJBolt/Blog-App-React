import React from 'react';
import {Box, Container, Grid, Typography, IconButton, Avatar, Divider, Button } from '@mui/material'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import Image5 from '../images/blog3.jpg'
import Image6 from '../images/post1.jpg'
import Image8 from '../images/nature1.jpg'

const buttons = [
    {
        id: 1,
        name: "Sports"
    },
    {
        id: 2,
        name: "Politics"
    },
    {
        id: 3,
        name: "News"
    },
    {
        id: 4,
        name: "Business"
    },
    {
        id: 5,
        name: "Products"
    },
    
]

function Footer() {
    return ( 
        <Box
            sx={{
                backgroundColor: '#262626'
            }}
        >
            <Container>
                <Box>
                    <Grid 
                    container
                    >

                        {/* First Content */}
                        <Grid
                            item
                            md={4}
                            sm={6}
                            xs={12}
                            sx={{ 
                                p:5
                            }}
                        >
                            <Typography
                                variant='h4'
                                fontWeight='bold'
                                align="left"
                                color='primary'
                                sx={{ 
                                    mb:1
                                }}
                            >
                                The Christians
                            </Typography> 
                            <Typography
                                color="primary"
                            >
                                Pellentesque placerat tincidunt urna, vitae feugiat magna vestibulum non. Mauris ut sagittis est. Pellentesque a felis est. Duis in risus metus. Cras felis ante, sodales eget pretium eu, hendrerit at metus. Maecenas aliquam dictum sapien id ornare.
                            </Typography> 

                            <Box
                                sx={{ 
                                    display: 'flex',
                                    justifyContent: 'start',
                                    mt: 1
                                }}
                            >
                                <IconButton 
                                    variant="text"
                                    color="success"
                                >
                                    <FacebookOutlinedIcon />
                                </IconButton >
                                <IconButton 
                                    variant="text"
                                    color="success"
                                >
                                    <SubscriptionsOutlinedIcon />
                                </IconButton >
                            </Box>
                            
                        </Grid>

                        {/* Second Content */}
                        <Grid
                            item
                            md={4}
                            sm={6}
                            xs={12}
                            sx={{ 
                                p:5
                            }}
                        >

                            <Typography
                                variant='h5'
                                fontWeight='bold'
                                align="left"
                                color="primary"
                                sx={{ 
                                    mb:1
                                }}
                            >
                                Recent Posts
                            </Typography>

                                <Grid 
                                    container
                                    sx={{ 
                                        my: 3
                                    }}
                                >
                                    <Box
                                        display='flex'
                                    >
                                        <Grid item>
                                            <Avatar src={Image8}
                                                sx={{ 
                                                    width: 70,
                                                    height: 70,
                                                    mr:2,
                                                    ml:1,
                                                    mt:2
                                                }}
                                            />
                                        </Grid>
                                        <Grid 
                                            item
                                            sx={{ 
                                                height: 'auto',
                                                
                                            }}
                                        >
                                            <Button 
                                                variant="text"
                                                color="success"
                                            >
                                                People,Travel
                                            </Button>
                                            <Typography
                                                fontWeight='bold'
                                                color="primary"
                                                variant="subtitle1"
                                            >
                                                Trip that you will never ever forget
                                            </Typography>
                                        </Grid>
                                    </Box>
                                    <Divider />
                                </Grid>


                                <Grid 
                                    container
                                    sx={{
                                        my: 3
                                    }}
                                >
                                    <Box
                                        display='flex'
                                    >
                                        <Grid item>
                                            <Avatar src={Image5}
                                                sx={{ 
                                                    width: 70,
                                                    height: 70,
                                                    mr:2,
                                                    ml:1,
                                                    mt:2
                                                }}
                                            />
                                        </Grid>
                                        <Grid 
                                            item
                                            sx={{ 
                                                height: 'auto',
                                                
                                            }}
                                        >
                                            <Button 
                                                variant="text"
                                                color="success"
                                            >
                                                People,Travel
                                            </Button>
                                            <Typography
                                                color="primary"
                                                fontWeight='bold'
                                                variant="subtitle1"
                                            >
                                                Trip that you will never ever forget
                                            </Typography>
                                        </Grid>
                                    </Box>
                                    <Divider />
                                </Grid>


                                <Grid 
                                    container 
                                    sx={{
                                        my: 3
                                    }}
                                >
                                    <Box
                                        display='flex'
                                    >
                                        <Grid item>
                                            <Avatar src={Image6}
                                                sx={{ 
                                                    width: 70,
                                                    height: 70,
                                                    mr:2,
                                                    ml:1,
                                                    mt:2
                                                }}
                                            />
                                        </Grid>
                                        <Grid 
                                            item
                                            sx={{ 
                                                height: 'auto',
                                                
                                            }}
                                        >
                                            <Button 
                                                variant="text"
                                                color="success"
                                            >
                                                People,Travel
                                            </Button>
                                            <Typography
                                                color="primary"
                                                fontWeight='bold'
                                                variant="subtitle1"
                                            >
                                                Trip that you will never ever forget
                                            </Typography>
                                        </Grid>
                                    </Box>
                                    <Divider />
                                </Grid>                
                        </Grid>


                        {/* Third Content */}
                        <Grid
                            item
                            rowGap={1}
                            md={4}
                            sm={6}
                            xs={12}
                            sx={{ p:5 }}
                        >
                            <Typography
                                variant='h5'
                                fontWeight='bold'
                                align="left"
                                color="primary"
                                sx={{ 
                                    mb:1
                                }}
                            >
                                Tags
                            </Typography>

                            <Grid container>
                                {buttons.map(button => (
                                    <Box
                                        key={button.id}
                                    >
                                        <Grid 
                                            item
                                            md={3}
                                            sm={7}
                                            xs={7}
                                            sx={{ m:1 }}
                                        >
                                            <Button
                                                variant="outlined"
                                                color='success'
                                            >
                                                {button.name}
                                            </Button>
                                        </Grid>
                                    </Box>
                                    
                                ))}
                                    
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
            
        </Box>
    );
}

export default Footer;
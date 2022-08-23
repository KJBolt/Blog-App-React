import { Box, Grid, Paper, Typography, Divider, Button, Card } from '@mui/material';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import React from 'react';
import Image from '../images/website.jpg';


const styles = {
    paperContainer: {
        height: 390,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundImage: `url(${Image})`,
    }
};

function SectionThree() {
    return ( 
        <div>
            <Box
                sx={{ 
                    width: '100%',
                }}
            >
                <Grid container>
                    <Grid 
                        item
                        md={10}
                        sx={{ 
                            position: 'relative',
                            mx: 'auto',
                            top: -130,
                        }}
                    
                    >
                        <Box
                            sx={{ 
                                position: 'relative',
                                width: '100%',
                                height: 'auto',
                            }}
                        >
                            <Grid 
                                container
                            >

                                {/* Left Grid Item */}
                                <Grid 
                                    item
                                    md={6}
                                    sm={10}
                                    xs={10}
                                    sx ={{ 
                                        background: '#fff',
                                        mx: 'auto'
                                    }}
                                >
                                    <Card>
                                        <Box
                                            sx={{ 
                                                mx:'auto',
                                                mt: 12,
                                                mb:10,
                                                width: '90%',
                                            }}
                                        >

                                            <Box
                                                sx={{ 
                                                    display: 'flex',
                                                }}
                                            >
                                                <Box
                                                    sx={{ mr: 2 }}
                                                >
                                                    <Typography 
                                                        variant="caption"
                                                        color='success'
                                                    >
                                                        by John Bolt
                                                    </Typography>
                                                </Box>
                                                <Box>
                                                    <Typography variant="caption">November 23, 2022</Typography>
                                                </Box>
                                            </Box>

                                            <Box>
                                                <Typography
                                                    variant="h5"
                                                    fontWeight="bold"
                                                    color='success'
                                                >
                                                    Some of my favourite moments<br/>this year
                                                </Typography>
                                            </Box>

                                            <Box sx={{ mt: 2 }}>
                                                <Typography color='success'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae provident blanditiis cum officia repellendus eos accusantium sunt aperiam.</Typography>
                                            </Box>

                                            <Box
                                                sx={{ 
                                                    display: 'flex',
                                                    justifyContent: 'space-between'
                                                }}
                                            >
                                                <Divider
                                                    sx={{ 
                                                        width: '70%',
                                                        mt: 3
                                                    }}
                                                />
                                                <Button 
                                                variant='text' 
                                                color='success'
                                                sx={{
                                                    width: '25%',
                                                    top: 15
                                                }}
                                                >
                                                    <ChatBubbleOutlineOutlinedIcon sx={{mr:1}} /> 0
                                                </Button>
                                            </Box>
                                            
                                        </Box>
                                    </Card>
                                    
                                </Grid>

                                {/* Right Grid Item */}
                                <Grid 
                                    item
                                    md={6}
                                    sm={10}
                                    xs={10}
                                    sx ={{ 
                                        height: 450,
                                        mx: 'auto'
                                    }}
                                >
                                    <Paper style={styles.paperContainer}/>
                                </Grid>
                                
                            </Grid>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
}

export default SectionThree;
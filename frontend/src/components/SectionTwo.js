import { Box, Grid, Paper, Typography, Divider, Button, Card } from '@mui/material';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import React from 'react';
import Image from '../images/bg.jpg';

const styles = {
    paperContainer: {
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundImage: `url(${Image})`,
        height: 400,
    }
};

function SectionTwo() {
    return ( 
        <div>
            <Box
                sx={{
                    width: '100%',
                    position: 'relative'
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
                            }}
                        >
                            <Grid 
                                container

                            >
                                <Grid 
                                    item
                                    md={6}
                                    sm={10}
                                    xs={10}
                                    sx ={{ 
                                        mx: 'auto',
                                        mb: 2,
                                        width: '100%',
                                        zIndex: 1
                                    }}
                                >
                                    <Paper style={styles.paperContainer}/>
                                </Grid>
                                <Grid 
                                    item
                                    md={6}
                                    sm={10}
                                    xs={10}
                                    sx ={{ 
                                        background: '#fff',
                                        mx: 'auto',
                                    }}
                                >
                                    <Card>
                                        <Box
                                            sx={{ 
                                                mx:'auto',
                                                mt: 15,
                                                p: 1,
                                                width: '90%',
                                                mb: 7,
                                                height: 210
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
                                                    A quick midway swim for <br/>inspiration
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
                            </Grid>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
}

export default SectionTwo;
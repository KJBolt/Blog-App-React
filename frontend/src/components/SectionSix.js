import { Grid, Typography, Box, Card, CardMedia, Divider, CardContent, Button, Container  } from '@mui/material';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import DiscountIcon from '@mui/icons-material/Discount';
import {grey} from '@mui/material/colors'
import React from 'react';
import images from '../SectionSixData';



function SectionSix() {
    return ( 
        <div>
            <Box 
            display='flex'
            flexDirection='column'
            justifyContent='center'
            >
                <Grid 
                    item
                    md={6}
                    sm={8}
                    xs={10}
                    sx={{
                        mx: 'auto'
                    }}
                >
                    <Typography
                        variant='h4'
                        fontWeight='bold'
                        align="center"
                        color={grey[800]}
                        sx={{ 
                            my: 10,
                        }}
                    >
                        Everything sorted for you
                    </Typography>  
                </Grid>


                    <Grid 
                        container
                        sx={{ 
                            mx: 'auto',
                        }}
                    >
                        
                        {images.map(image => (
                        <Grid 
                            item
                            md={4}
                            sm={6}
                            xs={12}
                            sx={{ 
                                mb:2
                            }}
                            key={image.id}
                        >
                            <Container>
                                <Card sx={{ maxWidth: 360 }}>
                                <CardMedia
                                    component="img"
                                    height="auto"
                                    image={image.image}
                                />
                                <CardContent>
                                    
                                    <Box>
                                        <Typography
                                            variant="h5"
                                            fontWeight="bold"
                                            color='success'
                                        >
                                            {image.title}
                                        </Typography>
                                    </Box>

                                    <Box
                                        sx={{ 
                                            display: 'flex',
                                            mb: 2,
                                            mt:1
                                        }}
                                    >
                                        <Box
                                            sx={{ mr: 2 }}
                                        >
                                            <Typography 
                                                variant="caption"
                                                color='success'
                                            >
                                                by {image.author}
                                            </Typography>
                                        </Box>
                                        <Box>
                                            <Typography variant="caption">{image.date}</Typography>
                                        </Box>
                                    </Box>

                                    <Typography variant="body2" color="text.secondary">
                                    {image.desc}
                                    </Typography>
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
                                            <ChatBubbleOutlineOutlinedIcon sx={{mr:1}} /> {image.comment}
                                        </Button>
                                    </Box>
                                    <Box>
                                        <Button 
                                            startIcon={<DiscountIcon />}
                                            variant="text"
                                            color="success"
                                        >
                                            {image.tag}
                                        </Button>
                                    </Box>
                                    
                                </CardContent>
                            </Card>
                            </Container>
                            
                        </Grid>
                        ))}
                    </Grid>
                    
                
            </Box>
            
            
        </div>
    );
}

export default SectionSix;
import Slider from "react-slick";
import React  from 'react';
import Box from '@mui/material/Box';
import { CardMedia, Divider } from "@mui/material";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Image from './images/bg.jpg';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import DiscountIcon from '@mui/icons-material/Discount';
import Image6 from './images/post1.jpg'
import Image7 from './images/website.jpg'



function Carousel() {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
            breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 3
            }
            },
            {
            breakpoint: 480,
                settings: {
                slidesToShow: 1,
                slidesToScroll: 1
                }
            }
        ]
    };
    return ( 
        <Slider {...settings}>
            <Card sx={{ maxWidth: 365 }}>
                <CardMedia
                    component="img"
                    height="194"
                    image={Image}
                    alt="Paella dish"
                />
                <CardContent>
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
                            Some of my favourite moments this year
                        </Typography>
                    </Box>
                    <Typography variant="body2" color="text.secondary">
                    This impressive paella is a perfect party dish and a fun meal to cook
                    together with your guests. Add 1 cup of frozen peas along with the mussels,
                    if you like.
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
                            <ChatBubbleOutlineOutlinedIcon sx={{mr:1}} /> 0
                        </Button>
                    </Box>
                    <Box>
                        <Button 
                            startIcon={<DiscountIcon />}
                            variant="text"
                            color="success"
                        >
                            People, Travel
                        </Button>
                    </Box>
                    
                </CardContent>
            </Card>


            <Card sx={{ maxWidth: 365 }}>
                <CardMedia
                    component="img"
                    height="194"
                    image={Image6}
                    alt="Paella dish"
                />
                <CardContent>
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
                            Some of my favourite moments this year
                        </Typography>
                    </Box>
                    <Typography variant="body2" color="text.secondary">
                    This impressive paella is a perfect party dish and a fun meal to cook
                    together with your guests. Add 1 cup of frozen peas along with the mussels,
                    if you like.
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
                            <ChatBubbleOutlineOutlinedIcon sx={{mr:1}} /> 0
                        </Button>
                    </Box>
                    <Box>
                        <Button 
                            startIcon={<DiscountIcon />}
                            variant="text"
                            color="success"
                        >
                            People, Travel
                        </Button>
                    </Box>
                    
                </CardContent>
            </Card>

            <Card sx={{ maxWidth: 365 }}>
                <CardMedia
                    component="img"
                    height="194"
                    image={Image7}
                    alt="Paella dish"
                />
                <CardContent>
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
                            Some of my favourite moments this year
                        </Typography>
                    </Box>
                    <Typography variant="body2" color="text.secondary">
                    This impressive paella is a perfect party dish and a fun meal to cook
                    together with your guests. Add 1 cup of frozen peas along with the mussels,
                    if you like.
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
                            <ChatBubbleOutlineOutlinedIcon sx={{mr:1}} /> 0
                        </Button>
                    </Box>
                    <Box>
                        <Button 
                            startIcon={<DiscountIcon />}
                            variant="text"
                            color="success"
                        >
                            People, Travel
                        </Button>
                    </Box>
                    
                </CardContent>
            </Card>

            <Card sx={{ maxWidth: 365 }}>
                <CardMedia
                    component="img"
                    height="194"
                    image={Image}
                    alt="Paella dish"
                />
                <CardContent>
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
                            Some of my favourite moments this year
                        </Typography>
                    </Box>
                    <Typography variant="body2" color="text.secondary">
                    This impressive paella is a perfect party dish and a fun meal to cook
                    together with your guests. Add 1 cup of frozen peas along with the mussels,
                    if you like.
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
                            <ChatBubbleOutlineOutlinedIcon sx={{mr:1}} /> 0
                        </Button>
                    </Box>
                    <Box>
                        <Button 
                            startIcon={<DiscountIcon />}
                            variant="text"
                            color="success"
                        >
                            People, Travel
                        </Button>
                    </Box>
                    
                </CardContent>
            </Card>
            

            
        </Slider>

    );
}

export default Carousel;



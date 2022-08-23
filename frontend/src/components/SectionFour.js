import React from 'react';
import {Grid, Paper, Typography, Box, Divider, Button, Avatar, IconButton, InputBase} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import Image from '../images/bg.jpg';
import DiscountIcon from '@mui/icons-material/Discount';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import Image2 from '../images/blog1.jpg'
import Image3 from '../images/blog2.jpg'
import Image4 from '../images/blog3.jpg'
import Image5 from '../images/blog1.jpg'
import Image6 from '../images/post1.jpg'
import Image7 from '../images/website.jpg'
import Image8 from '../images/nature1.jpg'
import Image9 from '../images/nature3.jpg'


const styles = {
    paperContainer: {
        height: 240,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundImage: `url(${Image})`,
    },

    paper1Container: {
        height: 240,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundImage: `url(${Image2})`,
    },
    paper2Container: {
        height: 240,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundImage: `url(${Image3})`,
    },
    paper3Container: {
        height: 240,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundImage: `url(${Image4})`,
    },
    paper4Container: {
        height: 240,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundImage: `url(${Image5})`,
    },
    paper5Container: {
        height: 240,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundImage: `url(${Image6})`,
    },
    paper6Container: {
        height: 240,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundImage: `url(${Image7})`,
    },
    paper7Container: {
        height: 240,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundImage: `url(${Image8})`,
    },
    paper8Container: {
        height: 240,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundImage: `url(${Image9})`,
    }
};

function SectionFour() {
    return ( 
        <div>
            <Grid container>

                {/* Left Content */}
                <Grid 
                    item
                    md={8}
                    sm={12}
                    xs={12}
                    sx={{
                        p:2
                    }}
                >
                    <Typography
                        color='success'
                        variant='h5'
                        fontWeight='bold'
                        sx={{ 
                            my:2 
                        }}
                    >
                        Trending Articles
                    </Typography>

                    {/* Trending Content */}
                    <Grid 
                        container 
                        sx={{ 
                            my: 2,
                            boxShadow: '0 3px 10px rgb(0 0 0 / 0.2)'
                        }}
                        elevation={1}
                    >
                        <Grid 
                            item
                            md={3}
                            sm={3}
                            xs={12}
                        >
                            <Paper style={styles.paper2Container} />
                        </Grid>
                        <Grid 
                            item
                            md={9}
                            sm={9}
                            xs={12}
                            sx={{ 
                                p:2
                            }}
                        >
                            <Typography
                                variant="h6"
                                fontWeight="bold"
                                color='success'
                            >
                                Trip that you will never ever forget
                            </Typography>

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

                            <Box sx={{ mt: 2, mb: 2 }}>
                                <Typography color='success'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae provident blanditiis cum officia repellendus eos accusantium sunt aperiam.</Typography>
                            </Box>
                            <Divider />

                            <Box
                                display='flex'
                                justifyContent='space-between'
                                sx={{ width: '100%' }}
                            >
                                <Box>
                                    <Button 
                                        startIcon={<DiscountIcon />}
                                        variant="text"
                                        color="success"
                                    >
                                        People, Travel
                                    </Button>
                                </Box>
                                <Button 
                                    variant='text' 
                                    color='success'
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'end'
                                    }}
                                    >
                                        <ChatBubbleOutlineOutlinedIcon sx={{mr:1}} /> 0
                                    </Button>
                                <Box>
                                    
                                </Box>
                            </Box>

                            
                        </Grid>
                    </Grid>

                    {/* Trending Content */}
                    <Grid 
                        container 
                        sx={{ 
                            my: 2,
                            boxShadow: '0 3px 10px rgb(0 0 0 / 0.2)'
                        }}
                        elevation={1}
                    >
                        <Grid 
                            item
                            md={3}
                            sm={3}
                            xs={12}
                        >
                            <Paper style={styles.paper3Container} />
                        </Grid>
                        <Grid 
                            item
                            md={9}
                            sm={9}
                            xs={12}
                            sx={{ 
                                p:2
                            }}
                        >
                            <Typography
                                variant="h6"
                                fontWeight="bold"
                                color='success'
                            >
                                Trip that you will never ever forget
                            </Typography>

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

                            <Box sx={{ mt: 2, mb: 2 }}>
                                <Typography color='success'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae provident blanditiis cum officia repellendus eos accusantium sunt aperiam.</Typography>
                            </Box>
                            <Divider />

                            <Box
                                display='flex'
                                justifyContent='space-between'
                                sx={{ width: '100%' }}
                            >
                                <Box>
                                    <Button 
                                        startIcon={<DiscountIcon />}
                                        variant="text"
                                        color="success"
                                    >
                                        People, Travel
                                    </Button>
                                </Box>
                                <Button 
                                    variant='text' 
                                    color='success'
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'end'
                                    }}
                                    >
                                        <ChatBubbleOutlineOutlinedIcon sx={{mr:1}} /> 0
                                    </Button>
                                <Box>
                                    
                                </Box>
                            </Box>

                            
                        </Grid>
                    </Grid>


                    {/* Trending Content */}
                    <Grid 
                        container 
                        sx={{ 
                            my: 2,
                            boxShadow: '0 3px 10px rgb(0 0 0 / 0.2)'
                        }}
                        elevation={1}
                    >
                        <Grid 
                            item
                            md={3}
                            sm={3}
                            xs={12}
                        >
                            <Paper style={styles.paper4Container} />
                        </Grid>
                        <Grid 
                            item
                            md={9}
                            sm={9}
                            xs={12}
                            sx={{ 
                                p:2
                            }}
                        >
                            <Typography
                                variant="h6"
                                fontWeight="bold"
                                color='success'
                            >
                                Trip that you will never ever forget
                            </Typography>

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

                            <Box sx={{ mt: 2, mb: 2 }}>
                                <Typography color='success'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae provident blanditiis cum officia repellendus eos accusantium sunt aperiam.</Typography>
                            </Box>
                            <Divider />

                            <Box
                                display='flex'
                                justifyContent='space-between'
                                sx={{ width: '100%' }}
                            >
                                <Box>
                                    <Button 
                                        startIcon={<DiscountIcon />}
                                        variant="text"
                                        color="success"
                                    >
                                        People, Travel
                                    </Button>
                                </Box>
                                <Button 
                                    variant='text' 
                                    color='success'
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'end'
                                    }}
                                    >
                                        <ChatBubbleOutlineOutlinedIcon sx={{mr:1}} /> 0
                                    </Button>
                                <Box>
                                    
                                </Box>
                            </Box>

                            
                        </Grid>
                    </Grid>


                    {/* Trending Content */}
                    <Grid 
                        container 
                        sx={{ 
                            my: 2,
                            boxShadow: '0 3px 10px rgb(0 0 0 / 0.2)'
                        }}
                        elevation={1}
                    >
                        <Grid 
                            item
                            md={3}
                            sm={3}
                            xs={12}
                        >
                            <Paper style={styles.paper5Container} />
                        </Grid>
                        <Grid 
                            item
                            md={9}
                            sm={9}
                            xs={12}
                            sx={{ 
                                p:2
                            }}
                        >
                            <Typography
                                variant="h6"
                                fontWeight="bold"
                                color='success'
                            >
                                Trip that you will never ever forget
                            </Typography>

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

                            <Box sx={{ mt: 2, mb: 2 }}>
                                <Typography color='success'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae provident blanditiis cum officia repellendus eos accusantium sunt aperiam.</Typography>
                            </Box>
                            <Divider />

                            <Box
                                display='flex'
                                justifyContent='space-between'
                                sx={{ width: '100%' }}
                            >
                                <Box>
                                    <Button 
                                        startIcon={<DiscountIcon />}
                                        variant="text"
                                        color="success"
                                    >
                                        People, Travel
                                    </Button>
                                </Box>
                                <Button 
                                    variant='text' 
                                    color='success'
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'end'
                                    }}
                                    >
                                        <ChatBubbleOutlineOutlinedIcon sx={{mr:1}} /> 0
                                    </Button>
                                <Box>
                                    
                                </Box>
                            </Box>

                            
                        </Grid>
                    </Grid>            

                </Grid>

                {/* Right Content */}
                <Grid 
                    item
                    md={4}
                    sm={12}
                    xs={12}
                    sx={{ 
                        p:2
                    }}
                >
                    <Typography
                        color='success'
                        variant='h5'
                        fontWeight='bold'
                        sx={{ 
                            mt:4,
                            mb:4
                        }}
                    >
                        Latest posts
                    </Typography>

                    {/* Search Field */}
                    
                    <Paper
                        component="form"
                        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: '90%', mx: 'auto' }}
                        >
                        <InputBase
                            sx={{ ml: 1, flex: 1 }}
                            placeholder="Search for Articles"
                            inputProps={{ 'aria-label': 'Search for articles' }}
                        />
                        <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                            <SearchIcon />
                        </IconButton>
                    </Paper>


                    <Grid 
                        container 
                        sx={{ 
                            boxShadow: '0 3px 10px rgb(0 0 0 / 0.2)', 
                            p:2, 
                            mx:'auto',
                            my:2
                        }}
                    >
                        <Box
                            display='flex'
                        >
                            <Grid item>
                                <Avatar src={Image8}
                                    sx={{ 
                                        width: 90,
                                        height: 90,
                                        mr:2
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
                            boxShadow: '0 3px 10px rgb(0 0 0 / 0.2)', 
                            p:2, 
                            mx:'auto',
                            my:2
                        }}
                    >
                        <Box
                            display='flex'
                        >
                            <Grid item>
                                <Avatar src={Image7}
                                    sx={{ 
                                        width: 90,
                                        height: 90,
                                        mr:2
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
                            boxShadow: '0 3px 10px rgb(0 0 0 / 0.2)', 
                            p:2, 
                            mx:'auto',
                            my:2
                        }}
                    >
                        <Box
                            display='flex'
                        >
                            <Grid item>
                                <Avatar src={Image6}
                                    sx={{ 
                                        width: 90,
                                        height: 90,
                                        mr:2
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
                            boxShadow: '0 3px 10px rgb(0 0 0 / 0.2)', 
                            p:2, 
                            mx:'auto',
                            my:2
                        }}
                    >
                        <Box
                            display='flex'
                        >
                            <Grid item>
                                <Avatar src={Image5}
                                    sx={{ 
                                        width: 90,
                                        height: 90,
                                        mr:2
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
                                    variant="subtitle1"
                                >
                                    Trip that you will never ever forget
                                </Typography>
                            </Grid>
                        </Box>
                        <Divider />
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}

export default SectionFour;
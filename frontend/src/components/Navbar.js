import React, { useState } from 'react';
import {
    AppBar,
    Toolbar,
    Box,
    useScrollTrigger,
    Typography,
    Drawer,
    Divider,
    List,
    ListItem
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';








function Navbar (props) {

    const [open, setOpen] = useState(false)

    const ElevationScroll = (props) => {
        const { children, window } = props

        const trigger = useScrollTrigger({
            disableHysteresis: true,
            threshold: 0,
            target: window ? window() : undefined,
        });

        return React.cloneElement(children, {
            elevation: trigger ? 4 : 0,
        });
    }

    return (
        <div>
            <ElevationScroll {...props}>
                <AppBar 
                    position='sticky'
                    color='primary' 
                    elevation={5}>
                    <Toolbar>
                    <Box
                        display='flex'
                        justifyContent='space-between'
                        sx={{ 
                            width: '100%',
                        }}
                    >
                        <Box>
                            <SearchIcon />
                        </Box>
                        <Box>
                            <Typography
                                variant='h6'
                                fontWeight='bold'
                            >
                                The Christians
                            </Typography>
                        </Box>
                        <Box>
                            <MenuIcon onClick={() => setOpen(!false)} />
                        </Box>
                    </Box>
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            
            <Drawer
                PaperProps={{
                    sx: { width: "10%", sm:{width: 50}, height: '70%', mt: 8 },
                }}
                open={open}
                anchor='right'
                variant='temporary'
                classes={{paper: 250}}
                onEscapeKeyDown={() => setOpen(false)}
                onBackdropClick={() => setOpen(false)}
            >
                <List sx={{ p:1 }}>
                    <ListItem>Home</ListItem>
                    <Divider/>
                    <ListItem>Teachings</ListItem>
                    <Divider/>
                    <ListItem>Gallery</ListItem>
                </List>
            </Drawer>

            
        </div>
        
    );
}

export default Navbar ;
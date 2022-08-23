import { Typography, Box } from '@mui/material';
import React from 'react';

function Creator() {
    return ( 
        <div>
            <Box
                sx={{ 
                    backgroundColor : '#1a1a1a',
                    py: 3
                }}
            >
                <Typography
                    color= 'primary'
                    variant= 'body2'
                    align='center'
                >
                    Designed by John Bolt @ 2022
                </Typography>
            </Box>
        </div>
    );
}

export default Creator;
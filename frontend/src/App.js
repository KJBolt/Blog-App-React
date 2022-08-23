import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import {ThemeProvider, createTheme} from '@mui/material';
import { pink, grey } from '@mui/material/colors';
import Homepage from './components/Homepage';
import BlogDetails from './components/BlogDetails';
import SingleBlog from './components/SingleBlog';


const theme = createTheme({
  palette: {
    primary: {
      main: '#fff'
    },
    secondary: pink,
    success: grey
  },
  typography: {
    fontFamily: 'Quicksand',
    fontWeightLight: 400,
    fontWeightBold: 700,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
  }
})

function App() {
  return (
    <div>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Navbar/>

          <Routes>
            <Route path="/" element={<Homepage />}/>
            <Route path="/post" element={<BlogDetails />}/>
          </Routes>
          
        </ThemeProvider>
      </BrowserRouter>
      
      
    </div>
  );
}

export default App;

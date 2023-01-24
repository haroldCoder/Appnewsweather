import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import newsweather from '../assets/newsweather.jpg';
import {Link} from 'react-router-dom';

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" className='h-[10vh]'>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to='/'>Weather and News</Link>
          </Typography>
          <Link to='/record'><button className='bg-lime-600 p-2 rounded-md mr-4'>Record</button></Link>
          <img src={newsweather} alt="newweather" className="w-12 h-12 rounded-full" />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
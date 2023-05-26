import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function ButtonAppBar() {
    const handleClick = (event, sectionId) => {
        event.preventDefault();
        const element = document.getElementById(sectionId);
        if (element) {
          const elementPosition = element.offsetTop; 
          const offset = 80; 
          const scrollToPosition = elementPosition - offset; 
          window.scrollTo({
            top: scrollToPosition,
            behavior: 'smooth',
          });
        }
      };

  return (
    <Box>
      <AppBar position="static">
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Typography variant="h4" component="div" sx={{ flexGrow: 1, marginLeft:'25rem' }}>
              Jessie's Portfolio
            </Typography>
          </div>
          <div>
            <Button color="inherit" onClick={(event) => handleClick(event, 'about-me')}>
              About Me
            </Button>
            <Button color="inherit" onClick={(event) => handleClick(event, 'my-work')}>
              My Work
            </Button>
            <Button color="inherit" onClick={(event) => handleClick(event, 'contact-me')}>
              Contact Me
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

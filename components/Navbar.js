import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@mui/material';
import { Brightness4, Brightness7 } from '@mui/icons-material';
import Link from 'next/link';

function Navbar({ darkMode, setDarkMode }) {
  const handleThemeChange = () => {
    setDarkMode(!darkMode);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          My Portfolio
        </Typography>
        <IconButton color="inherit" onClick={handleThemeChange}>
          {darkMode ? <Brightness7 /> : <Brightness4 />}
        </IconButton>
        <Link href="#about" passHref>
          <Button color="inherit">About</Button>
        </Link>
        <Link href="#projects" passHref>
          <Button color="inherit">Projects</Button>
        </Link>
        <Link href="#skills" passHref>
          <Button color="inherit">Skills</Button>
        </Link>
        <Link href="#contact" passHref>
          <Button color="inherit">Contact</Button>
        </Link>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;

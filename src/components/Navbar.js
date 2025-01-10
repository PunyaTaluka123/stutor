import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import GroupIcon from '@mui/icons-material/Group'; // About Us Icon
import LoginIcon from '@mui/icons-material/Login'; // Login Icon
import PersonAddIcon from '@mui/icons-material/PersonAdd'; // Sign In Icon
import logo from "../assets/Stutor Logo.jpg";

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "white", color: "black", boxShadow: "none", padding: "10px 20px" }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between", mx: 14 }}>
          
          {/* Logo and Home - Adjusted Spacing */}
          <Box sx={{ fontFamily: "'HANGYABOLY'", display: "flex", alignItems: "center", gap: 1 }}> 
            <IconButton edge="start" sx={{ p: 0 }}>
              <img src={logo} alt="Stutor Logo" style={{ width: 150, height: "auto" }} />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ fontWeight: 600 }}>
              Home
            </Typography>
          </Box>

          {/* Navigation Links */}
          <Box sx={{ display: "flex", alignItems: "center", gap:6, }}>
            <Button color="inherit" sx={{ display: "flex", alignItems: "center", textTransform: "none", gap: 1 }}>
              <GroupIcon /> About Us
            </Button>
            <Button color="inherit" sx={{ display: "flex", alignItems: "center", textTransform: "none", gap: 1 }}>
              <PersonAddIcon /> Sign In
            </Button>
            <Button color="inherit" sx={{ display: "flex", alignItems: "center", textTransform: "none", gap: 1 }}>
              <LoginIcon /> Log In
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

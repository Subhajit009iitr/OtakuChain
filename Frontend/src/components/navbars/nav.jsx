import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom'; 
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Logo from '../../assets/Logo.png';
import SignUpLogin from '../../dynamic/singuplogin'; 

const pages = [
  { label: 'Manga', path: '/' },
  { label: 'Anime', path: '/' },
  { label: 'Community', path: '/community' },
  { label: 'Marketplace', path: '/marketplace' },
];

function ResponsiveAppBar({ isSignedIn }) {
    const [anchorElNav, setAnchorElNav] = useState(null);
    const location = useLocation(); 
    const navigate = useNavigate(); 
    const [isAdmin, setIsAdmin] = useState(false);

    const isCommunityPage = location.pathname === '/community';

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleNavigate = (path) => {
        navigate(path);
        handleCloseNavMenu();
    };

    const handleAdminClick = () => {
        setIsAdmin(true);
        navigate('/signuplogin'); // Redirect to signup page
    };

    // Invisible button handler
    const handleInvisibleClick = () => {
        console.log("ADMIN");
        setIsAdmin(true); // Set isAdmin to true when the invisible button is clicked
    };

    return (
        <AppBar
            position={!isCommunityPage ? 'fixed' : 'relative'}
            sx={{
                margin: 'auto',
                backgroundColor: 'rgba(0,0,0,0)',
                mt: '1rem',
                boxShadow: 'none',
            }}
        >
            <Container
                maxWidth="xl"
                sx={{
                    backgroundColor: 'rgba(0,0,0,0.5)',
                    borderRadius: '10px',
                    backdropFilter: 'blur(10px)',
                }}
            >
                <Toolbar disableGutters>
                    {/* Logo Section */}
                    <Box sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}>
                        <img src={Logo} alt="Logo" />
                    </Box>

                    {/* Mobile Menu Icon */}
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton size="large" onClick={handleOpenNavMenu} color="inherit">
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                            keepMounted
                            transformOrigin={{ vertical: 'top', horizontal: 'left' }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{ display: { xs: 'block', md: 'none' } }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page.label} onClick={() => handleNavigate(page.path)}>
                                    <Typography sx={{ textAlign: 'center' }}>{page.label}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>

                    {/* Desktop Menu */}
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                            <Button
                                key={page.label}
                                onClick={() => handleNavigate(page.path)}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                {page.label}
                            </Button>
                        ))}
                    </Box>

                    {/* Invisible Button to Set Admin */}
                    <Button
                        onClick={handleInvisibleClick}
                        sx={{ 
                            position: 'relative', 
                            left: '-8px',  // Adjust as necessary for positioning
                            opacity: 0,    // Make the button invisible
                            width: '48px', // Give it a width for better click area
                            height: '48px' // Give it a height for better click area
                        }}
                    />

                    {/* Admin Label */}
                    <Box sx={{ marginRight: 2, display: 'flex', alignItems: 'center' }}>
                        <Button
                            variant="text"
                            onClick={handleAdminClick}
                            sx={{ color: isAdmin ? 'green' : 'white' }}
                        >
                            {isAdmin ? 'Admin' : 'Admin?'}
                        </Button>
                    </Box>

                    {/* Signup/Login Button */}
                    <Tooltip title="Login or Signup">
                        <IconButton sx={{ p: 0 }}>
                            <SignUpLogin setIsSignedIn={setIsAdmin} /> {/* Pass function to manage sign in state */}
                        </IconButton>
                    </Tooltip>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default ResponsiveAppBar;

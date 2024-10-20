import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import ResponsiveAppBar from '../components/navbars/nav';
import CommunityBody from '../components/covers/communityBody';

function AdminPage() {
  const theme = useTheme();

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };     
  }, []);

  return (
    <Box sx={{ backgroundColor: theme.palette.background.main, minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <ResponsiveAppBar />
      <Box sx={{ flexGrow: 1, overflow: 'hidden' }}>
        <CommunityBody />
      </Box>
    </Box>
  );
}

export default AdminPage;
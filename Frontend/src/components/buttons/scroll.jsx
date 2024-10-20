// Button.jsx
import React from 'react';
import { IconButton } from '@mui/material';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';

export function ScrollLeftButton({ onClick }) {
  const theme = useTheme();
  return (
    <IconButton onClick={onClick} style={{ 
      position: 'absolute', 
      left: 0, 
      zIndex: 1,
      backgroundColor: theme.palette.background.button,
      width: '40px',          
      height: '80px',         
      borderRadius: '20px',
    }}>
      <ArrowBackIos />
    </IconButton>
  );
}

export function ScrollRightButton({ onClick }) {
  const theme = useTheme();
  return (
    <IconButton onClick={onClick} style={{ 
      position: 'absolute', 
      right: 0, 
      zIndex: 1,
      backgroundColor: theme.palette.background.button,
      width: '40px',          
      height: '80px',         
      borderRadius: '20px',
      }}>
      <ArrowForwardIos />
    </IconButton>
  );
}

import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';

function EpisodeCard({ imageURL, title, description }) {
  const theme = useTheme();

  return (
    <Card sx={{ display: 'flex', marginBottom: theme.spacing(2), minHeight: 150, maxHeight:200 }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', width: '30%' }}>
        <img 
          src={imageURL} 
          alt={title} 
          style={{ width: '100%', height: 'auto', objectFit: 'cover' }} 
        />
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', width: '70%' }}>
        <CardContent>
          <Typography variant="h6" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.palette.secondary.main">
            {description}
          </Typography>
        </CardContent>
      </Box>
    </Card>
  );
}

export default EpisodeCard;

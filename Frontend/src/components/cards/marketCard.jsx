import React from 'react';
import { Card, CardMedia, CardContent, Typography, IconButton } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import ShareIcon from '@mui/icons-material/Share';

const MarketCard = ({ title, imageURL, description, token }) => {
  const theme = useTheme();

  const handleAddItem = (e) => {
    e.stopPropagation();
    // Handle add to cart or similar functionality
    alert(`Added ${title} to cart`);
  };

  const handleShare = (e) => {
    e.stopPropagation();
    // Handle share functionality
    alert(`Shared ${title}`);
  };

  return (
    <Card
      sx={{
        minWidth: 300,
        maxWidth: 300,
        margin: '1rem',
        backgroundColor: theme.palette.background.default,
        position: 'relative',
        overflow: 'hidden',
        cursor: 'pointer',
      }}
    >
      {/* Image */}
      <CardMedia
        component="img"
        height="150"
        image={imageURL}
        alt={title}
      />

      {/* Title and Description */}
      <CardContent sx={{ padding: '0.5rem', textAlign: 'center' }}>
        <Typography gutterBottom variant="h6" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>

      {/* Action Buttons */}
      <CardContent
        sx={{ display: 'flex', justifyContent: 'space-between', padding: '0.1rem 0.5rem' }}
      >
        <IconButton onClick={handleAddItem}>
          <AddCircleOutlineIcon sx={{ fontSize: '1.5rem' }} />
        </IconButton>
        <IconButton onClick={handleShare}>
          <ShareIcon sx={{ fontSize: '1.5rem' }} />
        </IconButton>
      </CardContent>

      {/* Token Display */}
      <CardContent sx={{ padding: '0.1rem', textAlign: 'center' }}>
        <Typography sx={{ fontSize: '0.8rem' }} color="text.secondary">
          Token: {token}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default MarketCard;

import React, { useState } from 'react';
import { Card, CardMedia, CardContent, Typography, Button, IconButton } from '@mui/material';
import { useDispatch } from 'react-redux';
import { useTheme } from '@mui/material/styles';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import ShareIcon from '@mui/icons-material/Share';
import { setSelectedCard, fetchCardDetails } from '../../slices/bodySlice';
import { setCoverDetails } from '../../slices/coverSlice';

const ScrollableCard = ({ id, title, imageURL, date, time, rating }) => {
  const theme = useTheme();
  const dispatch = useDispatch();

  const handleAddItem = (e) => {
    e.stopPropagation();
    // Dispatch or handle add item functionality here, if necessary
  };

  const handleShare = (e) => {
    e.stopPropagation();
    // Handle share functionality here
  };

  const handlePlayClick = (e) => {
    e.stopPropagation();
    alert(`Playing ${title}`);
  };

  const handleCardClick = () => {
    dispatch(setSelectedCard({ id, title, imageURL }));
    dispatch(setCoverDetails({ page: 'details', imageURL }));
    dispatch(fetchCardDetails(id));
  };

  const [hovered, setHovered] = useState(false);

  return (
    <Card
      sx={{
        minWidth: 300,
        maxWidth: 300,
        margin: '1rem',
        backgroundColor: theme.palette.background.default,
        position: 'relative',
        transition: 'transform 0.3s ease-in-out, height 0.3s ease-in-out',
        overflow: 'hidden',
        height: hovered ? 300 : 150,
        '&:hover': {
          transform: 'scale(1.1)',
        },
        cursor: 'pointer',
      }}
      onClick={handleCardClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <CardMedia
        component="img"
        height="150"
        image={imageURL}
        alt={title}
      />

      {hovered && (
        <>
          <CardContent sx={{ padding: '0.5rem' }}>
            <Typography gutterBottom sx={{ fontSize: '0.9rem' }} component="div">
              {title}
            </Typography>
            <Button
              onClick={handlePlayClick}
              style={{
                width: '95%',
                backgroundColor: '#D1D1D1',
                color: theme.palette.background.main,
                fontWeight: 'bold',
                fontSize: '1rem',
              }}
            >
              <PlayArrowIcon sx={{ marginRight: '0.3rem', fontSize: '1.5rem' }} />
              Play
            </Button>
          </CardContent>

          <CardContent sx={{
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            padding: '0.1rem 0.1rem 0.1rem 0.9rem',
          }}>
            <IconButton onClick={handleAddItem}>
              <AddCircleOutlineIcon sx={{ fontSize: '1.5rem' }} />
            </IconButton>
            <IconButton onClick={handleShare}>
              <ShareIcon sx={{ fontSize: '1.5rem' }} />
            </IconButton>
          </CardContent>

          <CardContent sx={{ padding: '0.1rem', textAlign: 'left' }}>
            <Typography sx={{ fontSize: '0.8rem', padding: '0.1rem 1rem' }} color="text.secondary">
              {date} | {time} | {rating}
            </Typography>
          </CardContent>
        </>
      )}
    </Card>
  );
};

export default ScrollableCard;

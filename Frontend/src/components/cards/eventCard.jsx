import React, { useState } from 'react';
import { Card, CardMedia, CardContent, Typography, Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import TokenIcon from '../../assets/tokenicon.svg';
import CardCoin from '../../assets/cardcoin.svg';
import PlaceIcon from '@mui/icons-material/Place';

const EventCard = ({ title, imageURL, date, time, location, tokenAmount, onClick }) => {
  const theme = useTheme();
  const [hovered, setHovered] = useState(false);

  // Handle the click on the card itself
  const handleCardClick = (e) => {
    e.stopPropagation();
    alert(`Card clicked: ${title}`);
  };

  // Handle the click on the "Book a Seat" button
  const handleBookClick = (e) => {
    e.stopPropagation();
    alert(`Book a ticket for: ${title}`);
  };

  return (
    <Card
      sx={{
        minWidth: 435,
        maxWidth: 435,
        margin: '1rem',
        backgroundColor: theme.palette.background.default,
        position: 'relative',
        transition: 'transform 0.3s ease-in-out, height 0.3s ease-in-out',
        overflow: 'hidden',
        height: hovered ? 380 : 217,
        '&:hover': {
          transform: 'scale(1.1)',
        },
        cursor: 'pointer',
      }}
      onClick={handleCardClick}  // Card click triggers an alert
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <CardMedia
        component="img"
        height="217"
        image={imageURL}
        alt={title}
      />

      <CardContent
        className="card-expanded-info"
        sx={{
          padding: '0.5rem',
          transition: 'transform 0.3s ease-in-out',
          transform: hovered ? 'translateY(0)' : 'translateY(100%)',
        }}
      >
        <Typography gutterBottom sx={{ fontSize: '1rem', display: 'flex', justifyContent: 'space-between', alignItems:'center', ml: '1rem'}} component="div">
          {title}
          <Button sx={{ backgroundColor: 'rgba(255,255,255,0.2)', fontSize: '0.8rem', color: '#fff' }}>
            <img src={TokenIcon} alt="Token" style={{ marginRight: '0.2rem', width: '1rem' }} />
            {tokenAmount}
          </Button>
        </Typography>
        <Typography sx={{ fontSize: '0.7rem', padding: '0rem 1rem',  display: 'flex' }} color="text.secondary">
          {date} | {time} 
        </Typography>
        <Typography sx={{ fontSize: '0.7rem', padding: '0.2rem 1rem',  display: 'flex' }} color="text.secondary">
          <PlaceIcon sx={{fontSize: '1rem', mr: '0.3rem'}}/>{location}
        </Typography>
        <Typography sx={{ fontSize: '0.7rem', padding: '0rem 1rem',  display: 'flex',  }} color="#fff">
          <img src={CardCoin} alt="" style={{width: '1rem', marginRight: '0.3rem'}}/> Buy tokens to attend
        </Typography>

      </CardContent>

      <CardContent sx={{
        padding: '0.1rem',
        transition: 'transform 0.3s ease-in-out',
        transform: hovered ? 'translateY(0)' : 'translateY(100%)',
      }}>

        <Button
          onClick={handleBookClick}  // "Book a Seat" click triggers a different alert
          style={{
            width: '95%',
            backgroundColor: '#D1D1D1',
            color: theme.palette.background.main,
            fontWeight: 'bold',
            fontSize: '1rem',
          }}
        >
          Book a Seat
        </Button>
      </CardContent>
    </Card>
  );
};

export default EventCard;

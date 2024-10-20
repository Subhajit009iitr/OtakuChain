import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ImageIcon from '@mui/icons-material/Image';

function PostCard({ creatorName, postDate, title, description, image }) {
  return (
    <Card sx={{ marginBottom: '20px' }}>
      <CardContent>

        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Avatar sx={{ marginRight: '10px' }}>{creatorName[0]}</Avatar>
            <Typography variant="subtitle1">{creatorName}</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <AccessTimeIcon sx={{ marginRight: '5px' }} />
            <Typography variant="subtitle2">{postDate}</Typography>
          </Box>
        </Box>

        <Divider sx={{ my: 2 }} />

        <Typography variant="h6" sx={{ marginBottom: '10px' }}>
          {title}
        </Typography>

        {image && (
          <Box
            component="img"
            src={image}
            alt="Post"
            sx={{ width: '100%', height: 'auto', marginBottom: '10px' }}
          />
        )}

        <Typography 
          variant="body2" 
          sx={{ fontSize: '1.5rem', textAlign: 'left', marginBottom: '20px' }}
        >
          {description}
        </Typography>

        {!image && (
          <Button variant="outlined" startIcon={<ImageIcon />}>
            No Image Available
          </Button>
        )}
      </CardContent>
    </Card>
  );
}

export default PostCard;

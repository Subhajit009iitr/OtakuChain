import React, { useState } from 'react';
import {
  Card, CardContent, Typography, Box, Button, Divider, Dialog,
  DialogTitle, DialogContent, DialogActions, TextField
} from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import AddIcon from '@mui/icons-material/Add';

// Poll Card Component
function PollCard({ creatorName, postDate, animeName, season, episode, userTokens = 100 }) {
  const [pollOptions, setPollOptions] = useState([]);
  const [newOption, setNewOption] = useState('');
  const [selectedOption, setSelectedOption] = useState(null);
  const [isStakeDialogOpen, setIsStakeDialogOpen] = useState(false);
  const [isTokenStaked, setIsTokenStaked] = useState(false);
  const [isTheoryDialogOpen, setIsTheoryDialogOpen] = useState(false);

  // Handle opening and closing the stake dialog
  const handleStakeDialogOpen = () => {
    setIsStakeDialogOpen(true);
  };

  const handleStakeDialogClose = () => {
    setIsStakeDialogOpen(false);
  };

  // Handle opening and closing the theory dialog
  const handleTheoryDialogOpen = () => {
    setIsTheoryDialogOpen(true);
  };

  const handleTheoryDialogClose = () => {
    setIsTheoryDialogOpen(false);
  };

  // Handle selecting a poll option
  const handleSelectOption = (index) => {
    // Show the dialog if the token has not yet been staked
    if (!isTokenStaked) {
      setSelectedOption(index);
      handleStakeDialogOpen();
    } else {
      // Allow changing the selected option without reopening the dialog
      setSelectedOption(index);
    }
  };

  // Handle staking tokens
  const handleStakeTokens = () => {
    setIsTokenStaked(true);  // Mark token as staked
    handleStakeDialogClose();  // Close the dialog
  };

  // Handle adding a theory to the poll
  const handleAddTheory = () => {
    if (newOption.trim() !== '') {
      setPollOptions([...pollOptions, newOption]);
      setNewOption('');
      handleTheoryDialogClose();
    }
  };

  return (
    <Card sx={{ marginBottom: '20px', padding: '20px' }}>
      <CardContent>
        {/* Top section: Creator, profile picture, and post date */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <AccountCircleIcon sx={{ marginRight: '10px' }} />
            <Typography variant="subtitle1">{creatorName}</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <AccessTimeIcon sx={{ marginRight: '5px' }} />
            <Typography variant="subtitle2">{postDate}</Typography>
          </Box>
        </Box>

        {/* Divider */}
        <Divider sx={{ marginY: '10px' }} />

        {/* Question and anime details */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="body1">
            What will happen next in <strong>{animeName}</strong>?
          </Typography>
          <Button variant="outlined" disabled>
            S{season} E{episode}
          </Button>
        </Box>

        {/* Divider */}
        <Divider sx={{ marginY: '10px' }} />

        {/* Poll options */}
        {pollOptions.length > 0 && (
          <Box sx={{ marginBottom: '10px' }}>
            {pollOptions.map((option, index) => (
              <Box
                key={index}
                sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}
                onClick={() => handleSelectOption(index)}
              >
                {selectedOption === index && isTokenStaked ? (
                  <CheckCircleIcon color="primary" sx={{ marginRight: '10px' }} />
                ) : (
                  <RadioButtonUncheckedIcon sx={{ marginRight: '10px' }} />
                )}
                <Typography variant="body2">{option}</Typography>
              </Box>
            ))}
          </Box>
        )}

        {/* Add Theory Button */}
        <Button
          variant="contained"
          color="primary"
          startIcon={<AddIcon />}
          onClick={handleTheoryDialogOpen}
        >
          Add Theory
        </Button>

        {/* Stake 1 Token Dialog */}
        <Dialog
          open={isStakeDialogOpen}
          onClose={handleStakeDialogClose}
          maxWidth="sm" // Medium dialog width
          fullWidth
          BackdropProps={{
            style: {
              backgroundColor: 'rgba(0, 0, 0, 0.5)', // Darken background
              backdropFilter: 'blur(8px)' // Apply blur effect
            }
          }}
        >
          <DialogTitle>
            Stake 0.0001 ETH
            {/* Token balance displayed on top right */}
            <Typography
              variant="body2"
              color="textSecondary"
              sx={{ position: 'absolute', top: 10, right: 20 }}
            >
              Token Balance: {userTokens}
            </Typography>
          </DialogTitle>
          <DialogContent>
            <Typography>
              You are about to stake 0.0001 token on the selected option.
            </Typography>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleStakeDialogClose} color="secondary">
              Cancel
            </Button>
            <Button
              onClick={handleStakeTokens}
              color="primary"
            >
              Stake 0.0001 Token
            </Button>
          </DialogActions>
        </Dialog>

        {/* Add Theory Dialog */}
        <Dialog
          open={isTheoryDialogOpen}
          onClose={handleTheoryDialogClose}
          maxWidth="sm" // Medium dialog width
          fullWidth
          BackdropProps={{
            style: {
              backgroundColor: 'rgba(0, 0, 0, 0.5)', // Darken background
              backdropFilter: 'blur(8px)' // Apply blur effect
            }
          }}
        >
          <DialogTitle>
            Add Your Theory
            <Typography
              variant="body2"
              color="textSecondary"
              sx={{ position: 'absolute', top: 10, right: 20 }}
            >
              Balance: 1 ETH
            </Typography>
          </DialogTitle>
          <DialogContent>
            <TextField
              label="Theory Description"
              variant="outlined"
              fullWidth
              value={newOption}
              onChange={(e) => setNewOption(e.target.value)}
              multiline
              rows={3}
              sx={{ marginBottom: '10px' }}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleTheoryDialogClose} color="secondary">
              Cancel
            </Button>
            <Button
              onClick={handleAddTheory}
              color="primary"
              startIcon={<AddIcon />}
            >
              Stake 0.001 ETH
            </Button>
          </DialogActions>
        </Dialog>
      </CardContent>
    </Card>
  );
}

export default PollCard;

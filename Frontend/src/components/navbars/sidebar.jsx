import React, { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import { Box, List, ListItem, ListItemText, Button, Dialog, DialogTitle, DialogContent, Typography } from '@mui/material';
import CreatePost from '../create/createpost'; // Adjust import path if needed
import PollForm from '../create/createpoll'; // Adjust import path if needed

const Sidebar = () => {
  const theme = useTheme();
  const [activeTab, setActiveTab] = useState('Home');
  const [isDialogOpen, setIsDialogOpen] = useState(false); // CreatePost dialog state
  const [isPollOpen, setIsPollOpen] = useState(false); // PollForm dialog state
  const [showPollButton, setShowPollButton] = useState(false); // Poll button visibility
  const [showResult, setShowResult] = useState(false); // Result dialog visibility

  const handleTabClick = (tab) => setActiveTab(tab);
  const handleCreateClick = () => setIsDialogOpen(true);
  const handleClosePost = () => setIsDialogOpen(false);

  const handlePollClick = () => setIsPollOpen(true);
  const handleClosePoll = () => setIsPollOpen(false);

  const togglePollButton = () => setShowPollButton((prev) => !prev); // Toggle Poll button visibility
  const toggleResult = () => setShowResult((prev) => !prev); // Toggle Result dialog visibility

  return (
    <Box sx={{ width: '18vw', padding: '10px' }}>
      <List>
        {['Home', 'Polls', 'Posts'].map((tab, index) => (
          <ListItem
            button
            key={index}
            onClick={() => handleTabClick(tab)}
            sx={{
              backgroundColor: activeTab === tab ? theme.palette.background.light : 'transparent',
              color: activeTab === tab ? theme.palette.background.lightest : 'inherit',
              '&:hover': {
                backgroundColor: activeTab !== tab
                  ? theme.palette.action.hover
                  : theme.palette.background.dark,
              },
              borderRadius: '4px',
              marginBottom: '8px',
            }}
          >
            <ListItemText primary={tab} />
          </ListItem>
        ))}

        <Button 
          variant="contained" 
          color="primary" 
          fullWidth 
          onClick={handleCreateClick} 
          sx={{ marginTop: '20px' }}
        >
          Post something!
        </Button>

        {/* Invisible Button to Toggle Poll Button Visibility */}
        <Button
          variant="text"
          fullWidth
          onClick={togglePollButton}
          sx={{ marginTop: '10px', opacity: 0 }}
        >
          Invisible Button
        </Button>

        {/* Poll Button, initially hidden */}
        {showPollButton && (
          <Button 
            variant="outlined" 
            color="secondary" 
            fullWidth 
            onClick={handlePollClick} 
            sx={{ marginTop: '10px' }}
          >
            Create a Poll
          </Button>
        )}

        {/* Invisible Button to Show Result Dialog */}
        <Button
          variant="text"
          fullWidth
          onClick={toggleResult}
          sx={{ marginTop: '10px', opacity: 0 }}
        >
          Invisible Button
        </Button>
      </List>

      {/* CreatePost Dialog */}
      <Dialog open={isDialogOpen} onClose={handleClosePost}>
        <CreatePost onClose={handleClosePost} />
      </Dialog>

      {/* PollForm Dialog */}
      <Dialog open={isPollOpen} onClose={handleClosePoll} maxWidth="md" fullWidth>
        <PollForm onClose={handleClosePoll} />
      </Dialog>

      {/* Result Dialog */}
      <Dialog open={showResult} onClose={toggleResult}>
        <DialogTitle>You Won!</DialogTitle>
        <DialogContent>
          <Typography variant="body1">Itachi killed the Uchiha Clan</Typography>
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default Sidebar;

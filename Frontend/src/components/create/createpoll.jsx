import React, {useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CloseIcon from '@mui/icons-material/Close';
import {
  Box, Button, TextField, Typography, IconButton
} from '@mui/material';
import { addPoll } from '../../slices/communitySlice';

const PollForm = ({ onClose }) => {
  const [animeName, setAnimeName] = useState('');
  const [season, setSeason] = useState('');
  const [episodeNumber, setEpisodeNumber] = useState('');
  const [publishDate, setPublishDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [theory, setTheory] = useState('');

//   const [theoryInput, setTheoryInput] = useState('');
//   const [theories, setTheories] = useState([]);

  const dispatch = useDispatch();
  const nextID = useSelector((state) => state.community.nextID);

  // Add a new theory to the list
//   const handleAddTheory = () => {
//     if (theoryInput.trim()) {
//       setTheories((prev) => [...prev, theoryInput]);
//       setTheoryInput(''); // Clear the input field
//     }
//   };

  const handleSubmit = (e) => {
    e.preventDefault();
    const pollData = {
      id: nextID,
      creatorName: 'Subhajit Biswas',
      animeName,
      postDate: '20th October, 2024',
      season: Number(season),
      episode: Number(episodeNumber),
      Theories: [],
    };

    dispatch(addPoll(pollData)); // Add poll to Redux state
    onClose(); // Close the form
  };

  return (
    <Box sx={styles.container}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <Box sx={styles.titleContainer}>
          <Typography variant="h5" sx={styles.title}>Create Poll</Typography>
          <IconButton onClick={onClose} sx={styles.closeButton}>
            <CloseIcon />
          </IconButton>
        </Box>

        <TextField
          label="Anime Name"
          variant="outlined"
          value={animeName}
          onChange={(e) => setAnimeName(e.target.value)}
          sx={styles.input}
        />

        <Box sx={styles.row}>
          <TextField
            label="Season Number"
            type="number"
            value={season}
            onChange={(e) => setSeason(e.target.value)}
            sx={styles.input}
          />
          <TextField
            label="Episode Number"
            type="number"
            value={episodeNumber}
            onChange={(e) => setEpisodeNumber(e.target.value)}
            sx={styles.input}
          />
        </Box>

        <Box sx={styles.row}>
          <TextField
            label="Poll Publish Date & Time"
            type="datetime-local"
            value={publishDate}
            onChange={(e) => setPublishDate(e.target.value)}
            sx={styles.input}
            InputLabelProps={{ shrink: true }}
          />
          <TextField
            label="Poll End Date & Time"
            type="datetime-local"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            sx={styles.input}
            InputLabelProps={{ shrink: true }}
          />
        </Box>

        <TextField
          label="Actual Theory"
          variant="outlined"
          value={theory}
          onChange={(e) => setTheory(e.target.value)}
          sx={styles.input}
        />

        <Button type="submit" variant="contained" sx={styles.button}>
          Publish
        </Button>
      </form>
    </Box>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '45vh',
  },
  form: {
    backgroundColor: '#121212',
    padding: '30px',
    borderRadius: '10px',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
    width: '1000px', 
    color: '#ffffff',
  },
  titleContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '20px',
  },
  title: {
    fontSize: '1.75rem',
    color: '#ffffff',
  },
  closeButton: {
    color: '#fff',
  },
  input: {
    width: '100%',
    marginBottom: '15px',
    '& .MuiOutlinedInput-root': {
      fontSize: '0.9rem',
      '& fieldset': {
        borderColor: '#444',
      },
      '&:hover fieldset': {
        borderColor: '#888',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#3b82f6',
      },
    },
    '& .MuiInputLabel-root': {
      fontSize: '0.8rem',
      color: '#b0b0b0',
    },
    '& .MuiInputBase-input': {
      fontSize: '0.9rem',
      color: '#fff',
    },
  },
  row: {
    display: 'flex',
    gap: '10px',
  },
  button: {
    fontSize: '0.9rem',
    width: '100%',
    padding: '12px',
    backgroundColor: '#3b82f6',
    color: '#fff',
    borderRadius: '5px',
    transition: 'background-color 0.3s',
    '&:hover': {
      backgroundColor: '#1e60d0',
    },
  },
};

export default PollForm;

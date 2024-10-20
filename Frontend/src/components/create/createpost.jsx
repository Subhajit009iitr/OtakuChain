import React, { useState } from 'react';
import {
  Box,
  Button,
  TextField,
  Typography,
  IconButton,
  InputLabel,
  FormControl,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { useDispatch, useSelector } from 'react-redux'; 
import { addPost } from '../../slices/communitySlice'; 
import dmn from '../../assets/animePics/dmn.png'

const CreatePost = ({ onClose }) => {
  const [caption, setCaption] = useState('');
  const [title, setTitle] = useState('');
  const [file, setFile] = useState(null);

  const dispatch = useDispatch();
  const nextId = useSelector((state) => state.community.nextId); // Get the next ID from Redux

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create post object
    const newPost = {
      id: nextId,
      creatorName: 'Subhajit Biswas',
      postDate: '20th October, 2024',
      title,
      description: caption,
      image: dmn,
    };

    // Dispatch action to add the post
    dispatch(addPost(newPost));

    setCaption('');
    setTitle('');
    setFile(null);

    onClose(); // Close dialog after submission
  };

  return (
    <Box sx={styles.container}>
      <Box sx={styles.header}>
        <Typography variant="h6" sx={styles.title}>
          Create Post
        </Typography>
        <IconButton onClick={onClose} sx={styles.closeButton}>
          <CloseIcon />
        </IconButton>
      </Box>
      <Box component="form" onSubmit={handleSubmit} sx={styles.form}>
        <TextField
          label="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          sx={styles.input}
          InputLabelProps={{ shrink: true }}
        />
        <FormControl fullWidth sx={styles.input}>
          <InputLabel shrink sx={styles.label}>
            Upload Image
          </InputLabel>
          <Box sx={styles.uploadBox}>
            <Button component="label" variant="outlined" sx={styles.uploadButton}>
              {file ? file.name : 'Upload file'}
              <CloudUploadIcon sx={styles.uploadIcon} />
              <input type="file" hidden accept="image/*" onChange={handleFileChange} />
            </Button>
          </Box>
        </FormControl>
        <TextField
          label="Caption"
          multiline
          rows={2}
          placeholder="Enter the caption here"
          value={caption}
          onChange={(e) => setCaption(e.target.value)}
          sx={styles.input}
          InputLabelProps={{ shrink: true }}
        />
        <Button type="submit" variant="contained" sx={styles.postButton}>
          Post
        </Button>
      </Box>
    </Box>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    width: '500px',
    backgroundColor: '#0e1621',
    borderRadius: '10px',
    padding: '20px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '20px',
  },
  title: {
    fontSize: '1.25rem',
    color: '#ffffff',
  },
  closeButton: {
    color: '#ffffff',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  subTitle: {
    marginBottom: '10px',
    fontSize: '1rem',
    color: '#ffffff',
  },
  input: {
    marginBottom: '15px',
    '& .MuiOutlinedInput-root': {
      color: '#ffffff',
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
      color: '#b0b0b0',
    },
  },
  label: {
    fontSize: '0.85rem',
    color: '#b0b0b0',
  },
  uploadBox: {
    display: 'flex',
    alignItems: 'center',
    border: '1px dashed #444',
    borderRadius: '5px',
    padding: '10px',
  },
  uploadButton: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    color: '#ffffff',
    borderColor: '#444',
    textTransform: 'none',
  },
  uploadIcon: {
    marginLeft: '10px',
  },
  postButton: {
    backgroundColor: '#3b82f6',
    color: '#ffffff',
    '&:hover': {
      backgroundColor: '#1e60c4',
    },
  },
};

export default CreatePost;

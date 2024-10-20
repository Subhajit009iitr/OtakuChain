import React from 'react';
import Box from '@mui/material/Box';
import Sidebar from '../navbars/sidebar';
import PostCard from '../cards/postcard';
import PollCard from '../cards/pollCard';
import { useTheme } from '@mui/material/styles';
import { useSelector } from 'react-redux'; 
import image6 from '../../assets/pic6.png';

function CommunityBody() {
  const theme = useTheme();
  const { polls, posts } = useSelector((state) => state.community);
  const communityState = useSelector((state) => state.community);
  console.log("Community",communityState);

  return (
    <Box sx={{ 
        display: 'flex', 
        marginTop: '64px', 
        height: '90vh', 
        backgroundColor: theme.palette.background.primary,
        marginLeft:'40px',
        marginRight:'40px',
    }}>
      {/* Left Sidebar */}
      <Box sx={{ width: '20%', borderRight: '4px solid #0A1B25', position: 'sticky', top: '64px' }}>
        <Sidebar />
      </Box>

      {/* Right Content Section */}
      <Box 
        sx={{ 
          width: '80%', 
          padding: '20px', 
          paddingLeft: '40px',
          paddingRight: '40px',
          overflowY: 'auto' 
        }}>
        {/* Render polls */}
        {polls.map((poll, index) => (
          <PollCard 
            key={index} 
            creatorName={poll.creatorName || "Anonymous"} // Optional fields handling
            postDate={poll.postDate || "Unknown Date"} 
            animeName={poll.animeName} 
            season={poll.season} 
            episode={poll.episode} 
          />
        ))}
        
        {/* Render posts */}
        {posts.map((post) => (
          <PostCard 
            key={post.id}
            creatorName={post.creatorName || "Anonymous"} 
            postDate={post.postDate || "Unknown Date"} 
            title={post.title} 
            description={post.description} 
            image={post.image || image6} // Default image if no image provided
          />
        ))}
      </Box>
    </Box>
  );
}

export default CommunityBody;

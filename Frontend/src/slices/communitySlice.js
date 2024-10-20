import { createSlice } from '@reduxjs/toolkit';
import aot from '../assets/animePics/aot.jpeg'
import shin from '../assets/animePics/shin.jpeg'

// Initial state for the community slice
const initialState = {
  page: "community",
  nextId: 3,
  polls: [
    // {
    //   id: 3,
    //   creatorName: "Subhajit Biswas",
    //   animeName: "Naruto",
    //   postDate: "20th October, 2024",
    //   Theories: [],
    // }
  ],
  posts: [
    {
      id: 1,
      creatorName: "Subhajit Biswas",
      postDate: "4th October, 2023",
      title: "Attack on Titan Last Season",
      description: "Time to watch the last season of AOT. Shinzou wo Sasageyo!!!",
      image: aot,
    },
    {
      id: 2,
      creatorName: "John Doe",
      postDate: "5th October, 2023",
      title: "Shinchan's Funny",
      description: "Was binge watching Shinchan. Can't stop laughing my guts out ;)",
      image: shin,
    },
  ],
  userTokenBalance: 1,
};

// Community slice
export const communitySlice = createSlice({
  name: 'community',
  initialState,
  reducers: {
    // Action to add a new poll
    addPoll: (state, action) => {
      state.polls.push(action.payload);
      state.nextID += 1; // Increment nextID
    },
    // Action to add a theory (poll option)
    addTheoryToPoll: (state, action) => {
      const { pollId, theory } = action.payload;
      const poll = state.polls.find(p => p.id === pollId);
      if (poll) {
        poll.options.push(theory);
      }
    },
    // Action to stake tokens on a poll option
    stakeTokens: (state, action) => {
      const { pollId, optionIndex } = action.payload;
      const poll = state.polls.find(p => p.id === pollId);
      if (poll && !poll.staked) {
        poll.selectedOption = optionIndex;
        poll.staked = true;
        state.userTokenBalance -= 1;
      }
    },
    // Action to add a new post
    addPost: (state, action) => {
      state.posts.push(action.payload); // Add the new post to the posts array
      state.nextId += 1; // Increment the next ID
    },
    // Action to update token balance
    updateTokenBalance: (state, action) => {
      state.userTokenBalance = action.payload.balance;
    },
  },
});

// Exporting actions to be used in components
export const { 
  addPoll, 
  addTheoryToPoll, 
  stakeTokens, 
  addPost, 
  updateTokenBalance, 
} = communitySlice.actions;

export default communitySlice.reducer;

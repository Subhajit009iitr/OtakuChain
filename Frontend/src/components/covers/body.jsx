import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTheme } from '@mui/material/styles';
import HorizontalScrollable from '../scrollers/scroller';
import EventHorizontalScrollable from '../scrollers/eventScroller';
import ScrollerHeader from '../header/scrollerHeader';
import MarketCard from '../cards/marketCard'; // Import MarketCard component
// import EventCard from '../cards/eventCard';   // Import EventCard component
import RenderCards from '../cards/renderCard';
import EpisodeCard from '../cards/episode';
import { setPageContent, setActiveTab, fetchCards, resetEpisodes } from '../../slices/bodySlice';
import { resetCoverImage } from '../../slices/coverSlice'; 
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function Body() {
  const dispatch = useDispatch();
  const theme = useTheme();
  const { page, content, selectedCard, episodes, marketItems, events, activeTab, status, error } = useSelector((state) => state.body);
  console.log("Body State:",useSelector((state) => state.body)); 

  useEffect(() => {
    // Fetch cards when component loads
    if (status === 'idle') {
      dispatch(fetchCards());
    }
  }, [dispatch, status]);

  const handleSeeMore = (section) => {
    dispatch(setPageContent(section));
  };

  const handleBack = () => {
    dispatch(setPageContent('home'));
    dispatch(resetCoverImage());
    dispatch(resetEpisodes());
  };

  const handleTabChange = (tab) => {
    dispatch(setActiveTab(tab));
  };

  // Loading state
  if (status === 'loading') {
    return <div>Loading cards...</div>;
  }

  // Error state
  if (status === 'failed') {
    return <div>Error fetching cards: {error}</div>;
  }

  return (
    <Box sx={{ backgroundColor: theme.palette.background.main, padding: theme.spacing(2), minHeight: '60vh' }}>
      {page === 'home' ? (
        content.map((section, index) => (
          <Box key={index} sx={{ marginBottom: theme.spacing(4) }}>
            <ScrollerHeader 
              title={section.title} 
              onSeeMore={() => handleSeeMore(section.name)} 
              showSeeMore={true} 
            />
            <HorizontalScrollable items={section.items} />
          </Box>
        ))
      ) : page === 'details' ? (
        <Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: theme.spacing(2) }}>
            <Box sx={{ display: 'flex', gap: theme.spacing(2) }}>
              <Button 
                variant={activeTab === 'Episodes' ? 'contained' : 'outlined'}
                onClick={() => handleTabChange('Episodes')}
              >
                Episodes
              </Button>
              <Button 
                variant={activeTab === 'Marketplace' ? 'contained' : 'outlined'}
                onClick={() => handleTabChange('Marketplace')}
              >
                Marketplace
              </Button>
            </Box>
            <Button onClick={handleBack} variant="contained">Back</Button>
          </Box>
          <Divider />
          <Box sx={{ marginTop: theme.spacing(2) }}>
            {selectedCard ? (
              activeTab === 'Marketplace' ? (
                <>
                  {/* Events Section */}
                  <ScrollerHeader title="Events" showSeeMore={true}/>
                  {events.length > 0 ? (
                    <EventHorizontalScrollable items={events} />
                  ) : (
                    <Typography variant="body1" sx={{ textAlign: 'center', padding: theme.spacing(2) }}>
                      No events available.
                    </Typography>
                  )}
                  
                  {/* Products Section */}
                  <ScrollerHeader title="Products" showSeeMore={true}/>
                  {marketItems.length > 0 ? (
                    <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: theme.spacing(2), marginTop: theme.spacing(2) }}>
                      {marketItems.map((item, index) => (
                        <MarketCard
                          key={index}
                          imageURL={item.imageURL}
                          title={item.title}
                          description={item.description}
                          token={item.token}
                        />
                      ))}
                    </Box>
                  ) : (
                    <Typography variant="body1" sx={{ textAlign: 'center', padding: theme.spacing(2) }}>
                      No marketplace items available.
                    </Typography>
                  )}
                </>
              ) : activeTab === 'Episodes' ? (
                episodes.length > 0 ? (
                  episodes.map((episode, index) => (
                    <EpisodeCard 
                      key={index} 
                      imageURL={episode.imageURL} 
                      title={episode.title} 
                      description={episode.description} 
                    />
                  ))
                ) : (
                  <Typography variant="body1" sx={{ textAlign: 'center', padding: theme.spacing(2) }}>
                    No episodes available for this card.
                  </Typography>
                )
              ) : (
                <Typography variant="body1" sx={{ textAlign: 'center', padding: theme.spacing(2) }}>
                  Content coming soon.
                </Typography>
              )
            ) : (
              <Typography variant="body1" sx={{ textAlign: 'center', padding: theme.spacing(2) }}>
                Please select a card to view content.
              </Typography>
            )}
          </Box>
        </Box>
      ) : (
        <Box>
          {content.find(section => section.name === page) && (
            <>
              <ScrollerHeader 
                title={content.find(section => section.name === page).title} 
                onSeeMore={handleBack} 
                showSeeMore={false}
              />
              <RenderCards 
                cardList={content.find(section => section.name === page)?.items || []} 
              />
            </>
          )}
        </Box>
      )}
    </Box>
  );
}

export default Body;

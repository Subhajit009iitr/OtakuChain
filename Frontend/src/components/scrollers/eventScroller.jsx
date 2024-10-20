import React, { useRef, useState, useEffect } from 'react';
import { Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { ScrollLeftButton, ScrollRightButton } from '../buttons/scroll';
import EventCard from '../cards/eventCard'; 
import { useDispatch } from 'react-redux';
import { setCoverImage } from '../../slices/coverSlice';

function EventHorizontalScrollable({ items }) {
  const theme = useTheme();
  const scrollContainerRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const dispatch = useDispatch();

  const updateScrollButtons = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 1);
    }
  };

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      updateScrollButtons();
      scrollContainer.addEventListener('scroll', updateScrollButtons);
      return () => {
        scrollContainer.removeEventListener('scroll', updateScrollButtons);
      };
    }
  }, [items]);

  const handleCoverChange = (imageURL) => {
    dispatch(setCoverImage(imageURL));
  };

  return (
    <Box position="relative" display="flex" alignItems="center">
      {canScrollLeft && <ScrollLeftButton onClick={scrollLeft} />}

      <Box
        ref={scrollContainerRef}
        display="flex"
        overflow="hidden"
        sx={{
          whiteSpace: 'nowrap',
          scrollBehavior: 'smooth',
          width: '100%',
          padding: theme.spacing(1),
          marginLeft: '60px',
          marginRight: '60px',
        }}
      >
        {items.map((event, index) => (
          <EventCard
            key={event._id}
            title={event.title}
            imageURL={event.imageURL}
            date={event.date}
            time={event.time}
            location={event.location}
            tokenAmount={event.token}
            onClick={() => handleCoverChange(event.imageURL)}
          />
        ))}
      </Box>

      {canScrollRight && <ScrollRightButton onClick={scrollRight} />}
    </Box>
  );
}

export default EventHorizontalScrollable;

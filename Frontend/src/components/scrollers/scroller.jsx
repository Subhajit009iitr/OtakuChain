import React, { useRef, useState, useEffect } from 'react';
import { Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { ScrollLeftButton, ScrollRightButton } from '../buttons/scroll';
import ScrollableCard from '../cards/card';
import { useDispatch } from 'react-redux';
import { setCoverImage } from '../../slices/coverSlice';

function HorizontalScrollable({ items }) {
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
        {items.map((card, index) => (
          <ScrollableCard
            key={index}
            id={card._id}
            title={card.title}
            imageURL={card.imageURL}
            date={card.date}
            time={card.time}
            rating={card.rating}
            onClick={() => alert(`${card.title} clicked`)}
            handleButtonClick={() => handleCoverChange(card.imageURL)}
          />
        ))}
      </Box>

      {canScrollRight && <ScrollRightButton onClick={scrollRight} />}
    </Box>
  );
}

export default HorizontalScrollable;

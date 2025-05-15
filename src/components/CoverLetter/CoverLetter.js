import { useJobApplication } from 'PortfolioHooks';
import { useState, useEffect } from 'react';
import { Stack, Typography } from '@mui/material';

const CoverLetter = ({ application = {}, className = '' }) => {
  const [text, setText] = useState('');

  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}${application.letter}`)
      .then((response) => response.text())
      .then((data) => setText(data))
      .catch((err) => console.error('Error loading text:', err));
  }, [application]);

  return (
    <Stack className={`${className} group relative`}>
      <div className="absolute w-full h-full z-10 bg-white rounded-2xl border border-dashed group-hover:translate-x-1 group-hover:translate-y-1 transition-transform duration-300 ease-out">
        {/* This div moves in the opposite direction */}
      </div>

      <Typography
        variant="body1"
        className="py-3 px-6 cursor-pointer border z-20 border-dashed  bg-white rounded-2xl group-hover:-translate-x-1 group-hover:-translate-y-1 transition-transform duration-300 ease-out "
        sx={(theme) => ({
          fontFamily: 'Comic Relief',
          textAlign: 'center',
          color: theme.palette.text.secondary,
          lineHeight: 2.5,
          fontSize: 18,
        })}
      >
        {text}
      </Typography>
    </Stack>
  );
};

export default CoverLetter;

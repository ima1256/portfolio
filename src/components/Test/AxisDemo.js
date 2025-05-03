import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Box, Slider, Typography } from '@mui/material';

const AxisDemo = () => {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [rotateZ, setRotateZ] = useState(0);

  return (
    <Box
      sx={{
        perspective: 1000, // Required for 3D rotation to work properly
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 3,
        mt: 5,
      }}
    >
      <motion.div
        animate={{ rotateX, rotateY, rotateZ }}
        style={{
          width: 200,
          height: 200,
          backgroundColor: '#3498db',
          color: 'white',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 12,
          transformStyle: 'preserve-3d', // Keeps children in 3D space
        }}
        transition={{
          type: 'spring',
          stiffness: 100,
          damping: 10,
        }}
      >
        3D Box
      </motion.div>

      {/* Sliders */}
      <Box sx={{ width: '80%' }}>
        <Typography gutterBottom>X Axis Rotation</Typography>
        <Slider
          value={rotateX}
          onChange={(e, v) => setRotateX(v)}
          min={-180}
          max={180}
        />
        <Typography gutterBottom>Y Axis Rotation</Typography>
        <Slider
          value={rotateY}
          onChange={(e, v) => setRotateY(v)}
          min={-180}
          max={180}
        />
        <Typography gutterBottom>Z Axis Rotation</Typography>
        <Slider
          value={rotateZ}
          onChange={(e, v) => setRotateZ(v)}
          min={-180}
          max={180}
        />
      </Box>
    </Box>
  );
};

export default AxisDemo;

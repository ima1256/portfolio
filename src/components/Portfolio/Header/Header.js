import { Button, Stack, IconButton } from '@mui/material';
import { useState } from 'react';
import React from 'react';
import { Box } from '@mui/material';
import BookCallButton from './BookCallButton';
import HeaderBrand from './HeaderBrand';
import NavTabs from './NavTabs';
import MobileDrawer from './MobileDrawer';
import BookCallDialog from './BookCallDialog';
import MenuIcon from '@mui/icons-material/Menu';
import { motion } from 'framer-motion';
import { XFlip } from '../extra/AnimatedSection';
import { Animation } from '../extra/AnimatedSection';
import { animationIds } from '../../Test/Animations';
import { useHeaderHeight, useSections } from 'PortfolioHooks';

const Header = ({ className = '', onTabChange = () => {} }) => {
  const sections = useSections();

  const [dialogOpen, setDialogOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleBookCallClick = () => {
    setDialogOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  const handleDrawerToggle = () => {
    setDrawerOpen((prev) => !prev);
  };

  const height = useHeaderHeight();

  return (
    <Stack
      className={`${className} w-full`}
      sx={{
        px: { xs: 2, md: 3 },
        height,
        fontSize: '2.3vh',
      }}
      direction="row"
      justifyContent="space-between"
      alignItems="center"
    >
      {/* Logo and Name */}
      <Animation
        id={animationIds.headerLogo}
        waitForAnimation="dataAndMediaLoaded"
        name="Rotate X"
      >
        <HeaderBrand />
      </Animation>

      {/* Desktop Tabs */}
      <Box
        sx={{
          px: 1,
          display: { xs: 'none', lg: 'flex' },
          justifyContent: 'center',
        }}
      >
        <NavTabs onTabChange={onTabChange} />
      </Box>

      {/* Desktop Book a Call button */}
      <Box
        sx={{
          display: { xs: 'none', lg: 'flex' },
          alignItems: 'center',
        }}
      >
        <BookCallButton onClick={handleBookCallClick} />
      </Box>

      <IconButton
        sx={{ display: { xs: 'flex', lg: 'none' } }}
        onClick={handleDrawerToggle}
      >
        <MenuIcon sx={{ fontSize: '6vh' }} />
      </IconButton>

      {/* Mobile Drawer */}
      <MobileDrawer
        width={200}
        open={drawerOpen}
        onClose={handleDrawerClose}
        onBookCallClick={() => {
          handleDrawerClose(); // close drawer
          handleBookCallClick(); // open dialog
        }}
        onDrawerToggle={handleDrawerToggle}
      />

      <BookCallDialog open={dialogOpen} onClose={() => setDialogOpen(false)} />
    </Stack>
  );
};

export default Header;

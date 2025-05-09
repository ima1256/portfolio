import { useState, useEffect } from 'react';

import {
  Drawer,
  Box,
  List,
  ListItemText,
  ListItemButton,
  Tab,
} from '@mui/material';
import BookCallButton from './BookCallButton';
import { useSections } from 'PortfolioHooks';

const MobileDrawer = ({
  onTabChange,
  open,
  onClose,
  onBookCallClick,
  onDrawerToggle,
  width,
}) => {
  const [pendingAction, setPendingAction] = useState(null);

  const sections = useSections();

  const handleItemClick = (type, index = null) => {
    setPendingAction({ type, index });
    onDrawerToggle(); // Close the drawer on action
  };

  useEffect(() => {
    if (!open && pendingAction) {
      if (pendingAction.type === 'tab' && pendingAction.index !== null) {
        onTabChange(sections[pendingAction.index].name);
      } else if (pendingAction.type === 'bookCall') {
        onBookCallClick();
      }
      setPendingAction(null); // Reset state after the action
    }
  }, [open, pendingAction, sections, onTabChange, onBookCallClick]);

  return (
    <Drawer
      PaperProps={{ sx: { width: 250 } }}
      anchor="right"
      open={open}
      onClose={onClose}
    >
      <Box>
        {/* Section List */}
        <List>
          {sections.map((section, index) => (
            <ListItemButton
              key={section.name}
              onClick={() => {
                handleItemClick('tab', index); // Handle tab change
              }}
            >
              <ListItemText primary={section.name} />
            </ListItemButton>
          ))}
        </List>

        {/* Book a Call Button */}
        <div className="flex grow-1 justify-center items-center">
          <BookCallButton onClick={() => handleItemClick('bookCall')} />
        </div>
      </Box>
    </Drawer>
  );
};

export default MobileDrawer;

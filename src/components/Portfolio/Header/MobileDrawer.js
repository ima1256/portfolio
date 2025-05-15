import { useState, useEffect } from 'react';

import {
  Drawer,
  Box,
  List,
  ListItemText,
  ListItemButton,
  Tab,
  Stack,
} from '@mui/material';
import BookCallButton from './BookCallButton';
import { useSections } from 'PortfolioHooks';

const MobileDrawer = ({
  open = false,
  onClose = () => {},
  onBookCallClick = () => {},
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
        //onTabChange(sections[pendingAction.index].name);
      } else if (pendingAction.type === 'bookCall') {
        onBookCallClick();
      }
      setPendingAction(null); // Reset state after the action
    }
  }, [open, pendingAction, sections, onBookCallClick]);

  return (
    <Drawer
      PaperProps={{ sx: { width: 250 } }}
      anchor="right"
      open={open}
      onClose={onClose}
    >
      <Stack direction="column" className="h-full">
        {/* Section List */}
        <List sx={{ padding: 0 }}>
          {sections.map((section, index) => (
            <ListItemButton
              key={section.name}
              onClick={() => {
                handleItemClick('tab', index); // Handle tab change
              }}
              sx={{
                paddingY: 4,
              }}
            >
              <ListItemText
                primary={section.name}
                primaryTypographyProps={{
                  sx: {
                    fontWeight: 'bold',
                    color: 'text.secondary',
                    textAlign: 'center',
                    fontSize: '1.5rem',
                  },
                }}
              />
            </ListItemButton>
          ))}
        </List>

        {/* Book a Call Button */}
        <div className="flex flex-grow justify-center items-center">
          <BookCallButton onClick={() => handleItemClick('bookCall')} />
        </div>
      </Stack>
    </Drawer>
  );
};

export default MobileDrawer;

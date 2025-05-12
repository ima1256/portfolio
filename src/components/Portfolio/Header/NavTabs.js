import { useState } from 'react';
import { Tabs, Tab } from '@mui/material';
import { useHeaderHeight, useSections } from 'PortfolioHooks';

const NavTabs = ({ onTabChange }) => {
  const sections = useSections();

  const [value, setValue] = useState(0);

  const handleTabChange = (event, newValue) => {
    setValue(newValue);
    onTabChange(sections[newValue].name);
  };

  const height = useHeaderHeight();

  return (
    <Tabs
      value={value}
      onChange={handleTabChange}
      centered
      textColor="inherit"
      sx={{ height: '100%' }}
    >
      {sections.map((section, index) => (
        <Tab
          key={index}
          label={section.name}
          sx={{ fontSize: 'inherit', fontWeight: 'bold', minHeight: height }}
        />
      ))}
    </Tabs>
  );
};

export default NavTabs;

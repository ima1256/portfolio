import { useState } from "react";
import { Tabs, Tab } from '@mui/material'

const NavTabs = ({ sections, onTabChange }) => {
  const [value, setValue] = useState(0);

  const handleTabChange = (event, newValue) => {
    setValue(newValue);
    onTabChange(sections[newValue].name);
  };

  return (
    <Tabs
      value={value}
      onChange={handleTabChange}
      centered
      textColor="inherit"
      sx={{ height: "100%" }}
    >
      {sections.map((section, index) => (
        <Tab
          key={index}
          label={section.name}
          sx={{ fontSize: "16px", minHeight: "64px" }}
        />
      ))}
    </Tabs>
  );
};

export default NavTabs
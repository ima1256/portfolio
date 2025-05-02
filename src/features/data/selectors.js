// selectors.js
import { createSelector } from "@reduxjs/toolkit";

// Selector to access the logo URL for a specific skill
export const selectSkillLogo = (skillKey) =>
  createSelector(
    (state) => state.data.json?.skills?.all, // Access the skills part of the data
    (skills) => skills?.[skillKey]?.logoUrl // Return the logo URL for the given skill
  );

export const selectProjects = () => {
  createSelector(
    (state) => state.data?.json?.projects,
    (projects) => projects
  );
};

// Optional: Selector to check if data is still loading
export const selectLoadingState = (state) => state.data.loading;

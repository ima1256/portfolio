import logo from './logo.svg';
import './App.css';
import { ThemeProvider } from '@mui/material/styles';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

import './tailwind.css';

import theme from './theme';

import { routes } from './constants';

// import DataLoader from './components/DataLoader';

import Portfolio from './components/Portfolio/Portfolio';

import Test from './components/Test/Test';
import Home from './components/Test/Home';
import { eventBus } from './eventBus';
import { useEffect, useState } from 'react';
import Loading from './components/Test/Loading';
import { Stack } from '@mui/material';
import { useJobApplicationsIds } from 'PortfolioHooks';
import CompanyIntro from 'components/CoverLetter/CompanyIntro';

function App() {
  const jobApplicationsIds = useJobApplicationsIds();

  return (
    <ThemeProvider theme={theme}>
      <Router>
        {/* <DataLoader /> */}
        <div className="App h-full">
          <Routes>
            <Route path="/" element={<Portfolio />} />
            {/* <Route path="/" element={<Home />} /> */}
            <Route path="/test" element={<Test />} />
            {jobApplicationsIds.map((jobApplicationId) => (
              <Route
                key={jobApplicationId}
                path={`/${jobApplicationId}`}
                element={<CompanyIntro applicationId={jobApplicationId} />}
              />
            ))}
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;

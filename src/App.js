import logo from './logo.svg';
import './App.css';
import { ThemeProvider } from "@mui/material/styles";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import "./tailwind.css";

import theme from "./theme";

import { routes } from "./constants";

import Portfolio from "./components/Portfolio/Portfolio";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="*" element={<Navigate to="/portfolio" />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App;

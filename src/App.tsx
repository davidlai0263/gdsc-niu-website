import React from 'react';
import ResponsiveAppBar from './AppNav';
import { Box } from '@mui/material';
import HomePage from './HomePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import EventPage from './EventPage';

function App() {
  return (
    <div className="App">
      <ResponsiveAppBar />
      <Box component="main" sx={{ display: 'flex', justifyContent: 'center', m: '75px auto 0 auto' }}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/events' element={<EventPage/>}/>
          </Routes>
        </BrowserRouter>
      </Box>
    </div>
  );
}

export default App;

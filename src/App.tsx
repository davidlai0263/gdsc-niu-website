import React from 'react';
import ResponsiveAppBar from './AppNav';
import { Box, ButtonBase, Card, Chip, Typography } from '@mui/material';
import Cover from './assets/cover.jpg'
import GDSCNIULogo from './assets/gdscniu_border.svg'

function App() {
  return (
    <div className="App">
      <ResponsiveAppBar />
      <Box component="main" sx={{ width: '100%', display: 'flex', justifyContent: 'center', m: '75px auto 0 auto' }}>
        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'block' } }}>
          <img src={Cover} alt="" width={'100%'} />
          <Card sx={{
            width: 600,
            height: 400,
            position: 'absolute',
            top: 250,
            left: 50

          }}>
            <img src={GDSCNIULogo} alt="" />
            <Chip label='國立宜蘭大學 — Google 學生開發者社群'
            style={{fontSize: '20px', fontWeight: 'bold'}}
              sx={{
                mt:3,
                color:'white',
                backgroundColor: 'rgb(69,134,243)',
                background: 'linear-gradient(90deg, rgba(69,134,243,1) 16%, rgba(235,67,52,1) 32%, rgba(251,189,6,1) 63%, rgba(53,170,83,1) 91%)'
              }}></Chip>
          </Card>
          <Box sx={{ display: 'flex' }}>
            <ButtonBase sx={{ flexGrow: 1, height: 150, bgcolor: '#4586F3' }}>
              <Typography color="white" sx={{fontFamily: 'Open Sans'}}>EVENTS</Typography>
            </ButtonBase>
            <ButtonBase sx={{ flexGrow: 1, height: 150, bgcolor: '#EB4334' }}>
              <Typography color="white" sx={{fontFamily: 'Open Sans'}}>BLOG</Typography>
            </ButtonBase>
            <ButtonBase sx={{ flexGrow: 1, height: 150, bgcolor: '#FBBD06' }}>
              <Typography color="white" sx={{fontFamily: 'Open Sans'}}>ABOUT</Typography>
            </ButtonBase>
            <ButtonBase sx={{ flexGrow: 1, height: 150, bgcolor: '#35AA53' }}>
              <Typography color="white" sx={{fontFamily: 'Open Sans'}}>SOCIAL</Typography>
            </ButtonBase>
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default App;

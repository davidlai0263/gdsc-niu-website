import { Box, ButtonBase, Card, Chip, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom"
import Cover from './assets/cover.jpg'
import GDSCNIULogo from './assets/gdscniu_border.svg'

const welcomeTextStyle = {
  fontSize: 24,
  my: 1
}
const welcomeTextStyleXs = {
  fontSize: 24,
  mt: 1
}
const HomePage = () => {
    const navigate = useNavigate()
    return (
        <>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'block' } }}>
                <Box sx={{ display: 'flex', justifyContent: 'end', height: '90vh' }}>
                    <img src={Cover} alt="" height={'100%'} style={{ overflow: 'hidden' }} />
                </Box>
                <Card sx={{
                    width: '30vw',
                    height: '90vh',
                    position: 'absolute',
                    top: 75,
                    left: 0

                }}>
                    <img src={GDSCNIULogo} alt="GDSC NIU Logo with border" />
                    <Box sx={{ display: 'flex', justifyContent: 'center', my: 3 }}><Chip label='國立宜蘭大學 — Google 學生開發者社群'
                        style={{ fontSize: 20, fontWeight: 'bold' }}
                        sx={{
                            color: 'white',
                            bgcolor: '#4586F3'
                        }}></Chip>
                    </Box>
                    <Box sx={{ height: 'calc(90vh - 15vw - 80px);', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                        <Typography sx={welcomeTextStyle}>歡迎來到</Typography>
                        <Typography sx={welcomeTextStyle}>國立宜蘭大學</Typography>
                        <Box display='flex'>
                            <Typography sx={{ ...welcomeTextStyle, color: '#4586F3', fontWeight: 'bold' }}>G</Typography>
                            <Typography sx={{ ...welcomeTextStyle, mr: '4px' }}>oogle</Typography>
                            <Typography sx={{ ...welcomeTextStyle, color: '#EB4334', fontWeight: 'bold', ml: '4px' }}>D</Typography>
                            <Typography sx={welcomeTextStyle}>eveloper</Typography>
                        </Box>
                        <Box display='flex'>
                            <Typography sx={{ ...welcomeTextStyle, color: '#FBBD06', fontWeight: 'bold' }}>S</Typography>
                            <Typography sx={{ ...welcomeTextStyle, mr: '4px' }}>tudent</Typography>
                            <Typography sx={{ ...welcomeTextStyle, color: '#35AA53', fontWeight: 'bold', ml: '4px' }}>C</Typography>
                            <Typography sx={welcomeTextStyle}>lubs</Typography>
                        </Box>
                        <Typography sx={{ ...welcomeTextStyle, mt: 10, fontWeight: 'bold' }}>網站建置中 敬請期待！</Typography>
                    </Box>
                </Card>
                <Box sx={{ display: 'flex' }}>
                    <ButtonBase sx={{ flexGrow: 1, height: 150, bgcolor: '#4586F3' }} onClick={()=>navigate('/events')}>
                        <Typography color="white" sx={{ fontFamily: 'Open Sans', fontSize: 22 }}>EVENTS</Typography>
                    </ButtonBase>
                    <ButtonBase sx={{ flexGrow: 1, height: 150, bgcolor: '#EB4334' }}>
                        <Typography color="white" sx={{ fontFamily: 'Open Sans', fontSize: 22 }}>BLOG</Typography>
                    </ButtonBase>
                    <ButtonBase sx={{ flexGrow: 1, height: 150, bgcolor: '#FBBD06' }}>
                        <Typography color="white" sx={{ fontFamily: 'Open Sans', fontSize: 22 }}>ABOUT</Typography>
                    </ButtonBase>
                    <ButtonBase sx={{ flexGrow: 1, height: 150, bgcolor: '#35AA53' }}>
                        <Typography color="white" sx={{ fontFamily: 'Open Sans', fontSize: 22 }}>SOCIAL</Typography>
                    </ButtonBase>
                </Box>
            </Box>
            {/* 以上為Desktop */}

            <Box sx={{ flexGrow: 1, display: { xs: 'block', md: 'none' } }}>
                <Box sx={{ width: '100%' }}>
                    <img src={GDSCNIULogo} alt="GDSC NIU Logo with border" style={{ width: '100%' }} />
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <Typography sx={welcomeTextStyleXs}>歡迎來到</Typography>
                    <Typography sx={welcomeTextStyleXs}>國立宜蘭大學</Typography>
                    <Box display='flex'>
                        <Typography sx={{ ...welcomeTextStyleXs, color: '#4586F3', fontWeight: 'bold' }}>G</Typography>
                        <Typography sx={{ ...welcomeTextStyleXs, mr: '4px' }}>oogle</Typography>
                        <Typography sx={{ ...welcomeTextStyleXs, color: '#EB4334', fontWeight: 'bold', ml: '4px' }}>D</Typography>
                        <Typography sx={welcomeTextStyleXs}>eveloper</Typography>
                    </Box>
                    <Box display='flex'>
                        <Typography sx={{ ...welcomeTextStyleXs, color: '#FBBD06', fontWeight: 'bold' }}>S</Typography>
                        <Typography sx={{ ...welcomeTextStyleXs, mr: '4px' }}>tudent</Typography>
                        <Typography sx={{ ...welcomeTextStyleXs, color: '#35AA53', fontWeight: 'bold', ml: '4px' }}>C</Typography>
                        <Typography sx={welcomeTextStyleXs}>lubs</Typography>
                    </Box>
                    <Typography sx={{ ...welcomeTextStyleXs, mt: 4, fontWeight: 'bold' }}>網站建置中 敬請期待！</Typography>
                </Box>
            </Box>
        </>
    )
}

export default HomePage
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import ButtonBase from '@mui/material/ButtonBase';
import MenuItem from '@mui/material/MenuItem';
import GDSCNIULogo from './assets/gdscniu.svg'
import { Link } from '@mui/material';

const pages = ['Events', 'Blog', 'About Us', 'Social'];

function ResponsiveAppBar() {
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <AppBar component="nav" color='inherit'>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Link href='https://gdscniu.me/'>
                        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                            <img src={GDSCNIULogo} alt="GDSC NIU Logo" width={300} />
                        </Box>
                    </Link>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'end' }}>
                        {pages.map((page) => (
                            <ButtonBase
                                key={page}
                                onClick={handleCloseNavMenu}
                                sx={{ color: 'black', display: 'block', height: 70, width: 100, fontSize: 16, fontFamily: 'Open Sans' }}
                            >
                                {page}
                            </ButtonBase>
                        ))}
                    </Box>
                    {/* 以上Desktop介面 */}

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        {/* Menu鈕 */}
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        {/* Menu清單 */}
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page} onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">{page}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <Link href='https://gdscniu.me/'>
                        <Box sx={{ flexGrow: 2, display: { xs: 'flex', md: 'none' } }}>
                            <img src={GDSCNIULogo} alt="GDSC NIU Logo with border" height={70} />
                        </Box>
                    </Link>

                    
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default ResponsiveAppBar;
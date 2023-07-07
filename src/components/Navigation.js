import React from 'react';
import { Box, Link } from '@mui/material'
import Logo from '../assets/logo.svg';
import { ExpandMore } from '@mui/icons-material';

const Navigation = (pages) => (
    <Box sx={{
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        padding: '16px',
        borderBottom: '24px var(--primary-color) solid'
    }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Link
                href="#"
                className="nav"
            >
                Shop <ExpandMore />
            </Link>
        </Box>
        <Box><Link href="#" className="nav">Specials</Link></Box>
        <Box>
            <img src={Logo} style={{
                display: 'block',
                width: '125px'
            }} />
        </Box>
        <Box><Link href="#" className="nav">About</Link></Box>
        <Box><Link href="#" className="nav">Contact</Link></Box>
    </Box>
);

Navigation.propTypes = {
    pages: Object
}

export default Navigation;
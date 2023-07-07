import { Box } from '@mui/material';

const Footer = () => (
    <Box sx={{
        backgroundColor: 'var(--primary-color)',
        width: '100%',
        display: 'flex',
        height: '185px',
        color: 'var(--secondary-color)'
    }}>
        <Box sx={{ padding: '12px', fontSize: '24px' }}>
            What's up I'm a footer.
        </Box>
    </Box>
)

export default Footer;
import { Box } from '@mui/material';

const Block = ( {children} ) => {

    return (
    <Box sx={{ 
        backgroundColor: 'var(--primary-color)',
        color: 'var(--secondary-color)', 
        padding: '28px',
        textAlign: 'center'
    }}>
        {children}
    </Box>);
}

export default Block;
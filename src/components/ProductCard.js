import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/material';

const ProductCard = ({ title, copy, cta }) => (
    <Box className="product-card">
        <Box sx={{
            borderRadius: '50%',
            width: '120px', height: '120px',
            background: 'white',
            margin: 'auto',
            boxShadow: '5px 5px 10px rgba(0,0,0,0.3)'
        }}>
            IMAGE
        </Box>
        <Box sx={{ margin: '16px' }}>
            <h3>{title}</h3>
            <span>{copy}</span>
        </Box>
        {cta}
    </Box>
);

ProductCard.propTypes = {
    title: PropTypes.string.isRequired,
    copy: PropTypes.string.isRequired,
    cta: PropTypes.node,
}

export default ProductCard;
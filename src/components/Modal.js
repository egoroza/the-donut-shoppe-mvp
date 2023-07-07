import React, { useState } from 'react';
import { Dialog, Box } from '@mui/material';
import Chip from '@mui/material/Chip';
import { DOUGH_SIZES } from '../api/mockData';

const OrderModal = ({ modalOpen, handleModalClose }) => {
    const [doughSize, setSize] = useState('');

    return (
        <Dialog
            open={modalOpen}
            onClose={handleModalClose}
        >
            <div className="custom-modal">
                <h3>What size?</h3>
                <Box sx={{ marginTop: '12px' }}>
                    {DOUGH_SIZES.map(size =>
                        <Chip
                            label={size}
                            variant={doughSize === size ? 'filled' : 'outlined'}
                            sx={{
                                backgroundColor: doughSize === size ? 'var(--primary-color)' : 'var(--secondary-color)',
                                color: doughSize === size ? 'var(--secondary-color)' : 'var(--primary-color)',
                                marginRight: '4px',
                                fontSize: '12px',
                                textTransform: 'uppercase',
                                fontWeight: 'bold',
                                border: '2px var(--primary-color) solid',
                                transition: 'all .2s ease-in-out',
                                '&:hover': {
                                    backgroundColor: 'var(--primary-color) !important',
                                    color: 'var(--secondary-color)'
                                }
                            }}
                            onClick={() => setSize(size)}
                            clickable
                        />
                    )}
                </Box>
                <h2>$100</h2>
            </div>
        </Dialog>
    )
};

export default OrderModal;
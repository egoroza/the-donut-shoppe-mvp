import React, { useState } from 'react';
import HeroCarousel from '../components/HeroCarousel';
import Helmet from 'react-helmet';
import Block from '../components/Block';
import ProductCard from '../components/ProductCard';
import { Box, Switch, Button } from '@mui/material';
import OrderModal from '../components/Modal';
import { ExpandMore } from '@mui/icons-material';
import { PRODUCT_CARDS } from '../api/mockData';

const Homepage = () => {

    const [modalOpen, setModalOpen] = useState(false);
    const [toggleOn, setToggleOn] = useState(false);

    const handleModalClose = () => {
        setModalOpen(false);
    }

    const atcButton =
        <Button sx={{
            border: '3px var(--primary-color) solid',
            borderRadius: '15px',
            fontSize: '12px',
            color: 'var(--primary-color)',
            flexGrow: 0,
            '&:hover': {
                backgroundColor: 'var(--primary-color)',
                color: 'var(--secondary-color)'
            }
        }}
            endIcon={<ExpandMore />}
            onClick={() => setModalOpen(true)}
        >
            Add to Order
        </Button>;

    return (
        <>
            <Helmet><script src="https://unpkg.com/flickity@2/dist/flickity.pkgd.min.js"></script></Helmet>
            <OrderModal
                modalOpen={modalOpen}
                handleModalClose={handleModalClose}
            />
            <Box sx={{
                width: '100%',
                margin: 'auto'
            }}>
                <HeroCarousel />
            </Box>
            <Box sx={{
                display: 'flex',
                justifyContent: 'center'
            }}>
                <Box sx={{
                    width: '80%'
                }}>
                    <Block>
                        <h1>a friday night treat</h1>
                        <h4>give these a try. because you deserve it.</h4>
                        <Switch
                            checked={toggleOn}
                            onChange={() => setToggleOn(!toggleOn)}
                            inputProps={{ 'aria-label': 'controlled' }}
                        />
                    </Block>
                </Box>
            </Box>
            <Box sx={{
                display: 'flex',
                width: '80%',
                justifyContent: 'center',
                margin: 'auto',
                padding: '16px',
                flexWrap: 'wrap',
                justifyContent: 'flex-start',
                alignItems: 'stretch'
            }}>
                {PRODUCT_CARDS.map(product => {
                    return <ProductCard
                        title={product.title}
                        copy={product.copy}
                        cta={atcButton}
                    />
                }
                )}
            </Box>
        </>
    )
};

export default Homepage;
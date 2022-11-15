import * as React from 'react';
import PropTypes from 'prop-types';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import './Banner.css';

function Banner() {
    function srcset(image, size, rows = 1, cols = 1) {
        return {
            src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
            srcSet: `${image}?w=${size * cols}&h=${size * rows
                }&fit=crop&auto=format&dpr=2 2x`,
        };
    }
    return (
        <div>
            <Paper
                sx={{
                    position: 'relative',
                    color: '#fff',
                    mb: 4,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    backgroundColor: '#0e8049',

                    display: { xs: 'none', md: 'flex' }
                }}
            >
                <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>

                    <Box
                        sx={{
                            position: 'absolute',
                            top: 0,
                            bottom: 0,
                            right: 0,
                            left: 0,
                            backgroundColor: '#0e8049',
                        }}
                    />

                    <Grid sx={{ flexGrow: 1 }} container spacing={2}>
                        <Grid item xs={12} >

                            <Box
                                sx={{
                                    position: 'relative',
                                    pr: { md: 0 },
                                }}
                            >
                                <div role="presentation" style={{ paddingLeft: '25px' }} >

                                    <Breadcrumbs aria-label="breadcrumb" sx={{ color: 'white' }}>
                                        <Link underline="hover" color="inherit" href="/">
                                            Home
                                        </Link>
                                        <Link
                                            underline="hover"
                                            color="inherit"

                                        >
                                            Careers
                                        </Link>
                                    </Breadcrumbs>
                                </div>
                                <div className='listbox'>
                                    <div className='li_list'>
                                        <ImageList
                                            variant="quilted"
                                            cols={5}
                                            gap={8}
                                        >
                                            {itemData.map((item) => (
                                                <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1} >
                                                    <img
                                                        {...srcset(item.img, 121, item.rows, item.cols)}
                                                        alt={item.title}
                                                        loading="lazy"
                                                        style={{ borderRadius: '10px' }}
                                                    />
                                                </ImageListItem>
                                            ))}
                                        </ImageList>
                                    </div>

                                    <Box sx={{
                                        width: '100%',
                                        zIndex: 1,
                                        position: 'absolute',
                                        top: '283px'
                                    }} >
                                        <Box
                                            sx={{
                                                position: 'absolute',
                                                top: 0,
                                                bottom: 0,
                                                right: 0,
                                                left: 0,
                                            }}
                                        />
                                        <Box
                                            sx={{
                                                position: 'relative',
                                            }}
                                        >
                                            <Typography variant="h2" className="text" paragraph sx={{ fontWeight: '600' }}>
                                                Travel the world with confidence</Typography>
                                        </Box>

                                    </Box>
                                </div>


                            </Box>


                        </Grid>
                    </Grid>
                </Box>
            </Paper>
            <Paper
                sx={{
                    position: 'relative',
                    color: '#fff',
                    mb: 4,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    backgroundColor: '#0e8049',
                    marginTop: '10px',
                }}
            >
                <Box sx={{ flexGrow: 1, display: { xs: 'contents', md: 'none' } }}>
                    <Grid sx={{ flexGrow: 1 }} container spacing={2}>
                        <Grid item xs={12} >

                            <Box
                                sx={{
                                    position: 'relative',
                                    pr: { md: 0 },
                                }}
                            >
                                <div role="presentation" style={{ paddingLeft: '20px' }} >
                                    <Breadcrumbs aria-label="breadcrumb" sx={{ color: 'white' }}>
                                        <Link underline="hover" color="inherit" href="/">
                                            Home
                                        </Link>
                                        <Link
                                            underline="hover"
                                            color="inherit"

                                        >
                                            Careers
                                        </Link>
                                    </Breadcrumbs>
                                </div>

                                <div className='listbox2'>
                                    <div className='li_list'>
                                        <ImageList
                                            variant="quilted"
                                            cols={4}
                                            gap={4}
                                        >
                                            {itemDataXs.map((item) => (
                                                <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1} >
                                                    <img
                                                        {...srcset(item.img, 121, item.rows, item.cols)}
                                                        alt={item.title}
                                                        loading="lazy"
                                                        style={{ borderRadius: '10px' }}
                                                    />
                                                </ImageListItem>
                                            ))}
                                        </ImageList>
                                    </div>
                                    <Box sx={{
                                        width: '100%',
                                        zIndex: 1,
                                        position: 'absolute',
                                        top: '310px'
                                    }} >
                                        <Box
                                            sx={{
                                                position: 'relative',
                                            }}
                                        >
                                            <Typography variant="h3" className="text" paragraph sx={{ fontWeight: '600',fontSize: '2.5rem '}}>
                                                Travel the world with confidence</Typography>
                                        </Box>

                                    </Box>
                                </div>

                            </Box>


                        </Grid>
                    </Grid>
                </Box>
            </Paper>
           


        </div>
    );
}



export default Banner;


const itemData = [
    {
        img: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963',
        title: 'Breakfast',

    },
    {
        img: 'https://images.unsplash.com/photo-1533104816931-20fa691ff6ca',
        title: 'Burger',
        rows: 2
    },
    {
        img: 'https://images.unsplash.com/photo-1513326738677-b964603b136d',
        title: 'Camera',
    },
    {
        img: 'https://images.unsplash.com/photo-1498036882173-b41c28a8ba34',
        title: 'Coffee',

    },
    {
        img: 'https://images.unsplash.com/photo-1511091734515-e50d46c37240',
        title: 'Hats',

    },
    {
        img: 'https://images.unsplash.com/photo-1516496636080-14fb876e029d',
        title: 'Honey',
        author: '@arwinneil',


    },
    {
        img: 'https://images.unsplash.com/photo-1617821102890-6ac4bb577509',
        title: 'Basketball',
    },
    {
        img: 'https://images.unsplash.com/photo-1520440229-6469a149ac59',
        title: 'Fern',
    },
    {
        img: 'https://images.unsplash.com/photo-1534250617995-d16425086b91',
        title: 'Mushrooms',

    }

];


const itemDataXs = [
    {
        img: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963',
        title: 'Breakfast',

    },
    {
        img: 'https://images.unsplash.com/photo-1533104816931-20fa691ff6ca',
        title: 'Burger',
        rows: 2
    },
    {
        img: 'https://images.unsplash.com/photo-1513326738677-b964603b136d',
        title: 'Camera',
    },
    {
        img: 'https://images.unsplash.com/photo-1498036882173-b41c28a8ba34',
        title: 'Coffee',
        rows: 2
    },
    {
        img: 'https://images.unsplash.com/photo-1511091734515-e50d46c37240',
        title: 'Hats',

    },
    {
        img: 'https://images.unsplash.com/photo-1516496636080-14fb876e029d',
        title: 'Honey',
        author: '@arwinneil',


    },
    {
        img: 'https://images.unsplash.com/photo-1617821102890-6ac4bb577509',
        title: 'Basketball',
    },
    {
        img: 'https://images.unsplash.com/photo-1520440229-6469a149ac59',
        title: 'Fern',
    },
    {
        img: 'https://images.unsplash.com/photo-1534250617995-d16425086b91',
        title: 'Mushrooms',

    },
    {
        img: 'https://images.unsplash.com/photo-1528578862382-c6652b9bdb1c',
        title: 'Tomato basil',
    },
    {
        img: 'https://images.unsplash.com/photo-1522093007474-d86e9bf7ba6f',
        title: 'Sea star',
    },
    {
        img: 'https://images.unsplash.com/photo-1490578474895-699cd4e2cf59',
        title: 'Bike',

    },
    {
        img: 'https://images.unsplash.com/photo-1534113414509-0eec2bfb493f',
        title: 'Bike',

    },
    {
        img: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad',
        title: 'Bike',

    },
    {
        img: 'https://images.unsplash.com/photo-1609137144813-7d9921338f24',
        title: 'Bike',

    }
];
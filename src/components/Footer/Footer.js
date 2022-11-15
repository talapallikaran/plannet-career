import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import StarIcon from '@mui/icons-material/StarBorder';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';
import appstore from '../../images/images.png'
import gogglestore from '../../images/Get-It-On-Google-Play-Logo-Vector-1.png'
import Fab from '@mui/material/Fab';
import './Footer.css';
import Divider from '@mui/material/Divider';

function Copyright(props) {
    return (
        <Typography variant="body1" color="text.secondary" align="center" {...props}>
            {'Copyright © '}

            {new Date().getFullYear()}
            {'.'}
            <Link color="inherit" href="#" sx={{ textDecoration: 'none' }}>
                Plannet Technolgies Inc.
            </Link>{' '}
        </Typography>
    );
}

function CopyrightXs(props) {
    return (
        <Typography variant="subtitle1" color="text.secondary" align="center" {...props}>
            {'Copyright © '}

            {new Date().getFullYear()}
            {'.'}
            <Link color="inherit" varinat="subtitle1" href="#" sx={{ textDecoration: 'none' }}>
                All Rights Reserved By Plannet Technolgies Inc.
            </Link>{' '}
        </Typography>
    );
}



const footers = [
    {
        description: ['FAQ', 'Contact', ' Terms of Service', 'Careers', ' Planner Reference Sheet', 'Privacy Policy'],
    }
];

function Footer() {
    return (
        <React.Fragment>
        <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
            <CssBaseline />
            <Container
                component="footer"
                sx={{
                    py: [3, 6],
                }}
            >
                <Box sx={{ flexGrow: 1, display: { xs: 'contents', md: 'none' } }}>
                    <Grid container spacing={4} >
                        <Grid item xs={12} sm={12}  >
                            <Typography
                                variant="h6"
                                noWrap
                                component="a"
                                sx={{
                                    fontFamily: 'sans-serif',
                                    fontWeight: 700,
                                    color: 'white',
                                    textDecoration: 'none',
                                    fontSize: '60px'

                                }}
                            >
                                plannet
                            </Typography>

                        </Grid>
                        <Grid item xs={12} sm={12}  >

                            <Typography variant="subtitle1" component="p" color="white" sx={{
                                fontSize: '1.5rem',
                                marginTop: '-40px'
                            }}>
                                Travel Starts Here.
                            </Typography>

                        </Grid>
                        <Grid item xs={12}  >
                            <div style={{ marginTop: '-20px' }}>
                                <Box
                                    component="div"
                                    sx={{
                                        display: 'inline',
                                        padding: '3px',
                                        color: (theme) =>
                                            theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',

                                        borderRadius: 2,
                                        fontSize: '0.875rem',
                                        fontWeight: '700',
                                    }}
                                >
                                    <img src={appstore} height={40}
                                        width={144} />
                                </Box>
                                <Box
                                    component="div"
                                    sx={{
                                        display: 'inline',
                                        padding: '6px',
                                        color: (theme) =>
                                            theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',

                                        borderRadius: 2,
                                        fontSize: '0.875rem',
                                        fontWeight: '700',
                                    }}
                                >
                                    <img src={gogglestore} height={40}
                                        width={141} />
                                </Box>

                            </div>
                            <Box
                                component="div"
                                sx={{

                                    color: (theme) =>
                                        theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',

                                    borderRadius: 2,
                                    fontSize: '0.875rem',
                                    fontWeight: '700',
                                }}
                            >
                                <Fab variant="extended" size="medium" color="primary" aria-label="add" className='fab1'>

                                    Become a Plannet
                                    Planner
                                </Fab>
                            </Box>
                            <Box
                                component="div"
                                sx={{
                                    marginTop:'8px',
                                    color: (theme) =>
                                        theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',

                                    borderRadius: 2,
                                    fontSize: '0.875rem',
                                    fontWeight: '700',
                                }}
                            >
                                <Link href="#" variant="subtitle1" className='link'>
                                    Learn more about Planners
                                </Link>
                            </Box>
                        </Grid>
                        {footers.map((footer) => (
                            <Grid item xs={12} key={footer.title} >
                                <ul style={{
                                    flexWrap: 'wrap'
                                }}>
                                    {footer.description.map((item) => (
                                        <li key={item} style={{
                                            margin: '0 10px 8px 0',
                                            display: 'inline-block'
                                        }}>
                                            <Link href="#"  sx={{ color: 'white', textDecoration: 'none', fontSize: '0.985rem' }}>
                                                {item}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </Grid>
                        ))}
                        <Grid item xs={12}  >
                            <Box
                                component="div"
                                sx={{

                                    color: (theme) =>
                                        theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
                                    mt: 2,
                                    borderRadius: 2,
                                    fontSize: '0.875rem',
                                    fontWeight: '700',
                                }}
                            >
                                <Divider sx={{ borderColor: 'white', borderBottomWidth: 1, marginRight: '-32px ', marginLeft: '-80px ' }} />
                                <CopyrightXs sx={{
                                    mt: 3, color: 'white',
                                    fontSize: '1rem',
                                    fontWeight: '600'


                                }} />
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
                <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                    <Grid container spacing={6} >

                        <Grid item xs={4}  >

                            <Typography
                                variant="h6"
                                noWrap
                                component="a"

                                sx={{
                                    fontFamily: 'sans-serif',
                                    fontWeight: 700,
                                    color: 'white',
                                    textDecoration: 'none',
                                    fontSize: '3.8rem'

                                }}
                            >
                                plannet
                            </Typography>

                            <Typography variant="subtitle1" component="p" color="white" sx={{
                                fontSize: '1.2rem',
                        
                                marginTop: '-16px',
                               
    marginRight: '50px'

                            }}>
                                Travel Starts Here.
                            </Typography>
                            <Box
                                component="div"
                                sx={{

                                    color: (theme) =>
                                        theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',

                                    borderRadius: 2,
                                    fontSize: '0.875rem',
                                    fontWeight: '700',
                                }}
                            >
                                <Copyright sx={{
                                    mt: 5, color: 'white',
                                    fontSize: '0.7rem'
                                }} />
                            </Box>
                        </Grid>
                        {footers.map((footer) => (
                            <Grid item xs={4} key={footer.title} sx={{ textAlign: 'initial', }}>
                                <ul>
                                    {footer.description.map((item) => (
                                        <li key={item} >
                                            <Link href="#" variant="subtitle1" sx={{ color: 'white', textDecoration: 'none' }}>
                                                {item}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </Grid>
                        ))}

                        <Grid item xs={4}  >
                            <div>
                                <Box
                                    component="div"
                                    sx={{
                                        display: 'inline',
                                        p: 1,

                                        color: (theme) =>
                                            theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',

                                        borderRadius: 2,
                                        fontSize: '0.875rem',
                                        fontWeight: '700',
                                    }}
                                >
                                    <img src={appstore} height={40}
                                        width={140} />
                                </Box>
                                <Box
                                    component="div"
                                    sx={{
                                        display: 'inline',
                                        p: '6px',
                                        color: (theme) =>
                                            theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',

                                        borderRadius: 2,
                                        fontSize: '0.875rem',
                                        fontWeight: '700',
                                    }}
                                >
                                    <img src={gogglestore} height={40}
                                        width={145} />
                                </Box>

                            </div>
                            <Box
                                component="div"
                                sx={{
                                    p: 1,

                                    color: (theme) =>
                                        theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',

                                    borderRadius: 2,
                                    fontSize: '0.875rem',
                                    fontWeight: '700',
                                }}
                            >
                                <Fab variant="extended" size="medium" color="primary" aria-label="add" className='fab1'>

                                    Become a Plannet
                                    Planner
                                </Fab>
                            </Box>
                            <Box
                                component="div"
                                sx={{

                                    color: (theme) =>
                                        theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',

                                    borderRadius: 2,
                                    fontSize: '0.875rem',
                                    fontWeight: '700',
                                }}
                            >
                                <Link href="#" variant="subtitle1" className='link'>
                                    Learn more about Planners
                                </Link>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>

            </Container>
      
        </React.Fragment>
    );
}

export default function Pricing() {
    return <Footer />;
}
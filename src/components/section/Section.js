
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import './Section.css'
import Section1 from '../Planet-section/Section1';
import Footer from '../Footer/Footer';

const Root = styled('div')(({ theme }) => ({
    [theme.breakpoints.down('md')]: {
   
        width: '100%',
        background: 'linear-gradient(180deg, rgb(3 ,3 ,3 ,1) 0%, rgba(0,0,0,1) 35%)',
        position: 'absolute',
        top: '480px',
        typography: {
            // In Chinese and Japanese the characters are usually larger,
            // so a smaller fontsize may be appropriate.
            fontSize: 12,
          },
    },
    [theme.breakpoints.up('md')]: {
        width: '100%',
                    background: 'linear-gradient(180deg, rgb(3 ,3, 3, 1) 0%, rgba(0,0,0,1) 35%)',
                    position: 'absolute',
                    top: '485px'
      },
      [theme.breakpoints.up('lg')]: {
        width: '100%',
        background: 'linear-gradient(180deg, rgb(3 ,3, 3, 1) 0%, rgba(0,0,0,1) 35%)',
        position: 'absolute',
        top: '485px'
      },
      
  }));

export default function Section() {
    return (
        
        <div>
 <Root>
            <Box>
       
                <Box>
                    <Container maxWidth="lg">
         
                        <Grid container rowSpacing={1} spacing={5} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                            <Grid item xs={12}>
                                <Typography variant="h4"  paragraph sx={{ textAlign: 'left', ml: '10px', mt: '40px', fontWeight: '600',color:'white' }}>Join Us</Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography variant="body1" gutterBottom sx={{ textAlign: 'left', ml: '10px', color: ' #797a7a', fontWeight: '600' }}>
                                    Please email <span style={{ color: 'white' }}>hello@plannet.io</span> with your resume and the position you are interested in! We are excited for you to join us and help bulid our community on it's mission to see the world together.</Typography>
                            </Grid>
                        </Grid>

                        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                            {sectionData.map((item) => (
                                <>
                                    <Grid item xs={12} key={item.title}>
                                        <Typography variant="h4" className="text2" sx={{ textAlign: 'left', ml: '10px', fontWeight: '600', mt: '20px' }}>   {item.title}</Typography>
                                    </Grid>
                                    {item.description.map((data) => (
                                        <Grid item xs={6} sm={4} md={6} >
                                            <CardActionArea component="a" href="#">
                                                <Card sx={{ display: 'flex' }}>
                                                    <CardContent sx={{ flex: 1, textAlign: 'initial' }}>
                                                        <Typography component="h2" variant="h5" sx={{ fontWeight: '600', color: 'black' }} className="title2">
                                                            {data.title}<span className='remote'>Remote</span>
                                                        </Typography>
                                                        <Typography variant="subtitle1" color="text.secondary" sx={{ fontWeight: '600' }} className="address">
                                                            {data.address}
                                                        </Typography>
                                                    </CardContent>

                                                </Card>
                                            </CardActionArea>
                                        </Grid>
                                    ))}
                                </>
                            ))}
                        </Grid>

                        <Section1 />
                        <Footer />
                    </Container>
                </Box>
            </Box>
           
     
    </Root>
        </div>
    );
}

const sectionData = [
    {
        title: 'Engineering',
        description: [
            {
                title: 'iOS Engineer',
                address: 'New York City, Global'
            },
            {

                title: 'Android Engineer',
                address: 'New York City, Global'

            },
            {

                title: 'Backend Engineer',
                address: 'New York City, Global'
            },
            {

                title: 'Web Engineer',
                address: 'New York City, Global'

            },
            {

                title: 'QA Engineer',
                address: 'New York City, Global'

            },
        ]

    },



    {
        title: 'Product',
        description: [
            {
                title: 'Product Designer',
                address: 'New York City, Global'
            },
            {

                title: 'Product Manager',
                address: 'New York City, Global'

            },
            {

                title: 'Project Manager',
                address: 'New York City, Global'
            }

        ]
    },


    {
        title: 'Marketing',
        description: [
            {
                title: 'Growth Marketing Manager',
                address: 'New York City, Global'
            },
            {

                title: 'Product Marketing Manager',
                address: 'New York City, Global'

            },
            {

                title: 'Brand/Marketing Designer',
                address: 'New York City, Global'
            },
            {

                title: 'Social Media Marketing Manager',
                address: 'New York City, Global'
            }

        ]
    }
]


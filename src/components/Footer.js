import { AppBar, createTheme, Link, ThemeProvider } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';

const Footer = ()=> {
    return(
        <AppBar position="static">
            <Box sx={{padding:'40px'}}>
                <Grid container>
                  
                        <Grid item sm={12} lg={12} sx={{
                            display:'flex',
                            flexDirection:'column',
                            alignItems:'center'
                        }}>
                            <Box mt={'1rem'}>
                                <Typography sx={{
                                    fontSize:20,
                                    fontWeight:'bold'
                                    }}>QuoteLoad
                                </Typography>
                            </Box>
                            <Box mt={'1rem'}>
                                <Link underline='none' sx={{color:'white'}}>Docs</Link>{' . '}
                                <Link underline='none' sx={{color:'white'}}>Author</Link>{' . '}
                                <Link underline='none' sx={{color:'white'}}>Keywords</Link>{' . '}
                                <Link underline='none' sx={{color:'white'}}>Blog</Link>{' . '}
                                <Link underline='none' sx={{color:'white'}}>Start page</Link>
                            </Box>
                            <Box mt={'1rem'}>
                                <Typography color={'#8b8c8d'}>©2023 QuoteLoad | All rights reserved.</Typography>
                            </Box>
                        </Grid>
                  
                </Grid>                
            </Box>
        </AppBar>
    );
}
export default Footer;
                    







                    // <Grid item xs={12} sm={12} lg={4} sx={{
                    //     display:'flex',
                    //     justifyContent:'flex-end'
                    // }}>
                    //     <Grid sx={{
                    //         display:'flex',
                    //         flexDirection:'column',
                    //         alignItems:'center',
                    //         justifyContent:'center'
                    //     }}>
                    //         <Box>
                    //             <Link underline='none'>Back to top</Link>
                    //         </Box>
                    //         <Box mt={1}>
                    //             <TwitterIcon />
                    //             <FacebookIcon sx={{ml:2}} />
                    //         </Box>
                    //     </Grid>
                    // </Grid>
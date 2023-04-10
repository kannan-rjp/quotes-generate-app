import '../App.css'
import AppBar from '@mui/material/AppBar';
import Grid from '@mui/material/Grid'
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import logo from '../assets/logo.png'

import {NavLink} from 'react-router-dom';


const Header = ()=>{
  return (
    <>
      <AppBar position="fixed" sx={{padding:2}}>
        {/* sx={{
        backgroundImage: 'linear-gradient(to top, #08131e , #0b1b2a)',
        color: '#fff',
        boxShadow: '3px 5px 4px #030f1a',
        padding:2
      }} */}
        <Grid container>
          <Grid item lg={2} sx={{
            display:'flex',
            flex:'auto',
            alignItems:'center'
          }}>
            <Typography sx={{
              fontSize:20,
              fontWeight:'bold'
            }}>QuoteLoad</Typography>
            <img alt='header-logo' className='img-logo' src={logo} />
          </Grid>
          <Grid item lg={8} sx={{
            display:'flex',
            gap:2,
            alignItems:'center'
              // <Typography className='link' >API</Typography> component={Link}
          }}>
              
              {/* <Typography component={NavLink} to='*' className='link'>API</Typography>
              <Typography component={NavLink} to='*' className='link'>On this day</Typography>
              <Typography component={NavLink} to='/' className='link'>Start page</Typography>
              <Typography component={NavLink} to='/about' className='link'>About</Typography> */}
              <NavLink to='/' className={({isActive})=>isActive ? 'link-active':'link'}>Kannan</NavLink>
              <NavLink to='/about' className={({isActive})=>isActive ? 'link-active':'link'}>About</NavLink>
              <NavLink to='*' className={({isActive})=>isActive ? 'link-active':'link'}>On this day</NavLink>
              <NavLink to='*' className={({isActive})=>isActive ? 'link-active':'link'}>API</NavLink>
          </Grid>
          <Grid item lg={2} sx={{
            display:'flex',
            alignItems:'center',
            justifyContent:'flex-end'
          }}>
            <TwitterIcon />
            <FacebookIcon sx={{ml:2}} />
          </Grid>
        </Grid>
      </AppBar>
    </>
  );
}
export default Header;

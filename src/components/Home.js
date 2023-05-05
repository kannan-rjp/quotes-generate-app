import logo from '../assets/zen-quotes-logo.png';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import { Button, CircularProgress, createTheme,ThemeProvider } from '@mui/material';
import { useEffect,useState } from 'react';
import Layout from '../layout/Layout';

const Home = () => {
    const [quote, setQuote] = useState([]);
    async function quoteGet(){
        try{
            const response = await fetch(`https://quotable.io/quotes?page=1`);
            const data = await response.json();
            let i = Math.floor(Math.random()*data.results.length);
            // console.log(data.results[i]);  generate random index and get the ator and his quote
            setQuote(data.results[i]);
            
        }
        catch(error){
            console.log(error,'the error occured.......');
        }   

    }
    useEffect(()=>{
        quoteGet();
    },[])
    
    return (
        <>  
            
                <Box sx={{
                    height: '100vh',
                    display:'flex',
                    flexDirection:'column',
                    alignItems:'center',
                    justifyContent:'center',
                    padding:'20px',
                }}>
                    
                    <img className="img" alt="there is no src" src={logo} />
                    {quote?<Box sx={{
                        display:'flex',
                        flexDirection:'column',
                        alignItems:'center'
                    }}>
                        <Typography align='center' mt={3} variant='p' >`{quote.content}`</Typography>
                        <Typography align='center' mt={1} variant='pone' >{quote.author}</Typography>
                        <Button variant='contained' sx={{
                            textTransform:'none',
                            mt:1,
                            lineHeight:1.5
                        }} onClick={quoteGet}>Generate</Button>
                    </Box>:<Box sx={{ display: 'flex' }}>
                    <CircularProgress color='inherit' sx={{
                        background:'transparent',mt:3
                    }} />
                    </Box>}
                </Box>
            
            
        </>
    );
}
export default Home;
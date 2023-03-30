import logo from '../assets/zen-quotes-logo.png';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import { Button, CircularProgress, createTheme,ThemeProvider } from '@mui/material';
import { useEffect,useState } from 'react';

const ManinContent = () => {
    const [quote, setQuote] = useState("");
    const quoteGet = ()=> {
        const url = 'https://quote-garden.onrender.com/api/v3/quotes/random';
        fetch(url)
        .then((response)=>response.json())
        // .then((data)=>console.log(data))
        .then((data)=>{
            if(data?.data?.length>0){
                setQuote(data.data[0])
            }
        })
        .catch((err)=>console.log(err,'error message..'))
    }
    useEffect(()=>{
        quoteGet();
    },[])
    
    return (
        <>  
            
                <Box sx={{
                    height: '91vh',
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
                        <Typography align='center' mt={3} variant='p' >`{quote.quoteText}`</Typography>
                        <Typography align='center' mt={1} variant='pone' >{quote.quoteAuthor}</Typography>
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
export default ManinContent;
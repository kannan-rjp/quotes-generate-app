import Grid from '@mui/material/Grid'
import { Box, Paper, Typography } from '@mui/material';
import { useEffect, useState } from 'react';

const About = ()=> {
   const [quoteCollection, setQuoteCollection] = useState([]);
   async function getAuthorAsCard(){
      try{
            const response = await fetch(`https://quotable.io/quotes?page=1`);
         // console.log(response)
            if(response.status==200){
               let data = await response.json();
               // console.log(data.results,'The data....')
               // if(data?.results.length>0){
               //    setQuoteCollection(data.results);
               //    // console.log(setQuoteCollection,'The quote collection is quote collection is..')
               //    console.log(quoteCollection,'The quote collection is quote collection is..')
               // }
               setQuoteCollection(data.results);
               
            }
      }
      catch(error){
         console.log(error,'the error occured in the author collection...');
      }
      
   }
   useEffect(()=>{
      getAuthorAsCard()
   },[])
 return(
   
    <Grid container sx={{padding:2}} spacing={1}>
        <Grid item sm={12} lg={12}>
            <Paper elevation={3}>
               <Box sx={{
                  display:'flex',
                  flexDirection:'column',
                  padding:3
               }}>
                  <Box>
                     <Typography sx={{fontWeight:'bold',fontSize:20}} color='secondary'>Get Inspired in a Whole New Way with the Reality Quotes Image Generator</Typography>
                  </Box>
                  
               </Box>
            </Paper>
        </Grid>
        
         {quoteCollection.map((ele,keyId) => (
         <Grid key={keyId} item sm={12} lg={4}>
            <Paper>
               <Box sx={{
                  display:'flex',
                  flexDirection:'column',
                  padding:3,
                  alignItems:'center',
                  height:'auto'
               }}>
                  <Box>
                     <Typography sx={{fontWeight:'bold',fontSize:18}}>{ele.content}</Typography>
                  </Box>
                  <Box>
                     <Typography>{ele.author}</Typography>
                  </Box>
               </Box>
            </Paper>
         </Grid>    
         ))}
   
    </Grid>
 );
}
export default About;
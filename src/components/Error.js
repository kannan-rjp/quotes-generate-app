import { Typography,Box,Button } from "@mui/material";
const Error = ()=> {
    return(
        <Box sx={{
            height: '100vh',
            display:'flex',
            flexDirection:'column',
            alignItems:'center',
            justifyContent:'center',
            padding:'20px',
        }}>
            <Box sx={{
                display:'flex',
                flexDirection:'column',
                alignItems:'center'
            }}>
                <Typography align='center' mt={3} variant='p' >404</Typography>
                <Typography align='center' mt={1} variant='pone' >Page Not FOund</Typography>
                
            </Box>
        </Box>
    );
}
export default Error;
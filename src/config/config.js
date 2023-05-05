import { createTheme } from "@mui/material";
import { indigo,deepPurple, red } from '@mui/material/colors';

const theme = createTheme({
    palette: {
        primary:{
            main: red[600],
            light: indigo[50],
            contrastText: '#fff', //white
        },
        secondary:{
          main: red[400],
          light: indigo[300],
          contrastText: '#fff'
        }
    },
    overrides: {
      MuiButton: {
        raisedPrimary: {
          color: red[200],
        },
      },
    },
    components:{
      MuiTypography:{
          variants:[
              {
                  props:  {
                      variant: 'footer-p'
                  },
                  style:{
                      fontSize:70,
                      color:'red',
                      textShadow: '2px 2px black'
                  },   
              },
              {
                props:  {
                    variant: 'p'
                },
                style:{
                    fontSize:30,
                }
              },
              {
                  props:  {
                      variant: 'pone'
                  },
                  style:{
                      fontSize:20,
                  }
              },
              {
                props:  {
                    variant: 'link-p'
                },
                style:{
                     textDecoration: 'none',
                }
            }
          ]
      },
      
    }
  })
  export default theme
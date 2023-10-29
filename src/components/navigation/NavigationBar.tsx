import { useEffect, useState } from 'react';
import { 
  Box, 
  AppBar, 
  Toolbar, 
  IconButton,
  Avatar,
  Stack,
  Chip,
  Typography,
  Container
} from '@mui/material';
import Link from 'next/link'
import Image from 'next/image';
import { useRouter } from 'next/router';
import MenuIcon from '@mui/icons-material/Menu';
import { Link as MUILink } from '@mui/material';
import { grey } from '@mui/material/colors';

export default function NavigationBar(props:any) {
    const { writeOption } = props;
    const router = useRouter();
    const [onScroll, SetOnScroll] = useState(false);
    const [openDrawer, setOpenDrawer] = useState(false);

    const listenScrollEvent = (event:any) => {
      if (window.scrollY < 1) {
        SetOnScroll(false)
      } else {
        SetOnScroll(true)
      } 
    }

    useEffect(() => {
      window.addEventListener('scroll', listenScrollEvent);

      return () =>
          window.removeEventListener('scroll', listenScrollEvent);
    }, [onScroll]);

    useEffect(()=>{ setOpenDrawer(false) },[])

    // #002538
    return (
      <>
        <Box 
          // component={Container}
        >
          <AppBar 
          elevation={0}
          position={"static"}
          sx={{
            backgroundColor:'#f9f9f9ff',
            height: 70,
            display:'flex',
            flexDirection:'column',
            justifyContent:'center',
            alignItems:'center',
            transition:'top 0.25s',
          }}>
            <Toolbar
            sx={{
              position:'relative',
              backgroundColor:'transparent',
              width:1,
              maxWidth:1920,
            }}>
              <Box 
              sx={{ 
                display:'flex',
                flexGrow: 1
              }}>
                <div>
                  <Typography
                    component={"h2"}
                    fontFamily={"Poppins Bold"}
                    variant='h6'
                    sx={{
                      color:"#010252",
                      '&:hover':{
                        cursor:"pointer",
                      }
                    }}
                  >
                    checkout
                  </Typography>
                </div>
            
              </Box>

            </Toolbar>
            
          </AppBar>
          
        </Box>
        
        
      </>
    );
}



function CustomMuiLink(props:any){
    return(
      <MUILink underline="hover" component="button" 
      sx={{
        fontFamily:'Poppins Regular',
        fontSize:15,
        color:grey[700],
      }}>
        {props.children}
      </MUILink>
    )
}



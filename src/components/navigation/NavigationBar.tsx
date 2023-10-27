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
                <Box>
                  <Link href="/">
                    <Typography>
                      Check Out
                    </Typography>
                  </Link>
                </Box>
                
              </Box>

              <div>
                <Box
                sx={{
                  display:{
                    md:'flex',
                    sm:'none',
                    xs:'none'
                  }
                }}>
                  <Stack spacing={3} direction="row">
                    <CustomMuiLink>
                      <Link href="/">Home</Link>
                    </CustomMuiLink>
                
                  </Stack>
                </Box>
                <IconButton 
                aria-label="menu"
                sx={{
                  display:{
                    md:'none',
                    sm:'block',
                    xs:'block'
                  }
                }}
                onClick={()=>{
                  setOpenDrawer(!openDrawer)
                }}>
                  <MenuIcon />
                </IconButton>
              </div>

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



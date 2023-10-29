import { useEffect, useState } from 'react';
import { 
  Box, 
  AppBar, 
  Toolbar, 
} from '@mui/material';
import Link from 'next/link'
import Image from 'next/image';
import { useRouter } from 'next/router';

export default function NavigationBar(props:any) {
    const router = useRouter();
   
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
                  <Link href="/">
                    <Image
                      alt=""
                      src="/assets/wirepick_logo.png"
                      width={100}
                      height={10}
                      style={{
                      width:'100%',
                      height:'100%',
                      objectFit:'contain',
                      padding:5
                    }}/>
                  </Link>
                </div>
            
              </Box>

            </Toolbar>
            
          </AppBar>
          
        </Box>
        
        
      </>
    );
}


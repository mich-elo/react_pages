import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material';


const theme = createTheme({
  typography: {
    fontFamily: ["Poppins Regular","Helvetica", "Arial", "sans-serif"].join(","),
  }
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>  
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

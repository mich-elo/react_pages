import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { createTheme, PaletteColorOptions, ThemeProvider, useTheme } from '@mui/material/styles';

import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'


declare module '@mui/material/styles' {
  interface PaletteOptions {
    primary?:PaletteColorOptions;
    custom?: PaletteColorOptions;
    success?: PaletteColorOptions;
    warning?: PaletteColorOptions;
    formColor?:PaletteColorOptions;
    paymentButtonColor?:PaletteColorOptions;
  }
}




const theme = createTheme({
  palette: {
    custom: {
      light: '#cfd8dc',
      main: '#455a64',
      dark: '#263238',
      contrastText: '#ffffff',
    },
    formColor: {
      light: '#e4f1f9',
      main: '#2f64a1',
      dark: '#224881',
      contrastText: '#ffffff',
    },
  },

  typography: {
    fontFamily: ["Poppins Regular","Helvetica", "Arial", "sans-serif"].join(","),
  }
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Component {...pageProps} />
      </LocalizationProvider>  
    </ThemeProvider>
  )
}

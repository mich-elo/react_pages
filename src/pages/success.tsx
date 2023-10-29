import { useState } from 'react'
import Head from 'next/head';
import NavigationBar from '@/components/navigation/NavigationBar';
import PaymentSuccess from '@/components/payment/PaymentSuccess';
import Footer from '@/components/sections/Footer';
import { Box } from '@mui/material'

export default function Test() {

    return (
    <>
        <Head>
            <title>React Pages | Success</title>
            <meta name="description" content="Generated by create next app" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <NavigationBar/>

        <Box
        sx={{
            height:1,
            minHeight:'calc(100vh - 200px)',
            marginBottom:10
        }}>
            <PaymentSuccess/>
        </Box>
        
        <Footer/>
   

    </>
  )
}

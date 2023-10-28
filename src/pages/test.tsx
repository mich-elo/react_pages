import { useState } from 'react'
import Head from 'next/head';
import NavigationBar from '@/components/navigation/NavigationBar';
import PaymentSuccess from '@/components/payment/PaymentSuccess';

export default function Test() {

    return (
    <>
        <Head>
            <title>React Pages | Test</title>
            <meta name="description" content="Generated by create next app" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <NavigationBar/>
        <PaymentSuccess/>
   
 
    </>
  )
}

import { useState } from 'react'
import { 
    Container,
    Box,
    IconButton,
    ButtonBase
} from "@mui/material";

import PaymentMethods from "./PaymentMethods";

// payment forms
import AirtelPaymentForm from './AirtelPaymentForm';
import MtnPaymentForm from './MtnPaymentForm';
import ZamtelPaymentForm from './ZamtelPaymentForm';
import CardPaymentForm from './CardPaymentForm';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
export default function PaymentForm(){
    const [ tabValue, setTabValue ] = useState(0)
    return(
        <Container
            sx={{
                pt:5,
                marginBottom:15,
                height:1,
                minHeight:'90vh'
            }}
        >

            
            <Box
            sx={{
                width:1,
                maxWidth:700,
            }}>

                {
                    (tabValue !== 0)?
                    <Box
                    sx={{
                        marginBottom:5
                    }}>
                        <IconButton
                        onClick={()=> setTabValue(0)}>
                            <ArrowBackIcon
                                fontSize='medium'
                            />
                        </IconButton>
                    </Box>
                    :<></>
                }


                {
                    (tabValue === 0)?
                    <PaymentMethods
                        setTabValue={setTabValue}
                    />
                    :<></>
                }

                {
                    (tabValue === 1)?
                    <AirtelPaymentForm/>
                    :<></>
                }

                {
                    (tabValue === 2)?
                    <MtnPaymentForm/>
                    :<></>
                }

                {
                    (tabValue === 3)?
                    <ZamtelPaymentForm/>
                    :<></>
                }

                {
                    (tabValue === 4)?
                    <CardPaymentForm/>
                    :<></>
                }


                


            </Box>
            

        </Container>
    )
}


const paymentMethods = [
    {
      value: 'USD',
      label: '$',
    },
    {
      value: 'EUR',
      label: '€',
    },
    {
      value: 'BTC',
      label: '฿',
    },
    {
      value: 'JPY',
      label: '¥',
    },
  ];
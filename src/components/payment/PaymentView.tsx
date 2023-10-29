import { useState, useEffect } from 'react'
import { 
    Container,
    Box,
    IconButton,
    Stack,
    Typography
} from "@mui/material";

import { Link as MUILink } from '@mui/material';

// 
import PaymentMethods from "./PaymentMethods";

// payment forms
import AirtelPaymentForm from './AirtelPaymentForm';
import MtnPaymentForm from './MtnPaymentForm';
import ZamtelPaymentForm from './ZamtelPaymentForm';
import CardPaymentForm from './CardPaymentForm';
import Details from './Details';

import { useRouter } from 'next/router';
import { BackArrowButtom } from '../buttons/ActionButtons';

export default function PaymentView(){
    const router = useRouter();

    const [ tabValue, setTabValue ] = useState(0)
    const [ show, setShow] = useState(false)

    useEffect(()=>{
        if(router.isReady){
            switch (router.query.pid) {
                case "34753234234":
                    setShow(true)
                    break;
                    
                default:
                    setShow(false);
            }

        }

    },[router])

    return(
        <Container
            sx={{
                pt:5,
            }}
        >

            <Stack
                direction={"row"}
                spacing={5}
                sx={{
                    display:{
                        md:"flex",
                        xs:"none"
                    }
                }}
            >

                <Box
                sx={{
                    width:1,
                }}>

                    {
                        (tabValue !== 0)?
                        <BackArrowButtom
                            text="back" 
                            handleOnclick={()=> setTabValue(0)} 
                        />
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

                <Box
                sx={{
                    width:1,
                    maxWidth:{
                        lg:400,
                        md:350,
                        xs:1
                    },
                    
                }}>
                    <Details/>
                </Box>

            </Stack>
            
            
            {/* For mobile view */}

            <Box
                sx={{
                    width:1,
                    display:{
                        md:'none',
                        xs:'block'
                    }
                }}
            >

                {
                    (show)?
                    <Box
                    sx={{
                        width:1,
                    }}>

                        {
                            (tabValue !== 0)?
                            <BackArrowButtom
                                text="back" 
                                handleOnclick={()=> setTabValue(0)} 
                            />
                            :<></>
                        }


                        {
                            (tabValue === 0)?
                            <>
                                <BackArrowButtom
                                    text="Order Summary" 
                                    handleOnclick={()=> router.back()} 
                                />
                                
                                <PaymentMethods
                                    setTabValue={setTabValue}
                                />
                            </>
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
                    :
                    <Details/>
                }


            </Box>
            
            

        </Container>
    )
}



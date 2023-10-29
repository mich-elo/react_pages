import {useState, useRef} from "react";
import { 
    Container,
    Stack,
    CardMedia,
    Typography,
    Button,
    Box
} from "@mui/material";

import { useRouter } from "next/router";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import Receipt from "../general/Reciept";
import { green } from '@mui/material/colors';

export default function PaymentSuccess(){
    const router = useRouter()
    

    return(
        <Container sx={{ pt:3 }}>

            <Stack
                alignItems={"center"}
                marginBottom={5}
            >
                <div>
                    <CheckCircleOutlineIcon
                        sx={{
                            fontSize:40,
                            color:green[500]
                        }}
                    />
                </div>
                
                <div>
                    <Typography
                        component={"p"}
                        variant="subtitle1"
                        textAlign={"center"}
                    >
                        Payment Successful
                    </Typography>

                    <Typography
                        component={"p"}
                        variant="subtitle1"
                        textAlign={"center"}
                    >
                        Keep a copy of the receipt for your records.
                    </Typography>
                </div>
            </Stack>
            
            <Receipt/>
            
        </Container>
    )
}
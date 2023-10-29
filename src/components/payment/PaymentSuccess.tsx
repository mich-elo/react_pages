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
import Receipt from "../receipt/Reciept";
import { green } from '@mui/material/colors';

export default function PaymentSuccess(){
    const router = useRouter()
    

    return(
        <Container sx={{ pt:3 }}>
            <Receipt/>
        </Container>
    )
}
import { useState } from 'react'
import { 
    TextField,
    Typography,
    Stack,
    Box
} from "@mui/material";

import CreditCardIcon from '@mui/icons-material/CreditCard';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';

export default function CardPaymentForm(){
    const [cardNumber, setCardNumber] = useState('');
    const [valid, setValid] = useState(true);

    const handleCardNumberChange = (e:any) => {
        const input = e.target.value;
        setCardNumber(formatCardNumber(input));
    };

    const formatCardNumber = (input:any) => {
        if(input){
            // Remove any non-digit characters from the input
            const digitsOnly = input.replace(/\D/g, '');
        
            // Add dashes to the formatted card number
            const formattedNumber = digitsOnly
            .match(/.{1,4}/g)
            .join('-')
            .slice(0, 19);
        
            return formattedNumber;
        }
    };

    return(
        <>
            <Typography
                component={"h1"}
                variant="subtitle1"
                fontFamily={"Poppins Medium"}
                marginBottom={2}
            >
                Card Payment
            </Typography>

            <Box
                component={Stack}
                spacing={3}
            >
                <TextField 
                    fullWidth
                    id="outlined-basic" 
                    label="Name" 
                    variant="outlined" 
                />

                <TextField 
                    fullWidth
                    label="Card Number" 
                    variant="outlined" 
                    inputProps={{ 
                        maxLength: 19,
                        type: 'text',
                        placeholder: 'XXXX-XXXX-XXXX-XXXX',
                        pattern: '\\d{4}-\\d{4}-\\d{4}-\\d{4}', 
                        value: cardNumber,
                        onChange: handleCardNumberChange,
                    }}
                    InputProps={{
                        startAdornment: (
                            <CreditCardIcon sx={{ marginRight:1.5}}/>
                        )
                    }}
                />

                <TextField
                    label="Expiry Date"
                    InputProps={{
                        startAdornment: (
                            <EventAvailableIcon sx={{ marginRight:1.5}}/>
                        ),
                    }}
                    variant="outlined"
                    placeholder="MM/YY"
                />
            </Box>
        </>
    )
}



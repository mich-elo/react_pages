import { useState } from 'react'
import { 
    TextField,
    Typography,
    Stack,
    Box
} from "@mui/material";

import CreditCardIcon from '@mui/icons-material/CreditCard';

export default function CardPaymentForm(){
    const [cardNumber, setCardNumber] = useState('');
    const [valid, setValid] = useState(true);

    const handleCardNumberChange = (e:any) => {
        const input = e.target.value;
        setCardNumber(input);

        // Check if the input matches the desired pattern
        const pattern = /^(\d{4}-){3}\d{4}$/;
        setValid(pattern.test(input));
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
                        maxLength: 16,
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
            </Box>
        </>
    )
}



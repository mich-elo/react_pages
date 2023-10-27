import { 
    Container,
    Grid,
    Typography,
    TextField,
    Box,
    MenuItem 
} from "@mui/material";

import PaymentMethods from "./PaymentMethods";

export default function PaymentForm(){
    return(
        <Container
            sx={{
                pt:5
            }}
        >

            
            <Box
            sx={{
                width:1,
                maxWidth:700,
            }}>

                <PaymentMethods/>


                <Typography
                    component={"h1"}
                    variant="subtitle1"
                    fontFamily={"Poppins Medium"}
                    marginBottom={2}
                >
                    Payment Information
                </Typography>

                <Grid
                    container
                    spacing={1}
                >
                    {/* <Grid
                        item
                        sm={6}
                        xs={12}
                    >
                        <TextField 
                            fullWidth
                            select
                            id="payment-methods" 
                            label="Payment Method" 
                            variant="outlined" 
                        >
                            {paymentMethods.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                {option.label}
                                </MenuItem>
                            ))}    
                        </TextField>
                        
                    </Grid> */}

                    <Grid
                        item
                        sm={6}
                        xs={12}
                    >

                        <TextField 
                            fullWidth
                            id="outlined-basic" 
                            label="Phone Number" 
                            variant="outlined" 
                        />
                        
                    </Grid>

                </Grid>
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
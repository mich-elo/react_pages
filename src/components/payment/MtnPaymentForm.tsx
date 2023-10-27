import { 
    TextField,
    Typography,
} from "@mui/material";


export default function MtnPaymentForm(){
    return(
        <>
            <Typography
                component={"h1"}
                variant="subtitle1"
                fontFamily={"Poppins Medium"}
                marginBottom={2}
            >
                    MTM Payment
            </Typography>
            <TextField 
                fullWidth
                id="outlined-basic" 
                label="Phone Number" 
                variant="outlined" 
            />
        </>
    )
}
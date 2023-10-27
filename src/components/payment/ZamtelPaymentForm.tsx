import { 
    TextField,
    Typography,
} from "@mui/material";


export default function ZamtelPaymentForm(){
    return(
        <>
            <Typography
                component={"h1"}
                variant="subtitle1"
                fontFamily={"Poppins Medium"}
                marginBottom={2}
            >
                ZAMTEL Payment
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
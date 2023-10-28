import { 
    TextField,
    Typography,
    Stack,
    Box,
    Button
} from "@mui/material";
import HeadingText from "../general/HeadText";

export default function MtnPaymentForm(){
    return(
        <>
            
            <HeadingText text={"MTN Payment"} />
            
            <Box
                component={Stack}
                spacing={3}
            >
                <TextField 
                    fullWidth
                    id="outlined-basic" 
                    label="Phone Number" 
                    variant="outlined" 
                />

                <Box sx={{ display:'flex' }}>
                    <Box sx={{ flexGrow:1 }}/>
                    <div>
                        <Button
                            variant='contained'
                        > 
                            Make Payment 
                        </Button>
                    </div>
                </Box>
            </Box>
            
        </>
    )
}
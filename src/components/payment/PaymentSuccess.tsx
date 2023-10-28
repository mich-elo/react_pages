import React from "react";
import { 
    Container,
    Stack,
    CardMedia,
    Typography,
    Button
} from "@mui/material";

import { useRouter } from "next/router";

export default function PaymentSuccess(){
    const router = useRouter()
    return(
        <Container >

            <Stack
                rowGap={5}
                alignItems={"center"}
                justifyContent={"center"}
                sx={{
                    height:420
                }}
            >
                <div>
                    <CardMedia
                        component={"img"}
                        image="/assets/success-player-multimedia-svgrepo-com.svg"
                        title="success icon"
                        sx={{
                            height:50,
                            objectFit:"contain",
                        }}
                    />
                </div>
                
                <div>
                    <Typography
                        component={"p"}
                        fontFamily={"Poppins Medium"}
                        variant="h6"
                        textAlign={"center"}
                        // gutterBottom
                    >
                        Payment Successful
                    </Typography>

                    <Typography
                        component={"p"}
                        variant="subtitle1"
                        textAlign={"center"}
                    >
                        Your payment has been processed successfully.
                    </Typography>
                </div>

                <div>

                    <Button
                        type="button"
                        variant="contained"
                        fullWidth
                        onClick={()=>router.push("/")}
                    >
                        continue
                    </Button>
                    
                </div>



            </Stack>
        </Container>
    )
}
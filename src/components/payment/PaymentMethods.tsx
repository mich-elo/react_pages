import { 
    Box,
    Stack,
    CardMedia,
    Typography,
    List,
    ListItem,
    ListItemButton,
    Divider
} from "@mui/material";

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default function PaymentMethods(){
    return(
        <Box
            marginBottom={3}
        >
            <Typography
                component={"h1"}
                variant="subtitle1"
                fontFamily={"Poppins Medium"}
                marginBottom={2}
            >
                Payment Method
            </Typography>


            <Stack
                direction={"column"}
                // spacing={1}
            >
                <PaymentTypeCard
                    imgsrc="/assets/airtel-logo.png"
                    name="Airtel Money"
                    alt="Airtel money logo"
                />

                <PaymentTypeCard
                    imgsrc="/assets/mtn-money-logo.jpg"
                    name="MTN Money"
                    alt="MTM money logo"
                />

                <PaymentTypeCard
                    imgsrc="/assets/zamtel-zambia-logo.png"
                    name="Zamtel Money"
                    alt="ZAMTEL money logo"
                />

                <PaymentTypeCard
                    imgsrc="/assets/visa-and-master-card-logo.jpeg"
                    name="Debit & Credit Cards"
                    alt="visa card logo"
                />

            </Stack>
            
            
        

        </Box>
    )
}


function PaymentTypeCard(props:any){
    const { imgsrc, name, alt } = props
    return(
        <Stack
            flexDirection={"row"}
            alignItems={"center"}
            columnGap={3}
            sx={{
                pl:1,
                pr:1,
                height:90,
                borderRadius:0.5,
                borderBottom:'1px solid #ebebeb',
                backgroundColor:"#ffffff",
                "&:hover": {
                    cursor:'pointer',
                    backgroundColor:"#fafafa",
                }
            }}
        >

            <Box
            sx={{
                width:100
            }}>
                <CardMedia
                    component="img"
                    height={25}
                    image={imgsrc}
                    alt={alt}
                    sx={{
                        objectFit:'contain',
                    }}
                />
            </Box>

            <Box
            sx={{
                flexGrow:1
            }}>
                <Typography
                    component={"p"}
                    variant="subtitle1"
                >
                    { name }
                </Typography>
                <Typography
                    component={"p"}
                    variant="subtitle1"
                    fontSize={12}
                >
                    Make instant payments
                </Typography>
            </Box>

            <div>
                <ArrowForwardIosIcon sx={{ fontSize: 15 }} />
            </div>
            
        </Stack>
    )
}
import { 
    Box,
    Stack,
    CardMedia,
    Typography,
    Button,
    ButtonBase 
} from "@mui/material";

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default function PaymentMethods(props:any){
    const { setTabValue } = props;
    return(
        <Box
            sx={{
                borderRadius:2,
                overflow:'hodden',
            }}
        >
            <Typography
                component={"h1"}
                variant="h6"
                fontFamily={"Poppins Medium"}
                marginBottom={2}
                sx={{
                    textTransform:'uppercase'
                }}
            >
                Payment Methods
            </Typography>


            <Stack
                direction={"column"}
                // spacing={1}
            >
                <PaymentTypeCard
                    imgsrc="/assets/airtel-logo.png"
                    name="Airtel Money"
                    alt="Airtel money logo"
                    action={ ()=>setTabValue(1)}
                    border={true}
                />

                <PaymentTypeCard
                    imgsrc="/assets/mtn-money-logo.jpg"
                    name="MTN Money"
                    alt="MTM money logo"
                    action={ ()=>setTabValue(2)}
                    border={true}
                />

                <PaymentTypeCard
                    imgsrc="/assets/zamtel-zambia-logo.png"
                    name="Zamtel Money"
                    alt="ZAMTEL money logo"
                    action={ ()=>setTabValue(3)}
                    border={true}
                />

                <PaymentTypeCard
                    imgsrc="/assets/visa-and-master-card-logo.jpeg"
                    name="Debit & Credit Cards"
                    alt="visa card logo"
                    action={ ()=>setTabValue(4)}
                />

            </Stack>
        </Box>

    )
}


function PaymentTypeCard(props:any){
    const { imgsrc, name, alt, action, border } = props
    return(
        <ButtonBase 
            onClick={()=>{ action() }}
            component={Stack}
            flexDirection={"row"}
            alignItems={"center"}
            columnGap={3}
            sx={{
                className: 'my-box-with-ripple',
                pl:1,
                pr:1,
                height:100,
                borderRadius:0.5,
                borderBottom:(border)?'1px solid #ebebeb':'',
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
            
        </ButtonBase >
    )
}
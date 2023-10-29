import { 
    Box,
    Stack,
    CardMedia,
    Typography,
    Button,
    ButtonBase 
} from "@mui/material";

import PaymentTypeCard from "../cards/PaymentTypeCard";
import CardSelection from "../cards/CardSelection";

export default function PaymentMethods(props:any){
    const { setTabValue } = props;
    return(
        <Box
            sx={{
                borderRadius:2,
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
            >
                <PaymentTypeCard
                    mediaComonent={
                        <Box sx={{ width:70 }}>
                            <CardMedia
                                component="img"
                                height={25}
                                image={"/assets/airtel-logo.png"}
                                alt={"airtel money logo"}
                                sx={{
                                    objectFit:'contain',
                                }}
                            />
                        </Box>
                    }
                    name="Airtel Money"
                    alt="Airtel money logo"
                    action={ ()=>setTabValue(1)}
                    border={true}
                />

                <PaymentTypeCard
                    mediaComonent={
                        <Box sx={{ width:1 }}>
                            <CardMedia
                                component="img"
                                height={65}
                                image={"/assets/mtn-money-logo.jpg"}
                                alt="MTM money logo"
                                sx={{
                                    objectFit:'contain',
                                }}
                            />
                        </Box>
                    }
                    name="MTN Money"
                    action={ ()=>setTabValue(2)}
                    border={true}
                />

                <PaymentTypeCard
                    mediaComonent={
                        <Box sx={{ width:1 }}>
                            <CardMedia
                                component="img"
                                height={50}
                                image={"/assets/zamtel-zambia-logo.png"}
                                alt="ZAMTEL money logo"
                                sx={{
                                    objectFit:'contain',
                                }}
                            />
                        </Box>
                    }
                    name="Zamtel Money"
                    action={ ()=>setTabValue(3)}
                    border={true}
                />

                <PaymentTypeCard
                    mediaComonent={
                        <Box sx={{ width:1 }}>
                            <CardSelection/>
                        </Box>
                    }
                    name="Debit & Credit Cards"
                    action={ ()=>setTabValue(4)}
                />

            </Stack>
        </Box>

    )
}



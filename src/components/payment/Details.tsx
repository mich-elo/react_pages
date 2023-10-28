import { Description } from "@mui/icons-material";
import { 
    Container,
    Box,
    IconButton,
    Stack,
    Typography
} from "@mui/material";
import { ContinueButton } from "../buttons/ActionButtons";
import { useRouter } from "next/router";

export default function Details(){
    const router = useRouter();

    return(
        <Box
        sx={{
            width:1,
            maxWidth:{
                lg:400,
                md:350,
                xs:1
            },
            
        }}>
            <Box
            sx={{
                backgroundColor:"#fcfcfc",
                borderRadius:2,
                pl:2,
                pr:2,
                pt:2,
                pb:3,
                height:1,
                minHeight:400
            }}>

                <Typography
                    component={"h3"}
                    variant="subtitle1"
                    fontFamily={"Poppins Regular"}
                    gutterBottom
                    textAlign={"center"}
                >
                    Checkout Summary
                </Typography>

                <Box
                    sx={{
                        flexGrow:1,
                        marginBottom:5,
                    }}
                >
                    {
                        DETAILS_DATA.map((d:any, i:any)=>{
                            return(
                                <DetailsData
                                    key={i}
                                    description={d.description}
                                    value={d.value}
                                />
                            )
                        })
                    }
                </Box>


                <ContinueButton 
                    handleOnclick={ ()=>{
                        router.push({
                            pathname: '/',
                            query: { pid: "34753234234" },
                        })
                    }}
                    text="Continue" 
                />
            </Box>
        </Box>
    )
}

function DetailsData(props:any){
    const { description, value } = props;
    return(
        <Stack
            direction={"row"}
            alignItems={"center"}
            sx={{
                height:60,
                borderBottom:'1px solid #ebebeb',
            }}
        >
            <Box
                sx={{
                    flexGrow:1
                }}
            >
                <Typography
                    component={"p"}
                    variant="subtitle1"
                    fontFamily={"Poppins Medium"}
                    fontSize={14}
                >
                    { description }
                </Typography>
            </Box>
            <div>
                <Typography
                    component={"p"}
                    variant="subtitle1"
                    fontSize={14}
                >
                    { value }
                </Typography>
            </div>
        </Stack>
    )
}

const DETAILS_DATA = [
    {
        description:"Code",
        value:"TF589"
    },
    {
        description:"Name",
        value:"Test Ticket"
    },
    {
        description:"Description",
        value:"Test Ticket Purchase"
    },
    {
        description:"Reference",
        value:"653d0a0068ca7"
    }
]
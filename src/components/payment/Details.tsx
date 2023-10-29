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
            position:{
                md:'sticky',
                xs:"static"
            },
            top:40,
            width:1,
            maxWidth:{
                lg:400,
                md:350,
                xs:1
            },
            
        }}>
            <Box
            sx={{
                backgroundColor:"#f7f7f7",
                borderRadius:2,
                pl:2,
                pr:2,
                pt:2,
                pb:3,
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
                        height:1,
                        maxHeight:400,
                        overflowY:'auto'
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
            direction={"column"}
            justifyContent={"center"}
            sx={{
                height:80,
                borderBottom:'1px solid #ebebeb',
            }}
        >
            <Box
            >
                <Typography
                    component={"p"}
                    variant="subtitle1"
                    fontFamily={"Poppins Medium"}
                    fontSize={15}
                    width={150}
                >
                    { description }
                </Typography>
            </Box>
            <div>
                <Typography
                    component={"p"}
                    variant="subtitle1"
                    fontSize={12}
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
    },
    {
        description:"Names",
        value:"Wankunda Simuchimba"
    },
    {
        description:"Email",
        value:"wankundasimuchimba@yahoo.com"
    },
    {
        description:"Phone ",
        value:"260978130250"
    },
    {
        description:"Address ",
        value:"11A Mwaleshi Road, Olympia Park, Lusaka, Zambia"
    },
    {
        description:"Price ",
        value:"ZMW 1"
    },
    {
        description:"Charges ",
        value:"ZMW 0.02"
    },
    {
        description:"Order Total ",
        value:"ZMW 1.02"
    },
    
]
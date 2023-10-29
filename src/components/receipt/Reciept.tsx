import { useRef } from 'react';
import { Description } from "@mui/icons-material";
import { 
    Box,
    Button,
    Stack,
    Typography,
    CardMedia
} from "@mui/material";
import { ContinueButton } from "../buttons/ActionButtons";
import { useRouter } from "next/router";

// 
import { green, blueGrey, blue } from '@mui/material/colors';

// 
import ReceiptDataView from './ReceiptDataView';
import ReceiptQrCode from './ReceiptQrCode';
import MakePdf from './MakePdf';
import DETAILS_DATA from './data.json'

// 
import Image from 'next/image';


export default function Receipt(){
   
    return(
        <MakePdf>
        
            <ReceiptHeading/>

            <ReceiptStatus/>
            
            <Box sx={{ width:1, }}>
                <CustomTextComponent 
                    text={"Wankunda Simuchimba"}
                />
                
                <CustomTextComponent 
                    text={"260978130250"}
                />
                <CustomTextComponent 
                    text={"wankundasimuchimba@yahoo.com"}
                />

            </Box>
         

            <Box
            sx={{
                marginBottom:3, 
                width:1,
            }}>
                {
                    DETAILS_DATA.map((d:any, i:any)=>{
                        return(
                            <ReceiptDataView
                                key={i}
                                description={d.description}
                                value={d.value}
                            />
                        )
                    })
                }
            </Box>

            <ReceiptQrCode/>

            <div>
                <ReceiptLogo/>
            </div>

            
        </MakePdf>

    )
}

function CustomTextComponent(props:any){
    const { text } = props;
    return(
        <Box
        sx={{
            width:1,
            height:1,
            minHeight:35,
            display:'flex',
            flexDirection:"column",
            justifyContent:'center',
        }}>
            <Typography
                component={"p"}
                variant='subtitle1'
                sx={{
                    width:1,
                    fontFamily:"Poppins Medium",
                    overflowWrap:"anywhere",
                    fontSize:{
                        // sm:14,
                        xs:15
                    }
                }}
            > 
                { text } 
            </Typography>
        </Box>
    )
}


function ReceiptHeading(){
    return(
        <Box
        sx={{
            width:1,
            height:50,
            backgroundColor:blueGrey[500],
            display:'flex',
            alignItems:'center',
            textAlign:'center',
            marginBottom:2
        }}>
            <Typography
                sx={{
                    width:1,
                    fontFamily:"Poppins Medium",
                    color:'white'
                }}
            > 
                RECEIPT 
            </Typography>
        </Box>
    )
}

function ReceiptStatus(){
    return(
        <Typography
            component={"h3"}
            variant="subtitle1"
            fontFamily={"Poppins Bold"}
            textAlign={"center"}
            gutterBottom
            sx={{
                textTransform:"uppercase",
                color:green[500],
                borderRadius:3,
                border:`1px solid ${green[500]}`,
                pl:1,
                pr:1
            }}
        >
            STATUS: SUCCESS
        </Typography>
    )
}

function ReceiptLogo(){
    return(

        <CardMedia
            component="img"
            image={"/assets/wirepick_logo.png"}
            alt="visa money logo"
            sx={{
                height:{
                    md:60,
                    xs:50,
                    marginTop:30
                },
                objectFit:'contain',
            }}
        />
      
    )
}







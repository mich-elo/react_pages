import { useRef } from 'react';
import { Description } from "@mui/icons-material";
import { 
    Box,
    Button,
    Stack,
    Typography
} from "@mui/material";
import { ContinueButton } from "../buttons/ActionButtons";
import { useRouter } from "next/router";
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import {QRCodeSVG} from 'qrcode.react';
import DownloadIcon from '@mui/icons-material/Download';
import { green } from '@mui/material/colors';


export default function Receipt(){
    const router = useRouter();
   
    return(
        <MakePdf>
            <Typography
                component={"h3"}
                variant="h6"
                fontFamily={"Poppins Medium"}
                textAlign={"center"}
                sx={{
                    textTransform:"uppercase"
                }}
            >
                Receipt
            </Typography>

            <Typography
                component={"h3"}
                variant="subtitle1"
                fontFamily={"Poppins Bold"}
                textAlign={"center"}
                gutterBottom
                sx={{
                    textTransform:"uppercase",
                    color:green[500]
                }}
            >
                STATUS: SUCCESS
            </Typography>

            <Box
                sx={{
                    marginTop:1,
                    marginBottom:1, 
                    width:1,
                }}
            >

                <Stack
                    direction={"column"}
                    justifyContent={"center"}
                    rowGap={1}
                    sx={{
                        marginBottom:1
                    }}
                >
                    
                    <Typography
                        component={"p"}
                        variant="subtitle1"
                        fontSize={15}
                        // fontFamily={"Poppins Medium"}
                    >
                        Wankunda Simuchimba
                    </Typography>
                    <Typography
                        component={"p"}
                        variant="subtitle1"
                        fontSize={15}
                        // fontFamily={"Poppins Medium"}
                    >
                        260978130250
                    </Typography>
                    <Typography
                        component={"p"}
                        variant="subtitle1"
                        fontSize={15}
                        // fontFamily={"Poppins Medium"}
                    >
                        wankundasimuchimba@yahoo.com
                    </Typography>
            
                </Stack>

            </Box>
         

            <Box
            sx={{
                marginBottom:2, 
                width:1,
            }}>
                {
                    DETAILS_DATA.map((d:any, i:any)=>{
                        return(
                            <ReceiptData
                                key={i}
                                description={d.description}
                                value={d.value}
                            />
                        )
                    })
                }
            </Box>

            <MakeQrCde/>

            
        </MakePdf>

    )
}

function ReceiptData(props:any){
    const { description, value } = props;
    return(
        <Stack
            direction={"row"}
            alignItems={"center"}
            sx={{
                height:50,
                borderBottom:'1px solid #ebebeb',
            }}
        >
            <Typography
                component={"p"}
                variant="subtitle1"
                fontFamily={"Poppins Medium"}
                fontSize={15}
                sx={{
                    width:150,
                    flexGrow:1
                }}
            >
                { description }
            </Typography>

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


function MakeQrCde(props:any){
    const { value } = props;
    return(
        <div>
            <QRCodeSVG value="https://reactjs.org/" />,
        </div>
    )
}


function MakePdf(props:any){
    const { children } = props;
    const printRef = useRef<HTMLDivElement|null>(null);

    const handleDownload = async () => {
        
        const element = printRef.current!
        const canvas = await html2canvas(element,{
            scale: 1, 
        });
        const data = canvas.toDataURL('image/png');

        const pdf = new jsPDF('p','mm',[297, 210]); 
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

        pdf.addImage(data, 'PNG', 0, 0, pdfWidth, pdfHeight);
        pdf.save('receipt.pdf');
    };

    return(
        <>
            <Box
                sx={{
                    width:1,
                    display:'flex',
                    flexDirection:'column',
                    alignItems:'center',
                    // marginBottom:3,
                }}
            >
                <Box
                    ref={printRef} 
                    sx={{ 
                        width:1, 
                        maxWidth:500, 
                        borderRadius:2,
                    }}
                >
                    <Stack
                        alignItems={"center"}
                        justifyContent={"center"}
                        sx={{
                            width:1,
                            // backgroundColor:"#f7f7f7",
                            borderRadius:1,
                            pr:2,
                            pl:2,
                            pt:1,
                            pb:1.5
                        }}
                    >

                        {children}

                    </Stack>
                </Box>

                <Box
                sx={{
                    display:'flex',
                    justifyContent:'center',
                    width:1, 
                    maxWidth:500, 
                }}>
                    <Button
                        type="button"
                        variant="contained"
                        size="small"
                        fullWidth
                        endIcon={<DownloadIcon />}
                        onClick={handleDownload}
                    >
                        download receipt
                    </Button>    
                </Box>

            </Box>
            
        </>
    )
}
const DETAILS_DATA = [
    {
        description:"Product",
        value:"TF589"
    },
    {
        description:"Item Name",
        value:"Test Ticket"
    },
    {
        description:"Item Description",
        value:"Test Ticket Purchase"
    },
    {
        description:"Reference Code",
        value:"653d0a0068ca7"
    }
]
import { Stack, Alert, Box, IconButton, Typography } from "@mui/material";

import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { useRef } from "react";

// 
import { green, blueGrey, grey } from '@mui/material/colors';

// 
import { PdfDownloadButton } from "../buttons/ActionButtons";
import { FinishButton } from "../buttons/ActionButtons";

// 
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

// 
import { useRouter } from "next/router";


export default function MakePdf(props:any){
    const router = useRouter();

    const { children } = props;
    const printRef = useRef<HTMLDivElement|null>(null);
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('md'));
    
    const handleDownload = async () => {
        
        // Wait for the component to render and capture it as an image
        const canvas = await html2canvas(printRef.current!);

        // Calculate PDF dimensions based on the captured canvas
        const imgData = canvas.toDataURL('image/png');
        const imgProps = canvas;

        var pdfWidth;
        var pdfHeight;  

        if(matches){
            pdfWidth = imgProps.width * 0.25;
            pdfHeight = imgProps.height * 0.25;
        }
        else{
            pdfWidth = imgProps.width * 0.1;
            pdfHeight = imgProps.height * 0.1;
        }

        // Create PDF using jsPDF library
        const pdf = new jsPDF({
            orientation: 'p',
            unit: 'mm',
            format: [pdfWidth, pdfHeight],
        });

        // Add captured image to the PDF
        pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight, '', 'FAST');

        // Save the PDF
        pdf.save('component.pdf');
    };

    return(
        <>  
            <Box    
            sx={{ 
                width:1, 
                display:'flex',
                flexDirection:'column',
                alignItems:'center'
            }}>

                <Alert 
                    severity="info"
                    sx={{ width:1, maxWidth:700 }}
                >
                    Download a copy of your receipt for your records
                </Alert>
                
                <Box 
                ref={printRef} 
                sx={{ width:1, maxWidth:700, p:{ xs:1, sm:1, md:2 } }}>
                    <Stack
                        rowGap={3}
                        alignItems={"center"}
                        justifyContent={"center"}
                        sx={{
                            width:1,
                            borderRadius:1,
                            border:`1px solid ${blueGrey[500]}`,
                            pr:2,
                            pl:2,
                            pt:1,
                            pb:1.5
                        }}
                    >
                        {children}
                    </Stack>
                </Box>
            </Box>  

            <PdfDownloadButton
                onClickHandler={ ()=>{ handleDownload() } }
            />

            <FinishButton
                text="finish"
                handleOnclick={ ()=>{ router.push("/") } }
            />
        </>
    )
}


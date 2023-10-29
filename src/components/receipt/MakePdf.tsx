import { Stack, Button, Box, IconButton, Typography } from "@mui/material";

import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { useRef } from "react";

// 
import { green, blueGrey, grey } from '@mui/material/colors';

// 
import { PdfDownloadButton } from "../buttons/ActionButtons";

export default function MakePdf(props:any){
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
                }}
            >
                
                <PdfDownloadButton
                    onClickHandler={handleDownload}
                />

                <Box
                    ref={printRef} 
                    sx={{ 
                        width:1, 
                        maxWidth:700, 
                        borderRadius:2,
                    }}
                >
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
            
        </>
    )
}


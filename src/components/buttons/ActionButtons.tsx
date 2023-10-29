import { 
    Button, 
    CircularProgress, 
    Typography,
    Box,
    Stack,
    IconButton
} from "@mui/material";

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import DownloadIcon from '@mui/icons-material/Download';

// 
import { green, blueGrey, grey } from '@mui/material/colors';

export function ContinueButton(props:any){
    const { text, handleOnclick } = props;
    return(
        <Button
            type="submit"
            variant='contained'
            size="small"
            sx={{
                width:1,
                height:40,
                display:{
                    md:"none",
                    xs:"block"
                }
            }}
            onClick={ ()=> { handleOnclick() }}
        > 
            { text }
        </Button>
    )
}

export function BackArrowButtom(props:any){

    const { text, handleOnclick } = props;
    return(
        <Box
            component={Stack}
            direction={"row"}
            alignItems={"center"}
            columnGap={1}
            marginBottom={5}
        >
            <div>
                <IconButton 
                    onClick={()=> handleOnclick()}    
                    sx={{
                        backgroundColor:'#f2f2f2'
                    }}
                >
                    <ArrowBackIcon />
                </IconButton>
            </div>

            <div>
                <Typography
                    fontSize={14}
                >
                    { text }
                </Typography>
            </div>
        </Box>
    )
}


export function PdfDownloadButton(props:any){
    const { onClickHandler } = props;
    return(
        <Box
        sx={{
            width:1, 
            maxWidth:700, 
            display:'flex',
            flexDirection:'column',
            alignItems:'center',
            pt:5,
            pb:5
        }}>
            <div>
                <IconButton
                    type="button"
                    onClick={onClickHandler}
                    sx={{
                        backgroundColor:`${grey[500]}`,
                        marginBottom:1
                    }}
                >
                    <DownloadIcon sx={{ fontSize:30 }}/>
                </IconButton>     
            </div>   
            <div>
                <Typography
                    component={"p"}
                    variant="subtitle1"
                    fontFamily={"Poppins Medium"}
                >
                    Download Receipt
                </Typography>    
            </div> 
        </Box>
    )
}
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


declare module '@mui/material/Button' {
    interface ButtonPropsColorOverrides {
      custom: true;
      formColor: true;
    }
}

export function ContinueButton(props:any){
    const { text, handleOnclick } = props;
    return(
        <Button
            type="submit"
            variant='contained'
            color="formColor"
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
            display:'flex',
            flexDirection:'column',
            alignItems:'center',
            pb:2,
            pt:2
        }}>
             
            <div>
                <Button 
                    color="formColor" 
                    variant="outlined" 
                    endIcon={<DownloadIcon />}
                    onClick={onClickHandler}
                >
                    download receipt
                </Button>  
            </div> 
        </Box>
    )
}




export function FinishButton(props:any){
    const { text, handleOnclick } = props;
    return(
        <Box
        sx={{
            width:1, 
            display:'flex',
            flexDirection:'column',
            alignItems:'center',
        }}>
            <div>
                <Button
                    color="formColor"
                    type="submit"
                    variant='contained'
                    size="small"
                    sx={{
                        borderRadius:10,
                        width:150,
                        height:35,
                        fontFamily:"Poppins Medium"
                    }}
                    onClick={ ()=> { handleOnclick() }}
                > 
                    { text }
                </Button>
            </div>

        </Box>
        
    )
}

export function LoadingButton(props:any){
    const { isLoading, text } = props;
    return(
        <Button
            color="formColor"
            type="submit"
            variant='contained'
            size="small"
            sx={{
                width:150,
                height:40
            }}
        > 
            {
                (isLoading)?
                <Box sx={{ display: 'flex' }}>
                    <CircularProgress 
                        size={20}
                        sx={{
                            color:"white"
                        }}
                    />
                </Box>
                :<Typography>{ text }</Typography>
            }
            
        </Button>
    )
}

export function PayButton(props:any){
    const { isLoading } = props;
    return(
        <Button
            color="formColor"
            type="submit"
            variant='contained'
            size="small"
            sx={{
                width:150,
                height:40
            }}
        > 
            {
                (isLoading)?
                <Box sx={{ display: 'flex' }}>
                    <CircularProgress 
                        size={20}
                        sx={{
                            color:"white"
                        }}
                    />
                </Box>
                :<Typography>Pay</Typography>
            }
            
        </Button>
    )
}
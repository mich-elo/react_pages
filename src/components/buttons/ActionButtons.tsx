import { 
    Button, 
    CircularProgress, 
    Typography,
    Box,
    Stack,
    IconButton
} from "@mui/material";

import ArrowBackIcon from '@mui/icons-material/ArrowBack';

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
import { 
    Button, 
    CircularProgress, 
    Typography,
    Box 
} from "@mui/material";


export function LoadingButton(props:any){
    const { isLoading, text } = props;
    return(
        <Button
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
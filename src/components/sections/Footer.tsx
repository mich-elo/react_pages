import { 
    Box,
    Typography
} from "@mui/material"

export default function Footer(){
    return(
        <Box
        sx={{
            width:1,
            height:150,
            display:'flex',
            alignItems:'center',
            backgroundColor:'#f2f2f2'
        }}>
            <Typography
                flexGrow={1}
                textAlign={"center"}
            >
                copyright@2023
            </Typography>
        </Box>
    )
}
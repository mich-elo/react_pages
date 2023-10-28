import { 
    Box,
    Typography
} from "@mui/material"

export default function Footer(){
    return(
        <Box
        sx={{
            width:1,
            height:"100px",
            display:'flex',
            alignItems:'center',
            backgroundColor:'#f7f7f7'
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
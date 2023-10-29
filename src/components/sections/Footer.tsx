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
            backgroundColor:'#2F65A1'
        }}>
            <Typography
                flexGrow={1}
                textAlign={"center"}
                sx={{
                    color:'white'
                }}
            >
                wirepick zambia @2023
            </Typography>
        </Box>
    )
}
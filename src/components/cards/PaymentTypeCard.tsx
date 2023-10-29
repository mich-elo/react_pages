import { ButtonBase, Stack, Typography, Box } from "@mui/material"
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default function PaymentTypeCard(props:any){
    const { imgsrc, name,  action, border, mediaComonent } = props
    
    return(
        <ButtonBase 
            onClick={()=>{ action() }}
            component={Stack}
            flexDirection={"row"}
            alignItems={"center"}
            columnGap={3}
            sx={{
                className: 'my-box-with-ripple',
                pl:1,
                pr:1,
                height:100,
                borderRadius:0.5,
                borderBottom:(border)?'1px solid #ebebeb':'',
                backgroundColor:"#ffffff",
                "&:hover": {
                    cursor:'pointer',
                    backgroundColor:"#fafafa",
                }
            }}
        >

            <Box
            sx={{
                width:100,
                display:'flex',
                justifyContent:'center'
            }}>
                { mediaComonent }
            </Box>

            <Box
            sx={{
                flexGrow:1,
            }}>
                <Typography
                    component={"p"}
                    variant="subtitle1"
                    fontFamily={"Poppins Medium"}
                    sx={{
                        width:1,
                        minWidth:{
                            sm:1,
                            xs:150
                        },
                        wordWrap:"break-word"
                    }}
                >
                    { name }
                </Typography>
                <Typography
                    component={"p"}
                    variant="subtitle1"
                    fontSize={12}
                >
                    Make instant payments
                </Typography>
            </Box>

            <div>
                <ArrowForwardIosIcon sx={{ fontSize: 15 }} />
            </div>
            
        </ButtonBase >
    )
}
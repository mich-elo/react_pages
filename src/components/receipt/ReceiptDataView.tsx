import { Stack, Typography } from "@mui/material";

export default function ReceiptDataView(props:any){
    const { description, value } = props;
    return(
        <Stack
            direction={{ xs:"column", sm:"row" }}
            justifyContent={{xs:"center", md:"normal"}}
            alignItems={{xs:"normal", md:"center"}}
            sx={{
                height:{
                    sm:60,
                    xs:100
                },
                borderBottom:'1px solid #ebebeb',
            }}
        >
            <Typography
                component={"p"}
                variant="subtitle1"
                fontFamily={"Poppins Bold"}
                fontSize={{ sm:15}}
                sx={{
                    width:150,
                    flexGrow:{
                        sm:1,
                        xs:0
                    }
                }}
            >
                { description }
            </Typography>

            <div>
                <Typography
                    component={"p"}
                    variant="subtitle1"
                    fontSize={{ sm:15}}
                    sx={{
                        // whiteSpace:"nowrap"
                        overflowWrap:"anywhere"
                    }}
                >
                    { value }
                </Typography>
            </div>
        </Stack>
    )
}

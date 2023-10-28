import { Typography } from "@mui/material";

export default function HeadingText(props:any){
    const { text } = props;
    return(
        <Typography
            component={"h1"}
            variant="subtitle1"
            fontFamily={"Poppins Medium"}
            sx={{
                textTransform:'uppercase',
                marginBottom:2
            }}
        >
            { text }
        </Typography>
    )
}
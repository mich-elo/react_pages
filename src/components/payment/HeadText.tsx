import { Typography } from "@mui/material";

export default function HeadingText(props:any){
    const { text } = props;
    return(
        <Typography
            component={"h1"}
            variant="h5"
            fontFamily={"Poppins Regular"}
            marginBottom={3}
        >
            { text }
        </Typography>
    )
}
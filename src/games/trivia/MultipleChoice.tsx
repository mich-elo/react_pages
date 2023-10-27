
import { 
    Stack,
    Box,
    Typography 
} from "@mui/material"

export default function MultipleChoice(props:any){
    const { data} = props
    return(
        <Stack
        direction={"column"}>
            <Typography 
            sx={{ 
                border:'1px solid red',
                color:'black' 
            }}>
                How old is Michelo Chandula ?
            </Typography>
            <Box>
                <Choices choiceLetter="A" choiceAnswer="21 Years"/>
                <Choices choiceLetter="B" choiceAnswer="27 Years"/>
                <Choices choiceLetter="C" choiceAnswer="81 Years"/>
                <Choices choiceLetter="D" choiceAnswer="72 Years"/>
            </Box>
        </Stack>
    )
}

function Choices(props:any){
    const {  choiceLetter, choiceAnswer  } = props;

    return(
        <Stack
        direction={"row"}
        spacing={1}>
            <Typography 
            sx={{ 
                border:'1px solid red',
                color:'black' 
            }}>
                { choiceLetter }
            </Typography>
            <Typography 
            sx={{ 
                border:'1px solid red',
                color:'black' 
            }}>
                { choiceAnswer }
            </Typography>
        </Stack>

    )
}
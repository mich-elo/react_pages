import { TextField, InputAdornment } from "@mui/material";

declare module '@mui/material/TextField' {
    interface TextFieldPropsColorOverrides {
      custom: true;
      formColor: true;
    }
}

export default function PhoneNumberInput(props:any){
    const { value, onChange, onBlur, error, helperText } = props;
    return(
        <TextField 
            color="formColor"
            fullWidth
            label="Phone Number" 
            name="phoneNumber"
            variant="outlined" 
            autoComplete="off"
            InputProps={{
                startAdornment: <InputAdornment position="start">+260</InputAdornment>,
            }}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            error={error}
            helperText={helperText}
            
        />
    )
}
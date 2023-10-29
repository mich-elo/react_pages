import { 
    TextField,
    Typography,
    Stack,
    Box,
    Button,
    InputAdornment,
    OutlinedInput,
    CircularProgress
} from "@mui/material";
import { useFormik } from 'formik';
import * as yup from 'yup';


// 
import HeadingText from "../general/HeadText";

// 
import { useRouter } from "next/router";

// 
import { stall } from "../utils/helpers";
import { PayButton } from "../buttons/ActionButtons";
import PhoneNumberInput from "../general/PhoneNumberInput";

export default function ZamtelPaymentForm(){
    const router = useRouter();

    const formik = useFormik({
        initialValues: {
            phoneNumber:""
        },
        validationSchema: validationSchema,

        onSubmit: async (values) => {
            await stall()
            router.push("/success")

        },
        validateOnBlur: false, // Do not validate on blur
        validateOnChange: false, 
    });


    return(
        <>
            
            <HeadingText text={"Zamtel Payment"} />
            
            <form onSubmit={formik.handleSubmit}>

                <Box component={Stack} spacing={3}>
                    <PhoneNumberInput 
                        InputProps={{
                            startAdornment: <InputAdornment position="start">+260</InputAdornment>,
                        }}
                        value={formik.values.phoneNumber}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.phoneNumber && Boolean(formik.errors.phoneNumber)}
                        helperText={formik.touched.phoneNumber && formik.errors.phoneNumber}
                        
                    />
                    

                    <Box sx={{ display:'flex' }}>
                        <Box sx={{ flexGrow:1 }}/>
                        <div>
                            <PayButton
                                isLoading={formik.isSubmitting}
                            />
                        </div>
                    </Box>
                </Box>

            </form>
        </>
    )
}

// 
const phoneRegExp = /^(97[0-9]{7})$/;
const validationSchema = yup.object({
    phoneNumber: yup
      .string()
    //   .matches(phoneRegExp, 'Invalid Phone Number, example: 0971234567')
      .required('Phone number is required')
});
import { ChangeEvent, useState } from 'react'
import { 
    TextField,
    Typography,
    Stack,
    Box,
    Button
} from "@mui/material";

import CreditCardIcon from '@mui/icons-material/CreditCard';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { Dayjs } from 'dayjs';
import { useFormik } from 'formik';
import * as yup from 'yup';
import HeadingText from '../general/HeadText';
import { LoadingButton } from '../buttons/LoadingButtons';
import { useRouter } from 'next/router';
import { stall } from '../utils/helpers';
import PhoneNumberInput from '../general/PhoneNumberInput';

const validationSchema = yup.object({
    firstName: yup
    .string()
    .required('first name is required'),

    lastName: yup
    .string()
    .required('last name is required'),

    address: yup
    .string()
    .required('address is required'),

    email: yup
    .string()
    .required('emil is required'),

    phoneNumber: yup
    .string()
    .required('phone number is required'),

    cardName: yup
    .string()
    .required('card name is required'),
    
    cardNumber: yup
    .string()
    .required('card number is required'),

    expiryDate: yup
    .string()
    .required('expiry date is required'),

    cvv: yup
    .string()
    .required('cvv is required')
});

export default function CardPaymentForm(){

    const router = useRouter();

    const formik = useFormik({
        initialValues: {
            firstName:"",
            lastName:"",
            address:"",
            email:"",
            phoneNumber:"",
            cardName:"",
            cardNumber:"",
            expiryDate:"",
            cvv:""
        },
        
        validationSchema: validationSchema,

        onSubmit: async (values) => {
            await stall()
            router.push("/test")
        },

        validateOnBlur: false, 
        validateOnChange: false, 
    });

    const handleChangeCardNumber = (e:any) => {
        const input = e.target.value
        formik.setFieldValue("cardNumber", formatCardNumber(input), true)
    }


    return(
        <>
            <HeadingText text={"Card Payment"} />

            <form onSubmit={formik.handleSubmit}>


                <Box
                    component={Stack}
                    spacing={3}
                    marginBottom={5}
                >

                    <Typography
                        component={"h1"}
                        variant="subtitle2"
                        fontFamily={"Poppins Regular"}
                        sx={{
                            textTransform:'capitalize'
                        }}
                    >
                        Billing Information
                    </Typography>
                    

                    <Box
                    component={Stack}
                        direction={"row"}
                        spacing={2}
                        sx={{
                            width:1
                        }}
                    >
                        <Box width={1}>
                            <TextField 
                                fullWidth
                                name="firstName"
                                label="First Name" 
                                variant="outlined" 
                                required
                                autoComplete='off'
                                value={formik.values.firstName}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                        </Box>

                        <Box width={1}>
                            <TextField 
                                fullWidth
                                name="lastName"
                                label="Last Name" 
                                variant="outlined" 
                                required
                                autoComplete='off'
                                value={formik.values.lastName}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                        </Box>
                    </Box>

                    <TextField 
                        fullWidth
                        name="address"
                        label="Address Line" 
                        variant="outlined" 
                        required
                        autoComplete='off'  
                        value={formik.values.address}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        
                    />

                    <TextField 
                        fullWidth
                        name="email"
                        label="Email" 
                        variant="outlined" 
                        required
                        autoComplete='off'
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        
                    />

                    <PhoneNumberInput 
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />

                   
                </Box>

                
                <Box
                    component={Stack}
                    spacing={3}
                >

                    <Typography
                        component={"h1"}
                        variant="subtitle2"
                        fontFamily={"Poppins Regular"}
                        sx={{
                            textTransform:'capitalize'
                        }}
                    >
                        Payment Information
                    </Typography>

                    <TextField 
                        fullWidth
                        name="cardName"
                        label="Name On Card" 
                        variant="outlined" 
                        required
                        autoComplete='off'
                        value={formik.values.cardName}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />

                    <TextField 
                        fullWidth
                        label="Card Number" 
                        variant="outlined" 
                        inputProps={{ 
                            autoComplete:'off',
                            name:"cardNumber",
                            required:true,
                            maxLength: 19,
                            type: 'text',
                            placeholder: 'XXXX-XXXX-XXXX-XXXX',
                            pattern: '\\d{4}-\\d{4}-\\d{4}-\\d{4}', 
                            value: formik.values.cardNumber,
                            onChange: handleChangeCardNumber
                        }}
                        InputProps={{
                            startAdornment: (
                                <CreditCardIcon sx={{ marginRight:1.5}}/>
                            )
                        }}
                    />

                    <Box
                    component={Stack}
                        direction={"row"}
                        spacing={2}
                        sx={{
                            width:1
                        }}
                    >
                        <Box width={1}>
                            <DatePicker 
                                sx={{ width:1 }}
                                label="Expiry Date"
                                format="DD-YY"  
                                value={formik.values.expiryDate}
                                onChange={(value) => formik.setFieldValue("expiryDate", value, true)}
                                slotProps={{
                                    textField:{
                                        autoComplete:'off',
                                        variant:'outlined',
                                        name:"expiryDate",
                                        error:formik.touched.expiryDate && Boolean(formik.errors.expiryDate),
                                        helperText:(formik.touched.expiryDate && formik.errors.expiryDate)
                                    }
                                }}
                            />
                        </Box>

                        <Box width={1}>
                            <TextField
                                fullWidth
                                label="CVV"
                                variant="outlined"
                                name="cvv"
                                type="text"
                                required
                                autoComplete='off'
                                inputProps={{
                                    maxLength: 3,
                                }}
                                value={formik.values.cvv}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                        </Box>

                    </Box>

                    <Box sx={{ display:'flex' }}>
                        <Box sx={{ flexGrow:1 }}/>
                        <div>
                            <LoadingButton
                                isLoading={formik.isSubmitting}
                                text="Make Payment"
                            />
                        </div>
                    </Box>
                </Box>
            </form>
        </>
    )
}


const formatCardNumber = (cardNumber:any) => {

    let input = cardNumber.replace(/\D/g, '');

    // Insert dashes after every 4 digits
    let formattedInput = '';
    for (let i = 0; i < input.length; i += 4) {
        formattedInput += input.slice(i, i + 4) + '-';
    }

    // Remove the trailing dash if exists
    if (formattedInput.endsWith('-')) {
        formattedInput = formattedInput.slice(0, -1);
    }

    return formattedInput;
 
};



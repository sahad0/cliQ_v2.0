import * as yup from 'yup'



export const emailSchema = yup.object().shape({
    email: yup
      .string()
      .email("Please enter valid email !")
      .required('Email Address is Required'),
   
  })


export const passwordSchema = yup.object().shape({
  password: yup
  .string()
  .min(8, ({ min }) => `Password must be at least ${min} characters`)
  .required('Password is required'),
})

export const signupSchema = yup.object().shape({
  email: yup
      .string()
      .email("Please enter valid email !")
      .required('Email Address is Required'),

  password: yup
  .string()
  .min(8, ({ min }) => `Password must be at least ${min} characters`)
  .required('Password is required'),

  phone: yup
  .string()
  .min(10,({min})=> `PHone must be at least ${min} digits`)
  .required('A phone number is required'),
})



export const otpSchema = yup.object().shape({
  otp: yup
    .string()
    .min(6,({min})=> `OTP must be at least ${min} digits`)
    .required('OTP is required'),
})


export const resetPasswordSchema =  yup.object().shape({
  password: yup.string().required('Password is required'),
  passwordConfirmation: yup.string()
     .oneOf([yup.ref('password')], 'Passwords must match').min(6,({min})=> `Password must be at least ${min} characters`)
});

export const organisationSchema =  yup.object().shape({
  orgName: yup
  .string()
  .min(4)
  .required(),
})
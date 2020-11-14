// import React from "react"
// // import RegistrationFormStyles from "./registrationForm.module.scss"
// import {Wrapper,Grid,Flex} from "../styles"
// import {Formik, FastField,Field,Form} from "formik"
// import * as Yup from "yup"
// import { Container,Input,Button} from "components/common"
// import {FacebookAuthLogin} from "components/modules/auth/facebook"
// import {GoogleAuthLogin} from "components/modules/auth/google"

// const initialValues = {
//     Email:"",
//     Password:""
// }
// const ValidationSchema = Yup.object({
//     Email:Yup.string().nullable().email().required("Enter your email"),
//     Password:Yup.string().nullable().required("password").min(3)
// })
// export default  ({children})=>{
//     let onsubmit = async ({values,submittingProps})=>{
//         console.log("this is ok")
//     }

//     return(
//         <Wrapper as={Container}>
//             <Formik
//                 initialValues={initialValues}
//                 validationSchema={ValidationSchema}
//                 onSubmit={onsubmit}>
//                     {({values,
//                         handleSubmit,
//                         handleBlur,
//                         handleChange,
//                         touched,
//                         dirty,
//                         isValid,
//                         errors,
//                         getFieldProps,
//                         setFieldValue

//                     })=>{
//                         return(
//                                 <Form onSubmit={handleSubmit}>
//                                     <Grid>
//                                         <div>
//                                             <label htmlFor="Email">Email</label>
//                                             <Field
//                                                 component={Input}
//                                                 error={errors.hasOwnProperty("Email") && touched.hasOwnProperty("Email")? true : undefined }
//                                                 value={values.Email}
//                                                 {...getFieldProps("Email")}
//                                                 name="Email"
//                                                 placeholder="Enter You Email"
//                                                 id="Email"
//                                                 />
//                                         </div>
                                        
//                                         <div>
//                                             <label htmlFor="Password">Password</label>
//                                             <Field
//                                                 component={Input}
//                                                 value={values.Password}
//                                                 {...getFieldProps("Password")}
//                                                 name="Password"
//                                                 id="Password"
//                                                 />
//                                         </div>
                                        
//                                         <Button  disabled={dirty && isValid ? false: true } type="submit">Submit</Button>
                                        
//                                         <Flex>
//                                             <FacebookAuthLogin />
//                                             <GoogleAuthLogin />
//                                         </Flex>
//                                     </Grid>
//                                 </Form>
//                         )
//                     }}
//             </Formik>
//         </Wrapper>
//     )
// }
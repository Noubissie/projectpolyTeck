import React,{useContext} from "react"
// import RegistrationFormStyles from "./registrationForm.module.scss"
import {Wrapper,Grid,Flex} from "./styles"
import {Formik, Field,Form} from "formik"
import * as Yup from "yup"
import { Input,Button} from "components/common"
import {FacebookAuthLogin} from "components/modules/auth/facebook"
import {GoogleAuthLogin} from "components/modules/auth/google"

import { ThemeContext } from 'providers/ThemeProvider';

const initialValues = {
    Email:"",
    Password:""
}
const ValidationSchema = Yup.object({
    Email:Yup.string().nullable().email().required("Enter your email"),
    Password:Yup.string().nullable().required("password").min(3)
})
export default  ({children})=>{

  const { theme } = useContext(ThemeContext);

    let onsubmit = async ({values,submittingProps})=>{
        console.log("this is ok")
    }

    return(
        <Wrapper >
            <Formik
                initialValues={initialValues}
                validationSchema={ValidationSchema}
                onSubmit={onsubmit}>
                    {({values,
                        handleSubmit,
                        handleBlur,
                        handleChange,
                        touched,
                        dirty,
                        isValid,
                        errors,
                        getFieldProps,
                        setFieldValue

                    })=>{
                        return(
                                <Form onSubmit={handleSubmit}>
                                    <Grid>
                                        <h3>Login Form</h3>
                                        <div>
                                            <label  htmlFor="Email">Email</label>
                                            <Field
                                                component={Input}
                                                error={errors.hasOwnProperty("Email") && touched.hasOwnProperty("Email")? true : undefined }
                                                value={values.Email}
                                                {...getFieldProps("Email")}
                                                placeholder="Enter You Email" 
                                                // variant="filled"
                                                name="Email"
                                                className="Email"
                                                id="Email"
                                                theme={theme}
                                                />
                                        </div>
                                        
                                        <div>
                                            <label className="label" htmlFor="Password">Password</label>
                                            {console.log("values::",values)}
                                            <Field
                                                component={Input}
                                                error={errors.hasOwnProperty("Password") && touched.hasOwnProperty("Password")? true : undefined }
                                                value={values.Password}
                                                {...getFieldProps("Password")}
                                                name="Password"
                                                id="Password"
                                                type="password"
                                                theme={theme}
                                                placeholder="Password" 
                                                // variant="outlined"
                                                />
                                        </div>
                                        
                                        <Button  disabled={dirty && isValid ? false: true } type="submit">Submit</Button>
                                        
                                        <Flex>
                                            
                                                <FacebookAuthLogin />
                                             
                                                <GoogleAuthLogin />
                                            
                                            
                                        </Flex>
                                    </Grid>
                                </Form>
                        )
                    }}
            </Formik>
        </Wrapper>
    )
}
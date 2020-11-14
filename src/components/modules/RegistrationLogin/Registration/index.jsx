import React, {useContext} from "react"
// import RegistrationFormStyles from "./registrationForm.module.scss"
import {Wrapper,Grid} from "./styles"
import {Formik,Field,Form} from "formik"
import * as Yup from "yup"
import { Input,Button} from "components/common"
import { ThemeContext } from 'providers/ThemeProvider';
const initialValues = {
    LastName:"",
    FirstName:"",
    Email:"",
    Contact:"" ,
    Policy:"",
    Aggreement:""
}
const ValidationSchema = Yup.object({
    LastName:Yup.string().nullable().required("Family Name"),
    FirstName:Yup.string().nullable().required("Given Name"),
    Email:Yup.string().nullable().email().required("Enter your email"),
    Contact:Yup.string().nullable().required("Contact"),
    Policy:Yup.boolean().oneOf([true],"Accept the policy Aggreement").nullable().required("Policy"),
    Aggreement:Yup.boolean().oneOf([true],"Accept Confidentiality Aggreement").nullable()
})
export default    ({children})=>{

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
                                        <h3>Registration Form </h3>
                                        {console.log("VALUE::",values)}
                                    <div>
                                            <label htmlFor="Email">First Name/Given Name</label>
                                            <Field
                                                component={Input}
                                                error={errors.hasOwnProperty("FirstName") && touched.hasOwnProperty("FirstName")? true : undefined }
                                                value={values.FirstName}
                                                {...getFieldProps("FirstName")}
                                                name="FirstName"
                                                theme={theme}
                                                // placeholder="Enter You LastName"
                                                id="FirstName"
                                                />
                                    </div>
                                    <div>
                                            <label htmlFor="LastName">Last Name/ Family Name</label>
                                            <Field
                                                component={Input}
                                                // error={errors.hasOwnProperty("LastName") && touched.hasOwnProperty("LastName")? true : undefined }
                                                value={values.LastName}
                                                {...getFieldProps("LastName")}
                                                name="LastName"
                                                // placeholder="Enter You LastName"
                                                id="LastName"
                                                theme={theme}
                                                />
                                    </div>
                                        <div>
                                            <label htmlFor="Email">Email</label>
                                            <Field
                                                component={Input}
                                                // error={errors.hasOwnProperty("Email") && touched.hasOwnProperty("Email")? true : undefined }
                                                value={values.Email}
                                                {...getFieldProps("Email")}
                                                name="Email"
                                                // placeholder="Enter You Email"
                                                id="Email"
                                                theme={theme}
                                                />
                                        </div>
                                        
                                        <div>
                                            <label htmlFor="Contact">Contact</label>
                                            <Field
                                                component={Input}
                                                value={values.Contact}
                                                {...getFieldProps("Contact")}
                                                name="Contact"
                                                id="Contact"
                                                theme={theme}
                                                />
                                        </div>
                                        <div>
                                            <label htmlFor="Policy">
                                                <Field
                                                    component={Input}
                                                    value={values.Policy}
                                                    {...getFieldProps("Policy")}
                                                    name="Policy"
                                                    type="checkbox"
                                                    id="Policy"
                                                    style={{width:"20px"}}
                                                    
                                                    />
                                                I have read and aggreed to the policies and Aggreement
                                            </label>
                                        </div>
                                        <div>
                                            <label htmlFor="Aggreement">
                                                <Field
                                                    component={Input}
                                                    value={values.Aggreement}
                                                    type="checkbox"
                                                    {...getFieldProps("Aggreement")}
                                                    name="Aggreement"
                                                    id="Aggreement"
                                                    style={{width:"20px"}}
                                                    />I have read and aggreed to the policies and Aggreement
                                            </label>
                                        </div>
                                        
                                        <Button  disabled={dirty && isValid ? false: true } type="submit">Submit</Button>
                                        
                                    </Grid>
                                </Form>
                        )
                    }}
            </Formik>
        </Wrapper>
    )
}
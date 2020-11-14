import React from "react"
import GoogleLogin from 'react-google-login'
import {Button} from "components/common"
// or
// import { GoogleLogin } from 'react-google-login';
 
export const GoogleAuthLogin = ()=>{


const responseGoogle = (response) => {
  console.log(response);
}

  return(
    <GoogleLogin
        clientId={`${process.env.REACT_APP_GOOGLE_API_LOGIN_CLIENT_ID}`}
        buttonText="Login"
        render = {(renderProps)=><Button backgroundColor="rgba(255,0,20,0.6)"  onClick={renderProps.onClick} disabled={renderProps.disabled} >Google Login</Button>}
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
    />
  )
  }
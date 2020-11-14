import React from "react"
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
// import {TiSocialFacebook} from 'react-icons/ti';
import {Button} from "components/common"
// import Button from "@material-ui/core/Button"


export const FacebookAuthLogin = () =>{
    const responseFacebook = (response) => {
        console.log(response);
      }
       
      
       return( <FacebookLogin
          appId={`${process.env.REACT_APP_FACEBOOK_APPID}`}
          autoLoad={true}
          render={renderProps => (
            <Button  onClick={renderProps.onClick}>FBook login</Button>
          )}
          fields="userID, name, email, picture"
          callback={responseFacebook}
          
        //   icon={<TiSocialFacebook style={{margin:"0px"}} size="30"/>}
        />
       )
}

 
import React from 'react';
// import {ChatApp,Landing,RegistrationLogin} from "components/modules"
import {Landing,RegistrationLogin,ImageBlog} from "components/modules"
// import {Container} from "components/common"
import {Wrapper,Grid} from "./styles"
export const HomePage = ()=> {
  return (
    <Wrapper  >
      <Grid>
        <Landing/>
        <RegistrationLogin />
        <ImageBlog />
      </Grid>
      
        {/* <ChatApp />  */}
        
    </Wrapper>
  );
}

;
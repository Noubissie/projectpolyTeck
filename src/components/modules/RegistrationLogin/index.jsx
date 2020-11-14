import React from 'react';
import Login from  "./Login"
import Registration from "./Registration"
import {Container} from "components/common"
import {Grid,Wrapper,Container_here} from "./styles"
export const RegistrationLogin = ()=> {
  return (
    <>
    <Wrapper  >
        <Container_here>
          <Grid number={1} percentage={100} as={Container}>
            
            <Grid number={2} percentage={50}>
                <Login />
                <Registration />
            </Grid> 
          </Grid>
        {/* <ChatApp />   */}
        </Container_here>
    </Wrapper>
    </>
  );
}

;
import React, {useContext} from "react"
import {ThemeContext} from "providers/ThemeProvider"
// import { Container } from "components/common"
import {Wrapper, Grid} from "./styles"
// import {image_width,image_height} from "assets/Sizes"
import {Button} from "components/common"
export const Landing =()=>{
    let {theme} = useContext(ThemeContext)
    
    return(
        <>
            <Wrapper theme={theme}  > 
                <Grid number={1}  >
                    
                    <div style={{background:"rgba(255,255,255,0.4)"}}>
                        <h1>
                           
                            End-Hunger-Project <br/>
                            
                        </h1>
                        <h4>
                            
                        Satellite-based solutions improve early warning 
                        and monitoring of meteorological and agricultural droughts, 
                        support water management practices, estimates harvests, monitor crop health, 
                        map population and infrastructure vulnerabilities, support farmers insurance schemes, provide location-based services to agriculture machinery and enhance food production with precision agriculture and research on food production in space.

                        </h4>
                        <Button>Get Started</Button>
                    </div>
                    
                         
                </Grid>
                
                
            </Wrapper>
        </>
    )
}
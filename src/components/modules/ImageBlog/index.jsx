import React, {useContext} from "react"
import {Wrapper,Img,SIZE} from "./styles"
import {Card,TitleWrap} from "components/common/Card"
import {ThemeContext} from "providers/ThemeProvider"
import map1 from "assets/illustration/map1.svg"
import map2 from "assets/illustration/map2.svg"



// import {}
export const ImageBlog = ()=>{
    let {theme} = useContext(ThemeContext)
    return(
        <Wrapper> 
             <Card width="fit-content" theme={theme} >
                    <Img src={map1} />
                    <SIZE>
                        <TitleWrap>
                            
                        </TitleWrap>
                    </SIZE>
              
            </Card>
            <Card width="fit-content" theme={theme}>
                    <Img src={map2} />
                    <SIZE>
                        <TitleWrap>
                          
                        </TitleWrap>
                    </SIZE>
              
            </Card>
        </Wrapper>
    )
}
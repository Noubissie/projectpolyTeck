import styled from "styled-components"
import rlpBackground from "assets/illustration/rlpBackground.svg"
import medical from "assets/illustration/medical.svg"

export const Wrapper = styled.div`
    min-height:95vh;
    /* background-image:url(${rlpBackground}); */
    background-size:cover;
    background-color:rgba(0, 128, 0, 0.418);
    background-position:top;
    background-repeat:no-repeat;
    /* background-image:url(${medical}); */
    /* border:solid red; */
    filter:contrast(120%) saturation(120%);
   
    /* @media(min-width:950px ) and (max-width:1000){
        margin:5% 10%;
    } */
`
export const Container_here = styled.div`
    background-color: rgba(255,255,255,0.6);
    background-color: rgba(0,0,0,0.6);
    color:#fff;
    margin:5% 20%;
    @media(max-width:950px){
        margin:5% 10%;
    }
`
export const Grid = styled.div`
    display:grid;
    grid-template-columns: ${({number,percentage})=>number && percentage? `repeat(${number},${percentage}%)`:"auto"};
    @media (max-width:700px){
            /* grid-template-columns:100%; */
            display:flex;
            flex-direction:column;
            /* div{
                div{
                    &:nth-child(1){
                        border:outset;
                    }
                }
                
                
            } */
            
    }
    
    
    div{
        /* border:solid red; */
        
        
    }
   
    
`
export const Flex = styled.div`
    
`
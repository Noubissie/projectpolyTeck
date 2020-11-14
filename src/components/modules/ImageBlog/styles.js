import styled from "styled-components"
import {image_width,image_height} from "assets/Sizes"


export const Wrapper = styled.div`
/* border:solid red; */
        display:grid;
        /* overflow:scroll; */
        grid-template-columns: auto auto;
`
export const Img = styled.img`
    width:fit-content;
    height:fit-content;
    background-color:rgba(255,255,255,1);
    margin:0;
    /* animation:translation;
    @keyframes translation{
        from{left:0px;}
        to{left:-1000px;}
    } */
`
export const SIZE = styled.div`
    display:flex;
    flex-direction:column;
    width:${image_width};
    color:black;
    background-color:rgba(255,255,255,1); 
    margin:0;
`
export const Container_transite = styled.div`
    overflow:scroll;
`
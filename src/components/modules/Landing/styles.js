
import styled from "styled-components"
import {PRIMARY_COLOR, SECONDARY_COLOR} from "assets/colorsPallete"
import landingimage from "assets/illustration/landingimage.svg"
import falll from "assets/illustration/falll.svg"
export const Wrapper = styled.div`
/* border:solid red; */
    /* padding: 10rem 0 4rem 0; */
    background-size:cover;
    background-position:top;
    background-repeat:no-repeat;
    background-color:rgba(0, 128, 0, 0.418);
    background-image:url(${falll});
    /* border:solid red; */
    /* width:100vw; */
    /* background-color:${({theme})=>(theme ==="light" ? PRIMARY_COLOR:SECONDARY_COLOR)}; */
    min-height:100vh;
    color:black;
    filter:contrast(120%) saturation(120%);
    

    @media (max-width:1960px){
        /* padding:1rem 0 1rem; */
    };
`

export const Grid = styled.div`
    display:grid;
   
    text-align:left;
    /* align-items:left; */
    justify-content:center;
    grid-template-columns:${({number})=>`repeat(${number},100%)`};
    /* margin:auto; */
    animation:homelayout;
    animation-duration:3s;
    animation-iteration-count:1;
    animation-direction:initial;
    transition-property:all;

    @keyframes homelayout{ 
        0%{opacity:0;}
        25%{opacity:0;}
        50%{opacity:0.5;}
        75%{opacity:0.7;}
        100%{opacity:1;}
    };
    @media (max-width:600px){
        grid-template-columns:100%;
        
        
    };
    div{
        /* background-color:rgba(255,255,255,0.3); */
        font-size:1.2rem;
        margin:0 auto;
        width:60%;
        margin-top:30vh;
        @media (max-width:950px){
            width:100%;
            
        
    };
    h1{
        animation:h4_animation;
        animation-duration:4s;
        animation-iteration-count:1;
        animation-direction:initial;
        transition-property:all;
    }
    @keyframes h4_animation{ 
        from{top:-300px;}
        
        to{top:300px;}
    };
        button{
            align-items:center;
        }
    }
    
    
`
export const Links = styled.div`
    display:flex;
    align-items:center;

    a  {
            margin:0 0.5rem;
            img{
                margin:0;
            }
            &:first-child, 
            &:last-child{
                margin:0;
            }
    }
    
`

export const Details = styled.div`
        h5,a,span{
            color:#212121
        }

        @media (max-width: 680px){
            margin-bottom: 2rem;
    }
`;


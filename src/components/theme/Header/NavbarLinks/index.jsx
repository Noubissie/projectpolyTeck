import React, { useContext} from 'react';
// import AnchorLink from 'react-anchor-link-smooth-scroll';
import { ThemeContext } from 'providers/ThemeProvider';
import ToggleTheme from 'components/theme/Header/ToggleTheme';
import { Wrapper } from './styles';

let AnchorLink =({children,href})=>{
    return(
        <a href={href}>
            {children}
        </a>
    )
}

const NavbarLinks = ({ desktop }) => {
  const { theme } = useContext(ThemeContext);
 
  return (
    <>
      <Wrapper desktop={desktop} theme={theme}>
        <AnchorLink href="#about">Farmer</AnchorLink>
        <AnchorLink href="#projects">Features</AnchorLink>
        <AnchorLink href="#contact">Security</AnchorLink>
        <AnchorLink href="#contact">FAQ</AnchorLink>
      </Wrapper>
      <Wrapper desktop={desktop} theme={theme}>
        {/* <AnchorLink href="#about">lan</AnchorLink> */}
        <AnchorLink href="#projects">contact</AnchorLink>
        <ToggleTheme />
      </Wrapper>
    </>
  )

};

export default NavbarLinks;

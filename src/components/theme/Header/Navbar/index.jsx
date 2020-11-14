import React, { useContext } from 'react';
// import { Link } from 'gatsby';
import { ThemeContext } from 'providers/ThemeProvider';
import { Container } from 'components/common';
import NavbarLinks from '../NavbarLinks';
import { Wrapper, Brand } from './styles';
// import dfulogo from  "assets/thumbnail/DFULOGO.png"
const Navbar = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper as={Container}>
      {/* <Brand as={Link} to="/" theme={theme}> */}
      <Brand  to="/" theme={theme}>
        {/* <img src={dfulogo} alt="logo image" height="400px" width="400px"/> */}
          <b>End-Hunger Project <br/></b>
      </Brand>
      <NavbarLinks desktop />
      
    </Wrapper>
  );
};

export default Navbar;

import React, { useState, useContext } from 'react';
import Navbar from './Navbar';
import Hamburger from './Hamburger';
import Sidebar from './Sidebar';
import { Wrapper, Overlay } from './styles';
import {ThemeContext} from "providers/ThemeProvider"

export const Header = () => {
  const [sidebar, toggle] = useState(false);
  const {theme} = useContext(ThemeContext)
  const [scroll,setscroll] = useState(window.scrollY)
  window.onscroll = ()=>{
    setscroll(window.scrollY)
  }
  return (
    <Wrapper theme={theme} scroll={scroll}>
      <Overlay sidebar={sidebar} onClick={() => toggle(!sidebar)} />
      <Navbar />
      <Hamburger sidebar={sidebar} toggle={toggle} />
      <Sidebar sidebar={sidebar} toggle={toggle} />
    </Wrapper>
  );
};

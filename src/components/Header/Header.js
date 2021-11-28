import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillFacebook } from 'react-icons/ai';
import { FaWhatsapp } from "react-icons/fa";
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href='/'>
        <a style={{ display:'flex', alignItems:"center", color: "white", marginBottom: "20px" }}>
          <DiCssdeck size="3rem" /> <Span> Ankush Bhardwaj </Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
        <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
        <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
        <NavLink>About</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://www.linkedin.com/in/ankush-bhardwaj-14320b145/">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>

      <SocialIcons href="https://github.com/iamankush0078">
      <AiFillGithub size="3rem" />
      </SocialIcons>

      <SocialIcons href="https://www.facebook.com/ankush.bhardwaj.524/">
      <AiFillFacebook size="3rem" />
      </SocialIcons>

      <SocialIcons href="https://www.instagram.com/ankushbh0078/">
      <AiFillInstagram size="3rem" />
      </SocialIcons>

      <SocialIcons href="https://wa.me/8851674492">
      <FaWhatsapp size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;

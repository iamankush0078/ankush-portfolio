import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillFacebook } from 'react-icons/ai';
import { FaWhatsapp } from "react-icons/fa";

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href='tel:+91-8851674492'>+91-8851674492
          </LinkItem>
        </LinkColumn>

        <LinkColumn>
          <LinkTitle>Mail</LinkTitle>
          <LinkItem href='mailto:iamankush0078@gmail.com'>iamankush0078@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Innovating One Project at a time.</Slogan>
        </CompanyContainer>
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
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;

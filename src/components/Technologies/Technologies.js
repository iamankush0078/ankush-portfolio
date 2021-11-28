import React from 'react';
import { DiFirebase, DiReact, DiZend, DiMongodb } from 'react-icons/di';
import { AiFillHtml5 } from 'react-icons/ai';import { FaNodeJs, FaPhp } from 'react-icons/fa';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle, TechIcons } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id='tech'>
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with the range of technologies in the web developement world, from Back-end to Design. 
    </SectionText>
    <List>
      <ListItem>
        <TechIcons>
        <DiReact size='3rem' />
        <AiFillHtml5 size='3rem' />
        </TechIcons>
        <ListContainer>
          <ListTitle>Front-end</ListTitle>
          <ListParagraph>
            Experience with <br />
            React.js & HTML5
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
      <TechIcons>
        <FaNodeJs size='3rem' />
        <FaPhp size='3rem' />
        </TechIcons>
        <ListContainer>
          <ListTitle>Back-end</ListTitle>
          <ListParagraph>
            Experience with <br />
            Node and PHP
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
      <TechIcons>
        <DiFirebase size='3rem' />
        <DiMongodb size='3rem' />
        </TechIcons>
        <ListContainer>
          <ListTitle>Database</ListTitle>
          <ListParagraph>
            Experience with <br />
            MySQL & MongoDB
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;

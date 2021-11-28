import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 10, text: 'Open Source Projects'},
  { number: 323, text: 'Students', },
  { number: 13, text: 'Github Followers', },
  { number: 242, text: 'Linkedin Connections', }
];

const Acomplishments = () => (
  <Section>
    <SectionDivider />
     <br />
    <SectionTitle>Personal Acomplishments</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{ card.number }</BoxNum>
          <BoxText>{ card.text }</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;

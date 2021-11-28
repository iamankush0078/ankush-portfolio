import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
          Hi I'm <br />
          Ankush Bhardwaj
      </SectionTitle>
      <SectionText>
        I am a Software Developer at Webkul and working as a Opencart Developer.
      </SectionText>
      <Button onClick={() => window.location = 'mailto:iamankush0078@gmail.com' }>Learn More..</Button>
    </LeftSection>
  </Section>
);

export default Hero;
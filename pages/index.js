import React from 'react';
import { Container } from '@mui/material';
import About from '../components/About';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Contact from '../components/Contact';

function Home() {
  return (
    <Container>
      <About />
      <Projects />
      <Skills />
      <Contact />
    </Container>
  );
}

export default Home;

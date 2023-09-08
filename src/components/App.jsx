import { useEffect } from 'react';

import Header from './header/Header';
import AboutMe from './AboutMe';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import { ThemeProvider } from '../utils/context/context';
import GlobalStyle from '../style/GlobalStyle';

export default function App() {

  useEffect(() => {
    document.title = `Kevin BRET`
  }, [])

  return (
    <ThemeProvider>
      <GlobalStyle  />
      <div className="App">
        <Header />
        <AboutMe />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </ThemeProvider>
  );
}


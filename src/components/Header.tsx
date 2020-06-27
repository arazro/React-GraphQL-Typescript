import React, { useState, useEffect } from 'react';
import { Menu, Container } from 'semantic-ui-react'
import { Link } from '@reach/router'
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '../assets/theme';
import { GlobalStyles } from '../global';

const Header: React.FC = () => {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    if (theme === 'light') {
      window.localStorage.setItem('theme', 'dark')
      setTheme('dark')
    } else {
      window.localStorage.setItem('theme', 'light')
      setTheme('light')
    }
  };
  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme');
    localTheme && setTheme(localTheme);
  }, []);

  return (
    <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
      <>
        <GlobalStyles />
        <Menu color="orange" inverted borderless>
          <Container textAlign="left">
            <Link className="headeLink" to="/">
              <Menu.Item className="headeLink" style={{ paddingLeft: 0 }}>
                <h2> Cryptocurrency</h2>
              </Menu.Item>
            </Link>
            <Menu.Item onClick={toggleTheme} className="headeLink lightLink" >
              <h3>{theme === 'dark' ? 'Light' : 'Dark'}</h3>
            </Menu.Item>
          </Container>
        </Menu>
      </>
    </ThemeProvider>
  );
}
export default Header
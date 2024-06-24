import React from 'react';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import Head from 'next/head';
import { useState } from 'react';
import Navbar from '../components/Navbar';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const [darkMode, setDarkMode] = useState(false);

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Head>
        <title>Solomon Zinabu</title>
        <meta name="description" content="Solomon Zinabu Portfolio Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;

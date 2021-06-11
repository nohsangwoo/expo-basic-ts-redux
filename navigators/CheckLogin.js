import React from 'react';
import { useSelector } from 'react-redux';
import LoggedOutNav from './LoggedOutNav';
import LoggedInNav from './LoggedInNav';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '../styles/theme';

export default function CheckLogin() {
  const isLoggedIn = useSelector(state => state.loginState.isLoggedIn);
  const isDarkMode = useSelector(state => state.settings.isDarkMode);

  console.log('isLoggedIn?: ', isLoggedIn);
  console.log('isDarkMode?: ', isDarkMode);

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <NavigationContainer>
        {isLoggedIn ? <LoggedInNav /> : <LoggedOutNav />}
      </NavigationContainer>
    </ThemeProvider>
  );
}

/* eslint-disable react/style-prop-object */
import React, { memo, useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { KeyboardAvoidingView, NativeBaseProvider } from 'native-base';
import { useColorScheme } from 'react-native';

import { ThemeProvider } from 'styled-components';

import { AppContainer } from './AppStyles';
import { TimerProvider } from './src/contexts/TimerContext';
import Routes from './src/routes';
import { dark, darkBaseTheme } from './src/theme/dark';
import { light, lightBaseTheme } from './src/theme/light';

const App: React.FC = () => {
  const colorScheme = useColorScheme();
  const [theme, setTheme] = useState(dark);
  const [baseTheme, setBaseTheme] = useState(darkBaseTheme);

  useEffect(() => {
    setTheme(colorScheme === 'dark' ? dark : light);
    setBaseTheme(colorScheme === 'dark' ? darkBaseTheme : lightBaseTheme);
  }, [colorScheme]);

  return (
    <NativeBaseProvider theme={baseTheme}>
      <ThemeProvider theme={theme}>
        <TimerProvider>
          <AppContainer>
            <KeyboardAvoidingView flex={1}>
              <Routes />
            </KeyboardAvoidingView>
          </AppContainer>
        </TimerProvider>
        <StatusBar style="auto" />
      </ThemeProvider>
    </NativeBaseProvider>
  );
};

export default memo(App);

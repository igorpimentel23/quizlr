/* eslint-disable global-require */
/* eslint-disable react/style-prop-object */
import React, { memo, useCallback, useEffect, useState } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
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
  const [fontsLoaded] = useFonts({
    'SF Pro Rounded Bold': require('./src/assets/fonts/SF-Pro-Rounded-Bold.otf'),
    'SF Pro Rounded Light': require('./src/assets/fonts/SF-Pro-Rounded-Light.otf'),
    'SF Pro Rounded Medium': require('./src/assets/fonts/SF-Pro-Rounded-Medium.otf'),
    'SF Pro Rounded Regular': require('./src/assets/fonts/SF-Pro-Rounded-Regular.otf'),
    'SF Pro Rounded Semibold': require('./src/assets/fonts/SF-Pro-Rounded-Semibold.otf'),
    'SF Pro Rounded Heavy': require('./src/assets/fonts/SF-Pro-Rounded-Heavy.otf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  useEffect(() => {
    setTheme(colorScheme === 'dark' ? dark : light);
    setBaseTheme(colorScheme === 'dark' ? darkBaseTheme : lightBaseTheme);
  }, [colorScheme]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NativeBaseProvider theme={baseTheme}>
      <ThemeProvider theme={theme}>
        <TimerProvider>
          <AppContainer onLayout={onLayoutRootView}>
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

import {StatusBar} from 'expo-status-bar';

import Navigation from './Navigation';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {ThemeProvider} from '@rneui/themed';
import theme from './themeConfig';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <SafeAreaProvider>
          <StatusBar style="auto" />
          <Navigation />
        </SafeAreaProvider>
      </NavigationContainer>
    </ThemeProvider>
  );
}

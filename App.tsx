import {StatusBar} from 'expo-status-bar';

import Navigation from './Navigation';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {ThemeProvider} from '@rneui/themed';
import theme from './themeConfig';
import {useEffect} from 'react';
import {db} from './utils/sqlite';

export default function App() {
  useEffect(() => {
    db.transaction(tx => {
      // tx.executeSql("DROP TABLE scores;");

      tx.executeSql(
        'CREATE TABLE IF NOT EXISTS scores (id integer primary key not null, nickname text, score int);',
      );
    });
  }, []);
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

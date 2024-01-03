import * as SQLite from 'expo-sqlite';
import {Platform} from 'react-native';

export function openDatabase() {
  if (Platform.OS === 'web') {
    return {
      transaction: () => {
        return {
          executeSql: () => {},
        };
      },
    };
  }

  const db = SQLite.openDatabase('local.db');
  return db;
}

export const db = openDatabase();

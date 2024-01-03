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

export function setScore({nickname, score}: {nickname: string; score: number}) {
  return db.transaction(
    tx => {
      tx.executeSql(
        'SELECT * FROM scores WHERE nickname = ?;',
        [nickname],
        (_, {rows: {length}}) => {
          if (!length) {
            tx.executeSql(
              'INSERT INTO scores (nickname, score) values (?,?);',
              [nickname, score],
            );
          }
        },
      );
    },
    error => {
      console.log(error);
      return true;
    },
  );
}

export function getLeader() {
  return new Promise((resolve, reject) => {
    db.transaction(
      tx => {
        tx.executeSql(
          'SELECT * FROM scores ORDER BY score DESC;',
          [],
          (_, {rows}) => {
            resolve(rows._array);
          },
        );
      },

      () => {
        reject([]);
      },
    );
  });
}

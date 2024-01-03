import {useIsFocused} from '@react-navigation/native';
import {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {getLeader} from '../utils/sqlite';

interface LeaderType {
  id: Number;
  nickname: string;
  score: number;
}

export default function ScoreScreen() {
  const isFocused = useIsFocused();

  const [leaders, setLeader] = useState<LeaderType[]>([]);

  useEffect(() => {
    if (isFocused) {
      getLeader().then((res: LeaderType[]) => {
        setLeader(res);
      });
    }
  }, [isFocused]);

  return (
    <View style={[styles.container]}>
      <ScrollView style={{gap: 20, flex: 1}}>
        <View style={{gap: 8, padding: 16}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View>
              <Text style={{fontSize: 16, fontWeight: 'bold'}}>Name</Text>
            </View>
            <View>
              <Text style={{fontSize: 16, fontWeight: 'bold'}}>Score</Text>
            </View>
          </View>
          {leaders?.map((player: LeaderType, index: number) => (
            <View
              key={player.id.toString()}
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View>
                <Text style={{fontSize: index === 0 ? 20 : 16}}>
                  {player.nickname}
                </Text>
              </View>
              <View>
                <Text style={{fontSize: index === 0 ? 20 : 16}}>
                  {player.score}
                </Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
});

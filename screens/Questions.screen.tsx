import {Pressable, ScrollView, StyleSheet, Text, View} from 'react-native';
import Question from '../components/Question';
import {QUESTIONS, QuestionType} from '../constants';
import {Header, Icon} from '@rneui/themed';
import {useNavigation} from '@react-navigation/native';
import {shuffleArray} from '../utils/common';

export default function QuestionScreen() {
  const navigation = useNavigation<any>();
  return (
    <>
      <Header
        centerComponent={<Text style={{fontSize: 20}}>Questions</Text>}
        backgroundColor="white"
        rightComponent={
          <Pressable onPress={() => navigation.navigate('SCORES')}>
            <Icon name="heart-outline" type="ionicon" size={26} />
          </Pressable>
        }
      />
      <View style={[styles.container]}>
        <ScrollView
          style={{gap: 20, flex: 1}}
          showsVerticalScrollIndicator={false}>
          <View style={{gap: 8, paddingVertical: 16}}>
            {shuffleArray(QUESTIONS).map((q: QuestionType, i: number) => (
              <Question key={i} q={q} choiceNo={i + 1} />
            ))}
          </View>
        </ScrollView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
});

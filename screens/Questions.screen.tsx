import {ScrollView, StyleSheet, Text, View} from 'react-native';
import Question from '../components/Question';
import {QUESTIONS, QuestionType} from '../constants';

export default function QuestionScreen() {
  return (
    <View style={[styles.container]}>
      <ScrollView style={{gap: 20, flex: 1}}>
        <View style={{paddingVertical: 16}}>
          <Text style={{fontSize: 40, fontWeight: 'bold'}}>Questions</Text>
        </View>
        <View style={{gap: 8}}>
          {QUESTIONS.map((q: QuestionType, i: number) => (
            <Question key={i} q={q} choiceNo={i + 1} />
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

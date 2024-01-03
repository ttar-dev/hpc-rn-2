import {Pressable, ScrollView, StyleSheet, Text, View} from 'react-native';
import Question from '../components/Question';
import {QUESTIONS, QuestionType} from '../constants';
import {Header, Icon} from '@rneui/themed';
import {useNavigation} from '@react-navigation/native';
import {shuffleArray} from '../utils/common';
import {FormProvider, useForm} from 'react-hook-form';

interface QuestionAnsType extends QuestionType {
  answer: string;
}
export interface FieldInputs {
  nickname: string;
  questions: QuestionAnsType[];
}

export default function QuestionScreen() {
  const methods = useForm<FieldInputs>({
    defaultValues: {
      nickname: '',
      questions: shuffleArray(QUESTIONS),
    },
  });

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
        <FormProvider {...methods}>
          <ScrollView
            style={{gap: 20, flex: 1}}
            showsVerticalScrollIndicator={false}>
            <View style={{gap: 8, paddingVertical: 16}}>
              {methods.watch('questions')?.map((q: QuestionType, i: number) => (
                <Question key={i} q={q} choiceNo={i + 1} />
              ))}
              <Text>{JSON.stringify(methods.watch('questions'), null, 2)}</Text>
            </View>
          </ScrollView>
        </FormProvider>
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

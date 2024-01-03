import {
  Alert,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Question from '../components/Question';
import {QUESTIONS, QuestionType} from '../constants';
import {Button, Header, Icon} from '@rneui/themed';
import {useNavigation} from '@react-navigation/native';
import {shuffleArray} from '../utils/common';
import {FormProvider, useForm} from 'react-hook-form';
import {setScore} from '../utils/sqlite';

interface QuestionAnsType extends QuestionType {
  answer: string;
}
export interface FieldInputs {
  nickname: string;
  questions: QuestionAnsType[];
  point: number;
}

export default function QuestionScreen() {
  const methods = useForm<FieldInputs>({
    defaultValues: {
      nickname: '',
      questions: shuffleArray(QUESTIONS),
      point: 0,
    },
  });

  const navigation = useNavigation<any>();

  const onSubmit = (data: FieldInputs) => {
    setScore({nickname: data.nickname, score: data.point});
    methods.reset();
    navigation.navigate('SCORES');
  };

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
            </View>
          </ScrollView>
          <View style={{paddingVertical: 16}}>
            <Button
              onPress={() =>
                Alert.prompt('Enter nick name', 'Enter a nickname to save.', [
                  {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel',
                  },
                  {
                    text: 'OK',
                    onPress: nickname => {
                      methods.setValue('nickname', nickname);
                      onSubmit(methods.getValues());
                    },
                  },
                ])
              }>
              Results
            </Button>
          </View>
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

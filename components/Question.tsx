import {Text} from '@rneui/themed';
import {View} from 'react-native';
import {QuestionType} from '../constants';

interface QuestionProps {
  q: QuestionType;
  choiceNo: number;
}

export default function Question(props: QuestionProps) {
  const {q, choiceNo} = props;

  return (
    <View>
      <Text style={{fontSize: 18, fontWeight: '500'}}>
        {choiceNo}. {q?.question}
      </Text>
    </View>
  );
}

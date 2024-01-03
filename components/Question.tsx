import {Button, Text} from '@rneui/themed';
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
      <Text style={{fontSize: 22, fontWeight: '500'}}>
        {choiceNo}. {q?.question}
      </Text>
      <View style={{gap: 8, paddingVertical: 8}}>
        {q.choices.map((choice: string, index: number) => (
          <Button key={index} title={choice} type="outline" />
        ))}
      </View>
    </View>
  );
}

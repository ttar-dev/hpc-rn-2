import {FormProvider, useForm} from 'react-hook-form';
import {
  KeyboardAvoidingView,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Input from '../components/Input';
import {Button, Icon} from '@rneui/themed';
import {useNavigation} from '@react-navigation/native';

interface FieldInputs {
  nickname: string;
}
export default function EnterYourNameScreen() {
  const methods = useForm<FieldInputs>({
    defaultValues: {
      nickname: '',
    },
  });

  const navigation = useNavigation<any>();

  const onSubmit = (data: FieldInputs) => {
    navigation.navigate('QUESTIONS');
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={[styles.container]}>
        <View
          style={{
            paddingVertical: 16,
            justifyContent: 'space-between',
            flex: 1,
          }}>
          <View style={{gap: 16}}>
            <Text style={{fontSize: 40, fontWeight: 'bold'}}>
              Enter your name
            </Text>
            <Pressable
              onPress={() => navigation.navigate('QUESTIONS')}
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: 8,
              }}>
              <Text style={{fontSize: 20}}>Leader board</Text>
              <Icon name="chevron-forward-outline" type="ionicon" />
            </Pressable>
          </View>
          <KeyboardAvoidingView behavior="padding">
            <View>
              <FormProvider {...methods}>
                <Input
                  label="Nickname"
                  placeholder="John"
                  control={methods.control}
                  name="nickname"
                  rules={{
                    required: 'Nickname is required',
                  }}
                />
                <Button onPress={methods.handleSubmit(onSubmit)}>Submit</Button>
              </FormProvider>
            </View>
          </KeyboardAvoidingView>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
});

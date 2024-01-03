import {FormProvider, useForm} from 'react-hook-form';
import {StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Input from '../components/Input';
import {Button} from '@rneui/themed';

interface FieldInputs {
  nickname: string;
}
export default function EnterYourNameScreen() {
  const methods = useForm<FieldInputs>({
    defaultValues: {
      nickname: '',
    },
  });

  const onSubmit = (data: FieldInputs) => {
    console.log(data);
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={[styles.container]}>
        <View style={{paddingVertical: 16}}>
          <Text style={{fontSize: 40, fontWeight: 'bold'}}>
            Enter your name
          </Text>
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

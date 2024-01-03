import {StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

export default function EnterYourNameScreen() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={[styles.container]}>
        <View style={{paddingVertical: 16}}>
          <Text style={{fontSize: 40, fontWeight: 'bold'}}>
            Enter your name
          </Text>
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

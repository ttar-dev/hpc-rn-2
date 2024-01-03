import {ScrollView, StyleSheet, Text, View} from 'react-native';

export default function ScoreScreen() {
  return (
    <View style={[styles.container]}>
      <ScrollView style={{gap: 20, flex: 1}}>
        {/* <View style={{paddingVertical: 16}}>
          <Text style={{fontSize: 40, fontWeight: 'bold'}}>Leader board</Text>
        </View> */}
        <View style={{gap: 8}}></View>
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

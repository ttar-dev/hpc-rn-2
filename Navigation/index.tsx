import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Questions from '../screens/Questions.screen';

import ScoreScreen from '../screens/Scores.screen';

const Root = createNativeStackNavigator();

export default function Navigation() {
  return (
    <Root.Navigator>
      <Root.Screen
        name="QUESTIONS"
        component={Questions}
        options={{
          headerTitle: 'Questions',
          headerShown: false,
        }}
      />
      <Root.Screen
        name="SCORES"
        component={ScoreScreen}
        options={{
          headerTitle: 'Leader board',
        }}
      />
    </Root.Navigator>
  );
}

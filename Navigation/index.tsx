import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Questions from '../screens/Questions.screen';
import EnterYourNameScreen from '../screens/EnterName.screen';

const Root = createNativeStackNavigator();

export default function Navigation() {
  return (
    <Root.Navigator>
      <Root.Screen
        name="ENTER_NAME"
        component={EnterYourNameScreen}
        options={{
          headerShown: false,
        }}
      />
      <Root.Screen
        name="QUESTIONS"
        component={Questions}
        options={{
          headerTitle: 'Questions',
        }}
      />
    </Root.Navigator>
  );
}

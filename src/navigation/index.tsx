import { NavigationContainer } from '@react-navigation/native';
import {
  NativeStackScreenProps,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';

import DdayDetailScreen from '@/components/screens/DdayDetailScreen';
import HomeScreen from '@/components/screens/HomeScreen';

type RootStackParamList = {
  Home: undefined;
  DdayDetail: { id: number };
};

export type ScreenProps<RouteName extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, RouteName>;

const Stack = createNativeStackNavigator<RootStackParamList>();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="DdayDetail"
          component={DdayDetailScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;

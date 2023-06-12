import { memo } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '@screens/Home';

const Stack = createNativeStackNavigator();

const ForYouNavigator: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="HomeStack" component={Home} />
    </Stack.Navigator>
  );
};

export default memo(ForYouNavigator);

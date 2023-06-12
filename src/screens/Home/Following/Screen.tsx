import { memo } from 'react';

import { Text, View } from 'native-base';

export const HomeScreen: React.FC = () => {
  return (
    <View>
      <Text>Following</Text>
    </View>
  );
};

export default memo(HomeScreen);

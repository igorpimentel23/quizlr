import { memo } from 'react';
import { Text, View } from 'native-base';

const BlankPage: React.FC<{ route: { name: string } }> = ({ route }) => {
  return (
    <View>
      <Text>{route.name}</Text>
    </View>
  );
};

export default memo(BlankPage);

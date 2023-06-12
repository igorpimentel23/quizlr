import { memo, useMemo } from 'react';
import {
  MaterialTopTabBarProps,
  MaterialTopTabNavigationOptions,
  createMaterialTopTabNavigator,
} from '@react-navigation/material-top-tabs';
import { moderateScale } from 'react-native-size-matters';
import { useTheme } from 'styled-components';
import Search from '@assets/icons/search.svg';

import { TabBar } from '@components/TabBar';
import { Timer } from '@components/Timer';
import { useTimer } from '@contexts/TimerContext';
import FollowingNavigator from './FollowingNavigator';
import ForYouNavigator from './ForYouNavigator';

const TabBarComponent: React.FC<MaterialTopTabBarProps> = (props) => {
  const { seconds } = useTimer();

  return (
    <TabBar
      {...props}
      rightItem={<Search />}
      leftItem={<Timer timeInSeconds={seconds} />}
    />
  );
};

const Tab = createMaterialTopTabNavigator();

const HomeNavigator: React.FC = () => {
  const theme = useTheme();

  const screenOptions: MaterialTopTabNavigationOptions = useMemo(
    () => ({
      tabBarStyle: {
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 0,
        marginBottom: theme?.margin?.raw?.md || moderateScale(16),
        width: moderateScale(200),
        backgroundColor: theme?.colors?.background || '#000',
      },
      tabBarLabelStyle: {
        paddingHorizontal: moderateScale(5),
        fontSize: theme?.fonts.sizes.raw.xl || moderateScale(18),
        textTransform: 'capitalize',
        color: theme?.colors?.text || '#fff',
      },
      tabBarItemStyle: {
        width: moderateScale(100),
      },
      tabBarIndicatorContainerStyle: {
        maxWidth: moderateScale(50),
        left: '25%',
        transform: [{ translateX: moderateScale(2.5) }],
      },
      tabBarIndicatorStyle: {
        backgroundColor: theme?.colors?.text || '#fff',
      },
    }),
    [
      theme?.colors?.background,
      theme?.colors?.text,
      theme?.fonts.sizes.raw.xl,
      theme?.margin?.raw?.md,
    ],
  );

  return (
    <Tab.Navigator tabBar={TabBarComponent} screenOptions={screenOptions}>
      <Tab.Screen name="Following" component={FollowingNavigator} />
      <Tab.Screen name="For You" component={ForYouNavigator} />
    </Tab.Navigator>
  );
};

export default memo(HomeNavigator);

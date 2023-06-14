import { memo, useMemo } from 'react';
import {
  MaterialTopTabBarProps,
  MaterialTopTabNavigationOptions,
  createMaterialTopTabNavigator,
} from '@react-navigation/material-top-tabs';
import { Platform } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import { useTheme } from 'styled-components';
import Search from '@assets/icons/search.svg';

import { TabBar } from '@components/TabBar';
import { Timer } from '@components/Timer';
import { useTimer } from '@contexts/TimerContext';
import { Following } from '@screens/Home/Following';
import { ForYou } from '@screens/Home/ForYou';

const TabBarComponent: React.FC<MaterialTopTabBarProps> = (props) => {
  const { seconds } = useTimer();
  const theme = useTheme();

  return (
    <TabBar
      {...props}
      rightItem={
        <Search color={theme?.colors.text} fill={theme?.colors.text} />
      }
      leftItem={<Timer timeInSeconds={seconds} />}
    />
  );
};

const Tab = createMaterialTopTabNavigator();

const HomeNavigator: React.FC = () => {
  const theme = useTheme();

  const screenOptions: MaterialTopTabNavigationOptions = useMemo(
    () => ({
      tabBarAllowFontScaling: false,
      tabBarStyle: {
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: Platform.OS === 'android' ? moderateScale(20) : 0,
        marginBottom: theme?.margin?.raw?.md || moderateScale(16),
        width: moderateScale(220),
        backgroundColor: theme?.colors?.background || '#000',
        shadowColor: 'transparent',
      },
      tabBarLabelStyle: {
        paddingHorizontal: moderateScale(5),
        fontSize: theme?.fonts.sizes.raw.xl || moderateScale(18),
        textTransform: 'capitalize',
        color: theme?.colors?.text || '#fff',
      },
      tabBarItemStyle: {
        width: moderateScale(110),
      },
      tabBarIndicatorContainerStyle: {
        maxWidth: moderateScale(55),
        left: '25%',
        transform: [{ translateX: moderateScale(2.5) }],
      },
      tabBarIndicatorStyle: {
        backgroundColor: theme?.colors?.text || '#fff',
        height: moderateScale(4),
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
      <Tab.Screen name="Following" component={Following} />
      <Tab.Screen name="For You" component={ForYou} />
    </Tab.Navigator>
  );
};

export default memo(HomeNavigator);

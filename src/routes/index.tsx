import { memo, useMemo } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import { moderateScale } from 'react-native-size-matters';
import { useTheme } from 'styled-components';
import { TabIcon } from '@components/TabIcon';
import { TabBarIconProps } from '@components/TabIcon/Component';
import { Blank } from '@screens/Blank';
import HomeNavigator from './HomeNavigator';

const HomeIcon: React.FC<TabBarIconProps> = (props) => (
  <TabIcon name="home" {...props} />
);
const DiscoverIcon: React.FC<TabBarIconProps> = (props) => (
  <TabIcon name="discover" {...props} />
);
const ActivityIcon: React.FC<TabBarIconProps> = (props) => (
  <TabIcon name="activity" {...props} />
);
const BookmarksIcon: React.FC<TabBarIconProps> = (props) => (
  <TabIcon name="bookmarks" {...props} />
);
const ProfileIcon: React.FC<TabBarIconProps> = (props) => (
  <TabIcon name="profile" {...props} />
);

const Tab = createBottomTabNavigator();

const Routes: React.FC = () => {
  const theme = useTheme();

  const screenOptions = useMemo(
    () => ({
      headerShown: false,
      tabBarStyle: {
        height: moderateScale(45),
        backgroundColor: theme?.colors?.background || '#000',
      },
      tabBarItemStyle: {
        height: moderateScale(45),
      },
      tabBarLabelStyle: {
        fontSize: theme?.fonts.sizes.raw.xxxs || moderateScale(10),
        fontFamily: theme?.fonts.family.medium,
      },
      tabBarActiveTintColor: theme?.colors?.text || '#fff',
    }),
    [
      theme?.colors?.background,
      theme?.colors?.text,
      theme?.fonts.family.medium,
      theme?.fonts.sizes.raw.xxxs,
    ],
  );

  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen
          name="Home"
          options={{
            tabBarIcon: HomeIcon,
          }}
          component={HomeNavigator}
        />
        <Tab.Screen
          name="Discover"
          options={{
            tabBarIcon: DiscoverIcon,
          }}
          component={Blank}
        />
        <Tab.Screen
          name="Activity"
          options={{
            tabBarIcon: ActivityIcon,
          }}
          component={Blank}
        />
        <Tab.Screen
          name="Bookmarks"
          options={{
            tabBarIcon: BookmarksIcon,
          }}
          component={Blank}
        />
        <Tab.Screen
          name="Profile"
          options={{
            tabBarIcon: ProfileIcon,
          }}
          component={Blank}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default memo(Routes);

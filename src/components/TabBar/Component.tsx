import { MaterialTopTabBarProps } from '@react-navigation/material-top-tabs';
import {
  ParamListBase,
  TabNavigationState,
  useTheme as useNavigationTheme,
} from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import { TabBar, TabBarIndicator } from 'react-native-tab-view';
import { useTheme } from 'styled-components';
import { Container, LeftContainer, RightContainer } from './style';

const styles = StyleSheet.create({
  icon: {
    height: 24,
    width: 24,
  },
});

interface TabBarComponentProps extends MaterialTopTabBarProps {
  leftItem?: React.ReactNode;
  rightItem?: React.ReactNode;
}

const TabBarComponent: React.FC<TabBarComponentProps> = ({
  state,
  navigation,
  descriptors,
  leftItem,
  rightItem,
  ...rest
}) => {
  const { colors } = useNavigationTheme();
  const theme = useTheme();

  const focusedOptions = descriptors[state.routes[state.index].key].options;

  const activeColor = focusedOptions.tabBarActiveTintColor ?? colors.text;
  const inactiveColor = 'rgba(255, 255, 255, 0.3)';

  return (
    <Container>
      {leftItem && <LeftContainer>{leftItem}</LeftContainer>}
      <TabBar
        {...rest}
        navigationState={state}
        scrollEnabled={focusedOptions.tabBarScrollEnabled}
        bounces={focusedOptions.tabBarBounces}
        activeColor={activeColor}
        inactiveColor={inactiveColor}
        pressColor={focusedOptions.tabBarPressColor}
        pressOpacity={focusedOptions.tabBarPressOpacity}
        tabStyle={focusedOptions.tabBarItemStyle}
        indicatorStyle={[
          { backgroundColor: colors.primary },
          focusedOptions.tabBarIndicatorStyle,
        ]}
        gap={focusedOptions.tabBarGap}
        android_ripple={focusedOptions.tabBarAndroidRipple}
        indicatorContainerStyle={focusedOptions.tabBarIndicatorContainerStyle}
        contentContainerStyle={focusedOptions.tabBarContentContainerStyle}
        style={[
          {
            paddingHorizontal: 10,
            backgroundColor: colors.card,
          },
          focusedOptions.tabBarStyle,
        ]}
        getAccessibilityLabel={({ route }) =>
          descriptors[route.key].options.tabBarAccessibilityLabel
        }
        getTestID={({ route }) => descriptors[route.key].options.tabBarTestID}
        onTabPress={({ route, preventDefault }) => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (event.defaultPrevented) {
            preventDefault();
          }
        }}
        onTabLongPress={({ route }) =>
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          })
        }
        renderIcon={({ route, focused, color }) => {
          const { options } = descriptors[route.key];

          if (options.tabBarShowIcon === false) {
            return null;
          }

          if (options.tabBarIcon !== undefined) {
            const icon = options.tabBarIcon({ focused, color });

            return (
              <View style={[styles.icon, options.tabBarIconStyle]}>{icon}</View>
            );
          }

          return null;
        }}
        renderLabel={({ route, color, focused }) => {
          const { options } = descriptors[route.key];

          if (options.tabBarShowLabel === false) {
            return null;
          }

          const label = route.name;

          return (
            <Text
              style={[
                {
                  color,
                  fontFamily: focused
                    ? theme?.fonts.family.bold
                    : theme?.fonts.family.regular,
                },
                options.tabBarLabelStyle,
              ]}
              allowFontScaling={options.tabBarAllowFontScaling}
            >
              {label}
            </Text>
          );
        }}
        renderBadge={({ route }) => {
          const { tabBarBadge } = descriptors[route.key].options;

          return tabBarBadge?.() ?? null;
        }}
        renderIndicator={({ navigationState, ...navigationRest }) => {
          return focusedOptions.tabBarIndicator ? (
            focusedOptions.tabBarIndicator({
              state: navigationState as TabNavigationState<ParamListBase>,
              ...navigationRest,
            })
          ) : (
            <TabBarIndicator
              navigationState={navigationState}
              {...navigationRest}
            />
          );
        }}
      />
      {rightItem && <RightContainer>{rightItem}</RightContainer>}
    </Container>
  );
};

export default TabBarComponent;

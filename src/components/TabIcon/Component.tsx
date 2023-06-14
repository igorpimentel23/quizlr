import Bookmarks from '@assets/icons/bookmark.svg';
import Discover from '@assets/icons/compass.svg';
import Home from '@assets/icons/home.svg';
import Profile from '@assets/icons/person.svg';
import Activity from '@assets/icons/timer.svg';

const component = {
  home: Home,
  discover: Discover,
  activity: Activity,
  bookmarks: Bookmarks,
  profile: Profile,
};

export interface TabBarIconProps {
  focused: boolean;
  color: string;
  size: number;
}

interface TabIconProps extends TabBarIconProps {
  name: keyof typeof component;
}

const TabIconComponent: React.FC<TabIconProps> = ({
  name,
  focused,
  color,
  ...rest
}) => {
  const Icon = component[name];

  return (
    <Icon
      opacity={focused ? 1 : 0.4}
      {...rest}
      fill={color}
      color={color}
      fillRule="evenodd"
    />
  );
};

export default TabIconComponent;

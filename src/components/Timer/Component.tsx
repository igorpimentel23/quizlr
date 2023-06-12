import { memo, useCallback, useMemo } from 'react';
import { formatDistanceStrict } from 'date-fns';

import { useTheme } from 'styled-components';
import Timer from '@assets/icons/timer.svg';
import { Container, TimeText } from './styles';

interface TimerComponentProps {
  timeInSeconds: number;
}

const TimerComponent: React.FC<TimerComponentProps> = ({ timeInSeconds }) => {
  const theme = useTheme();
  const formatSeconds = useCallback((seconds: number) => {
    const date = new Date();
    const futureDate = new Date(date.getTime() + seconds * 1000);

    return formatDistanceStrict(date, futureDate).replace(
      /\s(seconds?|minutes?|hours?|days?|months?|years?)/g,
      (_, p1) => p1[0],
    );
  }, []);

  const seconds = useMemo(
    () => formatSeconds(timeInSeconds),
    [formatSeconds, timeInSeconds],
  );

  return (
    <Container>
      <Timer
        color={theme?.colors.secondaryText}
        fill={theme?.colors.secondaryText}
      />
      <TimeText>{seconds}</TimeText>
    </Container>
  );
};

export default memo(TimerComponent);

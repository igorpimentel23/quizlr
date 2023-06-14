import { memo } from 'react';
import { McqsProvider } from '@contexts/McqContext';
import { ForYouScreen } from './Screen';

const ForYouContainer: React.FC = () => {
  return (
    <McqsProvider>
      <ForYouScreen />
    </McqsProvider>
  );
};

export default memo(ForYouContainer);

import { memo } from 'react';
import { FlashcardsProvider } from '@contexts/FlashcardContext';

import { FollowingScreen } from './Screen';

const FollowingContainer: React.FC = () => (
  <FlashcardsProvider>
    <FollowingScreen />
  </FlashcardsProvider>
);

export default memo(FollowingContainer);

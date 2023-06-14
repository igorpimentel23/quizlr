import { memo } from 'react';
import { ScrollScreen } from '@components/ScrollScreen';
import { useFlashcards } from '@contexts/FlashcardContext';

export const FollowingScreen: React.FC = () => {
  const Questions = useFlashcards();

  return (
    <ScrollScreen
      items={Questions.flashCards}
      fetchItem={Questions.getFlashCard}
    />
  );
};

export default memo(FollowingScreen);

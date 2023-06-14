import { memo } from 'react';
import { ScrollScreen } from '@components/ScrollScreen';
import { useMcqs } from '@contexts/McqContext';

export const ForYouScreen: React.FC = () => {
  const Questions = useMcqs();

  return (
    <ScrollScreen
      items={Questions.mcqs}
      fetchItem={Questions.getMcq}
      fetchAnswer={Questions.fetchAnswer}
    />
  );
};

export default memo(ForYouScreen);

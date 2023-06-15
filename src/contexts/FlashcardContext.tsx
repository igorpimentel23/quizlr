import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';

import { useToast } from 'native-base';
import api from '@services/api';
import { FlashCardQuestionType } from 'types/FlashcardQuestionType';
import { GenericCallableType } from 'types/Global';

interface FlashcardsProps {
  getFlashCard: GetFlashCardCallableType;
  flashCards: FlashCardQuestionType[];
}

interface QuestionProviderProps {
  children: React.ReactNode;
}

type GetFlashCardCallableType = GenericCallableType<{
  (): Promise<boolean>;
}>;

export const FlashcardsContext = createContext<FlashcardsProps>(
  {} as FlashcardsProps,
);

export const FlashcardsProvider: React.FC<QuestionProviderProps> = ({
  children,
}) => {
  const toast = useToast();
  const [flashCards, setFlashCards] = useState<FlashCardQuestionType[]>([]);
  const [isFetchingFlashCard, setIsFetchingFlashCard] = useState(false);

  const getFlashCard: GetFlashCardCallableType = useCallback(async () => {
    let successful = false;
    setIsFetchingFlashCard(true);

    try {
      const { data } = await api.get<FlashCardQuestionType>('/following');

      setFlashCards((prev) => [...prev, data]);
      successful = true;
    } catch {
      successful = false;
      toast.show({
        description: 'Something went wrong while fetching the question.',
        placement: 'top',
        bgColor: 'error',
      });
    } finally {
      setIsFetchingFlashCard(false);
    }

    return successful;
  }, [toast]);

  return (
    <FlashcardsContext.Provider
      value={useMemo(() => {
        getFlashCard.isLoading = isFetchingFlashCard;

        return {
          getFlashCard,
          flashCards,
        };
      }, [flashCards, getFlashCard, isFetchingFlashCard])}
    >
      {children}
    </FlashcardsContext.Provider>
  );
};

export const useFlashcards = (): FlashcardsProps => {
  const context = useContext(FlashcardsContext);

  if (!context) {
    // eslint-disable-next-line no-console
    console.error('useFlashcards must be within FlashcardsProvider');
  }

  return context;
};

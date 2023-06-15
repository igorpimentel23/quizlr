import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';

import { useToast } from 'native-base';
import api from '@services/api';
import { GenericCallableType } from 'types/Global';
import { MultipleChoiceQuestionType } from 'types/MultipleChoiceQuestionType';

interface FetchAnswerResponse {
  correct_options: { answer: string; id: string }[];
  id: number;
}

type GetMcqCallableType = GenericCallableType<{
  (): Promise<boolean>;
}>;

type FetchAnswerCallableType = (id: number) => Promise<string>;

interface McqsProps {
  getMcq: GetMcqCallableType;
  mcqs: MultipleChoiceQuestionType[];
  fetchAnswer: FetchAnswerCallableType;
}

interface McqsProviderProps {
  children: React.ReactNode;
}

export const McqsContext = createContext<McqsProps>({} as McqsProps);

export const McqsProvider: React.FC<McqsProviderProps> = ({ children }) => {
  const toast = useToast();
  const [mcqs, setMcqs] = useState<MultipleChoiceQuestionType[]>([]);
  const [isFetchingMcq, setIsFetchingMcq] = useState(false);

  const getMcq: GetMcqCallableType = useCallback(async () => {
    let successful = false;
    setIsFetchingMcq(true);

    try {
      const { data } = await api.get<MultipleChoiceQuestionType>('/for_you');

      setMcqs((prev) => [...prev, data]);
      successful = true;
    } catch {
      successful = false;
      toast.show({
        description: 'Something went wrong while fetching the question.',
        placement: 'top',
        bgColor: 'error',
      });
    } finally {
      setIsFetchingMcq(false);
    }

    return successful;
  }, [toast]);

  const fetchAnswer: FetchAnswerCallableType = useCallback(
    async (id: number) => {
      let successful = '';

      try {
        const { data } = await api.get<FetchAnswerResponse>('/reveal', {
          params: { id },
        });

        successful = data?.correct_options[0]?.id ?? '';
      } catch {
        toast.show({
          description: 'Something went wrong while fetching the answer.',
          placement: 'top',
          bgColor: 'error',
        });
      }

      return successful;
    },
    [toast],
  );

  return (
    <McqsContext.Provider
      value={useMemo(() => {
        getMcq.isLoading = isFetchingMcq;

        return {
          getMcq,
          mcqs,
          fetchAnswer,
        };
      }, [fetchAnswer, getMcq, isFetchingMcq, mcqs])}
    >
      {children}
    </McqsContext.Provider>
  );
};

export const useMcqs = (): McqsProps => {
  const context = useContext(McqsContext);

  if (!context) {
    // eslint-disable-next-line no-console
    console.error('useMcqs must be within McqsProvider');
  }

  return context;
};

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';
import { AxiosError } from 'axios';
import { useToast } from 'native-base';
import api from '@services/api';
import {
  GenericCallableType,
  UnprocessableEntityErrorType,
} from 'types/Global';
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
  controller: AbortController;
}

interface McqsProviderProps {
  children: React.ReactNode;
}

export const McqsContext = createContext<McqsProps>({} as McqsProps);

const controller = new AbortController();

export const McqsProvider: React.FC<McqsProviderProps> = ({ children }) => {
  const toast = useToast();
  const [mcqs, setMcqs] = useState<MultipleChoiceQuestionType[]>([]);
  const [isFetchingMcq, setIsFetchingMcq] = useState(false);

  const getMcq: GetMcqCallableType = useCallback(async () => {
    let successful = false;
    setIsFetchingMcq(true);

    try {
      const { data } = await api.get<MultipleChoiceQuestionType>('/for_you', {
        signal: controller.signal,
      });
      setMcqs((prev) => [...prev, data]);
      successful = true;
    } catch (e) {
      const { response } = e as AxiosError;

      successful = false;
      toast.show({
        description:
          (response?.data as UnprocessableEntityErrorType)?.message ||
          'Something went wrong',
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
          params: {
            id,
          },
          signal: controller.signal,
        });

        successful = data?.correct_options[0]?.id ?? '';
      } catch (e) {
        const { response } = e as AxiosError;

        toast.show({
          description:
            (response?.data as UnprocessableEntityErrorType)?.message ||
            'Something went wrong',
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
          controller,
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

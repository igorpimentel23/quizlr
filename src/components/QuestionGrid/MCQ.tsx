import { memo, useCallback } from 'react';
import { Spinner, VStack } from 'native-base';
import { ColorType } from 'native-base/lib/typescript/components/types';
import { useTheme } from 'styled-components';
import CheckIcon from '@assets/icons/check.svg';
import ErrorIcon from '@assets/icons/error.svg';
import {
  AnswerButton,
  AnswerButtonText,
  QuestionContainer,
  QuestionText,
} from './styles';

interface MCQProps {
  question: string;
  options: {
    id: string;
    answer: string;
  }[];
  setSelectedAnswer: (id: string) => void;
  selectedAnswer?: string | null;
  correctAnswer?: string | null;
  isAnswerLoading?: boolean;
}

const MCQ: React.FC<MCQProps> = ({
  question,
  options,
  setSelectedAnswer,
  selectedAnswer,
  correctAnswer,
  isAnswerLoading,
}) => {
  const theme = useTheme();

  const backgroundColor = useCallback(
    (id: string): ColorType => {
      if (correctAnswer && correctAnswer === id) {
        return theme?.colors?.green[400] as ColorType;
      }
      if (
        correctAnswer &&
        selectedAnswer !== correctAnswer &&
        selectedAnswer === id
      ) {
        return theme?.colors?.error as ColorType;
      }

      return theme?.colors?.tertiaryBackground as ColorType;
    },
    [
      correctAnswer,
      selectedAnswer,
      theme?.colors?.error,
      theme?.colors?.green,
      theme?.colors?.tertiaryBackground,
    ],
  );

  return (
    <>
      <QuestionContainer>
        <QuestionText>{question}</QuestionText>
      </QuestionContainer>
      <VStack space={2}>
        {options.map((option) => (
          <AnswerButton
            key={option.id}
            onPress={() =>
              isAnswerLoading ? null : setSelectedAnswer(option.id)
            }
            bgColor={backgroundColor(option.id)}
          >
            <AnswerButtonText>{option.answer}</AnswerButtonText>
            {isAnswerLoading && <Spinner />}
            {correctAnswer && correctAnswer === option.id && (
              <CheckIcon fillOpacity={0.6} fill={theme?.colors?.text} />
            )}
            {correctAnswer &&
              selectedAnswer !== correctAnswer &&
              selectedAnswer === option.id && (
                <ErrorIcon fillOpacity={0.6} fill={theme?.colors?.text} />
              )}
          </AnswerButton>
        ))}
      </VStack>
    </>
  );
};

export default memo(MCQ);

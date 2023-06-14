import { LegacyRef, memo, useCallback, useMemo, useRef, useState } from 'react';
import { Button, Divider, HStack, VStack, View } from 'native-base';

import FlipCard from 'react-native-flip-card';
import { moderateScale } from 'react-native-size-matters';
import { useTheme } from 'styled-components';
import BookmarkIcon from '@assets/icons/bookmark.svg';
import ChevronLeft from '@assets/icons/chevron-left.svg';
import FlipIcon from '@assets/icons/circle-arrow.svg';
import CommentIcon from '@assets/icons/comment.svg';
import HeartIcon from '@assets/icons/heart.svg';
import PlaylistIcon from '@assets/icons/playlist.svg';
import ReplyIcon from '@assets/icons/reply.svg';
import ScrollIcon from '@assets/icons/scroll.svg';
import { IconButton } from '@components/IconButton';

import { FlashCardQuestionType } from 'types/FlashcardQuestionType';
import { MultipleChoiceQuestionType } from 'types/MultipleChoiceQuestionType';
import MCQ from './MCQ';
import {
  Container,
  RightFloatingContainer,
  Gradient,
  LeftFloatingContainer,
  CardContentContainer,
  Description,
  DescriptionBold,
  DescriptionContainer,
  PlaylistContainer,
  PlaylistTitle,
  QuestionText,
  UserName,
  AnswerTitle,
  AnswerText,
  RatingText,
  RatingButtonText,
} from './styles';

const ratingButtonColors = [
  'orange.500',
  'orange.400',
  'yellow.400',
  'green.600',
  'green.500',
];

interface FlipCardRef {
  state: {
    isFlipped: boolean;
  };
}

interface QuestionGridComponentProps {
  question: FlashCardQuestionType | MultipleChoiceQuestionType;
  fetchAnswer?: (id: number) => Promise<string>;
}

export const QuestionGridComponent: React.FC<QuestionGridComponentProps> = ({
  question,
  fetchAnswer,
}) => {
  const ref = useRef<FlipCardRef>(null);
  const theme = useTheme();
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isAnswerLoading, setIsAnswerLoading] = useState(false);
  const [flip, setFlip] = useState(false);
  const [correctAnswer, setCorrectAnswer] = useState<string | undefined>();

  const description = useMemo(
    () => question?.description?.split('#'),
    [question?.description],
  );

  const handleAnswer = useCallback((id: string) => {
    setSelectedAnswer((prev) => prev ?? id);
    setFlip((prev) => !prev);
  }, []);

  const handleFetchAnswer = useCallback(async () => {
    if (ref?.current?.state?.isFlipped === false && fetchAnswer) {
      setIsAnswerLoading(true);
      const response = await fetchAnswer?.(question.id);
      setCorrectAnswer(response);
      setIsAnswerLoading(false);
    }
  }, [fetchAnswer, question.id]);

  return (
    <View flex={1}>
      <Container>
        <FlipCard
          ref={ref as unknown as LegacyRef<FlipCard>}
          onFlipStart={handleFetchAnswer}
          clickable={!isAnswerLoading}
          flipHorizontal
          flipVertical={false}
          flip={flip}
          friction={99}
        >
          <Gradient>
            <CardContentContainer>
              {question.type === 'flashcard' ? (
                <QuestionText>{question.flashcard_front}</QuestionText>
              ) : (
                <MCQ
                  question={question.question}
                  options={question.options}
                  setSelectedAnswer={handleAnswer}
                />
              )}
            </CardContentContainer>
          </Gradient>
          <Gradient>
            <CardContentContainer>
              {question.type === 'flashcard' ? (
                <View flex={1} justifyContent="space-between">
                  <View maxH="83%" overflow="hidden">
                    <QuestionText>{question.flashcard_front}</QuestionText>
                    <Divider my={6} bgColor={theme?.colors?.secondaryText} />
                    <AnswerTitle>Answer</AnswerTitle>
                    <AnswerText>{question.flashcard_back}</AnswerText>
                  </View>
                  <View pt={2} mt="auto">
                    <RatingText>How well did you know this?</RatingText>
                    <HStack space={2} mt={2}>
                      {Array.from({ length: 5 }).map((_, index) => (
                        <Button
                          key={index} // eslint-disable-line react/no-array-index-key
                          flex={1}
                          py={4}
                          bgColor={ratingButtonColors[index]}
                        >
                          <RatingButtonText>{index + 1}</RatingButtonText>
                        </Button>
                      ))}
                    </HStack>
                  </View>
                </View>
              ) : (
                <MCQ
                  question={question.question}
                  options={question.options}
                  setSelectedAnswer={() => setFlip((prev) => !prev)}
                  selectedAnswer={selectedAnswer}
                  isAnswerLoading={isAnswerLoading}
                  correctAnswer={correctAnswer}
                />
              )}
            </CardContentContainer>
          </Gradient>
        </FlipCard>
        <RightFloatingContainer>
          <VStack space={5}>
            <IconButton icon={<ScrollIcon />} />
            <IconButton
              text={87}
              icon={
                <HeartIcon
                  height={moderateScale(26)}
                  width={moderateScale(26)}
                  fill={theme?.colors.text}
                />
              }
            />
            <IconButton
              text={2}
              icon={
                <CommentIcon
                  height={moderateScale(26)}
                  width={moderateScale(26)}
                  fill={theme?.colors.text}
                />
              }
            />
            <IconButton
              text={203}
              icon={
                <BookmarkIcon
                  height={moderateScale(26)}
                  width={moderateScale(26)}
                  fill={theme?.colors.text}
                />
              }
            />
            <IconButton
              text={17}
              icon={
                <ReplyIcon
                  height={moderateScale(26)}
                  width={moderateScale(26)}
                  fill={theme?.colors.text}
                />
              }
            />
            <IconButton
              text="Flip"
              icon={
                <FlipIcon
                  height={moderateScale(34)}
                  width={moderateScale(34)}
                  fill={theme?.colors.text}
                />
              }
              onPress={() =>
                isAnswerLoading ? null : setFlip((prev) => !prev)
              }
            />
          </VStack>
        </RightFloatingContainer>
        <LeftFloatingContainer>
          <UserName>{question.user.name}</UserName>
          <DescriptionContainer>
            <Description>{description[0]}</Description>
            <DescriptionBold>#{description[1]}</DescriptionBold>
          </DescriptionContainer>
        </LeftFloatingContainer>
      </Container>
      <PlaylistContainer>
        <PlaylistIcon fill={theme?.colors.white} />
        <PlaylistTitle>Playlist • {question.playlist}</PlaylistTitle>
        <ChevronLeft fill={theme?.colors.white} />
      </PlaylistContainer>
    </View>
  );
};

export default memo(QuestionGridComponent);

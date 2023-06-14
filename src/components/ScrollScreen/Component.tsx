import { memo, useEffect, useState } from 'react';
import { FlatList, Spinner, View } from 'native-base';
import { Platform } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import { useTheme } from 'styled-components';
import { QuestionGrid } from '@components/QuestionGrid';
import { FlashCardQuestionType } from 'types/FlashcardQuestionType';
import { MultipleChoiceQuestionType } from 'types/MultipleChoiceQuestionType';

interface ScrollScreenComponentProps {
  items: Array<FlashCardQuestionType | MultipleChoiceQuestionType>;
  fetchItem: () => Promise<boolean>;
  fetchAnswer?: (id: number) => Promise<string>;
}

const ScrollScreenComponent: React.FC<ScrollScreenComponentProps> = ({
  items,
  fetchItem,
  fetchAnswer,
}) => {
  const theme = useTheme();
  const [containerHeight, setContainerHeight] = useState(0);

  useEffect(() => {
    if (items?.length < 3) {
      fetchItem();
    }
  }, [items?.length]); // eslint-disable-line react-hooks/exhaustive-deps

  if (items?.length < 3)
    return (
      <View
        onLayout={({ nativeEvent }) =>
          setContainerHeight(nativeEvent.layout.height)
        }
        flex={1}
        justifyContent="center"
        bgColor={theme?.colors.background}
      >
        <Spinner size="lg" color={theme?.colors.text} />
      </View>
    );

  return (
    <FlatList
      flex={1}
      pb={Platform.OS === 'ios' ? 0 : moderateScale(20)}
      data={items}
      keyExtractor={(_, index) => index.toString()}
      pagingEnabled
      onEndReached={() => fetchItem()}
      onEndReachedThreshold={2}
      showsVerticalScrollIndicator={false}
      renderItem={({ item }) => (
        <View height={containerHeight}>
          <QuestionGrid question={item} fetchAnswer={fetchAnswer} />
        </View>
      )}
    />
  );
};

export default memo(ScrollScreenComponent);

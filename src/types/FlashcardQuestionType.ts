import { UserType } from './User';

export type FlashCardQuestionType = {
  type: 'flashcard';
  id: number;
  playlist: string;
  flashcard_front: string;
  flashcard_back: string;
  description: string;
  user: UserType;
};

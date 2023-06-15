import { UserType } from './User';

export type MultipleChoiceQuestionType = {
  type: 'mcq';
  id: number;
  playlist: string;
  description: string;
  question: string;
  options: {
    id: string;
    answer: string;
  }[];
  user: UserType;
};

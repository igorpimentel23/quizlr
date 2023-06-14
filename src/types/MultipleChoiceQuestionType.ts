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
  user: {
    name: string;
  };
};

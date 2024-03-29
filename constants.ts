export interface QuestionType {
  id: number;
  question: string;
  choices: string[];
  correctAnswer: string;
  answer?: string;
}

export const QUESTIONS = [
  {
    id: 1,
    question: 'What color is the sky?',
    choices: ['Red', 'Blue', 'Yellow', 'Green'],
    correctAnswer: 'Blue',
  },
  {
    id: 2,
    question: 'Which color is a banana?',
    choices: ['Purple', 'Yellow', 'Green', 'Blue'],
    correctAnswer: 'Yellow',
  },
  {
    id: 3,
    question: 'What color is the sun?',
    choices: ['Blue', 'Yellow', 'Pink', 'Brown'],
    correctAnswer: 'Yellow',
  },
  {
    id: 4,
    question: 'Which color is grass?',
    choices: ['Red', 'Green', 'Yellow', 'Orange'],
    correctAnswer: 'Green',
  },
  {
    id: 5,
    question: 'What color is an apple?',
    choices: ['Blue', 'Yellow', 'Purple', 'Red'],
    correctAnswer: 'Red',
  },
  {
    id: 6,
    question: 'Which color is a strawberry?',
    choices: ['Pink', 'Blue', 'Red', 'Orange'],
    correctAnswer: 'Red',
  },
  {
    id: 7,
    question: 'What color is the moon at night?',
    choices: ['Brown', 'Yellow', 'White', 'Black'],
    correctAnswer: 'White',
  },
  {
    id: 8,
    question: 'Which color is a firetruck?',
    choices: ['Green', 'Blue', 'Yellow', 'Red'],
    correctAnswer: 'Red',
  },
  {
    id: 9,
    question: 'What color is a frog?',
    choices: ['Blue', 'Green', 'Purple', 'Pink'],
    correctAnswer: 'Green',
  },
  {
    id: 10,
    question: 'Which color is a school bus?',
    choices: ['Brown', 'Yellow', 'Red', 'Green'],
    correctAnswer: 'Yellow',
  },
  {
    id: 11,
    question: '10x10=?',
    choices: ['1', '100', '10', '1000'],
    correctAnswer: '100',
  },
  {
    id: 12,
    question: 'Which color is a cat?',
    choices: ['Purple', 'Orange', 'Pink', 'Green'],
    correctAnswer: 'Orange',
  },
  {
    id: 13,
    question: 'What color is the ocean?',
    choices: ['Green', 'Blue', 'Yellow', 'Pink'],
    correctAnswer: 'Blue',
  },
  {
    id: 14,
    question: 'Which color is a duck?',
    choices: ['Pink', 'Yellow', 'Red', 'Blue'],
    correctAnswer: 'Yellow',
  },
  {
    id: 15,
    question: 'What color is a cow?',
    choices: ['Black', 'Yellow', 'Brown', 'Purple'],
    correctAnswer: 'Brown',
  },
  {
    id: 16,
    question: '10-1',
    choices: ['98', '8', '88', '9'],
    correctAnswer: '9',
  },
  {
    id: 17,
    question: '10-1=?',
    choices: ['9', '1', '2', '3'],
    correctAnswer: '9',
  },
  {
    id: 18,
    question: '1+1=?',
    choices: ['2', '3', '4', '5'],
    correctAnswer: '2',
  },
  {
    id: 19,
    question: 'What color is a cucumber?',
    choices: ['Green', 'Yellow', 'Blue', 'Red'],
    correctAnswer: 'Green',
  },
  {
    id: 20,
    question: 'What color is a pineapple?',
    choices: ['Pink', 'Yellow', 'Red', 'Blue'],
    correctAnswer: 'Yellow',
  },
];

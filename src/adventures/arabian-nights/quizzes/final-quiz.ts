import type { Quiz } from '../../../types';

export const finalQuiz: Quiz = {
  id: 'final-quiz-arabian-nights',
  title: 'Arabian Nights: Final Assessment',
  description: 'A comprehensive quiz covering all chapters of the Arabian Nights adventure.',
  passingScore: 75,
  allowRetry: true,
  questions: [
    // This will be populated as more chapters are added
    {
      id: 'fq1',
      question: 'The Arabian Nights demonstrates that storytelling can be a tool for survival and transformation.',
      type: 'true-false',
      points: 20,
      options: ['True', 'False'],
      correctAnswer: 'True',
      explanation: 'True! Scheherazade uses storytelling not just to survive, but to transform the sultan and save her kingdom, demonstrating the profound power of narrative.',
      relatedLearningPoints: ['lp-9-storytelling-power', 'lp-15-redemption'],
    },
    // Add more questions as chapters are completed
  ],
};

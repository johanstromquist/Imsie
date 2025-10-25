import type { Quiz } from '../../../types';

export const chapter2Quiz: Quiz = {
  id: 'quiz-chapter-2',
  title: 'Chapter 2: The Sophists Quiz',
  description: 'Test your understanding of the Sophists, their teachings, and their impact on Greek thought.',
  passingScore: 70,
  allowRetry: true,

  questions: [
    // Multiple Choice - Historical Context
    {
      id: 'q1',
      question: 'What political system created the demand for Sophistic education in Athens?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'Monarchy',
        'Oligarchy',
        'Democracy',
        'Tyranny',
      ],
      correctAnswer: 'Democracy',
      explanation: 'Athenian democracy required citizens to speak persuasively in public assemblies and law courts, creating high demand for education in rhetoric and argumentation. The Sophists emerged to meet this need.',
      relatedLearningPoints: ['lp-ch2-1-democracy', 'lp-ch2-2-democracy-rhetoric'],
    },

    // True/False - Sophistic Claims
    {
      id: 'q2',
      question: 'The Sophists claimed that arete (excellence/virtue) could be taught through instruction.',
      type: 'true-false',
      points: 10,
      options: ['True', 'False'],
      correctAnswer: 'True',
      explanation: 'True! The Sophists challenged traditional Greek assumptions by claiming that arete could be taught through professional instruction, rather than being an inherited trait of the aristocracy. This was a revolutionary democratizing idea.',
      relatedLearningPoints: ['lp-ch2-3-arete', 'lp-ch2-9-implications'],
    },

    // Multiple Choice - Famous Quote
    {
      id: 'q3',
      question: 'What is Protagoras\'s most famous saying about truth and human judgment?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'Man is the measure of all things',
        'Know thyself',
        'The unexamined life is not worth living',
        'I know that I know nothing',
      ],
      correctAnswer: 'Man is the measure of all things',
      explanation: 'Protagoras\'s statement "Man is the measure of all things" became the foundation of philosophical relativism, arguing that truth depends on individual or cultural perspective rather than objective reality. The other options are associated with Socrates.',
      relatedLearningPoints: ['lp-ch2-4-man-measure', 'lp-ch2-4-relativism'],
    },

    // Multiple Choice - Concepts
    {
      id: 'q4',
      question: 'What is the distinction between physis and nomos in Sophistic thought?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'Physis is human law, nomos is natural law',
        'Physis is nature/natural truth, nomos is convention/human custom',
        'Physis is democracy, nomos is oligarchy',
        'Physis is rhetoric, nomos is philosophy',
      ],
      correctAnswer: 'Physis is nature/natural truth, nomos is convention/human custom',
      explanation: 'The Sophists argued that justice and morality are nomos (convention, human-made rules that vary across cultures) rather than physis (nature, unchanging natural law). This distinction challenged Greek assumptions about universal moral truths.',
      relatedLearningPoints: ['lp-ch2-5-conventionalism', 'lp-ch2-9-implications'],
    },

    // Multiple Choice - Rhetoric and Truth
    {
      id: 'q5',
      question: 'How did Gorgias view the relationship between rhetoric and truth?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'Rhetoric should only be used to communicate truth',
        'Rhetoric is a morally neutral tool that can persuade regardless of truth',
        'Rhetoric is naturally good because it helps people find truth',
        'Rhetoric cannot affect people\'s beliefs or emotions',
      ],
      correctAnswer: 'Rhetoric is a morally neutral tool that can persuade regardless of truth',
      explanation: 'Gorgias compared rhetoric to a drug that can "bewitch the soul," suggesting it is a powerful tool for persuasion independent of truth or morality. This separation of persuasive power from truth troubled philosophers like Plato.',
      relatedLearningPoints: ['lp-ch2-6-rhetoric-power', 'lp-ch2-3-controversy'],
    },

    // Matching - Key Concepts
    {
      id: 'q6',
      question: 'Match each Sophistic argument to its philosophical implication:',
      type: 'matching',
      points: 15,
      correctAnswer: {
        'Man is the measure of all things': 'Truth is relative to individual perspective',
        'Justice is nomos, not physis': 'Moral rules are human constructs that vary across cultures',
        'Rhetoric can make the weaker argument stronger': 'Persuasiveness is separate from truth',
        'Arete can be taught for a fee': 'Education rather than birth determines success',
      },
      explanation: 'Each Sophistic claim had radical implications for Greek thought, challenging assumptions about truth, morality, education, and political authority.',
      relatedLearningPoints: ['lp-ch2-9-implications', 'lp-ch2-4-relativism', 'lp-ch2-5-conventionalism'],
    },

    // Multiple Choice - Dissoi Logoi
    {
      id: 'q7',
      question: 'What Sophistic practice involved arguing both sides of a question?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'Dialectic',
        'Dissoi logoi',
        'Aporia',
        'Elenchus',
      ],
      correctAnswer: 'Dissoi logoi',
      explanation: 'Dissoi logoi (double arguments) was the Sophistic practice of arguing both sides of a question to demonstrate that persuasive cases could be made for opposite positions. This showcased rhetoric as a technical skill independent of discovering truth.',
      relatedLearningPoints: ['lp-ch2-7-dissoi-logoi', 'lp-ch2-7-epideictic'],
    },

    // True/False - Sophistic Skepticism
    {
      id: 'q8',
      question: 'Protagoras claimed certain knowledge about the existence of the gods.',
      type: 'true-false',
      points: 10,
      options: ['True', 'False'],
      correctAnswer: 'False',
      explanation: 'False! Protagoras extended his relativism to religion, claiming that the existence of gods is unknowable. His statement "Concerning the gods, I cannot know whether they exist or do not exist" got him accused of impiety.',
      relatedLearningPoints: ['lp-ch2-8-skepticism'],
    },

    // Multiple Choice - Sophists vs Philosophers
    {
      id: 'q9',
      question: 'What was the key distinction between Sophists and philosophers like Socrates?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'Sophists studied nature while philosophers studied ethics',
        'Sophists claimed to possess and teach wisdom, philosophers claimed to seek wisdom through questioning',
        'Sophists believed in the gods while philosophers were atheists',
        'Sophists were poor while philosophers were wealthy',
      ],
      correctAnswer: 'Sophists claimed to possess and teach wisdom, philosophers claimed to seek wisdom through questioning',
      explanation: 'The distinction between Sophists (who claimed to possess wisdom and charged fees to teach it) and philosophers (who claimed to love and seek wisdom through dialectical questioning) became central to Greek thought. Socrates exemplified this philosophical approach in contrast to the Sophists.',
      relatedLearningPoints: ['lp-ch2-10-sophist-philosopher', 'lp-ch2-10-socratic-reaction'],
    },

    // Multiple Choice - Extreme Position
    {
      id: 'q10',
      question: 'What was the most extreme Sophistic position on justice and power?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'Justice is whatever the gods command',
        'Justice is whatever benefits the stronger party',
        'Justice is discovered through philosophical reasoning',
        'Justice is innate in human nature',
      ],
      correctAnswer: 'Justice is whatever benefits the stronger party',
      explanation: 'The most extreme Sophistic position argued that justice is merely the advantage of the stronger, reducing morality to power politics. If there is no natural justice, law becomes simply organized force. This view would later be challenged by Socrates and Plato.',
      relatedLearningPoints: ['lp-ch2-5-thrasymachus'],
    },

    // Self-Assessment - Analysis
    {
      id: 'q11',
      question: 'Analyze the Sophistic challenge to traditional Greek values. How did their views on relativism, conventionalism, and rhetoric threaten or transform Greek society? Consider both the democratic benefits and philosophical dangers of their teachings.',
      type: 'self-assessment',
      points: 20,
      modelAnswer: 'The Sophists posed a fundamental challenge to traditional Greek values by questioning the existence of objective truth and natural justice. Their relativism democratized knowledge by suggesting that truth depends on perspective rather than aristocratic wisdom or divine revelation. This aligned well with democratic politics where citizens voted on policies without claiming absolute truth. However, their separation of rhetoric from truth created philosophical dangers: if persuasion is independent of truth, then skilled speakers could manipulate citizens with falsehoods. The claim that justice is merely convention (nomos) rather than natural law (physis) threatened the moral foundation of society, potentially reducing ethics to power politics. Yet paradoxically, by challenging aristocratic assumptions about inherited virtue, the Sophists also democratized education and opportunity. Their legacy is thus double-edged: they enabled democratic participation through education while simultaneously raising questions about truth and morality that philosophy would spend centuries trying to resolve.',
      assessmentCriteria: [
        {
          id: 'crit1',
          text: 'Explained Sophistic relativism and its challenge to objective truth',
          points: 7,
        },
        {
          id: 'crit2',
          text: 'Discussed the tension between Sophistic rhetoric and the pursuit of truth',
          points: 7,
        },
        {
          id: 'crit3',
          text: 'Analyzed both democratic benefits and philosophical dangers of Sophistic teaching',
          points: 6,
        },
      ],
      explanation: 'This question explores the complex legacy of the Sophists, who both enabled democratic participation through education and raised fundamental questions about truth, morality, and the purpose of intellectual inquiry that would shape Western philosophy.',
      relatedLearningPoints: ['lp-ch2-4-relativism', 'lp-ch2-5-conventionalism', 'lp-ch2-6-rhetoric-power', 'lp-ch2-9-implications'],
    },

    // True/False - Educational Innovation
    {
      id: 'q12',
      question: 'The Sophists created the first system of higher education in the Western world.',
      type: 'true-false',
      points: 10,
      options: ['True', 'False'],
      correctAnswer: 'True',
      explanation: 'True! The Sophists established the first professional system of higher education in the Western tradition, offering instruction in rhetoric, politics, philosophy, and other subjects for a fee. This professionalization of education was a major cultural innovation.',
      relatedLearningPoints: ['lp-ch2-2-education'],
    },
  ],
};

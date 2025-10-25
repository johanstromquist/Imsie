import type { Quiz } from '../../../types';

export const chapter3Quiz: Quiz = {
  id: 'quiz-chapter-3',
  title: 'Chapter 3: Socrates Quiz',
  description: 'Test your understanding of Socratic philosophy, his method of questioning, and his trial and death.',
  passingScore: 70,
  allowRetry: true,

  questions: [
    // Question 1: Multiple Choice - Socratic Method
    {
      id: 'q1',
      question: 'What is the primary purpose of the Socratic method (elenchus)?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'To teach students by lecturing them on philosophical topics',
        'To expose contradictions in beliefs and reveal ignorance',
        'To win arguments and prove Socrates is always right',
        'To memorize definitions of philosophical terms',
      ],
      correctAnswer: 'To expose contradictions in beliefs and reveal ignorance',
      explanation: 'The Socratic method uses systematic questioning to expose contradictions in a person\'s beliefs, revealing that what seemed like knowledge was actually opinion. This process leads to aporia (puzzlement) and demonstrates we don\'t truly understand concepts we thought we knew.',
      relatedLearningPoints: ['lp-3-2-elenchus', 'lp-3-2-aporia'],
    },

    // Question 2: True/False - Socratic Ignorance
    {
      id: 'q2',
      question: 'Socrates claimed to know nothing, yet the Oracle at Delphi declared him the wisest man in Athens.',
      type: 'true-false',
      points: 10,
      options: ['True', 'False'],
      correctAnswer: 'True',
      explanation: 'True! Socrates was declared the wisest by the Oracle at Delphi. He interpreted this to mean he was wise precisely because he recognized the limits of his knowledge, unlike others who falsely believed they possessed wisdom.',
      relatedLearningPoints: ['lp-3-4-know-nothing'],
    },

    // Question 3: Multiple Choice - Virtue is Knowledge
    {
      id: 'q3',
      question: 'What does Socrates mean by his claim "virtue is knowledge"?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'Virtue comes from reading books and studying',
        'Those who truly know what is good will do it; wrongdoing stems from ignorance',
        'Only educated people can be virtuous',
        'Virtue is the same as having factual knowledge',
      ],
      correctAnswer: 'Those who truly know what is good will do it; wrongdoing stems from ignorance',
      explanation: 'Socrates\'s radical claim "virtue is knowledge" suggests that ethical failures stem from ignorance rather than weakness of will. If someone truly understood what was good, they would choose it, just as someone who understood a path led to a cliff wouldn\'t walk off it.',
      relatedLearningPoints: ['lp-3-3-virtue-knowledge', 'lp-3-4-no-one-willing'],
    },

    // Question 4: Short Answer - Famous Maxim
    {
      id: 'q4',
      question: 'What famous two-word maxim, inscribed at the Temple of Apollo at Delphi, did Socrates adopt as central to his philosophy?',
      type: 'short-answer',
      points: 10,
      correctAnswer: 'Know thyself',
      explanation: '"Know thyself" was inscribed at the Temple of Apollo at Delphi and adopted by Socrates as the foundation of his philosophy. Self-knowledge was essential—before examining the world, we must examine ourselves and recognize our ignorance.',
      relatedLearningPoints: ['lp-3-5-maxims'],
    },

    // Question 5: Multiple Choice - The Examined Life
    {
      id: 'q5',
      question: 'When Socrates said "the unexamined life is not worth living," what did he mean?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'Everyone must become a professional philosopher',
        'People should constantly question their doctors and lawyers',
        'Life without rational self-reflection reduces human existence to mere survival',
        'Only Socrates is capable of living a worthwhile life',
      ],
      correctAnswer: 'Life without rational self-reflection reduces human existence to mere survival',
      explanation: 'Socrates believed that what makes human life valuable is the capacity for rational self-reflection and examination of how we should live. Without this philosophical inquiry, we merely exist like animals rather than truly living as humans.',
      relatedLearningPoints: ['lp-3-4-examined-life', 'lp-3-6-apology-defense'],
    },

    // Question 6: Multiple Choice - Charges Against Socrates
    {
      id: 'q6',
      question: 'What were the formal charges brought against Socrates in 399 BCE?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'Theft and conspiracy against Athens',
        'Corrupting the youth and impiety (believing in false gods)',
        'Treason and military desertion',
        'Teaching rhetoric to enemies of the state',
      ],
      correctAnswer: 'Corrupting the youth and impiety (believing in false gods)',
      explanation: 'Socrates was charged with corrupting the minds of the young and believing in supernatural things of his own invention instead of the gods recognized by the state. These deliberately vague charges allowed the jury to project their political anxieties onto Socrates.',
      relatedLearningPoints: ['lp-3-7-charges', 'lp-3-7-political-context'],
    },

    // Question 7: Multiple Choice - Daimonion
    {
      id: 'q7',
      question: 'What was Socrates\'s "daimonion"?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'A philosophical school he founded',
        'A divine voice that warned him against certain actions',
        'His nickname among Athenian youth',
        'A method of logical reasoning he invented',
      ],
      correctAnswer: 'A divine voice that warned him against certain actions',
      explanation: 'Socrates\'s "daimonion" was a divine sign or voice that warned him against certain actions. This seemed impious to traditional Athenians but to Socrates was evidence of divine favor and guidance.',
      relatedLearningPoints: ['lp-3-7-daimonion'],
    },

    // Question 8: True/False - Trial Verdict
    {
      id: 'q8',
      question: 'Socrates was convicted by an overwhelming majority of the 501-person jury.',
      type: 'true-false',
      points: 10,
      options: ['True', 'False'],
      correctAnswer: 'False',
      explanation: 'False! Socrates was convicted by a narrow margin of only 30 votes (280 guilty, 221 not guilty). This close split suggests Athens was deeply divided about whether he was truly dangerous or whether he had done nothing wrong.',
      relatedLearningPoints: ['lp-3-8-narrow-verdict'],
    },

    // Question 9: Matching - Socratic Principles and Consequences
    {
      id: 'q9',
      question: 'Match each Socratic principle to its consequence in his life:',
      type: 'matching',
      points: 15,
      correctAnswer: {
        '"The unexamined life is not worth living"': 'Refused to stop practicing philosophy even when threatened with death',
        '"Virtue is knowledge"': 'Devoted his life to philosophical education and examination',
        '"Better to suffer injustice than commit it"': 'Refused to escape prison and chose to accept an unjust execution',
        'Questioned everyone\'s claims to knowledge': 'Made powerful enemies who eventually brought him to trial',
      },
      explanation: 'Socrates\'s life demonstrates philosophical integrity—his actions consistently embodied his teachings, even unto death. Each principle led directly to the choices he made.',
      relatedLearningPoints: ['lp-3-11-integrity'],
    },

    // Question 10: Multiple Choice - Why Socrates Refused to Escape
    {
      id: 'q10',
      question: 'Why did Socrates refuse to escape from prison when his friends arranged for it?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'He was too old and tired to flee',
        'He believed escaping would violate the social contract and corrupt his soul',
        'He wanted to become a martyr for philosophy',
        'He thought the guards would catch him',
      ],
      correctAnswer: 'He believed escaping would violate the social contract and corrupt his soul',
      explanation: 'Socrates argued that he had lived his entire life under Athens\'s laws and benefited from them. To break the law now would be unjust and would corrupt his soul—worse than the bodily death awaiting him. He taught that we must never commit injustice, and he had to live by that principle.',
      relatedLearningPoints: ['lp-3-9-crito', 'lp-3-9-consistency'],
    },

    // Question 11: Multiple Choice - Socrates's Last Words
    {
      id: 'q11',
      question: 'What were Socrates\'s enigmatic last words?',
      type: 'multiple-choice',
      points: 10,
      options: [
        '"Philosophy is the practice of dying"',
        '"Crito, we owe a cock to Asclepius"',
        '"The unexamined life is not worth living"',
        '"I know that I know nothing"',
      ],
      correctAnswer: '"Crito, we owe a cock to Asclepius"',
      explanation: 'Socrates\'s last words were "Crito, we owe a cock to Asclepius. Pay the debt and do not forget." This may suggest he saw death as a cure for the disease of mortal life, since Asclepius was the god of healing.',
      relatedLearningPoints: ['lp-3-10-final-words'],
    },

    // Question 12: True/False - Socratic Problem
    {
      id: 'q12',
      question: 'We know Socrates primarily through the writings of his student Plato, creating the "Socratic problem" of distinguishing the historical Socrates from Plato\'s portrayal.',
      type: 'true-false',
      points: 10,
      options: ['True', 'False'],
      correctAnswer: 'True',
      explanation: 'True! The "Socratic problem" arises because Socrates wrote nothing himself. We know him primarily through Plato\'s dialogues, which may blend the historical figure with Plato\'s own philosophical ideas, making it difficult to separate the two.',
      relatedLearningPoints: ['lp-3-12-socratic-problem'],
    },

    // Question 13: Multiple Choice - Socratic Legacy
    {
      id: 'q13',
      question: 'What major shift in philosophy did Socrates initiate?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'From mathematics to logic',
        'From natural philosophy (cosmology) to ethics ("How should one live?")',
        'From Greek philosophy to Roman philosophy',
        'From oral tradition to written dialogues',
      ],
      correctAnswer: 'From natural philosophy (cosmology) to ethics ("How should one live?")',
      explanation: 'Socrates shifted philosophy from cosmology (studying the nature of the universe) to ethics (how humans should live). This ethical turn redirected the entire course of Western philosophy toward questions of virtue, justice, and the good life.',
      relatedLearningPoints: ['lp-3-12-ethical-turn'],
    },

    // Question 14: Self-Assessment - Analyzing Socratic Philosophy
    {
      id: 'q14',
      question: 'Analyze the relationship between Socrates\'s philosophical principles and his decision to accept death rather than escape or compromise. Consider how his teachings about virtue, justice, the examined life, and the care of the soul influenced his final choice.',
      type: 'self-assessment',
      points: 20,
      modelAnswer: 'Socrates\'s decision to accept death rather than escape or abandon philosophy represents the ultimate embodiment of his principles. His teaching that "virtue is knowledge" meant he had to demonstrate philosophical integrity—escaping would prove him a fraud. His belief that "better to suffer injustice than commit it" made breaking the law unthinkable, as it would harm his soul more than execution would harm his body. His claim that "the unexamined life is not worth living" meant that abandoning philosophy to save his life would render that life worthless. Finally, his emphasis on caring for the soul above all external goods meant that preserving his philosophical principles was more important than physical survival. His death transformed him from gadfly to martyr, proving that some ideas are worth dying for.',
      assessmentCriteria: [
        {
          id: 'crit1',
          text: 'Explained how "virtue is knowledge" required Socrates to demonstrate philosophical consistency',
          points: 5,
        },
        {
          id: 'crit2',
          text: 'Discussed how "better to suffer injustice than commit it" prevented him from escaping',
          points: 5,
        },
        {
          id: 'crit3',
          text: 'Connected "the unexamined life is not worth living" to his refusal to abandon philosophy',
          points: 5,
        },
        {
          id: 'crit4',
          text: 'Analyzed how his emphasis on the soul over the body influenced his choice',
          points: 5,
        },
      ],
      explanation: 'This question explores the deep connection between Socratic philosophy and Socrates\'s biographical choices, demonstrating that philosophy was not abstract theory but a way of life that demanded consistency even unto death.',
      relatedLearningPoints: ['lp-3-9-consistency', 'lp-3-11-integrity', 'lp-3-10-martyrdom'],
    },
  ],
};

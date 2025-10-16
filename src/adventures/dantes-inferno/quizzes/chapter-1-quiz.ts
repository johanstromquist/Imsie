import type { Quiz } from '../../../types';

export const chapter1Quiz: Quiz = {
  id: 'quiz-inferno-chapter-1',
  title: 'Chapter 1 Quiz: Limbo',
  description: 'Test your understanding of the First Circle and medieval theology.',
  passingScore: 70,
  allowRetry: true,

  questions: [
    // Question 1
    {
      id: 'q1-limbo-residents',
      question: 'Who resides in Limbo (Circle I)?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'Violent murderers',
        'Virtuous pagans and unbaptized souls',
        'Fraudulent sinners',
        'The wrathful and envious',
      ],
      correctAnswer: 'Virtuous pagans and unbaptized souls',
      explanation: 'Limbo holds those who lived virtuously but lacked Christian baptism: ancient philosophers, unbaptized infants, and pre-Christian righteous people.',
      relatedLearningPoints: ['lp-ch1-5', 'lp-ch1-7'],
    },

    // Question 2
    {
      id: 'q2-limbo-contrapasso',
      question: 'What is the contrapasso for souls in Limbo?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'Physical torture with fire',
        'Eternal longing without hope',
        'Freezing in ice',
        'Being chased by demons',
      ],
      correctAnswer: 'Eternal longing without hope',
      explanation: 'Limbo\'s punishment is absence—awareness of Paradise without ability to reach it. No physical torture, only melancholy unfulfillment.',
      relatedLearningPoints: ['lp-ch1-6', 'lp-ch1-19'],
    },

    // Question 3
    {
      id: 'q3-aristotle-title',
      question: 'Dante calls Aristotle what title?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'The master of those who know',
        'The greatest philosopher',
        'The teacher of virtue',
        'The logician supreme',
      ],
      correctAnswer: 'The master of those who know',
      explanation: 'This phrase shows Dante\'s reverence for Aristotle, whose philosophy dominated medieval Christian thought via Thomas Aquinas.',
      relatedLearningPoints: ['lp-ch1-10'],
    },

    // Question 4
    {
      id: 'q4-six-poets',
      question: 'Dante includes himself among the six greatest poets in the Poets\' Circle.',
      type: 'true-false',
      points: 10,
      options: ['True', 'False'],
      correctAnswer: 'True',
      explanation: 'Homer, Virgil, Horace, Ovid, and Lucan accept Dante as the sixth. This shows both confidence and humility—he ranks himself below the masters.',
      relatedLearningPoints: ['lp-ch1-11'],
    },

    // Question 5
    {
      id: 'q5-saladin-avicenna',
      question: 'Why does Dante include Saladin and Avicenna in Limbo?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'They converted to Christianity before death',
        'He wanted to show Muslims go to Hell',
        'He recognized virtue and wisdom across religions',
        'It was a mistake in the manuscript',
      ],
      correctAnswer: 'He recognized virtue and wisdom across religions',
      explanation: 'Including Muslim figures in noble Limbo was radical. Dante honored intellectual achievement regardless of religion—challenging Crusade-era prejudice.',
      relatedLearningPoints: ['lp-ch1-14', 'lp-ch1-21'],
    },

    // Question 6
    {
      id: 'q6-seven-walls',
      question: 'What does the noble castle with seven walls represent?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'The seven deadly sins',
        'The seven virtues',
        'The seven liberal arts',
        'The seven days of creation',
      ],
      correctAnswer: 'The seven liberal arts',
      explanation: 'The seven walls symbolize the liberal arts (grammar, logic, rhetoric, arithmetic, geometry, music, astronomy)—human knowledge that protects but cannot save.',
      relatedLearningPoints: ['lp-ch1-9'],
    },

    // Question 7
    {
      id: 'q7-charon-ferryman',
      question: 'Who ferries souls across the River Acheron?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'Cerberus',
        'Charon',
        'Minos',
        'Phlegyas',
      ],
      correctAnswer: 'Charon',
      explanation: 'Charon, from Greek mythology, rows souls across Acheron. Dante borrows classical figures to populate his Christian Hell.',
      relatedLearningPoints: ['lp-ch1-3'],
    },

    // Question 8
    {
      id: 'q8-contrapasso-definition',
      question: 'What is "contrapasso"?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'Italian for "justice"',
        'Punishment fitting the crime',
        'The journey through Hell',
        'Dante\'s writing style',
      ],
      correctAnswer: 'Punishment fitting the crime',
      explanation: 'Contrapasso (counter-suffering) means punishments mirror crimes symbolically. The lustful are blown by winds; the wrathful fight eternally.',
      relatedLearningPoints: ['lp-ch1-2', 'lp-ch1-28'],
    },

    // Question 9
    {
      id: 'q9-virgil-fate',
      question: 'How does Virgil feel about being in Limbo?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'He is angry and bitter',
        'He is content and happy',
        'He lives in desire without hope',
        'He doesn\'t care about Paradise',
      ],
      correctAnswer: 'He lives in desire without hope',
      explanation: 'Virgil says, "We are lost without hope, living in desire." He knows Paradise exists but can never reach it—the tragedy of Limbo.',
      relatedLearningPoints: ['lp-ch1-19', 'lp-ch1-20'],
    },

    // Question 10
    {
      id: 'q10-green-meadow',
      question: 'What does the green meadow in Limbo evoke from classical mythology?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'The River Styx',
        'The Elysian Fields',
        'Mount Olympus',
        'Hades\' palace',
      ],
      correctAnswer: 'The Elysian Fields',
      explanation: 'The meadow resembles Elysium from Greek/Roman mythology—a pleasant afterlife for heroes. Dante merges pagan and Christian concepts.',
      relatedLearningPoints: ['lp-ch1-15'],
    },

    // Question 11 (Self-Assessment)
    {
      id: 'q11-theological-tension',
      question: 'Explain why Dante\'s inclusion of pagan philosophers in Limbo creates theological tension with Church doctrine.',
      type: 'self-assessment',
      points: 10,
      modelAnswer: 'Medieval Church doctrine taught that salvation required baptism and faith in Christ ("Extra Ecclesiam nulla salus"). Yet Dante places virtuous pagans like Aristotle and Homer in Limbo—a relatively pleasant part of Hell—and treats them with great respect. This creates tension because Dante is honoring people who, according to strict doctrine, should be condemned. He bends Church teaching by making Limbo dignified rather than torturous, subtly questioning the justice of condemning virtuous people for circumstances beyond their control (being born before Christ). While technically obeying doctrine by placing them in Hell, he honors them as much as possible—showing his personal struggle between reverence for classical wisdom and Christian theology.',
      assessmentCriteria: [
        {
          id: 'criterion-doctrine',
          text: 'Mentioned that Church doctrine required baptism and Christian faith for salvation',
          points: 3,
        },
        {
          id: 'criterion-pagans',
          text: 'Explained that virtuous pagans (like Aristotle, Homer) couldn\'t meet this requirement',
          points: 2,
        },
        {
          id: 'criterion-tension',
          text: 'Identified the tension: Dante reveres these figures but they\'re technically damned',
          points: 3,
        },
        {
          id: 'criterion-limbo-solution',
          text: 'Explained how Dante\'s portrayal of Limbo as dignified/pleasant bends or questions the doctrine',
          points: 2,
        },
      ],
      explanation: 'Dante faces a dilemma: Church doctrine condemned unbaptized pagans, yet he deeply respected classical philosophers and poets. His solution—a dignified Limbo—shows both obedience and quiet resistance. He follows the letter of doctrine (they\'re in Hell) while questioning its spirit (they\'re treated with honor). This theological tension reflects medieval intellectuals\' struggle between faith and reason, Christianity and classical learning.',
      relatedLearningPoints: ['lp-ch1-7', 'lp-ch1-8', 'lp-ch1-24'],
    },

    // Question 12
    {
      id: 'q12-virgil-symbolism',
      question: 'Why can\'t Virgil guide Dante all the way to Paradise?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'He\'s too old and tired',
        'He represents human reason, which cannot achieve salvation alone',
        'God forbids pagans from entering Paradise',
        'Dante must go alone for the final journey',
      ],
      correctAnswer: 'He represents human reason, which cannot achieve salvation alone',
      explanation: 'Virgil symbolizes reason and classical wisdom—valuable but insufficient for salvation. Divine grace (Beatrice) is needed to reach Paradise.',
      relatedLearningPoints: ['lp-ch1-19'],
    },
  ],
};

import type { Quiz } from '../../../types';

/**
 * Prologue Quiz: The Dark Wood
 *
 * Tests understanding of:
 * - Allegory as a literary device
 * - Historical context of Dante's life
 * - Symbolic meanings in the prologue
 * - The role of Virgil as guide
 */
export const prologueQuiz: Quiz = {
  id: 'quiz-inferno-prologue',
  title: 'Prologue Quiz: The Dark Wood',
  description: 'Test your knowledge of the opening of Dante\'s Inferno and its allegorical meanings.',
  passingScore: 70,
  allowRetry: true,

  questions: [
    // Question 1: Dark Wood Symbolism
    {
      id: 'q1-dark-wood-symbol',
      question: 'What does the "dark wood" symbolize in the opening of Inferno?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'A literal forest where Dante got lost',
        'Sin and spiritual confusion',
        'Dante\'s exile from Florence',
        'The wilderness of the human mind',
      ],
      correctAnswer: 'Sin and spiritual confusion',
      explanation: 'In medieval allegory, the dark forest represents spiritual disorientation and sin. Dante is literally lost in woods but allegorically lost in sin.',
      relatedLearningPoints: ['lp-prologue-3', 'lp-prologue-5'],
    },

    // Question 2: Why Virgil
    {
      id: 'q2-why-virgil',
      question: 'Why did Dante choose Virgil as his guide?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'Virgil was Dante\'s personal friend',
        'Virgil wrote the Aeneid, which includes an underworld journey',
        'Virgil was a Christian saint',
        'Virgil was the Pope\'s choice',
      ],
      correctAnswer: 'Virgil wrote the Aeneid, which includes an underworld journey',
      explanation: 'Dante admired Virgil\'s Aeneid, especially Book VI where Aeneas descends to the underworld. Virgil represents human reason and classical wisdom.',
      relatedLearningPoints: ['lp-prologue-14', 'lp-prologue-15'],
    },

    // Question 3: Three Beasts
    {
      id: 'q3-three-beasts',
      question: 'What do the three beasts represent?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'Dante\'s personal enemies',
        'Three types of sin: lust/fraud, pride/violence, and greed',
        'The Christian trinity',
        'Wild animals from Dante\'s nightmares',
      ],
      correctAnswer: 'Three types of sin: lust/fraud, pride/violence, and greed',
      explanation: 'The leopard (lust/fraud), lion (pride/violence), and she-wolf (greed) symbolize the three major categories of sin Dante will encounter in Hell.',
      relatedLearningPoints: ['lp-prologue-7', 'lp-prologue-8', 'lp-prologue-9', 'lp-prologue-10'],
    },

    // Question 4: Virgil's Limitations (True/False)
    {
      id: 'q4-virgil-paradise',
      question: 'Virgil can guide Dante all the way to Paradise.',
      type: 'true-false',
      points: 10,
      options: ['True', 'False'],
      correctAnswer: 'False',
      explanation: 'Virgil represents human reason, which can understand Hell and Purgatory but cannot reach Paradise. Beatrice (divine love/grace) guides Dante through Paradise.',
      relatedLearningPoints: ['lp-prologue-11'],
    },

    // Question 5: Famous Inscription
    {
      id: 'q5-abandon-hope',
      question: 'What does "Lasciate ogne speranza, voi ch\'intrate" mean?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'Welcome to eternal life',
        'Abandon all hope, you who enter',
        'Prepare for judgment day',
        'Only the righteous may pass',
      ],
      correctAnswer: 'Abandon all hope, you who enter',
      explanation: 'This is the most famous line from Dante\'s Inferno. It defines Hell as a place without hope—eternal and unchangeable.',
      relatedLearningPoints: ['lp-prologue-17'],
    },

    // Question 6: The Year 1300
    {
      id: 'q6-year-1300',
      question: 'In what year is the Divine Comedy set?',
      type: 'multiple-choice',
      points: 10,
      options: [
        '1265 (Dante\'s birth)',
        '1300 (A Jubilee year)',
        '1321 (Dante\'s death)',
        '1302 (Dante\'s exile)',
      ],
      correctAnswer: '1300 (A Jubilee year)',
      explanation: 'The journey takes place during Holy Week of 1300, a Jubilee year celebrating forgiveness—ironic timing for a journey through Hell.',
      relatedLearningPoints: ['lp-prologue-2'],
    },

    // Question 7: Italian vs Latin
    {
      id: 'q7-italian-language',
      question: 'Why did Dante write the Divine Comedy in Italian instead of Latin?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'He didn\'t know Latin',
        'The Church required Italian',
        'To make literature accessible to common people',
        'Italian was more prestigious',
      ],
      correctAnswer: 'To make literature accessible to common people',
      explanation: 'Writing in Italian (vernacular) instead of Latin was revolutionary. Dante democratized literature, allowing non-scholars to read complex philosophical and theological ideas.',
      relatedLearningPoints: ['lp-prologue-4'],
    },

    // Question 8: What Virgil Symbolizes
    {
      id: 'q8-virgil-symbolism',
      question: 'What does Virgil symbolize in the journey?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'Divine grace',
        'Human reason and classical wisdom',
        'Political power',
        'Artistic inspiration',
      ],
      correctAnswer: 'Human reason and classical wisdom',
      explanation: 'Virgil represents what human reason can achieve without divine revelation. He shows the limits of philosophy—capable of understanding sin and virtue but not salvation.',
      relatedLearningPoints: ['lp-prologue-11', 'lp-prologue-15'],
    },

    // Question 9: Define Allegory (Self-Assessment)
    {
      id: 'q9-allegory-definition',
      question: 'Define "allegory" and give an example from the Prologue.',
      type: 'self-assessment',
      points: 10,
      modelAnswer: 'Allegory is a literary device where literal events, characters, or objects represent abstract concepts or moral meanings. In the Prologue, the dark forest is an allegory: on the literal level, Dante is lost in woods; on the allegorical level, the forest represents a soul lost in sin and spiritual confusion.',
      assessmentCriteria: [
        {
          id: 'criterion-definition',
          text: 'Defined allegory as a literary device where surface-level narrative has deeper symbolic meaning',
          points: 4,
        },
        {
          id: 'criterion-example',
          text: 'Provided a specific example from the Prologue (e.g., dark forest, three beasts, mountain of light)',
          points: 3,
        },
        {
          id: 'criterion-interpretation',
          text: 'Explained both the literal and symbolic meaning of the example',
          points: 3,
        },
      ],
      explanation: 'Allegory is a literary device where literal events represent abstract concepts. The dark forest is a perfect example: literally, Dante is lost in woods; allegorically, the forest represents a soul lost in sin. This dual meaning is the essence of allegorical writing.',
      relatedLearningPoints: ['lp-prologue-3'],
    },

    // Question 10: Hell as City
    {
      id: 'q10-hell-city',
      question: 'Why does Dante structure Hell as a "city"?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'To make it easier to map',
        'To reflect his obsession with Florentine politics and urban organization',
        'To copy Virgil\'s design',
        'Because medieval people only understood cities',
      ],
      correctAnswer: 'To reflect his obsession with Florentine politics and urban organization',
      explanation: 'Dante was exiled from Florence, a city-state. He reimagines Hell as an organized city to comment on human governance, corruption, and social order.',
      relatedLearningPoints: ['lp-prologue-18'],
    },
  ],
};

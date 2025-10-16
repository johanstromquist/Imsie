import type { Quiz } from '../../../types';

export const chapter5Quiz: Quiz = {
  id: 'quiz-inferno-chapter-5',
  title: 'Chapter 5 Quiz: Treachery - Cocytus & Satan',
  description: 'Test your understanding of the final circle and the nature of ultimate evil.',
  passingScore: 70,
  allowRetry: true,
  questions: [
    // Question 1
    {
      id: 'q1',
      question: 'What is Cocytus?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'A river of fire',
        'A frozen lake where traitors are punished',
        'A dark forest',
        'Satan\'s palace',
      ],
      correctAnswer: 'A frozen lake where traitors are punished',
      explanation: 'Cocytus is Circle IX, Hell\'s bottom, a frozen lake. Ice represents coldness of heart—betrayal\'s essence.',
      relatedLearningPoints: ['lp-ch5-1'],
    },

    // Question 2
    {
      id: 'q2',
      question: 'What are the four zones of Cocytus?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'Fire, Ice, Wind, Stone',
        'Caina, Antenora, Ptolomea, Judecca',
        'Limbo, Lust, Greed, Wrath',
        'East, West, North, South',
      ],
      correctAnswer: 'Caina, Antenora, Ptolomea, Judecca',
      explanation: 'Each zone punishes betrayal of different relationships: family, country, guests, benefactors.',
      relatedLearningPoints: ['lp-ch5-3', 'lp-ch5-4', 'lp-ch5-5', 'lp-ch5-6'],
    },

    // Question 3
    {
      id: 'q3',
      question: 'What type of traitors are punished in Caina?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'Traitors to country',
        'Traitors to family (named for Cain)',
        'Traitors to guests',
        'Traitors to God',
      ],
      correctAnswer: 'Traitors to family (named for Cain)',
      explanation: 'Caina is named for Cain (killed brother Abel). Family betrayal is treachery\'s \'outer ring\'—least worst of the worst.',
      relatedLearningPoints: ['lp-ch5-3'],
    },

    // Question 4
    {
      id: 'q4',
      question: 'Who is Count Ugolino?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'A virtuous ruler',
        'A Pisan traitor imprisoned and starved with his sons',
        'A heretic in Circle VI',
        'One of Satan\'s three victims',
      ],
      correctAnswer: 'A Pisan traitor imprisoned and starved with his sons',
      explanation: 'Ugolino betrayed Pisa; Archbishop Ruggieri imprisoned him and his sons/grandsons in a tower and starved them. Ugolino eternally gnaws Ruggieri\'s skull.',
      relatedLearningPoints: ['lp-ch5-13', 'lp-ch5-14'],
    },

    // Question 5
    {
      id: 'q5',
      question: 'Ugolino\'s final line suggests he may have resorted to cannibalism.',
      type: 'true-false',
      points: 10,
      options: ['True', 'False'],
      correctAnswer: 'True',
      explanation: '\'Then hunger proved stronger than grief\'—ambiguous line. Did he eat his dead children? Dante leaves it uncertain, making the horror worse.',
      relatedLearningPoints: ['lp-ch5-15'],
    },

    // Question 6
    {
      id: 'q6',
      question: 'What happens to traitors in Ptolomea (guest-betrayers)?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'Frozen upright',
        'Frozen on backs with tears freezing over eyes',
        'Completely submerged',
        'Chewed by Satan',
      ],
      correctAnswer: 'Frozen on backs with tears freezing over eyes',
      explanation: 'Guest-betrayers\' tears freeze instantly. Medieval hospitality was sacred—violating it deserves frozen tears and sealed eyes.',
      relatedLearningPoints: ['lp-ch5-5', 'lp-ch5-18'],
    },

    // Question 7
    {
      id: 'q7',
      question: 'What shocking theological claim does Fra Alberigo make?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'He\'s innocent',
        'His soul is in Hell while his body still lives above, possessed by a demon',
        'He\'s already been forgiven',
        'He\'s not really a traitor',
      ],
      correctAnswer: 'His soul is in Hell while his body still lives above, possessed by a demon',
      explanation: 'Dante invents this: Guest-traitors are so evil their souls fall to Hell before death. Shocking theology—damnation before death.',
      relatedLearningPoints: ['lp-ch5-22'],
    },

    // Question 8
    {
      id: 'q8',
      question: 'Dante keeps his promise to help Fra Alberigo.',
      type: 'true-false',
      points: 10,
      options: ['True', 'False'],
      correctAnswer: 'False',
      explanation: 'Dante promises to clear ice from Alberigo\'s eyes but doesn\'t. He says \'to be rude to him was courtesy\'—betraying betrayers as justice.',
      relatedLearningPoints: ['lp-ch5-21', 'lp-ch5-23'],
    },

    // Question 9
    {
      id: 'q9',
      question: 'How many faces does Satan have?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'One',
        'Two',
        'Three (parody of Trinity)',
        'Seven',
      ],
      correctAnswer: 'Three (parody of Trinity)',
      explanation: 'Satan has three heads (red, black, yellow)—grotesque parody of Holy Trinity. Where Trinity represents unity in love, Satan\'s heads show division.',
      relatedLearningPoints: ['lp-ch5-26'],
    },

    // Question 10
    {
      id: 'q10',
      question: 'Who are the three sinners Satan eternally chews?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'Dante\'s enemies',
        'Judas Iscariot, Brutus, and Cassius',
        'Cain, Mordred, and Ugolino',
        'Three popes',
      ],
      correctAnswer: 'Judas Iscariot, Brutus, and Cassius',
      explanation: 'Judas betrayed Christ (divine authority); Brutus and Cassius betrayed Caesar (earthly authority). They destroyed Church-Empire dual order.',
      relatedLearningPoints: ['lp-ch5-29'],
    },

    // Question 11
    {
      id: 'q11',
      question: 'Why is Judas\' punishment worst (head inside Satan\'s mouth)?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'He killed more people',
        'Betraying God (divine authority) is worse than betraying earthly power',
        'He was Dante\'s personal enemy',
        'It\'s random',
      ],
      correctAnswer: 'Betraying God (divine authority) is worse than betraying earthly power',
      explanation: 'Judas gets center mouth and worst position. Spiritual betrayal exceeds political betrayal—quality (who betrayed) exceeds quantity (how many hurt).',
      relatedLearningPoints: ['lp-ch5-30'],
    },

    // Question 12
    {
      id: 'q12',
      question: 'Why is Satan imprisoned rather than ruling Hell?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'God chains him there as punishment',
        'Evil is self-defeating—Satan\'s rebellion trapped himself',
        'He\'s actually ruling, just frozen',
        'Dante made a mistake',
      ],
      correctAnswer: 'Evil is self-defeating—Satan\'s rebellion trapped himself',
      explanation: 'Medieval theology: Evil is absence of good (privation). Choosing nothing means becoming trapped in nothing. Satan imprisoned himself.',
      relatedLearningPoints: ['lp-ch5-31', 'lp-ch5-32'],
    },

    // Question 13
    {
      id: 'q13',
      question: 'Explain why Hell\'s bottom is frozen, not fiery.',
      type: 'self-assessment',
      points: 10,
      modelAnswer: 'Ice represents coldness of heart—the complete absence of love\'s warmth. Treachery, the worst sin, freezes relationships and destroys the bonds that should connect people. This is a medieval inversion of expectations: ultimate evil is not hot passion but cold, calculated betrayal. Fire represents emotion and energy; ice represents the absolute absence of love, warmth, and human connection—the ultimate spiritual death.',
      assessmentCriteria: [
        {
          id: 'criterion-symbolism',
          text: 'Explained that ice symbolizes coldness of heart/absence of love',
          points: 3,
        },
        {
          id: 'criterion-treachery',
          text: 'Connected ice to treachery as the worst sin, destroying bonds/relationships',
          points: 3,
        },
        {
          id: 'criterion-inversion',
          text: 'Mentioned the medieval inversion: cold calculation worse than hot passion',
          points: 2,
        },
        {
          id: 'criterion-spiritual-death',
          text: 'Explained ice as absence/spiritual death rather than punishment by heat',
          points: 2,
        },
      ],
      explanation: 'Ice represents coldness of heart—absence of love\'s warmth. Treachery (worst sin) freezes relationships. Medieval inversion: ultimate evil is cold calculation, not hot passion.',
      relatedLearningPoints: ['lp-ch5-1', 'lp-ch5-2', 'lp-ch5-40'],
    },

    // Question 14
    {
      id: 'q14',
      question: 'How do Dante and Virgil exit Hell?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'Through the front gate',
        'Climbing down Satan\'s fur, flipping at Earth\'s center, then climbing up',
        'A secret tunnel',
        'Flying with Geryon',
      ],
      correctAnswer: 'Climbing down Satan\'s fur, flipping at Earth\'s center, then climbing up',
      explanation: 'They climb Satan\'s body. At his waist (Earth\'s center), gravity inverts—\'down\' becomes \'up.\' They emerge at Mount Purgatory\'s base.',
      relatedLearningPoints: ['lp-ch5-35', 'lp-ch5-36'],
    },

    // Question 15
    {
      id: 'q15',
      question: 'What is the last word of Inferno?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'Hell',
        'Satan',
        'Stars',
        'Hope',
      ],
      correctAnswer: 'Stars',
      explanation: 'All three parts (Inferno, Purgatorio, Paradiso) end with \'stars\' (stelle). Stars represent divine guidance, hope, and salvation—journey from darkness to light.',
      relatedLearningPoints: ['lp-ch5-37'],
    },
  ],
};

import type { Quiz } from '../../../types';

export const chapter3Quiz: Quiz = {
  id: 'quiz-chapter-3-twelfth-night',
  title: 'Chapter 3: Twelfth Night Quiz',
  description: 'Test your knowledge of disguise, mistaken identity, and love in Shakespeare\'s Twelfth Night.',
  passingScore: 70,
  allowRetry: true,

  questions: [
    // Multiple Choice - Q1: Motivation for Disguise
    {
      id: 'q1-viola-disguise',
      question: 'Why does Viola decide to disguise herself as a man named Cesario?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'To hide from enemies who are pursuing her across the sea',
        'For safety and employment in an unfamiliar land',
        'To trick Duke Orsino into falling in love with her',
        'Because she prefers living as a man to being a woman',
      ],
      correctAnswer: 'For safety and employment in an unfamiliar land',
      explanation: 'After the shipwreck, Viola recognizes that traveling as a woman alone would be dangerous. She disguises herself as a young man (Cesario) to gain protection and employment in Duke Orsino\'s court, a practical decision motivated by necessity rather than deception.',
      relatedLearningPoints: ['lp-twelfth-1-disguise'],
    },

    // Multiple Choice - Q2: Love Triangle
    {
      id: 'q2-love-triangle',
      question: 'What is the central love tangle in Twelfth Night?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'Orsino pursues Olivia, who falls for Sebastian, while Viola remains alone',
        'Orsino pursues Olivia, who falls for Cesario (Viola), who loves Orsino',
        'Malvolio pursues Olivia, who loves Orsino, who loves Viola in disguise',
        'Sebastian pursues Olivia, who loves Malvolio, while Maria loves Toby',
      ],
      correctAnswer: 'Orsino pursues Olivia, who falls for Cesario (Viola), who loves Orsino',
      explanation: 'The central comedy comes from this circular love triangle: Orsino pines for Olivia, Olivia falls for "Cesario" (who is actually Viola in disguise), and Viola loves Orsino but cannot reveal it. This creates multiple layers of complications.',
      relatedLearningPoints: ['lp-twelfth-4-complication'],
    },

    // Multiple Choice - Q3: Dramatic Irony
    {
      id: 'q3-dramatic-irony',
      question: 'What creates dramatic irony in the scenes between Orsino and "Cesario"?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'Orsino rudely dismisses his loyal servant without realizing Cesario\'s devotion',
        'Orsino is secretly falling in love with Cesario but cannot admit it to himself',
        'The audience knows Cesario is Viola, who loves Orsino, but he remains unaware',
        'Cesario is plotting revenge against Orsino for his treatment of Olivia',
      ],
      correctAnswer: 'The audience knows Cesario is Viola, who loves Orsino, but he remains unaware',
      explanation: 'Dramatic irony occurs when the audience knows something characters don\'t. We know Viola\'s secret identity and her love for Orsino, making his confidences about love both touching and painful.',
      relatedLearningPoints: ['lp-twelfth-2b-dramatic-irony', 'lp-twelfth-3-irony'],
    },

    // Multiple Choice - Q4: Olivia's Authenticity
    {
      id: 'q4-olivia-cesario',
      question: 'What attracts Olivia to "Cesario" when he first visits her?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'His careful delivery of Orsino\'s formal, well-rehearsed flattery and poetic compliments',
        'His authentic passion when he abandons the script and speaks from his own heart',
        'His noble family background and high social status that Olivia recognizes immediately',
        'The expensive gifts and jewels that Orsino sent along with his messenger',
      ],
      correctAnswer: 'His authentic passion when he abandons the script and speaks from his own heart',
      explanation: 'When Viola stops reciting Orsino\'s script and speaks from her own heart, her authentic emotion moves Olivia more than rehearsed compliments ever could. This demonstrates that genuine feeling transcends performance.',
      relatedLearningPoints: ['lp-twelfth-4-authenticity'],
    },

    // Multiple Choice - Q5: Setting and Symbolism
    {
      id: 'q5-illyria-setting',
      question: 'What role does the fantasy setting of Illyria play in the play?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'It provides a realistic and historically accurate portrayal of an Elizabethan coastal city',
        'It creates a fantasy space where social rules bend, enabling disguise and transformation',
        'It represents the many dangers of foreign travel that terrified Elizabethan audiences',
        'It functions as divine punishment where sinful characters must face their consequences',
      ],
      correctAnswer: 'It creates a fantasy space where social rules bend, enabling disguise and transformation',
      explanation: 'Illyria is a magical setting where normal rules don\'t apply—characters can disguise themselves, fall in love unexpectedly, and transform in ways that wouldn\'t be possible in a realistic setting. This theatrical space enables the play\'s themes of transformation.',
      relatedLearningPoints: ['lp-twelfth-6-setting'],
    },

    // Multiple Choice - Q6: Malvolio's Deception
    {
      id: 'q6-malvolio-trick',
      question: 'How do Maria and Sir Toby trick Malvolio?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'They hire an actress to impersonate Olivia and confess love to him directly',
        'They forge a love letter in Olivia\'s handwriting declaring her affection',
        'They cast a spell on Malvolio using ancient witchcraft and dark magic',
        'They tell him directly that Olivia has been secretly watching him with desire',
      ],
      correctAnswer: 'They forge a love letter in Olivia\'s handwriting declaring her affection',
      explanation: 'Maria forges a letter containing the famous line "Some are born great, some achieve greatness, and some have greatness thrust upon them." Malvolio\'s self-love and ambition blind him to the obvious deception.',
      relatedLearningPoints: ['lp-twelfth-9-subplot', 'lp-twelfth-9-self-love'],
    },

    // True/False - Q7: Sebastian's Status
    {
      id: 'q7-sebastian-alive',
      question: 'Sebastian, Viola\'s twin brother, died in the shipwreck.',
      type: 'true-false',
      points: 10,
      options: ['True', 'False'],
      correctAnswer: 'False',
      explanation: 'False! Sebastian survived the shipwreck and is rescued by Antonio, a sea captain. However, Viola believes he drowned, and Sebastian thinks his sister is dead. This mutual misunderstanding sets up the play\'s mistaken identity plot.',
      relatedLearningPoints: ['lp-twelfth-7-sebastian', 'lp-twelfth-7-twins'],
    },

    // True/False - Q8: Olivia's Knowledge
    {
      id: 'q8-olivia-knows',
      question: 'Olivia knows that the person she marries is Sebastian, not Cesario.',
      type: 'true-false',
      points: 10,
      options: ['True', 'False'],
      correctAnswer: 'False',
      explanation: 'False. Olivia believes she is marrying "Cesario" when she actually marries Sebastian. Due to the twins\' identical appearance, she cannot tell them apart. When the confusion is revealed, she finds herself happily married to Sebastian anyway.',
      relatedLearningPoints: ['lp-twelfth-11-structure', 'lp-twelfth-12-identity'],
    },

    // True/False - Q9: Comedy of Errors Structure
    {
      id: 'q9-happy-ending',
      question: 'The play ends with all characters happy and satisfied with their outcomes.',
      type: 'true-false',
      points: 10,
      options: ['True', 'False'],
      correctAnswer: 'False',
      explanation: 'False. While Viola and Orsino will marry, and Olivia is pleased with Sebastian, Malvolio remains angry and humiliated. He departs vowing "I\'ll be revenged on the whole pack of you!" This reminds us that comedy\'s confusion has real consequences.',
      relatedLearningPoints: ['lp-twelfth-12-malvolio'],
    },

    // Matching - Q10: Character Journeys
    {
      id: 'q10-character-arcs',
      question: 'Match each character to what they experience in the play:',
      type: 'matching',
      points: 15,
      correctAnswer: {
        'Viola': 'Discovers her own capacity for love through disguise and self-awareness',
        'Orsino': 'Learns what he truly values when he recognizes Cesario is actually a woman',
        'Olivia': 'Unexpectedly falls in love despite her vow to grieve for seven years',
        'Malvolio': 'Suffers humiliation due to his own self-love and lack of self-awareness',
      },
      explanation: 'Each character undergoes a journey: Viola uses disguise for self-discovery, Orsino learns to recognize genuine feeling, Olivia breaks her vow through love, and Malvolio\'s arrogance makes him vulnerable to manipulation.',
      relatedLearningPoints: ['lp-twelfth-1-setup', 'lp-twelfth-5-reversal', 'lp-twelfth-12-identity'],
    },

    // Multiple Choice - Q11: Gender and Perception
    {
      id: 'q11-gender-roles',
      question: 'What does Twelfth Night explore about gender through Viola\'s disguise?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'That women are naturally superior to men in all intellectual and emotional capacities',
        'That gender roles are social performances that can be temporarily transcended',
        'That gender has absolutely no effect whatsoever on how people interact with each other',
        'That disguise is inherently deceptive, immoral, and destructive to authentic relationships',
      ],
      correctAnswer: 'That gender roles are social performances that can be temporarily transcended',
      explanation: 'By disguising herself as Cesario, Viola demonstrates that gender is partially a social performance. Orsino confides in "Cesario" differently than he would with a woman. The play explores how identity is constructed and performed.',
      relatedLearningPoints: ['lp-twelfth-3-gender', 'lp-twelfth-8-performance'],
    },

    // Multiple Choice - Q12: Comedy vs. Tragedy Contrast
    {
      id: 'q12-comedy-tragedy',
      question: 'How does Twelfth Night\'s resolution differ from Romeo and Juliet\'s ending?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'Both plays ultimately resolve their conflicts through the tragic death of the main characters',
        'Comedy resolves confusion through revelation and marriage; tragedy through fatal miscommunication',
        'Romeo and Juliet contains no mistaken identity or misunderstanding elements whatsoever',
        'Twelfth Night deals with more serious, dark, and genuinely tragic themes than Romeo and Juliet',
      ],
      correctAnswer: 'Comedy resolves confusion through revelation and marriage; tragedy through fatal miscommunication',
      explanation: 'Both plays use misunderstanding as a driver, but with opposite outcomes: comedy resolves confusion through revelation and ends with marriages celebrating new harmony, while tragedy\'s miscommunication leads to irreversible death and loss.',
      relatedLearningPoints: ['lp-twelfth-11-contrast', 'lp-twelfth-4-comparison'],
    },

    // Short Answer - Q13: Character Name
    {
      id: 'q13-cesario-name',
      question: 'What pseudonym does Viola adopt when she enters Duke Orsino\'s service?',
      type: 'short-answer',
      points: 10,
      correctAnswer: 'Cesario',
      explanation: 'Viola adopts the name "Cesario," presenting herself as a young male servant in Duke Orsino\'s household. This disguise is so convincing that no one suspects the truth until the revelation scene.',
      relatedLearningPoints: ['lp-twelfth-1-disguise'],
    },

    // Multiple Choice - Q14: Famous Quote
    {
      id: 'q14-opening-line',
      question: 'What is the famous opening line of Twelfth Night that establishes the play\'s tone?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'To be or not to be',
        'If music be the food of love, play on',
        'Some are born great, some achieve greatness',
        'Better a witty fool than a foolish wit',
      ],
      correctAnswer: 'If music be the food of love, play on',
      explanation: 'Duke Orsino\'s opening line "If music be the food of love, play on" sets the play\'s musical, romantic tone while revealing his self-indulgent approach to love and beauty. This line introduces the play\'s central themes of love and performance.',
      relatedLearningPoints: ['lp-twelfth-13-language'],
    },

    // Self-Assessment - Q15: Synthesis of Themes
    {
      id: 'q15-self-assessment',
      question: 'Analyze how disguise functions as both a practical necessity and a literary device in Twelfth Night. Consider how it enables Viola\'s personal transformation, creates dramatic irony for the audience, and ultimately reveals truths about identity, gender, and love.',
      type: 'self-assessment',
      points: 20,
      modelAnswer: `Disguise in Twelfth Night operates on multiple levels simultaneously, serving practical, dramatic, and thematic purposes. On the surface, Viola\'s disguise as Cesario is motivated by necessity—alone in a foreign land after the shipwreck, she disguises herself as a man for safety and stability. This practical choice sets everything else in motion and remains her justification throughout the play.

However, the disguise also creates dramatic irony and comedy that drives the plot. The audience knows Viola\'s secret identity and her love for Orsino, but the other characters do not. When Viola (as Cesario) confesses love to Orsino while describing a woman, the dramatic irony is perfect—we understand the hidden truth while Orsino remains ignorant. When Olivia falls for "Cesario," we see the confusion building toward inevitable revelation.

Most importantly, Shakespeare uses disguise paradoxically to reveal truth rather than conceal it. While Cesario\'s appearance is false, Viola\'s genuine emotion moves Olivia more than rehearsed compliments could. In disguise, Viola discovers her own capacity for authentic love. She remains herself—her values, her wit, her capacity for feeling—while wearing a different social role. The play suggests that by stepping outside her prescribed gender role, she becomes more truly herself, not less.

By the resolution, disguise has fulfilled its transformative purpose. Viola\'s disguise enabled her to discover genuine love, forced Orsino to recognize his own deepest feelings, and demonstrated that identity is partly performance and partly something deeper. Only when everyone recognizes Viola\'s true identity can the couples be truly united. This paradox—that disguise enables self-discovery but genuine connection requires honesty—remains the play\'s central insight.`,
      assessmentCriteria: [
        {
          id: 'crit1',
          text: 'Explained disguise as a practical necessity and discussed its consequences for the plot',
          points: 7,
        },
        {
          id: 'crit2',
          text: 'Analyzed how disguise creates dramatic irony, comedy, and audience engagement',
          points: 7,
        },
        {
          id: 'crit3',
          text: 'Evaluated how Shakespeare uses disguise to reveal rather than conceal truth about identity, gender, and authentic feeling',
          points: 6,
        },
      ],
      explanation: 'This question synthesizes the major themes of Twelfth Night, asking you to understand disguise not as simple deception but as a complex literary tool that enables transformation, reveals truth, and questions the nature of identity itself.',
      relatedLearningPoints: ['lp-twelfth-1-disguise', 'lp-twelfth-2b-dramatic-irony', 'lp-twelfth-8-performance', 'lp-twelfth-12-identity'],
    },
  ],
};

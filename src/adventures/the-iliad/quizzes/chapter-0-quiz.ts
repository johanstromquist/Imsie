import type { Quiz } from '../../../types';

/**
 * Quiz for Chapter 0: Prologue - Before the Wrath
 *
 * Tests understanding of:
 * - The Judgment of Paris and its consequences
 * - In medias res as a literary convention
 * - The origins of the Trojan War
 * - Key characters and their motivations
 */
export const chapter0Quiz: Quiz = {
  id: 'quiz-iliad-ch0',
  title: 'Chapter 0: Prologue Quiz',
  description: 'Test your knowledge of the events that led to the Trojan War and Homer\'s epic opening.',
  passingScore: 70,
  allowRetry: true,

  questions: [
    // Multiple Choice - Plot Recall
    {
      id: 'q1',
      question: 'What caused the Judgment of Paris?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'A golden apple inscribed "To the Fairest" was thrown into a wedding',
        'Zeus commanded Paris to choose the most beautiful goddess',
        'The Trojan War had already begun',
        'Paris wanted to marry Helen',
      ],
      correctAnswer: 'A golden apple inscribed "To the Fairest" was thrown into a wedding',
      explanation: 'Eris, goddess of discord, was snubbed from the wedding of Peleus and Thetis. In revenge, she threw a golden apple inscribed "To the Fairest" among the guests, sparking a rivalry between Hera, Athena, and Aphrodite that led to the Judgment of Paris.',
      relatedLearningPoints: ['lp-ch0-2-divine-vanity'],
    },

    // Multiple Choice - Character Motivation
    {
      id: 'q2',
      question: 'What did Aphrodite offer Paris to win the beauty contest?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'Power over all of Asia',
        'Glory and victory in every battle',
        'The love of the most beautiful woman in the world',
        'Immortality and divine status',
      ],
      correctAnswer: 'The love of the most beautiful woman in the world',
      explanation: 'Aphrodite promised Paris the love of Helen, the most beautiful woman in the world. This promise of love and beauty won over Hera\'s offer of power and Athena\'s offer of glory, revealing Paris\'s character and setting the tragic events in motion.',
      relatedLearningPoints: ['lp-ch0-2-fateful-choice', 'lp-ch0-3c-love'],
    },

    // True/False - Literary Technique
    {
      id: 'q3',
      question: 'In medias res means starting a story in the middle of the action rather than at the beginning.',
      type: 'true-false',
      points: 10,
      options: ['True', 'False'],
      correctAnswer: 'True',
      explanation: 'True! In medias res is Latin for "in the middle of things." Homer begins the Iliad in year ten of the war, not at the beginning with the Judgment of Paris. This technique creates immediate dramatic tension and assumes the audience knows the backstory.',
      relatedLearningPoints: ['lp-ch0-1-medias-res'],
    },

    // Multiple Choice - Helen's Agency
    {
      id: 'q4',
      question: 'According to the chapter, what makes Helen one of literature\'s most complex female characters?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'Ancient sources unanimously agree she was a victim',
        'Ancient sources disagree about whether she was kidnapped or went willingly',
        'She was clearly the villain of the story',
        'Homer never mentions her in the Iliad',
      ],
      correctAnswer: 'Ancient sources disagree about whether she was kidnapped or went willingly',
      explanation: 'Helen\'s ambiguous role—victim or willing participant—makes her complex. Greek writers couldn\'t agree whether she was abducted or chose Paris, reflecting cultural anxieties about female desire and agency. This ambiguity has kept her fascinating for three millennia.',
      relatedLearningPoints: ['lp-ch0-4-helen'],
    },

    // Short Answer - Key Term
    {
      id: 'q5',
      question: 'What Greek term means "eternal glory through great deeds"?',
      type: 'short-answer',
      points: 10,
      correctAnswer: 'kleos',
      explanation: 'Kleos (eternal glory) was the highest goal for Greek heroes, valued above long life, wealth, or personal happiness. Achilles chose the short life with kleos over a long life in obscurity—a choice that defines his tragic arc.',
      relatedLearningPoints: ['lp-ch0-6-kleos', 'lp-ch0-3b-glory'],
    },

    // True/False - Historical Context
    {
      id: 'q6',
      question: 'The oath of Helen\'s suitors required them to defend whichever man Helen chose to marry.',
      type: 'true-false',
      points: 10,
      options: ['True', 'False'],
      correctAnswer: 'True',
      explanation: 'True. Helen\'s earthly father feared rejected suitors might start wars, so he made all her suitors swear to defend her chosen husband. This oath, meant to prevent conflict, paradoxically enabled the massive Greek expedition to Troy when Paris took Helen from Menelaus.',
      relatedLearningPoints: ['lp-ch0-4-oath'],
    },

    // Matching - Greek Heroes
    {
      id: 'q7',
      question: 'Match each Greek hero to their defining characteristic:',
      type: 'matching',
      points: 15,
      correctAnswer: {
        'Achilles': 'Greatest warrior, chose glory over long life',
        'Odysseus': 'Cunning king renowned for intelligence',
        'Ajax': 'Giant warrior, nearly invincible in combat',
        'Agamemnon': 'Most powerful king, commanded the expedition',
      },
      explanation: 'The Greek expedition assembled heroes with distinct traits: Achilles\' unmatched martial prowess, Odysseus\' cunning intelligence, Ajax\'s imposing physical strength, and Agamemnon\'s political power. This ensemble cast became a template for group storytelling.',
      relatedLearningPoints: ['lp-ch0-6-heroes'],
    },

    // Multiple Choice - Geography
    {
      id: 'q8',
      question: 'Why was Troy\'s location strategically important?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'It was the largest city in the ancient world',
        'It controlled trade routes between the Aegean and Black Seas',
        'It was built on sacred ground',
        'It had the strongest army in Asia Minor',
      ],
      correctAnswer: 'It controlled trade routes between the Aegean and Black Seas',
      explanation: 'Troy\'s location at the entrance to the Dardanelles strait gave it control over lucrative trade routes between the Aegean and Black Seas. This strategic and economic importance made it a prize worth fighting for beyond just Helen\'s abduction.',
      relatedLearningPoints: ['lp-ch0-7-geography'],
    },

    // Multiple Choice - Theme
    {
      id: 'q9',
      question: 'What does the nine-year stalemate before the Iliad begins emphasize?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'The glory and excitement of war',
        'War as futile, perpetuated by pride long after the cause matters',
        'The inevitability of Greek victory',
        'The superiority of defensive tactics',
      ],
      correctAnswer: 'War as futile, perpetuated by pride long after the cause matters',
      explanation: 'The nine-year stalemate emphasizes the Iliad\'s anti-war theme: war becomes its own justification, perpetuated by pride and honor even when the original cause (Helen) seems less important. Neither side can surrender without losing face.',
      relatedLearningPoints: ['lp-ch0-8-futility', 'lp-ch0-8-realistic'],
    },

    // Self-Assessment - Analysis
    {
      id: 'q10',
      question: 'Analyze Paris\'s choice in the Judgment of Paris. Why did he choose love over power or glory, and what does this reveal about his character and the epic\'s themes? Consider the consequences of his decision.',
      type: 'self-assessment',
      points: 20,
      modelAnswer: `Paris chose Aphrodite's offer of love (Helen) over Hera's offer of power and Athena's offer of martial glory. This choice reveals Paris as a different kind of hero—one driven by passion and desire rather than traditional heroic values of political dominion or battlefield achievement. He prioritizes personal gratification over the responsibilities that come with power.

This decision has catastrophic consequences: it sparks the Trojan War, dooms two civilizations, and results in countless deaths. The choice also creates permanent enemies—Hera and Athena will support the Greeks throughout the war because Paris rejected them. What seemed like a personal choice between gifts becomes a geopolitical disaster.

Paris's choice embodies the theme that desire can overrule reason, and that personal decisions by those in power affect entire societies. His inability to consider consequences beyond his own wants marks him as immature and sets him apart from more responsible heroes like Hector. The Judgment of Paris shows how Greek tragedy links individual choices to cosmic and collective consequences.`,
      assessmentCriteria: [
        {
          id: 'crit1',
          text: 'Explained why Paris chose love over power/glory and what this reveals about his character',
          points: 7,
        },
        {
          id: 'crit2',
          text: 'Discussed the consequences of his choice (war, deaths, divine enemies)',
          points: 7,
        },
        {
          id: 'crit3',
          text: 'Connected to broader themes about desire, responsibility, and how individual choices affect societies',
          points: 6,
        },
      ],
      explanation: 'This question explores how the Judgment of Paris sets the entire epic in motion, revealing character through choice and demonstrating Greek tragedy\'s emphasis on consequences.',
      relatedLearningPoints: ['lp-ch0-2-fateful-choice', 'lp-ch0-3-impossible-choice', 'lp-ch0-3c-love'],
    },
  ],
};

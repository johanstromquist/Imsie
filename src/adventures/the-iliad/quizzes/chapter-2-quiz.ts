import type { Quiz } from '../../../types';

/**
 * Quiz for Chapter 2: Hector and the Trojan Defense
 *
 * Tests understanding of:
 * - Hector as a contrasting hero to Achilles
 * - The Trojan perspective on the war
 * - The tension between public duty and private life
 * - Heroic duels as literary devices
 */
export const chapter2Quiz: Quiz = {
  id: 'quiz-iliad-ch2',
  title: 'Chapter 2: Hector and the Trojan Defense Quiz',
  description: 'Test your knowledge of Hector, defender of Troy, and the tragic choices heroes face.',
  passingScore: 70,
  allowRetry: true,

  questions: [
    // Multiple Choice - Character Contrast
    {
      id: 'q1',
      question: 'How does Hector differ most fundamentally from Achilles?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'Hector is a better warrior than Achilles',
        'Hector fights to defend his city and family; Achilles fights for personal glory',
        'Hector is immortal; Achilles is mortal',
        'Hector wants peace; Achilles wants war',
      ],
      correctAnswer: 'Hector fights to defend his city and family; Achilles fights for personal glory',
      explanation: 'The fundamental contrast is motivation: Hector embodies defensive heroism, fighting to protect Troy and his family out of duty and love. Achilles embodies offensive heroism, driven by the quest for personal kleos (glory). This makes Hector more sympathetic despite being the "enemy."',
      relatedLearningPoints: ['lp-ch2-2-hector-heroism', 'lp-ch2-13-parallel'],
    },

    // Multiple Choice - Plot Detail
    {
      id: 'q2',
      question: 'What happens when Menelaus duels Paris to settle the war?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'Paris defeats Menelaus fairly',
        'Aphrodite intervenes and rescues Paris before he dies',
        'They agree to a draw and end the duel',
        'Zeus stops the fight',
      ],
      correctAnswer: 'Aphrodite intervenes and rescues Paris before he dies',
      explanation: 'Menelaus was strangling Paris with his own helmet strap when Aphrodite intervened, breaking the strap and spiriting Paris away to Helen\'s bedroom. This divine interference prevents resolution and prolongs human suffering—a recurring pattern in the Iliad.',
      relatedLearningPoints: ['lp-ch2-7-divine-interference', 'lp-ch2-7-paris-hector'],
    },

    // True/False - Character Analysis
    {
      id: 'q3',
      question: 'Hector knows that Troy is doomed but fights anyway because his sense of duty and honor leave him no choice.',
      type: 'true-false',
      points: 10,
      options: ['True', 'False'],
      correctAnswer: 'True',
      explanation: 'True. Hector possesses tragic knowledge—he knows Troy will fall and that he is doomed. Yet he fights because defensive duty, family obligation, and honor demand it. This awareness of inevitable defeat makes him profoundly tragic.',
      relatedLearningPoints: ['lp-ch2-2-tragic-knowledge'],
    },

    // Multiple Choice - Thematic Analysis
    {
      id: 'q4',
      question: 'What does Andromache\'s plea for Hector to fight defensively reveal about Greek heroic values?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'That family obligations outweigh heroic duty',
        'That the practical choice (survive) is psychologically impossible for heroes whose identity depends on honor',
        'That Hector should listen to his wife',
        'That women\'s voices were equally valued in decision-making',
      ],
      correctAnswer: 'That the practical choice (survive) is psychologically impossible for heroes whose identity depends on honor',
      explanation: 'Andromache\'s advice is strategically sound—command from safety. But Hector cannot take it because his identity as Troy\'s defender requires visible courage. The tragedy is that the wise choice destroys his sense of self as surely as Achilles\' spear.',
      relatedLearningPoints: ['lp-ch2-4-impossible-choice', 'lp-ch2-4a-practical'],
    },

    // Matching - Character Roles
    {
      id: 'q5',
      question: 'Match each character to their role or defining trait:',
      type: 'matching',
      points: 15,
      correctAnswer: {
        'Hector': 'Defender of Troy, torn between duty and family',
        'Andromache': 'Hector\'s wife, begs him to value survival',
        'Paris': 'Started the war, contributes least to fighting it',
        'Helen': 'Self-aware, regretful, calls herself "hateful"',
      },
      explanation: 'Each character embodies different aspects of the war\'s tragedy: Hector\'s impossible duty, Andromache\'s helpless love, Paris\'s irresponsible beauty, and Helen\'s complex guilt and awareness.',
      relatedLearningPoints: ['lp-ch2-3-domestic', 'lp-ch2-7-paris-hector', 'lp-ch2-9-helen-complex'],
    },

    // True/False - Cultural Context
    {
      id: 'q6',
      question: 'In the Ajax-Hector duel, they exchange gifts afterward as a sign of mutual respect between warriors.',
      type: 'true-false',
      points: 10,
      options: ['True', 'False'],
      correctAnswer: 'True',
      explanation: 'True. After fighting to a draw at nightfall, Hector gives Ajax his sword and Ajax gives Hector his belt—tokens of mutual respect. Tragically, these gifts become instruments of death: Hector will be dragged by that belt, and Ajax will fall on that sword.',
      relatedLearningPoints: ['lp-ch2-11-mutual-respect', 'lp-ch2-11-bitter-irony'],
    },

    // Multiple Choice - Literary Technique
    {
      id: 'q7',
      question: 'How does Homer\'s description of battle differ from typical epic glorification of war?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'He focuses only on the glory and excitement',
        'He names and humanizes the dead, showing war\'s cost rather than just its glory',
        'He avoids describing violence entirely',
        'He portrays battle as a game',
      ],
      correctAnswer: 'He names and humanizes the dead, showing war\'s cost rather than just its glory',
      explanation: 'Homer uniquely names fallen warriors, tells us their fathers and homelands, and makes us mourn them. Each death is a person with a family, not just a statistic. This unusually empathetic perspective questions the glory of war by revealing its human cost.',
      relatedLearningPoints: ['lp-ch2-5-homer-realism', 'lp-ch2-5-aristeia'],
    },

    // Short Answer - Character Name
    {
      id: 'q8',
      question: 'What is the name of Hector\'s wife?',
      type: 'short-answer',
      points: 10,
      correctAnswer: 'Andromache',
      explanation: 'Andromache is Hector\'s wife and the mother of their son Astyanax. Her farewell scene with Hector is the Iliad\'s most intimate moment, showing the human cost of heroic duty behind the battlefield glory.',
      relatedLearningPoints: ['lp-ch2-3-domestic'],
    },

    // Multiple Choice - Divine Politics
    {
      id: 'q9',
      question: 'Why do the Trojans push the Greeks back to their ships in this chapter?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'The Trojans suddenly became better fighters',
        'Zeus grants the Trojans divine favor as promised to Thetis',
        'The Greeks deliberately retreated',
        'Hector discovered a secret strategy',
      ],
      correctAnswer: 'Zeus grants the Trojans divine favor as promised to Thetis',
      explanation: 'Zeus keeps his promise to Thetis to honor Achilles by granting the Trojans victory. Divine favor shifts the tide of battle—even great warriors like Diomedes and Ajax cannot prevail when the gods favor the enemy. This proves Achilles\' indispensability.',
      relatedLearningPoints: ['lp-ch2-1-divine-favor'],
    },

    // Self-Assessment - Analysis
    {
      id: 'q10',
      question: 'Analyze the scene between Hector and Andromache. What does their conversation reveal about the conflict between heroic values (honor, glory, duty) and family love? Why can\'t Hector choose his family over his duty, and what does this reveal about the costs of heroism?',
      type: 'self-assessment',
      points: 20,
      modelAnswer: `The Hector-Andromache scene is the Iliad's most intimate moment, exposing the brutal conflict between heroic duty and family love. Andromache begs Hector to fight defensively, to value his life and their family over heroic display. Her plea is practical and loving—she's already lost her father and brothers to Achilles, and Hector is all she has left.

But Hector cannot choose safety because his identity is inseparable from his role as Troy's visible defender. To hide behind walls would destroy him psychologically even if it preserved his life. He's trapped between two impossible demands: be the hero Troy needs (which requires risking death) or be the husband and father his family needs (which requires survival). Greek heroic culture offers no way to satisfy both.

The scene reveals that heroism requires sacrifice not just from the hero but from those who love him. Andromache and their son Astyanax will pay the price for Hector's honor. When Hector chooses duty, he chooses their eventual suffering alongside his own death. This is the hidden cost of heroism that epic poetry usually ignores—the families destroyed by heroes' pursuit of glory and honor.`,
      assessmentCriteria: [
        {
          id: 'crit1',
          text: 'Explained the conflict between Hector\'s duty/honor and his family\'s need for him to survive',
          points: 7,
        },
        {
          id: 'crit2',
          text: 'Discussed why Hector cannot choose family over duty (identity, honor culture, heroic code)',
          points: 7,
        },
        {
          id: 'crit3',
          text: 'Analyzed the broader cost of heroism—how families suffer for heroes\' choices',
          points: 6,
        },
      ],
      explanation: 'This question explores the Iliad\'s central tragedy: the incompatibility of heroic values with human happiness. Homer forces us to see what heroism costs those left behind.',
      relatedLearningPoints: ['lp-ch2-3-domestic', 'lp-ch2-4-impossible-choice', 'lp-ch2-2-parental-grief'],
    },
  ],
};

import type { Quiz } from '../../../types';

/**
 * Quiz for Chapter 5: Hector's Death and Priam's Plea
 *
 * Tests understanding of:
 * - The climactic duel between Achilles and Hector
 * - Humanization through compassion
 * - The significance of funeral rites
 * - The epic's resolution through shared humanity
 */
export const chapter5Quiz: Quiz = {
  id: 'quiz-iliad-ch5',
  title: 'Chapter 5: Hector\'s Death and Priam\'s Plea Quiz',
  description: 'Test your knowledge of the epic\'s climax and how a father\'s love breaks through rage.',
  passingScore: 70,
  allowRetry: true,

  questions: [
    // Multiple Choice - Character Choice
    {
      id: 'q1',
      question: 'Why does Hector choose to stand and face Achilles rather than flee into Troy?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'He believes he can defeat Achilles',
        'His identity as Troy\'s defender and his sense of honor make fleeing psychologically impossible',
        'The gates are locked',
        'Zeus commands him to fight',
      ],
      correctAnswer: 'His identity as Troy\'s defender and his sense of honor make fleeing psychologically impossible',
      explanation: 'Hector knows he cannot win, but his entire identity depends on being Troy\'s visible defender. To flee while the city watches would destroy him psychologically as surely as Achilles\' spear. He\'s trapped by his own heroic values.',
      relatedLearningPoints: ['lp-ch5-1-choice', 'lp-ch5-3c-tragic-heroism'],
    },

    // Multiple Choice - Divine Deception
    {
      id: 'q2',
      question: 'How does Athena ensure Hector\'s defeat?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'She gives Achilles extra strength',
        'She disguises herself as Hector\'s brother Deiphobus, then abandons him',
        'She breaks Hector\'s spear',
        'She blinds Hector temporarily',
      ],
      correctAnswer: 'She disguises herself as Hector\'s brother Deiphobus, then abandons him',
      explanation: 'Athena appears as Deiphobus, Hector\'s brother, giving him false hope. When Hector turns to get a spear from his "brother," no one is there. This divine deception shows the gods don\'t fight fairly—they actively sabotage mortals to ensure their favorites win.',
      relatedLearningPoints: ['lp-ch5-4-divine-manipulation', 'lp-ch5-4-hector-realization'],
    },

    // True/False - Heroic Code
    {
      id: 'q3',
      question: 'Achilles honors Hector\'s dying request to return his body for burial.',
      type: 'true-false',
      points: 10,
      options: ['True', 'False'],
      correctAnswer: 'False',
      explanation: 'False! Achilles refuses Hector\'s dying request for burial and vows that dogs will eat his corpse. This refusal violates sacred customs and horrifies even Achilles\' Greek allies. His grief has made him monstrous.',
      relatedLearningPoints: ['lp-ch5-5-achilles-inhuman', 'lp-ch5-7-desecration'],
    },

    // Matching - Character Perspectives
    {
      id: 'q4',
      question: 'Match each character to their lament for Hector at his funeral:',
      type: 'matching',
      points: 15,
      correctAnswer: {
        'Andromache': 'You have left me a widow and our son an orphan',
        'Hecuba': 'Of all my sons, you were the dearest to me',
        'Helen': 'You never spoke a harsh word to me, and now I have no friend left in Troy',
        'Priam': 'I risked everything to recover your body and give you honor',
      },
      explanation: 'Each character mourns Hector from their unique perspective: wife losing husband, mother losing beloved son, Helen losing her only defender, and father honoring his child. These diverse perspectives show how one death ripples through an entire community.',
      relatedLearningPoints: ['lp-ch5-13-ending'],
    },

    // Multiple Choice - Burial Customs
    {
      id: 'q5',
      question: 'Why was Achilles\' desecration of Hector\'s body considered worse than killing him?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'It damaged valuable armor',
        'It violated sacred burial customs and condemned Hector\'s soul to eternal unrest',
        'Hector was too important to kill',
        'The Greeks needed the body for ransom',
      ],
      correctAnswer: 'It violated sacred burial customs and condemned Hector\'s soul to eternal unrest',
      explanation: 'Killing in battle was acceptable; preventing burial was spiritual torture. Greeks believed the soul could not rest without burial rites. Achilles\' desecration—dragging the body, denying burial—violated fundamental religious beliefs and horrified everyone.',
      relatedLearningPoints: ['lp-ch5-7-desecration', 'lp-ch5-8-burial-sacred'],
    },

    // True/False - Divine Protection
    {
      id: 'q6',
      question: 'Apollo protects Hector\'s body from being destroyed by Achilles\' daily desecration.',
      type: 'true-false',
      points: 10,
      options: ['True', 'False'],
      correctAnswer: 'True',
      explanation: 'True! Apollo covers Hector\'s body with his golden aegis, preventing the flesh from tearing and the face from being ruined despite Achilles dragging it daily. Even in death, the gods honor those who honored them—Hector retains dignity through divine grace.',
      relatedLearningPoints: ['lp-ch5-7-apollo-protection'],
    },

    // Multiple Choice - Thematic Analysis
    {
      id: 'q7',
      question: 'What breaks through Achilles\' rage and makes him return Hector\'s body?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'Zeus commands him to do it',
        'He gets bored of his revenge',
        'Priam\'s appeal to shared humanity and fatherhood awakens Achilles\' compassion',
        'The Greeks threaten to abandon him',
      ],
      correctAnswer: 'Priam\'s appeal to shared humanity and fatherhood awakens Achilles\' compassion',
      explanation: 'Priam appeals to Achilles as a father to someone who has a father. He kisses the hands that killed his son. This profound act of courage and humanity breaks through Achilles\' rage. Seeing Priam, Achilles sees his own father Peleus and remembers his humanity.',
      relatedLearningPoints: ['lp-ch5-10-humanization', 'lp-ch5-10-fathers', 'lp-ch5-11b-compassion'],
    },

    // Short Answer - Character Name
    {
      id: 'q8',
      question: 'What is the name of Hector\'s brother who Athena impersonates?',
      type: 'short-answer',
      points: 10,
      correctAnswer: 'Deiphobus',
      explanation: 'Deiphobus is Hector\'s beloved brother. Athena takes his form to deceive Hector into thinking he has an ally. When Hector needs a spare spear and calls for Deiphobus, he discovers the devastating truth—he\'s been tricked and is completely alone.',
      relatedLearningPoints: ['lp-ch5-4-divine-manipulation'],
    },

    // Multiple Choice - Epic Ending
    {
      id: 'q9',
      question: 'Why does the Iliad end with Hector\'s funeral rather than Troy\'s fall or Achilles\' death?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'Homer ran out of time',
        'The ending emphasizes the human cost of war and the value of compassion over military victory',
        'He planned to write a sequel',
        'Troy never actually fell',
      ],
      correctAnswer: 'The ending emphasizes the human cost of war and the value of compassion over military victory',
      explanation: 'By ending with burial rather than victory, Homer emphasizes that the epic is about humanity, not conquest. The resolution comes through compassion (Achilles returning the body) and ritual (Hector\'s funeral), showing that maintaining civilization and humanity matters more than military triumph.',
      relatedLearningPoints: ['lp-ch5-13-ending', 'lp-ch5-13-compassion', 'lp-ch5-13-humanity'],
    },

    // Self-Assessment - Analysis
    {
      id: 'q10',
      question: 'Analyze the meeting between Priam and Achilles. How does this encounter transform both men? What does their shared weeping reveal about the Iliad\'s ultimate message about war, humanity, and grief? Consider what it means that enemies can unite in mourning.',
      type: 'self-assessment',
      points: 20,
      modelAnswer: `The Priam-Achilles meeting is the Iliad's emotional climax, transforming both men through shared grief. Priam, who has lost nearly all his sons, performs the ultimate act of courage and humility—kissing the hands that killed his child. This breaks through Achilles' rage by appealing to his humanity rather than his pride. Achilles sees Priam and thinks of his own father Peleus, alone and aging, who will never see his son again.

Their shared weeping—Priam for Hector, Achilles for Patroclus and his father—shows that grief transcends the enemy divide. They are not Greek and Trojan in this moment, but two men destroyed by war, united in loss. Achilles' compassion returns not because he forgives Hector for killing Patroclus, but because he recognizes Priam's pain as identical to his own.

This encounter reveals the Iliad's ultimate message: beneath the glory and honor and rage, we are all human. War destroys everyone—victors and vanquished alike. The resolution comes not through military victory but through compassion, through the recognition of shared humanity even between enemies. Priam's courage and Achilles' return to compassion show that maintaining human bonds matters more than vengeance. The epic ends not with Troy's fall but with a funeral, suggesting that how we honor the dead and treat each other defines our humanity more than battlefield prowess ever could.`,
      assessmentCriteria: [
        {
          id: 'crit1',
          text: 'Explained how the encounter transforms both men (Priam\'s courage, Achilles\' compassion awakened)',
          points: 7,
        },
        {
          id: 'crit2',
          text: 'Discussed the significance of shared weeping and how grief unites enemies',
          points: 7,
        },
        {
          id: 'crit3',
          text: 'Analyzed the Iliad\'s ultimate message about humanity, compassion, and what truly matters',
          points: 6,
        },
      ],
      explanation: 'This question explores the epic\'s resolution—showing that Homer values human compassion and shared grief over military victory, offering a surprisingly anti-war message from a war epic.',
      relatedLearningPoints: ['lp-ch5-10-humanization', 'lp-ch5-11-transformation', 'lp-ch5-13-compassion', 'lp-ch5-13-humanity'],
    },
  ],
};

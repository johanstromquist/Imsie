import type { Quiz } from '../../../types';

/**
 * Quiz for Chapter 1: The Wrath of Achilles
 *
 * Tests understanding of:
 * - The cause of Achilles' rage
 * - The concept of timé (honor) in Greek culture
 * - In medias res opening and its effects
 * - The chain of causation leading to Greek defeat
 */
export const chapter1Quiz: Quiz = {
  id: 'quiz-iliad-ch1',
  title: 'Chapter 1: The Wrath of Achilles Quiz',
  description: 'Test your understanding of the legendary opening of Homer\'s epic and the quarrel that dooms the Greek army.',
  passingScore: 70,
  allowRetry: true,

  questions: [
    // Multiple Choice - Plot Recall
    {
      id: 'q1',
      question: 'What caused the plague that struck the Greek camp?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'Zeus punished them for attacking Troy',
        'Agamemnon dishonored Apollo by mistreating his priest',
        'The Greeks violated a sacred temple',
        'Achilles cursed the army in his rage',
      ],
      correctAnswer: 'Agamemnon dishonored Apollo by mistreating his priest',
      explanation: 'Agamemnon refused to return Chryseis to her father Chryses, Apollo\'s priest, and did so with arrogance and insults. Apollo sent the plague to punish this disrespect. The solution was simple—return the girl and apologize—but Agamemnon\'s pride prevented easy resolution.',
      relatedLearningPoints: ['lp-ch1-3-apollo', 'lp-ch1-3-time'],
    },

    // Multiple Choice - Cultural Context
    {
      id: 'q2',
      question: 'In Greek warrior culture, what was timé?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'The length of time a hero lived',
        'Honor and status symbolized by war prizes',
        'The ability to tell time in battle',
        'A type of weapon used by champions',
      ],
      correctAnswer: 'Honor and status symbolized by war prizes',
      explanation: 'Timé (honor) was the central value in Greek warrior culture—more important than life itself. War prizes (geras) symbolized this honor visibly. When Agamemnon seized Briseis from Achilles, he didn\'t just take a woman—he publicly dishonored Achilles before the entire army.',
      relatedLearningPoints: ['lp-ch1-3-time'],
    },

    // True/False - Literary Technique
    {
      id: 'q3',
      question: 'Homer announces the epic\'s theme—rage—in the very first line.',
      type: 'true-false',
      points: 10,
      options: ['True', 'False'],
      correctAnswer: 'True',
      explanation: 'True! "Sing, goddess, the rage of Achilles" immediately establishes that this epic is about anger and its consequences, not the Trojan War broadly. Homer tells us from the start what matters: one man\'s wrath and the catastrophe it creates.',
      relatedLearningPoints: ['lp-ch1-1-theme', 'lp-ch1-1-opening'],
    },

    // Multiple Choice - Character Analysis
    {
      id: 'q4',
      question: 'Why does Achilles choose to withdraw from battle rather than kill Agamemnon?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'He was afraid of Agamemnon',
        'Athena appeared and restrained him, suggesting withdrawal as revenge',
        'He wanted to go home immediately',
        'Zeus commanded him not to kill Agamemnon',
      ],
      correctAnswer: 'Athena appeared and restrained him, suggesting withdrawal as revenge',
      explanation: 'Athena appears (visible only to Achilles) and restrains him from murder, suggesting instead that he withdraw from battle. This allows Achilles to prove his worth by withholding it—making Agamemnon beg for his return. It\'s calculated revenge rather than impulsive violence.',
      relatedLearningPoints: ['lp-ch1-5b-withdrawal', 'lp-ch1-5-choice'],
    },

    // Matching - Cause and Effect
    {
      id: 'q5',
      question: 'Match each action to its consequence in the chain of causation:',
      type: 'matching',
      points: 15,
      correctAnswer: {
        'Agamemnon dishonors Apollo\'s priest': 'Apollo sends plague to punish Greeks',
        'Calchas reveals Agamemnon must return Chryseis': 'Agamemnon demands replacement prize',
        'Agamemnon seizes Briseis from Achilles': 'Achilles withdraws from battle in rage',
        'Achilles asks Thetis to petition Zeus': 'Zeus grants Trojan victory to punish Greeks',
      },
      explanation: 'Greek tragedy emphasizes chains of causation where each choice leads inevitably to the next. This sequence shows how Agamemnon\'s initial disrespect of Apollo cascades into the central conflict of the entire epic.',
      relatedLearningPoints: ['lp-ch1-11-causation'],
    },

    // Multiple Choice - Character Motivation
    {
      id: 'q6',
      question: 'What does Achilles ask his mother Thetis to do?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'Ask Zeus to help the Greeks win the war quickly',
        'Ask Zeus to make the Trojans win while Achilles sits out',
        'Ask Zeus to kill Agamemnon',
        'Ask Zeus to bring Briseis back to him',
      ],
      correctAnswer: 'Ask Zeus to make the Trojans win while Achilles sits out',
      explanation: 'Achilles asks Thetis to petition Zeus to grant the Trojans victory while he refuses to fight. This dark request will cause massive Greek casualties and prove Achilles\' worth by showing how badly the army needs him. It\'s calculated revenge—he wants Agamemnon to suffer and beg for his return.',
      relatedLearningPoints: ['lp-ch1-7-consequences', 'lp-ch1-7-thetis'],
    },

    // Multiple Choice - Divine Politics
    {
      id: 'q7',
      question: 'Why does Zeus agree to Thetis\'s request to grant the Trojans victory?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'Zeus favors the Trojans over the Greeks',
        'He owes Thetis a debt for helping him maintain his throne',
        'He wants to punish Achilles for his pride',
        'He randomly chooses sides in mortal conflicts',
      ],
      correctAnswer: 'He owes Thetis a debt for helping him maintain his throne',
      explanation: 'Zeus owes Thetis a debt—when other gods conspired to overthrow him, she alone remained loyal and summoned help. Zeus does not forget debts, so despite the complications it will cause, he nods his head (an irrevocable gesture) and grants her request.',
      relatedLearningPoints: ['lp-ch1-10-divine-politics', 'lp-ch1-10-fate'],
    },

    // Multiple Choice - Irony
    {
      id: 'q8',
      question: 'What is ironic about Achilles\' withdrawal from battle?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'He gains more glory by not fighting than by fighting',
        'He came to Troy for glory but achieves it through absence and suffering rather than combat',
        'He becomes more famous for his anger than his skill',
        'He never actually wanted to fight in the first place',
      ],
      correctAnswer: 'He came to Troy for glory but achieves it through absence and suffering rather than combat',
      explanation: 'Achilles came to Troy seeking kleos (eternal glory) through great deeds in battle. The irony is that his most famous act in the Iliad\'s opening is NOT fighting—his withdrawal and its consequences become as legendary as any battlefield victory. He\'s the hero defined by what he refuses to do.',
      relatedLearningPoints: ['lp-ch1-12-irony'],
    },

    // Short Answer - Greek Term
    {
      id: 'q9',
      question: 'What is the Greek term for eternal glory won through great deeds?',
      type: 'short-answer',
      points: 10,
      correctAnswer: 'kleos',
      explanation: 'Kleos is eternal glory through great deeds, the highest goal for Greek heroes. Achilles chose to come to Troy for kleos even though it meant dying young. The pursuit of kleos drives much of the epic\'s action and tragedy.',
      relatedLearningPoints: ['lp-ch1-9-voices'],
    },

    // Self-Assessment - Analysis
    {
      id: 'q10',
      question: 'Analyze the conflict between Achilles and Agamemnon. What does their quarrel reveal about the tension between merit (being the best warrior) and authority (being the king)? Consider how timé (honor) functions for each character and why neither can back down.',
      type: 'self-assessment',
      points: 20,
      modelAnswer: `The quarrel between Achilles and Agamemnon embodies a fundamental conflict between two types of power: merit versus authority. Achilles is the greatest warrior—his worth comes from proven excellence in combat. Agamemnon is the most powerful king—his authority comes from political position and command. When they clash, both feel their core identity threatened.

For Achilles, timé is earned through prowess. When Agamemnon seizes Briseis, he's not just taking a war prize—he's publicly declaring that royal authority outranks martial excellence. This strikes at Achilles' very identity as the best warrior. To accept this dishonor would mean admitting that being the greatest fighter doesn't matter.

For Agamemnon, yielding to Achilles would undermine his authority as commander. He can't be seen as subordinate to any warrior, no matter how skilled. His timé comes from his position as king, and he must assert that position over Achilles' individual prowess.

Neither can back down without destroying their sense of self and their standing before the army. This makes the quarrel inevitable and tragic—it's not just stubbornness but a collision of incompatible value systems, both equally valid in Greek heroic culture.`,
      assessmentCriteria: [
        {
          id: 'crit1',
          text: 'Explained the conflict between merit (Achilles as best warrior) and authority (Agamemnon as king)',
          points: 7,
        },
        {
          id: 'crit2',
          text: 'Discussed how timé functions differently for each character and why it matters',
          points: 7,
        },
        {
          id: 'crit3',
          text: 'Analyzed why neither can back down and how this reflects Greek heroic values',
          points: 6,
        },
      ],
      explanation: 'This question explores the central conflict of Book 1, showing how the quarrel isn\'t just about pride but about incompatible sources of honor in Greek warrior culture.',
      relatedLearningPoints: ['lp-ch1-4-conflict', 'lp-ch1-5c-honor', 'lp-ch1-6-pride'],
    },
  ],
};

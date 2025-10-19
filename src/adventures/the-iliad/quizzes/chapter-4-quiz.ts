import type { Quiz } from '../../../types';

/**
 * Quiz for Chapter 4: The Rage of Achilles Unleashed
 *
 * Tests understanding of:
 * - Achilles' transformation through grief
 * - The Shield of Achilles and its symbolism
 * - Aristeia as an epic convention
 * - The brutality versus glory of heroic combat
 */
export const chapter4Quiz: Quiz = {
  id: 'quiz-iliad-ch4',
  title: 'Chapter 4: The Rage of Achilles Unleashed Quiz',
  description: 'Test your understanding of grief\'s transformation of Achilles into an unstoppable force of vengeance.',
  passingScore: 70,
  allowRetry: true,

  questions: [
    // Multiple Choice - Character Transformation
    {
      id: 'q1',
      question: 'How does Patroclus\'s death transform Achilles?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'It makes him want to go home',
        'It transforms his rage from anger at Agamemnon into grief, then into vengeful fury at Hector and Troy',
        'It makes him forgive Agamemnon completely',
        'It makes him afraid to fight',
      ],
      correctAnswer: 'It transforms his rage from anger at Agamemnon into grief, then into vengeful fury at Hector and Troy',
      explanation: 'Patroclus\'s death fundamentally transforms Achilles. His petulant rage at Agamemnon becomes grief, which becomes something darker—a rage directed at Hector, Troy, and death itself. The personal slight matters nothing now; only vengeance remains.',
      relatedLearningPoints: ['lp-ch4-1-transformation', 'lp-ch4-6-transferred-rage'],
    },

    // Multiple Choice - Symbolism
    {
      id: 'q2',
      question: 'Why does Homer spend 130 lines describing Hephaestus forging Achilles\' shield?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'He ran out of battle scenes to describe',
        'To show the contrast between the peaceful world depicted on the shield and the violence Achilles embodies',
        'Shields were more important than fighting in Greek warfare',
        'Hephaestus was Homer\'s favorite god',
      ],
      correctAnswer: 'To show the contrast between the peaceful world depicted on the shield and the violence Achilles embodies',
      explanation: 'The shield depicts weddings, harvests, music, dancing—all of peaceful human life. Achilles carries this vision of what war destroys into battle while embodying pure violence. This tragic irony shows what\'s at stake and what Achilles has abandoned in his rage.',
      relatedLearningPoints: ['lp-ch4-3-ekphrasis'],
    },

    // True/False - Prophecy
    {
      id: 'q3',
      question: 'Achilles knows that killing Hector will lead to his own death soon after, but he chooses vengeance anyway.',
      type: 'true-false',
      points: 10,
      options: ['True', 'False'],
      correctAnswer: 'True',
      explanation: 'True. Thetis tells Achilles that his death will follow close after Hector\'s. His immortal horses prophesy his doom. Yet Achilles accepts death willingly—grief has made him suicidal, and vengeance matters more than survival.',
      relatedLearningPoints: ['lp-ch4-2-prophecy', 'lp-ch4-6-prophecy-acceptance'],
    },

    // Matching - Shield Imagery
    {
      id: 'q4',
      question: 'Match each circle of Achilles\' shield to what it depicts:',
      type: 'matching',
      points: 15,
      correctAnswer: {
        'Center': 'Earth, sky, sea, sun, moon, constellations',
        'Second circle': 'Two cities—one at peace, one at war',
        'Third circle': 'Agricultural life—plowing, harvest, vineyards',
        'Outer rim': 'River Oceanus surrounding all',
      },
      explanation: 'The shield depicts the entire cosmos and human life: heavens at center, human civilization (peace and war), agricultural sustenance, and Ocean as the boundary of the known world. It\'s a complete vision of existence that Achilles carries into battle.',
      relatedLearningPoints: ['lp-ch4-3-ekphrasis'],
    },

    // Multiple Choice - Literary Term
    {
      id: 'q5',
      question: 'What is aristeia in epic poetry?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'A type of weapon used by heroes',
        'A warrior\'s finest hour when they dominate the battlefield',
        'A funeral ritual for fallen warriors',
        'A peace treaty between armies',
      ],
      correctAnswer: 'A warrior\'s finest hour when they dominate the battlefield',
      explanation: 'Aristeia is an epic convention where a hero has their finest hour, slaughtering enemies and dominating the battlefield. Achilles\' aristeia subverts the convention—instead of glorious, it\'s horrifying, showing how grief has dehumanized him.',
      relatedLearningPoints: ['lp-ch4-7-aristeia-subverted', 'lp-ch2-5-aristeia'],
    },

    // True/False - Character Analysis
    {
      id: 'q6',
      question: 'Achilles\' reconciliation with Agamemnon is genuine and heartfelt.',
      type: 'true-false',
      points: 10,
      options: ['True', 'False'],
      correctAnswer: 'False',
      explanation: 'False! Achilles accepts Agamemnon\'s apology and gifts, but only pragmatically—he needs the army to follow him into battle. He doesn\'t care about honor or pride anymore. The reconciliation is hollow, driven by the need for vengeance, not forgiveness.',
      relatedLearningPoints: ['lp-ch4-4-reconciliation', 'lp-ch4-5b-hollow'],
    },

    // Multiple Choice - Divine Conflict
    {
      id: 'q7',
      question: 'What happens when Achilles kills so many Trojans that the River Scamander confronts him?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'Achilles apologizes and stops killing',
        'The river god tries to drown Achilles, then Hephaestus intervenes with fire',
        'Achilles defeats the river god in combat',
        'Zeus commands the river to stop',
      ],
      correctAnswer: 'The river god tries to drown Achilles, then Hephaestus intervenes with fire',
      explanation: 'The River Scamander, choked with corpses, rises against Achilles in a massive wave. When even a river god cannot stop him, Hephaestus sends divine fire to boil the river back. This shows Achilles has transcended mortal limits—even nature itself opposes his excessive violence.',
      relatedLearningPoints: ['lp-ch4-9-superhuman', 'lp-ch4-9-theomachy'],
    },

    // Short Answer - Greek Term
    {
      id: 'q8',
      question: 'What Greek term describes the battle between gods (which occurs when the gods fight each other over mortal conflicts)?',
      type: 'short-answer',
      points: 10,
      correctAnswer: 'theomachy',
      explanation: 'Theomachy means "battle of gods." When Achilles fills the Scamander River with corpses and the river god attacks him, then Hephaestus intervenes with fire to save Achilles, this god-vs-god combat elevates the mortal conflict to cosmic significance—even divine beings are forced to fight each other over Troy.',
      relatedLearningPoints: ['lp-ch4-9-theomachy'],
    },

    // Multiple Choice - Ethics
    {
      id: 'q9',
      question: 'Why is Achilles\' refusal to ransom prisoners a violation of heroic customs?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'Prisoners were valuable slaves',
        'Ransom was the main source of income for warriors',
        'Accepting ransom civilized warfare by showing mercy and following established codes',
        'Gods commanded warriors to accept ransom',
      ],
      correctAnswer: 'Accepting ransom civilized warfare by showing mercy and following established codes',
      explanation: 'Heroic custom allowed ransom—warriors could save their lives by offering treasure. This civilized warfare with codes of mercy. Achilles\' refusal to ransom anyone shows he\'s abandoned all civilizing restraints. Even his allies are horrified by this violation.',
      relatedLearningPoints: ['lp-ch4-7-no-mercy', 'lp-ch4-11-inhuman'],
    },

    // Self-Assessment - Analysis
    {
      id: 'q10',
      question: 'Analyze how Achilles\' grief transforms him from hero to something inhuman. Consider: What does he become in his rampage? How does Homer portray his violence? What does this transformation reveal about the costs of unchecked rage and grief?',
      type: 'self-assessment',
      points: 20,
      modelAnswer: `Achilles' grief strips away his humanity, transforming him into a force of pure violence—death incarnate in divine armor. Homer emphasizes this dehumanization: Achilles refuses food, refuses mercy, refuses ransom, refuses all the customs that civilize warfare. He becomes what he tells Hector—a lion that makes no pacts with sheep. He's no longer a man but a weapon aimed at Troy's heart.

Homer's portrayal of the rampage subverts typical epic glorification of violence. Instead of celebrating Achilles' prowess, he names every Trojan killed, tells us their fathers and homes, makes us mourn them. The catalog of the dead reads like a memorial, not a celebration. Achilles fills the river with so many corpses that even the river god protests. This is horror, not glory.

The transformation reveals that unchecked grief and rage destroy not just enemies but the self. Achilles came to Troy as a hero seeking kleos. Grief over Patroclus transforms him into something that achieves legendary fame but loses its humanity in the process. He becomes the thing he sought to defeat—a bringer of death and suffering. The cost of his vengeance is his own soul, showing that grief, when allowed to become rage without limit, annihilates the griever along with their target.`,
      assessmentCriteria: [
        {
          id: 'crit1',
          text: 'Explained what Achilles becomes (inhuman, death incarnate, abandons civilizing customs)',
          points: 7,
        },
        {
          id: 'crit2',
          text: 'Discussed how Homer portrays the violence (naming dead, horror not glory, excessive brutality)',
          points: 7,
        },
        {
          id: 'crit3',
          text: 'Analyzed what this reveals about costs of rage/grief (destroys the self, loss of humanity)',
          points: 6,
        },
      ],
      explanation: 'This question explores Achilles\' transformation as a cautionary tale about grief—showing how unchecked emotion can destroy the person feeling it, not just their enemies.',
      relatedLearningPoints: ['lp-ch4-1-transformation', 'lp-ch4-7-aristeia-subverted', 'lp-ch4-11-inhuman'],
    },
  ],
};

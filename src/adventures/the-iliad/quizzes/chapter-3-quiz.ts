import type { Quiz } from '../../../types';

/**
 * Quiz for Chapter 3: The Death of Patroclus
 *
 * Tests understanding of:
 * - Patroclus and Achilles' relationship
 * - Dramatic irony and tragic reversal
 * - Hubris and divine punishment
 * - Greek funeral customs and their importance
 */
export const chapter3Quiz: Quiz = {
  id: 'quiz-iliad-ch3',
  title: 'Chapter 3: The Death of Patroclus Quiz',
  description: 'Test your knowledge of the tragedy that transforms Achilles\' rage into grief—and grief into something far more terrible.',
  passingScore: 70,
  allowRetry: true,

  questions: [
    // Multiple Choice - Character Relationship
    {
      id: 'q1',
      question: 'Why does Patroclus beg Achilles to let him fight?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'He wants personal glory',
        'He cannot bear watching Greeks die and feels compassion for their suffering',
        'He is jealous of Achilles\' fame',
        'He wants to prove he\'s a better warrior',
      ],
      correctAnswer: 'He cannot bear watching Greeks die and feels compassion for their suffering',
      explanation: 'Patroclus embodies compassion—he cannot watch his Greek comrades suffer and die, even though they dishonored Achilles. His virtue (caring for others) becomes the source of his doom, making his death especially tragic.',
      relatedLearningPoints: ['lp-ch3-1-patroclus', 'lp-ch3-2-compassion'],
    },

    // Multiple Choice - Plot Detail
    {
      id: 'q2',
      question: 'What warning does Achilles give Patroclus before he goes into battle?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'Don\'t fight Hector',
        'Defend the ships only, do not pursue the Trojans to the walls',
        'Come back immediately if you get wounded',
        'Don\'t wear the armor proudly',
      ],
      correctAnswer: 'Defend the ships only, do not pursue the Trojans to the walls',
      explanation: 'Achilles strictly warns Patroclus: drive them from the ships, then STOP. Don\'t pursue, don\'t try to take Troy. This warning sets up tragic irony—we know Patroclus will ignore it, and the consequences will be fatal.',
      relatedLearningPoints: ['lp-ch3-3b-warning', 'lp-ch3-3-tragic-choice'],
    },

    // True/False - Literary Technique
    {
      id: 'q3',
      question: 'Dramatic irony occurs when the audience knows something the characters don\'t, creating tension.',
      type: 'true-false',
      points: 10,
      options: ['True', 'False'],
      correctAnswer: 'True',
      explanation: 'True! The audience knows Patroclus is doomed—we watch him march confidently to battle while knowing he will die. This dramatic irony creates tragic tension as we see him ignore Achilles\' warning and approach the walls of Troy.',
      relatedLearningPoints: ['lp-ch3-4-dramatic-irony'],
    },

    // Matching - Cause and Effect
    {
      id: 'q4',
      question: 'Match each action to its consequence in Patroclus\'s tragic death:',
      type: 'matching',
      points: 15,
      correctAnswer: {
        'Patroclus cannot bear watching Greeks die': 'He begs Achilles to let him fight',
        'Achilles lends armor but forbids pursuit': 'Patroclus saves ships but then ignores warning',
        'Patroclus pursues Trojans to the walls': 'Apollo strikes him for exceeding mortal limits',
        'Hector kills defenseless Patroclus': 'Achilles\' grief transforms into terrible rage',
      },
      explanation: 'This chain of causation shows how virtues (Patroclus\'s compassion, Achilles\'s compromise) lead to tragedy through hubris (exceeding limits) and divine punishment. Each choice leads inevitably to the next.',
      relatedLearningPoints: ['lp-ch3-13-causation-chain'],
    },

    // Multiple Choice - Greek Concept
    {
      id: 'q5',
      question: 'What is hubris, and why does it bring divine punishment?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'Hubris is courage in battle, and gods reward it',
        'Hubris is excessive pride and overstepping mortal limits, which offends the gods',
        'Hubris is cleverness, which gods envy',
        'Hubris is loyalty to friends, which creates conflict',
      ],
      correctAnswer: 'Hubris is excessive pride and overstepping mortal limits, which offends the gods',
      explanation: 'Hubris is the classic tragic flaw—excessive pride that leads mortals to overstep their proper bounds. When Patroclus attacks Troy\'s walls three times despite Apollo\'s warnings, he commits hubris by forgetting he\'s mortal, and Apollo punishes him.',
      relatedLearningPoints: ['lp-ch3-9-hubris-definition', 'lp-ch3-5-hubris'],
    },

    // True/False - Cultural Context
    {
      id: 'q6',
      question: 'Greeks believed that without proper burial rites, the soul could not enter Hades and would wander eternally.',
      type: 'true-false',
      points: 10,
      options: ['True', 'False'],
      correctAnswer: 'True',
      explanation: 'True! This religious belief made body recovery a sacred duty. Greeks risked their lives to recover fallen comrades because burial rites were essential for the soul\'s rest. This explains why the battle over Patroclus\'s body is so fierce.',
      relatedLearningPoints: ['lp-ch3-8-burial-importance', 'lp-ch3-14-body-recovery'],
    },

    // Multiple Choice - Divine Intervention
    {
      id: 'q7',
      question: 'Who ultimately kills Patroclus?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'Apollo strikes him, a minor Trojan wounds him, then Hector delivers the killing blow',
        'Hector kills him in single combat',
        'Apollo kills him directly',
        'Paris shoots him with an arrow',
      ],
      correctAnswer: 'Apollo strikes him, a minor Trojan wounds him, then Hector delivers the killing blow',
      explanation: 'Patroclus\'s death requires divine intervention (Apollo\'s strike), a cowardly stab from behind (minor warrior), and finally Hector\'s spear. This emphasizes that Patroclus was formidable—it took a god, multiple warriors, and fate itself to bring him down.',
      relatedLearningPoints: ['lp-ch3-10-divine-punishment', 'lp-ch3-11-tragic-death'],
    },

    // Short Answer - Character Name
    {
      id: 'q8',
      question: 'Which son of Zeus does Patroclus kill, causing Zeus to weep tears of blood?',
      type: 'short-answer',
      points: 10,
      correctAnswer: 'Sarpedon',
      explanation: 'Sarpedon, son of Zeus and king of Lycia, is killed by Patroclus. Zeus considers saving his son but Hera reminds him that not even gods can overturn fate when its time has come. Zeus weeps tears of blood but lets Sarpedon die.',
      relatedLearningPoints: ['lp-ch3-7-fate-supreme', 'lp-ch3-7-peak-moment'],
    },

    // Multiple Choice - Thematic Analysis
    {
      id: 'q9',
      question: 'What makes Patroclus\'s death especially tragic?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'He was the best warrior',
        'He dies because of virtues (compassion, courage) rather than vices',
        'He was fighting for the wrong side',
        'No one mourned him',
      ],
      correctAnswer: 'He dies because of virtues (compassion, courage) rather than vices',
      explanation: 'Patroclus\'s death is tragic because he dies for being too good—his compassion makes him fight, his courage makes him excel, and his heroic spirit makes him exceed limits. His virtues, not his flaws, cause his doom.',
      relatedLearningPoints: ['lp-ch3-11-tragic-death', 'lp-ch3-12a-heroic'],
    },

    // Self-Assessment - Analysis
    {
      id: 'q10',
      question: 'Analyze the theme of fate versus free will in Patroclus\'s death. Consider: Did Patroclus choose his fate by ignoring Achilles\' warning? Did the gods determine his death? How does the Iliad portray the relationship between human choice and divine will?',
      type: 'self-assessment',
      points: 20,
      modelAnswer: `Patroclus's death embodies the Iliad's complex view of fate and free will—characters make genuine choices, yet those choices fulfill predetermined destinies. Patroclus freely chooses to beg Achilles, freely chooses to pursue the Trojans beyond the ships, and freely chooses to attack Troy's walls. These are his decisions, driven by his character (compassion, courage, heroic aspiration).

Yet fate was always leading to this moment. Zeus had promised Thetis that Greeks would lose without Achilles. Apollo protects Troy and will not let it fall to anyone but the Greeks' wooden horse. Even Zeus cannot save his own son Sarpedon when fate decrees his death. Patroclus was always going to die this day—the prophecies, the divine plans, and narrative structure make this clear.

The paradox is that Patroclus's free choices are simultaneously the mechanism of fate. He chooses to exceed his limits, but Apollo was waiting to punish that choice. He makes decisions freely, but those decisions perfectly fulfill the predetermined plan. Greek tragedy doesn't resolve this paradox—it presents human beings as genuinely responsible for their choices while simultaneously trapped in patterns they cannot escape. Patroclus is both agent (he chooses) and victim (fate determines outcome).`,
      assessmentCriteria: [
        {
          id: 'crit1',
          text: 'Discussed Patroclus\'s genuine choices (ignoring warning, pursuing to walls)',
          points: 7,
        },
        {
          id: 'crit2',
          text: 'Explained how divine will and fate were already determining outcomes',
          points: 7,
        },
        {
          id: 'crit3',
          text: 'Analyzed the paradox of simultaneous free will and fate in Greek tragedy',
          points: 6,
        },
      ],
      explanation: 'This question explores Greek tragedy\'s central philosophical tension: humans act freely yet fulfill predetermined fate. The Iliad presents both as true simultaneously.',
      relatedLearningPoints: ['lp-ch3-7-fate-supreme', 'lp-ch3-12-ambiguity', 'lp-ch3-13-causation-chain'],
    },
  ],
};

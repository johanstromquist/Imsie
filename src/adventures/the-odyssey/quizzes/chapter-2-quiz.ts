import type { Quiz } from '../../../types';

export const chapter2Quiz: Quiz = {
  id: 'quiz-chapter-2',
  title: 'Chapter 2 Quiz: Circe and the Underworld',
  description: 'Test your knowledge of Odysseus\'s encounter with Circe, the journey to the Underworld, and the prophecy that guides his path home.',
  passingScore: 70,
  allowRetry: true,

  questions: [
    // Multiple Choice - Circe's Power
    {
      id: 'q1',
      question: 'What did Circe transform Odysseus\'s men into?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'Wolves and lions',
        'Swine (pigs)',
        'Birds',
        'Statues',
      ],
      correctAnswer: 'Swine (pigs)',
      explanation: 'Circe used her drugged wine and magic wand to transform Odysseus\'s men into swine. This transformation symbolizes the loss of human reason and civilization—a reversion to base, animal desires. Their minds remained human, making the transformation even more horrifying.',
      relatedLearningPoints: [],
    },

    // Multiple Choice - Divine Aid
    {
      id: 'q2',
      question: 'Which god helped Odysseus resist Circe\'s magic?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'Zeus, king of the gods',
        'Athena, goddess of wisdom',
        'Hermes, the messenger god',
        'Apollo, god of prophecy',
      ],
      correctAnswer: 'Hermes, the messenger god',
      explanation: 'Hermes appeared to Odysseus and gave him the moly herb, which would protect him from Circe\'s magic. This divine intervention demonstrates a key element of Greek epics—heroes require the gods\' assistance to overcome supernatural challenges.',
      relatedLearningPoints: [],
    },

    // True/False - Greek Afterlife
    {
      id: 'q3',
      question: 'The Greek Underworld was divided into Heaven and Hell based on moral behavior, like Christian concepts of the afterlife.',
      type: 'true-false',
      points: 10,
      options: ['True', 'False'],
      correctAnswer: 'False',
      explanation: 'False. The Greek Underworld (Hades) was generally a neutral, gray realm where most souls existed as weakened shadows in the Fields of Asphodel. Unlike the Christian Heaven/Hell dichotomy, only exceptional individuals went to Elysium (paradise) or Tartarus (punishment). The focus was on memory and shadow-existence rather than moral reward and punishment.',
      relatedLearningPoints: [],
    },

    // Multiple Choice - Prophecy
    {
      id: 'q4',
      question: 'Why did Odysseus journey to the Underworld?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'To rescue a fallen comrade',
        'To consult the prophet Tiresias about reaching home',
        'To retrieve a magical weapon',
        'To appease the god Hades',
      ],
      correctAnswer: 'To consult the prophet Tiresias about reaching home',
      explanation: 'Circe told Odysseus that before he could return to Ithaca, he must journey to the Underworld to consult the shade of Tiresias, the blind prophet. Only Tiresias could tell him how to navigate the remaining dangers and reach home. This journey to the Underworld (katabasis) is a common heroic motif representing confrontation with mortality.',
      relatedLearningPoints: [],
    },

    // Matching - Key Elements
    {
      id: 'q5',
      question: 'Match each element to its significance in the story:',
      type: 'matching',
      points: 15,
      correctAnswer: {
        'Moly herb': 'Divine protection against enchantment',
        'River Styx oath': 'Unbreakable vow binding even gods',
        'Sacrificial blood': 'Restores consciousness to the dead',
        'Helios\'s cattle': 'Test of restraint that Tiresias warns about',
      },
      explanation: 'Each element plays a crucial role in the chapter: the moly herb (given by Hermes) protects Odysseus from transformation, the oath by the River Styx binds Circe to her promise of friendship, sacrificial blood temporarily gives shades memory and awareness, and Helios\'s cattle represent the critical test of discipline that Tiresias prophesies will determine the crew\'s fate.',
      relatedLearningPoints: [],
    },

    // True/False - Transformation Theme
    {
      id: 'q6',
      question: 'When Circe restored Odysseus\'s men to human form, they became younger, stronger, and more handsome than before.',
      type: 'true-false',
      points: 10,
      options: ['True', 'False'],
      correctAnswer: 'True',
      explanation: 'True. After swearing her oath, Circe not only restored the men to human form but improved them—making them younger, stronger, and more handsome. This demonstrates that transformation can sometimes enhance rather than diminish, and shows Circe\'s power being used benevolently once she becomes an ally.',
      relatedLearningPoints: [],
    },

    // Multiple Choice - Literary Device
    {
      id: 'q7',
      question: 'What does transformation into animals symbolize in this chapter?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'The gods\' cruelty toward mortals',
        'The loss of human reason and reversion to base desires',
        'The superiority of animals over humans',
        'The inevitability of fate',
      ],
      correctAnswer: 'The loss of human reason and reversion to base desires',
      explanation: 'Transformation into swine symbolizes the loss of human reason and civilization—becoming ruled by base, animal desires rather than rational thought. The men\'s minds remain human while trapped in animal bodies, emphasizing the horror of losing one\'s humanity and the fragile boundary between civilization and savagery.',
      relatedLearningPoints: [],
    },

    // Multiple Choice - Cultural Context
    {
      id: 'q8',
      question: 'Why must the shades in Hades drink sacrificial blood?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'To punish them for their sins in life',
        'To temporarily restore their consciousness and memory',
        'To resurrect them and bring them back to life',
        'To appease the gods and gain entry to Elysium',
      ],
      correctAnswer: 'To temporarily restore their consciousness and memory',
      explanation: 'In Greek belief, the shades in Hades exist in a weakened, mindless state. Drinking sacrificial blood temporarily restores their consciousness and memory, allowing them to recognize visitors and speak coherently. This ritual is essential for Odysseus to communicate meaningfully with Tiresias and other dead souls.',
      relatedLearningPoints: [],
    },

    // True/False - Character Analysis
    {
      id: 'q9',
      question: 'Odysseus remained on Circe\'s island for one year, delayed by comfort and forgetfulness rather than magic.',
      type: 'true-false',
      points: 10,
      options: ['True', 'False'],
      correctAnswer: 'True',
      explanation: 'True. Although Circe no longer used magic against Odysseus, he and his men stayed for a full year, enchanted by comfort, abundant food, and ease. This represents the temptation to abandon the difficult journey home for pleasure and forgetfulness—a recurring challenge in The Odyssey. Only when his men remind him of home does Odysseus resolve to continue.',
      relatedLearningPoints: [],
    },

    // Multiple Choice - Prophecy Content
    {
      id: 'q10',
      question: 'What does Tiresias prophesy will happen if Odysseus\'s men harm Helios\'s cattle?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'They will all be transformed into animals',
        'They will be blessed with swift passage home',
        'The ship and crew will be destroyed; only Odysseus may survive',
        'They will wander the seas forever as ghosts',
      ],
      correctAnswer: 'The ship and crew will be destroyed; only Odysseus may survive',
      explanation: 'Tiresias warns that if the men harm Helios\'s sacred cattle, he foresees destruction for the ship and crew. Only Odysseus may escape, reaching home late, in a stranger\'s ship, with trouble awaiting him. This prophecy creates dramatic irony—the audience knows the danger while watching events unfold.',
      relatedLearningPoints: [],
    },
  ],
};

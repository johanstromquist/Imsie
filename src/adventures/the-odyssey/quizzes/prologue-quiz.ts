import type { Quiz } from '../../../types';

export const prologueQuiz: Quiz = {
  id: 'quiz-prologue',
  title: 'Prologue Quiz: The Bard\'s Tale',
  description: 'Test your knowledge of epic poetry, ancient Greek culture, and the context for Odysseus\'s legendary journey.',
  passingScore: 70,
  allowRetry: true,

  questions: [
    {
      id: 'q1',
      question: 'How did ancient Greeks primarily experience epic poetry like the Odyssey?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'By reading scrolls privately at home',
        'Through live performances by traveling bards',
        'In written form at libraries',
        'Through school lessons',
      ],
      correctAnswer: 'Through live performances by traveling bards',
      explanation: 'Ancient Greeks experienced epic poetry through live performances by bards who memorized thousands of lines and recited them with musical accompaniment. This oral tradition was the primary form of literary experience.',
      relatedLearningPoints: ['prologue-lp-1-oral-tradition', 'prologue-lp-5-bard-role'],
    },

    {
      id: 'q2',
      question: 'What is the purpose of the invocation "Sing to me, O Muse..." at the beginning of an epic poem?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'To show off the poet\'s knowledge',
        'To request divine inspiration and establish the tale\'s authority',
        'To confuse the audience',
        'To fill time before the real story begins',
      ],
      correctAnswer: 'To request divine inspiration and establish the tale\'s authority',
      explanation: 'Epic poems traditionally begin by invoking the Muse (goddess of inspiration) to request divine guidance and establish that the tale has sacred importance. This ritual opening signals the beginning of a significant performance.',
      relatedLearningPoints: ['prologue-lp-2-invocation'],
    },

    {
      id: 'q3',
      question: 'What was Odysseus\'s greatest contribution to winning the Trojan War?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'His unmatched strength in battle',
        'Devising the Trojan Horse stratagem',
        'His skill with a bow and arrow',
        'Leading the largest army',
      ],
      correctAnswer: 'Devising the Trojan Horse stratagem',
      explanation: 'Odysseus devised the Trojan Horse—a giant wooden horse presented as a gift, with Greek warriors hidden inside. When the Trojans brought it into their city, the Greeks emerged and opened the gates. This demonstrates Odysseus\'s defining trait: winning through intelligence and strategy.',
      relatedLearningPoints: ['prologue-lp-3-trojan-war', 'prologue-lp-4-odysseus-cunning'],
    },

    {
      id: 'q4',
      question: 'What does the epithet "polytropos" (man of many ways) reveal about Odysseus?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'He travels many roads',
        'He is adaptable, cunning, and complex',
        'He has many weapons',
        'He rules many cities',
      ],
      correctAnswer: 'He is adaptable, cunning, and complex',
      explanation: 'Polytropos means "of many turns" or "versatile"—it captures Odysseus\'s adaptability, intelligence, and complex nature. His mind is his greatest weapon, allowing him to find solutions where others see only obstacles.',
      relatedLearningPoints: ['prologue-lp-7-odysseus-character'],
    },

    {
      id: 'q5',
      question: 'What purpose did repeated phrases like "wine-dark sea" and "rosy-fingered dawn" serve?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'They were just decorative poetry',
        'They helped bards memorize thousands of lines and maintain meter',
        'They were translation errors',
        'They confused listeners',
      ],
      correctAnswer: 'They helped bards memorize thousands of lines and maintain meter',
      explanation: 'These formulaic epithets served practical purposes in oral tradition—they helped bards memorize vast amounts of poetry, provided ready-made phrases that fit the meter, and created rhythm and consistency in performance.',
      relatedLearningPoints: ['prologue-lp-6-oral-formulas', 'prologue-lp-13-epithets', 'prologue-lp-14-formulas'],
    },

    {
      id: 'q6',
      question: 'What is "nostos" and why is it central to the Odyssey?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'Nostos means "glory"; Odysseus seeks fame',
        'Nostos means "homecoming"; the story is about returning home',
        'Nostos means "revenge"; Odysseus wants to punish enemies',
        'Nostos means "treasure"; Odysseus seeks wealth',
      ],
      correctAnswer: 'Nostos means "homecoming"; the story is about returning home',
      explanation: 'Nostos means "homecoming" and is the central theme of the Odyssey. The entire epic revolves around Odysseus\'s desperate journey to return to Ithaca, his home, his wife Penelope, and his son Telemachus—representing the deep human need to return to where we belong.',
      relatedLearningPoints: ['prologue-lp-9-nostos'],
    },

    {
      id: 'q7',
      question: 'What is "xenia" in ancient Greek culture?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'The sacred duty of hospitality between hosts and guests',
        'A type of ancient Greek weapon',
        'The name for Greek ships',
        'A religious festival',
      ],
      correctAnswer: 'The sacred duty of hospitality between hosts and guests',
      explanation: 'Xenia was the sacred code of hospitality—hosts must welcome strangers and provide food and shelter, while guests must respect their hosts. This was protected by Zeus himself, and violations of xenia were serious religious and social offenses.',
      relatedLearningPoints: ['prologue-lp-15-xenia', 'prologue-lp-16-xenia-reciprocal'],
    },

    {
      id: 'q8',
      question: 'According to the ancient Greek world map, what shape did they believe the Earth to be?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'A perfect sphere',
        'A flat disc surrounded by ocean',
        'A cube',
        'Infinitely flat in all directions',
      ],
      correctAnswer: 'A flat disc surrounded by ocean',
      explanation: 'The Hecataeus map shows the ancient Greek conception of the world as a circular disc with three continents (Europe, Libya/Africa, and Asia) surrounded by an endless ocean. The edges of this ocean represented the boundary between the known world and mythological realms.',
      relatedLearningPoints: ['prologue-lp-11-geography-myth', 'prologue-lp-12-epic-geography'],
    },

    {
      id: 'q9',
      question: 'What is "hubris" and why is it dangerous in Greek culture?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'Hubris is courage; it\'s celebrated by the gods',
        'Hubris is excessive pride; the gods punish mortals who forget their place',
        'Hubris is wisdom; it makes heroes successful',
        'Hubris is strength; it wins battles',
      ],
      correctAnswer: 'Hubris is excessive pride; the gods punish mortals who forget their place',
      explanation: 'Hubris is excessive pride or arrogance, especially toward the gods. It represents the classic tragic flaw in Greek literature—mortals who overstep their bounds and forget they are not divine face punishment from the gods.',
      relatedLearningPoints: ['prologue-lp-8-hubris-theme'],
    },

    {
      id: 'q10',
      question: 'Which goddess serves as Odysseus\'s divine patron?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'Hera',
        'Aphrodite',
        'Athena',
        'Artemis',
      ],
      correctAnswer: 'Athena',
      explanation: 'Athena, the grey-eyed goddess of wisdom and strategic warfare, favors Odysseus because they share qualities of intelligence, strategy, and eloquence. She serves as his divine patron and will help him when she can—though even gods must respect each other\'s domains.',
      relatedLearningPoints: ['prologue-lp-18-athena-patron'],
    },

    {
      id: 'q11',
      question: 'Who was Penelope and why is she important to Odysseus\'s journey?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'A goddess who helps him sail',
        'His loyal wife in Ithaca—the embodiment of what he\'s fighting to reach',
        'A sorceress who enchants him',
        'The queen of Troy',
      ],
      correctAnswer: 'His loyal wife in Ithaca—the embodiment of what he\'s fighting to reach',
      explanation: 'Penelope is Odysseus\'s wife, known for her intelligence, loyalty, and endurance. She represents what Odysseus fights to return to—home, family, and belonging. She is his equal in cunning and serves as one of Greek literature\'s most complex female characters.',
      relatedLearningPoints: ['prologue-lp-10-penelope-loyalty'],
    },

    {
      id: 'q12',
      question: 'How long did the Trojan War last?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'One year',
        'Five years',
        'Ten years',
        'Twenty years',
      ],
      correctAnswer: 'Ten years',
      explanation: 'The Trojan War lasted ten years—a brutal siege that ended only when Odysseus devised the Trojan Horse stratagem. This ten-year war will be followed by another ten years of wandering before Odysseus reaches home, making his total absence twenty years.',
      relatedLearningPoints: ['prologue-lp-3-trojan-war'],
    },

    {
      id: 'q13',
      question: 'True or False: Bards were merely entertainers in ancient Greek society.',
      type: 'true-false',
      points: 10,
      options: ['True', 'False'],
      correctAnswer: 'False',
      explanation: 'False! Bards were far more than entertainers—they were cultural educators who preserved historical memory, taught ethical lessons, celebrated heroes, and maintained the shared stories that defined Greek identity. Their role was sacred and essential to society.',
      relatedLearningPoints: ['prologue-lp-5-bard-role'],
    },

    {
      id: 'q14',
      question: 'Why did Homer set Odysseus\'s adventures at the edges of the known world?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'To accurately document geography',
        'To create a mythological space where the impossible becomes possible',
        'Because he didn\'t know real geography',
        'To confuse his audience',
      ],
      correctAnswer: 'To create a mythological space where the impossible becomes possible',
      explanation: 'By setting adventures beyond the boundaries of the known world—in that liminal space between reality and myth—Homer created a realm where cyclopes, sirens, and gods could exist. This literary space allows exploration of human limits and virtues through fantastical encounters.',
      relatedLearningPoints: ['prologue-lp-12-epic-geography'],
    },

    {
      id: 'q15',
      question: 'What role does divine intervention play in Greek epic poetry?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'Gods never interfere with mortals',
        'Gods actively help or hinder mortals, shaping their destinies',
        'Gods only appear at the beginning',
        'Gods are purely symbolic with no real influence',
      ],
      correctAnswer: 'Gods actively help or hinder mortals, shaping their destinies',
      explanation: 'Divine intervention is central to Greek epic—gods have favorites and enemies, take sides, and actively intervene in mortal affairs. They shape destinies, create obstacles, and provide aid. The interplay between divine will and mortal choice drives epic narratives.',
      relatedLearningPoints: ['prologue-lp-17-divine-intervention'],
    },
  ],
};

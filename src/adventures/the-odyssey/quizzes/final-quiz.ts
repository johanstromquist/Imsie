import type { Quiz } from '../../../types';

export const finalQuiz: Quiz = {
  id: 'quiz-final-odyssey',
  title: 'The Odyssey: Final Comprehensive Quiz',
  description: 'Test your complete understanding of The Odyssey, its themes, characters, literary significance, and historical context',
  passingScore: 70,
  allowRetry: true,

  questions: [
    // Prologue: Epic structure and divine intervention
    {
      id: 'fq1',
      question: 'What narrative technique does The Odyssey use by beginning in the middle of Odysseus\'s journey rather than at the start?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'In medias res - beginning in the middle of action',
        'Flashback sequence',
        'Stream of consciousness',
        'Epistolary narrative',
      ],
      correctAnswer: 'In medias res - beginning in the middle of action',
      explanation: 'The Odyssey famously begins "in medias res" (in the middle of things), starting with Odysseus stranded on Calypso\'s island rather than at the beginning of his journey. This epic convention creates immediate dramatic tension and allows Homer to reveal the earlier adventures through storytelling.',
      relatedLearningPoints: [],
    },

    // Prologue: Divine intervention
    {
      id: 'fq2',
      question: 'Which goddess consistently advocates for Odysseus throughout his journey?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'Hera',
        'Athena',
        'Aphrodite',
        'Artemis',
      ],
      correctAnswer: 'Athena',
      explanation: 'Athena, goddess of wisdom and warfare, is Odysseus\'s divine patron throughout The Odyssey. She repeatedly intervenes on his behalf with Zeus, helps him in disguise, and guides both him and his son Telemachus. Her support reflects the Greek value of metis (cunning intelligence) that Odysseus embodies.',
      relatedLearningPoints: [],
    },

    // Chapter 1: Hubris
    {
      id: 'fq3',
      question: 'What fatal mistake does Odysseus make after escaping from Polyphemus the Cyclops?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'He forgets to sacrifice to the gods',
        'He reveals his true name, leading to Poseidon\'s curse',
        'He returns to steal more sheep',
        'He leaves men behind in the cave',
      ],
      correctAnswer: 'He reveals his true name, leading to Poseidon\'s curse',
      explanation: 'After successfully escaping, Odysseus\'s hubris (excessive pride) compels him to reveal his true identity to the blinded Cyclops. This allows Polyphemus to pray to his father Poseidon for vengeance, cursing Odysseus\'s journey home. This moment demonstrates how hubris, a key tragic flaw in Greek literature, can undo even the cleverest plans.',
      relatedLearningPoints: [],
    },

    // Chapter 1: Xenia
    {
      id: 'fq4',
      question: 'The Cyclops Polyphemus violates the sacred Greek principle of xenia. What is xenia?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'The right to trial by combat',
        'Sacred hospitality owed to travelers and guests',
        'Respect for the dead',
        'Loyalty to one\'s family',
      ],
      correctAnswer: 'Sacred hospitality owed to travelers and guests',
      explanation: 'Xenia was the ancient Greek concept of sacred hospitality - hosts were obligated to welcome strangers, provide food and shelter, and protect guests. Polyphemus\'s murder and consumption of Odysseus\'s men is a horrifying violation of this fundamental cultural value, marking him as a monster beyond the bounds of civilization.',
      relatedLearningPoints: [],
    },

    // Chapter 2: Transformation
    {
      id: 'fq5',
      question: 'What does the sorceress Circe transform Odysseus\'s men into?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'Wolves',
        'Birds',
        'Swine (pigs)',
        'Stone statues',
      ],
      correctAnswer: 'Swine (pigs)',
      explanation: 'Circe transforms Odysseus\'s scouting party into swine. This transformation serves as a metaphor for how the men have surrendered to their base desires and lost their humanity. Only Odysseus, protected by the magical herb moly and his own self-control, can resist her magic and save his crew.',
      relatedLearningPoints: [],
    },

    // Chapter 2: Underworld
    {
      id: 'fq6',
      question: 'Why does Odysseus journey to the Underworld (Hades)?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'To retrieve a stolen treasure',
        'To consult the prophet Tiresias about his journey home',
        'To rescue a fallen comrade',
        'To challenge the god of death',
      ],
      correctAnswer: 'To consult the prophet Tiresias about his journey home',
      explanation: 'Circe directs Odysseus to the Underworld to seek the counsel of the blind prophet Tiresias, who can tell him how to reach Ithaca and what awaits him there. This journey to the realm of the dead (katabasis) is a common hero\'s journey motif, representing a descent into darkness before eventual triumph.',
      relatedLearningPoints: [],
    },

    // Chapter 2: Greek afterlife
    {
      id: 'fq7',
      question: 'True or False: In Homer\'s Odyssey, the Underworld (Hades) is portrayed as a place of judgment where the virtuous are rewarded and the wicked are punished.',
      type: 'true-false',
      points: 10,
      options: ['True', 'False'],
      correctAnswer: 'False',
      explanation: 'False. Unlike later concepts of heaven and hell, Homer\'s Underworld is not primarily a place of moral judgment. Instead, the dead exist as pale "shades"—weakened, shadowy versions of their living selves, regardless of whether they were good or evil in life. A few exceptional cases (like Tantalus) suffer punishment, but most shades simply exist in a diminished state. This reflects ancient Greek beliefs that emphasized the value of mortal life over the afterlife, making heroic glory in life more important than reward after death.',
      relatedLearningPoints: [],
    },

    // Chapter 3: Sirens
    {
      id: 'fq8',
      question: 'How does Odysseus manage to hear the Sirens\' song without succumbing to it?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'He wears magical earplugs',
        'He has his men tie him to the mast while they plug their ears with beeswax',
        'He sails too far away to hear them',
        'Athena makes him temporarily deaf',
      ],
      correctAnswer: 'He has his men tie him to the mast while they plug their ears with beeswax',
      explanation: 'Odysseus demonstrates his characteristic cunning by devising a plan to experience the Sirens\' legendary song without dying for it. His men plug their ears with beeswax so they cannot hear, while Odysseus has himself bound to the mast so he can hear but cannot steer the ship to destruction. This represents the tension between the desire for knowledge and the need for safety.',
      relatedLearningPoints: [],
    },

    // Chapter 3: Impossible choices
    {
      id: 'fq9',
      question: 'When facing the strait between Scylla and Charybdis, what impossible choice must Odysseus make?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'Between saving his ship or his treasure',
        'Between risking losing some men to Scylla or losing the entire ship to Charybdis',
        'Between fighting monsters or turning back',
        'Between his duty and his desire to go home',
      ],
      correctAnswer: 'Between risking losing some men to Scylla or losing the entire ship to Charybdis',
      explanation: 'Odysseus faces an impossible leadership dilemma: sail close to Scylla (a six-headed monster who will devour six men) or near Charybdis (a whirlpool that will destroy the entire ship). He chooses to sacrifice six men rather than risk everyone, a decision that haunts him. This represents the terrible burden of command and the theme that some choices have no good outcome.',
      relatedLearningPoints: [],
    },

    // Chapter 4: Divine law
    {
      id: 'fq10',
      question: 'What sacred law do Odysseus\'s crew violate on the island of Thrinacia?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'They kill the sacred cattle of the sun god Helios',
        'They steal treasure from a temple',
        'They refuse to make proper sacrifices',
        'They dishonor their captain',
      ],
      correctAnswer: 'They kill the sacred cattle of the sun god Helios',
      explanation: 'Despite Odysseus\'s warnings, his starving crew slaughters and eats Helios\'s sacred cattle while Odysseus sleeps. This violation of divine law brings swift and terrible punishment - Zeus destroys their ship with a thunderbolt, killing everyone but Odysseus. This demonstrates the Greek belief that mortals cannot escape the consequences of offending the gods.',
      relatedLearningPoints: [],
    },

    // Chapter 4: Calypso
    {
      id: 'fq11',
      question: 'Calypso offers Odysseus immortality if he stays with her. Why does he refuse?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'He fears the gods will punish him',
        'He doesn\'t believe her offer',
        'His longing for home, mortality, and his mortal family outweighs immortality',
        'He is tricked into leaving',
      ],
      correctAnswer: 'His longing for home, mortality, and his mortal family outweighs immortality',
      explanation: 'Odysseus chooses mortality and homecoming (nostos) over immortality with Calypso. This choice reveals the central theme of The Odyssey - that home, family, and mortal identity are more valuable than even eternal life. It affirms the Greek belief that meaning comes from mortal existence, relationships, and belonging rather than escaping the human condition.',
      relatedLearningPoints: [],
    },

    // Chapter 5: Disguise and identity
    {
      id: 'fq12',
      question: 'When Odysseus finally returns to Ithaca, Athena disguises him as what?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'A young warrior',
        'An old beggar',
        'A traveling merchant',
        'A priest',
      ],
      correctAnswer: 'An old beggar',
      explanation: 'Athena disguises Odysseus as an old beggar so he can assess the situation in his palace unrecognized. This disguise allows him to see who has remained loyal and who has betrayed him. The theme of disguise and recognition is central to The Odyssey, raising questions about identity - is Odysseus defined by his appearance, his cunning, his relationships, or his position as king?',
      relatedLearningPoints: [],
    },

    // Chapter 5: Recognition
    {
      id: 'fq13',
      question: 'How does Penelope finally verify that the stranger is truly Odysseus?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'By his physical appearance',
        'Through a secret about their immovable bed that only they know',
        'By making him complete heroic challenges',
        'Through a birthmark',
      ],
      correctAnswer: 'Through a secret about their immovable bed that only they know',
      explanation: 'Penelope tests the stranger by ordering servants to move their marriage bed. When Odysseus protests that this is impossible because he built the bed around a living olive tree rooted in the ground, Penelope knows it is truly him - only Odysseus would know this secret. This intimate knowledge, rather than physical prowess, proves identity and demonstrates the depth of their relationship.',
      relatedLearningPoints: [],
    },

    // Epilogue: Hero's journey
    {
      id: 'fq14',
      question: 'True or False: The Odyssey follows the classic hero\'s journey pattern of departure, initiation through trials, and return with transformation.',
      type: 'true-false',
      points: 10,
      options: ['True', 'False'],
      correctAnswer: 'True',
      explanation: 'True. Odysseus experiences all the classic stages of the hero\'s journey: departure from home (leaving Troy), initiation through trials and transformation (his ten years of adventures facing monsters and gods), descent into the underworld (visiting Hades), and return with wisdom (reclaiming his throne in Ithaca). This pattern, later identified by scholar Joseph Campbell, appears in countless stories across cultures, making The Odyssey a foundational example for understanding narrative structure in literature and film.',
      relatedLearningPoints: [],
    },

    // Epilogue: Oral tradition
    {
      id: 'fq15',
      question: 'The Odyssey was originally part of an oral tradition before being written down. What literary devices reflect this oral heritage?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'Complex metaphors and abstract language',
        'Repetitive epithets like "wine-dark sea" and "swift-footed Achilles"',
        'Experimental narrative structures',
        'Minimal description and dialogue',
      ],
      correctAnswer: 'Repetitive epithets like "wine-dark sea" and "swift-footed Achilles"',
      explanation: 'Homer\'s epics are filled with repeated phrases and epithets that served as memory aids for oral performers. Phrases like "rosy-fingered dawn," "wine-dark sea," and "grey-eyed Athena" helped bards remember and recite the thousands of lines of verse. These formulas also created a rhythmic, poetic quality that made the epic memorable for audiences.',
      relatedLearningPoints: [],
    },

    // Matching: Themes and values
    {
      id: 'fq16',
      question: 'Match each Greek concept explored in The Odyssey with its meaning:',
      type: 'matching',
      points: 15,
      correctAnswer: {
        'Nostos': 'The longing for and journey back home',
        'Xenia': 'Sacred hospitality owed to guests and strangers',
        'Hubris': 'Excessive pride that leads to downfall',
        'Metis': 'Cunning intelligence and cleverness',
      },
      explanation: 'These four concepts are central to understanding The Odyssey. Nostos (homecoming) drives the entire narrative. Xenia (hospitality) determines who is civilized versus monstrous. Hubris (excessive pride) repeatedly endangers Odysseus. Metis (cunning intelligence) is Odysseus\'s greatest strength and what ultimately saves him.',
      relatedLearningPoints: [],
    },

    // Matching: Obstacles and lessons
    {
      id: 'fq17',
      question: 'Match each obstacle Odysseus faces with the primary lesson or theme it represents:',
      type: 'matching',
      points: 15,
      correctAnswer: {
        'Lotus-Eaters': 'Temptation to forget duty and home',
        'Circe': 'Transformation and the danger of surrendering to desire',
        'Sirens': 'The tension between knowledge and safety',
        'Helios\'s Cattle': 'Divine law cannot be violated without consequence',
      },
      explanation: 'Each of Odysseus\'s trials teaches different lessons. The Lotus-Eaters represent the seductive danger of forgetting responsibility. Circe shows how desire can transform and diminish humanity. The Sirens embody the risk of curiosity. Helios\'s cattle demonstrate that divine law is inviolable. Together, these form a comprehensive education in Greek values and wisdom.',
      relatedLearningPoints: [],
    },

    // Self-Assessment: Comprehensive analysis
    {
      id: 'fq18',
      question: 'Analyze the theme of identity in The Odyssey. Consider Odysseus\'s various disguises, the recognition scenes, his choice of mortality over immortality with Calypso, and what ultimately defines him as a person. How does Homer explore the question "What makes someone who they are?"',
      type: 'self-assessment',
      points: 25,
      modelAnswer: `The Odyssey deeply explores identity through multiple lenses, asking what truly defines a person when everything external is stripped away. Odysseus loses his ships, his men, his possessions, and even his appearance through Athena\'s disguises, yet he remains fundamentally himself.

Homer suggests that identity exists in layers. At the surface level, there are social roles - king, husband, father, warrior. These are what Odysseus reclaims when he returns home. But deeper is memory and intimate knowledge: Penelope recognizes him not by his face but by his knowledge of their immovable bed, a secret only they share. This suggests that relationships and shared experiences form the core of identity.

Most profoundly, Odysseus\'s choice to reject immortality with Calypso reveals that identity is inseparable from mortality and home. To be Odysseus means to be mortal, to age, to belong to Ithaca, to be husband to Penelope and father to Telemachus. His identity is not just individual but relational - he is defined by his connections to people and place. The repeated epithets "man of many ways" and "much-suffering Odysseus" reflect that character traits (cunning, endurance) are also essential to identity.

Through disguises and recognition scenes, Homer shows that true identity transcends appearance. It resides in knowledge, relationships, memories, moral choices, and the fundamental acceptance of one\'s mortal, connected human nature.`,
      assessmentCriteria: [
        {
          id: 'crit1',
          text: 'Discussed how disguises and recognition scenes explore what makes someone recognizable beyond appearance',
          points: 8,
        },
        {
          id: 'crit2',
          text: 'Analyzed Odysseus\'s choice of mortality over immortality and what this reveals about identity',
          points: 8,
        },
        {
          id: 'crit3',
          text: 'Explained how relationships, memories, and connections to home and family define identity',
          points: 9,
        },
      ],
      explanation: 'This question ties together multiple threads from The Odyssey - disguise and recognition, the Calypso episode, the reunion with Penelope, and the overall theme of homecoming. It asks you to synthesize these elements into a coherent interpretation of Homer\'s exploration of human identity.',
      relatedLearningPoints: [],
    },
  ],
};

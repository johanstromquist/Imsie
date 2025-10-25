import type { Quiz } from '../../../types';

/**
 * Chapter 1 Quiz: The Pre-Socratics
 *
 * Tests understanding of the first Greek philosophers, their fundamental questions,
 * and their pioneering methods of rational inquiry.
 */
export const chapter1Quiz: Quiz = {
  id: 'quiz-chapter-1',
  title: 'Chapter 1: The Pre-Socratics Quiz',
  description: 'Test your knowledge of the first Greek philosophers and their revolutionary ideas.',
  passingScore: 70,
  allowRetry: true,

  questions: [
    // Q1: Multiple Choice - Vocabulary/Concept
    {
      id: 'q1',
      question: 'What is the arche in Pre-Socratic philosophy?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'The fundamental principle or substance that underlies all of reality',
        'The name of the first philosophical school in Athens',
        'A type of logical argument used by ancient Greeks',
        'The boundary between the physical and spiritual worlds',
      ],
      correctAnswer: 'The fundamental principle or substance that underlies all of reality',
      explanation: 'The arche is the fundamental principle or substance that Pre-Socratic philosophers believed underlies all of reality. Different philosophers proposed different answers: water (Thales), the boundless (Anaximander), fire (Heraclitus), unchanging being (Parmenides), or atoms (Democritus).',
      relatedLearningPoints: ['lp-ch1-1-arche'],
    },

    // Q2: Short Answer - Factual Recall
    {
      id: 'q2',
      question: 'Which Pre-Socratic philosopher proposed water as the fundamental substance of all things?',
      type: 'short-answer',
      points: 10,
      correctAnswer: 'Thales',
      explanation: 'Thales of Miletus proposed that water is the fundamental substance (arche) of all things. He observed that water exists in multiple states (liquid, solid, vapor) and is essential to life, leading him to this revolutionary natural explanation for the cosmos.',
      relatedLearningPoints: ['lp-ch1-2a-thales'],
    },

    // Q3: Multiple Choice - Concept Understanding
    {
      id: 'q3',
      question: 'What is Anaximander\'s apeiron?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'A specific type of water that can transform into other elements',
        'The boundless, indefinite principle from which all things emerge',
        'The empty space between atoms',
        'The logical method of proving something by contradiction',
      ],
      correctAnswer: 'The boundless, indefinite principle from which all things emerge',
      explanation: 'Anaximander\'s apeiron is the boundless or indefinite principle underlying reality. He argued that the arche could not be any specific element like water because opposites (like fire and water) both exist. Therefore, the fundamental principle must be something indefinite that contains all opposites in potential.',
      relatedLearningPoints: ['lp-ch1-2d-apeiron', 'lp-ch1-3-apeiron-concept'],
    },

    // Q4: True/False - Historical Context
    {
      id: 'q4',
      question: 'Pre-Socratic philosophers explained natural phenomena through divine intervention and mythological stories.',
      type: 'true-false',
      points: 10,
      options: ['True', 'False'],
      correctAnswer: 'False',
      explanation: 'False! Pre-Socratic philosophers were revolutionary precisely because they rejected mythological explanations. Instead, they sought natural explanations for natural phenomena, using rational inquiry and observation. This shift from myth to reason marks the birth of philosophy and science.',
      relatedLearningPoints: ['lp-ch1-3-naturalism'],
    },

    // Q5: Multiple Choice - Heraclitus
    {
      id: 'q5',
      question: 'According to Heraclitus, what is the fundamental nature of reality?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'Everything is eternal and unchanging',
        'Everything is in constant flux and change',
        'Reality is an illusion created by our senses',
        'The cosmos is governed by random chance',
      ],
      correctAnswer: 'Everything is in constant flux and change',
      explanation: 'Heraclitus believed that constant change (flux) is the fundamental nature of reality. His famous saying "you cannot step in the same river twice" illustrates this view—the water is always changing, and even you yourself are constantly changing. He saw fire as the cosmic principle embodying transformation.',
      relatedLearningPoints: ['lp-ch1-4-flux', 'lp-ch1-4-fire'],
    },

    // Q6: Matching - Philosophers and Views
    {
      id: 'q6',
      question: 'Match each philosopher to their fundamental principle or key idea:',
      type: 'matching',
      points: 15,
      correctAnswer: {
        'Thales': 'Water is the arche',
        'Anaximander': 'The boundless (apeiron) is the fundamental principle',
        'Heraclitus': 'Everything flows; fire and constant change',
        'Parmenides': 'Change is impossible; only Being exists',
        'Democritus': 'Atoms and void make up all reality',
      },
      explanation: 'Each Pre-Socratic philosopher proposed a different answer to the question of the fundamental nature of reality. Thales chose water, Anaximander the apeiron, Heraclitus emphasized flux and fire, Parmenides argued for unchanging being, and Democritus proposed atoms moving through the void.',
      relatedLearningPoints: ['lp-ch1-2a-thales', 'lp-ch1-3-apeiron-concept', 'lp-ch1-4-flux', 'lp-ch1-6-parmenides', 'lp-ch1-10-atomism'],
    },

    // Q7: Multiple Choice - Parmenides
    {
      id: 'q7',
      question: 'Why did Parmenides argue that change is impossible?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'Because the gods decreed that reality must be eternal',
        'Because change would require something to come from nothing, which is impossible',
        'Because our senses are too weak to detect real change',
        'Because mathematical proofs show that motion creates paradoxes',
      ],
      correctAnswer: 'Because change would require something to come from nothing, which is impossible',
      explanation: 'Parmenides used rigorous logical argument: for something to come into being, it must come either from being (in which case it already exists) or from non-being (which is nothing and cannot give rise to anything). Therefore, change is impossible. Only eternal, unchanging Being exists; change is mere illusion.',
      relatedLearningPoints: ['lp-ch1-6-parmenides', 'lp-ch1-7-logic'],
    },

    // Q8: True/False - Methodology
    {
      id: 'q8',
      question: 'Parmenides trusted sense experience over logical reasoning when determining the nature of reality.',
      type: 'true-false',
      points: 10,
      options: ['True', 'False'],
      correctAnswer: 'False',
      explanation: 'False! Parmenides privileged reason over sense experience. He argued that our senses deceive us by showing us change and multiplicity, while reason reveals that only unchanging, unified Being exists. This tension between reason and sensation becomes a major theme in Western philosophy.',
      relatedLearningPoints: ['lp-ch1-6-reason'],
    },

    // Q9: Multiple Choice - Zeno's Paradoxes
    {
      id: 'q9',
      question: 'What was the purpose of Zeno\'s paradoxes (like Achilles and the tortoise)?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'To prove mathematically that faster runners always win races',
        'To defend Parmenides by showing that belief in motion leads to logical contradictions',
        'To demonstrate that the gods control all movement in the cosmos',
        'To teach students how to solve problems involving infinite series',
      ],
      correctAnswer: 'To defend Parmenides by showing that belief in motion leads to logical contradictions',
      explanation: 'Zeno created his paradoxes to defend his teacher Parmenides. The paradoxes show that if you accept that motion and change are real, you face deep logical puzzles and contradictions. This supports Parmenides\' claim that change is illusion and only unchanging Being is real. Zeno pioneered the reductio ad absurdum method.',
      relatedLearningPoints: ['lp-ch1-9-paradox', 'lp-ch1-9-method'],
    },

    // Q10: Short Answer - Key Term
    {
      id: 'q10',
      question: 'What Greek word did Democritus use for his indivisible particles, meaning "uncuttable"?',
      type: 'short-answer',
      points: 10,
      correctAnswer: 'atoms',
      explanation: 'Democritus called his indivisible particles "atoms," from the Greek atomos meaning "uncuttable" or "indivisible." He proposed that reality consists of infinitely many eternal, unchanging atoms moving through empty space (the void), combining and separating to create the changes we observe.',
      relatedLearningPoints: ['lp-ch1-10-atomism'],
    },

    // Q11: Multiple Choice - Democritus and Synthesis
    {
      id: 'q11',
      question: 'How did Democritus\' atomism attempt to reconcile the views of Heraclitus and Parmenides?',
      type: 'multiple-choice',
      points: 15,
      options: [
        'He proved both philosophers were completely wrong',
        'He said atoms are unchanging (Parmenides) but their rearrangement creates change (Heraclitus)',
        'He argued that fire and water are both fundamental substances',
        'He showed that logic and observation lead to opposite conclusions',
      ],
      correctAnswer: 'He said atoms are unchanging (Parmenides) but their rearrangement creates change (Heraclitus)',
      explanation: 'Democritus ingeniously synthesized both views: Parmenides was right that being (atoms) is eternal and unchanging, but Heraclitus was right that we observe constant change—which comes from atoms rearranging, not from substances transforming. Both flux and permanence exist at different levels.',
      relatedLearningPoints: ['lp-ch1-10-synthesis', 'lp-ch1-6-debate'],
    },

    // Q12: True/False - Timeline
    {
      id: 'q12',
      question: 'Thales of Miletus came after Parmenides of Elea in the chronological development of Pre-Socratic philosophy.',
      type: 'true-false',
      points: 10,
      options: ['True', 'False'],
      correctAnswer: 'False',
      explanation: 'False! Thales (c. 585 BCE) was the first philosopher and came before Parmenides (c. 475 BCE). The chronological order is: Thales, Anaximander, Heraclitus, Parmenides, Zeno, and then Democritus. Each thinker built upon or reacted against the ideas of their predecessors.',
      relatedLearningPoints: ['lp-ch1-11-chronology', 'lp-ch1-11-progression'],
    },

    // Q13: Self-Assessment - Analysis
    {
      id: 'q13',
      question: 'Analyze the fundamental debate between Heraclitus and Parmenides about change versus permanence. Why is this tension important for the development of Western philosophy? In your answer, explain each philosopher\'s position and discuss how later thinkers might need to address this problem.',
      type: 'self-assessment',
      points: 20,
      modelAnswer: 'Heraclitus and Parmenides represent opposite poles of a fundamental philosophical tension. Heraclitus argued that everything is in constant flux—you cannot step in the same river twice—and that fire embodies the transformative nature of reality. Parmenides, using rigorous logic, argued the opposite: change is impossible because it would require something to come from nothing, which is absurd. Only eternal, unchanging Being exists; change is mere illusion.\n\nThis debate is crucial because it forces philosophers to grapple with how to reconcile what we observe (constant change) with what logic seems to demand (permanence). It raises deep questions: Can we trust our senses? Is reality fundamentally unified or multiple? Is becoming real or is only being real? Later philosophers like Democritus attempted synthesis (unchanging atoms, changing arrangements), while Plato would distinguish between the changing physical world and unchanging Forms. This tension between change and permanence remains central to metaphysics, influencing debates about time, identity, causation, and the nature of reality itself.',
      assessmentCriteria: [
        {
          id: 'crit1',
          text: 'Explained Heraclitus\' view of constant flux and change',
          points: 5,
        },
        {
          id: 'crit2',
          text: 'Explained Parmenides\' logical argument against change and for unchanging Being',
          points: 5,
        },
        {
          id: 'crit3',
          text: 'Discussed why this debate is philosophically important (reconciling observation and reason, questions of unity/multiplicity, being/becoming)',
          points: 6,
        },
        {
          id: 'crit4',
          text: 'Connected to later philosophical developments or enduring philosophical questions',
          points: 4,
        },
      ],
      explanation: 'This question asks you to synthesize the core philosophical tension of the Pre-Socratics and understand its lasting significance. The Heraclitus-Parmenides debate isn\'t just historical—it addresses fundamental questions about reality, knowledge, and the relationship between reason and experience that philosophers still grapple with today.',
      relatedLearningPoints: ['lp-ch1-4-flux', 'lp-ch1-6-parmenides', 'lp-ch1-6-debate', 'lp-ch1-12-questions'],
    },

    // Q14: Multiple Choice - Legacy and Method
    {
      id: 'q14',
      question: 'What was the most significant methodological contribution of Pre-Socratic philosophers to Western thought?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'They proved that Greek gods controlled natural phenomena',
        'They established rational inquiry and natural explanation as methods for seeking truth',
        'They showed that philosophy should focus only on practical matters',
        'They demonstrated that all questions have definite, provable answers',
      ],
      correctAnswer: 'They established rational inquiry and natural explanation as methods for seeking truth',
      explanation: 'The Pre-Socratics\' most important contribution was methodological: they established rational inquiry, logical argument, and natural explanation as the proper methods for seeking truth. Instead of accepting myths, they demanded reasons. Instead of invoking gods, they sought natural principles. This shift from mythos to logos founded both philosophy and science.',
      relatedLearningPoints: ['lp-ch1-12-legacy', 'lp-ch1-3-naturalism'],
    },

    // Q15: Self-Assessment - Reflection
    {
      id: 'q15',
      question: 'Reflect on the significance of Miletus as the birthplace of philosophy. Why do you think philosophical inquiry emerged in this particular place and time rather than elsewhere? Consider geographical, cultural, economic, and social factors that might have created conditions favorable for the birth of rational inquiry.',
      type: 'self-assessment',
      points: 15,
      modelAnswer: 'Miletus was uniquely positioned to become the birthplace of philosophy due to several converging factors. As a prosperous trading port on the Ionian coast, it connected Greece with Egypt, Phoenicia, and other Mediterranean cultures, creating a cosmopolitan environment where diverse ideas and traditions intersected. This cultural exchange exposed thinkers like Thales to Egyptian mathematics and astronomy, broadening intellectual horizons beyond traditional Greek myths.\n\nEconomically, trade created wealth and leisure time necessary for contemplative thought. A merchant class with practical problem-solving skills (navigation, measurement, calculation) developed rational habits of mind. Politically, Ionian cities had more open social structures than aristocratic mainland Greece, allowing new ideas to flourish without rigid religious or political suppression.\n\nMost importantly, this confluence of diverse beliefs likely created intellectual tension: when you encounter multiple contradictory creation myths and cosmologies, you begin to question all of them and seek more universal, rational explanations. The Pre-Socratics emerged not despite but because of this plurality—skepticism toward any single traditional answer opened space for philosophical inquiry.',
      assessmentCriteria: [
        {
          id: 'crit1',
          text: 'Discussed geographical and trade factors (cosmopolitan port, cultural exchange)',
          points: 5,
        },
        {
          id: 'crit2',
          text: 'Considered economic and social conditions (wealth, leisure, merchant class, open society)',
          points: 5,
        },
        {
          id: 'crit3',
          text: 'Analyzed how these factors specifically enabled rational inquiry (exposure to diverse ideas, questioning tradition, intellectual freedom)',
          points: 5,
        },
      ],
      explanation: 'This question asks you to think historically and contextually about why philosophy emerged where and when it did. Understanding the conditions that gave rise to rational inquiry helps us appreciate that philosophy wasn\'t inevitable—it required specific cultural, economic, and social circumstances. This also illuminates what conditions might foster or hinder philosophical thought in any era.',
      relatedLearningPoints: ['lp-ch1-1-miletus', 'lp-ch1-12-legacy'],
    },
  ],
};

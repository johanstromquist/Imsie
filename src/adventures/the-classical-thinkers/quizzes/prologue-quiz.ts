import type { Quiz } from '../../../types';

export const prologueQuiz: Quiz = {
  id: 'quiz-prologue',
  title: 'Prologue: The Birth of Philosophy',
  description: 'Test your understanding of how philosophy emerged in ancient Greece and the shift from mythological to rational thinking.',
  passingScore: 70,
  allowRetry: true,

  questions: [
    // Question 1: Multiple Choice - Core Concept (mythos vs logos)
    {
      id: 'q1',
      question: 'What is the fundamental difference between mythological thinking (mythos) and rational inquiry (logos)?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'Mythos is written down while logos is oral tradition',
        'Mythos explains phenomena through divine agency while logos seeks natural causes through reason',
        'Mythos focuses on the future while logos focuses on the past',
        'Mythos is Greek while logos comes from foreign cultures',
      ],
      correctAnswer: 'Mythos explains phenomena through divine agency while logos seeks natural causes through reason',
      explanation: 'The shift from mythos to logos represents a fundamental change in how people explained the world. Mythological thinking attributed natural phenomena to the actions and emotions of gods, while rational inquiry sought to understand the world through observation, natural patterns, and logical reasoning without invoking supernatural intervention.',
      relatedLearningPoints: ['lp-prologue-1-transformation', 'lp-prologue-3-mythos', 'lp-prologue-4b-logos'],
    },

    // Question 2: True/False - Historical Context
    {
      id: 'q2',
      question: 'Philosophy emerged in isolated, traditional Greek villages far from foreign influence.',
      type: 'true-false',
      points: 10,
      options: ['True', 'False'],
      correctAnswer: 'False',
      explanation: 'False! Philosophy actually emerged in cosmopolitan trading centers like the Ionian coastal cities, where Greek culture encountered diverse foreign influences from Egypt, Persia, and Babylon. This cultural diversity and exposure to alternative worldviews was essential for questioning traditional beliefs and developing new ways of thinking.',
      relatedLearningPoints: ['lp-prologue-2-geography', 'lp-prologue-5-diversity'],
    },

    // Question 3: Multiple Choice - Historical Context (Ionia)
    {
      id: 'q3',
      question: 'Why did philosophy first emerge in the coastal cities of Ionia rather than in other parts of Greece?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'Ionia had the largest population in ancient Greece',
        'Ionia combined economic prosperity, cultural diversity from trade, and distance from traditional religious centers',
        'Ionia was ruled by philosopher-kings who mandated rational inquiry',
        'Ionia had the oldest temples dedicated to the gods of wisdom',
      ],
      correctAnswer: 'Ionia combined economic prosperity, cultural diversity from trade, and distance from traditional religious centers',
      explanation: 'The Ionian cities like Miletus, Ephesus, and Colophon were wealthy trading centers that connected East and West. This prosperity created leisure for intellectual pursuits, while constant contact with foreign merchants brought diverse perspectives that challenged traditional assumptions. The combination of these factors made Ionia the perfect environment for philosophy to emerge.',
      relatedLearningPoints: ['lp-prologue-1-setting', 'lp-prologue-2-geography', 'lp-prologue-2-conditions'],
    },

    // Question 4: Matching - Conditions for Philosophy
    {
      id: 'q4',
      question: 'Match each condition to its role in enabling philosophy to emerge:',
      type: 'matching',
      points: 15,
      correctAnswer: {
        'Economic prosperity': 'Created leisure time for abstract contemplation',
        'Alphabetic writing': 'Allowed complex ideas to be preserved and critiqued',
        'Political debate': 'Trained citizens in logical argument and reasoning',
        'Cultural diversity': 'Exposed Greeks to alternative worldviews',
      },
      explanation: 'Philosophy required multiple enabling conditions: prosperity freed people from survival struggles, literacy allowed ideas to be preserved and built upon, democratic debate taught reasoning skills, and exposure to diverse cultures challenged the assumption that traditional beliefs were self-evidently true. These conditions converged in 6th century BCE Ionia.',
      relatedLearningPoints: ['lp-prologue-2-conditions', 'lp-prologue-5-prosperity', 'lp-prologue-5-literacy', 'lp-prologue-5-diversity'],
    },

    // Question 5: Short Answer - Key Figure
    {
      id: 'q5',
      question: 'What natural substance did Thales propose as the fundamental principle (arche) from which all things arise?',
      type: 'short-answer',
      points: 10,
      correctAnswer: 'water',
      explanation: 'Thales of Miletus proposed that water is the fundamental principle of all things. This was revolutionary because instead of explaining origins through divine beings and genealogies (as Hesiod did), Thales identified a natural substance that could be observed, studied, and understood through reason. Water exists in multiple states, is essential for life, and is found everywhere—making it a rational choice for investigation.',
      relatedLearningPoints: ['lp-prologue-7-thales', 'lp-prologue-8-arche'],
    },

    // Question 6: Multiple Choice - Homer's Influence
    {
      id: 'q6',
      question: 'How did Homer\'s epics (the Iliad and Odyssey) influence traditional Greek thinking before philosophy?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'They encouraged Greeks to question divine authority and seek natural explanations',
        'They reinforced a worldview where gods constantly intervened in human affairs and fate was inscrutable',
        'They promoted scientific observation and rational inquiry',
        'They argued that humans should rely on reason rather than ritual',
      ],
      correctAnswer: 'They reinforced a worldview where gods constantly intervened in human affairs and fate was inscrutable',
      explanation: 'Homer\'s epics were memorized and recited throughout Greece, presenting a universe where divine intervention was constant, fate was beyond human understanding, and the proper response to misfortune was pious acceptance or ritual appeasement. These stories reinforced traditional mythological thinking, which philosophy would later challenge by seeking natural rather than supernatural explanations.',
      relatedLearningPoints: ['lp-prologue-3-homer', 'lp-prologue-3-mythos'],
    },

    // Question 7: True/False - Egyptian and Babylonian Influence
    {
      id: 'q7',
      question: 'Egyptian mathematics and Babylonian astronomy demonstrated that natural phenomena could follow predictable patterns rather than arbitrary divine whim.',
      type: 'true-false',
      points: 10,
      options: ['True', 'False'],
      correctAnswer: 'True',
      explanation: 'True! Egyptian achievements in mathematics (like predicting Nile floods through star observation) and Babylonian success in predicting eclipses and planetary positions showed that the universe operated by regular, discoverable patterns. Even though these cultures attributed their knowledge to divine sources, the fact that their predictions worked suggested natural laws rather than constant divine intervention—an insight that influenced early Greek philosophers.',
      relatedLearningPoints: ['lp-prologue-6-observation', 'lp-prologue-6-regularity', 'lp-prologue-6-foreign'],
    },

    // Question 8: Multiple Choice - Thales vs Hesiod
    {
      id: 'q8',
      question: 'Why is Thales\' water theory considered more "philosophical" than Hesiod\'s Theogony, even though both attempt to explain origins?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'Thales\' theory is longer and more detailed than Hesiod\'s',
        'Thales proposes an observable natural substance that can be studied, while Hesiod personifies cosmic forces as gods',
        'Thales focuses on human morality while Hesiod focuses on nature',
        'Thales was writing for a more educated audience than Hesiod',
      ],
      correctAnswer: 'Thales proposes an observable natural substance that can be studied, while Hesiod personifies cosmic forces as gods',
      explanation: 'Thales\' approach is considered the beginning of philosophy because he explains origins through a natural substance (water) that can be observed, experimented with, and understood through reason. Hesiod explains origins through divine beings (Chaos, Gaia, Eros) with personalities and relationships. While both address the same fundamental question—"How did the world come to be?"—Thales\' method relies on natural investigation rather than mythological narrative.',
      relatedLearningPoints: ['lp-prologue-7-shift', 'lp-prologue-7-thales'],
    },

    // Question 9: Multiple Choice - Concept of Arche
    {
      id: 'q9',
      question: 'What does the Greek concept of "arche" mean in early philosophical thinking?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'The political ruler of a city-state',
        'The fundamental principle or substance from which all reality derives',
        'The sacred texts that contain divine wisdom',
        'The method of teaching philosophy to students',
      ],
      correctAnswer: 'The fundamental principle or substance from which all reality derives',
      explanation: 'The concept of arche (fundamental principle) represents the first distinctly philosophical question: "What is the basic substance or principle from which all reality derives?" This question shifted inquiry from "which god created what?" to "what is everything made of?" Pre-Socratic philosophers proposed different answers—Thales suggested water, others proposed air, fire, earth, or more abstract principles—but all were engaged in rational investigation of nature\'s underlying unity.',
      relatedLearningPoints: ['lp-prologue-8-arche', 'lp-prologue-8-method'],
    },

    // Question 10: Self-Assessment - Analysis
    {
      id: 'q10',
      question: 'Explain how the convergence of multiple historical conditions (economic prosperity, literacy, political culture, and cultural diversity) made 6th century BCE Greece uniquely suited for the emergence of philosophy. Why couldn\'t philosophy have emerged without these conditions?',
      type: 'self-assessment',
      points: 20,
      modelAnswer: 'Philosophy required a unique convergence of conditions in 6th century BCE Greece. Economic prosperity from trade created the leisure necessary for abstract contemplation—people needed freedom from constant survival struggles to ask theoretical questions. The adoption of alphabetic writing allowed complex ideas to be preserved, critiqued, and built upon in ways oral tradition could not support. Participatory political culture in many Greek cities trained citizens in logical argument, evidence-based reasoning, and public debate. Finally, exposure to diverse cultures from Egypt, Persia, and Babylon challenged Greeks to recognize that their traditional beliefs were not self-evidently true, fostering intellectual humility and curiosity. Without any of these conditions, philosophy likely could not have emerged: without leisure, people focus on survival; without writing, complex ideas cannot accumulate; without debate culture, reasoning skills remain undeveloped; without cultural diversity, traditional myths remain unquestioned. The convergence of all four conditions created an environment where questioning traditional explanations and seeking natural causes became both possible and socially valued.',
      assessmentCriteria: [
        {
          id: 'crit1',
          text: 'Explained how economic prosperity created leisure for philosophical contemplation',
          points: 5,
        },
        {
          id: 'crit2',
          text: 'Discussed the role of alphabetic writing in preserving and developing complex ideas',
          points: 5,
        },
        {
          id: 'crit3',
          text: 'Described how political debate culture trained citizens in reasoning and argument',
          points: 5,
        },
        {
          id: 'crit4',
          text: 'Analyzed how cultural diversity challenged traditional assumptions and fostered critical thinking',
          points: 5,
        },
      ],
      explanation: 'This question explores how philosophy emerged not from a single brilliant individual, but from a unique convergence of social, economic, political, and cultural conditions. Understanding these conditions helps us see why philosophy arose in this specific time and place, and what circumstances foster critical thinking and intellectual innovation in any era.',
      relatedLearningPoints: ['lp-prologue-2-conditions', 'lp-prologue-5-prosperity', 'lp-prologue-5-literacy', 'lp-prologue-5-diversity', 'lp-prologue-8-method'],
    },
  ],
};

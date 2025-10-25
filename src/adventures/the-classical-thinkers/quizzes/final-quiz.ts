import type { Quiz } from '../../../types';

export const finalQuiz: Quiz = {
  id: 'final-quiz-classical-thinkers',
  title: 'Final Quiz: The Classical Thinkers',
  description: 'A comprehensive assessment of your understanding of Ancient Greek philosophy from the Pre-Socratics to the Hellenistic schools. This quiz covers major philosophers, key concepts, and connections between different schools of thought.',
  passingScore: 70,
  allowRetry: true,
  questions: [
    // Question 1: Prologue - Mythos to Logos
    {
      id: 'fq1',
      question: 'What fundamental shift in thinking marked the birth of philosophy in ancient Greece?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'From democracy to tyranny',
        'From oral tradition to written texts',
        'From mythological explanation (mythos) to rational inquiry (logos)',
        'From polytheism to monotheism',
      ],
      correctAnswer: 'From mythological explanation (mythos) to rational inquiry (logos)',
      explanation: 'The birth of philosophy marked a revolutionary transition from explaining natural phenomena through mythological stories about gods and supernatural forces to seeking rational, natural explanations based on observation and reasoning.',
      relatedLearningPoints: [],
    },

    // Question 2: Pre-Socratics - Arche
    {
      id: 'fq2',
      question: 'What is the "arche" that the Pre-Socratic philosophers sought?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'The ruler of the Greek city-states',
        'The fundamental principle or substance from which all things are made',
        'The oldest Greek temple',
        'The first written law code',
      ],
      correctAnswer: 'The fundamental principle or substance from which all things are made',
      explanation: 'The arche (ἀρχή) was the fundamental principle, origin, or substance underlying all of reality. Different Pre-Socratics proposed different candidates: Thales said water, Anaximenes said air, Heraclitus emphasized fire and change, while Democritus proposed atoms and void.',
      relatedLearningPoints: [],
    },

    // Question 3: Pre-Socratics - Heraclitus vs Parmenides
    {
      id: 'fq3',
      question: 'What fundamental disagreement existed between Heraclitus and Parmenides?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'Whether the gods existed',
        'Whether reality is characterized by constant change (Heraclitus) or unchanging permanence (Parmenides)',
        'Whether democracy or monarchy was better',
        'Whether mathematics or poetry was more important',
      ],
      correctAnswer: 'Whether reality is characterized by constant change (Heraclitus) or unchanging permanence (Parmenides)',
      explanation: 'Heraclitus argued that reality is defined by constant flux and change ("You cannot step into the same river twice"), while Parmenides argued through logic that change is impossible and that true Being is eternal, unchanging, and indivisible. This debate between becoming and being shaped subsequent philosophy.',
      relatedLearningPoints: [],
    },

    // Question 4: Sophists - Relativism
    {
      id: 'fq4',
      question: 'What did Protagoras mean by his famous claim "Man is the measure of all things"?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'That humans are physically larger than other creatures',
        'That truth and morality are relative to each individual or culture, not absolute',
        'That men are superior to women',
        'That humans should measure everything with rulers',
      ],
      correctAnswer: 'That truth and morality are relative to each individual or culture, not absolute',
      explanation: 'Protagoras\'s relativism claimed that there are no objective truths or universal moral standards—what is true or good for one person or culture may differ from another. This challenged traditional Greek assumptions about objective truth and absolute values, making the Sophists controversial.',
      relatedLearningPoints: [],
    },

    // Question 5: Socrates - Method
    {
      id: 'fq5',
      question: 'What is the Socratic method (elenchus)?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'A form of poetry in which Socrates wrote his philosophy',
        'A method of questioning and cross-examination to reveal contradictions and lead to wisdom',
        'A political system proposed by Socrates',
        'A mathematical technique for solving equations',
      ],
      correctAnswer: 'A method of questioning and cross-examination to reveal contradictions and lead to wisdom',
      explanation: 'The Socratic method involves asking probing questions to examine someone\'s beliefs, reveal contradictions, and expose ignorance. Rather than teaching directly, Socrates used questioning to help others discover truth for themselves and realize the limits of their knowledge. This method emphasized critical thinking and self-examination.',
      relatedLearningPoints: [],
    },

    // Question 6: Socrates - Core Claims
    {
      id: 'fq6',
      question: 'Which of these paradoxical claims is central to Socratic philosophy?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'The unexamined life is worth living',
        'Virtue is knowledge; no one does wrong willingly',
        'Might makes right',
        'Knowledge is impossible',
      ],
      correctAnswer: 'Virtue is knowledge; no one does wrong willingly',
      explanation: 'Socrates believed that virtue is knowledge—if you truly know what is good, you will do it. Therefore, wrongdoing results from ignorance, not wickedness. People only do wrong when they mistakenly believe it will benefit them. This intellectualist view of ethics made knowledge of the good essential for virtuous action.',
      relatedLearningPoints: [],
    },

    // Question 7: Integration - Sophists vs Socrates
    {
      id: 'fq7',
      question: 'How did Socrates differ from the Sophists in his approach to truth and virtue?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'Socrates charged money for teaching; Sophists taught for free',
        'Socrates believed in absolute truth and objective virtue; Sophists were relativists who saw truth as subjective',
        'Socrates rejected democracy; Sophists supported it',
        'Socrates wrote books; Sophists only spoke',
      ],
      correctAnswer: 'Socrates believed in absolute truth and objective virtue; Sophists were relativists who saw truth as subjective',
      explanation: 'While Sophists like Protagoras claimed truth was relative and taught rhetoric as a tool for persuasion, Socrates insisted there are objective truths about virtue and justice that philosophy can discover through dialectical inquiry. He saw Sophistic relativism as dangerous because it denied the possibility of genuine wisdom and moral knowledge.',
      relatedLearningPoints: [],
    },

    // Question 8: Plato - Theory of Forms
    {
      id: 'fq8',
      question: 'According to Plato\'s Theory of Forms, which is more real: a physical tree or the Form of Tree?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'The physical tree, because we can see and touch it',
        'Both are equally real',
        'The Form of Tree, because it is eternal, perfect, and unchanging',
        'Neither is real—reality is an illusion',
      ],
      correctAnswer: 'The Form of Tree, because it is eternal, perfect, and unchanging',
      explanation: 'Plato argued that the eternal, unchanging Forms are more real than temporary, imperfect physical objects. Physical trees come into being and pass away, but the Form of Tree exists eternally. Physical objects are merely imperfect copies or "shadows" of the true reality—the Forms.',
      relatedLearningPoints: [],
    },

    // Question 9: Plato - Allegory of the Cave
    {
      id: 'fq9',
      question: 'In Plato\'s Allegory of the Cave, what does the journey from the cave into sunlight represent?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'The physical journey from Athens to Sparta',
        'The philosophical journey from ignorance to knowledge of the Forms',
        'The transition from childhood to adulthood',
        'The conversion from polytheism to monotheism',
      ],
      correctAnswer: 'The philosophical journey from ignorance to knowledge of the Forms',
      explanation: 'The allegory represents philosophical education and enlightenment. The prisoners seeing only shadows represent people trapped in ignorance, mistaking appearances for reality. The journey upward into sunlight symbolizes the philosopher\'s difficult ascent from the world of physical appearances to knowledge of eternal Forms, culminating in understanding the Form of the Good (represented by the sun).',
      relatedLearningPoints: [],
    },

    // Question 10: Plato - Political Philosophy
    {
      id: 'fq10',
      question: 'Why does Plato argue that philosopher-kings should rule his ideal Republic?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'Because philosophers are wealthy and powerful',
        'Because they have knowledge of the Form of the Good and understand true justice',
        'Because they are elected by the people',
        'Because they are the best warriors',
      ],
      correctAnswer: 'Because they have knowledge of the Form of the Good and understand true justice',
      explanation: 'Plato believed that only philosophers who have undergone rigorous education and grasped the Form of the Good possess the knowledge necessary to rule justly. Just as you wouldn\'t want an untrained person to navigate a ship, you shouldn\'t let the ignorant masses rule society. Wisdom, not popular opinion or wealth, should determine who governs.',
      relatedLearningPoints: [],
    },

    // Question 11: Aristotle - Critique of Plato
    {
      id: 'fq11',
      question: 'What was Aristotle\'s main criticism of Plato\'s Theory of Forms?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'Forms are unnecessary because form and matter are unified in substances',
        'Forms are too democratic',
        'Forms don\'t exist in sufficient numbers',
        'Forms should be controlled by philosopher-kings',
      ],
      correctAnswer: 'Forms are unnecessary because form and matter are unified in substances',
      explanation: 'Aristotle rejected Plato\'s separation of Forms from physical objects. He argued that form (essence) and matter are inseparable aspects of individual substances. The form of a tree exists in the tree itself, not in a separate realm. Plato\'s separated Forms cannot explain how physical things come to be or why they have the properties they do.',
      relatedLearningPoints: [],
    },

    // Question 12: Aristotle - Four Causes
    {
      id: 'fq12',
      question: 'Which of Aristotle\'s four causes answers the question "What is it for?"',
      type: 'multiple-choice',
      points: 10,
      options: [
        'Material cause (what it is made of)',
        'Formal cause (what it is)',
        'Efficient cause (what made it)',
        'Final cause (its purpose or telos)',
      ],
      correctAnswer: 'Final cause (its purpose or telos)',
      explanation: 'The final cause (telos) is the purpose or end toward which something aims. For Aristotle, understanding anything fully requires knowing its purpose. For example, the final cause of an acorn is to become an oak tree; the final cause of a knife is to cut. Aristotle\'s teleological worldview saw nature as purposeful, not mechanistic.',
      relatedLearningPoints: [],
    },

    // Question 13: Aristotle - Virtue Ethics
    {
      id: 'fq13',
      question: 'According to Aristotle\'s doctrine of the mean, courage is the virtue between which two extremes?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'Ignorance and wisdom',
        'Cowardice (deficiency) and recklessness (excess)',
        'Love and hate',
        'Justice and injustice',
      ],
      correctAnswer: 'Cowardice (deficiency) and recklessness (excess)',
      explanation: 'Aristotle taught that moral virtue is a mean (middle ground) between two vices—one of deficiency and one of excess. Courage is the appropriate response to danger, lying between cowardice (too much fear) and recklessness (too little fear). Finding the right mean requires practical wisdom (phronesis) and varies by situation.',
      relatedLearningPoints: [],
    },

    // Question 14: Integration - Plato vs Aristotle on Knowledge
    {
      id: 'fq14',
      question: 'What is a key difference between Plato\'s and Aristotle\'s theories of knowledge?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'Plato emphasized abstract reasoning about Forms; Aristotle emphasized empirical observation of the natural world',
        'Plato rejected all knowledge; Aristotle believed everything could be known',
        'Plato focused on science; Aristotle focused on poetry',
        'Plato wrote dialogues; Aristotle wrote treatises',
      ],
      correctAnswer: 'Plato emphasized abstract reasoning about Forms; Aristotle emphasized empirical observation of the natural world',
      explanation: 'Plato was a rationalist who believed true knowledge comes from intellectual contemplation of eternal Forms, not sense experience of the changing physical world. Aristotle was more empiricist—he valued observation, classification, and study of nature. While Plato looked beyond the physical world, Aristotle insisted that knowledge begins with sense experience and studying actual substances.',
      relatedLearningPoints: [],
    },

    // Question 15: Hellenistic Philosophy - Context
    {
      id: 'fq15',
      question: 'How did the focus of philosophy change in the Hellenistic period after Alexander the Great?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'From personal ethics to grand metaphysical systems',
        'From political and metaphysical questions to personal ethics and achieving tranquility (ataraxia)',
        'From Greek to Latin language',
        'From rational inquiry back to mythological thinking',
      ],
      correctAnswer: 'From political and metaphysical questions to personal ethics and achieving tranquility (ataraxia)',
      explanation: 'After Alexander\'s conquests and the collapse of the independent city-states, philosophy shifted from Plato and Aristotle\'s grand systematic projects about cosmology and ideal states to practical ethics. In an age of political instability, Hellenistic schools (Epicureans, Stoics, Skeptics) focused on how individuals could achieve peace of mind and live well regardless of external circumstances.',
      relatedLearningPoints: [],
    },

    // Question 16: Epicureanism
    {
      id: 'fq16',
      question: 'What did Epicurus mean by "pleasure" as the highest good?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'Maximum indulgence in luxurious food, drink, and sensual pleasures',
        'Ataraxia—freedom from pain and mental disturbance through simple living and eliminating unnecessary desires',
        'Political power and fame',
        'Constant excitement and entertainment',
      ],
      correctAnswer: 'Ataraxia—freedom from pain and mental disturbance through simple living and eliminating unnecessary desires',
      explanation: 'Despite the modern misuse of "epicurean" to mean hedonistic indulgence, Epicurus taught that true pleasure is the absence of pain (physical) and disturbance (mental)—ataraxia. He advocated simple pleasures and moderate living. Luxury creates dependence and anxiety; bread, water, and friendship suffice for happiness.',
      relatedLearningPoints: [],
    },

    // Question 17: Stoicism
    {
      id: 'fq17',
      question: 'What is the Stoic "dichotomy of control"?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'The distinction between mind and body',
        'The distinction between what is "up to us" (our judgments and character) and what is "not up to us" (external circumstances)',
        'The distinction between Greeks and barbarians',
        'The distinction between pleasure and pain',
      ],
      correctAnswer: 'The distinction between what is "up to us" (our judgments and character) and what is "not up to us" (external circumstances)',
      explanation: 'The Stoics taught that happiness comes from perfecting what we can control (our thoughts, judgments, intentions, and character) and accepting what we cannot control (health, wealth, reputation, others\' actions, death) with equanimity. Suffering arises from desiring or fearing things beyond our control. This principle is foundational to Stoic ethics.',
      relatedLearningPoints: [],
    },

    // Question 18: Skepticism
    {
      id: 'fq18',
      question: 'How did Pyrrhonian Skeptics achieve ataraxia (tranquility)?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'By finding absolute certain truth about all questions',
        'By suspending judgment (epochē) on philosophical questions where arguments are equally balanced',
        'By accepting Stoic determinism',
        'By withdrawing to a private garden like the Epicureans',
      ],
      correctAnswer: 'By suspending judgment (epochē) on philosophical questions where arguments are equally balanced',
      explanation: 'Skeptics achieved tranquility paradoxically—not by finding answers but by ceasing to seek impossible certainty. When equally strong arguments exist on both sides of a question (equipollence), the rational response is suspension of judgment (epochē). This releases the anxiety caused by dogmatic commitment to uncertain beliefs. Skeptics followed appearances pragmatically without philosophical conviction.',
      relatedLearningPoints: [],
    },

    // Question 19: Integration - Three Hellenistic Schools
    {
      id: 'fq19',
      question: 'Despite their differences, what did Epicureanism, Stoicism, and Skepticism all share?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'They all rejected reason and logic',
        'They all viewed philosophy as therapy for the soul—a practical path to tranquility (ataraxia)',
        'They all believed in the Platonic Forms',
        'They all advocated active political involvement',
      ],
      correctAnswer: 'They all viewed philosophy as therapy for the soul—a practical path to tranquility (ataraxia)',
      explanation: 'Though they disagreed about the path, all three major Hellenistic schools shared the goal of ataraxia (tranquility) and viewed philosophy therapeutically—as medicine for anxiety, fear, and suffering. They provided not just theories but concrete practices for living well: withdrawing to the Garden (Epicureans), practicing the dichotomy of control (Stoics), or suspending judgment (Skeptics).',
      relatedLearningPoints: [],
    },

    // Question 20: Integration - Self-Assessment on Legacy and Influence
    {
      id: 'fq20',
      question: 'Analyze the enduring influence of Ancient Greek philosophy on Western thought. Consider at least two of the following: the development of scientific method, ethical theories, political philosophy, or the concept of liberal arts education. Discuss specific examples of how ancient ideas continue to shape modern thinking.',
      type: 'self-assessment',
      points: 20,
      options: [],
      modelAnswer: 'Ancient Greek philosophy profoundly shaped Western civilization in multiple domains. The Pre-Socratic quest for natural explanations laid groundwork for scientific method—the idea that nature operates by rational principles we can discover through observation and reasoning, not divine whim. Aristotle\'s systematic approach to biology and logic directly influenced the development of empirical science.\n\nIn ethics, Greek philosophy remains foundational: Aristotle\'s virtue ethics influences contemporary character-based moral theory; Stoicism provides frameworks for cognitive behavioral therapy and resilience training; Epicurean ideas about simple living and happiness challenge consumerist culture. The Socratic method continues as a pedagogical tool for critical thinking.\n\nPolitically, Plato\'s Republic and Aristotle\'s Politics established questions about justice, the best form of government, and the relationship between individual and state that democracies still grapple with. The Sophistic debates about nature versus convention underlie modern discussions of relativism versus universal human rights.\n\nFinally, the Greek ideal of paideia (holistic education) inspired the liberal arts tradition—the belief that education should develop the whole person through exposure to philosophy, rhetoric, mathematics, and sciences. This model persists in modern university education. As Whitehead wrote, Western philosophy consists of "footnotes to Plato"—the questions and methods established by Greek thinkers remain central to intellectual inquiry today.',
      assessmentCriteria: [
        {
          id: 'crit1',
          text: 'Discussed the influence of Greek philosophy on scientific method or empirical inquiry (e.g., Pre-Socratic naturalism, Aristotelian observation)',
          points: 5,
        },
        {
          id: 'crit2',
          text: 'Explained how Greek ethical theories (virtue ethics, Stoicism, Epicureanism) continue to influence modern moral philosophy or practice',
          points: 5,
        },
        {
          id: 'crit3',
          text: 'Described the impact of Greek political philosophy (Plato, Aristotle, Sophists) on contemporary political thought and debates',
          points: 5,
        },
        {
          id: 'crit4',
          text: 'Connected Greek educational ideals (liberal arts, Socratic method) to modern education or provided other relevant examples with specific details',
          points: 5,
        },
      ],
      explanation: 'This question asks you to synthesize your understanding across the entire adventure and reflect on why these ancient ideas remain relevant. Strong answers demonstrate connections between specific Greek concepts and modern applications, showing how fundamental questions about knowledge, ethics, politics, and the good life persist across millennia.',
      relatedLearningPoints: [],
    },
  ],
};

import type { Quiz } from '../../../types';

/**
 * Epilogue Quiz: The Importance and Influence of Greek Philosophy
 *
 * Tests comprehension of:
 * - Transmission through Rome, Islam, and medieval Europe
 * - Modern influence and continuing relevance
 * - Connection between ancient philosophy and contemporary thought
 */
export const epilogueQuiz: Quiz = {
  id: 'quiz-epilogue',
  title: 'Epilogue Quiz: The Legacy of Greek Philosophy',
  description: 'Test your understanding of how Greek philosophy has influenced Western thought across 2,500 years.',
  passingScore: 70,
  allowRetry: true,
  questions: [
    // Question 1: Multiple Choice - Historical transmission
    {
      id: 'q1',
      question: 'Which civilization first adopted Greek philosophy wholesale after conquering Greece?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'The Persian Empire',
        'The Roman Empire',
        'The Byzantine Empire',
        'The Islamic Caliphate',
      ],
      correctAnswer: 'The Roman Empire',
      explanation: 'Rome conquered Greece in 146 BCE and immediately adopted Greek philosophy, with educated Romans speaking Greek and studying under Greek tutors. The famous saying "Captive Greece took captive her savage conqueror" refers to this cultural conquest.',
      relatedLearningPoints: ['epilogue-lp-2-transmission', 'epilogue-lp-3-chronology'],
    },

    // Question 2: Multiple Choice - Islamic preservation
    {
      id: 'q2',
      question: 'During the Islamic Golden Age, what did scholars in Baghdad do with Greek philosophical texts?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'Destroyed them as pagan writings',
        'Translated them into Arabic and wrote extensive commentaries',
        'Sold them to European monasteries',
        'Locked them away and forgot about them',
      ],
      correctAnswer: 'Translated them into Arabic and wrote extensive commentaries',
      explanation: 'Islamic scholars during the Golden Age (8th-13th centuries) translated Greek texts into Arabic at institutions like the House of Wisdom in Baghdad. Philosophers like Averroes and Avicenna not only preserved these works but advanced them with original commentaries.',
      relatedLearningPoints: ['epilogue-lp-4-islamic-preservation', 'epilogue-lp-6-geographic-journey'],
    },

    // Question 3: True/False - Aristotle's return
    {
      id: 'q3',
      question: 'Aristotle\'s works returned to Western Europe in the 12th century through translations from Arabic to Latin in Toledo, Spain.',
      type: 'true-false',
      points: 10,
      options: ['True', 'False'],
      correctAnswer: 'True',
      explanation: 'True! After being lost in the West following Rome\'s fall, Aristotle\'s works survived in Arabic translation. In 12th-century Toledo, Christian, Muslim, and Jewish scholars collaborated to translate these texts from Arabic into Latin, reintroducing Aristotle to Europe.',
      relatedLearningPoints: ['epilogue-lp-6-geographic-journey', 'epilogue-lp-7-cultural-exchange'],
    },

    // Question 4: Multiple Choice - Faith and reason
    {
      id: 'q4',
      question: 'According to Averroes, how should the conflict between Aristotle\'s philosophy and religious faith be resolved?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'Reject Aristotle as wrong',
        'Reject religious teaching as irrational',
        'Philosophy studies what reason can know; faith reveals what transcends reason',
        'There is no real conflict to resolve',
      ],
      correctAnswer: 'Philosophy studies what reason can know; faith reveals what transcends reason',
      explanation: 'Averroes proposed that philosophy and faith address different domains: philosophy investigates what natural reason can discover, while faith reveals truths beyond reason\'s reach. This "two truths" approach influenced medieval Christian thinkers like Thomas Aquinas.',
      relatedLearningPoints: ['epilogue-lp-5-faith-reason'],
    },

    // Question 5: Matching - Ancient ideas to modern descendants
    {
      id: 'q5',
      question: 'Match each ancient Greek philosophical idea to its modern descendant:',
      type: 'matching',
      points: 15,
      correctAnswer: {
        'Socratic Method': 'Critical thinking education and university seminars',
        'Aristotelian Logic': 'Computer science and artificial intelligence',
        'Stoic Philosophy': 'Cognitive Behavioral Therapy (CBT)',
        'Aristotelian Empiricism': 'The scientific method',
      },
      explanation: 'Each ancient philosophical method has directly influenced modern disciplines. The Socratic method shapes pedagogy, Aristotelian logic underlies programming, Stoic techniques inform therapy, and Aristotelian empiricism laid groundwork for science.',
      relatedLearningPoints: ['epilogue-lp-18-modern-descendants', 'epilogue-lp-8-methodological-legacy'],
    },

    // Question 6: Short Answer - Specific term
    {
      id: 'q6',
      question: 'What Roman statesman translated Greek philosophical concepts into Latin in the 1st century BCE, making philosophy accessible to Latin-speaking audiences?',
      type: 'short-answer',
      points: 10,
      correctAnswer: 'Cicero',
      explanation: 'Cicero (106-43 BCE) translated Greek philosophical concepts and terminology into Latin, creating the philosophical vocabulary that would be used throughout the Middle Ages and beyond. His works made Greek philosophy accessible to those who didn\'t speak Greek.',
      relatedLearningPoints: ['epilogue-lp-3-chronology'],
    },

    // Question 7: Multiple Choice - Medieval synthesis
    {
      id: 'q7',
      question: 'Who created a grand synthesis of Aristotelian philosophy and Christian theology in the 13th century?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'Augustine of Hippo',
        'Thomas Aquinas',
        'William of Ockham',
        'Anselm of Canterbury',
      ],
      correctAnswer: 'Thomas Aquinas',
      explanation: 'Thomas Aquinas (1225-1274) created a comprehensive synthesis of Aristotelian philosophy and Christian theology in his Summa Theologica. His work became foundational to Catholic theology and demonstrated how Greek philosophy could complement Christian faith.',
      relatedLearningPoints: ['epilogue-lp-3-chronology', 'epilogue-lp-5-faith-reason'],
    },

    // Question 8: True/False - Cultural exchange
    {
      id: 'q8',
      question: 'The preservation of Greek philosophy required cooperation only between Greek and Roman scholars.',
      type: 'true-false',
      points: 10,
      options: ['True', 'False'],
      correctAnswer: 'False',
      explanation: 'False! The preservation of Greek philosophy required cooperation across multiple cultures: Greek, Roman, Byzantine, Islamic, Jewish, and Christian scholars all played crucial roles in preserving, translating, and transmitting these texts across centuries.',
      relatedLearningPoints: ['epilogue-lp-7-cultural-exchange'],
    },

    // Question 9: Multiple Choice - Modern influence
    {
      id: 'q9',
      question: 'Which aspect of Greek philosophy represents its greatest legacy to modern thought?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'Specific answers to questions about physics and biology',
        'The architectural designs of Greek temples',
        'Intellectual methods like dialectic, logic, and empiricism',
        'Religious beliefs about Greek gods',
      ],
      correctAnswer: 'Intellectual methods like dialectic, logic, and empiricism',
      explanation: 'While specific Greek answers (like Aristotle\'s physics) are outdated, the methods they developed—dialectic questioning, formal logic, systematic observation, and empirical analysis—remain foundational to all modern intellectual inquiry.',
      relatedLearningPoints: ['epilogue-lp-8-methodological-legacy', 'epilogue-lp-9-modern-disciplines'],
    },

    // Question 10: Multiple Choice - University structure
    {
      id: 'q10',
      question: 'The modern university system of organizing knowledge into distinct academic disciplines (biology, philosophy, political science, etc.) traces back to which Greek philosopher?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'Socrates',
        'Plato',
        'Aristotle',
        'Epicurus',
      ],
      correctAnswer: 'Aristotle',
      explanation: 'Aristotle systematically divided knowledge into distinct fields: logic, physics, biology, ethics, politics, rhetoric, and poetics. This disciplinary organization, developed at the Lyceum, still structures modern universities today.',
      relatedLearningPoints: ['epilogue-lp-19-modern-concepts'],
    },

    // Question 11: Self-Assessment - Continuing relevance
    {
      id: 'q11',
      question: 'Analyze why the philosophical questions first posed by the ancient Greeks remain relevant to modern life. Consider examples from contemporary issues and explain how Greek philosophical methods or questions might help address them.',
      type: 'self-assessment',
      points: 20,
      modelAnswer: 'Greek philosophical questions remain relevant because they address fundamental aspects of human existence that transcend time and culture. Questions like "What is the good life?" (Socrates), "What is real?" (Pre-Socratics), and "Is truth relative or absolute?" (Sophists) apply directly to modern challenges. For example, the Sophist debate about relativism versus absolute truth echoes in discussions of "post-truth" politics and cultural relativism. Socratic questioning techniques help us navigate ethical dilemmas in technology, medicine, and environmental policy. The Pre-Socratic quest to understand fundamental reality continues in quantum physics. Greek methods—logic, dialectic, empirical observation—remain essential tools for addressing new problems like artificial intelligence ethics, climate change policy, and biotechnology regulation. While technology and society have changed dramatically, the human need to understand reality, pursue truth, and live meaningfully persists.',
      assessmentCriteria: [
        {
          id: 'crit1',
          text: 'Identified specific Greek philosophical questions that remain relevant (e.g., "What is the good life?", "What is real?", "Is truth relative?")',
          points: 7,
        },
        {
          id: 'crit2',
          text: 'Provided concrete modern examples showing how these questions apply today (e.g., post-truth politics, AI ethics, environmental challenges)',
          points: 7,
        },
        {
          id: 'crit3',
          text: 'Explained how Greek philosophical methods help address contemporary problems',
          points: 6,
        },
      ],
      explanation: 'This question asks you to synthesize the epilogue\'s content about transmission and modern influence, demonstrating understanding of why ancient philosophy remains practically relevant rather than merely historically interesting.',
      relatedLearningPoints: ['epilogue-lp-1-enduring-questions', 'epilogue-lp-13-contemporary-relevance', 'epilogue-lp-8-methodological-legacy'],
    },

    // Question 12: Self-Assessment - Personal reflection
    {
      id: 'q12',
      question: 'Reflect on your journey through Greek philosophy in this adventure. Which ancient Greek question or method do you find most personally relevant to your own life, and why? How might you apply ancient philosophical wisdom to a challenge or decision you currently face?',
      type: 'self-assessment',
      points: 15,
      modelAnswer: 'Throughout this journey, I found the Stoic distinction between what we can and cannot control most personally relevant. In facing academic pressures and uncertain career prospects, I\'ve realized I cannot control outcomes—admission decisions, job markets, others\' opinions—but I can control my effort, preparation, and attitude. This ancient wisdom helps me focus energy productively rather than anxiously. The Socratic call to "examine your life" also resonates: in an age of constant distraction through social media and entertainment, deliberately reflecting on my values and choices feels countercultural but necessary. Aristotle\'s question about eudaimonia—what constitutes genuine flourishing beyond mere pleasure or success—challenges me to define my own conception of the good life rather than passively accepting society\'s definitions. These 2,500-year-old ideas provide frameworks for navigating thoroughly modern challenges.',
      assessmentCriteria: [
        {
          id: 'crit4',
          text: 'Identified a specific Greek philosophical question or method as personally relevant',
          points: 5,
        },
        {
          id: 'crit5',
          text: 'Explained with personal examples why this question/method resonates',
          points: 5,
        },
        {
          id: 'crit6',
          text: 'Described how ancient philosophical wisdom could be applied to a current personal challenge',
          points: 5,
        },
      ],
      explanation: 'This reflective question encourages you to connect ancient philosophy to your own life, demonstrating that these ideas are not merely academic but personally meaningful. There are many valid answers depending on your circumstances and perspectives.',
      relatedLearningPoints: ['epilogue-lp-21-personal-relevance', 'epilogue-lp-20-continuing-conversation'],
    },
  ],
};

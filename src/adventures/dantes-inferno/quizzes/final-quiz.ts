import type { Quiz } from '../../../types';

/**
 * Final Quiz: The Complete Inferno
 *
 * Comprehensive assessment covering all chapters and major themes
 * of Dante's Inferno. Tests synthesis and higher-order thinking.
 */
export const finalQuiz: Quiz = {
  id: 'quiz-inferno-final',
  title: 'Final Quiz: The Complete Inferno',
  description: 'Comprehensive test of your knowledge of Dante\'s Inferno, its themes, structure, and significance.',
  passingScore: 75,
  allowRetry: true,

  questions: [
    // Easy Questions (1-8)
    {
      id: 'final-q1',
      question: 'Who is Dante\'s guide through Hell?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'Beatrice',
        'Virgil',
        'Homer',
        'Saint Peter'
      ],
      correctAnswer: 'Virgil',
      explanation: 'Virgil, the ancient Roman poet, guides Dante through Hell and Purgatory. He represents human reason and classical wisdom.',
      relatedLearningPoints: ['lp-prologue-11', 'lp-prologue-14']
    },

    {
      id: 'final-q2',
      question: 'How many circles are in Dante\'s Hell?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'Seven',
        'Nine',
        'Ten',
        'Twelve'
      ],
      correctAnswer: 'Nine',
      explanation: 'Hell has nine circles (plus vestibule). They descend from least to worst sins: Limbo (I) to Treachery (IX).',
      relatedLearningPoints: ['lp-prologue-20', 'lp-ch1-27']
    },

    {
      id: 'final-q3',
      question: 'What is the famous inscription on Hell\'s gate?',
      type: 'multiple-choice',
      points: 10,
      options: [
        '\'Welcome to eternal suffering\'',
        '\'Abandon all hope, you who enter\'',
        '\'Here begins the journey of pain\'',
        '\'The wicked shall be punished\''
      ],
      correctAnswer: '\'Abandon all hope, you who enter\'',
      explanation: '\'Lasciate ogne speranza, voi ch\'intrate\'—the most famous line from Dante. It defines Hell as permanent, without possibility of redemption.',
      relatedLearningPoints: ['lp-prologue-17']
    },

    {
      id: 'final-q4',
      question: 'What is \'contrapasso\'?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'The journey through Hell',
        'Punishment fitting the crime',
        'Dante\'s writing style',
        'A type of Italian poetry'
      ],
      correctAnswer: 'Punishment fitting the crime',
      explanation: 'Contrapasso means \'counter-suffering\'—punishments symbolically mirror crimes. Lustful blown by winds, greedy push weights, etc.',
      relatedLearningPoints: ['lp-ch1-2', 'lp-ch1-28']
    },

    {
      id: 'final-q5',
      question: 'Who are Paolo and Francesca?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'Two popes in Hell',
        'Lovers punished for lust',
        'Political traitors',
        'Virgil\'s relatives'
      ],
      correctAnswer: 'Lovers punished for lust',
      explanation: 'Francesca and her brother-in-law Paolo had an adulterous affair. When discovered, both were murdered and damned to Circle II.',
      relatedLearningPoints: ['lp-ch2-7', 'lp-ch2-10']
    },

    {
      id: 'final-q6',
      question: 'Dante wrote the Divine Comedy in Latin.',
      type: 'true-false',
      points: 10,
      options: ['True', 'False'],
      correctAnswer: 'False',
      explanation: 'Dante wrote in Italian (Tuscan vernacular), not Latin. This was revolutionary—making literature accessible to common people, not just scholars.',
      relatedLearningPoints: ['lp-prologue-4']
    },

    {
      id: 'final-q7',
      question: 'What guards the final circle of Hell?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'Cerberus',
        'Charon',
        'Satan himself',
        'The Furies'
      ],
      correctAnswer: 'Satan himself',
      explanation: 'Satan is frozen at Hell\'s center (Circle IX), eternally chewing three arch-traitors. He\'s prisoner, not ruler.',
      relatedLearningPoints: ['lp-ch5-7', 'lp-ch5-28']
    },

    {
      id: 'final-q8',
      question: 'What does Virgil represent symbolically?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'Divine grace',
        'Human reason and classical wisdom',
        'Earthly power',
        'Poetic inspiration'
      ],
      correctAnswer: 'Human reason and classical wisdom',
      explanation: 'Virgil symbolizes what human reason can achieve without divine revelation. He can understand Hell/Purgatory but not Paradise (requires grace).',
      relatedLearningPoints: ['lp-prologue-11', 'lp-ch1-19']
    },

    // Medium Questions (9-18)
    {
      id: 'final-q9',
      question: 'Why are sins of fraud ranked worse than sins of violence in Dante\'s Hell?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'Fraud affects more people',
        'Because fraud requires human intelligence—perverting reason (God\'s gift)',
        'Violence was acceptable in medieval times',
        'The Church taught this ranking'
      ],
      correctAnswer: 'Because fraud requires human intelligence—perverting reason (God\'s gift)',
      explanation: 'Animals can be violent. Only humans can deceive—using reason (humans\' divine spark) for evil is worse than bestial violence.',
      relatedLearningPoints: ['lp-ch4-45', 'lp-ch4-46']
    },

    {
      id: 'final-q10',
      question: 'What is simony, and why does Dante emphasize it?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'Making false prophecies',
        'Selling Church offices for money; Dante saw it destroying the Church',
        'Political betrayal',
        'Practicing alchemy'
      ],
      correctAnswer: 'Selling Church offices for money; Dante saw it destroying the Church',
      explanation: 'Simony (selling spiritual goods) corrupted the Church. Dante places popes in Hell for this—radical critique of institutional corruption.',
      relatedLearningPoints: ['lp-ch4-14', 'lp-ch4-42']
    },

    {
      id: 'final-q11',
      question: 'Explain the three major divisions of Hell and the types of sins punished in each.',
      type: 'self-assessment',
      points: 10,
      modelAnswer: 'Upper Hell (Circles II-V): Incontinence—sins of weakness and lack of self-control (lust, gluttony, greed, wrath). These sinners couldn\'t control their appetites. Lower Hell begins with Circle VII: Violence—malice begins here, with harm done through physical force (against neighbors, self, or God). Circle VIII: Fraud—intelligent evil where reason is perverted to deceive others. Circle IX: Treachery—the worst sin, betrayal of love and trust relationships.',
      assessmentCriteria: [
        {
          id: 'criterion-upper-hell',
          text: 'Described Upper Hell (Circles II-V) as Incontinence with examples (lust, gluttony, greed, wrath)',
          points: 3,
        },
        {
          id: 'criterion-violence',
          text: 'Explained Circle VII as Violence where malice begins',
          points: 2,
        },
        {
          id: 'criterion-fraud',
          text: 'Described Circle VIII as Fraud—intelligent, calculated evil',
          points: 2,
        },
        {
          id: 'criterion-treachery',
          text: 'Identified Circle IX as Treachery—the worst sin, betrayal of trust',
          points: 3,
        },
      ],
      explanation: 'Upper Hell (II-V): Incontinence (lust, gluttony, greed, wrath)—weakness. Lower Hell: Circle VII: Violence (malice begins). Circle VIII: Fraud (intelligent evil). Circle IX: Treachery (worst—betrayal of love).',
      relatedLearningPoints: ['lp-ch2-31', 'lp-ch2-32', 'lp-ch4-54']
    },

    {
      id: 'final-q12',
      question: 'Why does Dante include Saladin and Avicenna (Muslims) in Limbo rather than deeper in Hell?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'They converted to Christianity',
        'He recognized virtue and wisdom across religions',
        'It was a scribal error',
        'To avoid offending Muslim readers'
      ],
      correctAnswer: 'He recognized virtue and wisdom across religions',
      explanation: 'Placing Muslims in noble Limbo (not punished for religious choice but for lack of baptism) was radical—recognizing virtue beyond Christianity.',
      relatedLearningPoints: ['lp-ch1-14', 'lp-ch1-21']
    },

    {
      id: 'final-q13',
      question: 'What happens to suicides in Hell, and why?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'They\'re forgiven',
        'Transformed into bleeding trees—they rejected their bodies, so denied human form',
        'Frozen with traitors',
        'Burned with heretics'
      ],
      correctAnswer: 'Transformed into bleeding trees—they rejected their bodies, so denied human form',
      explanation: 'Suicides rejected God\'s gift of life. Punishment: Denied human form, trapped as trees. When they speak/break, they bleed.',
      relatedLearningPoints: ['lp-ch3-18', 'lp-ch3-24', 'lp-ch3-25']
    },

    {
      id: 'final-q14',
      question: 'Why is Ulysses in Hell despite being a classical hero?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'For murder',
        'For fraudulent counsel (Trojan Horse) and pursuing forbidden knowledge',
        'For cowardice',
        'He\'s not actually in Hell'
      ],
      correctAnswer: 'For fraudulent counsel (Trojan Horse) and pursuing forbidden knowledge',
      explanation: 'Ulysses\' cunning (Trojan Horse) was fraud. His final voyage (sailing beyond known limits) represented sinful pride—noble but damned.',
      relatedLearningPoints: ['lp-ch4-26', 'lp-ch4-27', 'lp-ch4-30']
    },

    {
      id: 'final-q15',
      question: 'What are the four zones of Cocytus, and what types of traitors do they punish?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'Fire, Ice, Wind, Stone—different elements',
        'Caina (family), Antenora (country), Ptolomea (guests), Judecca (benefactors)',
        'East, West, North, South—geographical divisions',
        'Past, present, future, eternal—temporal divisions'
      ],
      correctAnswer: 'Caina (family), Antenora (country), Ptolomea (guests), Judecca (benefactors)',
      explanation: 'Cocytus has four zones ranking betrayals by relationship sanctity: family → country → guests → benefactors (worst).',
      relatedLearningPoints: ['lp-ch5-3', 'lp-ch5-4', 'lp-ch5-5', 'lp-ch5-6']
    },

    {
      id: 'final-q16',
      question: 'What shocking claim does Fra Alberigo make about guest-traitors?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'They\'re innocent',
        'Their souls fall to Hell before death; demons possess their living bodies',
        'They can be redeemed',
        'They weren\'t real traitors'
      ],
      correctAnswer: 'Their souls fall to Hell before death; demons possess their living bodies',
      explanation: 'Dante invents this theology: Guest-traitors are so evil their souls drop to Hell while bodies still walk above. Damnation before death.',
      relatedLearningPoints: ['lp-ch5-22']
    },

    {
      id: 'final-q17',
      question: 'Why is Farinata degli Uberti portrayed with dignity despite being damned?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'Dante actually admired him',
        'He saved Florence from destruction despite being Dante\'s political enemy',
        'To show complex morality—good people can be damned for wrong beliefs',
        'All of the above'
      ],
      correctAnswer: 'All of the above',
      explanation: 'Farinata was Dante\'s enemy but saved Florence. Portrayed nobly despite heresy—showing nuanced morality and Dante\'s respect for worthy opponents.',
      relatedLearningPoints: ['lp-ch3-11', 'lp-ch3-14', 'lp-ch3-15']
    },

    {
      id: 'final-q18',
      question: 'Hell\'s bottom is frozen (not fiery) because ice represents coldness of heart—absence of love.',
      type: 'true-false',
      points: 10,
      options: ['True', 'False'],
      correctAnswer: 'True',
      explanation: 'Medieval inversion: Ultimate evil is cold calculation (treachery), not hot passion. Ice represents love\'s absence—Hell\'s essence.',
      relatedLearningPoints: ['lp-ch5-1', 'lp-ch5-40', 'lp-ch4-49', 'lp-ch4-50']
    },

    // Hard Questions (19-25)
    {
      id: 'final-q19',
      question: 'Explain why Dante places Ulysses\' final voyage as sinful despite its seemingly noble pursuit of \'virtue and knowledge.\'',
      type: 'self-assessment',
      points: 10,
      modelAnswer: 'Ulysses\' speech about pursuing "virtue and knowledge" sounds noble and inspiring—it celebrates Renaissance ideals of human potential. However, from a medieval Christian perspective, he commits three grave sins: (1) He abandoned his duties to family and homeland; (2) He violated divine limits by sailing beyond Gibraltar (the boundary of the known world); (3) He sought salvation through reason and exploration alone, without divine grace. This represents the tension between Renaissance aspiration and medieval sin—he\'s heroically damned, noble in ambition but sinful in execution.',
      assessmentCriteria: [
        {
          id: 'criterion-noble-ideals',
          text: 'Acknowledged the speech celebrates noble Renaissance ideals (virtue, knowledge, human potential)',
          points: 2,
        },
        {
          id: 'criterion-duty-abandoned',
          text: 'Explained that Ulysses abandoned duties to family and homeland',
          points: 3,
        },
        {
          id: 'criterion-divine-limits-violated',
          text: 'Mentioned he violated divine limits by sailing beyond Gibraltar',
          points: 3,
        },
        {
          id: 'criterion-grace-vs-reason',
          text: 'Discussed tension between seeking salvation through reason vs. divine grace',
          points: 2,
        },
      ],
      explanation: 'Ulysses\' speech is noble (pursue knowledge), but: (1) He abandoned duty (family, homeland); (2) He violated divine limits (sailing beyond Gibraltar); (3) He sought salvation through reason alone, not grace. Renaissance aspiration meets medieval sin.',
      relatedLearningPoints: ['lp-ch4-27', 'lp-ch4-28', 'lp-ch4-29', 'lp-ch4-31', 'lp-ch4-32']
    },

    {
      id: 'final-q20',
      question: 'What is the significance of Dante fainting multiple times early in Inferno but hardening his heart by the end?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'He becomes desensitized to suffering',
        'He learns to distinguish appropriate pity from questioning God\'s justice',
        'He grows morally colder',
        'It shows his increasing understanding of sin and acceptance of divine justice'
      ],
      correctAnswer: 'It shows his increasing understanding of sin and acceptance of divine justice',
      explanation: '(Also accept option 2—both correct). Dante\'s emotional journey: Initial compassion → understanding → acceptance. Pity for the justly punished questions God—he learns righteous judgment.',
      relatedLearningPoints: ['lp-ch4-19', 'lp-ch4-41', 'lp-ch2-29']
    },

    {
      id: 'final-q21',
      question: 'Compare Virgil\'s and Beatrice\'s roles. Why can\'t Virgil guide Dante to Paradise?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'He\'s too old',
        'Virgil represents human reason—can understand sin/virtue but cannot achieve salvation (requires divine grace/faith)',
        'God forbids pagans from Paradise',
        'He needs to stay in Limbo'
      ],
      correctAnswer: 'Virgil represents human reason—can understand sin/virtue but cannot achieve salvation (requires divine grace/faith)',
      explanation: 'Virgil (reason) guides through Hell/Purgatory. Beatrice (divine grace/love) guides through Paradise. Reason illuminates but can\'t save—grace required.',
      relatedLearningPoints: ['lp-prologue-11', 'lp-ch1-19', 'lp-prologue-12']
    },

    {
      id: 'final-q22',
      question: 'Analyze Dante\'s treatment of Church corruption. Give examples and explain why this was controversial.',
      type: 'self-assessment',
      points: 10,
      modelAnswer: 'Dante boldly places popes in Hell for simony (selling Church offices): Pope Nicholas III is punished upside-down with burning feet, and Dante prophesies that Pope Boniface VIII will join him. He attacks clergy greed throughout the Inferno—in Circle IV (avarice) and Bolgia 3 (simony). This was extraordinarily controversial and risked heresy charges, as criticizing popes could be seen as attacking the Church itself. However, Dante\'s exile freed him to write radical critiques. He separates true faith from institutional corruption, arguing the Church had betrayed its spiritual mission.',
      assessmentCriteria: [
        {
          id: 'criterion-specific-examples',
          text: 'Gave specific examples (Pope Nicholas III, Boniface VIII, simony, clergy greed)',
          points: 3,
        },
        {
          id: 'criterion-simony',
          text: 'Explained simony (selling Church offices) as a key corruption',
          points: 2,
        },
        {
          id: 'criterion-controversial',
          text: 'Explained why this was controversial (risked heresy charges, criticized popes)',
          points: 3,
        },
        {
          id: 'criterion-separation',
          text: 'Discussed how Dante separates true faith from institutional corruption',
          points: 2,
        },
      ],
      explanation: 'Dante places popes (Nicholas III, Boniface VIII prophesied) in Hell for simony. He attacks clergy greed relentlessly (Circle IV, Bolgia 3). This risked heresy charges—but exile freed him to write radical critiques. He separates true faith from institutional corruption.',
      relatedLearningPoints: ['lp-ch2-21', 'lp-ch2-22', 'lp-ch4-13', 'lp-ch4-17', 'lp-ch4-42']
    },

    {
      id: 'final-q23',
      question: 'Why does Dante include himself among the six greatest poets (with Homer, Virgil, etc.) in Limbo?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'Pure arrogance',
        'It shows both ambition and humility—he\'s worthy but ranks below the masters',
        'To honor his teachers',
        'The others insisted'
      ],
      correctAnswer: 'It shows both ambition and humility—he\'s worthy but ranks below the masters',
      explanation: 'Dante positions himself sixth (after Homer, Virgil, Horace, Ovid, Lucan). This shows: (1) Confidence—he belongs in this company; (2) Humility—he\'s the student, they\'re masters.',
      relatedLearningPoints: ['lp-ch1-11']
    },

    {
      id: 'final-q24',
      question: 'Analyze Satan\'s three heads as parody of the Holy Trinity. What do they represent?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'Three types of sin',
        'Impotent rage (red), ignorance (black), hatred (yellow)—inversions of divine power, wisdom, love',
        'Past, present, future',
        'The three parts of Hell'
      ],
      correctAnswer: 'Impotent rage (red), ignorance (black), hatred (yellow)—inversions of divine power, wisdom, love',
      explanation: 'Satan\'s three heads grotesquely parody Trinity: Red (impotent rage vs. divine power), Black (ignorance vs. wisdom), Yellow (hatred vs. love). Unity in good becomes division in evil.',
      relatedLearningPoints: ['lp-ch5-26']
    },

    {
      id: 'final-q25',
      question: 'Explain the significance of Inferno ending with the word \'stars\' after emerging from Hell.',
      type: 'self-assessment',
      points: 10,
      modelAnswer: 'All three parts of the Divine Comedy (Inferno, Purgatorio, Paradiso) end with the word "stars" (stelle in Italian). This is deeply symbolic: (1) Stars represent divine guidance and order in the cosmos; (2) They symbolize hope after despair—emerging from Hell\'s darkness into the starlit night; (3) Stars were used for navigation, representing finding one\'s way home spiritually; (4) The stars\' cosmic order contrasts with Hell\'s disorder and chaos. The journey moves from darkness (Hell) toward light (Paradise)—representing both personal spiritual resurrection and cosmic harmony.',
      assessmentCriteria: [
        {
          id: 'criterion-three-parts',
          text: 'Mentioned that all three parts (Inferno, Purgatorio, Paradiso) end with "stars"',
          points: 2,
        },
        {
          id: 'criterion-symbolism',
          text: 'Explained star symbolism (divine guidance, hope, navigation, cosmic order)',
          points: 3,
        },
        {
          id: 'criterion-contrast',
          text: 'Discussed contrast between Hell\'s darkness/disorder and stars\' light/order',
          points: 3,
        },
        {
          id: 'criterion-journey',
          text: 'Connected to the overall journey from darkness to light/spiritual resurrection',
          points: 2,
        },
      ],
      explanation: 'All three parts (Inferno, Purgatorio, Paradiso) end with \'stars\' (stelle). Stars represent: (1) Divine guidance; (2) Hope after despair; (3) Navigation—finding way home; (4) The cosmos\' order vs. Hell\'s disorder. The journey moves from darkness (Hell) toward light (Paradise)—personal and cosmic resurrection.',
      relatedLearningPoints: ['lp-ch5-37', 'lp-ch5-38']
    }
  ],
};

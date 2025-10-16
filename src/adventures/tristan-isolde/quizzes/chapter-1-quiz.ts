import type { Quiz } from '../../../types';

export const chapter1Quiz: Quiz = {
  id: 'quiz-chapter-1-tristan-isolde',
  title: "Chapter 1: The Hero's Origins - Quiz",
  description: "Test your knowledge of Tristan's background, the battle with the Morholt, and his first journey to Ireland.",
  passingScore: 70,
  allowRetry: true,

  questions: [
    // Multiple Choice Questions
    {
      id: 'q1',
      question: 'Why did Cornwall have to pay tribute to Ireland?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'Ireland had a larger army and threatened invasion',
        'It was an ancient tradition between the kingdoms',
        'Cornwall lost a war with Ireland years ago',
        'King Mark owed a personal debt to the Irish king',
      ],
      correctAnswer: 'Cornwall lost a war with Ireland years ago',
      explanation:
        "Cornwall's annual tribute of sixty young people was the price of peace after losing a war to Ireland. This humiliating arrangement " +
        "created the political tension that Tristan's heroism would resolve.",
      relatedLearningPoints: ['lp-ch1-1-context'],
    },

    {
      id: 'q2',
      question: 'What relationship did Tristan have to King Mark?',
      type: 'multiple-choice',
      points: 10,
      options: [
        "Tristan was Mark's adopted son from a foreign land",
        "Tristan was Mark's younger brother",
        "Tristan was Mark's nephew, son of his late sister",
        "Tristan was Mark's cousin from a distant castle",
      ],
      correctAnswer: "Tristan was Mark's nephew, son of his late sister",
      explanation:
        "Tristan was the son of King Mark's late sister, making him the rightful heir to Cornwall's throne. This family connection made Mark's " +
        "love for Tristan paternal, and Tristan's later betrayal more tragic.",
      relatedLearningPoints: ['lp-ch1-2-lineage'],
    },

    {
      id: 'q3',
      question: 'Which of the following best describes the ideal medieval knight as shown through Tristan?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'Focused solely on military prowess',
        'Skilled in combat, music, and courtly manners',
        'Devoted only to religious contemplation',
        'Interested primarily in wealth and land',
      ],
      correctAnswer: 'Skilled in combat, music, and courtly manners',
      explanation:
        'The ideal medieval knight was a complete person: warrior, artist, and courtier. Tristan exemplified this ideal by excelling in ' +
        'swordplay, playing the harp beautifully, and speaking with eloquence and courtesy.',
      relatedLearningPoints: ['lp-ch1-2-knightly-virtues'],
    },

    {
      id: 'q4',
      question: 'What wound did Tristan receive from his battle with the Morholt?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'A broken sword blade lodged in his chest',
        'A deep cut that healed normally',
        'A poisoned wound that no Cornish healer could cure',
        'No wound--he defeated the Morholt unscathed',
      ],
      correctAnswer: 'A poisoned wound that no Cornish healer could cure',
      explanation:
        "The Morholt's poisoned sword gave Tristan a wound that festered and could not be healed in Cornwall. This forced Tristan to seek " +
        'healing in Ireland, setting up the next part of the story.',
      relatedLearningPoints: ['lp-ch1-6-poison', 'lp-ch1-6-consequences'],
    },

    {
      id: 'q5',
      question: 'Why did Tristan disguise his identity when he arrived in Ireland?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'He was a spy for King Mark',
        "He had killed the Morholt, the Irish champion and queen's brother",
        'He wanted to test if Isolde would help a stranger',
        'It was a common custom for knights to travel incognito',
      ],
      correctAnswer: "He had killed the Morholt, the Irish champion and queen's brother",
      explanation:
        'Tristan called himself "Tantris" because revealing that he killed the Morholt would have resulted in his immediate execution. ' +
        "This disguise created dramatic irony--Isolde unknowingly healed her uncle's killer.",
      relatedLearningPoints: ['lp-ch1-7-disguise'],
    },

    {
      id: 'q6',
      question: 'What skills did Isolde possess that made her remarkable?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'Only beauty and courtly manners',
        'Exceptional skill in combat and warfare',
        'Healing arts, herbal medicine, intelligence, and musical knowledge',
        'Magical powers and prophecy',
      ],
      correctAnswer: 'Healing arts, herbal medicine, intelligence, and musical knowledge',
      explanation:
        'Isolde was introduced as a skilled healer, knowledgeable about herbs and medicine, intellectually curious, and musically accomplished. ' +
        'She was an active, capable character, not just a beautiful passive princess.',
      relatedLearningPoints: ['lp-ch1-7-isolde-intro', 'lp-ch1-8-isolde-skill'],
    },

    // True/False Questions
    {
      id: 'q7',
      question: 'Medieval medicine combined practical herbal knowledge with spiritual and religious beliefs.',
      type: 'true-false',
      points: 10,
      options: ['True', 'False'],
      correctAnswer: 'True',
      explanation:
        'True. Medieval healers used genuine medicinal herbs (some of which were effective) alongside prayers, spiritual cleansing, ' +
        'and theories about "evil humors." They saw body and soul as interconnected in healing.',
      relatedLearningPoints: ['lp-ch1-8-medieval-medicine'],
    },

    {
      id: 'q8',
      question: "Tristan hesitated to volunteer as Cornwall's champion because he was afraid of the Morholt.",
      type: 'true-false',
      points: 10,
      options: ['True', 'False'],
      correctAnswer: 'False',
      explanation:
        'False. Whether Tristan volunteered immediately or after a brief hesitation, his motivation was duty and honor, not fear. ' +
        'He understood the danger but chose to act anyway because Cornwall needed a champion.',
      relatedLearningPoints: ['lp-ch1-3a-duty', 'lp-ch1-3b-moment'],
    },

    // Short Answer Question
    {
      id: 'q9',
      question: 'What name did Tristan use when he arrived in Ireland?',
      type: 'short-answer',
      points: 10,
      correctAnswer: 'Tantris',
      explanation:
        'Tristan disguised himself as "Tantris," a wounded minstrel, to hide his true identity as the knight who had killed the Morholt.',
      relatedLearningPoints: ['lp-ch1-7-disguise'],
    },

    // Self-Assessment Question
    {
      id: 'q10',
      question:
        'Analyze how Chapter 1 follows the classic "hero\'s journey" pattern. Consider Tristan\'s call to adventure, his trials, ' +
        'his helpers, and what he gains from his journey. Provide specific examples from the chapter.',
      type: 'self-assessment',
      points: 20,
      modelAnswer: `Chapter 1 follows the hero's journey pattern in several key ways:

<strong>Call to Adventure:</strong> Tristan's call comes when the Morholt arrives to collect tribute. As a newly discovered prince, Tristan must prove himself worthy by volunteering to fight.

<strong>Trials:</strong> His first major trial is the battle with the Morholt, where he defeats a far more experienced warrior. His second trial is surviving the poisoned wound and seeking healing in enemy territory.

<strong>Helpers:</strong> King Mark provides Tristan with acceptance and legitimacy. Isolde becomes his helper by healing him, though she doesn't know his true identity.

<strong>Gains:</strong> Tristan gains Cornwall's freedom, proves his worth as a hero, and makes a crucial (though secret) connection with Isolde. He also gains experience and maturity through his trials.

The chapter establishes Tristan as a classic hero--noble-born, skilled, brave, and willing to sacrifice for his people. The journey structure builds sympathy for him before the moral complications of later chapters.`,
      assessmentCriteria: [
        {
          id: 'crit1',
          text: "Identified the call to adventure (Morholt's arrival and tribute demand)",
          points: 5,
        },
        {
          id: 'crit2',
          text: "Described Tristan's trials (battle with Morholt, poisoned wound, journey to Ireland)",
          points: 5,
        },
        {
          id: 'crit3',
          text: 'Identified helpers in the journey (King Mark, Isolde)',
          points: 5,
        },
        {
          id: 'crit4',
          text: 'Explained what Tristan gained from the journey (freedom for Cornwall, proven worth, connection with Isolde, growth)',
          points: 5,
        },
      ],
      explanation:
        "The hero's journey is a universal story pattern where a hero leaves the ordinary world, faces trials, receives help, " +
        "and returns transformed. Tristan's story in Chapter 1 follows this pattern while setting up the complications to come.",
      relatedLearningPoints: ['lp-ch1-1-herojourney', 'lp-ch1-11-act-one'],
    },
  ],
};

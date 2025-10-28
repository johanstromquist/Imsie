import type { Quiz } from '../../../types';

export const prologueQuiz: Quiz = {
  id: 'quiz-prologue',
  title: 'Prologue Quiz',
  description: 'Test your knowledge of Greek heroism, mythology, and the Age of Heroes.',
  passingScore: 70,
  allowRetry: true,

  questions: [
    // Question 1: Definition of Greek heroism (from Scene 1)
    {
      id: 'q-prologue-1',
      question: 'What defined a hero in Greek mythology?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'Only their physical strength and combat abilities',
        'Their divine parentage and immortality',
        'The lasting impact of their deeds and the lessons their stories teach',
        'Their wealth and political power',
      ],
      correctAnswer: 'The lasting impact of their deeds and the lessons their stories teach',
      explanation: 'Greek heroes were defined not just by strength or courage, but by the lasting impact of their deeds and the lessons their stories teach. Being remembered and having meaning was central to Greek heroism.',
      relatedLearningPoints: ['lp-prologue-1-definition'],
    },

    // Question 2: Homer and Hesiod (from Scene 2)
    {
      id: 'q-prologue-2',
      question: 'Based on the ancient texts by Homer and Hesiod, how did Greeks view heroes in relation to ordinary mortals?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'As essentially the same as ordinary people, just with more luck',
        'As a distinct "race" between gods and mortals, capable of extraordinary but also tragic deeds',
        'As purely fictional characters with no connection to real human experience',
        'As ordinary mortals who simply trained harder than others',
      ],
      correctAnswer: 'As a distinct "race" between gods and mortals, capable of extraordinary but also tragic deeds',
      explanation: 'Hesiod explicitly called heroes a "god-like race of demi-gods," separate from both immortal gods and ordinary humans. Homer emphasized their extraordinary impact—both glorious and terrible—on the world around them.',
      relatedLearningPoints: ['lp-prologue-2-sources', 'lp-prologue-2-duality'],
    },

    // Question 3: Divine parentage (from Scene 3)
    {
      id: 'q-prologue-3',
      question: 'What advantage did divine parentage give Greek heroes?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'Complete immunity from death and suffering',
        'Automatic favor from all the gods',
        'Superhuman abilities, but also attracted divine enemies',
        'The ability to become gods themselves',
      ],
      correctAnswer: 'Superhuman abilities, but also attracted divine enemies',
      explanation: 'Many Greek heroes were demi-gods—children of a mortal and a god—which gave them superhuman abilities but also divine enemies. For example, Heracles was persecuted by Hera because he was Zeus\'s son.',
      relatedLearningPoints: ['lp-prologue-3-divine-blood'],
    },

    // Question 4: Geography (from Scene 4)
    {
      id: 'q-prologue-4',
      question: 'Why were Greek myths deeply rooted in real geographical locations?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'To make them easier for storytellers to remember',
        'To connect legendary deeds to actual places that audiences could visit',
        'Because the stories were completely true historical events',
        'To compete with other cultures that also used real locations',
      ],
      correctAnswer: 'To connect legendary deeds to actual places that audiences could visit',
      explanation: 'Greek myths were deeply rooted in real geography, connecting legendary deeds to actual places that audiences could visit. This made the stories feel more real and relevant to the ancient Greeks.',
      relatedLearningPoints: ['lp-prologue-4-geography'],
    },

    // Question 5: Kleos definition (from Scene 5)
    {
      id: 'q-prologue-5',
      question: 'What is "kleos" in Greek culture?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'A type of armor worn by heroes',
        'Eternal glory earned through deeds worthy of song',
        'A sacred oath sworn to the gods',
        'The divine blessing given by Zeus',
      ],
      correctAnswer: 'Eternal glory earned through deeds worthy of song',
      explanation: 'Kleos (eternal glory through deeds worthy of song) was the highest aspiration of Greek heroes, valued even above life itself. It meant your name and story would be remembered forever in songs and tales.',
      relatedLearningPoints: ['lp-prologue-5-kleos', 'lp-prologue-5-immortality'],
    },

    // Question 6: Achilles' choice (from Scene 6)
    {
      id: 'q-prologue-6',
      question: 'What choice did Achilles face according to the prophecy from his mother Thetis?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'Fight for Greece or fight for Troy',
        'Serve the gods or defy them',
        'A long, peaceful life forgotten by history, or a short, glorious life remembered forever',
        'Marry for love or marry for political power',
      ],
      correctAnswer: 'A long, peaceful life forgotten by history, or a short, glorious life remembered forever',
      explanation: 'Achilles chose kleos over life. He chose to become immortal in story rather than live long in obscurity. This choice shaped the entire course of the Trojan War and exemplifies the Greek heroic spirit.',
      relatedLearningPoints: ['lp-prologue-6b-cost', 'lp-prologue-6a-humanity'],
    },

    // Question 7: Hubris (from Scene 7)
    {
      id: 'q-prologue-7',
      question: 'What is "hubris" in Greek mythology?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'The blessing of the gods',
        'Excessive pride that leads to downfall',
        'A type of heroic weapon',
        'The ability to see the future',
      ],
      correctAnswer: 'Excessive pride that leads to downfall',
      explanation: 'Hubris (excessive pride) and its consequence, nemesis (divine retribution), form one of the core moral frameworks of Greek myth. Heroes who forget they are mortal and challenge the gods face terrible consequences.',
      relatedLearningPoints: ['lp-prologue-7-hubris'],
    },

    // Question 8: Fate vs. Free Will (from Scene 7)
    {
      id: 'q-prologue-8',
      question: 'What philosophical question about fate and free will did Greek myths explore?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'Whether gods were more powerful than humans',
        'Whether heroes could escape prophecy or if their choices mattered',
        'Whether strength was more important than intelligence',
        'Whether mortals could become gods',
      ],
      correctAnswer: 'Whether heroes could escape prophecy or if their choices mattered',
      explanation: 'The tension between fate and free will is a recurring philosophical question in Greek heroic narratives. Can heroes escape prophecy? Do their choices matter, or are their ends already written? The Greeks wrestled endlessly with this question.',
      relatedLearningPoints: ['lp-prologue-7-fate'],
    },

    // Question 9: Hero's Journey (from Scene 9)
    {
      id: 'q-prologue-9',
      question: 'Who identified the "Hero\'s Journey" pattern in myths from around the world?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'Homer',
        'Hesiod',
        'Joseph Campbell',
        'George Lucas',
      ],
      correctAnswer: 'Joseph Campbell',
      explanation: 'Joseph Campbell wrote "The Hero with a Thousand Faces" in 1949, identifying common patterns in world mythology. His work profoundly influenced storytellers, including George Lucas when creating Star Wars.',
      relatedLearningPoints: ['lp-prologue-9-monomyth', 'lp-prologue-9-influence'],
    },

    // Question 10: Hero's Journey stages (from Scene 9)
    {
      id: 'q-prologue-10',
      question: 'Which of the following is NOT a stage in Campbell\'s Hero\'s Journey?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'The Call to Adventure',
        'The Divine Blessing',
        'Crossing the Threshold',
        'The Ordeal',
      ],
      correctAnswer: 'The Divine Blessing',
      explanation: 'The Hero\'s Journey includes: The Call to Adventure, Crossing the Threshold, Trials and Helpers, The Ordeal, and Return and Transformation. "The Divine Blessing" is not one of Campbell\'s stages, though divine assistance often appears in the "Trials and Helpers" stage.',
      relatedLearningPoints: ['lp-prologue-9-monomyth'],
    },

    // Question 11: Chronology (from Scene 10)
    {
      id: 'q-prologue-11',
      question: 'According to Greek mythological chronology, which hero came first?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'Achilles',
        'Jason',
        'Perseus',
        'Theseus',
      ],
      correctAnswer: 'Perseus',
      explanation: 'Greek myths follow a rough chronological order, with Perseus earliest (he was grandfather to Heracles), then Heracles, then the generation of Jason and Theseus, ending with the Trojan War (featuring Achilles).',
      relatedLearningPoints: ['lp-prologue-10-chronology'],
    },

    // Question 12: Mount Olympus (from Scene 3, annotation)
    {
      id: 'q-prologue-12',
      question: 'Why was Mount Olympus considered the home of the gods?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'It was the only mountain in ancient Greece',
        'Zeus decreed it in a prophecy',
        'As Greece\'s highest peak with a cloud-shrouded summit, it seemed to be literally above the mortal world',
        'It was located at the center of the Mediterranean',
      ],
      correctAnswer: 'As Greece\'s highest peak with a cloud-shrouded summit, it seemed to be literally above the mortal world',
      explanation: 'Mount Olympus is Greece\'s highest peak at 9,573 feet. To the ancient Greeks, its cloud-shrouded summit seemed the perfect dwelling for their pantheon of gods, literally above the mortal world.',
      relatedLearningPoints: ['lp-prologue-3-intervention'],
    },

    // Question 13: Transformation theme (from Scene 7)
    {
      id: 'q-prologue-13',
      question: 'What role does transformation play in Greek heroic narratives?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'It only refers to physical shape-shifting by gods',
        'It is a minor theme that rarely appears',
        'It is essential, encompassing physical, moral, and psychological change in heroes',
        'It only happens to villains as punishment',
      ],
      correctAnswer: 'It is essential, encompassing physical, moral, and psychological change in heroes',
      explanation: 'Transformation—physical, moral, and psychological—is essential to the Greek concept of the heroic journey. Heroes change through curses, blessings, corruption, redemption, madness, and wisdom gained.',
      relatedLearningPoints: ['lp-prologue-7-transformation'],
    },

    // Question 14: Modern influence (from Scene 9)
    {
      id: 'q-prologue-14',
      question: 'Which modern works were influenced by Greek heroic narrative patterns?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'Only ancient literature and classical works',
        'Star Wars, Harry Potter, and The Lord of the Rings',
        'Only academic texts about mythology',
        'Works written in Greek language only',
      ],
      correctAnswer: 'Star Wars, Harry Potter, and The Lord of the Rings',
      explanation: 'Greek heroic myths established narrative patterns that continue to shape storytelling in modern literature, film, and media. George Lucas explicitly used Campbell\'s Hero\'s Journey (derived from Greek myths) when creating Star Wars.',
      relatedLearningPoints: ['lp-prologue-9-influence'],
    },

    // Question 15: Theme recognition (from Scene 8)
    {
      id: 'q-prologue-15',
      question: 'What can recognizing thematic patterns across different Greek myths reveal?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'That all myths tell exactly the same story',
        'The underlying cultural values and philosophical questions Greeks explored through storytelling',
        'That Greek storytellers lacked creativity',
        'That myths were meant only for entertainment, not education',
      ],
      correctAnswer: 'The underlying cultural values and philosophical questions Greeks explored through storytelling',
      explanation: 'Recognizing thematic patterns across different myths reveals the underlying cultural values and philosophical questions Greeks explored through storytelling. Themes like hubris, fate, and transformation appear repeatedly because they addressed fundamental human concerns.',
      relatedLearningPoints: ['lp-prologue-8-recognition'],
    },
  ],
};

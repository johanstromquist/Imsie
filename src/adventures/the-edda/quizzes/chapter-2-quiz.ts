import type { Quiz } from '../../../types';

export const chapter2Quiz: Quiz = {
  id: 'edda-quiz-chapter-2',
  title: 'Chapter 2: The Deeds of the Gods Quiz',
  description: 'Test your knowledge of Thor\'s adventures and Loki\'s trickster nature.',
  passingScore: 70,
  allowRetry: true,

  questions: [
    {
      id: 'edda-ch2-q1',
      question: 'What is Thor\'s primary role among the gods and humans?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'He is the king of the gods who rules from his throne',
        'He is the protector who defends against giants and chaos',
        'He is the messenger who carries news between realms',
        'He is the healer who cures diseases and injuries',
      ],
      correctAnswer: 'He is the protector who defends against giants and chaos',
      explanation: 'Thor serves as the primary defender of both Asgard and Midgard, using his mighty hammer Mjölnir to battle giants and protect the cosmic order from forces of chaos.',
      relatedLearningPoints: ['edda-ch2-lp-1', 'edda-ch2-lp-2'],
    },

    {
      id: 'edda-ch2-q2',
      question: 'In the journey to Utgard, Thor stayed overnight in what he thought was a hall. What was it really?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'A cave that led deep underground',
        'The glove of the giant Skrymir',
        'An enchanted forest clearing',
        'A ruined temple from ancient times',
      ],
      correctAnswer: 'The glove of the giant Skrymir',
      explanation: 'Thor and his companion unknowingly slept in the thumb of Skrymir\'s enormous glove, mistaking it for a hall with a side chamber. This emphasizes the vast scale of the giants in Jotunheim.',
      relatedLearningPoints: ['edda-ch2-lp-8', 'edda-ch2-lp-9'],
    },

    {
      id: 'edda-ch2-q3',
      question: 'What was Thor actually doing when he tried to drink from the horn in Utgard?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'Drinking poisoned mead designed to weaken him',
        'Drinking from the ocean itself, lowering sea levels',
        'Drinking from an endless magical fountain',
        'Drinking ordinary ale that was magically multiplied',
      ],
      correctAnswer: 'Drinking from the ocean itself, lowering sea levels',
      explanation: 'Utgard-Loki had magically connected the drinking horn to all the world\'s oceans. Thor\'s mighty drinking actually lowered the sea levels and created the first tides, demonstrating his incredible power.',
      relatedLearningPoints: ['edda-ch2-lp-13', 'edda-ch2-lp-15', 'edda-ch2-lp-19'],
    },

    {
      id: 'edda-ch2-q4',
      question: 'What was the "gray cat" that Thor tried to lift?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'A shape-shifting giant in disguise',
        'Jormungandr, the World Serpent',
        'An ordinary cat made impossibly heavy by magic',
        'The personification of the mountain itself',
      ],
      correctAnswer: 'Jormungandr, the World Serpent',
      explanation: 'The cat was an illusion concealing Jormungandr, the World Serpent that encircles Midgard. Thor nearly lifted it from the ocean floor, which would have unraveled the world\'s structure—another demonstration of his immense strength.',
      relatedLearningPoints: ['edda-ch2-lp-13', 'edda-ch2-lp-19'],
    },

    {
      id: 'edda-ch2-q5',
      question: 'Who or what was Elli, the old woman Thor wrestled?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'A disguised giant warrior',
        'The personification of Old Age itself',
        'A sorceress using transformation magic',
        'The spirit of the mountains',
      ],
      correctAnswer: 'The personification of Old Age itself',
      explanation: 'Elli was the personification of old age and time. No one, not even gods, can defeat time—yet Thor brought her to one knee, showing his exceptional strength even against an undefeatable force.',
      relatedLearningPoints: ['edda-ch2-lp-13', 'edda-ch2-lp-19'],
    },

    {
      id: 'edda-ch2-q6',
      question: 'What does the revelation scene at Utgard demonstrate about Thor\'s "failures"?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'They proved Thor was weaker than the giants',
        'They showed Thor needed more training',
        'They were actually displays of unprecedented cosmic power',
        'They were punishment for Thor\'s pride',
      ],
      correctAnswer: 'They were actually displays of unprecedented cosmic power',
      explanation: 'The revelation shows that appearance and reality were opposite—Thor\'s "defeats" were actually incredible feats that terrified the giants. He contested against cosmic forces (ocean, world serpent, time) and nearly won.',
      relatedLearningPoints: ['edda-ch2-lp-15', 'edda-ch2-lp-16', 'edda-ch2-lp-17'],
    },

    {
      id: 'edda-ch2-q7',
      question: 'Who stole Thor\'s hammer Mjölnir?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'Loki, as part of one of his tricks',
        'Utgard-Loki, seeking revenge',
        'Thrym, a giant king who wanted to marry Freyja',
        'The dwarves who originally forged it',
      ],
      correctAnswer: 'Thrym, a giant king who wanted to marry Freyja',
      explanation: 'Thrym stole Mjölnir and buried it eight leagues beneath the earth, demanding the goddess Freyja as his bride in exchange for returning the hammer. This created a cosmic crisis, as the gods needed the hammer for protection.',
      relatedLearningPoints: ['edda-ch2-lp-20', 'edda-ch2-lp-21'],
    },

    {
      id: 'edda-ch2-q8',
      question: 'How did the gods ultimately recover Mjölnir from Thrym?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'They launched a direct military assault on Jotunheim',
        'They traded other magical items of equal value',
        'They disguised Thor as Freyja and sent him to the wedding',
        'They convinced Thrym to return it through diplomacy',
      ],
      correctAnswer: 'They disguised Thor as Freyja and sent him to the wedding',
      explanation: 'Following Heimdall\'s cunning plan, Thor dressed as the bride Freyja (with Loki as bridesmaid) and went to the wedding. When Mjölnir was brought forth to consecrate the marriage, Thor revealed himself and reclaimed his hammer.',
      relatedLearningPoints: ['edda-ch2-lp-23', 'edda-ch2-lp-24', 'edda-ch2-lp-25'],
    },

    {
      id: 'edda-ch2-q9',
      question: 'How did Loki explain Thor\'s enormous appetite at the wedding feast?',
      type: 'multiple-choice',
      points: 10,
      options: [
        '"Freyja has been fasting for religious reasons and is now ravenous"',
        '"Freyja has not eaten in eight days, so eager was she for this wedding"',
        '"Goddesses have much greater appetites than mortal women"',
        '"The journey from Asgard was long and difficult"',
      ],
      correctAnswer: '"Freyja has not eaten in eight days, so eager was she for this wedding"',
      explanation: 'When Thrym was shocked by "Freyja\'s" appetite (Thor had eaten an ox, eight salmon, and all the delicacies), Loki quickly improvised this excuse to explain away the suspicious behavior and maintain the disguise.',
      relatedLearningPoints: ['edda-ch2-lp-26', 'edda-ch2-lp-27'],
    },

    {
      id: 'edda-ch2-q10',
      question: 'What does Thor\'s willingness to dress as a bride demonstrate?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'That he was foolish and easily manipulated',
        'That he cared nothing for his reputation',
        'That he could endure temporary humiliation for the greater good',
        'That he enjoyed playing tricks like Loki',
      ],
      correctAnswer: 'That he could endure temporary humiliation for the greater good',
      explanation: 'Despite his initial protests and the humiliation of cross-dressing, Thor ultimately agreed to the plan because recovering Mjölnir was essential for protecting Asgard. This shows maturity and wisdom beyond mere strength.',
      relatedLearningPoints: ['edda-ch2-lp-28', 'edda-ch2-lp-25'],
    },

    {
      id: 'edda-ch2-q11',
      question: 'What does the widespread presence of Thor\'s hammer amulets in archaeological findings tell us?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'Thor was only worshipped by elite warriors',
        'Thor was a protective deity widely invoked by common people',
        'Hammer amulets were merely decorative jewelry',
        'Thor worship was limited to specific regions',
      ],
      correctAnswer: 'Thor was a protective deity widely invoked by common people',
      explanation: 'The abundance of Mjölnir amulets across all social classes and regions suggests Thor was widely venerated as a protector by ordinary people—farmers, travelers, families—not just warriors. He was the people\'s god.',
      relatedLearningPoints: ['edda-ch2-lp-31', 'edda-ch2-lp-32'],
    },

    {
      id: 'edda-ch2-q12',
      question: 'True or False: Loki can be simply categorized as either good or evil.',
      type: 'true-false',
      points: 10,
      options: ['True', 'False'],
      correctAnswer: 'False',
      explanation: 'Loki is a morally complex figure who cannot be simply categorized. He serves as both helper and troublemaker, sometimes loyal to the gods and sometimes working against them. He embodies the trickster archetype, existing between order and chaos.',
      relatedLearningPoints: ['edda-ch2-lp-35', 'edda-ch2-lp-36', 'edda-ch2-lp-22'],
    },

    {
      id: 'edda-ch2-q13',
      question: 'What is the main theme illustrated by comparing Thor\'s strength with Loki\'s cunning?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'Strength is always superior to cunning in Norse culture',
        'Cunning is the only truly valuable quality',
        'Both strength and cunning are necessary and complementary',
        'The gods should never rely on tricks or deception',
      ],
      correctAnswer: 'Both strength and cunning are necessary and complementary',
      explanation: 'The myths show that Thor\'s straightforward might and Loki\'s clever trickery are both valuable. In Utgard, Thor learned that wit matters; in recovering Mjölnir, he used deception alongside force. The Norse valued both approaches to problem-solving.',
      relatedLearningPoints: ['edda-ch2-lp-37', 'edda-ch2-lp-25', 'edda-ch2-lp-16'],
    },

    {
      id: 'edda-ch2-q14',
      question: 'Which of these items would be anachronistic in a Viking Age settlement?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'Iron swords and Thor\'s hammer amulets',
        'Longships and runic inscriptions',
        'Gunpowder cannons and telescopes',
        'Mead horns and wooden halls',
      ],
      correctAnswer: 'Gunpowder cannons and telescopes',
      explanation: 'Gunpowder and telescopes were invented centuries after the Viking Age ended (around 1100 CE). Vikings had sophisticated technology for their era, including iron weapons, longships, and runes, but not these later inventions.',
      relatedLearningPoints: ['edda-ch2-lp-33', 'edda-ch2-lp-34'],
    },

    {
      id: 'edda-ch2-q15',
      question: 'In what way does the conflict between gods and giants represent a larger theme?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'It represents the conflict between different human tribes',
        'It represents the eternal struggle between order and chaos',
        'It represents the battle between old and new religions',
        'It represents the conflict between rich and poor',
      ],
      correctAnswer: 'It represents the eternal struggle between order and chaos',
      explanation: 'The gods represent cosmic order (cosmos), while the giants represent primordial chaos and raw natural forces. Their constant conflict reflects the Norse understanding of the universe as a perpetual balance between these opposing forces.',
      relatedLearningPoints: ['edda-ch2-lp-2', 'edda-ch2-lp-10'],
    },

    // Self-Assessment Questions
    {
      id: 'edda-ch2-q16',
      question: 'Analyze the relationship between Thor\'s strength and Loki\'s cunning in Chapter 2. How do these complementary qualities reflect Norse cultural values? Consider specific examples from both the Utgard journey and the theft of Mjölnir.',
      type: 'self-assessment',
      points: 15,
      modelAnswer: 'Thor and Loki represent two essential and complementary approaches to problem-solving that the Norse valued equally: raw power and clever wit. Thor embodies straightforward might—he confronts challenges directly with overwhelming force. Loki represents cunning, adaptability, and the willingness to use deception when strength alone fails. The Norse recognized that neither approach is universally superior; both are necessary.\n\nIn the Utgard journey, Thor\'s incredible strength was neutralized by giant magic and illusion. He learned that pure force, however mighty, can be defeated by cleverness. His "failures" were actually cosmic-level feats (drinking the ocean, lifting the World Serpent, wrestling Old Age), but without understanding the deception, he felt defeated. This teaches that strength without wisdom is incomplete.\n\nIn the theft of Mjölnir, the situation was reversed. Thrym had stolen Thor\'s hammer through trickery, and brute force couldn\'t recover it—Thor needed his hammer to fight effectively! Heimdall\'s cunning plan, executed with Loki\'s help, succeeded where violence would have failed. Thor had to humble himself, dress as a bride, and use deception. This shows that even the mightiest warrior must sometimes rely on wit over strength.\n\nThe Norse valued both qualities because survival in their harsh world required adaptability. Sometimes you needed the strength to fight wolves or defend your farm; sometimes you needed the cunning to navigate complex social situations, make advantageous trades, or survive the winter. The complementary nature of Thor and Loki reflects this practical wisdom—the ideal person combines strength with intelligence, courage with cleverness.',
      assessmentCriteria: [
        {
          id: 'crit1',
          text: 'Explained how Thor and Loki represent complementary approaches (strength vs. cunning, directness vs. deception)',
          points: 4,
        },
        {
          id: 'crit2',
          text: 'Analyzed the Utgard journey as an example of strength limited by lack of wisdom',
          points: 4,
        },
        {
          id: 'crit3',
          text: 'Discussed the Mjölnir theft as an example where cunning succeeded where force would fail',
          points: 4,
        },
        {
          id: 'crit4',
          text: 'Connected these qualities to Norse cultural values and practical survival needs',
          points: 3,
        },
      ],
      explanation: 'This question asks you to think about how mythology reflects cultural values. The complementary relationship between Thor and Loki shows that the Norse didn\'t simply value brute strength—they understood that intelligence, adaptability, and even deception have their place. Both warriors and tricksters were necessary for society.',
      relatedLearningPoints: ['edda-ch2-lp-37', 'edda-ch2-lp-25', 'edda-ch2-lp-16', 'edda-ch2-lp-22'],
    },
    {
      id: 'edda-ch2-q17',
      question: 'The Utgard journey reveals that Thor\'s "failures" were actually demonstrations of cosmic power. What does this myth teach about the nature of power and perception? How do appearance and reality diverge, and what are the implications of this for understanding strength and weakness?',
      type: 'self-assessment',
      points: 15,
      modelAnswer: 'The Utgard journey is fundamentally about the gap between appearance and reality, and how perception shapes our understanding of power. Thor appeared to fail every challenge—he couldn\'t drink the horn dry, couldn\'t lift the cat, couldn\'t defeat the old woman. Yet the revelation shows that these "failures" were actually unprecedented displays of cosmic-level power that terrified the giants. The horn was connected to all the world\'s oceans, and Thor drank enough to create tides. The cat was the World Serpent, and Thor nearly lifted it from the ocean floor, which would have unraveled reality. The old woman was Time itself, and Thor—unlike anyone before or since—brought her to one knee.\n\nThis myth teaches several important lessons. First, appearances can be profoundly misleading—what seems like weakness might actually be strength, and vice versa. The giants\' magic made cosmic power look like failure, showing how context and framing shape perception. Second, it suggests that power is relative and contextual. Thor is immensely powerful, but even he cannot match cosmic forces like the ocean or time—yet he came closer than anyone imagined possible. Third, the myth warns against judging based on immediate results. Thor felt humiliated, but he had actually performed impossible feats. Success and failure aren\'t always what they appear.\n\nThe implications are profound. The myth suggests we should be humble about our judgments of strength and weakness. What we perceive as failure might be success under different circumstances. It also teaches that even the mightiest beings operate within cosmic limits—there are forces (time, nature, entropy) that even gods cannot fully control. Finally, it shows that wisdom requires looking beyond appearances to understand reality. The giants understood this; Thor had to learn it. Power without understanding is incomplete, which is why Thor\'s journey was educational, not just challenging.',
      assessmentCriteria: [
        {
          id: 'crit1',
          text: 'Explained how the revelation shows the gap between appearance and reality (seeming failures were cosmic feats)',
          points: 4,
        },
        {
          id: 'crit2',
          text: 'Discussed what this teaches about perception, context, and judgment (appearances misleading, relativity of power)',
          points: 4,
        },
        {
          id: 'crit3',
          text: 'Analyzed the philosophical implications (humility, cosmic limits, need for wisdom beyond strength)',
          points: 4,
        },
        {
          id: 'crit4',
          text: 'Connected specific examples from the myth to support the analysis (horn/ocean, cat/serpent, woman/time)',
          points: 3,
        },
      ],
      explanation: 'This question explores the deeper philosophical meaning of the Utgard journey. The myth isn\'t just an adventure story—it\'s a meditation on perception, power, and wisdom. Understanding this helps us see how Norse myths conveyed complex ideas about the nature of reality and the limits of strength.',
      relatedLearningPoints: ['edda-ch2-lp-13', 'edda-ch2-lp-15', 'edda-ch2-lp-16', 'edda-ch2-lp-17', 'edda-ch2-lp-19'],
    },
  ],
};

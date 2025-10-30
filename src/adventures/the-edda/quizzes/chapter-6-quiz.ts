import type { Quiz } from '../../../types';

export const chapter6Quiz: Quiz = {
  id: 'edda-ch6-quiz',
  title: 'Chapter 6: Epilogue - The Legacy of Norse Mythology - Quiz',
  description:
    'Test your knowledge about how Norse mythology was preserved and its influence on literature and culture.',
  passingScore: 70,
  allowRetry: true,

  questions: [
    // Multiple Choice Questions
    {
      id: 'q1',
      question: 'Why did Snorri Sturluson, a Christian scholar, write the Prose Edda about pagan Norse myths?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'He secretly practiced the old pagan religion',
        'He wanted to preserve cultural knowledge needed to understand Norse poetry',
        'He was forced to by Icelandic authorities',
        'He wanted to convert people back to paganism',
      ],
      correctAnswer: 'He wanted to preserve cultural knowledge needed to understand Norse poetry',
      explanation:
        'Snorri wrote the Prose Edda as an educational textbook for poets. Norse poetry was filled with mythological references, and without understanding the myths, the poetry became meaningless. He preserved the myths for cultural and literary reasons, not religious ones.',
      relatedLearningPoints: ['edda-ch6-lp-1', 'edda-ch6-lp-2'],
    },

    {
      id: 'q2',
      question: 'What are the two Eddas that form the foundation of our knowledge about Norse mythology?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'The Prose Edda (by Snorri) and the Poetic Edda (anonymous poems)',
        'The Elder Edda and the Younger Edda',
        'The Icelandic Edda and the Norwegian Edda',
        'The Christian Edda and the Pagan Edda',
      ],
      correctAnswer: 'The Prose Edda (by Snorri) and the Poetic Edda (anonymous poems)',
      explanation:
        'The Prose Edda, written by Snorri Sturluson around 1220, explains Norse myths in prose form. The Poetic Edda is a collection of older anonymous poems about gods and heroes. Together, these two texts preserve most of what we know about Norse mythology.',
      relatedLearningPoints: ['edda-ch6-lp-6'],
    },

    {
      id: 'q3',
      question: 'What is the Codex Regius and why is it important?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'A medieval manuscript containing the Poetic Edda, rediscovered in 1643',
        'Snorri Sturluson\'s original draft of the Prose Edda',
        'A Roman text about Norse-Roman relations',
        'A Christian Bible with Norse translations',
      ],
      correctAnswer: 'A medieval manuscript containing the Poetic Edda, rediscovered in 1643',
      explanation:
        'The Codex Regius, written around 1270, contains 31 poems about Norse gods and heroes including the Völuspá. It disappeared for centuries and was rediscovered in 1643. Without this single manuscript, much of Norse mythology would have been lost forever.',
      relatedLearningPoints: ['edda-ch6-lp-7', 'edda-ch6-lp-8'],
    },

    {
      id: 'q4',
      question: 'When and why did Norse mythology experience a major revival in European culture?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'During the Renaissance when Greek and Roman texts were rediscovered',
        'During the Romantic era when artists sought alternatives to classical traditions',
        'During the Middle Ages when Vikings raided Europe',
        'During the Industrial Revolution when nationalism became popular',
      ],
      correctAnswer: 'During the Romantic era when artists sought alternatives to classical traditions',
      explanation:
        'In the late 18th and 19th centuries, Romantic poets and artists, tired of Greek and Roman classics, discovered Norse mythology through new translations. They were captivated by its darker, more honest treatment of mortality and fate.',
      relatedLearningPoints: ['edda-ch6-lp-9', 'edda-ch6-lp-11'],
    },

    {
      id: 'q5',
      question: 'What makes Norse mythology distinctive compared to Greek and Roman myths?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'Norse gods are more powerful and never die',
        'Norse mythology is more optimistic and has happy endings',
        'Norse gods are mortal and know they will die at Ragnarök',
        'Norse myths have no moral lessons or themes',
      ],
      correctAnswer: 'Norse gods are mortal and know they will die at Ragnarök',
      explanation:
        'Unlike the immortal gods of Olympus, Norse gods are mortal and prophesied to die at Ragnarök. This darker, more fatalistic worldview—where even gods cannot escape death—makes Norse mythology distinctive and appealed especially to Romantic artists.',
      relatedLearningPoints: ['edda-ch6-lp-12'],
    },

    {
      id: 'q6',
      question: 'How did Richard Wagner\'s Ring Cycle influence modern culture?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'It had little impact and was quickly forgotten',
        'It accurately preserved Norse myths without any changes',
        'It transformed Norse myths into philosophical drama and influenced film music and fantasy literature',
        'It proved that Norse myths were too complex for modern audiences',
      ],
      correctAnswer: 'It transformed Norse myths into philosophical drama and influenced film music and fantasy literature',
      explanation:
        'Wagner\'s Ring Cycle (1869-1876) adapted Norse mythology to explore themes of power and fate. His musical techniques shaped how epic storytelling works in modern films, and his cursed ring influenced fantasy literature including Tolkien\'s work.',
      relatedLearningPoints: ['edda-ch6-lp-14', 'edda-ch6-lp-15'],
    },

    {
      id: 'q7',
      question: 'Which elements did J.R.R. Tolkien borrow directly from Norse mythology?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'Only the general concept of fantasy worlds',
        'Dwarf names, the concept of Middle-earth (Midgard), and the portrayal of elves',
        'Just the idea of a dark lord',
        'Nothing—Tolkien created everything from his imagination',
      ],
      correctAnswer: 'Dwarf names, the concept of Middle-earth (Midgard), and the portrayal of elves',
      explanation:
        'Tolkien, an Oxford professor of Old Norse, borrowed extensively from Norse mythology: dwarf names like Thorin and Gandalf come from the Prose Edda, Middle-earth is Midgard, and his portrayal of elves as wise immortal beings draws from Norse tradition.',
      relatedLearningPoints: ['edda-ch6-lp-16', 'edda-ch6-lp-17'],
    },

    {
      id: 'q8',
      question: 'How do modern pop culture adaptations (like Marvel\'s Thor) differ from the original Norse myths?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'They are completely identical to the original myths',
        'They often remove the darkness and fatalism, making the myths more optimistic',
        'They are more violent and darker than the original myths',
        'They focus entirely on historical accuracy',
      ],
      correctAnswer: 'They often remove the darkness and fatalism, making the myths more optimistic',
      explanation:
        'Modern adaptations often "Disnefy" Norse myths, removing the darkness and inevitable tragedy. Marvel\'s Thor has heroic optimism and happy endings, while the original Thor knows he\'s doomed to die at Ragnarök. Hollywood Ragnarök becomes a battle scene rather than an inevitable tragedy.',
      relatedLearningPoints: ['edda-ch6-lp-20'],
    },

    // True/False Questions
    {
      id: 'q9',
      question: 'Medieval manuscripts like the Codex Regius were carefully protected and never at risk of being lost.',
      type: 'true-false',
      points: 10,
      options: ['True', 'False'],
      correctAnswer: 'False',
      explanation:
        'False. Medieval manuscripts were extremely fragile and many were lost to fire, decay, or simple neglect. The Codex Regius itself disappeared for centuries. Without dedicated scribes and lucky preservation, these texts could easily have been lost forever.',
      relatedLearningPoints: ['edda-ch6-lp-5', 'edda-ch6-lp-8'],
    },

    {
      id: 'q10',
      question: 'Popular adaptations of Norse mythology can serve as gateways that lead some people to study the original sources.',
      type: 'true-false',
      points: 10,
      options: ['True', 'False'],
      correctAnswer: 'True',
      explanation:
        'True. While modern adaptations often simplify or change the myths, they introduce broad audiences to Norse concepts and names. Some of those audience members become curious about the original sources and pursue deeper study—just as you have done in this adventure.',
      relatedLearningPoints: ['edda-ch6-lp-21'],
    },

    {
      id: 'q11',
      question: 'Snorri Sturluson could have predicted that his work would influence movies, video games, and comic books centuries later.',
      type: 'true-false',
      points: 10,
      options: ['True', 'False'],
      correctAnswer: 'False',
      explanation:
        'False. Snorri wrote the Prose Edda to help Icelandic poets understand mythological references in traditional verse. He could not have imagined Wagner\'s operas, Tolkien\'s novels, Marvel comics, or video games—yet his work influenced all of them.',
      relatedLearningPoints: ['edda-ch6-lp-2', 'edda-ch6-lp-23'],
    },

    // Short Answer Question
    {
      id: 'q12',
      question: 'In what year was Snorri Sturluson\'s Prose Edda written?',
      type: 'short-answer',
      points: 10,
      correctAnswer: ['1220', 'around 1220', 'c. 1220', 'circa 1220', '1220 CE'],
      explanation:
        'Snorri Sturluson wrote the Prose Edda around 1220 CE in Iceland, over 200 years after Iceland officially converted to Christianity. This timing is important—he was preserving pagan myths for cultural rather than religious reasons.',
      relatedLearningPoints: ['edda-ch6-lp-1'],
    },

    // Self-Assessment Questions
    {
      id: 'q13',
      question:
        'Compare and contrast how Norse mythology has been adapted in different historical periods (Romantic era vs. modern pop culture). What does this tell us about how each generation uses mythology?',
      type: 'self-assessment',
      points: 10,
      modelAnswer:
        'Different eras have adapted Norse mythology to reflect their own values and concerns. The Romantic era (late 1700s-1800s) embraced the darkness, fatalism, and tragic grandeur of Norse myths as a reaction against Enlightenment rationalism and classical Greek/Roman dominance. Romantic artists like Wagner were drawn to themes of inevitable doom faced with courage, reflecting their interest in emotion, nature, and national identity. Modern pop culture adaptations, in contrast, often lighten the material—Marvel\'s Thor has optimistic heroism and happy endings, video games turn myths into action adventures, and Hollywood transforms tragic Ragnarök into spectacular battle scenes. This reflects modern entertainment preferences for hopeful narratives and happy endings. However, both eras use mythology as a mirror for their times: Romantics found philosophical depth in facing inevitable doom, while modern audiences find comfort in heroes who can prevent apocalypse. This shows that myths survive not by staying frozen but by being reinterpreted—each generation finds what it needs in these ancient stories, making them perpetually relevant.',
      assessmentCriteria: [
        {
          id: 'criterion-periods',
          text: 'Identified key differences between Romantic era and modern adaptations',
          points: 3,
        },
        {
          id: 'criterion-values',
          text: 'Explained how each era\'s adaptations reflected contemporary values and concerns',
          points: 3,
        },
        {
          id: 'criterion-examples',
          text: 'Provided specific examples (Wagner, Marvel, etc.)',
          points: 2,
        },
        {
          id: 'criterion-insight',
          text: 'Drew conclusions about how mythology functions across generations',
          points: 2,
        },
      ],
      explanation:
        'This question asks you to think critically about how different historical periods have reinterpreted Norse mythology. The key insight is that myths remain relevant by being adaptable—each generation finds its own meaning while the core elements persist.',
      relatedLearningPoints: [
        'edda-ch6-lp-10',
        'edda-ch6-lp-11',
        'edda-ch6-lp-20',
        'edda-ch6-lp-22',
      ],
    },

    {
      id: 'q14',
      question:
        'Analyze the role of manuscript preservation in cultural transmission. What would have been lost if the Codex Regius had been destroyed, and what does this tell us about cultural memory?',
      type: 'self-assessment',
      points: 10,
      modelAnswer:
        'The Codex Regius case study reveals how fragile cultural transmission can be. This single manuscript, written around 1270 and containing 31 irreplaceable poems including the Völuspá, disappeared for centuries until rediscovered in 1643. Had it been destroyed—by fire, decay, or simple carelessness—we would have permanently lost our most detailed account of Ragnarök and numerous other myths. No other manuscripts contained these poems. This demonstrates several crucial points about cultural memory: First, before printing presses, cultural knowledge existed in unique artifacts vulnerable to loss. Second, cultural transmission depends on individuals—anonymous scribes who copied manuscripts, people who preserved them through chaos, scholars like Bishop Brynjólfur who recognized their value. Third, historical luck plays a huge role—the Codex Regius survived largely by chance. This makes us realize that much ancient cultural knowledge has been lost forever, and what survives represents just a fraction of what once existed. The manuscripts that do survive create our understanding of the past—if the Codex Regius had burned, we would have a fundamentally different (and poorer) understanding of Norse mythology. This highlights why preservation institutions (libraries, archives, museums) matter: they protect fragile links to cultural memory that can never be recreated once lost.',
      assessmentCriteria: [
        {
          id: 'criterion-specific',
          text: 'Discussed specific content that would have been lost (Völuspá, poems, detailed Ragnarök account)',
          points: 2,
        },
        {
          id: 'criterion-fragility',
          text: 'Explained the fragility of manuscript preservation (unique artifacts, vulnerability)',
          points: 3,
        },
        {
          id: 'criterion-individuals',
          text: 'Recognized the role of individuals in cultural transmission (scribes, preservers, scholars)',
          points: 2,
        },
        {
          id: 'criterion-broader',
          text: 'Drew broader conclusions about cultural memory and preservation',
          points: 3,
        },
      ],
      explanation:
        'This question examines how cultural knowledge survives—or doesn\'t survive—across centuries. The key is understanding that our knowledge of the past depends on fragile physical objects and the dedication of individuals to preserve them.',
      relatedLearningPoints: [
        'edda-ch6-lp-5',
        'edda-ch6-lp-7',
        'edda-ch6-lp-8',
      ],
    },
  ],
};

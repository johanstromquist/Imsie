import type { Quiz } from '../../../types';

/**
 * Chapter 3 Quiz: Secret Love and Discovery
 *
 * Tests understanding of forbidden romance structure, court intrigue,
 * the discovery and condemnation of the lovers, their escape and exile,
 * and the symbolic discovery by King Mark.
 */

export const chapter3Quiz: Quiz = {
  id: 'quiz-chapter-3-tristan-isolde',
  title: 'Chapter 3: Secret Love and Discovery',
  description:
    "Test your understanding of the lovers' secret meetings, their discovery and condemnation, " +
    "their forest exile, and King Mark's mercy.",
  passingScore: 70,
  allowRetry: true,

  questions: [
    // Question 1: Multiple Choice - Secret Meetings
    {
      id: 'q1-secret-meetings',
      question:
        "Why was it so dangerous for Tristan and Isolde to meet secretly at King Mark's court?",
      type: 'multiple-choice',
      points: 10,
      options: [
        'The castle was too small to hide their meetings',
        'King Mark had forbidden all private conversations between any courtiers',
        'They had to maintain public appearances while hiding private passion, and any discovery would mean death for treason',
        'The love potion made them glow with a visible light when together',
      ],
      correctAnswer:
        'They had to maintain public appearances while hiding private passion, and any discovery would mean death for treason',
      explanation:
        'The danger came from the need to appear proper in public (as queen and loyal nephew) while hiding their forbidden love. Discovery would be treason, punishable by death. The tension between public duty and private desire created the dramatic conflict.',
      relatedLearningPoints: ['lp-ch3-1-courtly-love', 'lp-ch3-1-dramatic-irony'],
    },

    // Question 2: Multiple Choice - Frocin's Role
    {
      id: 'q2-frocin-dwarf',
      question: "What was Frocin the dwarf's role in the story, and why was he dangerous?",
      type: 'multiple-choice',
      points: 10,
      options: [
        'He was a wizard who cast spells to reveal the truth',
        'He was jealous of Tristan and wanted Isolde for himself',
        'He was actually working to protect the lovers from King Mark',
        'He was a cunning advisor who observed carefully and devised clever traps to expose the lovers',
      ],
      correctAnswer:
        'He was a cunning advisor who observed carefully and devised clever traps to expose the lovers',
      explanation:
        "Frocin was dangerous because of his intelligence and careful observation. He noticed subtle signs of the affair (meaningful glances, changed voices) and devised clever tests like the flour trap. He represented the court's surveillance and suspicion.",
      relatedLearningPoints: ['lp-ch3-4-tests', 'lp-ch3-6-evidence'],
    },

    // Question 3: Multiple Choice - The Flour Trap
    {
      id: 'q3-flour-trap',
      question: 'What was the purpose of spreading flour between the chambers, and what did it reveal?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'To make the floor slippery so anyone crossing would fall and be discovered',
        'To purify the area with white flour, which had religious significance',
        'To create footprints that would prove if anyone crossed between chambers at night',
        'To feed the castle mice and distract them from making noise',
      ],
      correctAnswer:
        'To create footprints that would prove if anyone crossed between chambers at night',
      explanation:
        "The flour trap was a clever detective technique. Any footprints in the flour would prove someone had crossed between Tristan's chamber and the royal bedchamber. While Tristan avoided the trap initially, later evidence (blood from his wound) eventually betrayed them.",
      relatedLearningPoints: ['lp-ch3-4-tests', 'lp-ch3-6-evidence'],
    },

    // Question 4: Multiple Choice - Tristan's Leap
    {
      id: 'q4-tristans-leap',
      question:
        'What caused Tristan and Isolde to finally be discovered despite their careful precautions?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'Frocin saw them meeting in the garden and reported directly to King Mark',
        'A servant overheard them confessing their love and told the king',
        "Tristan leaped from his window to Isolde's chamber, reopening an old wound that bled and left evidence",
        "The love potion's effects suddenly became visible to everyone at court",
      ],
      correctAnswer:
        "Tristan leaped from his window to Isolde's chamber, reopening an old wound that bled and left evidence",
      explanation:
        "Passion overcame caution when Tristan made the dangerous leap between windows. His old injury reopened, and the blood in Isolde's chamber provided undeniable evidence. This shows how love's recklessness ultimately led to discovery--no amount of cleverness could hide passion forever.",
      relatedLearningPoints: ['lp-ch3-5-recklessness', 'lp-ch3-5-blood-symbol'],
    },

    // Question 5: True/False - King Mark's Character
    {
      id: 'q5-mark-villain',
      question:
        'True or False: King Mark is portrayed as a pure villain who enjoys punishing Tristan and Isolde.',
      type: 'true-false',
      points: 10,
      correctAnswer: 'False',
      explanation:
        'False. King Mark is portrayed as a complex, sympathetic character who is deeply hurt by the betrayal. He loves both Tristan (whom he raised as a son) and Isolde (his wife). He is torn between his duties as king (which demand justice) and his love for them. His pain makes the tragedy deeper, not his villainy.',
      relatedLearningPoints: ['lp-ch3-7-mark-complexity', 'lp-ch3-15-marks-mercy'],
    },

    // Question 6: Multiple Choice - Chapel Leap
    {
      id: 'q6-chapel-leap',
      question: 'Why did Tristan leap from the chapel window despite the deadly danger?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'He was trying to commit suicide because he could not live without Isolde',
        'King Mark ordered him to leap as a test of his faith',
        'He needed to escape to rescue Isolde from her terrible fate with the lepers',
        'He was pushed by his guards who wanted to kill him quickly',
      ],
      correctAnswer: 'He needed to escape to rescue Isolde from her terrible fate with the lepers',
      explanation:
        'Tristan leaped knowing he might die because Isolde needed him. She had been given to the lepers--a fate considered worse than death. His desperate leap was motivated by love and the need to save her. The impossible leap became possible because of what was at stake.',
      relatedLearningPoints: ['lp-ch3-10-heroic-feat', 'lp-ch3-10-survival'],
    },

    // Question 7: Multiple Choice - Forest Symbolism
    {
      id: 'q7-forest-symbolism',
      question: 'What did the Forest of Morois represent for Tristan and Isolde?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'A prison worse than any dungeon where they suffered constantly',
        "A magical realm where the love potion's effects were amplified",
        "A sanctuary where they could love freely, away from court's judgment, though life was harsh",
        'A temporary hiding place they planned to leave as soon as possible',
      ],
      correctAnswer:
        "A sanctuary where they could love freely, away from court's judgment, though life was harsh",
      explanation:
        "The forest represented both hardship and freedom. They lost all comfort and luxury, but gained the ability to love openly without surveillance or judgment. Nature became their sanctuary from civilization's complications. The forest tested whether their love was genuine or merely based on courtly attraction.",
      relatedLearningPoints: ['lp-ch3-12-nature-sanctuary', 'lp-ch3-13-pastoral'],
    },

    // Question 8: True/False - Forest Life
    {
      id: 'q8-forest-regret',
      question:
        'True or False: Isolde deeply regretted leaving her life as queen and wished to return to court as soon as possible.',
      type: 'true-false',
      points: 10,
      correctAnswer: 'False',
      explanation:
        'False. While Isolde\'s life became much harder (rough hands from work, worn clothes, simple food), she told Tristan she did not regret the choice. She said she had been "a queen in a cage" but now was free. The forest gave them something the court could not: the freedom to love openly. This shows their love was genuine, not just based on luxury or the potion.',
      relatedLearningPoints: ['lp-ch3-13-simplicity-test', 'lp-ch3-11-exile'],
    },

    // Question 9: Multiple Choice - The Sword Symbol
    {
      id: 'q9-sword-symbol',
      question:
        'What did the naked sword placed between Tristan and Isolde as they slept symbolize?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'It was there to protect them from wild animals in the forest',
        'It represented the barrier that fate had placed between them',
        'It symbolized chastity and restraint--they maintained some honor by not fully consummating their love while Isolde was wed to Mark',
        'It was simply where Tristan had laid his weapon for easy access',
      ],
      correctAnswer:
        'It symbolized chastity and restraint--they maintained some honor by not fully consummating their love while Isolde was wed to Mark',
      explanation:
        "The sword between them was a powerful medieval symbol of chastity. Despite their love and the potion's power, they maintained a boundary: Isolde was lawfully married to Mark, and they respected that sacred bond even while violating it emotionally. The sword showed they kept some honor amid their guilt.",
      relatedLearningPoints: ['lp-ch3-15-sword-symbol', 'lp-ch3-14-restraint'],
    },

    // Question 10: Multiple Choice - Mark's Discovery
    {
      id: 'q10-marks-discovery',
      question: 'When King Mark found the sleeping lovers, what did he do and why?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'He immediately executed them in their sleep for treason',
        'He woke them and demanded they return to court to face trial',
        'He set fire to their bower to destroy them and erase evidence of his mercy',
        'He left tokens of his presence (glove, sword, ring) showing mercy without waking them, moved by the sword between them',
      ],
      correctAnswer:
        'He left tokens of his presence (glove, sword, ring) showing mercy without waking them, moved by the sword between them',
      explanation:
        "Mark came prepared to execute them but was moved by seeing the sword between them--proof they maintained some honor. He showed mercy through symbols: shading Isolde's face with his glove (tenderness), exchanging swords (acknowledging Tristan's honor), and leaving his ring (proof he was there). This mercy deepened the tragedy by showing Mark's goodness.",
      relatedLearningPoints: [
        'lp-ch3-14-discovery-scene',
        'lp-ch3-14-mercy-complexity',
        'lp-ch3-15-marks-mercy',
      ],
    },

    // Question 11: Self-Assessment
    {
      id: 'q11-self-assessment',
      question:
        "Reflect on King Mark's decision to show mercy. If you were in his position--betrayed by the two people you loved most--could you have done the same? What does his mercy reveal about his character compared to a typical revenge-seeking ruler?",
      type: 'self-assessment',
      points: 10,
      modelAnswer:
        "King Mark's mercy is remarkable because it shows he values <strong>love over vengeance</strong>, even when deeply hurt. Most rulers would have executed the lovers immediately, especially since medieval law permitted—even demanded—such punishment for treason and adultery.\n\nHowever, Mark chose differently. When he saw the <strong>sword between them</strong>, he recognized their restraint and remembered his love for both Tristan (his nephew, raised as a son) and Isolde (his wife). Rather than kill them in their sleep, he left symbolic tokens—his glove, ring, and sword—showing he had been there but chose mercy.\n\nIf I were in his position, I honestly don't know if I could show such mercy. The <strong>betrayal by two loved ones</strong> would be devastating, and the anger and hurt might overwhelm compassion. Mark's ability to see past his pain to recognize their humanity shows extraordinary emotional maturity.\n\nHis mercy reveals that he is <strong>more than a typical ruler</strong>—he's a deeply good person who, despite being wronged, chooses compassion. This makes the tragedy even deeper: the lovers didn't just betray a king seeking political advantage, but someone who genuinely loved them and was capable of forgiveness.",
      assessmentCriteria: [
        {
          id: 'personal-reflection',
          text: 'Included <strong>personal reflection</strong> on whether you could show similar mercy',
          points: 3,
        },
        {
          id: 'mark-character',
          text: 'Analyzed what Mark\'s mercy reveals about his <strong>character and nobility</strong>',
          points: 3,
        },
        {
          id: 'comparison',
          text: 'Compared Mark to a <strong>typical revenge-seeking ruler</strong> and explained the difference',
          points: 2,
        },
        {
          id: 'specific-evidence',
          text: 'Referenced <strong>specific evidence</strong> from the story (sword, tokens, or his emotional conflict)',
          points: 2,
        },
      ],
      explanation:
        "This question asks you to consider the moral complexity of the situation. Mark's mercy shows tremendous character strength--he could easily have killed them in their sleep and been justified by law. Instead, he recognized their restraint (the sword), remembered his love for them, and chose mercy over vengeance. This makes him more noble than a typical ruler who would simply seek revenge. His complexity makes the tragedy deeper: they betrayed someone who genuinely loved them and was capable of mercy.",
      relatedLearningPoints: [
        'lp-ch3-14-mercy-complexity',
        'lp-ch3-7-mark-complexity',
        'lp-ch3-7-public-private',
      ],
    },
  ],
};

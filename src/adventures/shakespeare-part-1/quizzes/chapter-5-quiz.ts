import type { Quiz } from '../../../types';

export const chapter5Quiz: Quiz = {
  id: 'quiz-chapter-5-midsummer',
  title: 'Chapter 5: A Midsummer Night\'s Dream Quiz',
  description: 'Test your knowledge of magic, love, dreams, and metatheatre in Shakespeare\'s enchanted forest.',
  passingScore: 70,
  allowRetry: true,

  questions: [
    // Multiple Choice Q1 - Three worlds concept
    {
      id: 'q1',
      question: 'Which of the following best describes the three distinct worlds in A Midsummer Night\'s Dream?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'The mortal world of humans, the spirit world of fairies, and the dark underworld',
        'Athens representing order, the fairy realm representing magic, and the mechanicals representing labor',
        'The noble city, the wild enchanted forest, and the distant sea',
        'The remembered past, the experienced present, and the imagined future',
      ],
      correctAnswer: 'Athens representing order, the fairy realm representing magic, and the mechanicals representing labor',
      explanation: 'Shakespeare creates three parallel worlds in the play: Athens represents civilization and patriarchal order, the fairy forest represents magic and the unconscious, and the mechanicals represent the practical world of labor and amateur theater.',
      relatedLearningPoints: ['midsummer-lp-3-three-worlds', 'midsummer-lp-8-parallel-worlds'],
    },

    // Multiple Choice Q2 - Hermia's conflict
    {
      id: 'q2',
      question: 'What is the central conflict that forces Hermia to flee Athens?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'She wishes to dedicate her life to becoming a celibate nun',
        'Her father forces her to marry Demetrius against her will',
        'She faces accusations of practicing forbidden witchcraft',
        'She boldly refuses to marry anyone at all for any reason',
      ],
      correctAnswer: 'Her father forces her to marry Demetrius against her will',
      explanation: 'Under Athenian law, Hermia\'s father Egeus has absolute authority over her marriage. When she refuses his choice of Demetrius in favor of Lysander, she faces three options: obey, die, or become a nun. This conflict between individual desire and patriarchal authority drives the lovers into the transformative forest.',
      relatedLearningPoints: ['midsummer-lp-1-athens-order', 'midsummer-lp-2-conflict'],
    },

    // True/False Q3 - Love potion nature
    {
      id: 'q3',
      question: 'The love potion in A Midsummer Night\'s Dream is a real magical substance with genuine power.',
      type: 'true-false',
      points: 10,
      options: ['True', 'False'],
      correctAnswer: 'True',
      explanation: 'While the love potion is a fictional magical device, within the world of the play it has real power—it genuinely changes who people love. However, Shakespeare uses it as a metaphor for the irrational, inexplicable nature of attraction in real life: we\'re all "enchanted" by forces we don\'t control or understand.',
      relatedLearningPoints: ['midsummer-lp-15-potion-symbol', 'midsummer-lp-21-magic-metaphor'],
    },

    // Multiple Choice Q4 - Puck's role
    {
      id: 'q4',
      question: 'What best describes Puck\'s function in the play?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'A malicious villain who deliberately causes harm to innocent mortals',
        'A wise moral guide who carefully teaches important lessons',
        'A chaotic trickster who disrupts order but enables transformation',
        'A minor servant character with no thematic significance whatsoever',
      ],
      correctAnswer: 'A chaotic trickster who disrupts order but enables transformation',
      explanation: 'Puck embodies the trickster archetype: mischievous, amoral, and delighting in confusion. His magic causes chaos, yet through that chaos comes eventual resolution and transformation. He also serves as a commentator, observing mortal folly with amusement and inviting the audience to see humans as absurd.',
      relatedLearningPoints: ['midsummer-lp-9-puck-trickster', 'midsummer-lp-20-puck-observer'],
    },

    // Multiple Choice Q5 - Love and reason
    {
      id: 'q5',
      question: 'What does the play suggest about the relationship between love and reason?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'True love develops only through careful, rational analysis of compatibility',
        'Rational thinking consistently defeats passionate love in the end',
        'Love operates irrationally, beyond the control of reason',
        'Love and reason balance perfectly as equally powerful opposing forces',
      ],
      correctAnswer: 'Love operates irrationally, beyond the control of reason',
      explanation: 'A Midsummer Night\'s Dream repeatedly demonstrates that love defies reason. Helena pursues the unwilling Demetrius obsessively; Lysander\'s affection shifts instantly from Hermia to Helena; Titania falls for Bottom when he has a donkey\'s head. Bottom himself articulates this: "Reason and love keep little company together."',
      relatedLearningPoints: ['midsummer-lp-19-loves-irrationality', 'midsummer-lp-26-fool-wisdom'],
    },

    // Short Answer Q6 - Love-in-idleness
    {
      id: 'q6',
      question: 'What is the name of the magical flower that causes love in the play?',
      type: 'short-answer',
      points: 10,
      correctAnswer: 'love-in-idleness',
      explanation: 'The flower "love-in-idleness" (the wild pansy) is the instrument of magical chaos. Its name perfectly captures love\'s capricious nature—it\'s idle, lazy, purposeless. This symbolizes that attraction has no rational basis; it simply exists as an arbitrary force.',
      relatedLearningPoints: ['midsummer-lp-15-potion-symbol'],
    },

    // True/False Q7 - Bottom's transformation
    {
      id: 'q7',
      question: 'Bottom\'s transformation into an ass-headed creature is purely accidental and has no symbolic meaning.',
      type: 'true-false',
      points: 10,
      options: ['True', 'False'],
      correctAnswer: 'False',
      explanation: 'False. While Puck\'s action is capricious magic, Bottom\'s transformation is both literal and metaphorical: he\'s been acting like a fool all along (trying to play every role, being pompous and confident), and now his appearance matches his behavior. The donkey\'s head is the physical manifestation of his foolishness.',
      relatedLearningPoints: ['midsummer-lp-22-bottom-transformation'],
    },

    // Multiple Choice Q8 - Metatheatre
    {
      id: 'q8',
      question: 'How does the play-within-a-play (Pyramus and Thisbe) function in A Midsummer Night\'s Dream?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'It provides simple entertainment for the wedding with no deeper meaning',
        'It demonstrates what happens when untrained amateurs attempt serious tragedy',
        'It mirrors the lovers\' story while revealing theater\'s illusory nature',
        'It serves as humiliating punishment for the mechanicals\' presumptuous ambitions',
      ],
      correctAnswer: 'It mirrors the lovers\' story while revealing theater\'s illusory nature',
      explanation: 'The mechanicals\' earnest but clumsy performance of Pyramus and Thisbe parallels the lovers\' story (both involve lovers kept apart by authority). More importantly, it\'s metatheatrical: we laugh at them for being obvious about theater\'s artificiality, but we\'re doing the same thing—suspending disbelief. Puck\'s epilogue drives this home: the entire play was a dream.',
      relatedLearningPoints: ['midsummer-lp-33-play-within-play', 'midsummer-lp-36-metatheatre'],
    },

    // Matching Q9 - Magical interventions and outcomes
    {
      id: 'q9',
      question: 'Match each magical intervention to its primary consequence:',
      type: 'matching',
      points: 15,
      correctAnswer: {
        'Puck enchants Lysander\'s eyes': 'Lysander abandons Hermia and pursues Helena',
        'Oberon enchants Demetrius\'s eyes': 'Both men now love Helena, creating comic chaos',
        'Oberon enchants Titania\'s eyes': 'Titania falls in love with Bottom the ass-headed weaver',
        'Oberon reverses the enchantments': 'Hermia and Lysander reunite (Demetrius stays enchanted)',
      },
      explanation: 'Each magical intervention in the forest creates cascading effects. Puck\'s initial mistake throws everything into chaos; Oberon\'s "correction" makes it worse; Titania\'s enchantment achieves Oberon\'s goal of humiliation; and the final reversal leaves Demetrius permanently enchanted, suggesting magic and "true love" are indistinguishable.',
      relatedLearningPoints: ['midsummer-lp-28-magic-consequences', 'midsummer-lp-29-enchantment-remains'],
    },

    // Multiple Choice Q10 - "Lord, what fools these mortals be"
    {
      id: 'q10',
      question: 'When Puck says "Lord, what fools these mortals be," what is he observing?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'The mechanicals\' amateurish acting and their laughably poor stage performance',
        'The lovers\' chaos and their absurd, rapidly shifting romantic affections',
        'The fairies\' vastly superior intelligence compared to foolish mortal humans',
        'The Duke\'s complete inability to properly enforce his own Athenian laws',
      ],
      correctAnswer: 'The lovers\' chaos and their absurd, rapidly shifting romantic affections',
      explanation: 'Puck observes the enchanted lovers fighting, changing allegiances, and pursuing romantic fantasies they\'re convinced are real. His amusement at their foolishness creates a distance that allows the audience to laugh at what might otherwise seem painfully tragic. His perspective reminds us that love, like theater itself, is absurd from the outside.',
      relatedLearningPoints: ['midsummer-lp-20-puck-observer'],
    },

    // True/False Q11 - Forest as transformative space
    {
      id: 'q11',
      question: 'The forest in A Midsummer Night\'s Dream primarily represents law and reason, just like Athens does.',
      type: 'true-false',
      points: 10,
      options: ['True', 'False'],
      correctAnswer: 'False',
      explanation: 'False. The forest represents the opposite of Athens: it\'s the space of the unconscious, the irrational, the imaginative—everything Athens suppresses with law and reason. The forest is where normal rules don\'t apply, where magic works, and where people can be transformed.',
      relatedLearningPoints: ['midsummer-lp-7-forest-space'],
    },

    // Multiple Choice Q12 - Famous quotes theme
    {
      id: 'q12',
      question: 'Which quote best captures the play\'s central theme about love?',
      type: 'multiple-choice',
      points: 10,
      options: [
        '"The course of true love never did run smooth" - Lysander speaks of obstacles',
        '"Love looks not with the eyes, but with the mind" - Helena',
        '"I have had a dream, past the wit of man to say" - Bottom reflects mysteriously',
        '"If we shadows have offended, think but this" - Puck addresses the audience directly',
      ],
      correctAnswer: '"Love looks not with the eyes, but with the mind" - Helena',
      explanation: 'Helena\'s famous quote perfectly articulates the play\'s exploration of love\'s irrationality: attraction isn\'t based on objective reality or merit, but on subjective, irrational mental projection. That\'s why Cupid is blind—love doesn\'t see actual reality, but projects its own fantasies.',
      relatedLearningPoints: ['midsummer-lp-35-famous-quotes'],
    },

    // Multiple Choice Q13 - Why Demetrius stays enchanted
    {
      id: 'q13',
      question: 'Why does Shakespeare leave Demetrius permanently enchanted to love Helena (without reversing the spell)?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'It reveals a mistake in the script and demonstrates the play remains incomplete',
        'To permanently punish Demetrius for his original cruelty toward Helena',
        'To create two happy couples for the required comic marriage ending',
        'Because Oberon\'s powerful fairy spell proves impossible to reverse completely',
      ],
      correctAnswer: 'To create two happy couples for the required comic marriage ending',
      explanation: 'Shakespeare leaves one enchantment in place so that all four lovers end up paired: Hermia with Lysander, Helena with Demetrius. This is a brilliant commentary—it suggests that "true love" and magical attraction are indistinguishable. In comedy, you need symmetry and happy endings, even if they require permanent magical intervention.',
      relatedLearningPoints: ['midsummer-lp-29-enchantment-remains', 'midsummer-lp-31-comedy-ending'],
    },

    // Self-Assessment Q14 - Analysis of imagination and transformation
    {
      id: 'q14',
      question: 'Analyze how A Midsummer Night\'s Dream celebrates the power of imagination. Consider how imagination functions in the forest, how it transforms the characters, and how Puck\'s epilogue invites the audience to reflect on imagination itself.',
      type: 'self-assessment',
      points: 20,
      modelAnswer: `The forest in A Midsummer Night's Dream is fundamentally a space of imagination—where reason and logic lose their power and anything becomes possible. Within this enchanted realm, imagination doesn't just affect the characters; it transforms them. The lovers' confusion about their feelings, Bottom's "dream" experience with the fairies, and even the mechanicals' earnest attempt at theater all demonstrate how imagination can alter perception and create new realities.

Bottom's inability to describe his experience captures the transformative power of imagination: "I have had a dream, past the wit of man to say what dream it was." His time in the fairy realm defies rational explanation because it transcends the boundaries between reality and fantasy. Similarly, the lovers can't fully remember or understand their enchanted night—it exists in the space between dream and waking.

But Shakespeare goes further with Puck's epilogue, which breaks the fourth wall and asks us to recognize that the entire play was a dream, that actors are "shadows" (illusions), and that theater itself is a form of magic. By doing this, he invites the audience to recognize their own imaginative participation: we've been "enchanted" by the performance, just as the characters were enchanted by magic. The celebration of imagination ultimately extends beyond the characters and the story to the audience itself—we're all collaborators in creating the theatrical magic.`,
      assessmentCriteria: [
        {
          id: 'crit1',
          text: 'Discussed the forest as a space where imagination transcends reason and enables transformation',
          points: 7,
        },
        {
          id: 'crit2',
          text: 'Analyzed how specific characters (Bottom, the lovers) are transformed through imagination or magical enchantment',
          points: 7,
        },
        {
          id: 'crit3',
          text: 'Explained how Puck\'s epilogue extends the theme of imagination to the audience and theater itself',
          points: 6,
        },
      ],
      explanation: 'This question explores the deepest level of the play\'s meaning: imagination as a transformative force that operates in multiple realms—within the story, within theater, and within the audience\'s participation. It invites you to recognize that dreams, magic, and theater are all forms of imagination that can reveal truths.',
      relatedLearningPoints: ['midsummer-lp-37-dream-metaphor', 'midsummer-lp-38-imagination-power', 'midsummer-lp-39-comedy-magic'],
    },
  ],
};

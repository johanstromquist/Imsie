import type { Quiz } from '../../../types';

/**
 * Chapter 4 Quiz: Exile and the Second Isolde
 *
 * Tests understanding of:
 * - The hermit's role and religious perspective
 * - The two Isoldes and their contrasts
 * - The unconsummated marriage and its significance
 * - The fool's disguise motif
 * - The poisoned wound as a parallel to Chapter 1
 * - Themes of duty vs. desire, impossible choices
 */

export const chapter4Quiz: Quiz = {
  id: 'quiz-chapter-4-tristan-isolde',
  title: 'Chapter 4 Quiz: Exile and the Second Isolde',
  description: "Test your understanding of Tristan's exile, the second Isolde, and the impossible choices faced by the lovers.",
  passingScore: 70,
  allowRetry: true,

  questions: [
    // Question 1: Hermit's counsel
    {
      id: 'q1-hermit-counsel',
      question: 'What does the hermit Ogrin tell Tristan and Isolde about the love potion?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'The potion will last forever and they cannot be held responsible for their actions',
        'The potion was a fake and their love was always their own choice',
        'The potion has faded after three years, so their continued love is now their own choice',
        'The potion can be reversed if they drink another special potion',
      ],
      correctAnswer: 'The potion has faded after three years, so their continued love is now their own choice',
      explanation: 'Ogrin reveals that the strongest potions lose their power after three years. This means the lovers must now take responsibility for their choices rather than blaming magic. This deepens the moral complexity of their situation.',
      relatedLearningPoints: ['lp-ch4-1-potion-fade', 'lp-ch4-1-choice'],
    },

    // Question 2: Hermit's role
    {
      id: 'q2-hermit-role',
      question: 'What does the hermit Ogrin represent in the medieval context of the story?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'The voice of secular law and political order',
        'A magical guide who helps the lovers escape their fate',
        'The voice of the Church, showing compassion but firmness about sin',
        'An enemy who wants to separate the lovers out of jealousy',
      ],
      correctAnswer: 'The voice of the Church, showing compassion but firmness about sin',
      explanation: 'Ogrin represents medieval religious perspective: compassionate toward human weakness but unwavering about the sinfulness of adultery. He shows that the Church viewed marriage as sacred and indissoluble, while also understanding human frailty.',
      relatedLearningPoints: ['lp-ch4-1-hermit-role'],
    },

    // Question 3: Isolde returns to Mark
    {
      id: 'q3-isolde-returns',
      question: 'How does King Mark respond when Isolde returns to him?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'He executes her for treason and adultery',
        'He refuses to take her back and exiles her permanently',
        'He takes her back only because the law forces him to',
        'He takes her back with dignity, showing both hurt and enduring love',
      ],
      correctAnswer: 'He takes her back with dignity, showing both hurt and enduring love',
      explanation: "Mark's response reveals his emotional complexity. Despite being betrayed, he still loves Isolde and chooses mercy over vengeance. This makes him a tragic figure himself--neither villain nor fool, but a man caught in impossible circumstances.",
      relatedLearningPoints: ['lp-ch4-3-mark-complexity'],
    },

    // Question 4: Tristan's exile behavior
    {
      id: 'q4-exile-behavior',
      question: 'How does Tristan behave during his exile as a mercenary knight?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'He fights cautiously, preserving his life for a possible reunion with Isolde',
        'He avoids combat entirely and becomes a monk',
        'He forgets about Isolde and enjoys his freedom',
        'He fights recklessly, like a man who wants to die but cannot manage it',
      ],
      correctAnswer: 'He fights recklessly, like a man who wants to die but cannot manage it',
      explanation: "Tristan's reckless combat behavior reveals his suicidal despair. Unable to live with Isolde or without her, he seeks oblivion through violence. This self-destructive pattern shows how thoroughly his exile has devastated him.",
      relatedLearningPoints: ['lp-ch4-4-exile-psychology'],
    },

    // Question 5: Two Isoldes - True/False
    {
      id: 'q5-two-isoldes',
      question: 'True or False: Isolde of the White Hands is described as being very similar to Isolde the Fair in appearance and personality.',
      type: 'true-false',
      points: 10,
      correctAnswer: 'False',
      explanation: 'False. The story deliberately contrasts the two Isoldes: Isolde of the White Hands is dark-haired where the Fair is golden, pale where the other is vibrant, gentle and innocent where the other is passionate. These contrasts emphasize that she is fundamentally different and can never truly replace Isolde the Fair.',
      relatedLearningPoints: ['lp-ch4-6-contrast'],
    },

    // Question 6: Name significance
    {
      id: 'q6-name-significance',
      question: 'What is the literary significance of both women sharing the name "Isolde"?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'It is just a coincidence with no particular meaning',
        'It shows that all women are interchangeable in medieval literature',
        'It represents fate or destiny--Tristan cannot escape even by fleeing to another country',
        'It makes the story easier to remember for medieval audiences',
      ],
      correctAnswer: 'It represents fate or destiny--Tristan cannot escape even by fleeing to another country',
      explanation: 'The shared name creates dramatic irony and emphasizes the role of fate. Tristan flees to Brittany to escape his love for Isolde, only to meet another woman with the same name. This suggests that destiny is inescapable--he is bound to his tragedy no matter where he goes.',
      relatedLearningPoints: ['lp-ch4-6-name-irony', 'lp-ch4-6-double-motif'],
    },

    // Question 7: Unconsummated marriage - True/False
    {
      id: 'q7-unconsummated',
      question: 'True or False: Tristan consummates his marriage to Isolde of the White Hands but still loves Isolde the Fair.',
      type: 'true-false',
      points: 10,
      correctAnswer: 'False',
      explanation: 'False. Tristan refuses to consummate the marriage, which is crucial to the story. He remains physically faithful to Isolde the Fair even while legally married to another woman. This makes his situation even more complex--he is trapped in a marriage without truly betraying his first love.',
      relatedLearningPoints: ['lp-ch4-9-unconsummated'],
    },

    // Question 8: Wedding night significance
    {
      id: 'q8-wedding-night',
      question: 'What is the significance of the unconsummated marriage in the medieval context?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'It has no particular significance--medieval people did not care about such things',
        'It automatically makes the marriage invalid with no further action needed',
        'It means the marriage could potentially be annulled, keeping it in a liminal legal state',
        'It is considered a greater sin than adultery in medieval theology',
      ],
      correctAnswer: 'It means the marriage could potentially be annulled, keeping it in a liminal legal state',
      explanation: "In medieval law and theology, a marriage not consummated was incomplete and could potentially be annulled. Tristan's refusal keeps the marriage in a strange liminal state--legally binding but spiritually incomplete. This adds another layer to his impossible situation.",
      relatedLearningPoints: ['lp-ch4-9-medieval-marriage'],
    },

    // Question 9: Fool's disguise
    {
      id: 'q9-fool-disguise',
      question: 'Why was the fool or madman disguise effective in medieval courts?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'Fools were invisible to everyone and could move freely unseen',
        'Fools had legal immunity from all crimes including treason',
        'Fools could speak truths others dared not say because no one took them seriously',
        'Fools were always welcomed and celebrated in every situation',
      ],
      correctAnswer: 'Fools could speak truths others dared not say because no one took them seriously',
      explanation: 'The fool figure in medieval literature could speak uncomfortable truths through the veil of humor and apparent madness. Since fools were not taken seriously, they had unusual freedom to say dangerous things. This made it a perfect disguise for Tristan to see Isolde again.',
      relatedLearningPoints: ['lp-ch4-12-fool-motif', 'lp-ch4-12-speaking-truth'],
    },

    // Question 10: Poisoned wound parallel
    {
      id: 'q10-poisoned-wound',
      question: "How does Tristan's poisoned wound at the end of Chapter 4 parallel an earlier event in the story?",
      type: 'multiple-choice',
      points: 10,
      options: [
        'It parallels the dragon slaying in Ireland',
        "It parallels King Mark's discovery of the lovers in the forest",
        "It parallels the Morholt's poisoned wound that first brought Tristan to Isolde",
        'It has no parallel--it is entirely new situation',
      ],
      correctAnswer: "It parallels the Morholt's poisoned wound that first brought Tristan to Isolde",
      explanation: "The poisoned wound creates a circular structure: the story began with the Morholt's poisoned sword sending Tristan to Ireland and Isolde's healing, and now another poisoned weapon brings him to his end. This circular pattern is a classic element of tragic structure.",
      relatedLearningPoints: ['lp-ch4-14-parallel', 'lp-ch4-14-only-isolde'],
    },

    // Self-assessment question
    {
      id: 'q11-self-assessment',
      question: "Reflect on Tristan's marriage to Isolde of the White Hands: Is he more deserving of sympathy or criticism for his actions? Explain your reasoning.",
      type: 'self-assessment',
      points: 10,
      modelAnswer:
        "Tristan's marriage to Isolde of the White Hands is one of the most morally complex moments in the story. I believe he deserves <strong>both sympathy and criticism</strong>—he is simultaneously victim and perpetrator.\n\n<strong>Arguments for sympathy:</strong> Tristan is trapped in an impossible situation. He is exiled from Cornwall and cannot be with Isolde the Fair. The love potion may have faded, but his feelings remain genuine and overwhelming. When he hears the name \"Isolde,\" it's as if fate itself is drawing him to this marriage. He is a broken man seeking any escape from his pain, and his desperation is understandable.\n\n<strong>Arguments for criticism:</strong> However, Tristan knowingly enters a marriage with a woman he does not love, using her as a substitute for someone else. Isolde of the White Hands is innocent and deserves a husband who truly loves her, not someone who will forever compare her to another woman. By marrying her without love—and then refusing to consummate the marriage—Tristan causes her deep humiliation and pain. He could have refused the marriage; instead, he trapped her in a loveless union.\n\n<strong>Conclusion:</strong> The tragedy is that Tristan is caught between circumstances beyond his control (exile, the original potion) and choices he actively makes (marrying without love). The most sophisticated view recognizes this duality: he suffers terribly, but his suffering does not excuse the harm he causes Isolde of the White Hands.",
      assessmentCriteria: [
        {
          id: 'clear-position',
          text: 'Took a clear position (sympathy, criticism, or both) on Tristan\'s actions',
          points: 2,
        },
        {
          id: 'sympathy-arguments',
          text: 'Provided <strong>arguments for sympathy</strong> (his impossible situation, exile, inability to control his feelings)',
          points: 3,
        },
        {
          id: 'criticism-arguments',
          text: 'Provided <strong>arguments for criticism</strong> (harm to Isolde of the White Hands, entering marriage without love)',
          points: 3,
        },
        {
          id: 'complexity',
          text: 'Recognized the <strong>moral complexity</strong> rather than giving a simplistic answer',
          points: 2,
        },
      ],
      explanation: 'This is a reflection question with no single correct answer. Consider these perspectives:\n\n' +
        'SYMPATHY: Tristan is trapped in an impossible situation. He has nowhere to go, no way to be with his true love, and accepts a marriage out of duty and desperation. His inability to forget Isolde the Fair is not something he can control.\n\n' +
        'CRITICISM: Tristan knows he does not love Isolde of the White Hands but marries her anyway, using her as a substitute and causing her deep humiliation and pain. He should have refused the marriage rather than trapping an innocent woman in a loveless union.\n\n' +
        'BOTH: Tristan is both victim and perpetrator. He suffers from circumstances beyond his control (the potion, exile) but also makes choices that harm others (marrying without love, returning to Cornwall). The best answers recognize this complexity.',
      relatedLearningPoints: ['lp-ch4-9-isolde-victim', 'lp-ch4-11-trapped'],
    },
  ],
};

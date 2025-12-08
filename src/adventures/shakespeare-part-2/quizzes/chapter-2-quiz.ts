import type { Quiz } from '../../../types';

export const chapter2Quiz: Quiz = {
  id: 'quiz-chapter-2-othello',
  title: 'Chapter 2: Othello Quiz',
  description: 'Test your understanding of Shakespeare\'s tragedy of jealousy and manipulation.',
  passingScore: 70,
  allowRetry: true,
  questions: [
    {
      id: 'q1',
      question: 'How does Othello\'s position as a Moor in Venice create psychological vulnerability?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'He is poor and powerless in Venetian society',
        'He is confident in war but insecure about understanding Venetian culture and relationships',
        'He secretly hates Venice and plans to betray it',
        'He is uneducated and cannot read',
      ],
      correctAnswer: 'He is confident in war but insecure about understanding Venetian culture and relationships',
      explanation: 'Othello is honored for his military prowess but feels like an outsider in Venetian society. Iago exploits this insecurity, suggesting Othello cannot understand Venetian women.',
      relatedLearningPoints: ['lp-othello-3-race', 'lp-othello-4-vulnerability'],
    },

    {
      id: 'q2',
      question: 'What is Iago\'s most effective manipulation technique?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'Making direct accusations that Othello can investigate',
        'Using vague insinuations that force Othello to convince himself',
        'Threatening Othello with physical violence',
        'Bribing Othello with money and power',
      ],
      correctAnswer: 'Using vague insinuations that force Othello to convince himself',
      explanation: 'Iago never directly accuses Desdemona. Instead, he plants seeds ("Ha! I like not that") and lets Othello\'s imagination do the work, making Othello feel like he\'s discovering truth.',
      relatedLearningPoints: ['lp-othello-7-insinuation', 'lp-othello-9-systematic'],
    },

    {
      id: 'q3',
      question: 'Why does Iago warn Othello against jealousy while actually creating it?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'He genuinely wants to protect Othello but accidentally makes it worse',
        'Warning against jealousy makes Othello hyper-aware of it while Iago seems protective',
        'He doesn\'t actually warn against jealousy',
        'It\'s a meaningless line with no psychological purpose',
      ],
      correctAnswer: 'Warning against jealousy makes Othello hyper-aware of it while Iago seems protective',
      explanation: '"O, beware, my lord, of jealousy"—by warning against it, Iago plants the idea while appearing to protect Othello. The warning itself creates the poison.',
      relatedLearningPoints: ['lp-othello-7-reverse', 'lp-othello-1-contrast-macbeth'],
    },

    {
      id: 'q4',
      question: 'What does the handkerchief symbolize in the play?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'Only a plot device with no deeper meaning',
        'Othello\'s love transformed into false "proof" of betrayal',
        'Desdemona\'s wealth and status',
        'Iago\'s military rank',
      ],
      correctAnswer: 'Othello\'s love transformed into false "proof" of betrayal',
      explanation: 'The handkerchief—Othello\'s first gift to Desdemona—symbolizes their love. Iago transforms this symbol into manufactured evidence of adultery, perverting love into hate.',
      relatedLearningPoints: ['lp-othello-8-symbol', 'lp-othello-8-evidence'],
    },

    {
      id: 'q5',
      question: 'What is "motiveless malignity" in reference to Iago?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'Iago has clear, proportionate reasons for his evil',
        'Iago provides multiple motives, but none adequately explain his excessive malice',
        'Iago is motivated purely by money',
        'Iago acts randomly without any plan',
      ],
      correctAnswer: 'Iago provides multiple motives, but none adequately explain his excessive malice',
      explanation: 'Iago mentions resentment, suspicion of adultery, and racial hatred, but critics call his evil "motiveless malignity" because no motive justifies his elaborate cruelty.',
      relatedLearningPoints: ['lp-othello-3-iago-motive', 'lp-othello-11-motiveless'],
    },

    {
      id: 'q6',
      question: 'How does dramatic irony function in Othello?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'The audience doesn\'t know more than the characters',
        'The audience knows Desdemona is innocent while Othello believes she\'s guilty',
        'All characters know the same information',
        'Only Iago is unaware of what\'s happening',
      ],
      correctAnswer: 'The audience knows Desdemona is innocent while Othello believes she\'s guilty',
      explanation: 'We see Desdemona\'s innocence and Iago\'s lies, but Othello does not—creating almost unbearable dramatic irony as we watch him destroy what he loves based on lies.',
      relatedLearningPoints: ['lp-othello-10-irony', 'lp-othello-1-domestic'],
    },

    {
      id: 'q7',
      question: 'What is significant about Othello\'s linguistic transformation during the play?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'His language becomes more eloquent as he grows jealous',
        'He maintains the same speaking style throughout',
        'He transforms from eloquent poetry to brutal, incoherent fragments',
        'He stops speaking entirely',
      ],
      correctAnswer: 'He transforms from eloquent poetry to brutal, incoherent fragments',
      explanation: 'Othello begins with beautiful poetry ("She loved me for the dangers I had passed") but jealousy degrades his language to brutal fragments ("Goats and monkeys!"), showing his psychological disintegration.',
      relatedLearningPoints: ['lp-othello-12-language', 'lp-othello-5-eloquence'],
    },

    {
      id: 'q8',
      question: 'Why is Othello called a "domestic tragedy"?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'It takes place entirely inside houses',
        'It focuses on marriage and personal relationships rather than kingdoms',
        'It features only servants and common people',
        'It has no political dimensions',
      ],
      correctAnswer: 'It focuses on marriage and personal relationships rather than kingdoms',
      explanation: 'Unlike tragedies about kingdoms (Macbeth, Lear), Othello focuses on intimate domestic relationships—a marriage destroyed. This makes it more personal and horrifying.',
      relatedLearningPoints: ['lp-othello-1-domestic', 'lp-othello-17-part2-progression'],
    },

    {
      id: 'q9',
      question: 'What does Othello believe when he kills Desdemona?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'That he is committing a crime of passion',
        'That he is executing righteous justice',
        'That he is obeying Iago\'s orders',
        'That she wants to die',
      ],
      correctAnswer: 'That he is executing righteous justice',
      explanation: '"It is the cause, it is the cause, my soul"—Othello believes he acts from justice, not jealousy. This makes the tragedy worse than if he knew he was wrong.',
      relatedLearningPoints: ['lp-othello-14-cause', 'lp-othello-12-contrast-macbeth'],
    },

    {
      id: 'q10',
      question: 'What is Desdemona\'s final act before dying?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'She curses Othello',
        'She calls for help to escape',
        'She lies to protect Othello, claiming she killed herself',
        'She reveals Iago\'s plot',
      ],
      correctAnswer: 'She lies to protect Othello, claiming she killed herself',
      explanation: '"Nobody. I myself"—Desdemona\'s final lie protects the man who murdered her. Her love endures even unto death, making the tragedy unbearable.',
      relatedLearningPoints: ['lp-othello-14-innocence', 'lp-othello-5-love-foundation'],
    },

    {
      id: 'q11',
      question: 'What is anagnorisis (recognition of truth) in Othello?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'Othello realizes the truth before killing Desdemona and stops',
        'Othello learns Desdemona was innocent only after he has killed her',
        'Othello never learns the truth',
        'Iago confesses everything to Othello before the murder',
      ],
      correctAnswer: 'Othello learns Desdemona was innocent only after he has killed her',
      explanation: 'Othello\'s tragic recognition comes too late—after Desdemona is dead, he learns from Emilia that she was always innocent and Iago deceived him. Understanding comes after irreversible action.',
      relatedLearningPoints: ['lp-othello-15-recognition', 'lp-othello-16-perception'],
    },

    {
      id: 'q12',
      question: 'How is Shakespeare\'s portrayal of Othello innovative for Renaissance drama?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'It makes a Moor the tragic hero rather than the villain',
        'It removes all references to race',
        'It portrays Othello as purely a victim with no flaws',
        'It was the first play set in Venice',
      ],
      correctAnswer: 'It makes a Moor the tragic hero rather than the villain',
      explanation: 'Previous Moorish characters in English drama were villains. Shakespeare reverses this: the Moor is noble and eloquent, while the white Venetian Iago is the true villain.',
      relatedLearningPoints: ['lp-othello-4-innovation', 'lp-othello-2-venice'],
    },

    {
      id: 'q13',
      question: 'How does Othello describe himself in his final speech?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'As a pure villain who deserves death',
        'As "one that loved not wisely but too well"',
        'As a victim of fate with no responsibility',
        'As a hero who saved Venice',
      ],
      correctAnswer: 'As "one that loved not wisely but too well"',
      explanation: 'Othello\'s self-description captures the tragedy: his love was real ("too well") but his judgment was fatally flawed ("not wisely"). Both victim and perpetrator.',
      relatedLearningPoints: ['lp-othello-17-loved-too-well', 'lp-othello-16-specific'],
    },
  ],
};

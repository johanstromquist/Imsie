import type { Quiz } from '../../../types';

export const chapter2Quiz: Quiz = {
  id: 'quiz-chapter-2-tristan-isolde',
  title: 'Chapter 2: The Fateful Potion - Quiz',
  description: 'Test your understanding of the dragon quest, the love potion, and the beginning of the forbidden love.',
  passingScore: 70,
  allowRetry: true,

  questions: [
    {
      id: 'q1',
      question: 'Why did Tristan return to Ireland to slay the dragon?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'To prove he was braver than the Morholt',
        'Because he wanted to marry Isolde himself',
        'To win Isolde as a bride for King Mark and create peace between the kingdoms',
        'To get revenge on Ireland for the tribute they demanded',
      ],
      correctAnswer: 'To win Isolde as a bride for King Mark and create peace between the kingdoms',
      explanation:
        "Tristan's mission was political: to win Princess Isolde for his uncle King Mark, creating a marriage alliance that would " +
        'permanently end hostilities between Cornwall and Ireland. His personal feelings for Isolde complicated this duty.',
      relatedLearningPoints: ['lp-ch2-1-dragon-symbolism', 'lp-ch2-1-secondary-quest'],
    },

    {
      id: 'q2',
      question: 'How did Isolde discover that "Tantris" was actually Tristan, the man who killed her uncle?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'Tristan confessed the truth to her',
        "A fragment from her uncle's skull matched a notch in Tristan's sword",
        'Brangien recognized him and told Isolde',
        "King Mark sent a message revealing Tristan's identity",
      ],
      correctAnswer: "A fragment from her uncle's skull matched a notch in Tristan's sword",
      explanation:
        "While cleaning Tristan's sword, Isolde noticed a notch. She retrieved the metal fragment that had been removed from the Morholt's skull " +
        "and found it fit perfectly--physical proof that \"Tantris\" was the Morholt's killer.",
      relatedLearningPoints: ['lp-ch2-3-identity-crisis'],
    },

    {
      id: 'q3',
      question: "What decision did Isolde make when she discovered Tristan's true identity?",
      type: 'multiple-choice',
      points: 10,
      options: [
        'She immediately had him executed',
        'She chose to spare him despite her duty to avenge her uncle',
        'She told her father who imprisoned Tristan',
        'She forced him to flee Ireland forever',
      ],
      correctAnswer: 'She chose to spare him despite her duty to avenge her uncle',
      explanation:
        'Isolde stood over Tristan with a sword, torn between family honor (vengeance) and personal feeling (mercy). She ultimately chose to spare him, ' +
        'though she said "things between us can never be as they were." This choice shows her complexity as a character.',
      relatedLearningPoints: ['lp-ch2-3-identity-crisis', 'lp-ch2-3-complexity'],
    },

    {
      id: 'q4',
      question: 'Who was the love potion originally intended for?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'Tristan and Isolde, to make them fall in love',
        'Any knight who slayed the dragon',
        'Isolde and King Mark, to be drunk on their wedding night',
        'The Queen and King of Ireland',
      ],
      correctAnswer: 'Isolde and King Mark, to be drunk on their wedding night',
      explanation:
        'The Irish Queen prepared the potion specifically for Isolde and King Mark to share on their wedding night, ensuring their politically arranged ' +
        'marriage would be happy. Brangien was supposed to guard it carefully until then.',
      relatedLearningPoints: ['lp-ch2-5-potion-foreshadow'],
    },

    {
      id: 'q5',
      question: 'How did Tristan and Isolde end up drinking the love potion?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'They knowingly drank it to escape their obligations',
        'King Mark tricked them into drinking it',
        'Brangien mistakenly gave them the potion instead of regular wine',
        'The Queen of Ireland forced them to drink it',
      ],
      correctAnswer: 'Brangien mistakenly gave them the potion instead of regular wine',
      explanation:
        'On a hot day during the voyage, Isolde asked for wine. Brangien, exhausted and distracted, accidentally grabbed the love potion instead of ' +
        'regular wine and gave it to them. It was a tragic mistake with permanent consequences.',
      relatedLearningPoints: ['lp-ch2-7-setup'],
    },

    {
      id: 'q6',
      question: 'According to the medieval text on love potions, what did poets believe about people who drank them?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'They should be punished for their sin',
        'They could not be blamed because it was fate, not choice',
        'They were blessed by God',
        "They were under the devil's control",
      ],
      correctAnswer: 'They could not be blamed because it was fate, not choice',
      explanation:
        'The medieval text explained that poets believed love compelled by magic was "fate, not choice"--making the lovers not responsible for their passion. ' +
        'This created an ongoing debate: were Tristan and Isolde victims of destiny or guilty of sin?',
      relatedLearningPoints: ['lp-ch2-12-medieval-debate', 'lp-ch2-12-fate-choice'],
    },

    {
      id: 'q7',
      question: 'What role did Brangien play after the potion was mistakenly consumed?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'She told King Mark immediately',
        'She fled the ship in shame',
        'She swore to keep their secret and helped protect them',
        'She tried to find a cure for the potion',
      ],
      correctAnswer: 'She swore to keep their secret and helped protect them',
      explanation:
        "After confessing her terrible mistake, Brangien swore an oath of silence and became the lovers' protector. She would continue to help hide " +
        "their secret, including taking Isolde's place on the wedding night.",
      relatedLearningPoints: ['lp-ch2-10-brangien-role', 'lp-ch2-10-secrecy'],
    },

    // True/False Questions
    {
      id: 'q8',
      question: "The love potion's effect was permanent and could not be undone.",
      type: 'true-false',
      points: 10,
      options: ['True', 'False'],
      correctAnswer: 'True',
      explanation:
        'True. The story makes clear that there is "no cure for a love potion. None at all." This permanent binding is what makes the tragedy inevitable--' +
        'Tristan and Isolde cannot escape their love even when they desperately want to do the right thing.',
      relatedLearningPoints: ['lp-ch2-9-impossible-love'],
    },

    {
      id: 'q9',
      question: 'Tristan slayed the dragon easily without any danger to himself.',
      type: 'true-false',
      points: 10,
      options: ['True', 'False'],
      correctAnswer: 'False',
      explanation:
        "False. The dragon battle was fierce and terrifying. Tristan was wounded by dragon poison and collapsed after cutting out the dragon's tongue " +
        'as proof. He needed healing once again, continuing the pattern from the Morholt battle.',
      relatedLearningPoints: ['lp-ch2-2-heroic-deed', 'lp-ch2-2-parallel'],
    },

    // Self-Assessment Question
    {
      id: 'q10',
      question:
        'Analyze the function of the love potion in the story. Does it absolve Tristan and Isolde of responsibility for their love, or does it make ' +
        'their situation more tragic? Consider the difference between creating love versus amplifying existing feelings. What do you think the potion ' +
        'symbolizes in terms of fate versus free will?',
      type: 'self-assessment',
      points: 20,
      modelAnswer: `The love potion serves multiple literary and thematic functions:

<strong>As a Plot Device:</strong> The potion creates the central conflict--Tristan and Isolde bound by irresistible love while Isolde is married to Tristan's uncle. Without the potion, they might have resisted their attraction.

<strong>On Responsibility:</strong> The potion creates ambiguity. Medieval audiences debated whether it excused the lovers (they couldn't help it) or condemned them (they should have resisted). This ambiguity is intentional--the story doesn't provide easy moral answers.

<strong>Creating vs. Amplifying:</strong> Some versions suggest the potion amplified feelings already present, making the love feel more "real" even while supernatural. This makes it both more believable and more tragic--they might have loved anyway, but the potion made it impossible to control.

<strong>Symbolism:</strong> The potion represents fate/destiny overwhelming human choice. It asks: if our deepest feelings are beyond our control, how much free will do we really have? Are we responsible for passions we cannot resist?

<strong>Tragedy Enhancement:</strong> The potion actually makes the situation MORE tragic, not less. If Tristan and Isolde had simply fallen in love naturally, they could be blamed as adulterers. But the potion means they're trapped in a love they didn't choose, forced to betray people they care about, unable to escape. Their suffering is therefore undeserved, which is the essence of tragedy.`,
      assessmentCriteria: [
        {
          id: 'crit1',
          text: 'Discussed how the potion functions as a plot device creating the central conflict',
          points: 5,
        },
        {
          id: 'crit2',
          text: 'Analyzed the question of responsibility--does the potion excuse or condemn the lovers?',
          points: 5,
        },
        {
          id: 'crit3',
          text: 'Explored whether the potion creates love or amplifies existing feelings',
          points: 5,
        },
        {
          id: 'crit4',
          text: 'Connected the potion to themes of fate versus free will and discussed its symbolic meaning',
          points: 5,
        },
      ],
      explanation:
        "The love potion is central to Tristan and Isolde's story, raising profound questions about love, responsibility, and fate. Medieval audiences " +
        'found these questions fascinating, and they remain relevant today.',
      relatedLearningPoints: ['lp-ch2-9-impossible-love', 'lp-ch2-12-fate-choice', 'lp-ch2-12-medieval-debate'],
    },
  ],
};

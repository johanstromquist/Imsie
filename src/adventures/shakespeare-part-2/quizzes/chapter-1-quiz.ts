import type { Quiz } from '../../../types';

export const chapter1Quiz: Quiz = {
  id: 'quiz-chapter-1-macbeth',
  title: 'Chapter 1: Macbeth Quiz',
  description: 'Test your understanding of Shakespeare\'s tragedy of ambition and guilt.',
  passingScore: 70,
  allowRetry: true,
  questions: [
    {
      id: 'q1',
      question: 'What is Macbeth\'s tragic flaw (hamartia) that leads to his downfall?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'His complete trust in supernatural prophecies',
        'His unchecked ambition and moral weakness',
        'His military incompetence and cowardice',
        'His unconditional loyalty to King Duncan',
      ],
      correctAnswer: 'His unchecked ambition and moral weakness',
      explanation: 'Macbeth\'s hamartia is his "vaulting ambition"—he has the desire for power but lacks the moral strength to resist acting on that desire, even though he knows it\'s evil.',
      relatedLearningPoints: ['lp-macbeth-3-hamartia', 'lp-macbeth-4-pursuit'],
    },

    {
      id: 'q2',
      question: 'How do the Weird Sisters\' prophecies function in the play?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'They force Macbeth to commit murder',
        'They provide accurate predictions of destiny',
        'They tempt by externalizing Macbeth\'s hidden desires',
        'They serve purely as comic relief',
      ],
      correctAnswer: 'They tempt by externalizing Macbeth\'s hidden desires',
      explanation: 'The prophecies don\'t force Macbeth to act—they tempt him by externalizing desires already within him. This creates the central question: Is Macbeth fated or does he choose his damnation?',
      relatedLearningPoints: ['lp-macbeth-3-prophecy', 'lp-macbeth-3-supernatural'],
    },

    {
      id: 'q3',
      question: 'What does the recurring image of blood symbolize throughout Macbeth?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'Military victories and warrior honor',
        'The natural cycle of life and death',
        'Inescapable guilt and endless violence',
        'Scotland\'s fight for political independence',
      ],
      correctAnswer: 'Inescapable guilt and endless violence',
      explanation: 'Blood represents inescapable guilt ("will all great Neptune\'s ocean wash this blood clean?") and the cycle where violence demands more violence ("blood will have blood").',
      relatedLearningPoints: ['lp-macbeth-6-blood', 'lp-macbeth-1-part2-intro'],
    },

    {
      id: 'q4',
      question: 'Why does Macbeth say "Macbeth does murder sleep"?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'He literally prevented Duncan from sleeping',
        'He plans to murder more people in their sleep',
        'Guilt has destroyed his capacity for peaceful rest',
        'He suffers from unrelated chronic insomnia',
      ],
      correctAnswer: 'Guilt has destroyed his capacity for peaceful rest',
      explanation: 'Sleep symbolizes innocent peace. By murdering Duncan in his sleep, Macbeth has destroyed his own ability to rest peacefully—guilt makes sleep impossible.',
      relatedLearningPoints: ['lp-macbeth-6-sleep', 'lp-macbeth-6-guilt'],
    },

    {
      id: 'q5',
      question: 'How does Lady Macbeth initially manipulate Macbeth into murdering Duncan?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'She threatens to leave him if he refuses',
        'She attacks his masculinity and courage',
        'She promises him wealth and power',
        'She claims the witches commanded it',
      ],
      correctAnswer: 'She attacks his masculinity and courage',
      explanation: 'Lady Macbeth questions Macbeth\'s manhood: "When you durst do it, then you were a man!" She weaponizes gender expectations to overcome his moral hesitation.',
      relatedLearningPoints: ['lp-macbeth-5-manipulation', 'lp-macbeth-5-partnership'],
    },

    {
      id: 'q6',
      question: 'What happens to Lady Macbeth after the murders?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'She helps Macbeth rule Scotland effectively',
        'She confesses everything and is executed',
        'She descends into madness and dies',
        'She escapes Scotland to avoid capture',
      ],
      correctAnswer: 'She descends into madness and dies',
      explanation: 'Lady Macbeth, who once claimed "a little water clears us of this deed," cannot wash away the psychological stain of guilt. She goes mad, sleepwalking and trying to clean imaginary blood.',
      relatedLearningPoints: ['lp-macbeth-12-madness', 'lp-macbeth-12-gender'],
    },

    {
      id: 'q7',
      question: 'What is significant about Macbeth\'s reaction to Lady Macbeth\'s death?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'He is devastated and considers suicide',
        'He blames her for corrupting him',
        'He barely reacts, showing moral numbness',
        'He uses her death to rally soldiers',
      ],
      correctAnswer: 'He barely reacts, showing moral numbness',
      explanation: '"She should have died hereafter"—Macbeth\'s muted response shows his complete moral numbness. He has killed so much, felt so much death, that even his wife\'s passing means nothing.',
      relatedLearningPoints: ['lp-macbeth-12-numbness', 'lp-macbeth-8-numbness'],
    },

    {
      id: 'q8',
      question: 'How do the second prophecies ("none of woman born," "Birnam Wood") give Macbeth false security?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'They are completely false predictions',
        'They promise him eternal immortality',
        'They use equivocation—technically true but misleading',
        'They guarantee complete victory in battle',
      ],
      correctAnswer: 'They use equivocation—technically true but misleading',
      explanation: 'The prophecies use equivocation—Macduff was "untimely ripped" from his mother (caesarean), and Birnam Wood "moves" when soldiers carry branches. Technically true, practically deceptive.',
      relatedLearningPoints: ['lp-macbeth-10-prophecy', 'lp-macbeth-13-equivocation'],
    },

    {
      id: 'q9',
      question: 'According to the play, why was Macbeth historically relevant to King James I?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'James I was a direct descendant of Macbeth',
        'James I conquered Scotland like Macbeth did',
        'The play explores witchcraft and regicide after the Gunpowder Plot',
        'James I banned the play for being controversial',
      ],
      correctAnswer: 'The play explores witchcraft and regicide after the Gunpowder Plot',
      explanation: 'James I wrote about witchcraft and had just survived an assassination attempt (Gunpowder Plot 1605). Macbeth\'s themes of witches, regicide, and divine retribution resonated with his fears.',
      relatedLearningPoints: ['lp-macbeth-2-patronage', 'lp-macbeth-2-history'],
    },

    {
      id: 'q10',
      question: 'What makes Macbeth\'s moral descent particularly tragic?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'He never understands what he\'s doing is wrong',
        'He is forced to commit evil against his will',
        'He knows his actions are evil but proceeds anyway',
        'He believes he\'s acting righteously throughout',
      ],
      correctAnswer: 'He knows his actions are evil but proceeds anyway',
      explanation: 'Macbeth\'s tragedy is intensified by his moral awareness. He agonizes over Duncan\'s murder before committing it: "I know / That which I do; but I do not know / Why I should do it." He chooses evil while fully understanding it\'s evil.',
      relatedLearningPoints: ['lp-macbeth-3-hamartia', 'lp-macbeth-4-pursuit'],
    },

    {
      id: 'q11',
      question: 'What does Macbeth\'s "Life\'s but a walking shadow" speech reveal about his final state of mind?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'He has found peace and acceptance',
        'He is hopeful about eternal life',
        'He sees existence as meaningless theater',
        'He plans to escape and start fresh',
      ],
      correctAnswer: 'He sees existence as meaningless theater',
      explanation: 'Macbeth\'s final nihilistic vision sees life as empty theater—"a poor player that struts and frets his hour upon the stage and then is heard no more... signifying nothing."',
      relatedLearningPoints: ['lp-macbeth-14-defiance', 'lp-macbeth-16-synthesis'],
    },

    {
      id: 'q12',
      question: 'In the five-act structure of Shakespearean tragedy, what does Macbeth exemplify?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'A loose narrative without clear structure',
        'A comedy gradually transforming into tragedy',
        'The clearest model of five-act tragic structure',
        'An experimental rejection of traditional forms',
      ],
      correctAnswer: 'The clearest model of five-act tragic structure',
      explanation: 'Macbeth is the clearest, most relentless example of tragic structure: prophecy → murder → guilt → paranoia → second prophecies → inevitable destruction.',
      relatedLearningPoints: ['lp-macbeth-1-tragedy-structure', 'lp-macbeth-14-structure'],
    },
  ],
};

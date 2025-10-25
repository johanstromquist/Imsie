import type { Chapter } from '../../../types';
import { chapter3Quiz } from '../quizzes/chapter-3-quiz';

export const chapter3: Chapter = {
  id: 'chapter-3-socrates',
  title: 'Chapter 3: Socrates',
  description: 'Meet the gadfly of Athens who pioneered philosophical questioning and chose death over compromise of his principles.',

  learningObjectives: [
    'Understand the Socratic method (elenchus) and its role in exposing ignorance',
    'Analyze Socrates\'s key philosophical claims: "Know thyself," "Virtue is knowledge," and "The unexamined life is not worth living"',
    'Recognize the ethical focus of Socratic philosophy and its emphasis on the question "How should one live?"',
    'Examine the conflict between Socrates and Athenian democracy that led to his trial and execution',
    'Explore Socrates\'s choice to accept death rather than abandon his principles',
  ],

  scenes: [
    // Scene 1: Introduction to Socrates
    {
      id: 'chapter-3-scene-1-agora-encounter',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/484d4c5b-38ec-44ea-8e8b-a07b5274faec/0_0.png',

      content: `You step into the bustling agora of Athens, the heart of democratic life in the 5th century BCE. Merchants hawk their wares, politicians debate policy, and philosophers gather students under the shaded colonnades.

Among the crowd, you notice an unusual figure: a stout, barefoot man with a snub nose and penetrating eyes. Unlike the well-dressed Sophists who charge fees for their wisdom, he wears a simple cloak and engages anyone willing to talk—young and old, rich and poor, citizen and foreigner.

This is Socrates, perhaps the most influential philosopher in Western history. Yet he wrote nothing himself and claimed to know nothing. His power lay not in answers, but in questions—relentless, probing questions that forced people to examine their most fundamental assumptions.

As you watch, he approaches a confident young politician who has just finished a rousing speech about justice.`,

      learningPoints: [
        {
          id: 'lp-3-1-socrates-appearance',
          content: 'Socrates deliberately rejected the appearance and methods of the Sophists, refusing payment and adopting the lifestyle of a common Athenian to focus purely on philosophical inquiry.',
          category: 'historical-context',
        },
        {
          id: 'lp-3-1-question-method',
          content: 'Unlike the Sophists who lectured for fees, Socrates used dialogue and questioning to help others discover truth for themselves.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 2: Experiencing the Socratic Method
    {
      id: 'chapter-3-scene-2-elenchus',
      type: 'dialogue',
      backgroundImage: 'https://cdn.midjourney.com/da2ce82d-b102-4ed1-ba7c-d26703a3a12e/0_0.png',

      character: {
        id: 'socrates',
        name: 'Socrates',
        portrait: 'https://cdn.midjourney.com/284688f0-8192-42b4-a83d-8ee658d16586/0_0.png',
        description: 'The gadfly of Athens',
      },

      inlineAnnotations: [
        {
          id: 'aporia-annotation',
          text: 'aporia',
          tooltip: {
            title: 'Aporia',
            content: 'From Greek "without passage"—a state of philosophical puzzlement or impasse where you realize you don\'t know something you thought you knew. Socrates saw reaching aporia as progress, not failure.',
            category: 'vocabulary',
          },
        },
      ],

      dialogueTree: {
        id: 'node-1',
        speaker: 'socrates',
        text: 'Ah, friend! I overheard you speaking about justice with great confidence. I find myself quite perplexed about this matter. Would you be so kind as to help an ignorant old man understand—what is justice?',

        responses: [
          {
            id: 'response-1',
            text: 'Justice is giving to each what is owed to them',
            nextNodeId: 'node-2',
          },
          {
            id: 'response-2',
            text: 'Justice is helping friends and harming enemies',
            nextNodeId: 'node-alt-2',
          },
        ],

        allNodes: [
          {
            id: 'node-2',
            speaker: 'socrates',
            text: 'Excellent! A clear definition. Now let me make sure I understand you correctly. You say justice is giving to each what is owed to them. Would you agree that what is owed to people is what is appropriate for them?',
            responses: [
              {
                id: 'response-2-1',
                text: 'Yes, that seems right',
                nextNodeId: 'node-3',
              },
            ],
          },
          {
            id: 'node-3',
            speaker: 'socrates',
            text: 'Good! So justice gives to each what is appropriate. Now, tell me—when you are ill, to whom do you go to receive what is owed to you for your health?',
            responses: [
              {
                id: 'response-3-1',
                text: 'To a doctor',
                nextNodeId: 'node-4',
              },
            ],
          },
          {
            id: 'node-4',
            speaker: 'socrates',
            text: 'Precisely! And the doctor gives you what is owed—medicine, treatment, care. This is the art of medicine. Now then, in matters of justice, what is owed, and to whom do we give it?',
            responses: [
              {
                id: 'response-4-1',
                text: 'Help to friends, harm to enemies',
                nextNodeId: 'node-5',
              },
              {
                id: 'response-4-2',
                text: 'Everyone gets their due',
                nextNodeId: 'node-5',
              },
            ],
          },
          {
            id: 'node-5',
            speaker: 'socrates',
            text: 'Interesting! Let us examine this carefully. Suppose a friend has lent you a sword, and now he has gone mad with grief. He demands his sword back. By your definition, we owe him what is his. Should we return it?',
            responses: [
              {
                id: 'response-5-1',
                text: 'No, that would be harmful',
                nextNodeId: 'node-6',
              },
              {
                id: 'response-5-2',
                text: 'Yes, we owe him his property',
                nextNodeId: 'node-6-alt',
              },
            ],
          },
          {
            id: 'node-6',
            speaker: 'socrates',
            text: 'Ah! So it would not be just to return it, even though it is owed? You see the difficulty? It seems we must sometimes withhold what is owed. Let me try another example. Suppose you have an enemy who is actually a good person, but you mistakenly believe him evil. Is it just to harm him?',
            responses: [
              {
                id: 'response-6-1',
                text: 'No, he does not deserve harm',
                nextNodeId: 'node-7',
              },
              {
                id: 'response-6-2',
                text: 'If I believe he is my enemy, then yes',
                nextNodeId: 'node-7-alt',
              },
            ],
          },
          {
            id: 'node-6-alt',
            speaker: 'socrates',
            text: 'But surely you would not arm a madman! That would be helping him to harm himself and others. So then, justice cannot simply be giving back what is owed. We must be more careful. Let me try another example. Suppose you believe someone is your enemy, but they are actually a good person. Is it just to harm them?',
            responses: [
              {
                id: 'response-6-alt-1',
                text: 'No, that would not be just',
                nextNodeId: 'node-7',
              },
            ],
          },
          {
            id: 'node-7',
            speaker: 'socrates',
            text: 'Good! So justice depends not merely on what we think, but on the truth of the matter. Now, consider this carefully: when we harm someone—even an enemy—do we make them better or worse?',
            responses: [
              {
                id: 'response-7-1',
                text: 'We make them worse',
                nextNodeId: 'node-8',
              },
            ],
          },
          {
            id: 'node-7-alt',
            speaker: 'socrates',
            text: 'Ah, but what if your belief is mistaken? What if this "enemy" is actually a good person? Then harming them would be unjust. So justice cannot depend merely on our beliefs, but on the truth. Now, tell me—when we harm someone, do we make them better or worse?',
            responses: [
              {
                id: 'response-7-alt-1',
                text: 'We make them worse',
                nextNodeId: 'node-8',
              },
            ],
          },
          {
            id: 'node-8',
            speaker: 'socrates',
            text: 'Precisely! And when we make a person worse, do we make them more unjust or more just?',
            responses: [
              {
                id: 'response-8-1',
                text: 'More unjust',
                nextNodeId: 'node-9',
              },
            ],
          },
          {
            id: 'node-9',
            speaker: 'socrates',
            text: 'Excellent reasoning! So when we harm someone, we make them more unjust. But can it be the function of justice to make people unjust? Can the just person use justice to make others unjust—any more than the musician can use music to make others unmusical?',
            responses: [
              {
                id: 'response-9-1',
                text: 'No, that seems contradictory',
                nextNodeId: 'node-10',
              },
            ],
          },
          {
            id: 'node-10',
            speaker: 'socrates',
            text: 'So then, we agree that harming makes people more unjust. And we agree that it is not the function of justice to make people unjust. Therefore... what do you conclude about your definition that justice involves harming enemies?',
            responses: [
              {
                id: 'response-10-1',
                text: 'It seems my definition leads to a contradiction',
                nextNodeId: 'node-11',
              },
              {
                id: 'response-10-2',
                text: 'I\'m not sure what to think anymore',
                nextNodeId: 'node-11',
              },
            ],
          },
          {
            id: 'node-11',
            speaker: 'socrates',
            text: 'And how do you feel now about your understanding of justice—do you still feel as confident as when we began our conversation?',
            responses: [
              {
                id: 'response-11-1',
                text: 'No, I realize I don\'t truly understand it',
                nextNodeId: 'node-12',
              },
              {
                id: 'response-11-2',
                text: 'I\'m confused and uncertain now',
                nextNodeId: 'node-12',
              },
            ],
          },
          {
            id: 'node-12',
            speaker: 'socrates',
            text: 'This state of puzzlement—this aporia—is this better or worse than confidently believing something false?',
            responses: [
              {
                id: 'response-12-1',
                text: 'Better to know I don\'t know than to believe a falsehood',
                nextNodeId: 'node-13',
              },
              {
                id: 'response-12-2',
                text: 'I suppose it\'s better, though uncomfortable',
                nextNodeId: 'node-13',
              },
            ],
          },
          {
            id: 'node-13',
            speaker: 'socrates',
            text: 'Then perhaps we have made progress, even if we have not yet discovered what justice is! Shall we continue searching together?',
            isEnd: true,
          },
          {
            id: 'node-alt-2',
            speaker: 'socrates',
            text: 'Ah, an interesting definition! Many people say this. Justice is helping friends and harming enemies. Let us examine this carefully. First, when you help a friend, do you always know for certain that they are truly good?',
            responses: [
              {
                id: 'response-alt-2-1',
                text: 'No, I might be mistaken about their character',
                nextNodeId: 'node-alt-3',
              },
              {
                id: 'response-alt-2-2',
                text: 'Yes, I know my friends well',
                nextNodeId: 'node-alt-3',
              },
            ],
          },
          {
            id: 'node-alt-3',
            speaker: 'socrates',
            text: 'Indeed! Sometimes those we think are friends turn out to be harmful, and those we think are enemies turn out to be beneficial. But let us go further. When we harm someone—even a true enemy—what happens to them? Do we make them better or worse?',
            responses: [
              {
                id: 'response-alt-3-1',
                text: 'We make them worse',
                nextNodeId: 'node-8',
              },
            ],
          },
        ],
      },

      learningPoints: [
        {
          id: 'lp-3-2-elenchus',
          content: 'The Socratic method (elenchus) uses systematic questioning to expose contradictions in a person\'s beliefs, revealing that what seemed like knowledge was actually opinion.',
          category: 'literary-context',
        },
        {
          id: 'lp-3-2-aporia',
          content: 'Socratic questioning often leads to aporia (puzzlement or impasse), demonstrating that we do not truly understand concepts we thought we knew.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 3: Decision on Virtue
    {
      id: 'chapter-3-scene-3-virtue-definition',
      type: 'decision',
      backgroundImage: 'https://cdn.midjourney.com/20c3bc6b-877c-4c59-92e1-b2253666e590/0_0.png',

      prompt: 'How would you define virtue (excellence of character)?',
      context: `Socrates turns to you. "I have questioned many who claim to know what virtue is—the generals claim it is courage, the priests claim it is piety, the politicians claim it is serving the state. But when I question them closely, their definitions fall apart."

"Perhaps you, who have listened carefully, can help me understand: What is virtue?"`,

      choices: [
        {
          id: 'choice-conventional',
          text: 'Virtue is following the customs and traditions of your society',
          consequence: 'Socrates shakes his head gently. "But friend, different societies have different customs. The Spartans value military discipline above all, the Athenians value democratic participation, the Persians value obedience to authority. Are they all virtuous? Or must virtue be something more universal than mere convention?"',
          learningPoints: [
            {
              id: 'lp-3-3-convention',
              content: 'Socrates rejected the Sophistic view that virtue is merely conventional, arguing instead that there must be objective moral truth.',
              category: 'literary-context',
            },
          ],
        },
        {
          id: 'choice-knowledge',
          text: 'Virtue is knowledge—knowing what is truly good',
          consequence: 'Socrates\'s eyes light up. "Excellent! You have grasped something essential. I believe virtue is indeed knowledge. Those who truly know what is good will do it—for no one does wrong willingly. We harm ourselves only through ignorance. This is why philosophy, the pursuit of wisdom, is the most important activity!"',
          learningPoints: [
            {
              id: 'lp-3-3-virtue-knowledge',
              content: 'Socrates\'s radical claim "virtue is knowledge" suggests that ethical failures stem from ignorance rather than weakness of will.',
              category: 'literary-context',
            },
          ],
        },
        {
          id: 'choice-self-interest',
          text: 'Virtue is pursuing your own advantage and happiness',
          consequence: 'Socrates considers this carefully. "There is truth here—but what is true advantage? Is it wealth, power, pleasure? I believe our true advantage lies in the excellence of our soul. Better to suffer injustice than to commit it, for committing injustice harms our own soul more than any external suffering could."',
          learningPoints: [
            {
              id: 'lp-3-3-soul-care',
              content: 'Socrates prioritized the care of the soul over external goods, arguing that moral corruption harms us more than any physical suffering.',
              category: 'literary-context',
            },
          ],
        },
      ],

      learningPoints: [],
    },

    // Scene 4: Socratic Paradoxes
    {
      id: 'chapter-3-scene-4-paradoxes',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/d0f9197c-58d3-4274-8017-cbb7aab96e24/0_0.png',

      content: `As Socrates continues his examination, he articulates several claims that seem paradoxical—even absurd—to his listeners:

"I know that I know nothing." How can someone claim to know their own ignorance? Yet Socrates insists this is the beginning of wisdom. The oracle at Delphi declared him the wisest man in Athens precisely because he alone recognized the limits of his knowledge.

"Virtue is knowledge, and no one does wrong willingly." Can this be true? Don't people often know what is right yet choose to do wrong? Socrates denies it—he argues that anyone who truly understood what was good would choose it, just as anyone who truly understood a path led to a cliff would not walk off it.

"The unexamined life is not worth living." A bold claim! Socrates believes that merely going through the motions of life without questioning our assumptions and examining our values is worse than death itself.

These paradoxes would become central to his legacy—and to his trial.`,

      learningPoints: [
        {
          id: 'lp-3-4-know-nothing',
          content: 'Socratic ignorance is not false modesty but genuine recognition that human wisdom is worth little compared to true knowledge—yet this recognition is itself a form of wisdom.',
          category: 'literary-context',
        },
        {
          id: 'lp-3-4-examined-life',
          content: 'The claim that "the unexamined life is not worth living" places philosophy at the center of human flourishing—mere survival is not enough.',
          category: 'literary-context',
        },
        {
          id: 'lp-3-4-no-one-willing',
          content: 'The paradox "no one does wrong willingly" suggests that all wrongdoing stems from ignorance of the good, making education and self-knowledge crucial to ethics.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 5: Quote Attribution - Now includes distractors from earlier chapters!
    {
      id: 'chapter-3-scene-5-quotes',
      type: 'quote-attribution',
      backgroundImage: 'https://cdn.midjourney.com/1d1cbda9-145a-4e29-8379-74f68cd3d8db/0_0.png',

      prompt: 'Who said each of these quotes? Be careful—some are from philosophers you learned about in earlier chapters!',

      quotes: [
        {
          id: 'quote-1',
          text: 'Know thyself',
          speaker: 'Socrates',
          context: 'Inscribed at the Temple of Apollo at Delphi, adopted by Socrates as central to his philosophy.',
          explanation: 'Self-knowledge was the foundation of Socratic philosophy—before examining the world, we must examine ourselves and recognize our ignorance.',
        },
        {
          id: 'quote-2',
          text: 'You cannot step in the same river twice',
          speaker: 'Heraclitus',
          context: 'Heraclitus\'s famous metaphor for his doctrine of flux and constant change.',
          explanation: 'This captures Heraclitus\'s view that reality is fundamentally characterized by constant change—both you and the river are different at each moment.',
        },
        {
          id: 'quote-3',
          text: 'The unexamined life is not worth living',
          speaker: 'Socrates',
          context: 'Spoken at his trial when defending his practice of questioning everyone.',
          explanation: 'Socrates believed that merely living without reflecting on how one should live reduces human existence to mere animal survival.',
        },
        {
          id: 'quote-4',
          text: 'Man is the measure of all things',
          speaker: 'Protagoras',
          context: 'Protagoras\'s relativist claim that truth depends on individual human judgment.',
          explanation: 'This Sophistic saying argues that there is no objective truth—what seems true to each person is true for them. This directly opposes Socrates\'s search for universal definitions.',
        },
        {
          id: 'quote-5',
          text: 'I know that I know nothing',
          speaker: 'Socrates',
          context: 'His response to the Oracle of Delphi declaring him the wisest man in Athens.',
          explanation: 'Socrates interpreted the oracle\'s pronouncement to mean he was wisest because he alone recognized the limits of human knowledge.',
        },
        {
          id: 'quote-6',
          text: 'Nothing exists; and even if it did, it could not be known',
          speaker: 'Gorgias',
          context: 'Gorgias\'s extreme skepticism demonstrated in his philosophical treatise "On Non-Being."',
          explanation: 'Gorgias pushed skepticism to its logical extreme, arguing that even if reality exists, it cannot be known or communicated. This differs from Socratic ignorance, which still seeks truth.',
        },
        {
          id: 'quote-7',
          text: 'Virtue is knowledge',
          speaker: 'Socrates',
          context: 'His core ethical teaching that knowledge of the good leads necessarily to virtuous action.',
          explanation: 'This intellectualist ethics implies that moral education is the path to virtue—we do wrong only through ignorance.',
        },
        {
          id: 'quote-8',
          text: 'Better to suffer injustice than to commit it',
          speaker: 'Socrates',
          context: 'His response to those who argued for acting unjustly when it benefits you.',
          explanation: 'Socrates prioritized the soul\'s health over external goods—committing injustice corrupts the soul while suffering it does not.',
        },
      ],

      learningPoints: [
        {
          id: 'lp-3-5-maxims',
          content: 'Comparing Socratic maxims with those of Pre-Socratics and Sophists reveals how Socrates synthesized earlier thought while moving philosophy in a new direction—from cosmology and rhetoric toward ethics and self-knowledge.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 6: Primary Source - Plato's Apology
    {
      id: 'chapter-3-scene-6-apology',
      type: 'primary-source',
      backgroundImage: 'https://cdn.midjourney.com/236d3729-8c8d-4578-acd2-b85ce68e2fad/0_0.png',

      prompt: 'Analyze this excerpt from Plato\'s Apology, Socrates\'s defense at his trial',

      source: {
        title: 'From Plato\'s Apology',
        author: 'Plato',
        date: 'c. 399 BCE',
        type: 'text',
        content: `"Someone will say: Yes, Socrates, but cannot you hold your tongue, and then you may go into a foreign city, and no one will interfere with you? Now I have great difficulty in making you understand my answer to this. For if I tell you that to do as you say would be a disobedience to the god, and therefore that I cannot hold my tongue, you will not believe that I am serious; and if I say again that daily to discourse about virtue, and of those other things about which you hear me examining myself and others, is the greatest good of man, and that the unexamined life is not worth living, you are still less likely to believe me. Yet I say what is true, although a thing of which it is hard for me to persuade you."`,
        citation: 'Plato, Apology, 37e-38a, trans. Benjamin Jowett',
      },

      questions: [
        {
          id: 'q1',
          question: 'Why does Socrates refuse to stop practicing philosophy, even to save his life?',
          type: 'multiple-choice',
          options: [
            'He wants to become famous as a martyr',
            'He believes it would be disobedience to the god and that the examined life is the highest good',
            'He is too stubborn to compromise',
            'He hopes the jury will admire his courage and acquit him',
          ],
          correctAnswer: 'He believes it would be disobedience to the god and that the examined life is the highest good',
          explanation: 'Socrates gives two reasons: first, he believes he has a divine mission to practice philosophy; second, he genuinely believes the examined life is humanity\'s greatest good, making philosophy more important than life itself.',
        },
        {
          id: 'q2',
          question: 'What does this passage reveal about Socrates\'s priorities?',
          type: 'multiple-choice',
          options: [
            'He values personal safety above all else',
            'He values philosophical truth and virtue above his own survival',
            'He values the approval of the Athenian people',
            'He values wealth and comfort in exile',
          ],
          correctAnswer: 'He values philosophical truth and virtue above his own survival',
          explanation: 'Socrates explicitly rejects exile and silence, choosing death over abandoning his philosophical mission. This demonstrates his commitment to principles over self-preservation.',
        },
        {
          id: 'q3',
          question: 'What does Socrates mean by "the unexamined life is not worth living"?',
          type: 'multiple-choice',
          options: [
            'Life without philosophy is meaningless and reduces humans to mere animals',
            'Everyone must become a professional philosopher',
            'People who don\'t examine their lives should be punished',
            'Only Socrates is capable of living an examined life',
          ],
          correctAnswer: 'Life without philosophy is meaningless and reduces humans to mere animals',
          explanation: 'Socrates argues that what makes human life valuable is the capacity for rational self-reflection and examination of how we should live. Without this, we merely exist rather than truly living.',
        },
      ],

      learningPoints: [
        {
          id: 'lp-3-6-apology-defense',
          content: 'The Apology preserves Socrates\'s defense speech, revealing his refusal to compromise his principles even when facing death.',
          category: 'historical-context',
        },
        {
          id: 'lp-3-6-divine-mission',
          content: 'Socrates believed his practice of philosophy was a divine mission, making it a religious duty rather than mere intellectual curiosity.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 7: The Charges
    {
      id: 'chapter-3-scene-7-charges',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/24ebcb20-f8e8-4249-8172-eee8e969a04b/0_0.png',

      content: `The year is 399 BCE. Athens has just emerged from a devastating defeat in the Peloponnesian War and a brutal period of oligarchic rule by the Thirty Tyrants. The democracy has been restored, but the city is traumatized, suspicious, and looking for scapegoats.

Three citizens bring formal charges against Socrates, now seventy years old:

"Socrates is guilty of corrupting the minds of the young, and of believing in supernatural things of his own invention instead of the gods recognized by the state."

The charges are vague but ominous. The accusers point to Socrates\'s association with Alcibiades and Critias—both brilliant students of his who later betrayed Athens. They claim his constant questioning undermines respect for traditional values and the gods.

In reality, the trial is political. Socrates\'s relentless questioning has embarrassed powerful people. His claim to follow a divine voice (his famous "daimonion") that guides him seems impious. And in a democracy still recovering from civil war, his apparent disdain for democratic decision-making makes him dangerous.

A jury of 501 citizens will decide his fate.`,

      learningPoints: [
        {
          id: 'lp-3-7-charges',
          content: 'The charges of impiety and corrupting youth were deliberately vague, allowing the jury to project their political anxieties onto Socrates.',
          category: 'historical-context',
        },
        {
          id: 'lp-3-7-political-context',
          content: 'Socrates\'s trial occurred in a traumatized Athens recovering from war and civil strife, making the democracy hypersensitive to perceived threats.',
          category: 'historical-context',
        },
        {
          id: 'lp-3-7-daimonion',
          content: 'Socrates\'s "daimonion" (divine sign) was a voice that warned him against certain actions—this seemed impious to traditional Athenians but to Socrates was evidence of divine favor.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 8: Jury Decision
    {
      id: 'chapter-3-scene-8-jury-vote',
      type: 'decision',
      backgroundImage: 'https://cdn.midjourney.com/bb4c666d-c666-4bfd-b38a-192f09739a5a/0_0.png',

      prompt: 'If you were an Athenian juror in 399 BCE, how would you vote?',
      context: `You sit among the 501 jurors hearing the case. Socrates has just finished his defense—but what a defense! Instead of begging for mercy, he questioned the very legitimacy of the charges. Instead of flattering the jury, he suggested he deserves a reward for his service to Athens, not punishment.

"I am the gadfly stinging the lazy horse of Athens," he proclaimed. "The god has attached me to this city to rouse you from complacency."

Some jurors admire his courage. Others see dangerous arrogance. The Sophists taught rhetoric to win cases; Socrates seems determined to speak only truth, regardless of consequences.

You must now cast your vote by placing a pebble in one of two urns.`,

      choices: [
        {
          id: 'choice-guilty',
          text: 'Vote guilty—he has corrupted the youth and shown impiety',
          consequence: 'You vote with the majority. The final count is 280 guilty, 221 not guilty. Socrates has been convicted by a narrow margin. Now the penalty phase begins—the accusers propose death.',
        },
        {
          id: 'choice-not-guilty',
          text: 'Vote not guilty—he has done nothing wrong',
          consequence: 'You vote for acquittal, but you are in the minority. The final count is 280 guilty, 221 not guilty. Socrates has been convicted by a narrow margin of just 30 votes. Now the penalty phase begins—the accusers propose death.',
        },
      ],

      learningPoints: [
        {
          id: 'lp-3-8-narrow-verdict',
          content: 'Socrates was convicted by a narrow margin of only 30 votes out of 501, suggesting Athens was deeply divided about him.',
          category: 'historical-context',
        },
      ],
    },

    // Scene 9: Prison Dialogue
    {
      id: 'chapter-3-scene-9-prison',
      type: 'dialogue',
      backgroundImage: 'https://cdn.midjourney.com/0fd88f0d-47ff-4322-82ac-526ba2e1b4ab/0_0.png',

      character: {
        id: 'socrates-prison',
        name: 'Socrates',
        portrait: 'https://cdn.midjourney.com/284688f0-8192-42b4-a83d-8ee658d16586/0_0.png',
        description: 'Socrates in prison, awaiting execution',
      },

      dialogueTree: {
        id: 'node-1',
        speaker: 'socrates-prison',
        text: 'My friends wish to help me escape. They have bribed the guards and arranged a ship to take me to Thessaly. But I cannot go. Tell me—do you think I should flee?',

        responses: [
          {
            id: 'response-1',
            text: 'Yes, the verdict was unjust! Save yourself!',
            nextNodeId: 'node-2',
          },
          {
            id: 'response-2',
            text: 'No, you must respect the laws of Athens',
            nextNodeId: 'node-3',
          },
        ],

        allNodes: [
          {
            id: 'node-2',
            speaker: 'socrates-prison',
            text: 'The verdict may be unjust, but I have lived my entire life under Athens\'s laws. I benefited from her education, her protection, her culture. Having accepted these benefits for seventy years, can I now violate her laws simply because they turn against me? Would this not make me a hypocrite?',
            nextNodeId: 'node-4',
          },
          {
            id: 'node-3',
            speaker: 'socrates-prison',
            text: 'Exactly! I have spent my life teaching that we must never commit injustice. To break the law now would be to commit injustice. I would rather suffer injustice than commit it—for that would harm my soul.',
            nextNodeId: 'node-4',
          },
          {
            id: 'node-4',
            speaker: 'socrates-prison',
            text: 'Moreover, I have taught that virtue is knowledge and that we must care for our souls above all else. If I flee to save my body while corrupting my soul through lawbreaking, I prove myself a fraud. No—I will drink the hemlock and show that philosophy is not mere words but a way of life.',
            isEnd: true,
          },
        ],
      },

      learningPoints: [
        {
          id: 'lp-3-9-crito',
          content: 'Plato\'s dialogue Crito depicts Socrates refusing to escape prison, arguing that doing so would violate the social contract with Athens.',
          category: 'historical-context',
        },
        {
          id: 'lp-3-9-consistency',
          content: 'Socrates\'s refusal to escape demonstrated philosophical consistency—he could not teach virtue his entire life and then abandon it to save himself.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 10: Death of Socrates
    {
      id: 'chapter-3-scene-10-death',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/2d996466-d262-4caf-9601-2620a2b2cf4d/0_0.png',

      content: `The final day arrives. Socrates spends it discussing philosophy with his friends, arguing that the soul is immortal and that death is nothing to fear. He comforts them rather than seeking comfort.

As the sun sets, the jailer brings in the cup of hemlock. He apologizes tearfully to Socrates, who reassures him kindly. Socrates takes the cup with steady hands.

"What do you say about making a libation to the gods?" asks one student.

"We may and must pray to the gods that our journey hence be prosperous," Socrates replies calmly. Then he drinks.

His friends weep, but Socrates rebukes them gently. "I sent the women away so there would be no such unseemly displays. One should die in silence and peace."

He walks around until his legs grow heavy, then lies down. The poison slowly creeps upward through his body. His last words are: "Crito, we owe a cock to Asclepius. Pay the debt and do not forget."

With that, the man whom the oracle declared the wisest of all Athenians passed into legend.`,

      learningPoints: [
        {
          id: 'lp-3-10-final-words',
          content: 'Socrates\'s enigmatic last words about owing a cock to Asclepius (god of healing) may suggest he saw death as a cure for the disease of mortal life.',
          category: 'literary-context',
        },
        {
          id: 'lp-3-10-phaedo',
          content: 'Plato\'s dialogue Phaedo depicts Socrates\'s final hours, presenting death as the separation of soul from body and the culmination of the philosophical life.',
          category: 'historical-context',
        },
        {
          id: 'lp-3-10-martyrdom',
          content: 'Socrates\'s calm acceptance of death transformed him from gadfly to martyr, making him the model of the philosopher who lives and dies by principle.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 11: Cause and Effect
    {
      id: 'chapter-3-scene-11-consequences',
      type: 'cause-effect',
      backgroundImage: 'https://cdn.midjourney.com/738f385f-65c0-4f3f-b622-03e87b5d8cfa/0_0.png',

      prompt: 'Match each Socratic principle to its consequence in his life',

      pairs: [
        {
          id: 'pair-1',
          cause: 'Socrates questioned everyone\'s claims to knowledge',
          effect: 'He made powerful enemies who eventually brought him to trial',
          explanation: 'His relentless questioning exposed the ignorance of politicians, poets, and craftsmen, humiliating them publicly and creating resentment.',
        },
        {
          id: 'pair-2',
          cause: 'Socrates believed "virtue is knowledge"',
          effect: 'He devoted his life to philosophical education and examination',
          explanation: 'If virtue comes from knowledge of the good, then the pursuit of wisdom through philosophy becomes the most important human activity.',
        },
        {
          id: 'pair-3',
          cause: 'Socrates claimed "the unexamined life is not worth living"',
          effect: 'He refused to stop practicing philosophy even when threatened with death',
          explanation: 'If unexamined life is worthless, then abandoning philosophy to save his life would be pointless—better to die as a philosopher than live as a non-philosopher.',
        },
        {
          id: 'pair-4',
          cause: 'Socrates taught "better to suffer injustice than commit it"',
          effect: 'He refused to escape prison and chose to accept an unjust execution',
          explanation: 'Escaping would mean breaking the law and committing injustice, which Socrates believed would corrupt his soul—worse than the bodily death awaiting him.',
        },
        {
          id: 'pair-5',
          cause: 'Socrates followed his "daimonion" (divine voice)',
          effect: 'He was charged with impiety and believing in false gods',
          explanation: 'His claim to receive divine guidance seemed to contradict traditional Athenian religion, providing grounds for the charge of impiety.',
        },
      ],

      learningPoints: [
        {
          id: 'lp-3-11-integrity',
          content: 'Socrates\'s life demonstrates philosophical integrity—his actions consistently embodied his teachings, even unto death.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 12: Transition to Plato
    {
      id: 'chapter-3-scene-12-legacy',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/e4543d96-bfd6-484f-a718-58c47b429150/0_0.png',

      content: `The execution of Socrates shocked the philosophical world. His death transformed him from troublesome gadfly into martyred hero, the symbol of the examined life lived to its ultimate conclusion.

But Socrates left no writings. His philosophy survives only through the accounts of his students—particularly Plato, who witnessed his trial and was devastated by his death.

Plato would dedicate his life to preserving Socrates\'s legacy, writing dialogues that dramatized his teacher\'s method and expanded upon his insights. Yet Plato was not content merely to record. He would take Socrates\'s ethical focus and build upon it an entire metaphysical system—the Theory of Forms—that would dominate Western philosophy for two millennia.

In Plato\'s hands, Socratic questioning would become systematic philosophy. The gadfly\'s sting would become the foundation of Plato\'s Academy.

But that is a story for the next chapter. For now, consider what Socrates achieved: He shifted philosophy from cosmology to ethics, from "What is the world?" to "How should I live?" He demonstrated that the pursuit of wisdom requires humility, integrity, and the courage to question everything—including ourselves.

And he proved that sometimes, ideas are worth dying for.`,

      learningPoints: [
        {
          id: 'lp-3-12-socratic-problem',
          content: 'The "Socratic problem" is that Socrates wrote nothing, so we know him only through others—primarily Plato, whose Socrates may blend historical figure with Plato\'s own philosophy.',
          category: 'historical-context',
        },
        {
          id: 'lp-3-12-ethical-turn',
          content: 'Socrates\'s shift from natural philosophy to ethics redirected the course of Western philosophy toward questions of how humans should live.',
          category: 'literary-context',
        },
        {
          id: 'lp-3-12-legacy',
          content: 'Socrates\'s martyrdom for philosophy established the image of the philosopher as one who pursues truth regardless of consequences.',
          category: 'literary-context',
        },
      ],

      events: {
        onExit: [{
          type: 'quiz',
          componentId: 'quiz-chapter-3',
          condition: { type: 'if-not-completed' },
        }],
      },
    },
  ],

  endQuiz: chapter3Quiz,
};

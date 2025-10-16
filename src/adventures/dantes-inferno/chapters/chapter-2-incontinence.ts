import type { Chapter } from '../../../types';
import { chapter2Quiz } from '../quizzes/chapter-2-quiz';

/**
 * Chapter 2: Circles of Incontinence (II-V)
 *
 * Circles Two through Five covering sins of incontinence:
 * lust, gluttony, greed, and wrath. Features famous stories
 * like Paolo and Francesca.
 */
export const chapter2: Chapter = {
  id: 'inferno-chapter-2',
  title: 'Chapter 2: Circles of Incontinence',
  description: 'Journey through Circles II-V, encountering souls punished for sins of excess: lust, gluttony, greed, and wrath.',

  learningObjectives: [
    'Understand the seven deadly sins in medieval theology',
    'Analyze contrapasso through specific examples',
    'Recognize famous literary characters (Paolo and Francesca)',
    'Compare medieval and modern views of morality',
  ],

  scenes: [
    // Scene 1: Minos, Judge of Hell
    {
      id: 'scene-ch2-1-minos',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/2ee1d04a-8d15-495b-abcd-45b00d584ba6/0_0.png',
      image: 'https://cdn.midjourney.com/2ee1d04a-8d15-495b-abcd-45b00d584ba6/0_0.png',
      content: `You descend deeper into Hell, and ahead you see a terrifying figure: Minos, the demonic judge of the underworld.

This monstrous being was once the legendary king of Crete, known for his wisdom and justice. But here in Hell, he has been transformed into something far more terrible—a grotesque demon with a serpentine tail.

Each damned soul confesses its sins before Minos. After hearing the confession, he wraps his tail around his body—the number of coils indicates which circle the soul will be sent to. There is no appeal, no mercy, only categorization.

When Minos sees you—a living soul—he tries to warn you away. "Be careful how you enter and whom you trust!"

But Virgil steps forward with authority: "Do not hinder his destined journey. This has been willed where what is willed must be. Ask no more."

Minos shrinks back, and you pass through his judgment hall.`,
      inlineAnnotations: [
        {
          id: 'annotation-minos',
          text: 'Minos',
          tooltip: {
            title: 'From Wise King to Demonic Judge',
            content: 'In Greek mythology, Minos was the wise king of Crete who became a judge of the dead in the underworld. Dante transforms him into a grotesque demon—showing how classical figures are repurposed for Christian Hell.',
            category: 'historical-context',
          },
        },
        {
          id: 'annotation-tail',
          text: 'tail around his body',
          tooltip: {
            title: 'The Counting Mechanism',
            content: 'Minos wraps his tail around himself to indicate which circle a soul belongs to. For example, two coils means Circle II (Lust), five coils means Circle V (Wrath). This mechanical system emphasizes the impersonal nature of divine judgment.',
            category: 'literary-context',
          },
        },
      ],
      learningPoints: [
        {
          id: 'lp-ch2-1',
          content: 'Minos was a legendary king of Crete in Greek mythology, known for wisdom and justice. Dante transforms him into a demonic judge of Hell.',
          category: 'historical-context',
        },
        {
          id: 'lp-ch2-2',
          content: 'The tail\'s wrapping represents mechanical, impersonal divine judgment—no appeals, no mercy, only categorization.',
          category: 'literary-technique',
        },
      ],
    },

    // Scene 2: Entering Circle II - The Lustful
    {
      id: 'scene-ch2-2-lustful-winds',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/3b4486f0-e398-4209-9655-a3f66e8fa83b/0_0.png',
      image: 'https://cdn.midjourney.com/3b4486f0-e398-4209-9655-a3f66e8fa83b/0_0.png',
      content: `Passing through Minos's realm, you enter Circle II—the first circle of true punishment.

A violent whirlwind howls endlessly in the darkness, a tempest that never ceases. The wind is so powerful it fills the air with a constant roar of anguish and despair.

Within this hurricane, you see countless souls—swept up like starlings in a storm, blown this way and that with no control over their movement. They cry out in pain as the winds batter them eternally.

"These are the lustful," Virgil explains. "In life, they surrendered their reason to passion, letting physical desire control them. Now they are controlled by these winds, blown helplessly forever."

You watch as the souls spiral and tumble through the air, unable to find rest or peace. The punishment perfectly mirrors their sin—they gave up control to their passions in life, so now they have no control over their eternal movement.`,
      learningPoints: [
        {
          id: 'lp-ch2-3',
          content: 'The lustful surrendered reason to passion in life. In death, they\'re literally blown by winds—unable to control direction, mimicking how lust controlled them.',
          category: 'thematic-analysis',
        },
        {
          id: 'lp-ch2-4',
          content: 'This is the first true contrapasso: the punishment directly mirrors the sin\'s nature.',
          category: 'literary-technique',
        },
      ],
    },

    // Scene 3: Famous Lovers Introduction
    {
      id: 'scene-ch2-3-famous-lovers-intro',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/3b4486f0-e398-4209-9655-a3f66e8fa83b/0_0.png',
      content: `As you watch the souls spiral through the air, Virgil begins pointing out specific figures caught in the eternal whirlwind.

"See there," he says, gesturing to various souls. "These are the famous lovers of history and legend, all condemned for allowing passion to override reason."

He points to a regal woman swept past. "Cleopatra, Queen of Egypt, who wielded her beauty as a weapon—seducing Julius Caesar and Marc Antony to secure political power. Her lust intertwined with ambition."

Another soul passes—a beautiful woman whose very presence seems to radiate tragedy. "Helen of Troy, whose affair with Paris sparked the Trojan War. Her beauty launched a thousand ships and destroyed an empire."

"There," Virgil continues, indicating a mighty warrior, "is Achilles himself, the greatest Greek hero. Medieval tales say he was lured into a trap while pursuing his love for Polyxena. Even the mightiest warrior can fall to passion."

Near him swirls Paris, the Trojan prince. "Paris chose love over wisdom when offered a choice by the goddesses. He selected Aphrodite's gift—Helen—over Hera's power or Athena's wisdom."

Finally, Virgil points to two souls bound together. "Tristan and Isolde, bound by a love potion into adulterous passion. Their story is sung throughout the courts of Europe."

"All these souls," Virgil says solemnly, "surrendered reason to desire. Now see if you can identify each by their defining choices."`,
      learningPoints: [
        {
          id: 'lp-ch2-5a',
          content: 'Circle II contains famous lovers from mythology, history, and medieval romance—showing lust as a universal sin across cultures and eras.',
          category: 'historical-context',
        },
        {
          id: 'lp-ch2-5b',
          content: 'Each lover\'s story involves choosing passion over duty, reason, or wisdom—the core sin of lust in medieval theology.',
          category: 'thematic-analysis',
        },
      ],
    },

    // Scene 4: Famous Lovers (Quote Attribution)
    {
      id: 'scene-ch2-4-famous-lovers-quiz',
      type: 'quote-attribution',
      backgroundImage: 'https://cdn.midjourney.com/3b4486f0-e398-4209-9655-a3f66e8fa83b/0_0.png',
      prompt: 'Identify these famous lovers condemned for lust.',
      quotes: [
        {
          id: 'quote-cleopatra',
          text: 'Queen of Egypt who seduced Caesar and Marc Antony',
          speaker: 'Cleopatra',
          context: 'Used sexuality for political power (69-30 BCE)',
          explanation: 'Cleopatra represents lust intertwined with political ambition—passion overriding statecraft.',
        },
        {
          id: 'quote-helen',
          text: 'Her beauty launched a thousand ships',
          speaker: 'Helen of Troy',
          context: 'Mythical cause of the Trojan War',
          explanation: 'Helen symbolizes destructive beauty—her affair with Paris caused a decade of war and Troy\'s destruction.',
        },
        {
          id: 'quote-achilles',
          text: 'The warrior undone by love for Polyxena',
          speaker: 'Achilles',
          context: 'Greek hero of the Iliad',
          explanation: 'Medieval legend claimed Achilles died in a trap set by Paris while pursuing Polyxena. The greatest warrior fell to passion.',
        },
        {
          id: 'quote-paris',
          text: 'Prince who chose love over wisdom and power',
          speaker: 'Paris',
          context: 'Trojan prince who abducted Helen',
          explanation: 'Paris chose Aphrodite\'s offer (Helen) over Hera\'s (power) or Athena\'s (wisdom) in the Judgment of Paris—lust over virtue.',
        },
        {
          id: 'quote-tristan-isolde',
          text: 'Star-crossed lovers bound by a potion',
          speaker: 'Tristan and Isolde',
          context: 'Medieval romance (c. 1150)',
          explanation: 'Their adulterous love mirrors Paolo and Francesca. Medieval audiences knew this tragic tale of forbidden passion.',
        },
      ],
      learningPoints: [
        {
          id: 'lp-ch2-5',
          content: 'Dante includes mythical, historical, and literary figures together. His Hell blurs fact and fiction—showing sin as universal across cultures and eras.',
          category: 'literary-technique',
        },
        {
          id: 'lp-ch2-6',
          content: 'Most lustful souls are from classical mythology and medieval romance, not the Bible. Lust is treated as a literary and cultural sin.',
          category: 'thematic-analysis',
        },
      ],
    },

    // Scene 5: Paolo and Francesca (Dialogue)
    {
      id: 'scene-ch2-5-paolo-francesca',
      type: 'dialogue',
      backgroundImage: 'https://cdn.midjourney.com/3b4486f0-e398-4209-9655-a3f66e8fa83b/0_0.png',
      image: 'https://cdn.midjourney.com/f10614aa-7259-4d5c-ae08-7a5e3796060c/0_0.png',
      character: {
        id: 'francesca',
        name: 'Francesca da Rimini',
        portrait: 'https://cdn.midjourney.com/da059726-032c-42b5-a989-54383d505582/0_0.png',
        description: 'Noblewoman of Ravenna (d. 1285), killed alongside her lover Paolo',
      },
      dialogueTree: {
        id: 'node-francesca-1',
        speaker: 'francesca',
        text: 'O living creature, gracious and so kind, who through this black air comes to visit us... If we could, we would pray for your peace, since you pity our perverse misfortune.',
        responses: [
          {
            id: 'response-how-came',
            text: 'How did you come to be here?',
            nextNodeId: 'node-francesca-2',
            learningPoints: [
              {
                id: 'lp-ch2-7',
                content: 'Francesca was married to Gianciotto Malatesta but fell in love with his brother Paolo. When discovered, both were murdered (c. 1285).',
                category: 'historical-context',
              },
            ],
          },
          {
            id: 'response-regret',
            text: 'Do you regret your love?',
            nextNodeId: 'node-francesca-3',
            learningPoints: [
              {
                id: 'lp-ch2-8',
                content: 'Francesca blames love itself—"Love, which absolves no loved one from loving." She refuses personal responsibility, a key sign of the damned.',
                category: 'character-analysis',
              },
            ],
          },
          {
            id: 'response-what-caused',
            text: 'What caused you to sin?',
            nextNodeId: 'node-francesca-4',
            learningPoints: [
              {
                id: 'lp-ch2-9',
                content: 'Francesca blames a book—the romance of Lancelot and Guinevere. "That day we read no more." Literature as temptation was a medieval concern.',
                category: 'thematic-analysis',
              },
            ],
          },
        ],
        allNodes: [
          {
            id: 'node-francesca-2',
            speaker: 'francesca',
            text: 'I was born in Ravenna, married to Gianciotto Malatesta of Rimini—a political alliance, not love. But his brother Paolo... we fell in love despite ourselves. When my husband discovered us, he murdered us both in his rage. Now Paolo and I are bound together in this eternal wind.',
            nextNodeId: 'node-francesca-final',
          },
          {
            id: 'node-francesca-3',
            speaker: 'francesca',
            text: 'Love, which is quickly kindled in gentle hearts, seized him for my beautiful body that was taken from me—and the way still wounds me. Love, which absolves no loved one from loving, seized me so strongly that, as you see, it does not leave me even now.',
            nextNodeId: 'node-francesca-final',
          },
          {
            id: 'node-francesca-4',
            speaker: 'francesca',
            text: 'We were alone, reading of Lancelot and how love seized him. We read of how the longed-for smile was kissed by such a lover... When we read that the desired smile was kissed by such a lover, this one, who shall never be divided from me, kissed my mouth, trembling. That day we read no more.',
            nextNodeId: 'node-francesca-final',
          },
          {
            id: 'node-francesca-final',
            speaker: 'francesca',
            text: 'Paolo, who will never be divided from me, stands here weeping. We were slain by one who knows no mercy.',
            isEnd: true,
          },
        ],
      },
      learningPoints: [
        {
          id: 'lp-ch2-10',
          content: 'Dante faints after hearing Francesca\'s tale—overcome with pity. His compassion for sinners (even the damned) makes him unusual among medieval writers.',
          category: 'character-analysis',
        },
        {
          id: 'lp-ch2-11',
          content: 'Francesca\'s speech is beautiful but deceptive. She blames fate, love, and literature—never admitting adultery and lust. Her eloquence masks her sin.',
          category: 'literary-technique',
        },
      ],
    },

    // Scene 6: Circle III - The Gluttons
    {
      id: 'scene-ch2-6-gluttons',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/b62798c9-b162-4a39-a882-28d7f253cca6/0_0.png',
      image: 'https://cdn.midjourney.com/6dcf8116-c2de-4884-ada2-463cbe14fd79/0_0.png',
      content: `You descend to Circle III, where the nature of punishment changes dramatically.

A cold, filthy rain pelts down endlessly—not clean water, but a disgusting mixture that creates rivers of mud. The souls here lie in this muck like pigs in a wallow, degraded and howling in misery.

Suddenly, you hear a terrible barking. A massive three-headed dog appears—Cerberus, the guardian of this circle. Each of his three mouths snarls and snaps at the souls, tearing at them with his claws.

The souls try to shield their ears from his deafening howls, but there is no escape.

Virgil quickly throws handfuls of mud into Cerberus's three mouths. The beast, distracted by eating, quiets down and allows you to pass through.

"These are the gluttons," Virgil explains. "They lived like animals, indulging their appetites without restraint. Now they wallow in filth like the pigs they resembled."`,
      inlineAnnotations: [
        {
          id: 'annotation-cerberus',
          text: 'Cerberus',
          tooltip: {
            title: 'The Three-Headed Guardian',
            content: 'In Greek mythology, Cerberus guarded the gates of Hades to prevent escape. His three heads symbolize the glutton\'s insatiable hunger—always wanting more, never satisfied.',
            category: 'historical-context',
          },
        },
      ],
      learningPoints: [
        {
          id: 'lp-ch2-12',
          content: 'Gluttony\'s contrapasso: They indulged appetites excessively, so now wallow like pigs in filth. Cold rain represents joyless consumption.',
          category: 'thematic-analysis',
        },
        {
          id: 'lp-ch2-13',
          content: 'Cerberus from Greek mythology guards the gluttons. His three heads represent insatiable hunger—he never stops eating.',
          category: 'literary-technique',
        },
      ],
    },

    // Scene 7: Ciacco the Florentine (Dialogue)
    {
      id: 'scene-ch2-7-ciacco',
      type: 'dialogue',
      backgroundImage: 'https://cdn.midjourney.com/b62798c9-b162-4a39-a882-28d7f253cca6/0_0.png',
      character: {
        id: 'ciacco',
        name: 'Ciacco',
        portrait: 'https://cdn.midjourney.com/38535466-8df1-43b2-8039-4d90f637e9a2/0_0.png',
        description: 'Florentine glutton (d. before 1300), possibly a poet',
      },
      dialogueTree: {
        id: 'node-ciacco-1',
        speaker: 'ciacco',
        text: 'You, Dante, born in our corrupted city... Do you recognize me? You were made before I was unmade.',
        responses: [
          {
            id: 'response-who-are-you',
            text: 'Who are you?',
            nextNodeId: 'node-ciacco-2',
            learningPoints: [
              {
                id: 'lp-ch2-14',
                content: 'Ciacco means "pig" in Italian. Whether a nickname or real name, it fits his gluttony perfectly.',
                category: 'literary-technique',
              },
            ],
          },
          {
            id: 'response-florence-future',
            text: 'What is Florence\'s future?',
            nextNodeId: 'node-ciacco-3',
            learningPoints: [
              {
                id: 'lp-ch2-15',
                content: 'Ciacco prophesies civil war between White and Black Guelphs (1300-1302). Dante, a White Guelph, will be exiled in 1302.',
                category: 'historical-context',
              },
            ],
          },
          {
            id: 'response-just-men',
            text: 'Where are Florence\'s just men?',
            nextNodeId: 'node-ciacco-4',
            learningPoints: [
              {
                id: 'lp-ch2-16',
                content: 'Ciacco says only two just men remain in Florence, "but no one listens." Dante\'s political pessimism pervades Inferno.',
                category: 'thematic-analysis',
              },
            ],
          },
        ],
        allNodes: [
          {
            id: 'node-ciacco-2',
            speaker: 'ciacco',
            text: 'They called me Ciacco—the Pig. Perhaps you knew me in Florence, before my appetite consumed me. Now I lie in this rain, paying for my gorging.',
            nextNodeId: 'node-ciacco-5',
          },
          {
            id: 'node-ciacco-3',
            speaker: 'ciacco',
            text: 'The rustic party will drive out the other with much offense. Then within three suns, the fallen will rise and the other fall. Florence will long be oppressed by this burden of strife.',
            nextNodeId: 'node-ciacco-5',
          },
          {
            id: 'node-ciacco-4',
            speaker: 'ciacco',
            text: 'Two just men remain, but no one listens to them. Pride, envy, and avarice—these three sparks have set the hearts of all Florence aflame.',
            nextNodeId: 'node-ciacco-5',
          },
          {
            id: 'node-ciacco-5',
            speaker: 'ciacco',
            text: 'Tell me: what became of those we loved? Farinata, Tegghiaio, Rusticucci? They meant well—where are they now?',
            responses: [
              {
                id: 'response-deeper',
                text: 'They are deeper in Hell.',
                nextNodeId: 'node-ciacco-6',
              },
              {
                id: 'response-find-them',
                text: 'I will find them and tell you.',
                nextNodeId: 'node-ciacco-6',
              },
            ],
          },
          {
            id: 'node-ciacco-6',
            speaker: 'ciacco',
            text: 'When you return to the sweet world, recall me to others\' memory. I speak no more.',
            isEnd: true,
          },
        ],
      },
      learningPoints: [
        {
          id: 'lp-ch2-17',
          content: 'The damned seek fame among the living. Ciacco asks to be remembered—showing earthly concerns persist even in Hell.',
          category: 'character-analysis',
        },
        {
          id: 'lp-ch2-18',
          content: 'Dante uses Hell to comment on Florentine politics. Nearly every circle features political figures and prophecies about Florence\'s corruption.',
          category: 'thematic-analysis',
        },
      ],
    },

    // Scene 8: Circle IV - The Avaricious and Prodigal
    {
      id: 'scene-ch2-8-greed',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/846165d7-8010-4035-bb38-dce3f75f60c6/0_0.png',
      image: 'https://cdn.midjourney.com/846165d7-8010-4035-bb38-dce3f75f60c6/0_0.png',
      content: `Descending to Circle IV, you encounter a strange and futile scene.

Two massive groups of souls face each other, each pushing enormous weights with their chests. The weights are so heavy that the souls can barely move them, grunting and straining with every push.

When the groups collide in the center, they shout at each other: "Why do you hoard?" screams one side. "Why do you squander?" screams the other.

Then they turn around, pushing their weights back the way they came, only to collide again and repeat the cycle. Over and over, endlessly, they push and collide and turn and push.

"One group hoarded wealth in life," Virgil explains. "The other wasted it foolishly. Both were obsessed with material things—one couldn't let go, the other couldn't hold on. Now they push useless weights forever, their materialism made permanent and pointless."`,
      learningPoints: [
        {
          id: 'lp-ch2-19',
          content: 'Avarice (greed/hoarding) and prodigality (wasteful spending) are opposites but stem from the same root: obsession with material wealth.',
          category: 'thematic-analysis',
        },
        {
          id: 'lp-ch2-20',
          content: 'The contrapasso: They pushed wealth around in life, so push useless weights eternally. Meeting and fighting represents their mutual futility.',
          category: 'literary-technique',
        },
      ],
    },

    // Scene 9: Clergy Among the Greedy
    {
      id: 'scene-ch2-9-clergy-greed',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/846165d7-8010-4035-bb38-dce3f75f60c6/0_0.png',
      image: 'https://cdn.midjourney.com/846165d7-8010-4035-bb38-dce3f75f60c6/0_0.png',
      content: `As you watch the souls pushing their endless weights, something catches your eye. Among the howling masses, you notice many figures with distinctive marks—the shaved crowns of monks and priests.

"Virgil," you say, shocked, "are those... clergymen?"

Virgil nods grimly. "Yes. Look closely—you'll see monks, priests, cardinals. Even popes push weights in this circle. Their tonsured heads mark them as servants of God, yet here they are, punished for the very sin they should have rejected most strongly."

You stare in disbelief. The Church is supposed to teach spiritual values, to reject worldly wealth. Yet here, religious leaders roll boulders eternally for their greed.

"In life, they preached poverty while hoarding riches," Virgil explains. "They sold sacred offices for gold, taxed the poor to build palaces, and turned God's house into a marketplace. This corruption has destroyed both faith and politics across Italy."

"But they are Christ's representatives on earth," you protest. "How can such holy offices be condemned?"

Virgil's expression darkens. "No office is so holy that it sanctifies the sinner who abuses it. These men swore vows of poverty, then pursued wealth more zealously than any merchant. Their betrayal of their sacred trust earned them this punishment."

The sight deeply troubles you. You have seen this corruption yourself in Florence and Rome—the selling of Church offices, the taxation of the poor, the luxurious palaces of cardinals. Now you understand: divine judgment sees through the robes and titles to the greed beneath.`,
      inlineAnnotations: [
        {
          id: 'annotation-tonsure',
          text: 'tonsured heads',
          tooltip: {
            title: 'The Mark of the Clergy',
            content: 'Medieval monks and priests shaved the crown of their heads (tonsure) as a sign of devotion and humility. Seeing these distinctive marks in Hell would have been shocking to Dante\'s readers.',
            category: 'historical-context',
          },
        },
        {
          id: 'annotation-papal-corruption',
          text: 'popes push weights',
          tooltip: {
            title: 'Popes in Hell',
            content: 'Placing contemporary popes in Hell was extraordinarily bold—it could be considered heresy. Dante specifically targets Pope Boniface VIII and other corrupt Church leaders throughout Inferno.',
            category: 'historical-context',
          },
        },
      ],
      learningPoints: [
        {
          id: 'lp-ch2-21',
          content: 'Dante attacks Church corruption relentlessly. Popes, cardinals, and clergy appear in multiple circles—showing institutional rot.',
          category: 'thematic-analysis',
        },
        {
          id: 'lp-ch2-22',
          content: 'Placing recent popes in Hell risked charges of heresy. Dante\'s exile gave him freedom to write radical critiques.',
          category: 'historical-context',
        },
        {
          id: 'lp-ch2-22a',
          content: 'The tonsure (shaved crown) marked clergy. Seeing these marks in Hell emphasizes the betrayal—those who vowed poverty pursued wealth.',
          category: 'cultural-context',
        },
      ],
    },

    // Scene 10: Fortune's Wheel
    {
      id: 'scene-ch2-10-fortune',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/846165d7-8010-4035-bb38-dce3f75f60c6/0_0.png',
      image: 'https://cdn.midjourney.com/5ad96296-7f4b-4a90-9bf4-e4a2b07e9960/0_0.png',
      content: `As you continue through Circle IV, you ask Virgil a question that has troubled you: "Master, why does Fortune allow the wicked to prosper while the good suffer?"

Virgil smiles and explains: "Fortune is not a random force, but a divine agent appointed by God. She turns her wheel, raising some humans up and casting others down, indifferent to their complaints."

"The foolish blame her," Virgil continues, "but she is blessed and does not hear their cries. She turns her wheel among the other primal creatures, choosing her victims and moving on, swift and merciless."

"Fortune operates beyond human understanding," Virgil concludes. "Her apparent randomness is part of divine providence—we cannot comprehend God's greater plan."`,
      inlineAnnotations: [
        {
          id: 'annotation-fortune-wheel',
          text: 'Fortune\'s wheel',
          tooltip: {
            title: 'The Medieval Wheel of Fortune',
            content: 'Medieval people personified Fortune as a goddess turning a great wheel. Those at the top (prosperous) would inevitably fall, while those at the bottom would rise. This image represented the instability of worldly success.',
            category: 'cultural-context',
          },
        },
      ],
      learningPoints: [
        {
          id: 'lp-ch2-23',
          content: 'Medieval people personified Fortune as a goddess turning a wheel. Dante makes her a servant of God—randomness within divine plan.',
          category: 'thematic-analysis',
        },
        {
          id: 'lp-ch2-24',
          content: 'Fortune\'s indifference to human suffering reflects medieval acceptance of fate. Providence operates beyond human understanding.',
          category: 'cultural-context',
        },
      ],
    },

    // Scene 11: The River Styx and Circle V - Wrath
    {
      id: 'scene-ch2-11-wrath',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/0b91f96f-9b03-4e11-8727-484f1ece0fdb/0_0.png',
      image: 'https://cdn.midjourney.com/0b91f96f-9b03-4e11-8727-484f1ece0fdb/0_0.png',
      content: `You descend further and come upon a massive swamp of muddy water—the River Styx, one of the great rivers of Hell.

In the foul mud, souls fight each other viciously. They strike with fists, with heads, with feet, with teeth—tearing at each other in endless rage. Their fury never subsides, and the violence never stops.

But there is more. Looking closer at the surface of the swamp, you see bubbles rising. Beneath the mud, other souls are submerged, gurgling and choking.

"These are the wrathful," Virgil explains, pointing to those fighting on the surface. "In life they gave in to uncontrolled anger, so now they fight forever."

"And those below?" you ask.

"The sullen," Virgil replies. "They repressed their anger, holding it inside until it poisoned them. Now they choke on it beneath the mud, unable to express themselves clearly—forever drowning in their own suppressed rage."`,
      inlineAnnotations: [
        {
          id: 'annotation-styx',
          text: 'River Styx',
          tooltip: {
            title: 'The River of Hatred',
            content: 'In Greek mythology, the Styx was the boundary between Earth and the Underworld. Its name means "hatred" or "shuddering." Dante transforms it into a muddy swamp of wrath.',
            category: 'historical-context',
          },
        },
      ],
      learningPoints: [
        {
          id: 'lp-ch2-25',
          content: 'The wrathful express anger, so fight eternally. The sullen repressed anger, so choke on it beneath the surface—unable to speak clearly.',
          category: 'thematic-analysis',
        },
        {
          id: 'lp-ch2-26',
          content: 'The River Styx from Greek mythology becomes a swamp of wrath. Classical and Christian geography merge seamlessly in Dante\'s Hell.',
          category: 'literary-technique',
        },
      ],
    },

    // Scene 12: Filippo Argenti (Dialogue)
    {
      id: 'scene-ch2-12-filippo',
      type: 'dialogue',
      backgroundImage: 'https://cdn.midjourney.com/0b91f96f-9b03-4e11-8727-484f1ece0fdb/0_0.png',
      character: {
        id: 'filippo-argenti',
        name: 'Filippo Argenti',
        portrait: 'https://cdn.midjourney.com/35ef3133-c1cf-41da-8248-08d245d0d262/0_0.png',
        description: 'Florentine noble from the Adimari family, political enemy of Dante',
      },
      dialogueTree: {
        id: 'node-filippo-1',
        speaker: 'filippo-argenti',
        text: 'Who are you that comes before your time?',
        responses: [
          {
            id: 'response-dante-passing',
            text: 'I am Dante, passing through.',
            nextNodeId: 'node-filippo-2',
            learningPoints: [
              {
                id: 'lp-ch2-27',
                content: 'Filippo Argenti was Dante\'s personal enemy. Seeing him in Hell allows Dante to exact literary revenge.',
                category: 'historical-context',
              },
            ],
          },
          {
            id: 'response-who-you',
            text: 'Who are YOU, so wretched?',
            nextNodeId: 'node-filippo-3',
            learningPoints: [
              {
                id: 'lp-ch2-28',
                content: 'Dante\'s hostility toward Filippo is unusual—he\'s usually compassionate. Personal hatred breaks through.',
                category: 'character-analysis',
              },
            ],
          },
        ],
        allNodes: [
          {
            id: 'node-filippo-2',
            speaker: 'filippo-argenti',
            text: 'Dante! I know that name! Your family—',
            nextNodeId: 'node-filippo-virgil',
          },
          {
            id: 'node-filippo-3',
            speaker: 'filippo-argenti',
            text: 'You dare—I am Filippo Argenti! I will—',
            nextNodeId: 'node-filippo-virgil',
          },
          {
            id: 'node-filippo-virgil',
            speaker: 'virgil',
            text: 'Away with you, with the other dogs!',
            nextNodeId: 'node-filippo-attacked',
          },
          {
            id: 'node-filippo-attacked',
            speaker: 'narrator',
            text: 'Virgil pushes Filippo away. The other wrathful souls immediately attack him, tearing at him with their teeth. You watch as Filippo screams in rage and pain.',
            nextNodeId: 'node-dante-satisfaction',
          },
          {
            id: 'node-dante-satisfaction',
            speaker: 'narrator',
            text: 'To your surprise, you feel satisfaction rather than pity. "Master," you say, "I would gladly see him dunked in this broth once more before we leave."',
            isEnd: true,
          },
        ],
      },
      learningPoints: [
        {
          id: 'lp-ch2-29',
          content: 'Dante\'s satisfaction at Filippo\'s suffering shows him learning to harden his heart—necessary to complete the journey without fainting at every tragedy.',
          category: 'character-analysis',
        },
      ],
    },

    // Scene 13: Approaching the City of Dis
    {
      id: 'scene-ch2-13-dis',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/4dc8e2aa-23bd-4df6-a850-79cf8e7a1105/0_0.png',
      image: 'https://cdn.midjourney.com/4dc8e2aa-23bd-4df6-a850-79cf8e7a1105/0_0.png',
      content: `Crossing the River Styx, you see something that makes your blood run cold.

In the distance, massive walls rise from the depths—walls of iron that stretch impossibly high. Atop them stand flaming towers, glowing like a hellish mosque. The flames cast an eerie red light across the landscape.

Along the battlements, you can see demons—countless demons—watching your approach with malevolent eyes.

"Now begins the city called Dis," Virgil says gravely. "Beyond these walls lie the circles of true malice—violence, fraud, and treachery. We have passed through Upper Hell, where souls were punished for weakness. What lies ahead is far worse."

You feel a chill despite the heat. The boundary between Upper and Lower Hell stands before you—a wall separating sins of incontinence from sins of malice.

The demons begin to move along the walls, and you wonder: will they let you pass?`,
      inlineAnnotations: [
        {
          id: 'annotation-dis',
          text: 'Dis',
          tooltip: {
            title: 'The City of Pluto',
            content: 'Dis was another name for Pluto, the Roman god of the underworld. The walled city represents premeditated evil—unlike the open circles above, Lower Hell is fortified and guarded.',
            category: 'historical-context',
          },
        },
      ],
      learningPoints: [
        {
          id: 'lp-ch2-30',
          content: 'Dis is Lower Hell (Circles VI-IX), where sins of malice (violence, fraud, treachery) are punished. The walled city represents premeditated evil.',
          category: 'plot-structure',
        },
        {
          id: 'lp-ch2-31',
          content: 'Upper Hell (Circles II-V) punishes incontinence (weakness). Lower Hell punishes malice (intentional evil). The moral distinction is Aristotelian.',
          category: 'thematic-analysis',
        },
      ],
    },

    // Scene 14: Understanding Incontinence (Cause-Effect)
    {
      id: 'scene-ch2-14-cause-effect',
      type: 'cause-effect',
      backgroundImage: 'https://cdn.midjourney.com/4dc8e2aa-23bd-4df6-a850-79cf8e7a1105/0_0.png',
      prompt: 'Match each sin of incontinence to its contrapasso.',
      pairs: [
        {
          id: 'pair-lust',
          cause: 'Lust: Surrendered reason to passion and physical desire',
          effect: 'Blown eternally by violent winds, unable to control direction',
          explanation: 'Lustful souls let emotion control them. Now literal winds blow them—perfect symbolic punishment.',
        },
        {
          id: 'pair-gluttony',
          cause: 'Gluttony: Indulged appetites beyond necessity, living like animals',
          effect: 'Lying in cold mud and filth, pelted by freezing rain',
          explanation: 'Gluttons degraded themselves to animal level. Now they wallow like pigs in garbage.',
        },
        {
          id: 'pair-greed',
          cause: 'Greed/Waste: Hoarded wealth or squandered it foolishly',
          effect: 'Pushing heavy boulders against each other forever',
          explanation: 'Hoarders and wasters obsessed over money. Now they push useless weights—their materialism made permanent and pointless.',
        },
        {
          id: 'pair-wrath',
          cause: 'Wrath: Gave in to uncontrolled anger or repressed it as sullenness',
          effect: 'Fighting in the muddy Styx (wrathful) or choking beneath it (sullen)',
          explanation: 'Active wrath fights eternally. Sullen anger (repressed) chokes on itself beneath the surface—unable to express or release.',
        },
      ],
      distractors: [
        'Burned in flaming tombs',
        'Immersed in boiling blood',
      ],
      learningPoints: [
        {
          id: 'lp-ch2-32',
          content: 'Sins of incontinence stem from lack of self-control, not evil intent. Dante shows compassion—these sinners are weak, not wicked.',
          category: 'thematic-analysis',
        },
        {
          id: 'lp-ch2-33',
          content: 'Contrapasso operates on symbolic logic: punishment mirrors the sin\'s spiritual nature, not just its physical act.',
          category: 'literary-technique',
        },
      ],
      events: {
        onExit: [
          {
            type: 'quiz',
            componentId: 'quiz-inferno-chapter-2',
            condition: { type: 'if-not-completed' },
          },
        ],
      },
    },
  ],

  endQuiz: chapter2Quiz,
};

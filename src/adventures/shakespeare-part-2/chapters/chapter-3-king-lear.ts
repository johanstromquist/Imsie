import type { Chapter } from '../../../types';
import { chapter3Quiz } from '../quizzes/chapter-3-quiz';

export const chapter3: Chapter = {
  id: 'chapter-3-king-lear',
  title: 'Chapter 3: King Lear - "Nothing Will Come of Nothing"',
  description: 'Witness Shakespeare\'s most devastating tragedy as an aging king\'s foolish pride strips him of kingdom, sanity, and humanity itself, leaving only the terrible question: what remains when all is lost?',

  learningObjectives: [
    'Understand the concept of "nothing" as philosophical and dramatic center of tragedy',
    'Analyze the parallel plots (Lear/daughters, Gloucester/sons) and their thematic reinforcement',
    'Examine the relationship between authority, identity, and sanity',
    'Recognize the metaphor of sight/blindness (literal and figurative) as tragic structure',
    'Explore existential questions: What remains when everything is stripped away? What makes us human?',
  ],

  scenes: [
    // Scene 1: Introduction to King Lear - Part II's culmination
    {
      id: 'lear-scene-1-intro',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/86fe7889-fcd4-474d-a1be-74644751eacc/0_0.png',
      image: 'https://cdn.midjourney.com/87ef805b-db39-4f74-90af-1f91bddc3f48/0_1.png',

      content: `We have traveled deep into darkness.

Macbeth showed us ambition corrupting a good man into a murdering tyrant. Othello revealed how jealousy, carefully cultivated, transforms love into murder. Both tragedies explored internal psychological forces destroying from within.

Now we reach the abyss.

King Lear is Shakespeare's most challenging, most nihilistic, most philosophically demanding tragedy. It asks the hardest questions: What is left when everything is stripped away? What makes us human when power, sanity, and social identity are gone? Is there meaning in suffering, or only emptiness?

Where Macbeth gained a crown and lost his soul, and Othello destroyed what he loved most, Lear will give away his kingdom and discover what remains when he is reduced to "nothing."

This is not a tragedy of gaining evil power or being manipulated into jealousy. This is a tragedy of loss, madness, and the terrifying recognition that beneath our social roles, we might be nothing at all.

"Nothing will come of nothing," Lear tells his daughter Cordelia in the play's opening scene.

By the end, he will understand exactly how true—and how terrible—those words are.`,

      learningPoints: [
        {
          id: 'lp-lear-1-culmination',
          content: 'King Lear is Part II\'s culmination—the darkest and most philosophically complex exploration of internal corruption through pride and folly.',
          category: 'literary-context',
        },
        {
          id: 'lp-lear-1-nothing',
          content: 'The concept of "nothing" is central to Lear: nothing said, nothing given, nothing left, nothing learned—until too late.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 2: Primary Source - Monarchy and divine right
    {
      id: 'lear-scene-2-monarchy',
      type: 'primary-source',
      backgroundImage: 'https://cdn.midjourney.com/f1950f1c-e1d6-4f07-8ea9-f3e19f376f05/0_0.png',
      image: 'https://cdn.midjourney.com/c892f751-20b6-4a7f-9f07-d8a209c2e2e6/0_0.png',

      prompt: 'Examine Renaissance ideas about monarchy, authority, and the natural order',

      source: {
        title: 'Historical Context: Divine Right and the Great Chain of Being',
        type: 'text',
        content: `When Shakespeare wrote King Lear (1605-1606), monarchy was understood through the concept of the **Great Chain of Being**—a hierarchical structure ordained by God:

**God → Angels → King → Nobles → Commons → Animals → Plants → Minerals**

The king stood at the apex of human society, God's appointed representative on Earth. His authority was not merely political but metaphysical—to challenge the king was to challenge divine order itself.

**Divine Right of Kings:** Monarchs ruled by God's will, not by the people's consent. James I (Shakespeare's patron) wrote extensively defending this doctrine. To remove a king, even a bad one, was to commit both treason and blasphemy.

**The King's Two Bodies:** Renaissance political theory held that the king possessed two bodies:
1. The **Body Natural** (physical, mortal, subject to age and death)
2. The **Body Politic** (eternal, sacred, embodying the kingdom itself)

When Lear divides his kingdom and abdicates, he attempts to separate these two bodies—to remain "king" in title while relinquishing power. Shakespeare shows this is impossible and catastrophic.

**What Happens When Order Breaks?**

Renaissance audiences believed that disrupting the Great Chain caused cosmic chaos:
- Unnatural weather (storms, eclipses)
- Children rebelling against parents
- Madness and violence
- Collapse of all social bonds

King Lear dramatizes exactly this collapse. Lear's foolish abdication doesn't just ruin him personally—it tears apart the social fabric, unleashing cruelty, madness, and nihilistic despair.

The play is set in pre-Christian Britain, allowing Shakespeare to explore what happens when there is NO divine providence to restore order. Unlike other tragedies where some restoration occurs, Lear offers only unrelenting bleakness.`,
        citation: 'Adapted from Renaissance political theory and Shakespeare scholarship',
      },

      questions: [
        {
          id: 'q1',
          question: 'According to the Great Chain of Being, what was catastrophic about Lear dividing his kingdom and abdicating?',
          type: 'multiple-choice',
          options: [
            'It was merely a bad political decision with practical consequences',
            'It violated divine order by separating the king\'s natural and political bodies, causing cosmic chaos',
            'It was illegal under British law at the time',
            'It set a good precedent for peaceful transitions of power',
          ],
          correctAnswer: 'It violated divine order by separating the king\'s natural and political bodies, causing cosmic chaos',
          explanation: 'Renaissance audiences believed the king\'s authority was divinely ordained and inseparable from his person. Lear\'s attempt to remain "king" while giving away power was seen as unnatural and catastrophic.',
        },
        {
          id: 'q2',
          question: 'Why does Shakespeare set King Lear in pre-Christian Britain rather than Christian England?',
          type: 'multiple-choice',
          options: [
            'To make the play more historically accurate',
            'To explore what happens without divine providence or Christian hope for redemption',
            'To avoid offending the Church of England',
            'To appeal to pagan audiences in London',
          ],
          correctAnswer: 'To explore what happens without divine providence or Christian hope for redemption',
          explanation: 'The pre-Christian setting allows Shakespeare to create a bleaker, more nihilistic tragedy where no divine restoration or Christian mercy offers hope—only human suffering without meaning.',
        },
      ],

      learningPoints: [
        {
          id: 'lp-lear-2-divine-right',
          content: 'Renaissance political theology saw monarchy as divinely ordained, making Lear\'s abdication not just foolish but cosmically disruptive.',
          category: 'historical-context',
        },
        {
          id: 'lp-lear-2-pre-christian',
          content: 'The pre-Christian setting enables Shakespeare\'s bleakest tragedy—no divine providence will restore order or give suffering meaning.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 3: The love test
    {
      id: 'lear-scene-3-love-test',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/55d46b40-8edd-4c74-8dc1-383072b40c99/0_0.png',
      image: 'https://cdn.midjourney.com/824061f2-4689-4d84-bbc1-3eb29945fa5d/0_1.png',

      content: `King Lear, over eighty years old, has decided to divide his kingdom among his three daughters and retire from the burdens of rule.

But he makes it a public performance—a "love test." Each daughter must declare how much she loves him. The one who loves him most will receive the largest portion.

Goneril, the eldest, speaks first: "Sir, I love you more than words can wield the matter, dearer than eyesight, space, and liberty, beyond what can be valued, rich or rare..."

Lear is pleased. He grants her a third of the kingdom.

Regan, the middle daughter, tries to outdo her sister: "I profess myself an enemy to all other joys... and find I am alone felicitate in your dear Highness' love."

Lear grants her another third, equally rich.

Now comes Cordelia, the youngest and Lear's favorite. He expects her to surpass her sisters in flattery. "What can you say to draw a third more opulent than your sisters?"

Cordelia pauses. She sees the emptiness of her sisters' declarations, the foolishness of the test itself. She speaks truth:

"Nothing, my lord."

"Nothing?"

"Nothing."

"Nothing will come of nothing. Speak again."

She tries to explain: "I love your Majesty according to my bond, no more nor less." She loves him as a daughter should, but she will not pretend her love encompasses everything—she will marry someday, and give some love to her husband.

This honesty enrages Lear. He disowns her: "Here I disclaim all my paternal care... and as a stranger to my heart and me hold thee from this forever."

The loyal Earl of Kent tries to intervene: "See better, Lear, and let me still remain the true blank of thine eye."

"Out of my sight!" Lear roars.

"See better, Lear," Kent repeats—a phrase heavy with irony. Lear cannot see. He mistakes flattery for love, honesty for ingratitude. And this blindness will destroy him.`,

      learningPoints: [
        {
          id: 'lp-lear-3-love-test',
          content: 'The love test reveals Lear\'s fatal flaw: he values appearance over substance, flattery over truth, demanding public performance of private emotion.',
          category: 'literary-context',
        },
        {
          id: 'lp-lear-3-nothing',
          content: 'Cordelia\'s "nothing" becomes the play\'s central word—what she gives (no flattery), what Lear will become (stripped of everything), what meaning may exist (none).',
          category: 'literary-context',
        },
        {
          id: 'lp-lear-3-sight',
          content: 'Kent\'s "see better, Lear" introduces the sight/blindness metaphor that will structure the entire tragedy.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 4: Decision - As Cordelia
    {
      id: 'lear-scene-4-cordelia-decision',
      type: 'decision',
      backgroundImage: 'https://cdn.midjourney.com/01f5b36a-fb16-475a-b909-503bfc882a0b/0_0.png',

      prompt: 'You are Cordelia. How do you respond to your father\'s demand for flattery?',
      context: `Your sisters have spoken empty, exaggerated declarations of love. Your father, the king, now turns to you—his favorite—expecting even greater flattery.

But you see the foolishness of this test. You love him truly, but you will not lie.

What do you say?`,

      choices: [
        {
          id: 'choice-flatter',
          text: 'Give the flattery he wants to secure your inheritance',
          consequence: 'This would be pragmatic—but it would also enable Lear\'s delusion and validate the lie. Cordelia\'s tragedy is that her honesty, though morally right, proves politically disastrous. She chooses truth over expediency.',
          learningPoints: [
            {
              id: 'lp-lear-4-pragmatism',
              content: 'Cordelia\'s refusal to flatter shows that moral integrity can be practically destructive—truth-telling doesn\'t guarantee good outcomes.',
              category: 'literary-context',
            },
          ],
        },
        {
          id: 'choice-nothing',
          text: 'Speak the truth: "Nothing, my lord"',
          consequence: 'This is what Cordelia chooses. Her honesty is admirable but incomprehensible to Lear. She will not participate in the charade. She will not pretend love is measurable in public declarations. This truth costs her everything—and sets the tragedy in motion.',
          learningPoints: [
            {
              id: 'lp-lear-4-honesty',
              content: 'Cordelia\'s "nothing" is both morally courageous and tragically self-destructive—the play refuses to make virtue synonymous with wisdom.',
              category: 'literary-context',
            },
          ],
        },
        {
          id: 'choice-explain',
          text: 'Try to explain that true love cannot be measured in public speeches',
          consequence: 'Cordelia does try this: "I love your Majesty according to my bond, no more nor less." But Lear, in his pride and need for flattery, cannot hear reason. Her reasonable explanation sounds like rejection to him.',
          learningPoints: [
            {
              id: 'lp-lear-4-communication',
              content: 'The tragedy partly stems from failed communication—Cordelia speaks truth, but Lear cannot hear it through his expectations and pride.',
              category: 'literary-context',
            },
          ],
        },
      ],

      learningPoints: [],
    },

    // Scene 5: The parallel plot - Edmund's soliloquy
    {
      id: 'lear-scene-5-edmund',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/b8f08820-f17f-482f-9e5f-cbe796a945b7/0_0.png',
      image: 'https://cdn.midjourney.com/cf556802-4d83-4d82-8ea9-d9e3480e68b0/0_0.png',

      content: `King Lear has a parallel plot that mirrors and reinforces its themes.

The Earl of Gloucester has two sons: Edgar (legitimate) and Edmund (illegitimate, born outside marriage). Edmund resents his "bastard" status—how an accident of birth denies him inheritance and respect.

He speaks directly to the audience:

"Thou, Nature, art my goddess; to thy law my services are bound. Why should I stand in the plague of custom and permit the curiosity of nations to deprive me for that I am some twelve or fourteen moonshines lag of a brother? Why 'bastard'? Wherefore 'base'?"

Edmund is a Machiavellian villain—clever, ruthless, utterly amoral. He will manipulate his father and brother just as Goneril and Regan manipulate Lear.

He forges a letter supposedly from Edgar plotting to kill Gloucester and seize his inheritance. Gloucester, like Lear, believes the deception immediately: "See better, Gloucester," we might say—but he cannot.

The parallels are deliberate:
- Lear misjudges his three daughters (believes Goneril and Regan, rejects Cordelia)
- Gloucester misjudges his two sons (believes Edmund, rejects Edgar)
- Both fathers are blind to truth
- Both will suffer terribly for their blindness
- Both will only "see" when it is too late`,

      learningPoints: [
        {
          id: 'lp-lear-5-parallel',
          content: 'The Gloucester subplot parallels and reinforces Lear\'s story—both fathers blind to truth, both betrayed by those they trust, both realizing too late.',
          category: 'literary-context',
        },
        {
          id: 'lp-lear-5-edmund',
          content: 'Edmund\'s "Nature, art my goddess" rejects civilized morality for pure self-interest—a nihilistic philosophy that will dominate the play\'s world.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 6: Dialogue - Lear and the Fool
    {
      id: 'lear-scene-6-fool',
      type: 'dialogue',
      backgroundImage: 'https://cdn.midjourney.com/996cee1c-8140-4863-9399-7ef4ab277513/0_0.png',

      character: {
        id: 'fool',
        name: 'The Fool',
        portrait: 'https://cdn.midjourney.com/57340b96-9207-4ebb-b098-0939020ae1f6/0_3.png',
        description: 'Lear\'s jester, speaking truth through riddles',
      },

      dialogueTree: {
        id: 'node-1',
        speaker: 'fool',
        text: 'Thou hadst little wit in thy bald crown when thou gavest thy golden one away. If I speak like myself in this, let him be whipped that first finds it so.',

        responses: [
          {
            id: 'response-explain',
            text: 'Explain yourself plainly.',
            nextNodeId: 'node-2',
          },
          {
            id: 'response-riddle',
            text: 'Why speak in riddles?',
            nextNodeId: 'node-3',
          },
        ],

        allNodes: [
          {
            id: 'node-2',
            speaker: 'fool',
            text: 'Thou hast pared thy wit o\' both sides and left nothing in the middle. Now thou art an O without a figure. I am better than thou art now; I am a fool, thou art nothing.',
            responses: [
              {
                id: 'response-nothing',
                text: 'Nothing? How am I nothing?',
                nextNodeId: 'node-4',
              },
            ],
          },
          {
            id: 'node-3',
            speaker: 'fool',
            text: 'Truth\'s a dog that must to kennel; he must be whipped out, when Lady Brach may stand by the fire and stink. All thy other titles thou hast given away; that thou wast born with, thy foolishness, thou hast kept.',
            responses: [
              {
                id: 'response-titles',
                text: 'What do you mean?',
                nextNodeId: 'node-4',
              },
            ],
          },
          {
            id: 'node-4',
            speaker: 'fool',
            text: 'Thou shouldst not have been old till thou hadst been wise. You gave them the rod and put down your own breeches. When you split your crown in the middle and gave away both parts, you bore your ass on your back over the dirt.',
            isEnd: true,
          },
        ],
      },

      learningPoints: [
        {
          id: 'lp-lear-6-fool-truth',
          content: 'The Fool speaks painful truths through jokes and riddles—the only one who dares tell Lear he has been foolish.',
          category: 'literary-context',
        },
        {
          id: 'lp-lear-6-o-nothing',
          content: 'The Fool\'s "O without a figure" image captures Lear\'s state: a zero, nothing, powerless despite retaining the title "king."',
          category: 'literary-context',
        },
        {
          id: 'lp-lear-6-contrast-part1',
          content: 'Unlike Part I\'s comedy where fools provide comic relief, the Fool here speaks tragic truth—wit becomes weapon rather than entertainment.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 7: Goneril and Regan strip Lear of his retinue
    {
      id: 'lear-scene-7-stripping',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/9e7b2fc0-222b-44ad-8127-f3032227c507/0_0.png',
      image: 'https://cdn.midjourney.com/c3790039-b799-47fb-a729-6075867e4f4b/0_0.png',

      content: `Lear has divided his kingdom between Goneril and Regan but retained a hundred knights as his retinue—symbols of his remaining authority and dignity.

Goneril complains: Your knights are riotous, disruptive. You must reduce their number to fifty.

Lear is outraged. He curses her with terrible baroque fury: "Hear, Nature, hear! Dear goddess, hear! Suspend thy purpose if thou didst intend to make this creature fruitful... Create her child of spleen, that it may live and be a thwart disnatured torment to her!"

He flees to Regan, expecting her sympathy.

But Regan sides with Goneril. Fifty knights? That's still too many. Twenty-five would suffice.

Goneril returns. Why twenty-five? Ten would do.

Regan agrees. Why any at all? "What need you five-and-twenty, ten, or five?"

Lear tries to argue necessity: "O, reason not the need! Our basest beggars are in the poorest thing superfluous. Allow not nature more than nature needs, man's life is cheap as beast's."

But they are relentless. He will have no followers. He is nothing but an old man dependent on their charity.

"You think I'll weep," Lear says. "No, I'll not weep. I have full cause of weeping, but this heart shall break into a hundred thousand flaws or ere I'll weep."

He rushes out into the gathering storm, accompanied only by his Fool and the loyal Kent (disguised).

His daughters have systematically stripped him of everything that gave him identity: kingdom, authority, followers, dignity. Now they will see what happens when you reduce a king to nothing.`,

      learningPoints: [
        {
          id: 'lp-lear-7-stripping',
          content: 'Goneril and Regan systematically dismantle Lear\'s identity by removing the social markers of his status—a deliberate psychological destruction.',
          category: 'literary-context',
        },
        {
          id: 'lp-lear-7-need',
          content: 'Lear\'s "reason not the need" speech argues that human dignity requires more than bare survival—we need "superfluous" things to remain human.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 8: Cause-Effect matching
    {
      id: 'lear-scene-8-cause-effect',
      type: 'cause-effect',
      backgroundImage: 'https://cdn.midjourney.com/3d18becd-ac63-43c8-854a-0a67fbf5bf91/0_0.png',

      prompt: 'Match Lear\'s decisions to their cascading consequences',

      pairs: [
        {
          id: 'pair-1',
          cause: 'Lear demands public declarations of love and banishes Cordelia for speaking truth',
          effect: 'He loses the only daughter who truly loved him and gains two who will destroy him',
          explanation: 'By valuing flattery over honesty, Lear rejects genuine love and embraces false devotion, ensuring his destruction.',
        },
        {
          id: 'pair-2',
          cause: 'Lear divides his kingdom between Goneril and Regan',
          effect: 'He relinquishes the power that gave him authority, becoming "nothing" in title and reality',
          explanation: 'Lear tries to retain the title of king while giving away actual power—Renaissance political theory said this was impossible and catastrophic.',
        },
        {
          id: 'pair-3',
          cause: 'Lear banishes Kent for defending Cordelia',
          effect: 'He drives away his most loyal counselor, leaving himself surrounded by flatterers',
          explanation: 'Kent\'s honest counsel could have saved Lear, but pride makes him reject the truth-teller and keep only sycophants.',
        },
        {
          id: 'pair-4',
          cause: 'Lear tries to maintain his retinue as symbol of authority',
          effect: 'Goneril and Regan systematically strip him of followers until he is powerless and alone',
          explanation: 'The daughters methodically remove every marker of Lear\'s former status, reducing him from king to powerless old man.',
        },
      ],

      learningPoints: [
        {
          id: 'lp-lear-8-cascade',
          content: 'Lear\'s initial bad judgment (the love test) cascades into systematic destruction as each mistake compounds the previous ones.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 9: The storm on the heath - madness descends
    {
      id: 'lear-scene-9-storm',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/f17850f2-04ca-48e0-a44a-59d2d4429879/0_0.png',
      image: 'https://cdn.midjourney.com/29a717f1-da94-498d-8759-32be7f014133/0_2.png',

      content: `On a barren heath, in the midst of a terrible storm, Lear's mind begins to crack.

He rages at the weather: "Blow, winds, and crack your cheeks! Rage, blow! You cataracts and hurricanes, spout till you have drenched our steeples, drowned the cocks!"

The storm externalizes his internal chaos. He has been stripped of everything—kingdom, power, retinue, even shelter. Reduced to basics, his mind cannot hold.

The Fool tries to reason with him: "O nuncle, court holy water in a dry house is better than this rainwater out o' door."

But Lear is beyond such practicality. He continues: "Let the great gods that keep this dreadful pudder o'er our heads find out their enemies now. Tremble, thou wretch, that hast within thee undivulged crimes!"

He begins to see connections between himself and the "poor naked wretches" who always endure such storms without the protection his kingship once provided:

"Poor naked wretches, wheresoe'er you are, that bide the pelting of this pitiless storm, how shall your houseless heads and unfed sides, your looped and windowed raggedness defend you from seasons such as these?"

For the first time, Lear thinks about those without power: "O, I have ta'en too little care of this! Take physic, pomp; expose thyself to feel what wretches feel."

Madness is stripping away his illusions. He is beginning to see—but the cost is his sanity.`,

      learningPoints: [
        {
          id: 'lp-lear-9-storm',
          content: 'The storm externalizes Lear\'s internal psychological chaos—Shakespeare makes weather reflect mental state.',
          category: 'literary-context',
        },
        {
          id: 'lp-lear-9-wretches',
          content: 'Lear\'s recognition of "poor naked wretches" shows how losing power paradoxically enables empathy—he sees others only when reduced to their level.',
          category: 'literary-context',
        },
        {
          id: 'lp-lear-9-madness-insight',
          content: 'Lear\'s madness brings terrible insight—he sees truth more clearly as his sanity fails, creating tragic irony.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 10: Quote Attribution - Wisdom from madness
    {
      id: 'lear-scene-10-quotes',
      type: 'quote-attribution',
      backgroundImage: 'https://cdn.midjourney.com/12739936-1de7-4c83-ac6d-318a153147d5/0_0.png',

      prompt: 'Match these profound lines to their speakers—notice how madness speaks truth',

      quotes: [
        {
          id: 'quote-1',
          text: 'Nothing will come of nothing',
          speaker: 'Lear',
          context: 'Warning Cordelia in the love test scene',
          explanation: 'Lear speaks more truly than he knows—his rejection of Cordelia\'s "nothing" will indeed produce nothing but destruction. The line haunts the entire play.',
        },
        {
          id: 'quote-2',
          text: 'I am a man more sinned against than sinning',
          speaker: 'Lear',
          context: 'In the storm, beginning to recognize his own suffering',
          explanation: 'This is both true (his daughters are cruel) and false (he started the tragedy with his pride and folly). The ambiguity is deliberate.',
        },
        {
          id: 'quote-3',
          text: 'As flies to wanton boys are we to the gods; they kill us for their sport',
          speaker: 'Gloucester',
          context: 'After being blinded, reflecting on meaningless suffering',
          explanation: 'Gloucester\'s nihilistic vision suggests the universe is indifferent or actively cruel—one of the play\'s bleakest statements.',
        },
        {
          id: 'quote-4',
          text: 'I stumbled when I saw',
          speaker: 'Gloucester',
          context: 'After being blinded, realizing he sees truth only now',
          explanation: 'The ultimate irony: Gloucester must lose his eyes to "see" that Edmund was evil and Edgar good. Literal blindness brings metaphorical sight.',
        },
        {
          id: 'quote-5',
          text: 'When we are born, we cry that we are come to this great stage of fools',
          speaker: 'Lear',
          context: 'In his madness, philosophizing about human existence',
          explanation: 'Lear\'s mad insight: life is a performance of foolishness, and we\'re wise to weep at birth when we enter this meaningless theater.',
        },
        {
          id: 'quote-6',
          text: 'Thou must be patient. We came crying hither; thou knowest the first time that we smell the air we wawl and cry',
          speaker: 'Lear',
          context: 'Mad on the heath, reflecting on human suffering',
          explanation: 'Birth itself is traumatic—we enter crying because some part of us knows what awaits. A profoundly dark vision of human existence.',
        },
      ],

      learningPoints: [
        {
          id: 'lp-lear-10-mad-wisdom',
          content: 'Shakespeare\'s fools and madmen often speak the deepest truths—sanity may require illusions that madness strips away.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 11: Gloucester's parallel tragedy - literal blindness
    {
      id: 'lear-scene-11-gloucester',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/188da54b-416d-4163-af5a-0bec472f4416/0_0.png',
      image: 'https://cdn.midjourney.com/3fa83e9d-7d9d-41eb-9272-c65d1f23c7d4/0_1.png',

      content: `While Lear goes mad, Gloucester suffers a parallel fate—but his blindness is literal as well as metaphorical.

Edmund has betrayed his father to Cornwall (Regan's husband), falsely accusing Gloucester of treason for helping Lear. Gloucester is captured.

What follows is one of the most horrific scenes in all of Shakespeare.

Cornwall and Regan bind Gloucester to a chair. "Wherefore to Dover?" they demand, wanting information about Lear's escape.

Gloucester refuses to betray Lear: "Because I would not see thy cruel nails pluck out his poor old eyes."

"See't shalt thou never," Cornwall says—and gouges out one of Gloucester's eyes.

Gloucester screams. "Out, vile jelly! Where is thy lustre now?"

Regan urges her husband on: "One side will mock another; the other too."

Cornwall tears out the second eye.

A servant, horrified, tries to stop this atrocity. Cornwall kills him but is mortally wounded in the fight.

Gloucester, now blind, cries out for Edmund to help him.

Regan tells him the truth: "It was he that made the overture of thy treasons to us. Too late he comes too late!"

Gloucester understands at last: "O my follies! Then Edgar was abused. Kind gods, forgive me that, and prosper him!"

"I stumbled when I saw," he reflects. Only now, eyeless, does he see the truth.`,

      learningPoints: [
        {
          id: 'lp-lear-11-literal-blind',
          content: 'Gloucester\'s literal blinding makes explicit the sight/blindness metaphor running through the play—he must lose his eyes to truly "see."',
          category: 'literary-context',
        },
        {
          id: 'lp-lear-11-horror',
          content: 'The blinding scene\'s visceral horror shows how far social order has collapsed—civilized restraints give way to sadistic cruelty.',
          category: 'literary-context',
        },
        {
          id: 'lp-lear-11-parallel',
          content: 'Both Lear (figuratively) and Gloucester (literally) are blinded, both recognize truth too late, both suffer for misjudging their children.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 12: Custom mini-game - Sight and Blindness
    {
      id: 'lear-scene-12-sight-game',
      type: 'custom-mini-game',
      backgroundImage: 'https://cdn.midjourney.com/d31af124-571a-4839-a0dd-a50817501509/0_0.png',

      gameType: 'memory-match',
      config: {
        prompt: 'Match each character to what they could not "see" (understand) and when they finally "saw" truth',
        timeLimit: 120,
        cards: [
          { id: 'card-1a', text: 'Lear', matchId: 'match-1' },
          { id: 'card-1b', text: 'Blind to: Which daughters truly loved him', matchId: 'match-1' },
          { id: 'card-2a', text: 'Lear\'s recognition', matchId: 'match-2' },
          { id: 'card-2b', text: 'Saw truth: After madness, when Cordelia returned (too late)', matchId: 'match-2' },
          { id: 'card-3a', text: 'Gloucester', matchId: 'match-3' },
          { id: 'card-3b', text: 'Blind to: Which son was loyal vs. treacherous', matchId: 'match-3' },
          { id: 'card-4a', text: 'Gloucester\'s recognition', matchId: 'match-4' },
          { id: 'card-4b', text: 'Saw truth: After being literally blinded (too late)', matchId: 'match-4' },
          { id: 'card-5a', text: 'Edmund', matchId: 'match-5' },
          { id: 'card-5b', text: 'Saw truth: "Some good I mean to do" (dying)', matchId: 'match-5' },
        ],
      },

      learningPoints: [
        {
          id: 'lp-lear-12-sight-metaphor',
          content: 'The sight/blindness metaphor structures the entire tragedy—all characters are blind to truth until it\'s too late to matter.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 13: Primary source - Lear's mad speeches as philosophy
    {
      id: 'lear-scene-13-philosophy',
      type: 'primary-source',
      backgroundImage: 'https://cdn.midjourney.com/f6025f7b-4c0e-4c4f-8099-2a3f4a58f986/0_0.png',
      image: 'https://cdn.midjourney.com/32590e63-b8ed-4ab7-a5c8-72cda5ababee/0_1.png',

      prompt: 'Analyze Lear\'s mad speeches as philosophical texts about justice, nature, and humanity',

      source: {
        title: 'Lear\'s Mad Insights: Philosophy from the Abyss',
        type: 'text',
        content: `In his madness, Lear delivers speeches that function as savage philosophical commentaries:

**On Social Hypocrisy:**
"Through tattered clothes small vices do appear; robes and furred gowns hide all. Plate sin with gold, and the strong lance of justice hurtless breaks; arm it in rags, a pigmy's straw does pierce it."

**Translation:** The rich get away with crimes that the poor are punished for. Justice is a sham that protects power.

**On Authority:**
"A dog's obeyed in office... See how yond justice rails upon yond simple thief. Hark in thine ear: change places and, handy-dandy, which is the justice, which is the thief?"

**Translation:** Authority is arbitrary. Give a dog power, and it will be obeyed. Swap the positions of judge and criminal, and who could tell which is which?

**On Human Nature:**
"Thou art the thing itself. Unaccommodated man is no more but such a poor, bare, forked animal as thou art."

**Translation:** Strip away social roles, clothing, and civilization, and humans are just naked animals—nothing special, nothing sacred.

**On Existence:**
"We came crying hither... When we are born, we cry that we are come to this great stage of fools."

**Translation:** Life is inherently tragic. We know this from birth—that's why we cry when we're born.

These are not the ravings of incoherence but the terrible insights of a mind that has been stripped of comforting illusions. Madness, for Lear, brings a kind of dark enlightenment.`,
        citation: 'Shakespeare, King Lear, Acts III-IV',
      },

      questions: [
        {
          id: 'q1',
          question: 'What does Lear\'s mad philosophy suggest about the relationship between sanity and truth?',
          type: 'multiple-choice',
          options: [
            'Sanity is required to see truth clearly',
            'Madness allows one to see truths that sanity\'s illusions hide',
            'Truth and madness are unrelated',
            'Only the sane can understand philosophical concepts',
          ],
          correctAnswer: 'Madness allows one to see truths that sanity\'s illusions hide',
          explanation: 'Shakespeare suggests that maintaining sanity may require comforting illusions about justice, authority, and human nature. When these illusions are stripped away, truth emerges—but at the cost of madness.',
        },
        {
          id: 'q2',
          question: 'How does Lear\'s view of "unaccommodated man" challenge Renaissance ideas about human dignity?',
          type: 'multiple-choice',
          options: [
            'It affirms human dignity by emphasizing our rational souls',
            'It suggests humans are just animals once social roles are removed',
            'It argues that clothing makes us human',
            'It celebrates the nobility of the poor',
          ],
          correctAnswer: 'It suggests humans are just animals once social roles are removed',
          explanation: 'Lear\'s recognition that "unaccommodated man" is just a "poor, bare, forked animal" strips away Renaissance humanism\'s celebration of human dignity—revealing a darker, more nihilistic vision.',
        },
      ],

      learningPoints: [
        {
          id: 'lp-lear-13-mad-philosophy',
          content: 'Lear\'s madness produces savage philosophical insights about justice, authority, and human nature—madness as terrible enlightenment.',
          category: 'literary-context',
        },
        {
          id: 'lp-lear-13-nihilism',
          content: 'King Lear is Shakespeare\'s most nihilistic play, questioning whether meaning, justice, or human dignity exist outside social constructs.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 14: Timeline game - Stages of disintegration
    {
      id: 'lear-scene-14-timeline',
      type: 'timeline-game',
      backgroundImage: 'https://cdn.midjourney.com/3c2fc03a-6df3-4379-92b2-e0d753864693/0_0.png',

      prompt: 'Order the stages of Lear\'s psychological and social disintegration',

      timelineEvents: [
        {
          id: 'event-1',
          title: 'The Love Test',
          year: 1,
          description: 'Lear divides kingdom, banishes Cordelia and Kent',
          image: 'https://cdn.midjourney.com/147a3c04-ea88-4bb7-9de3-2fbbfc79e8c0/0_0.png',
        },
        {
          id: 'event-2',
          title: 'Goneril Reduces His Retinue',
          year: 2,
          description: 'First stripping of authority symbols',
          image: 'https://cdn.midjourney.com/6c9c3d1c-52f4-4abd-b5d9-d49889816f2f/0_2.png',
        },
        {
          id: 'event-3',
          title: 'Regan Joins Goneril',
          year: 3,
          description: 'Both daughters united against him',
          image: 'https://cdn.midjourney.com/03dddba4-7d12-403f-909d-00be34677ee0/0_3.png',
        },
        {
          id: 'event-4',
          title: 'The Storm',
          year: 4,
          description: 'Lear driven onto the heath, madness begins',
          image: 'https://cdn.midjourney.com/e218f118-b163-41bb-9a85-fe96d6a36883/0_1.png',
        },
        {
          id: 'event-5',
          title: 'Recognition of "Poor Naked Wretches"',
          year: 5,
          description: 'First moment of empathy and insight',
          image: 'https://cdn.midjourney.com/b27e8cbb-9899-49e6-bc37-ba9f02ae9bff/0_0.png',
        },
        {
          id: 'event-6',
          title: 'Full Madness',
          year: 6,
          description: 'Lear completely mad, crowned with flowers',
          image: 'https://cdn.midjourney.com/7b353530-9d08-4d2f-b60b-befa3e394a12/0_0.png',
        },
        {
          id: 'event-7',
          title: 'Cordelia Returns',
          year: 7,
          description: 'Brief moment of grace and reconciliation',
          image: 'https://cdn.midjourney.com/a41cd044-d200-4234-a511-1be2ebeb75b4/0_1.png',
        },
        {
          id: 'event-8',
          title: 'Cordelia\'s Death',
          year: 8,
          description: 'Final catastrophe—Lear carries her body',
          image: 'https://cdn.midjourney.com/24381100-8ad4-45b9-9b60-8e54161455f1/0_2.png',
        },
      ],

      successThreshold: 70,

      learningPoints: [
        {
          id: 'lp-lear-14-progression',
          content: 'Lear\'s descent follows a relentless pattern: pride → rejection → stripping → madness → insight → brief hope → ultimate catastrophe.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 15: Cordelia's return - brief grace
    {
      id: 'lear-scene-15-cordelia-returns',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/01dfbc27-f3e6-438a-8cc3-2ef714e5a202/0_0.png',
      image: 'https://cdn.midjourney.com/fa600042-7064-4b35-b5e3-e4a777dcf610/0_1.png',

      content: `Cordelia, now Queen of France, has heard of her father's suffering. She returns with an army to restore him.

Lear is found, mad and crowned with wild flowers and weeds. He does not recognize her at first.

But slowly, tenderly, recognition comes:

"Do not laugh at me," he says, "for, as I am a man, I think this lady to be my child Cordelia."

"And so I am, I am," she replies.

"Be your tears wet?" he asks, touching her face. "Yes, faith. I pray, weep not. If you have poison for me, I will drink it. I know you do not love me, for your sisters have, as I do remember, done me wrong. You have some cause; they have not."

"No cause, no cause," Cordelia says.

This moment of grace is heartbreaking. Lear has learned humility, empathy, and truth—but at such terrible cost. And this reunion will not last.

Edmund (now allied with Goneril and Regan) defeats Cordelia's army. Both Lear and Cordelia are captured.

In prison, Lear imagines a peaceful life with his daughter: "Come, let's away to prison. We two alone will sing like birds in the cage... and take upon's the mystery of things as if we were God's spies."

He has found what matters: love, not power. But he has found it too late.`,

      learningPoints: [
        {
          id: 'lp-lear-15-grace',
          content: 'The Lear-Cordelia reunion offers a brief moment of grace and reconciliation—making the coming catastrophe even more unbearable.',
          category: 'literary-context',
        },
        {
          id: 'lp-lear-15-transformation',
          content: 'Lear\'s transformation from proud king to humble father shows he has learned—but too late to prevent tragedy.',
          category: 'literary-context',
        },
        {
          id: 'lp-lear-15-contrast-part3',
          content: 'This moment foreshadows Part III\'s The Tempest, where reconciliation actually succeeds—here it arrives too late to save anyone.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 16: The final catastrophe
    {
      id: 'lear-scene-16-catastrophe',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/f81a498e-3c7e-497f-b22a-9587ea87f7a2/0_0.png',
      image: 'https://cdn.midjourney.com/318c280a-beee-4b81-8f55-45fc5186e898/0_1.png',

      content: `The evil characters destroy each other.

Goneril poisons Regan (both women desired Edmund) and then kills herself when her treachery is exposed. Edmund is mortally wounded by Edgar in a duel.

With his dying breath, Edmund tries one good act: "Some good I mean to do, despite of mine own nature." He reveals that he has ordered Cordelia's execution in prison.

Messengers rush to prevent it.

Too late.

Lear enters carrying Cordelia's dead body.

"Howl, howl, howl, howl! O, you are men of stones! Had I your tongues and eyes, I'd use them so that heaven's vault should crack."

He cannot comprehend it: "Why should a dog, a horse, a rat have life, and thou no breath at all?"

He dies, still hoping she might live: "Look on her, look, her lips, look there, look there!"

The good Duke of Albany tries to restore order: "We that are young shall never see so much, nor live so long."

But there is no comfort in this ending. No justice. No meaning. Just suffering, death, and the terrible recognition that—as Gloucester said—we are "as flies to wanton boys... to the gods; they kill us for their sport."

Nothing will come of nothing. And Lear has been reduced to nothing, and learned nothing can save us from that fate.`,

      learningPoints: [
        {
          id: 'lp-lear-16-bleakness',
          content: 'King Lear\'s ending offers no redemption, no restoration, no meaning—Shakespeare\'s bleakest tragic vision where even the good die senselessly.',
          category: 'literary-context',
        },
        {
          id: 'lp-lear-16-cordelia',
          content: 'Cordelia\'s death is unbearable precisely because it serves no purpose—she is purely innocent, purely good, and dies anyway.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 17: Decision - Interpreting the ending
    {
      id: 'lear-scene-17-interpretation',
      type: 'decision',
      backgroundImage: 'https://cdn.midjourney.com/33147bf1-546b-4f53-99bd-dc461a7dc25c/0_0.png',

      prompt: 'Is there any redemption in King Lear\'s ending?',
      context: `King Lear is famous for its refusal to offer easy comfort. How do you interpret this devastating conclusion?`,

      choices: [
        {
          id: 'interpretation-redemption',
          text: 'Yes—Lear learned empathy and was reconciled with Cordelia before death',
          consequence: 'This is a minority reading—but it has merit. Lear did transform from proud tyrant to humble father who understands suffering. His journey taught him what matters. But this redemption feels desperately fragile against the weight of meaningless death.',
          learningPoints: [
            {
              id: 'lp-lear-17-fragile',
              content: 'Any redemption in Lear is fragile and personal—Lear learns empathy, but this doesn\'t prevent the catastrophe or restore meaning.',
              category: 'literary-context',
            },
          ],
        },
        {
          id: 'interpretation-nihilism',
          text: 'No—the play shows a universe indifferent to human suffering and morality',
          consequence: 'This is the dominant reading of Lear. The play systematically destroys any comforting belief in justice, meaning, or divine providence. Good and evil both die. Suffering teaches nothing that can save anyone. We are reduced to "nothing."',
          learningPoints: [
            {
              id: 'lp-lear-17-nihilism',
              content: 'King Lear is Shakespeare\'s most nihilistic work, suggesting the universe is indifferent or cruel and meaning exists only in what we create.',
              category: 'literary-context',
            },
          ],
        },
        {
          id: 'interpretation-endurance',
          text: 'The only redemption is human endurance and love in the face of meaninglessness',
          consequence: 'This is perhaps the wisest reading. Lear offers no cosmic justice or divine redemption. But it shows humans capable of love (Cordelia), loyalty (Kent, Edgar), and endurance (Lear, Gloucester) even when these virtues change nothing. Meaning is what we make, not what we find.',
          learningPoints: [
            {
              id: 'lp-lear-17-endurance',
              content: 'If Lear has any redemption, it is existential: we create meaning through love and endurance even when the universe offers none.',
              category: 'literary-context',
            },
          ],
        },
      ],

      learningPoints: [],
    },

    // Scene 18: Conclusion - Part II synthesis and transition to Part III
    {
      id: 'lear-scene-18-conclusion',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/5af4f9b7-7d10-42d4-8692-f34212e62099/0_0.png',

      content: `You have traveled through the darkest regions of Shakespeare's imagination.

**Macbeth** showed us ambition corrupting a good man into a tyrant, guilt making life unbearable, and the psychological price of power gained through evil.

**Othello** revealed how jealousy—that "green-eyed monster"—can be weaponized through manipulation, how perception shapes reality, and how love can be twisted into murder through lies we choose to believe.

**King Lear** stripped everything away—power, sanity, meaning itself—and asked what remains. The answer: perhaps nothing. Perhaps only the love and endurance we create in defiance of meaninglessness.

**Part II's Core Insight:**

The greatest tragedies are not of fate or external enemies but of internal forces: ambition, jealousy, pride. We destroy ourselves from within.

Unlike Part I's comedies where misunderstandings resolve and love triumphs, Part II shows psychological forces that cannot be resolved, only endured or succumbed to.

Unlike the external betrayals we'll explore in Part III (Hamlet, Julius Caesar), Part II's corruptions come from inside—making them more intimate, more psychological, more terrifying.

**But the journey is not complete.**

Part II has shown us internal corruption. Part III will show us external betrayal and—finally—the possibility of reconciliation and restoration.

Where Macbeth, Othello, and Lear end in death and despair, Part III will ask: Can revenge become justice? Can betrayal be forgiven? Can tragedy be transcended?

We have descended into darkness. Part III will ask whether we can emerge—and what wisdom we might bring back from the abyss.

The darkness has taught us much. Now we must learn whether there is any path back to light.`,

      learningPoints: [
        {
          id: 'lp-lear-18-part2-synthesis',
          content: 'Part II explores three internal corruptions—ambition (Macbeth), jealousy (Othello), pride (Lear)—each more psychologically devastating than the last.',
          category: 'literary-context',
        },
        {
          id: 'lp-lear-18-to-part3',
          content: 'Where Part II explored internal corruption, Part III will examine external betrayal—and finally, the possibility of reconciliation that Part II denies.',
          category: 'literary-context',
        },
        {
          id: 'lp-lear-18-trilogy',
          content: 'The Shakespeare trilogy moves from light (Part I comedies) through darkness (Part II psychological tragedies) toward potential restoration (Part III).',
          category: 'literary-context',
        },
      ],

      events: {
        onExit: [{
          type: 'quiz',
          componentId: 'quiz-chapter-3-king-lear',
          condition: { type: 'if-not-completed' },
        }],
      },
    },
  ],

  endQuiz: chapter3Quiz,
};

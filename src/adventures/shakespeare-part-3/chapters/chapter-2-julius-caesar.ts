import type { Chapter } from '../../../types';
import { chapter2Quiz } from '../quizzes/chapter-2-quiz';

export const chapter2JuliusCaesar: Chapter = {
  id: 'chapter-2-julius-caesar',
  title: 'Chapter 2: Julius Caesar - Et Tu, Brute?',
  description: 'When does tyranny justify rebellion? Explore political assassination, the power of rhetoric, and how noble intentions can destroy the very things they seek to protect.',

  learningObjectives: [
    'Analyze the ethics of political assassination—can murder be justified for the "greater good"?',
    'Understand the power of rhetoric and public persuasion (Brutus vs. Antony\'s speeches)',
    'Evaluate Brutus as tragic hero—noble ideals leading to catastrophic consequences',
    'Recognize dramatic irony and prophecy (the Soothsayer, Caesar\'s dreams, omens)',
    'Compare personal loyalty vs. political principle',
  ],

  scenes: [
    // Scene 1: Introduction to Political Tragedy
    {
      id: 'caesar-scene-1-intro',
      type: 'narrative',
      backgroundImage: '[PLACEHOLDER-BG]/roman-forum.png',
      image: '[PLACEHOLDER-IMG]/caesar-intro.png',

      content: `From the personal to the political.

In Hamlet, we witnessed revenge tragedy—a son seeking justice for his murdered father. The stakes were intimate, the conflict psychological.

Now we enter Rome, where the stakes are civilization itself.

Julius Caesar is Shakespeare's exploration of political violence. Is it ever right to kill a leader? What happens when noble ideals meet brutal necessity? Can good men do terrible things for good reasons—and still be good?

The year is 44 BCE. Julius Caesar, the greatest general Rome has ever known, has defeated all rivals and accumulated unprecedented power. He has been declared "dictator perpetuo"—dictator for life.

Some see Caesar as Rome's savior. Others see him as a tyrant who will destroy the Republic their ancestors built.

Among those others is Marcus Brutus: philosopher, senator, and Caesar's closest friend.`,

      learningPoints: [
        {
          id: 'lp-caesar-1-political',
          content: 'Julius Caesar shifts from personal revenge (Hamlet) to political assassination—asking whether violence can serve noble ideals.',
          category: 'literary-context',
        },
        {
          id: 'lp-caesar-1-republic',
          content: 'The Roman Republic was a system of shared power among senators. Caesar\'s accumulation of sole power threatened this 500-year-old tradition.',
          category: 'historical-context',
        },
      ],
    },

    // Scene 2: Map Exploration - Ancient Rome
    {
      id: 'caesar-scene-2-map',
      type: 'map-exploration',
      mapImage: '[PLACEHOLDER-MAP]/rome-map.png',
      backgroundImage: '[PLACEHOLDER-BG]/roman-forum.png',

      prompt: 'Explore the key locations of Ancient Rome where the drama of Julius Caesar unfolds',

      locations: [
        {
          id: 'loc-forum',
          name: 'The Roman Forum',
          x: 50,
          y: 40,
          content: 'The political heart of Rome where citizens gathered, speeches were delivered, and history was made. Here Brutus and Antony will give their famous funeral orations.',
          image: '[PLACEHOLDER-LOC]/forum.png',
        },
        {
          id: 'loc-senate',
          name: 'The Senate House (Curia)',
          x: 55,
          y: 35,
          content: 'Where Rome\'s senators debated law and policy. In Shakespeare\'s play, Caesar is assassinated at the Senate meeting on the Ides of March.',
          image: '[PLACEHOLDER-LOC]/senate.png',
        },
        {
          id: 'loc-capitol',
          name: 'The Capitoline Hill',
          x: 45,
          y: 30,
          content: 'The sacred hill of Rome, home to the Temple of Jupiter. The conspirators briefly take refuge here after the assassination before facing the people.',
          image: '[PLACEHOLDER-LOC]/capitoline.png',
        },
        {
          id: 'loc-caesar-palace',
          name: 'Caesar\'s Palace',
          x: 60,
          y: 50,
          content: 'Where Caesar lives with his wife Calpurnia, who will dream of his death and beg him not to go to the Senate on the fatal day.',
          image: '[PLACEHOLDER-LOC]/caesar-palace.png',
        },
        {
          id: 'loc-brutus-house',
          name: 'Brutus\'s House',
          x: 35,
          y: 55,
          content: 'Where the conspiracy forms. Brutus\'s wife Portia notices his troubled demeanor and demands to know what weighs on his mind.',
          image: '[PLACEHOLDER-LOC]/brutus-house.png',
        },
      ],

      learningPoints: [
        {
          id: 'lp-caesar-2-rome',
          content: 'The geography of Rome shaped its politics—public spaces like the Forum made rhetoric and public opinion central to power.',
          category: 'historical-context',
        },
      ],
    },

    // Scene 3: Dialogue - Cassius tempts Brutus
    {
      id: 'caesar-scene-3-cassius',
      type: 'dialogue',
      backgroundImage: '[PLACEHOLDER-BG]/roman-street.png',

      character: {
        id: 'cassius',
        name: 'Cassius',
        portrait: '[PLACEHOLDER-PORTRAIT]/cassius.png',
        description: 'A senator with "a lean and hungry look," skilled at manipulation and burning with resentment',
      },

      dialogueTree: {
        id: 'cassius-node-1',
        speaker: 'cassius',
        text: 'Brutus, I have watched you of late. You bear too heavy a countenance. What troubles you, noble friend?',

        responses: [
          {
            id: 'response-vexed',
            text: 'I am vexed with passions of some difference, at war within myself.',
            nextNodeId: 'cassius-node-2',
            learningPoints: [
              {
                id: 'lp-caesar-3a-inner-conflict',
                content: 'Brutus\'s internal conflict—love for Caesar versus fear of tyranny—makes him vulnerable to Cassius\'s persuasion.',
                category: 'literary-context',
              },
            ],
          },
          {
            id: 'response-caesar',
            text: 'I fear for Rome. Caesar grows too powerful.',
            nextNodeId: 'cassius-node-3',
            learningPoints: [
              {
                id: 'lp-caesar-3b-political-fear',
                content: 'Brutus\'s political idealism—his love of the Republic—provides the foundation for Cassius\'s argument.',
                category: 'literary-context',
              },
            ],
          },
        ],

        allNodes: [
          {
            id: 'cassius-node-2',
            speaker: 'cassius',
            text: 'I know what vexes you. Caesar. You fear what he becomes. Brutus, you are noble—more noble than Caesar. "Brutus" and "Caesar": why should that name be sounded more than yours? Write them together: yours is as fair a name.',
            responses: [
              {
                id: 'response-listen',
                text: 'Into what dangers would you lead me, Cassius?',
                nextNodeId: 'cassius-node-4',
              },
            ],
          },
          {
            id: 'cassius-node-3',
            speaker: 'cassius',
            text: 'And well you should fear! We petty men walk under his huge legs and peep about to find ourselves dishonorable graves. Men at some time are masters of their fates: the fault, dear Brutus, is not in our stars, but in ourselves, that we are underlings.',
            responses: [
              {
                id: 'response-fate',
                text: 'What would you have me do?',
                nextNodeId: 'cassius-node-4',
              },
            ],
          },
          {
            id: 'cassius-node-4',
            speaker: 'cassius',
            text: 'This Caesar is become a god, and Cassius is a wretched creature that must bend his body if Caesar carelessly but nod on him. He had a fever once in Spain, and when the fit was on him, I did mark how he did shake... And this man is now become a god, and Cassius is a wretched creature. Think upon this, Brutus. Rome deserves better masters.',
            isEnd: true,
          },
        ],
      },

      learningPoints: [
        {
          id: 'lp-caesar-3-persuasion',
          content: 'Cassius uses Brutus\'s nobility against him, appealing to his honor while seeding resentment—a masterclass in political manipulation.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 4: Decision - Political Philosophy
    {
      id: 'caesar-scene-4-decision',
      type: 'decision',
      backgroundImage: '[PLACEHOLDER-BG]/brutus-study.png',
      image: '[PLACEHOLDER-IMG]/brutus-thinking.png',

      prompt: 'A philosophical question: Is political assassination ever justified?',
      context: `Imagine yourself in Brutus\'s position. The facts before you:

Caesar has accumulated more power than any Roman in history. He has been declared dictator for life—a title that effectively ends the Republic your ancestors fought to build.

Caesar has not yet committed any atrocities. He is, by most accounts, a capable and even merciful ruler. But the POTENTIAL for tyranny is there. Once he is crowned king—which seems imminent—there will be no legal way to remove him.

The question is not whether Caesar IS a tyrant. The question is whether to act BEFORE he becomes one.

Some argue that preventive violence is never justified—you cannot punish someone for crimes they haven\'t committed.

Others argue that waiting until tyranny is established means waiting too long—by then, it\'s too late.

What do you believe?`,

      choices: [
        {
          id: 'choice-act-now',
          text: 'Act now—tyranny must be prevented, not just punished',
          consequence: 'This is Brutus\'s choice. He decides that the Republic is more important than his friendship with Caesar. "Not that I loved Caesar less, but that I loved Rome more." But what if he\'s wrong about Caesar\'s intentions? What if this "prevention" creates worse chaos?',
          learningPoints: [
            {
              id: 'lp-caesar-4a-prevention',
              content: 'Preventive violence raises profound moral questions: Can you justly punish potential rather than actual tyranny?',
              category: 'literary-context',
            },
          ],
        },
        {
          id: 'choice-wait',
          text: 'Wait—judge Caesar by his actions, not your fears',
          consequence: 'A principled choice, but one that accepts the risk of tyranny becoming entrenched. If you wait until Caesar IS a tyrant, will you have the power to stop him then? Sometimes, those who wait too long never get a second chance.',
          learningPoints: [
            {
              id: 'lp-caesar-4b-patience',
              content: 'Waiting for proof of tyranny may mean waiting until resistance is impossible—the dilemma of democratic vigilance.',
              category: 'literary-context',
            },
          ],
        },
        {
          id: 'choice-never',
          text: 'Never—political violence only breeds more violence',
          consequence: 'The pacifist choice. But can you live under tyranny? Can you watch as the Republic dies? And is inaction truly neutral, or does it make you complicit in whatever follows?',
          learningPoints: [
            {
              id: 'lp-caesar-4c-pacifism',
              content: 'Refusing political violence is itself a choice with consequences—inaction can enable the very evils one opposes.',
              category: 'literary-context',
            },
          ],
        },
      ],

      learningPoints: [],
    },

    // Scene 5: Omens and Warnings
    {
      id: 'caesar-scene-5-omens',
      type: 'narrative',
      backgroundImage: '[PLACEHOLDER-BG]/caesar-palace.png',
      image: '[PLACEHOLDER-IMG]/omens.png',

      content: `The night before the Ides of March is filled with portents.

A terrible storm rages over Rome—unnatural, apocalyptic. Lions roam the Capitol. An owl shrieks at noon. A slave's hand burns without consuming. Dead men walk the streets.

"Beware the Ides of March," a Soothsayer had warned Caesar earlier. Caesar dismissed him: "He is a dreamer; let us leave him."

Now, on the morning of March 15th, Caesar's wife Calpurnia begs him not to go to the Senate. She has dreamed of his statue spouting blood while smiling Romans bathed their hands in it.

Caesar hesitates. "Cowards die many times before their deaths," he says. "The valiant never taste of death but once."

But Decius Brutus, one of the conspirators, arrives with a cunning reinterpretation: the dream means Romans will draw strength from Caesar! The Senate plans to offer him a crown today—if he stays home, they may change their minds.

Caesar's pride overcomes his caution. He goes to the Senate.

The audience knows what Caesar does not: every warning was true.`,

      inlineAnnotations: [
        {
          id: 'annotation-ides',
          text: 'Ides of March',
          tooltip: {
            title: 'The Ides',
            content: 'In the Roman calendar, the "Ides" fell on the 15th of March, May, July, and October, and the 13th of other months. It was simply a date—until Caesar\'s assassination made "the Ides of March" synonymous with doom.',
            category: 'historical-context',
          },
        },
      ],

      learningPoints: [
        {
          id: 'lp-caesar-5-omens',
          content: 'Shakespeare uses omens and prophecy to create dramatic irony—the audience knows what the characters ignore, heightening tragic tension.',
          category: 'literary-context',
        },
        {
          id: 'lp-caesar-5-hubris',
          content: 'Caesar\'s dismissal of warnings reveals hubris—the pride that precedes destruction in classical tragedy.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 6: Timeline Game - Events
    {
      id: 'caesar-scene-6-timeline',
      type: 'timeline-game',
      backgroundImage: '[PLACEHOLDER-BG]/scroll-background.png',
      image: '[PLACEHOLDER-IMG]/caesar-timeline.png',

      prompt: 'Arrange the key events of Julius Caesar in chronological order',

      timelineEvents: [
        {
          id: 'event-1',
          title: 'Cassius Recruits Brutus',
          year: 1,
          description: 'Cassius plays on Brutus\'s idealism and fear of tyranny to bring him into the conspiracy against Caesar.',
          image: '[PLACEHOLDER-EVENT]/cassius-brutus.png',
        },
        {
          id: 'event-2',
          title: 'The Ides of March',
          year: 2,
          description: 'Despite warnings from the Soothsayer and Calpurnia\'s dreams, Caesar goes to the Senate and is assassinated.',
          image: '[PLACEHOLDER-EVENT]/assassination.png',
        },
        {
          id: 'event-3',
          title: 'The Funeral Orations',
          year: 3,
          description: 'Brutus speaks first with logic and honor; Antony follows with emotional manipulation, turning the crowd against the conspirators.',
          image: '[PLACEHOLDER-EVENT]/funeral-speeches.png',
        },
        {
          id: 'event-4',
          title: 'Civil War Begins',
          year: 4,
          description: 'Rome descends into civil war as Antony and Octavian pursue the conspirators, who flee to raise armies.',
          image: '[PLACEHOLDER-EVENT]/civil-war.png',
        },
        {
          id: 'event-5',
          title: 'Battle of Philippi',
          year: 5,
          description: 'The armies meet in Greece. Cassius dies by suicide after a misunderstanding; Brutus follows after defeat.',
          image: '[PLACEHOLDER-EVENT]/philippi.png',
        },
      ],

      successThreshold: 80,

      learningPoints: [
        {
          id: 'lp-caesar-6-arc',
          content: 'The play\'s structure moves from conspiracy to assassination to rhetoric to war to death—the inevitable cascade of political violence.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 7: The Assassination
    {
      id: 'caesar-scene-7-assassination',
      type: 'narrative',
      backgroundImage: '[PLACEHOLDER-BG]/senate-interior.png',
      image: '[PLACEHOLDER-IMG]/assassination.png',

      content: `The Senate convenes. Caesar takes his seat.

The conspirators approach under the guise of petitions. Metellus Cimber kneels, asking Caesar to repeal his brother\'s banishment. Caesar refuses—he is "constant as the northern star," unmoved by appeals.

This is the signal.

Casca strikes first. "Speak, hands, for me!" His dagger finds Caesar\'s neck. The others press in—Cassius, Cinna, Decius, Metellus—each adding their blade.

Caesar fights back, then sees a face he knows.

"Et tu, Brute?"

Even you, Brutus?

The man Caesar loved like a son drives his dagger home.

"Then fall, Caesar."

He dies at the base of Pompey\'s statue—his former rival. Twenty-three stab wounds.

The conspirators stand over the body, their hands red with blood. Brutus calls them to bathe their arms in Caesar\'s blood up to the elbows—to show they are liberators, not murderers.

"Liberty! Freedom! Tyranny is dead!"

But looking at the blood, at the body, at what they have done—can they truly believe it was noble?`,

      learningPoints: [
        {
          id: 'lp-caesar-7-et-tu',
          content: '"Et tu, Brute?" captures the personal tragedy within the political act—Caesar dies not just from daggers but from betrayed friendship.',
          category: 'literary-context',
        },
        {
          id: 'lp-caesar-7-blood',
          content: 'The bathing in blood reveals the contradiction: the conspirators claim nobility while literally covering themselves in murder.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 8: Primary Source - Brutus's Speech
    {
      id: 'caesar-scene-8-brutus-speech',
      type: 'primary-source',
      backgroundImage: '[PLACEHOLDER-BG]/roman-forum.png',
      image: '[PLACEHOLDER-IMG]/brutus-speech.png',

      prompt: 'Analyze Brutus\'s funeral speech—a model of logical rhetoric',

      source: {
        title: 'Brutus\'s Funeral Oration (Act 3, Scene 2)',
        type: 'text',
        content: `BRUTUS:
Romans, countrymen, and lovers! Hear me for my cause, and be silent that you may hear. Believe me for mine honor, and have respect to mine honor, that you may believe. Censure me in your wisdom, and awake your senses, that you may the better judge.

If there be any in this assembly, any dear friend of Caesar's, to him I say that Brutus' love to Caesar was no less than his. If then that friend demand why Brutus rose against Caesar, this is my answer:

Not that I loved Caesar less, but that I loved Rome more.

Had you rather Caesar were living, and die all slaves, than that Caesar were dead, to live all freemen? As Caesar loved me, I weep for him; as he was fortunate, I rejoice at it; as he was valiant, I honor him; but—as he was ambitious, I slew him.

There is tears for his love; joy for his fortune; honor for his valor; and death for his ambition.

Who is here so base that would be a bondman? If any, speak, for him have I offended. Who is here so rude that would not be a Roman? If any, speak, for him have I offended. Who is here so vile that will not love his country? If any, speak, for him have I offended. I pause for a reply.

ALL: None, Brutus, none!`,
        citation: 'Julius Caesar, Act 3, Scene 2',
      },

      questions: [
        {
          id: 'q-brutus-1',
          question: 'What is the logical structure of Brutus\'s argument?',
          type: 'multiple-choice',
          options: [
            'Emotional appeals to patriotism without logical reasoning',
            'A balanced equation: love for Caesar versus greater love for Rome, requiring Caesar\'s death',
            'A personal attack on Caesar\'s character without evidence',
            'An apology for what he admits was wrong',
          ],
          correctAnswer: 'A balanced equation: love for Caesar versus greater love for Rome, requiring Caesar\'s death',
          explanation: 'Brutus structures his speech around balance: he loved Caesar BUT loved Rome more. His rhetoric is logical, structured, and appeals to reason rather than emotion.',
        },
        {
          id: 'q-brutus-2',
          question: 'What is the key weakness of Brutus\'s speech?',
          type: 'multiple-choice',
          options: [
            'It is too long and loses the crowd\'s attention',
            'He provides no evidence for Caesar\'s "ambition" and assumes the crowd will trust his honor',
            'He admits he killed Caesar for personal reasons',
            'He attacks Antony and makes an enemy unnecessarily',
          ],
          correctAnswer: 'He provides no evidence for Caesar\'s "ambition" and assumes the crowd will trust his honor',
          explanation: 'Brutus assumes his reputation for honor is enough. He never PROVES Caesar was ambitious—he simply asserts it. This leaves his argument vulnerable to someone who WILL provide evidence.',
        },
      ],

      learningPoints: [
        {
          id: 'lp-caesar-8-brutus-rhetoric',
          content: 'Brutus\'s speech is prose, not verse—logical, balanced, appealing to reason. It works temporarily but lacks emotional depth.',
          category: 'literary-context',
        },
        {
          id: 'lp-caesar-8-honor',
          content: 'Brutus relies on ethos (his character) rather than pathos (emotion) or logos (evidence)—a strategy that works only as long as honor is trusted.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 9: Primary Source - Antony's Speech
    {
      id: 'caesar-scene-9-antony-speech',
      type: 'primary-source',
      backgroundImage: '[PLACEHOLDER-BG]/roman-forum.png',
      image: '[PLACEHOLDER-IMG]/antony-speech.png',

      prompt: 'Analyze Mark Antony\'s funeral speech—a masterpiece of emotional manipulation',

      source: {
        title: 'Antony\'s Funeral Oration (Act 3, Scene 2)',
        type: 'text',
        content: `ANTONY:
Friends, Romans, countrymen, lend me your ears!
I come to bury Caesar, not to praise him.
The evil that men do lives after them;
The good is oft interrèd with their bones.
So let it be with Caesar. The noble Brutus
Hath told you Caesar was ambitious.
If it were so, it was a grievous fault,
And grievously hath Caesar answered it.
Here, under leave of Brutus and the rest—
For Brutus is an honorable man,
So are they all, all honorable men—
Come I to speak in Caesar's funeral.

He was my friend, faithful and just to me.
But Brutus says he was ambitious,
And Brutus is an honorable man.

He hath brought many captives home to Rome,
Whose ransoms did the general coffers fill.
Did this in Caesar seem ambitious?
When that the poor have cried, Caesar hath wept.
Ambition should be made of sterner stuff.
Yet Brutus says he was ambitious,
And Brutus is an honorable man.

You all did see that on the Lupercal
I thrice presented him a kingly crown,
Which he did thrice refuse. Was this ambition?
Yet Brutus says he was ambitious,
And sure he is an honorable man.

...If you have tears, prepare to shed them now.
[Shows Caesar's bloody cloak]
Look, in this place ran Cassius' dagger through.
See what a rent the envious Casca made.
Through this the well-belovèd Brutus stabbed...

This was the most unkindest cut of all!`,
        citation: 'Julius Caesar, Act 3, Scene 2',
      },

      questions: [
        {
          id: 'q-antony-1',
          question: 'How does Antony undermine Brutus without directly attacking him?',
          type: 'multiple-choice',
          options: [
            'By presenting evidence that Caesar was not ambitious, making "honorable" sound ironic through repetition',
            'By calling Brutus a liar and traitor directly',
            'By appealing to the gods to punish Brutus',
            'By revealing secret documents proving Brutus\'s corruption',
          ],
          correctAnswer: 'By presenting evidence that Caesar was not ambitious, making "honorable" sound ironic through repetition',
          explanation: 'Each time Antony says "Brutus is an honorable man," after showing evidence against his claims, the phrase becomes more ironic until "honorable" means "liar."',
        },
        {
          id: 'q-antony-2',
          question: 'What rhetorical technique does Antony use when he shows Caesar\'s bloody cloak?',
          type: 'multiple-choice',
          options: [
            'Logos (logical argument based on evidence)',
            'Ethos (appeal to his own credibility)',
            'Pathos (emotional appeal through vivid, visceral imagery)',
            'Kairos (appeal to timing and urgency)',
          ],
          correctAnswer: 'Pathos (emotional appeal through vivid, visceral imagery)',
          explanation: 'By making the murder VISIBLE through Caesar\'s bloody, torn cloak, Antony transforms abstract "assassination" into visceral violence that triggers emotional outrage.',
        },
      ],

      learningPoints: [
        {
          id: 'lp-caesar-9-antony-rhetoric',
          content: 'Antony\'s speech is verse—poetic, emotional, building through repetition and irony. Where Brutus assumed trust, Antony earns conviction.',
          category: 'literary-context',
        },
        {
          id: 'lp-caesar-9-manipulation',
          content: 'Antony never directly accuses Brutus—he simply provides evidence and lets the crowd draw conclusions, making the reversal feel like THEIR idea.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 10: Cause and Effect
    {
      id: 'caesar-scene-10-cause-effect',
      type: 'cause-effect',
      backgroundImage: '[PLACEHOLDER-BG]/roman-street.png',
      image: '[PLACEHOLDER-IMG]/cause-effect-caesar.png',

      prompt: 'Match each action to its consequence in the chain of tragedy',

      pairs: [
        {
          id: 'pair-1',
          cause: 'Brutus joins the conspiracy based on fear of what Caesar MIGHT become',
          effect: 'He acts on speculation rather than evidence, making his moral position weak',
          explanation: 'Acting on potential future crimes rather than actual ones undermines the moral foundation of the assassination.',
        },
        {
          id: 'pair-2',
          cause: 'Brutus allows Antony to speak at Caesar\'s funeral',
          effect: 'Antony turns the crowd against the conspirators with superior rhetoric',
          explanation: 'Brutus\'s faith in reason over emotion proves disastrous when Antony appeals to the crowd\'s passions.',
        },
        {
          id: 'pair-3',
          cause: 'The assassination destabilizes Rome without a clear plan for what comes next',
          effect: 'Civil war erupts, causing far more death than Caesar ever did',
          explanation: 'The conspirators thought removing Caesar would restore the Republic, but hadn\'t planned for the power vacuum.',
        },
        {
          id: 'pair-4',
          cause: 'Cassius dies by suicide after mistakenly thinking the battle is lost',
          effect: 'Brutus loses his most capable ally and the battle turns against him',
          explanation: 'Cassius\'s impulsive despair mirrors the larger tragedy—acting without full information leads to catastrophe.',
        },
        {
          id: 'pair-5',
          cause: 'The conspirators kill Caesar to save the Republic',
          effect: 'Their actions ultimately end the Republic forever under Octavian/Augustus',
          explanation: 'The supreme irony: political murder meant to preserve freedom destroys the very institution it sought to protect.',
        },
      ],

      learningPoints: [
        {
          id: 'lp-caesar-10-irony',
          content: 'The supreme irony: the assassination meant to SAVE the Republic destroys it. Octavian (Augustus) becomes the first Emperor.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 11: Spectrum Game - Interpretations
    {
      id: 'caesar-scene-11-spectrum',
      type: 'custom-mini-game',
      backgroundImage: '[PLACEHOLDER-BG]/roman-forum.png',

      gameType: 'spectrum',
      config: {
        title: 'Judging the Characters',
        instructions: 'Position yourself on each spectrum to explore your interpretation of the play\'s central questions.',
        questions: [
          {
            id: 'spectrum-1',
            question: 'Was killing Caesar justified?',
            leftLabel: 'Yes - Tyranny Prevented',
            rightLabel: 'No - Murder Is Never Justified',
            explanation: 'The play presents both views without fully endorsing either. Caesar had not yet committed tyrannical acts, but his potential was real.',
          },
          {
            id: 'spectrum-2',
            question: 'Is Brutus noble or foolish?',
            leftLabel: 'Noble Idealist',
            rightLabel: 'Naive Fool',
            explanation: 'Brutus acts from genuine principle—but his idealism blinds him to political reality and human nature.',
          },
          {
            id: 'spectrum-3',
            question: 'Is Antony a loyal friend or an opportunist?',
            leftLabel: 'Loyal Friend Seeking Justice',
            rightLabel: 'Opportunist Using Caesar\'s Death',
            explanation: 'Antony loved Caesar—but he also gains enormous power from the chaos. Both motivations can coexist.',
          },
          {
            id: 'spectrum-4',
            question: 'Should Rome have been a Republic or an Empire?',
            leftLabel: 'Republic (Shared Power)',
            rightLabel: 'Empire (Strong Leader)',
            explanation: 'The Republic had grown corrupt and dysfunctional; the Empire brought stability but ended freedom. History offers no easy answer.',
          },
        ],
      },

      learningPoints: [
        {
          id: 'lp-caesar-11-ambiguity',
          content: 'Shakespeare presents the conflict without resolving it—both sides have valid arguments, and both sides cause destruction.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 12: Quote Attribution
    {
      id: 'caesar-scene-12-quotes',
      type: 'quote-attribution',
      backgroundImage: '[PLACEHOLDER-BG]/scroll-background.png',

      prompt: 'Match these famous Julius Caesar quotes to their speakers and contexts',

      quotes: [
        {
          id: 'quote-1',
          text: 'Beware the Ides of March.',
          speaker: 'Soothsayer',
          context: 'A prophetic warning Caesar dismisses as the ravings of a dreamer.',
          explanation: 'The phrase has become a general warning about impending danger, especially ignored warnings.',
        },
        {
          id: 'quote-2',
          text: 'The fault, dear Brutus, is not in our stars, but in ourselves, that we are underlings.',
          speaker: 'Cassius',
          context: 'Cassius argues that men create their own fate through action or inaction.',
          explanation: 'A rejection of fatalism—we are responsible for our circumstances, not destiny. Deeply ironic given how fate seems to punish the conspirators.',
        },
        {
          id: 'quote-3',
          text: 'Et tu, Brute?',
          speaker: 'Caesar',
          context: 'Caesar\'s last words upon seeing his friend among the assassins.',
          explanation: '"And you, Brutus?" has become the ultimate expression of betrayal by a trusted friend.',
        },
        {
          id: 'quote-4',
          text: 'Cry havoc, and let slip the dogs of war!',
          speaker: 'Antony',
          context: 'After the assassination, Antony predicts the civil war that will follow.',
          explanation: '"Havoc" was a military command for soldiers to plunder and destroy. The phrase now means unleashing destruction.',
        },
        {
          id: 'quote-5',
          text: 'This was the noblest Roman of them all.',
          speaker: 'Antony',
          context: 'Antony\'s tribute to Brutus after his death—acknowledging his genuine idealism.',
          explanation: 'Even Antony recognizes Brutus acted from principle, not envy like the other conspirators. A complex moral verdict.',
        },
      ],

      learningPoints: [
        {
          id: 'lp-caesar-12-language',
          content: 'Julius Caesar has given English many famous phrases—Shakespeare\'s political drama shaped how we talk about power, betrayal, and fate.',
          category: 'cultural-context',
        },
      ],
    },

    // Scene 13: Tragic End
    {
      id: 'caesar-scene-13-end',
      type: 'narrative',
      backgroundImage: '[PLACEHOLDER-BG]/battlefield-philippi.png',
      image: '[PLACEHOLDER-IMG]/brutus-death.png',

      content: `At Philippi, the forces meet.

Cassius, believing wrongly that his side has lost, orders his servant to kill him. "Caesar, thou art revenged," he says, "even with the sword that killed thee."

Brutus finds his friend's body and mourns. "The last of all the Romans, fare thee well!"

The battle turns against the conspirators. Brutus, defeated, asks his servant to hold his sword while he runs upon it.

"Caesar, now be still. I killed not thee with half so good a will."

Brutus dies by his own hand—the same hand that killed Caesar.

Antony, viewing Brutus's body, delivers the final verdict:

"This was the noblest Roman of them all.
All the conspirators save only he
Did that they did in envy of great Caesar.
He only in a general honest thought
And common good to all made one of them."

Even Caesar's avenger admits that Brutus—alone among the conspirators—acted from genuine principle, not jealousy or ambition.

But noble intentions could not prevent catastrophe. The Republic they killed to save dies forever. From the chaos will rise Augustus—Rome's first Emperor.

The men who killed to prevent tyranny created it instead.`,

      learningPoints: [
        {
          id: 'lp-caesar-13-verdict',
          content: 'Antony\'s eulogy for Brutus captures the tragedy\'s ambiguity: Brutus was genuinely noble, yet his noble act caused catastrophe.',
          category: 'literary-context',
        },
        {
          id: 'lp-caesar-13-empire',
          content: 'The historical irony: the assassination meant to save the Republic ultimately ended it. Augustus became the first Roman Emperor.',
          category: 'historical-context',
        },
      ],
    },

    // Scene 14: Conclusion with Quiz Trigger
    {
      id: 'caesar-scene-14-conclusion',
      type: 'narrative',
      backgroundImage: '[PLACEHOLDER-BG]/roman-ruins.png',
      image: '[PLACEHOLDER-IMG]/caesar-conclusion.png',

      content: `What can we learn from Julius Caesar?

Perhaps this: Good intentions are not enough. Political violence, even when motivated by principle, unleashes forces that cannot be controlled.

Brutus was noble, but nobility does not equal wisdom. He killed his friend to save a Republic—and destroyed the Republic by doing so. He trusted that assassination would solve Rome's problems—but assassination created worse ones.

The play asks questions that remain urgent today:
- When, if ever, is political violence justified?
- Can the "greater good" justify terrible means?
- What happens when honorable people disagree about justice?
- How do we preserve freedom without destroying order?

Shakespeare gives us no easy answers. Antony, who champions Caesar, is a manipulator. Brutus, who kills for Rome, destroys Rome. Caesar, the potential tyrant, was also a beloved and capable leader.

In the next chapter, we will see a different response to injustice. Where Hamlet philosophized and Brutus acted, Prospero will choose a third path: forgiveness.

But first, let us see how well you've understood the tragedy of noble intentions meeting political reality.`,

      learningPoints: [
        {
          id: 'lp-caesar-14-lesson',
          content: 'Julius Caesar warns that political violence, however nobly motivated, tends to produce consequences opposite to those intended.',
          category: 'literary-context',
        },
        {
          id: 'lp-caesar-14-questions',
          content: 'The play\'s enduring power comes from asking questions about political violence that remain unresolved in any era.',
          category: 'literary-context',
        },
      ],

      events: {
        onExit: [{
          type: 'quiz',
          componentId: 'quiz-chapter-2-caesar',
          condition: { type: 'if-not-completed' },
        }],
      },
    },
  ],

  endQuiz: chapter2Quiz,
};

import type { Chapter } from '../../../types';
import { chapter1Quiz } from '../quizzes/chapter-1-quiz';

export const chapter1Hamlet: Chapter = {
  id: 'chapter-1-hamlet',
  title: 'Chapter 1: Hamlet - The Melancholy Prince',
  description: 'Enter the world of philosophical tragedy where revenge demands action, but consciousness demands reflection. Why does Hamlet delay?',

  learningObjectives: [
    'Identify the characteristics of revenge tragedy and how Hamlet subverts the genre',
    'Analyze Hamlet\'s philosophical paralysis and the "To be or not to be" soliloquy',
    'Understand the theme of appearance vs. reality (madness, deception, truth)',
    'Evaluate whether Hamlet\'s delay is weakness, wisdom, or moral complexity',
    'Recognize how Hamlet examines consciousness itself - meta-theatrical awareness',
  ],

  scenes: [
    // Scene 1: Introduction to Part III and Hamlet
    {
      id: 'hamlet-scene-1-intro',
      type: 'narrative',
      backgroundImage: '[PLACEHOLDER-BG]/elsinore-exterior.png',
      image: '[PLACEHOLDER-IMG]/hamlet-intro.png',

      content: `Welcome to the final chapter of our Shakespeare journey.

In Part I, we explored love, identity, and the power of disguise through Shakespeare's comedies. In Part II, we descended into darkness—ambition consuming Macbeth, jealousy destroying Othello, pride stripping Lear of everything.

Now, in Part III, we examine how characters respond to external wrongs. When murder, betrayal, and usurpation demand response, what should we do? How do we act justly in an unjust world?

We begin with Hamlet—Shakespeare's most philosophical tragedy. Unlike Macbeth, whose corruption came from within, Hamlet faces an external evil: his father murdered, his throne stolen, his mother married to the killer.

The question is not whether something is rotten in Denmark. Something clearly is.

The question is: What will Hamlet do about it?`,

      learningPoints: [
        {
          id: 'lp-hamlet-1-part3-intro',
          content: 'Part III shifts from internal corruption (Part II) to external wrongs that demand moral response—a different kind of tragic dilemma.',
          category: 'literary-context',
        },
        {
          id: 'lp-hamlet-1-external-wrong',
          content: 'Hamlet\'s tragedy begins with a wrong done TO him, unlike Macbeth whose tragedy stems from his own ambition.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 2: Primary Source - Ghost's Revelation
    {
      id: 'hamlet-scene-2-ghost',
      type: 'primary-source',
      backgroundImage: '[PLACEHOLDER-BG]/ramparts-night.png',
      image: '[PLACEHOLDER-IMG]/ghost.png',

      prompt: 'Examine the Ghost\'s revelation that sets the tragedy in motion',

      source: {
        title: 'The Ghost\'s Command (Act 1, Scene 5)',
        type: 'text',
        content: `GHOST:
I am thy father's spirit,
Doomed for a certain term to walk the night,
And for the day confined to fast in fires,
Till the foul crimes done in my days of nature
Are burnt and purged away...

List, list, O, list!
If thou didst ever thy dear father love—

HAMLET: O God!

GHOST:
Revenge his foul and most unnatural murder.

HAMLET: Murder!

GHOST:
Murder most foul, as in the best it is,
But this most foul, strange, and unnatural.

...The serpent that did sting thy father's life
Now wears his crown.

HAMLET: O my prophetic soul! My uncle!

GHOST:
Ay, that incestuous, that adulterate beast,
With witchcraft of his wit, with traitorous gifts—
O wicked wit and gifts, that have the power
So to seduce!—won to his shameful lust
The will of my most seeming-virtuous queen...

If thou hast nature in thee, bear it not.
Let not the royal bed of Denmark be
A couch for luxury and damnèd incest.
But, howsoever thou pursuest this act,
Taint not thy mind, nor let thy soul contrive
Against thy mother aught. Leave her to heaven.

Adieu, adieu, adieu. Remember me.`,
        citation: 'Hamlet, Act 1, Scene 5 (c. 1600)',
      },

      questions: [
        {
          id: 'q-ghost-1',
          question: 'What command does the Ghost give Hamlet, and what restriction does he add?',
          type: 'multiple-choice',
          options: [
            'Kill Claudius immediately, and also punish Gertrude for her betrayal',
            'Revenge the murder, but do not harm his mother—leave her to heaven',
            'Expose Claudius publicly and let the law handle justice',
            'Forgive Claudius but refuse to acknowledge him as king',
          ],
          correctAnswer: 'Revenge the murder, but do not harm his mother—leave her to heaven',
          explanation: 'The Ghost demands revenge against Claudius but explicitly protects Gertrude: "Taint not thy mind, nor let thy soul contrive / Against thy mother aught. Leave her to heaven."',
        },
        {
          id: 'q-ghost-2',
          question: 'What makes the Ghost\'s command morally complicated for Hamlet?',
          type: 'multiple-choice',
          options: [
            'Hamlet doesn\'t believe the Ghost is real',
            'The Ghost could be a demon using his father\'s form to damn Hamlet\'s soul through murder',
            'Hamlet has no way to access Claudius',
            'The Ghost doesn\'t provide enough evidence of the crime',
          ],
          correctAnswer: 'The Ghost could be a demon using his father\'s form to damn Hamlet\'s soul through murder',
          explanation: 'In Protestant theology of Shakespeare\'s time, ghosts could be demons in disguise. Hamlet must verify the Ghost\'s claims before committing murder—which might be either justice or damnation.',
        },
      ],

      learningPoints: [
        {
          id: 'lp-hamlet-2-ghost-command',
          content: 'The Ghost\'s command creates Hamlet\'s central dilemma: revenge demands action, but conscience demands certainty that the Ghost speaks truth.',
          category: 'literary-context',
        },
        {
          id: 'lp-hamlet-2-theology',
          content: 'Renaissance audiences debated whether ghosts were spirits of the dead or demons in disguise—a theological uncertainty Shakespeare deliberately exploits.',
          category: 'historical-context',
        },
      ],
    },

    // Scene 3: Decision - Trust the Ghost?
    {
      id: 'hamlet-scene-3-decision',
      type: 'decision',
      backgroundImage: '[PLACEHOLDER-BG]/elsinore-great-hall.png',
      image: '[PLACEHOLDER-IMG]/hamlet-thinking.png',

      prompt: 'If you were Hamlet, how would you respond to the Ghost\'s command?',
      context: `You have just spoken with the Ghost of your father. He claims your uncle Claudius murdered him—poured poison in his ear while he slept in the garden—then seized the throne and married your mother.

The Ghost demands revenge. But you are a scholar, trained at Wittenberg, educated to think critically. You know that ghosts could be demons in disguise, sent to damn your soul by tricking you into murder.

If the Ghost speaks true, Claudius is a monster who deserves death. But if the Ghost is a demon, killing Claudius would make YOU the murderer, and you would be damned.

How do you proceed?`,

      choices: [
        {
          id: 'choice-act-immediately',
          text: 'Act immediately—trust the Ghost and kill Claudius',
          consequence: 'The simpler choice, but perhaps the more dangerous one. If the Ghost is false, you have committed murder. If true, you achieve swift justice—but without proof, history may remember you as the villain.',
          learningPoints: [
            {
              id: 'lp-hamlet-3a-swift-action',
              content: 'Immediate action without verification risks committing the very evil you seek to punish—a core tension of revenge tragedy.',
              category: 'literary-context',
            },
          ],
        },
        {
          id: 'choice-investigate',
          text: 'Investigate first—find proof before acting',
          consequence: 'This is Hamlet\'s actual choice. He decides to "put an antic disposition on" (feign madness) to investigate while appearing harmless. He will use a play—"The Mousetrap"—to test Claudius\'s guilt. But investigation takes time, and delay has consequences...',
          learningPoints: [
            {
              id: 'lp-hamlet-3b-investigation',
              content: 'Hamlet\'s decision to verify before acting distinguishes him from simple revenge heroes—but his delay becomes its own tragic force.',
              category: 'literary-context',
            },
          ],
        },
        {
          id: 'choice-refuse',
          text: 'Refuse revenge entirely—violence only breeds more violence',
          consequence: 'A morally appealing choice, but one that leaves a murderer on the throne, married to your mother, ruling your kingdom. Can you live with that? Can Denmark survive under such a king?',
          learningPoints: [
            {
              id: 'lp-hamlet-3c-pacifism',
              content: 'The choice not to act is still a choice with consequences—inaction can be as morally fraught as action.',
              category: 'literary-context',
            },
          ],
        },
      ],

      learningPoints: [],
    },

    // Scene 4: Hamlet's Dilemma - Philosophy vs. Action
    {
      id: 'hamlet-scene-4-dilemma',
      type: 'narrative',
      backgroundImage: '[PLACEHOLDER-BG]/elsinore-great-hall.png',
      image: '[PLACEHOLDER-IMG]/hamlet-contemplating.png',

      content: `Hamlet chooses to investigate. He will "put an antic disposition on"—feign madness—to buy time and throw off suspicion while he seeks proof of Claudius's guilt.

But here lies the heart of Hamlet's tragedy: he is not a simple revenge hero. He is a thinker, a scholar, a philosopher. Where Laertes (whose father Hamlet will later kill) would act instantly, Hamlet thinks.

And thinks. And thinks.

"The time is out of joint," Hamlet says. "O cursèd spite, / That ever I was born to set it right!"

He doesn't want this burden. He didn't ask for it. But it has fallen to him nonetheless.

In a conventional revenge tragedy, the hero receives the call for revenge and then pursues it relentlessly until the villain is dead. But Hamlet is not conventional. He is the first character in literature to seem genuinely, recognizably human in his psychological complexity.

He delays. He questions. He suffers. And in that delay, everything spirals toward catastrophe.`,

      learningPoints: [
        {
          id: 'lp-hamlet-4-subversion',
          content: 'Hamlet subverts the revenge tragedy genre by making delay—not action—the center of the drama.',
          category: 'literary-context',
        },
        {
          id: 'lp-hamlet-4-modern-hero',
          content: 'Hamlet is often called the first "modern" character in literature—psychologically complex, self-aware, and paralyzed by consciousness itself.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 5: Primary Source - "To be or not to be"
    {
      id: 'hamlet-scene-5-soliloquy',
      type: 'primary-source',
      backgroundImage: '[PLACEHOLDER-BG]/elsinore-corridor.png',
      image: '[PLACEHOLDER-IMG]/hamlet-soliloquy.png',

      prompt: 'Analyze Shakespeare\'s most famous soliloquy',

      source: {
        title: '"To Be or Not to Be" (Act 3, Scene 1)',
        type: 'text',
        content: `To be, or not to be, that is the question:
Whether 'tis nobler in the mind to suffer
The slings and arrows of outrageous fortune,
Or to take arms against a sea of troubles
And by opposing end them. To die—to sleep,
No more; and by a sleep to say we end
The heart-ache and the thousand natural shocks
That flesh is heir to: 'tis a consummation
Devoutly to be wished. To die, to sleep;
To sleep, perchance to dream—ay, there's the rub:
For in that sleep of death what dreams may come,
When we have shuffled off this mortal coil,
Must give us pause—there's the respect
That makes calamity of so long life.

For who would bear the whips and scorns of time,
Th'oppressor's wrong, the proud man's contumely,
The pangs of despised love, the law's delay,
The insolence of office, and the spurns
That patient merit of th'unworthy takes,
When he himself might his quietus make
With a bare bodkin? Who would fardels bear,
To grunt and sweat under a weary life,
But that the dread of something after death,
The undiscovered country from whose bourn
No traveller returns, puzzles the will,
And makes us rather bear those ills we have
Than fly to others that we know not of?
Thus conscience does make cowards of us all,
And thus the native hue of resolution
Is sicklied o'er with the pale cast of thought,
And enterprises of great pith and moment
With this regard their currents turn awry
And lose the name of action.`,
        citation: 'Hamlet, Act 3, Scene 1 (c. 1600)',
      },

      questions: [
        {
          id: 'q-soliloquy-1',
          question: 'What is the central question Hamlet wrestles with in this soliloquy?',
          type: 'multiple-choice',
          options: [
            'Whether to kill Claudius or expose him publicly',
            'Whether existence itself is worth the suffering it entails, and whether death might be preferable',
            'Whether to marry Ophelia or remain devoted to his revenge',
            'Whether to trust the Ghost or dismiss its commands',
          ],
          correctAnswer: 'Whether existence itself is worth the suffering it entails, and whether death might be preferable',
          explanation: '"To be or not to be" is a question about existence itself—whether it\'s better to endure life\'s suffering or to end it through death.',
        },
        {
          id: 'q-soliloquy-2',
          question: 'According to Hamlet, what prevents people from escaping life\'s suffering through death?',
          type: 'multiple-choice',
          options: [
            'Religious laws forbidding suicide',
            'Love for family and friends',
            'Fear of what might come after death—"the undiscovered country"',
            'The hope that things will improve',
          ],
          correctAnswer: 'Fear of what might come after death—"the undiscovered country"',
          explanation: 'Hamlet argues that fear of the unknown after death—"the dread of something after death"—prevents us from escaping life\'s suffering.',
        },
        {
          id: 'q-soliloquy-3',
          question: 'What does Hamlet mean when he says "conscience does make cowards of us all"?',
          type: 'multiple-choice',
          options: [
            'Moral guilt prevents us from doing evil',
            'Consciousness and overthinking paralyze our ability to act decisively',
            'Religious conscience keeps us obedient to the church',
            'Cowardice is a natural human trait we cannot escape',
          ],
          correctAnswer: 'Consciousness and overthinking paralyze our ability to act decisively',
          explanation: 'Here "conscience" means consciousness or awareness. Hamlet argues that thinking too much—being too aware of consequences and uncertainties—prevents decisive action.',
        },
      ],

      learningPoints: [
        {
          id: 'lp-hamlet-5-existential',
          content: '"To be or not to be" is an existential meditation on whether life\'s suffering is worth enduring—one of literature\'s first examinations of human consciousness from the inside.',
          category: 'literary-context',
        },
        {
          id: 'lp-hamlet-5-paralysis',
          content: 'Hamlet identifies "the pale cast of thought" as the enemy of action—consciousness itself becomes paralyzing.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 6: Dialogue - Hamlet and Ophelia
    {
      id: 'hamlet-scene-6-ophelia',
      type: 'dialogue',
      backgroundImage: '[PLACEHOLDER-BG]/ophelia-garden.png',

      character: {
        id: 'ophelia',
        name: 'Ophelia',
        portrait: '[PLACEHOLDER-PORTRAIT]/ophelia.png',
        description: 'Daughter of Polonius, beloved by Hamlet, caught between love and duty',
      },

      dialogueTree: {
        id: 'ophelia-node-1',
        speaker: 'ophelia',
        text: 'My lord, I have remembrances of yours that I have longèd long to re-deliver. I pray you, now receive them.',

        responses: [
          {
            id: 'response-gentle',
            text: 'What remembrances? I gave you nothing.',
            nextNodeId: 'ophelia-node-2',
            learningPoints: [
              {
                id: 'lp-hamlet-6a-denial',
                content: 'Hamlet\'s denial—"I never gave you aught"—shows how his feigned madness has become a performance that damages real relationships.',
                category: 'literary-context',
              },
            ],
          },
          {
            id: 'response-harsh',
            text: 'I did love you once... but I loved you not.',
            nextNodeId: 'ophelia-node-3',
            learningPoints: [
              {
                id: 'lp-hamlet-6b-cruelty',
                content: 'Hamlet\'s contradictory statements to Ophelia reflect his own inner turmoil—and the collateral damage of his mission.',
                category: 'literary-context',
              },
            ],
          },
        ],

        allNodes: [
          {
            id: 'ophelia-node-2',
            speaker: 'ophelia',
            text: 'My honored lord, you know right well you did, and with them, words of so sweet breath composed as made the things more rich. Their perfume lost, take these again, for to the noble mind, rich gifts wax poor when givers prove unkind.',
            responses: [
              {
                id: 'response-nunnery',
                text: 'Get thee to a nunnery! Why wouldst thou be a breeder of sinners?',
                nextNodeId: 'ophelia-node-4',
              },
            ],
          },
          {
            id: 'ophelia-node-3',
            speaker: 'ophelia',
            text: 'Indeed, my lord, you made me believe so.',
            responses: [
              {
                id: 'response-nunnery-2',
                text: 'Get thee to a nunnery! I am myself indifferent honest, but yet I could accuse me of such things that it were better my mother had not borne me.',
                nextNodeId: 'ophelia-node-4',
              },
            ],
          },
          {
            id: 'ophelia-node-4',
            speaker: 'ophelia',
            text: 'O, what a noble mind is here o\'erthrown! The courtier\'s, soldier\'s, scholar\'s, eye, tongue, sword, th\'expectancy and rose of the fair state, the glass of fashion and the mould of form, th\'observed of all observers, quite, quite down!',
            isEnd: true,
          },
        ],
      },

      learningPoints: [
        {
          id: 'lp-hamlet-6-ophelia',
          content: 'Ophelia becomes collateral damage in Hamlet\'s war with Claudius—her madness and death are consequences of male political violence.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 7: Spectrum Game - Interpretations
    {
      id: 'hamlet-scene-7-spectrum',
      type: 'custom-mini-game',
      backgroundImage: '[PLACEHOLDER-BG]/elsinore-corridor.png',

      gameType: 'spectrum',
      config: {
        title: 'Interpreting Hamlet',
        instructions: 'Position yourself on each spectrum to explore different interpretations of Hamlet\'s character and actions.',
        questions: [
          {
            id: 'spectrum-1',
            question: 'Is Hamlet\'s delay cowardice or wisdom?',
            leftLabel: 'Cowardice',
            rightLabel: 'Wisdom',
            explanation: 'Critics have debated this for centuries. Some see Hamlet\'s delay as moral weakness; others see careful deliberation in a world of deception.',
          },
          {
            id: 'spectrum-2',
            question: 'Is Hamlet\'s madness entirely feigned, or does it become real?',
            leftLabel: 'Entirely Feigned',
            rightLabel: 'Genuinely Mad',
            explanation: 'Hamlet announces he will "put an antic disposition on," but his erratic behavior and the stress of his situation blur the line between performance and breakdown.',
          },
          {
            id: 'spectrum-3',
            question: 'Is Claudius\'s guilt proven or assumed before the play-within-a-play?',
            leftLabel: 'Only Assumed',
            rightLabel: 'Proven',
            explanation: 'Before "The Mousetrap," we have only the Ghost\'s word—which could be demonic deception. The play is Hamlet\'s attempt to verify.',
          },
          {
            id: 'spectrum-4',
            question: 'Is Hamlet a hero or a failure?',
            leftLabel: 'Tragic Hero',
            rightLabel: 'Tragic Failure',
            explanation: 'Hamlet achieves his revenge but dies in the process, and his delay causes the deaths of many innocents. Is this heroism or catastrophe?',
          },
        ],
      },

      learningPoints: [
        {
          id: 'lp-hamlet-7-ambiguity',
          content: 'Hamlet\'s enduring power comes partly from its ambiguity—Shakespeare presents multiple valid interpretations without resolving them.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 8: The Mousetrap - Play within a play
    {
      id: 'hamlet-scene-8-mousetrap',
      type: 'narrative',
      backgroundImage: '[PLACEHOLDER-BG]/elsinore-great-hall.png',
      image: '[PLACEHOLDER-IMG]/mousetrap-play.png',

      content: `To test the Ghost's word, Hamlet devises a cunning plan: he will stage a play depicting a murder identical to what the Ghost described.

"The play's the thing," Hamlet declares, "wherein I'll catch the conscience of the king."

Traveling players arrive at Elsinore, and Hamlet rewrites their performance. He calls it "The Mousetrap." The play depicts a king murdered by poison poured in his ear—exactly how the Ghost claimed Claudius killed King Hamlet.

Hamlet and Horatio watch Claudius during the performance. If Claudius reacts with guilt, the Ghost spoke true.

The moment comes. The player-king is murdered. Claudius leaps to his feet.

"Give me some light!" he cries. "Away!"

He flees the room, his guilt exposed. The Ghost spoke truth. Claudius is indeed a murderer.

Now Hamlet has his proof. The question of whether to act is answered.

But Hamlet still does not act. Not yet.`,

      inlineAnnotations: [
        {
          id: 'annotation-mousetrap',
          text: 'The Mousetrap',
          tooltip: {
            title: 'Meta-Theatricality',
            content: 'The play-within-a-play creates multiple levels of performance and watching. Shakespeare\'s audience watches actors playing courtiers watching actors playing the murder. This technique asks: what is real, and what is performance?',
            category: 'literary-context',
          },
        },
      ],

      learningPoints: [
        {
          id: 'lp-hamlet-8-mousetrap',
          content: 'The play-within-a-play is Shakespeare\'s most famous use of meta-theatricality—using theater to examine truth, guilt, and the nature of performance itself.',
          category: 'literary-context',
        },
        {
          id: 'lp-hamlet-8-proof',
          content: 'Claudius\'s reaction to "The Mousetrap" provides the proof Hamlet needed—yet he still delays, revealing that uncertainty was not his only obstacle.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 9: Timeline Game - Key Events
    {
      id: 'hamlet-scene-9-timeline',
      type: 'timeline-game',
      backgroundImage: '[PLACEHOLDER-BG]/elsinore-exterior.png',
      image: '[PLACEHOLDER-IMG]/hamlet-timeline.png',

      prompt: 'Arrange these key events from Hamlet in the correct chronological order',

      timelineEvents: [
        {
          id: 'event-1',
          title: 'Ghost\'s Appearance',
          year: 1,
          description: 'The Ghost of King Hamlet reveals the murder to his son on the battlements of Elsinore.',
          image: '[PLACEHOLDER-EVENT]/ghost-appears.png',
        },
        {
          id: 'event-2',
          title: '"The Mousetrap" Performance',
          year: 2,
          description: 'Hamlet stages a play to test Claudius\'s guilt, and the king\'s reaction proves the Ghost spoke true.',
          image: '[PLACEHOLDER-EVENT]/mousetrap.png',
        },
        {
          id: 'event-3',
          title: 'Polonius\'s Death',
          year: 3,
          description: 'Hamlet kills Polonius, thinking he is Claudius, hidden behind a curtain in Gertrude\'s chamber.',
          image: '[PLACEHOLDER-EVENT]/polonius-death.png',
        },
        {
          id: 'event-4',
          title: 'Ophelia\'s Madness and Death',
          year: 4,
          description: 'Driven mad by her father\'s death and Hamlet\'s cruelty, Ophelia drowns in a stream.',
          image: '[PLACEHOLDER-EVENT]/ophelia-death.png',
        },
        {
          id: 'event-5',
          title: 'The Final Duel',
          year: 5,
          description: 'Hamlet and Laertes duel with poisoned swords; Gertrude, Laertes, Claudius, and Hamlet all die.',
          image: '[PLACEHOLDER-EVENT]/final-duel.png',
        },
      ],

      successThreshold: 80,

      learningPoints: [
        {
          id: 'lp-hamlet-9-structure',
          content: 'Hamlet\'s plot follows the five-act tragic structure: exposition (Ghost), rising action (investigation), climax (Mousetrap), falling action (deaths of Polonius and Ophelia), catastrophe (final bloodbath).',
          category: 'literary-context',
        },
      ],
    },

    // Scene 10: Tragic Cascade
    {
      id: 'hamlet-scene-10-cascade',
      type: 'narrative',
      backgroundImage: '[PLACEHOLDER-BG]/elsinore-great-hall.png',
      image: '[PLACEHOLDER-IMG]/tragic-cascade.png',

      content: `Even with proof, Hamlet delays. He finds Claudius praying and considers killing him—but stops. If Claudius dies while praying, his soul might go to heaven. Hamlet wants Claudius damned.

This delay proves fatal.

Hamlet confronts his mother Gertrude, and hearing movement behind a curtain, stabs through it—killing not Claudius, but Polonius, the father of Ophelia and Laertes.

This mistaken murder cascades into catastrophe:

Ophelia, already fragile from Hamlet's cruelty, goes mad with grief for her father. She wanders distributing flowers and singing, then drowns in a stream—whether by accident or suicide, we cannot know.

Laertes returns from France, burning for revenge against Hamlet. Unlike Hamlet, Laertes does not hesitate. He allies with Claudius, who proposes a rigged duel: Laertes's blade will be poisoned, and a cup of poisoned wine waits if the sword fails.

What was supposed to be Hamlet's careful pursuit of justice has killed an innocent man, driven a woman to madness and death, and armed his enemies with righteous vengeance.

Delay has not prevented tragedy. It has multiplied it.`,

      learningPoints: [
        {
          id: 'lp-hamlet-10-cascade',
          content: 'Hamlet\'s delay creates a tragic cascade: one hesitation leads to Polonius\'s death, which leads to Ophelia\'s madness, which arms Laertes with justified rage.',
          category: 'literary-context',
        },
        {
          id: 'lp-hamlet-10-contrast',
          content: 'Laertes serves as Hamlet\'s foil: where Hamlet thinks, Laertes acts. Neither approach succeeds—both lead to death.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 11: Cause and Effect
    {
      id: 'hamlet-scene-11-cause-effect',
      type: 'cause-effect',
      backgroundImage: '[PLACEHOLDER-BG]/elsinore-exterior.png',
      image: '[PLACEHOLDER-IMG]/cause-effect.png',

      prompt: 'Match each action or choice to its tragic consequence',

      pairs: [
        {
          id: 'pair-1',
          cause: 'Hamlet decides to investigate rather than act immediately on the Ghost\'s command',
          effect: 'Delay allows Claudius time to recognize the threat and plot against Hamlet',
          explanation: 'Hamlet\'s philosophical nature leads him to seek proof before acting, but this gives Claudius time to perceive the danger and prepare counter-measures.',
        },
        {
          id: 'pair-2',
          cause: 'Hamlet feigns madness to disguise his investigation',
          effect: 'His cruel treatment of Ophelia contributes to her psychological breakdown',
          explanation: 'The "antic disposition" Hamlet adopts includes cruelty to Ophelia, who cannot understand why her beloved has turned against her.',
        },
        {
          id: 'pair-3',
          cause: 'Hamlet refuses to kill Claudius while he is praying',
          effect: 'Claudius lives to orchestrate the poisoned duel that kills Hamlet',
          explanation: 'Hamlet\'s desire to damn Claudius\'s soul (by killing him in sin) leads to another fatal delay that allows the poisoned duel plot to unfold.',
        },
        {
          id: 'pair-4',
          cause: 'Hamlet kills Polonius by mistake, thinking it was Claudius',
          effect: 'Ophelia goes mad and dies; Laertes seeks revenge and allies with Claudius',
          explanation: 'The accidental murder of Polonius triggers a cascade: Ophelia\'s madness and death, and Laertes gaining legitimate cause for revenge.',
        },
        {
          id: 'pair-5',
          cause: 'Gertrude drinks the poisoned wine meant for Hamlet',
          effect: 'Her death finally provokes Hamlet to kill Claudius immediately',
          explanation: 'Only when his mother dies before his eyes does Hamlet finally act without hesitation, killing Claudius in rage.',
        },
      ],

      learningPoints: [
        {
          id: 'lp-hamlet-11-causation',
          content: 'Hamlet\'s tragedy is a web of cause and effect where each decision—especially each delay—creates new dangers and victims.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 12: Quote Attribution
    {
      id: 'hamlet-scene-12-quotes',
      type: 'quote-attribution',
      backgroundImage: '[PLACEHOLDER-BG]/scroll-background.png',

      prompt: 'Match these famous Hamlet quotes to their speakers and contexts',

      quotes: [
        {
          id: 'quote-1',
          text: 'Something is rotten in the state of Denmark.',
          speaker: 'Marcellus',
          context: 'A guard senses the corruption in the kingdom after seeing the Ghost.',
          explanation: 'This line has become a common phrase meaning something is fundamentally wrong in a situation or organization.',
        },
        {
          id: 'quote-2',
          text: 'Though this be madness, yet there is method in\'t.',
          speaker: 'Polonius',
          context: 'Polonius recognizes Hamlet\'s "madness" seems calculated and purposeful.',
          explanation: '"Method to the madness" now means there is a rational purpose behind seemingly irrational behavior.',
        },
        {
          id: 'quote-3',
          text: 'The lady doth protest too much, methinks.',
          speaker: 'Gertrude',
          context: 'Gertrude comments on the Player Queen\'s excessive vows during "The Mousetrap."',
          explanation: 'Now used to suggest someone\'s denials reveal the opposite—that they\'re hiding something.',
        },
        {
          id: 'quote-4',
          text: 'Brevity is the soul of wit.',
          speaker: 'Polonius',
          context: 'Polonius says this while being ironically long-winded.',
          explanation: 'Shakespeare creates dramatic irony: Polonius advocates brevity while being utterly unable to achieve it.',
        },
        {
          id: 'quote-5',
          text: 'The rest is silence.',
          speaker: 'Hamlet',
          context: 'Hamlet\'s final words as he dies.',
          explanation: 'After all his words, questions, and philosophical struggles, Hamlet ends in silence—the ultimate answer to "To be or not to be."',
        },
      ],

      learningPoints: [
        {
          id: 'lp-hamlet-12-influence',
          content: 'Hamlet has contributed more phrases to English than almost any other literary work—its language has shaped how we think and speak.',
          category: 'cultural-context',
        },
      ],
    },

    // Scene 13: Primary Source - "The rest is silence"
    {
      id: 'hamlet-scene-13-ending',
      type: 'primary-source',
      backgroundImage: '[PLACEHOLDER-BG]/elsinore-great-hall.png',
      image: '[PLACEHOLDER-IMG]/hamlet-ending.png',

      prompt: 'Examine Hamlet\'s final moments and last words',

      source: {
        title: 'Hamlet\'s Death (Act 5, Scene 2)',
        type: 'text',
        content: `HAMLET:
Heaven make thee free of it! I follow thee.
I am dead, Horatio. Wretched queen, adieu!
You that look pale and tremble at this chance,
That are but mutes or audience to this act,
Had I but time—as this fell sergeant, death,
Is strict in his arrest—O, I could tell you—
But let it be. Horatio, I am dead;
Thou livest; report me and my cause aright
To the unsatisfied.

HORATIO:
Never believe it.
I am more an antique Roman than a Dane.
Here's yet some liquor left.

[He attempts to drink from the poisoned cup.]

HAMLET:
As thou'rt a man,
Give me the cup! Let go! By heaven, I'll have't.
O God, Horatio, what a wounded name,
Things standing thus unknown, shall live behind me!
If thou didst ever hold me in thy heart,
Absent thee from felicity awhile,
And in this harsh world draw thy breath in pain
To tell my story.

...The rest is silence.

[He dies.]

HORATIO:
Now cracks a noble heart. Good night, sweet prince,
And flights of angels sing thee to thy rest!`,
        citation: 'Hamlet, Act 5, Scene 2 (c. 1600)',
      },

      questions: [
        {
          id: 'q-ending-1',
          question: 'Why does Hamlet stop Horatio from killing himself?',
          type: 'multiple-choice',
          options: [
            'To punish Horatio for not helping him against Claudius',
            'So Horatio can tell Hamlet\'s story and clear his name',
            'Because suicide is forbidden by Danish law',
            'To prevent Horatio from being blamed for the deaths',
          ],
          correctAnswer: 'So Horatio can tell Hamlet\'s story and clear his name',
          explanation: 'Hamlet\'s concern for his "wounded name" shows that even in death, he cares about how his story will be told—a deeply human, and meta-theatrical, concern.',
        },
        {
          id: 'q-ending-2',
          question: 'What might "The rest is silence" mean in the context of the play?',
          type: 'multiple-choice',
          options: [
            'Hamlet has finally found peace after his constant questioning and overthinking',
            'Hamlet is disappointed that he didn\'t achieve more',
            'Hamlet is merely noting that he can no longer speak',
            'Hamlet is refusing to forgive Claudius even in death',
          ],
          correctAnswer: 'Hamlet has finally found peace after his constant questioning and overthinking',
          explanation: '"The rest is silence" suggests that for Hamlet—who has spent the play questioning, philosophizing, and struggling with words—death brings the silence that his restless consciousness could never achieve in life.',
        },
      ],

      learningPoints: [
        {
          id: 'lp-hamlet-13-storytelling',
          content: 'Hamlet\'s dying concern is for his story—a meta-theatrical moment where the character recognizes the importance of narrative in shaping meaning.',
          category: 'literary-context',
        },
        {
          id: 'lp-hamlet-13-silence',
          content: '"The rest is silence" is the ultimate answer to "To be or not to be"—after all the questioning, death brings the silence that consciousness could not.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 14: Conclusion with Quiz Trigger
    {
      id: 'hamlet-scene-14-conclusion',
      type: 'narrative',
      backgroundImage: '[PLACEHOLDER-BG]/elsinore-exterior.png',
      image: '[PLACEHOLDER-IMG]/hamlet-conclusion.png',

      content: `The final scene of Hamlet is a bloodbath. Gertrude drinks poison meant for Hamlet. Laertes wounds Hamlet with the poisoned blade, then is wounded himself when they exchange swords. As he dies, Laertes reveals the plot and blames Claudius.

Only now—with his mother dead, himself dying, and the conspiracy exposed—does Hamlet finally act. He stabs Claudius and forces the poisoned wine down his throat.

"Here, thou incestuous, murderous, damnèd Dane, / Drink off this potion!"

Claudius dies. Hamlet dies. The stage is littered with corpses.

But was this justice? Or only more death?

Hamlet's delay was not cowardice—it was consciousness. He could not act without questioning, could not kill without being certain, could not exist without examining existence itself. This is what makes him human, and what makes him tragic.

In the end, Horatio survives to tell the story. And we are still telling it, four centuries later, because Hamlet's questions are our questions.

What would YOU do, if you were Hamlet?

That question has no easy answer. Which is why we're still asking it.`,

      learningPoints: [
        {
          id: 'lp-hamlet-14-conclusion',
          content: 'Hamlet achieves his revenge but only at the cost of nearly everyone he loved—the tragedy lies not in failure but in the price of success.',
          category: 'literary-context',
        },
        {
          id: 'lp-hamlet-14-endurance',
          content: 'Hamlet endures because it asks questions about consciousness, action, and mortality that remain unanswerable—and universally human.',
          category: 'literary-context',
        },
      ],

      events: {
        onExit: [{
          type: 'quiz',
          componentId: 'quiz-chapter-1-hamlet',
          condition: { type: 'if-not-completed' },
        }],
      },
    },
  ],

  endQuiz: chapter1Quiz,
};

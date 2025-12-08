import type { Chapter } from '../../../types';
import { chapter1Quiz } from '../quizzes/chapter-1-quiz';

export const chapter1: Chapter = {
  id: 'chapter-1-macbeth',
  title: 'Chapter 1: Macbeth - "Blood Will Have Blood"',
  description: 'Journey into the darkness of unchecked ambition as a Scottish nobleman\'s quest for power leads to psychological torment, paranoia, and inevitable destruction.',

  learningObjectives: [
    'Understand the structure of Shakespearean tragedy (exposition, rising action, climax, falling action, catastrophe)',
    'Analyze the role of ambition as tragic flaw (hamartia) and its psychological consequences',
    'Recognize how supernatural elements (the Weird Sisters) externalize internal desires and moral ambiguity',
    'Examine the symbolism of blood, sleep, and darkness as representations of guilt and moral corruption',
    'Explore the relationship between power gained through evil and the psychological cost of that power',
  ],

  scenes: [
    // Scene 1: Introduction to Part II and tragic structure
    {
      id: 'macbeth-scene-1-intro',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/c104c9c0-236b-4130-bb47-b1e7dd5d185d/0_0.png',
      image: 'https://cdn.midjourney.com/00bf5141-56e4-417f-a1f5-a2887dd0dbf9/0_2.png',

      content: `Welcome to the darkest chapter of our Shakespeare journey.

In Part I, we explored love, laughter, and the complexities of identity through Shakespeare's comedies and romantic tragedy. We saw how misunderstandings could be resolved, how lovers could overcome obstacles, and how—even in Romeo and Juliet's death—there was a sense of transcendent love.

Now, we leave that light behind.

Part II plunges into the heart of psychological darkness, where ambition corrupts from within, jealousy poisons love, and pride destroys kingdoms. These are not tragedies of fate or bad luck—they are tragedies of choice, of character, of the human capacity for self-destruction.

We begin with Macbeth: the clearest, most relentless descent from honor to damnation that Shakespeare ever wrote.`,

      learningPoints: [
        {
          id: 'lp-macbeth-1-part2-intro',
          content: 'Part II focuses on internal psychological forces (ambition, jealousy, pride) rather than external conflicts, making these tragedies more intimate and terrifying.',
          category: 'literary-context',
        },
        {
          id: 'lp-macbeth-1-tragedy-structure',
          content: 'Shakespearean tragedy follows a five-act structure: exposition, rising action, climax, falling action, and catastrophe—a pattern perfected in Macbeth.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 2: Primary source - Historical context
    {
      id: 'macbeth-scene-2-historical',
      type: 'primary-source',
      backgroundImage: 'https://cdn.midjourney.com/02417902-fd45-4b0a-b19f-bf3c83566874/0_0.png',
      image: 'https://cdn.midjourney.com/4ae1bb87-94c4-4c62-b52d-98265fae2e78/0_0.png',

      prompt: 'Examine the historical context that shaped Macbeth',

      source: {
        title: 'Historical Background: The Real Macbeth and King James I',
        type: 'text',
        content: `Shakespeare wrote Macbeth around 1606, shortly after King James I of England (James VI of Scotland) took the throne. The play reflects James's interests and anxieties in deliberate ways.

**The Real Macbeth:** The historical Mac Bethad mac Findláich ruled Scotland from 1040 to 1057. Unlike Shakespeare's villain, the real Macbeth was considered a competent, even enlightened king who ruled for 17 years. He killed Duncan in battle—not through secret murder—and Duncan was not a beloved old king but a weak ruler. Shakespeare transformed history into psychological drama.

**Witch Hunts and King James:** James I was obsessed with witchcraft. He wrote "Daemonologie" (1597), a treatise on witches and demons, and personally oversaw witch trials. The Weird Sisters in Macbeth were designed to intrigue and horrify James, linking supernatural evil to political treason.

**The Gunpowder Plot (1605):** Just a year before Macbeth premiered, Catholic conspirators tried to blow up Parliament and kill King James. Macbeth's themes of regicide (killing a king), treason, and divine retribution resonated powerfully with this recent trauma.

Shakespeare crafted Macbeth not as history but as a moral and psychological exploration tailored to his royal patron's deepest fears and fascinations.`,
        citation: 'Adapted from historical sources on Shakespeare and Jacobean England',
      },

      questions: [
        {
          id: 'q1',
          question: 'How did Shakespeare transform the historical Macbeth for dramatic purposes?',
          type: 'multiple-choice',
          options: [
            'He made Macbeth a villain who secretly murders a good king, rather than a competent ruler who killed in battle',
            'He portrayed Macbeth as a weak and ineffective ruler rather than a strong one',
            'He changed the story to make Macbeth a foreign invader rather than a Scottish noble',
            'He removed all supernatural elements from the historical account',
          ],
          correctAnswer: 'He made Macbeth a villain who secretly murders a good king, rather than a competent ruler who killed in battle',
          explanation: 'Shakespeare transformed history into psychological tragedy by making Macbeth a secret murderer consumed by guilt, rather than a warrior-king who killed in legitimate battle.',
        },
        {
          id: 'q2',
          question: 'Why were the Weird Sisters particularly significant for the play\'s original audience?',
          type: 'multiple-choice',
          options: [
            'They represented comic relief in an otherwise serious play',
            'They appealed to King James I\'s documented obsession with witchcraft and treason',
            'They were based on real witches from Scottish history',
            'They served only as a plot device with no deeper cultural meaning',
          ],
          correctAnswer: 'They appealed to King James I\'s documented obsession with witchcraft and treason',
          explanation: 'King James wrote about witchcraft and oversaw witch trials. The Weird Sisters linked supernatural evil to political treason—themes that both fascinated and frightened the king.',
        },
      ],

      learningPoints: [
        {
          id: 'lp-macbeth-2-history',
          content: 'Shakespeare often adapted history to serve dramatic and psychological purposes rather than strict historical accuracy.',
          category: 'historical-context',
        },
        {
          id: 'lp-macbeth-2-patronage',
          content: 'Renaissance playwrights crafted works to appeal to royal patrons, embedding themes that resonated with contemporary anxieties and interests.',
          category: 'historical-context',
        },
      ],
    },

    // Scene 3: The prophecy - Narrative with the Weird Sisters
    {
      id: 'macbeth-scene-3-prophecy',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/f15e3c54-b087-479e-b358-08e0bc935f86/0_0.png',
      image: 'https://cdn.midjourney.com/f8b61508-de4c-4eed-bd91-54d5e18769de/0_0.png',

      content: `Thunder cracks across the Scottish heath. Three figures emerge from the mist—the Weird Sisters, neither fully human nor wholly supernatural.

"When shall we three meet again?" they ask each other. "When the battle's lost and won."

The victorious general Macbeth and his companion Banquo encounter these strange beings on their way home from crushing a rebellion. The witches speak in riddles:

"All hail, Macbeth! Hail to thee, Thane of Glamis!"
"All hail, Macbeth! Hail to thee, Thane of Cawdor!"
"All hail, Macbeth, that shalt be King hereafter!"

Macbeth is already Thane of Glamis—but Thane of Cawdor? King? Before he can question them, messengers arrive: the current Thane of Cawdor has been executed for treason, and King Duncan has granted his title to Macbeth as reward for his military valor.

The first prophecy has come true immediately. Macbeth's mind begins to race. If two prophecies are true, what about the third?

"If chance will have me King," he thinks, "why, chance may crown me without my stir." But already, darker thoughts stir in his imagination.`,

      learningPoints: [
        {
          id: 'lp-macbeth-3-prophecy',
          content: 'The Weird Sisters\' prophecies do not force Macbeth to act—they externalize desires already within him, creating moral ambiguity about fate versus choice.',
          category: 'literary-context',
        },
        {
          id: 'lp-macbeth-3-supernatural',
          content: 'Shakespeare uses supernatural elements to represent psychological states, making internal ambition visible and dramatically powerful.',
          category: 'literary-context',
        },
        {
          id: 'lp-macbeth-3-hamartia',
          content: 'Macbeth\'s tragic flaw (hamartia) is unchecked ambition—not the prophecy itself, but his inability to resist the temptation it presents.',
          category: 'literary-context',
        },
      ],

      inlineAnnotations: [
        {
          id: 'hamartia-annotation',
          text: 'hamartia',
          tooltip: {
            title: 'Hamartia: The Tragic Flaw',
            content: 'Greek term meaning "tragic flaw" or "error in judgment" that leads to the protagonist\'s downfall in classical tragedy. It\'s not just a character weakness—it\'s the fatal mistake that destroys an otherwise noble hero.',
            category: 'literary-context',
          },
        },
      ],
    },

    // Scene 4: Decision - How does Macbeth respond?
    {
      id: 'macbeth-scene-4-decision',
      type: 'decision',
      backgroundImage: 'https://cdn.midjourney.com/1ac4724e-b80e-4611-ac16-71c0a666964d/0_0.png',

      prompt: 'How should Macbeth respond to the prophecy?',
      context: `Macbeth returns home, his mind churning with possibilities. He is a loyal subject, a valiant warrior, a man of honor. King Duncan trusts him completely.

But the prophecy whispers in his mind: "King hereafter..."

As Macbeth, what do you choose?`,

      choices: [
        {
          id: 'choice-wait',
          text: 'Wait for fate to unfold naturally without interference',
          consequence: 'This is wisdom—but Shakespeare shows us that Macbeth\'s ambition will not allow such patience. "I have no spur to prick the sides of my intent," he admits, "but only vaulting ambition." The thought alone has already begun to corrupt him.',
          learningPoints: [
            {
              id: 'lp-macbeth-4-patience',
              content: 'The path not taken: Macbeth could have let events unfold naturally, but his "vaulting ambition" makes passivity psychologically impossible.',
              category: 'literary-context',
            },
          ],
        },
        {
          id: 'choice-resist',
          text: 'Actively resist the temptation and reaffirm loyalty to Duncan',
          consequence: 'A noble choice—but watch what happens when Lady Macbeth enters the picture. Macbeth briefly considers this path, but his wife will challenge his manhood, his courage, his very identity until resistance crumbles.',
          learningPoints: [
            {
              id: 'lp-macbeth-4-resistance',
              content: 'Macbeth wavers between honor and ambition, showing that tragedy occurs when we know the right path but lack the strength to choose it.',
              category: 'literary-context',
            },
          ],
        },
        {
          id: 'choice-pursue',
          text: 'Actively pursue the crown through whatever means necessary',
          consequence: 'This is the path Macbeth will ultimately take—but not easily. He agonizes over the decision, imagines the consequences, and understands the moral horror of regicide. His tragedy is that he proceeds anyway, eyes wide open.',
          learningPoints: [
            {
              id: 'lp-macbeth-4-pursuit',
              content: 'Macbeth\'s tragedy is amplified because he understands the moral evil of his actions but chooses them anyway, making him complicit in his own destruction.',
              category: 'literary-context',
            },
          ],
        },
      ],

      learningPoints: [],
    },

    // Scene 5: Dialogue - Lady Macbeth persuades
    {
      id: 'macbeth-scene-5-lady-macbeth',
      type: 'dialogue',
      backgroundImage: 'https://cdn.midjourney.com/fb6f4f4e-e4b2-4ef2-90c6-457f34ce173f/0_0.png',

      character: {
        id: 'lady-macbeth',
        name: 'Lady Macbeth',
        portrait: 'https://cdn.midjourney.com/a0d3d2a1-bc45-4fac-8f3f-58027b5cc936/0_3.png',
        description: 'Macbeth\'s wife, fierce and ambitious',
      },

      dialogueTree: {
        id: 'node-1',
        speaker: 'lady-macbeth',
        text: 'Glamis thou art, and Cawdor; and shalt be what thou art promised. Yet do I fear thy nature—it is too full o\' the milk of human kindness to catch the nearest way.',

        responses: [
          {
            id: 'response-honor',
            text: 'We should not betray Duncan. He honors me, trusts me.',
            nextNodeId: 'node-2',
          },
          {
            id: 'response-fear',
            text: 'I fear the consequences if we fail.',
            nextNodeId: 'node-3',
          },
        ],

        allNodes: [
          {
            id: 'node-2',
            speaker: 'lady-macbeth',
            text: 'Was the hope drunk wherein you dressed yourself? Art thou afeard to be the same in thine own act and valor as thou art in desire? When you durst do it, then you were a man!',
            responses: [
              {
                id: 'response-manhood',
                text: 'I dare do all that may become a man. Who dares do more is none.',
                nextNodeId: 'node-4',
              },
            ],
          },
          {
            id: 'node-3',
            speaker: 'lady-macbeth',
            text: 'We fail? But screw your courage to the sticking place and we\'ll not fail. When Duncan is asleep, I will ply his chamberlains with wine. What cannot you and I perform upon the unguarded Duncan?',
            responses: [
              {
                id: 'response-plan',
                text: 'If we should fail?',
                nextNodeId: 'node-4',
              },
            ],
          },
          {
            id: 'node-4',
            speaker: 'lady-macbeth',
            text: 'Who dares receive it other than as we shall make our griefs and clamor roar upon his death? I am settled, and bend up each corporal agent to this terrible feat. False face must hide what the false heart doth know.',
            isEnd: true,
          },
        ],
      },

      learningPoints: [
        {
          id: 'lp-macbeth-5-manipulation',
          content: 'Lady Macbeth manipulates her husband by attacking his masculinity and courage, showing how gender expectations can be weaponized.',
          category: 'literary-context',
        },
        {
          id: 'lp-macbeth-5-partnership',
          content: 'Unlike Romeo and Juliet where love is redemptive, the Macbeths\' partnership in evil creates a descent into shared damnation.',
          category: 'literary-context',
        },
        {
          id: 'lp-macbeth-5-contrast',
          content: 'Where Part I\'s lovers opposed their families for love, Macbeth and his wife conspire together in murder—a dark inversion of romantic partnership.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 6: The murder and immediate consequences
    {
      id: 'macbeth-scene-6-murder',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/a3120677-2101-4b16-84ff-c49843d366ff/0_0.png',
      image: 'https://cdn.midjourney.com/0fe5d770-9ab5-4344-b21d-fcd38249717f/0_1.png',

      content: `The deed is done.

Macbeth emerges from Duncan's chamber, his hands red with blood. He can barely speak. "I have done the deed," he whispers. "Didst thou not hear a noise?"

He is already fracturing. As Duncan slept, Macbeth heard voices crying "Sleep no more! Macbeth does murder sleep!" He stares at his hands in horror: "Will all great Neptune's ocean wash this blood clean from my hand? No, this my hand will rather the multitudinous seas incarnadine, making the green one red."

Lady Macbeth tries to steady him: "A little water clears us of this deed." She does not yet understand that guilt cannot be washed away.

When Duncan's murder is discovered, Macbeth performs brilliantly—feigning shock, killing the chamberlains he has framed in apparent righteous fury, accepting the crown when offered.

But something has broken inside him. The crown sits heavy on his head. Sleep will not come. And in his mind, a voice keeps whispering: "Blood will have blood."`,

      learningPoints: [
        {
          id: 'lp-macbeth-6-guilt',
          content: 'Macbeth\'s immediate psychological collapse shows that the crown brings no satisfaction—only the inescapable torment of conscience.',
          category: 'literary-context',
        },
        {
          id: 'lp-macbeth-6-sleep',
          content: 'Sleep becomes a symbol of innocent peace lost forever; "Macbeth does murder sleep" means he has killed his own capacity for rest and redemption.',
          category: 'literary-context',
        },
        {
          id: 'lp-macbeth-6-blood',
          content: 'Blood imagery dominates the play, representing guilt that cannot be cleansed, violence that breeds more violence, and corruption that stains everything.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 7: Quote Attribution Game
    {
      id: 'macbeth-scene-7-quotes',
      type: 'quote-attribution',
      backgroundImage: 'https://cdn.midjourney.com/27721d54-e0c2-411a-ad0b-d6bf4654f3ef/0_0.png',

      prompt: 'Match these famous lines to their speakers and contexts',

      quotes: [
        {
          id: 'quote-1',
          text: 'Out, damned spot! Out, I say!',
          speaker: 'Lady Macbeth',
          context: 'Sleepwalking and trying to wash imaginary blood from her hands',
          explanation: 'Lady Macbeth, who once claimed "a little water clears us of this deed," now cannot cleanse the psychological stain of guilt. Her descent into madness mirrors Macbeth\'s, but manifests in compulsive washing.',
        },
        {
          id: 'quote-2',
          text: 'Is this a dagger which I see before me, the handle toward my hand?',
          speaker: 'Macbeth',
          context: 'Hallucinating before murdering Duncan',
          explanation: 'Macbeth\'s vision of a phantom dagger shows his mind creating justifications and externalizing his guilty intentions. The dagger leads him to Duncan\'s chamber—but it exists only in his imagination.',
        },
        {
          id: 'quote-3',
          text: 'Fair is foul, and foul is fair',
          speaker: 'The Weird Sisters',
          context: 'Opening scene, establishing moral confusion',
          explanation: 'This paradox establishes the play\'s central theme: moral boundaries blur when ambition takes hold. What seems good (gaining the crown) is actually evil; what seems foul (murder) is pursued as if fair.',
        },
        {
          id: 'quote-4',
          text: 'Life\'s but a walking shadow, a poor player that struts and frets his hour upon the stage',
          speaker: 'Macbeth',
          context: 'After learning of Lady Macbeth\'s death, reflecting on meaninglessness',
          explanation: 'In his final despair, Macbeth sees life itself as empty performance—a nihilistic vision that shows how thoroughly his evil has destroyed his capacity to find meaning or hope.',
        },
        {
          id: 'quote-5',
          text: 'I am in blood stepped in so far that should I wade no more, returning were as tedious as go o\'er',
          speaker: 'Macbeth',
          context: 'After killing Banquo, planning more murders',
          explanation: 'Macbeth realizes he has passed a point of no return. He cannot undo his crimes, so he might as well continue—a chilling logic that leads to more violence and deeper damnation.',
        },
      ],

      learningPoints: [
        {
          id: 'lp-macbeth-7-language',
          content: 'Shakespeare\'s poetic language in Macbeth uses vivid imagery (blood, darkness, sleep) to externalize internal psychological torment.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 8: Paranoia and further violence
    {
      id: 'macbeth-scene-8-paranoia',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/ab72b3f0-c6d4-49d3-88cc-07e8f75dfce9/0_0.png',
      image: 'https://cdn.midjourney.com/f3ce3d05-992f-4f56-82b2-827eb91ca141/0_1.png',

      content: `Macbeth is king—but he wears the crown in terror.

The witches also prophesied that Banquo's descendants would be kings. As long as Banquo and his son Fleance live, Macbeth's throne is insecure. So he hires murderers to kill them both.

Banquo is murdered. But Fleance escapes into the night.

At a royal banquet, Macbeth sees Banquo's ghost sitting in his chair, blood-soaked and accusing. No one else sees it. Macbeth raves and screams at the phantom until Lady Macbeth hurriedly dismisses the guests.

"It will have blood, they say," Macbeth mutters. "Blood will have blood."

He has learned a terrible lesson: murder does not solve problems—it creates new ones. Each killing demands another. The paranoia grows. The violence escalates. And with each new crime, Macbeth feels less, becomes more numb, descends deeper into moral darkness.

"I am in blood stepped in so far," he realizes, "that should I wade no more, returning were as tedious as go o'er."

He cannot go back. He can only continue forward into deeper evil.`,

      learningPoints: [
        {
          id: 'lp-macbeth-8-paranoia',
          content: 'Power gained through evil cannot be secured—it breeds paranoia, requiring ever more violence in a self-perpetuating cycle of destruction.',
          category: 'literary-context',
        },
        {
          id: 'lp-macbeth-8-numbness',
          content: 'Macbeth\'s moral numbness shows how repeated evil desensitizes conscience, making each subsequent crime easier and more meaningless.',
          category: 'literary-context',
        },
        {
          id: 'lp-macbeth-8-ghost',
          content: 'Banquo\'s ghost represents Macbeth\'s guilt made visible—a psychological haunting that others cannot see but that torments the murderer.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 9: Cause-Effect matching game
    {
      id: 'macbeth-scene-9-cause-effect',
      type: 'cause-effect',
      backgroundImage: 'https://cdn.midjourney.com/6744c1af-fd80-4661-a956-44f52dfd88eb/0_0.png',

      prompt: 'Match Macbeth\'s actions to their consequences',

      pairs: [
        {
          id: 'pair-1',
          cause: 'Macbeth murders Duncan to seize the crown',
          effect: 'He is immediately consumed by guilt and paranoia, unable to sleep or find peace',
          explanation: 'The crown brings no satisfaction—only the inescapable torment of conscience and the loss of innocent sleep.',
        },
        {
          id: 'pair-2',
          cause: 'Macbeth hires murderers to kill Banquo',
          effect: 'He is haunted by Banquo\'s ghost and publicly reveals his guilty conscience',
          explanation: 'Macbeth\'s guilt manifests as hallucination, and his raving at the ghost exposes his psychological breakdown to his court.',
        },
        {
          id: 'pair-3',
          cause: 'Macbeth kills Duncan\'s guards in "righteous fury"',
          effect: 'He silences the only witnesses who could contradict his story of innocence',
          explanation: 'By killing the guards, Macbeth eliminates the only people who might reveal he was near Duncan\'s chamber, securing his false narrative.',
        },
        {
          id: 'pair-4',
          cause: 'Lady Macbeth questions Macbeth\'s manhood and courage',
          effect: 'Macbeth overcomes his moral hesitation and commits to the murder',
          explanation: 'Lady Macbeth weaponizes gender expectations to overcome Macbeth\'s moral resistance, pushing him toward the deed.',
        },
      ],

      learningPoints: [
        {
          id: 'lp-macbeth-9-causation',
          content: 'Macbeth demonstrates relentless causation: each evil action creates new problems requiring new evil actions, creating a tragic downward spiral.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 10: New prophecies and false security
    {
      id: 'macbeth-scene-10-prophecies',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/b07b8ef5-0b8d-4314-80ab-e35ee012edfd/0_0.png',
      image: 'https://cdn.midjourney.com/f30d5909-0100-4c70-b7ed-4b945b835fc4/0_0.png',

      content: `Desperate for certainty, Macbeth seeks out the Weird Sisters again.

They conjure three apparitions with three prophecies:

**First Apparition (an armed head):** "Beware Macduff, Beware the Thane of Fife."
**Second Apparition (a bloody child):** "None of woman born shall harm Macbeth."
**Third Apparition (a crowned child holding a tree):** "Macbeth shall never vanquished be until Great Birnam Wood to high Dunsinane Hill shall come against him."

Macbeth laughs. No one is born without a woman. Forests cannot move. He is invincible!

But the witches show him one final vision: a line of kings stretching into the future, all descended from Banquo. His own lineage will end with him.

Macbeth orders the murder of Macduff's wife and children—innocents slaughtered out of pure paranoia. He has become the tyrant Scotland feared, surrounded by enemies, trusting no one.

"I have almost forgot the taste of fears," he says. He has killed so much, lost so much, that even his own death holds no terror.`,

      learningPoints: [
        {
          id: 'lp-macbeth-10-prophecy',
          content: 'The new prophecies give Macbeth false security through equivocation—technically true but dangerously misleading, showing how we hear what we want to hear.',
          category: 'literary-context',
        },
        {
          id: 'lp-macbeth-10-innocents',
          content: 'The murder of Macduff\'s family marks Macbeth\'s complete moral collapse—killing innocents who pose no threat, only to hurt his enemy.',
          category: 'literary-context',
        },
      ],

      inlineAnnotations: [
        {
          id: 'equivocation-annotation',
          text: 'equivocation',
          tooltip: {
            title: 'Equivocation: Deceptive Truth',
            content: 'The practice of using ambiguous language to deceive while technically telling the truth. The witches\' prophecies are literally true but misleading—no man "of woman born" (Macduff was delivered by caesarean), and Birnam Wood does "come" to Dunsinane (soldiers carry branches). A hot political topic in 1606 after the Gunpowder Plot conspirators used equivocation in their trials.',
            category: 'literary-context',
          },
        },
      ],
    },

    // Scene 11: Anachronism game
    {
      id: 'macbeth-scene-11-anachronism',
      type: 'anachronism',
      backgroundImage: 'https://cdn.midjourney.com/e61bf1cc-2ff0-49aa-a521-33252e00c751/0_0.png',

      prompt: 'Find the items that don\'t belong in medieval Scotland (11th century)',
      scenario: 'You are in Macbeth\'s castle in 11th-century Scotland. Some objects here are period-appropriate, but others are anachronisms—inventions that won\'t exist for centuries. Can you identify which items don\'t belong?',

      items: [
        {
          id: 'item-1',
          name: 'Sword',
          image: 'https://cdn.midjourney.com/1cffe455-98b0-405d-9bc4-63a8add09791/0_2.png',
          description: 'A steel sword with ornate hilt',
          explanation: 'Swords were the primary weapon of medieval Scottish warriors and nobles—this belongs here.',
        },
        {
          id: 'item-2',
          name: 'Crown',
          image: 'https://cdn.midjourney.com/7e905fa2-7117-43b9-bd9f-6af3f834b8f4/0_3.png',
          description: 'A golden crown with jewels',
          explanation: 'Scottish kings wore crowns as symbols of royal authority—this belongs here.',
        },
        {
          id: 'item-3',
          name: 'Telescope',
          image: 'https://cdn.midjourney.com/18b450eb-8628-4d69-ad38-38dcc070b250/0_2.png',
          description: 'A brass telescope for viewing distant objects',
          explanation: 'ANACHRONISM! Telescopes were invented in the early 1600s, over 500 years after Macbeth\'s time. Shakespeare himself lived before widespread telescope use!',
        },
        {
          id: 'item-4',
          name: 'Cauldron',
          image: 'https://cdn.midjourney.com/6dba3668-344b-45c4-bb4d-737f76efd61b/0_0.png',
          description: 'A large iron cooking pot',
          explanation: 'Cauldrons were common cooking vessels and associated with folk magic and witchcraft—this belongs here.',
        },
        {
          id: 'item-5',
          name: 'Pocket Watch',
          image: 'https://cdn.midjourney.com/63a4e895-2140-421f-9adc-e92fd805d74a/0_1.png',
          description: 'A small mechanical timepiece',
          explanation: 'ANACHRONISM! Mechanical clocks didn\'t appear until the 1300s, and pocket watches not until the 1500s—centuries after Macbeth.',
        },
        {
          id: 'item-6',
          name: 'Goblet',
          image: 'https://cdn.midjourney.com/1e8d965a-3bd3-4168-a9b8-1a226d3ac9e1/0_3.png',
          description: 'A silver drinking cup',
          explanation: 'Medieval nobility drank from goblets at feasts and banquets—this belongs here.',
        },
        {
          id: 'item-7',
          name: 'Printing Press',
          image: 'https://cdn.midjourney.com/32eae258-70c5-45ea-925e-c05dff87d5b9/0_3.png',
          description: 'A machine for printing text on paper',
          explanation: 'ANACHRONISM! The printing press was invented by Gutenberg around 1440, nearly 400 years after Macbeth\'s reign. All texts in his time were handwritten manuscripts.',
        },
        {
          id: 'item-8',
          name: 'Torch',
          image: 'https://cdn.midjourney.com/0a788a80-9a01-4140-ab1a-2e528a7c3c3d/0_3.png',
          description: 'A wooden torch for light',
          explanation: 'Torches and candles were the primary sources of light in medieval castles—this belongs here.',
        },
      ],

      correctAnswers: ['item-3', 'item-5', 'item-7'],

      learningPoints: [
        {
          id: 'lp-macbeth-11-setting',
          content: 'Macbeth is set in 11th-century Scotland but written in 1606, creating interesting tensions between historical accuracy and Renaissance stagecraft.',
          category: 'historical-context',
        },
      ],
    },

    // Scene 12: Lady Macbeth's madness
    {
      id: 'macbeth-scene-12-madness',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/cc68b687-df74-47d7-a44f-c831154ca5ce/0_0.png',
      image: 'https://cdn.midjourney.com/3220ef54-9acf-4d5d-a228-152ccce6a3b6/0_1.png',

      content: `While Macbeth descends into moral numbness, Lady Macbeth fractures in the opposite direction—into overwhelming guilt and madness.

She sleepwalks through the castle halls, rubbing her hands compulsively: "Out, damned spot! Out, I say! Yet who would have thought the old man to have had so much blood in him?"

She who once declared "a little water clears us of this deed" now cannot wash away the stain she sees—a stain invisible to others but indelible to her tormented mind.

"What's done cannot be undone," she whispers to herself. But she cannot accept this truth. She relives the murder night after night, trying desperately to undo what cannot be undone.

Her doctor watches in horror: "This disease is beyond my practice. More needs she the divine than the physician."

Soon after, Lady Macbeth dies. Whether by her own hand or simply from the consuming weight of guilt, Shakespeare leaves deliberately unclear. Macbeth, when told of her death, barely reacts:

"She should have died hereafter. There would have been a time for such a word."

He has become so numb to death—his own, hers, anyone's—that even his wife's passing means nothing. This is the ultimate cost of his ambition: the death of his capacity to feel.`,

      learningPoints: [
        {
          id: 'lp-macbeth-12-madness',
          content: 'Lady Macbeth\'s descent into madness shows that strength of will cannot overcome the psychological consequences of moral transgression.',
          category: 'literary-context',
        },
        {
          id: 'lp-macbeth-12-gender',
          content: 'Lady Macbeth initially rejects feminine "weakness" but ultimately suffers the very emotional collapse she despised, suggesting the impossibility of escaping conscience.',
          category: 'literary-context',
        },
        {
          id: 'lp-macbeth-12-numbness',
          content: 'Macbeth\'s muted response to his wife\'s death completes his moral descent—he has killed not just others but his own humanity.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 13: The final battle and death
    {
      id: 'macbeth-scene-13-climax',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/72fef0d9-3d18-4085-9abd-79f3a49522fb/0_0.png',
      image: 'https://cdn.midjourney.com/8d6b5a7c-0c71-4bd8-bde3-2c0955314a26/0_1.png',

      content: `The end comes swiftly.

Malcolm, Duncan's son, leads an army against Macbeth. They carry branches from Birnam Wood as camouflage—and so the forest "moves" to Dunsinane, fulfilling the prophecy Macbeth thought impossible.

His first security crumbles. But Macbeth still clings to the second: "None of woman born shall harm Macbeth."

Then Macduff confronts him.

"Despair thy charm," Macduff says, "for Macduff was from his mother's womb untimely ripped."

Born by caesarean section—technically not "of woman born" in the natural way. The final prophecy, too, was equivocation.

Macbeth sees the truth at last: he has been played by forces he thought he controlled. But he will not yield. "I will not yield to kiss the ground before young Malcolm's feet."

He fights. And Macduff kills him.

Malcolm is crowned king. Order is restored to Scotland. But the cost has been staggering: a good king murdered, innocents slaughtered, a noble warrior corrupted beyond redemption, and his ambitious wife driven to madness and death.

"The time is free," Malcolm declares. But the echo of Macbeth's nihilistic final words lingers: "Life's but a walking shadow... signifying nothing."`,

      learningPoints: [
        {
          id: 'lp-macbeth-13-equivocation',
          content: 'The prophecies\' equivocation teaches that we deceive ourselves when we hear only what we want to hear, ignoring warnings and alternate meanings.',
          category: 'literary-context',
        },
        {
          id: 'lp-macbeth-13-defiance',
          content: 'Macbeth\'s final defiant stand shows tragic nobility—he knows he is doomed but fights anyway, revealing the complexity of tragic heroes who are neither purely evil nor purely good.',
          category: 'literary-context',
        },
        {
          id: 'lp-macbeth-13-restoration',
          content: 'Unlike comedy where all is restored, tragedy\'s "restoration" feels hollow—Malcolm is king, but the human cost makes victory feel pyrrhic.',
          category: 'literary-context',
        },
      ],

      inlineAnnotations: [
        {
          id: 'equivocation-annotation',
          text: 'equivocation',
          tooltip: {
            title: 'Equivocation: Deceptive Truth',
            content: 'The practice of using ambiguous language to deceive while technically telling the truth. The witches\' prophecies are literally true but misleading—no man "of woman born" (Macduff was delivered by caesarean), and Birnam Wood does "come" to Dunsinane (soldiers carry branches). A hot political topic in 1606 after the Gunpowder Plot conspirators used equivocation in their trials.',
            category: 'literary-context',
          },
        },
      ],
    },

    // Scene 14: Timeline game
    {
      id: 'macbeth-scene-14-timeline',
      type: 'timeline-game',
      backgroundImage: 'https://cdn.midjourney.com/4974e075-58d5-4d81-bdc0-4da2c221b94d/0_0.png',

      prompt: 'Order the key events of Macbeth\'s downfall from prophecy to death',

      timelineEvents: [
        {
          id: 'event-1',
          title: 'The Weird Sisters\' First Prophecy',
          year: 1,
          description: 'The witches hail Macbeth as future Thane of Cawdor and King',
          image: 'https://cdn.midjourney.com/ae797866-c90c-4d5d-ab66-98b4173d80dd/0_2.png',
        },
        {
          id: 'event-2',
          title: 'Murder of Duncan',
          year: 2,
          description: 'Macbeth kills King Duncan and seizes the crown',
          image: 'https://cdn.midjourney.com/703009ee-1802-4137-8a0e-394d7cf61502/0_3.png',
        },
        {
          id: 'event-3',
          title: 'Murder of Banquo',
          year: 3,
          description: 'Macbeth has Banquo killed to prevent the prophecy of his descendants',
          image: 'https://cdn.midjourney.com/c385a03d-9a35-455d-8369-d98ad0866f41/0_1.png',
        },
        {
          id: 'event-4',
          title: 'Banquo\'s Ghost Appears',
          year: 4,
          description: 'Macbeth hallucinates Banquo\'s ghost at the royal banquet',
          image: 'https://cdn.midjourney.com/29761a39-cfb7-4bb6-9f5d-f2271e5ea892/0_3.png',
        },
        {
          id: 'event-5',
          title: 'Second Visit to the Witches',
          year: 5,
          description: 'The witches give new prophecies that Macbeth misinterprets',
          image: 'https://cdn.midjourney.com/3ab2c11f-1c3d-4f09-80aa-7c60561a6046/0_0.png',
        },
        {
          id: 'event-6',
          title: 'Lady Macbeth\'s Madness',
          year: 6,
          description: 'Lady Macbeth sleepwalks, consumed by guilt',
          image: 'https://cdn.midjourney.com/eebc5cba-952f-4533-8242-eb44857692d6/0_1.png',
        },
        {
          id: 'event-7',
          title: 'Lady Macbeth\'s Death',
          year: 7,
          description: 'Lady Macbeth dies, likely by her own hand',
          image: 'https://cdn.midjourney.com/b1da1ab5-1d23-46a0-ba53-08954e27de10/0_1.png',
        },
        {
          id: 'event-8',
          title: 'Birnam Wood Comes to Dunsinane',
          year: 8,
          description: 'Malcolm\'s army camouflages itself with tree branches',
          image: 'https://cdn.midjourney.com/2ea2e9bb-2eb4-4115-a71d-cd009dd4dec6/0_2.png',
        },
        {
          id: 'event-9',
          title: 'Macbeth\'s Death',
          year: 9,
          description: 'Macduff, born by caesarean section, kills Macbeth',
          image: 'https://cdn.midjourney.com/4ba50bd7-07db-490e-999e-ee0da45464db/0_1.png',
        },
      ],

      successThreshold: 70,

      learningPoints: [
        {
          id: 'lp-macbeth-14-structure',
          content: 'Macbeth follows a relentless tragic structure: temptation → crime → guilt → paranoia → further crimes → inevitable destruction.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 15: Reflection and interpretation
    {
      id: 'macbeth-scene-15-reflection',
      type: 'decision',
      backgroundImage: 'https://cdn.midjourney.com/8bdd54a9-f019-457f-af86-2376add6ea54/0_0.png',

      prompt: 'How do you interpret Macbeth\'s tragedy?',
      context: `You have witnessed Macbeth's complete journey from honored warrior to tyrant to corpse.

Shakespeare leaves us with questions rather than easy answers. What is the meaning of Macbeth's tragedy?`,

      choices: [
        {
          id: 'interpretation-evil',
          text: 'Macbeth is a villain who got what he deserved',
          consequence: 'This is one reading—but consider: Macbeth agonized over his choices, understood their evil, and suffered psychologically for every crime. Pure villains don\'t experience such torment. His tragedy is precisely that he was capable of better.',
          learningPoints: [
            {
              id: 'lp-macbeth-15-villain',
              content: 'Shakespearean tragic heroes differ from pure villains because they possess self-awareness, moral understanding, and the capacity for better choices—making their falls more tragic.',
              category: 'literary-context',
            },
          ],
        },
        {
          id: 'interpretation-victim',
          text: 'Macbeth is a victim of fate and supernatural manipulation',
          consequence: 'The prophecies tempted him, but they did not force his hand. The witches showed him possibilities; his ambition made the choices. Macbeth is tragic precisely because he had agency—and used it to destroy himself.',
          learningPoints: [
            {
              id: 'lp-macbeth-15-agency',
              content: 'The play dramatizes the tension between fate and free will, ultimately suggesting that we are responsible for our choices even when external forces tempt us.',
              category: 'literary-context',
            },
          ],
        },
        {
          id: 'interpretation-tragedy',
          text: 'Macbeth is a warning about ambition destroying those who cannot control it',
          consequence: 'Yes—this is the heart of the tragedy. Macbeth shows how internal forces (ambition, pride, the inability to resist temptation) can corrupt even honorable people. His tragedy is universal because we all struggle with these forces.',
          learningPoints: [
            {
              id: 'lp-macbeth-15-universal',
              content: 'Macbeth endures as tragedy because its psychological insights are universal—the temptation of power, the impossibility of escaping guilt, the cost of moral compromise.',
              category: 'literary-context',
            },
          ],
        },
      ],

      learningPoints: [],
    },

    // Scene 16: Conclusion and bridge to next chapter
    {
      id: 'macbeth-scene-16-conclusion',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/079edb2d-d106-4c02-8b2c-d10b6c2d1df6/0_0.png',

      content: `Macbeth shows us the clearest tragic arc Shakespeare ever wrote: a good man corrupted by ambition, descending through guilt and paranoia into moral numbness and inevitable destruction.

Unlike the comedies of Part I where misunderstandings resolve happily, here misunderstanding of prophecy leads to damnation. Unlike Romeo and Juliet where external forces (family feud) drive tragedy, Macbeth's destruction comes entirely from within.

**Key lessons from Macbeth:**

The structure of tragedy: exposition (prophecy) → rising action (murder) → climax (Banquo's ghost) → falling action (second prophecies) → catastrophe (death).

Ambition as tragic flaw: not desire itself, but the inability to control it or accept its limits.

The psychology of guilt: Macbeth and Lady Macbeth show two responses to moral transgression—numbness and madness—neither offering escape.

The cost of power: Macbeth gains the crown but loses sleep, peace, love, meaning, and finally life itself.

But Macbeth's internal corruption—ambition destroying from within—is only one form of psychological tragedy. In our next chapter, we will encounter a different kind of internal force: jealousy.

Where Macbeth chooses his evil knowingly, Othello will be manipulated into believing a lie. Where Macbeth's Lady pushes him toward murder, Othello's Iago will push him toward destroying the woman he loves.

The darkness deepens. Prepare yourself for the tragedy of jealousy.`,

      learningPoints: [
        {
          id: 'lp-macbeth-16-synthesis',
          content: 'Macbeth exemplifies the Shakespearean tragic pattern where internal psychological forces (ambition) prove more destructive than any external enemy.',
          category: 'literary-context',
        },
        {
          id: 'lp-macbeth-16-part2',
          content: 'Part II\'s three tragedies explore different internal corruptions: ambition (Macbeth), jealousy (Othello), and pride (King Lear)—all destroying from within.',
          category: 'literary-context',
        },
      ],

      events: {
        onExit: [{
          type: 'quiz',
          componentId: 'quiz-chapter-1-macbeth',
          condition: { type: 'if-not-completed' },
        }],
      },
    },
  ],

  endQuiz: chapter1Quiz,
};

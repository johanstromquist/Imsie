import type { Chapter } from '../../../types';
import { chapter3Quiz } from '../quizzes/chapter-3-quiz';

export const chapter3Tempest: Chapter = {
  id: 'chapter-3-tempest',
  title: 'Chapter 3: The Tempest - Reconciliation and Forgiveness',
  description: 'Shakespeare\'s farewell play explores the ultimate choice: revenge or forgiveness. Magic, colonialism, freedom, and the power of art culminate in a meditation on what it means to be human.',

  learningObjectives: [
    'Understand The Tempest as Shakespeare\'s farewell play—meta-theatrical reflection on art and power',
    'Analyze Prospero\'s choice to forgive rather than revenge—compare to Hamlet\'s paralysis and Brutus\'s action',
    'Evaluate colonialism themes: Prospero\'s control of Caliban and Ariel',
    'Recognize the transformation from tragedy to romance/tragicomedy',
    'Identify how The Tempest synthesizes and resolves themes from the entire trilogy',
  ],

  scenes: [
    // Scene 1: Introduction - Shakespeare's Farewell
    {
      id: 'tempest-scene-1-intro',
      type: 'narrative',
      backgroundImage: '[PLACEHOLDER-BG]/tempest-storm.png',
      image: '[PLACEHOLDER-IMG]/tempest-intro.png',

      content: `From darkness into light.

In Hamlet, we saw a man paralyzed by consciousness, unable to act until it was too late. In Julius Caesar, we saw a man act from noble principle and destroy the very thing he sought to save.

Now, in The Tempest—Shakespeare's farewell to the theater—we encounter a third way.

Prospero, the rightful Duke of Milan, was betrayed by his brother Antonio, who seized his throne and cast him adrift at sea with his infant daughter Miranda. For twelve years, Prospero has lived on a magical island, studying sorcery and raising his daughter far from civilization.

Now, through his magic, Prospero has created a storm—a tempest—to shipwreck his enemies and bring them to his island. He has absolute power over them.

This is not a tragedy of inability to act (Hamlet) or of acting wrongly (Julius Caesar). This is a romance about having the power to revenge—and choosing instead to forgive.

It is also Shakespeare's meditation on his own art. Prospero's magic is theater. His spells are words. When he breaks his staff and drowns his book, Shakespeare himself is saying goodbye.`,

      learningPoints: [
        {
          id: 'lp-tempest-1-farewell',
          content: 'The Tempest (1611) was Shakespeare\'s last solo play. It is widely interpreted as his reflection on his own artistic career and mortality.',
          category: 'literary-context',
        },
        {
          id: 'lp-tempest-1-resolution',
          content: 'The Tempest offers a resolution to the revenge cycle that consumed Hamlet and Julius Caesar—the choice of mercy over retribution.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 2: Prospero's Backstory
    {
      id: 'tempest-scene-2-backstory',
      type: 'narrative',
      backgroundImage: '[PLACEHOLDER-BG]/prospero-cave.png',
      image: '[PLACEHOLDER-IMG]/prospero-backstory.png',

      content: `Prospero was no warrior. He was a scholar.

As Duke of Milan, he preferred his library to his court, his books to his subjects. He trusted his brother Antonio to handle the government while he pursued his studies in the liberal arts and secret magic.

Antonio saw opportunity. He allied with Alonso, King of Naples, and together they overthrew Prospero. But killing a duke outright would be too bold. Instead, they put Prospero and three-year-old Miranda on a rotting boat and set them adrift at sea.

By rights, they should have died. But a kindly councillor named Gonzalo secretly stocked the boat with food, fresh water, rich garments—and Prospero's beloved books.

Father and daughter washed up on an isolated island, home only to the spirit Ariel (imprisoned by the witch Sycorax) and the witch's son Caliban. Prospero freed Ariel and enslaved Caliban. For twelve years, he has perfected his magic and raised Miranda, who remembers nothing of Milan.

Now, by chance or fate, his enemies sail past the island. Prospero sees his moment. He raises the tempest.

But what will he do with them once they are in his power?`,

      learningPoints: [
        {
          id: 'lp-tempest-2-usurpation',
          content: 'Prospero\'s backstory mirrors many of Shakespeare\'s political plays: a rightful ruler overthrown through treachery and neglect.',
          category: 'literary-context',
        },
        {
          id: 'lp-tempest-2-books',
          content: 'Gonzalo\'s secret gift of books connects learning to survival—and to Prospero\'s eventual power. Knowledge becomes literal magic.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 3: The Storm
    {
      id: 'tempest-scene-3-storm',
      type: 'narrative',
      backgroundImage: '[PLACEHOLDER-BG]/tempest-storm.png',
      image: '[PLACEHOLDER-IMG]/storm-magic.png',

      content: `The play opens with chaos.

A ship is torn apart by a supernatural storm. Sailors scream orders, noblemen panic, prayers mix with curses. King Alonso, his son Ferdinand, the treacherous Antonio, and the rest struggle against elemental fury.

"All lost! To prayers, to prayers! All lost!"

On shore, Miranda watches in horror as the ship breaks apart.

"If by your art, my dearest father, you have put the wild waters in this roar, allay them!"

Prospero calms her. Not a single person will be harmed, he promises. The storm is illusion—his magic working to bring his enemies ashore, scattered and vulnerable, believing each other dead.

Ferdinand, separated from the rest, follows Ariel's magical music to Prospero's cave—where he sees Miranda. Neither young person has seen anyone of the opposite sex beyond their immediate family. It is love at first sight.

"What is't? A spirit?" Ferdinand asks. "Lord, how it looks about! Believe me, sir, it carries a brave form."

Prospero watches. Ferdinand's father Alonso helped usurp his throne. Now Alonso's son falls in love with Prospero's daughter.

This is part of Prospero's plan. But it is also—perhaps—justice becoming love.`,

      learningPoints: [
        {
          id: 'lp-tempest-3-illusion',
          content: 'The tempest itself is an illusion—no one is harmed. Prospero\'s magic creates fear without destruction, unlike real revenge.',
          category: 'literary-context',
        },
        {
          id: 'lp-tempest-3-love',
          content: 'Ferdinand and Miranda\'s love contrasts with the betrayal and violence elsewhere—innocence and genuine feeling emerging from political wreckage.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 4: Dialogue - Prospero and Miranda
    {
      id: 'tempest-scene-4-miranda',
      type: 'dialogue',
      backgroundImage: '[PLACEHOLDER-BG]/prospero-cave.png',

      character: {
        id: 'miranda',
        name: 'Miranda',
        portrait: '[PLACEHOLDER-PORTRAIT]/miranda.png',
        description: 'Prospero\'s daughter, innocent and compassionate, who has never known civilization',
      },

      dialogueTree: {
        id: 'miranda-node-1',
        speaker: 'miranda',
        text: 'O, I have suffered with those that I saw suffer! A brave vessel, who had no doubt some noble creature in her, dashed all to pieces! O, the cry did knock against my very heart! Poor souls, they perished!',

        responses: [
          {
            id: 'response-comfort',
            text: 'Be collected. No more amazement. Tell your piteous heart there\'s no harm done.',
            nextNodeId: 'miranda-node-2',
            learningPoints: [
              {
                id: 'lp-tempest-4a-compassion',
                content: 'Miranda\'s immediate response to suffering is empathy, even for strangers—a moral compass against which Prospero\'s revenge must be measured.',
                category: 'literary-context',
              },
            ],
          },
          {
            id: 'response-story',
            text: 'It is time I told you the story of who you are and how we came to this place.',
            nextNodeId: 'miranda-node-3',
            learningPoints: [
              {
                id: 'lp-tempest-4b-revelation',
                content: 'Prospero uses this moment to reveal Miranda\'s true identity—orphaned princess, victim of usurpation, heir to a dukedom.',
                category: 'literary-context',
              },
            ],
          },
        ],

        allNodes: [
          {
            id: 'miranda-node-2',
            speaker: 'miranda',
            text: 'No harm? But this storm was dreadful! How can you say no harm was done?',
            responses: [
              {
                id: 'response-explain',
                text: 'I have done nothing but in care of thee. \'Tis time I should inform thee farther.',
                nextNodeId: 'miranda-node-3',
              },
            ],
          },
          {
            id: 'miranda-node-3',
            speaker: 'miranda',
            text: 'You have often begun to tell me what I am, but stopped and left me to bootless inquisition, concluding "Stay: not yet."',
            responses: [
              {
                id: 'response-now',
                text: 'The hour\'s now come. Obey, and be attentive. Canst thou remember a time before we came unto this cell?',
                nextNodeId: 'miranda-node-4',
              },
            ],
          },
          {
            id: 'miranda-node-4',
            speaker: 'miranda',
            text: '\'Tis far off, and rather like a dream than an assurance that my remembrance warrants. Had I not four or five women once that tended me?',
            isEnd: true,
          },
        ],
      },

      learningPoints: [
        {
          id: 'lp-tempest-4-innocence',
          content: 'Miranda represents uncorrupted human nature—her compassion and capacity for love untouched by civilization\'s violence.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 5: Dialogue - Prospero and Ariel
    {
      id: 'tempest-scene-5-ariel',
      type: 'dialogue',
      backgroundImage: '[PLACEHOLDER-BG]/enchanted-forest.png',

      character: {
        id: 'ariel',
        name: 'Ariel',
        portrait: '[PLACEHOLDER-PORTRAIT]/ariel.png',
        description: 'An ethereal spirit bound to serve Prospero, longing for freedom',
      },

      dialogueTree: {
        id: 'ariel-node-1',
        speaker: 'ariel',
        text: 'All hail, great master! Grave sir, hail! I come to answer thy best pleasure, be\'t to fly, to swim, to dive into the fire, to ride on the curled clouds. To thy strong bidding, task Ariel and all his quality.',

        responses: [
          {
            id: 'response-report',
            text: 'Hast thou, spirit, performed to point the tempest that I bade thee?',
            nextNodeId: 'ariel-node-2',
            learningPoints: [
              {
                id: 'lp-tempest-5a-service',
                content: 'Ariel\'s service is both magical and theatrical—the spirit is Prospero\'s stage manager, executing his visions.',
                category: 'literary-context',
              },
            ],
          },
          {
            id: 'response-freedom',
            text: 'How now? Moody? What is\'t thou canst demand?',
            nextNodeId: 'ariel-node-3',
            learningPoints: [
              {
                id: 'lp-tempest-5b-promise',
                content: 'Prospero has promised Ariel freedom in exchange for service—a contract that both binds and must eventually be honored.',
                category: 'literary-context',
              },
            ],
          },
        ],

        allNodes: [
          {
            id: 'ariel-node-2',
            speaker: 'ariel',
            text: 'To every article. I boarded the king\'s ship. Now in the waist, the deck, in every cabin, I flamed amazement. Sometimes I\'d divide, and burn in many places; on the topmast, the yards, and bowsprit would I flame distinctly, then meet and join. Jove\'s lightnings, the precursors o\' th\' dreadful thunderclaps, more momentary and sight-outrunning were not.',
            responses: [
              {
                id: 'response-good',
                text: 'My brave spirit! But are they safe?',
                nextNodeId: 'ariel-node-4',
              },
            ],
          },
          {
            id: 'ariel-node-3',
            speaker: 'ariel',
            text: 'My liberty.',
            responses: [
              {
                id: 'response-reminder',
                text: 'Before the time be out? No more! Dost thou forget from what a torment I did free thee?',
                nextNodeId: 'ariel-node-5',
              },
            ],
          },
          {
            id: 'ariel-node-4',
            speaker: 'ariel',
            text: 'Not a hair perished. On their sustaining garments not a blemish, but fresher than before. I have dispersed them about the isle, the king\'s son by himself.',
            isEnd: true,
          },
          {
            id: 'ariel-node-5',
            speaker: 'ariel',
            text: 'I thank thee, master. I will be correspondent to command and do my spiriting gently.',
            isEnd: true,
          },
        ],
      },

      learningPoints: [
        {
          id: 'lp-tempest-5-freedom',
          content: 'Ariel\'s longing for freedom raises questions about servitude and promise—even Prospero the victim becomes Prospero the enslaver.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 6: Dialogue - Prospero and Caliban
    {
      id: 'tempest-scene-6-caliban',
      type: 'dialogue',
      backgroundImage: '[PLACEHOLDER-BG]/caliban-dwelling.png',

      character: {
        id: 'caliban',
        name: 'Caliban',
        portrait: '[PLACEHOLDER-PORTRAIT]/caliban.png',
        description: 'Son of the witch Sycorax, native to the island, enslaved by Prospero',
      },

      dialogueTree: {
        id: 'caliban-node-1',
        speaker: 'caliban',
        text: 'As wicked dew as e\'er my mother brushed with raven\'s feather from unwholesome fen drop on you both! A southwest blow on ye and blister you all o\'er!',

        responses: [
          {
            id: 'response-threaten',
            text: 'For this, be sure, tonight thou shalt have cramps!',
            nextNodeId: 'caliban-node-2',
            learningPoints: [
              {
                id: 'lp-tempest-6a-punishment',
                content: 'Prospero controls Caliban through pain and fear—the magic that liberates Ariel oppresses Caliban.',
                category: 'literary-context',
              },
            ],
          },
          {
            id: 'response-remind',
            text: 'Thou most lying slave, whom stripes may move, not kindness! I have used thee with human care and lodged thee in mine own cell.',
            nextNodeId: 'caliban-node-3',
            learningPoints: [
              {
                id: 'lp-tempest-6b-claim',
                content: 'Prospero claims he treated Caliban kindly—but from whose perspective? This is a colonial narrative.',
                category: 'literary-context',
              },
            ],
          },
        ],

        allNodes: [
          {
            id: 'caliban-node-2',
            speaker: 'caliban',
            text: 'This island\'s mine, by Sycorax my mother, which thou takest from me! When thou camest first, thou strokedst me and madest much of me, wouldst give me water with berries in\'t. And then I loved thee!',
            responses: [
              {
                id: 'response-betrayal',
                text: 'And what happened then, thou filth?',
                nextNodeId: 'caliban-node-4',
              },
            ],
          },
          {
            id: 'caliban-node-3',
            speaker: 'caliban',
            text: 'You taught me language, and my profit on\'t is I know how to curse! The red plague rid you for learning me your language!',
            isEnd: true,
          },
          {
            id: 'caliban-node-4',
            speaker: 'caliban',
            text: 'O ho, O ho! Would\'t had been done! Thou didst prevent me—I had peopled else this isle with Calibans.',
            isEnd: true,
          },
        ],
      },

      learningPoints: [
        {
          id: 'lp-tempest-6-colonial',
          content: '"You taught me language, and my profit on\'t is I know how to curse" is one of literature\'s most powerful statements about colonialism and cultural imposition.',
          category: 'literary-context',
        },
        {
          id: 'lp-tempest-6-perspective',
          content: 'Caliban\'s claim that "this island\'s mine" complicates Prospero\'s moral position—is the rightful Duke of Milan also a usurper?',
          category: 'literary-context',
        },
      ],
    },

    // Scene 7: Spectrum Game - Complex Questions
    {
      id: 'tempest-scene-7-spectrum',
      type: 'custom-mini-game',
      backgroundImage: '[PLACEHOLDER-BG]/magical-island.png',

      gameType: 'spectrum',
      config: {
        title: 'The Tempest\'s Complex Questions',
        instructions: 'Position yourself on each spectrum to explore the play\'s moral ambiguities.',
        questions: [
          {
            id: 'spectrum-1',
            question: 'Is Prospero a benevolent ruler or a colonizer?',
            leftLabel: 'Benevolent Ruler',
            rightLabel: 'Colonial Oppressor',
            explanation: 'Prospero freed Ariel but enslaved Caliban. He protects Miranda but controls everything. Modern readings often emphasize the colonial parallels.',
          },
          {
            id: 'spectrum-2',
            question: 'Is Caliban a savage monster or an indigenous victim?',
            leftLabel: 'Monster',
            rightLabel: 'Victim',
            explanation: 'Shakespeare presents Caliban as both threatening and sympathetic—a complexity that resists simple judgment.',
          },
          {
            id: 'spectrum-3',
            question: 'Is Prospero\'s magic art or control?',
            leftLabel: 'Artistic Creation',
            rightLabel: 'Instruments of Control',
            explanation: 'Magic in The Tempest creates beauty (the masque) and compels obedience—a dual nature like art itself.',
          },
          {
            id: 'spectrum-4',
            question: 'Should Prospero forgive or take revenge?',
            leftLabel: 'Revenge Is Justice',
            rightLabel: 'Forgiveness Is Wisdom',
            explanation: 'The play\'s central question—and Prospero chooses forgiveness, though whether from wisdom or exhaustion is debatable.',
          },
        ],
      },

      learningPoints: [
        {
          id: 'lp-tempest-7-ambiguity',
          content: 'The Tempest refuses easy moral categories—Prospero is simultaneously victim and oppressor, artist and tyrant.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 8: Ferdinand and Miranda's Love
    {
      id: 'tempest-scene-8-love',
      type: 'narrative',
      backgroundImage: '[PLACEHOLDER-BG]/island-clearing.png',
      image: '[PLACEHOLDER-IMG]/ferdinand-miranda.png',

      content: `Amid all this complexity—magic, revenge, colonialism—love blooms.

Ferdinand, believing his father dead, encounters Miranda. She has never seen a young man before. He thinks her a goddess.

"Admired Miranda!
Indeed the top of admiration, worth
What's dearest to the world!"

Miranda, equally struck, responds:

"I might call him
A thing divine, for nothing natural
I ever saw so noble."

Prospero watches, secretly pleased. He tests Ferdinand by forcing him to carry logs like a servant—punishment for his father's crimes? Or simply making sure this prince is worthy of his daughter?

Ferdinand accepts the labor gladly:

"The very instant that I saw you, did
My heart fly to your service."

This love is different from the tragic passion of Romeo and Juliet, the manipulated jealousy of Othello, the political calculation of marriage in Julius Caesar. It is innocent, mutual, and blessed by the father figure.

In The Tempest, love survives. Love redeems.

Perhaps this is what Shakespeare wanted to leave us with: not tragedy, but the possibility of genuine connection across the wreckage of politics and revenge.`,

      learningPoints: [
        {
          id: 'lp-tempest-8-love',
          content: 'Ferdinand and Miranda\'s love represents romance as redemption—the next generation healing what the previous one broke.',
          category: 'literary-context',
        },
        {
          id: 'lp-tempest-8-contrast',
          content: 'Unlike Romeo and Juliet (tragedy) or Beatrice and Benedick (comedy), this love faces no family opposition—Prospero orchestrates rather than obstructs it.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 9: Decision - Prospero's Choice
    {
      id: 'tempest-scene-9-decision',
      type: 'decision',
      backgroundImage: '[PLACEHOLDER-BG]/prospero-cave.png',
      image: '[PLACEHOLDER-IMG]/prospero-choice.png',

      prompt: 'You are Prospero. Your enemies are in your power. What do you choose?',
      context: `Twelve years ago, your brother Antonio stole your throne with the help of King Alonso. They set you adrift to die. Only luck and a kind councillor allowed you and your infant daughter to survive.

Now, through your magic, you have brought these men to your island. They are at your mercy. Ariel has reported their condition: Antonio and Alonso wander the island, tormented by spirits, believing Prince Ferdinand is dead.

Your magic could destroy them utterly. You could take your revenge.

But Ariel has also reported something else: if you could see them now, your affections would become tender. "Mine would, sir, were I human," Ariel says.

Even the spirit suggests mercy.

You have absolute power. You can revenge—or you can forgive.

What do you choose?`,

      choices: [
        {
          id: 'choice-revenge',
          text: 'Revenge—they deserve to suffer as I have suffered',
          consequence: 'A human response. They wronged you terribly. But will revenge restore what was lost? Will more suffering create justice? Hamlet\'s revenge killed everyone around him. Brutus\'s "noble" action destroyed Rome. What will yours destroy?',
          learningPoints: [
            {
              id: 'lp-tempest-9a-revenge',
              content: 'Revenge feels just but often perpetuates cycles of violence—a lesson Hamlet and Julius Caesar demonstrate.',
              category: 'literary-context',
            },
          ],
        },
        {
          id: 'choice-forgive',
          text: 'Forgive—the rarer action is in virtue than in vengeance',
          consequence: 'This is Prospero\'s actual choice. "Though with their high wrongs I am struck to the quick, yet with my nobler reason \'gainst my fury do I take part. The rarer action is in virtue than in vengeance." Forgiveness is harder than revenge—but it breaks the cycle.',
          learningPoints: [
            {
              id: 'lp-tempest-9b-forgive',
              content: 'Prospero\'s choice of forgiveness represents Shakespeare\'s final statement on the revenge theme that dominated his tragedies.',
              category: 'literary-context',
            },
          ],
        },
        {
          id: 'choice-conditional',
          text: 'Forgive conditionally—only if they truly repent',
          consequence: 'A middle path. Forgiveness need not be unconditional. But who judges sincerity? And can true repentance be compelled? The play suggests that some characters (Antonio, Sebastian) never truly repent—yet Prospero forgives anyway.',
          learningPoints: [
            {
              id: 'lp-tempest-9c-conditional',
              content: 'Conditional forgiveness raises questions about power—does demanding repentance turn forgiveness into another form of control?',
              category: 'literary-context',
            },
          ],
        },
      ],

      learningPoints: [],
    },

    // Scene 10: Primary Source - Renunciation Speech
    {
      id: 'tempest-scene-10-renunciation',
      type: 'primary-source',
      backgroundImage: '[PLACEHOLDER-BG]/magical-island.png',
      image: '[PLACEHOLDER-IMG]/staff-breaking.png',

      prompt: 'Examine Prospero\'s famous renunciation of magic',

      source: {
        title: 'Prospero\'s Renunciation (Act 5, Scene 1)',
        type: 'text',
        content: `PROSPERO:
Ye elves of hills, brooks, standing lakes, and groves,
And ye that on the sands with printless foot
Do chase the ebbing Neptune, and do fly him
When he comes back; you demi-puppets that
By moonshine do the green sour ringlets make,
Whereof the ewe not bites...

...I have bedimmed
The noontide sun, called forth the mutinous winds,
And 'twixt the green sea and the azured vault
Set roaring war; to the dread rattling thunder
Have I given fire, and rifted Jove's stout oak
With his own bolt; the strong-based promontory
Have I made shake, and by the spurs plucked up
The pine and cedar; graves at my command
Have waked their sleepers, oped, and let 'em forth
By my so potent art.

But this rough magic
I here abjure...

I'll break my staff,
Bury it certain fathoms in the earth,
And deeper than did ever plummet sound
I'll drown my book.`,
        citation: 'The Tempest, Act 5, Scene 1 (1611)',
      },

      questions: [
        {
          id: 'q-renunciation-1',
          question: 'Why does Prospero choose to give up his magic?',
          type: 'multiple-choice',
          options: [
            'His magic has run out and he has no choice',
            'He realizes that power over nature and people is not the same as wisdom or happiness',
            'Milan has rejected magic and he must conform',
            'The magic belonged to Sycorax and was never rightfully his',
          ],
          correctAnswer: 'He realizes that power over nature and people is not the same as wisdom or happiness',
          explanation: 'Prospero has achieved everything magic could give him—but magic is also isolation, control, manipulation. He chooses to return to humanity.',
        },
        {
          id: 'q-renunciation-2',
          question: 'What meta-theatrical meaning does Prospero breaking his staff suggest?',
          type: 'multiple-choice',
          options: [
            'Magic is evil and must be destroyed',
            'Shakespeare himself is breaking his theatrical tools—the playwright retiring from the stage',
            'Prospero fears the magic will be used against him',
            'The staff was always borrowed and must be returned',
          ],
          correctAnswer: 'Shakespeare himself is breaking his theatrical tools—the playwright retiring from the stage',
          explanation: 'Prospero\'s magic is widely read as Shakespeare\'s art. Breaking the staff symbolizes Shakespeare retiring from theater—this was his last solo play.',
        },
      ],

      learningPoints: [
        {
          id: 'lp-tempest-10-power',
          content: 'Prospero renounces absolute power—a choice that differentiates him from Shakespeare\'s tragic figures who cling to power until destruction.',
          category: 'literary-context',
        },
        {
          id: 'lp-tempest-10-meta',
          content: 'The broken staff and drowned book symbolize Shakespeare ending his theatrical career—magic as metaphor for dramatic art.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 11: Cause and Effect
    {
      id: 'tempest-scene-11-cause-effect',
      type: 'cause-effect',
      backgroundImage: '[PLACEHOLDER-BG]/magical-island.png',
      image: '[PLACEHOLDER-IMG]/cause-effect-tempest.png',

      prompt: 'Match Prospero\'s choices to their consequences',

      pairs: [
        {
          id: 'pair-1',
          cause: 'Prospero chooses forgiveness over revenge',
          effect: 'His enemies are reconciled rather than destroyed, breaking the cycle of violence',
          explanation: 'Unlike Hamlet or Macbeth, Prospero achieves resolution through mercy rather than bloodshed.',
        },
        {
          id: 'pair-2',
          cause: 'Prospero frees Ariel',
          effect: 'He loses magical power but honors his promise and restores the spirit\'s freedom',
          explanation: 'Freeing Ariel demonstrates that Prospero has learned to release control rather than cling to power.',
        },
        {
          id: 'pair-3',
          cause: 'Prospero renounces his magic',
          effect: 'He must return to Milan as a mortal duke, vulnerable but human',
          explanation: 'Giving up supernatural power represents accepting human limitations and mortality.',
        },
        {
          id: 'pair-4',
          cause: 'Ferdinand and Miranda marry',
          effect: 'Milan and Naples are united through love rather than war—healing political wounds',
          explanation: 'The young lovers\' marriage transforms political betrayal into political reconciliation.',
        },
        {
          id: 'pair-5',
          cause: 'Prospero releases Caliban and leaves the island',
          effect: 'The island returns to its native inhabitant—though this is never stated, it is implied',
          explanation: 'By leaving, Prospero ends his colonial rule, though Shakespeare leaves this resolution ambiguous.',
        },
      ],

      learningPoints: [
        {
          id: 'lp-tempest-11-resolution',
          content: 'Each of Prospero\'s choices in Act 5 releases control—a systematic dismantling of power in favor of human connection.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 12: Freeing Ariel
    {
      id: 'tempest-scene-12-ariel-freedom',
      type: 'narrative',
      backgroundImage: '[PLACEHOLDER-BG]/enchanted-forest.png',
      image: '[PLACEHOLDER-IMG]/ariel-free.png',

      content: `With his enemies forgiven, his daughter betrothed, and his dukedom restored, Prospero turns to his final obligation.

"My Ariel, chick,
That is thy charge. Then to the elements
Be free, and fare thou well!"

Ariel's song responds:

"Where the bee sucks, there suck I;
In a cowslip's bell I lie;
There I couch when owls do cry.
On the bat's back I do fly
After summer merrily.
Merrily, merrily shall I live now
Under the blossom that hangs on the bough."

The spirit who created tempests, tormented enemies, and served Prospero's every magical whim is released into the air, into freedom, into joy.

This is not death. It is liberation.

And perhaps Prospero envies Ariel. The spirit is free; Prospero must return to Milan, to politics, to mortality.

But he has kept his promise. He has honored his contract. He has let go.`,

      learningPoints: [
        {
          id: 'lp-tempest-12-freedom',
          content: 'Ariel\'s freedom represents the liberation that comes from keeping promises and releasing control—freedom for both master and servant.',
          category: 'literary-context',
        },
        {
          id: 'lp-tempest-12-contrast',
          content: 'Ariel\'s joyful freedom contrasts with the unresolved situation of Caliban—Shakespeare does not pretend all colonial problems have easy solutions.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 13: Primary Source - The Epilogue
    {
      id: 'tempest-scene-13-epilogue',
      type: 'primary-source',
      backgroundImage: '[PLACEHOLDER-BG]/globe-stage.png',
      image: '[PLACEHOLDER-IMG]/prospero-epilogue.png',

      prompt: 'Examine Prospero\'s Epilogue—Shakespeare\'s farewell to the stage',

      source: {
        title: 'Epilogue (Spoken by Prospero)',
        type: 'text',
        content: `Now my charms are all o'erthrown,
And what strength I have's mine own,
Which is most faint. Now, 'tis true,
I must be here confined by you,
Or sent to Naples. Let me not,
Since I have my dukedom got
And pardoned the deceiver, dwell
In this bare island by your spell;
But release me from my bands
With the help of your good hands.
Gentle breath of yours my sails
Must fill, or else my project fails,
Which was to please. Now I want
Spirits to enforce, art to enchant,
And my ending is despair,
Unless I be relieved by prayer,
Which pierces so that it assaults
Mercy itself and frees all faults.
As you from crimes would pardoned be,
Let your indulgence set me free.`,
        citation: 'The Tempest, Epilogue (1611)',
      },

      questions: [
        {
          id: 'q-epilogue-1',
          question: 'Who is "you" in this epilogue, and what is Prospero/Shakespeare asking for?',
          type: 'multiple-choice',
          options: [
            'The other characters in the play, asking for their forgiveness',
            'The audience, asking for applause to release him from the stage/island',
            'God, asking for divine forgiveness of sins',
            'The actors, asking them to finish the performance',
          ],
          correctAnswer: 'The audience, asking for applause to release him from the stage/island',
          explanation: 'The epilogue breaks the fourth wall. Prospero (and Shakespeare) asks the audience to applaud ("help of your good hands") to release him from the theatrical illusion.',
        },
        {
          id: 'q-epilogue-2',
          question: 'What parallel does the epilogue draw between Prospero and the audience?',
          type: 'multiple-choice',
          options: [
            'Both are powerful magicians who control reality',
            'Both seek forgiveness—Prospero gave it to his enemies, now he asks the audience for indulgence',
            'Both are trapped on islands and need rescue',
            'Both have committed crimes that require punishment',
          ],
          correctAnswer: 'Both seek forgiveness—Prospero gave it to his enemies, now he asks the audience for indulgence',
          explanation: '"As you from crimes would pardoned be, / Let your indulgence set me free"—the epilogue connects Prospero\'s forgiveness of his enemies to the audience\'s "forgiveness" (applause) of the play.',
        },
      ],

      learningPoints: [
        {
          id: 'lp-tempest-13-farewell',
          content: 'The Epilogue is Shakespeare\'s most direct address to his audience—a request for the indulgence that theater always requires.',
          category: 'literary-context',
        },
        {
          id: 'lp-tempest-13-reciprocal',
          content: 'Forgiveness becomes reciprocal: as Prospero forgave, so must the audience forgive—art\'s imperfections, the playwright\'s mortality, the ending of stories.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 14: Quote Attribution
    {
      id: 'tempest-scene-14-quotes',
      type: 'quote-attribution',
      backgroundImage: '[PLACEHOLDER-BG]/scroll-background.png',

      prompt: 'Match these famous Tempest quotes to their speakers and contexts',

      quotes: [
        {
          id: 'quote-1',
          text: 'We are such stuff as dreams are made on, and our little life is rounded with a sleep.',
          speaker: 'Prospero',
          context: 'After the masque dissolves, Prospero reflects on the transience of all earthly things—including theater itself.',
          explanation: 'One of Shakespeare\'s most famous philosophical statements, comparing life to a dream that ends in the "sleep" of death.',
        },
        {
          id: 'quote-2',
          text: 'Hell is empty, and all the devils are here.',
          speaker: 'Ariel (quoting Ferdinand)',
          context: 'Ferdinand\'s words during the terrifying shipwreck—demons seem to attack the ship.',
          explanation: 'The line has taken on modern meaning about evil being present in the human world rather than in a distant hell.',
        },
        {
          id: 'quote-3',
          text: 'You taught me language, and my profit on\'t is I know how to curse.',
          speaker: 'Caliban',
          context: 'Caliban\'s bitter response to Prospero\'s claim of having civilized him.',
          explanation: 'A powerful critique of colonial "education"—language becomes a tool of resistance rather than assimilation.',
        },
        {
          id: 'quote-4',
          text: 'O brave new world that has such people in\'t!',
          speaker: 'Miranda',
          context: 'Miranda\'s innocent wonder at seeing the shipwrecked nobles—ironic, since they include traitors and conspirators.',
          explanation: 'Aldous Huxley took his title "Brave New World" from this line, using its irony about naive optimism.',
        },
        {
          id: 'quote-5',
          text: 'The rarer action is in virtue than in vengeance.',
          speaker: 'Prospero',
          context: 'Prospero explains why he chooses forgiveness over revenge.',
          explanation: 'The play\'s moral center—virtue (mercy) is rarer and thus more valuable than vengeance.',
        },
      ],

      learningPoints: [
        {
          id: 'lp-tempest-14-influence',
          content: 'The Tempest\'s phrases have shaped modern language and thought—from "brave new world" to reflections on dreams and mortality.',
          category: 'cultural-context',
        },
      ],
    },

    // Scene 15: Conclusion with Quiz Trigger
    {
      id: 'tempest-scene-15-conclusion',
      type: 'narrative',
      backgroundImage: '[PLACEHOLDER-BG]/magical-island.png',
      image: '[PLACEHOLDER-IMG]/tempest-conclusion.png',

      content: `The Tempest ends with reconciliation.

Prospero forgives his brother Antonio—though Antonio, notably, never asks for forgiveness and never expresses remorse. Alonso repents and restores Prospero's dukedom. Ferdinand and Miranda will marry, uniting the families through love.

Prospero frees Ariel. He prepares to leave the island. He asks the audience for indulgence.

And what of Caliban? Prospero says simply: "This thing of darkness I acknowledge mine." He accepts responsibility for Caliban—but Shakespeare leaves Caliban's future ambiguous.

The play does not resolve all its tensions. Colonialism is not undone. Antonio is forgiven but not reformed. The island remains a place of both freedom and oppression.

But The Tempest offers something the tragedies could not: a model of choosing mercy over revenge.

Where Hamlet was paralyzed, Prospero acts.
Where Brutus acted destructively, Prospero releases.
Where Macbeth clung to power, Prospero lets go.

This is Shakespeare's final gift: the image of a powerful man choosing forgiveness, breaking his staff, drowning his book, and asking simply to be released.

"As you from crimes would pardoned be, let your indulgence set me free."`,

      learningPoints: [
        {
          id: 'lp-tempest-15-synthesis',
          content: 'The Tempest synthesizes Shakespeare\'s career—the power of Part II becomes wisdom, the paralysis of Hamlet becomes action, tragedy becomes romance.',
          category: 'literary-context',
        },
        {
          id: 'lp-tempest-15-gift',
          content: 'Shakespeare\'s final solo play offers not a solution but a model: power wielded for restoration rather than destruction, magic released rather than hoarded.',
          category: 'literary-context',
        },
      ],

      events: {
        onExit: [{
          type: 'quiz',
          componentId: 'quiz-chapter-3-tempest',
          condition: { type: 'if-not-completed' },
        }],
      },
    },
  ],

  endQuiz: chapter3Quiz,
};

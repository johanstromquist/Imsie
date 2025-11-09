import type { Chapter } from '../../../types';
import { chapter3Quiz } from '../quizzes/chapter-3-quiz';

export const chapter3: Chapter = {
  id: 'chapter-3-twelfth-night',
  title: 'Chapter 3: Twelfth Night - Disguise and Self-Discovery',
  description: 'Enter the enchanted realm of Illyria, where disguise reveals truth, love tangles in delightful confusion, and foolishness proves wiser than wisdom.',

  learningObjectives: [
    'Understand how disguise enables characters to discover their true selves',
    'Analyze the play\'s exploration of gender roles and performance',
    'Recognize the "comedy of errors" structure and mistaken identity',
    'Identify the subplot structure (Viola/Orsino/Olivia vs. Malvolio)',
    'Explore how love can be both foolish and wise',
  ],

  scenes: [
    // Scene 1: Shipwreck and Viola's disguise decision
    {
      id: 'twelfth-scene-1-shipwreck',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/583be367-43be-42f2-a975-80c5d65d8f64/0_0.png',
      image: 'https://cdn.midjourney.com/583be367-43be-42f2-a975-80c5d65d8f64/0_0.png',

      content: `The storm had come from nowhere, tearing the ship apart in the waters off the coast of Illyria. You watch as a young woman crawls onto the beach, gasping, alone.

"Sebastian!" she cries into the wind, searching the waves for her twin brother. But there's no answer—only the crash of surf and the cry of gulls.

This is Viola, a noblewoman far from home, who believes her brother has drowned. She stands on unfamiliar shores with nothing but her wits and the clothes on her back.

The ship's captain, who also survived, approaches. "Lady, we're in Illyria. Duke Orsino rules here—a melancholy nobleman who pines for the Lady Olivia, though she'll have none of him."

Viola makes a decision that will change everything: "I'll serve this Duke," she says, "but not as a woman. The world is too dangerous for me to travel alone. Captain, help me. I'll disguise myself as a young man—a page in Orsino's service. I have some skill in music; I'll offer him that."

Within days, "Cesario" enters Duke Orsino's court—a charming young man with a boy's voice and a way with words. No one suspects that beneath the doublet and hose stands Viola, hiding in plain sight.`,

      inlineAnnotations: [
        {
          id: 'twelfth-ann-1-illyria',
          text: 'Illyria',
          tooltip: {
            title: 'A Land of Fantasy',
            content: 'Illyria was a real ancient region on the Adriatic coast, but Shakespeare uses it as a fantasy setting—a magical place where normal rules don\'t apply and transformations are possible.',
            category: 'historical-context',
          },
        },
      ],

      learningPoints: [
        {
          id: 'lp-twelfth-1-setup',
          content: 'Shakespeare uses shipwreck as a literary device to separate characters from their old identities and social structures, enabling transformation.',
          category: 'literary-context',
        },
        {
          id: 'lp-twelfth-1-disguise',
          content: 'Viola\'s disguise is motivated by practical necessity (safety), but it becomes a tool for self-discovery and social commentary.',
          category: 'literary-context',
        },
        {
          id: 'lp-twelfth-1-twins',
          content: 'The twin motif (Viola and Sebastian) sets up the play\'s comedy of errors—identical twins enable mistaken identity plots.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 2: Decision - Should Viola reveal her identity?
    {
      id: 'twelfth-scene-2-decision',
      type: 'decision',
      backgroundImage: 'https://cdn.midjourney.com/853e1bb8-4078-450a-80da-47825bdb25ef/0_0.png',
      image: 'https://cdn.midjourney.com/3a7af9e8-8cb5-4bc0-b0cf-7e5f8b0900e6/0_1.png',

      prompt: 'Viola has successfully disguised herself as "Cesario" and entered Orsino\'s service. But complications are arising. What should she do?',
      context: `Three days into her service, "Cesario" has become Duke Orsino's favorite. He confides in this sympathetic young man, pouring out his heart about his unrequited love for Olivia.

The problem? Viola is falling in love with Orsino herself.

"If I were a woman," she thinks, "I would never reject a man like him." But she can't reveal her true identity without losing his trust and her safety.

Meanwhile, Orsino sends "Cesario" as his messenger to woo Olivia on his behalf. What seemed like a simple disguise is becoming impossibly complicated.`,

      choices: [
        {
          id: 'choice-reveal',
          text: 'Reveal her true identity to Orsino immediately',
          consequence: 'A practical choice—but it would end the play in Act 1! Viola keeps her secret, knowing that some truths must wait for the right moment. Sometimes disguise reveals more than honesty could.',
          learningPoints: [
            {
              id: 'lp-twelfth-2a-timing',
              content: 'In comedy, timing is everything—revelations must be delayed until they can create maximum dramatic effect.',
              category: 'literary-context',
            },
          ],
        },
        {
          id: 'choice-maintain',
          text: 'Maintain the disguise and navigate the complexity',
          consequence: 'Viola chooses to continue as Cesario, trusting that truth will eventually reveal itself. This choice leads to delightful confusion, deep irony, and unexpected discoveries about gender and identity.',
          learningPoints: [
            {
              id: 'lp-twelfth-2b-dramatic-irony',
              content: 'Dramatic irony occurs when the audience knows something characters don\'t—we know Viola\'s secret, creating tension and humor in every scene.',
              category: 'literary-context',
            },
          ],
        },
        {
          id: 'choice-leave',
          text: 'Leave Orsino\'s service and find another solution',
          consequence: 'Viola considers fleeing, but realizes she has nowhere to go. Her brother is (she believes) dead, she\'s in a foreign land, and she needs protection. Sometimes we must navigate complexity rather than avoiding it.',
          learningPoints: [
            {
              id: 'lp-twelfth-2c-constraint',
              content: 'Shakespeare traps characters in situations where the only way out is through—creating dramatic necessity that drives the plot forward.',
              category: 'literary-context',
            },
          ],
        },
      ],

      learningPoints: [],
    },

    // Scene 3: Dialogue - Orsino and Cesario discuss love (dramatic irony)
    {
      id: 'twelfth-scene-3-dialogue',
      type: 'dialogue',
      backgroundImage: 'https://cdn.midjourney.com/853e1bb8-4078-450a-80da-47825bdb25ef/0_0.png',

      character: {
        id: 'orsino',
        name: 'Duke Orsino',
        portrait: 'https://cdn.midjourney.com/0540fb8e-8134-45f0-88f8-8714681f4de6/0_0.png',
        description: 'Duke of Illyria, melancholy lover',
      },

      dialogueTree: {
        id: 'node-1',
        speaker: 'orsino',
        text: 'Tell me, Cesario, have you ever been in love?',

        responses: [
          {
            id: 'response-yes',
            text: 'Yes, my lord. A little, by your favor.',
            nextNodeId: 'node-2',
            learningPoints: [
              {
                id: 'lp-twelfth-3a-truth',
                content: 'Viola speaks in careful truths—she IS in love, but must speak as if describing someone else.',
                category: 'literary-context',
              },
            ],
          },
          {
            id: 'response-no',
            text: 'No, my lord. I have never known such feelings.',
            nextNodeId: 'node-3',
          },
        ],

        allNodes: [
          {
            id: 'node-2',
            speaker: 'orsino',
            text: 'What kind of woman is she? Of what complexion?',
            responses: [
              {
                id: 'response-like-you',
                text: 'Of your complexion, my lord.',
                nextNodeId: 'node-4',
                learningPoints: [
                  {
                    id: 'lp-twelfth-3b-coded',
                    content: 'Viola describes Orsino himself while pretending to describe another woman—her love confession is hidden in plain sight.',
                    category: 'literary-context',
                  },
                ],
              },
              {
                id: 'response-deflect',
                text: 'She is not worth the question, my lord.',
                nextNodeId: 'node-5',
              },
            ],
          },
          {
            id: 'node-3',
            speaker: 'orsino',
            text: 'You lie, boy. I can see it in your eyes. Everyone has loved someone.',
            isEnd: true,
          },
          {
            id: 'node-4',
            speaker: 'orsino',
            text: 'She is not worth thee, then. What years, i\' faith? Is she old?',
            responses: [
              {
                id: 'response-age',
                text: 'About your years, my lord.',
                nextNodeId: 'node-6',
                learningPoints: [
                  {
                    id: 'lp-twelfth-3c-parallel',
                    content: 'Every answer Viola gives describes Orsino, creating a perfect parallel the Duke cannot see but the audience recognizes.',
                    category: 'literary-context',
                  },
                ],
              },
            ],
          },
          {
            id: 'node-5',
            speaker: 'orsino',
            text: 'Then you have never truly loved, if you speak so lightly of it.',
            isEnd: true,
          },
          {
            id: 'node-6',
            speaker: 'orsino',
            text: 'Too old, by heaven! Let still the woman take an elder than herself. But enough of this—go to Olivia and speak of MY love, not yours.',
            isEnd: true,
          },
        ],
      },

      learningPoints: [
        {
          id: 'lp-twelfth-3-irony',
          content: 'This scene exemplifies dramatic irony—the audience knows Viola loves Orsino, but he discusses love with her unknowingly.',
          category: 'literary-context',
        },
        {
          id: 'lp-twelfth-3-gender',
          content: 'Shakespeare explores how gender affects perceptions—Orsino confides in "Cesario" in ways he couldn\'t with a woman.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 4: Narrative - Viola/Cesario woos Olivia
    {
      id: 'twelfth-scene-4-wooing',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/e0300a71-ea56-425f-b1b0-78c4dcb54b1c/0_0.png',
      image: 'https://cdn.midjourney.com/06619a5b-383c-4162-863e-c70acf28a7db/0_0.png',

      content: `"Cesario" arrives at Olivia's estate with a practiced speech—Orsino's words of love, which Viola must deliver even though her own heart aches.

The Lady Olivia is in mourning. Her brother died recently, and she has vowed to grieve for seven years, seeing no suitors. She wears a veil and keeps to her chambers.

But when her steward Malvolio reports that a persistent young messenger refuses to leave, Olivia's curiosity wins. "I'll see this Cesario," she says. "Let's hear what pretty things the Duke has taught him to say."

Viola enters and sees Olivia for the first time—beautiful, intelligent, grieving. She begins Orsino's scripted speech: "Most radiant, exquisite and unmatchable beauty—"

"I pray you, keep it in," Olivia interrupts with amusement. "I heard you were saucy at my gates, and you're clearly well-practiced in compliments. What's your parentage?"

Viola drops the formal speech and speaks from the heart instead: "If I did love you in my master's flame, I would make me a willow cabin at your gate, and call upon my soul within the house; write loyal cantons of contemned love and sing them loud even in the dead of night..."

The poetry is so genuine, so passionate, that Olivia stares. This is not the rehearsed flattery of other suitors. This young man speaks with real feeling.

"Your lord does know my mind," Olivia says slowly. "I cannot love him. But... send word how he takes it. You might come again. I would like to hear more of your... master's suit."

As Viola leaves, Olivia removes her veil, staring after the young messenger with dawning fascination.`,

      inlineAnnotations: [
        {
          id: 'twelfth-ann-4-willow',
          text: 'willow cabin',
          tooltip: {
            title: 'Symbol of Rejected Love',
            content: 'The willow tree was a traditional symbol of unrequited love and grief. Viola\'s imagery creates a powerful picture of devoted, melancholic waiting.',
            category: 'cultural-context',
          },
        },
      ],

      learningPoints: [
        {
          id: 'lp-twelfth-4-authenticity',
          content: 'Viola\'s most effective wooing comes when she speaks from her own feelings rather than Orsino\'s script—authenticity trumps performance.',
          category: 'literary-context',
        },
        {
          id: 'lp-twelfth-4-complication',
          content: 'The love triangle is now complete: Orsino loves Olivia, Olivia loves Cesario, and Viola (as Cesario) loves Orsino.',
          category: 'literary-context',
        },
        {
          id: 'lp-twelfth-4-comparison',
          content: 'Unlike Romeo and Juliet\'s passionate instant connection, this play explores how disguise and misperception complicate desire.',
          category: 'reference',
        },
      ],
    },

    // Scene 5: Dialogue - Olivia falls for Cesario
    {
      id: 'twelfth-scene-5-olivia-dialogue',
      type: 'dialogue',
      backgroundImage: 'https://cdn.midjourney.com/e0300a71-ea56-425f-b1b0-78c4dcb54b1c/0_0.png',

      character: {
        id: 'olivia',
        name: 'Lady Olivia',
        portrait: 'https://cdn.midjourney.com/06619a5b-383c-4162-863e-c70acf28a7db/0_0.png',
        description: 'Countess of Illyria, in mourning',
      },

      dialogueTree: {
        id: 'node-1',
        speaker: 'olivia',
        text: 'Cesario, by the roses of the spring, I love thee. What do you think of me?',

        responses: [
          {
            id: 'response-pity',
            text: 'I pity you, madam.',
            nextNodeId: 'node-2',
            learningPoints: [
              {
                id: 'lp-twelfth-5a-pity',
                content: 'Viola\'s response "I pity you" echoes what Olivia told Orsino—the chain of unrequited love continues.',
                category: 'literary-context',
              },
            ],
          },
          {
            id: 'response-no-love',
            text: 'I cannot love you, my lady.',
            nextNodeId: 'node-3',
          },
        ],

        allNodes: [
          {
            id: 'node-2',
            speaker: 'olivia',
            text: 'That\'s a degree to love! Why then, methinks \'tis time to smile again. If you will not love me, at least tell me why.',
            responses: [
              {
                id: 'response-not-what-seem',
                text: 'I am not what I seem, my lady.',
                nextNodeId: 'node-4',
                learningPoints: [
                  {
                    id: 'lp-twelfth-5b-truth',
                    content: 'Viola speaks literal truth that Olivia cannot understand—dramatic irony at its finest.',
                    category: 'literary-context',
                  },
                ],
              },
              {
                id: 'response-impossible',
                text: 'Your affection is impossible to return.',
                nextNodeId: 'node-5',
              },
            ],
          },
          {
            id: 'node-3',
            speaker: 'olivia',
            text: 'Why? Do you love another? Tell me true, Cesario—is there another who has won your heart?',
            responses: [
              {
                id: 'response-yes-another',
                text: 'Yes, but they can never know it.',
                nextNodeId: 'node-6',
              },
            ],
          },
          {
            id: 'node-4',
            speaker: 'olivia',
            text: 'What manner of man are you? Your words are as puzzling as they are intriguing. Come again tomorrow—I must understand you better.',
            isEnd: true,
          },
          {
            id: 'node-5',
            speaker: 'olivia',
            text: 'Let the impossibility not stop the attempt. Come to me again, and perhaps your feelings will change.',
            isEnd: true,
          },
          {
            id: 'node-6',
            speaker: 'olivia',
            text: 'Then we are both cursed with hopeless love. At least visit me again—your company brings me comfort, even in rejection.',
            isEnd: true,
          },
        ],
      },

      learningPoints: [
        {
          id: 'lp-twelfth-5-reversal',
          content: 'Olivia, who rejected all suitors, now becomes the pursuer—Shakespeare reverses traditional gender roles in courtship.',
          category: 'literary-context',
        },
        {
          id: 'lp-twelfth-5-parallel',
          content: 'Olivia now experiences what Orsino feels—unrequited longing for someone who cannot love them back.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 6: Map Exploration - Explore Illyria
    {
      id: 'twelfth-scene-6-map',
      type: 'map-exploration',
      backgroundImage: 'https://cdn.midjourney.com/583be367-43be-42f2-a975-80c5d65d8f64/0_0.png',
      mapImage: 'https://cdn.midjourney.com/583be367-43be-42f2-a975-80c5d65d8f64/0_0.png',
      prompt: 'Explore the world of Twelfth Night. Click on locations to discover where the comedy unfolds.',

      locations: [
        {
          id: 'loc-coast',
          name: 'The Illyrian Coast',
          x: 15,
          y: 70,
          image: 'https://cdn.midjourney.com/583be367-43be-42f2-a975-80c5d65d8f64/0_0.png',
          content: `This rocky coastline is where Viola and Sebastian's ship was wrecked in the storm. Viola emerged here alone, believing her brother drowned.

The coast represents transformation—where old identities are washed away and new ones are born. It's the threshold between Viola's past life and her future as Cesario.

**Learning Point:** Coastlines in Shakespeare often represent liminal spaces—thresholds where transformation occurs.`,
        },
        {
          id: 'loc-palace',
          name: 'Duke Orsino\'s Palace',
          x: 40,
          y: 40,
          image: 'https://cdn.midjourney.com/853e1bb8-4078-450a-80da-47825bdb25ef/0_0.png',
          content: `Duke Orsino's palace is filled with music, melancholy, and the languor of unrequited love. Orsino surrounds himself with beauty while pining for Olivia.

"If music be the food of love, play on," he famously declares. His court is a place of elegant suffering, where love is discussed endlessly but never consummated.

This is where Viola (as Cesario) serves, listening to Orsino's confessions of love while hiding her own.

**Learning Points:** Orsino's palace represents self-indulgent emotion—love as aesthetic experience rather than genuine connection. The opening line "If music be the food of love, play on" is one of Shakespeare's most famous, establishing the play's musical, lyrical tone.`,
        },
        {
          id: 'loc-olivia',
          name: 'Olivia\'s Estate',
          x: 70,
          y: 30,
          image: 'https://cdn.midjourney.com/e0300a71-ea56-425f-b1b0-78c4dcb54b1c/0_0.png',
          content: `Olivia's household is supposedly in mourning—she has vowed to grieve her brother for seven years, wearing a veil and seeing no suitors.

Yet beneath this serious exterior, the household is alive with schemes and foolery. Olivia's uncle Sir Toby Belch drinks and carouses, her gentlewoman Maria plots mischief, and the fool Feste speaks wisdom in riddles.

It's a house divided between solemn duty and irrepressible life—and life is winning.

**Learning Point:** Olivia's household represents the tension between social obligation (mourning) and natural desire (living).`,
        },
        {
          id: 'loc-streets',
          name: 'The Streets of Illyria',
          x: 50,
          y: 65,
          image: 'https://cdn.midjourney.com/583be367-43be-42f2-a975-80c5d65d8f64/0_0.png',
          content: `In the streets of Illyria, Sebastian (Viola's twin brother, who survived the shipwreck) wanders, grieving for his supposedly drowned sister.

Antonio, a sea captain who rescued Sebastian, follows him loyally despite being wanted by Illyrian authorities for past crimes.

These streets are where the twins will eventually be confused for each other, leading to the play's most delightful mix-ups.

**Learning Point:** Public spaces in comedy enable chance encounters and mistaken identities—crucial for the plot's resolution.`,
        },
      ],

      learningPoints: [
        {
          id: 'lp-twelfth-6-setting',
          content: 'Illyria is a fantasy space where social rules are suspended, enabling exploration of identity and desire.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 7: Narrative - Sebastian arrives
    {
      id: 'twelfth-scene-7-sebastian',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/583be367-43be-42f2-a975-80c5d65d8f64/0_0.png',
      image: 'https://cdn.midjourney.com/6e92bdcb-18e0-46a8-87fc-7373425dd7f5/0_0.png',

      content: `While Viola navigates her tangled web of disguise and desire, something miraculous has occurred: her twin brother Sebastian survived the shipwreck.

Sebastian walks the streets of Illyria accompanied by Antonio, a sea captain who rescued him from the waves. The two men have formed a deep bond, though Antonio knows their friendship is dangerous—he has enemies in Illyria from past sea battles.

"I could not stay behind you," Antonio says. "My desire, more sharp than filed steel, did spur me forth."

Sebastian, still grieving for his supposedly drowned sister Viola, accepts his companion's loyalty gratefully. He describes his sister: "She bore a mind that envy could not but call fair. She is drowned already, sir, with salt water, though I seem to drown her remembrance again with more."

What Sebastian doesn't know: Viola is alive, just a few streets away, disguised as a young man who looks exactly like him.

The stage is set for magnificent confusion. Two identical twins, one dressed as a man, one actually a man, moving through the same small city. Everyone who has met "Cesario" will soon encounter Sebastian.

Chaos—wonderful, hilarious chaos—is about to ensue.`,

      learningPoints: [
        {
          id: 'lp-twelfth-7-sebastian',
          content: 'Sebastian\'s survival is revealed to the audience but not to Viola, creating suspense—we know the confusion coming.',
          category: 'literary-context',
        },
        {
          id: 'lp-twelfth-7-twins',
          content: 'Identical twins enable the play\'s mistaken identity plot—a staple of comedy dating back to Roman playwright Plautus.',
          category: 'literary-context',
        },
        {
          id: 'lp-twelfth-7-antonio',
          content: 'Antonio\'s devotion to Sebastian suggests deep same-sex affection, adding to the play\'s exploration of desire beyond conventional boundaries.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 8: Custom Mini-Game - Match characters to disguises (Memory Match)
    {
      id: 'twelfth-scene-8-memory',
      type: 'custom-mini-game',
      backgroundImage: 'https://cdn.midjourney.com/e0300a71-ea56-425f-b1b0-78c4dcb54b1c/0_0.png',
      gameType: 'memory-match',
      config: {
        title: 'Who\'s Who in Illyria?',
        prompt: 'With so many characters disguising themselves and being mistaken for others, it\'s hard to keep track of who\'s who in Illyria! Let\'s pause and test your memory—can you match each character to their disguised or mistaken identity?',
        timeLimit: 120,
        gridSize: '4x3',
        pairs: [
          {
            id: 'pair-1',
            value: 'Viola',
            matchValue: 'Cesario (disguise)',
            image: 'https://cdn.midjourney.com/3a7af9e8-8cb5-4bc0-b0cf-7e5f8b0900e6/0_1.png',
            matchImage: 'https://cdn.midjourney.com/3a7af9e8-8cb5-4bc0-b0cf-7e5f8b0900e6/0_1.png'
          },
          {
            id: 'pair-2',
            value: 'Sebastian',
            matchValue: 'Sebastian (mistaken for Cesario)',
            image: 'https://cdn.midjourney.com/6e92bdcb-18e0-46a8-87fc-7373425dd7f5/0_0.png',
            matchImage: 'https://cdn.midjourney.com/6e92bdcb-18e0-46a8-87fc-7373425dd7f5/0_0.png'
          },
          {
            id: 'pair-3',
            value: 'Malvolio',
            matchValue: 'Malvolio (tricked disguise)',
            image: 'https://cdn.midjourney.com/1004f8a1-f350-4146-821a-70165cc12e25/0_3.png',
            matchImage: 'https://cdn.midjourney.com/1004f8a1-f350-4146-821a-70165cc12e25/0_3.png'
          },
          {
            id: 'pair-4',
            value: 'Duke Orsino',
            matchValue: 'Orsino (lovesick)',
            image: 'https://cdn.midjourney.com/0540fb8e-8134-45f0-88f8-8714681f4de6/0_0.png',
            matchImage: 'https://cdn.midjourney.com/0540fb8e-8134-45f0-88f8-8714681f4de6/0_0.png'
          },
          {
            id: 'pair-5',
            value: 'Olivia',
            matchValue: 'Olivia (in mourning)',
            image: 'https://cdn.midjourney.com/06619a5b-383c-4162-863e-c70acf28a7db/0_0.png',
            matchImage: 'https://cdn.midjourney.com/06619a5b-383c-4162-863e-c70acf28a7db/0_0.png'
          },
          {
            id: 'pair-6',
            value: 'Illyria Coast',
            matchValue: 'Where it all begins',
            image: 'https://cdn.midjourney.com/583be367-43be-42f2-a975-80c5d65d8f64/0_0.png',
            matchImage: 'https://cdn.midjourney.com/583be367-43be-42f2-a975-80c5d65d8f64/0_0.png'
          },
        ],
      },

      learningPoints: [
        {
          id: 'lp-twelfth-8-disguise',
          content: 'Nearly every character in Twelfth Night performs some form of disguise or false identity.',
          category: 'literary-context',
        },
        {
          id: 'lp-twelfth-8-performance',
          content: 'The play explores how all social identity is a form of performance—we all "disguise" ourselves to fit social roles.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 9: Narrative - Malvolio subplot
    {
      id: 'twelfth-scene-9-malvolio',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/e0300a71-ea56-425f-b1b0-78c4dcb54b1c/0_0.png',
      image: 'https://cdn.midjourney.com/1004f8a1-f350-4146-821a-70165cc12e25/0_3.png',

      content: `While romantic confusion swirls around Viola, Olivia, and Orsino, a darker comedy unfolds in Olivia's household.

Malvolio is Olivia's steward—pompous, self-important, and convinced of his own superiority. He disapproves of fun, reprimands Sir Toby for drinking, and dreams of marrying Olivia to rise above his servant status.

"Some are born great," he muses to himself, "some achieve greatness, and some have greatness thrust upon them." He believes he will achieve it.

Maria, Olivia's clever gentlewoman, has had enough of Malvolio's arrogance. She hatches a plot with Sir Toby: they'll forge a letter in Olivia's handwriting, declaring love for Malvolio and instructing him to wear yellow stockings, cross-gartered (a ridiculous fashion), and to smile constantly.

They leave the letter where Malvolio will find it. He discovers it in the garden, reads it, and his face transforms with joy. "I will be proud, I will read politic authors, I will baffle Sir Toby, I will wash off gross acquaintance, I will be point-devise the very man!"

The conspirators watch from hiding, nearly bursting with laughter.

What follows is magnificent humiliation: Malvolio appears before Olivia in yellow stockings, cross-gartered, grinning maniacally, quoting the letter's phrases. Olivia thinks he's gone mad.

"Why, this is very midsummer madness," she says, deeply concerned.

The trick has worked perfectly—too perfectly. Malvolio's pompous self-love has led him to complete embarrassment. But is this merely funny, or has the joke gone too far?`,

      inlineAnnotations: [
        {
          id: 'twelfth-ann-9-greatness',
          text: 'Some are born great',
          tooltip: {
            title: 'Famous Quotation',
            content: '"Some are born great, some achieve greatness, and some have greatness thrust upon them" is one of Shakespeare\'s most quoted lines, often used seriously—though in context it\'s part of a cruel prank.',
            category: 'literary-context',
          },
        },
        {
          id: 'twelfth-ann-9-yellow',
          text: 'yellow stockings, cross-gartered',
          tooltip: {
            title: 'Ridiculous Fashion',
            content: 'Yellow stockings tied with cross-garters (ribbons crossed below the knee) were outdated and absurd fashion. It\'s like someone today wearing platform shoes and a leisure suit because they think it\'s impressive.',
            category: 'cultural-context',
          },
        },
      ],

      learningPoints: [
        {
          id: 'lp-twelfth-9-subplot',
          content: 'The Malvolio subplot provides a darker counterpoint to the romantic comedy—this trick has real cruelty behind it.',
          category: 'literary-context',
        },
        {
          id: 'lp-twelfth-9-self-love',
          content: 'Malvolio\'s "self-love" makes him vulnerable to deception—his ego blinds him to obvious manipulation.',
          category: 'literary-context',
        },
        {
          id: 'lp-twelfth-9-class',
          content: 'The subplot explores class anxiety—Malvolio, a servant, dreams of marrying his mistress and crossing social boundaries.',
          category: 'historical-context',
        },
      ],
    },

    // Scene 10: Cause-Effect - Match misunderstandings to their causes
    {
      id: 'twelfth-scene-10-cause-effect',
      type: 'cause-effect',
      backgroundImage: 'https://cdn.midjourney.com/e0300a71-ea56-425f-b1b0-78c4dcb54b1c/0_0.png',
      prompt: 'Twelfth Night is a "comedy of errors" where misunderstandings drive the plot. Match each confusion to its cause.',

      pairs: [
        {
          id: 'pair-1',
          cause: 'Viola disguises herself as a young man named Cesario',
          effect: 'Olivia falls in love with "Cesario" instead of Orsino',
          explanation: 'Olivia falls for "Cesario" not knowing "he" is actually a woman—the central romantic complication.',
        },
        {
          id: 'pair-2',
          cause: 'Sebastian arrives in Illyria looking identical to Cesario',
          effect: 'Everyone confuses Sebastian with Viola\'s disguise',
          explanation: 'The twins\' identical appearance creates chaos when people mistake one for the other.',
        },
        {
          id: 'pair-3',
          cause: 'Maria forges a love letter pretending to be from Olivia',
          effect: 'Malvolio wears yellow stockings and smiles constantly',
          explanation: 'Malvolio believes Olivia loves him based on the fake letter\'s instructions, leading to his humiliating behavior.',
        },
        {
          id: 'pair-4',
          cause: 'Orsino sends "Cesario" to woo Olivia on his behalf',
          effect: 'Viola must praise Orsino to the woman she rivals',
          explanation: 'Orsino trusts his page "Cesario," never knowing "he" is actually Viola who loves him, creating painful irony.',
        },
        {
          id: 'pair-5',
          cause: 'Antonio follows Sebastian despite being a wanted criminal',
          effect: 'Antonio is arrested by Illyrian officers',
          explanation: 'Antonio\'s past as an enemy of Illyria catches up with him when he follows Sebastian into dangerous territory.',
        },
        {
          id: 'pair-6',
          cause: 'Viola and Sebastian each believe their twin drowned',
          effect: 'The twins don\'t search for each other in Illyria',
          explanation: 'The twins\' mutual grief and certainty of death prevents them from actively seeking one another.',
        },
      ],

      learningPoints: [
        {
          id: 'lp-twelfth-11-structure',
          content: 'Comedy of errors structure stacks misunderstandings that compound until resolved in a final revelation scene.',
          category: 'literary-context',
        },
        {
          id: 'lp-twelfth-11-contrast',
          content: 'Unlike tragedy where misunderstandings lead to death (Romeo and Juliet), comedy resolves them with marriages and reunions.',
          category: 'reference',
        },
      ],
    },

    // Scene 11: Narrative - Multiple marriages and revelations
    {
      id: 'twelfth-scene-11-resolution',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/583be367-43be-42f2-a975-80c5d65d8f64/0_0.png',
      image: 'https://cdn.midjourney.com/3a7af9e8-8cb5-4bc0-b0cf-7e5f8b0900e6/0_1.png',

      content: `All the threads converge in Illyria's square.

Olivia has found Sebastian and, thinking he's Cesario, convinced him to marry her immediately. Sebastian, bewildered but delighted by this beautiful woman's sudden affection, agreed. They've just been wed.

Meanwhile, Viola (as Cesario) arrives with Orsino, still trying to woo Olivia on his behalf. Antonio is brought in under arrest, and seeing "Cesario," he pleads for help—calling Viola "Sebastian."

"Antonio, I don't know you," Viola says, confused.

Olivia enters and sees "Cesario." "Husband!" she cries joyfully.

"Husband?" Orsino and Viola say together, equally shocked.

"We were married not an hour ago," Olivia insists, gesturing to the priest who performed the ceremony.

Viola protests she's never married anyone. Orsino rages, feeling betrayed. Olivia insists Cesario is her husband.

And then—Sebastian enters.

Everyone freezes.

Two identical faces. Two identical forms. Standing in the same square, seeing each other for the first time since the shipwreck.

"One face, one voice, one habit, and two persons!" Antonio breathes in wonder.

"Sebastian!" Viola cries. "My brother!"

"Viola!" Sebastian responds. "My sister!"

They rush to each other, tears streaming. The mystery unravels in moments: Viola reveals her disguise, explaining she became Cesario for safety. Sebastian recounts how Antonio saved him.

Olivia realizes she married Sebastian, not Cesario—but looks at her new husband and finds herself well pleased. "So comes it, lady, you have been mistook," Sebastian says with a smile. "But nature to her bias drew in that."

Orsino turns to Viola, seeing her truly for the first time: "Boy, thou hast said to me a thousand times thou never shouldst love woman like to me." He pauses, understanding flooding through him. "Give me thy hand, and let me see thee in thy woman's weeds."

What seemed impossible tangles into perfect pattern: Olivia has married Sebastian (who reciprocates her affection), and Orsino will marry Viola (who has loved him all along).`,

      inlineAnnotations: [
        {
          id: 'twelfth-ann-12-weeds',
          text: 'woman\'s weeds',
          tooltip: {
            title: 'Clothing/Garments',
            content: '"Weeds" in Elizabethan English meant clothes or garments. Orsino wants to see Viola in women\'s clothing to confirm her identity.',
            category: 'vocabulary',
          },
        },
      ],

      learningPoints: [
        {
          id: 'lp-twelfth-12-revelation',
          content: 'The revelation scene resolves all mysteries simultaneously—Shakespeare brings every thread together in one climactic moment.',
          category: 'literary-context',
        },
        {
          id: 'lp-twelfth-12-identity',
          content: 'Disguise leads to self-discovery: Viola discovers her own capacity for love, Orsino learns what he truly values.',
          category: 'literary-context',
        },
        {
          id: 'lp-twelfth-12-marriages',
          content: 'Comedy traditionally ends with marriages representing social harmony and new beginnings.',
          category: 'literary-context',
        },
        {
          id: 'lp-twelfth-12-malvolio',
          content: 'Not all is resolved joyfully—Malvolio remains angry, departing with "I\'ll be revenged on the whole pack of you!"',
          category: 'literary-context',
        },
      ],
    },

    // Scene 12: Quote Attribution - Match witty lines to characters
    {
      id: 'twelfth-scene-12-quotes',
      type: 'quote-attribution',
      backgroundImage: 'https://cdn.midjourney.com/e0300a71-ea56-425f-b1b0-78c4dcb54b1c/0_0.png',
      prompt: 'Twelfth Night is filled with memorable wit and wisdom. Match these famous quotes to their speakers.',

      quotes: [
        {
          id: 'quote-1',
          text: 'If music be the food of love, play on',
          speaker: 'Duke Orsino',
          context: 'The opening line of the play, as Orsino indulges in his melancholy love.',
          explanation: 'Orsino\'s opening sets the musical, romantic tone while revealing his self-indulgent nature.',
        },
        {
          id: 'quote-2',
          text: 'Some are born great, some achieve greatness, and some have greatness thrust upon them',
          speaker: 'Malvolio (reading the forged letter)',
          context: 'Malvolio reads the fake letter and applies it to himself.',
          explanation: 'One of Shakespeare\'s most famous quotes—often used seriously but originally part of a cruel prank.',
        },
        {
          id: 'quote-3',
          text: 'Better a witty fool than a foolish wit',
          speaker: 'Feste the Fool',
          context: 'Feste demonstrates that professional fools are wiser than supposedly wise people.',
          explanation: 'Feste embodies the wise fool archetype—jesters who speak truth through comedy.',
        },
        {
          id: 'quote-4',
          text: 'I am not what I am',
          speaker: 'Viola',
          context: 'Viola hints at her disguise while speaking to Olivia.',
          explanation: 'Viola speaks literal truth that cannot be understood—a perfect example of dramatic irony.',
        },
        {
          id: 'quote-5',
          text: 'Love sought is good, but given unsought is better',
          speaker: 'Olivia',
          context: 'Olivia reflects on falling for Cesario unexpectedly.',
          explanation: 'Olivia discovers that the love she didn\'t seek (for Cesario/Sebastian) is sweeter than Orsino\'s pursuit of her.',
        },
        {
          id: 'quote-6',
          text: 'Be not afraid of greatness',
          speaker: 'Maria (writing as Olivia in the forged letter)',
          context: 'Part of the fake letter designed to trick Malvolio.',
          explanation: 'Maria crafts the letter to feed Malvolio\'s ambition and self-love.',
        },
        {
          id: 'quote-7',
          text: 'I hate ingratitude more in a man than lying, vainness, babbling drunkenness',
          speaker: 'Viola',
          context: 'Speaking as Cesario about the importance of gratitude.',
          explanation: 'Viola\'s values shine through her disguise—she remains herself even while appearing as someone else.',
        },
        {
          id: 'quote-8',
          text: 'Why, this is very midsummer madness',
          speaker: 'Olivia',
          context: 'Olivia\'s reaction to Malvolio\'s bizarre behavior in yellow stockings.',
          explanation: 'Olivia genuinely thinks Malvolio has gone mad—she has no idea he\'s been tricked.',
        },
      ],

      learningPoints: [
        {
          id: 'lp-twelfth-13-language',
          content: 'Twelfth Night showcases Shakespeare\'s gift for quotable wisdom—lines that transcend their context.',
          category: 'literary-context',
        },
        {
          id: 'lp-twelfth-13-characters',
          content: 'Each character has a distinct voice and philosophy, revealed through their most memorable lines.',
          category: 'literary-context',
        },
      ],

      events: {
        onExit: [{
          type: 'quiz',
          componentId: 'quiz-chapter-3-twelfth-night',
          condition: { type: 'if-not-completed' },
        }],
      },
    },
  ],

  endQuiz: chapter3Quiz,
};

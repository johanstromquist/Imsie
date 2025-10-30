import type { Chapter } from '../../../types';
import { chapter2Quiz } from '../quizzes/chapter-2-quiz';

/**
 * Chapter 2: The Deeds of the Gods
 *
 * This chapter presents key myths featuring Thor and Loki, revealing the
 * personalities of the gods and the constant tension between Asgard and Jotunheim.
 */
export const chapter2: Chapter = {
  id: 'edda-ch2-deeds',
  title: 'The Deeds of the Gods',
  description: 'Witness Thor\'s might and Loki\'s cunning in tales of giants, illusions, and stolen hammers.',

  prerequisites: {
    type: 'sequential',
    chapterIds: ['edda-ch1-beginning'],
  },

  learningObjectives: [
    'Analyze Thor\'s role as protector of gods and humans',
    'Understand Loki\'s complex character as trickster and catalyst',
    'Recognize common motifs in Norse myths (contests, quests, deceptions)',
    'Explore the theme of wisdom gained through cunning and strength',
  ],

  scenes: [
    // Scene 1: narrative - Thor sets out to visit the giants of Utgard
    {
      id: 'edda-ch2-scene-1',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/f4a9811d-c1a8-438f-8ad1-786a20be9055/0_0.png',
      image: 'https://cdn.midjourney.com/077803da-a89c-4c9c-b6b8-e9b4697d16b5/0_0.png',
      content: `The gods of Asgard are mighty, yet they are not invincible. Their strength is constantly tested by the giants of Jotunheim, whose raw power and ancient cunning pose eternal threats to the order of the cosmos.

Of all the gods, none is more renowned for his might than Thor, the thunder god. With his enchanted hammer Mjölnir, he protects both Asgard and Midgard from the forces of chaos. His red beard bristles with barely contained fury, and his strength is legendary—capable of slaying countless giants and monsters.

Today, Thor decides to journey to Utgard, the citadel of the giants, to test his strength against the mightiest beings in Jotunheim. It is a journey born of pride and curiosity, but also of duty—for understanding one's enemies is as important as defeating them.

As he prepares to depart from Asgard's golden halls, Thor considers who might accompany him on this dangerous quest into the realm of giants.`,

      inlineAnnotations: [
        {
          id: 'edda-ch2-ann-mjolnir',
          text: 'Mjölnir',
          tooltip: {
            title: 'The Thunder Hammer',
            content: 'Mjölnir (MYOL-neer) means "crusher" or "grinder" in Old Norse. Forged by dwarven craftsmen, it always returns to Thor\'s hand when thrown and can level mountains. It also serves as a symbol of blessing and consecration.',
            category: 'cultural-context',
          },
        },
        {
          id: 'edda-ch2-ann-utgard',
          text: 'Utgard',
          tooltip: {
            title: 'The Outer Stronghold',
            content: 'Utgard means "outer enclosure" or "outer yard," contrasting with Midgard (middle enclosure) and Asgard (enclosure of the Æsir gods). It represents the realm beyond civilization, where giants and primal forces dwell.',
            category: 'historical-context',
          },
        },
      ],

      learningPoints: [
        {
          id: 'edda-ch2-lp-1',
          content: 'Thor serves as the primary protector of both gods and humans, embodying martial virtue and straightforward strength.',
          category: 'character-analysis',
        },
        {
          id: 'edda-ch2-lp-2',
          content: 'The constant conflict between gods and giants represents the eternal struggle between order (cosmos) and chaos.',
          category: 'thematic-analysis',
        },
        {
          id: 'edda-ch2-lp-3',
          content: 'Journey narratives to hostile realms are a common motif in Norse mythology, testing heroes\' strength and wit.',
          category: 'literary-technique',
        },
      ],
    },

    // Scene 2: decision - Choose companions for Thor's journey
    {
      id: 'edda-ch2-scene-2',
      type: 'decision',
      backgroundImage: 'https://cdn.midjourney.com/a14c3909-f276-4457-b05e-8cb51a7d683c/0_0.png',
      prompt: 'Who should accompany Thor to Utgard?',
      context: `Thor stands before the assembled gods in the great hall. His journey to Utgard will be perilous, and while Thor is mighty, even he might benefit from companions.

Several figures step forward, each offering different strengths:

Loki, the trickster god, is cunning and silver-tongued—useful when dealing with giants' deceptions. However, his loyalty is sometimes questionable.

Tyr, the god of war and justice, is brave and honorable, a steadfast warrior who would never betray a companion.

Thialfi, a swift-footed mortal youth in Thor's service, lacks divine power but possesses cleverness and unwavering loyalty.

Thor can only choose one companion for this particular journey. Who should it be?`,

      choices: [
        {
          id: 'edda-ch2-choice-loki',
          text: 'Take Loki, the cunning trickster',
          consequence: 'Thor decides to bring Loki. "Your silver tongue may prove useful among the giants," Thor says. Loki grins, his eyes already scheming. "I shall not disappoint you, Thunder God." The choice proves wise—Loki\'s cunning will indeed be needed.',
          learningPoints: [
            {
              id: 'edda-ch2-lp-4',
              content: 'Loki\'s presence in myths often catalyzes events, serving as both helper and complicator.',
              category: 'character-analysis',
            },
          ],
        },
        {
          id: 'edda-ch2-choice-tyr',
          text: 'Take Tyr, the honorable warrior',
          consequence: 'Thor chooses Tyr, valuing honor and martial prowess. "Your blade and courage will serve us well," Thor declares. Tyr nods solemnly. "I am honored, Thunder God." Though a noble choice, the journey ahead will require more than straightforward valor.',
          learningPoints: [
            {
              id: 'edda-ch2-lp-5',
              content: 'Tyr represents law, justice, and martial honor—qualities highly valued in Viking culture.',
              category: 'cultural-context',
            },
          ],
        },
        {
          id: 'edda-ch2-choice-thialfi',
          text: 'Take Thialfi, the loyal servant',
          consequence: 'Thor selects young Thialfi. "Your speed and wit have served me before," Thor says. The mortal youth beams with pride and determination. "I will not fail you, my lord!" His loyalty will be tested in the trials ahead.',
          learningPoints: [
            {
              id: 'edda-ch2-lp-6',
              content: 'The presence of mortal characters in Norse myths emphasizes the connection between divine and human realms.',
              category: 'thematic-analysis',
            },
          ],
        },
      ],

      learningPoints: [
        {
          id: 'edda-ch2-lp-7',
          content: 'Choices of companions in Norse tales reflect different aspects of heroic virtue: cunning, honor, or loyalty.',
          category: 'narrative-structure',
        },
      ],
    },

    // Scene 3: narrative - The strange lodging and Skrymir the giant
    {
      id: 'edda-ch2-scene-3',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/33558151-dd2f-41ce-a350-4ab0b99f42f4/0_0.png',
      image: 'https://cdn.midjourney.com/03ff94d0-12ee-4816-9101-62cb170f7e12/0_0.png',
      content: `Thor and his companion journey eastward through forests and across mountains, making their way toward Jotunheim. As night falls, they seek shelter in what appears to be an enormous hall with a peculiar side chamber.

They settle down to sleep, but in the middle of the night, the earth begins to shake violently. The hall trembles, and a thunderous noise fills the air—snoring, they realize with shock.

At dawn, they emerge to discover the truth: their "hall" was actually the glove of an enormous giant, and they had slept in the thumb! Before them lies Skrymir, the giant, larger than any being they have ever encountered.

"Good morning, little ones," the giant booms, his voice like distant thunder. "I am Skrymir. Are you traveling to Utgard? I go that way myself. We might journey together."

Thor, never one to show fear, agrees. Throughout the day, they struggle to keep pace with Skrymir's massive stride. That evening, the giant ties up his provision bag and tosses it to Thor before falling asleep.

But when Thor tries to open the bag, he cannot untie the knots, no matter how he pulls and strains! The mighty Thor, who can lift mountains, cannot open a simple bag. Frustrated and humiliated, Thor's anger grows.`,

      inlineAnnotations: [
        {
          id: 'edda-ch2-ann-skrymir',
          text: 'Skrymir',
          tooltip: {
            title: 'The Deceptive Giant',
            content: 'Skrymir\'s name means "braggart" or "big talker" in Old Norse. His encounter with Thor is one of the most famous examples of illusion and deception in Norse mythology.',
            category: 'cultural-context',
          },
        },
      ],

      learningPoints: [
        {
          id: 'edda-ch2-lp-8',
          content: 'The motif of mistaken identity (sleeping in a giant\'s glove) emphasizes the vast scale of Jotunheim.',
          category: 'literary-technique',
        },
        {
          id: 'edda-ch2-lp-9',
          content: 'Even Thor\'s legendary strength can be frustrated by simple obstacles, foreshadowing deeper humiliations.',
          category: 'plot-structure',
        },
        {
          id: 'edda-ch2-lp-10',
          content: 'Giants in Norse mythology often use cunning and magic rather than pure strength to challenge the gods.',
          category: 'thematic-analysis',
        },
      ],
    },

    // Scene 4: dialogue - Conversation with Utgard-Loki (the giant king)
    {
      id: 'edda-ch2-scene-4',
      type: 'dialogue',
      backgroundImage: 'https://cdn.midjourney.com/8a80a9e6-8451-43f0-a947-a22363fd4590/0_0.png',
      character: {
        id: 'edda-ch2-utgard-loki',
        name: 'Utgard-Loki',
        portrait: 'https://cdn.midjourney.com/03ff94d0-12ee-4816-9101-62cb170f7e12/0_0.png',
        description: 'The cunning king of the giants, master of illusions',
      },

      dialogueTree: {
        id: 'edda-ch2-dlg-1',
        speaker: 'edda-ch2-utgard-loki',
        text: 'Welcome to Utgard, Thor Odinson. Word of your coming has reached us. We have heard much of your legendary strength.',

        responses: [
          {
            id: 'edda-ch2-resp-1',
            text: 'I have come to test my might against the giants!',
            nextNodeId: 'edda-ch2-dlg-2',
          },
          {
            id: 'edda-ch2-resp-2',
            text: 'Your hospitality is... unexpected, giant king.',
            nextNodeId: 'edda-ch2-dlg-3',
          },
        ],

        allNodes: [
          {
            id: 'edda-ch2-dlg-2',
            speaker: 'edda-ch2-utgard-loki',
            text: 'Ah, bold words! But you are small, Thunder God. Smaller than I expected. Tell me, what skills do you and your companion possess? In this hall, no one may sit at our table unless they excel at some craft or feat.',
            responses: [
              {
                id: 'edda-ch2-resp-3',
                text: 'I am the strongest being in all the Nine Worlds!',
                nextNodeId: 'edda-ch2-dlg-4',
              },
              {
                id: 'edda-ch2-resp-4',
                text: 'My companion has skills worthy of testing.',
                nextNodeId: 'edda-ch2-dlg-5',
              },
            ],
          },
          {
            id: 'edda-ch2-dlg-3',
            speaker: 'edda-ch2-utgard-loki',
            text: 'Unexpected? We giants are not the mindless brutes you gods suppose. We too have our halls, our customs, our pride. But pride must be proven. What can you do that might earn you a place at our table?',
            responses: [
              {
                id: 'edda-ch2-resp-5',
                text: 'My strength needs no introduction!',
                nextNodeId: 'edda-ch2-dlg-4',
              },
            ],
          },
          {
            id: 'edda-ch2-dlg-4',
            speaker: 'edda-ch2-utgard-loki',
            text: 'Strength, you say? Very well. Let us devise some contests. If you prove your might, you shall feast with us as honored guests. But if you fail... well, the small and weak have no place in Utgard. Do you accept?',
            responses: [
              {
                id: 'edda-ch2-resp-6',
                text: 'I accept your challenge!',
                nextNodeId: 'edda-ch2-dlg-6',
              },
            ],
          },
          {
            id: 'edda-ch2-dlg-5',
            speaker: 'edda-ch2-utgard-loki',
            text: 'Your companion? Let him prove himself then. But you, Thunder God, you must also demonstrate why the gods of Asgard are so feared. Will you accept my challenges?',
            responses: [
              {
                id: 'edda-ch2-resp-7',
                text: 'I will prove my worth!',
                nextNodeId: 'edda-ch2-dlg-6',
              },
            ],
          },
          {
            id: 'edda-ch2-dlg-6',
            speaker: 'edda-ch2-utgard-loki',
            text: 'Excellent. Then let the contests begin. First, we shall test your strength in lifting. Then, perhaps, we shall see how fast your companion can run. And finally, a drinking contest—for what is might without the ability to hold one\'s drink?',
            isEnd: true,
          },
        ],
      },

      learningPoints: [
        {
          id: 'edda-ch2-lp-11',
          content: 'Utgard-Loki represents cunning intellect as a counterbalance to Thor\'s physical might.',
          category: 'character-analysis',
        },
        {
          id: 'edda-ch2-lp-12',
          content: 'The concept of proving worth through contests is central to Norse heroic culture.',
          category: 'cultural-context',
        },
      ],
    },

    // Scene 5: custom-mini-game - Thor's challenges (Memory Match game)
    {
      id: 'edda-ch2-scene-5',
      type: 'custom-mini-game',
      backgroundImage: 'https://cdn.midjourney.com/a783ba37-5684-404b-88b2-46199094a8c7/0_0.png',
      gameType: 'memory-match',
      config: {
        prompt: 'Thor faces a series of contests in Utgard-Loki\'s hall. Test your memory as Thor attempts each challenge!',
        timeLimit: 120,
        gridSize: '4x3',
        pairs: [
          { id: 'pair-1', value: 'Drinking Horn', matchValue: 'Drinking Horn', image: 'https://cdn.midjourney.com/48529534-aba8-490e-9594-080b4d7f847c/0_1.png', matchImage: 'https://cdn.midjourney.com/48529534-aba8-490e-9594-080b4d7f847c/0_1.png' },
          { id: 'pair-2', value: 'Small Gray Cat', matchValue: 'Small Gray Cat', image: 'https://cdn.midjourney.com/10ce9d80-70cc-4d37-9034-eea5f9623c9c/0_3.png', matchImage: 'https://cdn.midjourney.com/10ce9d80-70cc-4d37-9034-eea5f9623c9c/0_3.png' },
          { id: 'pair-3', value: 'Old Woman Elli', matchValue: 'Old Woman Elli', image: 'https://cdn.midjourney.com/f949359a-4aaf-4a7f-a8c7-af457a4bd905/0_2.png', matchImage: 'https://cdn.midjourney.com/f949359a-4aaf-4a7f-a8c7-af457a4bd905/0_2.png' },
          { id: 'pair-4', value: 'Thor\'s Portrait', matchValue: 'Thor\'s Portrait', image: 'https://cdn.midjourney.com/077803da-a89c-4c9c-b6b8-e9b4697d16b5/0_0.png', matchImage: 'https://cdn.midjourney.com/077803da-a89c-4c9c-b6b8-e9b4697d16b5/0_0.png' },
          { id: 'pair-5', value: 'Mjölnir', matchValue: 'Mjölnir', image: 'https://cdn.midjourney.com/e0ef5920-8991-4d35-bef1-d4d8c8836992/0_2.png', matchImage: 'https://cdn.midjourney.com/e0ef5920-8991-4d35-bef1-d4d8c8836992/0_2.png' },
          { id: 'pair-6', value: 'Contest Arena', matchValue: 'Contest Arena', image: 'https://cdn.midjourney.com/a783ba37-5684-404b-88b2-46199094a8c7/0_0.png', matchImage: 'https://cdn.midjourney.com/a783ba37-5684-404b-88b2-46199094a8c7/0_0.png' },
        ],
      },

      learningPoints: [
        {
          id: 'edda-ch2-lp-13',
          content: 'Thor faces three strange contests in Utgard: drinking from a horn, lifting a cat, and wrestling an old woman.',
          category: 'plot-structure',
        },
        {
          id: 'edda-ch2-lp-14',
          content: 'The contests seem simple but Thor finds them impossibly difficult, hinting that something is wrong.',
          category: 'literary-technique',
        },
      ],
    },

    // Scene 6: narrative - The illusions revealed—Thor's true might
    {
      id: 'edda-ch2-scene-6',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/8a80a9e6-8451-43f0-a947-a22363fd4590/0_0.png',
      image: 'https://cdn.midjourney.com/48529534-aba8-490e-9594-080b4d7f847c/0_1.png',
      content: `As Thor prepares to leave Utgard, humiliated by his apparent failures, Utgard-Loki calls out to him from the gates of his fortress. The giant king's expression has changed—there is now respect, even fear, in his eyes.

"Wait, Thor Odinson. Now that you are safely outside my walls, I will tell you the truth. Everything you witnessed was illusion, mighty seiðr magic woven to protect us from your terrible strength."

Thor turns back, his eyes narrowing. "What do you mean, giant?"

Utgard-Loki explains: "The drinking horn was connected to the ocean itself—yet you lowered the sea level, creating the first tides! The cat you tried to lift was Jormungandr, the World Serpent that encircles Midgard—yet you nearly raised it from the ocean floor, almost unraveling the world! The old woman you wrestled was Old Age itself—and no one, not even gods, can defeat time—yet you brought her to one knee!

I myself was Skrymir, the giant you met in the forest. When you struck my head with Mjölnir in anger, I diverted your blows to hit the mountains instead—you created three deep valleys with your strikes! Had those blows landed truly, you would have killed me instantly.

Thor Odinson, you are far too dangerous to face honestly. Never come to Utgard again—for if you do, we will use every illusion, every trick, every magic we possess to stop you. Your true strength is too terrible to confront!"

With that, Utgard vanishes, hidden by magic, leaving Thor and his companion alone in the wilderness.`,

      inlineAnnotations: [
        {
          id: 'edda-ch2-ann-seidr',
          text: 'seiðr',
          tooltip: {
            title: 'Norse Magic',
            content: 'Seiðr (SAY-thur) was a type of Norse magic associated with prophecy, illusion, and altering fate. It was often viewed as feminine magic, though practiced by both men and women. Its use by giants emphasizes their supernatural cunning.',
            category: 'cultural-context',
          },
        },
        {
          id: 'edda-ch2-ann-jormungandr',
          text: 'Jormungandr',
          tooltip: {
            title: 'The World Serpent',
            content: 'Jormungandr is one of Loki\'s three monstrous children. Odin cast the serpent into the ocean, where it grew so large it encircles Midgard and grasps its own tail. Thor is fated to kill it during Ragnarök, but will die from its venom.',
            category: 'historical-context',
          },
        },
      ],

      learningPoints: [
        {
          id: 'edda-ch2-lp-15',
          content: 'The revelation scene shows that Thor\'s "failures" were actually displays of unprecedented power.',
          category: 'plot-structure',
        },
        {
          id: 'edda-ch2-lp-16',
          content: 'Giants use cunning and magic to counter the gods\' strength, showing that wit can match might.',
          category: 'thematic-analysis',
        },
        {
          id: 'edda-ch2-lp-17',
          content: 'The theme of appearance versus reality is central to this myth—what seems like defeat is actually victory.',
          category: 'literary-technique',
        },
      ],
    },

    // Scene 7: cause-effect - Match the challenges to their true nature
    {
      id: 'edda-ch2-scene-7',
      type: 'cause-effect',
      backgroundImage: 'https://cdn.midjourney.com/5474af53-3167-43cc-b04a-a89b30c1ea03/0_0.png',
      prompt: 'Match each challenge Thor faced with what it truly represented',

      pairs: [
        {
          id: 'edda-ch2-pair-1',
          cause: 'Thor tried to drink from a horn',
          effect: 'He was drinking from the ocean itself',
          explanation: 'The drinking horn was magically connected to all the world\'s oceans. Thor\'s mighty drinking lowered sea levels and created the first tides.',
        },
        {
          id: 'edda-ch2-pair-2',
          cause: 'Thor tried to lift a gray cat',
          effect: 'He was lifting Jormungandr, the World Serpent',
          explanation: 'The cat was an illusion concealing the World Serpent that encircles Midgard. Thor nearly lifted it from the ocean floor, almost unraveling the world\'s structure.',
        },
        {
          id: 'edda-ch2-pair-3',
          cause: 'Thor wrestled an old woman named Elli',
          effect: 'He was wrestling against Old Age itself',
          explanation: 'Elli was the personification of old age and time. No one, not even gods, can defeat time—yet Thor brought her to one knee, showing his exceptional strength.',
        },
        {
          id: 'edda-ch2-pair-4',
          cause: 'Thor struck Skrymir\'s head with Mjölnir',
          effect: 'He created three deep valleys in the mountains',
          explanation: 'Utgard-Loki used illusion to divert Thor\'s hammer blows to strike mountains instead. The resulting impact created deep valleys that remain to this day.',
        },
        {
          id: 'edda-ch2-pair-5',
          cause: 'Thor came to Utgard to test his strength',
          effect: 'He proved too powerful for giants to face honestly',
          explanation: 'The giants feared Thor\'s true strength so much that they used every illusion and trick to avoid confronting him directly, ultimately banishing him to protect themselves.',
        },
      ],

      distractors: [
        'He proved giants are stronger than gods',
        'He learned to use magic like the giants',
        'He discovered his hammer was broken',
      ],

      learningPoints: [
        {
          id: 'edda-ch2-lp-18',
          content: 'Understanding cause and effect reveals the deeper meanings hidden beneath the surface narrative.',
          category: 'literary-technique',
        },
        {
          id: 'edda-ch2-lp-19',
          content: 'Thor\'s contest against cosmic forces (ocean, serpent, time) elevates him to a mythic scale of power.',
          category: 'thematic-analysis',
        },
      ],
    },

    // Scene 8: narrative - The theft of Thor's hammer Mjölnir
    {
      id: 'edda-ch2-scene-8',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/e5b8faf4-79c4-41ff-b053-165ebdaf9761/0_0.png',
      image: 'https://cdn.midjourney.com/077803da-a89c-4c9c-b6b8-e9b4697d16b5/0_0.png',
      content: `Some time after Thor's return from Utgard, a terrible calamity befalls Asgard.

Thor awakens one morning to discover that Mjölnir, his mighty hammer, is missing! He searches his hall frantically, but the hammer is nowhere to be found. Without Mjölnir, the gods are vulnerable—the giants could attack at any moment, and the protector of Asgard would be powerless to defend them.

Thor immediately seeks out Loki. "Someone has stolen my hammer while I slept! You must help me find it, or all of Asgard is in danger!"

Loki, despite his trickster nature, understands the gravity of the situation. "I will go to Freyja and borrow her falcon cloak. I shall fly to Jotunheim and discover who has dared this theft."

Loki transforms into a falcon and flies over mountains and seas until he reaches the realm of the giants. There, he finds Thrym, a giant king, sitting on a golden throne and braiding golden collars for his hounds.

"Welcome, Loki!" Thrym booms with laughter. "Have the gods finally noticed that something is missing? Yes, I have Thor's hammer, buried eight leagues beneath the earth where no one can reach it!"

"Why have you stolen it?" Loki asks, though he suspects he knows the answer.

Thrym's eyes gleam with desire. "I will return Mjölnir on one condition only: the goddess Freyja must be brought to Jotunheim as my bride!"`,

      inlineAnnotations: [
        {
          id: 'edda-ch2-ann-thrym',
          text: 'Thrym',
          tooltip: {
            title: 'The Greedy Giant',
            content: 'Thrym\'s name means "noise" or "thunder" in Old Norse, perhaps mockingly echoing Thor\'s own dominion. He represents the giants\' perennial desire to possess what belongs to the gods.',
            category: 'cultural-context',
          },
        },
        {
          id: 'edda-ch2-ann-freyja',
          text: 'Freyja',
          tooltip: {
            title: 'The Goddess of Love and War',
            content: 'Freyja is the most beautiful of the goddesses and also a powerful warrior who claims half of those who die in battle. Her falcon cloak allows its wearer to fly, and she is associated with magic, love, beauty, and fertility.',
            category: 'historical-context',
          },
        },
      ],

      learningPoints: [
        {
          id: 'edda-ch2-lp-20',
          content: 'The theft of Thor\'s hammer represents a cosmic crisis—without it, the gods\' protection is compromised.',
          category: 'plot-structure',
        },
        {
          id: 'edda-ch2-lp-21',
          content: 'Giants in Norse myths often seek to marry goddesses, attempting to form alliances or steal divine power.',
          category: 'thematic-analysis',
        },
        {
          id: 'edda-ch2-lp-22',
          content: 'Loki serves as a mediator between gods and giants, able to move between both worlds.',
          category: 'character-analysis',
        },
      ],
    },

    // Scene 9: decision - Choose the plan to recover the hammer
    {
      id: 'edda-ch2-scene-9',
      type: 'decision',
      backgroundImage: 'https://cdn.midjourney.com/1d702bc3-481b-40a8-9747-7d80d680ddb6/0_0.png',
      prompt: 'How should the gods recover Mjölnir?',
      context: `The gods convene in emergency council. Loki has brought back Thrym's demand: Freyja as his bride in exchange for Thor's hammer.

When Freyja hears this, she becomes so furious that her rage shakes the halls of Asgard itself. "Never! I will not be bartered like property to some giant! Find another way!"

The gods debate desperately. Without the hammer, they are vulnerable. But forcing Freyja to marry against her will is unthinkable. They need a plan that satisfies Thrym's demand while protecting both Freyja and Asgard.

Finally, Heimdall, the wisest of the gods, speaks up with a cunning suggestion. Loki grins, seeing the potential in such a scheme. But Thor looks uncertain—the plan will require something he has never done before.

What should the gods do?`,

      choices: [
        {
          id: 'edda-ch2-choice-attack',
          text: 'Attack Jotunheim immediately to retrieve the hammer by force',
          consequence: 'The gods agree to attack without the hammer. But Odin shakes his head. "Without Mjölnir, we cannot guarantee victory. We would risk everything on a desperate assault. We need cunning, not just courage." The council reconsiders—there must be a better way.',
        },
        {
          id: 'edda-ch2-choice-bargain',
          text: 'Offer Thrym something else of equal value in trade',
          consequence: 'The gods consider what else might tempt Thrym. Gold? Magic items? But Loki points out the truth: "Giants always want what they cannot have. Thrym desires a goddess because she represents divine power he lacks. No treasure will suffice." They must find another approach.',
        },
        {
          id: 'edda-ch2-choice-disguise',
          text: 'Disguise Thor as Freyja and send him to the wedding',
          consequence: 'Heimdall\'s plan is accepted! Thor will dress as a bride and go to Jotunheim disguised as Freyja. Loki will accompany him dressed as a bridesmaid. Thor protests loudly—"This is humiliating! I am the thunder god!"—but finally agrees. Sometimes cunning must triumph over pride.',
          learningPoints: [
            {
              id: 'edda-ch2-lp-23',
              content: 'The disguise plan shows that even mighty warriors must sometimes use trickery to achieve their goals.',
              category: 'thematic-analysis',
            },
            {
              id: 'edda-ch2-lp-24',
              content: 'Cross-dressing and disguise are recurring motifs in Norse myths, often leading to humorous but successful outcomes.',
              category: 'literary-technique',
            },
          ],
        },
      ],

      learningPoints: [
        {
          id: 'edda-ch2-lp-25',
          content: 'Problem-solving in Norse myths often requires creative thinking rather than straightforward combat.',
          category: 'thematic-analysis',
        },
      ],
    },

    // Scene 10: dialogue - Thor disguised as Freya meeting Thrym
    {
      id: 'edda-ch2-scene-10',
      type: 'dialogue',
      backgroundImage: 'https://cdn.midjourney.com/6ed38795-d38b-4203-b304-2b5176d3aada/0_0.png',
      character: {
        id: 'edda-ch2-thrym',
        name: 'Thrym',
        portrait: 'https://cdn.midjourney.com/3d3d4b68-52a4-450c-9b74-b40852df159a/0_3.png',
        description: 'The giant king who stole Thor\'s hammer',
      },

      dialogueTree: {
        id: 'edda-ch2-dlg-wedding-1',
        speaker: 'edda-ch2-thrym',
        text: 'At last! The fair Freyja has come to be my bride! Welcome to Jotunheim, goddess. Let the wedding feast begin!',

        responses: [
          {
            id: 'edda-ch2-resp-wedding-1',
            text: '[Say nothing, nod demurely behind your veil]',
            nextNodeId: 'edda-ch2-dlg-wedding-2',
          },
        ],

        allNodes: [
          {
            id: 'edda-ch2-dlg-wedding-2',
            speaker: 'edda-ch2-thrym',
            text: 'You are quiet, my bride! But no matter—soon you shall be my queen. Come, sit beside me at the feast. I have prepared the finest foods!',
            nextNodeId: 'edda-ch2-dlg-wedding-3',
          },
          {
            id: 'edda-ch2-dlg-wedding-3',
            speaker: 'edda-ch2-thrym',
            text: 'Strange... my bride has quite an appetite! You have eaten an entire ox, eight salmon, and all the delicacies meant for the women! And drunk three casks of mead! I have never seen a maiden eat so much!',
            responses: [
              {
                id: 'edda-ch2-resp-wedding-2',
                text: '[Loki as bridesmaid]: "Freyja was so eager to come here, she has not eaten in eight days!"',
                nextNodeId: 'edda-ch2-dlg-wedding-4',
              },
            ],
          },
          {
            id: 'edda-ch2-dlg-wedding-4',
            speaker: 'edda-ch2-thrym',
            text: 'Ah, that explains it! Such devotion moves my heart. Let me lift your veil to kiss my bride—',
            nextNodeId: 'edda-ch2-dlg-wedding-5',
          },
          {
            id: 'edda-ch2-dlg-wedding-5',
            speaker: 'edda-ch2-thrym',
            text: 'BY THE FROST GIANTS! Your eyes! They burn like fire! They gleam with terrible rage! What manner of goddess—',
            responses: [
              {
                id: 'edda-ch2-resp-wedding-3',
                text: '[Loki]: "Freyja has not slept in eight nights, so eager was she for this wedding! The lack of sleep makes her eyes fierce with... anticipation."',
                nextNodeId: 'edda-ch2-dlg-wedding-6',
              },
            ],
          },
          {
            id: 'edda-ch2-dlg-wedding-6',
            speaker: 'edda-ch2-thrym',
            text: 'Such passion! Very well, let us complete the ceremony! Bring forth Mjölnir, as is our custom! Let the hammer be laid in the bride\'s lap to consecrate our union!',
            nextNodeId: 'edda-ch2-dlg-wedding-7',
          },
          {
            id: 'edda-ch2-dlg-wedding-7',
            speaker: 'edda-ch2-thrym',
            text: '[As Mjölnir is placed in Thor\'s lap] By this hammer, I wed the goddess Freyja, and bind our peoples in—WAIT! Why are you laughing, bride? Why do you grip the hammer so—OH NO—',
            isEnd: true,
          },
        ],
      },

      learningPoints: [
        {
          id: 'edda-ch2-lp-26',
          content: 'The wedding scene is comedic yet triumphant, showing Norse myth\'s blend of humor and heroism.',
          category: 'literary-technique',
        },
        {
          id: 'edda-ch2-lp-27',
          content: 'Loki\'s quick wit saves the deception, demonstrating the value of cunning in dangerous situations.',
          category: 'character-analysis',
        },
      ],
    },

    // Scene 11: narrative - Thor reclaims Mjölnir and defeats the giants
    {
      id: 'edda-ch2-scene-11',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/14492375-a508-4e71-b29c-b0cb523a59b9/0_0.png',
      image: 'https://cdn.midjourney.com/e0ef5920-8991-4d35-bef1-d4d8c8836992/0_2.png',
      content: `The moment Thor's hands close around Mjölnir, he tears off his bridal veil and roars with laughter and rage combined.

"Did you truly think I was the goddess Freyja, you fool?!" Thor bellows, his voice shaking the hall. "I am Thor, son of Odin, wielder of Mjölnir, protector of Asgard!"

Lightning flashes outside as Thor's power returns in full. The giants scramble backward in terror, but it is too late. Thor's hammer rises and falls, rises and falls, like thunder itself given form.

Thrym tries to flee, but there is no escape. The giant king who dared to steal Mjölnir and demand a goddess as ransom pays the ultimate price for his arrogance. The other giants who participated in the theft meet similar fates.

When the thunder finally ceases and the storm clears, Thor and Loki stand victorious in the ruined hall. The hammer has been reclaimed, and the giants have learned once again not to trifle with the gods of Asgard.

As they journey home, even Thor must admit that Loki's cunning and Heimdall's wisdom proved as valuable as his own strength. Sometimes, he reflects, the greatest victories require more than raw power—they require wit, disguise, and the willingness to endure temporary humiliation for ultimate triumph.`,

      learningPoints: [
        {
          id: 'edda-ch2-lp-28',
          content: 'Thor\'s willingness to endure humiliation for the greater good shows maturity and wisdom beyond mere strength.',
          category: 'character-analysis',
        },
        {
          id: 'edda-ch2-lp-29',
          content: 'The hammer\'s return restores cosmic order—Thor\'s protective role is essential for the gods\' security.',
          category: 'thematic-analysis',
        },
        {
          id: 'edda-ch2-lp-30',
          content: 'The tale blends comedy with violence, typical of Norse mythology\'s tonal range.',
          category: 'literary-technique',
        },
      ],
    },

    // Scene 12: primary-source - Examine Viking Age artifacts related to Thor worship
    {
      id: 'edda-ch2-scene-12',
      type: 'primary-source',
      backgroundImage: 'https://cdn.midjourney.com/84809d07-d927-4646-8063-e940fa75d354/0_0.png',
      prompt: 'Analyze historical evidence of Thor worship in Viking Age society',

      source: {
        title: 'Thor\'s Hammer Amulets (Mjölnir Pendants)',
        author: 'Archaeological Record',
        date: '10th-11th centuries CE',
        type: 'image',
        content: 'https://cdn.midjourney.com/aad70e48-0542-4164-9c2a-3d8e8738252e/0_2.png',
        citation: 'Numerous hammer-shaped pendants have been found throughout Scandinavia, often in graves alongside other valuable items. These were worn as protective amulets invoking Thor\'s power.',
      },

      questions: [
        {
          id: 'edda-ch2-src-q1',
          question: 'What does the widespread presence of Mjölnir amulets tell us about Thor\'s role in Viking society?',
          type: 'multiple-choice',
          options: [
            'Thor was only worshipped by warriors and fighters',
            'Thor was a protective deity invoked by common people for daily protection',
            'Thor was considered less important than other gods',
            'Thor worship was limited to royal families',
          ],
          correctAnswer: 'Thor was a protective deity invoked by common people for daily protection',
          explanation: 'The abundance of Thor\'s hammer amulets across all social classes suggests he was widely venerated as a protector. Unlike Odin (primarily worshipped by elite warriors and kings), Thor was the people\'s god, protecting farmers, travelers, and families.',
        },
        {
          id: 'edda-ch2-src-q2',
          question: 'Why would Vikings wear hammer amulets rather than amulets of other weapons?',
          type: 'multiple-choice',
          options: [
            'Hammers were the primary Viking weapon',
            'The hammer symbolized Thor\'s power over thunder and his protective role',
            'Hammers were easier to craft as jewelry',
            'Other gods did not have distinctive weapons',
          ],
          correctAnswer: 'The hammer symbolized Thor\'s power over thunder and his protective role',
          explanation: 'Mjölnir represented Thor\'s ability to protect humanity and the gods from giants and chaos. Wearing a hammer amulet invoked his protective power in daily life, especially during travel or dangerous activities.',
        },
        {
          id: 'edda-ch2-src-q3',
          question: 'How do these artifacts connect to the myths you\'ve just experienced?',
          type: 'multiple-choice',
          options: [
            'They show that Vikings collected mythological souvenirs',
            'They demonstrate that people wore hammer amulets for the same protective power Thor used in the myths',
            'They prove that Thor was a real historical figure',
            'They suggest Vikings used hammers as their primary weapon',
          ],
          correctAnswer: 'They demonstrate that people wore hammer amulets for the same protective power Thor used in the myths',
          explanation: 'The myths show why Mjölnir was so important: it was Thor\'s primary weapon and symbol of divine protection. The theft of the hammer creates a cosmic crisis because without it, the gods cannot protect the world. Historical Vikings understood this symbolism and wore hammer amulets for the same reason—to invoke Thor\'s protective power in their own lives.',
        },
      ],

      learningPoints: [
        {
          id: 'edda-ch2-lp-31',
          content: 'Archaeological evidence confirms Thor\'s importance in Viking society, not just in literary myths.',
          category: 'historical-context',
        },
        {
          id: 'edda-ch2-lp-32',
          content: 'Religious artifacts reveal how mythological themes manifested in daily life and personal devotion.',
          category: 'cultural-context',
        },
      ],
    },

    // Scene 13: anachronism - Identify items that don't belong in Viking Age scene
    {
      id: 'edda-ch2-scene-13',
      type: 'anachronism',
      backgroundImage: 'https://cdn.midjourney.com/8d2e798d-1e0e-409c-92a8-da39cf4ab427/0_0.png',
      prompt: 'Find the anachronisms in this Viking Age settlement',
      scenario: 'You are visiting a Norse village during the Viking Age (approximately 800-1000 CE). Some items in this scene don\'t belong to this time period. Can you identify them?',

      items: [
        {
          id: 'edda-ch2-ana-1',
          name: 'Longship',
          image: 'https://cdn.midjourney.com/821071a2-4ac3-4760-a52b-2d16fb19ba73/0_1.png',
          description: 'A wooden vessel with a dragon prow',
          explanation: 'Longships were the quintessential Viking vessels, used for both warfare and trade. They could navigate both deep oceans and shallow rivers, making Viking expansion possible.',
        },
        {
          id: 'edda-ch2-ana-2',
          name: 'Thor\'s Hammer Amulet',
          image: 'https://cdn.midjourney.com/aad70e48-0542-4164-9c2a-3d8e8738252e/0_2.png',
          description: 'A pendant shaped like a hammer',
          explanation: 'Mjölnir amulets were extremely common throughout the Viking Age, worn for protection and as symbols of faith in the Norse gods.',
        },
        {
          id: 'edda-ch2-ana-3',
          name: 'Cell Phone',
          image: 'https://cdn.midjourney.com/ed2dff56-e8e9-4381-8f74-83d6a4e641bd/0_2.png',
          description: 'A handheld electronic communication device',
          explanation: 'Cell phones were invented in the 20th century, over 1000 years after the Viking Age. Vikings communicated through messengers, signal fires, and written runes.',
        },
        {
          id: 'edda-ch2-ana-4',
          name: 'Runic Inscription',
          image: 'https://cdn.midjourney.com/c78d00df-a80e-496c-abe2-72256ac37eef/0_0.png',
          description: 'Carved symbols on a standing stone',
          explanation: 'Runes were the writing system used by Norse peoples. Runestones were erected to commemorate the dead, record deeds, or mark territory.',
        },
        {
          id: 'edda-ch2-ana-5',
          name: 'Pocket Watch',
          image: 'https://cdn.midjourney.com/6b8a3c77-ad08-415b-8f14-174eb25dc0dc/0_3.png',
          description: 'A small timepiece with hands and numbers',
          explanation: 'Pocket watches were invented in the 16th century, over 600 years after the Viking Age. Vikings told time by the sun\'s position and seasonal markers.',
        },
        {
          id: 'edda-ch2-ana-6',
          name: 'Mead Horn',
          image: 'https://cdn.midjourney.com/6d04fedb-c7b3-459c-a9b4-48ba87dd5b16/0_2.png',
          description: 'A drinking vessel made from an animal horn',
          explanation: 'Drinking horns were common in Norse culture, used for mead and beer during feasts. They appear frequently in archaeological finds and literary sources.',
        },
        {
          id: 'edda-ch2-ana-7',
          name: 'Eyeglasses',
          image: 'https://cdn.midjourney.com/dd5d6bf2-7a6d-4c42-bcbf-0abc4bed6d20/0_3.png',
          description: 'Lenses mounted in frames to correct vision',
          explanation: 'Eyeglasses were invented in Italy in the late 13th century, about 200-300 years after the Viking Age ended. Vikings had no corrective lenses for vision problems.',
        },
        {
          id: 'edda-ch2-ana-8',
          name: 'Iron Axe',
          image: 'https://cdn.midjourney.com/ba020125-0859-4b52-9f37-816aa807a44c/0_1.png',
          description: 'A tool and weapon with a metal blade',
          explanation: 'Iron axes were essential Viking tools, used for both woodworking and warfare. The bearded axe was particularly popular, serving as both a practical tool and a formidable weapon.',
        },
      ],

      correctAnswers: ['edda-ch2-ana-3', 'edda-ch2-ana-5', 'edda-ch2-ana-7'],

      learningPoints: [
        {
          id: 'edda-ch2-lp-33',
          content: 'Recognizing anachronisms helps distinguish historical reality from common misconceptions about the Viking Age.',
          category: 'historical-context',
        },
        {
          id: 'edda-ch2-lp-34',
          content: 'Vikings had sophisticated technology for their era, but modern inventions like gunpowder, precision timekeeping, and optics came much later.',
          category: 'cultural-context',
        },
      ],
    },

    // Scene 14: narrative - Loki's role as both helper and troublemaker (final scene with quiz trigger)
    {
      id: 'edda-ch2-scene-14',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/2a59c28a-d211-40e4-b4c2-e4dc89dcce29/0_0.png',
      image: 'https://cdn.midjourney.com/3d3d4b68-52a4-450c-9b74-b40852df159a/0_3.png',
      content: `As our tales of Thor's deeds come to a close, we must consider the complex figure who appears in both stories: Loki, the trickster.

In the journey to Utgard, Loki served as Thor's companion—his cunning complementing Thor's strength. In the theft of Mjölnir, Loki's quick thinking and clever deception saved the day, recovering the hammer through wit rather than force.

Yet Loki is no simple hero. He is a being of contradictions: sometimes helpful, sometimes harmful; sometimes loyal to the gods, sometimes working against them. He is the son of giants who lives among the gods, never fully belonging to either world.

The Norse people understood that the world needs both order and chaos, both strength and cunning, both reliability and unpredictability. Thor represents straightforward might and heroic virtue. Loki represents change, challenge, and the unexpected.

As Snorri tells us, Loki will play an ever more complex role in the fate of the gods. His actions will bring both gifts and curses to Asgard. He is handsome and clever, but "evil in character and very changeable in behavior."

The myths of Thor and Loki show us that true wisdom comes from understanding both strength and cunning, both honor and deception. The gods need Thor's hammer, but they also sometimes need Loki's silver tongue.

In our next chapter, we will turn to Odin, the Allfather, and his own quest for wisdom—a quest that will require sacrifices beyond imagining...`,

      inlineAnnotations: [
        {
          id: 'edda-ch2-ann-trickster',
          text: 'trickster',
          tooltip: {
            title: 'The Trickster Archetype',
            content: 'Trickster figures appear in mythologies worldwide—Anansi in African tales, Coyote in Native American stories, Hermes in Greek myth. They challenge order, create change, and often serve as both culture heroes and troublemakers.',
            category: 'literary-context',
          },
        },
      ],

      learningPoints: [
        {
          id: 'edda-ch2-lp-35',
          content: 'Loki embodies the trickster archetype, a figure who exists between order and chaos, challenging both.',
          category: 'character-analysis',
        },
        {
          id: 'edda-ch2-lp-36',
          content: 'Norse mythology embraces moral complexity—figures like Loki cannot be simply categorized as good or evil.',
          category: 'thematic-analysis',
        },
        {
          id: 'edda-ch2-lp-37',
          content: 'The contrast between Thor and Loki illustrates complementary approaches to solving problems: force and cunning.',
          category: 'literary-technique',
        },
      ],

      events: {
        onExit: [
          {
            type: 'quiz',
            componentId: 'edda-quiz-chapter-2',
            condition: {
              type: 'if-not-completed',
            },
          },
        ],
      },
    },
  ],

  endQuiz: chapter2Quiz,
};

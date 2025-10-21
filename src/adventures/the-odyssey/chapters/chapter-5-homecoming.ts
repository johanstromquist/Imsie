import type { Chapter } from '../../../types';
import { chapter5Quiz } from '../quizzes/chapter-5-quiz';

/**
 * Chapter 5: Homecoming and the Suitors' Doom
 *
 * Odysseus finally returns to Ithaca, disguised as a beggar, and enacts his
 * revenge on the suitors who have plagued his household. This chapter explores
 * themes of identity, disguise, loyalty, justice, and the completion of the hero's journey.
 */
export const chapter5: Chapter = {
  id: 'chapter-5-homecoming',
  title: 'Chapter 5: Homecoming and the Suitors\' Doom',
  description: 'After years of captivity and perilous journeys, Odysseus finally returns to Ithaca to reclaim his throne and family.',

  learningObjectives: [
    'Analyze the theme of disguise and identity in Greek epic poetry',
    'Understand Greek concepts of justice and revenge',
    'Explore the role of loyalty in the hero\'s homecoming',
    'Recognize recognition scenes as a literary device',
    'Examine the completion of the hero\'s journey archetype',
  ],

  scenes: [
    // Scene 1: Odysseus released by Calypso
    {
      id: 'chapter-5-1-release',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/4c10092b-147a-49da-836c-516818ab6d8f/0_0.png',
      image: 'https://cdn.midjourney.com/aef4712a-9f98-47a6-9d7d-cafcdd0f0b31/0_0.png',

      content: `Seven years have passed since Odysseus washed ashore on Calypso's island. Seven years of captivity in paradise—but paradise is still a prison when the heart longs for home.

Each day, the immortal nymph Calypso offers him eternal youth and immortality if he will stay. Each day, Odysseus refuses, sitting on the shore and gazing across the wine-dark sea toward Ithaca.

On Mount Olympus, Athena pleads once more with Zeus. "How long must the hero suffer? His crew is lost, his youth is fading, and his kingdom needs him. Let him go home!"

Zeus nods, his decision made. "Send Hermes to Calypso. The mortal must be released."`,

      learningPoints: [
        {
          id: 'lp-5-1-divine-intervention',
          content: 'The gods\' council shows that divine will ultimately shapes mortal fate in Greek epic, yet Odysseus\'s perseverance influences their decision.',
          category: 'literary-context',
        },
        {
          id: 'lp-5-1-homecoming-theme',
          content: 'The longing for home (nostos) is the driving force of The Odyssey, more powerful than even immortality.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 2: Shipwrecked by Poseidon's storm
    {
      id: 'chapter-5-2-shipwreck',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/928a104f-cfac-455d-b51f-adfcff3eed38/0_0.png',
      image: 'https://cdn.midjourney.com/6b670118-7de3-48d1-9207-f8665335a057/0_0.png',

      content: `Reluctantly, Calypso provides Odysseus with tools to build a raft. With tears in her eyes, she watches him set sail across the vast sea.

For seventeen days, Odysseus sails under clear skies. Freedom! The salt spray on his face, the wind in his makeshift sail—every moment brings him closer to Ithaca.

But Poseidon, returning from his distant travels, spots the tiny raft cutting through his domain. The god's rage has not diminished. "Still you defy me, mortal? You blinded my son! You shall not reach home so easily!"

The god of the sea strikes his trident against the waves. The sky darkens. Lightning splits the heavens. Towering waves crash over the raft, splintering it like kindling. Odysseus is hurled into the churning depths, his lungs burning, his strength nearly spent.`,

      learningPoints: [
        {
          id: 'lp-5-2-poseidon-wrath',
          content: 'Poseidon\'s continued pursuit demonstrates that in Greek belief, divine anger could follow mortals for years without mercy.',
          category: 'cultural-context',
        },
        {
          id: 'lp-5-2-perseverance',
          content: 'Odysseus\'s survival of yet another disaster showcases his defining trait: relentless perseverance against impossible odds.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 3: Rescued by Nausicaa in Phaeacia
    {
      id: 'chapter-5-3-nausicaa',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/2ce10dab-c6e7-4768-a5f7-2298037019db/0_0.png',
      image: 'https://cdn.midjourney.com/122f3358-79d7-4082-8e09-e32fde124bd7/0_0.png',

      content: `Barely conscious, Odysseus drags himself onto the shore of an unknown land. His body is battered, his raft destroyed, his possessions lost. He crawls beneath olive bushes and collapses into exhausted sleep.

He wakes to the sound of laughter. Through the branches, he sees young women playing ball on the beach. Leading them is a radiant princess—Nausicaa, daughter of King Alcinous of the Phaeacians.

Rising from the bushes, covered in brine and filth, Odysseus must look like a wild man. The young women scatter in fear—all except Nausicaa. Something in his eyes, his bearing despite his rags, speaks of nobility.

"Stranger," she says with courage and compassion, "you have the look of one who has suffered greatly. Come—I will take you to my father's palace. The Phaeacians are known for our hospitality."`,

      inlineAnnotations: [
        {
          id: 'annotation-5-3-phaeacians',
          text: 'Phaeacians',
          tooltip: {
            title: 'The Hospitable People',
            content: 'The Phaeacians were a legendary seafaring people known for their wealth, hospitality, and magical ships. They represent the ideal of xenia (guest-friendship) in Greek culture.',
            category: 'cultural-context',
          },
        },
      ],

      learningPoints: [
        {
          id: 'lp-5-3-hospitality',
          content: 'Nausicaa\'s kindness to a stranger embodies the Greek virtue of xenia, the sacred duty of hospitality to those in need.',
          category: 'cultural-context',
        },
        {
          id: 'lp-5-3-nausicaa-character',
          content: 'Nausicaa represents feminine courage and wisdom, standing firm when others flee and recognizing nobility beneath rags.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 4: Odysseus reveals his identity and tells his tale
    {
      id: 'chapter-5-4-revelation',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/2ce10dab-c6e7-4768-a5f7-2298037019db/0_0.png',

      content: `In the magnificent hall of King Alcinous, Odysseus is treated with honor. The king provides him with fine clothes, a feast, and entertainment. A blind bard sings of the Trojan War—of the wooden horse, of heroes, of glory.

When the bard sings of Odysseus, the stranger weeps. Alcinous notices and, with gentle courtesy, asks: "Who are you, traveler? Why do these tales move you to tears?"

Odysseus rises, his voice strong and clear. "I am Odysseus, son of Laertes, king of Ithaca. The tales you hear—I lived them. Let me tell you of my ten-year journey home."

Through the night, Odysseus recounts his adventures: the Lotus-Eaters, the Cyclops, Circe's island, the land of the dead, the Sirens, Scylla and Charybdis, the cattle of Helios, and Calypso's prison. The Phaeacians listen in wonder, their hearts moved by his suffering and courage.`,

      learningPoints: [
        {
          id: 'lp-5-4-storytelling',
          content: 'Odysseus telling his own story creates a frame narrative structure, allowing Homer to reveal past adventures while advancing the plot.',
          category: 'literary-context',
        },
        {
          id: 'lp-5-4-identity-power',
          content: 'The revelation of Odysseus\'s name transforms him from anonymous beggar to legendary hero, showing the power of identity and reputation.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 5: The Phaeacians provide safe passage to Ithaca
    {
      id: 'chapter-5-5-voyage',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/5b73f8c0-19fe-4088-99e6-b24f42129a00/0_0.png',
      image: 'https://cdn.midjourney.com/1168856d-c1ed-4008-bbf4-546f6c0ce88f/0_0.png',

      content: `King Alcinous is moved by Odysseus's tale. "You have suffered enough, noble Odysseus. Our ships are the fastest in the world, blessed by Poseidon himself. We will take you home to Ithaca."

The Phaeacians load their finest ship with treasures—bronze, gold, fine cloth—far more than Odysseus lost when Troy fell. As night falls, Odysseus boards the vessel, and the magical ship cuts through the waves at impossible speed.

Exhausted by his tale and overcome by relief, Odysseus falls into the deepest sleep of his life. He sleeps so soundly that when the Phaeacians arrive at Ithaca's shore at dawn, they carry him—still sleeping—onto the beach, placing the treasure in a cave nearby.

When Odysseus finally wakes, he doesn't recognize his homeland. Twenty years have passed. The gods have shrouded the island in mist. Has he been betrayed again? Is this truly Ithaca?`,

      learningPoints: [
        {
          id: 'lp-5-5-phaeacian-generosity',
          content: 'The Phaeacians\' gifts restore Odysseus\'s wealth and status, emphasizing how proper hospitality enriches both guest and host.',
          category: 'cultural-context',
        },
        {
          id: 'lp-5-5-recognition-theme',
          content: 'Odysseus not recognizing his own homeland begins the theme of recognition that will dominate his homecoming.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 6: Athena disguises Odysseus as a beggar
    {
      id: 'chapter-5-6-disguise',
      type: 'dialogue',
      backgroundImage: 'https://cdn.midjourney.com/c97d520f-9c61-4588-b09d-70aae83a3027/0_0.png',

      character: {
        id: 'athena',
        name: 'Athena',
        portrait: 'https://cdn.midjourney.com/6499f6c6-c748-41a4-9bfe-2eb7c183514e/0_0.png',
        portraitVideo: 'https://cdn.midjourney.com/video/7b315fcf-9619-4433-a966-2338070d47fc/1.mp4',
        description: 'Goddess of wisdom and Odysseus\'s divine patron',
      },

      dialogueTree: {
        id: 'node-1',
        speaker: 'athena',
        text: 'Cease your doubts, Odysseus. This IS Ithaca, your home. But you cannot simply walk into your palace and reclaim your throne.',

        responses: [
          {
            id: 'response-why-not',
            text: 'Why not? I am the rightful king!',
            nextNodeId: 'node-2',
          },
          {
            id: 'response-what-danger',
            text: 'What danger awaits me in my own home?',
            nextNodeId: 'node-3',
          },
        ],

        allNodes: [
          {
            id: 'node-2',
            speaker: 'athena',
            text: 'Your palace is overrun with suitors—108 noble men who devour your wealth and pressure your wife to remarry. They have grown bold and dangerous. If you arrive as Odysseus, they will kill you before you can act.',
            nextNodeId: 'node-4',
          },
          {
            id: 'node-3',
            speaker: 'athena',
            text: 'Your palace swarms with 108 suitors who feast on your wealth and harass your wife Penelope. They have grown violent and desperate. Arriving as yourself would be suicide.',
            nextNodeId: 'node-4',
          },
          {
            id: 'node-4',
            speaker: 'athena',
            text: 'You must approach as a beggar. Observe, plan, test who remains loyal. Only when the time is right will you reveal yourself and strike.',
            responses: [
              {
                id: 'response-agree',
                text: 'You are wise, goddess. I will trust your plan.',
                nextNodeId: 'node-5',
                learningPoints: [
                  {
                    id: 'lp-5-6-wisdom',
                    content: 'Odysseus\'s acceptance of Athena\'s plan shows his growth—he tempers his heroic pride with strategic wisdom.',
                    category: 'literary-context',
                  },
                ],
              },
              {
                id: 'response-difficult',
                text: 'It pains me to enter my own home in disguise...',
                nextNodeId: 'node-6',
                learningPoints: [
                  {
                    id: 'lp-5-6-conflict',
                    content: 'Odysseus\'s internal conflict between pride and prudence reflects the hero\'s struggle with his own nature.',
                    category: 'literary-context',
                  },
                ],
              },
            ],
          },
          {
            id: 'node-5',
            speaker: 'athena',
            text: 'Good. Now hold still...',
            nextNodeId: 'node-7',
          },
          {
            id: 'node-6',
            speaker: 'athena',
            text: 'Would you rather walk in proudly and die? Or live to reclaim everything? The choice is clear.',
            nextNodeId: 'node-7',
          },
          {
            id: 'node-7',
            speaker: 'athena',
            text: 'Athena touches your face, and you feel your body change. Your strong limbs wither, your skin wrinkles and sags, your thick hair thins to gray wisps. Your fine Phaeacian garments transform to filthy rags. You are now unrecognizable—a decrepit beggar whom no one would suspect is the legendary Odysseus.',
            isEnd: true,
          },
        ],
      },

      learningPoints: [
        {
          id: 'lp-5-6-identity',
          content: 'The disguise motif allows exploration of identity—whether Odysseus is defined by appearance, reputation, or essential character.',
          category: 'literary-context',
        },
        {
          id: 'lp-5-6-strategic-thinking',
          content: 'Athena\'s plan demonstrates that Greek heroes valued strategic intelligence as much as physical courage.',
          category: 'cultural-context',
        },
      ],
    },

    // Scene 7: Reunion with Eumaeus the swineherd
    {
      id: 'chapter-5-7-eumaeus',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/c97d520f-9c61-4588-b09d-70aae83a3027/0_0.png',
      image: 'https://cdn.midjourney.com/33106117-6d6c-4120-8f90-be797f3a7cc3/0_0.png',

      content: `Following Athena's counsel, Odysseus makes his way to the hut of Eumaeus, his loyal swineherd. The old man lives in the hills above the palace, tending Odysseus's pigs.

When Odysseus—now appearing as a ragged beggar—approaches, Eumaeus's dogs rush forward barking. But the swineherd calls them off and welcomes the stranger with genuine warmth.

"Come in, old father," Eumaeus says, offering the best seat by his fire. "I have little to give, but what I have is yours. The suitors feast on my master's wealth in the great hall, but here at least, a stranger is treated with respect."

As they share a simple meal, Eumaeus speaks of his master with undying loyalty: "Twenty years he's been gone. The suitors say he's dead, but I refuse to believe it. Odysseus will return. I know he will."

Odysseus's heart swells with emotion. Here, in this humble hut, true loyalty survives.`,

      inlineAnnotations: [
        {
          id: 'annotation-5-7-eumaeus',
          text: 'Eumaeus',
          tooltip: {
            title: 'The Loyal Swineherd',
            content: 'Eumaeus (yoo-MEE-us) represents the ideal of loyal service. Though a slave, he\'s portrayed as noble in character, more worthy than the free-born suitors who abuse hospitality.',
            category: 'cultural-context',
          },
        },
      ],

      learningPoints: [
        {
          id: 'lp-5-7-loyalty',
          content: 'Eumaeus\'s unwavering loyalty after twenty years demonstrates that in Greek values, character and virtue transcend social class.',
          category: 'cultural-context',
        },
        {
          id: 'lp-5-7-hospitality-contrast',
          content: 'The contrast between Eumaeus\'s generous hospitality and the suitors\' abuse of xenia reveals true nobility of character.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 8: Telemachus returns from his quest
    {
      id: 'chapter-5-8-telemachus',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/c97d520f-9c61-4588-b09d-70aae83a3027/0_0.png',
      image: 'https://cdn.midjourney.com/2586d3fa-b804-48b9-8679-4fb7c5cb0d93/0_0.png',

      content: `The next morning, a young man arrives at Eumaeus's hut—tall, noble, with eyes full of determination. It is Telemachus, Odysseus's son, now grown to manhood.

Telemachus has been on his own journey, seeking news of his father in Pylos and Sparta. He found no definite answers, but he found something more valuable: confidence, purpose, and the will to fight for his home.

"Eumaeus, loyal friend," Telemachus greets the swineherd warmly. "I've come before going to the palace. Are you well?" His eyes slide to the ragged beggar in the corner. "And who is this stranger?"

"A traveler fallen on hard times," Eumaeus replies. "I've given him shelter."

Odysseus studies his son—no longer the infant he left behind, but a man. Pride and pain war in his heart. Twenty years lost. But his son stands before him, strong and good.

"Any stranger is welcome in my father's name," Telemachus says with dignity, "even though his house is overrun by those who dishonor him."`,

      learningPoints: [
        {
          id: 'lp-5-8-telemachus-growth',
          content: 'Telemachus\'s development from uncertain boy to confident man parallels his father\'s journey, creating a dual coming-of-age narrative.',
          category: 'literary-context',
        },
        {
          id: 'lp-5-8-recognition-delay',
          content: 'The dramatic irony of father and son not recognizing each other builds tension and emotional power for the eventual revelation.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 9: Decision - When should Odysseus reveal his identity?
    {
      id: 'chapter-5-9-decision',
      type: 'decision',
      backgroundImage: 'https://cdn.midjourney.com/c97d520f-9c61-4588-b09d-70aae83a3027/0_0.png',

      prompt: 'When should Odysseus reveal his true identity to Telemachus?',

      context: `After Telemachus greets you as a stranger, Eumaeus leaves to inform Penelope that her son has returned safely. You are alone with Telemachus—your son, who doesn't recognize you.

Twenty years. He was an infant when you left. Now he's a man—but what kind of man? Can he be trusted with your identity? Can he keep a secret? Will he stand with you against 108 suitors?

The moment of revelation approaches. How do you choose to reveal yourself?`,

      choices: [
        {
          id: 'choice-immediate',
          text: 'Reveal yourself immediately',
          consequence: 'Athena restores your true form. Telemachus stumbles backward in shock, then disbelief, then overwhelming joy. Father and son embrace for the first time in twenty years, both weeping. "Is it truly you?" Telemachus asks. "Or some god\'s cruel trick?" You prove your identity with knowledge only Odysseus would have. Together, you begin planning your revenge.',
          learningPoints: [
            {
              id: 'lp-5-9-trust',
              content: 'Odysseus\'s immediate revelation shows his trust in his son and recognition that some bonds transcend strategic caution.',
              category: 'literary-context',
            },
          ],
        },
        {
          id: 'choice-test-first',
          text: 'Test his character first',
          consequence: 'You engage Telemachus in conversation as a beggar, asking about his father, his home, his loyalties. His answers reveal a young man of integrity and courage, utterly devoted to his father\'s memory and his mother\'s honor. Only after this test do you reveal yourself. Telemachus is startled by your caution but understands—it proves you truly are Odysseus, the man of cunning.',
          learningPoints: [
            {
              id: 'lp-5-9-caution',
              content: 'Testing before revealing demonstrates Odysseus\'s hard-won wisdom—trust must be verified, even with family.',
              category: 'literary-context',
            },
          ],
        },
        {
          id: 'choice-wait',
          text: 'Maintain the disguise longer',
          consequence: 'You want to reveal yourself, but something holds you back. The suitors are numerous, the situation dangerous. Better to observe more, gather intelligence. You engage Telemachus in conversation, carefully hinting at your identity without fully revealing it. When Athena insists, you finally transform and reveal yourself. "Forgive my caution," you tell your son. "I had to be absolutely certain." Telemachus understands—he is learning to think like Odysseus.',
          learningPoints: [
            {
              id: 'lp-5-9-strategy',
              content: 'Odysseus\'s initial hesitation shows the survivor\'s instinct he developed—even with family, caution comes first.',
              category: 'literary-context',
            },
          ],
        },
      ],

      learningPoints: [
        {
          id: 'lp-5-9-recognition-scene',
          content: 'Recognition scenes (anagnorisis) are crucial moments in Greek epic, building emotional catharsis through delayed revelation.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 10: The beggar in the palace
    {
      id: 'chapter-5-10-palace',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/36583bff-7fb4-460a-be0d-609f09513530/0_0.png',
      image: 'https://cdn.midjourney.com/98c98c4c-a94f-44e6-b7cc-d7702f297f40/0_0.png',

      content: `Disguised as a beggar, you enter your own palace for the first time in twenty years. The great hall is filled with suitors—108 arrogant young men lounging on YOUR furniture, eating YOUR food, drinking YOUR wine, and harassing YOUR wife.

They notice you immediately. "Who let this filthy beggar in?" one sneers. Another throws a footstool at your head. You dodge easily—your warrior reflexes still sharp beneath the disguise.

Only a few treat you with kindness. Penelope, hearing of a beggar who claims to have news of Odysseus, insists he be treated respectfully. Her loyalty moves you to your core—she has waited faithfully for twenty years.

Your old dog Argos, lying neglected in the corner, lifts his head. Despite your disguise, despite twenty years, the faithful hound recognizes you. His tail wags once. Then, having seen his master home at last, Argos dies peacefully.

You observe everything: who is loyal, who is corrupt, where your weapons are, how the suitors are positioned. Knowledge is power. Soon, very soon, you will strike.`,

      learningPoints: [
        {
          id: 'lp-5-10-penelope-loyalty',
          content: 'Penelope\'s insistence on treating the beggar kindly reveals her character—she has maintained her values despite years of pressure.',
          category: 'literary-context',
        },
        {
          id: 'lp-5-10-argos',
          content: 'Argos\'s recognition of Odysseus demonstrates that true identity transcends physical appearance—loyalty recognizes the soul.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 11: Map-exploration - Navigate Odysseus's palace
    {
      id: 'chapter-5-11-palace-map',
      type: 'map-exploration',
      backgroundImage: 'https://cdn.midjourney.com/36583bff-7fb4-460a-be0d-609f09513530/0_0.png',
      mapImage: 'https://cdn.midjourney.com/38b04ad8-1ce7-4a3d-9b90-7e2ffa7d7b25/0_0.png',

      prompt: 'Explore the palace of Ithaca and discover key locations for Odysseus\'s plan',

      locations: [
        {
          id: 'location-great-hall',
          name: 'The Great Hall',
          x: 50,
          y: 50,
          content: `The heart of the palace, now defiled by the suitors. Long tables are laden with food and wine—your food and wine. The suitors lounge arrogantly, treating your home as their own.

The walls are lined with weapons—swords, spears, shields. This is where the final confrontation will happen.

You note every detail: the exits, the columns that could provide cover, where your son Telemachus stands watching with barely concealed rage.`,
          image: 'https://cdn.midjourney.com/36583bff-7fb4-460a-be0d-609f09513530/0_0.png',
        },
        {
          id: 'location-armory',
          name: 'The Armory',
          x: 25,
          y: 30,
          content: `A small chamber off the great hall where your finest weapons are stored. Your bow—the great bow that only you can string—hangs on the wall.

This will be crucial. You quietly instruct Telemachus and Eumaeus to remove all weapons from the great hall except for what you'll need. The suitors must not be armed when you strike.`,
          image: 'https://cdn.midjourney.com/9237f8a4-fa27-4775-ac19-33900628d7c7/0_0.png',
        },
        {
          id: 'location-queens-chamber',
          name: 'Queen\'s Chamber',
          x: 75,
          y: 30,
          content: `Penelope's private quarters. Here she weaves during the day and unweaves at night, using her famous trick to delay choosing a new husband.

The room contains her loom and the legendary bed you built with your own hands around a living olive tree—a secret known only to you and Penelope.

This is where the final recognition will occur, where you will prove your identity beyond all doubt.`,
          image: 'https://cdn.midjourney.com/8fc0fd4b-0176-43f5-9753-fa207690b58c/0_0.png',
        },
        {
          id: 'location-courtyard',
          name: 'The Courtyard',
          x: 50,
          y: 75,
          content: `An open area where Penelope will announce the contest of the bow. Twelve axe heads will be lined up, their handles buried in the ground, creating a narrow channel.

The challenge: string Odysseus's bow and shoot an arrow through all twelve axe heads. An impossible feat—for anyone but Odysseus.

This is where you will reveal yourself and begin your revenge.`,
          image: 'https://cdn.midjourney.com/9237f8a4-fa27-4775-ac19-33900628d7c7/0_0.png',
        },
        {
          id: 'location-servants-quarters',
          name: 'Servants\' Quarters',
          x: 20,
          y: 70,
          content: `The humble rooms where your loyal servants live. Eumaeus the swineherd, Philoetius the cowherd, and Eurycleia the old nurse—these faithful few have kept hope alive.

Here you reveal yourself to your most trusted servants, securing their help for the battle to come. Tears flow freely as they embrace their long-lost master.`,
          image: 'https://cdn.midjourney.com/33106117-6d6c-4120-8f90-be797f3a7cc3/0_0.png',
        },
        {
          id: 'location-main-gate',
          name: 'The Main Gate',
          x: 80,
          y: 75,
          content: `The entrance to the palace grounds. Once the slaughter begins, this gate must be locked. No suitor can escape justice.

You instruct Eumaeus to position himself here when the time comes. None shall pass.`,
          image: 'https://cdn.midjourney.com/1ca95a69-95b5-4bf3-8bbe-63036d459e02/0_0.png',
        },
      ],

      requiredLocations: ['location-great-hall', 'location-armory', 'location-queens-chamber', 'location-courtyard'],

      learningPoints: [
        {
          id: 'lp-5-11-strategic-planning',
          content: 'Odysseus\'s careful reconnaissance of his own palace shows how the hero\'s cunning intelligence works—methodical preparation before action.',
          category: 'literary-context',
        },
        {
          id: 'lp-5-11-home-invasion',
          content: 'The violation of Odysseus\'s home by the suitors represents the ultimate breach of xenia, justifying extreme revenge.',
          category: 'cultural-context',
        },
      ],
    },

    // Scene 12: The contest of the bow
    {
      id: 'chapter-5-12-contest',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/36583bff-7fb4-460a-be0d-609f09513530/0_0.png',
      image: 'https://cdn.midjourney.com/9237f8a4-fa27-4775-ac19-33900628d7c7/0_0.png',

      content: `Inspired by Athena, Penelope makes a stunning announcement: "I will marry whichever man can string my husband's great bow and shoot an arrow through twelve axe heads!"

The suitors leap at the chance. One by one, they try to string the massive bow. They strain, they grunt, they sweat. Some try to warm the bow by the fire to make it more flexible. None succeed. The bow might as well be made of iron.

Finally, you—still disguised as the beggar—speak up. "Might an old man try? In my youth, I was something of an archer."

The suitors mock you. "Let the beggar try! We could all use a laugh!"

Telemachus, understanding his father's plan, insists you be given the chance. The suitors, amused, allow it.

You take the bow. The weight is familiar, perfect. In your hands, it's not a piece of wood—it's an extension of your will. Effortlessly, as easily as a bard strings his lyre, you string the great bow.

The hall falls silent.

You notch an arrow. You draw. You release.

The arrow sings through the air, passing through all twelve axe heads with a pure, ringing tone.

The suitors stare in disbelief. You stand tall, the disguise falling away like a discarded cloak. Your voice rings out:

"I am Odysseus, king of Ithaca, and judgment day has come!"`,

      learningPoints: [
        {
          id: 'lp-5-12-test',
          content: 'The bow contest serves as both a test of worthiness and a tool of recognition, combining practical and symbolic functions.',
          category: 'literary-context',
        },
        {
          id: 'lp-5-12-revelation',
          content: 'The dramatic revelation of Odysseus\'s identity transforms the scene from competition to execution, creating powerful narrative momentum.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 13: The slaughter of the suitors
    {
      id: 'chapter-5-13-slaughter',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/36583bff-7fb4-460a-be0d-609f09513530/0_0.png',
      image: 'https://cdn.midjourney.com/016ea500-f4c5-477f-8976-6314a245f8e3/0_0.png',

      content: `The reckoning is swift and merciless.

With your first arrow from the great bow, you strike down Antinous, the suitors' leader, as he raises a cup of your wine to his lips. The cup falls, and chaos erupts.

The suitors scramble for weapons, but Telemachus and your loyal servants have removed them all. They are trapped, unarmed, facing a warrior who has survived ten years of war and ten years of divine trials.

Arrow after arrow flies true. When your quiver empties, you take up spear and sword. Telemachus fights at your side—father and son, united at last in righteous fury.

Some suitors beg for mercy, claiming they were forced to participate, that they opposed the others' actions. But there is no mercy for those who violated your home, threatened your family, and consumed your wealth for years.

By the time the sun sets, all 108 suitors lie dead in your great hall. Justice—harsh, absolute, Greek justice—has been served.

The disloyal servants who aided the suitors meet the same fate. Only the loyal remain.

Your kingdom is reclaimed. But one final test remains.`,

      learningPoints: [
        {
          id: 'lp-5-13-justice',
          content: 'The slaughter represents Greek concepts of justice and retribution—violations of xenia and threat to household demanded absolute punishment.',
          category: 'cultural-context',
        },
        {
          id: 'lp-5-13-father-son',
          content: 'Odysseus and Telemachus fighting side by side represents the restoration of family order and the passing of heroic values between generations.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 14: Odysseus reveals himself to Penelope (WITH QUIZ TRIGGER)
    {
      id: 'chapter-5-14-penelope-recognition',
      type: 'dialogue',
      backgroundImage: 'https://cdn.midjourney.com/36583bff-7fb4-460a-be0d-609f09513530/0_0.png',

      character: {
        id: 'penelope',
        name: 'Penelope',
        portrait: 'https://cdn.midjourney.com/8fc0fd4b-0176-43f5-9753-fa207690b58c/0_0.png',
        description: 'Queen of Ithaca, wife of Odysseus, embodiment of loyalty',
      },

      dialogueTree: {
        id: 'node-1',
        speaker: 'penelope',
        text: 'So you claim to be my husband, returned after twenty years. Many have claimed this. How do I know you are truly Odysseus?',

        responses: [
          {
            id: 'response-appearance',
            text: 'Look at me! I am he!',
            nextNodeId: 'node-2',
          },
          {
            id: 'response-victories',
            text: 'I won the Trojan War, survived countless perils...',
            nextNodeId: 'node-3',
          },
          {
            id: 'response-patient',
            text: 'Test me as you will. I have waited twenty years; I can wait longer.',
            nextNodeId: 'node-4',
          },
        ],

        allNodes: [
          {
            id: 'node-2',
            speaker: 'penelope',
            text: 'Athena could have disguised anyone to look like him. Appearance proves nothing.',
            nextNodeId: 'node-5',
          },
          {
            id: 'node-3',
            speaker: 'penelope',
            text: 'All of Greece knows those stories. Any clever man could have learned them. I need something more.',
            nextNodeId: 'node-5',
          },
          {
            id: 'node-4',
            speaker: 'penelope',
            text: 'Patience... that sounds like him. Very well, stranger. I will test you.',
            nextNodeId: 'node-5',
          },
          {
            id: 'node-5',
            speaker: 'penelope',
            text: 'Eurycleia, take our marriage bed out of the bedchamber and make it up for our guest here.',
            responses: [
              {
                id: 'response-confusion',
                text: 'Your hospitality is generous, my lady.',
                nextNodeId: 'node-6',
              },
              {
                id: 'response-outrage',
                text: 'Move the bed? Woman, that\'s impossible!',
                nextNodeId: 'node-7',
              },
            ],
          },
          {
            id: 'node-6',
            speaker: 'penelope',
            text: 'She turns away coldly. "Just as I thought. An imposter."',
            nextNodeId: 'node-8',
          },
          {
            id: 'node-7',
            speaker: 'penelope',
            text: 'Her expression shifts—hope, disbelief, joy all at once. "Why impossible? Explain!"',
            nextNodeId: 'node-9',
          },
          {
            id: 'node-8',
            speaker: 'penelope',
            text: 'WAIT! You realize the test. Only Odysseus would know...',
            nextNodeId: 'node-9',
          },
          {
            id: 'node-9',
            speaker: 'athena',
            text: 'You explain: "I built our bed around a living olive tree, its trunk forming one of the posts. Unless someone has cut down that tree, the bed cannot be moved. I know this because I built it with my own hands!"',
            nextNodeId: 'node-10',
          },
          {
            id: 'node-10',
            speaker: 'penelope',
            text: 'Her composure breaks. Tears stream down her face. "It IS you! Only Odysseus knows that secret! Oh my husband, my husband, you\'ve come home at last!" She runs into your arms, and you hold her as you did twenty years ago. The waiting is over. Your odyssey is complete.',
            isEnd: true,
          },
        ],
      },

      learningPoints: [
        {
          id: 'lp-5-14-recognition',
          content: 'The bed test is the ultimate recognition scene—only shared intimate knowledge, not public reputation, proves true identity.',
          category: 'literary-context',
        },
        {
          id: 'lp-5-14-penelope-wisdom',
          content: 'Penelope\'s test shows her intelligence matches Odysseus\'s—she too is cunning, cautious, and demands proof before trust.',
          category: 'literary-context',
        },
        {
          id: 'lp-5-14-homecoming',
          content: 'The reunion of Odysseus and Penelope completes the hero\'s journey—he has returned home, reclaimed his kingdom, and restored his family.',
          category: 'literary-context',
        },
      ],

      events: {
        onExit: [{
          type: 'quiz',
          componentId: 'quiz-chapter-5',
          condition: { type: 'if-not-completed' },
        }],
      },
    },
  ],

  endQuiz: chapter5Quiz,
};

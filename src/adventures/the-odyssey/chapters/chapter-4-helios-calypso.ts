import type { Chapter } from '../../../types';
import { chapter4Quiz } from '../quizzes/chapter-4-quiz';

/**
 * Chapter 4: The Cattle of Helios and Calypso's Isle
 *
 * This chapter explores the devastating consequences of defying divine law,
 * the conflict between survival and obedience, and the testing of loyalty
 * through years of captivity. Odysseus loses everything and faces his longest trial.
 */
export const chapter4: Chapter = {
  id: 'chapter-4-helios-calypso',
  title: 'Chapter 4: The Cattle of Helios and Calypso\'s Isle',
  description: 'Divine law is broken, Zeus\'s punishment falls, and Odysseus faces seven years of captivity on a distant island.',

  learningObjectives: [
    'Understand the consequences of breaking divine law in Greek mythology',
    'Analyze the theme of loyalty versus survival in impossible situations',
    'Explore the concept of divine punishment and justice',
    'Recognize the testing of the hero\'s resolve through captivity and temptation',
  ],

  scenes: [
    // Scene 1: Arrival at Thrinacia
    {
      id: 'chapter-4-scene-1-thrinacia',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/015cc488-5014-49f1-99e7-48ecae828995/0_0.png',
      image: 'https://cdn.midjourney.com/ee152450-1c55-47ca-946c-03767693c044/0_0.png',

      content: `The winds carry you to a lush island where the air shimmers with divine presence. This is Thrinacia, the sacred isle of the sun god Helios.

As your ship approaches the shore, you see magnificent cattle grazing in the golden meadows—sleek, perfect beasts with gleaming coats that seem to glow with inner light. These are no ordinary animals.

Your crew stares at the cattle with hungry eyes. It has been days since you had a proper meal, and the sight of so much meat on the hoof makes mouths water and stomachs clench with need.

But you remember the warnings. Both Tiresias in the Underworld and Circe on Aeaea spoke of this place with grave urgency: "Touch not the cattle of Helios, or destruction will follow."`,

      learningPoints: [
        {
          id: 'lp-ch4-1-divine-law',
          content: 'Sacred spaces and divine property were protected by religious law in ancient Greece; violating them brought severe consequences.',
          category: 'historical-context',
        },
        {
          id: 'lp-ch4-2-warning',
          content: 'The prophecy structure creates dramatic irony—the audience knows the danger while watching characters approach it.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 2: Odysseus warns crew
    {
      id: 'chapter-4-scene-2-warning',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/015cc488-5014-49f1-99e7-48ecae828995/0_0.png',
      image: 'https://cdn.midjourney.com/ee152450-1c55-47ca-946c-03767693c044/0_0.png',

      content: `You gather your men on the beach, your voice heavy with the weight of prophecy.

"Hear me, my friends. I know you see those cattle, and I know your hunger gnaws at you. But listen well: those are the sacred herds of Helios the sun god. Not one animal must be touched. Not one."

Your crew exchanges glances. Some nod in understanding, others look disappointed, a few openly skeptical.

"We have provisions," you continue. "We will rest here briefly, then continue our journey. But the cattle—the cattle are forbidden. Swear to me now that you will not harm them."

One by one, they swear. But you see the way their eyes drift back to the grazing herds, and a cold fear settles in your chest. You have seen what hunger can do to men's oaths.`,

      learningPoints: [
        {
          id: 'lp-ch4-3-survival',
          content: 'The conflict between immediate survival needs and long-term consequences is a recurring theme in Greek tragedy.',
          category: 'literary-context',
        },
        {
          id: 'lp-ch4-4-hunger',
          content: 'Odysseus recognizes that physical deprivation can erode even sacred oaths, showing his understanding of human weakness.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 3: Decision - Crew debate
    {
      id: 'chapter-4-scene-3-debate',
      type: 'decision',
      backgroundImage: 'https://cdn.midjourney.com/015cc488-5014-49f1-99e7-48ecae828995/0_0.png',

      prompt: 'If you were one of Odysseus\'s crew, facing starvation on this island, what would you choose?',
      context: `Days pass. Then weeks. Contrary winds trap you on Thrinacia, and your provisions run out. The crew grows gaunt and desperate. The sacred cattle graze nearby, fat and perfect, while men waste away with hunger.

You watch as the crew debates in hushed voices when they think Odysseus cannot hear. Some argue for obedience to divine law. Others claim the gods would understand the needs of starving men. Still others suggest that perhaps the warnings were exaggerated.

The choice tears at every man: honor the gods and die slowly of starvation, or break the taboo and take what you need to survive.`,

      choices: [
        {
          id: 'choice-obey',
          text: 'Obey divine law and trust the gods will provide',
          consequence: 'You choose faith over fear, trusting that the gods will not let the innocent starve. This is the path Odysseus would take—but he is not the one who is starving. The crew\'s hunger grows more desperate with each passing day, and not all men share your faith.',
          learningPoints: [
            {
              id: 'lp-ch4-5-faith',
              content: 'Trusting in divine providence when facing death requires extraordinary faith, a virtue highly valued in Greek culture.',
              category: 'cultural-context',
            },
          ],
        },
        {
          id: 'choice-survival',
          text: 'Choose survival—surely the gods will forgive desperate men',
          consequence: 'You argue that the gods must understand mortal necessity. Surely divine law was never meant to enforce starvation. It is a compelling argument—one that will soon be made in earnest. But the gods of Greece are not known for their mercy toward those who break divine law, regardless of circumstance.',
          learningPoints: [
            {
              id: 'lp-ch4-6-hubris',
              content: 'Assuming divine forgiveness without divine permission is a form of hubris in Greek thought.',
              category: 'literary-context',
            },
          ],
        },
        {
          id: 'choice-compromise',
          text: 'Suggest taking just one animal and offering sacrifice to appease Helios',
          consequence: 'You seek a middle path, hoping that proper rituals and offerings might soften the offense. It is the kind of clever reasoning Odysseus himself might employ. But can any ritual truly cleanse an act that was forbidden from the start? The crew listens to this argument with desperate hope.',
          learningPoints: [
            {
              id: 'lp-ch4-7-ritual',
              content: 'Greek religion emphasized proper ritual, but some transgressions were beyond the power of sacrifice to absolve.',
              category: 'cultural-context',
            },
          ],
        },
      ],

      learningPoints: [],
    },

    // Scene 4: The fatal choice
    {
      id: 'chapter-4-scene-4-transgression',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/015cc488-5014-49f1-99e7-48ecae828995/0_0.png',
      image: 'https://cdn.midjourney.com/ee152450-1c55-47ca-946c-03767693c044/0_0.png',

      content: `Exhausted by worry and fasting, you go inland to pray to the gods for deliverance. You climb to a sheltered spot, make offerings, and plead for wind to carry you away from this cursed island.

The gods answer your prayers—but with sleep, not salvation. Divine slumber overtakes you, a sleep too deep to be natural.

While you sleep, your crew makes their fatal decision.

"Odysseus will never know," they tell each other. "We'll take just enough to survive, perform all the proper rituals, and be gone before he wakes."

Hunger has worn away their oath like water on stone. They drive the finest cattle from the herd. They make all the proper sacrifices—using leaves instead of barley, wine replaced with water from a spring, for they have nothing else to offer.

The cattle low with strange, haunting voices as they die. The meat, roasting over the fire, bellows with the sound of living things. Even the hides writhe upon the ground. Every omen screams of divine anger, but hunger has made the crew deaf to warnings.

By the time you wake and smell the roasting meat on the wind, it is far too late. The transgression is complete.`,

      learningPoints: [
        {
          id: 'lp-ch4-8-betrayal',
          content: 'The crew\'s decision while Odysseus sleeps shows their awareness of wrongdoing and their willingness to act despite it.',
          category: 'literary-context',
        },
        {
          id: 'lp-ch4-9-omens',
          content: 'Supernatural omens (bellowing meat, writhing hides) were taken as literal signs of divine displeasure in Greek belief.',
          category: 'historical-context',
        },
        {
          id: 'lp-ch4-10-divine-sleep',
          content: 'The gods sometimes used sleep to prevent mortals from interfering with fated events, a common motif in Greek myth.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 5: Dialogue - Helios demands vengeance
    {
      id: 'chapter-4-scene-5-helios-rage',
      type: 'dialogue',
      backgroundImage: 'https://cdn.midjourney.com/573cae62-4b25-4010-981a-0174d126bf10/0_0.png',

      character: {
        id: 'helios',
        name: 'Helios',
        portrait: 'https://cdn.midjourney.com/b7121075-8468-4131-927f-9a7207e93272/0_0.png',
        portraitVideo: 'https://cdn.midjourney.com/video/30c15a3f-8236-4cfc-bac4-257ee26202a7/0.mp4',
        description: 'The Titan god of the sun, whose all-seeing eye misses nothing',
      },

      dialogueTree: {
        id: 'node-1',
        speaker: 'helios',
        text: 'Father Zeus! Olympians all! Hear my grievance! Odysseus\'s crew has slaughtered my sacred cattle on Thrinacia. My immortal herds, which I have tended since the dawn of time—butchered for the bellies of impious mortals!',

        responses: [
          {
            id: 'response-1',
            text: '[Listen to his demand]',
            nextNodeId: 'node-2',
          },
        ],

        allNodes: [
          {
            id: 'node-2',
            speaker: 'helios',
            text: 'I demand vengeance! If Zeus will not punish these transgressors, then I swear by the river Styx—I will take my light down to the Underworld and shine among the dead! Let the living world fall into eternal darkness until justice is done!',

            responses: [
              {
                id: 'response-2a',
                text: '[Zeus considers the threat]',
                nextNodeId: 'node-3',
              },
            ],
          },
          {
            id: 'node-3',
            speaker: 'helios',
            text: 'The world needs the sun, Zeus. You know this. So choose: justice for my slaughtered cattle, or endless night for mortals. Let the punishment match the crime. Let not one man who feasted on my sacred herds see his home again.',
            isEnd: true,
          },
        ],
      },

      learningPoints: [
        {
          id: 'lp-ch4-11-helios-power',
          content: 'Helios\'s threat to withhold sunlight shows that even Olympian gods needed to negotiate with Titan powers.',
          category: 'historical-context',
        },
        {
          id: 'lp-ch4-12-divine-justice',
          content: 'Divine justice in Greek myth often involves collective punishment for communal transgressions.',
          category: 'literary-context',
        },
        {
          id: 'lp-ch4-13-oath-styx',
          content: 'Swearing by the river Styx was the most binding oath in Greek mythology, which even the gods could not break.',
          category: 'cultural-context',
        },
      ],
    },

    // Scene 6: Zeus destroys the ship
    {
      id: 'chapter-4-scene-6-destruction',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/928a104f-cfac-455d-b51f-adfcff3eed38/0_0.png',
      image: 'https://cdn.midjourney.com/98bb18d1-04d3-4684-aa23-dd5c77c188c5/0_0.png',

      content: `For six days after the transgression, your crew feasts on the sacred meat, deaf to your anguish and warnings. On the seventh day, the wind finally shifts. Eager to escape before divine retribution falls, you set sail.

The sky is clear when you leave Thrinacia. But you barely lose sight of land when black clouds boil up from nowhere, gathering with unnatural speed.

Zeus himself speaks through the thunder: "VENGEANCE!"

The sky splits open. A bolt of pure white lightning strikes your ship's mast, shattering it to splinters. The smell of burning wood and ozone fills the air. The ship spins like a leaf in a whirlpool.

Another strike. Then another. Each thunderbolt precise, devastating, divine judgment made manifest. The planks shatter. The hull breaks apart. Your crew, those loyal men who followed you through war and monster and witch, are cast into the raging sea.

You watch them drown, one by one, screaming your name. But you are helpless to save them. You, who warned them, who begged them to resist temptation—you alone survive, clinging to wreckage as Zeus's storm hurls you back into the trackless ocean.

Their blood was not on your hands. But their deaths will weigh on your soul forever.`,

      learningPoints: [
        {
          id: 'lp-ch4-14-zeus-punishment',
          content: 'Zeus\'s thunderbolt was the ultimate symbol of divine justice, swift and inescapable.',
          category: 'historical-context',
        },
        {
          id: 'lp-ch4-15-sole-survivor',
          content: 'Odysseus\'s survival while his guilty crew perishes demonstrates Greek belief in individual rather than collective divine punishment.',
          category: 'literary-context',
        },
        {
          id: 'lp-ch4-16-burden',
          content: 'The survivor\'s guilt theme—being spared while companions die—adds psychological depth to Odysseus\'s heroic journey.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 7: Washed ashore on Ogygia
    {
      id: 'chapter-4-scene-7-ogygia',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/4c10092b-147a-49da-836c-516818ab6d8f/0_0.png',
      image: 'https://cdn.midjourney.com/6b670118-7de3-48d1-9207-f8665335a057/0_0.png',

      content: `For nine days, you drift on the wreckage, more dead than alive. The sun burns your skin by day; the cold leeches your strength by night. Salt water cracks your lips. Thirst makes you delirious.

On the tenth day, gentle hands pull you from the sea.

You wake on a beach of impossible beauty. The sand is soft as silk, the color of honey. Sweet water bubbles from springs among flowering meadows. Birds with jeweled plumage sing in trees heavy with fruit. The air itself seems to shimmer with enchantment.

This is Ogygia, the hidden island at the center of the sea, where no mortal has walked before.

And bending over you with concern in her immortal eyes is Calypso, the nymph goddess who dwells here in eternal solitude. She is beautiful beyond mortal words—graceful, ageless, powerful. She has saved your life.

"Rest, Odysseus," she says, her voice like music. "You are safe now. You need never leave this place. I will care for you always."

You are too weak to respond. Too broken to realize that you have escaped death only to fall into a prison more subtle than any chains.`,

      learningPoints: [
        {
          id: 'lp-ch4-17-ogygia',
          content: 'Ogygia represents a liminal space—neither the world of mortals nor of gods, isolated from the flow of normal time.',
          category: 'literary-context',
        },
        {
          id: 'lp-ch4-18-calypso',
          content: 'Calypso (meaning "concealer" or "one who hides") was a minor goddess, daughter of the Titan Atlas.',
          category: 'historical-context',
        },
        {
          id: 'lp-ch4-19-paradise-prison',
          content: 'The paradise-as-prison motif explores how even perfect comfort can become torment when it prevents a person from their true purpose.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 8: Timeline game - Journey so far
    {
      id: 'chapter-4-scene-8-timeline',
      type: 'timeline-game',
      backgroundImage: 'https://cdn.midjourney.com/5b73f8c0-19fe-4088-99e6-b24f42129a00/0_0.png',

      prompt: 'Order the major events of Odysseus\'s journey from the Underworld to his arrival on Ogygia',

      timelineEvents: [
        {
          id: 'event-1',
          title: 'Consultation with Tiresias',
          year: 1,
          description: 'In the Underworld, the prophet Tiresias warns Odysseus about Helios\'s cattle and prophecies his difficult journey home.',
          image: 'https://cdn.midjourney.com/81102836-e1fa-4914-a38e-818e265eccc2/0_0.png',
        },
        {
          id: 'event-2',
          title: 'Return to Aeaea',
          year: 2,
          description: 'Odysseus returns to Circe\'s island where she provides warnings about the Sirens, Scylla and Charybdis, and Thrinacia.',
          image: 'https://cdn.midjourney.com/7ab534a0-04bb-4157-877a-06f01cf2bb4e/0_0.png',
        },
        {
          id: 'event-3',
          title: 'The Sirens\' Song',
          year: 3,
          description: 'Odysseus has himself bound to the mast to hear the Sirens while his crew, with wax-sealed ears, rows past safely.',
          image: 'https://cdn.midjourney.com/3a803a5e-01ac-47bb-936c-36844ad64ece/0_0.png',
        },
        {
          id: 'event-4',
          title: 'Scylla and Charybdis',
          year: 4,
          description: 'Choosing the lesser evil, Odysseus sails past Scylla, losing six men to her six heads rather than risk the entire ship to Charybdis.',
          image: 'https://cdn.midjourney.com/a5c060f5-581b-40a8-9bf8-d3e90fe85a65/0_0.png',
        },
        {
          id: 'event-5',
          title: 'Arrival at Thrinacia',
          year: 5,
          description: 'The weary crew lands on the island of the sun god Helios, where sacred cattle graze in golden meadows.',
          image: 'https://cdn.midjourney.com/015cc488-5014-49f1-99e7-48ecae828995/0_0.png',
        },
        {
          id: 'event-6',
          title: 'The Sacred Cattle Slaughtered',
          year: 6,
          description: 'While Odysseus sleeps, his starving crew kills and eats Helios\'s sacred cattle, dooming themselves.',
          image: 'https://cdn.midjourney.com/ee152450-1c55-47ca-946c-03767693c044/0_0.png',
        },
        {
          id: 'event-7',
          title: 'Zeus\'s Thunderbolt',
          year: 7,
          description: 'Zeus destroys the ship with his thunderbolt. All the crew perish in the storm, and only Odysseus survives.',
          image: 'https://cdn.midjourney.com/98bb18d1-04d3-4684-aa23-dd5c77c188c5/0_0.png',
        },
        {
          id: 'event-8',
          title: 'Rescued by Calypso',
          year: 8,
          description: 'After nine days adrift, Odysseus washes ashore on Ogygia where the nymph goddess Calypso saves his life.',
          image: 'https://cdn.midjourney.com/4c10092b-147a-49da-836c-516818ab6d8f/0_0.png',
        },
      ],

      successThreshold: 70,

      learningPoints: [
        {
          id: 'lp-ch4-20-narrative-structure',
          content: 'The Odyssey uses episodic structure, with each adventure building on lessons from previous ones that go unheeded.',
          category: 'literary-context',
        },
        {
          id: 'lp-ch4-21-escalation',
          content: 'Each trial grows more severe, escalating from monster encounters to direct conflict with divine law.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 9: Seven years of captivity
    {
      id: 'chapter-4-scene-9-captivity',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/4c10092b-147a-49da-836c-516818ab6d8f/0_0.png',
      image: 'https://cdn.midjourney.com/aef4712a-9f98-47a6-9d7d-cafcdd0f0b31/0_0.png',

      content: `Days become months. Months become years. Seven years pass in Calypso's paradise.

She offers you everything: immortality, eternal youth, endless comfort in a land where there is no pain, no aging, no death. She offers you herself—a goddess's love, which mortal men dream of but never attain.

"Stay with me," she pleads. "Forget that rocky island Ithaca. Forget your mortal wife who grows old while you remain young. What is Penelope compared to a goddess? What is a kingdom compared to immortality?"

But every dawn finds you on the rocks by the shore, staring west toward Ithaca, tears streaming down your face. Every night you lie beside a goddess and dream of Penelope. The paradise she offers is a cage. The immortality she promises is a living death.

You are a man who needs to struggle, to strive, to overcome. You are a husband who needs his wife, a father who needs his son, a king who needs his people. Without these, even paradise is empty.

Seven years of comfort. Seven years of captivity. Seven years of weeping for home.

"Please," you beg Calypso. "Let me go. Let me die as a mortal among mortals, but let me go home."

But she only shakes her head. "I saved you from the sea. You are mine now."

And the gods, it seems, have forgotten you exist.`,

      learningPoints: [
        {
          id: 'lp-ch4-22-immortality-rejected',
          content: 'Odysseus\'s rejection of immortality shows that Greek heroism valued human connection over divine transcendence.',
          category: 'literary-context',
        },
        {
          id: 'lp-ch4-23-nostos',
          content: 'The Greek concept of "nostos" (homecoming) was more than physical return—it was the completion of identity and purpose.',
          category: 'cultural-context',
        },
        {
          id: 'lp-ch4-24-captivity',
          content: 'Calypso\'s "gentle" captivity contrasts with Polyphemus\'s cave, showing that love without freedom is still imprisonment.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 10: Dialogue - Athena's plea (WITH QUIZ TRIGGER)
    {
      id: 'chapter-4-scene-10-athena-plea',
      type: 'dialogue',
      backgroundImage: 'https://cdn.midjourney.com/573cae62-4b25-4010-981a-0174d126bf10/0_0.png',

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
        text: 'Father Zeus, I come before this council to speak for Odysseus, that wisest of mortals who honored us at Troy. He has suffered enough. Ten years of war, and now ten years of wandering. His crew is dead, his ship destroyed. He has paid for every offense a hundred times over.',

        responses: [
          {
            id: 'response-1',
            text: '[Listen to her plea]',
            nextNodeId: 'node-2',
          },
        ],

        allNodes: [
          {
            id: 'node-2',
            speaker: 'athena',
            text: 'And now he languishes on Ogygia, held captive by Calypso, weeping daily for the home he may never see again. His wife grows old alone, surrounded by suitors who devour his wealth. His son has never known his father. Is this just? Is this the reward for piety?',

            responses: [
              {
                id: 'response-2',
                text: '[Zeus considers]',
                nextNodeId: 'node-3',
                learningPoints: [
                  {
                    id: 'lp-ch4-25-divine-intervention',
                    content: 'Greek gods often debated mortal fates in council, showing that even divine will was subject to discussion and persuasion.',
                    category: 'literary-context',
                  },
                ],
              },
            ],
          },
          {
            id: 'node-3',
            speaker: 'athena',
            text: 'Poseidon is away among the Ethiopians and cannot oppose this. Now is the time to act. Send Hermes to Ogygia with your command: Calypso must release Odysseus. Let him build a raft and finally—finally—sail for home. He deserves that much. He has earned it.',

            responses: [
              {
                id: 'response-3',
                text: '[Zeus agrees]',
                nextNodeId: 'node-4',
              },
            ],
          },
          {
            id: 'node-4',
            speaker: 'athena',
            text: 'Thank you, Father. Your justice honors us all. Let Hermes bear your command swiftly to Ogygia. Odysseus has been captive long enough—seven years in a paradise that has become his prison. It is time to set him on the final leg of his journey home.',
            isEnd: true,
          },
        ],
      },

      learningPoints: [
        {
          id: 'lp-ch4-26-athena-loyalty',
          content: 'Athena\'s continued advocacy for Odysseus demonstrates the Greek ideal of reciprocal loyalty between mortals and gods.',
          category: 'literary-context',
        },
        {
          id: 'lp-ch4-27-poseidon-absence',
          content: 'The gods\' ability to act often depended on which deities were present—divine politics shaped mortal fates.',
          category: 'historical-context',
        },
      ],

      events: {
        onExit: [{
          type: 'quiz',
          componentId: 'quiz-chapter-4',
          condition: { type: 'if-not-completed' },
        }],
      },
    },
  ],

  endQuiz: chapter4Quiz,
};

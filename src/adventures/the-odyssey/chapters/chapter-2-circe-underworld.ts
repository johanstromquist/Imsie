import type { Chapter } from '../../../types';
import { chapter2Quiz } from '../quizzes/chapter-2-quiz';

/**
 * Chapter 2: Circe and the Underworld
 *
 * This chapter explores Odysseus's encounter with the sorceress Circe,
 * his journey to the Underworld, and the prophecy that will guide his path home.
 * Themes: transformation, prophecy, Greek afterlife, female power figures.
 */
export const chapter2: Chapter = {
  id: 'chapter-2-circe-underworld',
  title: 'Chapter 2: Circe and the Underworld',
  description: 'Land on a mysterious island where magic and transformation await, then descend into the shadowy realm of Hades to seek prophecy from the dead.',

  learningObjectives: [
    'Understand the Greek conception of the afterlife and the Underworld',
    'Analyze transformation as a literary device and symbol',
    'Explore the role of prophecy in Greek literature and mythology',
    'Recognize female figures of power in Greek mythology',
  ],

  scenes: [
    // Scene 1: Journey to Aeaea
    {
      id: 'chapter-2-scene-1-aeaea',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/972bfdf1-2d9b-42bd-82fe-7391987b9354/0_0.png',
      image: 'https://cdn.midjourney.com/1168856d-c1ed-4008-bbf4-546f6c0ce88f/0_0.png',

      content: `After escaping the Cyclops's wrath, your ships drift through wine-dark seas. The wind grows cold, then still. For days, you sail without direction until a mysterious island rises from the mist.

The island seems untouched, primeval. Ancient.

You order the ships to shore. The beach is eerily quiet—no birds sing, no waves crash against the rocks. Only smoke rises from somewhere inland, curling like a beckoning finger.

Your men are exhausted, fearful. They have lost comrades to the Lotus-Eaters and to Polyphemus. Now they face an unknown shore with dread in their hearts.`,

      learningPoints: [
        {
          id: 'chapter-2-lp-1-liminal-space',
          content: 'The mysterious island represents a liminal space between the mortal world and the divine realm, where magic holds sway.',
          category: 'literary-context',
        },
        {
          id: 'chapter-2-lp-2-isolation',
          content: 'The island\'s eerie isolation and unnatural silence create an atmosphere of supernatural danger and mystery.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 2: Scouts Transformed
    {
      id: 'chapter-2-scene-2-transformation',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/84195156-de2d-4807-b442-6a79f07b55e7/0_0.png',
      image: 'https://cdn.midjourney.com/24d8a158-2959-4e4a-b3dc-3bb7e24d8e70/0_0.png',

      content: `You send scouts inland—twenty-three men led by Eurylochus. They find a magnificent stone palace surrounded by wolves and mountain lions that pace peacefully, unnaturally tame.

Within the palace, a beautiful voice sings at a loom. The men call out. The doors swing open, and a woman of terrible beauty welcomes them with honeyed wine and food.

All enter except Eurylochus, who suspects treachery and watches from hiding.

The wine is drugged. As your men drink, the woman strikes them with her wand and speaks terrible words. Their bodies contort, sprout bristles, grow snouts. In moments, they are swine—pigs grunting in the mud, their minds still human but trapped in bestial forms.

Eurylochus flees back to the ship, pale with terror, barely able to speak the horror he witnessed.`,

      inlineAnnotations: [
        {
          id: 'chapter-2-annotation-pharmaka',
          text: 'drugged',
          tooltip: {
            title: 'Circe\'s Pharmaka',
            content: 'The Greek word "pharmaka" means both medicine and poison—drugs that can heal or harm. Circe\'s potions represent the dual nature of knowledge and power.',
            category: 'cultural-context',
          },
        },
      ],

      learningPoints: [
        {
          id: 'chapter-2-lp-3-transformation',
          content: 'Transformation into animals symbolizes the loss of human reason and civilization—reverting to base desires.',
          category: 'literary-context',
        },
        {
          id: 'chapter-2-lp-4-transformation-power',
          content: 'A woman wielding transformative magic over men represents an unusual power dynamic in Greek mythology.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 3: Hermes and the Moly
    {
      id: 'chapter-2-scene-3-hermes',
      type: 'dialogue',
      backgroundImage: 'https://cdn.midjourney.com/972bfdf1-2d9b-42bd-82fe-7391987b9354/0_0.png',

      character: {
        id: 'hermes',
        name: 'Hermes',
        portrait: 'https://cdn.midjourney.com/410546f2-efb9-41b0-af6b-58d8c4499d75/0_0.png',
        portraitVideo: 'https://cdn.midjourney.com/video/2a492811-439a-4c8a-b5a8-d8e4e40cfc78/0.mp4',
        description: 'The swift messenger god, guide of souls',
      },

      dialogueTree: {
        id: 'node-hermes-1',
        speaker: 'hermes',
        text: 'Odysseus, where do you go? To Circe\'s palace? Your men are swine in her sties, and you march to join them.',

        responses: [
          {
            id: 'response-rescue',
            text: 'I must rescue my men, whatever the cost.',
            nextNodeId: 'node-hermes-2',
            learningPoints: [
              {
                id: 'chapter-2-lp-5-loyalty',
                content: 'Odysseus demonstrates the heroic virtue of loyalty to his companions despite great personal risk.',
                category: 'character-analysis',
              },
            ],
          },
          {
            id: 'response-how',
            text: 'Tell me how to resist her magic.',
            nextNodeId: 'node-hermes-3',
            learningPoints: [
              {
                id: 'chapter-2-lp-6-wisdom',
                content: 'Seeking knowledge before acting shows Odysseus\'s cleverness—his defining characteristic.',
                category: 'character-analysis',
              },
            ],
          },
        ],

        allNodes: [
          {
            id: 'node-hermes-2',
            speaker: 'hermes',
            text: 'Noble words, but courage alone will not save you from her spells. Listen well—I will give you the means to resist her.',
            nextNodeId: 'node-hermes-4',
          },
          {
            id: 'node-hermes-3',
            speaker: 'hermes',
            text: 'Wise question. Here is your answer.',
            nextNodeId: 'node-hermes-4',
          },
          {
            id: 'node-hermes-4',
            speaker: 'hermes',
            text: 'Take this herb—moly, we call it. Black root, white flower. Mortals cannot pull it from the earth, but gods may pluck it freely. Eat it before you drink her wine, and her magic will fail. When she strikes you with her wand, draw your sword and rush at her as if to kill her. She will beg for mercy. Make her swear by the River Styx not to harm you, then she will become your ally.',
            isEnd: true,
          },
        ],
      },

      learningPoints: [
        {
          id: 'chapter-2-lp-7-divine-aid',
          content: 'Divine intervention is essential in Greek epics—heroes need the gods\' help to succeed.',
          category: 'literary-context',
        },
        {
          id: 'chapter-2-lp-8-moly',
          content: 'The moly herb symbolizes divine knowledge and protection against enchantment and deception.',
          category: 'symbolism',
        },
      ],
    },

    // Scene 4: Decision - Confront Circe
    {
      id: 'chapter-2-scene-4-decision',
      type: 'decision',
      backgroundImage: 'https://cdn.midjourney.com/84195156-de2d-4807-b442-6a79f07b55e7/0_0.png',
      image: 'https://cdn.midjourney.com/7ab534a0-04bb-4157-877a-06f01cf2bb4e/0_0.png',

      prompt: 'How will you approach Circe?',
      context: `Armed with Hermes' herb and counsel, you approach Circe's palace. The tamed beasts pace and watch. You can hear her singing within.

Two paths lie before you.`,

      choices: [
        {
          id: 'chapter-2-choice-direct',
          text: 'March directly through the front door and announce yourself',
          consequence: 'You stride boldly to the entrance. Circe opens the doors herself, surprised by your confidence. "Another traveler," she purrs. "Come, drink with me." Her beauty is devastating, but you remember Hermes\' warning.',
          learningPoints: [
            {
              id: 'chapter-2-lp-9-directness',
              content: 'The heroic code values open confrontation and directness over deception.',
              category: 'cultural-context',
            },
          ],
        },
        {
          id: 'chapter-2-choice-stealth',
          text: 'Circle the palace and observe before acting',
          consequence: 'You move quietly through the shadows, watching. Through a window, you see Circe at her loom, her voice weaving spells as surely as her hands weave thread. But Hermes said to confront her directly. Stealth may not serve you here. You step to the front entrance and call out.',
          learningPoints: [
            {
              id: 'chapter-2-lp-10-caution',
              content: 'Odysseus\' cautious nature sometimes conflicts with the direct action required of heroes.',
              category: 'character-analysis',
            },
          ],
        },
      ],

      learningPoints: [],
    },

    // Scene 5: Resisting Circe's Magic
    {
      id: 'chapter-2-scene-5-resistance',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/84195156-de2d-4807-b442-6a79f07b55e7/0_0.png',
      image: 'https://cdn.midjourney.com/849726f8-9944-4b03-b298-ccfb34830fe3/0_0.png',

      content: `Circe welcomes you with wine in a golden cup. You eat the moly first, then drink deeply. The wine is sweet, laced with her potions.

"Sleep now," she commands, striking you with her wand. "Go to the sties with your friends!"

But you do not change. The moly protects you. Her eyes widen in shock.

You draw your sword in a fluid motion, the bronze blade catching the firelight. You rush at her as if to strike her down.

"Mercy!" she cries, falling to her knees. "Who are you? No mortal has ever resisted my magic before!" Her eyes search your face, realization dawning. "Unless... the prophecy was true. Hermes warned me that one day a man would come—Odysseus of Ithaca, the man of many turns, who could not be transformed. You are he!"`,

      learningPoints: [
        {
          id: 'chapter-2-lp-11-resistance',
          content: 'Odysseus\' resistance to transformation proves his exceptional nature—set apart from ordinary men.',
          category: 'character-analysis',
        },
        {
          id: 'chapter-2-lp-12-prophecy',
          content: 'Circe\'s recognition that Odysseus was prophesied shows the predetermined nature of heroic destiny.',
          category: 'thematic-analysis',
        },
      ],
    },

    // Scene 6: Circe Becomes an Ally
    {
      id: 'chapter-2-scene-6-alliance',
      type: 'dialogue',
      backgroundImage: 'https://cdn.midjourney.com/84195156-de2d-4807-b442-6a79f07b55e7/0_0.png',

      character: {
        id: 'circe',
        name: 'Circe',
        portrait: 'https://cdn.midjourney.com/b7a9d04e-2581-4f3c-883c-3fbf6600c1d3/0_0.png',
        description: 'The powerful sorceress of Aeaea',
      },

      dialogueTree: {
        id: 'node-circe-1',
        speaker: 'circe',
        text: 'Put away your sword, Odysseus. I will harm you no more. Let me prove my friendship—what do you desire most?',

        responses: [
          {
            id: 'response-men',
            text: 'Restore my men to human form.',
            nextNodeId: 'node-circe-2',
          },
          {
            id: 'response-oath',
            text: 'First, swear by the River Styx not to harm me.',
            nextNodeId: 'node-circe-3',
            learningPoints: [
              {
                id: 'chapter-2-lp-13-oath',
                content: 'The oath by the River Styx is unbreakable even for gods—the most sacred vow in Greek mythology.',
                category: 'cultural-context',
              },
            ],
          },
        ],

        allNodes: [
          {
            id: 'node-circe-2',
            speaker: 'circe',
            text: 'Of course. But first, you must trust me. Sheathe your sword, and I will swear by the River Styx to aid you.',
            nextNodeId: 'node-circe-4',
          },
          {
            id: 'node-circe-3',
            speaker: 'circe',
            text: 'Clever man. Very well. I swear by the River Styx, by the throne of Olympus, and by my own power—I will not harm you or plot against you.',
            nextNodeId: 'node-circe-4',
          },
          {
            id: 'node-circe-4',
            speaker: 'circe',
            text: 'Now, let me undo what I have done. Your men will be restored, better than before—younger, more handsome, stronger. Stay here as my guests. Rest, feast, recover your strength. You have suffered much, and more trials await you.',
            isEnd: true,
          },
        ],
      },

      learningPoints: [
        {
          id: 'chapter-2-lp-14-hospitality',
          content: 'Once bound by oath, Circe transforms from antagonist to generous host—demonstrating Greek xenia.',
          category: 'cultural-context',
        },
        {
          id: 'chapter-2-lp-15-restoration',
          content: 'The men restored "better than before" suggests transformation can sometimes improve rather than diminish.',
          category: 'thematic-analysis',
        },
      ],
    },

    // Scene 7: A Year on Aeaea
    {
      id: 'chapter-2-scene-7-year',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/84195156-de2d-4807-b442-6a79f07b55e7/0_0.png',
      image: 'https://cdn.midjourney.com/7ab534a0-04bb-4157-877a-06f01cf2bb4e/0_0.png',

      content: `True to her word, Circe restores your men. They emerge from the sties not as beasts but as men renewed—stronger, younger, more vital than before.

You remain on Aeaea. Days become weeks. Weeks become months. The food is abundant, the wine sweet, the comfort seductive. Circe is a generous host and fascinating companion.

But your men grow restless. One year passes. Finally, your most trusted companion takes you aside.

"Lord Odysseus," he says quietly, "have we forgotten Ithaca? Your wife Penelope waits. Your son Telemachus grows without knowing his father. We must think of home."

His words strike you like a spear. You have lingered too long, enchanted not by magic but by comfort and forgetfulness.`,

      learningPoints: [
        {
          id: 'chapter-2-lp-16-temptation',
          content: 'The year on Aeaea represents the temptation to abandon the hard journey home for easy pleasure.',
          category: 'thematic-analysis',
        },
        {
          id: 'chapter-2-lp-17-time',
          content: 'Time in mythical spaces passes differently—a year feels like days, delaying the hero\'s quest.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 8: Journey to the Underworld
    {
      id: 'chapter-2-scene-8-directive',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/84195156-de2d-4807-b442-6a79f07b55e7/0_0.png',
      image: 'https://cdn.midjourney.com/81102836-e1fa-4914-a38e-818e265eccc2/0_0.png',

      content: `That night, you tell Circe of your desire to leave. She does not protest, but her face grows grave.

"Before you can return to Ithaca, you must make a different journey," she says. "You must sail to the ends of the Ocean and enter the House of Hades. There, you must consult the shade of the prophet Tiresias. Only he can tell you how to reach home."

Your blood runs cold. The Underworld. The realm of the dead.

"No living man has journeyed there," you protest.

"Until now," Circe replies. "I will tell you the way. You must sail north until you reach the groves of Persephone. There, dig a pit and pour libations—honey, wine, water, and the blood of sacrificed sheep. The shades of the dead will come, drawn by the blood. Let none drink until Tiresias has spoken."

At dawn, you prepare to depart. Your men are terrified, but there is no other way. The path home leads first through the realm of the dead.`,

      inlineAnnotations: [
        {
          id: 'chapter-2-annotation-tiresias',
          text: 'Tiresias',
          tooltip: {
            title: 'The Blind Prophet',
            content: 'Tiresias was a blind prophet of Thebes who retained his prophetic gifts even in death. He uniquely experienced life as both man and woman, giving him special wisdom.',
            category: 'cultural-context',
          },
        },
      ],

      learningPoints: [
        {
          id: 'chapter-2-lp-18-katabasis',
          content: 'The journey to the Underworld (katabasis) is a common motif in heroic epics, representing confrontation with mortality.',
          category: 'literary-context',
        },
        {
          id: 'chapter-2-lp-19-knowledge',
          content: 'True knowledge often requires descending into darkness—facing death to understand life.',
          category: 'thematic-analysis',
        },
      ],
    },

    // Scene 9: Primary Source - Greek Afterlife
    {
      id: 'chapter-2-scene-9-source',
      type: 'primary-source',
      backgroundImage: 'https://cdn.midjourney.com/6092cacc-40f0-4009-9d64-aa47ce9c4aed/0_0.png',

      prompt: 'Analyze this ancient Greek view of the afterlife',

      source: {
        title: 'Greek Conceptions of the Underworld',
        author: 'Adapted from ancient sources',
        date: '8th-6th century BCE',
        type: 'text',
        content: `The Greeks believed that after death, the psyche (soul) descended to Hades, the shadowy realm beneath the earth. This was not Heaven or Hell in the Christian sense, but a gray, joyless place where shades existed in a weakened, diminished state.<br /><br />

The Underworld was ruled by Hades and his wife Persephone. To reach it, souls crossed the River Styx, ferried by Charon—but only if properly buried with a coin to pay the ferryman. The unburied wandered the shores forever.<br /><br />

Most souls went to the Fields of Asphodel, a vast plain where they drifted as pale shadows, remembering life but unable to truly live. Only exceptional souls went elsewhere: heroes to the Elysian Fields (paradise), and the wicked to Tartarus (punishment).<br /><br />

The shades were weak and mindless unless they drank sacrificial blood, which temporarily restored their consciousness and memory. This is why Odysseus must perform blood sacrifice to speak with the dead.`,
        citation: 'Based on Homer\'s Odyssey Book 11 and Hesiod\'s Theogony',
      },

      questions: [
        {
          id: 'chapter-2-q1',
          question: 'How does the Greek Underworld differ from Christian concepts of the afterlife?',
          type: 'multiple-choice',
          options: [
            'It is divided into Heaven and Hell based on moral behavior',
            'It is a neutral, joyless realm where most souls exist in a diminished state',
            'It offers reincarnation and rebirth to all souls',
            'It does not exist—Greeks believed in complete annihilation after death',
          ],
          correctAnswer: 'It is a neutral, joyless realm where most souls exist in a diminished state',
          explanation: 'Unlike Christian Heaven/Hell dichotomy based on morality, the Greek Underworld (Hades) was generally a gray, neutral place where souls existed as weakened shadows. Only exceptional individuals went to paradise (Elysium) or punishment (Tartarus).',
        },
        {
          id: 'chapter-2-q2',
          question: 'Why must Odysseus perform blood sacrifice to speak with the dead?',
          type: 'multiple-choice',
          options: [
            'To appease the gods and gain permission to enter Hades',
            'To give shades temporary consciousness and memory',
            'To punish the dead for their sins in life',
            'To resurrect the dead and bring them back to life',
          ],
          correctAnswer: 'To give shades temporary consciousness and memory',
          explanation: 'The shades in Hades are weak and mindless. Drinking sacrificial blood temporarily restores their consciousness and memory, allowing them to recognize visitors and speak coherently. This ritual is essential for meaningful communication with the dead.',
        },
        {
          id: 'chapter-2-q3',
          question: 'What does the requirement of burial with a coin reveal about Greek values?',
          type: 'multiple-choice',
          options: [
            'Greeks valued wealth and material possessions above all',
            'Proper funeral rites were essential for the soul\'s journey',
            'Greeks believed money could buy salvation',
            'Only the wealthy could enter the afterlife',
          ],
          correctAnswer: 'Proper funeral rites were essential for the soul\'s journey',
          explanation: 'The coin payment to Charon shows that Greeks believed proper burial rites were crucial for the soul\'s journey. The unburied wandered forever, unable to cross into Hades. This emphasizes the religious and social importance of honoring the dead.',
        },
      ],

      learningPoints: [
        {
          id: 'chapter-2-lp-20-afterlife',
          content: 'Greek afterlife beliefs focused on memory and shadow-existence rather than reward and punishment.',
          category: 'cultural-context',
        },
        {
          id: 'chapter-2-lp-21-burial',
          content: 'Proper burial rites were religiously essential—denying burial was one of the gravest insults in Greek culture.',
          category: 'historical-context',
        },
      ],
    },

    // Scene 10: Descent into Hades
    {
      id: 'chapter-2-scene-10-descent',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/30e37c6a-ee81-435c-828b-235c6f73b453/0_0.png',
      image: 'https://cdn.midjourney.com/fee112f4-7e1e-400d-a826-aee39050dd20/0_0.png',

      content: `Following Circe's instructions, you sail to the edge of the world where the sun never shines. The shore is shrouded in perpetual mist. The groves of Persephone loom dark against darker sky.

You dig the ritual pit as commanded. You pour libations—honey-sweet milk, wine, water, and white barley. You sacrifice the black ram and ewe, letting their blood flow into the pit.

The effect is immediate. The ground grows cold. Shadows stir in the mist. They come—shades drawn by the scent of blood, moaning and gibbering, crowding around the pit.

You draw your sword to keep them back. So many dead. Some you recognize—men who fell at Troy, companions lost on the journey. They reach toward the blood with desperate hunger, but you hold them at bay.

You call out: "Tiresias! Prophet of Thebes! I summon you!"`,

      learningPoints: [
        {
          id: 'chapter-2-lp-22-ritual',
          content: 'The elaborate ritual shows that accessing divine knowledge requires precise adherence to sacred procedures.',
          category: 'cultural-context',
        },
        {
          id: 'chapter-2-lp-23-horror',
          content: 'The Underworld scene creates horror through sensory details—cold, mist, shadows, desperate hunger.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 11: Tiresias' Prophecy
    {
      id: 'chapter-2-scene-11-tiresias',
      type: 'dialogue',
      backgroundImage: 'https://cdn.midjourney.com/6092cacc-40f0-4009-9d64-aa47ce9c4aed/0_0.png',

      character: {
        id: 'tiresias',
        name: 'Tiresias',
        portrait: 'https://cdn.midjourney.com/fb97376b-3bfa-4b73-9013-d0b966f0741e/0_0.png',
        description: 'The blind prophet, shade of the dead',
      },

      dialogueTree: {
        id: 'node-tiresias-1',
        speaker: 'tiresias',
        text: 'Odysseus, son of Laertes, why have you left the sunlight to visit this joyless place? Step back from the pit. Let me drink the blood so I may speak truth to you.',

        responses: [
          {
            id: 'response-allow',
            text: 'Drink, prophet, and tell me my fate.',
            nextNodeId: 'node-tiresias-2',
          },
        ],

        allNodes: [
          {
            id: 'node-tiresias-2',
            speaker: 'tiresias',
            text: 'You seek a safe return to Ithaca, but a god will make it hard—Poseidon will not forgive the blinding of his son. Yet you may still reach home if you can curb your own and your men\'s recklessness.',
            nextNodeId: 'node-tiresias-3',
          },
          {
            id: 'node-tiresias-3',
            speaker: 'tiresias',
            text: 'Listen well. You will come to the island of Thrinacia, where the sun god Helios keeps his sacred cattle. If you leave those herds untouched, you may yet reach Ithaca, though after suffering. But if your men harm them, I foresee destruction for your ship and crew. You alone may escape, reaching home late, in a stranger\'s ship, and find trouble awaiting you there.',
            nextNodeId: 'node-tiresias-4',
          },
          {
            id: 'node-tiresias-4',
            speaker: 'tiresias',
            text: 'In Ithaca, you will find arrogant men devouring your wealth and courting your wife. You must kill them all. After that, take an oar and travel inland until you find men who know nothing of the sea. There, make sacrifice to Poseidon. Then, at last, you will find peace. Death will come to you gently from the sea in your old age, with your people prosperous around you.',
            isEnd: true,
          },
        ],
      },

      learningPoints: [
        {
          id: 'chapter-2-lp-24-prophecy-role',
          content: 'Prophecy in Greek epics reveals destiny but doesn\'t remove free will—heroes still make choices.',
          category: 'literary-context',
        },
        {
          id: 'chapter-2-lp-25-foreshadowing',
          content: 'Tiresias\' prophecy foreshadows all remaining events of The Odyssey, creating dramatic irony.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 12: Anachronism Game - Items in Hades
    {
      id: 'chapter-2-scene-12-anachronism',
      type: 'anachronism',
      backgroundImage: 'https://cdn.midjourney.com/6092cacc-40f0-4009-9d64-aa47ce9c4aed/0_0.png',

      prompt: 'Find all items that don\'t belong in the ancient Greek Underworld',
      scenario: 'You are in Hades, the Greek Underworld, circa 1200 BCE. Among the shades and shadows, some objects seem out of place. Identify all anachronistic items.',

      items: [
        {
          id: 'chapter-2-item-1-lyre',
          name: 'Ancient Lyre',
          description: 'A seven-stringed musical instrument',
          explanation: 'Lyres were common in ancient Greece, often associated with Apollo and used in both life and death rituals. Perfectly appropriate for the Underworld.',
        },
        {
          id: 'chapter-2-item-2-toga',
          name: 'Roman Toga',
          description: 'A draped woolen garment worn by Roman citizens',
          explanation: 'The toga was a distinctly Roman garment that wouldn\'t appear until Rome\'s founding (753 BCE) and wouldn\'t become formal dress until centuries later. Greeks of the Bronze Age wore chitons and himations, not togas.',
        },
        {
          id: 'chapter-2-item-3-amphora',
          name: 'Clay Amphora',
          description: 'A large ceramic jar for storing wine or oil',
          explanation: 'Amphorae were standard storage vessels in ancient Greece, commonly used for libations and offerings to the dead. Belongs in Hades.',
        },
        {
          id: 'chapter-2-item-4-cross',
          name: 'Christian Cross',
          description: 'A wooden cross symbol',
          explanation: 'Christianity did not exist until roughly 1,200 years after the Trojan War. The cross symbol would be completely foreign to ancient Greeks.',
        },
        {
          id: 'chapter-2-item-5-bronze-sword',
          name: 'Bronze Sword',
          description: 'A weapon forged from bronze',
          explanation: 'Bronze weapons were standard in ancient Greece during the Bronze Age (including the Trojan War period). Odysseus himself carries a bronze sword.',
        },
        {
          id: 'chapter-2-item-6-coins',
          name: 'Obols (coins)',
          description: 'Small silver coins for paying Charon',
          explanation: 'The Greeks placed coins (obols) in the mouths of the dead to pay the ferryman Charon. Essential for the journey to Hades.',
        },
        {
          id: 'chapter-2-item-7-stirrups',
          name: 'Metal Stirrups',
          description: 'Iron foot supports attached to a horse saddle',
          explanation: 'Stirrups weren\'t invented until around the 4th century CE in Asia, over 1,500 years after the Trojan War. Ancient Greeks rode horses without stirrups, using only a simple cloth or pad.',
        },
        {
          id: 'chapter-2-item-8-papyrus',
          name: 'Papyrus Scroll',
          description: 'A rolled document made from papyrus',
          explanation: 'Papyrus was used in ancient times, though more common in Egypt. By Homer\'s era, Greeks were beginning to use writing, so scrolls could plausibly appear.',
        },
      ],

      correctAnswers: [
        'chapter-2-item-2-toga',
        'chapter-2-item-4-cross',
        'chapter-2-item-7-stirrups',
      ],

      learningPoints: [
        {
          id: 'chapter-2-lp-26-historical-accuracy',
          content: 'Understanding what belongs in ancient Greece requires knowledge of historical technology and culture.',
          category: 'historical-context',
        },
        {
          id: 'chapter-2-lp-27-material-culture',
          content: 'Material culture (tools, weapons, objects) reveals the technological and social development of civilizations.',
          category: 'historical-context',
        },
      ],
    },

    // Scene 13: Prophecy and Return (WITH QUIZ TRIGGER)
    {
      id: 'chapter-2-scene-13-prophecy',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/928a104f-cfac-455d-b51f-adfcff3eed38/0_0.png',
      image: 'https://cdn.midjourney.com/db443600-a5ab-4c7e-8903-853c0d7ee382/0_0.png',

      content: `After Tiresias speaks, other shades approach. You see your mother, who died while you were at war. You speak with fallen heroes—Agamemnon, Achilles, Ajax. Each encounter weighs heavy on your heart.

Finally, you can bear no more. The press of the dead becomes overwhelming. You command your men to the ship.

As you sail away from that dark shore, you carry Tiresias' prophecy in your mind like a map through treacherous waters.

The cattle of Helios must not be touched. Your men's recklessness is your greatest danger. Trials await, but you can survive them if you are clever and strong.

And in distant Ithaca, trouble waits—arrogant suitors devouring your wealth, pursuing your faithful wife.

But now you know the path. Death will come to you gently, in old age, from the sea. Your story will not end in these wandering years.

The journey continues. Ahead lie unknown dangers and choices that will test your leadership to its breaking point. But armed with prophecy and divine guidance, you sail onward toward home.`,

      learningPoints: [
        {
          id: 'chapter-2-lp-28-knowledge-burden',
          content: 'Knowledge of the future is both a gift and a burden—knowing destiny doesn\'t make the journey easier.',
          category: 'thematic-analysis',
        },
        {
          id: 'chapter-2-lp-29-heroic-resolve',
          content: 'Armed with prophecy, Odysseus renews his determination to reach home despite all obstacles.',
          category: 'character-analysis',
        },
      ],

      events: {
        onExit: [{
          type: 'quiz',
          componentId: 'quiz-chapter-2',
          condition: { type: 'if-not-completed' },
        }],
      },
    },
  ],

  endQuiz: chapter2Quiz,
};

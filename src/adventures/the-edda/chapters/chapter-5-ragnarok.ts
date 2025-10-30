import type { Chapter } from '../../../types';
import { chapter5Quiz } from '../quizzes/chapter-5-quiz';

/**
 * Chapter 5: Ragnarök - The Twilight of the Gods
 *
 * The final chapter presents Snorri's account of Ragnarök--the prophesied
 * end of the world. The bonds holding Loki and Fenrir break, the armies
 * of giants and the dead march on Asgard, and the gods face their doom
 * with courage. Yet from destruction comes rebirth, and a new world emerges.
 */

export const chapter5: Chapter = {
  id: 'edda-ch5-ragnarok',
  title: 'Chapter 5: Ragnarök - The Twilight of the Gods',
  description:
    'Witness the prophesied end of the world as the gods face their destined doom with courage, ' +
    'and discover the hope of rebirth that follows the twilight of the gods.',

  prerequisites: {
    type: 'sequential',
  },

  learningObjectives: [
    'Understand the prophesied events of Ragnarök and their symbolism',
    'Analyze the cyclical nature of Norse cosmology (destruction and rebirth)',
    'Recognize the heroic ideal of fighting despite knowing defeat',
    'Compare Ragnarök with other apocalypse myths',
  ],

  scenes: [
    // Scene 1: Snorri Returns - Signs of Ragnarök
    {
      id: 'edda-ch5-1-signs',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/049a6f44-e140-4efa-ae1a-901fd05b9858/0_0.png',

      content: `You find yourself once more in Snorri Sturluson's study in Iceland, the fire burning low as night settles over the frozen landscape. The scholar's face is grave as he turns to you, his manuscript open to the final section.

"We come now," Snorri says quietly, "to the end of all things. To Ragnarök--the Twilight of the Gods."

He explains that after Baldr's death, the world began its slide toward doom. The signs are unmistakable: three winters will come without summer in between, the terrible Fimbulwinter. Brothers will fight brothers, and all bonds of kinship will break. Morality will collapse as greed and violence consume humanity.

"But these are only the beginning," Snorri continues, his voice dropping. "The great wolf Fenrir, bound by the gods with the magical chain Gleipnir, will finally break free. Loki, imprisoned in his cave with poison dripping onto his face, will also break his bonds. The serpent Jörmungandr will rise from the ocean depths, and the ship Naglfar--built from the fingernails of the dead--will set sail with an army of giants and the dishonored dead."

You feel a chill that has nothing to do with the winter outside. The end of the world is coming, and even the gods cannot stop it.`,

      learningPoints: [
        {
          id: 'edda-ch5-1-fimbulwinter',
          content:
            'The Fimbulwinter (Mighty Winter) represents both literal climate catastrophe and moral collapse, showing how Norse mythology linked natural and social order.',
          category: 'thematic-analysis',
        },
        {
          id: 'edda-ch5-1-inevitability',
          content:
            'Unlike many mythologies where the gods are eternal, Norse mythology embraces the inevitability of ending. This reflects a fatalistic worldview where even divine power cannot prevent destiny.',
          category: 'cultural-context',
        },
      ],
    },

    // Scene 2: The Bonds Break
    {
      id: 'edda-ch5-2-bonds-break',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/cef88461-0b51-46aa-a773-5a0030da76df/0_0.png',

      content: `"The binding of Fenrir," Snorri tells you, "was one of the gods' greatest achievements. But the völva--the seer--had prophesied that no chain could hold the wolf forever."

He describes how Fenrir, grown impossibly large, strains against the magical ribbon Gleipnir. The chain was made from impossible things: the sound of a cat's footfall, the beard of a woman, the roots of a mountain, the sinews of a bear, the breath of a fish, and the spittle of a bird.

But at Ragnarök, Fenrir's rage and power exceed even these magical bonds. With a roar that shakes all nine worlds, the great wolf breaks free. His jaws gape so wide that his lower jaw scrapes the earth while his upper jaw touches the sky. Fire blazes from his eyes and nostrils.

At the same moment, in a cave deep beneath the earth, Loki feels the bonds that have held him for ages weaken. Ever since his punishment for causing Baldr's death, he has been bound with chains made from his own son's entrails, with a serpent positioned above him dripping burning poison onto his face. Only his faithful wife Sigyn has stayed with him, catching the poison in a bowl--but when she must empty it, the drops that fall on Loki cause earthquakes throughout the world.

Now those chains, too, break. Loki rises, terrible in his rage and madness, and makes his way to join the forces gathering against the gods.`,

      learningPoints: [
        {
          id: 'edda-ch5-2-fenrir',
          content:
            'Fenrir represents chaos and destruction that can be delayed but never permanently prevented. His breaking free symbolizes the ultimate failure of order to contain disorder.',
          category: 'thematic-analysis',
        },
        {
          id: 'edda-ch5-2-loki-punishment',
          content:
            "Loki's punishment--bound with his own son's entrails while poison drips on him--is among mythology's most horrific fates, yet Sigyn's loyalty shows love persisting even in darkest circumstances.",
          category: 'character-analysis',
        },
      ],
    },

    // Scene 3: Map Exploration - The Battlefield of Vigrid
    {
      id: 'edda-ch5-3-map-vigrid',
      type: 'map-exploration',
      backgroundImage: 'https://cdn.midjourney.com/b824c0d6-61a4-4ae0-aef8-8cdea1628a40/0_0.png',
      mapImage: 'https://cdn.midjourney.com/b824c0d6-61a4-4ae0-aef8-8cdea1628a40/0_0.png',

      prompt: 'Explore the battlefield of Vigrid where the final battle will take place:',

      locations: [
        {
          id: 'loc-vigrid-plain',
          name: 'The Plain of Vigrid',
          x: 50,
          y: 50,
          image: 'https://cdn.midjourney.com/b824c0d6-61a4-4ae0-aef8-8cdea1628a40/0_0.png',
          content: `The plain of Vigrid stretches a hundred leagues in every direction. This is the destined battlefield, prophesied to be where all forces will meet. The ground is hard and frozen, perfect for the clash of armies. The sky above is dark with ash and smoke, and the horizon burns with the light of approaching fires.`,
        },
        {
          id: 'loc-bifrost-ruins',
          name: 'The Broken Bifrost',
          x: 70,
          y: 20,
          image: 'https://cdn.midjourney.com/d5b31d7a-ea33-4f04-9c29-91873a36bc5f/0_0.png',
          content: `The shattered remains of Bifrost, the rainbow bridge that once connected Midgard to Asgard, lie scattered across the landscape. The beautiful colors have faded to grey ash. This was the pathway the giants and their allies used to reach Asgard, and it crumbled under their weight, just as prophesied.`,
        },
        {
          id: 'loc-einherjar',
          name: "The Einherjar's Position",
          x: 30,
          y: 40,
          image: 'https://cdn.midjourney.com/d5b31d7a-ea33-4f04-9c29-91873a36bc5f/0_0.png',
          content: `Here stand the einherjar--the warriors who died bravely in battle and were chosen by the Valkyries to feast in Valhalla. They number in the hundreds of thousands, all in gleaming armor, ready for this final battle they have trained for. They know they are doomed, but they stand firm nonetheless.`,
        },
        {
          id: 'loc-giant-army',
          name: 'The Giant Army',
          x: 80,
          y: 60,
          image: 'https://cdn.midjourney.com/9fe69bae-30e8-42c2-ae7b-d3b455698640/0_0.png',
          content: `The frost giants and fire giants have united for the first time in ages, their ancient enmity forgotten in their shared hatred of the gods. Thousands strong, they carry weapons of ice and flame. At their head marches Surtr, the fire giant, his sword blazing with fire that will eventually consume the nine worlds.`,
        },
        {
          id: 'loc-naglfar',
          name: 'The Ship Naglfar',
          x: 40,
          y: 80,
          image: 'https://cdn.midjourney.com/821071a2-4ac3-4760-a52b-2d16fb19ba73/0_1.png',
          content: `The horrifying ship Naglfar has beached on the shore of Vigrid. Built entirely from the fingernails of the dead, it carried Loki and the army of the dishonored dead from Hel. The ship itself seems to writhe with malevolent life, a monument to all the unburied and unprepared-for dead throughout history.`,
        },
        {
          id: 'loc-yggdrasil',
          name: 'Yggdrasil in the Distance',
          x: 10,
          y: 10,
          image: 'https://cdn.midjourney.com/bdf3f119-433f-4187-982b-075d9d2e74ff/0_0.png',
          content: `Even from here, you can see Yggdrasil, the world tree, trembling. Its leaves shake, and it groans under the weight of what is to come. The tree connects all nine worlds, and it suffers as they all move toward destruction. Yet the völva prophesied that Yggdrasil will survive, damaged but standing, to shelter the survivors after the fire dies.`,
        },
      ],

      requiredLocations: ['loc-vigrid-plain', 'loc-einherjar', 'loc-giant-army'],

      learningPoints: [
        {
          id: 'edda-ch5-3-vigrid',
          content:
            'Vigrid is described as a vast plain specifically destined for the final battle, showing how Norse mythology portrayed certain places as having prophetic significance.',
          category: 'historical-context',
        },
        {
          id: 'edda-ch5-3-armies',
          content:
            'The unity of traditionally opposed forces (frost and fire giants) against the gods represents chaos overwhelming the divisions that order created.',
          category: 'thematic-analysis',
        },
      ],
    },

    // Scene 4: Heimdall Sounds the Gjallarhorn
    {
      id: 'edda-ch5-4-gjallarhorn',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/7001530e-0a7e-4744-b900-97a3c76f038f/0_0.png',

      content: `Heimdall the White God stands at the ruins of Bifrost, his keen eyes--which can see for a hundred leagues and in perfect darkness--watching the approach of the enemy. He is the watchman of the gods, and he has prepared for this moment since the beginning of time.

He raises the Gjallarhorn to his lips. This horn, whose tip reaches into all nine worlds, has been kept for this moment alone. Heimdall draws breath and blows.

The sound is like nothing you have ever heard. It echoes through all the worlds simultaneously--in Asgard and Midgard, in Jotunheim and Svartalfheim, in Niflheim and Muspelheim. It wakes the dead, shakes the mountains, and causes the seas to surge. Every living thing hears it and knows: Ragnarök has come.

In Valhalla, Odin rises from his throne. He has known this day would come since he sacrificed his eye at Mimir's well and learned the fate of the gods. He gathers the einherjar, and the Valkyries distribute weapons. In his hand, Odin carries Gungnir, the spear that never misses its mark.

Thor lifts Mjölnir, his mighty hammer. Freyr regrets leaving his magical sword with his servant Skirnir, but he takes up whatever weapon he can find. Tyr, the one-handed god of war, straps on his armor. All the gods prepare for the battle they have always known they would lose.`,

      learningPoints: [
        {
          id: 'edda-ch5-4-gjallarhorn',
          content:
            'The Gjallarhorn serves as a cosmic alarm, its sound reaching all worlds simultaneously. This represents the interconnectedness of the nine worlds through Yggdrasil.',
          category: 'cultural-context',
        },
        {
          id: 'edda-ch5-4-preparation',
          content:
            'The gods prepare for battle knowing they will lose, embodying the Norse heroic ideal: courage is proven not by victory but by facing inevitable defeat without fleeing.',
          category: 'thematic-analysis',
        },
      ],
    },

    // Scene 5: Dialogue - Odin Consults the Völva
    {
      id: 'edda-ch5-5-volva',
      type: 'dialogue',
      backgroundImage: 'https://cdn.midjourney.com/5d825045-81a2-4353-aedd-f2385a39103e/0_0.png',

      character: {
        id: 'volva',
        name: 'The Völva',
        portrait: 'https://cdn.midjourney.com/35d2c7eb-8b9d-44bd-9800-a577208ccda6/0_1.png',
        description: 'The ancient seer who knows the fates of all beings',
      },

      dialogueTree: {
        id: 'node-1',
        speaker: 'volva',
        text: 'I knew you would come, Allfather. Even now, at the end of all things, you seek wisdom.',

        responses: [
          {
            id: 'response-ask-fate',
            text: 'Tell me again what is to come',
            nextNodeId: 'node-fate',
          },
          {
            id: 'response-ask-survivors',
            text: 'Who will survive?',
            nextNodeId: 'node-survivors',
          },
          {
            id: 'response-ask-why',
            text: 'Why must this happen?',
            nextNodeId: 'node-why',
          },
        ],

        allNodes: [
          {
            id: 'node-fate',
            speaker: 'volva',
            text: 'You will fight Fenrir, Odin. The wolf will swallow you whole. Thor will slay the serpent Jörmungandr, but will fall dead after nine steps, poisoned by its venom. Heimdall and Loki will kill each other. Freyr will fall to Surtr. The gods will perish.',
            responses: [
              {
                id: 'response-fate-continue',
                text: 'And then?',
                nextNodeId: 'node-after-fire',
              },
            ],
          },
          {
            id: 'node-survivors',
            speaker: 'volva',
            text: 'Baldr will return from Hel, reborn as the world is reborn. Vidar and Vali, your sons, will survive. Modi and Magni will inherit Thor\'s hammer. Two humans, Lif and Lifthrasir, will hide in Yggdrasil and repopulate the earth. A new sun will arise, daughter of the old.',
            responses: [
              {
                id: 'response-survivors-continue',
                text: 'Then there is hope?',
                nextNodeId: 'node-hope',
              },
            ],
          },
          {
            id: 'node-why',
            speaker: 'volva',
            text: 'Because all things must end, Odin. Even gods. Even worlds. The cycle of creation requires destruction. Order gives way to chaos, which gives way to new order. This is the nature of existence.',
            responses: [
              {
                id: 'response-why-continue',
                text: 'Is there no way to prevent it?',
                nextNodeId: 'node-prevent',
              },
            ],
          },
          {
            id: 'node-after-fire',
            speaker: 'volva',
            text: 'After Surtr\'s fire burns itself out, the earth will sink beneath the waves. But then it will rise again, green and fertile. Fields will grow without being sown. Baldr will return, and the surviving gods will build a new Asgard.',
            responses: [
              {
                id: 'response-after-continue',
                text: 'A new beginning from the ashes',
                nextNodeId: 'node-cycle',
              },
            ],
          },
          {
            id: 'node-hope',
            speaker: 'volva',
            text: 'There is always hope, Allfather. Death is not an ending but a transformation. The world will die, but the world will also be reborn. This is the great truth you learned when you hung from Yggdrasil.',
            isEnd: true,
          },
          {
            id: 'node-prevent',
            speaker: 'volva',
            text: 'You know the answer already. Fate cannot be escaped, only faced. This is why you ride to battle today--not because you can win, but because courage demands it. You fight because you are who you are.',
            isEnd: true,
          },
          {
            id: 'node-cycle',
            speaker: 'volva',
            text: 'Yes. This is the eternal cycle. What we call örlög--the layers of fate that bind all things. Destruction and creation, death and rebirth, ending and beginning. Go now, Allfather. Prove that the gods can face their doom with dignity.',
            isEnd: true,
          },
        ],
      },

      learningPoints: [
        {
          id: 'edda-ch5-5-volva-role',
          content:
            'The völva (seer) represents wisdom beyond even Odin\'s. Her prophecies are central to Norse mythology, particularly the "Völuspá" (Prophecy of the Seer) from the Poetic Edda.',
          category: 'historical-context',
        },
        {
          id: 'edda-ch5-5-cyclical',
          content:
            'The völva\'s description of rebirth after destruction reveals the cyclical nature of Norse cosmology--worlds end and begin again in an eternal pattern.',
          category: 'thematic-analysis',
        },
      ],
    },

    // Scene 6: The Battle Begins
    {
      id: 'edda-ch5-6-battle-begins',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/099f52e5-555e-43eb-ab36-7c70e65bb557/0_0.png',

      content: `The two armies face each other across the plain of Vigrid. On one side stand the gods and the einherjar, gleaming in their armor, weapons raised. On the other side mass the giants, the monsters, the dishonored dead, and the forces of chaos.

For a moment, there is silence--the last silence before the ending of all things.

Then, with a roar that shakes the earth, both armies charge.

Thor strides forward to meet Jörmungandr, the world serpent who is his ancient enemy. They have fought twice before--once when Thor tried to lift the serpent disguised as a cat, and once when he went fishing and nearly pulled the serpent from the ocean. Now they meet for the final time.

Odin rides his eight-legged horse Sleipnir toward Fenrir, the great wolf. The Allfather knows he will die, but he rides toward his fate with Gungnir held high.

Freyr faces Surtr, the fire giant, and curses himself for giving away his magical sword. He fights with an antler, fighting bravely but hopelessly against Surtr's flaming blade.

Heimdall, who sounded the alarm that began this final day, seeks out Loki. The watchman and the trickster have hated each other since the beginning of time. Now they will settle that hatred forever.

All across the battlefield, gods fight giants, einherjar fight the dead, and the world trembles with the force of the combat.`,

      learningPoints: [
        {
          id: 'edda-ch5-6-matchups',
          content:
            'Each god faces an opponent they are connected to through earlier myths--Thor vs. the serpent, Odin vs. Fenrir, Heimdall vs. Loki. These matchups give Ragnarök narrative coherence.',
          category: 'plot-structure',
        },
        {
          id: 'edda-ch5-6-freyr',
          content:
            "Freyr's earlier decision to give away his sword for love now costs him his life--showing how choices made in peace have consequences in war.",
          category: 'thematic-analysis',
        },
      ],
    },

    // Scene 7: Decision - Which God to Follow
    {
      id: 'edda-ch5-7-decision',
      type: 'decision',
      backgroundImage: 'https://cdn.midjourney.com/ec5e7d9f-5a81-4452-888d-1e5b89b81bed/0_0.png',

      prompt: 'Snorri asks you which battle you wish to witness more closely:',
      context: `"The Prose Edda preserves several accounts of these battles," Snorri explains. "Each god's final fight reveals something essential about their character. Which would you like to understand more deeply?"`,

      choices: [
        {
          id: 'choice-thor',
          text: "Thor's battle with Jörmungandr",
          consequence: `You focus on Thor, the thunder god, as he faces the world serpent. Jörmungandr's massive coils writhe across the battlefield, its venomous breath poisoning the air. Thor strikes with Mjölnir, blow after blow landing on the serpent's skull. Finally, with a strike that sends lightning across the sky, Thor crushes the serpent's head. Jörmungandr dies--but not before spraying Thor with venom. The thunder god staggers back nine steps, then falls dead, poisoned. His last act was to protect the world from the serpent's poison by taking it into himself.`,
          learningPoints: [
            {
              id: 'edda-ch5-7-thor',
              content:
                'Thor dies protecting others, embodying his role as defender of gods and humans. His death after nine steps (a sacred number in Norse mythology) adds ritual significance.',
              category: 'character-analysis',
            },
          ],
        },
        {
          id: 'choice-odin',
          text: "Odin's battle with Fenrir",
          consequence: `You watch as Odin, the Allfather, charges Fenrir. The wolf's jaws gape impossibly wide, fire blazing from them. Odin thrusts with Gungnir, the spear that never misses, but even that cannot stop Fenrir. The wolf's jaws close over Odin, swallowing the king of the gods whole. But immediately, Vidar--Odin's son, the silent god--leaps forward. He places his special shoe (made from all the leather scraps ever discarded by shoemakers) on Fenrir's lower jaw, grasps the upper jaw, and tears the wolf's mouth apart, avenging his father.`,
          learningPoints: [
            {
              id: 'edda-ch5-7-odin',
              content:
                'Odin faces the fate he has foreseen since drinking from Mimir\'s well. His son Vidar\'s special shoe--made from "waste" leather--shows how even discarded things serve a purpose in fate\'s design.',
              category: 'thematic-analysis',
            },
          ],
        },
        {
          id: 'choice-heimdall',
          text: 'Heimdall and Loki\'s mutual destruction',
          consequence: `You observe the watchman and the trickster as they fight with ancient hatred. They are perfectly matched--Heimdall with his foresight and vigilance, Loki with his cunning and shapeshifting. They trade blows until both are mortally wounded. Heimdall strikes Loki a fatal blow to the heart. Loki, with his dying breath, stabs Heimdall through the throat. They fall together, their blood mingling on the battlefield. Order and chaos destroy each other, as perhaps they were always meant to.`,
          learningPoints: [
            {
              id: 'edda-ch5-7-heimdall-loki',
              content:
                'Heimdall (representing watchfulness and order) and Loki (representing chaos and transgression) kill each other--symbolizing that perfect order and pure chaos cannot coexist and will mutually annihilate.',
              category: 'thematic-analysis',
            },
          ],
        },
      ],

      learningPoints: [],
    },

    // Scene 8: Custom Mini-Game - The Final Battle (Shooting Gallery)
    {
      id: 'edda-ch5-8-battle-game',
      type: 'custom-mini-game',
      backgroundImage: 'https://cdn.midjourney.com/4eebdef0-fca7-44e0-a73b-e9d9e67b42a5/0_0.png',

      gameType: 'gallery',

      config: {
        prompt: 'Defend Asgard! Click on the forces of chaos as they approach!',
        timePerRound: 35,

        rounds: [
          {
            id: 'round-giants',
            target: {
              id: 'target-asgard',
              image: 'https://cdn.midjourney.com/b824c0d6-61a4-4ae0-aef8-8cdea1628a40/0_0.png',
              label: 'Defend Asgard',
              description: 'Protect the realm of the gods',
            },
            items: [
              {
                id: 'item-frost-giant-1',
                image: 'https://cdn.midjourney.com/b824c0d6-61a4-4ae0-aef8-8cdea1628a40/0_0.png',
                label: 'Frost Giant',
                isCorrect: true,
                explanation: 'Frost giants are enemies of the gods, marching from Jotunheim.',
              },
              {
                id: 'item-fire-giant-1',
                image: 'https://cdn.midjourney.com/d72fea7e-6153-4f69-8b4e-b2470933bbc0/0_0.png',
                label: 'Fire Giant',
                isCorrect: true,
                explanation: 'Fire giants led by Surtr come to burn the world.',
              },
              {
                id: 'item-einherjar-1',
                image: 'https://cdn.midjourney.com/099f52e5-555e-43eb-ab36-7c70e65bb557/0_0.png',
                label: 'Einherjar Warrior',
                isCorrect: false,
                explanation: 'The einherjar fight FOR Asgard, not against it!',
              },
              {
                id: 'item-draugr-1',
                image: 'https://cdn.midjourney.com/099f52e5-555e-43eb-ab36-7c70e65bb557/0_0.png',
                label: 'Draugr (Undead)',
                isCorrect: true,
                explanation: 'The dishonored dead from Hel march with Loki on Naglfar.',
              },
              {
                id: 'item-valkyrie-1',
                image: 'https://cdn.midjourney.com/099f52e5-555e-43eb-ab36-7c70e65bb557/0_0.png',
                label: 'Valkyrie',
                isCorrect: false,
                explanation: 'Valkyries serve Odin and help defend Asgard!',
              },
              {
                id: 'item-troll-1',
                image: 'https://cdn.midjourney.com/b824c0d6-61a4-4ae0-aef8-8cdea1628a40/0_0.png',
                label: 'Mountain Troll',
                isCorrect: true,
                explanation: 'Trolls and monsters join the forces of chaos.',
              },
              {
                id: 'item-dwarf-1',
                image: 'https://cdn.midjourney.com/099f52e5-555e-43eb-ab36-7c70e65bb557/0_0.png',
                label: 'Dwarf Smith',
                isCorrect: false,
                explanation: 'Dwarves are allies who crafted weapons for the gods!',
              },
              {
                id: 'item-fenrir-wolf',
                image: 'https://cdn.midjourney.com/cef88461-0b51-46aa-a773-5a0030da76df/0_0.png',
                label: "Fenrir's Spawn",
                isCorrect: true,
                explanation: "Fenrir's wolf-children Sköll and Hati join the attack.",
              },
            ],
            itemsToShow: 6,
            itemDisplayTime: 3,
            spawnInterval: 0.8,
          },
        ],

        correctPoints: 100,
        wrongPenalty: 50,
        speedBonusMultiplier: 10,
        passingScore: 60,

        targetLabel: 'Protect:',
        backgroundImage: 'https://cdn.midjourney.com/4eebdef0-fca7-44e0-a73b-e9d9e67b42a5/0_0.png',
        successMessage: 'You fought valiantly for Asgard, like a true einherjar!',
        failureMessage: 'The forces of chaos overwhelmed the defenses. But the battle continues...',
      },

      learningPoints: [
        {
          id: 'edda-ch5-8-armies',
          content:
            'Ragnarök involves all beings: giants (frost and fire), the dead from Hel, monsters, and the forces of chaos--all united against the gods and their allies.',
          category: 'historical-context',
        },
        {
          id: 'edda-ch5-8-allies',
          content:
            'Not all beings fight against the gods: the einherjar (chosen warriors), Valkyries, dwarves, and some humans stand with Asgard until the end.',
          category: 'cultural-context',
        },
      ],
    },

    // Scene 9: The Deaths of the Gods
    {
      id: 'edda-ch5-9-deaths',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/8cd97c2c-9b0e-490d-a95b-e541e53e85f0/0_0.png',

      content: `One by one, the gods fall.

Thor lies dead, poisoned by Jörmungandr's venom after slaying the serpent. Odin has been swallowed by Fenrir, though Vidar avenged him. Freyr fell to Surtr's flaming sword. Heimdall and Loki killed each other. Tyr and Garmr, the monstrous hound who guards the gates of Hel, slew one another.

The battlefield of Vigrid is littered with the dead--gods, giants, einherjar, monsters, all mingled together in death. The prophecy is fulfilled: the gods have fallen.

But the battle is not quite over. Surtr, the fire giant who has waited since the beginning of time for this moment, raises his blazing sword high. The blade is brighter than the sun, hotter than any forge.

"Now," Surtr roars, "the nine worlds burn!"

He brings his sword down, and fire spreads across the earth. Yggdrasil, the world tree, begins to burn. The seas boil and evaporate. Mountains crumble and melt. The sky itself catches fire.

The nine worlds are consumed in flame--Asgard and Midgard, Jotunheim and Svartalfheim, Niflheim and Muspelheim, Vanaheim and Alfheim and Helheim. All burn together.

Finally, the earth sinks beneath the waves. The stars fall from the sky. Everything that was is gone.

There is only darkness, and silence, and the vast empty ocean.`,

      learningPoints: [
        {
          id: 'edda-ch5-9-totality',
          content:
            'Ragnarök is absolute--not just the gods die, but the entire cosmos is destroyed. This complete annihilation makes the rebirth that follows even more miraculous.',
          category: 'thematic-analysis',
        },
        {
          id: 'edda-ch5-9-surtr',
          content:
            'Surtr, the fire giant from Muspelheim, fulfills his destined role as the destroyer of worlds. He has existed since before creation specifically for this purpose.',
          category: 'character-analysis',
        },
      ],
    },

    // Scene 10: Timeline Game - Order the Events of Ragnarök
    {
      id: 'edda-ch5-10-timeline',
      type: 'timeline-game',
      backgroundImage: 'https://cdn.midjourney.com/f891cb99-acaf-4b31-bb32-b8149764e120/0_0.png',

      prompt: 'Order these prophesied events of Ragnarök from first to last:',

      timelineEvents: [
        {
          id: 'event-fimbulwinter',
          title: 'The Fimbulwinter begins',
          year: 1,
          description:
            'Three winters come with no summer between them. Snow falls from all directions. Brothers kill brothers, and all kinship bonds break.',
        },
        {
          id: 'event-bonds-break',
          title: 'Fenrir and Loki break free',
          year: 2,
          description:
            'The great wolf Fenrir breaks the magical chain Gleipnir. Loki escapes from his cave where he has been bound with poison dripping on his face.',
        },
        {
          id: 'event-jormungandr',
          title: 'Jörmungandr rises from the ocean',
          year: 3,
          description:
            'The world serpent emerges from the depths, causing tidal waves. His thrashing makes the seas boil and the earth tremble.',
        },
        {
          id: 'event-naglfar',
          title: 'The ship Naglfar sets sail',
          year: 4,
          description:
            'A ship made from the fingernails of the dead launches, commanded by Loki and filled with giants and the dishonored dead from Hel.',
        },
        {
          id: 'event-heimdall',
          title: 'Heimdall sounds the Gjallarhorn',
          year: 5,
          description:
            'The watchman of the gods blows his horn, its sound reaching all nine worlds. Yggdrasil trembles, and the gods prepare for the final battle.',
        },
        {
          id: 'event-bifrost-breaks',
          title: 'The rainbow bridge Bifrost shatters',
          year: 6,
          description:
            'The forces of chaos cross Bifrost, and the rainbow bridge breaks under their weight. The way to Asgard lies open.',
        },
        {
          id: 'event-vigrid',
          title: 'The armies gather at Vigrid',
          year: 7,
          description:
            'All forces converge on the plain of Vigrid. The gods and einherjar face the giants, monsters, and the dead in the final battle.',
        },
        {
          id: 'event-deaths',
          title: 'The great deaths occur',
          year: 8,
          description:
            'Thor kills Jörmungandr but dies from its poison. Odin is swallowed by Fenrir. Heimdall and Loki slay each other. The gods fall one by one.',
        },
        {
          id: 'event-surtr-fire',
          title: "Surtr's fire consumes the world",
          year: 9,
          description:
            'The fire giant Surtr sets the nine worlds ablaze. Sky, earth, and sea burn. Yggdrasil burns, though it is never consumed.',
        },
        {
          id: 'event-rebirth',
          title: 'The world emerges anew',
          year: 10,
          description:
            'The earth rises green from the sea. Survivors gather: Baldr returns from Hel, two humans emerge from hiding, and a new age begins.',
        },
      ],

      successThreshold: 70,

      learningPoints: [
        {
          id: 'edda-ch5-10-sequence',
          content:
            'The sequence of Ragnarök follows a logical progression: social collapse, imprisonment broken, natural catastrophe, battle, destruction, and finally rebirth.',
          category: 'plot-structure',
        },
        {
          id: 'edda-ch5-10-inevitability',
          content:
            'The detailed prophecy of Ragnarök shows that the Norse gods knew their fate but chose to face it with courage rather than try to avoid it.',
          category: 'thematic-analysis',
        },
      ],
    },

    // Scene 11: Cause-Effect - Match Gods to Their Destined Opponents
    {
      id: 'edda-ch5-11-matchups',
      type: 'cause-effect',
      backgroundImage: 'https://cdn.midjourney.com/11c849ec-b5b0-4241-8d1b-27836a5e4274/0_0.png',

      prompt: 'Match each god or hero to their destined opponent at Ragnarök:',

      pairs: [
        {
          id: 'pair-thor-serpent',
          cause: 'Thor',
          effect: 'Jörmungandr (the world serpent)',
          explanation:
            'Thor and Jörmungandr have been fated enemies since Thor first encountered the serpent. Thor kills the serpent but dies from its poison.',
        },
        {
          id: 'pair-odin-fenrir',
          cause: 'Odin',
          effect: 'Fenrir (the great wolf)',
          explanation:
            'Fenrir, whom the gods bound as a pup, fulfills the prophecy by swallowing Odin. This is the wolf\'s vengeance for his imprisonment.',
        },
        {
          id: 'pair-freyr-surtr',
          cause: 'Freyr',
          effect: 'Surtr (the fire giant)',
          explanation:
            'Freyr faces Surtr without his magical sword (given away for love), showing how past choices determine fate. Surtr kills him.',
        },
        {
          id: 'pair-heimdall-loki',
          cause: 'Heimdall',
          effect: 'Loki',
          explanation:
            'The watchman and the trickster--representing order and chaos--kill each other, their ancient enmity ending in mutual destruction.',
        },
        {
          id: 'pair-tyr-garmr',
          cause: 'Tyr',
          effect: 'Garmr (the hound of Hel)',
          explanation:
            'Tyr, the god of war and justice who lost his hand to Fenrir, faces another monstrous beast. They slay each other.',
        },
        {
          id: 'pair-vidar-fenrir',
          cause: 'Vidar (Odin\'s son)',
          effect: 'Fenrir (after it kills Odin)',
          explanation:
            'Vidar the Silent avenges his father by tearing Fenrir\'s jaws apart with his special shoe made from discarded leather scraps.',
        },
      ],

      distractors: [
        'Baldr (already dead before Ragnarök)',
        'The Norns (weavers of fate, not warriors)',
      ],

      learningPoints: [
        {
          id: 'edda-ch5-11-fate',
          content:
            'Each battle at Ragnarök was prophesied, showing the Norse belief in inescapable fate. Even knowing their doom, the gods fought courageously.',
          category: 'thematic-analysis',
        },
        {
          id: 'edda-ch5-11-connections',
          content:
            'The matchups are not random--each pair has a history. Thor fought the serpent before, Fenrir hates the gods for binding him, Heimdall and Loki are ancient enemies.',
          category: 'plot-structure',
        },
      ],
    },

    // Scene 12: Primary Source - The Völuspá
    {
      id: 'edda-ch5-12-voluspa',
      type: 'primary-source',
      backgroundImage: 'https://cdn.midjourney.com/03712d72-b083-4771-86ec-75d90201d5f1/0_0.png',

      prompt: 'Examine this excerpt from the Völuspá, the ancient prophecy poem describing Ragnarök:',

      source: {
        title: 'Völuspá (The Prophecy of the Seer)',
        author: 'Anonymous',
        date: 'c. 10th century CE',
        type: 'text',
        content: `Brothers will fight / and kill each other,
sisters' children / will defile kinship.
It is harsh in the world, / whoredom rife
—an axe age, a sword age / —shields are riven—
a wind age, a wolf age— / before the world goes headlong.
No man will have / mercy on another.

Now do Garm's jaws / gape wide,
the wolf runs free; / much do I know,
and more can see / of the fate of the gods,
the mighty in battle.

The sun turns black, / earth sinks in the sea,
the hot stars down / from heaven are whirled;
fierce grows the steam / and the life-feeding flame,
till fire leaps high / about heaven itself.

I see the earth / rising again
out of the waves, / green once more;
waterfalls flow, / the eagle flies above,
hunting for fish / on the mountain heights.`,
        citation: 'Völuspá, from the Poetic Edda, translated by Lee M. Hollander',
      },

      questions: [
        {
          id: 'q1',
          question: 'What social breakdown does the völva describe before Ragnarök?',
          type: 'multiple-choice',
          options: [
            'Economic collapse and famine',
            'Brothers fighting brothers and breakdown of kinship bonds',
            'Religious persecution and temple destruction',
            'Political revolution and overthrow of kings',
          ],
          correctAnswer: 'Brothers fighting brothers and breakdown of kinship bonds',
          explanation:
            'The völva emphasizes the breakdown of family and social bonds--brothers killing each other, kinship defiled. This moral collapse precedes and foreshadows the cosmic destruction.',
        },
        {
          id: 'q2',
          question: 'What imagery does the poem use to describe the destruction?',
          type: 'multiple-choice',
          options: [
            'Earthquake and tsunami',
            'The sun turning black, earth sinking into sea, stars falling, and fire consuming heaven',
            'Plague and pestilence spreading across the land',
            'Ice and eternal winter freezing the world',
          ],
          correctAnswer:
            'The sun turning black, earth sinking into sea, stars falling, and fire consuming heaven',
          explanation:
            'The völva uses apocalyptic imagery: darkened sun, drowning earth, falling stars, and all-consuming fire. These images convey total cosmic catastrophe.',
        },
        {
          id: 'q3',
          question: 'What hope does the prophecy offer at the end?',
          type: 'multiple-choice',
          options: [
            'The gods will be resurrected exactly as they were',
            'Humans will escape to another world',
            'The earth rises from the sea, green again, with waterfalls and eagles',
            'Time will reverse and the destruction will be undone',
          ],
          correctAnswer: 'The earth rises from the sea, green again, with waterfalls and eagles',
          explanation:
            'The völva sees rebirth: the earth emerging green from the ocean, water flowing again, and life (represented by the eagle hunting fish) continuing. Destruction is not the end.',
        },
      ],

      learningPoints: [
        {
          id: 'edda-ch5-12-voluspa',
          content:
            'The Völuspá is one of the most important poems in Norse mythology, preserved in the Poetic Edda. It presents the entire history of the cosmos from creation to destruction to rebirth.',
          category: 'historical-context',
        },
        {
          id: 'edda-ch5-12-poetry',
          content:
            'Norse prophecy was transmitted through alliterative poetry, with its distinctive rhythm and imagery. The poetic form made these complex myths easier to memorize and transmit orally.',
          category: 'literary-technique',
        },
      ],
    },

    // Scene 13: The World Reborn
    {
      id: 'edda-ch5-13-rebirth',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/180f7d76-a1b1-4618-be92-a762bc1fc4b3/0_0.png',

      content: `Snorri's voice grows softer, almost reverent, as he describes what comes after the fire.

"The völva saw that the earth would rise again from the ocean. Green and fertile, it emerges--the same earth, yet renewed. Water flows freely in waterfalls and streams. The sky is blue again, and the sun shines--a new sun, daughter of the old sun that was swallowed by Sköll the wolf."

You listen in wonder as Snorri describes the survivors gathering. From Hel comes Baldr and his brother Höðr, reconciled at last. They walk together to the ruins of Asgard and find, miraculously standing, the hall called Gimlé--more beautiful than the sun, thatched with gold.

Vidar and Vali, sons of Odin who survived Ragnarök, come to meet their brother Baldr. Modi and Magni, Thor's sons, arrive carrying their father's hammer Mjölnir. These young gods begin to build a new Asgard.

"And what of humans?" you ask Snorri.

"Two survived," he says. "Líf and Lífþrasir--their names mean 'Life' and 'Eager for Life.' They hid in Yggdrasil itself, in the branches of the world tree. The fire could not touch them there. They emerge now to find a new world waiting. They will have children, and from them will come a new human race."

The new earth is paradise: fields grow crops without being sown, sickness and death are unknown, and all living things dwell in peace. The prophecy says that the great god, the mighty one from above, will come--though who this is, the völva does not say.`,

      learningPoints: [
        {
          id: 'edda-ch5-13-cyclical',
          content:
            'The rebirth of the world after Ragnarök demonstrates the cyclical nature of Norse cosmology--endings are also beginnings, death gives way to new life.',
          category: 'thematic-analysis',
        },
        {
          id: 'edda-ch5-13-survivors',
          content:
            'The survivors represent continuity: Baldr returns (redemption), young gods carry on their fathers\' legacy, and two humans (Líf and Lífþrasir) ensure humanity continues.',
          category: 'cultural-context',
        },
        {
          id: 'edda-ch5-13-yggdrasil',
          content:
            'Yggdrasil survives the fire, damaged but standing. The world tree is eternal, connecting past and future, sheltering the seeds of the new world.',
          category: 'thematic-analysis',
        },
      ],
    },

    // Scene 14: Reflection on the Cycle
    {
      id: 'edda-ch5-14-reflection',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/d8c413f5-9d0c-47f2-9a59-74e898daecc5/0_0.png',

      content: `Snorri closes his manuscript and looks at you across the firelit study. Outside, the long Icelandic night continues, but inside there is warmth and the comfort of completed work.

"Now you have heard the whole tale," he says. "From the void of Ginnungagap to the rebirth of the world. From the first gods to the last battle. This is what my ancestors believed."

You consider the stories you've heard--Odin's sacrifice for wisdom, Thor's protection of the worlds, Loki's descent from trickster to destroyer, Baldr's tragic death, and finally the great cataclysm of Ragnarök.

"What does it all mean?" you ask.

Snorri smiles. "That is for each person to decide. But I see several truths in these tales. First, that courage matters more than victory--the gods fight at Ragnarök knowing they will lose, but they fight anyway. Second, that wisdom requires sacrifice--Odin gave his eye, hung from the tree, and endured all suffering to gain knowledge. Third, that fate cannot be escaped, only faced with dignity."

He pauses, then continues: "But most importantly, I think, the myths teach that endings are not final. The world dies, but the world also lives again. Baldr returns. The young gods build anew. Life persists."

"Is this," you ask carefully, "what Christians would call hope?"

Snorri nods. "Perhaps my ancestors saw a truth that transcends any single faith: that from destruction comes creation, that death gives way to life, that the cycles continue. They faced a harsh world--cold winters, dangerous seas, uncertain survival--and they created myths that said: endure, fight well, and trust that after the darkness, spring will come again."`,

      learningPoints: [
        {
          id: 'edda-ch5-14-courage',
          content:
            'The Norse heroic ideal values courage in the face of inevitable defeat. The gods fight at Ragnarök knowing they will lose, proving that honor matters more than survival.',
          category: 'thematic-analysis',
        },
        {
          id: 'edda-ch5-14-wisdom',
          content:
            'Wisdom requires sacrifice in Norse mythology--Odin\'s sacrifices (eye, hanging, wandering) show that true knowledge comes at great cost.',
          category: 'cultural-context',
        },
        {
          id: 'edda-ch5-14-christian',
          content:
            'Snorri, a Christian writing about pagan myths, finds universal truths that transcend religious boundaries--courage, sacrifice, hope, and renewal.',
          category: 'historical-context',
        },
      ],
    },

    // Scene 15: Dialogue - Final Thoughts with Snorri
    {
      id: 'edda-ch5-15-conclusion',
      type: 'dialogue',
      backgroundImage: 'https://cdn.midjourney.com/d8c413f5-9d0c-47f2-9a59-74e898daecc5/0_0.png',

      character: {
        id: 'snorri',
        name: 'Snorri Sturluson',
        portrait: 'https://cdn.midjourney.com/895a0fc8-1017-49ff-9593-d08bb50231d3/0_1.png',
        description: 'Icelandic historian and poet, author of the Prose Edda',
      },

      dialogueTree: {
        id: 'node-1',
        speaker: 'snorri',
        text: 'Before you return to your own time, I wonder: what will you carry from these tales? What wisdom from the ancient North will you take with you?',

        responses: [
          {
            id: 'response-courage',
            text: 'The courage to face fate without fleeing',
            nextNodeId: 'node-courage',
          },
          {
            id: 'response-wisdom',
            text: 'That wisdom requires sacrifice',
            nextNodeId: 'node-wisdom',
          },
          {
            id: 'response-cycle',
            text: 'That endings lead to new beginnings',
            nextNodeId: 'node-cycle',
          },
        ],

        allNodes: [
          {
            id: 'node-courage',
            speaker: 'snorri',
            text: 'Yes! The gods knew Ragnarök was coming, but they did not cower. They armed themselves, gathered their warriors, and rode out to meet their fate. That is the essence of courage--not fearlessness, but facing fear with honor.',
            responses: [
              {
                id: 'response-courage-continue',
                text: 'How does this compare to other myths?',
                nextNodeId: 'node-compare',
              },
            ],
          },
          {
            id: 'node-wisdom',
            speaker: 'snorri',
            text: 'Indeed. Odin gave his eye, hung from Yggdrasil, wandered the world in disguise--all for knowledge. The runes, the mead of poetry, the secrets of fate--none came easily. What we value, we must pay for.',
            responses: [
              {
                id: 'response-wisdom-continue',
                text: 'Why did the Norse value wisdom so highly?',
                nextNodeId: 'node-why-wisdom',
              },
            ],
          },
          {
            id: 'node-cycle',
            speaker: 'snorri',
            text: 'The eternal cycle, yes. My ancestors saw it everywhere--winter becomes spring, the dead are reborn, the world dies and lives again. Perhaps this gave them comfort in dark times: knowing that nothing, not even the worst catastrophe, is truly the end.',
            responses: [
              {
                id: 'response-cycle-continue',
                text: 'This seems different from other apocalypse myths',
                nextNodeId: 'node-different',
              },
            ],
          },
          {
            id: 'node-compare',
            speaker: 'snorri',
            text: 'An excellent question. In Greek myths, the gods are immortal and eternal. In Christianity, the apocalypse leads to eternal paradise or damnation. But Norse mythology is more... mortal. Even gods can die. The world itself is not eternal. Yet in that mortality is a strange sort of hope.',
            responses: [
              {
                id: 'response-compare-continue',
                text: 'What do you mean by hope in mortality?',
                nextNodeId: 'node-hope',
              },
            ],
          },
          {
            id: 'node-why-wisdom',
            speaker: 'snorri',
            text: 'In a harsh, unpredictable world, wisdom was survival. Knowing which plants heal, which paths are safe, which storms are coming--this was life and death. And deeper wisdom--knowing how to lead, how to judge, how to live with honor--this separated great rulers from tyrants.',
            isEnd: true,
          },
          {
            id: 'node-different',
            speaker: 'snorri',
            text: 'Very perceptive. Many apocalypse myths end in judgment--the righteous saved, the wicked punished. But Ragnarök judges no one. Good and evil both fall. What matters is not moral purity but courage and duty. And the rebirth comes not as reward, but as natural cycle.',
            isEnd: true,
          },
          {
            id: 'node-hope',
            speaker: 'snorri',
            text: 'If gods can die, then they are like us--facing their mortality with courage. Their example becomes more powerful because they are not invulnerable. And if the world can die and be reborn, then no defeat is permanent. We can always begin again. That is the hope in mortality.',
            isEnd: true,
          },
        ],
      },

      learningPoints: [
        {
          id: 'edda-ch5-15-comparison',
          content:
            'Norse mythology differs from Greek (immortal gods) and Christian (eternal afterlife) traditions by embracing mortality even for the divine, making the gods more relatable and their courage more meaningful.',
          category: 'thematic-analysis',
        },
        {
          id: 'edda-ch5-15-snorri-legacy',
          content:
            'Snorri\'s Prose Edda preserved these myths during the Christian era, finding value in his ancestors\' stories even as his own faith differed. This cultural preservation was an act of intellectual courage.',
          category: 'historical-context',
        },
      ],

      events: {
        onExit: [
          {
            type: 'quiz',
            componentId: 'edda-ch5-quiz',
            condition: {
              type: 'if-not-completed',
            },
          },
        ],
      },
    },
  ],

  endQuiz: chapter5Quiz,
};

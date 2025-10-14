import type { Chapter } from '../../../types';
import { chapter4Quiz } from '../quizzes/chapter-4-quiz';

/**
 * Chapter 4: Ali Baba and the Forty Thieves
 *
 * This chapter tells the classic tale of Ali Baba, exploring themes of
 * cleverness, greed, loyalty, and the importance of resourcefulness.
 */
export const chapter4: Chapter = {
  id: 'chapter-4-ali-baba',
  title: 'Ali Baba and the Forty Thieves',
  description: 'Discover the secret cave of forty thieves and witness how cleverness triumphs over brute force. Follow Ali Baba and his resourceful servant Morgiana as they outwit dangerous criminals.',

  prerequisites: {
    type: 'all',
    chapterIds: ['chapter-1-scheherazade']
  },

  learningObjectives: [
    'Understand the theme of cleverness versus force',
    'Analyze the consequences of greed and envy',
    'Recognize the value of loyal and resourceful companions',
    'Explore the role of women as heroes in folk tales',
    'Examine how secrets can be both powerful and dangerous',
  ],

  scenes: [
    {
      id: 'scene-1-ali-baba-introduction',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/d6376082-b2d2-417e-bed3-4c0a4ab71dd2/0_0.png',
      image: 'https://cdn.midjourney.com/157b333a-b665-4c79-92bb-ceb4c7569684/0_0.png',
      content: `In ancient Persia, in a city nestled between mountains and desert, there lived two brothers who could not have been more different in fortune.

The elder brother was named Cassim. Through a prosperous marriage to a wealthy merchant's daughter, Cassim lived in comfort and luxury. His house was large and well-furnished, his clothes were fine silk, and his storerooms were full. He had become a successful merchant himself, dealing in precious goods, and he carried himself with the pride that wealth often brings.

The younger brother, Ali Baba, had married a woman as poor as himself. They lived in a modest home on the outskirts of the city, surviving on what little Ali Baba could earn as a woodcutter. Each day, he would venture into the forest with his three donkeys, cut and gather firewood, and return to the city to sell it in the marketplace. It was honest work, but it earned barely enough to keep his family fed.

Despite their different circumstances, Ali Baba bore no resentment toward his brother. He worked hard, accepted his lot in life, and found contentment in his simple existence. His wife, too, was resourceful and kind, making the most of their humble means.

Cassim, however, rarely thought of his poorer brother. Wrapped up in his business dealings and social standing, he had little time for family ties—especially when those ties might remind him of humbler origins.

Neither brother could have imagined that their lives were about to change forever, all because of a secret discovered quite by accident in the depths of the forest.`,
      inlineAnnotations: [
        {
          id: 'persia-setting',
          text: 'Persia',
          tooltip: {
            title: 'Persia in the Tales',
            content: 'Like many stories in Arabian Nights, this tale is set in Persia (modern-day Iran) rather than Arabia. The collection draws from multiple Middle Eastern cultures, reflecting the cosmopolitan nature of medieval Islamic civilization.',
            category: 'historical-context',
          },
        },
      ],
      learningPoints: [
        {
          id: 'lp-ch4-1',
          content: 'Folk tales often contrast characters of different social stations to explore themes of fortune and character.',
          category: 'literary-technique',
        },
      ],
    },

    {
      id: 'scene-2-forest-discovery',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/d0ab17d5-a79c-459f-aaf4-f236492c4470/0_0.png',
      image: 'https://cdn.midjourney.com/157b333a-b665-4c79-92bb-ceb4c7569684/0_0.png',
      content: `One day, Ali Baba was working deep in the forest, farther than usual from the city. The wood here was better—thicker branches, drier timber—but it meant being alone in a remote part of the mountains where few people traveled.

He had loaded his donkeys with a good supply of firewood and was preparing to head home when he heard something that made him freeze: the thunder of many hoofbeats, echoing through the trees.

A large troop of horsemen was approaching rapidly along the mountain path.

Ali Baba's heart pounded. This remote area was known to be dangerous—far from the protection of the city guards. A group of riders this large, traveling with such urgency, could only mean trouble. Bandits, perhaps, or worse.

Thinking quickly, Ali Baba drove his donkeys into the thick underbrush and scrambled up a large tree with dense foliage. From his perch high in the branches, he could see the path clearly while remaining completely hidden.`,
      learningPoints: [
        {
          id: 'lp-ch4-2',
          content: 'Quick thinking and caution can save your life when danger approaches.',
          category: 'thematic-analysis',
        },
      ],
    },

    {
      id: 'scene-2b-forty-thieves',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/d0ab17d5-a79c-459f-aaf4-f236492c4470/0_0.png',
      image: 'https://cdn.midjourney.com/1f2bd834-c94b-4e91-926d-542b6a1b8b5b/0_0.png',
      content: `The riders came into view, and Ali Baba's breath caught in his throat. There were forty of them—forty fierce-looking men, heavily armed with curved swords and daggers, their faces hardened by years of violence. Each rider led a horse laden with heavy saddlebags that clinked and bulged with obvious weight.

These were not ordinary travelers. These were thieves—a notorious band of robbers who had terrorized the region for years, attacking caravans and raiding merchants.

The troop stopped directly beneath Ali Baba's tree, near a rocky outcrop he had passed many times but never paid attention to. The leader—a massive man with a black beard and a scarred face—dismounted and approached the rock face.

Ali Baba dared not even breathe. If they discovered him, they would surely kill him to protect their secrets. He could only watch and pray the leaves concealed him well enough.`,
      learningPoints: [
        {
          id: 'lp-ch4-2b',
          content: 'Observation and patience are often rewarded in folk tales with valuable knowledge.',
          category: 'thematic-analysis',
        },
      ],
    },

    {
      id: 'scene-3-open-sesame',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/1b00969e-16db-44a6-9f95-6d48a5c5bc7e/0_0.png',
      image: 'https://cdn.midjourney.com/97a4f63c-5d31-4932-adb3-1bf891b529ba/0_0.png',
      content: `From his hiding place in the tree, Ali Baba watched as the captain of the thieves stood before what appeared to be a solid rock face. The other thieves dismounted and waited in silence, their horses stamping and snorting.

The captain raised his voice and spoke two words that would echo through centuries:

"OPEN SESAME!"

Ali Baba's eyes widened in amazement. At the sound of those words, the rock face trembled and split apart, revealing a hidden entrance to a cave! The opening was large enough for a man to enter easily, and from within came darkness that suggested great depth.

The forty thieves filed into the cave, leading their laden horses. It took some time for all of them to enter. Ali Baba watched, hardly daring to believe what he was seeing. A secret cave, opened by magic words! What could be inside?

After what seemed like an eternity, the thieves began to emerge. Their horses no longer carried heavy saddlebags—the thieves had clearly deposited their plunder inside. The men looked relaxed now, laughing and talking amongst themselves as they mounted their horses.

When the last thief had emerged, the captain stood at the entrance once more and called out:

"CLOSE SESAME!"

The rock face sealed itself shut with a deep grinding sound, leaving no trace of an opening. If Ali Baba had not witnessed it with his own eyes, he would never have believed a cave existed there at all.

The forty thieves mounted their horses and rode away down the mountain path, their hoofbeats gradually fading into silence.

Ali Baba remained in his tree for a long time, making absolutely certain they were gone. His mind raced. The thieves had stored their treasure in that cave—years and years of stolen wealth, most likely. And now Ali Baba alone knew the secret of how to open it.

The question was: What should he do with this knowledge?`,
      inlineAnnotations: [
        {
          id: 'open-sesame',
          text: 'OPEN SESAME',
          tooltip: {
            title: 'The Most Famous Phrase',
            content: '"Open Sesame" has become one of the most iconic phrases in world literature, used everywhere from password systems to Sesame Street. The sesame plant was valuable in Middle Eastern trade for its oil and seeds, and "sesame" may have been chosen because it sounds exotic and magical to European ears.',
            category: 'cultural-context',
          },
        },
      ],
      learningPoints: [
        {
          id: 'lp-ch4-3',
          content: 'The phrase "Open Sesame" has become one of the most famous magical commands in world literature.',
          category: 'cultural-impact',
        },
        {
          id: 'lp-ch4-4',
          content: 'Magic words in folk tales often represent knowledge as a form of power.',
          category: 'symbolism',
        },
      ],
    },

    {
      id: 'scene-4-enter-cave-decision',
      type: 'decision',
      backgroundImage: 'https://cdn.midjourney.com/1b00969e-16db-44a6-9f95-6d48a5c5bc7e/0_0.png',
      image: 'https://cdn.midjourney.com/97a4f63c-5d31-4932-adb3-1bf891b529ba/0_0.png',
      prompt: 'The thieves have left. Should Ali Baba use the magic words to enter the cave?',
      context: 'Ali Baba knows the secret words. The cave likely contains the thieves\' stolen treasure, but it could be dangerous.',
      timeLimit: 30,
      choices: [
        {
          id: 'choice-enter-immediately',
          text: 'Enter the cave and explore',
          consequence: 'Ali Baba speaks the magic words. The cave opens, revealing mountains of gold, silver, and precious goods stolen over many years.',
          learningPoints: [
            {
              id: 'lp-choice-brave',
              content: 'Fortune favors the bold, but also the cautious - Ali Baba takes only what he can carry.',
              category: 'character-analysis',
            },
          ],
        },
        {
          id: 'choice-return-home',
          text: 'Leave quietly and return home',
          consequence: 'Ali Baba starts to leave, but his curiosity and his family\'s poverty convince him to at least look inside.',
        },
        {
          id: 'choice-wait-watch',
          text: 'Wait and watch to make sure it\'s safe',
          consequence: 'After watching for a while and seeing no return of the thieves, Ali Baba decides to try the magic words.',
        },
      ],
      learningPoints: [],
    },

    {
      id: 'scene-4b-exploring-cave',
      type: 'map-exploration',
      backgroundImage: 'https://cdn.midjourney.com/5a830c9d-1eff-4a22-a03e-b427f800fcbd/0_0.png',
      mapImage: 'https://cdn.midjourney.com/5a830c9d-1eff-4a22-a03e-b427f800fcbd/0_0.png',

      prompt: 'Ali Baba stands inside the vast treasure cave. Explore the cave to discover its secrets.',

      locations: [
        {
          id: 'cave-entrance',
          name: 'Cave Entrance',
          x: 15,
          y: 50,
          content: 'The magical entrance sealed behind you with a grinding sound. You remember the words clearly: "Open Sesame" to enter, "Close Sesame" to leave. You must not forget them, or you\'ll be trapped here forever.',
        },
        {
          id: 'gold-coins',
          name: 'Mountain of Gold Coins',
          x: 35,
          y: 40,
          content: 'Heaps of gold coins glitter in the dim light—more wealth than you\'ve ever imagined. These represent years of raids on merchant caravans. Each coin tells a story of loss for someone, but could mean survival for your family.',
          image: 'https://cdn.midjourney.com/1da22176-1673-4b63-9fb7-397284d45353/0_0.png',
        },
        {
          id: 'silver-ingots',
          name: 'Silver Ingots',
          x: 60,
          y: 35,
          content: 'Silver bars are stacked like firewood along the cave wall. Each one is heavy and valuable. Taking too much would slow you down and make it obvious you\'ve been here.',
        },
        {
          id: 'precious-gems',
          name: 'Precious Gems',
          x: 50,
          y: 60,
          content: 'Rubies, emeralds, and sapphires overflow from ornate chests. Small but incredibly valuable—easy to carry and conceal. But these distinctive gems might be recognized if you tried to sell them.',
        },
        {
          id: 'rich-fabrics',
          name: 'Rich Fabrics and Vessels',
          x: 75,
          y: 55,
          content: 'Silk textiles and golden vessels are piled in the depths of the cave. Beautiful craftsmanship, but too bulky and recognizable. The thieves would notice if any were missing.',
        },
        {
          id: 'treasure-depth',
          name: 'The Cave\'s Depths',
          x: 80,
          y: 45,
          content: 'The cave extends deeper than you imagined. Shadows and darkness suggest even more treasure beyond. But you hear nothing—no sounds, no movement. The thieves have truly left. For now.',
        },
      ],

      requiredLocations: ['cave-entrance', 'gold-coins'],

      learningPoints: [
        {
          id: 'lp-ch4-4a',
          content: 'The detailed description of treasure teaches readers about medieval wealth, trade goods, and what was valuable in Islamic Golden Age commerce.',
          category: 'historical-context',
        },
        {
          id: 'lp-ch4-4b',
          content: 'Ali Baba\'s careful observation before taking anything foreshadows his restraint, contrasting with Cassim\'s later greed.',
          category: 'foreshadowing',
        },
      ],
    },

    {
      id: 'scene-5-taking-treasure',
      type: 'decision',
      backgroundImage: 'https://cdn.midjourney.com/5a830c9d-1eff-4a22-a03e-b427f800fcbd/0_0.png',
      image: 'https://cdn.midjourney.com/1da22176-1673-4b63-9fb7-397284d45353/0_0.png',
      prompt: 'Ali Baba stands amid vast treasure. How much should he take?',
      context: 'The cave contains more wealth than Ali Baba has ever imagined. He must decide wisely.',
      timeLimit: 30,
      choices: [
        {
          id: 'choice-take-modest',
          text: 'Take only a modest amount that won\'t be noticed',
          consequence: 'Ali Baba wisely takes only a few bags of gold coins - enough to help his family, but not so much that it would be missed.',
          learningPoints: [
            {
              id: 'lp-choice-moderation',
              content: 'Moderation and wisdom are valued over greed in folk tales.',
              category: 'thematic-analysis',
            },
          ],
        },
        {
          id: 'choice-take-much',
          text: 'Take as much as you can carry',
          consequence: 'Ali Baba fills multiple bags, but realizes he should be careful not to draw attention. He takes several bags of gold.',
        },
        {
          id: 'choice-take-little',
          text: 'Take only enough for immediate needs',
          consequence: 'Ali Baba takes just enough gold to ease his family\'s poverty, planning to return if needed.',
        },
      ],
      learningPoints: [],
    },

    {
      id: 'scene-6-cassim-learns',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/d0da2942-0ac9-4ca1-87aa-59282cb72bbd/0_0.png',
      image: 'https://cdn.midjourney.com/af7242a9-bc6d-40a0-b844-863554e7b10f/0_0.png',
      content: `Ali Baba's wife was overjoyed with the gold coins, but she wanted to know exactly how much they had. Since they owned no scales, she went to borrow a measuring bowl from Cassim's wife.

Cassim's wife, curious about why poor Ali Baba would need to measure anything, secretly smeared the bottom of the bowl with wax. When the bowl was returned, she discovered a gold coin stuck to the wax.

Gold! The poor woodcutter had gold to measure?

She immediately showed her husband. Cassim's face darkened with envy and suspicion. He went straight to his brother's modest home.

"Ali Baba," Cassim said, his voice tight with barely controlled anger, "do not pretend to be poor while you are secretly so rich that you must measure your gold instead of counting it! Tell me where you got this coin, or I will report you to the authorities as a thief!"

Ali Baba saw no choice but to tell his brother the truth. He described everything: the forty thieves, the magic words, the secret cave filled with treasure.

"And you took only a few bags?" Cassim interrupted, incredulous. "You fool! That cave must contain the plunder of a hundred raids! We must return immediately—I must have my share!"

"Brother, please be careful," Ali Baba cautioned. "The thieves may return. We should take only a little at a time, and never attract—"

"Enough!" Cassim snapped. "You are a timid woodcutter. I am a merchant—I know the value of opportunity when I see it. Tell me the exact location and the magic words. I will go tomorrow with ten mules and take a proper fortune, not your pitiful little bags."

Despite his misgivings, Ali Baba told Cassim everything. That night, Cassim could barely sleep, his mind filled with visions of gold and jewels, all soon to be his.

Greed had taken complete hold of his heart.`,
      learningPoints: [
        {
          id: 'lp-ch4-5',
          content: 'Sharing secrets can have unexpected consequences, especially when greed is involved.',
          category: 'thematic-analysis',
        },
      ],
    },

    {
      id: 'scene-7a-cassim-enters',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/5a830c9d-1eff-4a22-a03e-b427f800fcbd/0_0.png',
      image: 'https://cdn.midjourney.com/af7242a9-bc6d-40a0-b844-863554e7b10f/0_0.png',
      content: `Before dawn the next morning, Cassim set out for the forest with ten mules. He found the rock face easily from Ali Baba's directions and stood before it with growing excitement.

"Open Sesame!" he commanded.

The rock face split open, and Cassim hurried inside, leading his mules. The cave was even more magnificent than he had imagined. Gold coins lay in great heaps. Silver ingots were stacked like firewood. Precious gems glittered in piles. Rich fabrics, golden vessels, and treasures from a hundred raids filled the enormous cavern.

Cassim's eyes gleamed with avarice. All of this—all of it!—would be his!

He worked frantically, loading bag after bag onto his mules. He filled every sack he had brought, then started filling his own pockets and robes. More! He could take more! His mind raced with calculations—how much he could sell, how wealthy he would become, how he would finally be richer than all the merchants in the city.`,
      learningPoints: [
        {
          id: 'lp-ch4-6a',
          content: 'Cassim\'s frantic greed contrasts sharply with Ali Baba\'s measured restraint.',
          category: 'character-analysis',
        },
      ],
    },

    {
      id: 'scene-7b-cassim-trapped',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/5a830c9d-1eff-4a22-a03e-b427f800fcbd/0_0.png',
      image: 'https://cdn.midjourney.com/32ade3b4-2ce9-41aa-8a75-8e0bfe866e2d/0_0.png',
      content: `Hours passed. Finally, staggering under the weight of gold in his pockets, Cassim led his heavily laden mules to the entrance. He opened his mouth to speak the magic words—

And froze.

What were the words? Something about a plant. A seed. What was it?

"Open... Open..." Panic seized him. How could he forget? "Open Wheat!" he cried.

Nothing happened.

"Open Barley! Open Rice! Open Grain!" His voice grew shrill with terror. He tried every seed and grain he could think of, but the cave remained sealed.

The treasure! All this treasure, and he would die here unless he could remember! Cassim's panic overwhelmed him. He ran back and forth in the cave, clutching his head, trying desperately to recall the simple word his brother had told him.

But greed had so filled his mind that there was no room for memory. The word was gone.

Hours later, the forty thieves returned. They saw the ten mules outside the cave and knew immediately that their secret had been discovered.

When they opened the cave, they found Cassim and killed him instantly. To send a warning to whoever else might know their secret, they left his body at the entrance, cut into quarters, as a grim message.

The magic word Cassim could not remember? Sesame. The simple word that greed had driven from his mind.`,
      inlineAnnotations: [
        {
          id: 'grain-names',
          text: 'Open Wheat! Open Barley!',
          tooltip: {
            title: 'The Tragic Detail',
            content: 'This detail—Cassim trying every grain name except the right one—is psychologically brilliant. It shows how panic and greed cloud our judgment. He knows it\'s a grain word, but fear has blocked his memory completely. It\'s both darkly comic and tragic.',
            category: 'literary-context',
          },
        },
      ],
      learningPoints: [
        {
          id: 'lp-ch4-6',
          content: 'Greed often leads to a character\'s downfall in folk tales, serving as a moral warning.',
          category: 'thematic-analysis',
        },
        {
          id: 'lp-ch4-7',
          content: 'The detail of forgetting "Sesame" and saying other grain names shows how panic affects judgment.',
          category: 'narrative-technique',
        },
      ],
    },

    {
      id: 'scene-8-ali-baba-discovers',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/d0da2942-0ac9-4ca1-87aa-59282cb72bbd/0_0.png',
      image: 'https://cdn.midjourney.com/157b333a-b665-4c79-92bb-ceb4c7569684/0_0.png',
      content: `When Cassim failed to return by nightfall, his wife came to Ali Baba in distress. "My husband went to that cave you told him about. He hasn't come back!"

Ali Baba's heart sank. He had feared something like this might happen. Despite the danger, he knew he had to search for his brother.

At dawn, Ali Baba took three donkeys and rode to the forest. When he reached the rock face and spoke the magic words, the cave opened—and Ali Baba saw immediately what had happened.

Cassim's body hung at the entrance, cut into quarters as a warning. Ten mules stood nearby, still loaded with treasure bags.

Ali Baba fought back tears and nausea. His brother's greed had led to this terrible end. But Ali Baba could not leave Cassim's body to be devoured by wild animals or rot in this dark place. Whatever Cassim's faults, he was still family.

Working quickly, Ali Baba carefully took down his brother's body, wrapped it in cloth, and loaded it onto one donkey. He transferred the treasure from Cassim's mules to his remaining two donkeys—not all of it, just enough to justify the journey. Then he released Cassim's mules to find their own way home.

Before leaving, Ali Baba looked at the treasure still heaped in the cave. He could take more. He could take it all over time. But the sight of his brother's body reminded him: this treasure was cursed with blood. Greed had killed Cassim. Ali Baba would take only enough to care for his brother's widow and children, and no more.

"Close Sesame," he said quietly, and the cave sealed shut.

As he rode home through the forest, Ali Baba realized his troubles were far from over. The thieves would know someone else had been here. They would know someone had taken Cassim's body. They would come hunting.

Ali Baba needed to be very, very careful from now on.`,
      learningPoints: [
        {
          id: 'lp-ch4-8',
          content: 'Ali Baba\'s loyalty to family despite the risk shows his noble character.',
          category: 'character-analysis',
        },
      ],
    },

    {
      id: 'scene-9a-morgiana-introduced',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/d0da2942-0ac9-4ca1-87aa-59282cb72bbd/0_0.png',
      image: 'https://cdn.midjourney.com/04e06985-e820-4ff3-9f2b-aa1b14d9243a/0_0.png',
      content: `The problem Ali Baba faced was this: How could he explain Cassim's death without revealing the secret of the cave? If people knew Cassim had been murdered by thieves, there would be questions. Investigations. And eventually, the connection to Ali Baba might be discovered.

In Cassim's household lived a servant woman named Morgiana. She was young, sharp-minded, and remarkably resourceful. When Ali Baba quietly explained the situation to her, Morgiana immediately grasped the danger they all faced.

"Leave this to me, master," she said with calm confidence. "I will manage everything."`,
      inlineAnnotations: [
        {
          id: 'morgiana-name',
          text: 'Morgiana',
          tooltip: {
            title: 'The True Hero',
            content: 'Morgiana is one of the most capable and heroic characters in all of Arabian Nights. A slave woman who saves her master\'s life multiple times through quick thinking and courage, she represents a common folk tale archetype: the clever servant who surpasses their master in intelligence and resourcefulness.',
            category: 'literary-context',
          },
        },
      ],
      learningPoints: [
        {
          id: 'lp-ch4-9',
          content: 'Morgiana\'s introduction marks a shift - she becomes the true hero of the story.',
          category: 'character-analysis',
        },
      ],
    },

    {
      id: 'scene-9b-cobbler-plan',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/d0da2942-0ac9-4ca1-87aa-59282cb72bbd/0_0.png',
      image: 'https://cdn.midjourney.com/8e1a8f82-e6d4-41b3-8411-2bf62175177d/0_0.png',
      content: `That very night, Morgiana went to the old cobbler Baba Mustafa, who worked in the marketplace. She showed him a gold coin—far more than he usually earned in a week.

"Old man," she said, "I need you to do something unusual. You must be blindfolded, come with me, do some stitching, and ask no questions. For this, you'll earn this gold coin."

Baba Mustafa, poor and practical, agreed. Morgiana blindfolded him and led him through the winding streets to Cassim's house. There, by lamplight, she had him sew Cassim's body back together with his finest, most careful stitches.

When the work was finished, Morgiana blindfolded him again and led him back, giving him the gold coin and an extra silver piece for his silence.

"Remember, old man," she said seriously, "if anyone asks, you know nothing. You saw nothing. You stitched nothing."

Baba Mustafa nodded. He had learned long ago that some questions were better left unasked.

The next day, Morgiana began wailing and crying, announcing that her master Cassim had fallen suddenly ill in the night and died despite all efforts to save him. The body was prepared for burial in the traditional way, and Cassim was laid to rest with all proper ceremonies.

No one suspected the truth. And Ali Baba, watching Morgiana handle everything with such intelligence and quick thinking, realized he owed this remarkable woman his life.

From this moment on, Morgiana would prove to be the most valuable ally anyone could hope for in a dangerous game of wits.`,
      learningPoints: [
        {
          id: 'lp-ch4-10',
          content: 'The clever female servant is a common and valued character type in Middle Eastern folk tales.',
          category: 'cultural-context',
        },
      ],
    },

    {
      id: 'scene-10-thieves-investigate',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/fbf8c949-392b-41d6-8f65-88b414fe0c71/0_0.png',
      image: 'https://cdn.midjourney.com/d4865c5b-69fd-4191-aea2-f317e9c4d2a6/0_0.png',
      content: `Meanwhile, when the forty thieves returned to their cave, they discovered Cassim's body was gone. Worse still, none of the treasure they had piled around the body as bait had been disturbed—whoever took the body had resisted the temptation to steal more.

"This is no common thief," the captain said grimly. "Someone else knows our secret, but they are cunning enough to take only what they need. That makes them dangerous."

The captain called for a volunteer. "Go into the city. Find out who was connected to the dead man. Find where he lived. Mark the house so we can return tonight and kill everyone inside. No one can know our secret and live."

One of the thieves went to the city and began asking subtle questions in the marketplace. Eventually, he found Baba Mustafa, the old cobbler, and through careful questioning and the promise of gold, learned about the strange stitching job he'd done.

"Can you remember the house where you did this work?" the thief asked.

"I was blindfolded," Baba Mustafa said. "But..."

More gold changed hands.

"Perhaps," the old man said, "if I retrace my steps, I might remember the turns."

The cobbler led the thief through the winding streets, trying to recall the route Morgiana had taken him. At last, he stopped before a modest house.

"This might be it," he said uncertainly. "Yes, I think this is the place."

It was Ali Baba's house.

The thief thanked the cobbler and, when the old man had left, took out a piece of white chalk and marked a large X on the door. Tonight, when the thieves returned, they would know exactly which house to attack.

The thief hurried back to report his success to the captain.`,
      learningPoints: [
        {
          id: 'lp-ch4-11',
          content: 'The back-and-forth between pursuers and pursued creates mounting tension.',
          category: 'narrative-structure',
        },
      ],
    },

    {
      id: 'scene-11-morgiana-chalk-marks',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/fbf8c949-392b-41d6-8f65-88b414fe0c71/0_0.png',
      image: 'https://cdn.midjourney.com/d5d18f6f-5ac4-4d55-9d0f-2462497e79ec/0_0.png',
      content: `Later that day, Morgiana noticed a white chalk mark on the door—a large X, too deliberate to be chance.

Her sharp mind understood immediately: the thieves had found them.

Morgiana thought quickly. If the mark identified this house, then making every house identical would render it useless. She bought chalk and marked every door on the street with the same X.

That night, the captain led his men to the street. The thief who had marked the door confidently pointed it out—but the captain's face darkened with rage. Every door bore an identical white X.

"You fool!" he hissed. "How will we know which house to attack?"

"There was only one mark! I swear it!" the thief stammered.

The captain retreated. Whoever had done this was dangerously clever. They had anticipated his move and countered it perfectly.

Back at the cave, he executed the failed thief and began planning a more sophisticated approach.

He would handle this personally.`,
      learningPoints: [
        {
          id: 'lp-ch4-12',
          content: 'Morgiana\'s counter-strategy shows quick thinking and understanding of her opponents\' methods.',
          category: 'character-analysis',
        },
      ],
    },

    {
      id: 'scene-12-oil-jars',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/25b5ea5e-687b-4f3f-b9b8-fcbc3b6f47d1/0_0.png',
      image: 'https://cdn.midjourney.com/f6b04c23-dd93-4a95-aef4-36e335b63661/0_0.png',
      content: `The captain's new plan was clever and ruthless. He would meet Ali Baba face to face, win his trust, and strike.

He purchased forty large oil jars. Only one contained oil—the other thirty-eight would hide his remaining thieves.

Disguised as an oil merchant, he timed his arrival for late afternoon and made inquiries until someone directed him to Ali Baba's house.

"Good sir!" he called out. "I am an oil merchant with nowhere to store my goods. The caravanserai is full. Might I use your courtyard?"

Ali Baba, generous as ever, welcomed him warmly. "Of course! And you must join me for dinner."

As darkness fell, the jars were arranged in neat rows in the courtyard. To anyone watching, they were simply oil containers. But inside thirty-eight jars, armed thieves waited in cramped darkness, breathing through airholes in the lids.

At midnight, the captain would signal. The jars would open, the thieves would emerge, and everyone would be slaughtered.

A perfect plan. Nothing could go wrong.`,
      inlineAnnotations: [
        {
          id: 'oil-jars',
          text: 'oil jars',
          tooltip: {
            title: 'The Trojan Horse Parallel',
            content: 'The idea of hiding warriors in large containers echoes the Greek myth of the Trojan Horse. This motif appears in stories across many cultures, suggesting that the "hiding inside gift/cargo" trick is a universal narrative device that speaks to human fears about hidden dangers.',
            category: 'literary-context',
          },
        },
      ],
      learningPoints: [
        {
          id: 'lp-ch4-13',
          content: 'The Trojan Horse strategy of hiding warriors appears in many cultures\' stories.',
          category: 'literary-parallels',
        },
      ],
    },

    {
      id: 'scene-13-morgiana-discovers',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/25b5ea5e-687b-4f3f-b9b8-fcbc3b6f47d1/0_0.png',
      image: 'https://cdn.midjourney.com/f6b04c23-dd93-4a95-aef4-36e335b63661/0_0.png',
      content: `While Ali Baba dined with his guest, Morgiana worked in the kitchen. The oil merchant seemed pleasant, but something about him made her uneasy.

Later that evening, she ran out of oil for the lamp. She went to the courtyard, thinking she could borrow a small amount from the merchant's jars.

As she approached the first jar, she heard a whisper from inside: "Is it time, captain?"

Morgiana's blood froze. Someone was inside! Fighting down panic, she deepened her voice and whispered: "Not yet. Wait for my signal."

She moved from jar to jar. Each time, a whispered voice asked if it was time. Each time, she told them to wait.

Thirty-eight jars, each containing a hidden thief armed and waiting for midnight. Only the last jar contained actual oil.

Her mind raced. The "oil merchant" was keeping Ali Baba distracted while thirty-eight killers waited to emerge and slaughter the household.

She had an hour, perhaps less.

What could one servant woman do against thirty-eight trained killers?

The answer came in a flash. She looked at the jar that actually contained oil—a large quantity—and knew exactly what to do.`,
      learningPoints: [
        {
          id: 'lp-ch4-14',
          content: 'Morgiana\'s discovery happens by chance but her response shows remarkable presence of mind.',
          category: 'character-analysis',
        },
      ],
    },

    {
      id: 'scene-14-morgiana-decision',
      type: 'decision',
      backgroundImage: 'https://cdn.midjourney.com/25b5ea5e-687b-4f3f-b9b8-fcbc3b6f47d1/0_0.png',
      image: 'https://cdn.midjourney.com/102b5355-525d-46cb-b874-affff23bb91d/0_0.png',
      prompt: 'Morgiana has discovered the thieves hiding in the oil jars. What should she do?',
      context: 'Thirty-nine thieves are hiding in jars in the courtyard. The "oil merchant" (their captain) is inside the house. Morgiana must act quickly and quietly.',
      timeLimit: 30,
      choices: [
        {
          id: 'choice-wake-ali-baba',
          text: 'Alert Ali Baba during dinner',
          consequence: 'Morgiana considers this, but realizes any commotion would alert the captain and cause a battle. She needs a silent solution.',
        },
        {
          id: 'choice-boiling-oil',
          text: 'Boil oil and pour it into each jar',
          consequence: 'Morgiana heats the large kettle of oil until it boils, then quietly pours it into each jar, killing the hidden thieves without raising alarm.',
          learningPoints: [
            {
              id: 'lp-choice-decisive',
              content: 'Morgiana\'s decisive and ruthless action, while violent, saves her household from certain death.',
              category: 'thematic-analysis',
            },
          ],
        },
        {
          id: 'choice-seal-jars',
          text: 'Seal the jars to trap the thieves',
          consequence: 'Morgiana considers trapping them, but realizes they would break out. She needs a more permanent solution.',
        },
      ],
      learningPoints: [],
    },

    {
      id: 'scene-15-captain-escapes',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/25b5ea5e-687b-4f3f-b9b8-fcbc3b6f47d1/0_0.png',
      image: 'https://cdn.midjourney.com/102b5355-525d-46cb-b874-affff23bb91d/0_0.png',
      content: `Morgiana worked silently. She built up the kitchen fire, poured the oil from the one full jar into the largest kettle, and heated it until it boiled—hot enough to burn flesh instantly.

Moving quietly, she carried the kettle outside and poured boiling oil into each jar through the small airholes in the lids.

Brief, muffled cries—then silence.

All thirty-eight thieves were dead in their jars, killed without ever emerging. Morgiana returned to the kitchen, cleaned the kettle, and resumed her duties as if nothing had happened. She would tell Ali Baba in the morning.

Around midnight, the captain excused himself and went to the courtyard.

"It's time," he whispered at the first jar.

No response. He tried the next jar, then another. Every one contained a dead thief. The smell of boiled oil hung in the air.

Horror and rage fought within him. His entire band—dead! Someone had discovered the plot and acted with ruthless efficiency.

The captain looked toward the house. Should he attack alone? No. Whoever had done this was too dangerous, too clever.

He fled into the night, now the only survivor of what had once been forty thieves.

But as he disappeared, one thought burned in his mind: revenge.`,
      learningPoints: [
        {
          id: 'lp-ch4-15',
          content: 'The surviving antagonist ensures the story isn\'t over yet - building suspense.',
          category: 'narrative-structure',
        },
      ],
    },

    {
      id: 'scene-16a-aftermath',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/34492805-6a78-41a0-af4b-f6b3f5dde2df/0_0.png',
      content: `The morning after the merchant's disappearance, Ali Baba went to the courtyard and discovered what Morgiana had done. He stood in stunned silence, looking at the jars filled with dead thieves.

"Morgiana," he said quietly, "you have saved my life. Again."

"And I will continue to do so, master," she replied, "as long as danger threatens this house. The captain escaped. He will return."

"Then we must be vigilant," Ali Baba said.

He knew Morgiana was right. The captain was still alive, and as long as he lived, the household remained in danger.`,
      learningPoints: [
        {
          id: 'lp-ch4-16a',
          content: 'Ali Baba recognizes that Morgiana has become essential to the household\'s survival.',
          category: 'character-analysis',
        },
      ],
    },

    {
      id: 'scene-16b-merchant-disguise',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/34492805-6a78-41a0-af4b-f6b3f5dde2df/0_0.png',
      image: 'https://cdn.midjourney.com/620a4259-9d22-4af0-b804-8d1dab43de49/0_0.png',
      content: `Months passed. The captain of the thieves—now the last survivor—settled in the city under a new identity. He opened a small shop near the marketplace, posing as a respectable cloth merchant named Khwajah Houssain.

His shop happened to be next to one owned by Ali Baba's son, a young merchant learning his father's trade. The captain had positioned himself carefully.

Over weeks and months, "Khwajah Houssain" befriended Ali Baba's son. He was charming, generous, helpful with business advice. The young man grew to trust and like his neighbor.

"You must come to dinner at my father's house," Ali Baba's son said one day. "He would enjoy meeting you. You've been such a good friend to me."

The captain accepted with apparent reluctance. "I would not want to impose..."

"Nonsense! My father loves to meet fellow merchants. Please, come tomorrow evening."

The captain agreed, hiding his triumph. Finally, after months of patient work, he would enter Ali Baba's house. This time, he would carry a long dagger hidden in his robes. During the dinner, when the moment was right, he would strike Ali Baba down.

It was a simple plan. No elaborate schemes, no accomplices who might fail. Just one man, one knife, one perfect moment.

What could possibly go wrong?`,
      learningPoints: [
        {
          id: 'lp-ch4-16',
          content: 'The captain\'s patient long-game approach shows he has learned from his previous failures.',
          category: 'character-development',
        },
      ],
    },

    {
      id: 'scene-17a-dinner',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/34492805-6a78-41a0-af4b-f6b3f5dde2df/0_0.png',
      image: 'https://cdn.midjourney.com/620a4259-9d22-4af0-b804-8d1dab43de49/0_0.png',
      content: `The dinner was pleasant. Ali Baba found his son's merchant friend to be charming and intelligent. They discussed trade routes, market prices, and the challenges of honest commerce.

The captain played his role perfectly, eating and drinking with apparent enjoyment, while his hand occasionally touched the hidden dagger at his belt.

Morgiana, who had been serving the meal, had spent the entire evening studying the guest. Something about him seemed familiar. The way he moved, the way his eyes constantly assessed the room...

And then she saw it: a small scar on his hand, the distinctive mark she had noticed on the "oil merchant" months ago.

This was him. The captain of the thieves. The only survivor. He had come back, just as she'd warned Ali Baba he would.`,
      learningPoints: [
        {
          id: 'lp-ch4-17a',
          content: 'Morgiana\'s careful observation allows her to recognize the captain despite his disguise.',
          category: 'character-analysis',
        },
      ],
    },

    {
      id: 'scene-17b-dagger-dance',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/34492805-6a78-41a0-af4b-f6b3f5dde2df/0_0.png',
      image: 'https://cdn.midjourney.com/489dc34a-4ac9-4700-a3dc-ea5a5078e5f7/0_0.png',
      content: `After the meal, Ali Baba's son said, "Father, let us have some entertainment! Morgiana, would you dance for our guest?"

Morgiana's mind raced, but her face remained calm. "Of course, young master. I would be honored."

She left the room and returned wearing traditional dancing costume, with tiny bells on her ankles and wrists. In her hands, she carried two items: a tambourine and a long, jeweled dagger—a traditional prop for the dance of the dagger, a performance that told stories of ancient warriors.

The music began. Morgiana danced, moving with fluid grace, the bells chiming with each step. She twirled, leaped, swayed. The dagger flashed in the lamplight as she incorporated it into the dance, using it to mime an ancient battle.

The captain watched, transfixed despite himself. The servant girl danced beautifully. What a shame he would have to kill everyone in the household.

Morgiana danced closer, spinning, the dagger catching the light. She moved around the room, performing for each guest, coming closer to the captain with each circle.

And then, in one fluid motion—a motion that looked like just another element of the dance—Morgiana plunged the dagger deep into the captain's chest.

The captain gasped, clutching at the blade. He fell backward, dead before he hit the floor.

Ali Baba and his son leaped to their feet in horror. "Morgiana! What have you done? You've killed our guest!"`,
      inlineAnnotations: [
        {
          id: 'dagger-dance',
          text: 'dance of the dagger',
          tooltip: {
            title: 'The Most Dramatic Scene',
            content: 'The scene of Morgiana dancing with a dagger and killing the captain mid-performance is one of the most famous moments in all of Arabian Nights. It combines art, violence, and heroism in a way that has captivated audiences for centuries. The image of a woman using dance as cover for decisive action has been recreated in countless adaptations.',
            category: 'literary-context',
          },
        },
      ],
      learningPoints: [
        {
          id: 'lp-ch4-17',
          content: 'The dance of the dagger scene is one of the most dramatic moments in Arabian Nights.',
          category: 'literary-significance',
        },
        {
          id: 'lp-ch4-18',
          content: 'Morgiana uses art and culture (the dance) as cover for heroic action.',
          category: 'thematic-analysis',
        },
      ],
    },

    {
      id: 'scene-17c-dead-captain',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/34492805-6a78-41a0-af4b-f6b3f5dde2df/0_0.png',
      image: 'https://cdn.midjourney.com/edf9d48a-987d-475a-852c-45e5962b3ea5/0_0.png',
      content: `The captain of the forty thieves lay dead on the floor, his eyes staring at nothing. Blood pooled beneath him, staining the fine carpet. In his hand, he still clutched the dagger Morgiana had driven into his chest.

Ali Baba and his son stood frozen in shock. Their honored guest, killed in their own home. A man they had welcomed, fed, trusted.

Morgiana stood calmly, her dancing bells still jingling softly from her last movement. She looked down at the body without remorse.

"Master," she said quietly, "let me explain."`,
      learningPoints: [
        {
          id: 'lp-ch4-17c',
          content: 'The moment of stunned silence before explanation builds dramatic tension.',
          category: 'narrative-technique',
        },
      ],
    },

    {
      id: 'scene-18-final-decision',
      type: 'decision',
      backgroundImage: 'https://cdn.midjourney.com/34492805-6a78-41a0-af4b-f6b3f5dde2df/0_0.png',
      image: 'https://cdn.midjourney.com/6908ed4f-baf5-4baf-ae61-4f7ab938c4e9/0_0.png',
      prompt: 'Ali Baba is shocked that Morgiana killed his guest. How should she explain?',
      context: 'Ali Baba and his son are horrified that Morgiana stabbed their guest. She must reveal the truth.',
      timeLimit: 30,
      choices: [
        {
          id: 'choice-show-dagger',
          text: 'Show them the hidden dagger the "merchant" carried',
          consequence: 'Morgiana reveals the concealed weapon. Ali Baba realizes this was no innocent merchant but an assassin.',
          learningPoints: [
            {
              id: 'lp-choice-evidence',
              content: 'Physical evidence speaks louder than words in proving the truth.',
              category: 'narrative-technique',
            },
          ],
        },
        {
          id: 'choice-reveal-identity',
          text: 'Reveal that the merchant was the thieves\' captain',
          consequence: 'Morgiana explains how she recognized him despite his disguise. Ali Baba understands she has saved them once again.',
        },
        {
          id: 'choice-explain-plan',
          text: 'Explain the assassination plan she uncovered',
          consequence: 'Morgiana details how the "merchant" planned to kill Ali Baba after dinner. The family realizes her quick action saved them.',
        },
      ],
      learningPoints: [],
    },

    {
      id: 'scene-19-morgiana-reward',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/34492805-6a78-41a0-af4b-f6b3f5dde2df/0_0.png',
      image: 'https://cdn.midjourney.com/63415346-2734-4649-b1da-1f08c4e85a88/0_0.png',
      content: `When Ali Baba opened the captain's robe and saw the long dagger concealed there, he understood everything. He looked at Morgiana with wonder and gratitude.

"Three times," he said softly. "Three times you have saved my life and this household."

"It is my duty, master," Morgiana replied.

"No," Ali Baba said firmly. "It is far beyond any duty. You have shown courage, intelligence, and loyalty beyond anything I could have hoped for. A reward of gold would be an insult to what you have done."

He turned to his son. "You were about to marry a merchant's daughter, were you not? A match arranged for business purposes?"

His son nodded, confused.

"Break that arrangement," Ali Baba commanded. "Morgiana, I grant you your freedom. You are no longer a servant in this house. And I ask—I do not command, but ask—if you would consider marriage to my son. Not as a former slave, but as a free woman of remarkable character who has proven herself a thousand times over."

Ali Baba's son, who had witnessed Morgiana's bravery firsthand, stepped forward. "I would be honored," he said. "In truth, I have come to admire your courage and wit more than any other quality I might find in a bride."

Morgiana, who had spent her entire life as a servant, felt tears on her cheeks. "I accept," she said. "With gratitude and joy."

The wedding was celebrated with great ceremony. Morgiana entered Ali Baba's family not as a servant elevated, but as an honored member whose intelligence and bravery had saved them all.

And with the captain's death, the threat was finally ended. All forty thieves were gone. The secret of the cave was safe.`,
      learningPoints: [
        {
          id: 'lp-ch4-19',
          content: 'Morgiana\'s reward of freedom and marriage into the family represents social mobility through merit.',
          category: 'thematic-analysis',
        },
      ],
    },

    {
      id: 'scene-20a-family-legacy',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/1b00969e-16db-44a6-9f95-6d48a5c5bc7e/0_0.png',
      image: 'https://cdn.midjourney.com/b775a791-27ca-4f8f-a5de-6632f6f70cfa/0_0.png',
      content: `With the danger finally past, Ali Baba revealed the secret of the cave to his son and his new daughter-in-law Morgiana. The three of them went to the forest together, and Ali Baba spoke the magic words: "Open Sesame!"

The cave opened, revealing the treasure that still remained inside—for Ali Baba had taken only modest amounts over the years, never letting greed guide his hand.

"This wealth is now yours to share," Ali Baba said to the young couple. "But remember the lessons of this story. Cassim's greed killed him. The thieves' violence destroyed them. What saved us was moderation, loyalty, and cleverness."

"The treasure brought nothing but trouble to Cassim," Morgiana observed. "But it brought only good to you, master. The difference was not in the treasure, but in the character of the men who possessed it."

"Exactly," Ali Baba agreed. "Use this wealth wisely. Help the poor. Support honest merchants. Live well, but not ostentatiously. And most importantly, value intelligence and loyalty above gold."

The secret of the cave passed down through Ali Baba's family for generations. They lived in comfort and prosperity, always remembering to use their fortune for good.

And the story of clever Morgiana—the servant woman who outwitted forty thieves and saved an entire household through quick thinking and bravery—became one of the most beloved tales in all the city.`,
      learningPoints: [
        {
          id: 'lp-ch4-20',
          content: 'The story rewards loyalty, cleverness, and moderation while punishing greed.',
          category: 'thematic-analysis',
        },
        {
          id: 'lp-ch4-21',
          content: 'Morgiana, not Ali Baba, is the true hero - her quick thinking saves the day repeatedly.',
          category: 'character-analysis',
        },
      ],
    },

    {
      id: 'scene-20b-scheherazade-conclusion',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/1b00969e-16db-44a6-9f95-6d48a5c5bc7e/0_0.png',
      image: 'https://cdn.midjourney.com/6ef64337-c4eb-4c02-8a5f-3641f6d5ccd0/0_0.png',
      content: `"And so, my lord," Scheherazade said to the Sultan as dawn's first light appeared at the window, "we see that cleverness triumphs over force, and loyalty over greed. The real treasure was not the gold in the cave, but the character of those who knew how to use it wisely."

The Sultan nodded thoughtfully. "Morgiana reminds me of you, my dear wife. Both of you have saved lives through intelligence and courage."

Scheherazade smiled. "Perhaps that is why I chose to tell this tale tonight. But there are still more stories to share, my lord. Tomorrow night, shall I tell you of Sinbad the Sailor and his incredible voyages?"

"I look forward to it with great anticipation," the Sultan replied. "Your stories have taught me much about wisdom, justice, and the true nature of courage."

And so another night passed, another story was told, and the power of narrative continued its work of transformation and enlightenment.`,
      learningPoints: [
        {
          id: 'lp-ch4-22',
          content: 'The frame narrative connects Morgiana\'s heroism to Scheherazade\'s own courage and intelligence.',
          category: 'narrative-structure',
        },
      ],
      events: {
        onExit: [
          {
            type: 'quiz',
            componentId: 'quiz-chapter-4',
            condition: {
              type: 'if-not-completed',
            },
          },
        ],
      },
    },
  ],

  endQuiz: chapter4Quiz,
};

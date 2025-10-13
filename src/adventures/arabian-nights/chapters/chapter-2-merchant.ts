import type { Chapter } from '../../../types';
import { chapter2Quiz } from '../quizzes/chapter-2-quiz';

/**
 * Chapter 2: The Merchant and the Jinni
 *
 * This chapter explores the tale-within-a-tale structure and themes of
 * mercy, justice, and the power of storytelling.
 */
export const chapter2: Chapter = {
  id: 'chapter-2-merchant',
  title: 'The Merchant and the Jinni',
  description: 'A merchant accidentally kills a jinni\'s son and must face the consequences. Three mysterious sheikhs arrive to tell stories that may save his life.',

  prerequisites: {
    type: 'all',
    chapterIds: ['chapter-1-scheherazade']
  },

  learningObjectives: [
    'Understand the tale-within-a-tale narrative structure',
    'Explore themes of justice, mercy, and redemption',
    'Analyze how stories can be used as currency or bargaining tools',
    'Recognize the framing device used throughout Arabian Nights',
  ],

  scenes: [
    // Scene 1: Introduction & Frame Narrative
    {
      id: 'ch2-scene-1-introduction',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/21808ecf-81eb-41c8-8b95-b352c8fd3b42/0_0.png', // Chamber from Ch1
      image: 'https://cdn.midjourney.com/4ee996ce-918d-42fe-9a43-2af0532dd744/0_0.png', // Tale within tale
      content: `On the first night after her wedding to Sultan Shahryar, Scheherazade began the tale that would save her life - and many others.

"My lord," she said, "with your permission, I would tell you a story of a merchant who learned that even innocent actions can have terrible consequences, and how the power of storytelling itself became his salvation."

The sultan, curious despite his hardened heart, nodded for her to continue.

This is that story - a tale within the tale, a narrative nested inside another. As you will soon discover, this technique of stories within stories becomes one of the Arabian Nights' most distinctive features, creating layers of meaning like the intricate patterns in a Persian carpet.`,
      inlineAnnotations: [
        {
          id: 'persian-carpet',
          text: 'Persian carpet',
          tooltip: {
            title: 'Patterns Within Patterns',
            content: 'Persian carpets are famous for their intricate, layered geometric and floral patterns—each element interwoven with others to create a complex whole. The metaphor perfectly captures the story\'s nested narrative structure.',
            category: 'literary-context',
          },
        },
      ],
      learningPoints: [
        {
          id: 'lp-ch2-1',
          content: 'The tale-within-a-tale structure allows for multiple narrative layers, with stories nested inside other stories.',
          category: 'literary-technique',
        },
        {
          id: 'lp-ch2-2',
          content: 'Frame narratives were a common device in medieval literature to organize collections of stories.',
          category: 'literary-technique',
        },
      ],
    },

    // Scene 2: The Merchant's Journey
    {
      id: 'ch2-scene-2-merchant-journey',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/8514868b-c9dd-4c3d-a334-e62697245411/0_0.png', // Desert journey
      image: 'https://cdn.midjourney.com/3dd180e8-b1b6-4763-bb7f-2d91716efec8/0_0.png', // Merchant's journey
      content: `There once lived a wealthy merchant who traded in fine goods across the desert lands. He was known throughout the region as an honest man who always paid his debts and dealt fairly with everyone, from the poorest farmer to the richest prince.

One day, business called him to a distant city. He loaded his camel with trade goods and set out across the vast desert, traveling for many days under the scorching sun. The journey was long and arduous, but the merchant pressed on, eager to complete his business and return home to his family.

The desert was unforgiving - endless dunes of golden sand, shimmering heat, and precious little shade. But our merchant was experienced in such travels. He knew to carry water, to travel during the cooler hours, and to watch for the green promise of an oasis where he might rest.`,
      learningPoints: [
        {
          id: 'lp-ch2-3',
          content: 'Arabian Nights often begins tales by establishing the protagonist as virtuous to make their plight more sympathetic.',
          category: 'literary-technique',
        },
        {
          id: 'lp-ch2-4',
          content: 'The desert journey is a recurring motif in Middle Eastern literature, representing both danger and spiritual testing.',
          category: 'cultural-context',
        },
      ],
    },

    // Scene 3: The Accident at the Oasis
    {
      id: 'ch2-scene-3-accident',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/9c756cf0-70a8-4acc-b594-9dd7229b8666/0_0.png', // Oasis
      image: 'https://cdn.midjourney.com/2a8bb617-6796-4cab-b1dc-039b25bd7476/0_0.png', // Date pit
      content: `After several days of travel, the merchant spotted a welcome sight: a lush oasis with date palms clustered around a clear pool of water. Grateful for this respite, he dismounted and settled in the cool shade beneath the trees.

He drank deeply from the pool, then opened his provisions and began to eat. Among his food were fresh dates, sweet and delicious. He ate them one after another, enjoying the moment of peace. As he finished each date, he carelessly tossed the pits aside, thinking nothing of it.

But what the merchant did not know - what he could not have known - was that invisible beings live among us in the desert. The jinn, creatures of smokeless fire, walk paths we cannot see. And on that fateful day, at that exact moment, an invisible jinni's son was passing by. The date pit struck him directly in the eye, and he fell down dead.`,
      learningPoints: [
        {
          id: 'lp-ch2-5',
          content: 'Dramatic irony occurs when the audience knows something the character doesn\'t - here, we sense danger the merchant doesn\'t see.',
          category: 'literary-technique',
        },
        {
          id: 'lp-ch2-6',
          content: 'The theme of innocent actions having tragic consequences appears throughout Arabian Nights.',
          category: 'thematic-analysis',
        },
      ],
    },

    // Scene 4: The Jinni Appears
    {
      id: 'ch2-scene-4-jinni-appears',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/9c4f4c37-d4c9-40fd-8343-4223deb292be/0_0.png', // Jinni realm
      image: 'https://cdn.midjourney.com/7e695b64-080a-4f83-8480-be7eda25a32d/0_0.png', // Jinni appears
      content: `The merchant finished his meal and was preparing to continue his journey when suddenly the air before him shimmered and darkened. A massive figure materialized from smoke and flame - a jinni of terrifying aspect, towering above the palm trees, his eyes burning with rage and grief.

"Murderer!" the jinni roared, his voice like thunder. "You have killed my son, and now you must die!"

The merchant fell to his knees in terror. "My lord, I swear I have killed no one! I am but a simple merchant, traveling on my business!"

"Do you deny that you ate dates here and threw the pits aside?" demanded the jinni. "One of those pits struck my invisible son in the eye and killed him. I held his body in my arms as he died. By the laws of justice, blood demands blood. Your life is forfeit!"

The merchant's heart filled with horror and sorrow. He had killed an innocent being without ever knowing it. How could such a terrible thing have happened from such a simple, thoughtless act?`,
      inlineAnnotations: [
        {
          id: 'jinni-creatures',
          text: 'jinni',
          tooltip: {
            title: 'Beings of Smokeless Fire',
            content: 'In Islamic and Arabian folklore, jinn (genies) are intelligent beings created from smokeless fire, existing in a parallel world to humans. They can be good or evil, powerful or weak, and have their own societies and rules.',
            category: 'cultural-context',
          },
        },
      ],
      learningPoints: [
        {
          id: 'lp-ch2-7',
          content: 'Jinn (genies) in Islamic and Arabian folklore are supernatural beings made of smokeless fire, capable of both good and evil.',
          category: 'cultural-context',
        },
        {
          id: 'lp-ch2-8',
          content: 'The jinni\'s grief for his son makes him more than a simple villain - he becomes a tragic figure seeking justice.',
          category: 'character-analysis',
        },
      ],
    },

    // Scene 5: Merchant's Response (DECISION)
    {
      id: 'ch2-scene-5-merchant-choice',
      type: 'decision',
      backgroundImage: 'https://cdn.midjourney.com/9c4f4c37-d4c9-40fd-8343-4223deb292be/0_0.png', // Jinni realm
      prompt: 'How should the merchant respond to the jinni\'s accusation of murder?',
      context: 'The jinni towers before you, consumed by grief and rage. His invisible son was killed by your carelessly thrown date pit. He demands your life in exchange. What will you do?',
      timeLimit: 30,
      choices: [
        {
          id: 'choice-accept-fate',
          text: 'Accept your fate with dignity',
          consequence: 'The merchant bows his head, accepting responsibility for the accident. The jinni pauses, momentarily surprised by such honor in the face of death.',
          learningPoints: [
            {
              id: 'lp-ch2-9',
              content: 'Accepting responsibility with dignity can sometimes soften even the hardest hearts.',
              category: 'thematic-analysis',
            },
          ],
        },
        {
          id: 'choice-plead-accident',
          text: 'Plead that it was a tragic accident',
          consequence: 'The merchant explains desperately that he never knew, never intended harm. The jinni listens but his grief is too fresh, his anger too hot.',
        },
        {
          id: 'choice-offer-wealth',
          text: 'Offer all your wealth as compensation',
          consequence: 'The merchant offers everything he owns. The jinni sneers - material wealth means nothing to one from the spirit realm. Gold cannot replace a lost child.',
        },
        {
          id: 'choice-ask-time',
          text: 'Ask for time to settle your affairs and say goodbye',
          consequence: 'The merchant makes a bold request: grant me one year to settle my debts and bid farewell to my family. Then I will return to face judgment. The jinni considers this...',
          learningPoints: [
            {
              id: 'lp-ch2-10',
              content: 'The narrative delay device creates suspense while allowing for character development.',
              category: 'literary-technique',
            },
          ],
        },
      ],
      learningPoints: [],
    },

    // Scene 6: The Merchant's Plea for Time
    {
      id: 'ch2-scene-6-plea-for-time',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/9c756cf0-70a8-4acc-b594-9dd7229b8666/0_0.png', // Oasis
      image: 'https://cdn.midjourney.com/f9dfaa41-8471-4720-9965-98f584755c4b/0_0.png', // Merchant's plea
      content: `The merchant bowed his head, accepting the justice of the jinni's claim, even though his heart ached at the cruel fate. But then he raised his eyes and made a bold request.

"Mighty jinni," he said, "I do not deny what has happened, and I accept that I must pay for this tragedy. But I beg you - grant me one year to return to my home, settle my affairs, and say farewell to my family. I have debts to pay and obligations to fulfill. At the end of one year, I swear by all that is holy that I will return to this very spot to face your judgment."

The jinni studied the merchant with burning eyes. "And why should I trust the word of a human? You could flee to the ends of the earth."

"I am a merchant," replied the man simply. "My reputation is built on keeping my word. I have never broken a promise in my life, and I will not start now, even if it costs me everything."

Something in the merchant's voice - perhaps his unwavering honesty - moved the jinni. "Very well," he said at last. "You have one year. But know this: if you do not return, I will hunt you and everyone you love across the earth itself."

The merchant returned to his home and settled all his affairs. He paid every debt, fulfilled every obligation, and said his farewells to his weeping family. Though they begged him not to go, he reminded them that honor demanded he keep his word. When the year had passed, the merchant returned to the oasis, resigned to his fate.`,
      learningPoints: [
        {
          id: 'lp-ch2-11',
          content: 'The merchant\'s word of honor becomes a binding contract, showing the importance of promises in Arabian culture.',
          category: 'cultural-context',
        },
        {
          id: 'lp-ch2-12',
          content: 'The theme of keeping one\'s word even in the face of death demonstrates the highest virtue.',
          category: 'thematic-analysis',
        },
      ],
    },

    // Scene 7: The First Sheikh Arrives
    {
      id: 'ch2-scene-7-first-sheikh',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/244d3e68-7005-4d2c-a5b2-f5282f6885e0/0_0.png', // Ancient tree
      image: 'https://cdn.midjourney.com/c6a2bdd7-c78b-4957-98b4-9c88a9cc9581/0_0.png', // First sheikh
      content: `The merchant sat beneath the same date palm, waiting. As the sun climbed toward noon, he noticed a figure approaching - an elderly sheikh leading a beautiful gazelle on a chain of gold. The animal walked beside him with strange grace, almost human in its movements.

"Peace be upon you, traveler," said the sheikh. "But why do you sit alone in this desolate place?"

The merchant told his tale - the date pit, the jinni's son, the promise made and kept. The old sheikh listened with wonder.

"Your honor does you credit," said the sheikh. "I will wait with you, for I would see how this matter unfolds."

As the afternoon shadows lengthened, the air again grew dark. The jinni materialized before them in a pillar of smoke and flame, his sword drawn.

"You have kept your word, merchant," the jinni said. "That speaks well of your character, though it cannot save you. Prepare yourself."

But before the merchant could speak, the old sheikh stepped forward. "Mighty jinni, I have heard this man's story. I am moved by his honor in returning to face certain death. If I tell you a tale - and if you find it truly amazing - will you grant me one-third of this man's blood debt?"

The jinni paused, intrigued despite himself. "Very well, old man. Tell your tale. If it truly amazes me, I will grant your request."`,
      inlineAnnotations: [
        {
          id: 'sheikh-title',
          text: 'sheikh',
          tooltip: {
            title: 'Elder and Leader',
            content: 'Sheikh (SHAYK or SHEEK) literally means "elder" in Arabic. It\'s a term of respect for tribal leaders, religious scholars, or wise older men. These three sheikhs represent wisdom acquired through hardship.',
            category: 'cultural-context',
          },
        },
      ],
      learningPoints: [
        {
          id: 'lp-ch2-13',
          content: 'The arrival of witnesses creates an audience within the story, mirroring our own position as readers.',
          category: 'narrative-structure',
        },
        {
          id: 'lp-ch2-14',
          content: 'Each sheikh with an animal companion hints at transformation stories to come.',
          category: 'foreshadowing',
        },
      ],
    },

    // Scene 8: The Bargain & First Sheikh's Tale (DIALOGUE)
    {
      id: 'ch2-scene-8-first-tale',
      type: 'dialogue',
      backgroundImage: 'https://cdn.midjourney.com/244d3e68-7005-4d2c-a5b2-f5282f6885e0/0_0.png', // Ancient tree
      character: {
        id: 'first-sheikh',
        name: 'The First Sheikh',
        portrait: 'https://cdn.midjourney.com/c6a2bdd7-c78b-4957-98b4-9c88a9cc9581/0_0.png', // First sheikh portrait
        description: 'A mysterious old traveler with a beautiful gazelle who walks beside him like a companion rather than a beast',
      },
      dialogueTree: {
        id: 'node-1',
        speaker: 'first-sheikh',
        text: `Mighty jinni, I have witnessed your judgment. Before you execute this man, would you hear a tale? If my story amazes you, will you grant the merchant one-third of his blood debt?

The jinni, intrigued, agrees.

This gazelle you see beside me was once my wife - a woman of beauty and grace. But my brother's wife was a sorceress, consumed by jealousy of our happiness. One day, while I was away on business, she crept into our home and transformed my beloved wife into this gazelle you see before you.

When I returned and discovered what had happened, I was filled with rage. But my wife, even in her animal form, showed me such forgiveness and patience that my anger turned to grief, and my grief to determination. I have traveled the world seeking a way to break this curse, and though I have not yet succeeded, I have learned something far more valuable.

I learned that love endures beyond the body's form. That patience can outlast any curse. That holding onto those we care for, even when they are changed beyond recognition, is the truest form of devotion. My wife has remained beside me through all these years, a constant companion in her gazelle form, and I have never stopped seeking her restoration.

The jinni listens in silence, moved by the tale.`,
        responses: [
          {
            id: 'response-moved',
            text: 'A remarkable story of devotion and patience.',
            nextNodeId: 'node-end',
            learningPoints: [
              {
                id: 'lp-ch2-15a',
                content: 'The sheikh\'s story demonstrates that true love endures through transformation and hardship.',
                category: 'thematic-analysis',
              },
            ],
          },
          {
            id: 'response-understood',
            text: 'This teaches that compassion is stronger than vengeance.',
            nextNodeId: 'node-end',
          },
        ],
      },
      learningPoints: [
        {
          id: 'lp-ch2-15',
          content: 'Stories become currency - each amazing tale "purchases" a portion of the merchant\'s life.',
          category: 'thematic-analysis',
        },
        {
          id: 'lp-ch2-16',
          content: 'This deepens the tale-within-tale structure, creating three narrative layers: Scheherazade tells of the sheikh who tells of his gazelle.',
          category: 'literary-technique',
        },
      ],
    },

    // Scene 9: Second and Third Sheikhs Arrive
    {
      id: 'ch2-scene-9-other-sheikhs',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/244d3e68-7005-4d2c-a5b2-f5282f6885e0/0_0.png', // Ancient tree
      image: 'https://cdn.midjourney.com/10b6f7bc-5809-4397-a3ea-6823189d9af9/0_0.png', // Transformation
      content: `The first sheikh told his tale - how the beautiful gazelle was once his wife, transformed by jealous magic, and how he had searched for years to break the spell, learning wisdom and compassion along the way. The jinni listened, entranced, and when the tale was done, he declared: "This is indeed a wondrous story. I grant you one-third of the blood debt."

No sooner had he spoken than a second sheikh appeared, accompanied by two black dogs. Upon hearing of the situation, he too offered to tell his tale in exchange for another third of the merchant's life. His story was even more astonishing - the two black dogs were once his own brothers, transformed by a sorceress as punishment for their treachery against him. He had chosen to keep them with him rather than abandon them, teaching them loyalty through love rather than vengeance.

"Remarkable!" said the jinni. "Another third is forgiven."

Then a third sheikh arrived, leading a mule. This elderly man told how the mule was his unfaithful wife, transformed by a wise woman when her adultery was discovered. But rather than leave her to her fate, he had chosen to care for her, hoping that kindness might redeem what punishment could not.

Each story spoke of transformation - not just the magical changing of forms, but the transformation of hearts. Stories of jealousy overcome by patience, of betrayal answered with forgiveness, of justice tempered by mercy. The jinni sat silent, absorbing these tales, his rage slowly cooling like metal in water.`,
      learningPoints: [
        {
          id: 'lp-ch2-17',
          content: 'The three-fold pattern (three sheikhs, three stories) is a common structure in folklore worldwide.',
          category: 'literary-structure',
        },
        {
          id: 'lp-ch2-18',
          content: 'Each transformation story involves punishment for betrayal or wrongdoing, reinforcing moral lessons.',
          category: 'thematic-analysis',
        },
        {
          id: 'lp-ch2-19',
          content: 'The cumulative emotional effect of three tragic tales moves the jinni from vengeance to mercy.',
          category: 'narrative-technique',
        },
      ],
    },

    // Scene 10: Mercy and Release
    {
      id: 'ch2-scene-10-mercy',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/9c756cf0-70a8-4acc-b594-9dd7229b8666/0_0.png', // Oasis (dawn)
      image: 'https://cdn.midjourney.com/52cc5902-681b-4cea-8128-6781ba7782d5/0_0.png', // Mercy granted
      content: `The jinni stood and looked at the merchant with new eyes. "I came here burning with righteous anger," he said slowly. "My son was dead, and I demanded justice. But these three tales have shown me something I had forgotten in my grief."

He gestured to the three sheikhs. "Each of you suffered betrayal, loss, and pain. Each of you could have chosen vengeance. Yet you chose compassion instead. You taught me that true justice is not about inflicting equal pain, but about breaking the cycle of suffering."

The jinni turned to the merchant, who had listened to all three stories with tears streaming down his face. "You killed my son through no fault of your own. You could have fled, but you returned to honor your word. These three strangers offered their precious stories to save your life, though they owed you nothing. What kind of jinni would I be if I learned nothing from such examples?"

He raised his hand. "Go, merchant. All three sheikhs have paid your debt with their amazing tales. You are free. But remember this day, and remember that every action, no matter how small, can have consequences we never intended. Live wisely, and live well."

The merchant and the three sheikhs thanked the jinni and departed. The merchant returned home to his family, forever changed by what he had learned about justice, mercy, and the transformative power of stories.`,
      learningPoints: [
        {
          id: 'lp-ch2-20',
          content: 'The jinni\'s journey from vengeance to mercy parallels Sultan Shahryar\'s transformation in the frame story.',
          category: 'thematic-parallel',
        },
        {
          id: 'lp-ch2-21',
          content: 'Stories have the power to change perspectives and soften hearts - the central theme of Arabian Nights.',
          category: 'thematic-analysis',
        },
      ],
    },

    // Scene 11: Literary Analysis
    {
      id: 'ch2-scene-11-analysis',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/21808ecf-81eb-41c8-8b95-b352c8fd3b42/0_0.png', // Chamber
      image: 'https://cdn.midjourney.com/dc9ba1ee-ce67-414f-951a-a1cd5358112d/0_0.png', // Stories as currency
      content: `As Scheherazade's voice fell silent, dawn's first light crept through the latticed windows of the bedchamber. Sultan Shahryar sat motionless, still absorbed in the tale.

"This story," he said slowly, "contains other stories. Each sheikh told a tale within your tale. Like boxes nested within boxes."

"Yes, my lord," said Scheherazade. "This is one of the great pleasures of the Arabian Nights - stories reflecting other stories, each one casting new light on the others. The merchant's tale mirrors the sheikhs' tales, just as..." she paused delicately, "just as any story might mirror the listener's own life."

The sultan understood. The jinni, consumed by grief and rage, demanding vengeance. The merchant, innocent yet accepting his fate. The sheikhs, offering stories as payment for a life. Was this not like his own situation? A king hardened by pain, a clever woman using stories to teach wisdom, the hope that understanding could triumph over anger?

"The jinni learned mercy," the sultan said quietly. "The stories changed him."

"Stories have that power, my lord," Scheherazade replied. "They show us ourselves from new angles. They teach us that justice and vengeance are not always the same thing, and that every person's story deserves to be heard."`,
      learningPoints: [
        {
          id: 'lp-ch2-22',
          content: 'This story mirrors Scheherazade\'s own situation: using stories to delay death and ultimately transform her judge.',
          category: 'meta-narrative',
        },
        {
          id: 'lp-ch2-23',
          content: 'The frame narrative technique allows for exploration of storytelling itself as a theme.',
          category: 'literary-technique',
        },
      ],
    },

    // Scene 12: Conclusion & Quiz Trigger
    {
      id: 'ch2-scene-12-conclusion',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/ad46a552-f956-4c0d-b906-0194106486bb/0_0.png', // Starry night
      image: 'https://cdn.midjourney.com/4ee996ce-918d-42fe-9a43-2af0532dd744/0_0.png', // Tale within tale
      content: `The Merchant and the Jinni exemplifies everything that makes the Arabian Nights remarkable. It uses the tale-within-a-tale structure to create layers of meaning - Scheherazade tells us about the merchant, who hears from three sheikhs, each telling their own story. Each layer adds depth and wisdom, showing how stories connect us across time and circumstance.

At its heart, this tale explores the tension between justice and mercy. The jinni had every right to his anger - his son was dead. The merchant was truly innocent - he never meant harm. Yet both were trapped by circumstance until stories intervened. The three sheikhs' tales didn't just buy the merchant's life; they transformed the jinni's understanding. Stories literally saved a life, just as Scheherazade's stories were saving her own.

This is the power the Arabian Nights has wielded for centuries: the ability to show us that every person has a story, that empathy can overcome rage, and that the simple act of listening - truly listening - can change everything. Now, let's see how well you've understood the layers and lessons of this remarkable tale.`,
      learningPoints: [
        {
          id: 'lp-ch2-24',
          content: 'The Merchant and the Jinni exemplifies how Arabian Nights uses nested narratives to create rich, layered storytelling.',
          category: 'literary-structure',
        },
        {
          id: 'lp-ch2-25',
          content: 'The power of empathy and multiple perspectives to transform judgment into mercy is the story\'s ultimate lesson.',
          category: 'thematic-analysis',
        },
      ],
      events: {
        onExit: [
          {
            type: 'quiz',
            componentId: 'quiz-chapter-2',
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

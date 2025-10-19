import type { Chapter } from '../../../types';
import { chapter1Quiz } from '../quizzes/chapter-1-quiz';

export const chapter1: Chapter = {
  id: 'don-quixote-chapter-1',
  title: 'Chapter 1: The Knight Errant',
  description: 'Meet Alonso Quixano, a country gentleman whose obsession with chivalric romances transforms him into the self-proclaimed knight Don Quixote de la Mancha.',

  learningObjectives: [
    'Identify the characteristics of chivalric romances and how Don Quixote embodies/parodies them',
    'Understand how excessive reading shapes Don Quixote\'s perception of reality',
    'Recognize the social context of 17th century Spain',
    'Analyze the humorous elements in Cervantes\' satirical approach',
  ],

  scenes: [
    // Scene 0: Introduction to Cervantes and Don Quixote
    {
      id: 'dq-ch1-s0-cervantes-intro',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/de3303cb-934d-4f7c-a977-05d2969b446b/0_0.png',

      content: `Welcome to one of the most influential novels ever written. Published in 1605 by **Miguel de Cervantes**, *Don Quixote* is often called the **first modern novel** and has shaped literature for over 400 years.

## Who was Miguel de Cervantes?

Cervantes (1547-1616) lived a remarkable and difficult life. He fought in the **Battle of Lepanto** where he lost the use of his left hand, was captured by pirates and enslaved for five years in Algeria, and spent time in debtor's prison. He wrote *Don Quixote* when he was nearly sixty—a struggling author trying to make ends meet.

## What made this book revolutionary?

At the time, chivalric romances dominated popular literature—fantastical tales of perfect knights fighting dragons and rescuing maidens. These books were wildly popular but completely unrealistic. Cervantes set out to parody and critique them by creating a character who *believes* these fantasies are real.

What started as literary satire became something much deeper: an exploration of **idealism versus reality**, **madness versus sanity**, and the power of stories to shape our lives.

## Why does it matter today?

*Don Quixote* invented many techniques modern novels take for granted:
- Realistic characters with psychological depth
- Meta-fictional commentary
- Unreliable narration
- The mixing of high and low culture

It asks timeless questions: *Is it better to see the world as it is, or as it should be? What happens when our dreams clash with reality?*

Now, let's meet the man who would become Don Quixote...`,

      inlineAnnotations: [
        {
          id: 'dq-ann-cervantes',
          text: 'Miguel de Cervantes',
          tooltip: {
            title: 'Miguel de Cervantes (1547-1616)',
            content: 'Spanish author, soldier, and tax collector. Despite his difficult life and financial struggles, he created one of world literature\'s masterpieces. His full name was Miguel de Cervantes Saavedra.',
            category: 'historical-context',
          },
        },
        {
          id: 'dq-ann-battle-lepanto',
          text: 'Battle of Lepanto',
          tooltip: {
            title: 'Battle of Lepanto (1571)',
            content: 'A major naval battle where Christian forces defeated the Ottoman Empire. Cervantes fought bravely and was severely wounded, losing the use of his left hand—earning him the nickname "El Manco de Lepanto" (The One-Armed Man of Lepanto).',
            category: 'historical-context',
          },
        },
        {
          id: 'dq-ann-modern-novel',
          text: 'first modern novel',
          tooltip: {
            title: 'The First Modern Novel',
            content: 'Many scholars consider Don Quixote the first modern novel because it featured realistic characters with psychological depth, metafictional elements, and a focus on individual experience—innovations that defined the novel form.',
            category: 'literary-context',
          },
        },
      ],

      learningPoints: [
        {
          id: 'dq-lp-ch1-s0-cervantes-context',
          content: 'Cervantes wrote from personal experience with hardship and disillusionment, which gives Don Quixote its complex view of idealism and reality.',
          category: 'historical-context',
        },
        {
          id: 'dq-lp-ch1-s0-literary-innovation',
          content: 'Don Quixote pioneered many techniques now standard in novels: psychological realism, unreliable narration, and mixing comedy with serious themes.',
          category: 'literary-context',
        },
        {
          id: 'dq-lp-ch1-s0-timeless-themes',
          content: 'The novel\'s central question—whether to embrace reality or pursue ideals—remains relevant across centuries and cultures.',
          category: 'thematic-analysis',
        },
      ],
    },

    // Scene 1: Introduction to Alonso Quixano
    {
      id: 'dq-ch1-s1-introduction',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/de3303cb-934d-4f7c-a977-05d2969b446b/0_0.png',

      content: `In a village of La Mancha, the name of which I care not to remember, there lived a country gentleman in his fifties named Alonso Quixano.

His family consisted of a housekeeper past forty, a niece not yet twenty, and a man who served him both in the field and at home. But none of these people mattered as much to him as his one true passion: books.

Not just any books—chivalric romances. Tales of noble knights, fire-breathing dragons, enchanted castles, and damsels in distress. He read them day and night, neglecting his estate and even selling acres of farmland just to buy more volumes for his collection.`,

      learningPoints: [
        {
          id: 'dq-lp-ch1-s1-setting',
          content: 'The deliberate vagueness about the setting ("a village...whose name I care not to remember") suggests this story could happen anywhere—making the satire universal rather than specific.',
          category: 'literary-technique',
        },
        {
          id: 'dq-lp-ch1-s1-obsession',
          content: 'Alonso Quixano\'s obsessive reading parallels modern concerns about media consumption overwhelming reality—a timeless theme.',
          category: 'thematic-analysis',
        },
      ],
    },

    // Scene 2: Primary Source - Chivalric Romances
    {
      id: 'dq-ch1-s2-primary-source',
      type: 'primary-source',
      backgroundImage: 'https://cdn.midjourney.com/c9e02f4a-9d62-4212-8b0b-7e9dfca8b16b/0_0.png',

      prompt: 'What techniques does Cervantes use to parody chivalric romances?',

      source: {
        title: 'Chivalric Romances vs. Don Quixote',
        author: 'Miguel de Cervantes',
        date: '1605',
        type: 'text',
        content: `**Typical Chivalric Romance:**
<br /><br />
"The valiant knight Sir Amadis, clad in shining armor of purest silver, mounted his noble steed Excalibur. With lance in hand and heart aflame with righteous purpose, he charged toward the terrible dragon that threatened the kingdom. The beast, scales gleaming like emeralds, breathed fire upon him, but the knight's enchanted shield turned aside the flames..."
<br /><br />
**Cervantes' Parody (Don Quixote):**
<br /><br />
"Don Quixote, armed in rusty pieces of ancient armor that hadn't been used in generations, mounted Rocinante—a skinny old workhorse with a dull coat and protruding ribs. With a lance made from a broken broomstick and his head filled with impossible dreams, he rode forth seeking adventures in the dusty plains of La Mancha, where the only 'dragons' were windmills and the only 'castles' were wayside inns..."
<br /><br />
**Key Differences:**<br />
- **Knight:** Noble vs. Delusional<br />
- **Horse:** Magnificent vs. Decrepit<br />
- **Equipment:** Enchanted vs. Rusty<br />
- **Enemies:** Fantastic vs. Mundane<br />
- **Setting:** Magical kingdoms vs. Rural Spain`,
        citation: 'Comparison of actual chivalric romance conventions with Cervantes\' parody',
      },

      questions: [
        {
          id: 'dq-ch1-s2-q1',
          question: 'What is Cervantes\' main technique for creating parody in Don Quixote?',
          type: 'multiple-choice',
          options: [
            'He uses elevated, chivalric language to describe pathetic, mundane reality—rusty armor instead of shining silver, a decrepit horse instead of a noble steed',
            'He completely abandons the structure of chivalric romances and invents an entirely new literary form',
            'He makes Don Quixote successful in all his adventures to show that chivalry still works in the modern world',
            'He writes in simple, plain language that directly criticizes knights and their foolish behavior',
          ],
          correctAnswer: 'He uses elevated, chivalric language to describe pathetic, mundane reality—rusty armor instead of shining silver, a decrepit horse instead of a noble steed',
          explanation: 'Cervantes creates parody by maintaining the elevated style and structure of chivalric romances while completely subverting the content. He describes rusty armor, skinny horses, and windmills using the same grandiose language that chivalric romances used for shining knights and dragons. This contrast between the elevated language and the humble reality creates both humor and sharp social commentary about those who confuse fiction with real life.',
        },
      ],

      learningPoints: [
        {
          id: 'dq-lp-ch1-s2-parody',
          content: 'Parody works by imitating the style of something while subverting its content—Cervantes uses chivalric language to describe decidedly un-chivalric reality.',
          category: 'literary-technique',
        },
        {
          id: 'dq-lp-ch1-s2-satire',
          content: 'Satire uses humor and exaggeration to critique society—here, Cervantes mocks both unrealistic literature and those who confuse fiction with reality.',
          category: 'literary-technique',
        },
      ],
    },

    // Scene 3: Transformation
    {
      id: 'dq-ch1-s3-transformation',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/3f8c6c57-2a76-4365-9e57-8dc5bf2a73d8/0_0.png',
      image: 'https://cdn.midjourney.com/7e57124c-123e-4b48-bfaf-148788aa2c0a/0_0.png',

      content: `One hot summer day, after reading for nearly an entire week with barely any sleep, Alonso Quixano's mind finally snapped.

"I understand now!" he cried out to his empty library. "The world needs knights errant again! Evil runs rampant, the weak go undefended, and giants terrorize the land!"

His niece and housekeeper exchanged worried glances. What giants? What evil? They lived in a peaceful Spanish village where the most exciting thing that happened was the harvest festival.

But Alonso was no longer listening to reality. He had decided to become a knight.`,

      inlineAnnotations: [
        {
          id: 'dq-ann-knights-errant',
          text: 'knights errant',
          tooltip: {
            title: 'Knights Errant',
            content: 'Wandering knights who traveled seeking adventures and helping those in need. By the 1600s, they were obsolete—gunpowder and changing politics had ended the age of chivalry centuries earlier.',
            category: 'historical-context',
          },
        },
      ],

      learningPoints: [
        {
          id: 'dq-lp-ch1-s3-madness',
          content: 'Don Quixote\'s "madness" is systematic and logical within his delusion—he genuinely believes the rules of chivalric romances apply to real life.',
          category: 'character-analysis',
        },
        {
          id: 'dq-lp-ch1-s3-context',
          content: 'By 1605, knights were anachronistic—Cervantes emphasizes how Don Quixote is trying to revive a dead past in a world that has moved on.',
          category: 'historical-context',
        },
      ],
    },

    // Scene 4: Decision - Choose Your Path
    {
      id: 'dq-ch1-s4-decision',
      type: 'decision',
      backgroundImage: 'https://cdn.midjourney.com/9c55041e-6cc7-48b5-9b99-911b3d9e5591/0_0.png',

      prompt: 'Don Quixote needs a name, a horse, and a lady. Which should he consider first?',
      context: `Alonso knew that every knight needed three things: a noble name, a worthy steed, and a lady to whom he could dedicate his deeds.

He spent four days contemplating what he should call himself, trying hundreds of combinations until he settled on "Don Quixote de la Mancha"—a name he thought sounded suitably impressive and knightly.

Next came his horse. The old workhorse had been in his stable for years, skinny and worn-out. But through Don Quixote's eyes, he became "Rocinante"—a name that suggested a great war-horse, though the reality was far different.

Finally, he needed a lady. Every knight needed a noble lady to serve and adore. He fixed his thoughts on a peasant girl from a nearby village, Aldonza Lorenzo, whom he had perhaps seen a few times. In his mind, she became "Dulcinea del Toboso"—the most beautiful and virtuous lady in all the world.`,

      choices: [
        {
          id: 'dq-choice-name-first',
          text: 'His name—identity is everything for a knight',
          consequence: 'Don Quixote nods approvingly at your wisdom. "Indeed! A knight without a proper name is no knight at all. The name carries the weight of honor and legacy!"',
          learningPoints: [
            {
              id: 'dq-lp-ch1-s4-naming',
              content: 'Self-naming is an act of self-creation—Don Quixote literally reinvents himself through language, showing the power of narrative to shape identity.',
              category: 'thematic-analysis',
            },
          ],
        },
        {
          id: 'dq-choice-horse-first',
          text: 'His horse—a knight needs transportation',
          consequence: 'Don Quixote strokes Rocinante\'s mane. "Practical wisdom! A knight and his steed are one. Without a noble horse, how can one ride forth to adventure?"',
          learningPoints: [
            {
              id: 'dq-lp-ch1-s4-rocinante',
              content: 'Rocinante\'s name is a joke in Spanish—"rocín" means "workhorse" and "ante" means "before," suggesting it was a workhorse before but is now something greater (though it clearly isn\'t).',
              category: 'literary-technique',
            },
          ],
        },
        {
          id: 'dq-choice-lady-first',
          text: 'His lady—a knight serves love above all',
          consequence: 'Don Quixote gazes into the distance romantically. "Ah, you understand the courtly ideal! A knight without a lady to inspire him is merely a wandering soldier. Love elevates us to greatness!"',
          learningPoints: [
            {
              id: 'dq-lp-ch1-s4-dulcinea',
              content: 'Dulcinea exists only in Don Quixote\'s imagination—the real Aldonza doesn\'t know he exists, highlighting how idealization requires ignoring reality.',
              category: 'thematic-analysis',
            },
          ],
        },
      ],

      learningPoints: [],
    },

    // Scene 5: The Inn as Castle
    {
      id: 'dq-ch1-s5-inn',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/baf42c50-35a6-4799-82ad-d3fb0421d088/0_0.png',

      content: `Fully equipped and properly named, Don Quixote set out on his first adventure. He rode all day under the blazing Spanish sun, Rocinante moving at a plodding walk.

As evening approached, he spotted a simple roadside inn and his heart leapt with joy. Through his transformed vision, the humble building became a magnificent castle with four towers, complete with silver turrets, a drawbridge, and a deep moat.

He rode up to the "castle," and two young women standing outside (in reality, hired help at the inn) became noble ladies enjoying the evening air. When they saw the strange figure in rusty armor approaching, they retreated inside in fear.

"Fear not, fair maidens!" Don Quixote called out. "I am a knight errant who means you no harm!"`,

      inlineAnnotations: [
        {
          id: 'dq-ann-inn',
          text: 'roadside inn',
          tooltip: {
            title: 'Spanish Inns',
            content: 'Ventas (inns) in rural Spain were basic establishments offering food, drink, and shelter to travelers. They were decidedly unglamorous—the opposite of the castles Don Quixote imagines.',
            category: 'historical-context',
          },
        },
      ],

      learningPoints: [
        {
          id: 'dq-lp-ch1-s5-perception',
          content: 'Don Quixote\'s delusion is systematic—he sees reality through the lens of chivalric romance, transforming everything to match his expectations.',
          category: 'character-analysis',
        },
        {
          id: 'dq-lp-ch1-s5-humor',
          content: 'Much of the novel\'s humor comes from the contrast between Don Quixote\'s grandiose language and the mundane reality others see.',
          category: 'literary-technique',
        },
      ],
    },

    // Scene 6: Dialogue with the Innkeeper
    {
      id: 'dq-ch1-s6-dialogue',
      type: 'dialogue',
      backgroundImage: 'https://cdn.midjourney.com/39b0d6d4-acf9-4a77-9fea-f522b32b8cb8/0_0.png',

      character: {
        id: 'innkeeper',
        name: 'The Innkeeper',
        portrait: 'https://cdn.midjourney.com/d821b8aa-c342-40c7-a985-79bde1daec58/0_0.png',
        description: 'A practical man who humors Don Quixote\'s delusions',
      },

      dialogueTree: {
        id: 'node-1',
        speaker: 'innkeeper',
        text: 'Welcome to my... er, castle, good sir. You look weary from your travels. Can I offer you food and a bed for the night?',

        responses: [
          {
            id: 'response-castle',
            text: 'Thank you, lord of this castle! I seek only what any knight errant requires.',
            nextNodeId: 'node-2',
          },
          {
            id: 'response-dubbing',
            text: 'I require dubbing as a knight! Are you qualified to perform the ceremony?',
            nextNodeId: 'node-3',
          },
        ],

        allNodes: [
          {
            id: 'node-2',
            speaker: 'innkeeper',
            text: 'Of course, of course. Though I must say, your armor looks... well-used. Have you been in many battles?',
            responses: [
              {
                id: 'response-battles',
                text: 'Not yet, but I shall right wrongs throughout the land!',
                nextNodeId: 'node-4',
              },
            ],
          },
          {
            id: 'node-3',
            speaker: 'innkeeper',
            text: 'Dubbing? A knight? Well... I suppose I could help with that. Though I\'ve never dubbed anyone before, mind you.',
            responses: [
              {
                id: 'response-ceremony',
                text: 'Excellent! Every knight must be properly dubbed before undertaking adventures.',
                nextNodeId: 'node-4',
              },
            ],
          },
          {
            id: 'node-4',
            speaker: 'innkeeper',
            text: 'You know what? I like you. You\'re strange, but harmless. I\'ll play along—it\'s been a dull week anyway. Let\'s give you your dubbing ceremony!',
            isEnd: true,
          },
        ],
      },

      learningPoints: [
        {
          id: 'dq-lp-ch1-s6-innkeeper',
          content: 'The innkeeper represents the practical world—he sees Don Quixote\'s madness but chooses to humor him rather than confront him, finding entertainment in the situation.',
          category: 'character-analysis',
        },
        {
          id: 'dq-lp-ch1-s6-comedy',
          content: 'Comic irony occurs when the audience knows more than the character—we see the innkeeper playing along while Don Quixote believes it\'s all genuine.',
          category: 'literary-technique',
        },
      ],
    },

    // Scene 7: Anachronism Game
    {
      id: 'dq-ch1-s7-anachronism',
      type: 'anachronism',
      backgroundImage: 'https://cdn.midjourney.com/5b0bbbef-d394-44ef-88d1-56769c486dcd/0_0.png',

      prompt: 'Don Quixote imagines himself in a medieval chivalric world. Which items DON\'T belong in his romanticized fantasy of knights and castles?',
      scenario: 'The world as Don Quixote sees it: a grand castle preparing for a knighting ceremony straight from the chivalric romances he\'s read',

      items: [
        {
          id: 'item-lance',
          name: 'Knight\'s lance',
          image: 'https://cdn.midjourney.com/58fae416-6d28-4711-881e-2dcd458fc67b/0_0.png',
          description: 'A traditional knight\'s weapon',
          explanation: 'Lances were standard equipment for knights. This belongs in Don Quixote\'s chivalric vision (even though his own lance is broken and makeshift).',
        },
        {
          id: 'item-musket',
          name: 'Musket',
          image: 'https://cdn.midjourney.com/e8713343-1ae8-475f-94a8-814176b619b4/0_0.png',
          description: 'A firearm typical of 17th-century Spain',
          explanation: 'Firearms like muskets were the very reason knights became obsolete! They don\'t belong in chivalric romances. Don Quixote refuses to acknowledge this modern reality.',
        },
        {
          id: 'item-armor',
          name: 'Suit of armor',
          image: 'https://cdn.midjourney.com/31a98a52-afa1-4f69-a390-648a8304dcc7/0_0.png',
          description: 'Medieval knight\'s protective gear',
          explanation: 'Armor is appropriate for knights, even though Don Quixote\'s is rusty and outdated. It fits his fantasy of chivalric life.',
        },
        {
          id: 'item-modern-clothes',
          name: 'Contemporary Spanish clothing',
          image: 'https://cdn.midjourney.com/6ae5c224-2e60-4e82-b0c2-efe7befc4090/0_0.png',
          description: '17th-century peasant and traveler attire',
          explanation: 'The people at the inn wear 17th-century Spanish clothing, not medieval courtly attire. Don Quixote sees noble ladies and lords, but they\'re actually peasants and travelers.',
        },
        {
          id: 'item-horse',
          name: 'Horse',
          image: 'https://cdn.midjourney.com/c69bfda5-08da-4980-aad2-05a7c4afcdbd/0_0.png',
          description: 'A horse used for transportation',
          explanation: 'Knights always had horses. Although Rocinante is a decrepit workhorse, horses themselves belong in medieval chivalric settings.',
        },
        {
          id: 'item-wooden-stick',
          name: 'Wooden stick for dubbing',
          image: 'https://cdn.midjourney.com/ddc2d85a-8425-4a33-a54f-6a6647e6c3fa/0_0.png',
          description: 'A random stick being used in the ceremony',
          explanation: 'Real knighthood ceremonies used actual swords held by actual nobles. The innkeeper is using a random stick, which is completely improper—but Don Quixote doesn\'t notice.',
        },
      ],

      correctAnswers: ['item-musket', 'item-wooden-stick', 'item-modern-clothes'],

      learningPoints: [
        {
          id: 'dq-lp-ch1-s7-anachronism',
          content: 'Don Quixote lives in a world that has moved on from knighthood—firearms, modern clothes, and practical reality surround him, but he refuses to see them.',
          category: 'thematic-analysis',
        },
        {
          id: 'dq-lp-ch1-s7-obsolete',
          content: 'The novel\'s satire targets the growing gap between romantic literary ideals and the harsh, modernizing reality of 17th-century Spain.',
          category: 'historical-context',
        },
      ],
    },

    // Scene 8: The Dubbing Ceremony
    {
      id: 'dq-ch1-s8-dubbing',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/5b0bbbef-d394-44ef-88d1-56769c486dcd/0_0.png',
      image: 'https://cdn.midjourney.com/f699872a-8228-46c0-8035-566b9b3d376d/0_0.png',

      content: `That night, in the courtyard of the inn, the "dubbing ceremony" took place.

Don Quixote knelt before the innkeeper with solemn reverence. The innkeeper, barely suppressing his laughter, picked up a stick and tapped Don Quixote on the shoulder while mumbling something that sounded vaguely ceremonial.

The other guests watched with a mixture of amusement and pity. Some of them mocked the strange old man openly, but Don Quixote heard none of it. In his mind, he was being knighted by a great lord in a magnificent castle, just like in his beloved books.

"Arise, Sir Don Quixote de la Mancha!" the innkeeper declared. "Go forth and perform great deeds!"

Don Quixote stood, his eyes shining with joy and purpose. He was now, in his own mind at least, a true knight errant.`,

      learningPoints: [
        {
          id: 'dq-lp-ch1-s8-ceremony',
          content: 'The mock dubbing ceremony is both comic and tragic—it shows how completely Don Quixote has separated from reality while others profit from his delusion.',
          category: 'thematic-analysis',
        },
        {
          id: 'dq-lp-ch1-s8-belief',
          content: 'Self-delusion requires constant effort to maintain—Don Quixote must actively ignore the mockery around him to sustain his chivalric fantasy.',
          category: 'character-analysis',
        },
      ],
    },

    // Scene 9: Decision - The Merchants
    {
      id: 'dq-ch1-s9-merchants',
      type: 'decision',
      backgroundImage: 'https://cdn.midjourney.com/83589279-2db2-4bd2-a507-9fa080ed5028/0_0.png',

      prompt: 'How should Don Quixote respond to those who question Dulcinea\'s beauty?',
      context: `The next morning, Don Quixote rode out seeking his first real adventure. He soon encountered a group of merchants traveling to the city to sell their goods.

"Halt!" Don Quixote commanded, blocking their path with Rocinante. "None shall pass until you acknowledge that the most beautiful lady in the world is Dulcinea del Toboso!"

The merchants looked at each other in confusion. "Sir," one said carefully, "we've never seen this lady. How can we swear she's the most beautiful if we don't know what she looks like?"

Don Quixote's face reddened with anger. How dare they question Dulcinea's beauty! This was a grave insult that demanded satisfaction!`,

      choices: [
        {
          id: 'dq-choice-show-portrait',
          text: 'Insist they should believe without seeing—faith is what matters',
          consequence: 'Don Quixote declares fiercely, "The very point is that you must believe without seeing! That is true faith!" The merchants laugh at this absurd logic. Enraged beyond reason, Don Quixote charges at them—but Rocinante stumbles on the uneven road. Don Quixote crashes to the ground in a clatter of rusty armor. One of the merchant\'s servants, seeing him helpless, beats him with his own broken lance before they continue their journey, leaving the "knight" bruised and humiliated in the dust.',
          learningPoints: [
            {
              id: 'dq-lp-ch1-s9-faith',
              content: 'Don Quixote\'s insistence on faith without evidence mirrors his entire worldview—he demands others accept his reality without proof.',
              category: 'character-analysis',
            },
          ],
        },
        {
          id: 'dq-choice-attack',
          text: 'Attack them immediately for their insult to Dulcinea',
          consequence: 'Don Quixote charges at them recklessly! But Rocinante stumbles on the uneven road, and Don Quixote crashes to the ground in a clatter of rusty armor. One of the merchant\'s servants, seeing him helpless, beats him with his own broken lance before they continue their journey, leaving the "knight" bruised and humiliated in the dust.',
          learningPoints: [
            {
              id: 'dq-lp-ch1-s9-consequences',
              content: 'Don Quixote\'s first "adventure" ends in humiliation—reality doesn\'t care about chivalric ideals, and violence has real consequences.',
              category: 'thematic-analysis',
            },
          ],
        },
        {
          id: 'dq-choice-describe',
          text: 'Describe Dulcinea\'s beauty in elaborate detail',
          consequence: 'Don Quixote launches into elaborate poetry about Dulcinea\'s golden hair, her pearl-like teeth, her ruby lips... but the merchants quickly realize he\'s describing someone he\'s never actually spoken to. They laugh mockingly and begin to ride away. Unable to bear the insult, Don Quixote charges after them—but Rocinante stumbles on the uneven road. Don Quixote crashes to the ground in a clatter of rusty armor. One of the merchant\'s servants, seeing him helpless, beats him with his own broken lance before they continue their journey, leaving the "knight" bruised and humiliated in the dust.',
          learningPoints: [
            {
              id: 'dq-lp-ch1-s9-idealization',
              content: 'Don Quixote describes a fantasy version of Aldonza using conventional romance language—his "love" is for an idea, not a person.',
              category: 'literary-technique',
            },
          ],
        },
      ],

      learningPoints: [],
    },

    // Scene 10: Returning Home
    {
      id: 'dq-ch1-s10-return',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/e4d9b94c-27ff-457c-8115-3989c8af2a8a/0_0.png',

      content: `Bruised and beaten by the merchants, Don Quixote lay in the dust of the road. A neighboring farmer, recognizing him despite his armor and delusions, loaded him onto a donkey and brought him back home to his village.

His niece and housekeeper were horrified at his condition. While he rested in bed, recovering from his injuries, they gathered all his chivalric romance books and burned them in the courtyard. They even walled up the library door, hoping to end his obsession.

But Don Quixote, waking to find his precious books gone, simply incorporated this into his delusion. "An enchanter has spirited away my library!" he declared. "This proves that magical forces are at work in the world—just as the books described!"

## The First Sally Ends

Don Quixote's first adventure had been a disaster by any practical measure. He had been mocked, beaten, and returned home in disgrace. His treasured books were destroyed, and he had no actual achievements to show for his troubles.

And yet, in his own mind, he had been dubbed a knight, faced down enemies, and defended his lady's honor. The gap between his perception and reality had never been greater—but neither had his conviction that he was right.

His family hoped this misadventure would cure him of his delusions. They could not have been more wrong. Don Quixote's first journey had only convinced him that the world desperately needed a knight errant.

What he needed now was a squire...`,

      learningPoints: [
        {
          id: 'dq-lp-ch1-s10-cycle',
          content: 'Don Quixote\'s ability to reinterpret every failure as confirmation of his worldview shows how resistant delusions are to contradictory evidence—a pattern that continues throughout the novel.',
          category: 'character-analysis',
        },
        {
          id: 'dq-lp-ch1-s10-structure',
          content: 'Cervantes structures the novel in "sallies" (journeys out and back)—Don Quixote returns home defeated, only to sally forth again with renewed determination, creating a tragicomic cycle.',
          category: 'literary-technique',
        },
        {
          id: 'dq-lp-ch1-s10-foreshadow',
          content: 'The introduction of Sancho Panza (squire) in the next chapter creates the novel\'s central dynamic: idealistic Don Quixote versus practical Sancho, philosophy versus common sense.',
          category: 'thematic-analysis',
        },
      ],

      events: {
        onExit: [
          {
            type: 'quiz',
            componentId: 'quiz-don-quixote-chapter-1',
            condition: { type: 'if-not-completed' },
          },
        ],
      },
    },
  ],

  endQuiz: chapter1Quiz,
};

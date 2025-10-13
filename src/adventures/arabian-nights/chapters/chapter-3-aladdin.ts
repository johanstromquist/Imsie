import type { Chapter } from '../../../types';
import { chapter3Quiz } from '../quizzes/chapter-3-quiz';

/**
 * Chapter 3: Aladdin and the Magic Lamp
 *
 * This chapter tells the beloved tale of Aladdin, exploring themes of
 * transformation, power, responsibility, and the nature of true wealth.
 */
export const chapter3: Chapter = {
  id: 'chapter-3-aladdin',
  title: 'Aladdin and the Magic Lamp',
  description: 'Follow the journey of a poor boy who discovers a magic lamp containing a powerful genie. From the streets to the palace, learn how Aladdin\'s character transforms along with his circumstances.',

  prerequisites: {
    type: 'all',
    chapterIds: ['chapter-1-scheherazade']
  },

  learningObjectives: [
    'Explore themes of transformation and personal growth',
    'Understand the responsibility that comes with power',
    'Analyze the contrast between material and personal wealth',
    'Examine the role of cunning and cleverness in folk tales',
    'Recognize the importance of character over circumstances',
  ],

  scenes: [
    {
      id: 'scene-1-aladdin-introduction',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/35fd23fc-d77d-4bee-9220-0310a6cc0dd1/0_0.png',
      image: 'https://cdn.midjourney.com/31829bcd-f982-4328-921e-f8ad541044f9/0_0.png',
      content: `In a city in China, there once lived a poor boy named Aladdin. His father, a humble tailor, had died when Aladdin was young, leaving him and his mother to struggle in poverty.

Aladdin was not a bad boy, but he was idle and carefree. Rather than learning a trade, he spent his days playing in the streets with other children, while his mother worked tirelessly at her spinning wheel, selling her thread to buy their daily bread.

"My son," his mother would say, "you must learn a trade. How will you make your way in the world?"

But Aladdin would just smile and promise to do better tomorrow. Tomorrow, he said, he would change. Tomorrow, he would become someone his mother could be proud of.

Little did he know how profoundly tomorrow would change his life—though not in the way either of them expected.`,
      inlineAnnotations: [
        {
          id: 'china-setting',
          text: 'China',
          tooltip: {
            title: 'Why "China"?',
            content: 'The story says "China," but everything about it—the sultan, the bazaars, the architecture—is clearly Middle Eastern. To medieval audiences, "China" simply meant "a far-off, exotic, wealthy land." It was fantasy worldbuilding, not geography. The visual depictions have always been Middle Eastern, even in the earliest illustrations.',
            category: 'literary-context',
          },
        },
        {
          id: 'aladdin-origin',
          text: 'Aladdin',
          tooltip: {
            title: 'Aladdin\'s Surprising Origin',
            content: 'Aladdin wasn\'t in the original Arabic manuscripts of the Arabian Nights! French translator Antoine Galland added it around 1709 after hearing it from Hanna Diyab, a Syrian storyteller visiting Paris. It became so popular that most people assume it was always part of the collection.',
            category: 'historical-context',
          },
        },
      ],
      learningPoints: [
        {
          id: 'lp-ch3-1',
          content: 'Folk tales often begin with characters in humble circumstances to emphasize their transformation journey.',
          category: 'literary-technique',
        },
      ],
    },

    {
      id: 'scene-2-magician-arrives',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/35fd23fc-d77d-4bee-9220-0310a6cc0dd1/0_0.png',
      image: 'https://cdn.midjourney.com/a1d9afd8-5695-4ef8-bb2d-4af5c73afce7/0_0.png',
      content: `One day, a mysterious stranger arrived in the city. He was a magician from far-off Africa, and he possessed knowledge of dark and ancient arts. Through his magic, he had learned of a treasure hidden in a cave near the city—a treasure of unimaginable power.

But this treasure could only be retrieved by someone pure of heart, someone destined by fate. His magic revealed that this person was a poor boy named Aladdin.

The magician found Aladdin in the marketplace and approached him with a cunning smile. "My dear nephew!" he exclaimed. "Don't you recognize your Uncle Mustafa? Your father's brother, returned from many years abroad!"

Aladdin, who had never heard of any Uncle Mustafa, was confused. But the stranger was so convincing, so generous with his promises and coins, that Aladdin ran home to tell his mother of their sudden good fortune.

"We have no such relation," his mother said suspiciously. But the magician's gold was real enough, and when he offered to set Aladdin up in the merchant's trade, she reluctantly agreed.

The magician had no interest in Aladdin's future as a merchant. He had only one purpose: to use the boy to retrieve the magic lamp from the cave—and then dispose of him.`,
      learningPoints: [
        {
          id: 'lp-ch3-2',
          content: 'Deceptive characters in folk tales often represent external temptations or dangers that test the protagonist.',
          category: 'thematic-analysis',
        },
      ],
    },

    {
      id: 'scene-3-cave-decision',
      type: 'decision',
      backgroundImage: 'https://cdn.midjourney.com/48316232-ca05-4a55-bc17-8bde42641a1d/0_0.png',
      prompt: 'Aladdin stands before the dark cave entrance. The magician demands he enter alone.',
      context: 'After several days of playing the generous uncle, the magician has led Aladdin to a lonely mountain pass. Through magic words and fire, he opened an entrance to a hidden cave. "Only you can retrieve the treasure," he insists. "Touch nothing but an old lamp at the very end. Bring me only that lamp." The cave looks frightening, but the magician is insistent. What should Aladdin do?',
      timeLimit: 30,
      choices: [
        {
          id: 'choice-trust-magician',
          text: 'Trust the magician and enter the cave carefully',
          consequence: 'Aladdin cautiously enters the cave, following the magician\'s instructions about touching nothing but the lamp.',
          learningPoints: [
            {
              id: 'lp-choice-trust',
              content: 'Sometimes taking calculated risks can lead to unexpected opportunities.',
              category: 'character-development',
            },
          ],
        },
        {
          id: 'choice-refuse-enter',
          text: 'Refuse to enter the dangerous cave',
          consequence: 'Aladdin hesitates, but the magician\'s persuasive words and promises eventually convince him to proceed.',
        },
        {
          id: 'choice-demand-explanation',
          text: 'Demand to know why the magician cannot enter himself',
          consequence: 'The magician explains that only Aladdin can retrieve the lamp - magic prevents the magician from entering. Aladdin reluctantly agrees.',
        },
      ],
      learningPoints: [],
    },

    {
      id: 'scene-4-lamp-discovery',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/97294083-3b14-471f-bdcf-3f1faf4b8ca3/0_0.png',
      backgroundVideo: 'https://cdn.midjourney.com/video/9e4f69a8-ad50-4388-aebe-7a75257cc30e/1.mp4',
      image: 'https://cdn.midjourney.com/51466997-14c8-4af4-874b-158b489a8a58/0_0.png',
      imageVideo: 'https://cdn.midjourney.com/video/2a698207-8dbf-416b-8235-32257c9df77d/0.mp4',
      content: `Inside the cave, Aladdin's fear gave way to wonder. The narrow entrance opened into a vast, magical garden unlike anything in the mortal world. Trees bore fruit made of glowing gemstones—rubies, emeralds, sapphires, and diamonds that cast rainbow light through the cavern.

"Touch nothing," Aladdin reminded himself, though his fingers itched to pluck the jeweled fruits. He passed through grove after grove of impossible beauty, following a path that seemed to glow faintly beneath his feet.

At the very end of the cave, in a simple niche, sat an old oil lamp. It was dusty, tarnished, and utterly ordinary—so plain that Aladdin almost laughed at the anticlimax. This was the treasure his "uncle" sought? This battered old lamp?

But he had promised to retrieve it. Aladdin took the lamp and tucked it into his shirt. Then, unable to resist, he filled his pockets with some of the jeweled fruits from the garden. If the magician wanted only this worthless lamp, surely he wouldn't miss a few pieces of fruit?

With the lamp secure and his pockets heavy with gemstones, Aladdin made his way back to the cave entrance.`,
      learningPoints: [
        {
          id: 'lp-ch3-3',
          content: 'In folk tales, the most valuable treasures are often disguised as ordinary objects.',
          category: 'symbolism',
        },
      ],
    },

    {
      id: 'scene-5-trapped-decision',
      type: 'decision',
      backgroundImage: 'https://cdn.midjourney.com/48316232-ca05-4a55-bc17-8bde42641a1d/0_0.png',
      prompt: 'The magician demands the lamp before helping Aladdin out of the cave.',
      context: 'When Aladdin reached the cave entrance, he found he could not climb out on his own. The magician stood at the opening, his face twisted with greedy anticipation. "Give me the lamp!" he demanded. "Give it to me, and I\'ll pull you out!" But something in the magician\'s voice makes Aladdin hesitate. If you give him the lamp before you\'re safe, what reason will he have to help you?',
      timeLimit: 30,
      choices: [
        {
          id: 'choice-give-lamp',
          text: 'Hand over the lamp to get out safely',
          consequence: 'Aladdin starts to hand over the lamp, but something makes him hesitate. The magician grows impatient.',
        },
        {
          id: 'choice-refuse-lamp',
          text: 'Refuse to give the lamp until you are out',
          consequence: 'Aladdin insists on getting out first. The furious magician seals the cave entrance, trapping Aladdin inside in darkness.',
          learningPoints: [
            {
              id: 'lp-choice-stand-ground',
              content: 'Standing firm in negotiations can sometimes lead to unexpected consequences, both good and bad.',
              category: 'character-development',
            },
          ],
        },
        {
          id: 'choice-negotiate',
          text: 'Try to negotiate a compromise',
          consequence: 'The magician will not negotiate. His anger at Aladdin\'s defiance causes him to seal the cave, leaving Aladdin trapped.',
        },
      ],
      learningPoints: [],
    },

    {
      id: 'scene-6-genie-appears',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/a73aabdc-0a64-4f34-b002-a9c441fa1366/0_0.png',
      image: 'https://cdn.midjourney.com/0e379059-f364-47b7-9c62-f4df6a177e25/0_0.png',
      content: `In his fury at being defied, the magician spoke words of dark power. The stone entrance sealed itself with a thunderous crash, entombing Aladdin in absolute darkness.

"Die there then, miserable wretch!" the magician's voice echoed from beyond the stone. "If I cannot have the lamp, no one shall!"

For two days, Aladdin sat in darkness, trapped and terrified. He called out until his voice was hoarse, but no one came. The magical garden had vanished—only stone walls surrounded him now.

In his despair, Aladdin clasped his hands together in prayer, begging for deliverance. As he did so, he accidentally rubbed a ring the magician had placed on his finger for "protection."

Instantly, an enormous genie materialized in a cloud of smoke!

"I am the slave of the ring," the genie intoned. "What is your wish, master?"

Too frightened and overwhelmed to think clearly, Aladdin gasped, "Get me out of this cave!"

In an instant, he found himself standing outside in the sunshine, free. The cave entrance had vanished as if it never existed.

Weak with relief, Aladdin made his way home to his mother. She wept with joy to see him, for she had believed him dead. When he told her his tale and showed her the lamp he'd retrieved, she examined it with disappointment.

"This? This worthless old thing nearly cost you your life? Well, perhaps we can sell it for a few coins. Let me clean it first."

As she began to rub the tarnished lamp with a cloth, there was a tremendous roar of smoke and flame...`,
      learningPoints: [
        {
          id: 'lp-ch3-4',
          content: 'Magical helpers in folk tales often represent the protagonist\'s own inner resources and potential.',
          category: 'symbolism',
        },
      ],
    },

    {
      id: 'scene-7-first-wish',
      type: 'dialogue',
      backgroundImage: 'https://cdn.midjourney.com/a73aabdc-0a64-4f34-b002-a9c441fa1366/0_0.png',
      character: {
        id: 'lamp-genie',
        name: 'The Genie of the Lamp',
        portrait: 'https://cdn.midjourney.com/407cc5c2-65a4-4740-b67f-1623f8b89842/0_0.png',
        portraitVideo: 'https://cdn.midjourney.com/video/b2c573b9-0ebf-49a1-a829-9a449acd8bc3/2.mp4',
        description: 'A powerful spirit bound to serve the lamp\'s master',
      },
      dialogueTree: {
        id: 'node-1',
        speaker: 'lamp-genie',
        text: 'I am the slave of the lamp. I have been bound for a thousand years, waiting for a new master. Your wish is my command. What is your desire, master?',
        responses: [
          {
            id: 'response-food',
            text: 'We are starving—bring us food',
            nextNodeId: 'node-2',
          },
          {
            id: 'response-riches',
            text: 'I wish for great riches',
            nextNodeId: 'node-3',
          },
          {
            id: 'response-power',
            text: 'I wish to become powerful',
            nextNodeId: 'node-4',
          },
        ],
        allNodes: [
          {
            id: 'node-2',
            speaker: 'lamp-genie',
            text: 'A wise and humble first wish, master. Food shall appear before you—enough to satisfy your hunger and restore your strength.',
            responses: [
              {
                id: 'response-more-food',
                text: 'This is amazing! Can you bring us more?',
                nextNodeId: 'node-5',
              },
              {
                id: 'response-wealth',
                text: 'Can you also bring us wealth?',
                nextNodeId: 'node-3',
              },
              {
                id: 'response-limits',
                text: 'What are the limits of your power?',
                nextNodeId: 'node-6',
              },
            ],
          },
          {
            id: 'node-3',
            speaker: 'lamp-genie',
            text: 'Wealth shall be yours, master. But know this: riches can be granted in an instant, yet wisdom in using them takes time. What form shall this wealth take?',
            responses: [
              {
                id: 'response-gold',
                text: 'Bring us gold coins',
                nextNodeId: 'node-7',
              },
              {
                id: 'response-feast',
                text: 'Bring us a feast and fine clothes',
                nextNodeId: 'node-5',
              },
              {
                id: 'response-learn-more',
                text: 'Tell me more about the lamp\'s power first',
                nextNodeId: 'node-6',
              },
            ],
          },
          {
            id: 'node-4',
            speaker: 'lamp-genie',
            text: 'Power comes in many forms, master. The power to command armies? The power to win hearts? The power to change your destiny? Which do you seek?',
            responses: [
              {
                id: 'response-provide',
                text: 'The power to provide for my mother',
                nextNodeId: 'node-5',
              },
              {
                id: 'response-prince',
                text: 'The power to become a prince',
                nextNodeId: 'node-8',
              },
              {
                id: 'response-think',
                text: 'I need time to think about this',
                nextNodeId: 'node-6',
              },
            ],
          },
          {
            id: 'node-5',
            speaker: 'lamp-genie',
            text: 'A wise choice, master. A wish that shows your heart. It shall be done.',
            isEnd: true,
          },
          {
            id: 'node-6',
            speaker: 'lamp-genie',
            text: 'My power is nearly limitless, master. I can build palaces, transport you anywhere, grant you wealth beyond measure. But I cannot force anyone to love you, I cannot bring back the dead, and I cannot make you wise—wisdom must be earned.',
            responses: [
              {
                id: 'response-food-think',
                text: 'Then bring us food and let me think',
                nextNodeId: 'node-5',
              },
              {
                id: 'response-wealth-now',
                text: 'I wish for great wealth',
                nextNodeId: 'node-3',
              },
              {
                id: 'response-worthy',
                text: 'Can you help me become worthy of a princess?',
                nextNodeId: 'node-8',
              },
            ],
          },
          {
            id: 'node-7',
            speaker: 'lamp-genie',
            text: 'Gold I shall bring, master. But remember: a sudden fortune brings sudden attention. Spend wisely.',
            isEnd: true,
          },
          {
            id: 'node-8',
            speaker: 'lamp-genie',
            text: 'I can make you appear as a prince, master, with all the trappings of royalty. But true nobility comes from within. The disguise is easy—becoming worthy of the title is your journey alone.',
            responses: [
              {
                id: 'response-survive',
                text: 'I understand. For now, just help us survive',
                nextNodeId: 'node-5',
              },
              {
                id: 'response-truly-worthy',
                text: 'Then help me become truly worthy',
                nextNodeId: 'node-9',
              },
            ],
          },
          {
            id: 'node-9',
            speaker: 'lamp-genie',
            text: 'That is a journey you must make yourself, master. But I can provide the opportunities and the means. The rest depends on your choices and your character.',
            isEnd: true,
          },
        ],
      },
      learningPoints: [
        {
          id: 'lp-ch3-5',
          content: 'The first wish a character makes often reveals their true priorities and character.',
          category: 'character-analysis',
        },
      ],
    },

    {
      id: 'scene-8-transformation-begins',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/bc8c14a0-570f-4a12-b3b0-15801e435977/0_0.png',
      backgroundVideo: 'https://cdn.midjourney.com/video/99e5cc8b-597a-4655-9e1e-967649c4837c/1.mp4',
      image: 'https://cdn.midjourney.com/dad84403-6e70-4646-a91b-384eccba91ca/0_0.png',
      content: `Safely home with his mother, Aladdin began to understand the lamp's true power—and, more importantly, began to understand the responsibility that came with it.

He did not immediately wish for a palace or riches beyond measure. Instead, he used the genie's power thoughtfully. He wished for enough wealth to support his mother comfortably, to buy a modest home, and to dress in good clothes—but not so ostentatiously as to draw dangerous attention.

For several years, Aladdin lived this way, gradually transforming from an idle street urchin into a thoughtful young man. His mother no longer had to spin thread by lamplight. They had good food, comfortable furnishings, and peace.

But more importantly, Aladdin changed within. He studied, he learned to read, he listened to scholars in the marketplace. He developed judgment and wisdom. The genie had given him opportunity—Aladdin gave himself education.

One day, as he walked through the city, the Sultan's daughter—Princess Badroulbadour—passed by in her procession. For just a moment, her veil shifted, and Aladdin saw her face.

It was as if lightning struck him. Princess Badroulbadour was not just beautiful—there was intelligence in her eyes, grace in her bearing, a presence that spoke of a remarkable spirit.

From that moment, Aladdin knew his heart would never be his own again. He had fallen hopelessly in love.`,
      learningPoints: [
        {
          id: 'lp-ch3-6',
          content: 'Gradual character development is more believable than instant transformation.',
          category: 'narrative-structure',
        },
      ],
    },

    {
      id: 'scene-9-palace-approach',
      type: 'decision',
      backgroundImage: 'https://cdn.midjourney.com/bc8c14a0-570f-4a12-b3b0-15801e435977/0_0.png',
      backgroundVideo: 'https://cdn.midjourney.com/video/99e5cc8b-597a-4655-9e1e-967649c4837c/1.mp4',
      prompt: 'Aladdin wishes to marry the princess. How should he approach the Sultan?',
      context: 'For days, Aladdin could think of nothing but the princess. His mother asks, "The Sultan\'s daughter? That\'s impossible. You\'re not a prince, not a noble—" But Aladdin has the lamp. He could use its power to prove his worth. The question is: How should he approach this?',
      timeLimit: 30,
      choices: [
        {
          id: 'choice-honest-approach',
          text: 'Approach honestly with genuine intentions',
          consequence: 'Aladdin decides to be truthful about his feelings, but knows he must prove his worth through magnificent gifts.',
        },
        {
          id: 'choice-magnificent-gifts',
          text: 'Send spectacular gifts to impress the Sultan',
          consequence: 'Aladdin uses the genie to create jeweled gifts of incomparable beauty, winning the Sultan\'s attention.',
          learningPoints: [
            {
              id: 'lp-choice-impress',
              content: 'In royal courts, demonstrations of wealth and power often opened doors to opportunity.',
              category: 'historical-context',
            },
          ],
        },
        {
          id: 'choice-disguise',
          text: 'Disguise yourself as a prince',
          consequence: 'Aladdin asks the genie to transform him into a magnificent prince, approaching the palace with a grand procession.',
        },
      ],
      learningPoints: [],
    },

    {
      id: 'scene-10-marriage',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/245787ca-bd03-46c5-a4be-d84e3c9ba078/0_0.png',
      image: 'https://cdn.midjourney.com/febaacf5-67fc-4bc4-a4da-98187239bf94/0_0.png',
      content: `That very night, Aladdin summoned the genie and made his wish: "Build me a palace opposite the Sultan's own palace—a palace of such magnificence that it honors Princess Badroulbadour as she deserves."

The genie bowed. "It shall be done, master."

By dawn, the impossible had occurred. Where yesterday there had been an empty space, now stood a palace of breathtaking beauty. Its walls were made of gold and silver, its windows of emeralds and rubies. Fountains played in marble courtyards. Every detail spoke of exquisite taste and unimaginable wealth.

The Sultan stared in astonishment. "Truly," he declared, "this young man is worthy of my daughter. No prince in the world could have built such a marvel!"

The wedding was celebrated with great rejoicing. Princess Badroulbadour, meeting Aladdin, was pleased to discover that beneath his newfound magnificence lived a thoughtful, educated, kind young man. What might have been an arranged marriage based on wealth became something genuine—true affection grew between them.

Aladdin was happier than he had ever imagined possible. He had everything: love, wealth, position, respect. He used his power wisely, helping the poor, advising the Sultan with intelligence, and cherishing his wife.

Surely nothing could threaten such perfect happiness.

Or so Aladdin believed.`,
      learningPoints: [
        {
          id: 'lp-ch3-7',
          content: 'Achievement of goals in the middle of a story often signals coming challenges.',
          category: 'narrative-structure',
        },
      ],
    },

    {
      id: 'scene-11-magician-returns',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/17065c12-b957-4764-a4d0-1ca141c470e2/0_0.png',
      image: 'https://cdn.midjourney.com/dc0880c4-4894-4414-b0da-a99f9f296aa1/0_0.png',
      content: `But far away in Africa, the evil magician believed Aladdin had died in the sealed cave years ago. But through his dark arts, he divined a troubling truth: the lamp had survived, and its power had built a magnificent palace in a distant city.

"Impossible!" the magician raged. "The boy lives! He has the lamp!"

Consumed with fury and greed, the magician traveled back to the city. He disguised himself as a humble merchant and walked through the streets, calling out: "New lamps for old! New lamps for old! Who will trade their old lamps for new?"

People laughed at this foolish merchant, willing to trade valuable new lamps for worthless old ones. What kind of fool made such an offer?

But in Aladdin's palace, Princess Badroulbadour heard the merchant's cry. She noticed an old, tarnished lamp sitting on a shelf in one of the chambers—a lamp Aladdin kept for sentimental reasons but had never explained its importance.

"What an odd merchant," she thought. "But why not? That old lamp is ugly and worthless. Let me trade it for a new one."

She had no idea she was about to hand over the source of all their happiness to their greatest enemy.

The princess sent a servant down to the street. "Trade our old lamp for one of your new ones."

The magician's hands trembled as he received the lamp. That very night, he summoned the genie. "Transport this palace, the princess, and everything in it to the deserts of Africa!"

And in an instant, the palace vanished from the city as if it had never been.`,
      learningPoints: [
        {
          id: 'lp-ch3-8',
          content: 'The return of an earlier antagonist creates narrative symmetry and raises the stakes.',
          category: 'literary-technique',
        },
      ],
    },

    {
      id: 'scene-12-crisis',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/17065c12-b957-4764-a4d0-1ca141c470e2/0_0.png',
      image: 'https://cdn.midjourney.com/bc3e7975-9528-4411-8ce4-d13ac3986a89/0_0.png',
      content: `Aladdin returned home to find... nothing. Where his magnificent palace had stood, there was only bare ground. His wife, his home, his life—all vanished without a trace.

He stood frozen in shock and horror. How could this be? What terrible magic could have done this?

Within moments, the Sultan's guards seized him. The Sultan, mad with grief and fury over his missing daughter, drew his sword.

"Sorcerer! Demon! What have you done with my daughter? Where is the palace? I should execute you where you stand!"

"Your Majesty, I swear I don't know!" Aladdin cried. "Give me time—I will find her! I will bring her back!"

The Sultan, seeing Aladdin's genuine despair, reluctantly agreed. "Forty days," he decreed. "Find my daughter in forty days, or forfeit your life."

Alone, frantic, and heartbroken, Aladdin wandered the city in a daze. Then he remembered: the ring! The ring the magician had given him years ago.

With shaking hands, Aladdin rubbed the ring. The genie appeared.

"Take me to my wife!" Aladdin commanded.

"I hear and obey," the ring genie said—but there was hesitation in its voice. "But master, I am not as powerful as the lamp's genie. I cannot bring the palace back. I can only transport you to where the princess is held."

"Then do it!" Aladdin cried.

In an instant, Aladdin found himself in a desolate desert in Africa, standing outside the transported palace. This time, he had no lamp, no all-powerful genie. He would have to rely on his own courage and cleverness.`,
      learningPoints: [
        {
          id: 'lp-ch3-9',
          content: 'Loss of magical assistance forces protagonists to rely on their own growth and cleverness.',
          category: 'character-development',
        },
      ],
    },

    {
      id: 'scene-13-rescue-plan',
      type: 'decision',
      backgroundImage: 'https://cdn.midjourney.com/17065c12-b957-4764-a4d0-1ca141c470e2/0_0.png',
      prompt: 'Aladdin has found the princess in Africa. How should he defeat the magician and reclaim the lamp?',
      context: 'Under cover of darkness, Aladdin crept close to the palace. Through a window, he could see Princess Badroulbadour sitting alone, weeping. He caught her attention and climbed through. "That horrible man has the lamp—he keeps it in his robes at all times," she whispers. "He says I must agree to marry him or remain imprisoned forever!" A direct assault would fail—the magician\'s magic is too powerful. Aladdin needs cleverness, not force.',
      timeLimit: 30,
      choices: [
        {
          id: 'choice-direct-attack',
          text: 'Attack the magician directly',
          consequence: 'The magician is too powerful. Aladdin realizes he needs a more cunning approach.',
        },
        {
          id: 'choice-poison-plan',
          text: 'Work with the princess to use sleeping powder',
          consequence: 'Aladdin gives the princess a powerful sleeping powder. She will drug the magician\'s wine, allowing Aladdin to reclaim the lamp.',
          learningPoints: [
            {
              id: 'lp-choice-cunning',
              content: 'In folk tales, cleverness and strategy often triumph over direct confrontation.',
              category: 'thematic-analysis',
            },
          ],
        },
        {
          id: 'choice-steal-lamp',
          text: 'Sneak in and steal the lamp while he sleeps',
          consequence: 'The plan is risky but straightforward. Aladdin must wait for the perfect moment.',
        },
      ],
      learningPoints: [],
    },

    {
      id: 'scene-14-victory',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/e24e1e30-883a-4b3f-9707-78c9e225b58b/0_0.png',
      image: 'https://cdn.midjourney.com/9adb9e21-ad4c-430e-8db6-3bb0946e1d3c/0_0.png',
      content: `The next day, Princess Badroulbadour approached the magician with downcast eyes. "You have won," she said softly. "I see now that my husband cannot save me. I will accept your proposal."

The magician, overjoyed, celebrated with wine that evening—wine the princess had laced with sleeping powder. Within minutes, he slumped forward, unconscious, snoring thunderously.

Aladdin rushed in and searched the magician's robes, finding the lamp still warm from being kept close to the magician's body.

With trembling hands, Aladdin rubbed the lamp.

The genie appeared, bowing. "Master! You have reclaimed me! What is your wish?"

"Take this palace, my wife, and me back home—NOW!" Aladdin commanded. "And leave this sorcerer here in the desert where he belongs!"

"I hear and obey!"

In an instant, the palace rose into the air, transported across vast distances in a heartbeat, and settled gently back onto its foundation in the city. The magician was left behind in the African desert, alone and defeated.

The Sultan, seeing the palace miraculously restored, rushed to embrace his daughter. Aladdin told him the entire tale—the truth about the lamp, the magician's deception, everything.

"My son," the Sultan said, tears in his eyes, "you have proven yourself a thousand times over. Not just with the lamp's power, but with your courage, cleverness, and love."`,
      learningPoints: [
        {
          id: 'lp-ch3-10',
          content: 'The resolution shows how the protagonist has grown and learned from their experiences.',
          category: 'character-development',
        },
      ],
    },

    {
      id: 'scene-15-conclusion',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/e24e1e30-883a-4b3f-9707-78c9e225b58b/0_0.png',
      image: 'https://cdn.midjourney.com/10ade571-1266-41df-9d85-baf84acdfcad/0_0.png',
      content: `And so Aladdin lived happily with Princess Badroulbadour for many years. When the Sultan passed away, Aladdin succeeded him and ruled with wisdom, justice, and compassion.

But here is the question worth pondering: What truly transformed Aladdin? Was it the lamp and its genie? Or was it something else?

Consider this: The lamp gave him wealth, power, and opportunity. But it could not give him wisdom—that he developed through study. It could not give him courage—that he found when facing the magician without the lamp's help. It could not make the princess love him—that grew from his genuine character.

The lamp was a catalyst, a tool. But Aladdin's true transformation came from within.

He began as an idle street urchin who promised change "tomorrow." The lamp gave him the chance to make that change real—but he had to do the work himself. He had to study, grow, learn responsibility, and develop courage.

In the end, Aladdin became worthy not because he possessed a magic lamp, but because he possessed something far more valuable: a character that grew stronger through both fortune and adversity.

---

"And that, my lord," Scheherazade said to the Sultan, "is why the tale of Aladdin has endured. It shows us that transformation is possible, but it must come from within. Magic may open doors, but only character can walk through them with honor."

The Sultan nodded thoughtfully. "A wise tale indeed. The boy had nothing, then everything, then nothing again—and only when stripped of magic did he prove his true worth."

"Exactly," Scheherazade smiled. "And now, my lord, dawn approaches. Shall I tell you tomorrow of Ali Baba and the Forty Thieves?"

"I await tomorrow with great anticipation," the Sultan replied.`,
      learningPoints: [
        {
          id: 'lp-ch3-11',
          content: 'True transformation comes from character growth, not just changed circumstances.',
          category: 'thematic-analysis',
        },
        {
          id: 'lp-ch3-12',
          content: 'The story emphasizes that wisdom, courage, and love are more valuable than magical power.',
          category: 'thematic-analysis',
        },
      ],
      events: {
        onExit: [
          {
            type: 'quiz',
            componentId: 'quiz-chapter-3',
            condition: {
              type: 'if-not-completed',
            },
          },
        ],
      },
    },
  ],

  endQuiz: chapter3Quiz,
};

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
      backgroundImage: 'https://cdn.midjourney.com/[your-image-id]/0_0.png',
      image: 'https://cdn.midjourney.com/[your-image-id]/0_0.png',
      content: `In Persia, there lived two brothers: Cassim, who married a wealthy woman, and Ali Baba, who married a poor one...

[Story content: Introduce Ali Baba as a humble woodcutter, his brother Cassim's wealth, the contrast between their lives]`,
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
      backgroundImage: 'https://cdn.midjourney.com/[your-image-id]/0_0.png',
      content: `One day while cutting wood in the forest, Ali Baba saw a large troop of horsemen approaching...

[Story content: Ali Baba hides in a tree, watches the forty thieves, observes their leader]`,
      learningPoints: [
        {
          id: 'lp-ch4-2',
          content: 'Observation and patience are often rewarded in folk tales with valuable knowledge.',
          category: 'thematic-analysis',
        },
      ],
    },

    {
      id: 'scene-3-open-sesame',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/[your-image-id]/0_0.png',
      content: `Ali Baba watched as the captain approached a nearby rock and cried out: "Open Sesame!"

[Story content: The cave opens, the thieves enter and exit, "Close Sesame", the magic words]`,
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
      backgroundImage: 'https://cdn.midjourney.com/[your-image-id]/0_0.png',
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
      id: 'scene-5-taking-treasure',
      type: 'decision',
      backgroundImage: 'https://cdn.midjourney.com/[your-image-id]/0_0.png',
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
      backgroundImage: 'https://cdn.midjourney.com/[your-image-id]/0_0.png',
      content: `Ali Baba shared his secret with his brother Cassim, who demanded to know everything...

[Story content: Ali Baba tells Cassim, Cassim's greed is awakened, he insists on going to the cave]`,
      learningPoints: [
        {
          id: 'lp-ch4-5',
          content: 'Sharing secrets can have unexpected consequences, especially when greed is involved.',
          category: 'thematic-analysis',
        },
      ],
    },

    {
      id: 'scene-7-cassim-tragedy',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/[your-image-id]/0_0.png',
      content: `Cassim entered the cave with many mules, planning to take all the treasure...

[Story content: Cassim's greed, forgetting the magic words, his panic, the thieves return and kill him]`,
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
      backgroundImage: 'https://cdn.midjourney.com/[your-image-id]/0_0.png',
      content: `When Cassim didn't return, Ali Baba went to search for him...

[Story content: Finding Cassim's body, the thieves' warning, bringing the body home secretly]`,
      learningPoints: [
        {
          id: 'lp-ch4-8',
          content: 'Ali Baba\'s loyalty to family despite the risk shows his noble character.',
          category: 'character-analysis',
        },
      ],
    },

    {
      id: 'scene-9-morgiana-introduced',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/[your-image-id]/0_0.png',
      content: `Ali Baba's clever servant Morgiana devised a plan to hide how Cassim died...

[Story content: Morgiana finds a cobbler to sew the body, swears him to secrecy, creates the illusion of natural death]`,
      learningPoints: [
        {
          id: 'lp-ch4-9',
          content: 'Morgiana\'s introduction marks a shift - she becomes the true hero of the story.',
          category: 'character-analysis',
        },
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
      backgroundImage: 'https://cdn.midjourney.com/[your-image-id]/0_0.png',
      content: `The thieves discovered Cassim's body was gone. They knew someone else knew their secret...

[Story content: The captain sends a thief to find who took the body, the thief finds the cobbler, marks Ali Baba's door]`,
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
      backgroundImage: 'https://cdn.midjourney.com/[your-image-id]/0_0.png',
      content: `Morgiana noticed the strange chalk mark on their door...

[Story content: Morgiana marks all the doors in the street identically, thieves cannot find the right house]`,
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
      backgroundImage: 'https://cdn.midjourney.com/[your-image-id]/0_0.png',
      content: `The captain devised a new plan. Disguised as an oil merchant, he brought forty jars to Ali Baba's house...

[Story content: Only one jar has oil, the others hide the 39 thieves, asking for hospitality]`,
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
      backgroundImage: 'https://cdn.midjourney.com/[your-image-id]/0_0.png',
      content: `That night, Morgiana went to get oil for the kitchen lamp...

[Story content: Morgiana hears the thieves in the jars, quickly understands the plot, her brilliant plan]`,
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
      backgroundImage: 'https://cdn.midjourney.com/[your-image-id]/0_0.png',
      prompt: 'Morgiana has discovered the thieves hiding in the oil jars. What should she do?',
      context: 'Thirty-nine thieves are hiding in jars in the courtyard. The "oil merchant" (their captain) is inside the house. Morgiana must act quickly and quietly.',
      timeLimit: 30,
      choices: [
        {
          id: 'choice-wake-ali-baba',
          text: 'Wake Ali Baba and warn him',
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
      backgroundImage: 'https://cdn.midjourney.com/[your-image-id]/0_0.png',
      content: `In the morning, the captain checked on his men and discovered Morgiana's work...

[Story content: The captain flees alone, vows revenge, Ali Baba learns what happened, rewards Morgiana]`,
      learningPoints: [
        {
          id: 'lp-ch4-15',
          content: 'The surviving antagonist ensures the story isn\'t over yet - building suspense.',
          category: 'narrative-structure',
        },
      ],
    },

    {
      id: 'scene-16-captain-final-plan',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/[your-image-id]/0_0.png',
      content: `The captain took on a new disguise as a wealthy merchant...

[Story content: Befriending Ali Baba's son, getting invited to dinner, carrying a hidden dagger]`,
      learningPoints: [
        {
          id: 'lp-ch4-16',
          content: 'The captain\'s patient long-game approach shows he has learned from his previous failures.',
          category: 'character-development',
        },
      ],
    },

    {
      id: 'scene-17-morgiana-dance',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/[your-image-id]/0_0.png',
      content: `During the dinner, Morgiana performed a traditional dance for the guest...

[Story content: Morgiana recognizes the captain, dances with a dagger, kills him during the performance]`,
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
      id: 'scene-18-final-decision',
      type: 'decision',
      backgroundImage: 'https://cdn.midjourney.com/[your-image-id]/0_0.png',
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
      backgroundImage: 'https://cdn.midjourney.com/[your-image-id]/0_0.png',
      content: `Realizing that Morgiana had saved his life three times, Ali Baba decided on a special reward...

[Story content: Ali Baba grants Morgiana her freedom and arranges her marriage to his son]`,
      learningPoints: [
        {
          id: 'lp-ch4-19',
          content: 'Morgiana\'s reward of freedom and marriage into the family represents social mobility through merit.',
          category: 'thematic-analysis',
        },
      ],
    },

    {
      id: 'scene-20-conclusion',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/[your-image-id]/0_0.png',
      content: `With all the thieves gone, Ali Baba taught the secret of the cave to his son...

[Story content: The secret passes down through the family, wealth used wisely, reflection on cleverness over greed]`,
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

import type { Chapter } from '../../../types';
import { chapter5Quiz } from '../quizzes/chapter-5-quiz';

/**
 * Chapter 5: Sinbad's Voyages
 *
 * This chapter follows the legendary sailor Sinbad through selected voyages,
 * exploring themes of adventure, curiosity, fate, and the human drive to explore.
 */
export const chapter5: Chapter = {
  id: 'chapter-5-sinbad',
  title: 'Sinbad\'s Voyages',
  description: 'Journey with Sinbad the Sailor across mysterious seas and strange lands. Experience encounters with giant birds, living islands, and incredible wonders that test the limits of courage and survival.',

  prerequisites: {
    type: 'all',
    chapterIds: ['chapter-1-scheherazade']
  },

  learningObjectives: [
    'Explore the theme of adventure and the unknown',
    'Understand how voyage narratives reflect cultural values about trade and exploration',
    'Analyze the role of fate versus choice in the stories',
    'Recognize the episodic structure of frame narratives',
    'Examine how fantastical elements represent real maritime dangers',
  ],

  scenes: [
    {
      id: 'scene-1-sinbad-introduction',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/[your-image-id]/0_0.png',
      image: 'https://cdn.midjourney.com/[your-image-id]/0_0.png',
      content: `In Baghdad during the reign of Caliph Harun al-Rashid, there lived a wealthy merchant named Sinbad the Sailor...

[Story content: Frame story - poor porter Sinbad meets wealthy Sinbad, wealthy Sinbad offers to tell his tales]`,
      learningPoints: [
        {
          id: 'lp-ch5-1',
          content: 'The frame story technique, where one character tells stories to another, is used throughout Arabian Nights.',
          category: 'literary-technique',
        },
        {
          id: 'lp-ch5-2',
          content: 'Sinbad\'s wealth comes from adventure and risk, not inheritance - reflecting merchant culture values.',
          category: 'cultural-context',
        },
      ],
    },

    // FIRST VOYAGE - The Living Island
    {
      id: 'scene-2-first-voyage-begins',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/[your-image-id]/0_0.png',
      content: `"For my first voyage," Sinbad began, "I inherited a fortune from my father and foolishly squandered it..."

[Story content: Young Sinbad wastes his inheritance, decides to become a merchant, joins a trading ship]`,
      learningPoints: [
        {
          id: 'lp-ch5-3',
          content: 'The pattern of loss and recovery is central to Sinbad\'s character arc across all voyages.',
          category: 'character-development',
        },
      ],
    },

    {
      id: 'scene-3-living-island',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/[your-image-id]/0_0.png',
      content: `We spotted what appeared to be a beautiful island and landed to explore...

[Story content: The "island" is actually a sleeping whale, it wakes up when they light a fire, crew scattered]`,
      learningPoints: [
        {
          id: 'lp-ch5-4',
          content: 'The "living island" motif appears in many maritime cultures, possibly based on whale encounters.',
          category: 'cultural-parallels',
        },
        {
          id: 'lp-ch5-5',
          content: 'The sudden transformation from safety to danger is a recurring theme in voyage narratives.',
          category: 'narrative-structure',
        },
      ],
    },

    {
      id: 'scene-4-first-voyage-decision',
      type: 'decision',
      backgroundImage: 'https://cdn.midjourney.com/[your-image-id]/0_0.png',
      prompt: 'The whale dives! Sinbad is thrown into the sea, far from the ship. What should he do?',
      context: 'The ship is sailing away without him. Sinbad must act quickly to survive.',
      timeLimit: 30,
      choices: [
        {
          id: 'choice-swim-ship',
          text: 'Try to swim after the ship',
          consequence: 'The ship is too far away. Sinbad swims until he finds a floating wooden trough to cling to.',
        },
        {
          id: 'choice-find-debris',
          text: 'Look for floating debris to hold onto',
          consequence: 'Sinbad finds a wooden trough from the ship. He clings to it, letting the waves carry him.',
          learningPoints: [
            {
              id: 'lp-choice-survival',
              content: 'In survival situations, conserving energy and using available resources is wiser than desperate action.',
              category: 'thematic-analysis',
            },
          ],
        },
        {
          id: 'choice-return-island',
          text: 'Try to return to the "island"',
          consequence: 'The whale is diving deep. Sinbad wisely abandons this idea and searches for something to float on.',
        },
      ],
      learningPoints: [],
    },

    {
      id: 'scene-5-first-voyage-rescue',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/[your-image-id]/0_0.png',
      content: `After drifting for days, Sinbad washed ashore on a mysterious island...

[Story content: Rescued by the king's men, given gifts, returns home wealthy despite losing original cargo]`,
      learningPoints: [
        {
          id: 'lp-ch5-6',
          content: 'Each voyage follows a pattern: departure, disaster, survival, reward, return.',
          category: 'narrative-structure',
        },
      ],
    },

    // SECOND VOYAGE - The Roc's Egg
    {
      id: 'scene-6-second-voyage-begins',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/[your-image-id]/0_0.png',
      content: `"Despite my first misfortune, the call of the sea was too strong," Sinbad continued...

[Story content: Sinbad can't resist adventure, sets out on second voyage, lands on an uninhabited island]`,
      learningPoints: [
        {
          id: 'lp-ch5-7',
          content: 'Sinbad\'s compulsion to return to the sea despite dangers reflects both merchant ambition and human curiosity.',
          category: 'character-analysis',
        },
      ],
    },

    {
      id: 'scene-7-left-behind',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/[your-image-id]/0_0.png',
      content: `Sinbad fell asleep in a pleasant grove. When he awoke, the ship had sailed without him...

[Story content: Alone on the island, despair, then discovers a huge white dome]`,
      learningPoints: [
        {
          id: 'lp-ch5-8',
          content: 'Being left behind is a recurring danger in Sinbad\'s voyages, reflecting real maritime fears.',
          category: 'historical-context',
        },
      ],
    },

    {
      id: 'scene-8-roc-egg',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/[your-image-id]/0_0.png',
      content: `The white dome was smooth as marble and fifty paces around. Suddenly, the sky darkened...

[Story content: Realizes it's an egg, the giant Roc bird returns, Sinbad's plan to tie himself to its leg]`,
      learningPoints: [
        {
          id: 'lp-ch5-9',
          content: 'The Roc is based on the real elephant bird of Madagascar, filtered through sailors\' exaggerations.',
          category: 'historical-context',
        },
        {
          id: 'lp-ch5-10',
          content: 'Sinbad often escapes danger by ingeniously using the source of danger itself.',
          category: 'character-analysis',
        },
      ],
    },

    {
      id: 'scene-9-roc-decision',
      type: 'decision',
      backgroundImage: 'https://cdn.midjourney.com/[your-image-id]/0_0.png',
      prompt: 'The Roc has landed beside its egg. How should Sinbad use this opportunity to escape?',
      context: 'This might be Sinbad\'s only chance to leave the deserted island.',
      timeLimit: 30,
      choices: [
        {
          id: 'choice-tie-to-leg',
          text: 'Tie yourself to the Roc\'s leg with your turban',
          consequence: 'Sinbad unwinds his turban and ties himself securely to the bird\'s massive leg. When dawn comes, the Roc flies away, carrying him.',
          learningPoints: [
            {
              id: 'lp-choice-ingenuity',
              content: 'Using the danger itself as a means of escape shows Sinbad\'s quick thinking.',
              category: 'thematic-analysis',
            },
          ],
        },
        {
          id: 'choice-grab-feather',
          text: 'Grab onto a tail feather',
          consequence: 'The feathers are too smooth to grip safely. Sinbad decides to use his turban to tie himself to the bird\'s leg instead.',
        },
        {
          id: 'choice-hide-nest',
          text: 'Hide in the nest and wait for another chance',
          consequence: 'This could take days or weeks with no food. Sinbad decides to take the risk of flying with the Roc now.',
        },
      ],
      learningPoints: [],
    },

    {
      id: 'scene-10-valley-of-diamonds',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/[your-image-id]/0_0.png',
      content: `The Roc descended into a deep valley surrounded by unclimbable mountains...

[Story content: Valley filled with diamonds, but also deadly serpents, cannot escape]`,
      learningPoints: [
        {
          id: 'lp-ch5-11',
          content: 'Wealth guarded by danger is a common folk tale motif, warning that riches come with risks.',
          category: 'symbolism',
        },
      ],
    },

    {
      id: 'scene-11-diamond-merchants',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/[your-image-id]/0_0.png',
      content: `Sinbad witnessed an ingenious method: merchants at the valley's rim threw down large pieces of meat...

[Story content: Diamonds stick to meat, giant eagles carry it up, merchants scare away eagles and collect diamonds]`,
      learningPoints: [
        {
          id: 'lp-ch5-12',
          content: 'The diamond-gathering method, while fantastic, reflects real trade route legends and ingenious problem-solving.',
          category: 'cultural-context',
        },
      ],
    },

    {
      id: 'scene-12-escape-valley-decision',
      type: 'decision',
      backgroundImage: 'https://cdn.midjourney.com/[your-image-id]/0_0.png',
      prompt: 'Sinbad needs to escape the valley. How can he use the merchants\' method?',
      context: 'The merchants above throw down meat for the eagles. Sinbad has seen their technique.',
      timeLimit: 30,
      choices: [
        {
          id: 'choice-signal-merchants',
          text: 'Try to signal the merchants above',
          consequence: 'The valley is too deep for them to see or hear him. Sinbad needs another plan.',
        },
        {
          id: 'choice-tie-to-meat',
          text: 'Tie yourself to a piece of meat and wait for an eagle',
          consequence: 'Sinbad fills his pockets with diamonds, then ties himself to a large piece of meat. An eagle soon carries him up to the mountain top.',
          learningPoints: [
            {
              id: 'lp-choice-observe',
              content: 'Sinbad\'s success often comes from carefully observing others\' methods and adapting them.',
              category: 'character-analysis',
            },
          ],
        },
        {
          id: 'choice-climb-serpent',
          text: 'Try to climb up using the serpents\' tunnels',
          consequence: 'The serpents are deadly and their tunnels lead deeper, not up. Sinbad needs to think of another way.',
        },
      ],
      learningPoints: [],
    },

    {
      id: 'scene-13-second-voyage-return',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/[your-image-id]/0_0.png',
      content: `The merchants were amazed to find a man among their meat...

[Story content: Shares diamonds with merchants, returns home even wealthier than before]`,
      learningPoints: [
        {
          id: 'lp-ch5-13',
          content: 'Sinbad\'s generosity in sharing diamonds shows he has learned from his experiences.',
          category: 'character-development',
        },
      ],
    },

    // THIRD VOYAGE - The Giant and the Serpent
    {
      id: 'scene-14-third-voyage-begins',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/[your-image-id]/0_0.png',
      content: `"Once again, I grew restless," Sinbad said. "The quiet life of a merchant at home could not satisfy me..."

[Story content: Third voyage begins, storm drives them to an island, encounters a giant]`,
      learningPoints: [
        {
          id: 'lp-ch5-14',
          content: 'The episodic structure lets each voyage escalate the dangers while maintaining the core character.',
          category: 'narrative-structure',
        },
      ],
    },

    {
      id: 'scene-15-giant-encounter',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/[your-image-id]/0_0.png',
      content: `On the island, they found a massive palace. Its owner returned - a giant as tall as a palm tree, with one eye...

[Story content: The cyclops-like giant, he begins eating the sailors one by one]`,
      learningPoints: [
        {
          id: 'lp-ch5-15',
          content: 'The one-eyed giant parallels the Cyclops from Greek mythology, showing cross-cultural story elements.',
          category: 'literary-parallels',
        },
      ],
    },

    {
      id: 'scene-16-defeat-giant-decision',
      type: 'decision',
      backgroundImage: 'https://cdn.midjourney.com/[your-image-id]/0_0.png',
      prompt: 'The giant sleeps after eating. The remaining sailors must decide how to escape.',
      context: 'If they do nothing, the giant will eat them all one by one. They must act now.',
      timeLimit: 30,
      choices: [
        {
          id: 'choice-heat-spits',
          text: 'Heat iron spits and blind the giant\'s eye',
          consequence: 'They heat two iron spits red-hot and drive them into the giant\'s single eye, blinding him. The giant\'s roars wake the island.',
          learningPoints: [
            {
              id: 'lp-choice-odysseus',
              content: 'This directly parallels Odysseus blinding the Cyclops, showing shared oral tradition roots.',
              category: 'literary-parallels',
            },
          ],
        },
        {
          id: 'choice-sneak-away',
          text: 'Try to sneak out while he sleeps',
          consequence: 'The door is too heavy to move quietly. They need to incapacitate the giant first.',
        },
        {
          id: 'choice-poison-food',
          text: 'Poison his food',
          consequence: 'They have no poison, and he eats them, not what they can prepare. They need a direct attack.',
        },
      ],
      learningPoints: [],
    },

    {
      id: 'scene-17-escape-rafts',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/[your-image-id]/0_0.png',
      content: `The blinded giant called for his brothers. The sailors built rafts and fled to sea...

[Story content: Giants throw boulders, many sailors killed, giant serpent on new island]`,
      learningPoints: [
        {
          id: 'lp-ch5-16',
          content: 'Escape from one danger often leads directly to another in Sinbad\'s voyages.',
          category: 'narrative-structure',
        },
      ],
    },

    {
      id: 'scene-18-serpent-survival',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/[your-image-id]/0_0.png',
      content: `A massive serpent stalked them each night, swallowing one sailor after another...

[Story content: Building protective wooden structures, serpent swallows last companion, Sinbad alone, rescue]`,
      learningPoints: [
        {
          id: 'lp-ch5-17',
          content: 'Sinbad is often the sole survivor, perhaps suggesting these are his embellished accounts.',
          category: 'narrative-technique',
        },
      ],
    },

    // CONCLUSION
    {
      id: 'scene-19-voyages-reflection',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/[your-image-id]/0_0.png',
      content: `"I had many more voyages," Sinbad told the porter, "each with its own perils and wonders..."

[Story content: Brief mentions of other voyages - buried alive, Old Man of the Sea, etc.]`,
      learningPoints: [
        {
          id: 'lp-ch5-18',
          content: 'Sinbad had seven voyages in total, each escalating in danger and wonder.',
          category: 'literary-structure',
        },
      ],
    },

    {
      id: 'scene-20-final-lesson',
      type: 'decision',
      backgroundImage: 'https://cdn.midjourney.com/[your-image-id]/0_0.png',
      prompt: 'The porter asks: "Would you say your wealth was worth all the danger?"',
      context: 'After hearing all of Sinbad\'s tales, Sinbad the Porter wonders about the price of adventure.',
      timeLimit: 30,
      choices: [
        {
          id: 'choice-wealth-worth',
          text: 'The wealth made it worthwhile',
          consequence: 'Sinbad smiles. "The wealth is good, yes. But the true treasure was the experiences, the sights no other person has seen."',
        },
        {
          id: 'choice-experience-worth',
          text: 'The experiences were the real treasure',
          consequence: 'Sinbad nods. "Exactly. The gold and jewels are pleasant, but the stories, the wonders I\'ve witnessed - those are priceless."',
          learningPoints: [
            {
              id: 'lp-choice-meaning',
              content: 'The stories suggest that experience and knowledge are more valuable than material wealth.',
              category: 'thematic-analysis',
            },
          ],
        },
        {
          id: 'choice-not-worth',
          text: 'No wealth is worth such dangers',
          consequence: 'Sinbad considers this. "Perhaps you are right to value safety. But some of us cannot resist the call of the unknown."',
        },
      ],
      learningPoints: [],
    },

    {
      id: 'scene-21-conclusion',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/[your-image-id]/0_0.png',
      content: `And so Sinbad the Sailor befriended Sinbad the Porter, sharing both his wealth and his wisdom...

[Story content: Reflection on the meaning of the voyages, the human drive to explore, the value of both safety and adventure]`,
      learningPoints: [
        {
          id: 'lp-ch5-19',
          content: 'Sinbad\'s stories represent the Islamic Golden Age\'s maritime trade networks and cultural exchange.',
          category: 'historical-context',
        },
        {
          id: 'lp-ch5-20',
          content: 'The tales balance wonder and warning: adventure brings rewards but also great risks.',
          category: 'thematic-analysis',
        },
        {
          id: 'lp-ch5-21',
          content: 'The frame story of two Sinbads connects wealth to storytelling - both are forms of currency.',
          category: 'literary-technique',
        },
      ],
      events: {
        onExit: [
          {
            type: 'quiz',
            componentId: 'quiz-chapter-5',
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

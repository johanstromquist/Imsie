import type { Chapter } from '../../../types';
import { chapter3Quiz } from '../quizzes/chapter-3-quiz';

/**
 * Chapter 3: Odin's Quest for Wisdom
 *
 * This chapter explores Odin's relentless pursuit of wisdom through sacrifice.
 * From hanging on Yggdrasil to learn the runes, to giving his eye for a drink
 * from Mimir's well, to stealing the mead of poetry—each sacrifice grants him
 * power and knowledge at great personal cost.
 */
export const chapter3: Chapter = {
  id: 'edda-ch3-wisdom',
  title: "Odin's Quest for Wisdom",
  description: 'Follow Odin\'s sacrifices to gain the knowledge that defines him as the Allfather.',

  prerequisites: {
    type: 'sequential',
  },

  learningObjectives: [
    'Understand the Norse concept of wisdom as worth any sacrifice',
    'Analyze the myth of Odin\'s sacrifice at Yggdrasil',
    'Recognize the importance of runes and poetry in Norse culture',
    'Explore the theme of knowledge and its costs',
  ],

  scenes: [
    // Scene 1: Odin's desire for wisdom
    {
      id: 'edda-ch3-scene-1-desire',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/80227b1c-ae3f-48b9-8336-8028a83a8328/0_0.png',
      image: 'https://cdn.midjourney.com/bb8c71f1-0287-4ef6-aa9b-dfe3d2726c5b/0_3.png',
      content: `High in Asgard, in the golden halls where the gods feast and make merry, Odin the Allfather sits alone in his high seat Hlidskjalf. From this throne, he can see all the Nine Worlds spread beneath him.

Yet for all his divine sight, for all his power as king of the gods, Odin knows there is much he does not understand. He sees the threads of fate being woven by the Norns, but cannot read their full meaning. He watches mortals struggle with their brief lives, but cannot grasp the deeper wisdom hidden in their experiences.

"Knowledge," Odin murmurs to his ravens Huginn and Muninn as they perch upon his shoulders. "Knowledge is power greater than any weapon. Wisdom is the true treasure—not gold, not glory, but understanding."

The Allfather rises from his throne, his single eye gleaming with determination. He has decided: he will seek wisdom, no matter what the cost.`,
      learningPoints: [
        {
          id: 'edda-ch3-lp-1-odin-seeker',
          content: 'Odin is characterized as a relentless seeker of knowledge, willing to sacrifice everything for wisdom.',
          category: 'character-analysis',
        },
        {
          id: 'edda-ch3-lp-2-wisdom-value',
          content: 'In Norse culture, wisdom and knowledge were valued above physical strength or material wealth.',
          category: 'cultural-context',
        },
      ],
    },

    // Scene 2: Dialogue with Mimir
    {
      id: 'edda-ch3-scene-2-mimir-dialogue',
      type: 'dialogue',
      backgroundImage: 'https://cdn.midjourney.com/faac8044-6884-4e35-853e-1c415c0f5b4a/0_0.png',
      character: {
        id: 'mimir',
        name: 'Mimir',
        portrait: 'https://cdn.midjourney.com/07055b16-63cc-4553-9644-85a0bc8f82de/0_0.png',
        description: 'The wise guardian of the well of knowledge',
      },
      dialogueTree: {
        id: 'node-1',
        speaker: 'mimir',
        text: 'Odin Allfather. I wondered when you would come to my well. Many seek the waters of wisdom, but few are willing to pay the price.',
        responses: [
          {
            id: 'response-1',
            text: 'What price do you ask, Mimir?',
            nextNodeId: 'node-2',
          },
          {
            id: 'response-2',
            text: 'I am Odin, king of Asgard. I demand you grant me a drink!',
            nextNodeId: 'node-3',
          },
        ],
        allNodes: [
          {
            id: 'node-2',
            speaker: 'mimir',
            text: 'Wisdom is bought with sacrifice, Allfather. The well grants knowledge of past, present, and future—but to drink from it, you must give something of equal value. What will you offer?',
            responses: [
              {
                id: 'response-2a',
                text: 'I offer gold from Asgard\'s treasuries.',
                nextNodeId: 'node-4',
              },
              {
                id: 'response-2b',
                text: 'What would you consider a worthy sacrifice?',
                nextNodeId: 'node-5',
              },
            ],
          },
          {
            id: 'node-3',
            speaker: 'mimir',
            text: 'Even kings must pay the price for wisdom, Odin. Your title means nothing here. The well demands sacrifice, not commands.',
            nextNodeId: 'node-5',
          },
          {
            id: 'node-4',
            speaker: 'mimir',
            text: 'Gold? The well has no use for metal and jewels. Wisdom cannot be bought with treasure, Allfather. It must be earned through sacrifice—through giving up something you truly value.',
            nextNodeId: 'node-5',
          },
          {
            id: 'node-5',
            speaker: 'mimir',
            text: 'Look into the well, Odin. What do you see reflected there? You see yourself with both eyes—two windows to the world. To gain inner sight, you must sacrifice outer vision. One eye for the wisdom of ages. This is my price.',
            responses: [
              {
                id: 'response-5a',
                text: 'I accept. One eye for infinite wisdom—it is a worthy trade.',
                nextNodeId: 'node-6',
                learningPoints: [
                  {
                    id: 'edda-ch3-lp-3-sacrifice-choice',
                    content: 'Odin\'s willingness to sacrifice his eye demonstrates the Norse value of wisdom over physical wholeness.',
                    category: 'thematic-analysis',
                  },
                ],
              },
            ],
          },
          {
            id: 'node-6',
            speaker: 'mimir',
            text: 'So be it. Make your offering, Allfather, and drink deep of wisdom.',
            isEnd: true,
          },
        ],
      },
      learningPoints: [
        {
          id: 'edda-ch3-lp-4-mimir-well',
          content: 'Mimir\'s well is located at the roots of Yggdrasil and grants wisdom of all times—past, present, and future.',
          category: 'historical-context',
        },
      ],
    },

    // Scene 3: Decision - what to sacrifice
    {
      id: 'edda-ch3-scene-3-sacrifice-decision',
      type: 'decision',
      backgroundImage: 'https://cdn.midjourney.com/b216d7e4-659b-4c41-a5d4-1b27dbc20385/0_0.png',
      prompt: 'You are Odin, standing before Mimir\'s well. What will you sacrifice for wisdom?',
      context: `The waters of the well shimmer before you, holding all the knowledge of the cosmos. Mimir waits patiently for your decision. You must choose what to give up.`,
      choices: [
        {
          id: 'choice-eye',
          text: 'Sacrifice one of your eyes',
          consequence: 'You reach up and pluck out your right eye, casting it into the well. The pain is sharp, but brief. As the well accepts your offering, understanding floods your mind. You now see not just with your remaining eye, but with the vision of wisdom itself.',
          learningPoints: [
            {
              id: 'edda-ch3-lp-5-eye-symbolism',
              content: 'The eye sacrifice symbolizes trading outer sight for inner vision—physical perception for spiritual understanding.',
              category: 'symbolism',
            },
          ],
        },
        {
          id: 'choice-hand',
          text: 'Offer your right hand',
          consequence: 'Mimir shakes his head. "A hand may be replaced with a sword-arm of equal strength, but an eye... that is a true sacrifice of your very perception. Choose again, Allfather."',
        },
        {
          id: 'choice-memory',
          text: 'Sacrifice a precious memory',
          consequence: 'Mimir considers this. "Memories fade with time anyway, Allfather. The well demands something permanent, something that changes you forever. An eye for an age of wisdom—this is the only trade I will accept."',
        },
      ],
      learningPoints: [
        {
          id: 'edda-ch3-lp-6-permanent-cost',
          content: 'Norse myths emphasize that true wisdom comes at permanent, irreversible cost.',
          category: 'thematic-analysis',
        },
      ],
    },

    // Scene 4: Odin drinks from the well
    {
      id: 'edda-ch3-scene-4-drinking',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/e6616ff3-a7c3-4f1c-8c71-460fa1e67f66/0_0.png',
      image: 'https://cdn.midjourney.com/2968445a-6152-4d47-aca2-244992284470/0_3.png',
      content: `With his right eye given to the depths of Mimir's well, Odin cups his hands and lifts the sacred water to his lips. The liquid is cold, clear, and tastes of starlight and ancient stone.

As he drinks, knowledge floods through him like lightning through a storm cloud. He sees the patterns of fate, the connections between all things, the web of wyrd that binds gods and mortals alike. He understands the speech of birds, the language of wind and water, the secrets whispered in the roots of mountains.

But the knowledge brings shadow along with light. Odin sees his own fate, the doom of the gods at Ragnarök. He sees the death of his son Baldr, the betrayal of Loki, the breaking of the world. Yet he also sees moments of beauty, courage, and heroism that make even tragedy meaningful.

"Wisdom is both gift and burden," Mimir observes as Odin lowers his hands, his single eye now gleaming with newfound understanding. "You will carry this weight forever, Allfather."

"I know," Odin replies. "And I would pay the price again."`,
      inlineAnnotations: [
        {
          id: 'wyrd-annotation',
          text: 'wyrd',
          tooltip: {
            title: 'Wyrd: The Web of Fate',
            content: 'Wyrd (pronounced "weird") is the Old Norse concept of fate—not as predetermined destiny, but as the accumulated weight of past actions shaping future outcomes. It\'s the web of cause and effect that connects all beings.',
            category: 'cultural-context',
          },
        },
      ],
      learningPoints: [
        {
          id: 'edda-ch3-lp-7-knowledge-burden',
          content: 'The myth shows that wisdom includes awareness of suffering and doom, making it both a gift and a burden.',
          category: 'thematic-analysis',
        },
        {
          id: 'edda-ch3-lp-8-fate-awareness',
          content: 'Odin\'s knowledge of Ragnarök shows the Norse belief that even gods cannot escape fate, only face it with courage.',
          category: 'cultural-context',
        },
      ],
    },

    // Scene 5: Primary source - Hávamál excerpt
    {
      id: 'edda-ch3-scene-5-havamal',
      type: 'primary-source',
      backgroundImage: 'https://cdn.midjourney.com/3d855738-46ee-44cc-a7c8-5f3d1c0ba485/0_0.png',
      prompt: 'Examine this excerpt from the Hávamál, a poem of Odin\'s wisdom',
      source: {
        title: 'Excerpt from the Hávamál (The Sayings of the High One)',
        author: 'Anonymous (attributed to Odin)',
        date: '10th-13th century',
        type: 'text',
        content: `Better to live well
Than to live long;
A man who kindles a fire,
Warms himself.

A foolish man
Lies awake all night,
Worrying over everything;
He is worn out when morning comes,
And his troubles are just the same.

Cattle die, kinsmen die,
You yourself will die;
I know one thing that never dies—
The reputation of the one who has died.

Praise no day until evening,
No wife until buried,
No sword until tested,
No maid until married,
No ice until crossed,
No ale until drunk.`,
        citation: 'Hávamál, Poetic Edda (c. 10th-13th century)',
      },
      questions: [
        {
          id: 'q1',
          question: 'What does the Hávamál suggest about the relationship between wealth and reputation?',
          type: 'multiple-choice',
          options: [
            'Wealth is more important than reputation',
            'Reputation outlasts material possessions and even life itself',
            'Both are equally temporary',
            'Neither matters in the end',
          ],
          correctAnswer: 'Reputation outlasts material possessions and even life itself',
          explanation: 'The verse "Cattle die, kinsmen die, you yourself will die; I know one thing that never dies—the reputation of the one who has died" emphasizes that honor and reputation are the only truly immortal things.',
        },
        {
          id: 'q2',
          question: 'What wisdom does the poem offer about making judgments?',
          type: 'multiple-choice',
          options: [
            'Make quick decisions based on first impressions',
            'Never trust anyone or anything',
            'Test and wait before praising or trusting',
            'Always be optimistic about outcomes',
          ],
          correctAnswer: 'Test and wait before praising or trusting',
          explanation: 'The stanza about praising no day until evening, testing swords before trusting them, and crossing ice before judging it safe teaches cautious wisdom—to verify before committing.',
        },
        {
          id: 'q3',
          question: 'What is the tone and purpose of this wisdom poetry?',
          type: 'multiple-choice',
          options: [
            'Religious and spiritual',
            'Practical and pragmatic',
            'Romantic and idealistic',
            'Pessimistic and dark',
          ],
          correctAnswer: 'Practical and pragmatic',
          explanation: 'The Hávamál offers practical life advice grounded in experience—how to live well, when to trust, what truly matters. It\'s wisdom for navigating the real world.',
        },
      ],
      learningPoints: [
        {
          id: 'edda-ch3-lp-9-havamal',
          content: 'The Hávamál is a collection of Old Norse wisdom poetry attributed to Odin, offering practical advice for living honorably.',
          category: 'historical-context',
        },
        {
          id: 'edda-ch3-lp-10-reputation',
          content: 'Norse culture valued reputation and honor as the only things that outlast death.',
          category: 'cultural-context',
        },
      ],
    },

    // Scene 9: Quote attribution - Odin's wisdom sayings
    {
      id: 'edda-ch3-scene-9-quotes',
      type: 'quote-attribution',
      backgroundImage: 'https://cdn.midjourney.com/08c7dc0f-a2f6-481b-bc28-a896d285a8e4/0_0.png',
      prompt: 'Which of Odin\'s wisdom sayings from the Hávamál matches each situation?',
      quotes: [
        {
          id: 'quote-1',
          text: 'Cattle die, kinsmen die, you yourself will die; I know one thing that never dies—the reputation of the one who has died.',
          speaker: 'About lasting legacy',
          context: 'A warrior worries about what will happen after his death.',
          explanation: 'This famous verse emphasizes that honor and reputation are the only immortal things—the Norse version of "eternal life."',
        },
        {
          id: 'quote-2',
          text: 'A foolish man lies awake all night, worrying over everything; he is worn out when morning comes, and his troubles are just the same.',
          speaker: 'About worry and anxiety',
          context: 'A merchant cannot sleep, troubled by his business concerns.',
          explanation: 'This verse offers practical wisdom about the futility of excessive worry—action is better than sleepless anxiety.',
        },
        {
          id: 'quote-3',
          text: 'Better to live well than to live long; a man who kindles a fire warms himself.',
          speaker: 'About quality of life',
          context: 'A young warrior questions whether to seek a long, safe life or a meaningful, dangerous one.',
          explanation: 'This saying emphasizes that the quality of life matters more than its length—better to live with purpose than merely exist.',
        },
        {
          id: 'quote-4',
          text: 'Praise no day until evening, no wife until buried, no sword until tested, no ice until crossed.',
          speaker: 'About premature judgment',
          context: 'A farmer celebrates his harvest before bringing it safely home.',
          explanation: 'This verse teaches caution—don\'t judge success until the outcome is certain. Many things can change before the end.',
        },
        {
          id: 'quote-5',
          text: 'Give praise to the day when evening comes, to a wife when she is dead, to a sword when it is tried, to ice when it is crossed.',
          speaker: 'About earned trust',
          context: 'A jarl considers whether to trust a new ally.',
          explanation: 'Similar to the previous verse, this emphasizes that trust and praise must be earned through testing and time.',
        },
      ],
      learningPoints: [
        {
          id: 'edda-ch3-lp-18-practical-wisdom',
          content: 'The Hávamál contains practical life wisdom applicable to daily situations, not just grand cosmic truths.',
          category: 'cultural-context',
        },
      ],
    },

    // Scene 6: Learning of the runes
    {
      id: 'edda-ch3-scene-6-rune-knowledge',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/3400fd78-0588-4734-8084-46e77094ba50/0_0.png',
      image: 'https://cdn.midjourney.com/7b8f7268-3c08-4c65-8d04-29daaa5177d7/0_3.png',
      content: `But Odin's quest for wisdom did not end with Mimir's well. The Allfather learned of another, deeper secret—the runes.

The runes were not merely an alphabet for writing. They were symbols of cosmic power, each one containing magic and meaning beyond simple letters. Carved on weapons, they could bring victory. Carved on amulets, they could protect or heal. But the runes would only reveal their secrets to one who proved worthy.

To learn the runes, Odin discovered, he would need to undergo an ordeal that would test him to his very limits.

He would have to sacrifice himself... to himself.`,
      inlineAnnotations: [
        {
          id: 'runes-annotation',
          text: 'runes',
          tooltip: {
            title: 'The Magical Alphabet',
            content: 'Runes were the alphabet used by Norse and Germanic peoples, but they were believed to have magical properties. Each rune had a name, a sound, and a deeper meaning. Runestones bearing inscriptions have been found throughout Scandinavia.',
            category: 'historical-context',
          },
        },
      ],
      learningPoints: [
        {
          id: 'edda-ch3-lp-11-rune-magic',
          content: 'Runes were believed to be more than writing—they were symbols of magical power and cosmic knowledge.',
          category: 'cultural-context',
        },
        {
          id: 'edda-ch3-lp-12-sacrifice-to-self',
          content: 'Odin\'s sacrifice of himself to himself represents a shamanistic ordeal of spiritual transformation.',
          category: 'thematic-analysis',
        },
      ],
    },

    // Scene 7: Odin's ordeal on Yggdrasil
    {
      id: 'edda-ch3-scene-7-hanging',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/8429daa9-66c9-44c0-9cd2-de0239646ba2/0_0.png',
      image: 'https://cdn.midjourney.com/7b8f7268-3c08-4c65-8d04-29daaa5177d7/0_3.png',
      content: `And so Odin climbed the great World Tree Yggdrasil. He took his spear Gungnir and pierced his own side, then hung himself from a high branch. No food. No water. Alone in agony, suspended between heaven and earth.

For nine days and nine nights, Odin hung there. The wind tore at him. Hunger gnawed his belly. Thirst cracked his lips. His wound throbbed with pain. The other gods could not help him—this was a sacrifice that demanded isolation.

On the ninth night, as his strength ebbed to almost nothing, Odin looked down into the darkness beneath the tree's roots. And there, in that void, he saw them: the runes.

They glowed with ancient power, secrets carved in the fabric of existence itself. With his last reserves of will, Odin reached out—not with his hand, but with his mind—and grasped them.

The runes seared themselves into his consciousness. With a terrible cry, Odin fell from the tree, the knowledge of the runes now branded upon his soul. He had paid the price, endured the ordeal, and won the prize.

Nine songs of power. Twenty-four runes of wisdom. The ability to read the threads of fate and weave magic with words and symbols.`,
      inlineAnnotations: [
        {
          id: 'nine-annotation',
          text: 'nine',
          tooltip: {
            title: 'The Sacred Number Nine',
            content: 'The number nine appears throughout Norse mythology as a sacred number: nine worlds, nine nights of hanging, nine days of journeys. It represents completeness and the full cycle of cosmic order.',
            category: 'cultural-context',
          },
        },
      ],
      learningPoints: [
        {
          id: 'edda-ch3-lp-13-yggdrasil-ordeal',
          content: 'Odin\'s nine-day hanging on Yggdrasil parallels shamanistic initiation rituals involving suffering and spiritual death.',
          category: 'cultural-context',
        },
        {
          id: 'edda-ch3-lp-14-rune-discovery',
          content: 'The runes are discovered through extreme sacrifice, emphasizing that the most valuable knowledge requires the greatest cost.',
          category: 'thematic-analysis',
        },
        {
          id: 'edda-ch3-lp-15-self-sacrifice',
          content: 'The concept of self-sacrifice to oneself represents spiritual transformation through ordeal.',
          category: 'thematic-analysis',
        },
      ],
    },

    // Scene 8: Narrative - Learning the Runes
    {
      id: 'edda-ch3-scene-8-learning-runes',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/2c8022d3-6ffd-483a-9ca6-10af84ac672f/0_0.png',
      image: 'https://cdn.midjourney.com/7b8f7268-3c08-4c65-8d04-29daaa5177d7/0_3.png',
      content: `The runes are not merely letters—each one carries meaning, power, and memory. Let us examine five of the most important:

**ᚠ Fehu** - The first rune of the Elder Futhark. Its name means "cattle" or "wealth," for in the ancient North, cattle were the measure of prosperity. This rune represents material success, abundance, and the flow of wealth through the world.

**ᚢ Uruz** - Named for the aurochs, the mighty wild ox that once roamed the northern forests. This rune embodies raw, primal strength—not refined like a warrior's skill, but wild and untamed like the beast itself. It speaks of vitality, endurance, and physical power.

**ᚨ Ansuz** - Odin's own rune, representing divine communication and wisdom. Its name means "god" or "divine breath." Through this rune flows inspiration, poetry, and the voice of the gods themselves. It is the rune of revelation and spiritual insight.

**ᚱ Raido** - The rune of riding and journeying. Not merely physical travel, but any movement forward—a spiritual path, a life journey, progress toward a goal. Vikings carved this rune when setting out on voyages, seeking safe passage and successful ventures.

**ᛏ Tiwaz** - Named for Tyr, the one-handed god of war and justice. This rune represents honor, self-sacrifice, and the warrior's code. Where Uruz is raw strength, Tiwaz is disciplined courage—the willingness to sacrifice for what is right.

These five runes alone contain worlds of meaning. Now you must prove you have learned their wisdom.`,
      inlineAnnotations: [
        {
          id: 'elder-futhark-annotation',
          text: 'Elder Futhark',
          tooltip: {
            title: 'The Elder Futhark',
            content: 'The oldest runic alphabet, dating from roughly 150-800 CE. It consists of 24 runes divided into three groups of eight called ættir (families). Each rune had both a phonetic sound and a symbolic meaning.',
            category: 'historical-context',
          },
        },
        {
          id: 'aurochs-annotation',
          text: 'aurochs',
          tooltip: {
            title: 'The Aurochs',
            content: 'An extinct species of wild cattle that stood over 6 feet tall at the shoulder. The last aurochs died in Poland in 1627. In Norse times, these massive beasts represented untamed nature and raw power.',
            category: 'historical-context',
          },
        },
      ],
      learningPoints: [
        {
          id: 'edda-ch3-lp-16a-rune-meanings',
          content: 'Each rune in the Elder Futhark alphabet carried both a phonetic value and a deeper symbolic meaning rooted in Norse culture.',
          category: 'cultural-context',
        },
        {
          id: 'edda-ch3-lp-16b-rune-names',
          content: 'Rune names often referred to concrete objects (cattle, aurochs, riding) that represented abstract concepts (wealth, strength, journey).',
          category: 'literary-technique',
        },
      ],
    },

    // Scene 9: Custom mini-game - Runic puzzle (Image Choice game)
    {
      id: 'edda-ch3-scene-9-rune-game',
      type: 'custom-mini-game',
      backgroundImage: 'https://cdn.midjourney.com/2c8022d3-6ffd-483a-9ca6-10af84ac672f/0_0.png',
      gameType: 'image-choice',
      config: {
        title: 'Master the Runes',
        prompt: 'Match each rune with its meaning and power',
        description: 'Odin has taught you the runes. Now prove your understanding by matching each rune to its correct meaning.',
        scenarios: [
          {
            id: 'scenario-fehu',
            question: 'Which rune represents wealth and prosperity?',
            image: 'https://cdn.midjourney.com/7b8f7268-3c08-4c65-8d04-29daaa5177d7/0_3.png',
            options: [
              { id: 'rune-uruz', label: 'ᚢ Uruz', description: 'Named for a wild beast' },
              { id: 'rune-fehu', label: 'ᚠ Fehu', description: 'First of the Elder Futhark' },
              { id: 'rune-raido', label: 'ᚱ Raido', description: 'Related to movement' },
              { id: 'rune-ansuz', label: 'ᚨ Ansuz', description: 'Associated with a god' },
            ],
            correctAnswerId: 'rune-fehu',
            explanation: 'Fehu represents cattle (the primary form of wealth in Norse society) and prosperity.',
          },
          {
            id: 'scenario-uruz',
            question: 'Which rune represents primal strength and the aurochs?',
            image: 'https://cdn.midjourney.com/7b8f7268-3c08-4c65-8d04-29daaa5177d7/0_3.png',
            options: [
              { id: 'rune-fehu', label: 'ᚠ Fehu', description: 'First of the Elder Futhark' },
              { id: 'rune-raido', label: 'ᚱ Raido', description: 'Related to movement' },
              { id: 'rune-tiwaz', label: 'ᛏ Tiwaz', description: 'Named for a god' },
              { id: 'rune-uruz', label: 'ᚢ Uruz', description: 'Named for a wild beast' },
            ],
            correctAnswerId: 'rune-uruz',
            explanation: 'Uruz represents the aurochs (wild ox) and symbolizes untamed strength and vitality.',
          },
          {
            id: 'scenario-ansuz',
            question: 'Which rune is associated with Odin and divine wisdom?',
            image: 'https://cdn.midjourney.com/7b8f7268-3c08-4c65-8d04-29daaa5177d7/0_3.png',
            options: [
              { id: 'rune-fehu', label: 'ᚠ Fehu', description: 'First of the Elder Futhark' },
              { id: 'rune-ansuz', label: 'ᚨ Ansuz', description: 'Means divine breath' },
              { id: 'rune-uruz', label: 'ᚢ Uruz', description: 'Named for a wild beast' },
              { id: 'rune-tiwaz', label: 'ᛏ Tiwaz', description: 'Named for a god' },
            ],
            correctAnswerId: 'rune-ansuz',
            explanation: 'Ansuz is associated with Odin himself and represents wisdom, communication, and divine breath.',
          },
          {
            id: 'scenario-raido',
            question: 'Which rune represents journey and travel?',
            image: 'https://cdn.midjourney.com/7b8f7268-3c08-4c65-8d04-29daaa5177d7/0_3.png',
            options: [
              { id: 'rune-ansuz', label: 'ᚨ Ansuz', description: 'Means divine breath' },
              { id: 'rune-uruz', label: 'ᚢ Uruz', description: 'Named for a wild beast' },
              { id: 'rune-fehu', label: 'ᚠ Fehu', description: 'First of the Elder Futhark' },
              { id: 'rune-raido', label: 'ᚱ Raido', description: 'Related to movement' },
            ],
            correctAnswerId: 'rune-raido',
            explanation: 'Raido represents riding and journeying, both physical and spiritual paths.',
          },
          {
            id: 'scenario-tiwaz',
            question: 'Which rune represents warrior\'s honor and the god Tyr?',
            image: 'https://cdn.midjourney.com/7b8f7268-3c08-4c65-8d04-29daaa5177d7/0_3.png',
            options: [
              { id: 'rune-raido', label: 'ᚱ Raido', description: 'Related to movement' },
              { id: 'rune-ansuz', label: 'ᚨ Ansuz', description: 'Means divine breath' },
              { id: 'rune-uruz', label: 'ᚢ Uruz', description: 'Named for a wild beast' },
              { id: 'rune-tiwaz', label: 'ᛏ Tiwaz', description: 'Named for a god' },
            ],
            correctAnswerId: 'rune-tiwaz',
            explanation: 'Tiwaz represents the god Tyr and symbolizes honor, justice, and self-sacrifice.',
          },
        ],
      },
      learningPoints: [
        {
          id: 'edda-ch3-lp-16-elder-futhark',
          content: 'The Elder Futhark is the oldest runic alphabet, consisting of 24 runes divided into three groups called ættir.',
          category: 'historical-context',
        },
        {
          id: 'edda-ch3-lp-17-rune-meanings',
          content: 'Each rune had both a phonetic value and a deeper symbolic meaning related to Norse cosmology and daily life.',
          category: 'cultural-context',
        },
      ],
    },

    // Scene 10: The mead of poetry
    {
      id: 'edda-ch3-scene-10-mead-story',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/38b33202-6fea-44d6-8a49-b3d31523c9ff/0_0.png',
      image: 'https://cdn.midjourney.com/a6a1cc18-420a-406a-878b-f244665d4e35/0_2.png',
      content: `Having gained the wisdom of Mimir's well and the power of the runes, Odin learned of one more treasure: the Mead of Poetry.

This magical mead was brewed from the blood of Kvasir, the wisest being ever created, mixed with honey. Whoever drank it would become a great poet and scholar, able to speak with eloquence and compose verses of power.

But the mead was jealously guarded by the giant Suttung, who kept it locked away in a mountain cave, watched over by his daughter Gunnlod.

As always, Odin would not be deterred. If he wanted the mead—and he did—he would find a way to obtain it, no matter the difficulty or the deception required.`,
      inlineAnnotations: [
        {
          id: 'kvasir-annotation',
          text: 'Kvasir',
          tooltip: {
            title: 'The Wisest Being',
            content: 'Kvasir was created from the saliva of the Aesir and Vanir gods when they made peace. He was so wise that no question could stump him. His murder and the brewing of his blood into the Mead of Poetry is a central Norse myth.',
            category: 'historical-context',
          },
        },
      ],
      learningPoints: [
        {
          id: 'edda-ch3-lp-19-mead-origin',
          content: 'The Mead of Poetry was brewed from the blood of Kvasir, the wisest being, making it the source of poetic inspiration.',
          category: 'historical-context',
        },
        {
          id: 'edda-ch3-lp-20-poetry-value',
          content: 'Poetry was highly valued in Norse culture as a form of wisdom, magic, and cultural preservation.',
          category: 'cultural-context',
        },
      ],
    },

    // Scene 11: Dialogue with Gunnlod
    {
      id: 'edda-ch3-scene-11-gunnlod-dialogue',
      type: 'dialogue',
      backgroundImage: 'https://cdn.midjourney.com/44ec2e95-a6b1-468e-b1d5-00ca422a327c/0_0.png',
      character: {
        id: 'gunnlod',
        name: 'Gunnlod',
        portrait: 'https://cdn.midjourney.com/f96c9899-3b7c-4a28-a19e-6ca5027e83cd/0_0.png',
        description: 'Daughter of the giant Suttung, guardian of the mead',
      },
      dialogueTree: {
        id: 'node-1',
        speaker: 'gunnlod',
        text: 'Who are you, stranger? How did you enter my father\'s mountain?',
        responses: [
          {
            id: 'response-1',
            text: 'I am a wanderer seeking shelter. The storm drove me here.',
            nextNodeId: 'node-2',
          },
          {
            id: 'response-2',
            text: 'I am Bölverk, a worker looking for employment.',
            nextNodeId: 'node-2',
          },
        ],
        allNodes: [
          {
            id: 'node-2',
            speaker: 'gunnlod',
            text: 'You are no ordinary wanderer. There is something about you... But I am weary of my duty, guarding this mead day and night with no companionship. Perhaps you will stay and speak with me?',
            responses: [
              {
                id: 'response-2a',
                text: 'I would be honored to keep you company.',
                nextNodeId: 'node-3',
              },
            ],
          },
          {
            id: 'node-3',
            speaker: 'gunnlod',
            text: 'It has been so long since I had anyone to talk to. My father is harsh and trusts no one. Tell me of the outside world, of the things you have seen.',
            responses: [
              {
                id: 'response-3a',
                text: 'Share stories of distant lands and adventures',
                nextNodeId: 'node-4',
              },
            ],
          },
          {
            id: 'node-4',
            speaker: 'gunnlod',
            text: 'Your tales are wondrous! You speak with such eloquence, as if you yourself might drink from the Mead of Poetry. Perhaps... perhaps I could grant you a single sip, for the joy you have brought me in my loneliness.',
            responses: [
              {
                id: 'response-4a',
                text: 'Accept her generous offer gratefully',
                nextNodeId: 'node-5',
                learningPoints: [
                  {
                    id: 'edda-ch3-lp-21-seduction',
                    content: 'Odin uses charm, storytelling, and companionship—rather than force—to achieve his goal.',
                    category: 'character-analysis',
                  },
                ],
              },
            ],
          },
          {
            id: 'node-5',
            speaker: 'gunnlod',
            text: 'Three nights you have stayed with me, three nights of stories and companionship I will never forget. Take your drink, mysterious stranger.',
            isEnd: true,
          },
        ],
      },
      learningPoints: [
        {
          id: 'edda-ch3-lp-22-trickery',
          content: 'Odin often uses disguise, deception, and charm to achieve his goals—showing that wisdom includes cunning.',
          category: 'character-analysis',
        },
      ],
    },

    // Scene 12: Decision - how to escape
    {
      id: 'edda-ch3-scene-12-escape-decision',
      type: 'decision',
      backgroundImage: 'https://cdn.midjourney.com/f581838c-b43a-473f-945f-a47c86bf9b99/0_0.png',
      prompt: 'Odin has drunk all three vessels of the mead. How should he escape before Suttung discovers the theft?',
      context: `Gunnlod has fallen asleep, trusting the stranger she came to care for. But "Bölverk" has drunk not one sip, but all three vessels of the precious mead. Odin now faces a problem: Suttung will soon discover the theft, and the mountain is deep within giant territory.`,
      choices: [
        {
          id: 'choice-eagle',
          text: 'Transform into an eagle and fly away',
          consequence: 'Odin shifts his shape into that of a great eagle. With powerful wingbeats, he bursts from the mountain cave. Behind him, Suttung roars in rage and transforms into an eagle himself, giving chase. Odin flies with all his might toward Asgard, the giant close behind. The gods, seeing his approach, set out vessels to catch the mead as Odin spits it out upon reaching safety—though in his haste, some drops fall to Midgard, giving lesser poets their small measure of inspiration.',
          learningPoints: [
            {
              id: 'edda-ch3-lp-23-shapeshifting',
              content: 'Odin\'s ability to shapeshift into an eagle shows his mastery of magic and transformation.',
              category: 'character-analysis',
            },
            {
              id: 'edda-ch3-lp-24-poetry-distribution',
              content: 'The myth explains why some have great poetic gift (from the mead Odin saved) while others have only minor talent (from what he spilled).',
              category: 'thematic-analysis',
            },
          ],
        },
        {
          id: 'choice-fight',
          text: 'Stand and fight Suttung when he discovers the theft',
          consequence: 'Brave as this choice may be, it is foolish. Suttung is a powerful giant in his own territory, and Odin would be outnumbered. A wise god knows when to retreat. You reconsider your approach.',
        },
        {
          id: 'choice-sneak',
          text: 'Try to sneak out slowly while Gunnlod sleeps',
          consequence: 'Stealth might work for a thief stealing gold, but Odin carries three vessels of liquid inside him. The moment he tries to creep away, Gunnlod stirs, and Suttung\'s guards are alerted. Speed, not stealth, is needed here.',
        },
      ],
      learningPoints: [
        {
          id: 'edda-ch3-lp-25-cunning-escape',
          content: 'Wisdom includes knowing when to fight and when to flee—Odin chooses the latter to preserve his prize.',
          category: 'thematic-analysis',
        },
      ],
    },

    // Scene 13: The gift of poetry
    {
      id: 'edda-ch3-scene-13-gift',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/af8835de-6497-4af2-af09-8841813a16ce/0_0.png',
      image: 'https://cdn.midjourney.com/a6a1cc18-420a-406a-878b-f244665d4e35/0_2.png',
      content: `And so Odin returned to Asgard with the Mead of Poetry, won through wit, charm, and daring escape. The gods welcomed him with celebration, for they knew the value of what he had brought.

But Odin did not keep the mead for himself and the gods alone. He shared it with mortal poets, skalds, and wisdom-seekers—those who honored knowledge and could weave words with skill. Through poetry, the deeds of heroes would be remembered, the wisdom of the ages preserved, and the culture of the North kept alive.

Three great sacrifices Odin had made in his quest for wisdom: his eye to Mimir's well, his flesh during nine nights on Yggdrasil, and his honor in the seduction and betrayal of Gunnlod. Each came with a cost, each brought him closer to understanding the mysteries of existence.

"This is the nature of wisdom," Odin declared to the assembled gods. "It is bought with sacrifice. It is earned through ordeal. It is preserved through poetry and passed to those who seek it with worthy hearts."

The Allfather stood before his people, one-eyed and scarred, but wiser than any being in the Nine Worlds. He had paid the price, and he would continue to seek knowledge until the very end of days—until Ragnarök itself.`,
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
      learningPoints: [
        {
          id: 'edda-ch3-lp-26-sharing-wisdom',
          content: 'Odin shares the mead with worthy mortals, showing that knowledge should be passed on, not hoarded.',
          category: 'thematic-analysis',
        },
        {
          id: 'edda-ch3-lp-27-poetry-preservation',
          content: 'Poetry was the primary means of preserving cultural memory and history in pre-literate Norse society.',
          category: 'cultural-context',
        },
        {
          id: 'edda-ch3-lp-28-wisdom-cost',
          content: 'The chapter\'s central theme: all wisdom requires sacrifice, and the greatest wisdom requires the greatest cost.',
          category: 'thematic-analysis',
        },
      ],
    },
  ],

  endQuiz: chapter3Quiz,
};

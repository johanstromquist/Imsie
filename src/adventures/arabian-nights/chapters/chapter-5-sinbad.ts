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
      type: 'dialogue',
      backgroundImage: 'https://cdn.midjourney.com/b37cce7f-d7a0-4890-8a85-6d791e6ff348/0_0.png',
      character: {
        id: 'sinbad-sailor',
        name: 'Sinbad the Sailor',
        portrait: 'https://cdn.midjourney.com/3c8de4fd-df08-46d6-842e-4249927467ca/0_0.png',
        description: 'A wealthy merchant who earned his fortune through seven extraordinary voyages',
      },
      dialogueTree: {
        id: 'node-1',
        speaker: 'sinbad-sailor',
        text: 'Welcome, my friend. I overheard you outside, wondering at the difference between our fortunes. You think perhaps I was born to this wealth? Please, sit. Let me tell you how I truly earned it.',
        responses: [
          {
            id: 'response-question-fortune',
            text: 'We share the same name, yet such different lives. Where is the justice?',
            nextNodeId: 'node-2',
          },
          {
            id: 'response-curious',
            text: 'I am curious how you came by such wealth',
            nextNodeId: 'node-2',
          },
          {
            id: 'response-grateful',
            text: 'You are most generous to invite me in',
            nextNodeId: 'node-3',
          },
        ],
        allNodes: [
          {
            id: 'node-2',
            speaker: 'sinbad-sailor',
            text: 'Justice? Ah, you believe I was simply lucky, born into fortune. But I assure you, every coin I possess was earned through trials that would have broken lesser men. I squandered my inheritance in my youth and had to rebuild from nothing.',
            responses: [
              {
                id: 'response-how',
                text: 'How did you rebuild your fortune?',
                nextNodeId: 'node-4',
              },
              {
                id: 'response-dangerous',
                text: 'What kinds of trials?',
                nextNodeId: 'node-5',
              },
              {
                id: 'response-youth',
                text: 'You squandered your inheritance?',
                nextNodeId: 'node-6',
              },
            ],
          },
          {
            id: 'node-3',
            speaker: 'sinbad-sailor',
            text: 'Generosity costs me nothing, and your presence reminds me of my own humble beginnings. Before my voyages, I was penniless—having foolishly wasted my father\'s fortune on idle pleasures.',
            responses: [
              {
                id: 'response-voyages',
                text: 'Voyages? You are a sailor?',
                nextNodeId: 'node-4',
              },
              {
                id: 'response-penniless',
                text: 'How did you go from penniless to... this?',
                nextNodeId: 'node-4',
              },
            ],
          },
          {
            id: 'node-4',
            speaker: 'sinbad-sailor',
            text: 'Through seven voyages across the seas. Each one brought unimaginable dangers—living islands that were actually giant whales, birds so massive they could carry off elephants, valleys filled with diamonds but guarded by enormous serpents, one-eyed giants who ate men alive...',
            responses: [
              {
                id: 'response-impossible',
                text: 'Such things cannot be real!',
                nextNodeId: 'node-7',
              },
              {
                id: 'response-believe',
                text: 'I have heard sailors\' tales of such wonders',
                nextNodeId: 'node-8',
              },
              {
                id: 'response-seven',
                text: 'Seven voyages? Tell me more',
                nextNodeId: 'node-9',
              },
            ],
          },
          {
            id: 'node-5',
            speaker: 'sinbad-sailor',
            text: 'Trials that tested every fiber of my being. I clung to driftwood for days after my ship abandoned me. I tied myself to the leg of a mythical Roc to escape a deserted island. I was trapped in a valley of diamonds guarded by giant serpents. I blinded a one-eyed giant to escape being eaten alive.',
            responses: [
              {
                id: 'response-seven-q',
                text: 'How many voyages did you make?',
                nextNodeId: 'node-9',
              },
              {
                id: 'response-worth',
                text: 'Was it worth such terrible dangers?',
                nextNodeId: 'node-10',
              },
            ],
          },
          {
            id: 'node-6',
            speaker: 'sinbad-sailor',
            text: 'Yes, I am ashamed to say it. When my father died, he left me considerable wealth. I was young, foolish, and thought the money would never run out. I hosted grand parties, bought expensive clothes, surrounded myself with false friends. Within a few years, I had nothing.',
            responses: [
              {
                id: 'response-then',
                text: 'What did you do then?',
                nextNodeId: 'node-4',
              },
              {
                id: 'response-lesson',
                text: 'You learned from that mistake?',
                nextNodeId: 'node-11',
              },
            ],
          },
          {
            id: 'node-7',
            speaker: 'sinbad-sailor',
            text: 'I understand your skepticism. I once thought such tales were exaggerations too. But I have lived them. I have the scars to prove it, and the diamonds I brought back from the Valley speak for themselves. The world is far stranger than we imagine from behind safe walls.',
            responses: [
              {
                id: 'response-tell-tales',
                text: 'I would hear these tales in full',
                nextNodeId: 'node-9',
              },
              {
                id: 'response-proof',
                text: 'You have proof of these wonders?',
                nextNodeId: 'node-12',
              },
            ],
          },
          {
            id: 'node-8',
            speaker: 'sinbad-sailor',
            text: 'Then you have wisdom beyond most. Sailors speak truth when they return from the deep seas—though their tales are often dismissed by those who have never left solid ground. I am one of the few who survived to tell these tales.',
            responses: [
              {
                id: 'response-hear-story',
                text: 'Please, tell me your stories',
                nextNodeId: 'node-9',
              },
            ],
          },
          {
            id: 'node-9',
            speaker: 'sinbad-sailor',
            text: 'Seven voyages, yes. Each more extraordinary and perilous than the last. And after each one, I swore I would never return to the sea—yet the call of adventure always drew me back. Stay, eat, and I shall tell you of three of my voyages. The tales alone may be worth more than any cargo I ever carried.',
            isEnd: true,
          },
          {
            id: 'node-10',
            speaker: 'sinbad-sailor',
            text: 'You ask the right question, my friend. The wealth? Yes, it is good. But the true treasure was the experiences themselves—the sights no other person has seen, the tests of courage and cleverness, the knowledge that I could survive the impossible. Let me tell you my tales, and you can judge for yourself.',
            isEnd: true,
          },
          {
            id: 'node-11',
            speaker: 'sinbad-sailor',
            text: 'I did. Losing everything taught me the value of hard work and wisdom. I became a merchant sailor, risking what little I had left on trade voyages. The sea is dangerous, but it is also full of opportunities for those brave enough—or desperate enough—to seize them.',
            responses: [
              {
                id: 'response-tell-all',
                text: 'Tell me everything',
                nextNodeId: 'node-9',
              },
            ],
          },
          {
            id: 'node-12',
            speaker: 'sinbad-sailor',
            text: 'The finest diamonds you will ever see—pulled from a valley where the cliffs were too steep for any man to climb, where giant serpents hunted at night. I escaped by tying myself to a piece of meat that an eagle carried out. The merchants who used this method were astonished when I emerged from their meat delivery! But enough talk of proof—let me tell you the full tale.',
            isEnd: true,
          },
        ],
      },
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
      backgroundImage: 'https://cdn.midjourney.com/2139224a-af7f-4d0c-bd74-9687a728ae7d/0_0.png',
      image: 'https://cdn.midjourney.com/ead7d7a9-646e-4b70-b4e2-2a20f0ea2bc3/0_0.png',
      content: `"For my first voyage," Sinbad began, "I must confess that I did not start as the wise man you see before you. When my father died, he left me a considerable fortune. I was young and foolish, and I squandered it all on luxuries and pleasures. I hosted grand parties, bought expensive clothes, and lived as if the money would never run out.

But of course, it did run out. One day I awoke to find myself nearly penniless, my fine house empty, my so-called friends vanished like morning mist. I sat among my few remaining possessions and realized I had wasted my inheritance—my father's life's work—on nothing of value.

That moment changed me. I looked at what little I had left and made a decision: I would become a merchant. I would travel the trade routes, buy and sell goods, and rebuild my fortune through my own efforts. But this time, I vowed, I would earn it through work and wisdom, not waste it through folly.

I sold everything I had left and used the money to buy merchandise—fine goods from Baghdad that would fetch good prices in distant lands. Then I joined a company of merchants boarding a great ship bound for the islands of the Indian Ocean.

As our ship left the harbor and Baghdad disappeared behind us, I felt both terror and exhilaration. The sea stretched endlessly before us, filled with possibility and danger in equal measure. I was no longer a wastrel living off my father's name. I was Sinbad the merchant, seeking my fortune on the waves.

That first voyage would teach me more than I ever imagined—and very nearly cost me my life."`,
      inlineAnnotations: [
        {
          id: 'indian-ocean',
          text: 'Indian Ocean',
          tooltip: {
            title: 'Maritime Trade Networks',
            content: 'During the Islamic Golden Age (8th-13th centuries), Arab merchants dominated Indian Ocean trade, sailing from the Persian Gulf to India, Southeast Asia, and East Africa. These voyages were dangerous but enormously profitable, trading spices, silk, precious stones, and other luxury goods.',
            category: 'historical-context',
          },
        },
      ],
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
      backgroundImage: 'https://cdn.midjourney.com/8029705a-d059-423a-903c-90ff505b143e/0_0.png',
      image: 'https://cdn.midjourney.com/a51faf8d-4529-4356-b5ce-17a40f770524/0_0.png',
      content: `"We had been at sea for many days," Sinbad continued, "when our captain spotted what appeared to be a small, verdant island. After weeks of seeing nothing but endless water, the sight of land filled us with joy.

'Let us stop there to rest and take on fresh water,' the captain announced.

We anchored near the island and rowed ashore in small boats. The island was beautiful—covered with lush grass and low trees. Some of the sailors began gathering firewood, while others unpacked food for a meal. I walked around, grateful to feel solid ground beneath my feet again after so many days on the rolling deck.

Several sailors built a fire to cook our meal. The flames grew higher, crackling cheerfully as we prepared to eat. The smoke rose into the clear sky. Everything seemed perfect—a peaceful respite from our long voyage.

Then the island moved.

At first, I thought it was my imagination. But no—the ground was definitely shifting beneath our feet. Someone shouted in alarm. The trees swayed. And then, with a motion that threw us all off our feet, the entire 'island' began to sink into the sea!

'Back to the ship!' the captain screamed from his boat. 'It's not an island—it's a whale! The fire has woken it!'

Chaos erupted. The massive creature—for it was indeed an enormous whale on whose back we had been standing—was diving back into the depths. Sailors scrambled toward the boats, but the whale's movement created waves that capsized them. Men splashed into the water, swimming desperately.

I ran toward the shore, but it was already too late. The whale's vast back tilted and slid beneath the waves. I found myself thrown into the churning sea, watching in horror as our ship, fearing to come closer to the diving beast, began sailing away without us."`,
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
      backgroundImage: 'https://cdn.midjourney.com/2139224a-af7f-4d0c-bd74-9687a728ae7d/0_0.png',
      image: 'https://cdn.midjourney.com/4ec44604-393e-4a2a-b600-94931c5a9490/0_3.png',
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
      backgroundImage: 'https://cdn.midjourney.com/6a8ed53e-bf0e-4e69-8404-5027a9c679ae/0_0.png',
      image: 'https://cdn.midjourney.com/6c82fd33-3c2e-447b-b88c-43bc4153bf99/0_0.png',
      content: `"I swam until my arms could barely move," Sinbad said quietly, remembering. "Some of my companions drowned. Others were eaten by sharks. But I found a wooden trough—a vessel we had brought from the ship for washing—floating in the water. I clung to it with all my strength.

For two days and two nights, I drifted at the mercy of wind and current. The sun burned my skin by day; the cold made me shiver by night. I had no food, no water. Several times I nearly let go, ready to sink beneath the waves and end my suffering.

But on the third day, half-dead from exposure, I felt the trough scrape against something solid. I opened my salt-crusted eyes to see a beach before me. I had washed ashore on an island.

I crawled onto the sand and collapsed, too weak to move. When I finally regained some strength, I explored and found the island was inhabited by a kind and prosperous people. They took me to their king, who listened with fascination to my tale.

'You have suffered greatly,' the king said. 'But your courage and will to survive speak well of you. Stay with us, rest, and recover your strength.'

I lived among them for several months, and during that time, I made myself useful. I shared my knowledge of trade routes and merchants' practices. When a trading ship from my homeland arrived at the island, the captain brought goods from my original vessel—goods I had thought lost forever! The ship had not abandoned us on purpose, you see, but had been forced by the whale to sail on. My merchandise had been aboard all along.

The king rewarded my service with gifts of great value. When I sailed for home, I was wealthier than when I had first departed Baghdad—despite having lost everything to a diving whale. I had survived my first voyage, and learned that fortune favors not just the bold, but the resourceful."`,
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
      backgroundImage: 'https://cdn.midjourney.com/2139224a-af7f-4d0c-bd74-9687a728ae7d/0_0.png',
      image: 'https://cdn.midjourney.com/696a6548-cf3e-4e50-ac6b-3521e82d347d/0_0.png',
      content: `"You would think," Sinbad said with a rueful smile, "that after nearly drowning and being cast away on a strange island, I would be content to remain safely at home. But that is not my nature.

For a time, I did enjoy my wealth. I bought a fine house, entertained friends, and lived comfortably. But as the months passed, I grew restless. I would go down to the harbor and watch ships departing for distant lands. I would talk with merchants returning from the Indies and beyond, hearing their tales of exotic ports and strange sights.

The call of the sea became too strong to resist. I realized that I did not want a life of comfortable idleness. I craved adventure, discovery, the thrill of seeing what lay beyond the horizon. So I bought merchandise once more and joined another merchant ship, this time bound for islands even farther from Baghdad.

The voyage went smoothly at first. We stopped at several islands to trade, and I turned a good profit. Then we reached an uninhabited island—truly uninhabited this time—covered with fruit trees and fresh springs. Many of us went ashore to enjoy the peaceful beauty of the place.

I wandered into a grove of trees, ate some fruit, and sat down in the shade to rest. The warmth of the day and the sound of wind in the leaves made me drowsy. Despite my intentions to stay alert, I fell asleep.

When I woke, the sun was low in the sky. I hurried back to the beach, only to find it empty. The ship was a tiny speck on the horizon, sailing away without me. I shouted and waved, but I was too far away for anyone to see or hear.

Once again, I was alone on an island, abandoned and far from home."`,
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
      backgroundImage: 'https://cdn.midjourney.com/6a8ed53e-bf0e-4e69-8404-5027a9c679ae/0_0.png',
      image: 'https://cdn.midjourney.com/ea08bd31-63c3-478a-9b2a-66a9774d5282/0_0.png',
      content: `"I spent the rest of that day and night in despair," Sinbad continued. "Being left behind once could be chalked up to extraordinary bad luck. But twice? I began to wonder if the sea itself had cursed me, or if I was simply too careless to be a sailor.

But despair solves nothing. When morning came, I pulled myself together and explored the island. I found streams of fresh water and plenty of fruit, so at least I would not starve immediately. But how would I ever escape? The island seemed to be far off any regular trade routes.

As I walked through the interior, I came upon something extraordinary. In a clearing stood a massive white dome, smooth as polished marble and at least fifty paces in circumference. It had no windows, no door—just a smooth, unbroken surface that gleamed in the sunlight.

I walked around it, searching for an entrance, but found none. I knocked on it, and it felt solid as stone. What could it be? Some strange building? A monument left by an ancient civilization?

I stood there puzzling over this mysterious structure when suddenly, I noticed the sky had grown dark. But that made no sense—it was midday, and there were no clouds. I looked up and saw something that made my blood run cold.

A massive bird was descending from the sky, its wings so vast they blotted out the sun. I had heard sailors' tales of the Roc—a legendary bird of such size that it could carry off elephants—but I had always thought them exaggerations.

Now I understood. The white dome was not a building at all. It was an egg. And the creature whose egg it was had just returned home."`,
      inlineAnnotations: [
        {
          id: 'roc-bird',
          text: 'Roc',
          tooltip: {
            title: 'From Reality to Legend',
            content: 'The Roc likely originated from exaggerated tales of the elephant bird (Aepyornis) of Madagascar, which stood 10 feet tall and laid eggs a foot long. Sailors encountering these enormous birds—or their remains—transformed them through retelling into the mythical Roc capable of carrying off elephants.',
            category: 'cultural-context',
          },
        },
      ],
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
      backgroundImage: 'https://cdn.midjourney.com/1d7054b7-a506-4c78-9fdf-5c5bef7bc03a/0_0.png',
      image: 'https://cdn.midjourney.com/243ea90d-5def-46ff-b0df-bb344c609198/0_0.png',
      content: `"The Roc landed beside its egg with a thunderous impact that shook the ground," Sinbad said. "I dove behind a large rock and made myself as small as possible. The bird was beyond anything I had imagined—each of its talons was the size of a tree trunk, its beak could have swallowed a horse whole.

The Roc settled itself over the egg, spreading its enormous wings to create shelter. Within moments, it had fallen into a deep sleep, its breathing like the sound of ocean waves.

I crouched behind my rock, trying not to panic. I was trapped on an island with a creature that could kill me as easily as I might swat a fly. But as I watched the sleeping bird, an audacious idea began to form in my mind.

The Roc would eventually fly away from this island. When it did, it could carry me with it—if I could find a way to attach myself to the bird without waking it.

I unwound my turban—a long strip of fine cloth that all merchants wear. Working as quietly as possible, I crept toward the sleeping Roc. My heart pounded so loudly I was certain it would wake the beast. Inch by inch, I approached one of its massive legs.

The leg was thick as the trunk of an ancient tree. I wrapped my turban around it again and again, then tied it as securely as I could, making sure one end was fastened around my own waist. I tested the knot—it would hold. Then I retreated to wait, praying that I had tied it tightly enough, but not so tightly that the bird would notice.

As dawn broke, the Roc stirred, stretched its wings, and with a powerful leap, launched itself into the sky.

And I went with it."`,
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
      backgroundImage: 'https://cdn.midjourney.com/1d7054b7-a506-4c78-9fdf-5c5bef7bc03a/0_0.png',
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
      backgroundImage: 'https://cdn.midjourney.com/9e351f9c-af8f-4c1a-ba7a-fd41c545c87e/0_0.png',
      image: 'https://cdn.midjourney.com/ef1ce1c9-2ab3-44a8-9a99-ffb3935d83c2/0_0.png',
      content: `"The flight was terrifying," Sinbad said, shuddering at the memory. "I hung from the Roc's leg as it soared higher and higher. The wind tore at my clothes and nearly froze me. I could see the ocean far below, then mountains, then vast deserts. For hours we flew, until I was certain I would die from cold and exhaustion.

Then the Roc began to descend. We dropped into a deep valley surrounded by mountains so steep and high they looked impossible to climb. The walls were sheer cliffs with no paths, no vegetation—nothing but bare stone rising toward the sky.

The Roc landed, and I hastily untied myself before it noticed its passenger. The great bird seized something—perhaps a serpent—in its talons and flew away, leaving me alone once more.

I looked around at my new prison, for that is what it was. The valley floor was rocky and desolate. But then something caught my eye—a glint of light reflecting off the stones. I bent down and picked up a rock, then gasped.

It was a diamond. A perfect, flawless diamond the size of a walnut.

I looked more carefully and realized the entire valley floor was littered with diamonds of every size. Some were as small as grains of sand, others as large as my fist. It was a treasure beyond imagining, wealth enough to buy kingdoms.

But what good was it? I could not climb out of this valley. And as evening fell, I realized the valley had other inhabitants. From caves in the cliff walls, huge serpents began to emerge—creatures as thick as palm trees, with eyes that glowed in the darkness. They hunted at night, I realized, and I was their prey."`,
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
      backgroundImage: 'https://cdn.midjourney.com/9e351f9c-af8f-4c1a-ba7a-fd41c545c87e/0_0.png',
      image: 'https://cdn.midjourney.com/81bf1f98-5b3e-4e13-a1c2-f32d223a9956/0_0.png',
      content: `"I spent that night hiding in a crevice, listening to the serpents hissing and sliding across the stones," Sinbad continued. "When morning came and they retreated to their caves, I emerged and tried desperately to find some way to climb the cliffs. But it was hopeless. The walls were smooth and sheer.

Then something strange happened. Large pieces of fresh meat began falling from the sky, landing with wet thuds all around me. I looked up but could see nothing—the valley rim was too high and too far away.

At first I could not understand what was happening. Then I saw an enormous eagle swoop down, seize one of the pieces of meat in its talons, and fly back up toward the mountains. As it flew, I noticed that several large diamonds had stuck to the meat's bloody surface.

Suddenly, I understood. This was how the diamond merchants gathered their harvest! They could not descend into the valley because of the serpents and the sheer cliffs. So they threw meat down from above. The diamonds would stick to the meat, and trained eagles—or perhaps wild ones following their nature—would carry the meat back up to feed their young. The merchants then scared away the birds and collected the diamonds.

It was ingenious. But more importantly, it gave me an idea for my own escape.

I gathered as many of the largest diamonds as I could carry and stuffed them into my clothes and the folds of my belt. Then I selected the largest piece of meat I could find. Using strips of cloth torn from my garments, I tied myself firmly to the meat, positioning myself on the underside so that from above, it would look like an ordinary piece of meat to any eagle.

Then I lay still and waited, praying that my plan would work."`,
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
      backgroundImage: 'https://cdn.midjourney.com/9e351f9c-af8f-4c1a-ba7a-fd41c545c87e/0_0.png',
      image: 'https://cdn.midjourney.com/fe70d911-8aeb-4eaf-84e8-37f8564790a3/0_0.png',
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
      backgroundImage: 'https://cdn.midjourney.com/6a8ed53e-bf0e-4e69-8404-5027a9c679ae/0_0.png',
      image: 'https://cdn.midjourney.com/db54f1e7-c5bd-4aed-8bff-8ad64e7a7451/0_0.png',
      content: `"It worked," Sinbad said with a grin. "An eagle spotted the meat, swooped down, and grasped it in its massive talons. I felt myself lifted into the air, still clinging to the underside of the meat. We rose higher and higher, and I dared not look down at the dizzying drop below.

The eagle carried me to the mountain's rim and dropped the meat near its nest. I quickly untied myself and scrambled away before the bird realized I was there. But my sudden movement startled it, and it flew off with a harsh cry.

I stood on the mountain top, trembling with relief and exhaustion. I had escaped the Valley of Diamonds!

'In the name of Allah!' came a shocked voice behind me. 'Where did you come from?'

I turned to see a group of merchants staring at me in astonishment. They had been watching the eagles, waiting to collect their diamond-laden meat. The last thing they expected was for a man to emerge from one of the pieces.

I explained my entire story—the abandoned island, the Roc, the valley, my desperate escape. They listened in wonder, and when I showed them the diamonds I had collected, their eyes grew wide.

'By the stars,' one merchant said, 'those are the finest stones I have ever seen!'

'They are yours to share,' I told them. 'You gave me the means of escape, even if unknowingly. It is only fair that you benefit from it.'

My generosity earned their friendship and respect. They guided me back to civilization, and we traveled together on the trade routes back to Baghdad. When we parted ways, they gave me their own gifts of gratitude, and I returned home wealthier than I had ever imagined possible.

But still, the sea called to me..."`,
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
      backgroundImage: 'https://cdn.midjourney.com/4343dbf5-f5bf-420e-a550-1526ded96bc6/0_0.png',
      image: 'https://cdn.midjourney.com/696a6548-cf3e-4e50-ac6b-3521e82d347d/0_0.png',
      content: `"Once again, I grew restless," Sinbad said, and the porter nodded knowingly—he was beginning to understand this aspect of the sailor's nature. "I was wealthy beyond measure, comfortable, respected. But the memory of those adventures—terrible though they were—called to me like a siren song.

So for a third time, I invested in merchandise and joined a merchant vessel. My friends thought I was mad. 'You have wealth enough for ten lifetimes,' they said. 'Why risk it all again?' But I could not explain the hunger that drove me—the need to see what lay beyond the next horizon.

The third voyage began well. We sailed from island to island, trading profitably. But then a terrible storm arose. For three days and nights, the wind howled and the waves towered over our ship. The captain and crew fought to control the vessel, but we were helpless against the storm's fury.

When the tempest finally subsided, we found ourselves driven far off course, into waters no one recognized. Our captain looked at the charts and shook his head grimly. 'May Allah have mercy,' he said. 'I know where we are. These are the waters near the Island of the Ape-Men.'

Even as he spoke, we saw land ahead. But more ominously, we saw dozens of small boats pushing off from shore, each filled with hairy, man-like creatures that gibbered and shrieked. They were the size of children but covered in coarse hair, with faces that were disturbingly almost-human.

They swarmed our ship, overwhelming us through sheer numbers. Though we tried to fight them off, there were too many. They drove us to shore and took possession of our vessel, sailing it away and leaving us stranded on the island."`,
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
      backgroundImage: 'https://cdn.midjourney.com/d12b53ce-5040-4abb-a66f-e3bf50212d91/0_0.png',
      image: 'https://cdn.midjourney.com/5716620c-e79f-4d99-bea1-f4ebac23d4ed/0_0.png',
      content: `"We explored the island, desperately seeking food and water—and some means of escape," Sinbad continued, his voice growing darker. "We found a large building that looked like a palace. Its gates stood open, inviting. Inside was a vast courtyard with a well of fresh water. Gratefully, we drank and rested.

But as night fell, we heard a sound like thunder—heavy footsteps approaching. The ground shook with each step. We huddled together in terror as the owner of the palace returned.

It was a giant—as tall as the tallest palm tree, with skin like black leather. But the most horrible thing was its face: it had only one enormous eye in the center of its forehead, red and glowing like a coal from hell's fires. Its teeth were long and yellow like tusks, its lips thick and drooping. It was a nightmare made flesh.

The giant entered the courtyard and spotted us immediately. It made a sound—not quite speech, but a deep rumbling grunt—and closed the massive gate behind it, trapping us inside. We scattered, trying to hide, but it was useless.

The giant grabbed the captain—the strongest and fattest among us. It examined him like a farmer examining livestock, then, to our horror, roasted him over a fire and ate him. The crunching of bones echoed in the night.

When it finished its meal, the giant stretched out and fell asleep, snoring like thunder. We huddled together, frozen with terror. Some men wept quietly. Others prayed.

The next night, it happened again. The giant returned, selected another sailor, and devoured him. And the night after that, another. We were being eaten one by one, and there seemed to be no escape from this cursed palace."`,
      inlineAnnotations: [
        {
          id: 'one-eyed-giant',
          text: 'one enormous eye',
          tooltip: {
            title: 'The Cyclops Connection',
            content: 'This one-eyed giant directly parallels Polyphemus the Cyclops from Homer\'s Odyssey. Both trap sailors, eat them one by one, and are blinded by heated stakes. This shows how stories from different cultures—Greek and Arabic—share common motifs, possibly from ancient oral traditions predating both civilizations.',
            category: 'literary-context',
          },
        },
      ],
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
      backgroundImage: 'https://cdn.midjourney.com/a94de286-a6da-4803-9f43-e45cb5ffa188/0_0.png',
      image: 'https://cdn.midjourney.com/f64a65cb-b361-4fdf-b749-a8faf1b6aaf2/0_0.png',
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
      backgroundImage: 'https://cdn.midjourney.com/94cc43d1-c03a-4742-87fb-4423cf4fd0ad/0_0.png',
      image: 'https://cdn.midjourney.com/3979b51f-e4e4-458d-a0aa-f97c1d463d39/0_0.png',
      content: `"On the third night, we decided to act," Sinbad said. "We had nothing left to lose. While the giant slept, we heated two iron spits in the cooking fire until they glowed red-hot. Then, working together, we drove them into the giant's single eye.

The roar that followed was like nothing I had ever heard—a sound of pure agony that shook the very walls of the palace. The giant thrashed about, clawing at its face, completely blind now. We ran for the gate and managed to open it, fleeing into the night.

But our troubles were far from over. The giant's bellowing brought others—two more giants, presumably its brothers, emerged from caves nearby. Though our tormentor was blind, the others could see perfectly well.

We ran for the shore, where we worked frantically to build rafts from driftwood and the trunks of palm trees, lashing them together with vines. As we pushed the rafts into the water, the giants reached the beach.

They began hurling massive boulders at us. The stones crashed into the water, creating enormous waves. One boulder struck a raft directly, killing everyone aboard instantly. Another wave capsized two more rafts. Of the thirty sailors who had been captured, only five of us made it past the breakers and into open sea.

We paddled desperately, watching the island recede behind us. But the ocean is vast and merciless. For two days we drifted, with no food and precious little water. Three more men died of exposure and thirst.

When we finally reached another island, only two of us remained alive—myself and one other sailor. We crawled ashore, grateful to be on land again. We found fruit to eat and fresh water to drink. As night fell, we climbed a tree to sleep safely above the ground.

That decision saved my life. Because as darkness deepened, I saw something emerge from the forest below—a serpent so massive it made the Roc seem almost ordinary..."`,
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
      backgroundImage: 'https://cdn.midjourney.com/9935cdaf-042e-45de-8092-1323fb79c066/0_0.png',
      image: 'https://cdn.midjourney.com/b166a488-299e-461d-9023-24a31a5b4824/0_0.png',
      content: `"The serpent was as thick as the trunk of an ancient tree," Sinbad said quietly. "It moved with terrible purpose, searching. My companion and I pressed ourselves flat against the tree branches, not daring to breathe.

The serpent circled the tree, raising its massive head. Its eyes gleamed with predatory intelligence. It could not climb the tree—but it could wait. And it did wait, all through that long, terrible night.

At dawn, it retreated into the forest. We climbed down, exhausted and terrified. 'We cannot survive another night,' my companion said. 'We must build some protection.'

We spent the day constructing a shelter from thick logs and branches, creating a wooden cage strong enough to keep the serpent out. That night, we huddled inside it as the monster returned. It circled our shelter, testing it with its massive body, but the wood held.

The next day, we reinforced the shelter even more. But that night, the serpent found a gap in our construction. To my horror, it forced its way through and seized my companion, swallowing him whole. His screams were cut short as the serpent's jaws closed around him.

I was alone now—the only survivor of thirty men who had landed on the giant's island. I spent the next day in a daze, certain that I too would die. The serpent would find a way to reach me, or I would starve, or simply lose my mind.

But as sunset approached, I saw a ship sailing past the island. Using every scrap of cloth I had, I built a fire and created as much smoke as possible. The ship turned toward my signal.

By the time the serpent emerged that night, I was safely aboard the vessel, watching the cursed island fade into the distance. The captain and crew listened to my tale with wide eyes, and once again, I had survived—though I was the only one who had."`,
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
      backgroundImage: 'https://cdn.midjourney.com/b37cce7f-d7a0-4890-8a85-6d791e6ff348/0_0.png',
      image: 'https://cdn.midjourney.com/3c8de4fd-df08-46d6-842e-4249927467ca/0_0.png',
      content: `Sinbad paused in his storytelling and took a long drink of water. The porter, who had been listening with rapt attention, sat forward eagerly.

"Those three voyages alone are more adventure than most men experience in a lifetime," the porter said. "Surely you returned to Baghdad and stayed after such terrors?"

Sinbad laughed—a sound both bitter and fond. "You would think so, wouldn't you? But no. I had four more voyages after those, each bringing its own extraordinary trials.

On my fourth voyage, I was shipwrecked among cannibals who fattened us like livestock. I escaped and found a kingdom where I married a beautiful woman—only to discover their custom required living spouses to be buried alive with the dead. When my wife died, I was entombed with her, surrounded by corpses. I survived by stealing food from other burials and eventually found a passage leading back to the sea.

The fifth voyage brought me to an island ruled by a monstrous old man—the Old Man of the Sea. He wrapped his legs around my neck and would not let go, forcing me to carry him everywhere for days until I devised a way to make him drunk and finally throw him off.

The sixth voyage took me to a land where the great river's current carried us toward mountains of emeralds and diamonds. We were nearly dashed to pieces before finding safety.

And the seventh... the seventh voyage was my last. After all my adventures, I finally learned that sometimes the greatest treasure is simply returning home."

The porter shook his head in wonder. "Seven voyages. Seven times you left safety and comfort to risk everything."`,
      learningPoints: [
        {
          id: 'lp-ch5-18',
          content: 'Sinbad had seven voyages in total, each escalating in danger and wonder.',
          category: 'literary-structure',
        },
      ],
    },

    {
      id: 'scene-19-5-voyages-map',
      type: 'map-exploration',
      backgroundImage: 'https://cdn.midjourney.com/7c4fee3b-073d-4091-8863-cc1464ed3b5c/0_0.png',
      mapImage: 'https://cdn.midjourney.com/7c4fee3b-073d-4091-8863-cc1464ed3b5c/0_0.png',
      prompt: 'Explore the map of Sinbad\'s three voyages across the Indian Ocean.',
      locations: [
        {
          id: 'baghdad',
          name: 'Baghdad',
          x: 52,
          y: 15,
          content: 'Baghdad, the magnificent capital during the reign of Caliph Harun al-Rashid. Here begins and ends each of Sinbad\'s seven voyages—a city of learning, trade, and endless possibility during the Islamic Golden Age.',
        },
        {
          id: 'whale-island',
          name: 'The Living Island',
          x: 18,
          y: 48,
          content: 'First Voyage: What appeared to be a peaceful island was actually an enormous whale! When the sailors lit a fire on its back, the creature awoke and dove into the depths, casting Sinbad into the sea.',
        },
        {
          id: 'rescue-kingdom',
          name: 'Island Kingdom',
          x: 25,
          y: 65,
          content: 'First Voyage: After days adrift on a wooden trough, Sinbad washed ashore here. The kind king rewarded his survival and resourcefulness with gifts, and Sinbad returned home wealthier than before.',
        },
        {
          id: 'desert-island',
          name: 'The Desert Island',
          x: 38,
          y: 55,
          content: 'Second Voyage: Sinbad fell asleep in a grove and was left behind when his ship sailed away. Alone on a seemingly uninhabited island, he discovered something extraordinary...',
        },
        {
          id: 'roc-island',
          name: 'Island of the Roc',
          x: 50,
          y: 62,
          content: 'Second Voyage: Here Sinbad found a massive white dome—the egg of the legendary Roc, a bird so large it could carry off elephants. He tied himself to the bird\'s leg with his turban and was carried away to...',
          image: 'https://cdn.midjourney.com/ea08bd31-63c3-478a-9b2a-66a9774d5282/0_0.png',
        },
        {
          id: 'diamond-valley',
          name: 'Valley of Diamonds',
          x: 62,
          y: 48,
          content: 'Second Voyage: The Roc dropped Sinbad in a valley surrounded by unclimbable cliffs. The floor sparkled with countless diamonds, but at night, giant serpents emerged to hunt. Sinbad observed the diamond merchants\' ingenious method and used it to escape.',
          image: 'https://cdn.midjourney.com/ef1ce1c9-2ab3-44a8-9a99-ffb3935d83c2/0_0.png',
        },
        {
          id: 'ape-men-island',
          name: 'Island of the Ape-Men',
          x: 75,
          y: 38,
          content: 'Third Voyage: A terrible storm drove Sinbad\'s ship into unknown waters. Hairy, man-like creatures swarmed the vessel, overwhelming the crew through sheer numbers and stranding them on the island.',
        },
        {
          id: 'giant-island',
          name: 'Island of the Giant',
          x: 85,
          y: 30,
          content: 'Third Voyage: The stranded sailors found a palace with an open gate. Its owner was a one-eyed giant who ate them one by one. In desperation, the survivors heated iron spits and blinded the monster, just as Odysseus did to Polyphemus.',
          image: 'https://cdn.midjourney.com/5716620c-e79f-4d99-bea1-f4ebac23d4ed/0_0.png',
        },
        {
          id: 'serpent-island',
          name: 'Island of the Serpent',
          x: 88,
          y: 52,
          content: 'Third Voyage: Only two sailors escaped the giant, reaching this island on makeshift rafts. Here, an enormous serpent hunted them at night. Sinbad was the sole survivor, rescued by a passing ship after building a signal fire.',
          image: 'https://cdn.midjourney.com/b166a488-299e-461d-9023-24a31a5b4824/0_0.png',
        },
        {
          id: 'trade-routes',
          name: 'Indian Ocean Trade Routes',
          x: 55,
          y: 42,
          content: 'During the Islamic Golden Age (8th-13th centuries), Arab merchants dominated these waters, sailing from the Persian Gulf to India, Southeast Asia, and East Africa. These voyages were dangerous but enormously profitable—and full of wonders.',
        },
      ],
      learningPoints: [
        {
          id: 'lp-map-geography',
          content: 'Sinbad\'s voyages reflect real medieval maritime trade routes across the Indian Ocean.',
          category: 'historical-context',
        },
        {
          id: 'lp-map-pattern',
          content: 'Each voyage follows a pattern: departure from Baghdad, disaster at sea, survival through cleverness, and return with wealth.',
          category: 'narrative-structure',
        },
      ],
    },

    {
      id: 'scene-20-final-lesson',
      type: 'decision',
      backgroundImage: 'https://cdn.midjourney.com/b37cce7f-d7a0-4890-8a85-6d791e6ff348/0_0.png',
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
      backgroundImage: 'https://cdn.midjourney.com/b37cce7f-d7a0-4890-8a85-6d791e6ff348/0_0.png',
      image: 'https://cdn.midjourney.com/db10fef1-8f0c-43b6-8373-6a31565737fc/0_0.png',
      content: `Sinbad the Sailor looked at Sinbad the Porter with warmth and understanding. "You asked about the justice of our different fortunes. Now you see that my wealth was not given to me—it was earned through trials that would have broken lesser men. Every diamond I own came at the price of terror and loss.

But I have also gained something more valuable than gold: experiences that no amount of money can buy. I have seen wonders that exist nowhere else in the world. I have tested myself against impossible odds and survived. I have learned the value of cleverness, the importance of generosity, and the power of never surrendering to despair.

Come, my friend. From this day forward, you are welcome in my house. Share my table, enjoy my hospitality, and know that fortune favors not just the bold, but those willing to work for their dreams."

From that day on, the two Sinbads became fast friends. The porter continued his work, but with the sailor's patronage, his life became easier. And whenever he visited, Sinbad would tell him more stories of the wonders he had seen.`,
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
    },

    {
      id: 'scene-22-scheherazade-frame',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/b37cce7f-d7a0-4890-8a85-6d791e6ff348/0_0.png',
      image: 'https://cdn.midjourney.com/b902b0c5-70f2-46cb-b2a2-7b439d160adc/0_0.png',
      content: `As Scheherazade's voice fell silent, Sultan Shahryar stirred from his thoughts. Dawn light was beginning to creep through the latticed windows.

"The story of Sinbad," the sultan said slowly, "teaches us that wealth and comfort are not the same as a life well-lived. This sailor risked everything, suffered terribly, yet would not trade his experiences for a safe, uneventful life."

"Yes, my lord," Scheherazade replied. "And notice how his stories themselves became a form of wealth—something he could share with the porter, making both their lives richer. Stories connect us, teach us, and transform us. Whether it is Sinbad telling his tales to the porter, or your humble servant telling them to you, the act of sharing stories creates bonds between people."

The sultan nodded thoughtfully. "The porter learned that he judged too quickly. The wealthy sailor's life seemed easy from the outside, but was earned through extraordinary hardship."

"Just as," Scheherazade said softly, "many things that seem simple from the outside are far more complex when we learn their full story. Now, my lord, let me rest. Tomorrow night, I shall tell you another tale..."

The stories of the Arabian Nights continue, each one a testament to the enduring power of narrative to enlighten, entertain, and transform.`,
      inlineAnnotations: [
        {
          id: 'stories-wealth',
          text: 'stories themselves became a form of wealth',
          tooltip: {
            title: 'Narrative as Currency',
            content: 'Throughout Arabian Nights, stories function as more than entertainment—they are tools of survival (Scheherazade), bridges between social classes (the two Sinbads), and means of cultural transmission. This meta-narrative theme suggests that shared stories create communities and understanding across boundaries of class, culture, and time.',
            category: 'literary-context',
          },
        },
      ],
      learningPoints: [
        {
          id: 'lp-ch5-22',
          content: 'The nested frame structure creates layers of storytelling: Scheherazade tells the Sultan about Sinbad telling the Porter.',
          category: 'literary-technique',
        },
        {
          id: 'lp-ch5-23',
          content: 'Stories as tools of connection and survival is a central meta-theme of Arabian Nights.',
          category: 'thematic-analysis',
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

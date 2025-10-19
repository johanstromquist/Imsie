import type { Chapter } from '../../../types';
import { chapter2Quiz } from '../quizzes/chapter-2-quiz';

export const chapter2: Chapter = {
  id: 'don-quixote-chapter-2',
  title: 'Chapter 2: Windmills and Reality',
  description: 'Don Quixote recruits Sancho Panza and embarks on his most famous adventure, where perception and reality collide spectacularly.',

  learningObjectives: [
    'Analyze the famous windmill episode as a metaphor for idealism vs. reality',
    'Understand Sancho Panza\'s role as practical counterpoint',
    'Examine how perspective shapes interpretation of events',
    'Recognize the dynamic between master and servant',
  ],

  scenes: [
    // Scene 1: Return and Concern
    {
      id: 'dq-ch2-s1-return',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/6f893254-b2e5-4e9f-9c1d-bbff4ff00f9b/0_0.png',

      content: `After his disastrous first adventure, Don Quixote was carried home by a neighbor who found him beaten and bruised by the side of the road.

His niece and housekeeper were horrified. The local priest and barber came to visit, and together they hatched a plan: they would burn his books of chivalry, the source of all this madness.

While Don Quixote recovered in bed, they built a bonfire in the courtyard and fed it his precious volumes. When he finally emerged and found his library empty, they told him an enchanter had spirited the books away—and Don Quixote, true to form, believed them completely.`,

      learningPoints: [
        {
          id: 'dq-lp-ch2-s1-intervention',
          content: 'The book-burning scene shows how others try to "cure" Don Quixote by removing his inspiration—but they fail to understand that the books merely triggered a deeper need for meaning.',
          category: 'thematic-analysis',
        },
        {
          id: 'dq-lp-ch2-s1-irony',
          content: 'Ironically, by telling Don Quixote that an enchanter took his books, they reinforce his chivalric worldview instead of breaking it.',
          category: 'literary-technique',
        },
      ],
    },

    // Scene 2: The Need for a Squire
    {
      id: 'dq-ch2-s2-squire-decision',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/3f8c6c57-2a76-4365-9e57-8dc5bf2a73d8/0_0.png',

      content: `Don Quixote's injuries healed, but his resolve only strengthened. His family's intervention had failed—if anything, the "enchanter" taking his books proved that magical forces were real and working against him!

But as he planned his second sally, a troubling realization struck him. He had been reading his chivalric romances incorrectly. Every great knight had a squire—a loyal companion to carry supplies, tend wounds, and witness heroic deeds. How could he have overlooked this?

He needed someone practical, loyal, and—most importantly—willing to believe in the promise of future rewards rather than present wages. His thoughts turned to a neighbor: Sancho Panza.

Sancho was a simple farmer, poor and uneducated but honest and good-natured. He had a wife and children to support, a small plot of land that barely fed his family, and—Don Quixote suspected—a deep desire for something more than the endless cycle of plowing and harvesting.

Perfect.`,

      inlineAnnotations: [
        {
          id: 'dq-ann-squire',
          text: 'squire',
          tooltip: {
            title: 'Knights and Squires',
            content: 'In medieval times, squires were young men training to become knights. They served established knights, learning combat and chivalric codes. By Don Quixote\'s era, this system was long obsolete—making his search for a "squire" another anachronism.',
            category: 'historical-context',
          },
        },
      ],

      learningPoints: [
        {
          id: 'dq-lp-ch2-s2-pattern',
          content: 'Don Quixote corrects his approach based on his reading—showing he\'s not random in his madness but systematically following chivalric romance conventions.',
          category: 'character-analysis',
        },
        {
          id: 'dq-lp-ch2-s2-exploitation',
          content: 'Don Quixote deliberately chooses someone desperate enough to accept impossible promises—revealing a manipulative streak beneath his idealism.',
          category: 'thematic-analysis',
        },
      ],
    },

    // Scene 3: Recruiting Sancho (Dialogue)
    {
      id: 'dq-ch2-s3-recruiting',
      type: 'dialogue',
      backgroundImage: 'https://cdn.midjourney.com/0ed20f81-5d70-4e75-b242-9d2ea376c77d/0_0.png',
      image: 'https://cdn.midjourney.com/00172f58-5d8d-4046-864f-3eb0e8d23a77/0_0.png',

      character: {
        id: 'sancho-panza',
        name: 'Sancho Panza',
        portrait: 'https://cdn.midjourney.com/c9ea39d4-3ec8-43ea-aa00-aa12782044aa/0_0.png',
        description: 'A simple, honest peasant farmer',
      },

      dialogueTree: {
        id: 'node-1',
        speaker: 'sancho-panza',
        text: 'Señor Quixano—I mean, Don Quixote—you want me to leave my farm and family to ride around with you? What\'s in it for me?',

        responses: [
          {
            id: 'response-island',
            text: 'I shall make you governor of an island I conquer!',
            nextNodeId: 'node-2',
            learningPoints: [
              {
                id: 'dq-lp-ch2-s2-promise',
                content: 'Don Quixote\'s promise of an island governorship is absurd—yet it reveals how he uses the language of chivalric romances to recruit others into his fantasy.',
                category: 'character-analysis',
              },
            ],
          },
          {
            id: 'response-adventure',
            text: 'Think of the adventures and glory we\'ll experience!',
            nextNodeId: 'node-3',
          },
        ],

        allNodes: [
          {
            id: 'node-2',
            speaker: 'sancho-panza',
            text: 'An island? To govern? Well... my wife has been nagging me to make something of myself. And you seem sincere enough, even if you are a bit... peculiar.',
            responses: [
              {
                id: 'response-accept',
                text: 'Then you\'ll join me as my squire?',
                nextNodeId: 'node-4',
              },
            ],
          },
          {
            id: 'node-3',
            speaker: 'sancho-panza',
            text: 'Glory doesn\'t put food on the table, señor. But... I suppose I could use a break from plowing fields. At least it\'ll be interesting!',
            responses: [
              {
                id: 'response-good',
                text: 'Excellent! You won\'t regret this, faithful Sancho!',
                nextNodeId: 'node-4',
              },
            ],
          },
          {
            id: 'node-4',
            speaker: 'sancho-panza',
            text: 'I must be as crazy as you are. But alright—I\'ll be your squire. Though I\'m keeping my donkey, and I\'ll need to come back for harvest season!',
            isEnd: true,
          },
        ],
      },

      learningPoints: [
        {
          id: 'dq-lp-ch2-s3-sancho',
          content: 'Sancho Panza represents the practical, earthly perspective—he joins not from idealism but from hope of material gain and escape from drudgery.',
          category: 'character-analysis',
        },
      ],
    },

    // Scene 4: Setting Out Together
    {
      id: 'dq-ch2-s4-departure',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/28f7dc69-2e8f-4e64-af3a-2f6d9abb76b4/0_0.png',

      content: `And so, in the early morning hours, they set out together: the tall, gaunt knight on his skinny horse Rocinante, and the short, round peasant on his humble donkey.

They made quite a pair. Don Quixote sat erect in his saddle, his rusty armor gleaming in the sunrise, his eyes scanning the horizon for adventures. Sancho slouched comfortably, his saddlebags filled with bread and cheese, wondering what he'd gotten himself into.

"This is the beginning of a great partnership, Sancho!" Don Quixote declared. "Together we shall right wrongs and defend the helpless!"

"Yes, master," Sancho replied, already thinking about lunch.`,

      learningPoints: [
        {
          id: 'dq-lp-ch2-s4-contrast',
          content: 'The visual and temperamental contrast between Don Quixote and Sancho Panza becomes a central source of the novel\'s humor and philosophy.',
          category: 'literary-technique',
        },
        {
          id: 'dq-lp-ch2-s4-partnership',
          content: 'Their partnership represents the clash between idealism (Don Quixote) and pragmatism (Sancho)—neither perspective is entirely right or wrong.',
          category: 'thematic-analysis',
        },
      ],
    },

    // Scene 5: Map Exploration
    {
      id: 'dq-ch2-s5-map',
      type: 'map-exploration',
      backgroundImage: 'https://cdn.midjourney.com/7a1803df-3a93-4247-96cc-a79f157d378d/0_0.png',

      mapImage: 'https://cdn.midjourney.com/63b60a9f-af3d-4961-9bbd-efad70734e6c/0_0.png',
      prompt: 'Explore the region where Don Quixote\'s adventures unfold',

      locations: [
        {
          id: 'loc-village',
          name: 'Don Quixote\'s Village',
          x: 30,
          y: 45,
          content: 'The unnamed village in La Mancha where Alonso Quixano lived before becoming Don Quixote. His niece, housekeeper, and neighbors remain here, worried about his adventures.',
          image: 'https://cdn.midjourney.com/3f8c6c57-2a76-4365-9e57-8dc5bf2a73d8/0_0.png',
        },
        {
          id: 'loc-windmills',
          name: 'The Windmill Field',
          x: 55,
          y: 35,
          content: 'The famous windmills that Don Quixote attacked, believing them to be giants. These mills ground grain for the surrounding farms—utterly ordinary, yet transformed by Don Quixote\'s imagination.',
          image: 'https://cdn.midjourney.com/e3423160-e433-4b09-9718-4f2fe6200e99/0_0.png',
        },
        {
          id: 'loc-el-toboso',
          name: 'El Toboso',
          x: 70,
          y: 50,
          content: 'The village where Aldonza Lorenzo (Dulcinea) lives. A small, unremarkable place that Don Quixote has elevated to mythical status as the home of the world\'s most beautiful lady.',
          image: 'https://cdn.midjourney.com/0001a318-4b95-4fe5-ad3d-c5873076147a/0_0.png',
        },
        {
          id: 'loc-inn',
          name: 'The Roadside Inn',
          x: 45,
          y: 60,
          content: 'The humble inn that Don Quixote mistook for a castle during his first adventure. The innkeeper still remembers the strange knight who insisted on being dubbed.',
          image: 'https://cdn.midjourney.com/baf42c50-35a6-4799-82ad-d3fb0421d088/0_0.png',
        },
      ],

      learningPoints: [
        {
          id: 'dq-lp-ch2-s5-geography',
          content: 'La Mancha is a real region in central Spain—flat, arid, and sparsely populated, providing the perfect backdrop for Don Quixote\'s lonely quest.',
          category: 'historical-context',
        },
        {
          id: 'dq-lp-ch2-s5-setting',
          content: 'Cervantes uses the barren landscape of La Mancha to emphasize the gap between Don Quixote\'s romantic imagination and the stark reality around him.',
          category: 'literary-technique',
        },
      ],
    },

    // Scene 6: First Delusion
    {
      id: 'dq-ch2-s6-decision',
      type: 'decision',
      backgroundImage: 'https://cdn.midjourney.com/ef3f1ea5-eb3e-4676-82c4-ed53243686d4/0_0.png',

      prompt: 'Sancho sees Don Quixote preparing to attack a windmill. What should he do?',
      context: `They hadn't ridden far when Don Quixote suddenly stopped, pointing ahead with his lance.

"Look there, Sancho! Thirty or more monstrous giants! I shall do battle with them and take their spoils!"

Sancho squinted at the horizon. "What giants, master? Those are windmills."

"Windmills?" Don Quixote scoffed. "It's clear you know nothing of adventures! Those are giants, and I'm going to attack them!"`,

      choices: [
        {
          id: 'dq-choice-agree',
          text: 'Agree with him to keep the peace',
          consequence: 'Sancho sighs and says, "Yes, master, giants indeed." He\'s learning that arguing with Don Quixote is pointless. Better to let him learn from experience.',
          learningPoints: [
            {
              id: 'dq-lp-ch2-s6-accommodation',
              content: 'Sancho quickly learns to accommodate Don Quixote\'s delusions rather than fight them—a practical strategy for dealing with fixed beliefs.',
              category: 'character-analysis',
            },
          ],
        },
        {
          id: 'dq-choice-argue',
          text: 'Try to convince him they\'re really windmills',
          consequence: '"I tell you they\'re windmills!" Sancho insists. But Don Quixote waves him off. "Some enchanter has turned the giants into windmills to rob me of glory!"',
          learningPoints: [
            {
              id: 'dq-lp-ch2-s6-enchanter',
              content: 'Don Quixote invokes "enchanters" whenever reality contradicts his beliefs—a psychological defense mechanism that protects his worldview.',
              category: 'character-analysis',
            },
          ],
        },
        {
          id: 'dq-choice-follow',
          text: 'Just follow along and see what happens',
          consequence: 'Sancho shrugs and follows his master. This is what he signed up for, after all. At least it won\'t be boring!',
          learningPoints: [
            {
              id: 'dq-lp-ch2-s6-witness',
              content: 'Sancho serves as witness and chronicler of Don Quixote\'s madness—his presence makes the reader feel less alone in seeing the absurdity.',
              category: 'narrative-structure',
            },
          ],
        },
      ],

      learningPoints: [],
    },

    // Scene 7: Windmill Approach
    {
      id: 'dq-ch2-s7-windmills',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/7a1803df-3a93-4247-96cc-a79f157d378d/0_0.png',

      content: `The windmills stood on a ridge, their great canvas sails turning slowly in the wind. They were used to grind grain into flour—a common and utterly mundane sight in rural Spain.

But Don Quixote saw monsters. Through his eyes, the rotating sails became flailing arms, the cylindrical towers became hulking bodies, and the whole scene transformed into a field of terrible giants that needed to be vanquished.

"Fear not, Sancho!" he called back. "Though there are many, I shall not falter! It is the duty of knights errant to battle such evil creatures!"

Sancho could only watch in disbelief as his master lowered his lance and spurred Rocinante forward.`,

      inlineAnnotations: [
        {
          id: 'dq-ann-windmills',
          text: 'windmills',
          tooltip: {
            title: 'La Mancha Windmills',
            content: 'The windmills of La Mancha are real and still stand today in Spain. They became famous worldwide because of this scene—"tilting at windmills" now means fighting imaginary enemies.',
            category: 'historical-context',
          },
        },
      ],

      learningPoints: [
        {
          id: 'dq-lp-ch2-s7-iconic',
          content: 'The windmill scene became the most iconic moment in the novel—it perfectly captures the collision between romantic idealism and prosaic reality.',
          category: 'literary-significance',
        },
        {
          id: 'dq-lp-ch2-s7-metaphor',
          content: '"Tilting at windmills" has entered the English language meaning to fight imaginary enemies or pursue impossible goals—showing the novel\'s cultural impact.',
          category: 'cultural-context',
        },
      ],
    },

    // Scene 8: The Attack
    {
      id: 'dq-ch2-s8-attack',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/e3423160-e433-4b09-9718-4f2fe6200e99/0_0.png',
      image: 'https://cdn.midjourney.com/5aadafdd-f6fb-43b3-884a-fc396bb8e08a/0_0.png',

      content: `"Now, cowardly giants, prepare to meet your doom!" Don Quixote shouted as he charged.

Just as he reached the nearest windmill, a gust of wind caught its sails, sending them spinning faster. Don Quixote thrust his lance into one of the moving sails.

The result was catastrophic and inevitable. The rotating sail caught the lance, lifted Don Quixote clean out of his saddle, and flung him across the ground. He crashed down hard, his armor clanging, the broken lance in splinters around him.

Rocinante, sensible creature that he was, simply stopped and waited patiently for his master to recover.

"Master! Master!" Sancho rushed over, jumping off his donkey. "Are you hurt?"`,

      learningPoints: [
        {
          id: 'dq-lp-ch2-s8-reality',
          content: 'Physical reality cannot be defeated by belief alone—Don Quixote\'s idealism meets physics, and physics wins decisively.',
          category: 'thematic-analysis',
        },
        {
          id: 'dq-lp-ch2-s8-comedy',
          content: 'The scene is simultaneously hilarious and tragic—we laugh at the absurdity while recognizing the pain of someone unable to see reality.',
          category: 'literary-technique',
        },
      ],
    },

    // Scene 9: Aftermath Dialogue
    {
      id: 'dq-ch2-s9-aftermath',
      type: 'dialogue',
      backgroundImage: '/Imsie/assets/don-quixote/backgrounds/fighting-giants.png',
      image: 'https://cdn.midjourney.com/bc81d4e4-0d28-4513-a019-00435e16c99e/0_0.png',

      character: {
        id: 'sancho-panza',
        name: 'Sancho Panza',
        portrait: 'https://cdn.midjourney.com/c9ea39d4-3ec8-43ea-aa00-aa12782044aa/0_0.png',
        description: 'Concerned but unsurprised by what just happened',
      },

      dialogueTree: {
        id: 'node-1',
        speaker: 'sancho-panza',
        text: 'Master, didn\'t I tell you they were windmills? Anyone with eyes could see that!',

        responses: [
          {
            id: 'response-enchanter',
            text: 'It was the enchanter Friston! He turned the giants into windmills at the last moment!',
            nextNodeId: 'node-2',
          },
          {
            id: 'response-admit',
            text: 'Perhaps... perhaps I was mistaken...',
            nextNodeId: 'node-3',
          },
        ],

        allNodes: [
          {
            id: 'node-2',
            speaker: 'sancho-panza',
            text: 'An enchanter? Master, I think you hit your head too hard. There was no enchanter—just you, a windmill, and poor judgment!',
            responses: [
              {
                id: 'response-insist',
                text: 'You know nothing of enchantments, Sancho. They are common in knightly adventures!',
                nextNodeId: 'node-4',
              },
            ],
          },
          {
            id: 'node-3',
            speaker: 'sancho-panza',
            text: 'Finally! A bit of sense! Maybe we should head home before you get yourself killed?',
            responses: [
              {
                id: 'response-no-home',
                text: 'No! Wait, I was right—it WAS giants! The enchanter Friston must have transformed them!',
                nextNodeId: 'node-4',
              },
            ],
          },
          {
            id: 'node-4',
            speaker: 'sancho-panza',
            text: '*sighs heavily* I can see this is going to be a long journey. Well, at least you\'re not dead. Come on, let\'s find somewhere to rest and tend to those bruises.',
            isEnd: true,
          },
        ],
      },

      learningPoints: [
        {
          id: 'dq-lp-ch2-s9-denial',
          content: 'Don Quixote cannot admit error—his identity is so tied to being a knight that accepting reality would mean psychological collapse.',
          category: 'character-analysis',
        },
        {
          id: 'dq-lp-ch2-s9-sancho-role',
          content: 'Sancho becomes the voice of the reader—expressing our frustration with Don Quixote while remaining loyal to him.',
          category: 'narrative-structure',
        },
      ],
    },

    // Scene 10: Sheep as Armies
    {
      id: 'dq-ch2-s10-sheep',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/d5db8765-0d8a-49e2-b670-088230f000e9/0_0.png',

      content: `They continued traveling, Don Quixote still nursing his wounds. Soon they saw two large flocks of sheep approaching from different directions, raising clouds of dust.

"Behold, Sancho!" Don Quixote exclaimed, his injuries forgotten. "Two great armies prepare for battle! The dust they raise darkens the sky!"

Sancho stared at him in disbelief. "Master, those are sheep. Just sheep. I can hear them bleating."

But Don Quixote was already describing the "armies" in elaborate detail—naming their generals, describing their armor and banners, creating an entire battle scene out of nothing but sheep and his imagination.

Before Sancho could stop him, Don Quixote charged into the middle of the flock, swinging his sword and scattering terrified animals in all directions.`,

      inlineAnnotations: [
        {
          id: 'dq-ann-sheep',
          text: 'bleating',
          tooltip: {
            title: 'Pattern of Delusion',
            content: 'The sheep incident follows the same pattern as the windmills—Don Quixote sees what he wants to see, attacks real things believing they\'re something else, and refuses to acknowledge his error. The pattern reveals the systematic nature of his madness.',
            category: 'literary-context',
          },
        },
      ],

      learningPoints: [
        {
          id: 'dq-lp-ch2-s10-escalation',
          content: 'Don Quixote\'s delusions escalate rather than diminish—each failure reinforces his belief in enchanters working against him.',
          category: 'character-analysis',
        },
        {
          id: 'dq-lp-ch2-s10-victims',
          content: 'The novel increasingly shows innocent victims of Don Quixote\'s madness—the sheep and their shepherds suffer real harm from his fantasy.',
          category: 'thematic-analysis',
        },
      ],
    },

    // Scene 11: The Barber's Basin
    {
      id: 'dq-ch2-s11-basin',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/9c2baada-5d0f-4891-9f3d-be5b123e6833/0_0.png',

      content: `Their adventures continued as they traveled. Don Quixote spotted a barber riding his mule down the road, wearing his brass basin on his head as protection from the rain.

"Sancho! Look there! The Helmet of Mambrino!" Don Quixote's eyes gleamed with excitement. "One of the most famous enchanted helmets in all of chivalric legend!"

The barber, seeing a madman in armor charging toward him, dropped everything and fled. Don Quixote scooped up the brass basin triumphantly.

"Finally, Sancho! Proof of my destiny! The Helmet of Mambrino has come to me, just as the prophecies foretold!"

Sancho examined the basin skeptically. It had a hole in the bottom for the barber's head. "Master... this looks like a barber's basin to me."

"Appearance deceives, Sancho! Touch it yourself—feel the magic tingling within!"`,

      learningPoints: [
        {
          id: 'dq-lp-ch2-s11-helmet',
          content: 'The "Helmet of Mambrino" becomes a running joke—Don Quixote wears the basin as a helmet, and others must decide whether to humor him or speak truth.',
          category: 'literary-technique',
        },
        {
          id: 'dq-lp-ch2-s11-evidence',
          content: 'Don Quixote invites Sancho to verify the "magic"—showing how belief can reinterpret any evidence to fit preconceptions.',
          category: 'thematic-analysis',
        },
      ],
    },

    // Scene 12: Cause and Effect
    {
      id: 'dq-ch2-s12-cause-effect',
      type: 'cause-effect',
      backgroundImage: 'https://cdn.midjourney.com/9c2baada-5d0f-4891-9f3d-be5b123e6833/0_0.png',

      prompt: 'Match Don Quixote\'s interpretations with the actual reality',

      pairs: [
        {
          id: 'pair-1',
          cause: 'Don Quixote sees thirty giants with flailing arms',
          effect: 'Reality: Windmills with rotating sails grinding grain',
          explanation: 'Don Quixote\'s literary imagination transforms ordinary mills into monsters. His mind cannot accept the mundane—everything must fit the chivalric pattern.',
        },
        {
          id: 'pair-2',
          cause: 'Don Quixote sees two great armies preparing for battle',
          effect: 'Reality: Two flocks of sheep being herded to market',
          explanation: 'The dust clouds raised by the sheep trigger Don Quixote\'s expectation of epic battles. He even invents detailed descriptions of the "generals" and their heraldry.',
        },
        {
          id: 'pair-3',
          cause: 'Don Quixote sees a magnificent castle with noble lords',
          effect: 'Reality: A simple roadside inn with a practical innkeeper',
          explanation: 'Every building becomes a castle in Don Quixote\'s eyes because knights need castles. The ordinary world must be transformed to match his expectations.',
        },
        {
          id: 'pair-4',
          cause: 'Don Quixote believes enchanters are working against him',
          effect: 'Reality: He is making mistakes and misjudging situations',
          explanation: 'Rather than admit error, Don Quixote creates a conspiracy theory—"enchanters" transform his enemies to rob him of glory. This preserves his self-image while explaining failures.',
        },
        {
          id: 'pair-5',
          cause: 'Don Quixote sees the Helmet of Mambrino (golden magical helmet)',
          effect: 'Reality: A barber\'s brass basin worn on the head to protect from sun',
          explanation: 'The barber was simply protecting himself from the sun, but Don Quixote sees a priceless enchanted helmet from chivalric legends.',
        },
      ],

      learningPoints: [
        {
          id: 'dq-lp-ch2-s12-pattern',
          content: 'Don Quixote\'s misinterpretations follow a consistent pattern—he always sees the romantic possibility, never the prosaic reality.',
          category: 'character-analysis',
        },
        {
          id: 'dq-lp-ch2-s12-perception',
          content: 'The novel explores how perception shapes reality—Don Quixote proves that what we see is filtered through our beliefs and expectations.',
          category: 'thematic-analysis',
        },
      ],
    },

    // Scene 13: Timeline Game
    {
      id: 'dq-ch2-s13-timeline',
      type: 'timeline-game',
      backgroundImage: 'https://cdn.midjourney.com/3806beeb-90ea-4b65-a370-cb5e6a830ae5/0_0.png',

      prompt: 'Put these events from Don Quixote\'s second journey in chronological order',
      successThreshold: 50,

      timelineEvents: [
        {
          id: 'event-1',
          title: 'Recruiting Sancho Panza',
          year: 1,
          description: 'Don Quixote convinces Sancho to become his squire by promising him governorship of an island. This partnership marks the beginning of the novel\'s central relationship—the idealist and the pragmatist.',
        },
        {
          id: 'event-2',
          title: 'Departing Together at Dawn',
          year: 2,
          description: 'The mismatched pair ride out together—Don Quixote on Rocinante, Sancho on his donkey. Their contrasting appearances establish the visual humor that runs throughout the novel.',
        },
        {
          id: 'event-3',
          title: 'Attacking the Windmills',
          year: 3,
          description: 'Don Quixote charges at windmills believing them to be giants, resulting in a spectacular crash. The most famous scene in the novel becomes a metaphor for fighting impossible battles.',
        },
        {
          id: 'event-4',
          title: 'Blaming the Enchanter',
          year: 4,
          description: 'After being defeated by the windmill, Don Quixote claims an enchanter transformed the giants. This introduces Don Quixote\'s psychological defense mechanism—enchanters explain all failures.',
        },
        {
          id: 'event-5',
          title: 'Attacking the Sheep Armies',
          year: 5,
          description: 'Don Quixote sees two flocks of sheep as opposing armies and charges into them. The pattern of delusion continues and escalates, with new innocent victims.',
        },
        {
          id: 'event-6',
          title: 'Claiming the "Helmet of Mambrino"',
          year: 6,
          description: 'Don Quixote takes a barber\'s brass basin, believing it to be a famous enchanted helmet. The basin becomes a comic prop that Don Quixote wears proudly, blind to its true nature.',
        },
      ],

      learningPoints: [
        {
          id: 'dq-lp-ch2-s13-sequence',
          content: 'The sequence of misadventures shows escalating delusion—Don Quixote doesn\'t learn from failure but doubles down on his beliefs.',
          category: 'plot-structure',
        },
        {
          id: 'dq-lp-ch2-s13-pattern',
          content: 'Cervantes structures the novel through episodic adventures that repeat similar patterns—establishing both humor and philosophical depth.',
          category: 'narrative-structure',
        },
      ],

      events: {
        onExit: [
          {
            type: 'quiz',
            componentId: 'quiz-don-quixote-chapter-2',
            condition: { type: 'if-not-completed' },
          },
        ],
      },
    },
  ],

  endQuiz: chapter2Quiz,
};

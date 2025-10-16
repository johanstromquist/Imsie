import type { Chapter } from '../../../types';
import { chapter1Quiz } from '../quizzes/chapter-1-quiz';

/**
 * Chapter 1: The Hero's Origins
 *
 * Introduces Tristan's background, the conflict with Ireland (Morholt),
 * and Tristan's first journey to Ireland where Isolde heals him.
 * Establishes the heroic archetype and the political tensions that
 * will shape the tragedy to come.
 */

export const chapter1: Chapter = {
  id: 'chapter-1-tristan-isolde',
  title: "Chapter 1: The Hero's Origins",
  description:
    "Discover how Tristan came to King Mark's court and proved his worth by defeating " +
    'the fearsome Irish champion, the Morholt--beginning a journey that will change his fate forever.',

  learningObjectives: [
    "Understand Tristan's background as a heroic figure in Celtic tradition",
    "Recognize the elements of the hero's journey in medieval romance",
    "Analyze the concept of honor and duty in knightly culture",
    "Explore the political landscape of medieval Cornwall and Ireland",
  ],

  scenes: [
    // Scene 1: Opening - Cornwall and King Mark's Court
    {
      id: 'scene-ch1-1-opening',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/20e6e3af-e761-4d84-9f51-b199db5c83b2/0_0.png', // Cornwall court hall

      content: `In the windswept kingdom of Cornwall, where stone castles cling to dramatic cliffs above the crashing sea, King Mark rules with wisdom and grace. His court is a place of honor, where knights gather to feast and tell tales of valor.

      But a shadow hangs over Cornwall. Every year, the kingdom must pay a terrible tribute to Ireland: thirty young men and thirty maidens, taken as slaves. This humiliation has gone on for too long, and the people whisper of rebellion.

      The cause of this tribute? Years ago, Cornwall lost a war with Ireland. The price of peace was this annual shame, enforced by the threat of the fearsome Irish champion--the Morholt, brother to the Irish queen, a giant of a man whom no Cornish knight has dared to challenge.`,

      learningPoints: [
        {
          id: 'lp-ch1-1-context',
          content: "Medieval kingdoms often paid tribute to stronger neighbors to avoid war. This political reality creates the story's initial conflict.",
          category: 'historical-context',
        },
        {
          id: 'lp-ch1-1-herojourney',
          content: "The hero's journey often begins with a community in need. Tristan's story follows the classic pattern of a young hero rising to meet a challenge.",
          category: 'literary-technique',
        },
      ],
    },

    // Scene 2: Tristan's Arrival
    {
      id: 'scene-ch1-2-tristan-arrives',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/20e6e3af-e761-4d84-9f51-b199db5c83b2/0_0.png', // Cornwall court hall

      content: `Into this troubled court arrives a young man of remarkable bearing. Orphaned as a child, Tristan has been raised by loyal retainers who taught him the arts of knighthood, music, and courtesy.

      When King Mark sees the youth, he is struck by a resemblance to his own late sister. Investigation reveals the truth: Tristan is Mark's nephew, the rightful heir to Cornwall's throne.

      King Mark embraces his newfound kinsman with joy, and Tristan quickly proves himself worthy of his lineage. He excels in swordplay, can play the harp like a master minstrel, and speaks with the eloquence of a courtier. The court loves him, and Mark treats him as a son.

      But Tristan's arrival comes at a fateful time. The Morholt has returned to collect this year's tribute.`,

      learningPoints: [
        {
          id: 'lp-ch1-2-lineage',
          content: "In medieval romance, noble birth and true identity are often hidden, then dramatically revealed. Lineage determined one's rights and duties.",
          category: 'historical-context',
        },
        {
          id: 'lp-ch1-2-knightly-virtues',
          content: "The ideal medieval knight combined martial prowess, artistic accomplishment, and courtly manners--the complete package made Tristan admirable.",
          category: 'cultural-context',
        },
      ],
    },

    // Scene 3: Decision - Will Tristan Challenge the Morholt?
    {
      id: 'scene-ch1-3-decision-challenge',
      type: 'decision',
      backgroundImage: 'https://cdn.midjourney.com/7754a666-0fbe-47b8-8824-83ad3e6deca2/0_0.png', // Cornwall cliffs

      prompt: 'What should Tristan do?',
      context: `The great hall falls silent as the Morholt's messenger delivers the demand: thirty young men and thirty maidens, or face Ireland's wrath. King Mark looks defeated--no champion has come forward in years.

      Tristan feels the weight of every eye in the hall. He is young, untested in real battle, but he cannot bear to see his uncle's shame and his people's suffering. Yet the Morholt is a giant, a veteran of countless battles, feared throughout the Celtic lands.`,

      choices: [
        {
          id: 'choice-volunteer',
          text: 'Volunteer to fight the Morholt in single combat',
          consequence: `Tristan steps forward, his voice ringing clear: "Uncle, I will be Cornwall's champion. I will face the Morholt and free our people from this tribute."

          The hall erupts in cheers and gasps. King Mark's face shows both pride and terror for his nephew. The Morholt's messenger smirks--he has seen many brave fools accept this challenge, and none have survived.

          "You will die, boy," the messenger says. "The Morholt has killed every knight who has faced him. Your courage is admirable, but it will make you no less dead."

          But Tristan's mind is made up. Honor demands it. Duty demands it. Cornwall needs a champion, and he will not let fear stop him.`,

          learningPoints: [
            {
              id: 'lp-ch1-3a-duty',
              content: "Medieval knights were bound by duty to their lord and people. Tristan chooses honor over safety, a recurring theme in romance literature.",
              category: 'thematic-analysis',
            },
          ],
        },
        {
          id: 'choice-hesitate',
          text: 'Wait to see if another knight volunteers first',
          consequence: `Tristan hesitates, waiting for one of the veteran knights to step forward. But the hall remains silent. The older warriors have seen the Morholt fight; they know what facing him means.

          As the silence stretches, Tristan realizes the truth: no one else will do this. If he does not act, sixty young people will be taken into slavery.

          His hesitation lasts only moments, but it teaches him a valuable lesson: sometimes the hero must act not because he is ready, but because he is needed.

          "Uncle," Tristan says, stepping forward at last, "I will be Cornwall's champion."`,

          learningPoints: [
            {
              id: 'lp-ch1-3b-moment',
              content: "Heroes are often reluctant at first--what matters is that they ultimately rise to the challenge. Heroism is a choice, not just an innate quality.",
              category: 'character-analysis',
            },
          ],
        },
      ],

      learningPoints: [],
    },

    // Scene 4: The Battle with the Morholt
    {
      id: 'scene-ch1-4-morholt-battle',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/907a549b-b919-4d76-ae66-f5ffb0d60dec/0_0.png', // Combat arena
      image: 'https://cdn.midjourney.com/1591854d-3d9f-493f-9990-2f6e2b6417ea/0_0.png', // Morholt battle scene

      content: `The combat takes place on a small island near the coast, according to ancient custom. Tristan and the Morholt face each other on the sandy ground, the sea crashing around them.

      The Morholt is indeed a giant--half again Tristan's size, with arms like tree trunks and a sword nearly as long as Tristan is tall. His red beard bristles as he laughs at the young knight before him.

      "Go home, boy," the Morholt says. "I have no wish to kill someone barely out of childhood. Cornwall will pay the tribute, as always."

      But Tristan raises his sword. "Cornwall pays no more tribute. Today, one of us dies--and it will not be me."

      The battle is fierce and brutal. The Morholt's strength is immense, each blow of his sword like a hammer strike. But Tristan is faster, more agile, and fighting for something the Morholt is not: his people's freedom.

      Finally, Tristan sees his opening. He dodges a massive swing and drives his sword deep into the Morholt's skull. The force of the blow is so great that a fragment of Tristan's blade breaks off, remaining lodged in the wound. The giant warrior falls, defeated at last.

      But as Tristan stands victorious, he realizes something terrible: the Morholt's blade was poisoned. A dark wound on Tristan's side begins to burn with unnatural pain.`,

      learningPoints: [
        {
          id: 'lp-ch1-4-symbolism',
          content: "Single combat between champions was a literary device to represent conflicts between nations. One man's victory or defeat determined the fate of many.",
          category: 'literary-technique',
        },
        {
          id: 'lp-ch1-4-david-goliath',
          content: 'The young hero defeating a giant opponent mirrors the David and Goliath story--a universal archetype of courage overcoming brute strength.',
          category: 'thematic-analysis',
        },
      ],
    },

    // Scene 5: Tristan Set Adrift
    {
      id: 'scene-ch1-5-adrift',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/01d4827f-10c3-4d7c-977d-6b9f6c37d848/0_0.png', // Boat adrift

      content: `The poison spreads through Tristan's body, turning his wound black and filling the air with a terrible stench. No healer in Cornwall can cure him. As weeks pass, Tristan grows weaker, the poison consuming him from within.

      In desperation, Tristan makes a strange request: "Put me in a boat with my harp and my sword. Let the sea take me where it will. If I am meant to live, God will guide me to a cure. If I am meant to die, let me die on the open water, not rotting in a sickbed."

      King Mark reluctantly agrees. They place Tristan in a small boat with provisions, his harp, and his sword. As the boat drifts away from Cornwall's shores, Mark watches through tears, certain he will never see his nephew again.

      But the currents and winds have their own plan. The boat drifts north and east, carried by forces beyond mortal control, toward the shores of Ireland--the land of Tristan's enemies, and his only hope.`,

      learningPoints: [
        {
          id: 'lp-ch1-5-fate',
          content: "Leaving one's fate to the sea was a common motif in Celtic legends, representing surrender to divine will or destiny.",
          category: 'cultural-context',
        },
        {
          id: 'lp-ch1-5-irony',
          content: 'Dramatic irony: we know Tristan is sailing toward the home of the man he killed. This creates tension and anticipation.',
          category: 'literary-technique',
        },
      ],
    },

    // Scene 6: Cause-Effect Game - Consequences of the Battle
    {
      id: 'scene-ch1-6-cause-effect',
      type: 'cause-effect',
      backgroundImage: 'https://cdn.midjourney.com/01d4827f-10c3-4d7c-977d-6b9f6c37d848/0_0.png', // Boat adrift

      prompt: 'Match each cause to its effect in the aftermath of the battle:',

      pairs: [
        {
          id: 'pair-1-morholt-death',
          cause: 'Tristan killed the Morholt',
          effect: "A fragment of Tristan's sword remained lodged in the Morholt's skull",
          explanation: "This sword fragment becomes crucial evidence later - it can be matched to Tristan's broken blade, revealing his identity to the Irish.",
        },
        {
          id: 'pair-2-poison',
          cause: "The Morholt's sword was poisoned",
          effect: 'Tristan received a wound that would not heal',
          explanation: "The Morholt's use of poison creates the crisis that drives Tristan to Ireland, setting up his first meeting with Isolde.",
        },
        {
          id: 'pair-3-freedom',
          cause: 'Cornwall was freed from tribute',
          effect: 'Ireland swore vengeance against the unknown knight who killed their champion',
          explanation: "Tristan's victory solved Cornwall's problem but created a new conflict with Ireland, making his later journey there extremely dangerous.",
        },
        {
          id: 'pair-4-healing',
          cause: 'No Cornish physician could heal Tristan',
          effect: 'Tristan had to seek healing in the very land whose champion he had killed',
          explanation: "This ironic twist of fate forces Tristan into enemy territory while gravely wounded, creating both danger and the opportunity to meet Isolde.",
        },
      ],

      learningPoints: [
        {
          id: 'lp-ch1-6-consequences',
          content: "In medieval romance, heroic actions often have unforeseen consequences. Tristan's victory freed Cornwall but doomed him to seek help from his enemies.",
          category: 'plot-structure',
        },
        {
          id: 'lp-ch1-6-poison',
          content: 'Poisoned weapons were considered dishonorable in chivalric combat, marking the Morholt as a more ambiguous figure than a pure villain.',
          category: 'cultural-context',
        },
      ],
    },

    // Scene 6.5: Arrival in Ireland
    {
      id: 'scene-ch1-6-5-arrival-ireland',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/e599508e-b0c5-47c3-b451-09479f6c1b1d/0_0.png', // Irish coastline
      image: 'https://cdn.midjourney.com/01d4827f-10c3-4d7c-977d-6b9f6c37d848/0_0.png', // Boat near shore

      content: `Days pass. The small boat drifts on the currents, guided by winds and tides beyond human reckoning. Tristan lies in the bottom of the vessel, drifting in and out of fevered consciousness. Sometimes he dreams of Cornwall. Sometimes he plays phantom melodies on his harp, though his fingers are too weak to actually touch the strings.

      Then, one grey morning, the boat scrapes against sand. Irish fishermen, checking their nets along the rocky shore, spot the drifting vessel and wade out to investigate.

      "There's a man in it!" one shouts. "Barely alive, by the look of him. And smell that wound--poison, or I'm no judge."

      They pull the boat ashore and lift Tristan carefully. His fine clothes, though salt-stained, mark him as a man of quality. His harp and sword suggest a knight with artistic training--rare and valuable.

      "Take him to the castle," the eldest fisherman decides. "If he's someone important, there'll be a reward for saving him. And if he's dying anyway, better he does it under a lord's roof than on our beach. The King's daughter knows healing--if anyone can save him, she can."

      They fashion a litter and carry Tristan up the winding path toward the Irish castle. He stirs briefly, muttering a name: "Tantris... my name is Tantris..." The fishermen exchange puzzled glances but say nothing.

      None of them recognize the man they're carrying. None know he is the knight who killed their champion, the Morholt, barely two months past. Fate has a dark sense of humor, bringing the killer directly to the victim's family for aid.

      Word spreads through the castle: a mysterious stranger, gravely wounded, has washed ashore. Princess Isolde, hearing of the poisoned wound and the fishermen's description, gathers her healing supplies and descends to the chamber where the stranger lies.`,

      learningPoints: [
        {
          id: 'lp-ch1-6-5-irony',
          content: 'This scene is thick with dramatic irony: we know Tristan is the Morholt\'s killer seeking help from the Morholt\'s own family. The audience sees the danger that Tristan, in his delirium, cannot.',
          category: 'literary-technique',
        },
        {
          id: 'lp-ch1-6-5-disguise',
          content: 'Tristan\'s adoption of the name "Tantris" (an anagram of Tristan) is his first act of self-preservation. Medieval audiences would recognize this as a clever word-play that both hides and reveals.',
          category: 'literary-technique',
        },
        {
          id: 'lp-ch1-6-5-fate',
          content: 'The fishermen\'s decision to take Tristan to the castle seems like chance, but medieval literature often portrayed such moments as fate or divine will guiding events toward their destined conclusion.',
          category: 'thematic-analysis',
        },
      ],
    },

    // Scene 7: Dialogue - Meeting Isolde (Disguised as "Tantris")
    {
      id: 'scene-ch1-7-meeting-isolde',
      type: 'dialogue',
      backgroundImage: 'https://cdn.midjourney.com/0d427892-9aa6-4850-98d2-b10d97ea0913/0_0.png', // Irish healing chamber

      character: {
        id: 'isolde-fair',
        name: 'Isolde the Fair',
        portrait: 'https://cdn.midjourney.com/ea2ee67c-ecf5-4705-b641-da5d65507ec9/0_0.png',
        description: 'Princess of Ireland, renowned for her healing skills and wisdom',
      },


      dialogueTree: {
        id: 'node-1',
        speaker: 'isolde-fair',
        text: 'You are very ill, Tantris. This wound is poisoned, and deeply so. How did you come by such an injury?',
        responses: [
          {
            id: 'response-bandits',
            text: 'I was attacked by bandits on the road',
            nextNodeId: 'node-2',
            learningPoints: [
              {
                id: 'lp-ch1-7a-deception',
                content: 'A believable story that protects your identity. Tristan must maintain his disguise to survive.',
                category: 'plot-structure',
              },
            ],
          },
          {
            id: 'response-tournament',
            text: 'I fought in a tournament and was injured by a poisoned blade',
            nextNodeId: 'node-2',
            learningPoints: [
              {
                id: 'lp-ch1-7b-deception',
                content: 'The mention of poison might make her suspicious, but the tournament story is plausible for a traveling minstrel.',
                category: 'plot-structure',
              },
            ],
          },
        ],
        allNodes: [
          {
            id: 'node-1',
            speaker: 'isolde-fair',
            text: 'You are very ill, Tantris. This wound is poisoned, and deeply so. How did you come by such an injury?',
            responses: [
              {
                id: 'response-bandits',
                text: 'I was attacked by bandits on the road',
                nextNodeId: 'node-2',
                learningPoints: [
                  {
                    id: 'lp-ch1-7a-deception',
                    content: 'A believable story that protects your identity. Tristan must maintain his disguise to survive.',
                    category: 'plot-structure',
                  },
                ],
              },
              {
                id: 'response-tournament',
                text: 'I fought in a tournament and was injured by a poisoned blade',
                nextNodeId: 'node-2',
                learningPoints: [
                  {
                    id: 'lp-ch1-7b-deception',
                    content: 'The mention of poison might make her suspicious, but the tournament story is plausible for a traveling minstrel.',
                    category: 'plot-structure',
                  },
                ],
              },
            ],
          },
          {
            id: 'node-2',
            speaker: 'isolde-fair',
            text: 'Whoever wielded this poison knew dark arts. But I know them too. I can heal you, though it will take time and you must endure much pain. Are you willing?',
            responses: [
              {
                id: 'response-endure',
                text: 'I will endure anything if it means I might live',
                nextNodeId: 'node-end',
                learningPoints: [
                  {
                    id: 'lp-ch1-7c-determination',
                    content: "Your determination impresses Isolde. Tristan's courage in the face of suffering mirrors the knightly virtue of fortitude.",
                    category: 'character-analysis',
                  },
                ],
              },
              {
                id: 'response-trust',
                text: 'I am in your hands, my lady. I trust your skill completely',
                nextNodeId: 'node-end',
                learningPoints: [
                  {
                    id: 'lp-ch1-7d-courtesy',
                    content: "Your courtesy and trust earn Isolde's respect. This displays the knightly virtue of humility and proper deference to a lady's expertise.",
                    category: 'cultural-context',
                  },
                ],
              },
            ],
          },
          {
            id: 'node-end',
            speaker: 'isolde-fair',
            text: 'Then we begin. You play the harp, I see--when you are stronger, perhaps you will play for me. Music is also a kind of healing.',
            responses: [
              {
                id: 'response-honor',
                text: 'It would be my honor, lady',
                learningPoints: [
                  {
                    id: 'lp-ch1-7e-courtly',
                    content: 'A perfect courtly response. Isolde smiles, pleased by your manners. This exchange establishes the foundation of their connection.',
                    category: 'cultural-context',
                  },
                ],
              },
              {
                id: 'response-whole',
                text: 'Music and your skill together will make me whole again',
                learningPoints: [
                  {
                    id: 'lp-ch1-7f-connection',
                    content: 'Your words please Isolde--the first spark of connection between two artistic souls. Notice how music becomes a bond between them.',
                    category: 'thematic-analysis',
                  },
                ],
              },
            ],
          },
        ],
      },

      learningPoints: [
        {
          id: 'lp-ch1-7-isolde-intro',
          content: "Isolde is introduced as skilled, intelligent, and compassionate--an active character, not a passive love interest. Medieval romances sometimes featured remarkably capable women.",
          category: 'character-analysis',
        },
        {
          id: 'lp-ch1-7-disguise',
          content: 'Disguise and hidden identity are recurring motifs in medieval romance, creating dramatic irony and tension.',
          category: 'literary-technique',
        },
      ],
    },

    // Scene 8: Primary Source - Medieval Healing Arts
    {
      id: 'scene-ch1-8-primary-source-healing',
      type: 'primary-source',
      backgroundImage: 'https://cdn.midjourney.com/39cd16dd-cddd-4888-a56a-ea1d1546471f/0_0.png', // Herb garden

      prompt: 'Examine this medieval text on the art of healing:',
      source: {
        type: 'text',
        title: 'The Treatise of Healing Herbs (12th century)',
        content: `"The wise healer knoweth that poison must be drawn out by contrary forces. For the venom of serpents and dark blades, one must apply the herb called "St. John's Wort" mixed with yarrow and blessed water.

The poultice must be changed thrice daily, and the patient given draughts of willow bark to calm the fever. Prayer and music also aid recovery, for the soul's health influences the body's.

A wound that blackens and stinks shows the presence of evil humors. These must be purged through both physical medicine and spiritual cleansing. The healer who knows both the body's workings and the soul's needs is the most effective."`,
      },

      questions: [
        {
          id: 'q1',
          question: 'According to the text, what must be done to counteract poison?',
          type: 'multiple-choice',
          options: [
            'Apply contrary forces using specific herbs',
            'Use only St. John\'s Wort without mixing it with other ingredients',
            'Pray for divine intervention and wait for natural healing',
            'Purge the wound with fire to burn out the evil humors',
          ],
          correctAnswer: 'Apply contrary forces using specific herbs',
          explanation: 'The text describes using herbs like St. John\'s Wort mixed with yarrow to draw out poison through contrary forces.',
        },
        {
          id: 'q2',
          question: 'What role does the text say music and prayer play in healing?',
          type: 'multiple-choice',
          options: [
            'They aid recovery by helping the soul, which influences the body',
            'They are optional luxuries that comfort but don\'t actually heal',
            'They replace physical medicine entirely in spiritual healing',
            'They work only if the patient has strong religious faith',
          ],
          correctAnswer: 'They aid recovery by helping the soul, which influences the body',
          explanation: 'Medieval medicine understood healing as holistic - the soul\'s health directly influenced physical recovery.',
        },
        {
          id: 'q3',
          question: 'What does a blackened, stinking wound indicate according to medieval medicine?',
          type: 'multiple-choice',
          options: [
            'The presence of evil humors that must be purged',
            'A sign that prayer has failed and the patient will die',
            'The need to change the poultice more than thrice daily',
            'That the wrong herbs were applied initially',
          ],
          correctAnswer: 'The presence of evil humors that must be purged',
          explanation: 'The theory of humors was central to medieval medicine - imbalances or "evil humors" needed to be purged.',
        },
      ],

      learningPoints: [
        {
          id: 'lp-ch1-8-medieval-medicine',
          content: 'Medieval medicine combined practical herbal knowledge with spiritual beliefs. Some remedies were effective, while others were based on incorrect theories.',
          category: 'historical-context',
        },
        {
          id: 'lp-ch1-8-isolde-skill',
          content: "Isolde's ability to heal Tristan demonstrates real medical knowledge, not just magic. This makes her a more credible and impressive character.",
          category: 'character-analysis',
        },
      ],
    },

    // Scene 9: Tristan's Recovery and Growing Bond
    {
      id: 'scene-ch1-9-recovery',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/0d427892-9aa6-4850-98d2-b10d97ea0913/0_0.png', // Irish healing chamber

      content: `Under Isolde's care, Tristan slowly recovers. The poison is drawn out, the wound begins to heal, and color returns to his face. During the long weeks of healing, Tristan plays his harp for Isolde, teaching her new songs and learning Irish melodies from her.

      They spend hours together in the healing chamber, talking of music, poetry, and philosophy. Isolde is unlike any woman Tristan has known--as skilled with words as she is with herbs, quick to laugh, and fearless in debate.

      For her part, Isolde finds "Tantris" fascinating. He is courtly yet genuine, skilled yet humble, and his music moves her deeply. She looks forward to their daily conversations, though she tells herself it is merely the satisfaction of seeing a patient recover.

      Neither admits, even to themselves, that something deeper is beginning to grow between them.`,

      learningPoints: [
        {
          id: 'lp-ch1-9-courtly-love-begin',
          content: 'Courtly love often began with admiration and intellectual connection, not just physical attraction. Shared interests in music and learning create the foundation.',
          category: 'cultural-context',
        },
        {
          id: 'lp-ch1-9-foreshadow',
          content: "This innocent connection foreshadows the deeper love to come, but hasn't yet crossed into dangerous territory. The story builds gradually.",
          category: 'plot-structure',
        },
      ],
    },

    // Scene 10: Quote Attribution - Lines from the Story
    {
      id: 'scene-ch1-10-quote-attribution',
      type: 'quote-attribution',
      backgroundImage: 'https://cdn.midjourney.com/0d427892-9aa6-4850-98d2-b10d97ea0913/0_0.png', // Irish healing chamber

      prompt: "Who spoke these lines from Tristan's time in Ireland?",

      quotes: [
        {
          id: 'quote-1',
          text: 'Cornwall pays no more tribute. Today, one of us dies--and it will not be me.',
          speaker: 'Tristan',
          context: 'Spoken during the battle with the Morholt on the island combat ground',
          explanation: 'This defiant declaration shows Tristan\'s courage and determination to free Cornwall from Irish tribute, even in the face of a legendary warrior.',
        },
        {
          id: 'quote-2',
          text: 'You will die, boy. The Morholt has killed every knight who has faced him.',
          speaker: "The Morholt's Messenger",
          context: 'Delivered to the court when Tristan volunteered to be Cornwall\'s champion',
          explanation: 'The messenger\'s ominous warning establishes the Morholt\'s fearsome reputation and the deadly stakes of Tristan\'s challenge.',
        },
        {
          id: 'quote-3',
          text: 'This wound is poisoned, and deeply so. How did you come by such an injury?',
          speaker: 'Isolde',
          context: 'Said when Isolde first examines Tristan (disguised as Tantris) after he washes up on Irish shores',
          explanation: 'Isolde\'s immediate recognition of the poison demonstrates her medical expertise and sets up her role as the only person who can save Tristan.',
        },
        {
          id: 'quote-4',
          text: 'If I am meant to live, God will guide me to a cure. If I am meant to die, let me die on the open water.',
          speaker: 'Tristan',
          context: 'Tristan\'s request to be set adrift when no healer in Cornwall could cure his poisoned wound',
          explanation: 'This statement shows Tristan\'s willingness to surrender to fate and divine will, a key theme in medieval romance. His choice leads him directly to Ireland.',
        },
      ],

      learningPoints: [
        {
          id: 'lp-ch1-10-voice',
          content: 'Each character has a distinctive voice. Tristan is noble and determined, Isolde is inquisitive and skilled, messengers are blunt and ominous.',
          category: 'character-analysis',
        },
      ],
    },

    // Scene 11: Return to Cornwall
    {
      id: 'scene-ch1-11-return',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/20e6e3af-e761-4d84-9f51-b199db5c83b2/0_0.png', // Cornwall court hall

      content: `Fully healed, Tristan knows he must leave Ireland before his identity is discovered. He bids farewell to Isolde, thanking her for saving his life.

      "You have given me more than healing, lady," Tristan says. "You have given me hope and beauty in dark times. I will never forget your kindness."

      Isolde feels a strange pang as she watches him prepare to leave. "Will you return to your homeland, Tantris?"

      "I must," Tristan replies. "My lord needs me. But I will never forget Ireland, or you."

      Their parting is bittersweet. Neither knows they will meet again under very different, and far more complicated, circumstances.

      When Tristan returns to Cornwall, King Mark's joy knows no bounds. The nephew he thought dead has returned, healthy and whole. The court celebrates for three days.

      But fate is not done with Tristan and Ireland. Not by far.`,

      learningPoints: [
        {
          id: 'lp-ch1-11-parting',
          content: "The first parting scene establishes an emotional connection that will make their reunion more powerful. Notice the use of foreshadowing in \"never forget.\"",
          category: 'literary-technique',
        },
        {
          id: 'lp-ch1-11-act-one',
          content: 'Chapter 1 functions as Act One of the larger story: establishing the world, introducing key characters, and setting up future conflicts.',
          category: 'plot-structure',
        },
      ],
    },

    // Scene 12: Decision - The Dragon Quest
    {
      id: 'scene-ch1-12-dragon-decision',
      type: 'decision',
      backgroundImage: 'https://cdn.midjourney.com/7754a666-0fbe-47b8-8824-83ad3e6deca2/0_0.png', // Cornwall cliffs

      prompt: 'A new challenge arises--what should Tristan do?',
      context: `Months pass. Cornwall prospers without the burden of tribute. But King Mark's barons begin to pressure him to marry and produce an heir.

      "You should wed, my lord," they say. "Cornwall needs stability. What if something happens to you?"

      Mark is reluctant--he has grown to love Tristan as a son and wishes him to inherit. But the pressure mounts.

      Then news arrives from Ireland: a fearsome dragon is terrorizing the kingdom. The Irish King has declared that whoever slays the dragon will marry Princess Isolde and unite the two kingdoms in peace.

      Mark's barons see an opportunity: "Send someone to slay the dragon and win Isolde for you, sire! A marriage alliance with Ireland would end all hostilities."

      Tristan realizes this could secure peace for Cornwall--but it would also bring Isolde to Cornwall as his uncle's bride. The thought troubles him more than he wants to admit.`,

      choices: [
        {
          id: 'choice-volunteer-dragon',
          text: 'Volunteer to win Isolde for King Mark',
          consequence: `Despite his conflicted feelings, Tristan steps forward. "Uncle, I will go to Ireland and slay this dragon. A marriage alliance with Ireland would be the final proof that our kingdoms are at peace."

          King Mark is both pleased and worried. "Nephew, you have already risked your life for Cornwall once. Must you do so again?"

          "It is my duty and my honor," Tristan replies.

          What he does not say: part of him wants to see Isolde again, even knowing she will be another man's wife. Already, fate's web is drawing tighter around them both.`,

          learningPoints: [
            {
              id: 'lp-ch1-12a-duty-vs-desire',
              content: "The central conflict emerges: Tristan's duty to his uncle versus his growing feelings for Isolde. This tension will drive the entire story.",
              category: 'thematic-analysis',
            },
          ],
        },
        {
          id: 'choice-suggest-other',
          text: 'Suggest another knight should attempt the quest',
          consequence: `"Uncle, perhaps another knight should attempt this quest," Tristan says carefully. "I am your heir--you should not risk me unnecessarily."

          But King Mark shakes his head. "The other knights do not have your skill, nor your gift for diplomacy. Besides, who better to represent Cornwall than my own nephew?"

          The barons agree, and Tristan finds himself committed to the quest whether he volunteered or not. Perhaps fate cannot be avoided, only delayed.

          As he prepares for the journey, Tristan admits to himself the truth: part of him wants to see Isolde again, regardless of the cost.`,

          learningPoints: [
            {
              id: 'lp-ch1-12b-fate',
              content: 'Even when characters try to avoid their destiny, circumstances conspire to push them forward. The theme of fate versus free will begins here.',
              category: 'thematic-analysis',
            },
          ],
        },
      ],

      learningPoints: [],

      events: {
        onExit: [
          {
            type: 'quiz',
            componentId: 'quiz-chapter-1-tristan-isolde',
            condition: { type: 'if-not-completed' },
          },
        ],
      },
    },
  ],

  endQuiz: chapter1Quiz,
};

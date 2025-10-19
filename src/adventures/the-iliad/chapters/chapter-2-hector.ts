import type { Chapter } from '../../../types';
import { chapter2Quiz } from '../quizzes/chapter-2-quiz';

/**
 * Chapter 2: Hector and the Trojan Defense
 *
 * With Achilles absent, the Trojans surge onto the battlefield. Hector, Troy's
 * greatest warrior and prince, leads devastating attacks against the Greeks.
 * We witness Hector's humanity through his farewell to his family, then follow
 * him as he nearly burns the Greek ships.
 *
 * Duration: 40-45 minutes
 * Scenes: 13
 */
export const chapter2: Chapter = {
  id: 'iliad-ch2-hector',
  title: 'Chapter 2: Hector and the Trojan Defense',
  description: 'Meet Hector, defender of Troy—a warrior torn between love for his family and duty to his city.',

  learningObjectives: [
    'Understand Hector as a contrasting hero to Achilles',
    'Analyze the Trojan perspective on the war',
    'Recognize heroic duels as a literary and cultural device',
    'Examine the relationship between public duty and private life',
  ],

  scenes: [
    // Scene 1: Greeks Suffer Without Achilles
    {
      id: 'iliad-ch2-sc1-defeat',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/6455c502-8b69-4a98-8e75-ff32c4f211b4/0_0.png',

      content: `Without Achilles, the Greek army crumbles.

Zeus has kept his promise to Thetis. He sends a false dream to Agamemnon, luring him into a disastrous battle. The Greeks march confidently onto the Trojan plain—and the Trojans, blessed with divine favor, meet them with devastating force.

Day after day, the pattern repeats. The Greeks push forward. The Trojans push back harder. Warriors fall on both sides, but the Greeks are losing ground, driven steadily back toward their ships.

Agamemnon begins to realize his mistake. His best warriors—Diomedes, Ajax, Odysseus—fight valiantly, but they cannot replace Achilles. The greatest warrior in the world sits in his tent by the sea, watching the battle from afar, unmoved by the suffering of his former comrades.

And leading the Trojan resurgence is a warrior the Greeks have learned to fear: Hector, son of Priam, prince and defender of Troy.`,

      learningPoints: [
        {
          id: 'lp-ch2-1-achilles-absence',
          content: 'Achilles\' absence proves his point: he is irreplaceable. But his pride prevents him from seeing the human cost of being right.',
          category: 'character-analysis',
        },
        {
          id: 'lp-ch2-1-divine-favor',
          content: 'In the Iliad, divine favor shifts the tide of battle—the gods actively intervene to fulfill their own agendas and promises.',
          category: 'thematic-analysis',
        },
      ],
    },

    // Scene 2: Introduction to Hector
    {
      id: 'iliad-ch2-sc2-hector-intro',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/6455c502-8b69-4a98-8e75-ff32c4f211b4/0_0.png',

      content: `Hector is everything Achilles is not.

Where Achilles fights for personal glory, Hector fights to defend his city. Where Achilles is driven by rage and pride, Hector is driven by duty and love. Where Achilles withdrew from battle over a personal slight, Hector cannot withdraw—he is Troy's last, best hope.

He is the eldest son of King Priam, husband to Andromache, father to a young son named Astyanax. He fights not because he loves war but because his people need him. Every morning he puts on his armor knowing he might not return. Every evening he comes home knowing tomorrow he must fight again.

The Greeks fear him. The Trojans revere him. Homer calls him "Hector of the flashing helmet," "tamer of horses," "bulwark of Troy." But Hector himself knows a terrible truth: Troy is doomed, and so is he.

He fights anyway, because that's what heroes do—even when they know the cause is lost.`,

      learningPoints: [
        {
          id: 'lp-ch2-2-hector-heroism',
          content: 'Hector embodies defensive heroism—fighting to protect rather than to conquer, making him more sympathetic than traditional epic heroes.',
          category: 'character-analysis',
        },
        {
          id: 'lp-ch2-2-tragic-knowledge',
          content: 'Hector\'s awareness of Troy\'s inevitable fall adds tragic depth—he fights knowing he cannot win, only delay the end.',
          category: 'thematic-analysis',
        },
      ],
    },

    // Scene 3: Hector's Farewell to Andromache
    {
      id: 'iliad-ch2-sc3-farewell',
      type: 'dialogue',
      backgroundImage: 'https://cdn.midjourney.com/d3532ea1-c976-492c-aebc-0c6fd555be32/0_0.png',
      image: 'https://cdn.midjourney.com/a979b54c-8717-4392-838d-2e04a2bd7340/0_0.png',

      character: {
        id: 'andromache',
        name: 'Andromache',
        portrait: 'https://cdn.midjourney.com/1a6cdac4-d8bb-4a44-a424-46afa2627559/0_0.png',
        description: 'Wife of Hector, mother of Astyanax',
      },

      dialogueTree: {
        id: 'andr-node-1',
        speaker: 'andromache',
        text: 'Hector, your courage will destroy you! Think of your infant son, think of me, soon to be your widow. Achilles already killed my father and my brothers. You are all I have left. Do not throw your life away. Stay inside the walls. Command from safety, not from the front lines!',

        responses: [
          {
            id: 'resp-duty',
            text: 'I must fight. It is my duty.',
            nextNodeId: 'node-duty',
            learningPoints: [
              {
                id: 'lp-ch2-3a-duty',
                content: 'Hector\'s sense of duty overrides personal safety and family happiness—a heroic value that Greek audiences both admired and questioned.',
                category: 'cultural-context',
              },
            ],
          },
          {
            id: 'resp-honor',
            text: 'What would the Trojans say if I hid behind walls?',
            nextNodeId: 'node-honor',
            learningPoints: [
              {
                id: 'lp-ch2-3b-shame',
                content: 'Fear of shame (aidos) is as powerful as desire for glory in Greek warrior culture—Hector cannot survive dishonor even to save his life.',
                category: 'cultural-context',
              },
            ],
          },
        ],

        allNodes: [
          {
            id: 'node-duty',
            speaker: 'andromache',
            text: 'Duty to whom? To Troy? To your father? What about your duty to me, to our son? We need you alive, Hector!',
            responses: [
              {
                id: 'resp-continue',
                text: 'I know what fate awaits me...',
                nextNodeId: 'node-fate',
              },
            ],
          },
          {
            id: 'node-honor',
            speaker: 'andromache',
            text: 'Let them say what they will! Better to live called a coward than to die called a hero, leaving your family defenseless!',
            responses: [
              {
                id: 'resp-continue2',
                text: 'I cannot live with dishonor...',
                nextNodeId: 'node-fate',
              },
            ],
          },
          {
            id: 'node-fate',
            speaker: 'andromache',
            text: 'Then this is goodbye. When you fall, Troy will fall. Our son will be thrown from the walls. I will be enslaved. All this because you valued honor over love.',
            responses: [
              {
                id: 'resp-final',
                text: 'I pray you are wrong, but I fear you are right.',
                nextNodeId: 'node-final',
              },
            ],
          },
          {
            id: 'node-final',
            speaker: 'andromache',
            text: 'Then go. Go and be the hero Troy needs. But remember: when you die, you take our whole world with you.',
            isEnd: true,
          },
        ],
      },

      learningPoints: [
        {
          id: 'lp-ch2-3-domestic',
          content: 'The Hector-Andromache scene is the Iliad\'s most intimate moment, showing the human cost of war behind the heroic facade.',
          category: 'literary-technique',
        },
      ],
    },

    // Scene 4: Decision - Hector's Choice
    {
      id: 'iliad-ch2-sc4-decision',
      type: 'decision',
      backgroundImage: 'https://cdn.midjourney.com/d3532ea1-c976-492c-aebc-0c6fd555be32/0_0.png',

      prompt: 'Should Hector fight defensively or lead from the front?',
      context: `Andromache has begged him to command from behind the walls, to fight cautiously, to value survival over glory. It's sound military advice—Troy's walls have held for ten years. Why risk the city's best defender in open combat?

But Hector knows what his people need. They need to see their prince fighting beside them. They need hope. They need a hero.

What should he do?`,

      choices: [
        {
          id: 'choice-defensive',
          text: 'Fight defensively and preserve his life',
          consequence: 'The practical choice. But Hector cannot make it. His identity is inseparable from his role as defender and visible inspiration to his people. To hide would destroy him as surely as Achilles\' spear.',
          learningPoints: [
            {
              id: 'lp-ch2-4a-practical',
              content: 'The tragedy is that the practical choice (survive to fight another day) is psychologically impossible for epic heroes.',
              category: 'thematic-analysis',
            },
          ],
        },
        {
          id: 'choice-front-lines',
          text: 'Lead from the front lines as he always has',
          consequence: 'This is what Hector chooses. He will not hide. He will not command from safety. He will fight beside his warriors, visible to friend and foe alike. This choice makes him noble—and doomed.',
          learningPoints: [
            {
              id: 'lp-ch2-4b-leadership',
              content: 'Hector\'s leadership style (fighting alongside his troops) contrasts with Agamemnon\'s (commanding from relative safety)—Homer implicitly critiques both approaches.',
              category: 'character-analysis',
            },
          ],
        },
        {
          id: 'choice-negotiate',
          text: 'Propose returning Helen and ending the war',
          consequence: 'Hector has proposed this many times. Paris and the Trojan elders refuse. Even Hector cannot force them to surrender his brother. So he fights on, defending a war he knows is unjust.',
          learningPoints: [
            {
              id: 'lp-ch2-4c-injustice',
              content: 'Hector fights for an unjust cause (defending Paris\'s theft) yet remains sympathetic—Homer explores how duty can trap people in immoral situations.',
              category: 'thematic-analysis',
            },
          ],
        },
      ],

      learningPoints: [
        {
          id: 'lp-ch2-4-impossible-choice',
          content: 'Hector faces impossible choices between family and duty, survival and honor, wisdom and heroism—the essence of Greek tragedy.',
          category: 'plot-structure',
        },
      ],
    },

    // Scene 5: Hector Leads the Trojans
    {
      id: 'iliad-ch2-sc5-battle',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/7f6379e2-a4cd-43c5-8d6a-5a0d0293b594/0_0.png',

      content: `Hector storms onto the battlefield like a force of nature.

With Zeus's favor and Achilles' absence, the Trojans push the Greeks back. Hector cuts through the Greek ranks, his spear finding mark after mark. Warriors flee before him. Those who stand fall.

Homer describes the battle with visceral detail: spears through throats, swords through skulls, chariots trampling the fallen. The battlefield becomes a slaughterhouse. Blood soaks into the Trojan plain. The Scamander river runs red.

But this is not glorified violence—Homer makes you feel the horror. Each fallen warrior has a name, a homeland, a family waiting for news that will never come. The catalog of the dead reads like a memorial: young men who will never see their wives again, never watch their children grow.

And through it all, Hector fights—not with rage like Achilles, but with grim determination. He takes no joy in killing. He simply does what must be done to protect Troy.`,

      learningPoints: [
        {
          id: 'lp-ch2-5-homer-realism',
          content: 'Homer\'s battle descriptions are unusually realistic and empathetic for epic poetry—he names the dead and mourns them, questioning the glory of war.',
          category: 'literary-technique',
        },
        {
          id: 'lp-ch2-5-aristeia',
          content: 'Aristeia (a warrior\'s finest hour) is an epic convention where a hero dominates the battlefield—but Homer subverts it by emphasizing the cost.',
          category: 'literary-technique',
        },
      ],
    },

    // Scene 6: Timeline Game - Events of Chapter 2
    {
      id: 'iliad-ch2-sc6-timeline',
      type: 'timeline-game',
      backgroundImage: 'https://cdn.midjourney.com/7f6379e2-a4cd-43c5-8d6a-5a0d0293b594/0_0.png',
      prompt: 'Order these key events in the sequence they occurred. Each event leads directly to the next.',
      successThreshold: 70,

      timelineEvents: [
        {
          id: 'event-1',
          title: 'Agamemnon Seizes Briseis',
          description: 'The king takes Achilles\' war prize, dishonoring the greatest warrior',
          year: 1,
        },
        {
          id: 'event-2',
          title: 'Achilles Asks Thetis to Petition Zeus',
          description: 'He requests that the Greeks suffer to prove his worth',
          year: 2,
        },
        {
          id: 'event-3',
          title: 'Zeus Sends False Dream to Agamemnon',
          description: 'The deceptive dream lures the Greeks into disastrous battle',
          year: 3,
        },
        {
          id: 'event-4',
          title: 'Greek Army Marches to Battle',
          description: 'Confident from the dream, the Greeks march onto the Trojan plain',
          year: 4,
        },
        {
          id: 'event-5',
          title: 'Hector Says Goodbye to Andromache',
          description: 'In Troy, Hector holds his son and bids farewell to his wife',
          year: 5,
        },
        {
          id: 'event-6',
          title: 'Hector Leads Assault on Greek Camp',
          description: 'He returns to battle and presses the attack toward the ships',
          year: 6,
        },
      ],

      learningPoints: [
        {
          id: 'lp-ch2-6-structure',
          content: 'The chain of causation is clear: Agamemnon\'s insult → Achilles\' revenge → Zeus\'s deception → Greek defeat → Hector\'s opportunity.',
          category: 'plot-structure',
        },
      ],
    },

    // Scene 7: Paris and Menelaus Duel
    {
      id: 'iliad-ch2-sc7-paris-menelaus',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/e00c6244-9f93-48dc-b7aa-5f5b455f381e/0_0.png',
      image: 'https://cdn.midjourney.com/d7da0120-a98d-45e5-8f3d-347e1c00acef/0_0.png',

      content: `Before Hector's great push, there was an attempt to end the war through single combat.

Paris, the cause of the entire war, challenges Menelaus, the wronged husband, to settle everything in a duel. The winner takes Helen. The war ends. Thousands of lives are spared.

It's a beautiful idea. It fails spectacularly.

The duel begins. Menelaus, burning with ten years of rage, dominates Paris completely. He shatters Paris's spear, breaks his helmet, and begins dragging him by the neck strap toward the Greek lines—Paris choking, dying, humiliated.

Then Aphrodite intervenes. The goddess who promised Paris Helen cannot let him die now. She snaps the helmet strap, shrouds Paris in mist, and spirits him away to Helen's bedroom in Troy. Menelaus spins around, sword raised, to find his enemy has vanished.

The Greeks roar in protest. The Trojans look ashamed. Paris, safe in Troy, cares nothing for honor or shame—he has what he wanted, and a goddess to protect him.

The war continues.`,

      inlineAnnotations: [
        {
          id: 'annotation-paris-coward',
          text: 'Paris choking, dying, humiliated',
          tooltip: {
            title: 'Paris the Un-Hero',
            content: 'Paris is the Iliad\'s anti-hero: beautiful, favored by goddesses, but lacking courage and honor. He starts the war and contributes least to fighting it—a deliberate contrast to Hector.',
            category: 'literary-context',
          },
        },
      ],

      learningPoints: [
        {
          id: 'lp-ch2-7-divine-interference',
          content: 'Divine interference often prevents resolution in the Iliad—the gods prolong human suffering to serve their own agendas.',
          category: 'thematic-analysis',
        },
        {
          id: 'lp-ch2-7-paris-hector',
          content: 'Paris and Hector are brothers and opposites: one fights reluctantly but honorably; the other starts wars but avoids their consequences.',
          category: 'character-analysis',
        },
      ],
    },

    // Scene 8: Map Exploration - Troy Interior
    {
      id: 'iliad-ch2-sc8-map',
      type: 'map-exploration',
      backgroundImage: 'https://cdn.midjourney.com/7dfd9788-bc8d-465c-af53-ec22466753ff/0_0.png',

      mapImage: 'https://cdn.midjourney.com/62eff951-bba5-45f3-84cb-ac981122383a/0_0.png',
      prompt: 'Inside the Walls of Troy: Explore Troy\'s interior—the city Hector is fighting to defend. Understanding this space helps you appreciate what\'s at stake.',

      locations: [
        {
          id: 'loc-priam-palace',
          name: 'Priam\'s Palace',
          x: 29,
          y: 13,
          content: 'The royal palace at Troy\'s heart, where King Priam rules with Queen Hecuba. This is where the Trojan council meets and where Priam will later plead for Hector\'s body.',
          image: 'https://cdn.midjourney.com/d3532ea1-c976-492c-aebc-0c6fd555be32/0_0.png',
        },
        {
          id: 'loc-scaean-gates',
          name: 'Scaean Gates',
          x: 17,
          y: 97,
          content: 'The main gates where warriors exit to battle and return. Priam and Hecuba will watch from here as Hector faces Achilles.',
          image: 'https://cdn.midjourney.com/1c546a98-0276-47db-a5c8-4326a7014d8d/0_0.png',
        },
        {
          id: 'loc-temple-athena',
          name: 'Temple of Athena',
          x: 52,
          y: 28,
          content: 'Where Trojan women pray for protection. Athena favors the Greeks, so these prayers go unanswered—a bitter irony.',
          image: 'https://cdn.midjourney.com/a5f099e8-b864-4f64-85c1-18634789a427/0_0.png',
        },
        {
          id: 'loc-hector-chambers',
          name: 'Hector\'s Chambers',
          x: 24,
          y: 55,
          content: 'Where Hector lives with Andromache and Astyanax. The scene of their heartbreaking farewell.',
          image: 'https://cdn.midjourney.com/a979b54c-8717-4392-838d-2e04a2bd7340/0_0.png',
        },
        {
          id: 'loc-helen-chambers',
          name: 'Helen\'s Chambers',
          x: 42,
          y: 9,
          content: 'Where Helen lives with Paris—the cause of the war, dwelling in luxury while warriors die.',
          image: 'https://cdn.midjourney.com/02b11aea-724c-4fd3-b376-71d921f4aec1/0_0.png',
        },
        {
          id: 'loc-walls',
          name: 'The Great Walls',
          x: 50,
          y: 80,
          content: 'Troy\'s legendary walls, built (according to myth) by the gods Apollo and Poseidon. They have held for ten years.',
          image: 'https://cdn.midjourney.com/6455c502-8b69-4a98-8e75-ff32c4f211b4/0_0.png',
        },
      ],

      learningPoints: [
        {
          id: 'lp-ch2-8-troy',
          content: 'Troy is not just a military target but a living city with families, temples, and daily life—making its eventual destruction more tragic.',
          category: 'thematic-analysis',
        },
      ],
    },

    // Scene 9: Primary Source - Helen's Role
    {
      id: 'iliad-ch2-sc9-helen-source',
      type: 'primary-source',
      backgroundImage: 'https://cdn.midjourney.com/d3532ea1-c976-492c-aebc-0c6fd555be32/0_0.png',
      prompt: `Read this primary source and answer the questions below.`,

      source: {
        title: 'Iliad, Book 6, Lines 344-358',
        author: 'Homer',
        date: 'Circa 750 BCE',
        type: 'text',
        content: `**Helen speaks:**
<br /><br />
"Hector, brother—I am a hateful thing, a creature of evil. I wish that on the day my mother bore me, a whirlwind had swept me away to the mountains or into the roaring sea, so I would have died before all this happened.
<br /><br />
But since the gods decreed these evils, I wish I had been the wife of a better man—one who knew shame and felt the contempt of others. But Paris has no steady mind, and never will. He will pay for it someday.
<br /><br />
Come, sit down. You bear the greatest burden of this war—all because of me, a hateful woman, and Paris's recklessness. Zeus has placed an evil fate on us, so that in days to come, we will be subjects of songs."
<br /><br />
**Analysis:**
<br /><br />
Helen is acutely self-aware. She:<br />
- Wishes she had died rather than caused this war<br />
- Calls herself "hateful" and "evil"<br />
- Recognizes Paris's weakness<br />
- Sees herself as an object of divine manipulation ("the gods decreed")<br />
- Understands she will be remembered in songs—but not fondly
<br /><br />
Homer gives Helen agency, regret, and tragic awareness—she is neither simple victim nor simple villain.`,
      },

      questions: [
        {
          id: 'helen-source-q1',
          question: 'How does Homer\'s portrayal of Helen challenge simplistic views of her as either pure victim or pure villain?',
          type: 'multiple-choice',
          options: [
            'He portrays her as completely innocent with no responsibility',
            'He portrays her as evil and manipulative throughout',
            'He gives her self-awareness, regret, and acknowledgment of both divine influence and personal responsibility',
            'He never lets Helen speak for herself',
          ],
          correctAnswer: 'He gives her self-awareness, regret, and acknowledgment of both divine influence and personal responsibility',
          explanation: 'Helen\'s speech shows sophisticated character psychology—she acknowledges her role while also recognizing divine causation. She\'s neither absolved nor condemned, but presented as a complex human caught in tragedy.',
        },
        {
          id: 'helen-source-q2',
          question: 'What does Helen mean when she says "we will be subjects of songs"?',
          type: 'multiple-choice',
          options: [
            'That people will celebrate her love story',
            'That people will forget about the war',
            'That her story will be told for generations, granting her a kind of immortality through poetry',
            'That she wants to become a singer',
          ],
          correctAnswer: 'That her story will be told for generations, granting her a kind of immortality through poetry',
          explanation: 'Helen demonstrates meta-awareness: she knows she exists in a story that will outlive her. This is Homer acknowledging his own role in immortalizing these characters through epic poetry.',
        },
      ],

      learningPoints: [
        {
          id: 'lp-ch2-9-helen-complex',
          content: 'Homer\'s Helen is the Iliad\'s most psychologically complex female character—aware of her own legend and its tragic consequences.',
          category: 'character-analysis',
        },
      ],
    },

    // Scene 10: Hector Challenges the Greeks
    {
      id: 'iliad-ch2-sc10-challenge',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/7f6379e2-a4cd-43c5-8d6a-5a0d0293b594/0_0.png',

      content: `After Paris's failed duel, the war intensifies. Days of brutal fighting follow. Then Hector issues a challenge:

"Let your best warrior face me in single combat. If he kills me, he may take my armor but must return my body to Troy for proper burial. If I kill him, I will do the same. Let the gods decide!"

It's a matter of honor, of prowess, of proving which side has divine favor. The Greeks look at each other. Who will accept?

Ajax, the giant warrior, steps forward. He is the second-greatest Greek fighter after Achilles—a mountain of a man with a shield like a wall. If anyone can match Hector, it's him.

The two warriors face each other between the armies. Both sides watch in tense silence. Two champions. Two civilizations. One duel.`,

      learningPoints: [
        {
          id: 'lp-ch2-10-heroic-code',
          content: 'Formal duels with rules (armor exchanged, bodies returned) show the heroic code\'s civilizing influence even in brutal warfare.',
          category: 'cultural-context',
        },
        {
          id: 'lp-ch2-10-ajax',
          content: 'Ajax embodies steady, reliable strength—less flashy than Achilles but equally crucial to Greek survival.',
          category: 'character-analysis',
        },
      ],
    },

    // Scene 11: Ajax vs. Hector Duel
    {
      id: 'iliad-ch2-sc11-duel',
      type: 'dialogue',
      backgroundImage: 'https://cdn.midjourney.com/e00c6244-9f93-48dc-b7aa-5f5b455f381e/0_0.png',

      character: {
        id: 'ajax',
        name: 'Ajax',
        portrait: 'https://cdn.midjourney.com/0d5da975-cb5d-4113-b2a2-a4097316e0e0/0_0.png',
        description: 'Greatest Greek warrior after Achilles',
      },

      dialogueTree: {
        id: 'ajax-node-1',
        speaker: 'ajax',
        text: 'Hector, son of Priam, I am Ajax, son of Telamon. You seek a worthy opponent? You have found one. Let us test which of us the gods favor today.',

        responses: [
          {
            id: 'resp-hector1',
            text: '[As Hector] I welcome this duel with respect',
            nextNodeId: 'node-fight',
          },
        ],

        allNodes: [
          {
            id: 'node-fight',
            speaker: 'ajax',
            text: 'They fight for hours. Spears shatter. Swords ring against shields. Both warriors land blows, both bleed, neither yields. The sun begins to set. Darkness approaches.',
            responses: [
              {
                id: 'resp-continue',
                text: 'Continue...',
                nextNodeId: 'node-respect',
              },
            ],
          },
          {
            id: 'node-respect',
            speaker: 'ajax',
            text: 'Hector, you are the greatest warrior I have faced besides Achilles. Night falls. Shall we end this duel in mutual respect? We can fight again another day.',
            responses: [
              {
                id: 'resp-agree',
                text: '[As Hector] Yes. Let us exchange gifts as equals.',
                nextNodeId: 'node-gifts',
              },
            ],
          },
          {
            id: 'node-gifts',
            speaker: 'ajax',
            text: 'They exchange gifts: Hector gives Ajax his sword; Ajax gives Hector his belt. Both armies cheer—their champions have shown honor. But this moment of civilization is brief. Tomorrow, the slaughter continues.',
            isEnd: true,
          },
        ],
      },

      learningPoints: [
        {
          id: 'lp-ch2-11-mutual-respect',
          content: 'The Ajax-Hector duel shows warriors can respect opponents even in war—a moment of humanity in the violence.',
          category: 'thematic-analysis',
        },
        {
          id: 'lp-ch2-11-bitter-irony',
          content: 'The exchanged gifts will become instruments of death: Hector will be dragged by the belt Ajax gave him; Ajax will fall on the sword Hector gave him.',
          category: 'literary-technique',
        },
      ],
    },

    // Scene 12: Cause-Effect - Hector's Campaign
    {
      id: 'iliad-ch2-sc12-cause-effect',
      type: 'cause-effect',
      backgroundImage: 'https://cdn.midjourney.com/7f6379e2-a4cd-43c5-8d6a-5a0d0293b594/0_0.png',
      prompt: 'Match Hector\'s actions to their consequences. Understanding causation helps you see how Hector\'s choices shape the story.',

      pairs: [
        {
          id: 'pair-hector-1',
          cause: 'Zeus grants Trojans divine favor',
          effect: 'Hector leads devastating attacks that push Greeks back to their ships',
          explanation: 'Divine favor is decisive in Homeric warfare—even great warriors need the gods\' support to achieve major victories.',
        },
        {
          id: 'pair-hector-2',
          cause: 'Hector chooses duty over family safety',
          effect: 'He remains Troy\'s defender but breaks Andromache\'s heart',
          explanation: 'Hector\'s heroism requires sacrifice—he cannot be both devoted husband and perfect hero.',
        },
        {
          id: 'pair-hector-3',
          cause: 'Aphrodite saves Paris from Menelaus',
          effect: 'The war continues; the chance for peace is lost',
          explanation: 'Divine interference prevents resolution—the gods manipulate events to prolong the war and suffering.',
        },
        {
          id: 'pair-hector-4',
          cause: 'Hector and Ajax exchange gifts after their duel',
          effect: 'They show mutual respect, but the gifts will later cause their deaths',
          explanation: 'The Iliad is filled with tragic irony—acts of honor become instruments of doom.',
        },
      ],

      learningPoints: [
        {
          id: 'lp-ch2-12-fate-choice',
          content: 'Hector\'s story shows the interplay of choice and fate—he chooses his actions freely, yet fate determines their consequences.',
          category: 'thematic-analysis',
        },
      ],
    },

    // Scene 13: Trojans Push to the Ships
    {
      id: 'iliad-ch2-sc13-conclusion',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/6455c502-8b69-4a98-8e75-ff32c4f211b4/0_0.png',

      content: `With Zeus's continued favor, Hector leads the Trojans in a massive assault.

The Greeks are driven back across the plain, past the Scamander river, all the way to their ships on the beach. Hector breaks through the Greek fortifications like a boulder crashing through a dam. His warriors surge behind him.

For the first time in ten years, the Trojans threaten to burn the Greek ships. If the ships burn, the Greeks are stranded. If stranded, they are doomed. Victory—impossible for so long—is within Hector's grasp.

The Greeks fight desperately. Even their greatest warriors—Diomedes, Ajax, Odysseus—can barely hold the line. They need Achilles. But Achilles remains by his ships, watching the battle rage, his rage still burning.

Agamemnon begins to understand the catastrophic price of his pride. He sends ambassadors to Achilles, offering magnificent gifts, offering Briseis back, offering everything—begging Achilles to return and save them.

Achilles refuses.

"Let them burn," he says.

And in Troy, Hector removes his helmet and kisses his son goodnight, knowing he may not see another dawn. Knowing he fights for a doomed city. Knowing he will do it anyway.

Two heroes. Two kinds of honor. Two kinds of tragedy.`,

      learningPoints: [
        {
          id: 'lp-ch2-13-parallel',
          content: 'Homer structures the epic around parallel heroes: Achilles and Hector are opposites (Greek/Trojan, offense/defense) who mirror each other\'s tragic flaws.',
          category: 'literary-technique',
        },
        {
          id: 'lp-ch2-13-price-pride',
          content: 'Both Achilles and Agamemnon prioritize pride over pragmatism—their shared flaw drives the epic\'s tragedy.',
          category: 'thematic-analysis',
        },
      ],

      events: {
        onExit: [{
          type: 'quiz',
          componentId: 'quiz-iliad-ch2',
          condition: { type: 'if-not-completed' },
        }],
      },
    },
  ],

  endQuiz: chapter2Quiz,
};

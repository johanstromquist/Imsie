import type { Chapter } from '../../../types';
import { chapter5Quiz } from '../quizzes/chapter-5-quiz';

export const chapter5: Chapter = {
  id: 'shakespeare-ch5-midsummer',
  title: 'Chapter 5: A Midsummer Night\'s Dream - Magic, Dreams, and Transformation',
  description: 'On a midsummer night, the boundaries between reality and dream blur as fairy magic causes chaotic romantic entanglements and theatrical transformations in an enchanted forest.',

  learningObjectives: [
    'Understand the play\'s multiple worlds (Athens court, fairy realm, mechanicals)',
    'Analyze how magic and dreams reveal deeper truths about love',
    'Recognize metatheatrical elements ("The play\'s the thing")',
    'Identify the transformative power of imagination and art',
    'Explore the irrational nature of love ("Love looks not with the eyes, but with the mind")',
  ],

  scenes: [
    // Scene 1: Athens - Hermia's dilemma
    {
      id: 'midsummer-scene-1-hermia-dilemma',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/1ee186a9-d227-466f-80bf-e0a18cdd7973/0_0.png',
      image: 'https://cdn.midjourney.com/1ee186a9-d227-466f-80bf-e0a18cdd7973/0_0.png',

      content: `In Athens, the city where order and reason reign, a young woman stands before Duke Theseus with her fate hanging in the balance.

Hermia, daughter of Egeus, loves Lysander—but her father demands she marry Demetrius instead. Under Athenian law, a father has absolute authority over his daughter's marriage. If she refuses, her choices are stark: death, or life as a nun, forever sworn to chastity.

"As she is mine, I may dispose of her," Egeus declares, invoking the ancient law. "Either to this gentleman, or to her death."

Theseus, about to celebrate his own wedding to Hippolyta, tries to reason with her. "Take time to pause," he advises. "By the next new moon—the day I wed—you must decide."

But Hermia's heart is fixed. "I would my father looked but with my eyes," she protests.

"Rather your eyes must with his judgment look," Theseus replies, embodying Athens' emphasis on paternal authority over personal desire.

As the court empties, Hermia and Lysander are left alone, along with Helena—Hermia's friend who desperately loves Demetrius, though he spurns her. The stage is set for something beyond the reach of Athenian law.`,

      learningPoints: [
        {
          id: 'midsummer-lp-1-athens-order',
          content: 'Athens represents civilization, law, and patriarchal order—a world where reason should govern passion.',
          category: 'literary-context',
        },
        {
          id: 'midsummer-lp-2-conflict',
          content: 'The central conflict between individual desire and social authority drives the lovers into the transformative space of the forest.',
          category: 'literary-context',
        },
        {
          id: 'midsummer-lp-3-three-worlds',
          content: 'The play operates in three distinct realms: the Athenian court (order), the fairy world (magic), and the mechanicals\' world (labor and art).',
          category: 'literary-context',
        },
      ],
    },

    // Scene 2: Decision - Obey father or follow heart?
    {
      id: 'midsummer-scene-2-decision',
      type: 'decision',
      backgroundImage: 'https://cdn.midjourney.com/1ee186a9-d227-466f-80bf-e0a18cdd7973/0_0.png',
      image: 'https://cdn.midjourney.com/1ee186a9-d227-466f-80bf-e0a18cdd7973/0_0.png',

      prompt: 'You are witnessing the crisis in Athens. What would you do?',
      context: `Lysander speaks urgently to Hermia: "I have a widow aunt, a dowager of great revenue, and she hath no child. From Athens is her house remote seven leagues, and she respects me as her only son. There will I marry thee."

He's proposing they run away—flee Athens and its laws, marry beyond its borders where her father's authority cannot reach.

Meanwhile, Helena has learned of this plan. Demetrius once loved her before his affections shifted to Hermia.

Three characters, three possible paths. Which would you choose?`,

      choices: [
        {
          id: 'choice-flee',
          text: 'Follow Hermia\'s path: Flee to the forest and follow your heart',
          consequence: 'You choose love over law, personal desire over social order. Like Hermia, you\'ll enter a space where the rules of Athens no longer apply—but where other forces hold sway.',
          learningPoints: [
            {
              id: 'midsummer-lp-4-transgression',
              content: 'The lovers\' flight from Athens represents a necessary transgression—escaping restrictive social structures to find authentic feeling.',
              category: 'literary-context',
            },
          ],
        },
        {
          id: 'choice-obey',
          text: 'Choose duty: Obey your father and accept the arranged marriage',
          consequence: 'You choose order over desire, duty over love. This is the path Athens demands—but it\'s not the path the play will take. The very premise of comedy requires breaking free from such constraints.',
          learningPoints: [
            {
              id: 'midsummer-lp-5-comedy-freedom',
              content: 'Comedy requires characters to escape restrictive social orders; tragedy occurs when they cannot.',
              category: 'literary-context',
            },
          ],
        },
        {
          id: 'choice-tell',
          text: 'Follow Helena\'s path: Tell Demetrius about the elopement plan',
          consequence: 'Like Helena, you believe that revealing Hermia\'s flight will win Demetrius\'s gratitude and love. "I will go tell him of fair Hermia\'s flight," she decides. It\'s a desperate gambit born of unrequited love—betting that betraying a friend will earn affection.',
          learningPoints: [
            {
              id: 'midsummer-lp-6-irrational-love',
              content: 'Helena\'s self-destructive devotion demonstrates the irrational, obsessive nature of romantic love—a key theme of the play.',
              category: 'literary-context',
            },
          ],
        },
      ],

      learningPoints: [],
    },

    // Scene 3: Map Exploration - Explore the enchanted forest
    {
      id: 'midsummer-scene-3-forest-map',
      type: 'map-exploration',
      backgroundImage: 'https://cdn.midjourney.com/2ed05244-c050-49fc-8e54-96ebf3d42aac/0_0.png',
      mapImage: 'https://cdn.midjourney.com/d37278ad-2692-441f-80b8-88a1180b6cff/0_1.png',

      prompt: 'Explore the enchanted forest—a world beyond Athenian law',

      locations: [
        {
          id: 'loc-forest-entrance',
          name: 'Forest Entrance',
          x: 51,
          y: 11,
          image: 'https://cdn.midjourney.com/2ed05244-c050-49fc-8e54-96ebf3d42aac/0_0.png',
          content: `The boundary between Athens and the forest is more than geographical—it's a threshold between worlds.

As you pass through the city gates into the trees, Athenian law loses its power. Here, Duke Theseus has no authority. Here, fathers cannot command. Here, the rules are different, wilder, older.

"This is the forest primeval," the romantics would later call such spaces. For Shakespeare's Athenians, it's a place of transformation and danger, where anything can happen.`,
        },
        {
          id: 'loc-fairy-bower',
          name: 'Titania\'s Bower',
          x: 7,
          y: 57,
          image: 'https://cdn.midjourney.com/3b371c0c-1fff-4098-a34b-cd3f15f52328/0_0.png',
          content: `Deep in the forest, the fairy queen Titania has created a bower of extraordinary beauty. Flowers bloom out of season. The air shimmers with enchantment.

But all is not well in fairyland. Titania and her husband Oberon are locked in a bitter quarrel over a changeling child—and their discord affects the mortal world.

"These are the forgeries of jealousy," Titania says. "The seasons alter: hoary-headed frosts fall in the fresh lap of the crimson rose." When fairy royalty fights, nature itself is thrown out of joint.`,
        },
        {
          id: 'loc-clearing',
          name: 'The Clearing',
          x: 45,
          y: 61,
          image: 'https://cdn.midjourney.com/2ed05244-c050-49fc-8e54-96ebf3d42aac/0_0.png',
          content: `This clearing will become the center of the forest's chaos. Here, the Athenian lovers will wander, confused and enchanted. Here, fairy magic will cause hearts to change in an instant.

It's empty now, moonlit and peaceful. But soon it will host the play's central confusion—a reminder that love, like the forest itself, is wild and ungovernable.`,
        },
        {
          id: 'loc-mechanicals-rehearsal',
          name: 'Mechanicals\' Rehearsal Space',
          x: 78,
          y: 61,
          image: 'https://cdn.midjourney.com/2a223216-4568-4f4e-b9e7-c67e7a0285ff/0_2.png',
          content: `Meanwhile, away from both fairy magic and romantic entanglement, a group of Athenian craftsmen have come to the forest to rehearse a play.

These "mechanicals"—a weaver, a carpenter, a bellows-mender, and others—hope to perform at Duke Theseus's wedding. Their choice? The tragical comedy of Pyramus and Thisbe, which they take with utmost seriousness.

"This is the most lamentable comedy and most cruel death of Pyramus and Thisbe," their director Peter Quince announces. The contradiction in terms—"lamentable comedy"—hints at how their earnest amateur production will actually function in the larger play.`,
        },
      ],

      requiredLocations: ['loc-forest-entrance', 'loc-fairy-bower'],

      learningPoints: [
        {
          id: 'midsummer-lp-7-forest-space',
          content: 'The forest represents the unconscious, the irrational, the imaginative—everything Athens suppresses with law and reason.',
          category: 'literary-context',
        },
        {
          id: 'midsummer-lp-8-parallel-worlds',
          content: 'Three groups occupy the forest simultaneously yet separately: lovers, fairies, and mechanicals—each representing different aspects of human experience.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 4: Enter the fairy world
    {
      id: 'midsummer-scene-4-fairy-world',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/3b371c0c-1fff-4098-a34b-cd3f15f52328/0_0.png',
      image: 'https://cdn.midjourney.com/8c1ab004-e8af-45f9-8378-e7208ea781c3/0_3.png',

      content: `"Ill met by moonlight, proud Titania!"

The fairy world is real, ancient, powerful—and currently at war with itself.

Oberon, king of the fairies, enters with his mischievous servant Puck (also called Robin Goodfellow). They are here seeking Titania, whose refusal to give up a changeling boy has enraged Oberon.

Puck is one of Shakespeare's most memorable creations: a shape-shifter, trickster, and jester who delights in confusion. "I am that merry wanderer of the night," he boasts. "I jest to Oberon and make him smile."

Puck describes his pranks: misleading travelers, curdling milk, pulling chairs out from under old women. His magic is neither good nor evil—it's capricious, amoral, dangerous.

And now Oberon will use Puck's powers to punish Titania for her disobedience. "Fetch me that flower," Oberon commands, "the juice of it on sleeping eyelids laid will make or man or woman madly dote upon the next live creature that it sees."

The love potion. The instrument of chaos.`,

      learningPoints: [
        {
          id: 'midsummer-lp-9-puck-trickster',
          content: 'Puck embodies the trickster archetype—an agent of chaos who disrupts order but ultimately enables transformation.',
          category: 'literary-context',
        },
        {
          id: 'midsummer-lp-10-fairy-magic',
          content: 'Fairy magic in this play represents the irrational forces that govern love—attraction that cannot be reasoned with or controlled.',
          category: 'literary-context',
        },
        {
          id: 'midsummer-lp-11-comedy-vs-tragedy',
          content: 'Notice how comedy uses magic to fix problems, while tragedy has no such escape—compare this to Hamlet or Romeo and Juliet, where no magic can save the doomed.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 5: Dialogue - Oberon and Titania's quarrel
    {
      id: 'midsummer-scene-5-quarrel-dialogue',
      type: 'dialogue',
      backgroundImage: 'https://cdn.midjourney.com/3b371c0c-1fff-4098-a34b-cd3f15f52328/0_0.png',

      character: {
        id: 'titania',
        name: 'Titania, Queen of the Fairies',
        portrait: 'https://cdn.midjourney.com/f4acf453-bcc1-4515-b1e3-dc73c1a16070/0_2.png',
        description: 'Powerful, proud, and fiercely protective of her changeling child',
      },

      dialogueTree: {
        id: 'quarrel-start',
        speaker: 'titania',
        text: 'What, jealous Oberon! Fairies, skip hence. I have forsworn his bed and company.',

        responses: [
          {
            id: 'resp-why-quarrel',
            text: 'Why are you and Oberon quarreling?',
            nextNodeId: 'explain-changeling',
            learningPoints: [
              {
                id: 'midsummer-lp-12-changeling',
                content: 'The changeling child represents competing claims of loyalty: Titania\'s vow to her dead friend versus Oberon\'s patriarchal authority.',
                category: 'literary-context',
              },
            ],
          },
          {
            id: 'resp-effects',
            text: 'How does your quarrel affect the mortal world?',
            nextNodeId: 'explain-effects',
            learningPoints: [
              {
                id: 'midsummer-lp-13-cosmic-discord',
                content: 'The fairy quarrel causes disorder in nature—unseasonable weather, failed crops—showing how microcosm reflects macrocosm.',
                category: 'historical-context',
              },
            ],
          },
        ],

        allNodes: [
          {
            id: 'explain-changeling',
            speaker: 'titania',
            text: 'The boy\'s mother was a votaress of my order, and in the spiced Indian air, by night, full often she gossiped by my side. But she, being mortal, died birthing this boy, and for her sake do I rear up her boy. And for her sake I will not part with him.',
            responses: [
              {
                id: 'resp-understand',
                text: 'I understand—it\'s about loyalty and memory',
                nextNodeId: 'titania-yes',
              },
              {
                id: 'resp-but-effects',
                text: 'But your quarrel harms mortals—the seasons are reversed!',
                nextNodeId: 'explain-effects',
              },
            ],
          },
          {
            id: 'explain-effects',
            speaker: 'titania',
            text: 'And this same progeny of evils comes from our debate, from our dissension. The spring, the summer, the childing autumn, angry winter change their wonted liveries, and the mazed world now knows not which is which. The seasons alter, and mortals suffer for our wrath.',
            responses: [
              {
                id: 'resp-resolve',
                text: 'Can\'t you make peace?',
                nextNodeId: 'no-peace',
              },
            ],
          },
          {
            id: 'titania-yes',
            speaker: 'titania',
            text: 'Yes. Love and loyalty sometimes conflict with power and authority. I will not betray my vow to my friend, no matter how Oberon rages.',
            isEnd: true,
          },
          {
            id: 'no-peace',
            speaker: 'titania',
            text: 'Not while Oberon demands the child. His pride will not bend, and neither will my loyalty. We are at an impasse—and so the world suffers.',
            isEnd: true,
          },
        ],
      },

      learningPoints: [
        {
          id: 'midsummer-lp-14-power-conflict',
          content: 'The fairy quarrel parallels the mortal conflicts: both involve struggles between authority (Oberon/Egeus) and autonomy (Titania/Hermia).',
          category: 'literary-context',
        },
      ],
    },

    // Scene 6: The love potion
    {
      id: 'midsummer-scene-6-love-potion',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/3b371c0c-1fff-4098-a34b-cd3f15f52328/0_0.png',
      image: 'https://cdn.midjourney.com/3b371c0c-1fff-4098-a34b-cd3f15f52328/0_0.png',

      content: `Puck returns with the magical flower, called "love-in-idleness"—a name that perfectly captures the capricious, idle nature of romantic attraction.

"The juice of it on sleeping eyelids laid will make or man or woman madly dote upon the next live creature that it sees," Oberon explains. He plans to use it on Titania: "I'll watch her when she is asleep, and drop the liquor of it in her eyes. The next thing then she waking looks upon—be it on lion, bear, or wolf, or bull, on meddling monkey or on busy ape—she shall pursue it with the soul of love."

It's a cruel plan, meant to humiliate Titania until she surrenders the changeling child.

But then Oberon witnesses something that changes his intentions. He sees Demetrius pursuing Hermia through the forest, spurning Helena who follows him desperately. Moved by Helena's plight, Oberon gives Puck a second mission: "A sweet Athenian lady is in love with a disdainful youth. Anoint his eyes—but do it when the next thing he espies may be the lady."

Oberon means to help. But Puck, who has never seen these mortals before, will make a terrible mistake.

"Fear not, my lord, your servant shall do so," Puck promises. But there are four young Athenians in the forest, wearing similar clothes, wandering in the dark. How will Puck know which youth to enchant?`,

      inlineAnnotations: [
        {
          id: 'ann-love-in-idleness',
          text: 'love-in-idleness',
          tooltip: {
            title: 'The Magical Flower',
            content: 'The flower is actually the wild pansy (Viola tricolor). The name "love-in-idleness" suggests that love is an idle, lazy, capricious force—it has no purpose, no reason, it simply is. This perfectly captures Shakespeare\'s view of romantic attraction as irrational.',
            category: 'literary-context',
          },
        },
      ],

      learningPoints: [
        {
          id: 'midsummer-lp-15-potion-symbol',
          content: 'The love potion symbolizes the arbitrary, irrational nature of romantic attraction—love as a force beyond reason or control.',
          category: 'literary-context',
        },
        {
          id: 'midsummer-lp-16-dramatic-irony',
          content: 'We know Puck will make a mistake, but the characters don\'t—this dramatic irony builds anticipation for the coming chaos.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 7: Custom Mini-Game - Puck's mistakes
    {
      id: 'midsummer-scene-7-pucks-mistakes',
      type: 'custom-mini-game',
      backgroundImage: 'https://cdn.midjourney.com/3aa0769b-9281-444e-a9dc-069000073d9d/0_0.png',

      gameType: 'memory-match',

      config: {
        prompt: 'As dawn approaches and the lovers sleep under enchantment, let\'s map out the romantic chaos Puck has created. Can you match each stage of the confusion? Remember: at first, Hermia loved Lysander and Helena loved Demetrius. Then Puck\'s mistake changed everything—and Oberon\'s "correction" made it worse!',
        title: 'Puck\'s Confusion: Match the Lovers',
        description: 'Match each card to trace the romantic chaos through the enchanted night',
        timeLimit: 120,
        pairs: [
          {
            id: 'pair-hermia-lysander',
            value: 'Hermia + Lysander',
            match: 'Originally in love, fled to the forest together',
            image: 'https://cdn.midjourney.com/43212cee-2f92-47f8-a90a-154f83eb7cb6/0_3.png',
          },
          {
            id: 'pair-helena-demetrius',
            value: 'Helena + Demetrius',
            match: 'Helena loves Demetrius, but he spurns her',
            image: 'https://cdn.midjourney.com/24d30a54-71a6-48c2-8c98-ff76ce141061/0_3.png',
          },
          {
            id: 'pair-lysander-helena-mistake',
            value: 'Lysander + Helena',
            match: 'Puck\'s first mistake: Lysander enchanted to love Helena',
            image: 'https://cdn.midjourney.com/4f8a5b55-1bb3-44ee-a410-a5bcb4d25fe7/0_3.png',
          },
          {
            id: 'pair-demetrius-helena-mistake',
            value: 'Demetrius + Helena',
            match: 'Oberon\'s correction: Now both men love Helena!',
            image: 'https://cdn.midjourney.com/a901b345-f975-4551-b958-df59a9140b83/0_2.png',
          },
          {
            id: 'pair-hermia-alone',
            value: 'Hermia Alone',
            match: 'Abandoned by both Lysander and her former suitor Demetrius',
            image: 'https://cdn.midjourney.com/76f900f1-bd4b-4631-b0da-cc86912a8b9d/0_1.png',
          },
          {
            id: 'pair-helena-overwhelmed',
            value: 'Puck\'s Mischief',
            match: 'Helena thinks it\'s all cruel mockery—Puck watches, delighted by the chaos',
            image: 'https://cdn.midjourney.com/3646f0f8-f2fd-4399-b610-f83a5fde4280/0_3.png',
          },
        ],
      },

      learningPoints: [
        {
          id: 'midsummer-lp-17-confusion',
          content: 'The lovers\' confusion dramatizes how easily attraction shifts—today\'s beloved becomes tomorrow\'s forgotten, with no rational explanation.',
          category: 'literary-context',
        },
        {
          id: 'midsummer-lp-18-symmetry',
          content: 'Shakespeare creates perfect symmetry in the chaos: first one man loves each woman, then both men love one woman, maximizing comic confusion.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 8: "Lord, what fools these mortals be!"
    {
      id: 'midsummer-scene-8-fools-mortals',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/3aa0769b-9281-444e-a9dc-069000073d9d/0_0.png',
      image: 'https://cdn.midjourney.com/2ed05244-c050-49fc-8e54-96ebf3d42aac/0_0.png',

      content: `## The forest descends into chaos.

Lysander, enchanted by Puck's mistake, wakes to see Helena and instantly falls in love. He abandons Hermia, who wakes alone and frightened. Meanwhile, Oberon discovers Puck's error and enchants Demetrius as well—but now both young men pursue Helena, fighting over her.

"Lord, what fools these mortals be!" Puck observes, delighted by the confusion he's caused.

Helena, who has spent the play desperate for love, now believes she's being mocked. "Both men are joined in scorning me!" she cries. She thinks her friend Hermia has conspired with both men to humiliate her.

And Hermia, abandoned by Lysander and spurned by Demetrius, fights with Helena, her lifelong friend.

"O, when she's angry, she is keen and shrewd," Demetrius marvels. "She was a vixen when she went to school."

The comedy accelerates. The men challenge each other to duels. The women attack each other with words sharp as swords. Everyone is furious, hurt, confused—and completely convinced their feelings are real and justified.

It's a perfect demonstration of love's irrationality. These same people who now hate each other were friends hours ago. These same men who now fight over Helena spurned her before. Nothing has changed about the people themselves—only the enchantment, the arbitrary force of attraction, has shifted.

And isn't that, Shakespeare suggests, how love always works? Even without magical flowers?`,

      learningPoints: [
        {
          id: 'midsummer-lp-19-loves-irrationality',
          content: '"Love looks not with the eyes, but with the mind"—attraction is subjective, irrational, and often contradicts itself.',
          category: 'literary-context',
        },
        {
          id: 'midsummer-lp-20-puck-observer',
          content: 'Puck serves as a commentator on the action, his amusement at mortal folly creating distance that allows us to laugh at what might otherwise seem painful.',
          category: 'literary-context',
        },
        {
          id: 'midsummer-lp-21-magic-metaphor',
          content: 'The love potion is a metaphor—we\'re all "enchanted" by attraction, unable to explain why we love who we love.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 9: Bottom's transformation
    {
      id: 'midsummer-scene-9-bottom-transformation',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/2ed05244-c050-49fc-8e54-96ebf3d42aac/0_0.png',
      image: 'https://cdn.midjourney.com/35576f46-d9e9-4ddc-b642-ee4c004b553a/0_0.png',

      content: `Meanwhile, in another part of the forest, the mechanicals are rehearsing their play—and Puck discovers them.

"What hempen homespuns have we swaggering here, so near the cradle of the fairy queen?" Puck wonders. These simple craftsmen have wandered into Titania's bower, unknowing and unwary.

Puck decides to have some fun.

Nick Bottom, the weaver, is the most confident of the actors. He wants to play every part—Pyramus the hero, Thisbe the heroine, even the lion. "Let me play the lion too," he begs. "I will roar that I will make the Duke say 'Let him roar again!'"

When Bottom exits to await his cue, Puck follows. When Bottom returns, he has been transformed—his head is now that of a donkey.

An ass. Bottom has been turned into an ass, which is perfect: he's been playing the fool, the pompous amateur, and now his appearance matches his behavior. It's physical comedy elevated to metaphor.

His fellow actors flee in terror. "Bless thee, Bottom, bless thee! Thou art translated!" they cry. "Translated"—transformed, changed, made into something other than yourself.

Bottom, alone and confused, begins to sing to keep up his courage. His voice wakes Titania—still enchanted by Oberon's love potion—and she instantly falls in love with this donkey-headed mortal.

"What angel wakes me from my flowery bed?" Titania asks, seeing Bottom as beautiful beyond measure. "I pray thee, gentle mortal, sing again."`,

      inlineAnnotations: [
        {
          id: 'ann-translated',
          text: 'translated',
          tooltip: {
            title: 'Transformation',
            content: 'The word "translated" means both "transformed" and "carried across"—as in translating between languages. It\'s perfect for Bottom, who has been transformed physically and is crossing between the mortal and fairy worlds.',
            category: 'vocabulary',
          },
        },
      ],

      learningPoints: [
        {
          id: 'midsummer-lp-22-bottom-transformation',
          content: 'Bottom\'s transformation into an ass is both literal (Puck\'s magic) and metaphorical (he\'s been acting like a fool all along).',
          category: 'literary-context',
        },
        {
          id: 'midsummer-lp-23-titania-humiliation',
          content: 'Titania falling in love with a donkey-headed mortal achieves Oberon\'s goal: humiliating her into submission.',
          category: 'literary-context',
        },
        {
          id: 'midsummer-lp-24-mechanicals-parallel',
          content: 'The mechanicals\' earnest attempt at theater parallels the lovers\' earnest pursuit of love—both are comic because the participants take themselves so seriously.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 10: Dialogue - Bottom with fairies
    {
      id: 'midsummer-scene-10-bottom-fairies-dialogue',
      type: 'dialogue',
      backgroundImage: 'https://cdn.midjourney.com/3b371c0c-1fff-4098-a34b-cd3f15f52328/0_0.png',

      character: {
        id: 'bottom',
        name: 'Nick Bottom',
        portrait: 'https://cdn.midjourney.com/35576f46-d9e9-4ddc-b642-ee4c004b553a/0_0.png',
        description: 'A weaver transformed into an ass, oblivious to how absurd he appears',
      },

      dialogueTree: {
        id: 'bottom-start',
        speaker: 'bottom',
        text: 'Methinks, mistress, you should have little reason for that. And yet, to say the truth, reason and love keep little company together nowadays.',

        responses: [
          {
            id: 'resp-unaware',
            text: 'Do you realize you have a donkey\'s head?',
            nextNodeId: 'bottom-oblivious',
            learningPoints: [
              {
                id: 'midsummer-lp-25-bottom-unaware',
                content: 'Bottom\'s obliviousness to his transformation makes him a perfect comic figure—he cannot see his own absurdity.',
                category: 'literary-context',
              },
            ],
          },
          {
            id: 'resp-reason-love',
            text: 'You just said something wise: reason and love don\'t go together',
            nextNodeId: 'bottom-wisdom',
            learningPoints: [
              {
                id: 'midsummer-lp-26-fool-wisdom',
                content: 'The fool often speaks truth: Bottom accidentally articulates the play\'s central theme about love\'s irrationality.',
                category: 'literary-context',
              },
            ],
          },
        ],

        allNodes: [
          {
            id: 'bottom-oblivious',
            speaker: 'bottom',
            text: 'My head? What do you mean? I feel nothing amiss. These good fairies attend me—Peaseblossom! Cobweb! Moth! Mustardseed! Scratch my head, good fairies. I have a great desire for a peck of provender. Good hay, sweet hay, hath no fellow.',
            responses: [
              {
                id: 'resp-hay',
                text: 'You want to eat hay? That\'s what donkeys eat!',
                nextNodeId: 'bottom-still-oblivious',
              },
            ],
          },
          {
            id: 'bottom-still-oblivious',
            speaker: 'bottom',
            text: 'I have a reasonable good ear in music. Let us have the tongs and the bones! Though I confess I am marvellous hairy about the face, and I am such a tender ass—if my hair do but tickle me, I must scratch.',
            isEnd: true,
          },
          {
            id: 'bottom-wisdom',
            speaker: 'bottom',
            text: 'Yes! The more\'s the pity that some honest neighbors will not make them friends. Nay, I can gleek upon occasion—I mean, I have the wit to speak sense when sense is needed.',
            responses: [
              {
                id: 'resp-impressive',
                text: 'That\'s surprisingly insightful!',
                nextNodeId: 'bottom-modest',
              },
            ],
          },
          {
            id: 'bottom-modest',
            speaker: 'bottom',
            text: 'Well, I have had a dream, past the wit of man to say what dream it was. Man is but an ass if he go about to expound this dream. I shall get Peter Quince to write a ballad of this dream—it shall be called "Bottom\'s Dream," because it hath no bottom!',
            isEnd: true,
          },
        ],
      },

      learningPoints: [
        {
          id: 'midsummer-lp-27-bottom-experience',
          content: 'Bottom\'s experience in fairyland becomes "a most rare vision"—art and imagination transform even absurdity into wonder.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 11: Cause-Effect - Match magical interventions to outcomes
    {
      id: 'midsummer-scene-11-cause-effect',
      type: 'cause-effect',
      backgroundImage: 'https://cdn.midjourney.com/3aa0769b-9281-444e-a9dc-069000073d9d/0_0.png',

      prompt: 'Match each magical intervention to its romantic outcome',

      pairs: [
        {
          id: 'pair-puck-mistake',
          cause: 'Puck enchants Lysander instead of Demetrius',
          effect: 'Lysander abandons Hermia and pursues Helena',
          explanation: 'Puck\'s error creates the first wave of chaos: Lysander, who truly loved Hermia, now redirects all his passion to Helena, leaving Hermia alone and heartbroken.',
        },
        {
          id: 'pair-oberon-correction',
          cause: 'Oberon enchants Demetrius to correct Puck\'s mistake',
          effect: 'Both men now love Helena, and she believes they\'re mocking her',
          explanation: 'Oberon\'s "correction" makes things worse: now Helena goes from being unwanted to being pursued by both men—but she thinks it\'s all a cruel joke.',
        },
        {
          id: 'pair-titania-bottom',
          cause: 'Oberon enchants Titania with the love potion',
          effect: 'Titania falls in love with Bottom the ass-headed weaver',
          explanation: 'This is Oberon\'s revenge: by making Titania love something absurd and base, he humiliates her into giving up the changeling child.',
        },
        {
          id: 'pair-friends-fight',
          cause: 'The men shift their affections magically',
          effect: 'Hermia and Helena\'s lifelong friendship dissolves into bitter conflict',
          explanation: 'The magical chaos destroys female friendship: Helena thinks Hermia conspired with the men to mock her, and Hermia is furious at Helena for "stealing" Lysander.',
        },
        {
          id: 'pair-resolution',
          cause: 'Oberon reverses the enchantments (except on Demetrius)',
          effect: 'Hermia and Lysander reunite; Demetrius remains enchanted to love Helena',
          explanation: 'The resolution requires leaving one enchantment in place: Demetrius stays enchanted so Helena gets her happy ending. This suggests true love and magical love are indistinguishable.',
        },
      ],

      distractors: [
        'All the lovers remember the enchantments clearly',
        'Titania leaves Oberon permanently',
        'Bottom becomes the Duke of Athens',
        'The mechanicals give up their play in despair',
      ],

      learningPoints: [
        {
          id: 'midsummer-lp-28-magic-consequences',
          content: 'Each magical intervention creates cascading effects—one mistake compounds into universal chaos before resolution.',
          category: 'literary-context',
        },
        {
          id: 'midsummer-lp-29-enchantment-remains',
          content: 'Shakespeare leaves Demetrius enchanted, suggesting that "true love" and magical attraction are impossible to distinguish—both are irrational.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 12: Oberon sets things right
    {
      id: 'midsummer-scene-12-resolution',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/2ed05244-c050-49fc-8e54-96ebf3d42aac/0_0.png',
      image: 'https://cdn.midjourney.com/2ed05244-c050-49fc-8e54-96ebf3d42aac/0_0.png',

      content: `## As dawn approaches, Oberon takes pity on the chaos he and Puck have caused.

"This is thy negligence," he chides Puck. "About the wood go swifter than the wind, and Helena of Athens look thou find. I'll charm his eyes against she do appear."

This time, there will be no mistakes. Oberon himself enchants Demetrius's eyes. Then Puck leads all four lovers to the same spot, where they fall into exhausted, enchanted sleep.

While they sleep, Puck applies the antidote to Lysander's eyes, removing the misdirected enchantment. When they wake, Hermia and Lysander will be in love again—and Demetrius will remain enchanted to love Helena.

Wait—Demetrius stays enchanted? Yes. He never gets the antidote. His love for Helena is permanent magical compulsion, not restored authentic feeling.

Why? Because that's the only way to create four symmetrical happy endings. In comedy, you need two couples—and to get them, Shakespeare must leave one man under a spell forever.

"And the man shall have his mare again, and all shall be well," Puck says cheerfully.

Meanwhile, in Titania's bower, Oberon releases his queen from her enchantment. She wakes, horrified: "My Oberon, what visions have I seen! Methought I was enamored of an ass."

"There lies your love," Oberon says, pointing to the sleeping Bottom, still donkey-headed. Titania is so mortified that she immediately yields the changeling child. The quarrel is over. Nature can return to its proper order.`,

      learningPoints: [
        {
          id: 'midsummer-lp-30-partial-resolution',
          content: 'The "resolution" isn\'t complete: Demetrius remains enchanted, Bottom remembers nothing, and the lovers recall the night as a confused dream.',
          category: 'literary-context',
        },
        {
          id: 'midsummer-lp-31-comedy-ending',
          content: 'Comedy requires marriage and reconciliation—even if that requires permanent magical intervention (Demetrius) or selective amnesia (Bottom).',
          category: 'literary-context',
        },
        {
          id: 'midsummer-lp-32-oberon-victory',
          content: 'Oberon achieves his goal through humiliation: Titania\'s shame at loving an ass makes her surrender the child, reinforcing patriarchal authority.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 13: Primary Source - "Pyramus and Thisbe" performance
    {
      id: 'midsummer-scene-13-play-within-play',
      type: 'primary-source',
      backgroundImage: 'https://cdn.midjourney.com/1ee186a9-d227-466f-80bf-e0a18cdd7973/0_0.png',
      image: 'https://cdn.midjourney.com/2ed05244-c050-49fc-8e54-96ebf3d42aac/0_0.png',

      prompt: 'Watch the mechanicals perform "The most lamentable comedy and most cruel death of Pyramus and Thisbe"',

      source: {
        title: 'Pyramus and Thisbe',
        author: 'Performed by Peter Quince\'s company',
        date: 'Act V',
        type: 'text',
        content: `[PROLOGUE]
If we offend, it is with our good will.
That you should think, we come not to offend,
But with good will. To show our simple skill,
That is the true beginning of our end.

[PYRAMUS enters]
PYRAMUS: O grim-look'd night! O night with hue so black!
O night, which ever art when day is not!

[THISBE enters]
THISBE: O wall, full often hast thou heard my moans
For parting my fair Pyramus and me.

[LION roars]
LION: You, ladies, you whose gentle hearts do fear
The smallest monstrous mouse that creeps on floor,
May now perchance both quake and tremble here,
When lion rough in wildest rage doth roar!

[PYRAMUS finds THISBE's mantle bloodied]
PYRAMUS: O dainty duck! O dear!
Thy mantle good, what, stained with blood?
O Fates, come, come! Cut thread and thrum!
[He stabs himself]

[THISBE finds PYRAMUS dead]
THISBE: Asleep, my love? What, dead, my dove?
Come, blade, thy breast imbrue!
[She stabs herself]

[BOTTOM as PYRAMUS addresses the audience]
BOTTOM: Will you see the epilogue, or to hear a Bergamask dance?

[DUKE THESEUS]
THESEUS: No epilogue, I pray you. Your play needs no excuse. Never excuse.`,
        citation: 'A Midsummer Night\'s Dream, Act V, Scene 1',
      },

      questions: [
        {
          id: 'q1-why-funny',
          question: 'Why is the mechanicals\' tragic play funny to the aristocratic audience?',
          type: 'multiple-choice',
          options: [
            'The actors are too skilled and make tragedy seem absurd',
            'The sincere but clumsy performance highlights the gap between their ambition and ability',
            'The story of Pyramus and Thisbe is naturally comic',
            'The aristocrats are cruel and mock anything lower-class people do',
          ],
          correctAnswer: 'The sincere but clumsy performance highlights the gap between their ambition and ability',
          explanation: 'The comedy comes from the mechanicals\' earnest commitment to a tragic story they don\'t quite have the skills to perform. They mean well, they try hard, but the result is absurd—which is precisely what makes it endearing and funny.',
        },
        {
          id: 'q2-metatheatre',
          question: 'How does the play-within-a-play create metatheatrical commentary?',
          type: 'multiple-choice',
          options: [
            'It shows that all theater is pretend, inviting us to recognize we\'re watching a performance too',
            'It proves that amateur theater is better than professional theater',
            'It demonstrates that tragedy is impossible to perform correctly',
            'It suggests Shakespeare\'s actors were better than competing companies',
          ],
          correctAnswer: 'It shows that all theater is pretend, inviting us to recognize we\'re watching a performance too',
          explanation: 'The mechanicals\' bad performance reminds us that even Shakespeare\'s "real" play is performance and illusion. We laugh at them for their obviousness, but we\'re doing the same thing: suspending disbelief to enter an imaginary world.',
        },
        {
          id: 'q3-parallel',
          question: 'How does the Pyramus and Thisbe story parallel the main plot?',
          type: 'multiple-choice',
          options: [
            'It doesn\'t parallel the main plot at all—it\'s just entertainment',
            'Like Hermia and Lysander, Pyramus and Thisbe are lovers kept apart by parental authority',
            'It shows what happens when you trust fairies',
            'It proves that suicide is the only solution to forbidden love',
          ],
          correctAnswer: 'Like Hermia and Lysander, Pyramus and Thisbe are lovers kept apart by parental authority',
          explanation: 'Pyramus and Thisbe\'s tragic story is what could have happened to Hermia and Lysander if not for fairy magic. The wall between the lovers represents the barrier of parental/legal authority. But where the tragic version ends in death, the comic version ends in marriage—thanks to magic.',
        },
      ],

      learningPoints: [
        {
          id: 'midsummer-lp-33-play-within-play',
          content: 'The play-within-a-play technique appears here as comedy and will reappear as tragedy in Hamlet—both use theater to reveal truth.',
          category: 'literary-context',
        },
        {
          id: 'midsummer-lp-34-tragedy-avoided',
          content: 'Pyramus and Thisbe die from misunderstanding and bad luck—exactly what almost happened to the Athenian lovers, but magic saved them.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 14a: Intro to famous quotes
    {
      id: 'midsummer-scene-14a-quotes-intro',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/3aa0769b-9281-444e-a9dc-069000073d9d/0_0.png',

      content: `## The play's legacy lives in its language.

A Midsummer Night's Dream is filled with quotable lines that have become famous far beyond the play itself. Some you've encountered in our journey through the enchanted forest—others are so well-known they've entered everyday language.

From Puck's mischievous observations to Bottom's accidental wisdom, from the lovers' passionate declarations to the epilogue's theatrical magic, these quotes capture the play's themes: love's irrationality, the power of imagination, and the transformative nature of art.

Can you match each famous quote to its speaker? Think about who would say what: the mischievous sprite, the lovesick mortals, or the transformed weaver.`,

      learningPoints: [
        {
          id: 'midsummer-lp-35a-quotable',
          content: 'Shakespeare\'s language is so memorable that many lines have become proverbial, used by people who may not even know they\'re quoting the play.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 14b: Quote Attribution - Match dream and magic quotes
    {
      id: 'midsummer-scene-14b-quotes',
      type: 'quote-attribution',
      backgroundImage: 'https://cdn.midjourney.com/3aa0769b-9281-444e-a9dc-069000073d9d/0_0.png',

      prompt: 'Match these famous quotes to their speakers',

      quotes: [
        {
          id: 'quote-mortals-fools',
          text: 'Lord, what fools these mortals be!',
          speaker: 'Puck',
          context: 'Observing the chaos among the Athenian lovers',
          explanation: 'Puck\'s most famous line captures his amused detachment from mortal confusion. He sees humans as entertaining puppets, their passions absurd from an immortal perspective.',
        },
        {
          id: 'quote-course-true-love',
          text: 'The course of true love never did run smooth',
          speaker: 'Lysander',
          context: 'Consoling Hermia about the obstacles they face',
          explanation: 'Lysander articulates one of Shakespeare\'s most famous observations: love always encounters obstacles, whether social (parental authority), circumstantial (distance), or internal (changing feelings).',
        },
        {
          id: 'quote-eyes-mind',
          text: 'Love looks not with the eyes, but with the mind, and therefore is winged Cupid painted blind',
          speaker: 'Helena',
          context: 'Explaining why love is so irrational',
          explanation: 'Helena captures the play\'s central theme: romantic attraction isn\'t based on objective beauty or merit, but on subjective, irrational mental projection. That\'s why Cupid is blind—love doesn\'t see reality.',
        },
        {
          id: 'quote-reason-love',
          text: 'Reason and love keep little company together nowadays',
          speaker: 'Bottom',
          context: 'Accidentally speaking wisdom while in Titania\'s bower',
          explanation: 'Bottom, the fool, accidentally articulates profound truth: love is fundamentally irrational and cannot be governed by reason. The comedy proves this—the enchanted lovers\' feelings are indistinguishable from "real" love.',
        },
        {
          id: 'quote-dream',
          text: 'I have had a dream, past the wit of man to say what dream it was',
          speaker: 'Bottom',
          context: 'Trying to describe his time with Titania',
          explanation: 'Bottom can\'t explain his experience because it transcends language and reason. His "dream" was real but also impossible—exactly like theater itself, and like the lovers\' night in the forest.',
        },
        {
          id: 'quote-shadows',
          text: 'If we shadows have offended, think but this, and all is mended—that you have but slumbered here while these visions did appear',
          speaker: 'Puck',
          context: 'The epilogue, speaking directly to the audience',
          explanation: 'Puck\'s epilogue breaks the fourth wall, reminding us that actors are "shadows" (illusions), that the play was a dream, and that theater itself is a kind of magic that requires our imaginative participation.',
        },
      ],

      learningPoints: [
        {
          id: 'midsummer-lp-35-famous-quotes',
          content: 'These quotes have entered common usage because they articulate universal truths about love\'s irrationality and imagination\'s power.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 15: Puck's epilogue and metatheatrical reflection
    {
      id: 'midsummer-scene-15-epilogue',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/3646f0f8-f2fd-4399-b610-f83a5fde4280/0_3.png',
      image: 'https://cdn.midjourney.com/3646f0f8-f2fd-4399-b610-f83a5fde4280/0_3.png',

      content: `## The play ends not with the lovers or with the duke, but with Puck stepping forward to address us directly.

"If we shadows have offended,
Think but this, and all is mended—
That you have but slumbered here
While these visions did appear."

He's doing something remarkable: acknowledging that the entire play was illusion, that the actors are "shadows" (both ghosts and actors), that we've been dreaming along with the characters.

"And this weak and idle theme,
No more yielding but a dream,
Gentles, do not reprehend.
If you pardon, we will mend."

It's metatheatrical brilliance. Puck asks for our applause ("Give me your hands, if we be friends"), but he also asks us to think about what we've just experienced.

We watched a play about dreams, magic, and transformation. We saw how easily love shifts, how arbitrary attraction is, how thin the line between tragedy and comedy. We saw that theater itself is a kind of magic—it requires imagination, the willingness to believe in what isn't there.

The mechanicals' bad performance of Pyramus and Thisbe reminded us that all theater is pretend. Puck's epilogue goes further: maybe life itself is a kind of performance, and we're all actors playing parts we don't fully control.

"If we shadows have offended..." But we're not offended. We're enchanted. We've spent the night in the forest, and we're returning to Athens—to the "real world"—changed.

That's the power of A Midsummer Night's Dream, and of comedy itself: it takes us into a space where normal rules don't apply, shows us truths we couldn't see in daylight, and sends us back transformed.

The forest was never just a place. It was imagination itself—the space where anything is possible, where Bottom can love a fairy queen, where magic flowers can change hearts, where theater can reveal truth.

As Puck says: "Give me your hands, if we be friends, and Robin shall restore amends."

The dream is over. But its truths remain.`,

      inlineAnnotations: [
        {
          id: 'ann-shadows',
          text: 'shadows',
          tooltip: {
            title: 'Actors as Shadows',
            content: 'In Shakespeare\'s time, actors were called "shadows"—they\'re illusions, imitations of real people. But Puck is also a shadow/fairy. The word blurs the line between fairy magic and theatrical magic, suggesting they\'re the same thing: imagination.',
            category: 'literary-context',
          },
        },
      ],

      learningPoints: [
        {
          id: 'midsummer-lp-36-metatheatre',
          content: 'Puck\'s epilogue breaks the fourth wall, acknowledging the audience and the artificial nature of theater—this metatheatrical technique invites us to reflect on performance itself.',
          category: 'literary-context',
        },
        {
          id: 'midsummer-lp-37-dream-metaphor',
          content: 'The play\'s final gesture is to suggest the entire experience was a dream—but whose dream? Ours, watching? The characters\'? Shakespeare\'s? All theater is dreaming.',
          category: 'literary-context',
        },
        {
          id: 'midsummer-lp-38-imagination-power',
          content: 'The play celebrates imagination as transformative: Bottom\'s "dream," the lovers\' night, the mechanicals\' play, and our experience watching—all are real through imagination.',
          category: 'literary-context',
        },
        {
          id: 'midsummer-lp-39-comedy-magic',
          content: 'This celebration of imagination contrasts with the grim reality of the tragedies you\'ll encounter in Parts II & III, where no magic can save the doomed.',
          category: 'literary-context',
        },
      ],

      events: {
        onExit: [{
          type: 'quiz',
          componentId: 'quiz-chapter-5-midsummer',
          condition: { type: 'if-not-completed' },
        }],
      },
    },
  ],

  endQuiz: chapter5Quiz,
};

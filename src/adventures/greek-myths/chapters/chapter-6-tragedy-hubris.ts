import type { Chapter } from '../../../types';
import { chapter6Quiz } from '../quizzes/chapter-6-quiz';

export const chapter6: Chapter = {
  id: 'chapter-6-tragedy-hubris',
  title: 'Chapter 6: Tragedy & Hubris',
  description: 'Explore three tragic tales of heroes who flew too close to the sun, looked back when commanded not to, and dared to reach Olympus—lessons in the deadly consequences of hubris.',

  learningObjectives: [
    'Understand hubris as a central theme in Greek tragedy',
    'Analyze cautionary tales and their moral lessons',
    'Explore multiple shorter myths woven together thematically',
    'Recognize how these tragic narratives inform modern storytelling',
    'Compare ancient and modern cautionary tales',
  ],

  scenes: [
    // ARC 1: ICARUS (5 scenes)

    // Scene 1: Daedalus and Icarus imprisoned
    {
      id: 'tragedy-scene-1-imprisoned',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/e2a8adb1-d47c-417c-a169-f2642b45f84b/0_0.png',
      image: 'https://cdn.midjourney.com/b26adc6f-96a5-41cd-9d9a-cea079114a97/0_0.png',

      content: `High in a tower on the island of Crete, master craftsman Daedalus sat with his young son Icarus, prisoners of King Minos.

Daedalus had once been the greatest inventor in the world. He had built the Labyrinth for Minos—a maze so complex that no one who entered could ever escape. But then he had helped the hero Theseus navigate it and slay the Minotaur.

Minos was furious. "You betrayed me!" the king raged. "You'll never leave Crete alive."

Now they were locked in this tower, surrounded by guards and cliffs. Ships were forbidden to carry them. The roads were watched.

But Daedalus gazed up at the sky and smiled. There was one route Minos couldn't guard.`,

      learningPoints: [
        {
          id: 'lp-tragedy-1-daedalus',
          content: 'Daedalus represents the brilliant inventor whose creations have unintended consequences—he built the Labyrinth, then had to help destroy what lived inside it.',
          category: 'literary-context',
        },
        {
          id: 'lp-tragedy-1-hubris-setup',
          content: 'The story begins with a problem that requires extraordinary ingenuity to solve, setting up the theme of overreaching human ambition.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 2: Daedalus crafts wings
    {
      id: 'tragedy-scene-2-wings',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/328ff616-442d-43ee-8890-8c367679a73a/0_1.png',
      image: 'https://cdn.midjourney.com/910eb008-e0e5-4e9f-bbf1-9404af79de1e/0_0.png',

      content: `"We'll fly," Daedalus told his son.

Over the following weeks, he collected feathers from the birds that nested in the tower's eaves. He gathered beeswax from abandoned hives. Working late into the night by candlelight, he assembled two sets of wings—one large for himself, one smaller for Icarus.

The wings were masterpieces of engineering. Daedalus arranged the feathers carefully, small ones at the edges, large ones in the center, bound together with thread and sealed with wax. When strapped to human shoulders, they mimicked the natural curve of a bird's wing.

Icarus watched his father work with wonder and growing excitement. "We'll really fly? Like the birds?"

"Yes," Daedalus said, testing the wing joints. "We'll escape this prison. We'll be free."

But even as he spoke, anxiety gnawed at him. These wings were an incredible achievement—perhaps his greatest invention. But they were also fragile. And his son was young, impulsive, thrilled by adventure.

What if something went wrong?`,

      inlineAnnotations: [
        {
          id: 'annotation-wax',
          text: 'beeswax',
          tooltip: {
            title: 'The Fatal Weakness',
            content: 'Beeswax melts at relatively low temperatures (about 63°C/145°F). This seemingly minor detail becomes the fulcrum of the tragedy—the flaw in an otherwise perfect invention.',
            category: 'reference',
          },
        },
      ],

      learningPoints: [
        {
          id: 'lp-tragedy-2-invention',
          content: 'Daedalus\'s wings represent humanity\'s ingenuity and desire to transcend natural limitations—a recurring theme from Greek myth to modern science.',
          category: 'literary-context',
        },
        {
          id: 'lp-tragedy-2-foreshadowing',
          content: 'The story establishes both the achievement (wings that work) and the vulnerability (wax that melts), creating dramatic tension.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 3: Dialogue - Daedalus warns Icarus
    {
      id: 'tragedy-scene-3-warning',
      type: 'dialogue',
      backgroundImage: 'https://cdn.midjourney.com/d66503de-f842-40a6-a9d2-a6f6510b066e/0_0.png',

      character: {
        id: 'daedalus',
        name: 'Daedalus',
        portrait: 'https://cdn.midjourney.com/4675dcb7-b8bb-4aca-986c-d52d38acd608/0_0.png',
        description: 'Master craftsman and worried father',
      },

      dialogueTree: {
        id: 'node-1',
        speaker: 'daedalus',
        text: 'Icarus, come here. Before we fly, you must understand the rules. These wings are powerful, but they have limits. You must listen carefully.',

        responses: [
          {
            id: 'response-ready',
            text: 'I\'m ready, father. I\'ll listen.',
            nextNodeId: 'node-2',
          },
          {
            id: 'response-excited',
            text: 'Can we just fly already? I want to soar!',
            nextNodeId: 'node-3',
            learningPoints: [
              {
                id: 'lp-tragedy-3-impatience',
                content: 'Icarus\'s impatience and excitement foreshadow his inability to follow instructions—a characteristic of youthful hubris.',
                category: 'literary-context',
              },
            ],
          },
        ],

        allNodes: [
          {
            id: 'node-2',
            speaker: 'daedalus',
            text: 'Good. This is critical. You must fly at a middle height—not too low, not too high.',
            nextNodeId: 'node-4',
          },
          {
            id: 'node-3',
            speaker: 'daedalus',
            text: 'Icarus! This isn\'t a game. One mistake and you die. Now calm yourself and listen.',
            nextNodeId: 'node-4',
          },
          {
            id: 'node-4',
            speaker: 'daedalus',
            text: 'If you fly too low, the sea spray will dampen the feathers and make them heavy. You\'ll fall into the waves and drown.',
            nextNodeId: 'node-5',
          },
          {
            id: 'node-5',
            speaker: 'daedalus',
            text: 'But if you fly too high, the sun will melt the wax holding the feathers together. The wings will fall apart, and you\'ll plummet to your death.',
            nextNodeId: 'node-6',
          },
          {
            id: 'node-6',
            speaker: 'daedalus',
            text: 'Stay in the middle path. Follow me exactly. Don\'t try to go higher just because you can. Promise me, Icarus.',
            responses: [
              {
                id: 'response-promise',
                text: 'I promise, father. I\'ll stay close to you.',
                nextNodeId: 'node-7',
              },
              {
                id: 'response-understand',
                text: 'I understand. Middle height. Follow you.',
                nextNodeId: 'node-7',
              },
            ],
          },
          {
            id: 'node-7',
            speaker: 'daedalus',
            text: 'Good. Remember—these wings give you power, but that power has limits. Respecting those limits is what separates wisdom from recklessness. Now, let\'s fly to freedom.',
            isEnd: true,
          },
        ],
      },

      learningPoints: [
        {
          id: 'lp-tragedy-3-warning',
          content: 'The "middle path" warning represents the Greek ideal of moderation (sophrosyne)—avoiding extremes in either direction.',
          category: 'cultural-context',
        },
        {
          id: 'lp-tragedy-3-irony',
          content: 'Daedalus\'s careful warnings create dramatic irony—the audience knows what Icarus doesn\'t yet understand about his own nature.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 4: Decision - Obey father or test limits?
    {
      id: 'tragedy-scene-4-temptation',
      type: 'decision',
      backgroundImage: 'https://cdn.midjourney.com/371296f3-8516-4448-adb1-20bb57d02dd6/0_1.png',
      image: 'https://cdn.midjourney.com/51d993a9-0a7a-4294-a9ae-56382847480b/0_0.png',

      prompt: 'The thrill of flight overwhelms you. What will you do?',
      context: `You are Icarus. You're actually flying! The wings work perfectly, carrying you through the air like a bird.

Below, the island of Crete grows smaller. Ahead, your father flies steadily, maintaining a middle height just as he instructed.

But the exhilaration is overwhelming. You've escaped the prison! You're flying! The air rushes past, the sun warms your face, and you feel more alive than ever before.

You flap the wings experimentally. You could go higher. You could go much higher. The sun is so beautiful up there, so radiant and golden.

Your father said to stay at middle height. But you're doing fine. Surely just a little higher wouldn't hurt?

What do you do?`,

      choices: [
        {
          id: 'choice-obey',
          text: 'Stay at your father\'s height—he knows best',
          consequence: `You resist the temptation. The sun is beautiful, but your father's warning echoes in your mind. The wax. The melting. The fall.

You follow Daedalus exactly, maintaining the same steady altitude. It's thrilling enough just to fly. You don't need to push the limits.

This is the wise choice. This is the choice that would have saved Icarus's life.

But Icarus, young and intoxicated with freedom, didn't make this choice.`,
        },
        {
          id: 'choice-test',
          text: 'Climb just a little higher—what\'s the harm?',
          consequence: `The temptation is too strong. Just a little higher. Just to see.

You flap harder, rising above your father's path. The sun grows warmer on your face. The clouds are so close! You've never seen them from this angle before.

It feels glorious. Icarus feels invincible.

"Icarus!" Daedalus shouts from below. "Come down! Not so high!"

But you're young and the world is new and you've just discovered you can fly. Why should you listen to warnings about limits when you feel so free?`,
          learningPoints: [
            {
              id: 'lp-tragedy-4-hubris',
              content: 'Icarus\'s decision to fly higher despite warnings exemplifies hubris—excessive pride and confidence that leads to overstepping boundaries.',
              category: 'literary-context',
            },
          ],
        },
        {
          id: 'choice-soar',
          text: 'Soar toward the sun with all your strength!',
          consequence: `You don't just go a little higher. You climb with all your strength, flapping the wings powerfully, rising toward the brilliant sun.

Freedom! Power! You're more than human now—you're flying like the gods themselves!

Your father's shouts fade below you. Let him worry. You're young, you're strong, and the sky is yours.

The sun blazes above. The wax grows soft.

Icarus has made his fatal choice.`,
          learningPoints: [
            {
              id: 'lp-tragedy-4-extreme',
              content: 'Complete disregard for warnings represents the most extreme form of hubris—the belief that rules don\'t apply to you.',
              category: 'literary-context',
            },
          ],
        },
      ],

      learningPoints: [],
    },

    // Scene 5: Icarus falls to death
    {
      id: 'tragedy-scene-5-fall',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/c2c8412f-0fe2-4df6-81dc-e7a407fffab4/0_2.png',
      image: 'https://cdn.midjourney.com/38e70445-94bb-475c-b62b-bd6ed54d0195/0_0.png',

      content: `Icarus climbed higher and higher, drunk on the freedom of flight. The sun blazed before him, magnificent and golden.

Then he felt it—the wax growing soft. Warm. Liquid.

A feather came loose and drifted past his face.

"Father?" he called, but his voice was small against the wind.

More feathers pulled free. Then entire sections of the wing. The carefully crafted structure that Daedalus had spent weeks perfecting began to disintegrate in seconds.

"Father!" Icarus screamed, but it was too late.

The wings fell apart. Icarus plummeted from the sky, tumbling through the air that had moments ago held him aloft. He crashed into the sea near an island that would later bear his name.

Below, Daedalus flew on, calling his son's name. When he looked back and saw only scattered feathers floating on the waves, he understood what his ingenuity had cost him.

He had created wings that worked. But he couldn't create a son wise enough to use them properly.`,

      learningPoints: [
        {
          id: 'lp-tragedy-5-consequences',
          content: 'Icarus\'s fall represents the inevitable consequence of hubris—the universe corrects those who overstep their bounds.',
          category: 'literary-context',
        },
        {
          id: 'lp-tragedy-5-tragedy',
          content: 'Greek tragedy often involves the destruction of promise and potential—Icarus dies not from evil, but from youthful recklessness.',
          category: 'literary-context',
        },
        {
          id: 'lp-tragedy-5-icarus-symbolism',
          content: 'The name "Icarus" has become synonymous with overambitious failure and the dangers of ignoring warnings.',
          category: 'reference',
        },
      ],
    },

    // ARC 2: ORPHEUS (6 scenes)

    // Scene 6: Orpheus loses Eurydice
    {
      id: 'tragedy-scene-6-eurydice-lost',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/5b94b9be-dc65-4e54-8ac8-17867e7dd6c5/0_0.png',
      image: 'https://cdn.midjourney.com/ff7ec498-c0dd-4eb6-9bc6-9fb8ea3060e8/0_0.png',

      content: `Not all tragedies begin with pride. Some begin with love.

Orpheus was the greatest musician who ever lived. When he played his lyre, wild animals would stop to listen. Trees would bend closer. Rivers would pause in their courses. His music could move stones to tears.

He fell in love with Eurydice, a beautiful nymph, and they married. Their happiness should have lasted a lifetime.

It lasted one day.

On their wedding day, as Eurydice walked through a meadow with her companions, a serpent struck. Its fangs pierced her ankle.

The poison worked quickly. Eurydice collapsed, her skin growing cold, her breath fading. Her companions could only watch as she died in the grass, her wedding garlands still fresh.

Orpheus arrived too late. His music, which could charm gods and beasts, couldn't reverse the serpent's venom. He held her body and wept.

But Orpheus was not like other men. His grief was not like other grief. And he refused to accept that death meant forever.`,

      inlineAnnotations: [
        {
          id: 'annotation-lyre',
          text: 'lyre',
          tooltip: {
            title: 'The Instrument of the Gods',
            content: 'The lyre was a stringed instrument sacred to Apollo. Orpheus\'s father was Apollo (or in some versions, a Thracian king), giving him divine musical gift.',
            category: 'cultural-context',
          },
        },
      ],

      learningPoints: [
        {
          id: 'lp-tragedy-6-orpheus',
          content: 'Orpheus represents the power of art and music—his gift is so profound it can affect nature and even the gods themselves.',
          category: 'literary-context',
        },
        {
          id: 'lp-tragedy-6-loss',
          content: 'Unlike Icarus\'s self-inflicted tragedy, Orpheus\'s loss is random and cruel—showing that tragedy can strike the innocent.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 7: Descends to Underworld
    {
      id: 'tragedy-scene-7-descent',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/43913ee2-5d3d-4868-9c5c-a0b0e2c6374c/0_2.png',
      image: 'https://cdn.midjourney.com/acb55273-6d32-4d16-b0ad-d818cf1b43a0/0_0.png',

      content: `Orpheus did something almost no living mortal had ever dared: he descended to the Underworld to bargain for a soul.

He found the entrance at Taenarum, a deep cave where the living world ended and the realm of the dead began. Most mortals would turn back at the threshold, terrified by the darkness and the howling of Cerberus, the three-headed guard dog.

But Orpheus took out his lyre and began to play.

The music was heartbreaking—a melody of loss and love and desperate hope. Cerberus, who had never before let a living soul pass, sat down and listened, all three heads tilted in wonder. His snarl softened to a whimper.

Orpheus walked past.

He descended through the caverns of the dead, past the River Styx, past the judges of souls, past tormented shades reaching toward him. All the dead paused to listen to his music. Even those condemned to eternal punishment found brief relief.

Finally, he reached the throne room of Hades and Persephone, king and queen of the dead.

There, he would make his plea.`,

      learningPoints: [
        {
          id: 'lp-tragedy-7-descent',
          content: 'The journey to the Underworld to retrieve a loved one is a recurring myth (Orpheus, Demeter, Heracles) representing humanity\'s refusal to accept death as final.',
          category: 'literary-context',
        },
        {
          id: 'lp-tragedy-7-music-power',
          content: 'Orpheus\'s music succeeding where force would fail shows the Greek belief that art can achieve what strength cannot.',
          category: 'cultural-context',
        },
      ],
    },

    // Scene 8: Dialogue - Orpheus charms Hades and Persephone
    {
      id: 'tragedy-scene-8-plea',
      type: 'dialogue',
      backgroundImage: 'https://cdn.midjourney.com/df665fa7-c018-4c4c-8805-a0b10f02c562/0_0.png',

      character: {
        id: 'hades',
        name: 'Hades',
        portrait: 'https://cdn.midjourney.com/9d1671ad-12db-4c0f-adc4-a76a12949504/0_0.png',
        description: 'Lord of the Underworld',
      },

      dialogueTree: {
        id: 'node-1',
        speaker: 'hades',
        text: 'A living mortal stands before my throne. Orpheus, son of Apollo. You dare enter my realm uninvited? Give me one reason I shouldn\'t send you to Tartarus.',

        responses: [
          {
            id: 'response-music',
            text: 'My lord, I come with music. Please, hear my song.',
            nextNodeId: 'node-2',
          },
          {
            id: 'response-plea',
            text: 'I come for my wife, Eurydice. She died too soon.',
            nextNodeId: 'node-3',
          },
        ],

        allNodes: [
          {
            id: 'node-2',
            speaker: 'hades',
            text: 'Music? I am lord of the dead. What do I care for mortal—',
            nextNodeId: 'node-4',
          },
          {
            id: 'node-3',
            speaker: 'hades',
            text: 'They all die "too soon" according to the living. Death plays no favorites. Your wife\'s thread was cut. It is done.',
            nextNodeId: 'node-4',
          },
          {
            id: 'node-4',
            speaker: 'hades',
            text: '...Very well. Play your music, mortal. But know that I have heard countless songs of grief. What makes yours different?',
            nextNodeId: 'node-5',
          },
          {
            id: 'node-5',
            speaker: 'narrator',
            text: 'Orpheus played. The melody filled the throne room—a song of love cut short, of joy turned to ashes, of beauty that bloomed and withered in a single day. For the first time in eternity, Persephone wept. Even Hades, lord of death, felt his heart soften.',
            nextNodeId: 'node-6',
          },
          {
            id: 'node-6',
            speaker: 'hades',
            text: 'Your music... moves even me. I will make you an offer, Orpheus. You may take Eurydice back to the living world.',
            nextNodeId: 'node-7',
          },
          {
            id: 'node-7',
            speaker: 'hades',
            text: 'But there is one condition: she will follow behind you as you climb to the surface. You must not look back at her. Not once. Not until you both stand in the sunlight of the living world.',
            nextNodeId: 'node-8',
          },
          {
            id: 'node-8',
            speaker: 'hades',
            text: 'If you turn around, even once, she returns to me forever. Do you accept these terms?',
            responses: [
              {
                id: 'response-accept',
                text: 'Yes, I accept. I won\'t look back.',
                nextNodeId: 'node-9',
                learningPoints: [
                  {
                    id: 'lp-tragedy-8-condition',
                    content: 'The "don\'t look back" condition appears in many myths (Lot\'s wife, Izanagi and Izanami) testing whether mortals can trust divine commands.',
                    category: 'reference',
                  },
                ],
              },
              {
                id: 'response-why',
                text: 'Why this condition? Why can\'t I see her?',
                nextNodeId: 'node-10',
              },
            ],
          },
          {
            id: 'node-9',
            speaker: 'hades',
            text: 'Then go. Climb to the light. And remember—the dead walk silently. You will hear no footsteps behind you. You must trust that she follows.',
            isEnd: true,
          },
          {
            id: 'node-10',
            speaker: 'hades',
            text: 'I am lord of the dead, not a merchant to be bargained with. I offer you this chance as a gift, moved by your music. Accept my terms, or leave her here forever.',
            nextNodeId: 'node-11',
          },
          {
            id: 'node-11',
            speaker: 'hades',
            text: 'What is your answer?',
            responses: [
              {
                id: 'response-forced-accept',
                text: 'I accept your terms. I won\'t look back.',
                nextNodeId: 'node-9',
              },
            ],
          },
        ],
      },

      learningPoints: [
        {
          id: 'lp-tragedy-8-impossible-gift',
          content: 'Hades grants an unprecedented gift—returning a soul to life—showing how Orpheus\'s art achieves the impossible.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 9: Decision - Trust gods' command?
    {
      id: 'tragedy-scene-9-climb',
      type: 'decision',
      backgroundImage: 'https://cdn.midjourney.com/9e54bb8a-c0c2-472f-93e6-d356a3cc5a7c/0_1.png',
      image: 'https://cdn.midjourney.com/493969a3-0c82-4be3-a2f4-82c7c65a1da5/0_0.png',

      prompt: 'As you near the surface, doubt creeps in. Will you look back?',
      context: `You are Orpheus. You've been climbing for what feels like hours through the dark passages of the Underworld. Your lyre is slung across your back. Your feet ache. Your heart pounds.

Behind you... silence. Complete silence.

You hear no footsteps. No breathing. No rustle of cloth. Hades said the dead walk silently, but what if Eurydice isn't following? What if this was a cruel trick? What if you're climbing alone?

Ahead, you can see it—the faint glow of daylight. The entrance to the cave. The boundary between death and life. Just a few more steps.

But the silence behind you is unbearable. You've heard nothing for hours. How do you know she's really there?

If you look back before reaching the surface, you lose her forever. But if she's not there, you're losing her anyway.

What do you do?`,

      choices: [
        {
          id: 'choice-trust',
          text: 'Trust Hades\' word—don\'t look back',
          consequence: `You resist the urge. Hades gave his word. The lord of the dead doesn't lie—he has no need to.

You fix your eyes on the light ahead and keep walking. Just a few more steps. Almost there.

This is the choice that would have saved Eurydice. This is the choice that would have defeated death itself.

But Orpheus, his mind tormented by doubt and silence, didn't make this choice.`,
        },
        {
          id: 'choice-quick-glance',
          text: 'Just one quick glance to make sure she\'s there',
          consequence: `The doubt is too strong. Just one glance. Just to verify.

You turn your head.

There she is! Eurydice, her form still pale and translucent, reaching toward you with hope in her eyes—

But you've looked. You've broken the condition.

"No!" you scream, but she's already fading, pulled back by invisible forces, her hand grasping at empty air as the Underworld reclaims her.

"I was there," her voice echoes, growing fainter. "I was following... you only had to trust..."

Then silence.`,
          learningPoints: [
            {
              id: 'lp-tragedy-9-doubt',
              content: 'Orpheus\'s inability to trust—to have faith without proof—represents a fundamentally human weakness that costs him everything.',
              category: 'literary-context',
            },
          ],
        },
        {
          id: 'choice-call',
          text: 'Call her name—at least hear her voice',
          consequence: `"Eurydice?" you call into the darkness behind you.

Silence.

The temptation to turn and look becomes overwhelming. Hades only said not to look back—surely you can call her name?

But there's no answer. The dead don't speak. They walk in silence.

Your doubt grows unbearable. You turn around.

And in that instant, you lose her forever.`,
        },
      ],

      learningPoints: [],
    },

    // Scene 10: Orpheus looks back; loses Eurydice
    {
      id: 'tragedy-scene-10-loss',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/4bc42696-b6a2-4b24-a658-29da667ac9c3/0_3.png',
      image: 'https://cdn.midjourney.com/2a36d0b1-a941-4e4b-a436-6241688d6fa1/0_0.png',

      content: `At the very threshold of the cave, with sunlight streaming in just ahead, Orpheus looked back.

He saw her—Eurydice, pale as mist, reaching for him with desperate hope. She had been there all along, following silently just as Hades promised.

But the moment his eyes met hers, her expression changed from hope to horror.

"Farewell," she whispered, and the word seemed to carry all the grief in the world.

She was pulled backward into darkness, sucked back into the Underworld as if by a great wind. Orpheus lunged for her, but his hands grasped only air. She faded like smoke, her last look one of infinite sadness.

Orpheus ran back down into the darkness, but the way was now barred. Cerberus would not let him pass. Charon would not ferry him across the Styx. Hades would not grant him another audience.

He had been given the impossible: a second chance at life for someone who had died. And he had failed at the only requirement: faith without proof.

The greatest musician in the world stood at the entrance to the Underworld and played his lyre, pouring out his grief in songs so sorrowful that all who heard them wept. But the dead do not return twice.

Orpheus wandered northward to the mountains of Thrace, singing only songs of grief. He spurned all human company, all comfort, all offers of new love.

In those wild hills, the Maenads—ecstatic female followers of Dionysus—found him. When he rejected their advances and refused to honor their god with joyful music, they tore him limb from limb in their religious frenzy.`,

      learningPoints: [
        {
          id: 'lp-tragedy-10-threshold',
          content: 'The tragedy is magnified by proximity to success—Orpheus fails at the very threshold, making his loss more painful.',
          category: 'literary-context',
        },
        {
          id: 'lp-tragedy-10-human-weakness',
          content: 'Unlike Icarus\'s hubris, Orpheus\'s failure comes from doubt and love—wanting proof his beloved was truly there.',
          category: 'literary-context',
        },
        {
          id: 'lp-tragedy-10-irreversible',
          content: 'Some mistakes cannot be undone—once Orpheus looked back, even his music couldn\'t persuade Hades to grant a third chance.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 11: Primary Source - Ovid on Orpheus's grief
    {
      id: 'tragedy-scene-11-ovid',
      type: 'primary-source',
      backgroundImage: 'https://cdn.midjourney.com/f8cacd02-e440-4b6c-bdc7-18f04747417f/0_0.png',

      prompt: 'The Roman poet Ovid captured Orpheus\'s final moments. Read this passage and consider: how does the poet transform tragedy into art?',

      source: {
        title: 'Metamorphoses, Book XI',
        author: 'Ovid',
        date: '8 CE',
        type: 'text',
        content: `"After losing Eurydice a second time, Orpheus shunned all women and wandered the wild places of Thrace, singing his grief to the stones and trees.


For three years he mourned alone, and his songs were so mournful that even savage beasts would sit quietly to listen.


But his rejection of love angered the Maenads, the frenzied women who worshipped Dionysus. During their wild rites, they came upon him singing by a river.


At first, his music protected him—when they threw stones, the stones fell harmless, enchanted by his song. But the Maenads screamed louder, drowning out the music with their shrieks. Then their stones struck true.


They tore him apart. His severed head and his lyre floated down the river Hebrus, still singing, still playing, all the way to the sea.


Even in death, Orpheus made music."`,
        citation: 'Ovid, Metamorphoses XI.1-66, translated',
      },

      questions: [
        {
          id: 'q-orpheus-death',
          question: 'What does Orpheus\'s death reveal about the relationship between art and suffering in Greek thought?',
          type: 'multiple-choice',
          options: [
            'Art is useless in the face of real tragedy',
            'Even the greatest artists are eventually forgotten',
            'True art emerges from suffering and continues even beyond death',
            'Artists should avoid singing about grief',
          ],
          correctAnswer: 'True art emerges from suffering and continues even beyond death',
          explanation: 'Ovid shows Orpheus\'s music continuing even after his dismemberment—his severed head still singing as it floats downstream. This represents the Greek (and Roman) belief that art born from genuine suffering transcends mortality and becomes immortal.',
        },
      ],

      learningPoints: [
        {
          id: 'lp-tragedy-11-art-immortal',
          content: 'Orpheus\'s head still singing represents how art outlives the artist—his music achieves the immortality he couldn\'t achieve for Eurydice.',
          category: 'literary-context',
        },
        {
          id: 'lp-tragedy-11-double-loss',
          content: 'Orpheus experiences loss twice—first to death, then to his own doubt—making his story one of compounded tragedy.',
          category: 'literary-context',
        },
      ],
    },

    // ARC 3: BELLEROPHON (3 scenes)

    // Scene 12: Bellerophon's earlier triumphs
    {
      id: 'tragedy-scene-12-bellerophon-triumphs',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/7fde12ae-8029-420e-b17a-9eb7aa092e1a/0_0.png',
      image: 'https://cdn.midjourney.com/7fde12ae-8029-420e-b17a-9eb7aa092e1a/0_0.png',

      content: `Our third tale begins not with tragedy, but with triumph.

Bellerophon was everything a Greek hero should be: handsome, strong, brave, and clever. With the help of Athena, he had tamed Pegasus, the magnificent winged horse born from Medusa's blood.

Together, they were unstoppable.

When King Iobates ordered him to slay the Chimera—a monstrous creature with a lion's head, a goat's body, and a serpent's tail that breathed fire—Bellerophon succeeded where others had died. Riding Pegasus high above the flames, he shot the beast with arrows and finally drove a lead-tipped spear into its mouth. The creature's own fire-breath melted the lead, which poured down its throat and killed it.

After that, he defeated the warlike Amazons. He conquered the Solymi, a fierce tribe of warriors. Every challenge, every monster, every impossible task—Bellerophon succeeded.

Kings honored him. People praised him. Songs were sung of his deeds.

And slowly, gradually, Bellerophon began to believe he was more than mortal.`,

      inlineAnnotations: [
        {
          id: 'annotation-chimera',
          text: 'Chimera',
          tooltip: {
            title: 'The Impossible Beast',
            content: 'The Chimera was one of the deadliest monsters in Greek myth—a hybrid creature that could only be defeated from the air, making Pegasus essential to Bellerophon\'s victory.',
            category: 'cultural-context',
          },
        },
        {
          id: 'annotation-pegasus',
          text: 'Pegasus',
          tooltip: {
            title: 'The Divine Steed',
            content: 'Pegasus was born when Perseus beheaded Medusa—the winged horse sprang from her blood. He became the symbol of poetic inspiration and divine aspiration.',
            category: 'reference',
          },
        },
      ],

      learningPoints: [
        {
          id: 'lp-tragedy-12-success',
          content: 'Bellerophon\'s early successes set up his later fall—the greater the hero\'s achievements, the more catastrophic their hubris becomes.',
          category: 'literary-context',
        },
        {
          id: 'lp-tragedy-12-gradual',
          content: 'Unlike Icarus\'s sudden fall, Bellerophon\'s hubris develops gradually through repeated success—showing how triumph can corrupt.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 13: Bellerophon's hubris - fly to Olympus
    {
      id: 'tragedy-scene-13-olympus-attempt',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/d7cc650f-5014-41ee-821a-2851fbfb72ac/0_2.png',
      image: 'https://cdn.midjourney.com/0b4b42fb-7f0c-4558-b446-59619869f2ac/0_0.png',

      content: `After years of victories, Bellerophon stood atop a mountain and looked toward Olympus, home of the gods.

"I have done what no mortal has done," he thought. "I've tamed the untamable horse. I've slain the unkillable monster. I've conquered every enemy. I'm not like other mortals—I'm equal to the gods themselves."

It's worth pausing here to understand what he was thinking. In Greek culture, the line between mortal and divine was absolute. Mortals, no matter how great, remained mortal. Heroes might be honored after death, might be granted positions as guardians or minor deities, but they did not become gods. They did not enter Olympus uninvited.

Bellerophon knew this. Every Greek child knew this.

But pride has a way of making people forget what they know.

"Why should I stay on earth?" he asked himself. "Why shouldn't I take my place among the gods?"

He climbed onto Pegasus. He urged the winged horse upward. He flew toward Olympus itself, intending to land in the home of the immortals as if he belonged there.

He had forgotten that Pegasus wasn't his horse. Pegasus was a divine creature, on loan to a mortal hero. And even Pegasus knew there were boundaries that must not be crossed.`,

      learningPoints: [
        {
          id: 'lp-tragedy-13-hubris-defined',
          content: 'Bellerophon\'s decision to fly to Olympus is textbook hubris—the arrogant belief that mortal achievements make one equal to gods.',
          category: 'literary-context',
        },
        {
          id: 'lp-tragedy-13-boundaries',
          content: 'Greek myth emphasizes the mortal-divine boundary as sacred and uncrossable—attempting to cross it always brings disaster.',
          category: 'cultural-context',
        },
      ],
    },

    // Scene 14: Zeus punishes; Bellerophon falls and wanders
    {
      id: 'tragedy-scene-14-fall',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/bd324357-58c1-400f-b481-0f4e41701e93/0_0.png',
      image: 'https://cdn.midjourney.com/cf453ef1-f555-404c-8b06-e59835630d19/0_0.png',

      content: `Zeus, watching from Olympus, saw Bellerophon approaching. The king of gods didn't shout warnings. He didn't send messengers. He simply acted.

Zeus sent a tiny gadfly—a stinging insect—that bit Pegasus under the wings.

The winged horse reared in pain and surprise. Bellerophon, unprepared, lost his grip and fell.

Unlike Icarus, Bellerophon didn't die in his fall. That would have been too merciful.

He crashed to earth in a bramble-filled plain far from any city. The impact shattered his legs and blinded him. He survived, but he would never walk properly again, never see the sun, never ride Pegasus or slay monsters or receive the adulation of crowds.

Bellerophon spent the rest of his days wandering alone in the wilderness, limping on broken legs, blind and forgotten. The man who had wanted to join the gods became less than a beggar.

Local shepherds sometimes saw him stumbling through wild places, talking to himself, cursing his fate. Children threw stones and called him mad.

The hero who had flown highest ended his days crawling in the dust, a living warning against hubris.`,

      learningPoints: [
        {
          id: 'lp-tragedy-14-proportional',
          content: 'Zeus\'s punishment is precisely calibrated—Bellerophon wanted to rise above mortals, so he\'s reduced below them, stripped of everything that made him heroic.',
          category: 'literary-context',
        },
        {
          id: 'lp-tragedy-14-living-death',
          content: 'Bellerophon\'s fate—alive but broken, famous but forgotten—is arguably worse than death, showing how hubris brings total reversal.',
          category: 'literary-context',
        },
        {
          id: 'lp-tragedy-14-gadfly',
          content: 'Zeus uses a tiny gadfly to humble a great hero—showing that divine power needs no great display to punish mortals.',
          category: 'literary-context',
        },
      ],
    },

    // THEMATIC ANALYSIS (2 scenes)

    // Scene 15: Cause-Effect - Match hubris to downfall
    {
      id: 'tragedy-scene-15-cause-effect',
      type: 'cause-effect',
      backgroundImage: 'https://cdn.midjourney.com/bf5d8bff-9534-4268-97d2-9c04f29be1d8/0_0.png',

      prompt: 'Match each character\'s specific act of hubris to the precise consequence they suffered. How does each punishment fit the crime?',

      pairs: [
        {
          id: 'pair-1',
          cause: 'Icarus flies too high toward the sun despite warnings',
          effect: 'The wax melts; he plummets into the sea and drowns',
          explanation: 'Icarus\'s hubris is youthful recklessness—ignoring father\'s wisdom. His punishment is immediate and physical: the very height he craved becomes his death.',
        },
        {
          id: 'pair-2',
          cause: 'Orpheus looks back at Eurydice despite Hades\' command',
          effect: 'Eurydice is pulled back to Underworld; lost forever',
          explanation: 'Orpheus\'s failure isn\'t hubris but lack of faith—wanting proof over trust. He loses Eurydice at the moment of almost succeeding, making the tragedy more painful.',
        },
        {
          id: 'pair-3',
          cause: 'Bellerophon attempts to fly to Olympus as an equal to gods',
          effect: 'Zeus casts him down; he becomes blind, crippled, and mad',
          explanation: 'Bellerophon\'s hubris is believing achievements make him divine. His punishment is total reversal: from hero to less-than-beggar, from flying to crawling.',
        },
        {
          id: 'pair-4',
          cause: 'Daedalus creates wings to escape imprisonment',
          effect: 'The wings work but cost him his son',
          explanation: 'Daedalus\'s invention succeeds technically but fails morally—his ingenuity solves the prison problem but creates a new tragedy when Icarus can\'t handle the gift.',
        },
      ],

      learningPoints: [
        {
          id: 'lp-tragedy-15-patterns',
          content: 'Greek tragic punishments are precisely tailored—characters lose what they most valued or are destroyed by what they most desired.',
          category: 'literary-context',
        },
        {
          id: 'lp-tragedy-15-spectrum',
          content: 'Hubris exists on a spectrum from youthful recklessness (Icarus) to deliberate defiance (Bellerophon), with different consequences for each.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 16: Interlude - Modern cautionary tales
    {
      id: 'tragedy-scene-16-modern',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/45975530-b797-4e89-b499-49ad94e83afc/0_2.png',
      image: 'https://cdn.midjourney.com/843c72b4-b378-4597-93fc-b674b493acb9/0_0.png',

      content: `These ancient stories haven't lost their power. The warnings they carry still echo through modern storytelling.

**Faust** (1604) tells of a scholar who makes a deal with the devil for unlimited knowledge and power—the ultimate hubris of believing you can outsmart damnation. Like Bellerophon, he learns too late that some boundaries exist for a reason.

**Frankenstein** (1818) shows us a scientist who creates life itself, playing god—then watches in horror as his creation destroys everything he loves. Like Daedalus, Victor Frankenstein's brilliant invention becomes his greatest tragedy.

**Black Mirror** (2011-present) is essentially a modern collection of cautionary tales about technology. In "White Christmas," people upload their consciousness to devices, seeking immortality—only to experience eternal suffering. In "Nosedive," a woman's obsession with social ratings destroys her life. Each episode asks: "What happens when we fly too close to the sun?"

The details change—wings become rockets, gods become artificial intelligence, Olympus becomes cyberspace. But the core warning remains:

*There are limits. Crossing them has consequences. Pride comes before a fall.*

Icarus, Orpheus, and Bellerophon died thousands of years ago, but their stories live on because the temptations they faced are eternal: the thrill of going higher, the desperation to retrieve what's lost, the belief that our achievements make us special.

Every generation needs to relearn the lesson. Every generation produces people who believe the rules don't apply to them.

And every generation, someone falls from the sky.`,

      learningPoints: [
        {
          id: 'lp-tragedy-16-faust',
          content: 'Faust updates Greek hubris for the Christian era—making a deal with the devil is the Renaissance equivalent of trying to reach Olympus.',
          category: 'reference',
        },
        {
          id: 'lp-tragedy-16-frankenstein',
          content: 'Frankenstein explores scientific hubris—the Romantic-era belief that creating life is humanity\'s attempt to become god-like.',
          category: 'reference',
        },
        {
          id: 'lp-tragedy-16-black-mirror',
          content: 'Black Mirror translates ancient cautionary tales into technological contexts, showing how hubris adapts to each era\'s particular temptations.',
          category: 'reference',
        },
        {
          id: 'lp-tragedy-16-timeless',
          content: 'The persistence of hubris narratives across millennia suggests these warnings address fundamental human psychology, not just cultural values.',
          category: 'literary-context',
        },
      ],

      events: {
        onExit: [{
          type: 'quiz',
          componentId: 'quiz-chapter-6',
          condition: { type: 'if-not-completed' },
        }],
      },
    },
  ],

  endQuiz: chapter6Quiz,
};

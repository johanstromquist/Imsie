import type { Chapter } from '../../../types';
import { chapter4Quiz } from '../quizzes/chapter-4-quiz';

/**
 * Chapter 4: Plato
 *
 * This chapter explores Plato's philosophical vision, including his Theory of Forms,
 * the Allegory of the Cave, his conception of justice and the ideal state, and his
 * lasting influence on Western philosophy.
 */
export const chapter4: Chapter = {
  id: 'chapter-4-plato',
  title: 'Chapter 4: Plato',
  description: 'Explore Plato\'s revolutionary Theory of Forms, experience the famous Allegory of the Cave, and examine his vision of the ideal state ruled by philosopher-kings.',

  prerequisites: {
    type: 'all',
    chapterIds: ['chapter-3-socrates']
  },

  learningObjectives: [
    'Understand Plato\'s Theory of Forms as a response to problems of change and knowledge',
    'Analyze Plato\'s political philosophy in the Republic: justice, the tripartite soul, and the ideal state',
    'Recognize the Allegory of the Cave as a metaphor for education and enlightenment',
    'Examine Plato\'s epistemology: the divided line and degrees of knowledge',
    'Evaluate criticisms of Plato\'s philosophy and its continuing influence',
  ],

  scenes: [
    // Scene 1: Introduction to Plato and the Academy
    {
      id: 'chapter-4-scene-1-academy',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/12437fc3-53ad-4eb8-a242-be776a438839/0_0.png',
      content: `You stand before the gates of the Academy, the philosophical school founded by Plato in 387 BCE on the outskirts of Athens. Over the entrance, an inscription reads: "Let no one ignorant of geometry enter here."

This is no ordinary school. For nearly forty years, Plato has devoted himself to continuing his teacher Socrates's mission—but with a profound difference. Where Socrates questioned relentlessly, seeking to expose ignorance, Plato offers positive answers. He claims to have discovered the ultimate nature of reality itself.

The execution of Socrates left a deep wound in Plato's soul. How could democratic Athens kill the wisest and most just man who ever lived? Plato's philosophy emerges from this crisis: If society cannot recognize true wisdom and justice, perhaps wisdom and justice exist in a higher realm, beyond the corruption and ignorance of the physical world.

As you enter the sacred groves where philosophers debate beneath olive trees, you sense you are about to encounter one of the most influential visions in human history—a vision that will shape Western thought for millennia to come.`,
      learningPoints: [
        {
          id: 'lp-ch4-1-academy',
          content: 'Plato founded the Academy around 387 BCE, which became the first institution of higher learning in the Western world and operated for nearly 900 years.',
          category: 'historical-context',
        },
        {
          id: 'lp-ch4-1-socrates-influence',
          content: 'The execution of Socrates profoundly shaped Plato\'s philosophy, driving him to seek objective standards of truth and justice beyond political opinion.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 2: Dialogue with Plato about Socrates and the need for secure knowledge
    {
      id: 'chapter-4-scene-2-dialogue',
      type: 'dialogue',
      backgroundImage: 'https://cdn.midjourney.com/1c86d195-fc5d-434e-ad58-ea5a67a6b3b9/0_0.png',

      character: {
        id: 'plato',
        name: 'Plato',
        portrait: 'https://cdn.midjourney.com/0990f3e0-c55f-4e39-bd3d-bde2b298aa20/0_0.png',
        description: 'Student of Socrates and founder of the Academy',
      },

      dialogueTree: {
        id: 'node-1',
        speaker: 'plato',
        text: 'Welcome, friend. I see you have come seeking wisdom. Tell me—what drives your search for knowledge?',

        responses: [
          {
            id: 'response-socrates',
            text: 'I wish to understand what happened to Socrates.',
            nextNodeId: 'node-2',
          },
          {
            id: 'response-truth',
            text: 'I seek to know what is truly real.',
            nextNodeId: 'node-3',
          },
        ],

        allNodes: [
          {
            id: 'node-2',
            speaker: 'plato',
            text: 'Ah, my beloved teacher. The wisest man I ever knew, condemned by ignorant masses who mistook appearances for reality. This tragedy revealed a profound truth: if we rely only on the senses, on popular opinion, on the shifting shadows of this world, we will never find justice or truth.',
            nextNodeId: 'node-2a',
          },
          {
            id: 'node-3',
            speaker: 'plato',
            text: 'An excellent question! The Pre-Socratics asked what is the fundamental substance. Socrates asked how we should live. But I ask: What is the nature of reality itself? How can we have certain knowledge in a world of constant change?',
            nextNodeId: 'node-3a',
          },
          {
            id: 'node-2a',
            speaker: 'plato',
            text: 'But let me ask you this: what is the nature of reality itself? How can we have certain knowledge in a world of constant change? These are the questions that drive my philosophy.',
            nextNodeId: 'node-4',
          },
          {
            id: 'node-3a',
            speaker: 'plato',
            text: 'And you must understand—my pursuit of truth was born from tragedy. When Athens executed my teacher Socrates, the wisest and most just man who ever lived, I realized that society is blind to virtue. We need a foundation for truth beyond mere opinion.',
            nextNodeId: 'node-4',
          },
          {
            id: 'node-4',
            speaker: 'plato',
            text: 'Consider this: You see many beautiful things—a beautiful face, a beautiful sunset, a beautiful song. They are all different, yet you call them all "beautiful." How is this possible? There must be something—Beauty itself, the Form of Beauty—that all beautiful things participate in. This Form is eternal, unchanging, and more real than any physical beautiful thing.',
            responses: [
              {
                id: 'response-understand',
                text: 'I think I understand—the Form is like a perfect template.',
                nextNodeId: 'node-5',
              },
              {
                id: 'response-confused',
                text: 'But where are these Forms? I cannot see them.',
                nextNodeId: 'node-6',
              },
            ],
          },
          {
            id: 'node-5',
            speaker: 'plato',
            text: 'Precisely! Just as a carpenter makes many tables following one blueprint in his mind, so the physical world contains many imperfect copies of eternal Forms. The Forms are the true reality—perfect, unchanging, eternal.',
            nextNodeId: 'node-7',
          },
          {
            id: 'node-6',
            speaker: 'plato',
            text: 'That is exactly the point! You cannot see them with your eyes, only with your mind—your reason. The senses show you only shadows and reflections. True knowledge requires turning away from the senses toward pure thought.',
            nextNodeId: 'node-7',
          },
          {
            id: 'node-7',
            speaker: 'plato',
            text: 'The philosopher\'s task is to apprehend these Forms through reason. This is why geometry is essential—it trains the mind to grasp invisible, eternal truths. The path to wisdom requires turning the soul from the darkness of mere opinion toward the light of true knowledge.',
            isEnd: true,
          },
        ],
      },

      learningPoints: [
        {
          id: 'lp-ch4-2-forms-intro',
          content: 'Plato\'s Theory of Forms posits that eternal, perfect, unchanging Forms exist in a realm beyond the physical world, and that physical objects are merely imperfect copies of these Forms.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 3: The Theory of Forms narrative
    {
      id: 'chapter-4-scene-3-forms',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/d7caa97c-503b-46ed-a689-514434025deb/0_0.png',
      content: `Plato's Theory of Forms represents one of the most ambitious metaphysical systems ever conceived. It divides reality into two realms:

The Realm of Forms: Eternal, perfect, unchanging, and invisible. Here exist the Forms—Beauty itself, Justice itself, the Good itself, and the Forms of all things. These are not physical objects but abstract perfections that can only be grasped by pure reason.

The Physical Realm: Temporary, imperfect, constantly changing, and visible to the senses. Physical things are mere shadows or copies of the Forms. A physical circle is never perfectly round, but it participates in the eternal Form of Circularity.

This theory solves several philosophical problems at once. It explains how we can have knowledge in a changing world—we know the unchanging Forms. It explains how we recognize categories—all just acts participate in Justice itself. It explains why Socrates could be condemned—people mistake physical appearances for reality and never grasp the true Form of Justice.

For Plato, the philosopher is someone who has turned away from the deceptive shadows of the physical world and glimpsed the brilliant light of the Forms. Education is the process of turning the soul toward reality.`,
      learningPoints: [
        {
          id: 'lp-ch4-3-two-realms',
          content: 'Plato\'s metaphysics posits a radical dualism between the eternal realm of perfect Forms and the temporary physical world of imperfect copies.',
          category: 'literary-context',
        },
        {
          id: 'lp-ch4-3-knowledge',
          content: 'For Plato, true knowledge is knowledge of the Forms, not of physical things. Sense perception yields only opinion, while reason grasps eternal truth.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 4: Primary source - Reading the Allegory of the Cave
    {
      id: 'chapter-4-scene-4-cave-source',
      type: 'primary-source',
      backgroundImage: 'https://cdn.midjourney.com/7add380f-edd2-41ac-bbe8-5bf8845464ac/0_0.png',

      prompt: 'Read this famous passage from Plato\'s Republic and answer the questions below:',

      source: {
        title: 'The Allegory of the Cave',
        author: 'Plato',
        date: 'c. 375 BCE',
        type: 'text',
        content: `Imagine human beings living in an underground cave with a long entrance open to the light. They have been there since childhood, with their necks and legs chained, so that they can only see ahead of them and cannot turn their heads.

Above and behind them a fire is blazing, and between the fire and the prisoners there is a raised walkway, with a low wall built along it, like the screen at a puppet show.

Along this walkway, people carry all sorts of objects—statues of people and animals made of stone, wood, and other materials. Some of these people talk, others are silent.

The prisoners see only the shadows cast by the fire on the wall of the cave in front of them. They hear echoes of sounds. Having seen nothing else their entire lives, they believe these shadows are the most real things in existence.

Now imagine one prisoner is freed and forced to stand up, turn around, and walk toward the light. The movement pains him, and the brightness hurts his eyes. He is confused and believes the shadows he used to see are more real than the objects now shown to him.

Suppose he is dragged up the steep ascent and out into the sunlight. His eyes are overwhelmed. But gradually he adjusts. First he sees shadows and reflections in water. Then he sees the actual objects and people. Finally, he looks up at the sun itself, understanding that it is the source of all light, all seasons, all life—the cause of everything he used to see in the cave.

This freed prisoner then remembers his former home and companions. He pities them. If he returned to the cave, his eyes now accustomed to sunlight, he would stumble in the darkness. The prisoners would laugh at him and say the journey upward had ruined his sight. If he tried to free them, they might kill him.`,
        citation: 'Plato, Republic, Book VII, 514a–517a (adapted translation)',
      },

      questions: [
        {
          id: 'q1',
          question: 'What do the shadows on the cave wall represent in Plato\'s allegory?',
          type: 'multiple-choice',
          options: [
            'The Forms themselves',
            'The physical world as perceived by the senses',
            'The world of mathematics and geometry',
            'Pure intellectual knowledge',
          ],
          correctAnswer: 'The physical world as perceived by the senses',
          explanation: 'The shadows represent the deceptive appearances of the physical world that people mistake for reality. Plato suggests that most people live their entire lives seeing only shadows—reflections and copies—never grasping the true Forms.',
        },
        {
          id: 'q2',
          question: 'What does the sun outside the cave symbolize?',
          type: 'multiple-choice',
          options: [
            'Physical light and warmth',
            'The Form of the Good, the highest truth',
            'Democracy and political freedom',
            'The wisdom of Socrates',
          ],
          correctAnswer: 'The Form of the Good, the highest truth',
          explanation: 'The sun represents the Form of the Good—the ultimate source of truth, knowledge, and reality in Plato\'s philosophy. Just as the sun makes physical things visible, the Good makes all other Forms intelligible.',
        },
        {
          id: 'q3',
          question: 'Why would the prisoners reject the freed prisoner if he returned?',
          type: 'multiple-choice',
          options: [
            'Because he would be blinded by the darkness and appear foolish',
            'Because they are inherently evil people',
            'Because the cave is more comfortable than the outside world',
            'Because Plato believed all education is impossible',
          ],
          correctAnswer: 'Because he would be blinded by the darkness and appear foolish',
          explanation: 'The allegory suggests that those who have seen truth will appear confused and incompetent to those still trapped in ignorance. This mirrors Socrates\'s fate—his wisdom was not recognized by Athens, and he was condemned to death. Plato argues that philosophers will always face resistance from the masses.',
        },
      ],

      learningPoints: [
        {
          id: 'lp-ch4-4-allegory',
          content: 'The Allegory of the Cave illustrates Plato\'s epistemology and metaphysics through a powerful narrative image of education as liberation from illusion.',
          category: 'literary-context',
        },
        {
          id: 'lp-ch4-4-philosopher',
          content: 'For Plato, the philosopher is one who has escaped the cave of ignorance and seen the light of truth, but faces resistance when trying to enlighten others.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 5: Gallery Game - Forms and Shadows
    {
      id: 'chapter-4-scene-5-gallery',
      type: 'custom-mini-game',
      backgroundImage: 'https://cdn.midjourney.com/da2ce82d-b102-4ed1-ba7c-d26703a3a12e/0_0.png',

      gameType: 'gallery',

      config: {
        prompt: 'The perfect Form is revealed! Click only the shadows that are instances of this Form!',
        timePerRound: 20,
        correctPoints: 10,
        wrongPenalty: 5,
        speedBonusMultiplier: 2,
        passingScore: 70,
        targetLabel: 'The Perfect Form:',
        itemLabel: '',
        backgroundImage: 'https://cdn.midjourney.com/57958946-26ac-43e4-8cdf-fb3e6f74b84b/0_0.png',
        successMessage: "You've successfully matched the shadows to their perfect Forms!",
        failureMessage: "You needed 70% to pass. Try again to improve your understanding of Forms!",

        rounds: [
          // Round 1: Tree
          {
            id: 'round-1-tree',
            target: {
              id: 'form-tree',
              image: 'https://cdn.midjourney.com/4a6bd72a-8e82-43de-9f79-c0761fd6a11e/0_0.png',
              label: 'The Form of Tree',
              description: 'The perfect, eternal archetype of all trees',
            },
            items: [
              { id: 'oak-tree-1', image: 'https://cdn.midjourney.com/432a3b92-043f-4a6e-a2e2-198c34f06305/0_0.png', label: 'Oak Tree', isCorrect: true, explanation: 'This oak tree participates in the Form of Tree—it\'s an imperfect instance of the perfect Tree.' },
              { id: 'oak-tree-2', image: 'https://cdn.midjourney.com/432a3b92-043f-4a6e-a2e2-198c34f06305/0_2.png', label: 'Oak Tree', isCorrect: true, explanation: 'Another oak tree, also participating in the Form of Tree.' },
              { id: 'olive-tree-1', image: 'https://cdn.midjourney.com/b4996106-a158-4e26-a2a9-08259627bab5/0_3.png', label: 'Olive Tree', isCorrect: true, explanation: 'This olive tree shares in the Form of Tree, despite looking different from an oak.' },
              { id: 'olive-tree-2', image: 'https://cdn.midjourney.com/b4996106-a158-4e26-a2a9-08259627bab5/0_0.png', label: 'Olive Tree', isCorrect: true, explanation: 'Another olive tree participating in the same Form.' },
              { id: 'pine-tree-1', image: 'https://cdn.midjourney.com/81fdb4bb-964f-49fc-8a7a-b500d85f0dfd/0_3.png', label: 'Pine Tree', isCorrect: true, explanation: 'A pine tree—very different in appearance, but still an instance of the Form of Tree.' },
              { id: 'pine-tree-2', image: 'https://cdn.midjourney.com/81fdb4bb-964f-49fc-8a7a-b500d85f0dfd/0_2.png', label: 'Pine Tree', isCorrect: true, explanation: 'Another pine tree participating in the Form.' },
              { id: 'stallion-1', image: 'https://cdn.midjourney.com/71499d50-2782-4454-8b24-ffc362ee619b/0_0.png', label: 'Stallion', isCorrect: false, explanation: 'This is a horse, not a tree—it participates in a different Form.' },
              { id: 'mare-1', image: 'https://cdn.midjourney.com/5ab5f1a4-7630-474e-92de-1f854ba2f807/0_2.png', label: 'Mare', isCorrect: false, explanation: 'This mare participates in the Form of Horse, not Tree.' },
              { id: 'dining-table-1', image: 'https://cdn.midjourney.com/08e04195-744e-4404-807a-3eba95c85e1f/0_0.png', label: 'Dining Table', isCorrect: false, explanation: 'A table is not a tree—it belongs to the Form of Table.' },
              { id: 'work-table-1', image: 'https://cdn.midjourney.com/e9907509-dbe5-4bec-a3cf-d968bc040549/0_0.png', label: 'Work Table', isCorrect: false, explanation: 'This work table participates in the Form of Table, not Tree.' },
            ],
            itemsToShow: 5,
            itemDisplayTime: 3,
            spawnInterval: 1.2,
          },

          // Round 2: Horse
          {
            id: 'round-2-horse',
            target: {
              id: 'form-horse',
              image: 'https://cdn.midjourney.com/8fa6fade-4d4b-4d2d-ad9e-bc6fcae04b80/0_1.png',
              label: 'The Form of Horse',
              description: 'The perfect, eternal archetype of all horses',
            },
            items: [
              { id: 'stallion-2', image: 'https://cdn.midjourney.com/71499d50-2782-4454-8b24-ffc362ee619b/0_3.png', label: 'Stallion', isCorrect: true, explanation: 'This stallion participates in the Form of Horse.' },
              { id: 'mare-2', image: 'https://cdn.midjourney.com/5ab5f1a4-7630-474e-92de-1f854ba2f807/0_3.png', label: 'Mare', isCorrect: true, explanation: 'This mare also shares in the Form of Horse.' },
              { id: 'foal-1', image: 'https://cdn.midjourney.com/8e681dc8-0e6d-444b-8f79-396503c7509f/0_2.png', label: 'Foal', isCorrect: true, explanation: 'Even a young foal participates in the eternal Form of Horse.' },
              { id: 'foal-2', image: 'https://cdn.midjourney.com/8e681dc8-0e6d-444b-8f79-396503c7509f/0_1.png', label: 'Foal', isCorrect: true, explanation: 'Another foal—small and young, but still an instance of Horse.' },
              { id: 'oak-tree-3', image: 'https://cdn.midjourney.com/432a3b92-043f-4a6e-a2e2-198c34f06305/0_0.png', label: 'Oak Tree', isCorrect: false, explanation: 'This is a tree, not a horse—different Form entirely.' },
              { id: 'pine-tree-3', image: 'https://cdn.midjourney.com/81fdb4bb-964f-49fc-8a7a-b500d85f0dfd/0_3.png', label: 'Pine Tree', isCorrect: false, explanation: 'A tree participates in the Form of Tree, not Horse.' },
              { id: 'shield-1', image: 'https://cdn.midjourney.com/35987702-39a6-48d4-909b-fdda12de0fae/0_2.png', label: 'Shield', isCorrect: false, explanation: 'A circular shield participates in the Form of Circle, not Horse.' },
              { id: 'wheel-1', image: 'https://cdn.midjourney.com/cc3e109d-36ce-4ad5-82ac-d11a86faf55f/0_2.png', label: 'Wheel', isCorrect: false, explanation: 'This wheel belongs to the Form of Circle.' },
            ],
            itemsToShow: 4,
            itemDisplayTime: 2.8,
            spawnInterval: 1.0,
          },

          // Round 3: Table
          {
            id: 'round-3-table',
            target: {
              id: 'form-table',
              image: 'https://cdn.midjourney.com/018f8d5d-7e61-456f-ba36-9d22130b9e80/0_0.png',
              label: 'The Form of Table',
              description: 'The perfect, eternal archetype of all tables',
            },
            items: [
              { id: 'dining-table-2', image: 'https://cdn.midjourney.com/08e04195-744e-4404-807a-3eba95c85e1f/0_3.png', label: 'Dining Table', isCorrect: true, explanation: 'This dining table participates in the Form of Table.' },
              { id: 'work-table-2', image: 'https://cdn.midjourney.com/e9907509-dbe5-4bec-a3cf-d968bc040549/0_2.png', label: 'Work Table', isCorrect: true, explanation: 'A work table—different purpose, but same Form.' },
              { id: 'small-table-1', image: 'https://cdn.midjourney.com/f7e33fe1-e07a-437f-9b16-c0e9fd75fd0c/0_3.png', label: 'Small Table', isCorrect: true, explanation: 'A small side table also shares in the Form of Table.' },
              { id: 'small-table-2', image: 'https://cdn.midjourney.com/f7e33fe1-e07a-437f-9b16-c0e9fd75fd0c/0_1.png', label: 'Small Table', isCorrect: true, explanation: 'Another small table—all tables participate in the same perfect Form.' },
              { id: 'stallion-3', image: 'https://cdn.midjourney.com/71499d50-2782-4454-8b24-ffc362ee619b/0_0.png', label: 'Stallion', isCorrect: false, explanation: 'A horse is not a table—it belongs to the Form of Horse.' },
              { id: 'foal-3', image: 'https://cdn.midjourney.com/8e681dc8-0e6d-444b-8f79-396503c7509f/0_2.png', label: 'Foal', isCorrect: false, explanation: 'This foal participates in the Form of Horse, not Table.' },
              { id: 'olive-tree-3', image: 'https://cdn.midjourney.com/b4996106-a158-4e26-a2a9-08259627bab5/0_3.png', label: 'Olive Tree', isCorrect: false, explanation: 'An olive tree belongs to the Form of Tree.' },
            ],
            itemsToShow: 4,
            itemDisplayTime: 2.5,
            spawnInterval: 0.9,
          },

          // Round 4: Circle
          {
            id: 'round-4-circle',
            target: {
              id: 'form-circle',
              image: 'https://cdn.midjourney.com/38d4bccc-b7d4-45a4-a2b1-7d519c1ff330/0_3.png',
              label: 'The Form of Circle',
              description: 'The perfect, eternal archetype of all circular things',
            },
            items: [
              { id: 'shield-2', image: 'https://cdn.midjourney.com/35987702-39a6-48d4-909b-fdda12de0fae/0_1.png', label: 'Shield', isCorrect: true, explanation: 'This round shield participates in the Form of Circle.' },
              { id: 'wheel-2', image: 'https://cdn.midjourney.com/cc3e109d-36ce-4ad5-82ac-d11a86faf55f/0_1.png', label: 'Wheel', isCorrect: true, explanation: 'A wheel—circular in shape, participating in the Form of Circle.' },
              { id: 'coin-1', image: 'https://cdn.midjourney.com/8e2c8f93-d483-4ec6-828a-324205d949fb/0_0.png', label: 'Coin', isCorrect: true, explanation: 'Even a small coin shares in the perfect Form of Circle.' },
              { id: 'coin-2', image: 'https://cdn.midjourney.com/e757d11a-2c4d-46c7-ae29-568f2b76e225/0_3.png', label: 'Coin', isCorrect: true, explanation: 'Another coin—all circles participate in the same eternal Form.' },
              { id: 'oak-tree-4', image: 'https://cdn.midjourney.com/432a3b92-043f-4a6e-a2e2-198c34f06305/0_2.png', label: 'Oak Tree', isCorrect: false, explanation: 'A tree is not circular—it belongs to the Form of Tree.' },
              { id: 'pine-tree-4', image: 'https://cdn.midjourney.com/81fdb4bb-964f-49fc-8a7a-b500d85f0dfd/0_2.png', label: 'Pine Tree', isCorrect: false, explanation: 'This pine tree participates in the Form of Tree, not Circle.' },
              { id: 'dining-table-3', image: 'https://cdn.midjourney.com/08e04195-744e-4404-807a-3eba95c85e1f/0_0.png', label: 'Dining Table', isCorrect: false, explanation: 'A table belongs to the Form of Table, not Circle.' },
            ],
            itemsToShow: 4,
            itemDisplayTime: 2.5,
            spawnInterval: 0.9,
          },
        ],
      },

      learningPoints: [
        {
          id: 'lp-4-5-forms-instances',
          content: 'Plato\'s Theory of Forms proposes that perfect, eternal archetypes (Forms) exist in a realm beyond the physical world, and physical objects are imperfect copies that "participate" in these Forms.',
          category: 'philosophical-concept',
        },
        {
          id: 'lp-4-5-many-one',
          content: 'Multiple diverse physical instances can participate in the same Form—all trees, no matter how different, share in the single Form of Tree.',
          category: 'philosophical-concept',
        },
        {
          id: 'lp-4-5-allegory-application',
          content: 'The Allegory of the Cave illustrates this: the shadows on the wall are like physical objects, while the objects casting shadows are like the Forms—more real, but harder to perceive.',
          category: 'literary-analysis',
        },
      ],
    },

    // Scene 6: Decision - What is more real: the physical tree or the Form of Tree?
    {
      id: 'chapter-4-scene-6-reality-decision',
      type: 'decision',
      backgroundImage: 'https://cdn.midjourney.com/0757d3e2-5c46-448a-b349-2eff6e628cb3/0_0.png',

      prompt: 'Which is more real?',
      context: `Plato asks you to consider a fundamental question about the nature of reality.

Before you stands a beautiful oak tree—solid, material, visible. You can touch its bark, smell its leaves, see its branches swaying in the wind.

But Plato insists that there also exists the Form of Tree—eternal, unchanging, perfect. This oak tree participates in that Form, derives its "tree-ness" from it. The Form of Tree never changes, never dies, exists whether or not any physical tree exists.

Which is more real?`,

      choices: [
        {
          id: 'choice-physical',
          text: 'The physical tree—I can see it, touch it, verify its existence with my senses.',
          consequence: 'Plato shakes his head gently. "But this tree will die. It is already changing—growing, losing leaves, aging. It is imperfect—crooked branches, damaged bark. And if all trees died tomorrow, would the concept of \'tree\' cease to exist? No—the Form is eternal, while this tree is temporary. The senses deceive us into thinking the temporary is real."',
          learningPoints: [
            {
              id: 'lp-ch4-6a-empiricism',
              content: 'Plato rejects empiricism—the idea that knowledge comes primarily from sense experience—arguing that the senses reveal only changing, unreliable appearances.',
              category: 'literary-context',
            },
          ],
        },
        {
          id: 'choice-form',
          text: 'The Form of Tree—eternal, perfect, unchanging.',
          consequence: 'Plato smiles with approval. "You begin to understand! The physical tree comes and goes, but the Form is eternal. This particular tree is an imperfect copy, a shadow of the true reality. The philosopher grasps that what is eternal and unchanging is more real than what is temporary and changing. The Form of Tree exists in the realm of perfect being, while this tree merely exists in the realm of becoming."',
          learningPoints: [
            {
              id: 'lp-ch4-6b-idealism',
              content: 'Plato\'s idealism asserts that abstract, eternal Forms are more real than physical, changing objects—a complete reversal of common sense.',
              category: 'literary-context',
            },
          ],
        },
        {
          id: 'choice-both',
          text: 'Both are real in different ways.',
          consequence: 'Plato considers this. "There is truth in what you say—both realms exist. But they are not equally real. The Form is primary, the physical tree is derivative. The Form is like the sun, the physical tree is like the shadow it casts. Yes, both exist, but one is the source, the other is the copy. One is eternal truth, the other is temporary appearance. The philosopher must recognize this hierarchy."',
          learningPoints: [
            {
              id: 'lp-ch4-6c-hierarchy',
              content: 'Plato\'s two-world theory establishes a hierarchy: the realm of Forms is ontologically prior and more valuable than the physical realm.',
              category: 'literary-context',
            },
          ],
        },
      ],

      learningPoints: [],
    },

    // Scene 7: The tripartite soul narrative
    {
      id: 'chapter-4-scene-7-soul',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/08c25acd-e836-428f-b2af-79747ece8da5/0_0.png',
      content: `Plato's understanding of human nature divides the soul into three parts, like a chariot with two horses and a charioteer:

Reason (the charioteer): The rational part of the soul that seeks truth and wisdom. It should rule the soul, guiding it toward the Good.

Spirit (the noble horse): The emotional, passionate part that seeks honor and victory. When properly trained, it allies with reason to control the appetites. Warriors exemplify this part of the soul.

Appetite (the wild horse): The desiring part that seeks physical pleasures—food, drink, sex, wealth. If uncontrolled, it drags the soul downward toward base pursuits.

A just soul, according to Plato, is one where reason rules, spirit supports reason, and appetites obey. Each part does what it is naturally suited for, creating harmony within the individual.

But Plato makes a bold move: This same structure, he argues, applies to the ideal city. A just city has three classes—philosopher-kings (reason), guardians/warriors (spirit), and producers (appetite)—each doing what they are naturally suited for.

Justice, both in the soul and in the state, means each part performing its proper function under the rule of wisdom.`,
      learningPoints: [
        {
          id: 'lp-ch4-7-tripartite',
          content: 'Plato\'s tripartite theory of the soul divides human psychology into reason, spirit, and appetite, with justice requiring reason to rule over the other parts.',
          category: 'literary-context',
        },
        {
          id: 'lp-ch4-7-analogy',
          content: 'Plato draws a direct analogy between the structure of the individual soul and the structure of the ideal city, suggesting that political justice mirrors psychological justice.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 8: Dialogue - Discussion of justice in the soul and state
    {
      id: 'chapter-4-scene-8-justice-dialogue',
      type: 'dialogue',
      backgroundImage: 'https://cdn.midjourney.com/b9b98457-15e9-46da-864c-4046739da78a/0_0.png',

      character: {
        id: 'plato',
        name: 'Plato',
        portrait: 'https://cdn.midjourney.com/0990f3e0-c55f-4e39-bd3d-bde2b298aa20/0_0.png',
        description: 'Student of Socrates and founder of the Academy',
      },

      dialogueTree: {
        id: 'node-1',
        speaker: 'plato',
        text: 'Tell me, what do you think justice is?',

        responses: [
          {
            id: 'response-fairness',
            text: 'Justice is treating everyone fairly and equally.',
            nextNodeId: 'node-2',
          },
          {
            id: 'response-law',
            text: 'Justice is obeying the laws of the state.',
            nextNodeId: 'node-3',
          },
          {
            id: 'response-harmony',
            text: 'Justice is each part doing what it does best.',
            nextNodeId: 'node-4',
          },
        ],

        allNodes: [
          // Response to fairness/equality perspective
          {
            id: 'node-2',
            speaker: 'plato',
            text: 'An interesting answer, but consider: Is it fair to treat a child the same as a philosopher? To give a sword to a madman as readily as to a guardian? True justice recognizes natural differences and assigns roles accordingly. Equality in all things can produce the greatest injustice.',
            responses: [
              {
                id: 'response-2-law',
                text: 'But what about justice as following the laws?',
                nextNodeId: 'node-3',
              },
              {
                id: 'response-2-harmony',
                text: 'What if justice is about harmony—each doing what they do best?',
                nextNodeId: 'node-4',
              },
              {
                id: 'response-2-continue',
                text: 'I understand. Please continue.',
                nextNodeId: 'node-5',
              },
            ],
          },
          // Response to law-following perspective
          {
            id: 'node-3',
            speaker: 'plato',
            text: 'But what if the laws themselves are unjust? Athens had laws, yet they executed Socrates! No, justice cannot simply mean obeying whatever laws happen to exist. There must be an objective standard of Justice itself—a Form we can know through reason.',
            responses: [
              {
                id: 'response-3-fairness',
                text: 'So is justice about treating everyone fairly and equally?',
                nextNodeId: 'node-2',
              },
              {
                id: 'response-3-harmony',
                text: 'What if justice is about harmony—each doing what they do best?',
                nextNodeId: 'node-4',
              },
              {
                id: 'response-3-continue',
                text: 'I see. Please go on.',
                nextNodeId: 'node-5',
              },
            ],
          },
          // Response to harmony/function perspective
          {
            id: 'node-4',
            speaker: 'plato',
            text: 'Excellent! You have grasped the essence. Justice is not about equal treatment or mere law-following. It is about harmonious order—each element performing its proper function. In the soul, reason rules; in the city, philosophers rule. This is natural justice.',
            responses: [
              {
                id: 'response-4-fairness',
                text: 'But some say justice is treating everyone fairly and equally.',
                nextNodeId: 'node-2',
              },
              {
                id: 'response-4-law',
                text: 'Others say justice is simply obeying the laws.',
                nextNodeId: 'node-3',
              },
              {
                id: 'response-4-continue',
                text: 'This makes sense. Tell me more.',
                nextNodeId: 'node-5',
              },
            ],
          },
          // Philosopher-kings introduction
          {
            id: 'node-5',
            speaker: 'plato',
            text: 'Now you understand my conception of justice. It follows that in a just city, those who know the Good—philosophers who have seen the Forms—must rule. Not because they desire power, but because they alone can guide the city toward truth and virtue. This is why I propose that philosophers must become kings, or kings must become philosophers.',
            responses: [
              {
                id: 'response-5-agree',
                text: 'That makes sense—only the wise should rule.',
                nextNodeId: 'node-6',
              },
              {
                id: 'response-5-skeptical',
                text: 'But who decides who is wise enough to rule?',
                nextNodeId: 'node-7',
              },
              {
                id: 'response-5-dangerous',
                text: 'Isn\'t this dangerous? What if these "philosophers" abuse their power?',
                nextNodeId: 'node-8',
              },
            ],
          },
          // Agreement with philosopher-kings
          {
            id: 'node-6',
            speaker: 'plato',
            text: 'Yes! Democracy allows the ignorant masses to make decisions about things they do not understand. This is why Athens killed Socrates. In my ideal Republic, only those who have completed rigorous philosophical education, who have escaped the cave and seen the sun, who grasp the Form of the Good itself, will rule.',
            responses: [
              {
                id: 'response-6-who',
                text: 'But how do we identify these true philosophers?',
                nextNodeId: 'node-7',
              },
              {
                id: 'response-6-end',
                text: 'I understand your vision.',
                nextNodeId: 'node-9',
              },
            ],
          },
          // Question about identifying wise rulers
          {
            id: 'node-7',
            speaker: 'plato',
            text: 'Those who have completed the educational curriculum I have designed—mathematics, dialectic, philosophy—and who have glimpsed the Form of the Good. The process takes fifty years of training. These philosopher-kings will rule reluctantly, not for power or wealth, but out of duty to guide others toward truth.',
            responses: [
              {
                id: 'response-7-abuse',
                text: 'But what prevents them from abusing this power?',
                nextNodeId: 'node-8',
              },
              {
                id: 'response-7-end',
                text: 'A rigorous system indeed.',
                nextNodeId: 'node-9',
              },
            ],
          },
          // Concern about power abuse
          {
            id: 'node-8',
            speaker: 'plato',
            text: 'This is why they must have no private property, no families of their own, no personal wealth. By eliminating private interests, we ensure they care only for the common good. Moreover, true philosophers do not seek power—they must be compelled to rule. One who desires power is the last person who should have it.',
            nextNodeId: 'node-9',
          },
          // Final conclusion
          {
            id: 'node-9',
            speaker: 'plato',
            text: 'Remember: justice requires that each part—whether in the soul or the city—performs its proper function in harmony with the whole. When reason rules, guided by knowledge of the Good, both the individual and the city achieve true happiness and excellence.',
            isEnd: true,
          },
        ],
      },

      learningPoints: [
        {
          id: 'lp-ch4-8-justice',
          content: 'For Plato, justice means each part of the soul or city performing its proper function in a harmonious hierarchy, not equality or mere law-following.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 9: Map exploration - Explore the structure of Plato's ideal city
    {
      id: 'chapter-4-scene-9-republic-map',
      type: 'map-exploration',
      backgroundImage: 'https://cdn.midjourney.com/d8632509-3501-46f7-a239-6ae28cd35b92/0_0.png',
      mapImage: 'https://cdn.midjourney.com/7344a03a-d5db-4b93-a1d8-65958cb1fcda/0_0.png',

      prompt: 'Explore the structure of Plato\'s ideal city, the Republic. Click on each location to learn about the different classes and their roles.',

      locations: [
        {
          id: 'location-guardians',
          name: 'Guardian Barracks',
          x: 50,
          y: 30,
          image: 'https://cdn.midjourney.com/c10f5eaa-e176-42eb-8187-45907b9ead3f/0_0.png',
          content: `The Guardians are the warrior class, carefully selected and trained from childhood. They live communally with no private property or family attachments, sharing everything in common.

Their education includes gymnastics for the body and music for the soul. They are taught to be courageous, disciplined, and devoted to the city above all else.

The Guardians serve as both military defenders and internal police, ensuring that each class performs its proper function. From among the Guardians, the most philosophically gifted will be selected to become philosopher-kings.

Plato believes that private property and family create selfish interests that corrupt rulers. Guardians must have no private concerns, only the good of the city.`,
        },
        {
          id: 'location-philosophers',
          name: 'Philosopher-Kings\' Hall',
          x: 30,
          y: 20,
          content: `The Philosopher-Kings are the ruling class, selected from the Guardians after fifty years of education in mathematics, dialectic, and philosophy.

Only those who have grasped the Form of the Good itself are fit to rule. They understand true justice, true virtue, true reality—not mere opinions or appearances.

Philosopher-Kings rule reluctantly, seeing political power as a burden rather than a privilege. They would prefer to spend their lives in philosophical contemplation, but they rule out of duty to guide others toward the Good.

They live under the same communal conditions as the Guardians—no private property, no individual families—ensuring they have no personal interests that might corrupt their judgment. Their only concern is the welfare of the entire city.`,
          image: 'https://cdn.midjourney.com/013a7425-3591-42b3-a6b9-7a02295fa03e/0_0.png',
        },
        {
          id: 'location-producers',
          name: 'Marketplace & Workshops',
          x: 70,
          y: 60,
          image: 'https://cdn.midjourney.com/7d55e3a4-834b-46d5-9361-83ba43ca6720/0_0.png',
          content: `The Producers are the largest class, including farmers, craftsmen, merchants, and laborers. They provide all the material goods and services needed for the city to function.

Unlike the Guardians and Philosopher-Kings, Producers are allowed to own private property, have families, and pursue wealth. Their souls are dominated by the appetitive part, making them naturally suited for production rather than ruling or fighting.

Producers have no role in governing the city. They must obey the Philosopher-Kings and support the Guardians, providing the economic foundation for the state.

Justice requires that they stay in their role and not aspire to rule—just as in the soul, the appetites must obey reason rather than trying to control the chariot.`,
        },
        {
          id: 'location-education',
          name: 'Academy of Education',
          x: 40,
          y: 50,
          image: 'https://cdn.midjourney.com/1e706192-9487-4e52-806f-48ec49182270/0_0.png',
          content: `Education is the foundation of Plato's Republic. Children are observed from birth to identify their natural abilities and determine which class they belong to.

The curriculum is carefully controlled. Music and poetry are censored to ensure they promote virtue. Mathematics trains the mind to grasp eternal truths. Dialectic—philosophical reasoning—is the highest form of education, reserved for future philosopher-kings.

At each stage, those who cannot advance are assigned to appropriate roles: most become Producers, some become Guardians, and only the very few who complete all stages and glimpse the Form of the Good become Philosopher-Kings.

Plato believes that proper education turns the soul from darkness toward light, from the cave of ignorance toward the sun of truth.`,
        },
        {
          id: 'location-walls',
          name: 'City Walls',
          x: 85,
          y: 40,
          image: 'https://cdn.midjourney.com/70f472da-294d-4400-9e98-93df0f2a9987/0_0.png',
          content: `The Republic must be defended from external enemies and internal disorder. The Guardians serve both functions.

The city is designed to be self-sufficient but not expansionist. Plato believes that cities become corrupt when they grow too large or pursue conquest for wealth.

The ideal size allows all citizens to know one another and for the Philosopher-Kings to govern effectively. Too large, and the city becomes unwieldy and prone to faction and civil war.`,
        },
      ],

      requiredLocations: ['location-guardians', 'location-philosophers', 'location-producers'],

      learningPoints: [
        {
          id: 'lp-ch4-9-republic',
          content: 'Plato\'s ideal Republic is organized into three classes—Philosopher-Kings, Guardians, and Producers—mirroring the three parts of the soul.',
          category: 'literary-context',
        },
        {
          id: 'lp-ch4-9-communism',
          content: 'Plato advocates a form of communism for the ruling classes, abolishing private property and family to eliminate selfish interests that might corrupt governance.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 10: Decision - Should philosophers rule?
    {
      id: 'chapter-4-scene-10-philosopher-kings',
      type: 'decision',
      backgroundImage: 'https://cdn.midjourney.com/90f8b1dc-5501-43b3-942d-08a369a7957e/0_0.png',

      prompt: 'Should philosophers rule the city?',
      context: `Plato's most controversial claim is that philosophers should be kings, and kings should be philosophers. He argues that only those who have grasped the Form of the Good through rigorous education can know what is truly just and good for the city.

But this idea faces immediate objections.

Consider the question carefully: Should political power be given to those who claim to have special knowledge of truth and goodness?`,

      choices: [
        {
          id: 'choice-yes-rule',
          text: 'Yes—only the wise should rule. Democracy allows the ignorant to make decisions.',
          consequence: 'Plato nods approvingly. "Exactly! Would you want the majority to vote on whether a ship\'s captain is qualified? Or whether a doctor\'s diagnosis is correct? No—expertise matters. Governance requires knowledge of the Good, which only philosophers possess. The masses, trapped in the cave of ignorance, cannot distinguish shadows from reality. They killed Socrates! Only reason should rule, not appetite or popular opinion."',
          learningPoints: [
            {
              id: 'lp-ch4-10a-meritocracy',
              content: 'Plato\'s argument for philosopher-kings rests on epistocracy—the principle that political power should belong to those with knowledge, not to the masses.',
              category: 'literary-context',
            },
          ],
        },
        {
          id: 'choice-no-democracy',
          text: 'No—this concentrates too much power. People should govern themselves.',
          consequence: 'Plato shakes his head. "Democracy sounds appealing, but it is rule by the unqualified. The ignorant masses are swayed by rhetoric, emotion, and appetite. They choose leaders who flatter them rather than those who know the truth. Democracy inevitably degenerates into tyranny when a demagogue seizes power by manipulating popular passions. Better that the wise, who understand the eternal Forms, should guide the ship of state."',
          learningPoints: [
            {
              id: 'lp-ch4-10b-anti-democracy',
              content: 'Plato was deeply critical of democracy, viewing it as rule by the ignorant and as inherently unstable, prone to demagoguery and eventual tyranny.',
              category: 'literary-context',
            },
          ],
        },
        {
          id: 'choice-skeptical',
          text: 'This assumes philosophers actually know the Good—but what if they are wrong?',
          consequence: 'Plato pauses, recognizing the challenge. "You raise a fair objection. This is precisely why philosophers must be rigorously tested for fifty years, why they must study dialectic and ascend beyond opinion to true knowledge. But you are right to worry: my Republic depends on the possibility of certain knowledge of the Good. If the Forms do not exist, or if humans cannot know them, then my entire political vision collapses."',
          learningPoints: [
            {
              id: 'lp-ch4-10c-criticism',
              content: 'A major criticism of Plato\'s Republic is that it assumes philosophers can have certain knowledge of objective truth—an assumption that later skeptics would challenge.',
              category: 'literary-context',
            },
          ],
        },
      ],

      learningPoints: [],
    },

    // Scene 11: Quote attribution - Match passages from Plato's dialogues
    {
      id: 'chapter-4-scene-11-quotes',
      type: 'quote-attribution',
      backgroundImage: 'https://cdn.midjourney.com/33e7ad8d-e1a4-4684-a502-1a71952903a0/0_0.png',

      prompt: 'Match these famous passages from Plato\'s dialogues to the concept or idea they express:',

      quotes: [
        {
          id: 'quote-1',
          text: 'Until philosophers are kings, or the kings and princes of this world have the spirit and power of philosophy, cities will never have rest from their evils.',
          speaker: 'Philosopher-Kings',
          context: 'From the Republic, Book V',
          explanation: 'This is Plato\'s most famous political claim: that only when political power and philosophical wisdom are united in the same person can the city achieve justice and peace. This requires either that philosophers reluctantly take power, or that rulers become genuine lovers of wisdom.',
        },
        {
          id: 'quote-2',
          text: 'The Form of the Good is the highest object of knowledge, and that by it justice and other virtues are made useful and beneficial.',
          speaker: 'The Form of the Good',
          context: 'From the Republic, Book VI',
          explanation: 'The Form of the Good stands at the top of Plato\'s hierarchy of Forms. It is what makes all other Forms intelligible, just as the sun makes physical things visible. Knowledge of the Good is essential for ruling justly, which is why only philosophers who have grasped it should govern.',
        },
        {
          id: 'quote-3',
          text: 'The soul is immortal and has been born many times, and has seen all things both here and in the underworld, so there is nothing it has not learned.',
          speaker: 'Recollection (Anamnesis)',
          context: 'From the Meno',
          explanation: 'Plato\'s theory of recollection holds that learning is actually remembering what the soul knew before birth. The immortal soul existed in the realm of Forms before being embodied, and education is the process of recovering that forgotten knowledge through dialectical questioning.',
        },
        {
          id: 'quote-4',
          text: 'True knowledge is not to be found in the shadows on the wall, but in turning the whole soul from becoming to being—to the brightest region of reality.',
          speaker: 'The Allegory of the Cave',
          context: 'From the Republic, Book VII',
          explanation: 'This summarizes the meaning of the Cave allegory: education is not adding information to the mind, but redirecting the soul\'s attention from the changing physical world (becoming) to the eternal realm of Forms (being). The philosopher must turn from shadows to light.',
        },
      ],

      learningPoints: [
        {
          id: 'lp-ch4-11-dialogues',
          content: 'Plato\'s philosophy is presented through dialogues—dramatic conversations where ideas are tested through dialectical questioning, following Socrates\'s method.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 12: Cause-effect - Match elements of Plato's philosophy to their logical connections
    {
      id: 'chapter-4-scene-12-cause-effect',
      type: 'cause-effect',
      backgroundImage: 'https://cdn.midjourney.com/4bc5a839-51c9-4611-bc3d-5cc7edf9e407/0_0.png',

      prompt: 'Match each element of Plato\'s philosophy to its logical consequence or connection:',

      pairs: [
        {
          id: 'pair-1',
          cause: 'The physical world is constantly changing',
          effect: 'Therefore, true knowledge must be of eternal, unchanging Forms',
          explanation: 'Plato argues that knowledge requires stable objects. Since physical things are always changing (Heraclitus\'s flux), they cannot be objects of genuine knowledge, only opinion. True knowledge must be of something permanent—the Forms.',
        },
        {
          id: 'pair-2',
          cause: 'The soul has three parts: reason, spirit, and appetite',
          effect: 'Therefore, the just city has three classes: philosophers, guardians, and producers',
          explanation: 'Plato draws a direct analogy between individual psychology and political structure. Just as reason should rule the soul, philosophers should rule the city. The structure of the just soul mirrors the structure of the just state.',
        },
        {
          id: 'pair-3',
          cause: 'Democracy allows the ignorant masses to make political decisions',
          effect: 'Therefore, democracy inevitably degenerates into tyranny',
          explanation: 'Plato believed that democracy\'s lack of wisdom and its reliance on popular opinion make it unstable. Demagogues manipulate the masses\' appetites, eventually seizing absolute power and establishing tyranny.',
        },
        {
          id: 'pair-4',
          cause: 'Philosopher-Kings have no private property or families',
          effect: 'Therefore, they will rule for the common good rather than private interest',
          explanation: 'Plato eliminates private property and family for the ruling class to remove temptations toward corruption. Without personal wealth or family loyalty to advance, philosopher-kings can focus solely on the welfare of the entire city.',
        },
      ],

      learningPoints: [
        {
          id: 'lp-ch4-12-systematic',
          content: 'Plato\'s philosophy is highly systematic—his metaphysics, epistemology, psychology, and political theory are all logically interconnected.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 13: Criticisms of Plato narrative
    {
      id: 'chapter-4-scene-13-criticisms',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/ece7836c-5d13-434f-853d-b645a6c7d9bc/0_0.png',
      content: `Plato's philosophy, despite its profound influence, faces serious criticisms that have been debated for over two millennia:

The Third Man Argument: If a physical object resembles its Form, there must be a third thing (a "third man") that explains the resemblance between the two. This leads to an infinite regress. Aristotle raised this objection against his teacher.

The Totalitarian Problem: Plato's Republic abolishes individual freedom, private property (for rulers), and family bonds. It censors art and poetry. It assigns people to classes based on supposed natural ability. Karl Popper argued that Plato's vision is a blueprint for totalitarianism—rule by an elite who claim special access to truth.

The Knowledge Problem: How do we know the Forms exist? How can we verify that philosophers have actually grasped the Form of the Good rather than merely believing they have? Plato's system depends on the possibility of certain metaphysical knowledge that empiricists deny is possible.

The Aristocratic Bias: Plato's philosophy reflects the prejudices of the Athenian aristocracy. His contempt for democracy, his belief in natural hierarchy, his equation of wisdom with elite education—all serve to justify rule by the privileged few.

Yet despite these criticisms, Plato's ideas have endured. His Theory of Forms influenced Christian theology. His political philosophy shaped debates about justice and governance. His emphasis on reason, education, and the search for objective truth remains central to Western intellectual tradition.`,
      learningPoints: [
        {
          id: 'lp-ch4-13-third-man',
          content: 'The Third Man Argument, raised by Aristotle, suggests that Plato\'s Theory of Forms leads to an infinite regress when trying to explain the relationship between Forms and physical objects.',
          category: 'literary-context',
        },
        {
          id: 'lp-ch4-13-totalitarian',
          content: 'Critics like Karl Popper argue that Plato\'s Republic is authoritarian, sacrificing individual freedom to the supposed wisdom of an elite ruling class.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 14: The Evolution of Plato's Thought
    {
      id: 'chapter-4-scene-14-evolution',
      type: 'narrative',
      backgroundImage: '/Imsie/assets/the-classical-thinkers/backgrounds/platos-dialogues-timeline.jpg',

      content: `Plato's philosophical thought evolved significantly over his long career of writing. Scholars traditionally divide his dialogues into three periods, each reflecting different stages in the development of his ideas:

The Early Dialogues: In works like the Apology, Euthyphro, and Crito, Plato stays close to the historical Socrates. These dialogues focus on ethical questions—What is piety? What is courage? What is justice?—using the Socratic method of questioning. Typically, these dialogues end without definitive answers, demonstrating the limits of conventional wisdom and the need for deeper inquiry. The young Plato is content to expose ignorance rather than construct positive doctrines.

The Middle Dialogues: In the Meno, Phaedo, and especially the Republic, Plato develops his own revolutionary philosophy. Here we find the Theory of Forms fully articulated, the Allegory of the Cave, the tripartite soul, and the vision of the philosopher-kings. These are Plato's most ambitious and systematic works, presenting a comprehensive worldview that goes far beyond anything Socrates taught. The Republic represents the height of Plato's confidence in his philosophical system.

The Late Dialogues: In works like the Parmenides, Timaeus, and Laws, Plato's thinking becomes more critical and nuanced. The Parmenides subjects the Theory of Forms to devastating logical scrutiny, raising objections that Plato himself seems unable to fully answer. The Laws presents a more practical, less idealistic political vision than the Republic, suggesting Plato recognized the difficulty of implementing his earlier proposals. The late dialogues show a philosopher willing to question his own doctrines and refine his views in light of criticism.

This evolution demonstrates Plato's intellectual honesty. Unlike a dogmatic thinker, he remained open to revising his ideas, subjecting even his most cherished theories to rigorous examination. The progression from Socratic questioning, to systematic philosophy, to self-critical reflection shows Plato practicing what he preached: the unending pursuit of wisdom through dialectic.`,

      learningPoints: [
        {
          id: 'lp-ch4-14-development',
          content: 'Plato\'s philosophy evolved over his lifetime: early dialogues closely follow Socrates, middle dialogues present the Theory of Forms, late dialogues critically examine and modify earlier doctrines.',
          category: 'literary-context',
        },
        {
          id: 'lp-ch4-14-self-criticism',
          content: 'In his late dialogues, Plato demonstrated intellectual honesty by subjecting his own Theory of Forms to critical examination, showing his commitment to truth over dogma.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 15: Conclusion and transition
    {
      id: 'chapter-4-scene-15-conclusion',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/ececc99c-61ec-44ae-8464-f32495d3f1ee/0_0.png',
      content: `As you prepare to leave the Academy, Plato offers final words:

"I have shown you a vision—a vision of a realm of perfect Forms beyond the shadows of this world, a vision of justice as harmony, a vision of the philosopher as one who has seen the light of truth. Whether this vision is ultimately correct, only rigorous philosophical investigation can determine.

My greatest student, Aristotle, will soon challenge much of what I have taught. He will argue that Forms do not exist in a separate realm, but are embedded in physical things. He will reject my political vision in favor of empirical study of actual constitutions. He will emphasize observation and classification where I emphasized pure reason.

And yet, even in rejecting parts of my philosophy, he will demonstrate what I have always taught: that the love of wisdom requires questioning everything, even the teachings of one's own master. Philosophy is not the transmission of doctrine, but the relentless pursuit of truth through dialectic.

Remember the lesson of the Cave: Most of humanity lives in darkness, mistaking shadows for reality. The philosopher's task is to ascend toward the light—and, difficult as it may be, to return to help others make the same journey.

Go now, and continue your philosophical education. My student Aristotle awaits you."`,
      learningPoints: [
        {
          id: 'lp-ch4-15-influence',
          content: 'Plato\'s influence on Western philosophy is immeasurable; as Alfred North Whitehead wrote, "The safest general characterization of the European philosophical tradition is that it consists of a series of footnotes to Plato."',
          category: 'literary-context',
        },
        {
          id: 'lp-ch4-15-aristotle',
          content: 'Aristotle, Plato\'s greatest student, would critique and revise many of Plato\'s doctrines while continuing his philosophical project in new directions.',
          category: 'literary-context',
        },
      ],

      events: {
        onExit: [{
          type: 'quiz',
          componentId: 'quiz-chapter-4',
          condition: { type: 'if-not-completed' },
        }],
      },
    },
  ],

  endQuiz: chapter4Quiz,
};

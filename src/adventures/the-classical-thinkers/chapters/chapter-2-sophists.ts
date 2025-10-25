import type { Chapter } from '../../../types';
import { chapter2Quiz } from '../quizzes/chapter-2-quiz';

export const chapter2: Chapter = {
  id: 'chapter-2-sophists',
  title: 'Chapter 2: The Sophists',
  description: 'Explore the world of democratic Athens and meet the Sophists—professional teachers who challenged traditional values and introduced revolutionary ideas about truth and justice.',

  learningObjectives: [
    'Understand the role of Sophists as professional teachers of rhetoric and virtue in democratic Athens',
    'Analyze the Sophistic challenge to traditional values through relativism and conventionalism',
    'Recognize the distinction between Sophistic education and philosophical inquiry',
    'Examine the political and social context of 5th century BCE Athens that enabled the Sophistic movement',
  ],

  scenes: [
    // Scene 1: Opening - Arrival in Golden Age Athens
    {
      id: 'chapter-2-scene-1-athens-arrival',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/a54c747d-e0c1-4ea8-abf0-0c6c6ded76e1/0_0.png',

      content: `Welcome to Athens in the 5th century BCE—the Golden Age of Greece!

You stand at the gates of the most powerful and innovative city-state in the Greek world. Around you, marble temples gleam in the Mediterranean sun, and the sounds of debate, commerce, and construction fill the air. The Parthenon rises majestically on the Acropolis above, a testament to Athenian wealth and ambition.

But Athens is more than just magnificent architecture. This is the world's first democracy, where citizens gather in the assembly to debate laws, declare war, and decide the fate of the city. In this revolutionary political system, the ability to speak persuasively has become the most valuable skill a citizen can possess.

Into this world step a new breed of teachers—the Sophists.`,

      learningPoints: [
        {
          id: 'lp-ch2-1-golden-age',
          content: 'The Golden Age of Athens (roughly 480-404 BCE) saw unprecedented achievements in art, architecture, drama, and political innovation, creating an environment where new ideas could flourish.',
          category: 'historical-context',
        },
        {
          id: 'lp-ch2-1-democracy',
          content: 'Athenian democracy required citizens to speak persuasively in public assemblies and law courts, creating demand for education in rhetoric and argumentation.',
          category: 'historical-context',
        },
      ],
    },

    // Scene 2: Map Exploration - Explore Athens
    {
      id: 'chapter-2-scene-2-athens-map',
      type: 'map-exploration',
      backgroundImage: 'https://cdn.midjourney.com/a54c747d-e0c1-4ea8-abf0-0c6c6ded76e1/0_0.png',
      mapImage: '/Imsie/assets/the-classical-thinkers/maps/athens.jpg',

      prompt: 'Explore the key locations of democratic Athens where the Sophists taught and debated',

      locations: [
        {
          id: 'location-agora',
          name: 'The Agora',
          x: 45,
          y: 60,
          content: `The agora is the bustling marketplace and civic center of Athens. Here, citizens shop, gossip, and engage in endless debates about politics, philosophy, and daily life.

You notice a well-dressed man surrounded by young aristocrats, gesturing dramatically as he speaks. This is a Sophist, offering lessons in rhetoric for a substantial fee. His students listen intently, hoping to learn the art of persuasive speaking.`,
          image: 'https://cdn.midjourney.com/a9b4b3ea-8142-47ac-81e5-dbfb9564fda8/0_0.png',
        },
        {
          id: 'location-assembly',
          name: 'The Assembly',
          x: 30,
          y: 40,
          content: `The Pnyx hill is where Athenian citizens gather for the ekklesia—the democratic assembly. Here, any citizen can propose laws, debate foreign policy, and vote on matters of state.

To succeed here requires skill in public speaking. The Sophists promise to teach exactly this skill, training students to argue either side of any question with equal persuasiveness.`,
          image: 'https://cdn.midjourney.com/2d1bd72f-b076-4706-a722-80412a00ce1a/0_0.png',
        },
        {
          id: 'location-gymnasium',
          name: 'The Gymnasium',
          x: 70,
          y: 35,
          content: `The gymnasium is where wealthy young men exercise and receive education. Sophists often teach here, combining physical training with intellectual development.

The curriculum includes rhetoric, grammar, poetry, mathematics, and the art of debate. For the first time in Greek history, education is becoming professionalized and widely available—at least to those who can afford it.`,
          image: 'https://cdn.midjourney.com/a9b4b3ea-8142-47ac-81e5-dbfb9564fda8/0_0.png',
        },
        {
          id: 'location-private-homes',
          name: 'Private Homes',
          x: 55,
          y: 75,
          content: `Wealthy Athenians invite famous Sophists to teach in their homes, hosting intellectual salons where ideas are exchanged and debated.

These private gatherings allow for more radical discussions than might be acceptable in public. Here, Sophists can question traditional values, religious beliefs, and conventional morality without fear of immediate backlash.`,
          image: 'https://cdn.midjourney.com/12591c57-9a01-4010-ad65-1b5132774fa2/0_0.png',
        },
      ],

      requiredLocations: ['location-agora', 'location-assembly'],

      learningPoints: [
        {
          id: 'lp-ch2-2-education',
          content: 'The Sophists created the first system of higher education in the Western world, offering professional instruction in rhetoric, politics, and philosophy for a fee.',
          category: 'historical-context',
        },
        {
          id: 'lp-ch2-2-democracy-rhetoric',
          content: 'Democratic institutions created a direct connection between rhetorical skill and political power, making the Sophists essential teachers for ambitious citizens.',
          category: 'historical-context',
        },
      ],
    },

    // Scene 3: Introduction to the Sophists
    {
      id: 'chapter-2-scene-3-sophist-intro',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/727c32d8-b6df-4e99-b023-3dfe9fc92ee2/0_0.png',

      content: `The word "sophist" comes from the Greek sophia, meaning wisdom. These traveling teachers claim to offer something revolutionary: the ability to teach arete—excellence or virtue.

Unlike traditional education that focused on memorizing Homer and learning music, the Sophists promise practical skills for success in democratic life. They teach rhetoric (the art of persuasion), eristic (the art of disputation), and dissoi logoi—the practice of arguing both sides of any question with equal persuasiveness.

The most famous Sophists—men like Protagoras of Abdera and Gorgias of Leontini—command enormous fees. A complete course of instruction might cost as much as 10,000 drachmas, roughly ten years' wages for a skilled worker.

But the Sophists are controversial. Their critics accuse them of teaching students to "make the weaker argument appear stronger" and of caring more about winning arguments than discovering truth. Are they educators or manipulators? Philosophers or charlatans?`,

      learningPoints: [
        {
          id: 'lp-ch2-3-arete',
          content: 'The Sophists challenged traditional Greek assumptions by claiming that arete (excellence/virtue) could be taught through instruction, rather than being an inherited trait of the aristocracy.',
          category: 'literary-context',
        },
        {
          id: 'lp-ch2-3-rhetoric',
          content: 'Rhetoric, the art of persuasive speaking, became a central discipline because democratic citizenship required the ability to argue effectively in assemblies and law courts.',
          category: 'literary-context',
        },
        {
          id: 'lp-ch2-3-controversy',
          content: 'The Sophists were controversial because they separated effective argumentation from the pursuit of truth, teaching students to argue any position convincingly.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 4: Dialogue with Protagoras
    {
      id: 'chapter-2-scene-4-protagoras-dialogue',
      type: 'dialogue',
      backgroundImage: 'https://cdn.midjourney.com/12591c57-9a01-4010-ad65-1b5132774fa2/0_0.png',

      character: {
        id: 'protagoras',
        name: 'Protagoras',
        portrait: 'https://cdn.midjourney.com/cf76bb3e-1d67-4884-8722-369c6947caf4/0_0.png',
        description: 'The most famous Sophist, known for his relativistic views on truth',
      },

      dialogueTree: {
        id: 'node-1',
        speaker: 'protagoras',
        text: 'Welcome, student! I am Protagoras of Abdera, teacher of wisdom. You wish to learn the art of success in our democratic city?',

        responses: [
          {
            id: 'response-truth',
            text: 'I want to learn the truth about things',
            nextNodeId: 'node-2',
          },
          {
            id: 'response-success',
            text: 'I want to learn how to succeed in politics',
            nextNodeId: 'node-3',
          },
          {
            id: 'response-famous-saying',
            text: 'What is your most famous teaching?',
            nextNodeId: 'node-4',
          },
        ],

        allNodes: [
          {
            id: 'node-2',
            speaker: 'protagoras',
            text: 'Ah, "the truth"! But here is my great insight: Man is the measure of all things—of things that are, that they are, and of things that are not, that they are not. What is true for you may not be true for me. Truth is relative to each person\'s perspective.',

            responses: [
              {
                id: 'response-2-to-success',
                text: 'How does this relate to political success?',
                nextNodeId: 'node-3',
              },
              {
                id: 'response-2-continue',
                text: 'Tell me more about this idea',
                nextNodeId: 'node-5',
              },
            ],
          },
          {
            id: 'node-3',
            speaker: 'protagoras',
            text: 'An honest answer! Yes, I can teach you to speak persuasively, to argue both sides of any question, and to sway the assembly to your view. These are the skills that matter in our democracy.',

            responses: [
              {
                id: 'response-3-to-truth',
                text: 'But what about truth? Does that not matter?',
                nextNodeId: 'node-4',
              },
              {
                id: 'response-3-continue',
                text: 'Why are these skills so important?',
                nextNodeId: 'node-5',
              },
            ],
          },
          {
            id: 'node-4',
            speaker: 'protagoras',
            text: 'My most famous saying is this: "Man is the measure of all things." This means that there is no absolute truth independent of human judgment. Each person\'s perceptions and beliefs create their own truth.',
            nextNodeId: 'node-5',
          },
          {
            id: 'node-5',
            speaker: 'protagoras',
            text: 'You see, the old aristocrats claimed that virtue and wisdom were inherited, passed down through noble bloodlines. I say that is nonsense! Any intelligent person can learn to excel through proper education. That is why I charge my fee—I provide valuable knowledge that leads to real success.',

            responses: [
              {
                id: 'response-5-question',
                text: 'But if truth is relative, how can we make judgments?',
                nextNodeId: 'node-6',
                learningPoints: [
                  {
                    id: 'lp-ch2-4-relativism',
                    content: 'Protagoras\'s relativism—the view that truth is relative to each individual—challenged the Greek assumption that there are objective, universal truths about morality and reality.',
                    category: 'literary-context',
                  },
                ],
              },
            ],
          },
          {
            id: 'node-6',
            speaker: 'protagoras',
            text: 'Excellent question! We make judgments based on what is useful, beneficial, and persuasive in our particular context. Some beliefs are better than others—not because they are "more true," but because they lead to better outcomes for individuals and cities.',

            responses: [
              {
                id: 'response-6-democracy',
                text: 'How does this apply to democracy specifically?',
                nextNodeId: 'node-7',
                learningPoints: [
                  {
                    id: 'lp-ch2-4-democracy-fit',
                    content: 'Sophistic relativism aligned well with democratic politics, where citizens voted on policies without claiming access to absolute truth.',
                    category: 'historical-context',
                  },
                ],
              },
            ],
          },
          {
            id: 'node-7',
            speaker: 'protagoras',
            text: 'Precisely! In democracy, we vote on what is just and unjust, beneficial and harmful. We do not discover absolute truth—we create agreement through persuasion and debate. My teaching prepares you for this reality, giving you the tools to succeed in our political system.',
            nextNodeId: 'node-8',
          },
          {
            id: 'node-8',
            speaker: 'protagoras',
            text: 'You are beginning to understand. The wise person recognizes that success comes not from grasping absolute truths, but from mastering the art of persuasion and understanding what works in practice. That is what I teach—and why my students succeed.',
            isEnd: true,
          },
        ],
      },

      learningPoints: [
        {
          id: 'lp-ch2-4-man-measure',
          content: 'Protagoras\'s statement "Man is the measure of all things" became the foundation of philosophical relativism, arguing that truth depends on individual or cultural perspective rather than objective reality.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 5: Decision - Justice Debate
    {
      id: 'chapter-2-scene-5-justice-debate',
      type: 'decision',
      backgroundImage: 'https://cdn.midjourney.com/2d1bd72f-b076-4706-a722-80412a00ce1a/0_0.png',

      prompt: 'Is justice natural or conventional?',
      context: `You attend a debate in the assembly where a Sophist poses a fundamental question that challenges traditional Greek morality.

"Consider," the Sophist argues, "that different cities have different laws. In Athens, democracy is just. In Sparta, oligarchy is just. Among the Persians, monarchy is just. If justice were natural—built into the fabric of reality—wouldn't all people recognize the same just laws?"

The crowd murmurs. This is a revolutionary idea. For centuries, Greeks assumed that justice (dike) was a cosmic principle, not merely human convention.

"Therefore," the Sophist continues, "justice is not physis (nature) but nomos (convention)—simply what each society agrees upon. There is no justice except what we decide justice to be."

Someone in the crowd shouts a troubling implication: "Then justice is simply whatever benefits the powerful! The strong make laws to maintain their advantage!" The Sophist smiles enigmatically, neither confirming nor denying this dark conclusion.

What is your response to this argument?`,

      choices: [
        {
          id: 'choice-conventional',
          text: 'Justice is conventional—different societies create different laws',
          consequence: 'The Sophist nods approvingly. "You understand! If justice is merely convention, then we should focus on what is beneficial rather than worrying about abstract moral absolutes. The wise person recognizes that justice is a tool for social order, not a cosmic truth."',
          learningPoints: [
            {
              id: 'lp-ch2-5-conventionalism',
              content: 'Sophistic conventionalism argued that moral and legal norms are human constructs (nomos) rather than natural facts (physis), varying across cultures and times.',
              category: 'literary-context',
            },
          ],
        },
        {
          id: 'choice-natural',
          text: 'Justice must have some natural basis, even if laws differ',
          consequence: 'An older citizen speaks up: "Yes! Just because cities disagree about specifics doesn\'t mean there is no natural justice. Even the Sophist admits that all societies have some concept of justice—perhaps that universal concept reflects a natural truth, while specific laws are conventional applications." The Sophist smiles enigmatically and moves on to his next argument.',
          learningPoints: [
            {
              id: 'lp-ch2-5-natural-law',
              content: 'Critics of Sophistic conventionalism argued that universal moral intuitions across cultures suggest some natural basis for justice, even if specific laws vary.',
              category: 'literary-context',
            },
          ],
        },
        {
          id: 'choice-beneficial',
          text: 'Justice is whatever benefits the stronger party',
          consequence: 'The Sophist\'s eyes light up. "Ah, you go further than I dared! Some say that justice is nothing but the advantage of the stronger—the powerful create laws to maintain their power. This is a dark view, but perhaps realistic. If there is no natural justice, why not admit that law is simply organized force?" Many in the crowd look troubled by this conclusion.',
          learningPoints: [
            {
              id: 'lp-ch2-5-thrasymachus',
              content: 'The most extreme Sophistic position argued that justice is merely the advantage of the stronger, reducing morality to power politics—a view that would later be challenged by Socrates and Plato.',
              category: 'literary-context',
            },
          ],
        },
      ],

      learningPoints: [],
    },

    // Scene 6: Primary Source Analysis
    {
      id: 'chapter-2-scene-6-primary-source',
      type: 'primary-source',
      backgroundImage: 'https://cdn.midjourney.com/5f7ab3d9-9a9a-4887-927b-88734bbba5c0/0_0.png',

      prompt: 'Analyze this passage from the Sophists on the power of rhetoric',

      source: {
        title: 'Fragment from Gorgias\'s "Encomium of Helen"',
        author: 'Gorgias of Leontini',
        date: 'c. 427 BCE',
        type: 'text',
        content: `Speech is a powerful lord, which by means of the finest and most invisible body effects the divinest works: it can stop fear and banish grief and create joy and nurture pity.

\n\nThe effect of speech upon the condition of the soul is comparable to the power of drugs over the nature of bodies. For just as different drugs dispel different secretions from the body, and some bring an end to disease and others to life, so also in the case of speeches, some distress, others delight, some cause fear, others make the hearers bold, and some drug and bewitch the soul with a kind of evil persuasion.`,
        citation: 'Gorgias, Encomium of Helen, sections 8-14 (adapted translation)',
      },

      questions: [
        {
          id: 'q1',
          question: 'According to Gorgias, how does speech affect the soul?',
          type: 'multiple-choice',
          options: [
            'Speech reveals truth to the soul through logical argument',
            'Speech acts like a drug that can manipulate emotions and beliefs',
            'Speech strengthens the soul through exposure to different viewpoints',
            'Speech has no real power over the soul, only over external behavior',
          ],
          correctAnswer: 'Speech acts like a drug that can manipulate emotions and beliefs',
          explanation: 'Gorgias explicitly compares speech to a drug that can "drug and bewitch the soul." This reveals the Sophistic view that rhetoric is a powerful tool for emotional manipulation, not just rational persuasion.',
        },
        {
          id: 'q2',
          question: 'What does this passage reveal about Gorgias\'s view of rhetoric?',
          type: 'multiple-choice',
          options: [
            'Rhetoric should only be used to discover and communicate truth',
            'Rhetoric is a morally neutral tool that can be used for any purpose',
            'Rhetoric is naturally good because it can stop fear and create joy',
            'Rhetoric should be banned because it is too dangerous',
          ],
          correctAnswer: 'Rhetoric is a morally neutral tool that can be used for any purpose',
          explanation: 'Gorgias describes rhetoric as capable of opposite effects—stopping disease or ending life, creating joy or distress. This suggests he views rhetoric as a powerful tool independent of moral considerations about its use.',
        },
        {
          id: 'q3',
          question: 'Why might Plato and other philosophers find this view of rhetoric troubling?',
          type: 'multiple-choice',
          options: [
            'Because it suggests speech has no real power over people',
            'Because it separates persuasive power from concern for truth or morality',
            'Because it claims that only philosophers can use rhetoric effectively',
            'Because it argues that rhetoric is less important than other skills',
          ],
          correctAnswer: 'Because it separates persuasive power from concern for truth or morality',
          explanation: 'If rhetoric can "drug and bewitch the soul" regardless of truth, then a skilled speaker could persuade people of falsehoods. Philosophers like Plato worried this made rhetoric dangerous when separated from the pursuit of truth and justice.',
        },
      ],

      learningPoints: [
        {
          id: 'lp-ch2-6-rhetoric-power',
          content: 'Gorgias viewed rhetoric as a powerful psychological tool comparable to drugs, capable of manipulating emotions and beliefs independent of truth or morality.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 7: Gorgias Demonstrates Rhetoric
    {
      id: 'chapter-2-scene-7-gorgias-demo',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/f0883ed9-ffc8-4de5-87e0-88b72dc72260/0_0.png',

      content: `You witness a stunning demonstration by Gorgias, the master rhetorician from Sicily.

A crowd gathers as Gorgias takes the stage. "Give me any topic," he announces, "and I will speak on it eloquently, without preparation!" Someone shouts, "Defend Helen of Troy!" In Greek culture, Helen is blamed for causing the Trojan War through her adultery—she is the ultimate example of wickedness.

Without hesitation, Gorgias launches into a brilliant defense. "Helen is blameless!" he argues. "Consider: if the gods fated her actions, how can we blame her? If Paris used physical force, she was a victim. If she was persuaded by his speech, then speech itself is the criminal—and as I have shown, speech is a powerful drug that overpowers the soul. Or if she was compelled by love, that divine madness, she acted under a force stronger than human will. By any account, Helen is innocent!"

The crowd erupts in applause. But Gorgias isn't finished showing off his philosophical prowess. "And let me share with you," he continues, "my views on knowledge itself. I argue this: Nothing exists; and even if it did exist, it could not be known; and even if it could be known, it could not be communicated to others!" The crowd murmurs—this is radical skepticism taken to its extreme.

Later, you overhear Protagoras in conversation. Someone asks him about the gods, and he responds carefully: "Concerning the gods, I cannot know whether they exist or do not exist, nor what form they might have. The matter is obscure, and life is short." This agnosticism earns him suspicious looks from some traditionalists.

You've just witnessed the Sophistic challenge to traditional certainties—they question not only conventional morality but even the possibility of knowledge and the existence of the gods themselves.`,

      learningPoints: [
        {
          id: 'lp-ch2-7-epideictic',
          content: 'Sophists like Gorgias gave epideictic (display) speeches to demonstrate their rhetorical skill by arguing seemingly impossible positions, showcasing rhetoric as a technical art independent of truth.',
          category: 'literary-context',
        },
        {
          id: 'lp-ch2-7-dissoi-logoi',
          content: 'The Sophistic practice of dissoi logoi (double arguments) involved arguing both sides of a question to show that persuasive cases could be made for opposite positions.',
          category: 'literary-context',
        },
        {
          id: 'lp-ch2-7-gorgias-skepticism',
          content: 'Gorgias\'s radical skepticism ("Nothing exists; if it did, it could not be known; if known, it could not be communicated") challenged the very possibility of knowledge and communication.',
          category: 'literary-context',
        },
        {
          id: 'lp-ch2-7-protagoras-agnosticism',
          content: 'Protagoras\'s agnosticism about the gods ("Concerning the gods, I cannot know whether they exist or do not exist") represented a break from traditional Greek piety and contributed to charges of impiety against the Sophists.',
          category: 'historical-context',
        },
      ],
    },

    // Scene 8: Quote Attribution
    {
      id: 'chapter-2-scene-8-quote-attribution',
      type: 'quote-attribution',
      backgroundImage: 'https://cdn.midjourney.com/a68991d3-6d08-4de4-9d5e-47f260478905/0_0.png',

      prompt: 'Match these famous Sophistic claims to their speakers',

      quotes: [
        {
          id: 'quote-1',
          text: 'Man is the measure of all things',
          speaker: 'Protagoras',
          context: 'The foundational claim of philosophical relativism',
          explanation: 'This is Protagoras\'s most famous statement, arguing that truth is relative to individual human judgment rather than existing independently.',
        },
        {
          id: 'quote-2',
          text: 'Nothing exists; if it did exist, it could not be known; if it could be known, it could not be communicated',
          speaker: 'Gorgias',
          context: 'An extreme skeptical argument',
          explanation: 'Gorgias pushed skepticism to its limit, arguing that even if reality exists and could be known, language is inadequate to communicate knowledge accurately.',
        },
        {
          id: 'quote-3',
          text: 'To make the weaker argument appear the stronger',
          speaker: 'Sophistic method (criticized by opponents)',
          context: 'A criticism of Sophistic rhetoric',
          explanation: 'This phrase, often attributed to the Sophists by their critics, captured the fear that rhetoric could make falsehood appear true through clever argumentation.',
        },
        {
          id: 'quote-4',
          text: 'Concerning the gods, I cannot know whether they exist or do not exist',
          speaker: 'Protagoras',
          context: 'Religious agnosticism',
          explanation: 'Protagoras extended his relativism to religion, claiming that the existence of gods is unknowable—a position that got him accused of impiety.',
        },
      ],

      learningPoints: [
        {
          id: 'lp-ch2-8-skepticism',
          content: 'Sophistic skepticism and relativism challenged traditional Greek confidence in human ability to know objective truth about reality, morality, and the gods.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 9: Cause and Effect
    {
      id: 'chapter-2-scene-9-cause-effect',
      type: 'cause-effect',
      backgroundImage: '/Imsie/assets/the-classical-thinkers/backgrounds/sophists.jpg',

      prompt: 'Match each Sophistic argument to its philosophical implication',

      pairs: [
        {
          id: 'pair-1',
          cause: 'Man is the measure of all things (Protagoras)',
          effect: 'Truth is relative to individual or cultural perspective',
          explanation: 'If each person is the measure of truth, then there is no objective truth independent of human judgment—what is true for you may not be true for me.',
        },
        {
          id: 'pair-2',
          cause: 'Justice is nomos (convention) not physis (nature)',
          effect: 'Moral rules are human constructs that vary across cultures',
          explanation: 'If justice is conventional rather than natural, then different societies can have legitimately different moral systems with no objective standard to judge between them.',
        },
        {
          id: 'pair-3',
          cause: 'Rhetoric can make the weaker argument appear stronger',
          effect: 'Persuasiveness is separate from truth',
          explanation: 'If rhetoric can make false positions convincing, then the ability to persuade does not depend on speaking truth—a skilled speaker can argue effectively for any position.',
        },
        {
          id: 'pair-4',
          cause: 'Arete (excellence) can be taught for a fee',
          effect: 'Education rather than birth determines virtue and success',
          explanation: 'By claiming to teach virtue, Sophists challenged aristocratic ideology that excellence was inherited, democratizing access to the skills needed for political success.',
        },
      ],

      learningPoints: [
        {
          id: 'lp-ch2-9-implications',
          content: 'Sophistic arguments had radical implications for Greek thought, challenging assumptions about truth, morality, education, and the basis of political authority.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 10: Transition to Socrates
    {
      id: 'chapter-2-scene-10-transition',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/b24bbd99-a0cb-45b9-a4b0-7721ce31671e/0_0.png',

      content: `As you walk through the agora reflecting on what you've learned, you notice an unusual sight.

Unlike the well-dressed Sophists with their crowds of paying students, a peculiar barefoot man in a simple cloak approaches people seemingly at random. He is not young—perhaps in his fifties—with a snub nose and bulging eyes. Where the Sophists speak with confident authority, this man asks questions.

"Tell me, friend," you hear him say to a pompous politician, "you claim to teach others about justice. But what is justice? Can you define it?"

The politician begins confidently but soon becomes confused and contradictory as the strange questioner probes his answers. Within minutes, the politician storms off in frustration, while bystanders laugh.

Someone whispers to you: "That is Socrates, son of Sophroniscus. He claims to know nothing and charges no fees—the opposite of the Sophists! But somehow, everyone he talks to ends up discovering they know nothing either."

You sense that you've encountered someone very different from the Sophists. Where they claim to teach wisdom, this Socrates claims only to love wisdom—to be a philosopher.

And that, as you will discover, makes all the difference.`,

      learningPoints: [
        {
          id: 'lp-ch2-10-sophist-philosopher',
          content: 'The distinction between Sophists (who claimed to possess and teach wisdom) and philosophers (who claimed to seek wisdom through questioning) became central to Greek thought.',
          category: 'literary-context',
        },
        {
          id: 'lp-ch2-10-socratic-reaction',
          content: 'Socrates developed his philosophical method partly in reaction to the Sophists, seeking truth through dialectical questioning rather than teaching rhetorical techniques.',
          category: 'historical-context',
        },
      ],

      events: {
        onExit: [{
          type: 'quiz',
          componentId: 'quiz-chapter-2',
          condition: { type: 'if-not-completed' },
        }],
      },
    },
  ],

  endQuiz: chapter2Quiz,
};

import type { Chapter } from '../../../types';
import { chapter6Quiz } from '../quizzes/chapter-6-quiz';

export const chapter6: Chapter = {
  id: 'chapter-6-hellenistic',
  title: 'Chapter 6: The Hellenistic Philosophers',
  description: 'Explore the philosophical schools that arose after Alexander the Great—Epicureanism, Stoicism, and Skepticism—and discover their different paths to tranquility.',

  learningObjectives: [
    'Understand the shift in philosophy after Alexander from metaphysics to personal ethics and peace of mind',
    'Analyze the three major Hellenistic schools: Epicureanism, Stoicism, and Skepticism',
    'Compare different philosophical approaches to achieving tranquility (ataraxia) and the good life',
    'Recognize the practical, therapeutic character of Hellenistic philosophy as medicine for the soul',
  ],

  scenes: [
    // Scene 1: Opening narrative - Historical context
    {
      id: 'chapter-6-scene-1-context',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/414ae0a8-cdeb-4fdf-9b9d-356b9df34748/0_0.png',

      content: `The world has changed dramatically since Aristotle's time.

In 323 BCE, Alexander the Great died suddenly at age 32, leaving behind a vast empire stretching from Greece to India. His conquests spread Greek culture across the Mediterranean and Middle East, creating a cosmopolitan, interconnected world—the Hellenistic Age.

But this new world brought uncertainty. The old city-states lost their independence. People became subjects of vast kingdoms rather than citizens of small poleis. Traditional institutions and values seemed less relevant in this sprawling, multicultural empire.

In this age of political instability and personal uncertainty, philosophy took a new direction. Instead of grand questions about the cosmos or the ideal state, philosophers asked more intimate questions: "How should I live? How can I find peace of mind? What is truly under my control?"`,

      learningPoints: [
        {
          id: 'lp-ch6-1-context',
          content: 'The Hellenistic period began with Alexander the Great\'s conquests, creating a cosmopolitan world where traditional city-state identities gave way to vast empires.',
          category: 'historical-context',
        },
        {
          id: 'lp-ch6-1-shift',
          content: 'Hellenistic philosophy shifted focus from grand metaphysical and political questions to personal ethics and achieving tranquility in an uncertain world.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 2: Map exploration - Hellenistic world
    {
      id: 'chapter-6-scene-2-map',
      type: 'map-exploration',
      backgroundImage: 'https://cdn.midjourney.com/acefb0a5-046c-4ec9-b091-946cef30ab6d/0_0.png',
      mapImage: 'https://cdn.midjourney.com/4860c585-a354-4a68-97b9-2f74d0a07e91/0_0.png',

      prompt: 'Explore the Hellenistic world and discover the centers of philosophical activity',

      locations: [
        {
          id: 'location-athens',
          name: 'Athens',
          x: 47,
          y: 58,
          content: `Athens remains the philosophical heart of the Greek world. Though no longer politically dominant, it hosts three major new schools: the Garden of Epicurus, the Painted Stoa where Zeno teaches, and the Academy where Skeptics now debate.

          Philosophers from across the Hellenistic world travel here to study and dispute. The city's reputation for wisdom continues to draw seekers of truth from all corners of the empire.`,
          image: 'https://cdn.midjourney.com/dc79e2b6-1540-43cd-85a6-4ef9a95d92f7/0_0.png',
        },
        {
          id: 'location-alexandria',
          name: 'Alexandria',
          x: 59,
          y: 81,
          content: `Founded by Alexander in Egypt, Alexandria has become the greatest center of learning in the Hellenistic world. Its famous Library houses hundreds of thousands of scrolls, and its Museum attracts scholars from across the empire.

          Here, Greek philosophy mingles with Egyptian wisdom, creating new syntheses. The cosmopolitan atmosphere reflects the age: multiple cultures meeting, mixing, influencing each other.`,
          image: 'https://cdn.midjourney.com/414ae0a8-cdeb-4fdf-9b9d-356b9df34748/0_0.png',
        },
        {
          id: 'location-rhodes',
          name: 'Rhodes',
          x: 65,
          y: 63,
          content: `The island of Rhodes becomes an important center for Stoic philosophy. Its famous Colossus may have fallen in an earthquake, but its philosophical schools thrive.

          Many Roman students travel here to study with Stoic masters. The island's strategic location makes it a crossroads of commerce and ideas.`,
          image: 'https://cdn.midjourney.com/2749dff8-12fd-4800-9a14-80ddc4452366/0_0.png',
        },
        {
          id: 'location-pergamon',
          name: 'Pergamon',
          x: 52,
          y: 53,
          content: `The kingdom of Pergamon in Asia Minor rivals Alexandria in cultural ambition. Its library is second only to Alexandria's, and it hosts philosophical schools competing for students and patrons.

          Here too, the mixture of cultures produces new philosophical questions about identity, tradition, and universal human nature.`,
          image: 'https://cdn.midjourney.com/8b051a03-273d-444a-b9c8-efc6dc1f74f1/0_0.png',
        },
      ],

      requiredLocations: ['location-athens', 'location-alexandria'],

      learningPoints: [
        {
          id: 'lp-ch6-2-geography',
          content: 'The Hellenistic world stretched from Greece to Egypt to Asia Minor, with Athens remaining the philosophical center despite political changes.',
          category: 'historical-context',
        },
        {
          id: 'lp-ch6-2-cosmopolitan',
          content: 'Hellenistic cosmopolitanism—the mixing of Greek, Egyptian, Persian, and other cultures—shaped philosophical questions about universal human nature beyond local traditions.',
          category: 'cultural-context',
        },
      ],
    },

    // Scene 3: Narrative - Introduction to three schools
    {
      id: 'chapter-6-scene-3-schools',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/7933eb30-ae19-424e-9327-7ad1ab9fb459/0_0.png',

      content: `In this uncertain world, three philosophical schools offer competing visions of the good life. Each claims to provide a path to ataraxia—tranquility, peace of mind, freedom from disturbance.

In the Garden, Epicurus teaches that pleasure—properly understood—is the highest good. His followers seek to free people from fear of gods and death through atomistic physics and the cultivation of simple pleasures.

At the Painted Stoa, Zeno and his Stoic students teach that virtue alone is sufficient for happiness. They emphasize accepting fate, controlling what is under your power, and living according to nature and reason.

Meanwhile, the Skeptics argue that we should suspend judgment on all questions we cannot know with certainty. By accepting our ignorance, they claim, we achieve peace of mind.

Let's meet these philosophers and understand their very different approaches to the same fundamental problem: how to live well.`,

      inlineAnnotations: [
        {
          id: 'ataraxia',
          text: 'ataraxia',
          tooltip: {
            title: 'Ataraxia: Tranquility of Mind',
            content: 'Ataraxia (ἀταραξία) literally means "without disturbance" or "unshakeable calm." In Hellenistic philosophy, it became the ultimate goal—a state of serene mental calm free from anxiety, fear, and emotional turmoil. Unlike happiness based on external circumstances, ataraxia is an inner state achievable through philosophical practice and understanding.',
            category: 'vocabulary',
          },
        },
        {
          id: 'zeno-stoic',
          text: 'Zeno',
          tooltip: {
            title: 'Zeno of Citium (Not Zeno of Elea)',
            content: 'This is Zeno of Citium (c. 334-262 BCE), founder of Stoicism, not the earlier Zeno of Elea who studied with Parmenides and created famous paradoxes. Zeno of Citium was a Phoenician merchant who turned to philosophy after a shipwreck, establishing his school at the Painted Stoa in Athens.',
            category: 'historical-context',
          },
        },
      ],

      learningPoints: [
        {
          id: 'lp-ch6-3-ataraxia',
          content: 'Ataraxia (tranquility or peace of mind) was the central goal of all three major Hellenistic schools, though they prescribed different paths to achieve it.',
          category: 'vocabulary',
        },
        {
          id: 'lp-ch6-3-therapy',
          content: 'Hellenistic philosophy was conceived as therapy for the soul—practical medicine for anxiety, fear, and suffering rather than abstract speculation.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 4: Dialogue - Conversation with Epicurus
    {
      id: 'chapter-6-scene-4-epicurus',
      type: 'dialogue',
      backgroundImage: 'https://cdn.midjourney.com/1e935064-abdf-454d-b0dc-82641ba5a21f/0_0.png',

      character: {
        id: 'epicurus',
        name: 'Epicurus',
        portrait: 'https://cdn.midjourney.com/9f928759-0a06-471c-9b8f-97c94c79964c/0_0.png',
        description: 'Founder of Epicureanism, teacher in the Garden',
      },

      dialogueTree: {
        id: 'node-1',
        speaker: 'epicurus',
        text: 'Welcome to my Garden, friend. Here we pursue philosophy not for its own sake, but for happiness. I teach that pleasure is the beginning and end of the blessed life.',

        responses: [
          {
            id: 'response-1',
            text: 'Do you mean we should pursue every pleasure?',
            nextNodeId: 'node-2',
          },
          {
            id: 'response-2',
            text: 'What about the pursuit of virtue and knowledge?',
            nextNodeId: 'node-3',
          },
        ],

        allNodes: [
          {
            id: 'node-2',
            speaker: 'epicurus',
            text: 'Ah, a common misunderstanding! By pleasure I do not mean the pleasures of the profligate—indulgence in food, drink, and bodily pleasures. True pleasure is freedom from bodily pain and mental disturbance. Simple pleasures—bread, water, friendship—suffice.',
            responses: [
              {
                id: 'response-2a',
                text: 'So you seek the absence of pain, not positive pleasure?',
                nextNodeId: 'node-4',
              },
            ],
          },
          {
            id: 'node-3',
            speaker: 'epicurus',
            text: 'We pursue virtue and knowledge because they lead to pleasure! Philosophy frees us from fears that disturb our peace—fear of gods, fear of death. Knowledge of nature shows us that the gods do not interfere in human affairs and that death is merely the dissolution of atoms.',
            responses: [
              {
                id: 'response-3a',
                text: 'So understanding nature is key to happiness?',
                nextNodeId: 'node-4-alt',
              },
            ],
          },
          {
            id: 'node-4',
            speaker: 'epicurus',
            text: 'Precisely! The highest pleasure is ataraxia—tranquility, the absence of disturbance. When we have no pain and no fear, we need nothing more to be happy. This is why simple living brings greater happiness than luxury, which creates dependence and anxiety.',
            responses: [
              {
                id: 'response-4a',
                text: 'But how do we achieve freedom from fear?',
                nextNodeId: 'node-5',
              },
            ],
          },
          {
            id: 'node-4-alt',
            speaker: 'epicurus',
            text: 'Yes! But let me clarify what I mean by pleasure itself. True pleasure is not endless indulgence—it is ataraxia, tranquility. Freedom from bodily pain and mental disturbance. When you understand that simple pleasures—bread, water, friendship—suffice for happiness, you are freed from anxiety about wealth and luxury.',
            responses: [
              {
                id: 'response-4a-alt',
                text: 'Tell me more about how nature frees us from fear',
                nextNodeId: 'node-5',
              },
            ],
          },
          {
            id: 'node-5',
            speaker: 'epicurus',
            text: 'Following Democritus, we teach that reality consists of atoms moving in void. All phenomena—including the soul—are material. When the body dies, the atoms disperse. There is no afterlife, no punishment, no reward. Thus death is nothing to us!',
            responses: [
              {
                id: 'response-5a',
                text: 'So physics provides liberation from fear?',
                nextNodeId: 'node-6',
              },
            ],
          },
          {
            id: 'node-6',
            speaker: 'epicurus',
            text: 'Exactly! And we also teach that the gods, if they exist, are perfectly happy and do not concern themselves with human affairs. This frees us from superstitious fear. Our complete teaching—the tetrapharmakos, our fourfold remedy—says: "Don\'t fear god, don\'t worry about death; what is good is easy to get, and what is terrible is easy to endure."',
            isEnd: true,
          },
        ],
      },

      learningPoints: [
        {
          id: 'lp-ch6-4-pleasure',
          content: 'Epicurean pleasure is not hedonistic indulgence but ataraxia—freedom from pain and disturbance achieved through simple living and philosophical wisdom.',
          category: 'literary-context',
        },
        {
          id: 'lp-ch6-4-atomism',
          content: 'Epicurus adopted Democritus\'s atomism to free people from fear of death and divine punishment by showing that the soul is material and mortal.',
          category: 'literary-context',
        },
        {
          id: 'lp-ch6-4-tetrapharmakos',
          content: 'The Epicurean "fourfold remedy" (tetrapharmakos) addressed the four main sources of anxiety: gods, death, achieving good, and enduring evil.',
          category: 'vocabulary',
        },
      ],
    },

    // Scene 5: Primary source - Epicurus's Letter to Menoeceus
    {
      id: 'chapter-6-scene-5-primary-source',
      type: 'primary-source',
      backgroundImage: 'https://cdn.midjourney.com/24e6cb76-17d8-4a78-bdf7-6c60d2288978/0_0.png',

      prompt: 'Read this excerpt from Epicurus\'s Letter to Menoeceus and answer the questions',

      source: {
        title: 'Letter to Menoeceus',
        author: 'Epicurus',
        date: 'c. 300 BCE',
        type: 'text',
        content: `Become accustomed to the belief that death is nothing to us. For all good and evil consists in sensation, but death is deprivation of sensation. And therefore a right understanding that death is nothing to us makes the mortality of life enjoyable, not because it adds to it an infinite span of time, but because it takes away the craving for immortality.

For there is nothing terrible in life for the man who has truly comprehended that there is nothing terrible in not living. So that the man speaks but idly who says that he fears death not because it will be painful when it comes, but because it is painful in anticipation. For that which gives no trouble when it comes, is but an empty pain in anticipation.

So death, the most terrifying of ills, is nothing to us, since so long as we exist, death is not with us; but when death comes, then we do not exist. It does not then concern either the living or the dead, since for the former it is not, and the latter are no more.`,
        citation: 'Epicurus, Letter to Menoeceus, trans. C. Bailey',
      },

      questions: [
        {
          id: 'q1',
          question: 'What is Epicurus\'s main argument for why we should not fear death?',
          type: 'multiple-choice',
          options: [
            'Death is the gateway to eternal pleasure',
            'Death is so far in the future we need not worry about it',
            'Death is nothing to us because when we exist, death is not present, and when death comes, we do not exist',
            'Death is painful but brief, so we can endure it',
          ],
          correctAnswer: 'Death is nothing to us because when we exist, death is not present, and when death comes, we do not exist',
          explanation: 'Epicurus uses a logical argument: death and consciousness never coincide. While alive, we do not experience death; when dead, we have no experience at all. Therefore death cannot harm us and should not be feared.',
        },
        {
          id: 'q2',
          question: 'According to this passage, what does understanding death properly accomplish?',
          type: 'multiple-choice',
          options: [
            'It makes us desire immortality more strongly',
            'It makes mortal life more enjoyable by removing the craving for immortality',
            'It proves the existence of an afterlife',
            'It shows that death is actually pleasant',
          ],
          correctAnswer: 'It makes mortal life more enjoyable by removing the craving for immortality',
          explanation: 'Epicurus argues that properly understanding death as annihilation does not make life less valuable—instead, it liberates us from anxiety about immortality and allows us to enjoy our finite existence fully.',
        },
        {
          id: 'q3',
          question: 'What does Epicurus say about those who claim to fear death in anticipation?',
          type: 'multiple-choice',
          options: [
            'They are wise to prepare for the pain of dying',
            'They speak idly, because what is not painful when present is only an empty pain in anticipation',
            'They should focus on the afterlife to ease their fears',
            'They need to meditate more on death to overcome fear',
          ],
          correctAnswer: 'They speak idly, because what is not painful when present is only an empty pain in anticipation',
          explanation: 'Epicurus dismisses fear of death as irrational: if death itself is not bad (being the absence of experience), then fearing it in advance is an "empty pain"—unnecessary suffering we create for ourselves.',
        },
      ],

      learningPoints: [
        {
          id: 'lp-ch6-5-death-argument',
          content: 'Epicurus\'s death argument relies on the premise that death is the absence of sensation, and therefore cannot harm us since we do not experience it.',
          category: 'literary-context',
        },
        {
          id: 'lp-ch6-5-anticipation',
          content: 'Epicurus distinguished between genuine present harm and imagined future harm, arguing that much of our suffering comes from unnecessary anticipation of evils that never affect us.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 6: Decision - Which pleasures to pursue
    {
      id: 'chapter-6-scene-6-decision',
      type: 'decision',
      backgroundImage: 'https://cdn.midjourney.com/39ab1e9b-4409-4218-8b1c-3b7e7babb010/0_0.png',

      prompt: 'How would an Epicurean prioritize pleasures?',
      context: `You are now a student in the Garden. Epicurus has explained that not all pleasures are equal. Some lead to lasting tranquility, while others create dependence, anxiety, or future pain.

      Consider these different pleasures and choose which an Epicurean would prioritize most highly.`,

      choices: [
        {
          id: 'choice-luxury',
          text: 'Expensive foods, fine wines, and luxurious possessions',
          consequence: 'Epicurus shakes his head. "Such pleasures create dependence and anxiety. When you need expensive things to be happy, you become enslaved to wealth and circumstance. True pleasure comes from simple things that are always available."',
          learningPoints: [
            {
              id: 'lp-ch6-6-luxury',
              content: 'Epicureans avoided luxury not from asceticism but because dependence on expensive pleasures creates anxiety and enslaves us to circumstances.',
              category: 'literary-context',
            },
          ],
        },
        {
          id: 'choice-friendship',
          text: 'Friendship, philosophical conversation, and simple meals shared with friends',
          consequence: 'Epicurus smiles warmly. "Yes! Friendship is among the greatest pleasures. It requires no wealth, creates no anxiety, and provides both joy and security. Philosophy shared among friends is the highest pleasure—it brings wisdom and tranquility."',
          learningPoints: [
            {
              id: 'lp-ch6-6-friendship',
              content: 'Epicurus considered friendship the highest pleasure—it costs nothing, creates no dependence, and combines joy with philosophical wisdom.',
              category: 'literary-context',
            },
          ],
        },
        {
          id: 'choice-political',
          text: 'Political power, fame, and public honors',
          consequence: 'Epicurus frowns. "Live unknown! Political life brings constant anxiety, competition, and danger. The wise person withdraws from public affairs to cultivate the Garden—a space of peace, friendship, and philosophy."',
          learningPoints: [
            {
              id: 'lp-ch6-6-politics',
              content: 'The Epicurean motto "Live unknown" (lathe biōsas) rejected political ambition as a source of anxiety, advocating withdrawal to private philosophical community.',
              category: 'cultural-context',
            },
          ],
        },
      ],

      learningPoints: [],
    },

    // Scene 7: Narrative - Transition to Stoicism
    {
      id: 'chapter-6-scene-7-stoicism',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/0beb9737-b2a9-4ff0-9f1a-11cf0bafea9a/0_0.png',

      content: `You leave the Garden and walk through Athens to the Stoa Poikilē—the "Painted Stoa," a covered colonnade decorated with murals of Greek victories.

Here, beneath painted scenes of valor and virtue, Zeno of Citium teaches a very different philosophy. Where Epicurus sought tranquility through pleasure and withdrawal, the Stoics seek it through virtue and acceptance.

A crowd has gathered to hear a Stoic teacher. Unlike the intimate Garden, the Stoa is public—anyone can attend these lectures. The Stoics do not withdraw from civic life but embrace it as the arena where virtue is practiced.

The fundamental Stoic claim is radical: "Virtue alone is sufficient for happiness." External circumstances—health, wealth, reputation—are "indifferents." What matters is how you respond to circumstances, not the circumstances themselves.`,

      learningPoints: [
        {
          id: 'lp-ch6-7-stoa',
          content: 'Stoicism takes its name from the Stoa Poikilē (Painted Stoa) in Athens where Zeno taught, emphasizing public philosophical education accessible to all.',
          category: 'historical-context',
        },
        {
          id: 'lp-ch6-7-virtue-sufficient',
          content: 'The central Stoic claim—"virtue alone is sufficient for happiness"—asserted that external circumstances are "indifferents" while moral character is all that matters.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 8: Dialogue - Conversation with a Stoic
    {
      id: 'chapter-6-scene-8-stoic-dialogue',
      type: 'dialogue',
      backgroundImage: 'https://cdn.midjourney.com/6bc795c3-fecf-46d7-a726-aad5d24dc447/0_0.png',

      character: {
        id: 'stoic-teacher',
        name: 'Stoic Teacher',
        portrait: 'https://cdn.midjourney.com/ab1ece94-242b-4acf-88ad-c0fe88590b06/0_0.png',
        description: 'A follower of Zeno, teaching in the Painted Stoa',
      },

      dialogueTree: {
        id: 'node-1',
        speaker: 'stoic-teacher',
        text: 'You have come from the Garden, I see. Let me tell you how Stoicism differs from Epicureanism. We do not seek to avoid pain or pursue pleasure—we seek to live according to nature and reason, accepting whatever fate decrees.',

        responses: [
          {
            id: 'response-1',
            text: 'What do you mean by "living according to nature"?',
            nextNodeId: 'node-2',
          },
          {
            id: 'response-2',
            text: 'How can accepting fate bring happiness?',
            nextNodeId: 'node-3',
          },
        ],

        allNodes: [
          {
            id: 'node-2',
            speaker: 'stoic-teacher',
            text: 'The universe is governed by divine reason—the Logos—which orders all things rationally. Humans are rational beings, fragments of this universal reason. To live according to nature is to exercise reason virtuously, accepting our role in the cosmic order.',
            responses: [
              {
                id: 'response-2a',
                text: 'So we are part of a rational, providential universe?',
                nextNodeId: 'node-4',
              },
            ],
          },
          {
            id: 'node-3',
            speaker: 'stoic-teacher',
            text: 'The universe is governed by divine reason—the Logos—which orders all things rationally. We are fragments of this cosmic reason, and accepting our role in the rational order brings tranquility.',
            responses: [
              {
                id: 'response-3a',
                text: 'How does this lead to happiness?',
                nextNodeId: 'node-5',
              },
            ],
          },
          {
            id: 'node-4',
            speaker: 'stoic-teacher',
            text: 'Yes! The Stoics are pantheists—God and Nature are one, pervading all things. Everything that happens is necessary and rational. Now, the key to tranquility is understanding what is truly in our power.',
            responses: [
              {
                id: 'response-4a',
                text: 'What is in our power?',
                nextNodeId: 'node-6',
              },
            ],
          },
          {
            id: 'node-5',
            speaker: 'stoic-teacher',
            text: 'We distinguish what is "up to us" from what is "not up to us." Your judgments, intentions, and character are up to you. Wealth, health, reputation—these are not up to you. Happiness comes from perfecting what is up to you and accepting what is not.',
            responses: [
              {
                id: 'response-5a',
                text: 'But surely health and wealth matter to happiness?',
                nextNodeId: 'node-7',
              },
            ],
          },
          {
            id: 'node-6',
            speaker: 'stoic-teacher',
            text: 'Your judgments, intentions, and character are up to you. Wealth, health, reputation—these are not up to you. This dichotomy of control is fundamental. Focus on perfecting what you control and accept what you cannot.',
            responses: [
              {
                id: 'response-6a',
                text: 'But surely health and wealth contribute to happiness?',
                nextNodeId: 'node-7',
              },
            ],
          },
          {
            id: 'node-7',
            speaker: 'stoic-teacher',
            text: 'They are "preferred indifferents"—we may prefer health to sickness, wealth to poverty. But they are not essential to happiness. A wise person can be happy even in poverty, illness, or exile, because virtue alone suffices for the good life.',
            nextNodeId: 'node-8',
          },
          {
            id: 'node-8',
            speaker: 'stoic-teacher',
            text: 'This is our path to tranquility. Like Epicurus, we seek ataraxia—but through very different means. We do not withdraw from civic duty or avoid hardship. We embrace our roles, act virtuously, and accept all outcomes with equanimity.',
            isEnd: true,
          },
        ],
      },

      inlineAnnotations: [
        {
          id: 'dichotomy',
          text: 'dichotomy',
          tooltip: {
            title: 'Dichotomy of Control',
            content: 'A dichotomy is a division into two mutually exclusive or contradictory groups. The Stoic "dichotomy of control" divides all things into two categories: what is "up to us" (our judgments, intentions, character) and what is "not up to us" (external circumstances, other people\'s actions, outcomes). This fundamental distinction is the core of Stoic ethics and the key to achieving tranquility.',
            category: 'vocabulary',
          },
        },
      ],

      learningPoints: [
        {
          id: 'lp-ch6-8-logos',
          content: 'Stoics believed in the Logos—divine reason pervading and ordering the universe, with human reason being a fragment of this cosmic rationality.',
          category: 'literary-context',
        },
        {
          id: 'lp-ch6-8-dichotomy',
          content: 'The Stoic dichotomy of control distinguishes what is "up to us" (judgments, character) from what is "not up to us" (external circumstances)—the foundation of tranquility.',
          category: 'literary-context',
        },
        {
          id: 'lp-ch6-8-indifferents',
          content: 'Stoic "preferred indifferents" are things naturally preferred (health, wealth) but not essential to happiness—virtue alone suffices for flourishing.',
          category: 'vocabulary',
        },
      ],
    },

    // Scene 9: Quote attribution - Stoic maxims
    {
      id: 'chapter-6-scene-9-quotes',
      type: 'quote-attribution',
      backgroundImage: 'https://cdn.midjourney.com/a0fae503-774b-40e3-82c4-49a64bce5511/0_0.png',

      prompt: 'Match these Stoic principles to what they teach us to do',

      quotes: [
        {
          id: 'quote-1',
          text: 'What is up to us, what is not up to us',
          speaker: 'Distinguish what you can control from what you cannot',
          context: 'The fundamental Stoic distinction guiding action and acceptance',
          explanation: 'This is the dichotomy of control: we control our judgments and character but not external events. Happiness comes from perfecting what we control and accepting what we cannot.',
        },
        {
          id: 'quote-2',
          text: 'Virtue is the only good',
          speaker: 'Virtue alone brings true happiness',
          context: 'The central claim of Stoic ethics',
          explanation: 'Unlike Aristotle who recognized external goods as contributing to happiness, Stoics insisted that virtue alone is good and vice alone evil. Everything else—health, wealth, reputation—is morally indifferent.',
        },
        {
          id: 'quote-3',
          text: 'Live according to nature',
          speaker: 'Exercise reason and accept your role in the cosmos',
          context: 'The guiding principle of Stoic life',
          explanation: 'Since human nature is rational and part of divine cosmic reason (Logos), living according to nature means exercising reason virtuously and accepting one\'s role in the rational cosmic order.',
        },
        {
          id: 'quote-4',
          text: 'Everything that happens is necessary and rational',
          speaker: 'Accept fate as part of divine reason',
          context: 'The Stoic view of fate and providence',
          explanation: 'Stoics believed in cosmic determinism: everything follows necessarily from divine reason (Logos). What seems bad is part of a larger rational plan. Acceptance of fate brings tranquility.',
        },
      ],

      learningPoints: [
        {
          id: 'lp-ch6-9-maxims',
          content: 'Stoic maxims were practical guides for living—concise reminders to accept what you cannot control and perfect what you can.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 10: Narrative - Introduction to Skepticism
    {
      id: 'chapter-6-scene-10-skepticism',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/75aa2df9-b8cd-41ad-bacc-01c2703d0397/0_0.png',

      content: `There is a third path to tranquility—one that rejects the confident claims of both Epicureans and Stoics.

The Skeptics, following Pyrrho of Elis and later Sextus Empiricus, argue that we cannot know the truth about most philosophical questions. The senses deceive us, reason leads to paradoxes, and philosophers endlessly disagree.

Rather than choosing one dogmatic system over another, Skeptics practice epochē—suspension of judgment. For every argument, there is an equally strong counter-argument. The wise person neither affirms nor denies but remains in a state of neutral inquiry.

Surprisingly, the Skeptics claim that this suspension of judgment brings ataraxia. When you stop trying to attain certain knowledge about what is impossible to know, anxiety vanishes. You follow appearances without believing in them, live by custom without committing to its truth, and achieve peace through non-commitment.

"We do not assert that things are as they appear," the Skeptics say, "only that they appear so to us."`,

      inlineAnnotations: [
        {
          id: 'skeptics',
          text: 'Skeptics',
          tooltip: {
            title: 'Skeptics: The Inquirers',
            content: 'The word "skeptic" comes from the Greek skeptikos (σκεπτικός), meaning "inquirer" or "one who examines." It derives from skeptesthai, "to look, examine, or consider." Ancient Skeptics were not cynical doubters but careful examiners who investigated claims without rushing to judgment. They earned the name by constantly examining arguments from all sides rather than accepting dogmatic positions.',
            category: 'vocabulary',
          },
        },
        {
          id: 'epoche',
          text: 'epochē',
          tooltip: {
            title: 'Epochē: Suspension of Judgment',
            content: 'Epochē (ἐποχή) means "suspension" or "withholding" in Greek. In Skeptical philosophy, it refers to the practice of suspending judgment on any claim that cannot be proven with certainty. Rather than believing or disbelieving, the Skeptic remains neutral, neither affirming nor denying. This suspension is achieved by recognizing equally strong arguments on both sides of any question (equipollence), making judgment impossible—and unnecessary.',
            category: 'vocabulary',
          },
        },
        {
          id: 'equipollent',
          text: 'equipollent',
          tooltip: {
            title: 'Equipollent Arguments',
            content: 'Equipollent means "equal in force or power." In Skeptical philosophy, equipollent arguments are opposing arguments that are equally strong and convincing. For example: "The senses are reliable because they help us survive" vs. "The senses are unreliable because they sometimes deceive us (illusions, dreams)." Since both arguments seem equally valid, the Skeptic suspends judgment rather than choosing one side. This method of balancing arguments was central to achieving epochē (suspension of judgment).',
            category: 'vocabulary',
          },
        },
      ],

      learningPoints: [
        {
          id: 'lp-ch6-10-skepticism',
          content: 'Ancient Skepticism (Pyrrhonism) was not mere doubt but systematic suspension of judgment (epochē) on all questions that cannot be resolved with certainty.',
          category: 'vocabulary',
        },
        {
          id: 'lp-ch6-10-equipollence',
          content: 'Skeptics practiced finding equipollent arguments—equally strong arguments on both sides of any question—leading to suspension rather than belief.',
          category: 'literary-context',
        },
        {
          id: 'lp-ch6-10-ataraxia-skeptical',
          content: 'Skeptical ataraxia came not from achieving truth but from ceasing to pursue impossible certainty—anxiety arises from dogmatic commitment, not from mere appearance.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 11: Cause-effect - Comparing three schools
    {
      id: 'chapter-6-scene-11-comparison',
      type: 'cause-effect',
      backgroundImage: 'https://cdn.midjourney.com/6bfb1e02-1a17-4f6d-b23d-fecb680e08a1/0_0.png',

      prompt: 'Match each philosophical principle to its recommended way of life',

      pairs: [
        {
          id: 'pair-1',
          cause: 'Epicurean principle: Pleasure (as absence of pain) is the highest good',
          effect: 'Live simply, cultivate friendships, withdraw from politics, study nature to overcome fears',
          explanation: 'Epicureans believed understanding nature through atomism freed people from fear of gods and death, while simple living with friends provided lasting pleasure without creating dependence or anxiety.',
        },
        {
          id: 'pair-2',
          cause: 'Stoic principle: Virtue alone is sufficient for happiness',
          effect: 'Accept fate, perfect your character, distinguish what is up to you from what is not, embrace civic duty',
          explanation: 'Stoics focused on controlling one\'s judgments and character (what is up to us) while accepting external circumstances with equanimity, finding happiness in virtue regardless of fortune.',
        },
        {
          id: 'pair-3',
          cause: 'Skeptic principle: Suspend judgment on all uncertain questions',
          effect: 'Follow appearances without belief, live by custom, cease pursuing impossible certainty, accept equipollence of arguments',
          explanation: 'Skeptics achieved tranquility not by finding truth but by ceasing to seek certain answers to unanswerable questions, following practical custom without dogmatic commitment.',
        },
        {
          id: 'pair-4',
          cause: 'All three schools share the goal: Ataraxia (tranquility)',
          effect: 'Each offers a different path—through pleasure, virtue, or suspension of judgment—but all aim at peace of mind',
          explanation: 'Despite their differences, Epicureans, Stoics, and Skeptics all responded to Hellenistic anxiety with therapeutic philosophies aimed at achieving inner peace in an uncertain world.',
        },
      ],

      learningPoints: [
        {
          id: 'lp-ch6-11-comparison',
          content: 'The three major Hellenistic schools differed radically in their principles but shared the goal of ataraxia and the view of philosophy as therapy for the soul.',
          category: 'literary-context',
        },
        {
          id: 'lp-ch6-11-practical',
          content: 'Hellenistic philosophy was intensely practical—each school provided not just theories but ways of life with concrete practices for achieving tranquility.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 12: Final narrative with quiz trigger
    {
      id: 'chapter-6-scene-12-conclusion',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/556f0f75-7a10-40a0-9c99-42e37645072a/0_0.png',

      content: `You have now encountered three very different responses to the challenges of Hellenistic life.

The Epicureans withdrew to the Garden, seeking tranquility through friendship, philosophy, and freedom from fear. Their atomism demystified nature, their ethics demystified pleasure, and their way of life offered a refuge from political turmoil.

The Stoics embraced public life and civic duty, finding happiness through virtue and acceptance of fate. Their cosmopolitan vision saw all humans as fellow citizens of a rational universe, bound by common humanity rather than local tradition.

The Skeptics questioned all dogmas, finding peace not in answers but in the suspension of judgment itself. By accepting uncertainty and following appearance without belief, they too achieved tranquility.

These schools would profoundly influence later philosophy and religion. Stoicism especially would find new life in Rome, shaping emperors and slaves alike with its message of virtue, duty, and acceptance. Skepticism would inspire modern scientific skepticism and epistemology. And Epicureanism, though often misunderstood, would challenge religious orthodoxy with its materialist vision.

The Greek philosophical tradition that began with Thales's question—"What is the fundamental nature of reality?"—has journeyed from cosmology to ethics, from the universe to the self, from grand systems to therapeutic practices. But one more stage of this journey awaits: its transmission to new civilizations and its enduring influence on Western thought.`,

      learningPoints: [
        {
          id: 'lp-ch6-12-influence',
          content: 'Hellenistic philosophy, especially Stoicism, profoundly influenced Roman thought and later Christian ethics with its cosmopolitan ethics and concept of natural law.',
          category: 'literary-context',
        },
        {
          id: 'lp-ch6-12-legacy',
          content: 'The Hellenistic shift from metaphysical speculation to practical ethics established philosophy as therapeutic self-help—a tradition continuing today.',
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

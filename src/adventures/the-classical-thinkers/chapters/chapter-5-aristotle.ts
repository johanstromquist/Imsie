import type { Chapter } from '../../../types';
import { chapter5Quiz } from '../quizzes/chapter-5-quiz';

/**
 * Chapter 5: Aristotle
 *
 * This chapter explores Aristotle's comprehensive philosophical system, including
 * his critique of Plato, empirical approach, theory of four causes, teleology,
 * virtue ethics, logic, and political philosophy.
 */
export const chapter5: Chapter = {
  id: 'chapter-5-aristotle',
  title: 'Chapter 5: Aristotle',
  description: 'Enter Aristotle\'s Lyceum and discover his systematic approach to knowledge. From his critique of Platonic Forms to his empirical studies of nature, his development of formal logic, and his ethical theory of virtue as a mean between extremes.',

  prerequisites: {
    type: 'all',
    chapterIds: ['chapter-4-plato']
  },

  learningObjectives: [
    'Understand Aristotle\'s critique of Plato and his empirical approach to philosophy',
    'Analyze Aristotle\'s four causes and teleological view of nature',
    'Recognize Aristotle\'s virtue ethics and the doctrine of the mean',
    'Examine Aristotle\'s contributions to logic and systematic inquiry',
    'Explore Aristotle\'s political philosophy and classification of constitutions',
  ],

  scenes: [
    // Scene 1: Introduction to Aristotle and the Lyceum
    {
      id: 'chapter-5-scene-1-lyceum',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/7a37d5ec-f679-4993-aec0-ecdbcf3d50f3/0_0.png',
      content: `You approach a grove of trees on the outskirts of Athens, near a temple dedicated to Apollo Lyceus—the Wolf God. This is the Lyceum, founded by Aristotle upon his return to Athens after years abroad.

Unlike Plato's Academy with its mystical air, the Lyceum feels grounded and practical. Students walk the covered pathways—the peripatos—discussing everything from politics to poetry, from biology to ethics. They call themselves the Peripatetics, the "walkers," because Aristotle preferred to teach while strolling.

A middle-aged man with keen, observing eyes approaches you. This is Aristotle, son of a physician, student of Plato for twenty years, and tutor to Alexander the Great. But now he has returned to Athens with his own vision of philosophy—one that looks not to transcendent Forms in the heavens, but to the living world around us.

"Welcome to the Lyceum," he says warmly. "Here we seek knowledge not through abstract contemplation alone, but through observation, classification, and reasoning. Every subject—from the smallest insect to the grandest questions of justice—deserves systematic study. Shall we walk?"`,
      inlineAnnotations: [
        {
          id: 'lyceum-location',
          text: 'Lyceum',
          tooltip: {
            title: 'The Lyceum\'s Name',
            content: 'The Lyceum was named after the nearby temple of Apollo Lyceus. It became one of the most important centers of learning in antiquity, with an extensive library and museum. The word "lyceum" later came to mean any educational institution.',
            category: 'historical-context',
          },
        },
        {
          id: 'peripatetic',
          text: 'Peripatetics',
          tooltip: {
            title: 'Walking While Teaching',
            content: 'The Peripatetic school got its name from the covered walkways (peripatos) where Aristotle taught. The practice of walking while discussing philosophy was thought to aid both physical health and mental clarity.',
            category: 'cultural-context',
          },
        },
      ],
      learningPoints: [
        {
          id: 'lp-ch5-1-lyceum',
          content: 'Aristotle founded the Lyceum to pursue systematic study across all branches of knowledge, emphasizing empirical observation alongside reason.',
          category: 'historical-context',
        },
      ],
    },

    // Scene 2: Dialogue - Aristotle's Critique of Plato
    {
      id: 'chapter-5-scene-2-critique-plato',
      type: 'dialogue',
      backgroundImage: 'https://cdn.midjourney.com/e60b0469-ce35-40db-b67f-1e49e3c53754/0_0.png',
      character: {
        id: 'aristotle',
        name: 'Aristotle',
        portrait: 'https://cdn.midjourney.com/873af8c5-3993-443c-809e-1d7063cab059/0_0.png',
        description: 'The systematic philosopher and empiricist',
      },
      dialogueTree: {
        id: 'node-1',
        speaker: 'aristotle',
        text: 'I loved Plato—he was my teacher for twenty years. But as he himself taught me, we must love truth more than any person. Tell me, have you studied his Theory of Forms?',
        responses: [
          {
            id: 'response-yes-forms',
            text: 'Yes, the idea that perfect Forms exist separately from physical things',
            nextNodeId: 'node-2',
            learningPoints: [
              {
                id: 'lp-ch5-2-forms-separate',
                content: 'Plato\'s Theory of Forms posited that perfect, eternal Forms exist in a separate realm from the imperfect physical world.',
                category: 'literary-context',
              },
            ],
          },
          {
            id: 'response-remind-me',
            text: 'Remind me of the main idea',
            nextNodeId: 'node-3',
          },
        ],
        allNodes: [
          {
            id: 'node-2',
            speaker: 'aristotle',
            text: 'Good! Then you understand the problem: if the Forms are separate from physical things, how can they explain physical things? Does the Form of Tree help us understand this oak tree before us, with its acorns and leaves and roots?',
            responses: [
              {
                id: 'response-yes-explains',
                text: 'Yes, it gives us the perfect template',
                nextNodeId: 'node-4',
              },
              {
                id: 'response-no-separate',
                text: 'No, if they\'re separate, they can\'t explain the physical',
                nextNodeId: 'node-4',
              },
            ],
          },
          {
            id: 'node-3',
            speaker: 'aristotle',
            text: 'Plato believed that physical objects are imperfect copies of perfect Forms existing in a separate realm. The Form of Circle is perfect, while any circle we draw is merely an approximation. Now consider this oak tree before us, with its acorns and leaves and roots. Does the Form of Tree—existing in some separate realm—help us understand this actual tree?',
            responses: [
              {
                id: 'response-forms-help',
                text: 'Yes, the Form provides the perfect template',
                nextNodeId: 'node-4',
              },
              {
                id: 'response-forms-dont-help',
                text: 'No, a separate Form can\'t explain what\'s here',
                nextNodeId: 'node-4',
              },
            ],
          },
          {
            id: 'node-4',
            speaker: 'aristotle',
            text: 'You touch on the heart of the problem! If the Form is separate—in another realm entirely—how does it serve as a template or explanation? It\'s like saying we can build houses by contemplating the Form of House in the heavens, while ignoring the actual bricks and wood before us.',
            nextNodeId: 'node-5',
          },
          {
            id: 'node-5',
            speaker: 'aristotle',
            text: 'Exactly! I propose instead that form and matter are not separate. The form of this oak tree doesn\'t exist in some transcendent realm—it exists right here, in this tree, shaping this matter into an oak rather than a pine. We must study things as they are, not as they supposedly exist elsewhere.',
            isEnd: true,
          },
        ],
      },
      learningPoints: [
        {
          id: 'lp-ch5-2-aristotle-critique',
          content: 'Aristotle critiqued Plato\'s Theory of Forms by arguing that separate, transcendent Forms cannot explain the physical world we experience.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 3: Narrative - Empiricism and Observation
    {
      id: 'chapter-5-scene-3-empiricism',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/3eb61e18-71ef-4350-b8b4-403b3adca48d/0_0.png',
      content: `Aristotle leads you to a table covered with specimens—shells from the sea, pressed flowers, sketches of animals, even a preserved starfish.

"Knowledge begins with the senses," Aristotle explains, picking up the starfish. "Plato would have us contemplate the Form of Starfish in our minds. I say: observe this starfish. Count its arms. Note the pattern of its structure. Dissect it carefully and understand its parts."

He gestures to scrolls covering the table—detailed observations of hundreds of species, classified and organized. "I have studied over five hundred animal species. I have dissected them, observed their behaviors, classified them by their characteristics. Not to find some perfect Form, but to understand the nature that exists."

This is revolutionary. Where other philosophers spin theories from pure reason, Aristotle insists on looking at the world itself.

"Observation, then classification, then explanation," he says. "This is the path to knowledge. We must gather the facts before we theorize. We must study what is before speculating about what might be in some other realm."`,
      inlineAnnotations: [
        {
          id: 'aristotle-biology',
          text: 'five hundred animal species',
          tooltip: {
            title: 'Aristotle the Biologist',
            content: 'Aristotle\'s biological works were groundbreaking. He classified over 500 species, made accurate observations about dolphin anatomy, described the octopus\'s mating habits, and even discovered that the embryo develops gradually (epigenesis) rather than simply growing from a miniature form.',
            category: 'historical-context',
          },
        },
      ],
      learningPoints: [
        {
          id: 'lp-ch5-3-empiricism',
          content: 'Aristotle\'s empiricism emphasized observation and classification of the natural world as the foundation for knowledge, rather than pure abstract reasoning.',
          category: 'literary-context',
        },
        {
          id: 'lp-ch5-3-scientific-method',
          content: 'Aristotle\'s approach of observation, classification, and explanation laid groundwork for the scientific method used today.',
          category: 'historical-context',
        },
      ],
    },

    // Scene 4: Primary Source - Examining Aristotle's Biological Observations
    {
      id: 'chapter-5-scene-4-primary-source',
      type: 'primary-source',
      backgroundImage: 'https://cdn.midjourney.com/82ffda2b-d8b4-48c6-bc97-1e485146c3db/0_0.png',
      prompt: 'Examine this passage from Aristotle\'s Historia Animalium and consider his observational method',
      source: {
        title: 'Historia Animalium (History of Animals)',
        author: 'Aristotle',
        date: 'c. 350 BCE',
        type: 'text',
        content: `The dolphin, the whale, and all the rest of the Cetacea, all, that is to say, that are provided with a blow-hole instead of gills, are viviparous. That is to say, no one of all these fishes is ever seen to be supplied with eggs, but directly with an embryo from whose differentiation comes the fish, just as in the case of mankind and the viviparous quadrupeds.

\n\nThe dolphin bears one at a time generally, but occasionally two. The whale bears one or at the most two, generally one.

\n\nThe porpoise in this respect resembles the dolphin, and, by the way, it is in form like a little dolphin, and is found in the Euxine; it differs, however, from the dolphin as being less in size and broader in the back; its color is leaden-black. Many people are of the opinion that the porpoise is a variety of the dolphin.`,
        citation: 'Historia Animalium, Book VI, translated by D\'Arcy Wentworth Thompson',
      },
      questions: [
        {
          id: 'q1',
          question: 'What observational method does Aristotle demonstrate in this passage?',
          type: 'multiple-choice',
          options: [
            'Pure logical deduction from first principles',
            'Careful observation and classification of shared characteristics',
            'Mathematical calculation and measurement',
            'Mystical contemplation of Forms',
          ],
          correctAnswer: 'Careful observation and classification of shared characteristics',
          explanation: 'Aristotle systematically observes dolphins, whales, and porpoises, noting their shared characteristics (viviparous, blow-holes) and differences (size, color), then classifies them accordingly. This empirical approach contrasts with purely deductive reasoning.',
        },
        {
          id: 'q2',
          question: 'How does this passage illustrate Aristotle\'s break from Plato\'s approach?',
          type: 'multiple-choice',
          options: [
            'It focuses on ideal, perfect specimens rather than imperfect reality',
            'It studies actual living creatures and their physical characteristics rather than abstract Forms',
            'It relies entirely on mathematical reasoning',
            'It accepts traditional opinions without investigation',
          ],
          correctAnswer: 'It studies actual living creatures and their physical characteristics rather than abstract Forms',
          explanation: 'Where Plato would contemplate the ideal Form of Animal, Aristotle dissects actual dolphins, counts their offspring, notes their blow-holes—he studies nature as it exists, not as it might exist in a transcendent realm.',
        },
        {
          id: 'q3',
          question: 'What does Aristotle mean when he says dolphins are "viviparous"?',
          type: 'multiple-choice',
          options: [
            'They have gills instead of lungs',
            'They give birth to live young rather than laying eggs',
            'They are very large creatures',
            'They live in the sea',
          ],
          correctAnswer: 'They give birth to live young rather than laying eggs',
          explanation: 'Viviparous means giving birth to live young. Aristotle correctly observed that dolphins, unlike most fish, do not lay eggs but bear live offspring—a remarkable observation that classified them closer to mammals than to fish.',
        },
      ],
      learningPoints: [
        {
          id: 'lp-ch5-4-observation',
          content: 'Aristotle\'s biological writings demonstrate systematic observation and classification based on empirical evidence rather than abstract theory.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 5: Narrative - Introducing the Four Causes
    {
      id: 'chapter-5-scene-5-four-causes-intro',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/6f5cd9e0-ce57-45f7-8829-62a002542812/0_0.png',
      content: `"To truly understand anything," Aristotle explains, picking up a bronze statue from a nearby table, "we must ask four questions. I call these the four causes—the four ways of explaining why something exists as it does."

He holds up the statue for you to examine. "Consider this statue of Athena. Why does it exist? There are four answers, each revealing a different aspect of explanation."

He taps the statue. "First, the material cause: What is it made of? Bronze. The material is the underlying substance that composes the thing. Without bronze, there would be no statue."

"Second, the formal cause: What form or structure does it have? The shape of Athena—her posture, her features, her proportions. The form is what makes this bronze into this particular statue rather than a formless lump or a different statue entirely."

"Third, the efficient cause: Who or what brought it into being? The sculptor who shaped the bronze, the craftsman who caused the change from raw material to finished work. This is what we usually mean by 'cause'—the agent of change."

He pauses thoughtfully. "And fourth—most important—the final cause: For what purpose was it made? To honor Athena, to inspire piety, to beautify the temple. The telos, the end or goal toward which the making was directed."

"These four causes work together to give us complete understanding. To know a thing fully is to know its matter, its form, its maker, and its purpose. This applies not just to human artifacts, but to everything in nature—every acorn, every animal, every natural change has these four causes."

Aristotle sets down the statue. "Now, let us practice identifying these causes. Only by understanding this framework can we properly explain the world around us."`,
      inlineAnnotations: [
        {
          id: 'four-causes',
          text: 'four causes',
          tooltip: {
            title: 'The Four Causes',
            content: 'Aristotle\'s four causes provide a comprehensive explanatory framework: material (what it\'s made of), formal (its structure), efficient (what made it), and final (its purpose). This framework applies to both artifacts and natural objects.',
            category: 'vocabulary',
          },
        },
      ],
      learningPoints: [
        {
          id: 'lp-ch5-5-intro-causes',
          content: 'Aristotle\'s four causes—material, formal, efficient, and final—provide a comprehensive framework for explaining why anything exists and has the properties it does.',
          category: 'literary-context',
        },
        {
          id: 'lp-ch5-5-complete-explanation',
          content: 'For Aristotle, complete scientific understanding requires grasping all four causes, not just the efficient cause (what we typically call "cause" today).',
          category: 'literary-context',
        },
      ],
    },

    // Scene 6: Cause-Effect - The Four Causes Matching Game
    {
      id: 'chapter-5-scene-6-four-causes-game',
      type: 'cause-effect',
      backgroundImage: 'https://cdn.midjourney.com/6f5cd9e0-ce57-45f7-8829-62a002542812/0_0.png',
      prompt: 'Match each example to its corresponding Aristotelian cause',
      pairs: [
        {
          id: 'pair-1',
          cause: 'Bronze (the material substance)',
          effect: 'Material Cause',
          explanation: 'The material cause is what something is made of—the bronze that constitutes the statue, the wood that makes up the table. It is the underlying matter.',
        },
        {
          id: 'pair-2',
          cause: 'The shape and structure of a statue',
          effect: 'Formal Cause',
          explanation: 'The formal cause is the form or pattern—what makes the bronze into this particular statue rather than a different shape. It is the definition or essence.',
        },
        {
          id: 'pair-3',
          cause: 'The sculptor who makes the statue',
          effect: 'Efficient Cause',
          explanation: 'The efficient cause is the agent that brings about change—the sculptor who shapes the bronze, the builder who constructs the house. It is the source of motion or change.',
        },
        {
          id: 'pair-4',
          cause: 'The purpose of honoring a god',
          effect: 'Final Cause',
          explanation: 'The final cause is the purpose or end (telos)—why the statue was made. For Aristotle, everything in nature has a final cause, a purpose toward which it develops.',
        },
      ],
      distractors: [
        'Accidental Cause',
        'First Cause',
      ],
      learningPoints: [
        {
          id: 'lp-ch5-6-four-causes-practice',
          content: 'Practicing identification of the four causes helps develop Aristotelian habits of explanation and understanding.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 7: Narrative - Teleology
    {
      id: 'chapter-5-scene-7-teleology',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/0206a53b-4fac-4ac5-bb29-2958ef362e76/0_0.png',
      content: `"Everything in nature has a telos—a purpose, an end toward which it develops," Aristotle explains as you walk through a garden.

He points to an acorn. "This acorn is not yet an oak tree, but it has the potential to become one. And that is its telos, its natural end. Given the right conditions—soil, water, sunlight—it will actualize that potential and become what it is meant to be."

This is very different from Plato's world of static, eternal Forms. For Aristotle, nature is dynamic, purposive, developing. Things change not randomly, but toward their natural ends.

"A knife's telos is to cut," he continues. "An eye's telos is to see. A human being's telos is to exercise reason and achieve eudaimonia—flourishing, well-being. Everything has a function, a purpose inherent in its nature."

He pauses at a rose bush. "Even this rose has a telos. Not because some craftsman designed it for a purpose, but because purpose is built into nature itself. The seed contains the rose potentially; the rose is the actualization of that potential."

This teleological view shapes everything in Aristotle's philosophy—his ethics, his politics, even his physics. To understand anything is to understand its purpose, its natural end.`,
      inlineAnnotations: [
        {
          id: 'telos',
          text: 'telos',
          tooltip: {
            title: 'Telos: The Natural End',
            content: 'Telos (Greek: τέλος) means end, purpose, or goal. Aristotle\'s teleological worldview sees nature as purposive—things develop toward their natural ends. This contrasts sharply with modern mechanistic views of nature as purposeless.',
            category: 'vocabulary',
          },
        },
        {
          id: 'eudaimonia',
          text: 'eudaimonia',
          tooltip: {
            title: 'Eudaimonia: Human Flourishing',
            content: 'Eudaimonia (εὐδαιμονία) is often translated as "happiness," but better captures "flourishing" or "living well." For Aristotle, it is the highest human good—the end toward which all human action aims.',
            category: 'vocabulary',
          },
        },
      ],
      learningPoints: [
        {
          id: 'lp-ch5-6-teleology',
          content: 'Aristotle\'s teleology holds that everything in nature has a telos (purpose or natural end) toward which it develops and strives.',
          category: 'literary-context',
        },
        {
          id: 'lp-ch5-6-potentiality-actuality',
          content: 'The concepts of potentiality and actuality explain change: things move from potential states to actual states in fulfilling their telos.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 8: Decision - What is the Telos of Human Beings?
    {
      id: 'chapter-5-scene-8-human-telos',
      type: 'decision',
      backgroundImage: 'https://cdn.midjourney.com/48f2f454-b951-4ba2-8f59-9898a1ec8bb3/0_0.png',
      prompt: 'What is the telos—the natural end or purpose—of a human being?',
      context: `Aristotle turns to you with a challenging question: "If everything has a telos, what is the telos of human beings? What is our natural end, the purpose toward which we should develop?"

He offers several possibilities to consider. Which do you think captures what is most essentially human?`,
      choices: [
        {
          id: 'choice-pleasure',
          text: 'To experience pleasure and avoid pain',
          consequence: 'Aristotle shakes his head. "Pleasure is something we share with animals. What is distinctively human? A pig can experience pleasure. We must look to what makes us uniquely human—our capacity for reason."',
          learningPoints: [],
        },
        {
          id: 'choice-power',
          text: 'To gain power and honor',
          consequence: 'Aristotle considers this. "Power and honor depend on others—they can be taken away. The telos must be something that depends on our own nature, not external circumstances. We must look deeper."',
          learningPoints: [],
        },
        {
          id: 'choice-reason',
          text: 'To exercise reason and achieve eudaimonia (flourishing)',
          consequence: 'Aristotle smiles. "Yes! The function of a human being is what we alone can do—exercise reason excellently. When we develop our rational capacities to their fullest, living virtuously and contemplatively, we achieve eudaimonia—true flourishing."',
          learningPoints: [
            {
              id: 'lp-ch5-7-human-function',
              content: 'Aristotle argued that the human telos is to exercise reason excellently, achieving eudaimonia (flourishing) through virtuous and contemplative living.',
              category: 'literary-context',
            },
          ],
        },
        {
          id: 'choice-survival',
          text: 'To survive and reproduce',
          consequence: 'Aristotle nods. "Survival is important, but we share that with all living things. What makes us distinctively human is our rational capacity. The telos must relate to our unique function—reason."',
          learningPoints: [],
        },
      ],
      learningPoints: [],
    },

    // Scene 9: Dialogue - Virtue Ethics
    {
      id: 'chapter-5-scene-9-virtue-ethics',
      type: 'dialogue',
      backgroundImage: 'https://cdn.midjourney.com/2ee58d40-e970-4e0a-8e9d-a078a3e12dd2/0_0.png',
      character: {
        id: 'aristotle',
        name: 'Aristotle',
        portrait: 'https://cdn.midjourney.com/873af8c5-3993-443c-809e-1d7063cab059/0_0.png',
        description: 'The philosopher of virtue and the mean',
      },
      inlineAnnotations: [
        {
          id: 'eudaimonia-virtue-ethics',
          text: 'eudaimonia',
          tooltip: {
            title: 'Eudaimonia: Human Flourishing',
            content: 'Eudaimonia (εὐδαιμονία) is often translated as "happiness," but better captures "flourishing" or "living well." For Aristotle, it is the highest human good—the end toward which all human action aims.',
            category: 'vocabulary',
          },
        },
        {
          id: 'arete-virtue',
          text: 'arete',
          tooltip: {
            title: 'Arete: Excellence and Virtue',
            content: 'Arete (ἀρετή) means excellence or virtue. For Aristotle, it refers to excellence of character developed through habitual practice. It is not just moral goodness, but the full realization of human capacities.',
            category: 'vocabulary',
          },
        },
        {
          id: 'phronesis-practical-wisdom',
          text: 'phronesis',
          tooltip: {
            title: 'Phronesis: Practical Wisdom',
            content: 'Phronesis (φρόνησις) is practical wisdom—the ability to deliberate well about what is good and advantageous in particular situations. Unlike theoretical wisdom, phronesis guides action and requires experience and good judgment.',
            category: 'vocabulary',
          },
        },
      ],
      dialogueTree: {
        id: 'node-1',
        speaker: 'aristotle',
        text: 'Now we must ask: how do we achieve eudaimonia? The answer is through virtue—arete. But virtue is not simply following rules. It is a state of character developed through habit and practice.',
        responses: [
          {
            id: 'response-what-virtue',
            text: 'What exactly is virtue?',
            nextNodeId: 'node-2',
          },
          {
            id: 'response-how-develop',
            text: 'How do we develop virtue?',
            nextNodeId: 'node-3',
          },
        ],
        allNodes: [
          {
            id: 'node-2',
            speaker: 'aristotle',
            text: 'Virtue is a mean between two extremes—both of which are vices. Take courage: it lies between cowardice (deficiency of confidence) and recklessness (excess of confidence). The virtuous person finds the middle path appropriate to the situation.',
            responses: [
              {
                id: 'response-other-examples',
                text: 'Can you give other examples?',
                nextNodeId: 'node-4',
              },
              {
                id: 'response-how-develop-mean',
                text: 'But how do we develop this virtue?',
                nextNodeId: 'node-3',
              },
            ],
          },
          {
            id: 'node-3',
            speaker: 'aristotle',
            text: 'Through practice and habit! We become virtuous by performing virtuous actions. We become just by doing just acts, temperate by doing temperate acts, brave by doing brave acts. Virtue is not innate—it must be cultivated through repetition until it becomes our character.',
            responses: [
              {
                id: 'response-but-what-virtue',
                text: 'But what is the nature of virtue itself?',
                nextNodeId: 'node-6',
              },
              {
                id: 'response-how-find-mean',
                text: 'How do we know which actions are virtuous?',
                nextNodeId: 'node-5',
              },
            ],
          },
          {
            id: 'node-4',
            speaker: 'aristotle',
            text: 'Of course! Generosity is the mean between stinginess and wastefulness. Truthfulness lies between false modesty and boastfulness. Proper pride is the mean between vanity and servility. In every case, virtue finds the appropriate middle ground.',
            responses: [
              {
                id: 'response-how-develop-after-examples',
                text: 'How do we develop these virtues?',
                nextNodeId: 'node-3',
              },
              {
                id: 'response-how-find-mean-after-examples',
                text: 'How do we find this mean?',
                nextNodeId: 'node-5',
              },
            ],
          },
          {
            id: 'node-5',
            speaker: 'aristotle',
            text: 'The mean is not a mathematical midpoint—it is relative to us, to the situation. For one person in one situation, the mean might differ from another. This is why we need phronesis—practical wisdom—to perceive the right action in each circumstance.',
            isEnd: true,
          },
          {
            id: 'node-6',
            speaker: 'aristotle',
            text: 'Virtue is a mean between two extremes—both of which are vices. Courage lies between cowardice and recklessness. Generosity between stinginess and wastefulness. The virtuous person finds the appropriate middle ground in each situation.',
            nextNodeId: 'node-5',
          },
        ],
      },
      learningPoints: [
        {
          id: 'lp-ch5-8-virtue-mean',
          content: 'Aristotle\'s virtue ethics defines virtue as a mean between two extremes (vices of deficiency and excess), requiring practical wisdom to discern.',
          category: 'literary-context',
        },
        {
          id: 'lp-ch5-8-habit',
          content: 'Virtue is developed through habit and practice—we become virtuous by repeatedly performing virtuous actions until they become our character.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 10: Custom Mini-Game - Virtue Target Practice (Doctrine of the Mean)
    {
      id: 'chapter-5-scene-10-virtue-game',
      type: 'custom-mini-game',
      backgroundImage: 'https://cdn.midjourney.com/2305c4f7-015e-44a3-82f5-3e197bb098c0/0_0.png',
      gameType: 'spectrum',
      config: {
        title: 'Discover Your Aristotelian Character',
        description: 'Reflect honestly on how you approach different aspects of life. Aristotle believed virtue is found in the mean between extremes—not through perfection, but through self-awareness and practice.',
        instructorName: 'Aristotle',
        backgroundImage: 'https://cdn.midjourney.com/2305c4f7-015e-44a3-82f5-3e197bb098c0/0_0.png',

        concepts: [
          {
            id: 'courage',
            label: 'Courage',
            question: 'When facing a significant challenge or risk, you tend to...',
            leftLabel: 'Avoid it entirely',
            middleLabel: 'Face it thoughtfully',
            rightLabel: 'Charge ahead boldly',

            positions: {
              farLeft: {
                name: 'Timid',
                description: 'You consistently avoid challenges and risks',
              },
              left: {
                name: 'Cautious',
                description: 'You prefer safety but will act when necessary',
              },
              center: {
                name: 'Courageous',
                description: 'You face fears when reason demands it',
              },
              right: {
                name: 'Bold',
                description: 'You eagerly embrace challenges',
              },
              farRight: {
                name: 'Reckless',
                description: 'You seek danger without proper consideration',
              },
            },

            feedback: {
              farLeft: {
                summary: 'You show a strong tendency toward timidity.',
                analysis: 'Aristotle would note that while caution has its place, avoiding all challenges prevents growth and achievement. The courageous person feels fear but acts anyway when reason demands it. True courage requires facing the difficulties necessary for a flourishing life.',
                advice: 'Practice facing small fears first. Courage, like all virtues, is a muscle that strengthens with use.',
                relatedConcepts: ['temperance'],
              },
              left: {
                summary: 'You lean toward caution in the face of challenges.',
                analysis: 'You value safety and thoughtful assessment, which shows practical wisdom. However, be careful not to let excessive caution prevent you from pursuing worthy goals that involve legitimate risks.',
                advice: 'Ask yourself: "Is my hesitation based on genuine wisdom, or am I rationalizing fear?" True courage involves discerning which risks are worth taking.',
                relatedConcepts: ['temperance'],
              },
              center: {
                summary: 'You demonstrate balanced courage.',
                analysis: 'You exemplify what Aristotle called the mean: facing challenges with neither excessive fear nor foolish boldness. You assess situations rationally and act courageously when circumstances warrant it, while avoiding unnecessary dangers.',
                advice: 'Continue to cultivate this balance through practice. Remember that the mean may shift depending on context—what is courageous for one person in one situation may not be for another.',
              },
              right: {
                summary: 'You lean toward boldness in approaching challenges.',
                analysis: 'Your readiness to face challenges is admirable and often leads to achievement. However, Aristotle would caution that true courage requires judgment—knowing which battles are worth fighting and which risks serve genuine goods.',
                advice: 'Before acting boldly, pause to ask: "Does this challenge serve a worthy purpose, or am I acting from pride or the thrill of danger?"',
                relatedConcepts: ['temperance'],
              },
              farRight: {
                summary: 'You lean heavily toward recklessness.',
                analysis: 'Your willingness to face danger shows spirit, but true courage requires practical wisdom. Charging into every challenge without thought is not bravery—it fails to properly value your own life and the responsibilities you hold to others.',
                advice: 'Before acting, pause to ask: "What does reason say about this risk?" Courage is not the absence of fear, but the rational management of it.',
                relatedConcepts: ['temperance'],
              },
            },
          },

          {
            id: 'generosity',
            label: 'Generosity',
            question: 'When you have resources (time, money, help) to share, you...',
            leftLabel: 'Keep most for yourself',
            middleLabel: 'Share appropriately',
            rightLabel: 'Give freely to all',

            positions: {
              farLeft: {
                name: 'Stingy',
                description: 'You rarely share resources with others',
              },
              left: {
                name: 'Frugal',
                description: 'You are careful with resources but will share when needed',
              },
              center: {
                name: 'Generous',
                description: 'You share appropriately based on circumstances',
              },
              right: {
                name: 'Liberal',
                description: 'You give readily and often',
              },
              farRight: {
                name: 'Wasteful',
                description: 'You give indiscriminately without regard for consequences',
              },
            },

            feedback: {
              farLeft: {
                summary: 'You tend strongly toward holding onto your resources.',
                analysis: 'Aristotle teaches that true generosity is a mark of good character. While self-preservation matters, hoarding resources prevents you from participating in the networks of reciprocity that bind communities together and make human flourishing possible.',
                advice: 'Start small: share something meaningful with someone who would benefit. Notice how it feels to contribute to another\'s well-being.',
                relatedConcepts: ['courage'],
              },
              left: {
                summary: 'You lean toward careful management of your resources.',
                analysis: 'Your prudence with resources shows practical wisdom. However, be mindful that excessive frugality can prevent the genuine generosity that enriches relationships and communities.',
                advice: 'Consider: are you being truly prudent, or are you rationalizing a reluctance to share? Generosity should be proportionate to your means and the needs of others.',
              },
              center: {
                summary: 'You demonstrate balanced generosity.',
                analysis: 'You embody the Aristotelian mean: sharing resources appropriately based on your means and others\' needs, while maintaining what you need for your own flourishing. This shows both practical wisdom and good character.',
                advice: 'Continue to refine your judgment about when, how much, and with whom to share. The generous person gives gladly, not grudgingly.',
              },
              right: {
                summary: 'You lean toward liberal giving.',
                analysis: 'Your readiness to share is admirable and often brings joy to others. Aristotle would commend your spirit, but caution that true generosity requires wisdom about when giving truly helps versus when it might harm or enable dependency.',
                advice: 'Reflect on whether your giving serves genuine goods. Are you helping others flourish, or merely avoiding the discomfort of saying no?',
                relatedConcepts: ['temperance'],
              },
              farRight: {
                summary: 'You give very freely, perhaps excessively.',
                analysis: 'While your generous spirit is admirable, Aristotle would note that wastefulness—giving without judgment or beyond your means—is not true virtue. It can harm both you and those who receive thoughtless gifts.',
                advice: 'Practice discernment: Does this giving help the recipient truly flourish? Am I maintaining what I need for my own responsibilities? Generosity should be guided by wisdom.',
                relatedConcepts: ['temperance'],
              },
            },
          },

          {
            id: 'temperance',
            label: 'Temperance',
            question: 'When it comes to pleasures (food, drink, entertainment), you...',
            leftLabel: 'Strictly limit yourself',
            middleLabel: 'Enjoy in moderation',
            rightLabel: 'Indulge freely',

            positions: {
              farLeft: {
                name: 'Ascetic',
                description: 'You deny yourself most pleasures',
              },
              left: {
                name: 'Restrained',
                description: 'You are quite disciplined about pleasures',
              },
              center: {
                name: 'Temperate',
                description: 'You enjoy pleasures in healthy moderation',
              },
              right: {
                name: 'Indulgent',
                description: 'You readily pursue pleasures',
              },
              farRight: {
                name: 'Intemperate',
                description: 'You frequently overindulge in pleasures',
              },
            },

            feedback: {
              farLeft: {
                summary: 'You tend toward strict self-denial.',
                analysis: 'Aristotle did not advocate asceticism. While self-control matters, denying all pleasure is not virtue—it may indicate insensibility or a failure to appreciate the good things life offers. The temperate person enjoys pleasures appropriately.',
                advice: 'Consider: which pleasures are truly good and worth enjoying? Virtue involves not just avoiding excess, but also appreciating genuine goods.',
              },
              left: {
                summary: 'You lean toward careful restraint with pleasures.',
                analysis: 'Your discipline shows strength of character. However, ensure your restraint comes from wisdom rather than fear of pleasure itself. The temperate person enjoys good things without being controlled by them.',
                advice: 'Reflect on whether you\'re being truly moderate or unnecessarily austere. Aristotle valued the ability to enjoy life\'s legitimate pleasures.',
                relatedConcepts: ['generosity'],
              },
              center: {
                summary: 'You demonstrate balanced temperance.',
                analysis: 'You exemplify the Aristotelian mean: enjoying life\'s pleasures without being ruled by them. You can partake in food, drink, and entertainment in ways that enhance rather than diminish your flourishing.',
                advice: 'Continue cultivating this balance. The temperate person takes pleasure in moderation itself and doesn\'t feel deprived.',
              },
              right: {
                summary: 'You lean toward ready indulgence in pleasures.',
                analysis: 'Your appreciation of life\'s pleasures is natural, but Aristotle would caution against being ruled by appetite. The intemperate person is controlled by desires rather than reason.',
                advice: 'Before indulging, ask: "Will this pleasure contribute to my flourishing, or am I being controlled by immediate gratification?" True freedom means being able to say no.',
                relatedConcepts: ['courage'],
              },
              farRight: {
                summary: 'You tend strongly toward overindulgence.',
                analysis: 'Aristotle would see this as a serious vice—being enslaved to pleasure prevents the rational self-governance necessary for virtue and happiness. Intemperance often leads to harm to yourself and others.',
                advice: 'Practice delayed gratification. Start by moderating one area of excess. Remember: true happiness (eudaimonia) comes from living well, not just feeling good.',
                relatedConcepts: ['courage'],
              },
            },
          },

          {
            id: 'truthfulness',
            label: 'Truthfulness',
            question: 'When describing your own qualities or achievements, you tend to...',
            leftLabel: 'Downplay them significantly',
            middleLabel: 'Represent them accurately',
            rightLabel: 'Emphasize them strongly',

            positions: {
              farLeft: {
                name: 'Self-Deprecating',
                description: 'You habitually minimize your qualities',
              },
              left: {
                name: 'Modest',
                description: 'You tend to understate your accomplishments',
              },
              center: {
                name: 'Truthful',
                description: 'You represent yourself accurately',
              },
              right: {
                name: 'Self-Promoting',
                description: 'You actively highlight your achievements',
              },
              farRight: {
                name: 'Boastful',
                description: 'You exaggerate your qualities and accomplishments',
              },
            },

            feedback: {
              farLeft: {
                summary: 'You strongly tend to diminish your own qualities.',
                analysis: 'While humility has value, Aristotle would see false modesty as a kind of dishonesty. Habitually downplaying your genuine qualities disrespects both truth and yourself. The virtuous person acknowledges their worth truthfully.',
                advice: 'Practice stating your genuine accomplishments plainly. Truthfulness about yourself is not arrogance—it\'s integrity.',
              },
              left: {
                summary: 'You lean toward understating your qualities.',
                analysis: 'Your modesty may come from admirable humility, but ensure it doesn\'t slide into false modesty. Aristotle valued truthfulness in all things, including honest self-assessment.',
                advice: 'Ask yourself: am I being genuinely modest or dishonestly self-effacing? There\'s virtue in acknowledging your real qualities without pride or shame.',
              },
              center: {
                summary: 'You demonstrate truthful self-representation.',
                analysis: 'You exemplify Aristotelian truthfulness: representing yourself accurately, neither inflating nor diminishing your genuine qualities. This shows both honesty and proper self-respect.',
                advice: 'Continue cultivating this honesty. The truthful person feels no need to impress others or falsely humble themselves.',
              },
              right: {
                summary: 'You lean toward actively promoting yourself.',
                analysis: 'While self-advocacy has its place, Aristotle would caution that excessive self-promotion can shade into exaggeration. Ensure your self-representation remains grounded in truth.',
                advice: 'Before emphasizing your qualities, ask: "Am I being truthful, or am I seeking admiration?" Let your genuine accomplishments speak for themselves.',
              },
              farRight: {
                summary: 'You tend strongly toward boasting.',
                analysis: 'Aristotle would identify this as both dishonest and vain—claiming more than you possess disrespects truth and reveals insecurity. The genuinely excellent person needs not exaggerate.',
                advice: 'Practice honest self-assessment. Your real qualities, acknowledged truthfully, are sufficient. Exaggeration ultimately diminishes rather than enhances respect.',
              },
            },
          },

          {
            id: 'proper-pride',
            label: 'Proper Pride',
            question: 'Regarding your own worth and dignity, you...',
            leftLabel: 'See yourself as lesser',
            middleLabel: 'Have balanced self-respect',
            rightLabel: 'See yourself as superior',

            positions: {
              farLeft: {
                name: 'Servile',
                description: 'You consistently defer to others as your betters',
              },
              left: {
                name: 'Humble',
                description: 'You tend to see others as more worthy',
              },
              center: {
                name: 'Properly Proud',
                description: 'You recognize your worth without arrogance',
              },
              right: {
                name: 'Proud',
                description: 'You tend to view yourself as somewhat superior',
              },
              farRight: {
                name: 'Vain',
                description: 'You consistently see yourself as better than others',
              },
            },

            feedback: {
              farLeft: {
                summary: 'You tend to see yourself as lesser than others.',
                analysis: 'Aristotle called proper pride "the crown of the virtues"—those who possess excellence should recognize it. Servility shows either false humility or genuine failure to develop your potential. Both prevent flourishing.',
                advice: 'Reflect on your genuine worth. You deserve the same dignity and respect you grant others. Develop your potential rather than diminishing yourself.',
                relatedConcepts: ['truthfulness'],
              },
              left: {
                summary: 'You lean toward humility about your worth.',
                analysis: 'While humility can be admirable, excessive deference to others may prevent you from claiming your rightful dignity. Aristotle valued proper self-respect as essential to virtue.',
                advice: 'Ask yourself: am I being genuinely humble or unnecessarily self-effacing? Recognize your worth without either arrogance or false modesty.',
                relatedConcepts: ['truthfulness'],
              },
              center: {
                summary: 'You demonstrate proper pride.',
                analysis: 'You exemplify what Aristotle called "megalopsychia"—proper self-regard. You recognize your worth without arrogance, claim your dignity without demeaning others, and carry yourself with appropriate self-respect.',
                advice: 'Continue to calibrate your self-assessment honestly. The properly proud person knows their worth and acts accordingly, without vanity or servility.',
              },
              right: {
                summary: 'You lean toward viewing yourself as somewhat superior.',
                analysis: 'Confidence in your worth is healthy, but ensure it rests on genuine excellence and doesn\'t slip into unfounded superiority. Aristotle\'s properly proud person is justified in their self-assessment.',
                advice: 'Reflect honestly: is my sense of superiority grounded in real excellence, or in unearned pride? True worth doesn\'t require comparison to others.',
                relatedConcepts: ['truthfulness'],
              },
              farRight: {
                summary: 'You tend strongly toward vanity.',
                analysis: 'Aristotle distinguished proper pride from vain conceit. The vain person claims more worth than they possess, often revealing insecurity rather than genuine excellence. This prevents both truthfulness and real achievement.',
                advice: 'Practice honest self-assessment. Focus on developing genuine excellence rather than claiming unearned superiority. Let your character and accomplishments speak for themselves.',
                relatedConcepts: ['truthfulness'],
              },
            },
          },
        ],

        summaryTemplates: [
          {
            id: 'balanced',
            text: 'You demonstrate remarkable balance across the virtues—a true exemplar of the golden mean. Aristotle would recognize in you someone who has cultivated virtue through practice and reflection. Your character shows the practical wisdom (phronesis) necessary to find the mean in diverse circumstances. Continue to exercise these virtues, for as Aristotle taught, we become virtuous by performing virtuous acts.',
          },
          {
            id: 'extremes',
            text: 'Your profile reveals a character of extremes—strong tendencies toward either excess or deficiency across different virtues. Aristotle reminds us that virtue requires finding the mean, and this applies to all aspects of life. Reflect on what drives you toward these poles. Are these genuine reflections of your character, or habitual reactions? Remember: virtue is developed through practice, and change is possible through deliberate cultivation of better habits.',
          },
          {
            id: 'varied',
            text: 'You show a complex, multifaceted character—balanced in some virtues while tending toward extremes in others. This is entirely natural; as Aristotle taught, virtue is developed through practice, and we all have different strengths and areas for growth. Focus on cultivating balance in those areas where you tend toward excess or deficiency. Practical wisdom requires recognizing where we need development.',
          },
          {
            id: 'deficiency',
            text: 'Your responses suggest a pattern of holding back—showing deficiency more than excess across several virtues. Aristotle would encourage you to practice acting more boldly in pursuit of what is genuinely good. Virtue requires not just avoiding vice, but actively choosing and doing what is excellent. Start with small steps: practice one virtue deliberately and notice how it becomes easier with repetition.',
          },
          {
            id: 'excess',
            text: 'Your responses suggest a pattern of abundance—tending toward excess rather than deficiency across several virtues. Aristotle would remind you that true virtue requires not just action, but measured, rational action guided by practical wisdom. Before acting on strong impulses, pause to consider: what does reason say? What would a person of good judgment do? The mean often requires restraint as much as boldness.',
          },
          {
            id: 'developing',
            text: 'Your profile shows a character in development—some balance, some areas of excess or deficiency. This is the condition of most people, and Aristotle would see it as an opportunity. We are not born virtuous; we become so through practice. Choose one virtue you wish to develop and practice it deliberately. Over time, virtuous action becomes habitual and eventually part of your character. As Aristotle said: we are what we repeatedly do.',
          },
        ],

        resultScreenConfig: {
          showVisualization: false,
          individualFeedbackFirst: true,
          overallSummaryAfter: true,
        },
      },
      learningPoints: [
        {
          id: 'lp-ch5-9-golden-mean',
          content: 'The doctrine of the mean teaches that virtue lies between extremes, requiring judgment and practical wisdom to identify the appropriate response.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 11: Narrative - Aristotle's Library
    {
      id: 'chapter-5-scene-11-library',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/14c4a3cb-9896-4a30-9d82-9389adc46d71/0_0.png',
      content: `Aristotle leads you into a remarkable room—the Lyceum's library, its shelves lined with hundreds of scrolls. Unlike Plato's single, mystical vision, Aristotle has written systematically on nearly every subject imaginable.

He pulls down several scrolls, dust motes dancing in the afternoon light. "My students sometimes joke that I cannot resist organizing everything into categories," he says with a slight smile. "Perhaps they are right. But how else shall we understand the world?"

He unrolls a scroll covered with diagrams of syllogisms. "Here—my logical works, what will later be called the Organon, the 'instrument' of thought. Before we can know anything, we must know how to reason validly. Every science depends on this foundation."

Another scroll reveals sketches of dolphins and diagrams of their internal anatomy. "My biological studies—observations of over five hundred species. My students think me odd for dissecting fish, but how else shall we understand the living world? Plato contemplated the Form of Fish; I cut them open to see how they actually work."

He sets down a thick scroll reverently. "The Metaphysics—first philosophy, the study of being itself. What is substance? What causes motion? What is the divine? These are the deepest questions."

Reaching for another: "The Physics—how nature works, why things change, what purpose drives development. And here," he taps a well-worn scroll, "the Ethics—how should we live? What is virtue? What makes a life worth living?"

Finally, he holds up several scrolls together. "The Politics—how should we organize our communities? What constitutions are best? How do we create cities where humans can flourish? And the Poetics—what makes great tragedy? How does art imitate life?"

He gestures at the shelves. "My teacher Plato wrote beautifully about a single vision of reality. I have written systematically about everything I can observe, measure, classify, and understand. Some call it dry. I call it comprehensive."

"Now," he says, selecting several scrolls, "let me share some key insights from these works. See if you can recognize which areas of study they come from."`,
      inlineAnnotations: [
        {
          id: 'organon',
          text: 'Organon',
          tooltip: {
            title: 'The Organon',
            content: 'Organon means "instrument" or "tool" in Greek. This name was given to Aristotle\'s logical works (Categories, Prior Analytics, Posterior Analytics, Topics, and Sophistical Refutations) because logic is the instrument we use for all other thinking.',
            category: 'vocabulary',
          },
        },
      ],
      learningPoints: [
        {
          id: 'lp-ch5-10-comprehensive',
          content: 'Aristotle wrote systematically on nearly every branch of knowledge—logic, metaphysics, physics, biology, ethics, politics, and poetics.',
          category: 'historical-context',
        },
        {
          id: 'lp-ch5-10-empirical-range',
          content: 'Unlike Plato\'s focus on a unified theory of Forms, Aristotle pursued diverse empirical studies across multiple disciplines.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 12: Quote Attribution - Aristotelian Ideas
    {
      id: 'chapter-5-scene-12-quotes',
      type: 'quote-attribution',
      backgroundImage: 'https://cdn.midjourney.com/14c4a3cb-9896-4a30-9d82-9389adc46d71/0_0.png',
      prompt: 'Match each quote to the area of philosophy it represents',
      quotes: [
        {
          id: 'quote-1',
          text: 'We are what we repeatedly do. Excellence, then, is not an act, but a habit.',
          speaker: 'Ethics (how to live well)',
          context: 'On the development of virtue through repeated action',
          explanation: 'This comes from Aristotle\'s ethical writings about virtue and character. It emphasizes that good character is built through habitually performing good actions.',
        },
        {
          id: 'quote-2',
          text: 'Man is by nature a political animal.',
          speaker: 'Politics (organizing communities)',
          context: 'On human nature and the purpose of community',
          explanation: 'This is from Aristotle\'s political writings, arguing that humans naturally form communities and can only achieve full flourishing in political association with others.',
        },
        {
          id: 'quote-3',
          text: 'All men by nature desire to know.',
          speaker: 'Metaphysics (fundamental reality)',
          context: 'On the natural human drive toward knowledge',
          explanation: 'This famous opening line from the Metaphysics establishes that the desire for knowledge is fundamental to human nature—not just useful, but intrinsically valuable.',
        },
        {
          id: 'quote-4',
          text: 'The whole is greater than the sum of its parts.',
          speaker: 'Metaphysics (fundamental reality)',
          context: 'On the relationship between form and matter',
          explanation: 'This principle from Aristotle\'s metaphysical writings means that when parts are organized according to a form, the resulting whole has properties beyond the individual components.',
        },
        {
          id: 'quote-5',
          text: 'It is the mark of an educated mind to be able to entertain a thought without accepting it.',
          speaker: 'Ethics (how to live well)',
          context: 'On intellectual virtue and open-mindedness',
          explanation: 'From Aristotle\'s ethical works, this emphasizes intellectual virtue—the ability to consider different perspectives rationally without being dogmatic or close-minded.',
        },
      ],
      learningPoints: [
        {
          id: 'lp-ch5-11-key-ideas',
          content: 'Aristotle\'s most influential ideas span ethics (virtue through habit), politics (humans as social beings), and metaphysics (the drive to understand reality).',
          category: 'literary-context',
        },
      ],
    },

    // Scene 13: Narrative - Logic and the Syllogism
    {
      id: 'chapter-5-scene-13-logic',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/0c51f397-1282-4c4f-bd61-23d464415604/0_0.png',
      content: `Aristotle leads you to a quiet corner of the Lyceum where several students are engaged in debate. He holds up his hand for silence.

"Before we can know truth, we must know how to reason validly," he says. "I have systematized the rules of logic—the tool we use to move from what we know to what we can infer."

He draws in the dirt: "All men are mortal. Socrates is a man. Therefore, Socrates is mortal."

"This is a syllogism—a form of deductive reasoning. If the premises are true and the form is valid, the conclusion must be true. The syllogism gives us certainty."

He draws another: "All Greeks are human. All Athenians are Greeks. Therefore, all Athenians are human."

"Notice the structure: two premises leading to a necessary conclusion. This is the foundation of demonstrative science—knowledge that proceeds from first principles through valid reasoning."

One student objects: "But master, how do we know the first principles?"

Aristotle smiles. "An excellent question! We cannot prove first principles through syllogism—that would be circular. Instead, we arrive at them through induction and nous—intuitive insight gained from experience. Logic builds the edifice of knowledge, but observation lays the foundation."`,
      inlineAnnotations: [
        {
          id: 'syllogism',
          text: 'syllogism',
          tooltip: {
            title: 'The Syllogism',
            content: 'A syllogism is a form of logical argument with two premises and a conclusion. Aristotle systematized syllogistic logic in his Prior Analytics, creating the first formal system of logic in the Western tradition.',
            category: 'vocabulary',
          },
        },
        {
          id: 'nous',
          text: 'nous',
          tooltip: {
            title: 'Nous: Intuitive Reason',
            content: 'Nous (νοῦς) means mind or intellect, specifically the faculty that grasps first principles. For Aristotle, nous is the intuitive understanding that comes from experience and reflection, allowing us to see self-evident truths.',
            category: 'vocabulary',
          },
        },
      ],
      learningPoints: [
        {
          id: 'lp-ch5-11-logic',
          content: 'Aristotle invented formal logic, systematizing syllogistic reasoning as a method for deriving certain conclusions from true premises.',
          category: 'historical-context',
        },
        {
          id: 'lp-ch5-11-demonstration',
          content: 'Demonstrative science proceeds from self-evident first principles through valid logical reasoning to necessary conclusions.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 14: Anachronism - Medieval Manuscript
    {
      id: 'chapter-5-scene-14-anachronism',
      type: 'anachronism',
      backgroundImage: 'https://cdn.midjourney.com/61ba01d8-59c3-4463-b133-3cdc23b45ba3/0_0.png',
      prompt: 'Identify which ideas in this medieval manuscript are NOT from Aristotle',
      scenario: 'You are examining a medieval manuscript titled "The Philosophy of Aristotle." However, some later ideas from different philosophers and time periods have been incorrectly attributed to him. Some concepts here are genuinely from Aristotle (4th century BCE), while others are from later thinkers like St. Anselm (11th century CE) and Immanuel Kant (18th century CE), or from Aristotle\'s teacher Plato. Can you identify which ideas are anachronistic—concepts that could not have been Aristotle\'s?',
      items: [
        {
          id: 'item-1',
          name: 'The Four Causes',
          description: 'Material, formal, efficient, and final causes explain why things are as they are',
          image: 'https://cdn.midjourney.com/d70aea81-ebc3-49bd-916c-23d3cc4858a5/0_0.png',
          explanation: 'Correct! The four causes are genuinely Aristotelian, developed in his Physics and Metaphysics.',
        },
        {
          id: 'item-2',
          name: 'The Doctrine of the Mean',
          description: 'Virtue is a mean between two extremes of deficiency and excess',
          image: 'https://cdn.midjourney.com/60c5d11a-e31b-4772-8dfa-0e1b059755c4/0_0.png',
          explanation: 'Correct! The doctrine of the mean is central to Aristotle\'s Nicomachean Ethics.',
        },
        {
          id: 'item-3',
          name: 'The Proof of God through Ontological Argument',
          description: 'God must exist because existence is part of the definition of a perfect being',
          image: 'https://cdn.midjourney.com/4393d2da-ccc6-4f7f-bf39-e1cf05fd0bfc/0_0.png',
          explanation: 'Anachronism! The ontological argument was developed by St. Anselm in the 11th century CE, over 1,300 years after Aristotle.',
        },
        {
          id: 'item-4',
          name: 'The Theory of Forms',
          description: 'Perfect, eternal Forms exist in a separate transcendent realm',
          image: 'https://cdn.midjourney.com/cf87f507-4e62-49b4-88c3-db687fa73789/0_0.png',
          explanation: 'Anachronism! This is Plato\'s theory, which Aristotle explicitly rejected. Aristotle argued that form exists in matter, not separately.',
        },
        {
          id: 'item-5',
          name: 'Teleology',
          description: 'Everything in nature has a telos (purpose or natural end)',
          image: 'https://cdn.midjourney.com/e7cd1de0-48cb-4d5d-b281-1c7a9f806cd4/0_0.png',
          explanation: 'Correct! Teleology is fundamental to Aristotle\'s understanding of nature and causation.',
        },
        {
          id: 'item-6',
          name: 'Categorical Imperative',
          description: 'Act only according to maxims you could will to be universal laws',
          image: 'https://cdn.midjourney.com/a3e58b66-95e4-4367-897f-cdd11552bef9/0_0.png',
          explanation: 'Anachronism! The categorical imperative is Immanuel Kant\'s ethical principle from the 18th century, over 2,000 years after Aristotle.',
        },
        {
          id: 'item-7',
          name: 'The Golden Mean',
          description: 'Virtue lies in finding the appropriate middle course between extremes',
          image: 'https://cdn.midjourney.com/d0febc05-daeb-457f-85e1-4e4fb09dc095/0_0.png',
          explanation: 'Correct! The Golden Mean is another name for Aristotle\'s doctrine of the mean in ethics.',
        },
        {
          id: 'item-8',
          name: 'Syllogistic Logic',
          description: 'Valid reasoning proceeds from premises to necessary conclusions',
          image: 'https://cdn.midjourney.com/616274cc-8c22-4764-88c6-eb23f5ed1001/0_0.png',
          explanation: 'Correct! Aristotle systematized syllogistic logic in his Organon, the foundation of formal logic.',
        },
      ],
      correctAnswers: ['item-3', 'item-4', 'item-6'],
      learningPoints: [
        {
          id: 'lp-ch5-12-aristotle-legacy',
          content: 'Aristotle\'s philosophy was so influential that later thinkers sometimes attributed their own ideas to him, especially in medieval times.',
          category: 'historical-context',
        },
        {
          id: 'lp-ch5-12-distinguish',
          content: 'It\'s important to distinguish Aristotle\'s actual views from later interpretations and from ideas he explicitly rejected, like Plato\'s Forms.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 15: Map Exploration - Political Constitutions
    {
      id: 'chapter-5-scene-15-constitutions',
      type: 'map-exploration',
      backgroundImage: 'https://cdn.midjourney.com/f0ff351f-4bcc-4a19-96cc-4e6a30d7e708/0_0.png',
      mapImage: 'https://cdn.midjourney.com/f0ff351f-4bcc-4a19-96cc-4e6a30d7e708/0_0.png',
      prompt: 'Explore Aristotle\'s classification of political constitutions',
      locations: [
        {
          id: 'location-monarchy',
          name: 'Monarchy',
          x: 30,
          y: 25,
          image: 'https://cdn.midjourney.com/6994c3ed-e5b6-44a7-8b12-a57556668994/0_0.png',
          content: `Monarchy is rule by one person for the common good. The monarch uses power virtuously, governing according to law and seeking the welfare of all citizens.

Aristotle considered this a legitimate constitution when the ruler is truly excellent and wise. However, it easily degenerates into tyranny when the ruler seeks personal benefit rather than the common good.`,
        },
        {
          id: 'location-tyranny',
          name: 'Tyranny',
          x: 30,
          y: 65,
          image: 'https://cdn.midjourney.com/2a28bda4-d6bd-4d58-94e9-8a13d6ad81e6/0_0.png',
          content: `Tyranny is the corruption of monarchy—rule by one person for personal benefit rather than the common good. The tyrant governs without law, using force and fear.

Aristotle considered tyranny the worst form of government because it concentrates power in one person who uses it selfishly, treating citizens as means to personal ends.`,
        },
        {
          id: 'location-aristocracy',
          name: 'Aristocracy',
          x: 50,
          y: 25,
          image: 'https://cdn.midjourney.com/cae24045-5fee-4c55-95e0-f292367e0707/0_0.png',
          content: `Aristocracy (literally "rule by the best") is government by a virtuous minority for the common good. The aristoi—the excellent few—govern according to virtue and wisdom.

When genuinely virtuous people rule for everyone's benefit, this can be an excellent constitution. But it risks degenerating into oligarchy when the wealthy rule for their own benefit.`,
        },
        {
          id: 'location-oligarchy',
          name: 'Oligarchy',
          x: 50,
          y: 65,
          image: 'https://cdn.midjourney.com/4c18b4d1-0565-4fd3-a091-c71c20c1a5ef/0_0.png',
          content: `Oligarchy is rule by the wealthy few for their own benefit. It is the corruption of aristocracy—instead of virtue determining who rules, wealth does, and they govern for themselves.

Aristotle observed that oligarchs often exploit the poor majority, creating class conflict and instability.`,
        },
        {
          id: 'location-polity',
          name: 'Polity',
          x: 70,
          y: 25,
          image: 'https://cdn.midjourney.com/980d1adf-47d2-40fe-b3f1-d29776404811/0_0.png',
          content: `Polity is constitutional government by the many for the common good. It combines democratic participation with constitutional limits and the rule of law.

Aristotle favored polity as the most stable and practical constitution for most cities. It balances the interests of different classes and is less prone to extremism than pure democracy or oligarchy.`,
        },
        {
          id: 'location-democracy',
          name: 'Democracy',
          x: 70,
          y: 65,
          image: 'https://cdn.midjourney.com/bbb74f4c-5ffc-4a3d-86a9-1ac529714b20/0_0.png',
          content: `Democracy, in Aristotle's classification, is rule by the poor majority for their own benefit. It is the corruption of polity—mob rule without constitutional restraints.

Aristotle worried that democracies could become tyrannical, with the majority oppressing the wealthy minority and ruling by decree rather than law. However, he considered it the least bad of the corrupt forms.`,
        },
      ],
      requiredLocations: ['location-monarchy', 'location-aristocracy', 'location-polity'],
      learningPoints: [
        {
          id: 'lp-ch5-13-constitutions',
          content: 'Aristotle classified constitutions by who rules (one, few, many) and for whose benefit (common good or rulers\' benefit), creating six types.',
          category: 'literary-context',
        },
        {
          id: 'lp-ch5-13-polity',
          content: 'Aristotle favored polity—constitutional government by the many for the common good—as the most stable and practical constitution.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 16: Final Narrative with Quiz Trigger
    {
      id: 'chapter-5-scene-16-conclusion',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/a05906e4-4da3-43a6-bd59-7efb6faa83ed/0_0.png',
      content: `As the sun sets over the Lyceum, Aristotle pauses in the garden, reflecting on the day's discussions.

"You have seen now the foundations of my philosophy," he says. "Unlike my teacher Plato, I believe we must study the world as it is—observing nature, classifying species, understanding causes and purposes."

"Everything has a telos, a natural end toward which it develops. For humans, that telos is eudaimonia—flourishing through the exercise of reason and virtue. We achieve this not through contemplating transcendent Forms, but through habitually choosing the mean, developing practical wisdom, and living in political community."

"Logic gives us the tool of valid reasoning. The four causes give us the framework for explanation. Virtue ethics gives us guidance for living well. Political science helps us create communities where humans can flourish."

He smiles. "Some say I am too systematic, too comprehensive, trying to organize all of knowledge. But how else shall we understand this magnificent, complex, purposive world? Every subject deserves careful study—from the stars above to the smallest creatures beneath our feet."

A student approaches with a question about biology, another about ethics. Aristotle welcomes them both. Here at the Lyceum, all knowledge is connected, all inquiry is valuable, and careful reasoning illuminates every subject.

Tomorrow, Aristotle will continue his work, observing, classifying, reasoning, teaching. For the love of knowledge is not just Plato's realm—it belongs to anyone willing to look carefully at the world and think clearly about what they see.`,
      learningPoints: [
        {
          id: 'lp-ch5-15-synthesis',
          content: 'Aristotle created a comprehensive philosophical system addressing logic, metaphysics, natural science, ethics, and politics—all grounded in empirical observation and systematic reasoning.',
          category: 'literary-context',
        },
        {
          id: 'lp-ch5-15-legacy',
          content: 'Aristotle\'s influence on Western thought is immeasurable—his logic dominated for 2,000 years, and his systematic approach shaped the development of science.',
          category: 'historical-context',
        },
      ],
      events: {
        onExit: [{
          type: 'quiz',
          componentId: 'quiz-chapter-5',
          condition: { type: 'if-not-completed' },
        }],
      },
    },
  ],

  endQuiz: chapter5Quiz,
};

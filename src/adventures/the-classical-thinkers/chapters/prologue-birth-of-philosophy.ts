import type { Chapter } from '../../../types';
import { prologueQuiz } from '../quizzes/prologue-quiz';

export const prologue: Chapter = {
  id: 'prologue-birth-of-philosophy',
  title: 'Prologue: The Birth of Philosophy',
  description: 'Journey to 6th century BCE Greece and witness the revolutionary shift from mythological explanations to rational inquiry that gave birth to Western philosophy.',

  learningObjectives: [
    'Understand the historical and cultural conditions in ancient Greece that enabled philosophy to emerge',
    'Identify the key differences between mythological thinking (mythos) and rational inquiry (logos)',
    'Recognize the fundamental questions that drove early Greek philosophical investigation',
    'Explore how trade, literacy, and political debate fostered critical thinking in the Greek world',
  ],

  scenes: [
    // Scene 1: Introduction - Arrival in 6th Century BCE Greece
    {
      id: 'prologue-scene-1-arrival',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/4d49a95c-a76c-4fa2-9e1f-acd7f3779b50/0_0.png',

      content: `You stand on a hillside overlooking the Aegean Sea, watching the sun rise over a world on the brink of transformation. The year is 585 BCE, and you have arrived in ancient Greece during one of the most remarkable periods in human history.

Below you, the coastal cities of Ionia bustle with activity. Ships from distant lands fill the harbors, carrying not just goods but ideas—stories, customs, and ways of thinking from Egypt, Persia, Babylon, and beyond. The air hums with possibility.

What you are about to witness is nothing less than the birth of philosophy itself. For the first time in human history, people are beginning to ask questions about the world not in terms of gods and myths, but through reason and observation. They seek natural explanations for natural phenomena. They demand evidence and logic rather than accepting tradition blindly.

This shift—from mythos to logos, from myth to reason—will change everything. It will give birth to science, mathematics, ethics, politics, and all the disciplines we now take for granted. You are here at the very beginning.`,

      learningPoints: [
        {
          id: 'lp-prologue-1-setting',
          content: 'Philosophy emerged in 6th century BCE Greece, particularly in the prosperous coastal region of Ionia where Greek culture met diverse foreign influences.',
          category: 'historical-context',
        },
        {
          id: 'lp-prologue-1-transformation',
          content: 'The birth of philosophy represents a fundamental shift in human thinking from mythological explanations to rational inquiry based on observation and logic.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 2: Map Exploration - Explore the Greek World
    {
      id: 'prologue-scene-2-map',
      type: 'map-exploration',
      backgroundImage: 'https://cdn.midjourney.com/0fe492b9-301f-45c9-84aa-7bef9bbb160d/0_0.png',
      mapImage: 'https://cdn.midjourney.com/0fe492b9-301f-45c9-84aa-7bef9bbb160d/0_0.png',

      prompt: 'Explore the Greek world to discover the key centers where philosophy would flourish',

      locations: [
        {
          id: 'location-ionia',
          name: 'Ionia',
          x: 57,
          y: 56,
          image: 'https://cdn.midjourney.com/54d224bf-a83d-4749-9fbb-3134e8d01b1f/0_0.png',
          content: `The wealthy coastal cities of Ionia—Miletus, Ephesus, Colophon—are where philosophy begins. Here, Greek colonists have grown rich from trade, connecting East and West.

This prosperity creates leisure time for intellectual pursuits. Citizens can afford to wonder about the world rather than merely survive in it. The constant flow of foreign merchants brings diverse perspectives that challenge traditional Greek assumptions.

It is no accident that the first philosophers—Thales, Anaximander, Heraclitus—all come from these Ionian cities. Cosmopolitan environments breed questioning minds.`,
        },
        {
          id: 'location-athens',
          name: 'Athens',
          x: 46,
          y: 61,
          image: 'https://cdn.midjourney.com/a6079a3f-7e1c-460d-a90b-e55f831a3354/0_0.png',
          content: `Athens will become the heart of Greek philosophy, but in 585 BCE it is still developing. What makes Athens special is its emerging democratic culture—citizens gather in the agora to debate laws and policies.

This practice of public argument and persuasion creates a culture that values reasoning and evidence. If you can convince others through logic rather than force, you gain power. This political environment will later attract philosophers like Socrates, Plato, and Aristotle.

Democracy and philosophy grow together, both requiring citizens to think critically and defend their positions with reason.`,
        },
        {
          id: 'location-southern-italy',
          name: 'Southern Italy',
          x: 16,
          y: 62,
          image: 'https://cdn.midjourney.com/b65669d6-18fa-49ff-8a17-f3143532f915/0_0.png',
          content: `The Greek colonies in southern Italy and Sicily will produce important philosophical schools. Here, Pythagoras will establish his mystical-mathematical community. Later, Parmenides and Zeno will develop radical ideas about reality and change.

These western colonies enjoy the same benefits as Ionia: prosperity from trade, distance from traditional religious centers, and contact with diverse cultures. Geography matters—philosophy flourishes at crossroads, not in isolated villages.`,
        },
      ],

      requiredLocations: ['location-ionia', 'location-athens'],

      learningPoints: [
        {
          id: 'lp-prologue-2-geography',
          content: 'Philosophy emerged in cosmopolitan trading centers where Greek culture encountered diverse foreign influences, not in isolated traditional communities.',
          category: 'historical-context',
        },
        {
          id: 'lp-prologue-2-conditions',
          content: 'The conditions enabling philosophy included economic prosperity (leisure for inquiry), political debate (practice in reasoning), and cultural diversity (exposure to alternative worldviews).',
          category: 'historical-context',
        },
      ],
    },

    // Scene 3: The World of Myth and Homer's Influence
    {
      id: 'prologue-scene-3-myth',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/4e5f3fe3-5e2c-48ad-8d93-1d6ce46a034a/0_0.png',

      content: `To understand what philosophy replaces, you must first understand the world of myth that dominated Greek thinking for centuries.

When a Greek farmer sees lightning split the sky, he knows Zeus is angry. When crops fail, Demeter must be mourning her daughter. When a plague strikes, Apollo's wrath needs appeasing through sacrifice. Every natural phenomenon has a divine explanation—the gods' emotions, conflicts, and desires shape reality itself.

The poet Homer's epics, the Iliad and Odyssey, reinforce this worldview. These stories, memorized and recited throughout Greece, present a universe where gods intervene constantly in human affairs, where fate is inscrutable, and where the proper response to misfortune is pious acceptance or ritual appeasement.

This mythological thinking (mythos) provides comfort and meaning. It explains the inexplicable, connects communities through shared stories, and offers rituals to cope with uncertainty. For thousands of years, it has been enough.

But something is changing. Some Greeks are beginning to ask: What if we could understand storms without Zeus? What if there were natural patterns we could discover? What if we could explain the world without constantly invoking divine caprice?`,

      learningPoints: [
        {
          id: 'lp-prologue-3-mythos',
          content: 'Mythological thinking (mythos) explained natural phenomena through divine agency—gods\' emotions and actions were seen as the causes of events in the natural world.',
          category: 'literary-context',
        },
        {
          id: 'lp-prologue-3-homer',
          content: 'Homer\'s epics reinforced traditional mythological worldviews by presenting a universe where divine intervention was constant and fate was beyond human understanding.',
          category: 'cultural-context',
        },
      ],
    },

    // Scene 4: Decision - Traditional Explanation vs. Rational Inquiry
    {
      id: 'prologue-scene-4-decision',
      type: 'decision',
      backgroundImage: 'https://cdn.midjourney.com/f6d35241-d82f-46ec-a074-42289ababfb6/0_0.png',

      prompt: 'How would you explain this natural phenomenon?',
      context: `You are in the marketplace of Miletus when a powerful earthquake shakes the ground. Buildings crack, pottery shatters, and people cry out in fear. As the tremors subside, citizens gather to make sense of what happened.

An elderly priest steps forward: "Poseidon, god of earthquakes, is displeased! We must offer greater sacrifices to appease his anger."

A younger man, a merchant who has traveled widely, speaks up: "I have seen earthquakes in many lands. They often occur near the sea or mountains. Perhaps there is a pattern we could discover—a natural cause rather than divine whim."

The crowd debates these two explanations. Which approach makes more sense to you?`,

      choices: [
        {
          id: 'choice-divine',
          text: 'Accept the traditional explanation: Poseidon caused the earthquake through his divine power',
          consequence: 'The priest nods approvingly. "Yes, we must return to proper piety and respect for the gods. Our ancestors understood these truths." The crowd begins organizing sacrificial offerings.',
          learningPoints: [
            {
              id: 'lp-prologue-4a-tradition',
              content: 'Traditional mythological explanations attributed natural phenomena to divine agency, requiring ritual responses like sacrifices rather than investigation.',
              category: 'cultural-context',
            },
          ],
        },
        {
          id: 'choice-natural',
          text: 'Consider the natural explanation: Look for observable patterns and causes',
          consequence: 'The merchant smiles. "Exactly! If we observe where earthquakes occur, when they happen, what precedes them—we might discover natural laws that govern such events. Understanding need not diminish wonder."',
          learningPoints: [
            {
              id: 'lp-prologue-4b-logos',
              content: 'The shift to rational inquiry (logos) involved seeking natural patterns and causes through observation rather than immediately invoking divine explanation.',
              category: 'literary-context',
            },
          ],
        },
        {
          id: 'choice-both',
          text: 'Accept both: The gods work through natural patterns we can discover',
          consequence: 'An older scholar speaks: "Perhaps the gods establish natural laws, and our reason allows us to discern them. Understanding nature and honoring the divine need not conflict." This middle path will appeal to many Greeks.',
          learningPoints: [
            {
              id: 'lp-prologue-4c-synthesis',
              content: 'Many early Greek thinkers maintained religious beliefs while pursuing natural explanations, seeing natural laws as divinely ordained rather than random.',
              category: 'historical-context',
            },
          ],
        },
      ],

      learningPoints: [],
    },

    // Scene 5: The Conditions That Fostered Philosophy
    {
      id: 'prologue-scene-5-conditions',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/60fc0f20-1bcb-4795-a7c1-c7a8e5bee865/0_0.png',

      content: `Why did philosophy emerge here and now? Why not earlier, or elsewhere, or not at all? The conditions must be right for such a revolution in thinking.

First, prosperity. The Ionian cities have grown wealthy through trade. Citizens have leisure—time not consumed by survival—to contemplate abstract questions. Philosophy is a luxury of abundance.

Second, literacy and writing. The Greeks adopted the Phoenician alphabet around 800 BCE and adapted it brilliantly. Writing allows ideas to be preserved, critiqued, and built upon. Oral traditions must be memorable and traditional; written philosophy can be complex and innovative.

Third, political culture. Many Greek cities practice forms of participatory governance. Citizens must argue, persuade, and reason in public forums. This creates skill in logical argument and respect for evidence over assertion. Democracy trains citizens to think like philosophers.

Fourth, cosmopolitanism. Greek traders encounter Egyptian geometry, Babylonian astronomy, Persian religious ideas. Exposure to diverse worldviews shatters the assumption that one's own traditions are self-evidently true. Cultural diversity breeds intellectual humility and curiosity.

These conditions converge in 6th century BCE Ionia. The moment is ripe for someone to ask the dangerous question: "What if the old stories aren't enough? What if we could understand reality through reason alone?"`,

      learningPoints: [
        {
          id: 'lp-prologue-5-prosperity',
          content: 'Economic prosperity created the leisure necessary for philosophical contemplation—abstract thinking requires freedom from constant struggle for survival.',
          category: 'historical-context',
        },
        {
          id: 'lp-prologue-5-literacy',
          content: 'The adoption of alphabetic writing allowed complex ideas to be preserved and critiqued, enabling philosophical progress beyond what oral tradition could sustain.',
          category: 'historical-context',
        },
        {
          id: 'lp-prologue-5-diversity',
          content: 'Cultural diversity from trade exposed Greeks to alternative worldviews, undermining assumptions that traditional beliefs were self-evidently true.',
          category: 'cultural-context',
        },
      ],
    },

    // Scene 6: Dialogue with Merchant about Diverse Ideas
    {
      id: 'prologue-scene-6-dialogue',
      type: 'dialogue',
      backgroundImage: 'https://cdn.midjourney.com/e9341957-22e7-4a55-8598-433dedfa2577/0_0.png',

      character: {
        id: 'merchant-lysander',
        name: 'Lysander',
        portrait: 'https://cdn.midjourney.com/f064d941-4b2a-4c8d-a951-343e4561de34/0_0.png',
        description: 'A well-traveled merchant from Miletus',
      },

      dialogueTree: {
        id: 'node-1',
        speaker: 'merchant-lysander',
        text: 'You seem curious about ideas, friend. I have just returned from Egypt and Babylon—would you like to hear what their wise men believe?',

        responses: [
          {
            id: 'response-egypt',
            text: 'Tell me about Egyptian ideas',
            nextNodeId: 'node-2',
          },
          {
            id: 'response-babylon',
            text: 'What did you learn in Babylon?',
            nextNodeId: 'node-3',
          },
        ],

        allNodes: [
          {
            id: 'node-2',
            speaker: 'merchant-lysander',
            text: 'The Egyptians possess incredible mathematical knowledge—their pyramids prove it! They can predict the Nile\'s floods through careful observation of the stars. Their priests claim the gods revealed this knowledge, but I wonder... could these patterns be discovered through reason and measurement alone?',
            responses: [
              {
                id: 'response-babylon-after-egypt',
                text: 'What about Babylon? What did you learn there?',
                nextNodeId: 'node-3-from-egypt',
                learningPoints: [
                  {
                    id: 'lp-prologue-6-observation',
                    content: 'Egyptian mathematical and astronomical achievements suggested that systematic observation could reveal natural patterns without direct divine revelation.',
                    category: 'historical-context',
                  },
                ],
              },
            ],
          },
          {
            id: 'node-3',
            speaker: 'merchant-lysander',
            text: 'The Babylonians have tracked the movements of planets for centuries! They can predict eclipses and planetary positions. They believe the heavens reflect divine messages—but their predictions work because celestial bodies follow regular patterns, not because gods constantly intervene.',
            responses: [
              {
                id: 'response-egypt-after-babylon',
                text: 'And what about Egypt? What did you see there?',
                nextNodeId: 'node-2-from-babylon',
                learningPoints: [
                  {
                    id: 'lp-prologue-6-regularity',
                    content: 'Babylonian astronomy demonstrated that celestial phenomena followed predictable patterns, suggesting natural laws rather than arbitrary divine intervention.',
                    category: 'historical-context',
                  },
                ],
              },
            ],
          },
          {
            id: 'node-2-from-babylon',
            speaker: 'merchant-lysander',
            text: 'Ah yes, Egypt! The Egyptians possess incredible mathematical knowledge—their pyramids prove it! They can predict the Nile\'s floods through careful observation of the stars. Like the Babylonians, they have learned that nature follows patterns we can discover through reason.',
            responses: [
              {
                id: 'response-continue-after-both',
                text: 'So both civilizations discovered natural patterns through observation?',
                nextNodeId: 'node-4',
                learningPoints: [
                  {
                    id: 'lp-prologue-6-observation',
                    content: 'Egyptian mathematical and astronomical achievements suggested that systematic observation could reveal natural patterns without direct divine revelation.',
                    category: 'historical-context',
                  },
                ],
              },
            ],
          },
          {
            id: 'node-3-from-egypt',
            speaker: 'merchant-lysander',
            text: 'Ah, Babylon! The Babylonians have tracked the movements of planets for centuries! They can predict eclipses and planetary positions. Like the Egyptians, their predictions work because they discovered that celestial bodies follow regular patterns, not divine whim.',
            responses: [
              {
                id: 'response-continue-after-both-2',
                text: 'So both civilizations discovered natural patterns through observation?',
                nextNodeId: 'node-4',
                learningPoints: [
                  {
                    id: 'lp-prologue-6-regularity',
                    content: 'Babylonian astronomy demonstrated that celestial phenomena followed predictable patterns, suggesting natural laws rather than arbitrary divine intervention.',
                    category: 'historical-context',
                  },
                ],
              },
            ],
          },
          {
            id: 'node-4',
            speaker: 'merchant-lysander',
            text: 'Exactly! Both the Egyptians and Babylonians have shown that observation and measurement can reveal patterns in nature. The Egyptians master geometry and predict the Nile\'s floods; the Babylonians chart the heavens and forecast eclipses. Neither relies on divine revelation alone—they use reason and careful study.',
            responses: [
              {
                id: 'response-synthesis',
                text: 'So we could understand the world through reason rather than just accepting myths?',
                nextNodeId: 'node-5',
              },
            ],
          },
          {
            id: 'node-5',
            speaker: 'merchant-lysander',
            text: 'Exactly! Through observation, measurement, and logical reasoning! Instead of accepting what tradition tells us, we could investigate for ourselves. Some in Miletus call this approach "philosophia"—the love of wisdom. It may be the beginning of something revolutionary.',
            isEnd: true,
          },
        ],
      },

      learningPoints: [
        {
          id: 'lp-prologue-6-foreign',
          content: 'Exposure to Egyptian and Babylonian scientific achievements challenged Greeks to consider whether natural phenomena could be understood through reason rather than only through myth.',
          category: 'cultural-context',
        },
      ],
    },

    // Scene 7: Primary Source - Early Cosmological Thinking vs. Hesiod
    {
      id: 'prologue-scene-7-source',
      type: 'primary-source',
      backgroundImage: 'https://cdn.midjourney.com/e3cb4497-6582-4d2a-8179-9339bc49c7e4/0_0.png',

      prompt: 'Compare these two approaches to explaining the origin of the world',

      source: {
        title: 'Two Explanations of Origins',
        date: '8th-6th century BCE',
        type: 'text',
        content: `HESIOD'S THEOGONY (c. 700 BCE):
"First of all Chaos came to be... and then Gaia (Earth) the ever-sure foundation... and dim Tartarus in the depth of the Earth, and Eros (Love), fairest among the deathless gods... From Chaos came Erebos (Darkness) and black Night; of Night were born Aither (Upper Air) and Day..."

\n\nTHALES OF MILETUS (c. 585 BCE):
"Water is the principle of all things. Everything comes from water and returns to water. The earth floats on water like a log. When water is disturbed, earthquakes occur."

\n\n(Note: Thales' views are reported by later sources; he wrote nothing that survives.)`,
        citation: 'Hesiod, Theogony, trans. H.G. Evelyn-White; Aristotle, Metaphysics 983b (reporting Thales)',
      },

      questions: [
        {
          id: 'q1',
          question: 'What is the fundamental difference between these two explanations of how the world began?',
          type: 'multiple-choice',
          options: [
            'Hesiod\'s account is longer and more detailed than Thales\' brief statement',
            'Hesiod personifies cosmic forces as gods with genealogies; Thales proposes a natural substance as the origin',
            'Hesiod focuses on the earth while Thales focuses on the heavens',
            'Hesiod\'s account is based on observation while Thales relies on tradition',
          ],
          correctAnswer: 'Hesiod personifies cosmic forces as gods with genealogies; Thales proposes a natural substance as the origin',
          explanation: 'This difference is crucial: Hesiod explains origins through divine beings (Chaos, Gaia, Eros) with personalities and relationships. Thales explains origins through a natural substance (water) following natural principles. This shift from divine genealogy to natural substance marks the birth of philosophy.',
        },
        {
          id: 'q2',
          question: 'How might Thales\' water theory represent a rational advance over mythological explanations?',
          type: 'multiple-choice',
          options: [
            'Water is sacred in Greek religion, making it a pious choice',
            'Water is an observable, testable substance that can be studied and measured',
            'Water appears in Hesiod\'s account, showing continuity with tradition',
            'Water is mysterious and incomprehensible like the gods',
          ],
          correctAnswer: 'Water is an observable, testable substance that can be studied and measured',
          explanation: 'Thales chooses water because it\'s a natural substance we can observe, experiment with, and understand through reason. It exists in multiple states (liquid, ice, vapor), is essential for life, and is everywhere. Unlike gods, water follows consistent, discoverable patterns. This makes it possible to investigate and understand the world through natural philosophy.',
        },
        {
          id: 'q3',
          question: 'Despite their differences, what underlying concern do both texts share?',
          type: 'multiple-choice',
          options: [
            'Both seek to explain how the world and its features came to be',
            'Both attempt to describe the gods\' relationships with each other',
            'Both focus primarily on human moral behavior',
            'Both reject the importance of natural observation',
          ],
          correctAnswer: 'Both seek to explain how the world and its features came to be',
          explanation: 'Both Hesiod and Thales are asking the same fundamental question: "How did the world come to be as it is?" They differ in their method—Hesiod uses divine genealogy and myth, Thales uses natural substance and reason—but both address the cosmological question that will drive philosophy for centuries: What is the origin and nature of reality?',
        },
      ],

      learningPoints: [
        {
          id: 'lp-prologue-7-shift',
          content: 'The transition from mythos to logos is visible in the shift from Hesiod\'s divine genealogies to Thales\' natural substance theory—the same questions, radically different methods.',
          category: 'literary-context',
        },
        {
          id: 'lp-prologue-7-thales',
          content: 'Thales of Miletus (c. 624-546 BCE) is traditionally called the first philosopher because he sought natural rather than supernatural explanations for natural phenomena.',
          category: 'historical-context',
        },
      ],
    },

    // Scene 8: Transition - The Fundamental Question
    {
      id: 'prologue-scene-8-transition',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/67a23874-8bcb-4dfb-9171-9a850d9975ae/0_0.png',

      content: `You stand once more on that hillside overlooking the Aegean. The sun now sets, painting the sky in brilliant oranges and purples. Below, in the cities of Ionia, lamps are being lit—small points of light against the gathering darkness.

You have witnessed the conditions that made philosophy possible: prosperity that creates leisure, literacy that preserves complex ideas, political debate that trains reason, and cultural diversity that opens minds. You have seen the old mythological certainties begin to crack under the weight of new questions.

The first philosophers are asking a deceptively simple question, one that will echo through the centuries: "What is the fundamental nature of reality?"

Not "Which god created what?" but "What is everything made of?" Not "How do we appease divine powers?" but "What natural principles govern the cosmos?" They seek the arche—the fundamental principle or substance from which all things arise.

Thales proposes water. Others will suggest air, fire, earth, or something altogether different. They will argue, refine their theories, and build upon each other's ideas. This process of rational inquiry, evidence-based argument, and progressive understanding is just beginning.

You are ready now to meet these first philosophers—the daring thinkers who replaced "The gods did it" with "Let us investigate and find out." Your journey into the birth of Western philosophy truly begins.`,

      learningPoints: [
        {
          id: 'lp-prologue-8-arche',
          content: 'The concept of arche (fundamental principle) represents the first philosophical question: What is the basic substance or principle from which all reality derives?',
          category: 'literary-context',
        },
        {
          id: 'lp-prologue-8-method',
          content: 'Philosophy as a distinctive method involves rational inquiry, evidence-based argument, and progressive refinement of ideas through dialogue and critique.',
          category: 'literary-context',
        },
        {
          id: 'lp-prologue-8-revolution',
          content: 'The Pre-Socratic philosophers initiated a revolution by replacing supernatural explanations with naturalistic investigation—asking not "who" but "what" and "how."',
          category: 'historical-context',
        },
      ],

      events: {
        onExit: [{
          type: 'quiz',
          componentId: 'quiz-prologue',
          condition: { type: 'if-not-completed' },
        }],
      },
    },
  ],

  endQuiz: prologueQuiz,
};

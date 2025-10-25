import type { Chapter } from '../../../types';
import { chapter1Quiz } from '../quizzes/chapter-1-quiz';

/**
 * Chapter 1: The Pre-Socratics
 *
 * This chapter introduces the first Greek philosophers who sought rational
 * explanations for the natural world, exploring their search for the arche
 * (fundamental principle) and the debates between unity and plurality,
 * being and becoming.
 */
export const chapter1: Chapter = {
  id: 'chapter-1-pre-socratics',
  title: 'Chapter 1: The Pre-Socratics',
  description: 'Journey through the birthplace of Western philosophy as the first thinkers seek rational explanations for the cosmos.',

  learningObjectives: [
    'Identify the core questions and methods of Pre-Socratic natural philosophy',
    'Understand major Pre-Socratic views on the fundamental substance(s) of reality',
    'Analyze the tension between unity and multiplicity, being and becoming, permanence and change',
    'Recognize how Pre-Socratics pioneered rational explanation of natural phenomena',
  ],

  scenes: [
    // Scene 1: Arrival in Miletus - Thales and the question of the arche
    {
      id: 'chapter-1-scene-1-miletus',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/3a83c9cf-3e93-4063-808f-ef5e39349df7/0_0.png',

      content: `Welcome to Miletus, a bustling port city on the Ionian coast in the 6th century BCE!

You stand in the agora, the central marketplace, surrounded by merchants from across the Mediterranean. Ships crowd the harbor, bringing goods and ideas from Egypt, Phoenicia, and beyond. This cosmopolitan atmosphere has created something unprecedented: a space where traditional answers are questioned and new ways of thinking emerge.

Here, a remarkable transformation is taking place. Instead of explaining the world through myths of gods and heroes, a few bold thinkers are asking a revolutionary question: What is the fundamental principle—the arche—that underlies all of reality?

Among these pioneers is Thales, a merchant and mathematician who has traveled widely and studied Egyptian astronomy. He is about to propose something startling: a natural explanation for the cosmos itself.`,

      learningPoints: [
        {
          id: 'lp-ch1-1-miletus',
          content: 'Miletus was a prosperous trading city where diverse cultural influences created an environment conducive to philosophical inquiry.',
          category: 'historical-context',
        },
        {
          id: 'lp-ch1-1-arche',
          content: 'The arche is the fundamental principle or substance that Pre-Socratic philosophers believed underlies all of reality.',
          category: 'vocabulary',
        },
      ],
    },

    // Scene 2: Decision - What is the fundamental substance?
    {
      id: 'chapter-1-scene-2-decision',
      type: 'decision',
      backgroundImage: '/Imsie/assets/the-classical-thinkers/backgrounds/4-elements.jpg',

      prompt: 'What do you think is the fundamental substance of all things?',
      context: `Thales poses the central question: "What is the one thing from which everything else emerges?"

Before you hear his answer, consider the world around you. The ships are made of wood, the sails of cloth, the sea of water. People breathe air, cook with fire, walk on earth. Everything seems so different—yet could there be one underlying substance that takes different forms?

What would you propose as the arche, the fundamental principle of reality?`,

      choices: [
        {
          id: 'choice-water',
          text: 'Water - it takes many forms and is essential to life',
          consequence: 'Remarkable! You have arrived at the same conclusion as Thales himself. He observed that water exists as liquid, solid (ice), and vapor (steam). All living things need water. Seeds contain moisture. Perhaps, he reasoned, everything is fundamentally water in different states.',
          learningPoints: [
            {
              id: 'lp-ch1-2a-thales',
              content: 'Thales proposed water as the arche because of its transformative properties and essential role in life.',
              category: 'literary-context',
            },
          ],
        },
        {
          id: 'choice-air',
          text: 'Air - it is everywhere and gives life through breath',
          consequence: 'An excellent observation! While Thales chose water, another philosopher named Anaximenes would later propose air as the fundamental substance. Air, he argued, can become denser to form water and earth, or more rarefied to become fire. Your intuition anticipates later Pre-Socratic thought.',
          learningPoints: [
            {
              id: 'lp-ch1-2b-air',
              content: 'Anaximenes later proposed air as the arche, arguing it could transform through condensation and rarefaction.',
              category: 'literary-context',
            },
          ],
        },
        {
          id: 'choice-fire',
          text: 'Fire - it transforms everything it touches',
          consequence: 'A powerful insight! Fire indeed transforms matter and was later championed by Heraclitus as central to cosmic change. Though Thales chose water, your answer shows you grasp the Pre-Socratic impulse to find a dynamic, transformative principle underlying reality.',
          learningPoints: [
            {
              id: 'lp-ch1-2c-fire',
              content: 'Fire represents transformation and change, principles that Heraclitus would later emphasize in his philosophy.',
              category: 'literary-context',
            },
          ],
        },
        {
          id: 'choice-something-else',
          text: 'Something else entirely - something boundless and indefinite',
          consequence: 'Extraordinary reasoning! You have anticipated the thinking of Anaximander, Thales\' student. He argued that the fundamental substance could not be any particular element like water or air, but must be something boundless and indefinite—the apeiron. Your philosophical instincts are sharp!',
          learningPoints: [
            {
              id: 'lp-ch1-2d-apeiron',
              content: 'Anaximander proposed the apeiron (the boundless) as the arche, arguing the fundamental principle must be indefinite, not a specific element.',
              category: 'literary-context',
            },
          ],
        },
      ],

      learningPoints: [],
    },

    // Scene 3: Anaximander's apeiron and early cosmology
    {
      id: 'chapter-1-scene-3-anaximander',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/e067acf3-a491-4e2e-87f5-9e541f94a93f/0_0.png',

      content: `Thales' student, Anaximander, takes the inquiry further with a brilliant critique.

"If the fundamental substance were water," he argues, "how could fire exist? Fire and water are opposites. If everything were really water, fire should be impossible."

Anaximander proposes something more abstract: the apeiron—the boundless or indefinite. This infinite, eternal substance contains all opposites in potential. From it emerge the familiar elements (hot and cold, wet and dry) through a process of separation.

Even more remarkably, Anaximander offers a cosmology without gods. The Earth, he says, is a cylinder floating in space, held in place not by Atlas or divine will, but by equilibrium—it is equidistant from all points of the cosmos, so it has no reason to fall in any direction.

This is revolutionary thinking: natural phenomena explained by natural principles, not divine intervention.`,

      inlineAnnotations: [
        {
          id: 'annotation-apeiron',
          text: 'apeiron',
          tooltip: {
            title: 'The Boundless',
            content: 'From Greek a- (not) + peras (limit). Anaximander\'s apeiron is the unlimited, indefinite source from which all determinate things arise and to which they return. It is neither water nor air nor any specific thing, but the infinite potential underlying all existence.',
            category: 'vocabulary',
          },
        },
      ],

      learningPoints: [
        {
          id: 'lp-ch1-3-apeiron-concept',
          content: 'Anaximander\'s apeiron is an abstract, indefinite principle rather than a concrete substance, showing increasing philosophical sophistication.',
          category: 'literary-context',
        },
        {
          id: 'lp-ch1-3-naturalism',
          content: 'Anaximander\'s cosmology explains natural phenomena through natural principles, not divine intervention—a hallmark of Pre-Socratic thought.',
          category: 'literary-context',
        },
        {
          id: 'lp-ch1-3-opposites',
          content: 'The concept of opposites (hot/cold, wet/dry) emerging from an undifferentiated source becomes central to Greek philosophical thought.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 4: Dialogue with Heraclitus - flux and change
    {
      id: 'chapter-1-scene-4-heraclitus',
      type: 'dialogue',
      backgroundImage: 'https://cdn.midjourney.com/e45ce08e-b662-44e8-9765-415620a467e3/0_0.png',

      character: {
        id: 'heraclitus',
        name: 'Heraclitus of Ephesus',
        portrait: 'https://cdn.midjourney.com/eddd20d0-09de-4bb0-8f72-a958f3c04552/0_0.png',
        description: 'The philosopher of flux and change, known for his cryptic wisdom',
      },

      dialogueTree: {
        id: 'node-1',
        speaker: 'heraclitus',
        text: 'Welcome, traveler. They call me the "Dark One" because I speak in riddles. But my truth is simple: everything flows. Panta rhei. Nothing stands still.',

        responses: [
          {
            id: 'response-river',
            text: 'Can you explain what you mean?',
            nextNodeId: 'node-2',
          },
          {
            id: 'response-challenge',
            text: 'But surely some things are permanent and unchanging?',
            nextNodeId: 'node-3',
          },
        ],

        allNodes: [
          {
            id: 'node-2',
            speaker: 'heraclitus',
            text: 'You cannot step in the same river twice. The water flowing past is always new. But more than that—you yourself are not the same! Your body changes with each moment. What you call permanence is merely slow change.',
            responses: [
              {
                id: 'response-challenge-from-river',
                text: 'But surely some things must be permanent?',
                nextNodeId: 'node-3',
              },
            ],
          },
          {
            id: 'node-3',
            speaker: 'heraclitus',
            text: 'Permanent? Show me something that does not change! Even the mountains erode. The sun rises and sets. Your very thoughts shift from moment to moment. Permanence is an illusion we cling to for comfort.',
            responses: [
              {
                id: 'response-continue',
                text: 'What drives this universal change?',
                nextNodeId: 'node-4',
              },
            ],
          },
          {
            id: 'node-4',
            speaker: 'heraclitus',
            text: 'Fire! The cosmos is an ever-living fire, kindling in measures and extinguishing in measures. Fire transforms all things—wood to ash, water to steam. It is both substance and process, being and becoming unified.',
            responses: [
              {
                id: 'response-identity',
                text: 'But if everything changes, how can anything have identity?',
                nextNodeId: 'node-5',
              },
            ],
          },
          {
            id: 'node-5',
            speaker: 'heraclitus',
            text: 'Excellent question! Identity lies not in static being but in pattern and proportion. The river remains "the same river" not because it contains the same water, but because it maintains its form and flow. Unity exists through the tension of opposites—like a bow or a lyre, held together by opposing forces.',
            responses: [
              {
                id: 'response-stability',
                text: 'Is there any stability at all in your view?',
                nextNodeId: 'node-6',
              },
            ],
          },
          {
            id: 'node-6',
            speaker: 'heraclitus',
            text: 'Yes—the Logos, the rational principle governing all change. The cosmos is not chaos. Fire transforms according to measure and proportion. Day becomes night, night becomes day—but the pattern is constant. War is father of all and king of all! Strife and opposition drive all change, yet produce harmony. The stability you seek lies in the law of transformation itself, not in things that supposedly do not change.',
            isEnd: true,
          },
        ],
      },

      learningPoints: [
        {
          id: 'lp-ch1-4-flux',
          content: 'Heraclitus emphasized constant change (flux) as the fundamental nature of reality—"you cannot step in the same river twice."',
          category: 'literary-context',
        },
        {
          id: 'lp-ch1-4-fire',
          content: 'For Heraclitus, fire represents both the substance and the process of cosmic transformation.',
          category: 'literary-context',
        },
        {
          id: 'lp-ch1-4-opposites',
          content: 'Heraclitus saw unity arising from the tension of opposites, like the strings of a lyre creating harmony through opposition.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 5: Quote Attribution - Match Pre-Socratic fragments
    {
      id: 'chapter-1-scene-5-quotes',
      type: 'quote-attribution',
      backgroundImage: 'https://cdn.midjourney.com/d4fc88e9-95a2-46a3-b9a2-ebf729b73ca9/0_0.png',

      prompt: 'Match these famous Pre-Socratic fragments to their authors',

      quotes: [
        {
          id: 'quote-water',
          text: 'All is water',
          speaker: 'Thales',
          context: 'Thales\' revolutionary claim that water is the fundamental substance of all things.',
          explanation: 'This simple statement marks the birth of natural philosophy—the search for a single principle underlying the diversity of nature.',
        },
        {
          id: 'quote-river',
          text: 'You cannot step in the same river twice',
          speaker: 'Heraclitus',
          context: 'Heraclitus\' famous metaphor for the doctrine of flux.',
          explanation: 'This saying captures Heraclitus\' view that reality is fundamentally characterized by constant change and flow.',
        },
        {
          id: 'quote-apeiron',
          text: 'The boundless is the first principle of things that are',
          speaker: 'Anaximander',
          context: 'Anaximander\'s assertion that the apeiron (boundless) is the arche.',
          explanation: 'By choosing an indefinite principle rather than a specific element, Anaximander advanced philosophical abstraction.',
        },
        {
          id: 'quote-fire',
          text: 'This cosmos was ever-living fire, kindling in measures and extinguishing in measures',
          speaker: 'Heraclitus',
          context: 'Heraclitus\' description of cosmic fire as both substance and process.',
          explanation: 'Fire represents the unity of being and becoming—substance that is inherently transformative.',
        },
        {
          id: 'quote-strife',
          text: 'War is father of all and king of all',
          speaker: 'Heraclitus',
          context: 'Heraclitus\' provocative claim about the creative power of conflict.',
          explanation: 'For Heraclitus, strife and opposition are not destructive but generative—they produce the tension that creates harmony and change.',
        },
      ],

      learningPoints: [
        {
          id: 'lp-ch1-5-fragments',
          content: 'Pre-Socratic philosophy survives mainly through fragments quoted by later authors, requiring careful interpretation.',
          category: 'historical-context',
        },
        {
          id: 'lp-ch1-5-diversity',
          content: 'Despite all seeking the arche, Pre-Socratic philosophers proposed radically different answers based on their observations and reasoning.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 6: Journey to Elea - Parmenides and unchanging Being
    {
      id: 'chapter-1-scene-6-parmenides',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/dcace701-0285-4784-98b0-8d1f8ed3798e/0_0.png',

      content: `You journey south to Elea, a Greek colony in southern Italy, where you encounter a philosopher whose views will shock you with their radicality.

Parmenides of Elea stands in stark opposition to Heraclitus. Where Heraclitus saw universal flux, Parmenides sees unchanging Being.

"Change is impossible," he declares. "What is, is. What is not, is not. And what is not cannot come to be, for it is nothing."

His reasoning is rigorous: For something to come into being, it must come either from being or from non-being. It cannot come from being, for then it already exists. It cannot come from non-being, for from nothing, nothing comes. Therefore, change is impossible.

"What we call change," Parmenides continues, "is mere illusion. Reality is One, eternal, unchanging, indivisible. The senses deceive us. Only reason reveals truth."

This is philosophy's first great metaphysical schism: Heraclitus' world of constant flux versus Parmenides' world of unchanging Being.`,

      inlineAnnotations: [
        {
          id: 'annotation-being',
          text: 'Being',
          tooltip: {
            title: 'What Is',
            content: 'For Parmenides, Being (to eon) is all that exists—eternal, unchanging, indivisible, and complete. It is contrasted with non-being (what is not), which cannot exist or even be thought. This distinction becomes foundational for Western metaphysics.',
            category: 'vocabulary',
          },
        },
      ],

      learningPoints: [
        {
          id: 'lp-ch1-6-parmenides',
          content: 'Parmenides used rigorous logical argument to conclude that change is impossible and reality is One, eternal, and unchanging.',
          category: 'literary-context',
        },
        {
          id: 'lp-ch1-6-reason',
          content: 'Parmenides privileged reason over sense experience, arguing that the senses deceive us about change while reason reveals unchanging truth.',
          category: 'literary-context',
        },
        {
          id: 'lp-ch1-6-debate',
          content: 'The Heraclitus-Parmenides debate (becoming vs. being, change vs. permanence) becomes one of philosophy\'s enduring tensions.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 7: Primary Source - Examine Parmenides' poem "On Nature"
    {
      id: 'chapter-1-scene-7-primary-source',
      type: 'primary-source',
      backgroundImage: 'https://cdn.midjourney.com/bd723c91-4015-40f3-b5a3-469fe38e6ee7/0_0.png',

      prompt: 'Analyze this fragment from Parmenides\' philosophical poem "On Nature"',

      source: {
        title: 'Fragment from "On Nature"',
        author: 'Parmenides of Elea',
        date: 'c. 475 BCE',
        type: 'text',
        content: `Come now, I will tell you—and you must accept my word when you have heard it—the only ways of inquiry that are to be thought of. The one, that [it] is and that it is impossible for [it] not to be, is the path of Persuasion (for she attends upon Truth); the other, that [it] is not and that it must needs not be—that, I tell you, is a path altogether unthinkable. For you could not know what is not—that cannot be done—nor indicate it.

For it is the same thing to think and to be.

The thing that can be thought and that for the sake of which the thought exists is the same; for you cannot find thought without something that is, as to which it is uttered.`,
        citation: 'Translation adapted from John Burnet, Early Greek Philosophy (1920)',
      },

      questions: [
        {
          id: 'q1',
          question: 'According to Parmenides, what are the only two possible paths of inquiry?',
          type: 'multiple-choice',
          options: [
            'That something is, or that it is not',
            'That things change, or that they stay the same',
            'That matter is fundamental, or that mind is fundamental',
            'That we can trust our senses, or that we must rely on reason alone',
          ],
          correctAnswer: 'That something is, or that it is not',
          explanation: 'Parmenides identifies two paths: the path of "is" (being) which leads to truth, and the path of "is not" (non-being) which is unthinkable. This stark binary becomes foundational for Western logic and metaphysics.',
        },
        {
          id: 'q2',
          question: 'Why does Parmenides say the path of "is not" is unthinkable?',
          type: 'multiple-choice',
          options: [
            'Because our senses cannot detect non-being',
            'Because you cannot know or indicate what is not—it is nothing',
            'Because the gods forbid us from thinking about non-existence',
            'Because language cannot express negative statements',
          ],
          correctAnswer: 'Because you cannot know or indicate what is not—it is nothing',
          explanation: 'Parmenides argues that non-being is literally nothing, and therefore cannot be known, thought, or spoken about. Only what is (being) can be the object of thought.',
        },
        {
          id: 'q3',
          question: 'What does Parmenides mean by "it is the same thing to think and to be"?',
          type: 'multiple-choice',
          options: [
            'Thinking and existing are identical processes',
            'Only what exists can be thought, and only what can be thought exists',
            'Our thoughts create reality',
            'Being requires consciousness to exist',
          ],
          correctAnswer: 'Only what exists can be thought, and only what can be thought exists',
          explanation: 'This famous statement connects thought and being: genuine thought requires a real object (being), and conversely, being is that which can be thought. Non-being, having no reality, cannot be thought at all.',
        },
      ],

      learningPoints: [
        {
          id: 'lp-ch1-7-poem',
          content: 'Parmenides wrote his philosophy as a poem, using verse to express abstract logical arguments—a unique fusion of poetry and philosophy.',
          category: 'literary-context',
        },
        {
          id: 'lp-ch1-7-logic',
          content: 'Parmenides\' argument from the impossibility of non-being represents an early form of rigorous logical reasoning in philosophy.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 8: Cause-Effect - Match Pre-Socratic views to their logical consequences
    {
      id: 'chapter-1-scene-8-cause-effect',
      type: 'cause-effect',
      backgroundImage: 'https://cdn.midjourney.com/6566118d-3650-4468-9088-7bf19f342535/0_0.png',

      prompt: 'Match each Pre-Socratic view to its logical consequence',

      pairs: [
        {
          id: 'pair-1',
          cause: 'Thales: "All is water"',
          effect: 'Different substances are water in different states or degrees of condensation',
          explanation: 'If everything is fundamentally water, the diversity we observe must be explained by water taking different forms—liquid, solid, vapor—or different degrees of concentration.',
        },
        {
          id: 'pair-2',
          cause: 'Heraclitus: "Everything flows"',
          effect: 'Permanence is an illusion; identity exists in pattern, not static substance',
          explanation: 'If constant change is fundamental, what we call permanent objects must actually be stable patterns of change, like a river that maintains its form despite changing water.',
        },
        {
          id: 'pair-3',
          cause: 'Parmenides: "What is not cannot be"',
          effect: 'Change is impossible because it requires something to come from nothing',
          explanation: 'If non-being is impossible to think or exist, then nothing can come into being (from non-being) or pass out of being (into non-being). Therefore change, which requires things to begin and end, is impossible.',
        },
        {
          id: 'pair-4',
          cause: 'Anaximander: "The arche is the boundless (apeiron)"',
          effect: 'The fundamental principle must be indefinite, not any particular element',
          explanation: 'Anaximander reasoned that if the arche were a particular element like water, opposite elements (like fire) should not exist. Therefore, the arche must be something indefinite that contains all opposites in potential.',
        },
      ],

      learningPoints: [
        {
          id: 'lp-ch1-8-logic',
          content: 'Pre-Socratic philosophers used logical reasoning to derive consequences from their fundamental principles.',
          category: 'literary-context',
        },
        {
          id: 'lp-ch1-8-problems',
          content: 'Each monistic theory (everything is one substance) faces the challenge of explaining the diversity and change we observe.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 9: The paradoxes of Zeno defending Parmenides
    {
      id: 'chapter-1-scene-9-zeno',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/87f13679-4ed3-4675-9947-1974739b89ba/0_0.png',

      content: `Parmenides' student Zeno devises clever paradoxes to defend his teacher's shocking claim that change and motion are impossible.

"Consider Achilles and the tortoise," Zeno proposes. "If the tortoise has a head start, Achilles must first reach where the tortoise was. But by then, the tortoise has moved ahead. Achilles must reach this new point, but again the tortoise has advanced. This continues infinitely—so Achilles can never catch the tortoise!"

The crowd murmurs. Everyone knows Achilles would easily overtake a tortoise. Yet the logic seems sound.

Zeno presents another: "Before an arrow can reach its target, it must travel half the distance. Before that, it must travel half of that half. And so on, infinitely. To cross any distance requires completing an infinite series of tasks. But infinity cannot be completed. Therefore, motion is impossible!"

These paradoxes aren't meant to convince you that motion doesn't happen—your eyes prove otherwise. Rather, they show that if you accept that motion and change are real, you face deep logical puzzles. Perhaps, Zeno suggests, Parmenides was right: change is illusion, and only unchanging Being is real.`,

      inlineAnnotations: [
        {
          id: 'annotation-zeno',
          text: 'Zeno',
          tooltip: {
            title: 'Zeno of Elea',
            content: 'Zeno (c. 495-430 BCE) was Parmenides\' student who invented the reductio ad absurdum argument—showing a position leads to absurdity. His paradoxes about motion remain philosophically significant and weren\'t fully resolved until modern mathematics developed concepts of infinite series and limits.',
            category: 'historical-context',
          },
        },
      ],

      learningPoints: [
        {
          id: 'lp-ch1-9-paradox',
          content: 'Zeno\'s paradoxes use logical arguments to show that common-sense beliefs about motion and change lead to contradictions.',
          category: 'literary-context',
        },
        {
          id: 'lp-ch1-9-infinity',
          content: 'The paradoxes reveal deep problems about infinity, continuity, and the relationship between mathematics and physical reality.',
          category: 'literary-context',
        },
        {
          id: 'lp-ch1-9-method',
          content: 'Zeno pioneered the reductio ad absurdum method: showing a position leads to absurdity to argue for the opposite view.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 10: Dialogue with Democritus - atoms and void
    {
      id: 'chapter-1-scene-10-democritus',
      type: 'dialogue',
      backgroundImage: 'https://cdn.midjourney.com/24c20afe-ca72-4c67-9583-ba7b7fce7a9f/0_0.png',

      character: {
        id: 'democritus',
        name: 'Democritus of Abdera',
        portrait: 'https://cdn.midjourney.com/34d638d8-597c-451f-9e0e-14f31cffeea3/0_0.png',
        description: 'The laughing philosopher, proposer of atomism',
      },

      dialogueTree: {
        id: 'node-1',
        speaker: 'democritus',
        text: 'Welcome, friend! I have a solution to the dispute between Heraclitus and Parmenides. Both are partly right, partly wrong. Let me explain my theory of atoms.',

        responses: [
          {
            id: 'response-atoms',
            text: 'What are atoms?',
            nextNodeId: 'node-2',
          },
          {
            id: 'response-how',
            text: 'How does atomism resolve the debate?',
            nextNodeId: 'node-3',
          },
        ],

        allNodes: [
          {
            id: 'node-2',
            speaker: 'democritus',
            text: 'Atoms—from atomos, "uncuttable"—are the smallest possible particles of matter. They are eternal, unchanging, and indivisible, just as Parmenides said Being must be. But here is the key: there are infinitely many atoms, and they move through empty space—the void.',
            responses: [
              {
                id: 'response-synthesis-from-atoms',
                text: 'So how does this resolve the Heraclitus-Parmenides debate?',
                nextNodeId: 'node-3',
              },
            ],
          },
          {
            id: 'node-3',
            speaker: 'democritus',
            text: 'Parmenides was right that being is eternal and unchanging—but this applies to atoms, not to the whole cosmos. Heraclitus was right that we observe constant change—but this comes from atoms rearranging, not from substances transforming into each other. Both flux and permanence exist, at different levels!',
            responses: [
              {
                id: 'response-void',
                text: 'But how can empty space—the void—exist?',
                nextNodeId: 'node-4',
              },
            ],
          },
          {
            id: 'node-4',
            speaker: 'democritus',
            text: 'Ah, but the void must exist! Without empty space, atoms could not move or rearrange. I say: "Nothing" exists just as much as "something"—the void is real, not as a substance, but as the space that allows motion. Parmenides\' logic was too strict. We must trust both reason and observation.',
            responses: [
              {
                id: 'response-change',
                text: 'How do unchanging atoms create the change we observe?',
                nextNodeId: 'node-5',
              },
            ],
          },
          {
            id: 'node-5',
            speaker: 'democritus',
            text: 'The atoms themselves never change—each is eternal and indestructible. But they combine and separate in infinite ways, like letters forming different words. A tree grows as atoms arrange themselves into wood. It burns as atoms separate and recombine into smoke and ash. Same atoms, new arrangements. Change without transformation!',
            responses: [
              {
                id: 'response-properties',
                text: 'Do atoms have different properties?',
                nextNodeId: 'node-6',
              },
            ],
          },
          {
            id: 'node-6',
            speaker: 'democritus',
            text: 'Atoms differ only in shape, size, and position. Some are round, some hooked, some jagged. Large clusters form heavy objects, small clusters form light ones. All the qualities we experience—sweet and bitter, hot and cold, colors and sounds—these exist only "by convention." In reality, there are only atoms and void!',
            isEnd: true,
          },
        ],
      },

      learningPoints: [
        {
          id: 'lp-ch1-10-atomism',
          content: 'Democritus proposed that reality consists of indivisible atoms moving through empty space (void), combining and separating to create change.',
          category: 'literary-context',
        },
        {
          id: 'lp-ch1-10-synthesis',
          content: 'Atomism synthesizes Parmenides (atoms are eternal, unchanging being) and Heraclitus (change through rearrangement of atoms).',
          category: 'literary-context',
        },
        {
          id: 'lp-ch1-10-materialism',
          content: 'Democritus\' atomism is a form of materialism: everything, including the soul and thought, is made of atoms.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 11: Timeline Game - Order the Pre-Socratic thinkers chronologically
    {
      id: 'chapter-1-scene-11-timeline',
      type: 'timeline-game',
      backgroundImage: '/Imsie/assets/the-classical-thinkers/backgrounds/pre-socratic-timeline.jpg',

      prompt: 'Order these Pre-Socratic philosophers from earliest to latest',

      timelineEvents: [
        {
          id: 'event-thales',
          title: 'Thales of Miletus',
          year: -585,
          description: 'The first philosopher, who proposed water as the arche. Active around 585 BCE, he predicted a solar eclipse and is considered the founder of natural philosophy.',
          image: 'https://cdn.midjourney.com/e6d0e9b8-8d82-430f-82c9-904c6c8d2692/0_0.png',
        },
        {
          id: 'event-anaximander',
          title: 'Anaximander of Miletus',
          year: -560,
          description: 'Student of Thales who proposed the apeiron (boundless) as the fundamental principle. Active around 560 BCE, he created one of the first maps and an early cosmology.',
          image: 'https://cdn.midjourney.com/746574c0-7b1a-44aa-bf30-18009fdbd838/0_0.png',
        },
        {
          id: 'event-heraclitus',
          title: 'Heraclitus of Ephesus',
          year: -500,
          description: 'The philosopher of flux who declared "everything flows." Active around 500 BCE, he emphasized fire and the unity of opposites.',
          image: 'https://cdn.midjourney.com/eddd20d0-09de-4bb0-8f72-a958f3c04552/0_0.png',
        },
        {
          id: 'event-parmenides',
          title: 'Parmenides of Elea',
          year: -475,
          description: 'The philosopher who argued that change is impossible and reality is One, eternal, and unchanging. Active around 475 BCE, he wrote his philosophy as a poem.',
          image: 'https://cdn.midjourney.com/21c56e1f-8c92-4789-81e4-56bf8425b1b8/0_0.png',
        },
        {
          id: 'event-zeno',
          title: 'Zeno of Elea',
          year: -450,
          description: 'Student of Parmenides who created paradoxes to defend his teacher\'s views. Active around 450 BCE, his paradoxes about motion remain philosophically significant.',
          image: 'https://cdn.midjourney.com/852d40ad-5d5f-4ab0-a610-7516f4d286a3/0_0.png',
        },
        {
          id: 'event-democritus',
          title: 'Democritus of Abdera',
          year: -420,
          description: 'Developer of atomic theory who proposed that reality consists of atoms and void. Active around 420 BCE, he attempted to synthesize earlier Pre-Socratic views.',
          image: 'https://cdn.midjourney.com/34d638d8-597c-451f-9e0e-14f31cffeea3/0_0.png',
        },
      ],

      successThreshold: 70,

      learningPoints: [
        {
          id: 'lp-ch1-11-chronology',
          content: 'Pre-Socratic philosophy developed over roughly two centuries (6th-5th centuries BCE) with each thinker responding to predecessors.',
          category: 'historical-context',
        },
        {
          id: 'lp-ch1-11-progression',
          content: 'The progression shows increasing abstraction: from concrete elements (water) to abstract principles (apeiron) to logical arguments about being.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 12: Transition - Philosophy turns from nature to human affairs
    {
      id: 'chapter-1-scene-12-conclusion',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/cbb8c654-943a-4816-8b3a-d14b75ef2150/0_0.png',

      content: `The Pre-Socratics have laid the foundation of Western philosophy through their bold questions and rational methods.

They asked: What is the fundamental nature of reality? They proposed answers ranging from specific elements like water and fire to abstract principles like the boundless and being itself. They debated whether reality is fundamentally one or many, whether change is real or illusory.

Most importantly, they established a new way of thinking. Instead of accepting traditional myths, they demanded rational explanations. Instead of attributing phenomena to divine whim, they sought natural principles. They used logic, observation, and argument to pursue truth.

Yet their focus was primarily cosmological—concerned with the nature of the physical world. The questions they raised about being, change, knowledge, and reality would echo through philosophy forever.

But philosophy is about to take a dramatic turn. In democratic Athens, a new generation of thinkers will shift attention from the cosmos to human affairs: from "What is the nature of reality?" to "How should we live?" and "What is justice?"

Let us now test your understanding of these pioneering Pre-Socratic thinkers.`,

      learningPoints: [
        {
          id: 'lp-ch1-12-legacy',
          content: 'Pre-Socratic philosophy established rational inquiry, natural explanation, and logical argument as the proper methods for seeking truth.',
          category: 'literary-context',
        },
        {
          id: 'lp-ch1-12-questions',
          content: 'The fundamental questions raised by Pre-Socratics (being vs. becoming, one vs. many, permanence vs. change) remain central to philosophy.',
          category: 'literary-context',
        },
        {
          id: 'lp-ch1-12-transition',
          content: 'Philosophy would soon shift from cosmological questions (nature of the universe) to ethical and political questions (how to live).',
          category: 'historical-context',
        },
      ],

      events: {
        onExit: [
          {
            type: 'quiz',
            componentId: 'quiz-chapter-1',
            condition: {
              type: 'if-not-completed',
            },
          },
        ],
      },
    },
  ],

  endQuiz: chapter1Quiz,
};

import type { Chapter } from '../../../types';
import { epilogueQuiz } from '../quizzes/epilogue-quiz';

/**
 * Epilogue: The Importance and Influence of Greek Philosophy
 *
 * This epilogue explores the transmission of Greek philosophical thought through
 * Rome, the Islamic Golden Age, medieval Europe, and into the modern world,
 * examining the enduring relevance of ancient philosophical questions.
 */
export const epilogue: Chapter = {
  id: 'epilogue-importance-influence',
  title: 'Epilogue: The Importance and Influence of Greek Philosophy',
  description: 'Discover how Greek philosophy shaped Western intellectual history and continues to influence modern thought across cultures and time.',
  learningObjectives: [
    'Recognize the transmission of Greek philosophy through Rome, Islam, and medieval Christianity',
    'Understand how Greek philosophical methods and questions shaped Western intellectual history',
    'Analyze the continuing relevance of ancient philosophical ideas to modern life',
    'Evaluate the legacy of Greek philosophy in contemporary thought',
  ],
  scenes: [
    // Scene 1: The philosophical legacy begins
    {
      id: 'epilogue-scene-1-legacy-begins',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/c710d63d-da46-4ec0-be00-6d2f61edb477/0_0.png',
      image: 'https://cdn.midjourney.com/a74d1723-adba-4d53-b9b0-ac8e0dcffa26/0_0.png',
      content: `The sun sets over Athens, casting long shadows across the Academy and the Lyceum. The great philosophers are gone, but their questions remain.

What is the good life? How should we govern ourselves? What is real, and how can we know it? Can reason alone lead us to truth?

These questions, first posed by curious Greeks in the 6th century BCE, echo through the centuries. The answers change, but the questions endure—passed from teacher to student, from culture to culture, across empires and oceans.

The journey of Greek philosophy from ancient Athens to the modern world is as remarkable as any odyssey. It is a story of preservation, translation, transformation, and rebirth.`,
      learningPoints: [
        {
          id: 'epilogue-lp-1-enduring-questions',
          content: 'The fundamental philosophical questions posed by the Greeks—about reality, knowledge, ethics, and politics—continue to drive intellectual inquiry.',
          category: 'literary-context',
        },
        {
          id: 'epilogue-lp-2-transmission',
          content: 'Greek philosophy survived through deliberate cultural transmission across multiple civilizations over 2,500 years.',
          category: 'historical-context',
        },
      ],
    },

    // Scene 2: Primary source - Medieval commentary on Aristotle
    {
      id: 'epilogue-scene-3-primary-source',
      type: 'primary-source',
      backgroundImage: 'https://cdn.midjourney.com/ae804b24-978d-4e02-86ef-1da9394bf0c2/0_0.png',
      prompt: 'Examine this medieval manuscript commentary on Aristotle to understand how Greek philosophy was transmitted',
      source: {
        title: 'Commentary on Aristotle\'s Physics by Averroes (Ibn Rushd)',
        author: 'Averroes (Ibn Rushd)',
        date: '1180 CE',
        type: 'text',
        content: `"Aristotle's doctrine is the supreme truth, because his intellect was the limit of human intellect. Wherefore it has been well said that he was created and given to us by divine providence that we might know all that can be known.

\n\nThe Philosopher [Aristotle] demonstrates that the world is eternal, not created in time. This follows necessarily from his principles about matter and form, potentiality and actuality. What has no potentiality to not-be cannot cease to be.

\n\nYet the revealed truth of Scripture teaches that God created the world from nothing. How can both be true?

\n\nThe solution lies in understanding that philosophy investigates what can be known by natural reason, while faith reveals what transcends reason. Truth cannot contradict truth."`,
        citation: 'Averroes, Tahafut al-Tahafut (The Incoherence of the Incoherence), translated from Arabic into Latin in Toledo, 1230 CE.',
      },
      questions: [
        {
          id: 'epilogue-q1',
          question: 'What does Averroes\' extreme praise of Aristotle reveal about the status of Greek philosophy in the Islamic world?',
          type: 'multiple-choice',
          options: [
            'Greek philosophy was rejected as pagan superstition',
            'Greek philosophy was viewed as the pinnacle of human rational achievement',
            'Greek philosophy was considered inferior to Islamic thought',
            'Greek philosophy was unknown in the Islamic world',
          ],
          correctAnswer: 'Greek philosophy was viewed as the pinnacle of human rational achievement',
          explanation: 'Averroes calls Aristotle "the supreme truth" and says his intellect was "the limit of human intellect." This shows the tremendous respect Islamic scholars had for Greek philosophy, viewing it as the highest achievement of natural reason even while maintaining religious faith.',
        },
        {
          id: 'epilogue-q2',
          question: 'What philosophical problem does Averroes identify between Aristotle and Islamic theology?',
          type: 'multiple-choice',
          options: [
            'Aristotle denies the existence of God',
            'Aristotle\'s logic contradicts Islamic law',
            'Aristotle argues the world is eternal while Islam teaches creation in time',
            'Aristotle rejects all forms of religion',
          ],
          correctAnswer: 'Aristotle argues the world is eternal while Islam teaches creation in time',
          explanation: 'Averroes identifies the core tension: Aristotle\'s metaphysics leads to an eternal universe with no beginning, while Islamic (and Christian and Jewish) theology teaches that God created the world at a specific moment. This became a central philosophical problem for all medieval religious traditions.',
        },
        {
          id: 'epilogue-q3',
          question: 'How does Averroes attempt to resolve the conflict between philosophy and religious faith?',
          type: 'multiple-choice',
          options: [
            'He rejects Aristotle as wrong',
            'He rejects religious teaching as irrational',
            'He argues they address different domains—reason studies nature, faith reveals what transcends nature',
            'He claims there is no real conflict',
          ],
          correctAnswer: 'He argues they address different domains—reason studies nature, faith reveals what transcends nature',
          explanation: 'Averroes proposes a "two truths" approach: philosophy investigates what natural reason can discover, while faith reveals truths beyond reason\'s reach. Both are valid in their domains. This solution influenced medieval Christian thinkers like Thomas Aquinas, though it remained controversial.',
        },
      ],
      learningPoints: [
        {
          id: 'epilogue-lp-4-islamic-preservation',
          content: 'Islamic scholars during the Golden Age preserved, translated, and extensively commented on Greek philosophy when it was largely lost in Christian Europe.',
          category: 'historical-context',
        },
        {
          id: 'epilogue-lp-5-faith-reason',
          content: 'The tension between Greek philosophy and revealed religion created productive debates about the relationship between faith and reason that shaped medieval thought.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 4: Map exploration - Journey of Greek philosophy
    {
      id: 'epilogue-scene-4-map',
      type: 'map-exploration',
      backgroundImage: 'https://cdn.midjourney.com/12f9c06d-03cd-457f-8f2e-5133bf646453/0_0.png',
      mapImage: 'https://cdn.midjourney.com/12f9c06d-03cd-457f-8f2e-5133bf646453/0_0.png',
      prompt: 'Trace the journey of Greek philosophical texts across cultures and time',
      locations: [
        {
          id: 'epilogue-loc-athens',
          name: 'Athens',
          x: 53,
          y: 59,
          content: `The birthplace of Western philosophy. Here, Plato founded the Academy in 387 BCE, and Aristotle established the Lyceum in 335 BCE. These schools continued teaching philosophy for centuries.

When the Roman emperor Justinian closed the pagan philosophical schools in 529 CE, the direct line from the ancient philosophers to their students finally ended—nearly 900 years after Plato's death.`,
          image: 'https://cdn.midjourney.com/dc79e2b6-1540-43cd-85a6-4ef9a95d92f7/0_0.png',
        },
        {
          id: 'epilogue-loc-rome',
          name: 'Rome',
          x: 34,
          y: 45,
          content: `The Romans conquered Greece but were conquered by Greek culture. Educated Romans spoke Greek, studied Greek philosophy, and adapted Greek ideas to Roman life.

Stoicism became especially popular among Roman elites. The emperor Marcus Aurelius wrote his Meditations in Greek, applying Stoic philosophy to the challenges of ruling an empire.

In the 1st century BCE, Roman statesmen began translating Greek philosophical concepts into Latin. The orator and philosopher Cicero was especially important—he created much of the Latin philosophical vocabulary that would be used throughout the Middle Ages, making Greek wisdom accessible to those who couldn't read Greek.`,
          image: 'https://cdn.midjourney.com/6ab5710e-cabe-4c9b-9d11-44253c9ba2b8/0_0.png',
        },
        {
          id: 'epilogue-loc-constantinople',
          name: 'Constantinople',
          x: 62,
          y: 44,
          content: `When Rome fell in 476 CE, the Eastern Roman (Byzantine) Empire continued for another thousand years. Greek remained the language of the empire.

Byzantine scholars preserved complete libraries of Greek philosophical texts. When Constantinople fell to the Ottomans in 1453, fleeing scholars brought these precious manuscripts to Italy, helping spark the Renaissance.`,
          image: 'https://cdn.midjourney.com/2d11b4ba-f864-4fae-b63c-2ce632bce15f/0_0.png',
        },
        {
          id: 'epilogue-loc-baghdad',
          name: 'Baghdad',
          x: 93,
          y: 56,
          content: `During the Islamic Golden Age (8th-13th centuries), Baghdad became the world's intellectual capital. The House of Wisdom employed scholars to translate Greek texts into Arabic.

Philosophers like Al-Farabi, Avicenna (Ibn Sina), and Averroes (Ibn Rushd) didn't just preserve Greek philosophy—they advanced it, writing extensive commentaries and original works.

Most of Aristotle's works survived only because Arabic translations preserved them when the Greek originals and Latin translations were lost in Europe.`,
          image: 'https://cdn.midjourney.com/a74d1723-adba-4d53-b9b0-ac8e0dcffa26/0_0.png',
        },
        {
          id: 'epilogue-loc-toledo',
          name: 'Toledo, Spain',
          x: 5,
          y: 50,
          content: `In 12th-century Toledo, Christian, Muslim, and Jewish scholars worked together translating Arabic texts into Latin. This is how Aristotle returned to Western Europe.

The "Toledo School of Translators" rendered not just Aristotle but also the Islamic commentaries, introducing medieval Europe to both Greek and Islamic philosophy simultaneously.

This translation movement revolutionized European universities, which reorganized their curricula around Aristotle's works.`,
          image: 'https://cdn.midjourney.com/fff4a329-236a-4306-9770-662705095104/0_0.png',
        },
        {
          id: 'epilogue-loc-paris',
          name: 'Paris',
          x: 18,
          y: 14,
          content: `The University of Paris became the center of medieval philosophy in the 13th century. Here, scholars worked to reconcile Aristotle's philosophy with Christian theology.

The Dominican friar Thomas Aquinas created the most influential synthesis, demonstrating in his Summa Theologica how Aristotelian reason and Christian faith could complement each other. His work became foundational to Catholic theology.

The "Scholastic" method—rigorous logical analysis applied to theological questions—emerged from this synthesis. The philosophical debates at Paris shaped theology for centuries and influenced the development of modern universities.`,
          image: 'https://cdn.midjourney.com/aa114d34-658f-4bb2-bdcc-cb455f15cf14/0_0.png',
        },
        {
          id: 'epilogue-loc-florence',
          name: 'Florence',
          x: 31,
          y: 36,
          content: `During the Renaissance, Florence became the center of a Platonic revival. The Medici family founded the Platonic Academy in 1462, directly modeling it on Plato's original Academy.

Marsilio Ficino translated all of Plato's works directly from Greek to Latin for the first time. Renaissance humanists preferred Plato's emphasis on beauty, love, and the soul to Aristotle's technical philosophy.

This Platonic Renaissance influenced art, literature, and political thought throughout Europe, from Michelangelo's sculptures to More's Utopia.`,
          image: 'https://cdn.midjourney.com/3b9a6b52-8416-4a1c-883b-1e6281ee7054/0_0.png',
        },
      ],
      requiredLocations: ['epilogue-loc-athens', 'epilogue-loc-baghdad', 'epilogue-loc-toledo', 'epilogue-loc-paris'],
      learningPoints: [
        {
          id: 'epilogue-lp-6-geographic-journey',
          content: 'Greek philosophy traveled from Athens to Rome to Baghdad to Toledo to Paris, crossing religious and linguistic boundaries.',
          category: 'historical-context',
        },
        {
          id: 'epilogue-lp-7-cultural-exchange',
          content: 'The preservation of Greek philosophy required cooperation between Greek, Roman, Byzantine, Islamic, Jewish, and Christian scholars.',
          category: 'cultural-context',
        },
      ],
    },

    // Scene 5: The influence on modern thought
    {
      id: 'epilogue-scene-5-modern-influence',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/549ecd86-1c25-498f-9a3d-2f9395ba4db6/0_0.png',
      image: 'https://cdn.midjourney.com/9efe1e11-de6f-4173-83da-e35650030d10/0_0.png',
      content: `The ancient Greeks didn't just ask questions—they invented ways of asking questions. Their legacy isn't a set of answers but a toolkit of methods.

Socrates taught us to question assumptions through dialogue. Plato showed us how to construct ideal models and reason from first principles. Aristotle demonstrated systematic observation and logical analysis. The Stoics offered techniques for emotional resilience. The Skeptics reminded us to withhold judgment when evidence is insufficient.

These methods shape modern disciplines you encounter every day:

The scientific method echoes Aristotle's empiricism and logical rigor. Political philosophy still debates Plato's ideal state versus Aristotle's practical politics. Psychology draws on Stoic techniques for cognitive-behavioral therapy. Logic courses still teach Aristotelian syllogisms. Ethics classes begin with Socratic dialogue and the question "What is the good life?"

Even the word "philosophy" itself—love of wisdom—captures the Greek insight that wisdom is something to be pursued, not possessed.`,
      learningPoints: [
        {
          id: 'epilogue-lp-8-methodological-legacy',
          content: 'Greek philosophy\'s greatest legacy is not specific answers but intellectual methods—dialectic, logic, empiricism, systematic analysis.',
          category: 'literary-context',
        },
        {
          id: 'epilogue-lp-9-modern-disciplines',
          content: 'Modern sciences, social sciences, and humanities all trace their methodological roots to Greek philosophical inquiry.',
          category: 'historical-context',
        },
      ],
    },

    // Scene 6: Dialogue with a modern philosopher
    {
      id: 'epilogue-scene-6-modern-philosopher',
      type: 'dialogue',
      backgroundImage: 'https://cdn.midjourney.com/dd440ffe-2b65-4f9f-bcce-d114f00c5ae4/0_0.png',
      character: {
        id: 'modern-philosopher',
        name: 'Dr. Elena Vasquez',
        portrait: 'https://cdn.midjourney.com/359cefef-c455-45cd-897e-0856c1cd062f/0_0.png',
        description: 'Contemporary philosophy professor',
      },
      dialogueTree: {
        id: 'modern-phil-node-1',
        speaker: 'modern-philosopher',
        text: 'Welcome to my office. As you\'ve learned, Greek philosophy has traveled far from ancient Athens. But is it still relevant? Do 2,500-year-old questions still matter?',
        responses: [
          {
            id: 'modern-phil-resp-1',
            text: 'The specific answers are outdated, but the questions remain',
            nextNodeId: 'modern-phil-node-2a',
            learningPoints: [
              {
                id: 'epilogue-lp-10-questions-endure',
                content: 'While specific Greek answers to philosophical questions may be outdated, the questions themselves remain central to human inquiry.',
                category: 'literary-context',
              },
            ],
          },
          {
            id: 'modern-phil-resp-2',
            text: 'We need entirely new frameworks for modern problems',
            nextNodeId: 'modern-phil-node-2b',
            learningPoints: [
              {
                id: 'epilogue-lp-11-new-problems',
                content: 'Some argue that modern challenges like artificial intelligence, climate change, and biotechnology require philosophical frameworks beyond ancient Greek thought.',
                category: 'literary-context',
              },
            ],
          },
          {
            id: 'modern-phil-resp-3',
            text: 'Greek philosophy provides timeless methods of inquiry',
            nextNodeId: 'modern-phil-node-2c',
            learningPoints: [
              {
                id: 'epilogue-lp-12-timeless-methods',
                content: 'The methods developed by Greek philosophers—logic, dialectic, empirical observation, systematic analysis—remain foundational to all inquiry.',
                category: 'literary-context',
              },
            ],
          },
        ],
        allNodes: [
          // First perspective: Questions endure (from initial choice 1)
          {
            id: 'modern-phil-node-2a',
            speaker: 'modern-philosopher',
            text: 'Exactly! Aristotle\'s physics is wrong, but his questions about causation and explanation still guide science. Plato\'s political blueprint is authoritarian, but his question—"What is justice?"—drives political philosophy. The ancient answers evolve; the questions endure because they\'re fundamentally human.',
            responses: [
              {
                id: 'modern-phil-resp-2a-next',
                text: 'What about modern challenges that the Greeks never imagined?',
                nextNodeId: 'modern-phil-node-2b-from-2a',
                learningPoints: [
                  {
                    id: 'epilogue-lp-11-new-problems',
                    content: 'Some argue that modern challenges like artificial intelligence, climate change, and biotechnology require philosophical frameworks beyond ancient Greek thought.',
                    category: 'literary-context',
                  },
                ],
              },
            ],
          },
          // Second perspective: New frameworks (from initial choice 2)
          {
            id: 'modern-phil-node-2b',
            speaker: 'modern-philosopher',
            text: 'There\'s truth in that. The Greeks never imagined artificial intelligence or genetic engineering. But even new questions often connect to ancient ones. AI ethics draws on Aristotle\'s virtue ethics. Debates about human nature echo Plato versus Aristotle. We build new frameworks on old foundations.',
            responses: [
              {
                id: 'modern-phil-resp-2b-next',
                text: 'So the fundamental questions still matter?',
                nextNodeId: 'modern-phil-node-2a-from-2b',
                learningPoints: [
                  {
                    id: 'epilogue-lp-10-questions-endure',
                    content: 'While specific Greek answers to philosophical questions may be outdated, the questions themselves remain central to human inquiry.',
                    category: 'literary-context',
                  },
                ],
              },
            ],
          },
          // Third perspective: Timeless methods (from initial choice 3)
          {
            id: 'modern-phil-node-2c',
            speaker: 'modern-philosopher',
            text: 'Precisely! When we use logic to construct arguments, we\'re using Aristotle\'s tools. When we question assumptions through dialogue, we\'re practicing Socratic method. When we test hypotheses through observation, we\'re following Aristotelian empiricism. The content changes; the methods persist.',
            responses: [
              {
                id: 'modern-phil-resp-2c-next',
                text: 'But what about the fundamental questions themselves?',
                nextNodeId: 'modern-phil-node-2a-from-2c',
                learningPoints: [
                  {
                    id: 'epilogue-lp-10-questions-endure',
                    content: 'While specific Greek answers to philosophical questions may be outdated, the questions themselves remain central to human inquiry.',
                    category: 'literary-context',
                  },
                ],
              },
            ],
          },
          // Path A→B: New frameworks perspective after questions endure
          {
            id: 'modern-phil-node-2b-from-2a',
            speaker: 'modern-philosopher',
            text: 'Good question. The Greeks never imagined artificial intelligence or genetic engineering. Yet even new problems connect to ancient ones. AI ethics draws on Aristotle\'s virtue ethics. Debates about human nature echo Plato versus Aristotle. We build new frameworks on old foundations.',
            responses: [
              {
                id: 'modern-phil-resp-2b-from-2a-next',
                text: 'And the methods themselves—are they timeless?',
                nextNodeId: 'modern-phil-node-2c-from-2ab',
                learningPoints: [
                  {
                    id: 'epilogue-lp-12-timeless-methods',
                    content: 'The methods developed by Greek philosophers—logic, dialectic, empirical observation, systematic analysis—remain foundational to all inquiry.',
                    category: 'literary-context',
                  },
                ],
              },
            ],
          },
          // Path B→A: Questions endure perspective after new frameworks
          {
            id: 'modern-phil-node-2a-from-2b',
            speaker: 'modern-philosopher',
            text: 'Exactly. While specific Greek answers are outdated, the questions remain. What is justice? What is the good life? How can we know truth? These questions are fundamentally human—they transcend any particular era or technology.',
            responses: [
              {
                id: 'modern-phil-resp-2a-from-2b-next',
                text: 'What about the methods Greek philosophy provides?',
                nextNodeId: 'modern-phil-node-2c-from-ba',
                learningPoints: [
                  {
                    id: 'epilogue-lp-12-timeless-methods',
                    content: 'The methods developed by Greek philosophers—logic, dialectic, empirical observation, systematic analysis—remain foundational to all inquiry.',
                    category: 'literary-context',
                  },
                ],
              },
            ],
          },
          // Path C→A: Questions endure perspective after timeless methods
          {
            id: 'modern-phil-node-2a-from-2c',
            speaker: 'modern-philosopher',
            text: 'Yes—while the methods are tools, the questions drive inquiry. What is real? How should we live? What is justice? These aren\'t just ancient puzzles; they\'re the questions every generation must grapple with.',
            responses: [
              {
                id: 'modern-phil-resp-2a-from-2c-next',
                text: 'And modern challenges—do they require new approaches?',
                nextNodeId: 'modern-phil-node-2b-from-ca',
                learningPoints: [
                  {
                    id: 'epilogue-lp-11-new-problems',
                    content: 'Some argue that modern challenges like artificial intelligence, climate change, and biotechnology require philosophical frameworks beyond ancient Greek thought.',
                    category: 'literary-context',
                  },
                ],
              },
            ],
          },
          // Path A→B→C: Timeless methods after questions→new frameworks
          {
            id: 'modern-phil-node-2c-from-2ab',
            speaker: 'modern-philosopher',
            text: 'Absolutely. The methods are timeless—logic, dialectic, empirical observation, systematic analysis. When we construct arguments, question assumptions, or test hypotheses, we\'re using tools the Greeks forged 2,500 years ago.',
            nextNodeId: 'modern-phil-node-synthesis',
          },
          // Path B→A→C: Timeless methods after new frameworks→questions
          {
            id: 'modern-phil-node-2c-from-ba',
            speaker: 'modern-philosopher',
            text: 'Indeed. Whether we\'re debating AI ethics or analyzing climate policy, we use Aristotelian logic, Socratic questioning, empirical observation. The content changes, but the methods persist across millennia.',
            nextNodeId: 'modern-phil-node-synthesis',
          },
          // Path C→A→B: New frameworks after timeless methods→questions
          {
            id: 'modern-phil-node-2b-from-ca',
            speaker: 'modern-philosopher',
            text: 'They do require adaptation. Artificial intelligence, biotechnology, climate change—these weren\'t in the Greek imagination. Yet we address them using frameworks built on Greek foundations, extending ancient wisdom to new problems.',
            nextNodeId: 'modern-phil-node-synthesis',
          },
          // Synthesis node before final statement
          {
            id: 'modern-phil-node-synthesis',
            speaker: 'modern-philosopher',
            text: 'You\'re seeing it now—Greek philosophy\'s relevance is multifaceted. The questions endure, the frameworks adapt, and the methods remain timeless. Together, they form an enduring legacy.',
            nextNodeId: 'modern-phil-node-3',
          },
          // Final synthesis
          {
            id: 'modern-phil-node-3',
            speaker: 'modern-philosopher',
            text: 'Here\'s my view: Greek philosophy gave us something more valuable than answers—it gave us the idea that reason can illuminate reality, that dialogue can discover truth, that the examined life is worth living. That legacy still shapes how we think about thinking itself.',
            isEnd: true,
          },
        ],
      },
      learningPoints: [
        {
          id: 'epilogue-lp-13-contemporary-relevance',
          content: 'Contemporary philosophers continue to engage with Greek philosophical questions and methods, adapting them to modern contexts.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 7: Decision - Most important question
    {
      id: 'epilogue-scene-7-important-question',
      type: 'decision',
      backgroundImage: 'https://cdn.midjourney.com/d5f7f2ea-a2e0-41c4-adb5-1e9f7c8465cd/0_0.png',
      prompt: 'Which ancient Greek philosophical question remains most important for modern life?',
      context: `You\'ve journeyed through the major questions Greek philosophy posed:

The Pre-Socratics asked: What is the fundamental nature of reality?
The Sophists asked: Is truth relative or absolute?
Socrates asked: How should one live?
Plato asked: What is real—the material world or the world of ideas?
Aristotle asked: What is the purpose of human life?
The Hellenistic schools asked: How can we achieve peace of mind?

Each question shaped centuries of thought. Which matters most today?`,
      choices: [
        {
          id: 'epilogue-choice-reality',
          text: 'What is the fundamental nature of reality? (Pre-Socratics)',
          consequence: `You choose the Pre-Socratic question about the nature of reality.

This remains urgent. Quantum physics reveals reality far stranger than atoms and void—probability waves, quantum entanglement, the observer effect. The Pre-Socratic quest to understand fundamental reality through reason continues in particle accelerators and cosmology.

The question "What is real?" matters when we navigate virtual worlds, artificial intelligence, and digital consciousness. If Democritus wondered about atoms, we wonder about qubits and digital existence.`,
          learningPoints: [
            {
              id: 'epilogue-lp-14-reality-modern',
              content: 'Pre-Socratic questions about the fundamental nature of reality remain central to physics, cosmology, and debates about consciousness and virtual reality.',
              category: 'literary-context',
            },
          ],
        },
        {
          id: 'epilogue-choice-truth',
          text: 'Is truth relative or absolute? (Sophists)',
          consequence: `You choose the Sophistic question about the nature of truth.

This couldn't be more relevant. We live in an age of "alternative facts," algorithmic echo chambers, and competing narratives. The Sophist argument that truth is relative to perspective echoes in postmodern philosophy and debates about cultural relativism.

Yet we also need universal truths—scientific facts, logical principles, moral foundations. The tension between Sophistic relativism and Socratic absolutism plays out daily in our politics, education, and media.`,
          learningPoints: [
            {
              id: 'epilogue-lp-15-truth-modern',
              content: 'Sophistic debates about relativism versus absolute truth remain highly relevant in discussions of post-truth politics, cultural relativism, and objective knowledge.',
              category: 'literary-context',
            },
          ],
        },
        {
          id: 'epilogue-choice-good-life',
          text: 'How should one live? (Socrates)',
          consequence: `You choose Socrates' question about how to live.

This may be the most personally urgent question. In a world of infinite choices, competing values, and constant distraction, the Socratic challenge to examine your life and live deliberately matters profoundly.

The question underlies modern ethics, self-help, therapy, and spiritual seeking. Socrates' answer—that virtue and wisdom matter more than wealth and status—challenges our consumer culture's values. His insistence that "the unexamined life is not worth living" calls us to reflection in an age of constant stimulation.`,
          learningPoints: [
            {
              id: 'epilogue-lp-16-good-life-modern',
              content: 'Socrates\' question "How should one live?" remains foundational to ethics, psychology, and the search for meaning in modern life.',
              category: 'literary-context',
            },
          ],
        },
        {
          id: 'epilogue-choice-purpose',
          text: 'What is the purpose of human life? (Aristotle)',
          consequence: `You choose Aristotle's question about human purpose.

In an age when traditional sources of meaning—religion, community, fixed social roles—have weakened, Aristotle's question about telos (purpose) becomes crucial. What are humans for? What constitutes flourishing?

His answer—that we're rational and social beings whose purpose is eudaimonia through virtue and reason—offers an alternative to purely material or emotional accounts of happiness. As technology reshapes human nature and purpose, Aristotelian questions about what makes a good human life gain new urgency.`,
          learningPoints: [
            {
              id: 'epilogue-lp-17-purpose-modern',
              content: 'Aristotle\'s question about human purpose and flourishing addresses modern searches for meaning beyond material success or emotional satisfaction.',
              category: 'literary-context',
            },
          ],
        },
      ],
      learningPoints: [],
    },

    // Scene 8: Cause-Effect - Ancient ideas to modern descendants
    {
      id: 'epilogue-scene-8-cause-effect',
      type: 'cause-effect',
      backgroundImage: 'https://cdn.midjourney.com/b569ad35-c18d-445d-99df-07f33fccd019/0_0.png',
      prompt: 'Match ancient Greek philosophical ideas to their modern descendants',
      pairs: [
        {
          id: 'epilogue-pair-1',
          cause: 'Socratic Method (questioning to expose assumptions)',
          effect: 'Critical thinking education and the Socratic seminar method used in universities',
          explanation: 'Socrates\' technique of asking probing questions to examine beliefs became the foundation of critical thinking pedagogy. Law schools use the "Socratic method" to train lawyers in analytical reasoning.',
        },
        {
          id: 'epilogue-pair-2',
          cause: 'Aristotelian Logic (syllogisms and formal reasoning)',
          effect: 'Formal logic, computer science, and artificial intelligence',
          explanation: 'Aristotle\'s system of formal logic evolved into modern symbolic logic and Boolean algebra, which underlies computer programming and AI. Every "if-then" statement in code descends from Aristotelian reasoning.',
        },
        {
          id: 'epilogue-pair-3',
          cause: 'Platonic Theory of Forms (eternal, perfect ideals beyond physical reality)',
          effect: 'Mathematical Platonism and the belief in mathematical truths independent of physical reality',
          explanation: 'Many mathematicians and physicists remain Platonists, believing mathematical truths exist independently of the physical world—that we discover rather than invent mathematics, just as Plato believed we recognize rather than create the Forms.',
        },
        {
          id: 'epilogue-pair-4',
          cause: 'Stoic Philosophy (control what you can, accept what you cannot)',
          effect: 'Cognitive Behavioral Therapy (CBT) and modern resilience training',
          explanation: 'CBT, one of the most effective therapeutic approaches, directly applies Stoic techniques. The Stoic insight that we control our judgments but not external events became the foundation of cognitive therapy for anxiety and depression.',
        },
        {
          id: 'epilogue-pair-5',
          cause: 'Aristotelian Empiricism (knowledge comes from observation)',
          effect: 'The scientific method and experimental science',
          explanation: 'Aristotle\'s insistence on observing nature and classifying data systematically laid the groundwork for the scientific method. His emphasis on empirical evidence over pure reason influenced the scientific revolution.',
        },
        {
          id: 'epilogue-pair-6',
          cause: 'Democritean Atomism (reality is composed of invisible particles)',
          effect: 'Modern atomic theory and particle physics',
          explanation: 'Democritus\'s speculation that matter consists of indivisible particles moving in void was remarkably prescient. While ancient atomism was philosophical speculation, it anticipated the scientific discovery of atoms and subatomic particles.',
        },
      ],
      distractors: [
        'Social media and online communication',
        'Representative democracy and voting rights',
        'Modern art and abstract expressionism',
      ],
      learningPoints: [
        {
          id: 'epilogue-lp-18-modern-descendants',
          content: 'Specific ancient Greek philosophical ideas have direct descendants in modern disciplines from psychology to computer science.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 9: Quote attribution - Modern concepts and Greek origins
    {
      id: 'epilogue-scene-9-quote-attribution',
      type: 'quote-attribution',
      backgroundImage: 'https://cdn.midjourney.com/5b58405f-2b65-4eb5-913f-94aa20417221/0_0.png',
      prompt: 'Match these modern philosophical concepts to their ancient Greek origins',
      quotes: [
        {
          id: 'epilogue-quote-1',
          text: 'The idea that knowledge should be organized into distinct academic disciplines',
          speaker: 'Aristotle',
          context: 'Aristotle systematically divided knowledge into distinct fields: logic, physics, biology, ethics, politics, rhetoric, and poetics. This disciplinary organization still structures universities today.',
          explanation: 'When you choose a major in biology, philosophy, or political science, you\'re following Aristotle\'s division of knowledge into specialized disciplines. The modern university with its departments and fields traces back to the Lyceum.',
        },
        {
          id: 'epilogue-quote-2',
          text: 'The concept that abstract mathematical truths are more real than physical objects',
          speaker: 'Plato',
          context: 'Plato argued that mathematical Forms (like perfect circles or triangles) are more real than physical approximations. Mathematical truth is eternal and unchanging while physical objects decay.',
          explanation: 'This "mathematical Platonism" influences how many scientists and mathematicians think. Einstein reportedly said he wanted to know "God\'s thoughts"—the eternal mathematical laws—not mere physical facts. That\'s a Platonic view.',
        },
        {
          id: 'epilogue-quote-3',
          text: 'The therapeutic use of rational self-examination to reduce emotional distress',
          speaker: 'Stoics',
          context: 'The Stoics taught that disturbing emotions come from mistaken judgments. By examining and correcting our thoughts rationally, we can achieve tranquility even in difficult circumstances.',
          explanation: 'Cognitive Behavioral Therapy (CBT) applies this Stoic insight clinically. When therapists help patients identify and challenge distorted thoughts, they\'re using ancient Stoic techniques in a modern therapeutic framework.',
        },
        {
          id: 'epilogue-quote-4',
          text: 'The method of learning through structured questions rather than lectures',
          speaker: 'Socrates',
          context: 'Socrates never lectured. Instead, he asked questions that led his interlocutors to examine their beliefs and discover contradictions, arriving at understanding through dialogue.',
          explanation: 'The "Socratic seminar" method used in many schools reverses the traditional lecture format. Students learn by questioning texts and each other, discovering insights through dialogue rather than passive reception.',
        },
        {
          id: 'epilogue-quote-5',
          text: 'The view that understanding nature requires identifying the purpose things serve',
          speaker: 'Aristotle',
          context: 'Aristotle insisted that to truly understand something, you must know its telos—its purpose or end. A knife is for cutting; an eye is for seeing; a human is for rational activity and flourishing.',
          explanation: 'This teleological thinking shapes biology (organs have functions), medicine (health is the body\'s proper function), and ethics (human purpose determines human good). Though challenged by Darwin, teleological language persists in biology.',
        },
        {
          id: 'epilogue-quote-6',
          text: 'The idea that truth depends on perspective and cultural context',
          speaker: 'Sophists',
          context: 'Protagoras declared "Man is the measure of all things," suggesting truth is relative to the observer. Different cultures and individuals may have different truths.',
          explanation: 'This relativism reappears in 20th-century philosophy as postmodernism and cultural relativism. The Sophistic debate with Socrates about absolute versus relative truth continues in contemporary philosophy and politics.',
        },
      ],
      learningPoints: [
        {
          id: 'epilogue-lp-19-modern-concepts',
          content: 'Many concepts we consider modern—university disciplines, mathematical Platonism, CBT, Socratic seminars—trace directly to ancient Greek philosophy.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 10: Conclusion - The examined life continues
    {
      id: 'epilogue-scene-10-conclusion',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/64c4b4f8-3749-42fd-8ebc-378adb040d19/0_0.png',
      image: 'https://cdn.midjourney.com/9efe1e11-de6f-4173-83da-e35650030d10/0_0.png',
      content: `"The safest general characterization of the European philosophical tradition is that it consists of a series of footnotes to Plato." —Alfred North Whitehead, 1929

Whitehead exaggerated, but only slightly. For 2,500 years, Western philosophy has been in conversation with the Greeks—agreeing, disagreeing, building on, tearing down, and rebuilding the foundations they laid.

The questions the Greeks first posed remain urgent: What is real? How can we know? How should we live? What is justice? What makes life meaningful?

The methods they developed remain essential: Socratic questioning, logical analysis, systematic observation, dialectical argument, rational inquiry.

You've now walked with the Pre-Socratics as they wondered about the fundamental nature of reality. You've debated with Sophists about truth and rhetoric. You've been questioned by Socrates, enlightened by Plato, and educated by Aristotle. You've found peace with Epicureans, virtue with Stoics, and suspended judgment with Skeptics.

Their world is gone—the Academy and Lyceum are ruins, the marble statues are broken, the voices are silent. But the conversation continues. Every time you question an assumption, construct a logical argument, seek empirical evidence, or ask "What is the good life?"—you're speaking with the Greeks.

The unexamined life, Socrates said, is not worth living. That call to reflection, to rational inquiry, to the pursuit of wisdom through reason—that is the enduring gift of Greek philosophy.

The conversation isn't over. It's your turn to speak.`,
      learningPoints: [
        {
          id: 'epilogue-lp-20-continuing-conversation',
          content: 'Philosophy is not a set of ancient answers but an ongoing conversation about fundamental questions, to which each generation contributes.',
          category: 'literary-context',
        },
        {
          id: 'epilogue-lp-21-personal-relevance',
          content: 'The Socratic call to self-examination and rational inquiry remains personally relevant to anyone seeking to live thoughtfully.',
          category: 'cultural-context',
        },
        {
          id: 'epilogue-lp-22-western-tradition',
          content: 'As Whitehead noted, Western philosophy is essentially a dialogue with Plato and the Greeks—building on, challenging, and extending their insights.',
          category: 'literary-context',
        },
      ],
      events: {
        onExit: [{
          type: 'quiz',
          componentId: 'quiz-epilogue',
          condition: { type: 'if-not-completed' },
        }],
      },
    },
  ],
  endQuiz: epilogueQuiz,
};

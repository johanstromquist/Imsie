import type { Chapter } from '../../../types';
import { prologueQuiz } from '../quizzes/prologue-quiz';

/**
 * Prologue: The Bard's Tale Begins
 *
 * This prologue introduces students to the epic tradition, establishes cultural
 * and literary context, and builds excitement for Odysseus's legendary journey.
 * Uses a bard framing device with educational mini-games interspersed.
 */
export const prologue: Chapter = {
  id: 'prologue-fall-of-troy',
  title: 'Prologue: The Bard\'s Tale',
  description: 'Enter the world of ancient Greek epic poetry as a bard prepares to sing the greatest adventure story ever told.',

  learningObjectives: [
    'Understand the oral tradition and epic poetry conventions',
    'Learn key cultural concepts: xenia (hospitality), nostos (homecoming), kleos (glory)',
    'Recognize the historical context of the Trojan War',
    'Identify the main characters and their relationships',
    'Explore the ancient Greek worldview of gods, geography, and heroism',
  ],

  scenes: [
    // Scene 1: The Bard Begins - Invoking the Muse
    {
      id: 'prologue-scene-1-bard-invocation',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/36583bff-7fb4-460a-be0d-609f09513530/0_0.png',
      image: 'https://cdn.midjourney.com/db443600-a5ab-4c7e-8903-853c0d7ee382/0_0.png',

      content: `The great hall falls silent. Torchlight flickers across eager faces as you, the traveling bard, step forward with your lyre. The feast is over. Now comes the time for story.

You close your eyes and begin the ancient ritual—the invocation to the Muse:

"Sing to me, O Muse, of the man of many ways, who wandered far and wide after he had sacked the sacred citadel of Troy. Many were the men whose cities he saw and whose minds he learned, and many the woes he suffered in his heart upon the sea..."

Your audience leans forward. They know this tale—or think they do. Everyone has heard whispers of Odysseus, the cunning king of Ithaca, who took ten years to sail home from Troy. But tonight, you will make them see it, feel it, live it.

Tonight, you will sing the Odyssey.`,

      inlineAnnotations: [
        {
          id: 'prologue-annotation-muse',
          text: 'Muse',
          tooltip: {
            title: 'The Muses',
            content: 'The nine Muses were goddesses who inspired the arts and sciences. Epic poets traditionally invoked the Muse to request divine inspiration and authority for their stories. This ritual opening signals the beginning of a sacred performance.',
            category: 'cultural-context',
          },
        },
        {
          id: 'prologue-annotation-odyssey',
          text: 'Odyssey',
          tooltip: {
            title: 'The Word "Odyssey"',
            content: 'The word "odyssey" comes from the hero\'s name, Odysseus. Today it means any long, eventful journey. The original Odyssey is one of the oldest works of Western literature, composed around 800-700 BCE.',
            category: 'reference',
          },
        },
      ],

      learningPoints: [
        {
          id: 'prologue-lp-1-oral-tradition',
          content: 'Epic poetry was performed orally by bards who memorized thousands of lines and recited them with musical accompaniment.',
          category: 'historical-context',
        },
        {
          id: 'prologue-lp-2-invocation',
          content: 'Epic poems traditionally begin with an invocation to the Muse, establishing the divine authority and importance of the tale.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 2: The War at Troy - Brief Summary
    {
      id: 'prologue-scene-2-troy-summary',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/59737e94-117d-4863-a40b-8ec451739576/0_0.png',
      image: 'https://cdn.midjourney.com/1168856d-c1ed-4008-bbf4-546f6c0ce88f/0_0.png',

      content: `"But first," you tell your audience, "you must understand where our hero has been."

Ten years of war. The Greeks sailed to Troy to reclaim Helen, the most beautiful woman in the world, stolen by Paris, prince of Troy. Kings and heroes from across Greece assembled—Achilles the invincible warrior, Agamemnon the proud commander, Ajax the mighty, and among them, Odysseus of Ithaca.

Troy's walls were impregnable. Year after year, the siege dragged on. Heroes fell. Glory was won and lost. The gods themselves took sides—Athena and Hera favoring the Greeks, Apollo and Aphrodite protecting Troy.

Finally, in the tenth year, Odysseus devised a stratagem that would end the war: the Trojan Horse. A giant wooden horse, left as a supposed offering to the gods, with Greek warriors hidden inside. The Trojans, thinking they had won, dragged it into their city.

That night, the warriors emerged. The gates opened. Troy burned.

Victory—but at what cost?`,

      inlineAnnotations: [
        {
          id: 'prologue-annotation-helen',
          text: 'Helen',
          tooltip: {
            title: 'Helen of Troy',
            content: 'Helen was the wife of King Menelaus of Sparta. When Paris of Troy took her (whether by abduction or elopement is debated), it sparked the Trojan War. She became known as "the face that launched a thousand ships."',
            category: 'reference',
          },
        },
        {
          id: 'prologue-annotation-trojan-horse',
          text: 'Trojan Horse',
          tooltip: {
            title: 'The Trojan Horse',
            content: 'Odysseus\'s most famous stratagem: a giant hollow wooden horse presented as a gift. Greek warriors hid inside, and when the Trojans brought it into their city, the Greeks emerged at night and opened the gates for their army.',
            category: 'reference',
          },
        },
      ],

      learningPoints: [
        {
          id: 'prologue-lp-3-trojan-war',
          content: 'The Trojan War was a ten-year siege that ended with Troy\'s destruction. It forms the backdrop for the Odyssey.',
          category: 'historical-context',
        },
        {
          id: 'prologue-lp-4-odysseus-cunning',
          content: 'Odysseus is defined by his intelligence and cunning—winning through strategy rather than brute force.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 3: Primary Source - What is a Bard?
    {
      id: 'prologue-scene-3-bard-primary-source',
      type: 'primary-source',
      backgroundImage: 'https://cdn.midjourney.com/36583bff-7fb4-460a-be0d-609f09513530/0_0.png',
      prompt: 'Examine this description of ancient Greek bards and oral poetry',

      source: {
        title: 'The Role of the Bard in Ancient Greece',
        author: 'Modern scholarly description',
        date: 'Based on ancient sources',
        type: 'text',
        content: `In ancient Greece, bards (also called rhapsodes or aoidos) were professional poets who traveled from city to city, performing epic poems at feasts, festivals, and public gatherings.<br /><br />

Unlike modern readers, ancient Greeks experienced their greatest literature through live performance. A skilled bard would:<br /><br />

• Memorize thousands of lines of poetry<br />
• Accompany recitation with a lyre or other instrument<br />
• Use formulas and repeated phrases to aid memory ("wine-dark sea," "rosy-fingered dawn")<br />
• Improvise variations while maintaining the core story<br />
• Perform with dramatic gestures and voice modulation<br /><br />

The Odyssey itself features bards as characters—Phemius in Odysseus's palace and Demodocus at the Phaeacian court—showing how central poetry was to Greek culture.<br /><br />

Bards held honored positions in society. They preserved history, taught moral lessons, celebrated heroes, and connected communities through shared stories. Their performances were not mere entertainment—they were cultural education, religious ritual, and collective memory.`,
        citation: 'Description based on Homer\'s Odyssey and historical scholarship on oral poetry traditions',
      },

      questions: [
        {
          id: 'prologue-bard-q1',
          question: 'How did ancient Greeks primarily experience epic poetry like the Odyssey?',
          type: 'multiple-choice',
          options: [
            'By reading scrolls privately',
            'Through live performances by bards',
            'In school lessons',
            'Through written manuscripts',
          ],
          correctAnswer: 'Through live performances by bards',
          explanation: 'Ancient Greeks experienced epic poetry through live performances by traveling bards who recited from memory with musical accompaniment. This oral tradition predated widespread literacy and made poetry a communal, performative experience.',
        },
        {
          id: 'prologue-bard-q2',
          question: 'What purpose did repeated phrases like "wine-dark sea" serve?',
          type: 'multiple-choice',
          options: [
            'They were just poetic decoration',
            'They helped bards memorize and recite thousands of lines',
            'They confused the audience',
            'They were mistakes in translation',
          ],
          correctAnswer: 'They helped bards memorize and recite thousands of lines',
          explanation: 'Repeated epithets and formulas served a practical purpose—they helped bards memorize vast amounts of poetry and gave them ready-made phrases to fit the meter. These "formulaic phrases" are a hallmark of oral poetry tradition.',
        },
        {
          id: 'prologue-bard-q3',
          question: 'According to the text, what role did bards play beyond entertainment?',
          type: 'multiple-choice',
          options: [
            'They only performed at parties',
            'They preserved history, taught morals, and served as cultural memory',
            'They wrote down stories for libraries',
            'They composed music but not stories',
          ],
          correctAnswer: 'They preserved history, taught morals, and served as cultural memory',
          explanation: 'Bards were cultural educators who preserved historical memory, taught ethical lessons through heroic examples, and maintained the shared stories that defined Greek identity. Their role was sacred and essential to society.',
        },
      ],

      learningPoints: [
        {
          id: 'prologue-lp-5-bard-role',
          content: 'Bards were professional poets who performed epics from memory, serving as educators, historians, and cultural preservers.',
          category: 'historical-context',
        },
        {
          id: 'prologue-lp-6-oral-formulas',
          content: 'Repeated epithets and formulaic phrases helped bards memorize poetry and are characteristic of oral tradition.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 4: The Hero's Character - Odysseus
    {
      id: 'prologue-scene-4-odysseus-character',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/5b73f8c0-19fe-4088-99e6-b24f42129a00/0_0.png',
      image: 'https://cdn.midjourney.com/db443600-a5ab-4c7e-8903-853c0d7ee382/0_0.png',

      content: `"Who is this man?" you ask your audience. "This Odysseus, whose name will echo through the ages?"

He is many things. King of Ithaca, a small rocky island in the western sea—modest in wealth but rich in loyalty. A husband to wise Penelope, who matched his own cunning. A father to infant Telemachus, whom he left in the cradle when the war called.

Among the Greek heroes, Odysseus stood apart. Achilles had his godlike strength, Ajax his might, Agamemnon his power—but Odysseus? He had his mind.

They called him polytropos—the man of many turns, many ways. Eloquent in counsel, clever in strategy, swift to adapt. Where others saw only walls, he saw hidden doors. Where others charged forward, he stepped sideways. He could talk his way out of death itself.

But cleverness has its price. The gods watch those who think themselves wise. Pride can wear the mask of intelligence. And the line between cunning and hubris... that line is thin indeed.`,

      inlineAnnotations: [
        {
          id: 'prologue-annotation-ithaca',
          text: 'Ithaca',
          tooltip: {
            title: 'Odysseus\'s Island Kingdom',
            content: 'Ithaca is a small, rocky island in the Ionian Sea off western Greece. Though modest in resources, it is Odysseus\'s beloved homeland—the destination he will fight for ten years to reach.',
            category: 'historical-context',
          },
        },
        {
          id: 'prologue-annotation-polytropos',
          text: 'polytropos',
          tooltip: {
            title: 'Man of Many Ways',
            content: 'Polytropos is Odysseus\'s defining epithet, meaning "of many turns" or "versatile." It captures his adaptability, cunning, and complex nature—for better and worse.',
            category: 'literary-context',
          },
        },
        {
          id: 'prologue-annotation-hubris',
          text: 'hubris',
          tooltip: {
            title: 'Excessive Pride',
            content: 'Hubris is excessive pride or arrogance, especially toward the gods. It is the classic tragic flaw in Greek literature, often leading to downfall. The gods punish mortals who forget their place.',
            category: 'cultural-context',
          },
        },
      ],

      learningPoints: [
        {
          id: 'prologue-lp-7-odysseus-character',
          content: 'Odysseus is characterized by intelligence, eloquence, and adaptability—his mind is his greatest weapon.',
          category: 'literary-context',
        },
        {
          id: 'prologue-lp-8-hubris-theme',
          content: 'Hubris (excessive pride) is a central theme in Greek literature—it represents the danger of mortals overstepping their bounds.',
          category: 'cultural-context',
        },
      ],
    },

    // Scene 5: The Home He Left Behind
    {
      id: 'prologue-scene-5-ithaca-penelope',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/36583bff-7fb4-460a-be0d-609f09513530/0_0.png',
      image: 'https://cdn.midjourney.com/8fc0fd4b-0176-43f5-9753-fa207690b58c/0_0.png',

      content: `Your audience shifts, eager for the adventure to begin. But you raise a hand.

"To understand this journey," you say, "you must understand what he fights to reach."

Picture Ithaca. Not grand like Mycenae or rich like Sparta—just a rocky island with olive groves and steep hills, sheep and goats, simple people living simple lives. But to Odysseus, it is the center of the world.

Picture Penelope, his wife. Beautiful, yes, but more—clever, patient, loyal. When Odysseus left for Troy, she stood on the shore holding their infant son, watching the black-prowed ships disappear. She did not weep. She was a king's wife. She would endure.

Picture young Telemachus, a baby in his mother's arms, reaching toward a father who would become only a story, a name, a hope.

The war would take ten years. No one knew that then. No one imagined what would come after. But Odysseus made a promise on that shore: "I will return."

That promise would be tested beyond all mortal limits.`,

      inlineAnnotations: [
        {
          id: 'prologue-annotation-penelope',
          text: 'Penelope',
          tooltip: {
            title: 'Queen of Ithaca',
            content: 'Penelope embodies loyalty and intelligence. She is Odysseus\'s equal in cunning and endurance, making her one of Greek literature\'s most complex female characters.',
            category: 'reference',
          },
        },
        {
          id: 'prologue-annotation-telemachus',
          text: 'Telemachus',
          tooltip: {
            title: 'Odysseus\'s Son',
            content: 'Telemachus was an infant when Odysseus left for Troy. His coming-of-age journey to find his father forms a parallel narrative in the Odyssey.',
            category: 'reference',
          },
        },
      ],

      learningPoints: [
        {
          id: 'prologue-lp-9-nostos',
          content: 'Nostos (homecoming) is the central theme of the Odyssey—the deep human need to return home.',
          category: 'literary-context',
        },
        {
          id: 'prologue-lp-10-penelope-loyalty',
          content: 'Penelope represents loyalty and endurance, serving as Odysseus\'s counterpart and the embodiment of what he fights to reach.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 6: Primary Source - Ancient Greek Map (KEEP EXISTING)
    {
      id: 'prologue-scene-6-map-analysis',
      type: 'primary-source',
      backgroundImage: 'https://cdn.midjourney.com/36583bff-7fb4-460a-be0d-609f09513530/0_0.png',
      prompt: 'Examine this ancient Greek conception of the Mediterranean world',

      source: {
        title: 'Hecataeus World Map',
        author: 'Hecataeus of Miletus (reconstruction)',
        date: 'c. 6th-5th century BCE',
        type: 'image',
        content: '/Imsie/assets/the-odyssey/maps/hecataeus_map.jpg',
        citation: 'Reconstruction of the world map by Hecataeus of Miletus, showing the ancient Greek conception of the Mediterranean and surrounding lands',
      },

      questions: [
        {
          id: 'prologue-map-q1',
          question: 'According to this ancient Greek map, what shape did they believe the world to be?',
          type: 'multiple-choice',
          options: [
            'A flat disc surrounded by ocean',
            'A perfect sphere like modern globes',
            'A rectangle divided into sections',
            'An irregular shape with no defined boundary',
          ],
          correctAnswer: 'A flat disc surrounded by ocean',
          explanation: 'This Hecataeus map shows the ancient Greek conception of the world as a circular disc with three continents (Europe, Libya, and Asia) surrounded by an endless ocean. This ocean boundary represents both the physical edge and the mythological realm beyond known geography.',
        },
        {
          id: 'prologue-map-q2',
          question: 'What three major land masses does this map divide the world into?',
          type: 'multiple-choice',
          options: [
            'Europe, Libya (Africa), and Asia',
            'Greece, Troy, and Egypt',
            'East, West, and South',
            'Land, Sea, and Mountains',
          ],
          correctAnswer: 'Europe, Libya (Africa), and Asia',
          explanation: 'The map clearly labels the three continents as understood by ancient Greeks: Europe in the north, Libya (their name for Africa) in the south, and Asia in the east. The Mediterranean Sea sits at the center where these three continents meet.',
        },
        {
          id: 'prologue-map-q3',
          question: 'Why would Homer set Odysseus\'s adventures beyond the boundaries shown on this map?',
          type: 'multiple-choice',
          options: [
            'To make the journey feel mundane and realistic',
            'To create a mythological space where the impossible becomes possible',
            'To accurately document real historical trade routes',
            'To confuse his audience about real geography',
          ],
          correctAnswer: 'To create a mythological space where the impossible becomes possible',
          explanation: 'The encircling ocean and the lands beyond the known world represented a liminal space between reality and myth. By setting adventures in these mysterious edges, Homer creates a realm where cyclopes, sirens, and gods can exist—a literary space for exploring the limits of human endurance and virtue.',
        },
      ],

      learningPoints: [
        {
          id: 'prologue-lp-11-geography-myth',
          content: 'Ancient Greek geography blended empirical knowledge with mythological imagination—the edges of maps held wonders and terrors.',
          category: 'historical-context',
        },
        {
          id: 'prologue-lp-12-epic-geography',
          content: 'Epic adventures occur at the boundaries of the known world—a literary space where the impossible becomes possible.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 7: Quote Attribution - Epic Poetry Conventions
    {
      id: 'prologue-scene-7-epic-conventions',
      type: 'quote-attribution',
      backgroundImage: 'https://cdn.midjourney.com/36583bff-7fb4-460a-be0d-609f09513530/0_0.png',
      prompt: 'Match these famous Homeric phrases to their purposes in epic poetry',

      quotes: [
        {
          id: 'prologue-quote-1',
          text: 'The wine-dark sea',
          speaker: 'Formulaic epithet for the sea',
          context: 'Repeated whenever describing the ocean',
          explanation: 'Repeated epithets like "wine-dark sea" helped bards memorize poetry and created rhythm. These "formulaic phrases" are hallmarks of oral tradition, providing ready-made descriptions that fit the meter.',
        },
        {
          id: 'prologue-quote-2',
          text: 'Rosy-fingered dawn',
          speaker: 'Formulaic epithet for dawn/morning',
          context: 'Used each time day breaks',
          explanation: 'This beautiful phrase for dawn is repeated throughout the epic. Such epithets create vivid imagery while serving the practical purpose of aiding memorization and maintaining poetic meter.',
        },
        {
          id: 'prologue-quote-3',
          text: 'Grey-eyed Athena',
          speaker: 'Formulaic epithet for the goddess Athena',
          context: 'Used whenever Athena appears or is mentioned',
          explanation: '"Grey-eyed" (or "gleaming-eyed") is Athena\'s signature epithet, emphasizing her keen sight and wisdom. It identifies her instantly while fitting the epic\'s hexameter rhythm.',
        },
        {
          id: 'prologue-quote-4',
          text: 'Sing to me, O Muse...',
          speaker: 'Epic invocation to begin the poem',
          context: 'Opening line requesting divine inspiration',
          explanation: 'Epic poems traditionally begin by invoking the Muse, asking for divine inspiration. This establishes the poem\'s sacred authority and signals the beginning of the performance.',
        },
        {
          id: 'prologue-quote-5',
          text: 'Tell me, O Muse, of the man of many ways...',
          speaker: 'The Odyssey\'s opening invocation',
          context: 'The very first line of the Odyssey',
          explanation: 'This famous opening immediately establishes Odysseus\'s defining characteristic—polytropos, "of many ways"—while invoking the Muse\'s authority to tell his story.',
        },
        {
          id: 'prologue-quote-6',
          text: 'When early-born rosy-fingered dawn appeared...',
          speaker: 'Formulaic transition between scenes',
          context: 'Used to mark the passage of time',
          explanation: 'This formulaic phrase helps bards transition between scenes and mark time\'s passage. It\'s both beautiful poetry and practical structure for oral performance.',
        },
      ],

      learningPoints: [
        {
          id: 'prologue-lp-13-epithets',
          content: 'Epithets are repeated descriptive phrases that characterize gods, heroes, and natural phenomena throughout the epic.',
          category: 'literary-context',
        },
        {
          id: 'prologue-lp-14-formulas',
          content: 'Formulaic language in oral poetry serves both artistic and practical purposes—creating beauty while aiding memorization.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 8: Narrative - The Bard Introduces Xenia
    {
      id: 'prologue-scene-8-xenia-intro',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/36583bff-7fb4-460a-be0d-609f09513530/0_0.png',
      image: 'https://cdn.midjourney.com/db443600-a5ab-4c7e-8903-853c0d7ee382/0_0.png',

      content: `"But before we begin Odysseus's journey," you say, your voice taking on a more serious tone, "you must understand one sacred law that governs all Greek life."

Your audience leans in, sensing this is important.

"We call it xenia—the sacred bond between host and guest. When a stranger arrives at your door, you do not ask their name. You do not question their purpose. You welcome them. You offer food, shelter, a place by your fire. Only after they are fed and rested do you ask who they are.

Why? Because the stranger at your door might be a god in disguise, testing your virtue. Or they might be a hero who will one day save your life. Or they might simply be a fellow mortal in need—and are we not all travelers in this world?

Zeus himself watches over xenia. He is Zeus Xenios—Zeus the Protector of Guests. Those who honor hospitality earn his favor. Those who violate it..." You pause dramatically. "They face divine wrath.

But xenia is a bond of two parts. Hosts must welcome. Guests must respect. A guest who overstays, who consumes without gratitude, who abuses kindness—that guest breaks the sacred law just as surely as a cruel host.

In the tale I am about to tell, you will see xenia honored and violated. You will see the rewards of hospitality and the price of breaking this sacred bond. For Odysseus's journey is not just about sailing home—it is about how we treat strangers, how we honor sacred laws, and what it means to be civilized."

You gesture to the hall around you.

"Now, let us see if you understand this sacred law..."`,

      inlineAnnotations: [
        {
          id: 'prologue-annotation-xenia',
          text: 'xenia',
          tooltip: {
            title: 'Sacred Hospitality',
            content: 'Xenia was the Greek code of hospitality—a sacred duty protected by Zeus. Hosts must welcome strangers and provide food and shelter; guests must respect their hosts and not abuse kindness.',
            category: 'cultural-context',
          },
        },
        {
          id: 'prologue-annotation-zeus-xenios',
          text: 'Zeus Xenios',
          tooltip: {
            title: 'Zeus the Protector of Guests',
            content: 'Zeus Xenios was one of Zeus\'s roles—as the divine protector of hospitality. He punished those who violated xenia and rewarded those who honored it. This made hospitality a religious duty, not just a social custom.',
            category: 'cultural-context',
          },
        },
      ],

      learningPoints: [
        {
          id: 'prologue-lp-15a-xenia-sacred',
          content: 'Xenia was not just courtesy but a sacred religious duty—protected by Zeus himself and central to Greek civilization.',
          category: 'cultural-context',
        },
        {
          id: 'prologue-lp-15b-xenia-reciprocal',
          content: 'Xenia required reciprocal responsibilities—hosts must welcome, guests must respect. Both could violate the sacred bond.',
          category: 'cultural-context',
        },
      ],
    },

    // Scene 9: Cause-Effect - Understanding Xenia (Hospitality)
    {
      id: 'prologue-scene-9-xenia-game',
      type: 'cause-effect',
      backgroundImage: 'https://cdn.midjourney.com/36583bff-7fb4-460a-be0d-609f09513530/0_0.png',
      prompt: 'Match each violation or practice of xenia (hospitality) with its consequence',

      pairs: [
        {
          id: 'xenia-pair-1',
          cause: 'A host welcomes a stranger, offers food and shelter without asking questions',
          effect: 'The gods favor the host; the stranger may turn out to be a god in disguise testing mortals',
          explanation: 'Proper xenia required hosts to feed and shelter guests before even asking their names. The gods often tested mortals by appearing as strangers—those who showed hospitality were rewarded.',
        },
        {
          id: 'xenia-pair-2',
          cause: 'A guest overstays their welcome and consumes the host\'s resources',
          effect: 'The guest violates xenia and becomes an enemy deserving punishment',
          explanation: 'Guests had duties too—they must respect their hosts and not abuse hospitality. The suitors in Odysseus\'s palace violate xenia by overstaying and consuming resources, making them both social and religious offenders.',
        },
        {
          id: 'xenia-pair-3',
          cause: 'A host refuses to welcome a stranger or harms a guest',
          effect: 'The gods punish the host for violating sacred hospitality',
          explanation: 'Refusing hospitality or harming guests was a grave offense against Zeus Xenios (Zeus as protector of guests). The gods would punish such violations, sometimes with destruction.',
        },
        {
          id: 'xenia-pair-4',
          cause: 'A guest brings gifts and honors their host before departing',
          effect: 'Bonds of guest-friendship (xenia) are established, creating lasting alliances between families',
          explanation: 'Proper xenia created lasting bonds called "guest-friendship." Hosts and guests exchanged gifts, and their families remained allies for generations. This network of xenia relationships shaped Greek society.',
        },
      ],

      learningPoints: [
        {
          id: 'prologue-lp-15-xenia',
          content: 'Xenia (hospitality) was a sacred duty in ancient Greece, protected by Zeus and central to social order.',
          category: 'cultural-context',
        },
        {
          id: 'prologue-lp-16-xenia-reciprocal',
          content: 'Xenia was reciprocal—both hosts and guests had duties. Violations by either party were serious offenses.',
          category: 'cultural-context',
        },
      ],
    },

    // Scene 10: The Gods Watch
    {
      id: 'prologue-scene-10-divine-interest',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/573cae62-4b25-4010-981a-0174d126bf10/0_0.png',
      image: 'https://cdn.midjourney.com/5bc86d1b-a607-4219-9531-257826818deb/0_0.png',

      content: `You pause in your recitation, letting the silence build. Your audience waits, breathless.

"But mortals do not journey alone," you say. "The gods watch. The gods judge. The gods intervene."

High on Mount Olympus, the immortal beings debate the fates of mortals like players moving pieces on a board. They have their favorites, their enemies, their whims.

Athena, grey-eyed goddess of wisdom, admires Odysseus. She sees herself in his clever mind, his eloquent speech. She will help him when she can—though even gods must respect each other's domains.

But not all gods favor the cunning king. And when a mortal earns divine wrath... the journey home becomes far more than mere distance.

The gods will test Odysseus. They will challenge him, punish him, transform him. Whether he reaches Ithaca depends not just on his wit, but on whether he can learn what the gods would teach.`,

      inlineAnnotations: [
        {
          id: 'prologue-annotation-olympus',
          text: 'Mount Olympus',
          tooltip: {
            title: 'Home of the Gods',
            content: 'Mount Olympus is Greece\'s highest peak and the mythological home of the twelve Olympian gods. From this divine realm, the gods observe and intervene in human affairs.',
            category: 'cultural-context',
          },
        },
        {
          id: 'prologue-annotation-athena-wisdom',
          text: 'Athena',
          tooltip: {
            title: 'Goddess of Wisdom',
            content: 'Athena is the goddess of wisdom, strategic warfare, and crafts. She favors Odysseus because they share qualities of intelligence and strategy. She will be his divine patron throughout his journey.',
            category: 'cultural-context',
          },
        },
      ],

      learningPoints: [
        {
          id: 'prologue-lp-17-divine-intervention',
          content: 'Divine intervention is central to Greek epic—gods actively help or hinder mortals, shaping destinies.',
          category: 'cultural-context',
        },
        {
          id: 'prologue-lp-18-athena-patron',
          content: 'Athena serves as Odysseus\'s divine patron because they share qualities of intelligence, strategy, and eloquence.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 11: The Journey Begins
    {
      id: 'prologue-scene-11-journey-begins',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/59737e94-117d-4863-a40b-8ec451739576/0_0.png',
      image: 'https://cdn.midjourney.com/1168856d-c1ed-4008-bbf4-546f6c0ce88f/0_0.png',

      content: `You strike a final chord on your lyre. Your audience sits at the edge of their seats, eyes wide with anticipation.

"Troy burns," you say, your voice dropping to barely a whisper. "The city that stood for ten years falls in a single night. Smoke rises to the heavens. The Greek heroes prepare their black-prowed ships for home."

You let the moment stretch.

"Odysseus stands at the prow of his lead vessel, twelve ships at his command, six hundred loyal men ready to follow him home to Ithaca. The wind fills the sails. The oars strike the wine-dark sea. Home is just across the water—a few weeks' sail, perhaps less.

But the gods have other plans.

What should be a simple voyage will become an odyssey—ten years of trials, terrors, and transformation. Odysseus will face monsters and magic, temptation and tragedy, the wrath of gods and the depths of the underworld itself.

He will lose everything. He will gain wisdom. He will discover what it truly means to be a hero.

And through it all, one question will drive him forward: Can he make it home?"

You look around the hall, meeting every eye.

"Let us find out together. But first..."

You smile.

"Let's see what you've learned before the adventure begins."`,

      learningPoints: [
        {
          id: 'prologue-lp-19-epic-scope',
          content: 'The Odyssey spans ten years and takes Odysseus from Troy to the edges of the known world and back to Ithaca.',
          category: 'literary-context',
        },
        {
          id: 'prologue-lp-20-transformation',
          content: 'The journey is not just physical but spiritual—Odysseus must transform and grow to earn his homecoming.',
          category: 'literary-context',
        },
      ],

      events: {
        onExit: [
          {
            type: 'quiz',
            componentId: 'quiz-prologue',
            condition: {
              type: 'if-not-completed',
            },
          },
        ],
      },
    },
  ],

  endQuiz: prologueQuiz,
};

import type { Chapter } from '../../../types';
import { chapter0Quiz } from '../quizzes/chapter-0-quiz';

/**
 * Chapter 0: Prologue - Before the Wrath
 *
 * This optional prologue provides essential context for understanding the Trojan War.
 * Homer's Iliad famously begins in medias res (in the middle of things), ten years
 * into the war. This chapter explains how the catastrophic conflict began.
 *
 * Duration: 25-30 minutes
 * Scenes: 10
 */
export const chapter0: Chapter = {
  id: 'iliad-ch0-prologue',
  title: 'Prologue: Before the Wrath',
  description: 'Discover how a golden apple, a beauty contest, and a prince\'s choice sparked the greatest war in Greek mythology.',

  learningObjectives: [
    'Understand the mythological origins of the Trojan War',
    'Identify key characters and their relationships before the war',
    'Recognize the epic poetry convention of in medias res',
    'Appreciate why context matters for understanding the Iliad\'s opening',
  ],

  scenes: [
    // Scene 1: Meta-Introduction
    {
      id: 'iliad-ch0-sc1-intro',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/0c803d89-4251-4253-a8a0-ffacf36d9118/0_0.png',

      content: `Welcome to Homer's Iliad—but not quite yet.

The Iliad is one of the oldest and greatest works of literature in human history, an epic poem composed around 750 BCE about events that may have occurred around 1200 BCE. But here's the thing: Homer's epic doesn't start at the beginning.

The Iliad famously begins *in medias res*—Latin for "in the middle of things." When you open the poem, you're thrown directly into the tenth year of the Trojan War, with the Greeks and Trojans already locked in brutal combat.

Before we experience that legendary opening, you need to understand how this catastrophic conflict began. This prologue will take you back to the true beginning—to a golden apple, three jealous goddesses, and a shepherd prince whose choice doomed two civilizations.`,

      learningPoints: [
        {
          id: 'lp-ch0-1-medias-res',
          content: 'In medias res is an epic poetry convention where the story begins in the middle of the action, then fills in background through flashbacks or exposition.',
          category: 'literary-technique',
        },
        {
          id: 'lp-ch0-1-homer',
          content: 'Homer\'s Iliad (circa 750 BCE) recounts legendary events from the Trojan War, blending historical memory with mythological storytelling.',
          category: 'historical-context',
        },
      ],
    },

    // Scene 2: The Judgment of Paris
    {
      id: 'iliad-ch0-sc2-judgment',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/3bc7e73b-2aa5-4375-92be-24954ad2bc7f/0_0.png',
      image: 'https://cdn.midjourney.com/509d8983-818d-4135-b8d1-4797b5a7c946/0_0.png',

      content: `It began with a wedding—and an insult.

When the sea goddess Thetis married the mortal Peleus, all the gods were invited to celebrate. All except one: Eris, goddess of discord and strife. Furious at the snub, Eris crashed the wedding and threw a golden apple into the crowd. Inscribed on it were three words: "To the Fairest."

Three goddesses immediately claimed it: Hera, queen of the gods; Athena, goddess of wisdom and war; and Aphrodite, goddess of love and beauty. Each believed herself the most beautiful, and their argument threatened to tear Olympus apart.

Zeus, wisely refusing to judge between his wife, his daughter, and his niece, appointed a mortal to decide: Paris, a shepherd prince of Troy, tending his flocks on Mount Ida. The three goddesses appeared before him in all their divine glory, each offering bribes for his vote.

Hera promised power—dominion over all of Asia. Athena promised glory in battle—victory in every war. But Aphrodite promised something else entirely: the love of Helen, the most beautiful woman in the world.

Paris chose Aphrodite.`,

      learningPoints: [
        {
          id: 'lp-ch0-2-divine-vanity',
          content: 'The Judgment of Paris shows how Greek mythology portrayed even gods as susceptible to vanity, jealousy, and pride.',
          category: 'thematic-analysis',
        },
        {
          id: 'lp-ch0-2-fateful-choice',
          content: 'Paris\'s choice of love over power or glory represents the theme of desire overcoming reason—a pattern that drives the entire epic.',
          category: 'character-analysis',
        },
      ],
    },

    // Scene 3: Decision - What Would You Choose?
    {
      id: 'iliad-ch0-sc3-decision',
      type: 'decision',
      backgroundImage: 'https://cdn.midjourney.com/3bc7e73b-2aa5-4375-92be-24954ad2bc7f/0_0.png',

      prompt: 'If you were Paris, which goddess would you choose?',
      context: `Three immortal goddesses stand before you, each radiating divine power and beauty. Each offers you a gift beyond mortal dreams. But you can choose only one—and your choice will echo through history.

Which gift calls to you?`,

      choices: [
        {
          id: 'choice-hera-power',
          text: 'Hera\'s offer: Power and dominion over kingdoms',
          consequence: 'A practical choice. Hera promises you political power, control over vast territories, and the ability to command armies. But Paris chose differently—he wanted something politics couldn\'t give him.',
          learningPoints: [
            {
              id: 'lp-ch0-3a-power',
              content: 'Hera\'s offer represents the political dimension of heroism—rulership and dominion over others.',
              category: 'cultural-context',
            },
          ],
        },
        {
          id: 'choice-athena-glory',
          text: 'Athena\'s offer: Glory and victory in battle',
          consequence: 'An honorable choice. Athena promises you kleos—undying glory through martial achievement. This is what Greek heroes traditionally sought. But Paris was a lover, not a warrior.',
          learningPoints: [
            {
              id: 'lp-ch0-3b-glory',
              content: 'Athena\'s offer embodies the traditional Greek heroic value of kleos—eternal glory won through great deeds in battle.',
              category: 'cultural-context',
            },
          ],
        },
        {
          id: 'choice-aphrodite-love',
          text: 'Aphrodite\'s offer: The love of the most beautiful woman in the world',
          consequence: 'The choice Paris made. Aphrodite promised him Helen of Sparta—and he couldn\'t resist. This choice would launch a thousand ships and doom two civilizations. Love, desire, and beauty won over power and glory.',
          learningPoints: [
            {
              id: 'lp-ch0-3c-love',
              content: 'Paris\'s choice of love over traditional heroic values marks him as a different kind of hero—one driven by passion rather than martial honor.',
              category: 'cultural-context',
            },
          ],
        },
      ],

      learningPoints: [
        {
          id: 'lp-ch0-3-impossible-choice',
          content: 'The Judgment of Paris presents an impossible choice where any decision creates enemies—a recurring pattern in Greek tragedy.',
          category: 'plot-structure',
        },
      ],
    },

    // Scene 4: Paris and Helen
    {
      id: 'iliad-ch0-sc4-helen',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/02b11aea-724c-4fd3-b376-71d921f4aec1/0_0.png',
      image: 'https://cdn.midjourney.com/131be648-c75e-4307-aa3d-9497682b9ffa/0_0.png',

      content: `Aphrodite kept her promise.

Paris traveled to Sparta as a diplomatic guest of King Menelaus. There he met Helen, Menelaus's wife, daughter of Zeus, and—just as Aphrodite had promised—the most beautiful woman in the world. With the goddess's help, Paris and Helen fell deeply in love.

What happened next depends on who tells the story. Some say Helen was abducted against her will, a victim of Paris's lust and Aphrodite's manipulation. Others say she went willingly, choosing passionate love over her dutiful marriage.

Either way, Paris took Helen from Sparta and sailed with her to Troy. When Menelaus discovered his wife was gone, his rage shook all of Greece.

This was no ordinary marriage dispute. Before Helen married Menelaus, she had been courted by nearly every prince and king in Greece. Her earthly father, fearing that rejected suitors might start wars over her, had made them all swear an oath: they would defend whichever man Helen chose to marry.

Now that oath would be called due. Menelaus appealed to his brother Agamemnon, the most powerful king in Greece. Agamemnon sent word to every Greek kingdom: the oath must be honored. They would sail to Troy, take Helen back, and punish Paris for his crime.

All of Greece prepared for war.`,

      inlineAnnotations: [
        {
          id: 'annotation-helen-agency',
          text: 'Helen was abducted against her will',
          tooltip: {
            title: 'Helen\'s Agency',
            content: 'Ancient sources disagree on whether Helen was kidnapped or went willingly. This ambiguity reflects Greek anxieties about female desire and agency—was Helen a victim or a willing participant in her own story?',
            category: 'cultural-context',
          },
        },
      ],

      learningPoints: [
        {
          id: 'lp-ch0-4-helen',
          content: 'Helen\'s ambiguous role—victim or willing participant—makes her one of literature\'s most complex female characters, embodying Greek tensions about beauty, desire, and responsibility.',
          category: 'character-analysis',
        },
        {
          id: 'lp-ch0-4-oath',
          content: 'The oath of Helen\'s suitors shows how Greek society used sacred vows to prevent conflicts—yet paradoxically, the oath itself enabled the war.',
          category: 'cultural-context',
        },
      ],
    },

    // Scene 5: Primary Source - Views on Helen
    {
      id: 'iliad-ch0-sc5-source',
      type: 'primary-source',
      backgroundImage: 'https://cdn.midjourney.com/02b11aea-724c-4fd3-b376-71d921f4aec1/0_0.png',
      prompt: 'Read these ancient perspectives on Helen and answer the questions below.',

      source: {
        title: 'The Question of Blame',
        author: 'Various ancient Greek sources',
        date: '8th-5th centuries BCE',
        type: 'text',
        content: `**Homer (The Iliad):**<br />
"Helen herself I would not blame—I blame the gods who drove the Achaeans to fight this terrible war."
<br /><br />
**Sappho (Fragment 16):**<br />
"Some say an army of horsemen, some of footsoldiers, some of ships, is the most beautiful thing on the dark earth, but I say it is whatever one loves... Helen abandoned her husband and sailed to Troy, giving no thought to her child or dear parents, but [love] led her astray."
<br /><br />
**Euripides (Helen):**<br />
"I am Helen. I will tell you of the evils I have suffered... The goddess Hera, angry at not winning the beauty contest, made a phantom Helen from clouds, and gave this to Paris. He thinks he has me, but he does not."
<br /><br />
**The Greek Proverb:**<br />
"The face that launched a thousand ships."
<br /><br />
These sources show radically different views:<br />
- Homer emphasizes divine causation over human responsibility<br />
- Sappho focuses on Helen's choice, driven by love's power<br />
- Euripides invents a phantom Helen, absolving the real Helen entirely<br />
- The proverb reduces Helen to her beauty, making her a passive object
<br /><br />
How much agency did Helen have? How much responsibility? Greek writers couldn't agree—and neither can we.`,
      },

      questions: [
        {
          id: 'helen-q1',
          question: 'Based on these sources, which best describes the ancient Greek view of Helen\'s responsibility for the war?',
          type: 'multiple-choice',
          options: [
            'All Greeks agreed she was completely guilty',
            'All Greeks agreed she was completely innocent',
            'Greeks had conflicting views, debating the role of divine influence versus human choice',
            'Greeks didn\'t consider questions of responsibility important',
          ],
          correctAnswer: 'Greeks had conflicting views, debating the role of divine influence versus human choice',
          explanation: 'Ancient Greek sources show diverse perspectives on Helen, reflecting ongoing debates about fate versus free will, divine manipulation versus human responsibility, and female agency.',
        },
        {
          id: 'helen-q2',
          question: 'What does Euripides\' "phantom Helen" story suggest about Greek attitudes toward the war?',
          type: 'multiple-choice',
          options: [
            'That the war was fought over nothing real',
            'That Helen was never in Troy at all',
            'That Greeks were looking for ways to question whether the war was worth its cost',
            'That phantoms were common in Greek warfare',
          ],
          correctAnswer: 'That Greeks were looking for ways to question whether the war was worth its cost',
          explanation: 'Euripides wrote during and after the devastating Peloponnesian War. His "phantom Helen" story asks: what if the whole Trojan War was fought over an illusion? This reflects Greek anxieties about the futility of war.',
        },
      ],

      learningPoints: [
        {
          id: 'lp-ch0-5-sources',
          content: 'Primary sources reveal that ancient Greeks actively debated the morality and meaning of their own myths, showing sophisticated critical thinking.',
          category: 'historical-context',
        },
      ],
    },

    // Scene 6: The Gathering of the Greek Fleet
    {
      id: 'iliad-ch0-sc6-gathering',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/1b710b07-0ab1-4116-9362-7a4ccfd315dd/0_0.png',
      image: 'https://cdn.midjourney.com/3420b39f-34b6-4031-ad81-1dfdb8d7ae77/0_0.png',

      content: `Agamemnon's call to arms echoed across Greece.

From every kingdom, the greatest heroes of the age assembled. Odysseus, the cunning king of Ithaca, renowned for his intelligence. Ajax, a giant of a man, nearly invincible in combat. Diomedes, young and fierce, eager to prove himself. Nestor, the wise old king who had seen generations of heroes rise and fall.

And from Phthia came Achilles—the greatest warrior the world had ever seen, son of the sea goddess Thetis and the mortal king Peleus. A prophecy hung over Achilles: he could choose a long, peaceful life in obscurity, or a short life with eternal glory. He chose glory.

The fleet gathered at Aulis—over a thousand black ships, the largest military expedition the world had ever seen. Christopher Marlowe would later write that Helen's beauty "launch'd a thousand ships"—and it was true.

They sailed across the Aegean Sea to the coast of Troy, pulled their ships onto the beach, and prepared for what they thought would be a quick siege. Troy would fall, Helen would be reclaimed, Paris would be punished, and the heroes would return home covered in glory.

They were wrong. The war would last ten years.`,

      inlineAnnotations: [
        {
          id: 'annotation-achilles-choice',
          text: 'prophecy hung over Achilles',
          tooltip: {
            title: 'Achilles\' Choice',
            content: 'Achilles\' choice between long life and kleos (eternal glory) is the central tragedy of his character. He knows he will die young at Troy, but cannot resist the call of immortal fame.',
            category: 'literary-context',
          },
        },
      ],

      learningPoints: [
        {
          id: 'lp-ch0-6-heroes',
          content: 'The Greek expedition to Troy assembled an all-star cast of heroes, each with distinct personalities and skills—a pattern that influenced ensemble storytelling for millennia.',
          category: 'literary-technique',
        },
        {
          id: 'lp-ch0-6-kleos',
          content: 'Kleos (eternal glory through great deeds) was the highest goal for Greek heroes, valued above long life, wealth, or personal happiness.',
          category: 'cultural-context',
        },
      ],
    },

    // Scene 7: Map Exploration - The Mediterranean
    {
      id: 'iliad-ch0-sc7-map',
      type: 'map-exploration',
      backgroundImage: 'https://cdn.midjourney.com/e827ec4e-84c6-43e7-af94-6bce70e0eaa3/0_0.png',
      prompt: 'Explore the scale of the Greek military undertaking. Over 1,000 ships sailed from dozens of Greek kingdoms across the Aegean Sea to besiege Troy.',

      mapImage: 'https://cdn.midjourney.com/e827ec4e-84c6-43e7-af94-6bce70e0eaa3/0_0.png',

      locations: [
        {
          id: 'loc-sparta',
          name: 'Sparta',
          x: 51,
          y: 63,
          content: 'Kingdom of Menelaus and Helen. The abduction of Helen from Sparta sparked the war.',
          image: 'https://cdn.midjourney.com/02b11aea-724c-4fd3-b376-71d921f4aec1/0_0.png',
        },
        {
          id: 'loc-mycenae',
          name: 'Mycenae',
          x: 54,
          y: 57,
          content: 'Kingdom of Agamemnon, Menelaus\'s brother. Agamemnon commanded the entire Greek expedition as high king.',
          image: 'https://cdn.midjourney.com/1b710b07-0ab1-4116-9362-7a4ccfd315dd/0_0.png',
        },
        {
          id: 'loc-ithaca',
          name: 'Ithaca',
          x: 41,
          y: 50,
          content: 'Island kingdom of Odysseus, the cunning hero whose journey home would take another ten years after the war.',
          image: 'https://cdn.midjourney.com/34ad4d1b-d760-4913-83c6-255dae479e59/0_0.png',
        },
        {
          id: 'loc-phthia',
          name: 'Phthia',
          x: 51,
          y: 43,
          content: 'Kingdom of Peleus and home of Achilles, the greatest warrior in the Greek army.',
          image: 'https://cdn.midjourney.com/06efb085-6559-475f-b242-c883368ea80c/0_0.png',
        },
        {
          id: 'loc-troy',
          name: 'Troy',
          x: 65,
          y: 35,
          content: 'The mighty city in Asia Minor (modern-day Turkey). Troy\'s wealth and strategic location made it a prize worth fighting for.',
          image: 'https://cdn.midjourney.com/0c803d89-4251-4253-a8a0-ffacf36d9118/0_0.png',
        },
        {
          id: 'loc-aegean',
          name: 'Aegean Sea',
          x: 61,
          y: 48,
          content: 'The sea crossing between Greece and Troy. The thousand-ship fleet sailed these waters to wage war.',
          image: 'https://cdn.midjourney.com/09b7c662-387b-4db6-86b8-62883b7fd5f0/0_0.png',
        },
      ],

      learningPoints: [
        {
          id: 'lp-ch0-7-geography',
          content: 'Troy\'s location at the entrance to the Dardanelles strait gave it control over trade routes between the Aegean and Black Seas, making it strategically and economically important.',
          category: 'historical-context',
        },
        {
          id: 'lp-ch0-7-expedition',
          content: 'The scale of the Greek expedition (1,000+ ships from dozens of kingdoms) shows this was a coalition war requiring unprecedented coordination.',
          category: 'historical-context',
        },
      ],
    },

    // Scene 8: Nine Years of Stalemate
    {
      id: 'iliad-ch0-sc8-stalemate',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/0c803d89-4251-4253-a8a0-ffacf36d9118/0_0.png',

      content: `Nine long years passed.

Troy's walls proved impregnable. The Greeks couldn't break through, and the Trojans couldn't drive them away. The war became a grinding stalemate, fought on the plain between the Greek camp and Troy's towering gates.

Heroes dueled. Men died. The beaches of Troy ran red with blood, but neither side could gain the advantage. The Greeks raided nearby cities for supplies and plunder, but Troy itself held firm.

Frustration grew in both camps. The Greeks were far from home, their glory tarnished by the endless siege. The Trojans were trapped in their city, watching their allies fall one by one. Everyone was exhausted. Everyone wanted it to end.

But pride kept them fighting. The Greeks couldn't return home without Helen—it would make the whole war meaningless. The Trojans couldn't surrender Paris—it would dishonor their prince and their city.

So the war dragged on into its tenth year. The camps became permanent. The battlefield became familiar. Warriors who had dreamed of quick glory now fought with grim determination, wondering if they would ever see their homes again.`,

      learningPoints: [
        {
          id: 'lp-ch0-8-futility',
          content: 'The nine-year stalemate emphasizes the Iliad\'s anti-war theme: war becomes its own justification, perpetuated by pride long after the original cause matters.',
          category: 'thematic-analysis',
        },
        {
          id: 'lp-ch0-8-realistic',
          content: 'Homer\'s depiction of war emphasizes exhaustion, frustration, and grinding routine rather than just glory—remarkably realistic for epic poetry.',
          category: 'literary-technique',
        },
      ],
    },

    // Scene 9: Timeline Game - Events Leading to Year Ten
    {
      id: 'iliad-ch0-sc9-timeline',
      type: 'timeline-game',
      backgroundImage: 'https://cdn.midjourney.com/0c803d89-4251-4253-a8a0-ffacf36d9118/0_0.png',

      prompt: 'Put these events in chronological order',

      successThreshold: 70,

      timelineEvents: [
        {
          id: 'event-1',
          title: 'Wedding of Peleus and Thetis',
          description: 'Eris throws the golden apple inscribed "To the Fairest"',
          year: 1,
        },
        {
          id: 'event-2',
          title: 'Judgment of Paris',
          description: 'Paris chooses Aphrodite over Hera and Athena',
          year: 2,
        },
        {
          id: 'event-3',
          title: 'Paris and Helen',
          description: 'Paris takes Helen from Sparta to Troy',
          year: 3,
        },
        {
          id: 'event-4',
          title: 'Greek Fleet Gathers',
          description: 'Over 1,000 ships assemble at Aulis',
          year: 4,
        },
        {
          id: 'event-5',
          title: 'Greeks Land at Troy',
          description: 'The siege begins, Greeks camp on the beach',
          year: 5,
        },
        {
          id: 'event-6',
          title: 'Nine Years of War',
          description: 'Stalemate: neither side can win',
          year: 6,
        },
      ],

      learningPoints: [
        {
          id: 'lp-ch0-9-causation',
          content: 'The chain of causation from divine vanity to human suffering spans years and involves both gods and mortals—typical of Greek tragic structure.',
          category: 'plot-structure',
        },
      ],
    },

    // Scene 10: Transition to the Iliad
    {
      id: 'iliad-ch0-sc10-transition',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/0c803d89-4251-4253-a8a0-ffacf36d9118/0_0.png',

      content: `Now the Iliad truly begins.

Year ten. The rage of Achilles.

Everything you've just learned—the Judgment of Paris, Helen's abduction, the gathering of the Greek fleet—Homer's audience already knew. They grew up hearing these stories. When Homer began his epic poem, he didn't start with any of this background.

Instead, he plunged his audience directly into the tenth year of the war, into a quarrel between Greece's greatest warrior and its most powerful king. He assumed you would know how the war started. He assumed you would understand the stakes.

This is *in medias res*—beginning in the middle of things. It's a technique that creates immediate dramatic tension. You're thrown into the action, surrounded by characters and conflicts already in motion. The background comes later, through memories and dialogue.

Now you have the context Homer's original audience possessed. You know the war's origins. You understand the prophecy hanging over Achilles. You recognize the names of the heroes.

You're ready.

**The Iliad begins with these famous words:**

*"Sing, goddess, the rage of Achilles, son of Peleus—*
*that murderous rage which condemned Achaeans to countless agonies*
*and sent many valiant souls hurrying down to Hades..."*

Let's witness that rage.`,

      learningPoints: [
        {
          id: 'lp-ch0-10-invocation',
          content: 'Epic poems traditionally begin with an invocation to the Muse, asking divine inspiration for the tale—establishing the story\'s cosmic importance.',
          category: 'literary-technique',
        },
        {
          id: 'lp-ch0-10-opening',
          content: 'The Iliad\'s opening announces its theme immediately: rage and its consequences. This focus on a single emotion\'s destructive power gives the epic psychological depth.',
          category: 'thematic-analysis',
        },
      ],

      events: {
        onExit: [{
          type: 'quiz',
          componentId: 'quiz-iliad-ch0',
          condition: { type: 'if-not-completed' },
        }],
      },
    },
  ],

  endQuiz: chapter0Quiz,
};

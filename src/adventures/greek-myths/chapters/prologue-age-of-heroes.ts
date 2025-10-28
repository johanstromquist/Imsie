import type { Chapter } from '../../../types';
import { prologueQuiz } from '../quizzes/prologue-quiz';

export const prologue: Chapter = {
  id: 'prologue-age-of-heroes',
  title: 'Prologue: The Age of Heroes',
  description: 'Discover what defines a hero in Greek mythology and explore the timeless themes that echo through every heroic tale.',

  learningObjectives: [
    'Understand what defines a hero in Greek mythology',
    'Recognize the relationship between mortals and gods in Greek cosmology',
    'Identify key recurring themes across Greek heroic narratives',
    'Explore the concept of kleos (glory) and its importance to Greek heroes',
  ],

  scenes: [
    // Scene 1: Opening - What is a hero?
    {
      id: 'prologue-scene-1-opening',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/a27e8a43-0dc8-42ef-946f-2bd273c66c93/0_0.png',

      content: `Welcome to the Age of Heroes!

In ancient Greece, between the time when gods walked freely among mortals and the rise of classical civilization, there existed a legendary era. This was the Age of Heroes—a time when mortals of extraordinary courage and strength performed deeds that would echo through eternity.

But what makes a hero? In the world you're about to enter, a hero is more than someone who performs brave acts. A hero is someone whose story matters—whose choices, triumphs, and tragedies teach us something profound about the human condition.`,

      learningPoints: [
        {
          id: 'lp-prologue-1-definition',
          content: 'Greek heroes were defined not just by strength or courage, but by the lasting impact of their deeds and the lessons their stories teach.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 2: Primary Source - Ancient definitions of heroism
    {
      id: 'prologue-scene-2-ancient-voices',
      type: 'primary-source',
      backgroundImage: 'https://cdn.midjourney.com/97196ca9-44ef-4ae6-9a56-3c48126d5180/0_0.png',

      prompt: 'The ancient Greeks themselves debated what it meant to be a hero. Read these passages and consider: what qualities did they value most?',

      source: {
        title: 'Defining the Hero',
        author: 'Homer and Hesiod',
        date: '8th-7th century BCE',
        type: 'text',
        content: `From Homer's Iliad: "Sing, O goddess, the wrath of Achilles, Peleus' son, the ruinous wrath which brought countless agonies upon the Achaeans... Many a brave soul did it send hurrying down to Hades, and many a hero did it yield a prey to dogs and vultures..."


From Hesiod's Works and Days: "The fourth age Zeus the Father made, more righteous and more excellent, a god-like race of heroes who are called demi-gods, the race before our own throughout the boundless earth. Grim war and dread battle destroyed a part of them... But to the others father Zeus the son of Cronos gave a living and an abode apart from men, and made them dwell at the ends of earth."`,
        citation: 'Translated by various scholars',
      },

      questions: [
        {
          id: 'q-ancient-def-1',
          question: 'Based on these passages, how did ancient Greeks view heroes in relation to ordinary mortals?',
          type: 'multiple-choice',
          options: [
            'As essentially the same as ordinary people, just with more luck',
            'As a distinct "race" between gods and mortals, capable of extraordinary but also tragic deeds',
            'As purely fictional characters with no connection to real human experience',
            'As ordinary mortals who simply trained harder than others',
          ],
          correctAnswer: 'As a distinct "race" between gods and mortals, capable of extraordinary but also tragic deeds',
          explanation: 'Hesiod explicitly calls heroes a "god-like race of demi-gods," separate from both immortal gods and ordinary humans. Homer emphasizes their extraordinary impact—both glorious and terrible—on the world around them.',
        },
      ],

      learningPoints: [
        {
          id: 'lp-prologue-2-sources',
          content: 'Homer and Hesiod, writing in the 8th-7th centuries BCE, shaped how Greeks understood their mythic past and heroic ideals.',
          category: 'historical-context',
        },
        {
          id: 'lp-prologue-2-duality',
          content: 'Greek heroism encompasses both glory and tragedy—heroes bring both "countless agonies" and immortal fame.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 3: The relationship between gods and mortals
    {
      id: 'prologue-scene-3-gods-mortals',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/00453060-e86f-4ee6-9f09-5ee31bc43925/0_0.png',

      content: `The gods of Mount Olympus—Zeus, Athena, Hera, Poseidon, and their kin—were not distant, uncaring deities. They intervened constantly in mortal affairs, sometimes as helpers, sometimes as obstacles, and often for their own mysterious purposes.

Many heroes were born from unions between gods and mortals. Perseus was son of Zeus. Heracles was son of Zeus. Achilles was son of the sea-nymph Thetis. This divine parentage granted them extraordinary abilities—but also drew the jealousy and wrath of other gods.

The gods' favor was fickle. A hero might have Athena's blessing one day and face Poseidon's curse the next. Success required not just strength and courage, but wisdom in navigating these divine relationships.`,

      inlineAnnotations: [
        {
          id: 'annotation-mount-olympus',
          text: 'Mount Olympus',
          tooltip: {
            title: 'Home of the Gods',
            content: 'Mount Olympus is Greece\'s highest peak (9,573 feet). To the ancient Greeks, its cloud-shrouded summit seemed the perfect dwelling for their pantheon of gods, literally above the mortal world.',
            category: 'cultural-context',
          },
        },
      ],

      learningPoints: [
        {
          id: 'lp-prologue-3-divine-blood',
          content: 'Many Greek heroes were demi-gods—children of a mortal and a god—which gave them superhuman abilities but also divine enemies.',
          category: 'cultural-context',
        },
        {
          id: 'lp-prologue-3-intervention',
          content: 'Divine intervention was a constant force in Greek heroic narratives, shaping both the heroes\' opportunities and obstacles.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 4: Map Exploration - Ancient Greece
    {
      id: 'prologue-scene-4-map',
      type: 'map-exploration',
      backgroundImage: 'https://cdn.midjourney.com/e3efced8-c9a8-4127-82a0-b49dfd628294/0_0.png',
      mapImage: 'https://cdn.midjourney.com/7be683c5-b068-4a2e-845c-bf692e5a992a/0_1.png',

      prompt: 'Explore the lands where these legendary heroes walked. Each location holds stories of triumph and tragedy.',

      locations: [
        {
          id: 'loc-mount-olympus',
          name: 'Mount Olympus',
          x: 42,
          y: 41,
          content: 'The sacred mountain home of the twelve Olympian gods, shrouded in clouds and forever beyond mortal reach—except for the rare hero summoned to divine presence.',
          image: 'https://cdn.midjourney.com/314122cc-475e-4f1b-86a6-a1180030106f/0_0.png',
        },
        {
          id: 'loc-athens',
          name: 'Athens',
          x: 49,
          y: 62,
          content: 'The great city-state of wisdom and democracy, protected by Athena herself. Home to mighty warriors and legendary kings who shaped the destiny of Greece.',
          image: 'https://cdn.midjourney.com/7df650ca-2855-4a91-9a32-04b98e285a11/0_3.png',
        },
        {
          id: 'loc-thebes',
          name: 'Thebes',
          x: 47,
          y: 56,
          content: 'A powerful city-state whose walls were said to have been built by the music of a divine lyre. Many legendary tales of both heroism and tragedy unfolded within these ancient walls.',
          image: 'https://cdn.midjourney.com/15e88d54-38a9-459e-af55-d5a11c9736d6/0_2.png',
        },
        {
          id: 'loc-delphi',
          name: 'Delphi',
          x: 43,
          y: 57,
          content: 'Home of the Oracle of Apollo, where cryptic prophecies revealed futures that could not be avoided. "Know thyself" was inscribed above the temple entrance—a warning to all who sought divine knowledge.',
          image: 'https://cdn.midjourney.com/d86fba05-f44e-4b8b-be08-05a4c1aa8096/0_3.png',
        },
        {
          id: 'loc-crete',
          name: 'Crete',
          x: 55,
          y: 89,
          content: 'The island kingdom famous for its powerful navy and ancient palace at Knossos. Home to a legendary labyrinth and its fearsome guardian—a monster that was part man, part bull.',
          image: 'https://cdn.midjourney.com/8dbcbeca-9d9b-4e4c-bc7d-f8ab2b36a6c4/0_0.png',
        },
      ],

      learningPoints: [
        {
          id: 'lp-prologue-4-geography',
          content: 'Greek myths were deeply rooted in real geography, connecting legendary deeds to actual places that audiences could visit.',
          category: 'historical-context',
        },
      ],
    },

    // Scene 5: Kleos - The concept of eternal glory
    {
      id: 'prologue-scene-5-kleos',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/36e182d3-099a-4cf5-b36a-cab58f28ce0d/0_0.png',

      content: `The ancient Greeks had a word that defined heroic ambition: kleos (KLAY-os)—eternal glory earned through great deeds.

Unlike mere fame, which fades with time, kleos meant your name and story would be remembered forever in songs and tales. Long after your body turned to dust, poets would sing of your exploits. Your name would be on the lips of generations unborn.

This obsession with immortal fame drove heroes to extraordinary acts. It made them risk everything—their lives, their loved ones, even their humanity—for deeds worthy of song. The Greeks believed that while the body must die, a great enough story could grant a form of immortality.

But kleos came at a price, as you will learn.`,

      inlineAnnotations: [
        {
          id: 'annotation-kleos',
          text: 'kleos',
          tooltip: {
            title: 'Eternal Glory',
            content: 'Kleos (κλέος) literally means "what others hear about you." It represents fame that lives beyond death through poetic tradition. For Greek heroes, kleos was worth more than life itself.',
            category: 'vocabulary',
          },
        },
      ],

      learningPoints: [
        {
          id: 'lp-prologue-5-kleos',
          content: 'Kleos (eternal glory through deeds worthy of song) was the highest aspiration of Greek heroes, valued even above life itself.',
          category: 'cultural-context',
        },
        {
          id: 'lp-prologue-5-immortality',
          content: 'Greeks saw storytelling as a form of immortality—a way to transcend mortality through remembered deeds.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 6: Decision - Achilles' choice
    {
      id: 'prologue-scene-6-choice',
      type: 'decision',
      backgroundImage: 'https://cdn.midjourney.com/4450198e-99bb-4b25-8ed4-5a904c1fd2df/0_0.png',

      prompt: 'What would you choose?',
      context: `The greatest warrior of the Greek world, Achilles, was given a prophecy by his mother Thetis:

He could choose a long, peaceful life—marry, have children, grow old among friends, and die peacefully in his bed, forgotten by history.

Or he could choose a short, glorious life—go to war at Troy, perform legendary deeds, die young on the battlefield, and have his name remembered forever.

Achilles chose kleos over life. He chose to become immortal in story rather than live long in obscurity. His choice shaped the entire course of the Trojan War and gave us one of literature's most enduring characters.

If you faced this choice, what would you decide?`,

      choices: [
        {
          id: 'choice-long-life',
          text: 'Choose a long, peaceful life with the people I love',
          consequence: `A wise choice. You would know love, see your children grow, and die surrounded by family. Your name might not echo through the ages, but your life would be full and meaningful in its own way.

The Greeks understood this choice too. Not everyone sought kleos—many valued other things more. But the heroes whose stories survived made the opposite choice.`,
          learningPoints: [
            {
              id: 'lp-prologue-6a-humanity',
              content: 'Greek heroic narratives acknowledge the profound sacrifice required for glory—heroes give up normal human happiness.',
              category: 'literary-context',
            },
          ],
        },
        {
          id: 'choice-glory',
          text: 'Choose a short, glorious life that will be remembered forever',
          consequence: `You choose as Achilles chose. You would trade years for immortality in song, peace for glory, the ordinary for the extraordinary.

This choice defines the heroic spirit—the willingness to sacrifice everything, even life itself, for deeds that will echo through eternity. It's a choice that has shaped stories from ancient Greece to modern epics.

But remember: such choices come with terrible costs, as you will discover.`,
          learningPoints: [
            {
              id: 'lp-prologue-6b-cost',
              content: 'The choice for kleos meant accepting early death and sacrificing personal happiness for eternal fame.',
              category: 'literary-context',
            },
          ],
        },
      ],

      learningPoints: [],
    },

    // Scene 7: Recurring themes
    {
      id: 'prologue-scene-7-themes',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/36e182d3-099a-4cf5-b36a-cab58f28ce0d/0_0.png',

      content: `As you journey through these tales, you'll encounter the same powerful themes again and again:

**Hubris and Nemesis:** Pride leads to downfall. Heroes who forget they are mortal, who challenge the gods or ignore limits, face divine retribution.

**Fate vs. Free Will:** Can heroes escape prophecy? Do their choices matter, or are their ends already written? The Greeks wrestled endlessly with this question.

**Transformation:** Heroes change—physically (curses, blessings), morally (corruption, redemption), and psychologically (madness, wisdom). Change is central to every heroic journey.

These themes weren't just entertaining—they were how the Greeks explored fundamental questions about human existence, questions that still resonate today.`,

      learningPoints: [
        {
          id: 'lp-prologue-7-hubris',
          content: 'Hubris (excessive pride) and its consequence, nemesis (divine retribution), form one of the core moral frameworks of Greek myth.',
          category: 'literary-context',
        },
        {
          id: 'lp-prologue-7-fate',
          content: 'The tension between fate and free will is a recurring philosophical question in Greek heroic narratives.',
          category: 'literary-context',
        },
        {
          id: 'lp-prologue-7-transformation',
          content: 'Transformation—physical, moral, and psychological—is essential to the Greek concept of the heroic journey.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 8: Quote Attribution - Match themes to quotes
    {
      id: 'prologue-scene-8-quotes',
      type: 'quote-attribution',
      backgroundImage: 'https://cdn.midjourney.com/36e182d3-099a-4cf5-b36a-cab58f28ce0d/0_0.png',

      prompt: 'Match these famous lines from Greek heroic tales to the themes they represent',

      quotes: [
        {
          id: 'quote-hubris',
          text: 'I shall fly higher than any mortal has dared!',
          speaker: 'Hubris',
          context: 'Represents the pride that leads heroes to challenge natural limits',
          explanation: 'This attitude—believing oneself above mortal constraints—inevitably leads to catastrophe in Greek myth. Pride before the fall.',
        },
        {
          id: 'quote-fate',
          text: 'The oracle has spoken; what the gods decree must come to pass',
          speaker: 'Fate',
          context: 'Represents the Greek belief in inescapable prophecy',
          explanation: 'Prophecies in Greek myth typically come true despite all attempts to prevent them, raising questions about whether heroes ever truly have free choice.',
        },
        {
          id: 'quote-transformation',
          text: 'I am not who I was when this journey began',
          speaker: 'Transformation',
          context: 'Represents the fundamental change heroes undergo',
          explanation: 'Heroes return from their journeys changed—whether ennobled, corrupted, enlightened, or broken. The journey transforms them utterly.',
        },
        {
          id: 'quote-kleos',
          text: 'Let my name be sung when I am dust and memory',
          speaker: 'Kleos (Glory)',
          context: 'Represents the heroic desire for immortal fame',
          explanation: 'The pursuit of eternal glory drives heroes to extraordinary deeds, even at the cost of their lives and happiness.',
        },
      ],

      learningPoints: [
        {
          id: 'lp-prologue-8-recognition',
          content: 'Recognizing thematic patterns across different myths reveals the underlying cultural values and philosophical questions Greeks explored through storytelling.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 9: Interlude - The Hero's Journey framework
    {
      id: 'prologue-scene-9-campbells-journey',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/36e182d3-099a-4cf5-b36a-cab58f28ce0d/0_0.png',

      content: `In 1949, a scholar named Joseph Campbell studied myths from around the world and discovered something remarkable: the same basic pattern appeared in heroic stories across cultures, from ancient Greece to modern films.

He called it "The Hero's Journey," and its structure looks like this:

**The Call to Adventure:** The hero is summoned to leave ordinary life

**Crossing the Threshold:** Entering the unknown world

**Trials and Helpers:** Facing tests with aid from mentors or magic

**The Ordeal:** Confronting the greatest challenge

**Return and Transformation:** Coming home changed, bearing gifts

You'll see this pattern in every hero we study—Perseus, Theseus, Jason, Heracles. But you'll also see it in Star Wars, Harry Potter, and The Lord of the Rings. The Greek myths gave us the template that still shapes how we tell stories today.

These heroes lived across several generations of the Age of Heroes. Perseus, the monster-slayer, came first—his descendants would include the mighty Heracles. That generation was followed by the adventurers Jason (who sought the Golden Fleece with his crew of heroes) and Theseus (who united and civilized Athens). The age culminated in the Trojan War, where heroes like Achilles fought the final great battle of the mythic age.`,

      inlineAnnotations: [
        {
          id: 'annotation-campbell',
          text: 'Joseph Campbell',
          tooltip: {
            title: 'The Myth Scholar',
            content: 'Joseph Campbell (1904-1987) wrote "The Hero with a Thousand Faces," identifying common patterns in world mythology. His work profoundly influenced storytellers, including George Lucas when creating Star Wars.',
            category: 'reference',
          },
        },
      ],

      learningPoints: [
        {
          id: 'lp-prologue-9-monomyth',
          content: 'The Hero\'s Journey (or "monomyth") is a narrative pattern found in myths worldwide, formalized by Joseph Campbell.',
          category: 'literary-context',
        },
        {
          id: 'lp-prologue-9-influence',
          content: 'Greek heroic myths established narrative patterns that continue to shape storytelling in modern literature, film, and media.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 10: Timeline Game - Ordering hero generations
    {
      id: 'prologue-scene-10-timeline',
      type: 'timeline-game',
      backgroundImage: 'https://cdn.midjourney.com/36e182d3-099a-4cf5-b36a-cab58f28ce0d/0_0.png',

      prompt: 'The Age of Heroes spanned multiple generations. Can you arrange these major events in chronological order?',

      timelineEvents: [
        {
          id: 'event-perseus',
          title: 'Perseus slays Medusa',
          year: 1,
          description: 'The earliest of the great monster-slayers, Perseus founded the Perseid dynasty. He was grandfather to Heracles.',
          image: 'https://cdn.midjourney.com/5c94ea0a-7a9f-4285-8358-ced6e1b6c628/0_1.png',
        },
        {
          id: 'event-heracles-labors',
          title: 'Heracles completes his Twelve Labors',
          year: 2,
          description: 'The greatest of all Greek heroes performed impossible tasks as penance. His deeds became legendary across the Mediterranean.',
          image: 'https://cdn.midjourney.com/9258cd36-2288-4319-81bd-e42b607f31ff/0_0.png',
        },
        {
          id: 'event-argonauts',
          title: 'Jason and the Argonauts seek the Golden Fleece',
          year: 3,
          description: 'The greatest heroes of Greece assembled for this quest, representing a generation between Heracles and the Trojan War.',
          image: 'https://cdn.midjourney.com/30a2d984-a857-4a84-830c-3095cbfc9c91/0_3.png',
        },
        {
          id: 'event-theseus',
          title: 'Theseus slays the Minotaur',
          year: 3,
          description: 'Theseus was roughly contemporary with Jason, representing the same heroic generation before the Trojan War.',
          image: 'https://cdn.midjourney.com/0d921a8e-c45a-46c7-93ea-cc993ee84a4c/0_1.png',
        },
        {
          id: 'event-trojan-war',
          title: 'The Trojan War',
          year: 4,
          description: 'The final great event of the Age of Heroes. After this war, the age of legendary heroes gave way to the age of men.',
          image: 'https://cdn.midjourney.com/9ccea9b0-ba3e-40a4-b748-bcd6571e8556/0_3.png',
        },
      ],

      successThreshold: 70,

      learningPoints: [
        {
          id: 'lp-prologue-10-chronology',
          content: 'Greek myths follow a rough chronological order, with Perseus earliest, then Heracles, then the generation of Jason and Theseus, ending with the Trojan War.',
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

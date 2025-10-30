import type { Chapter } from '../../../types';
import { chapter6Quiz } from '../quizzes/chapter-6-quiz';

/**
 * Chapter 6: Epilogue - The Legacy of Norse Mythology
 *
 * This epilogue explores how Snorri Sturluson's Prose Edda preserved Norse mythology
 * for future generations and traces its influence through medieval literature, the Romantic
 * era's rediscovery, and into modern fantasy literature, films, and popular culture.
 */
export const chapter6: Chapter = {
  id: 'edda-ch6-epilogue',
  title: 'Chapter 6: Epilogue - The Legacy of Norse Mythology',
  description: 'Discover how Norse mythology survived, influenced centuries of literature, and continues to shape modern culture.',

  prerequisites: {
    type: 'sequential',
  },

  learningObjectives: [
    'Understand how Norse mythology influenced medieval and modern literature',
    'Recognize Norse mythological elements in contemporary culture',
    'Analyze the historical preservation of Norse myths through the Eddas',
    'Explore the cultural significance of Norse mythology in shaping Western imagination',
  ],

  scenes: [
    // Scene 1: Snorri Reflects on His Work
    {
      id: 'edda-ch6-scene-1',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/9c5e5e02-6a7e-4a01-b708-d725051e8af9/0_0.png',

      content: `You find yourself back in Snorri Sturluson's study in Reykholt, Iceland. The fire crackles in the hearth, casting dancing shadows across the manuscripts spread before him. The year is 1220, and Snorri sets down his quill, having just completed his great work.

"And so," Snorri says, looking up at you with satisfaction, "the tales are preserved. The old stories of our ancestors, written down so they will not be lost to time."

Outside, the wind howls across the Icelandic landscape. Christianity has been the official religion of Iceland for over two centuries now, and the old pagan gods are fading from active worship. Yet here, in these pages, they live on.

"You may wonder," Snorri continues, "why a Christian scholar like myself would spend years recording the myths of the old gods. The answer is simple: these stories are part of who we are. They shaped our language, our poetry, our understanding of courage and fate. To lose them would be to lose ourselves."`,

      learningPoints: [
        {
          id: 'edda-ch6-lp-1',
          content: 'Snorri Sturluson wrote the Prose Edda around 1220 CE, over 200 years after Iceland officially converted to Christianity, preserving pagan myths for cultural rather than religious reasons.',
          category: 'historical-context',
        },
        {
          id: 'edda-ch6-lp-2',
          content: 'The Prose Edda served as a textbook for poets, teaching them the complex mythological references needed to understand and create traditional Norse poetry.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 2: Dialogue - The Fate of Pagan Myths
    {
      id: 'edda-ch6-scene-2',
      type: 'dialogue',
      backgroundImage: 'https://cdn.midjourney.com/9c5e5e02-6a7e-4a01-b708-d725051e8af9/0_0.png',
      character: {
        id: 'snorri',
        name: 'Snorri Sturluson',
        portrait: 'https://cdn.midjourney.com/d5baa0e6-9dd6-49fa-9ee1-ba67b2776a6a/0_0.png',
        description: 'Icelandic historian, poet, and politician (1179-1241 CE)',
      },
      dialogueTree: {
        id: 'node-1',
        speaker: 'snorri',
        text: 'Some church leaders criticize my work, saying I should not give voice to pagan tales. But tell me—can we truly understand our skaldic poetry without knowing the myths it references?',
        responses: [
          {
            id: 'response-preserve',
            text: 'No, the myths must be preserved to understand our cultural heritage.',
            nextNodeId: 'node-preserve',
          },
          {
            id: 'response-dangerous',
            text: 'Perhaps the old stories are too dangerous to keep alive.',
            nextNodeId: 'node-dangerous',
          },
        ],
        allNodes: [
          {
            id: 'node-preserve',
            speaker: 'snorri',
            text: 'Exactly! These myths are the foundation of our poetic tradition. Without them, centuries of verse become meaningless riddles. I preserve them not as objects of worship, but as keys to understanding our past.',
            nextNodeId: 'node-future',
          },
          {
            id: 'node-dangerous',
            speaker: 'snorri',
            text: 'An understandable concern. But these gods no longer command worship—they have become literary figures, characters in stories. There is a difference between preserving tales and practicing the old religion.',
            nextNodeId: 'node-future',
          },
          {
            id: 'node-future',
            speaker: 'snorri',
            text: 'Perhaps future generations will find value in these stories for reasons we cannot yet imagine. Stories have a way of surviving because they speak to something fundamental in human nature—our questions about fate, courage, and mortality.',
            isEnd: true,
          },
        ],
      },
      learningPoints: [
        {
          id: 'edda-ch6-lp-3',
          content: 'Medieval Christian scholars like Snorri faced the challenge of preserving pagan myths for cultural and educational purposes while distancing themselves from pagan religious practices.',
          category: 'historical-context',
        },
        {
          id: 'edda-ch6-lp-4',
          content: 'Snorri\'s foresight about the enduring value of these myths proved remarkably accurate—the stories he preserved would influence literature for centuries to come.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 3: Medieval Reception and Manuscript Survival
    {
      id: 'edda-ch6-scene-3',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/0c646aa3-4363-467f-8226-da20d7bde154/0_0.png',

      content: `The centuries pass. Snorri's manuscripts are copied by hand, passing from monastery to library, surviving fires, wars, and the simple decay of time.

The Prose Edda survives alongside its older companion, the Poetic Edda—a collection of anonymous poems about the gods and heroes, some dating back to before Iceland's conversion to Christianity. Together, these two Eddas become the primary sources for Norse mythology.

Many manuscripts are lost. Some burn in fires. Others crumble to dust. But enough survive, tucked away in Icelandic farmhouses and Scandinavian archives, waiting to be rediscovered.

For centuries, these myths remain mostly a Scandinavian concern—respected by scholars of Old Norse, but largely unknown to the broader European cultural world. The great myths of Greece and Rome dominate classical education, while the Norse gods sleep in obscure manuscripts.`,

      learningPoints: [
        {
          id: 'edda-ch6-lp-5',
          content: 'Medieval manuscripts were fragile and easily lost—the survival of the Eddas depended on dedicated scribes who copied them by hand through the centuries.',
          category: 'historical-context',
        },
        {
          id: 'edda-ch6-lp-6',
          content: 'The Prose Edda (written by Snorri) and the Poetic Edda (anonymous poems) together form the foundation of our knowledge about Norse mythology.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 4: Primary Source - Manuscript Examination
    {
      id: 'edda-ch6-scene-4',
      type: 'primary-source',
      backgroundImage: 'https://cdn.midjourney.com/2603b7c7-8793-41bd-af39-0cb33e98faa6/0_0.png',
      prompt: 'Examine this medieval manuscript page and consider how these texts survived',
      source: {
        title: 'The Codex Regius',
        author: 'Anonymous scribes',
        date: 'c. 1270 CE',
        type: 'text',
        content: `The Codex Regius is the most important manuscript of the Poetic Edda, written around 1270 in Iceland. This precious document contains 31 poems about Norse gods and heroes, including the Völuspá (the prophecy of Ragnarök that you encountered in Chapter 5).

The manuscript disappeared for centuries and was rediscovered in 1643 by Brynjólfur Sveinsson, Bishop of Skálholt. He immediately recognized its importance and sent it to the Royal Library in Copenhagen, where it remained until 1971, when it was returned to Iceland as a national treasure.

The Codex Regius is written on vellum (prepared animal skin) in a clear, practiced hand. The scribe who created it was clearly skilled, though we don't know their name. They were likely a monk or professional copyist working in an Icelandic monastery or church.

Without this single manuscript, much of Norse mythology would be lost forever. One fire, one act of carelessness, and the poems would have vanished from history.`,
        citation: 'Codex Regius, Reykjavík: Árni Magnússon Institute for Icelandic Studies, GKS 2365 4to',
      },
      questions: [
        {
          id: 'q1',
          question: 'What does the survival story of the Codex Regius reveal about manuscript preservation?',
          type: 'multiple-choice',
          options: [
            'Manuscripts were always carefully protected and never lost',
            'The survival of ancient texts often depends on luck and the dedication of individuals',
            'Only religious texts were considered worth preserving',
            'Medieval scribes made so many copies that losing manuscripts was not a concern',
          ],
          correctAnswer: 'The survival of ancient texts often depends on luck and the dedication of individuals',
          explanation: 'The Codex Regius disappeared for centuries and was only rediscovered by chance in 1643. Its survival depended on anonymous scribes who copied it, unknown people who preserved it, and a bishop who recognized its value. Many similar manuscripts were lost forever.',
        },
        {
          id: 'q2',
          question: 'Why was the Codex Regius written down in 1270, fifty years after Snorri\'s Prose Edda?',
          type: 'multiple-choice',
          options: [
            'The poems were newly composed in 1270',
            'The scribe was preserving much older oral poems before they were forgotten',
            'Christian authorities suddenly decided to record pagan myths',
            'The manuscript was created as a response to Snorri\'s work',
          ],
          correctAnswer: 'The scribe was preserving much older oral poems before they were forgotten',
          explanation: 'The poems in the Codex Regius are much older than the manuscript itself—some may date back centuries before Iceland\'s conversion to Christianity. The scribe was recording ancient oral poetry, preserving it in written form for future generations.',
        },
        {
          id: 'q3',
          question: 'What would have been lost if the Codex Regius had been destroyed?',
          type: 'multiple-choice',
          options: [
            'Only minor details about Norse mythology',
            'Alternative versions of myths already preserved elsewhere',
            'Irreplaceable poems including the primary source for Ragnarök',
            'Nothing important, since other manuscripts contained the same content',
          ],
          correctAnswer: 'Irreplaceable poems including the primary source for Ragnarök',
          explanation: 'The Codex Regius contains the Völuspá and other poems that exist nowhere else. Without it, we would have lost our most detailed account of Ragnarök and many other myths. Each manuscript was unique and irreplaceable.',
        },
      ],
      learningPoints: [
        {
          id: 'edda-ch6-lp-7',
          content: 'The Codex Regius, containing the Poetic Edda, is one of the most important literary manuscripts in Western culture, and its survival was far from guaranteed.',
          category: 'historical-context',
        },
        {
          id: 'edda-ch6-lp-8',
          content: 'Medieval manuscripts were unique artifacts—there were no printing presses to create identical copies, so the loss of a single manuscript could mean the permanent loss of irreplaceable texts.',
          category: 'historical-context',
        },
      ],
    },

    // Scene 5: Introduction to Literary Influence
    {
      id: 'edda-ch6-scene-5',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/71402d18-c34a-4cba-8419-2af2d2163707/0_0.png',

      content: `The manuscripts survived, but for centuries they remained in the shadows—known to scholars but unknown to the wider world.

Then came the awakening.

From the late 18th century onward, Norse mythology would experience wave after wave of rediscovery and reinvention. Each generation would find something new in these ancient stories: the Romantics found philosophical depth, the Victorians found national identity, modernists found literary inspiration, and contemporary culture found endless entertainment.

Let's trace this remarkable journey through time, from medieval Iceland to modern Hollywood, and see how Snorri's work—and the Codex Regius poems—shaped centuries of creativity.`,

      learningPoints: [
        {
          id: 'edda-ch6-lp-9-intro',
          content: 'Norse mythology\'s influence on Western culture happened in distinct waves, each era reinterpreting the myths for its own purposes.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 6: The Romantic Rediscovery
    {
      id: 'edda-ch6-scene-6',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/71402d18-c34a-4cba-8419-2af2d2163707/0_0.png',

      content: `The late 18th century brings a revolution in European thought. Romantic poets and artists, tired of the dominance of Greek and Roman classics, seek new sources of inspiration.

They find it in the north.

Thomas Gray, William Blake, and other English poets discover Norse mythology through new translations. They are captivated by its darkness, its fatalism, its vision of gods who know they will die. This is something different from Olympus—something grimmer, more honest about mortality.

In Germany, the Brothers Grimm collect folktales with Nordic roots. In Scandinavia, national movements embrace Viking heritage as a source of pride. The old myths become symbols of cultural identity.

Artists paint Odin's ravens and Thor's hammer. Poets write verses about Ragnarök and Valhalla. Composers create musical dramas based on the old sagas. Norse mythology, sleeping for centuries, awakens into European consciousness.`,

      learningPoints: [
        {
          id: 'edda-ch6-lp-11',
          content: 'The Romantic movement (c. 1770-1850) valued emotion, nature, and national folk traditions over classical rationalism, making Norse mythology highly appealing to Romantic artists.',
          category: 'historical-context',
        },
        {
          id: 'edda-ch6-lp-12',
          content: 'Norse mythology\'s darker, more tragic worldview—where even gods are mortal—offered a stark contrast to the more optimistic classical Greek and Roman myths.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 7: Wagner's Ring Cycle
    {
      id: 'edda-ch6-scene-7',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/11c849ec-b5b0-4241-8d1b-27836a5e4274/0_0.png',

      content: `Of all the 19th-century adaptations, none would prove more influential than Richard Wagner's Der Ring des Nibelungen—The Ring of the Nibelung.

Wagner spent over 25 years creating this monumental work: four operas totaling about 15 hours of music, premiered between 1869 and 1876. He drew from both the Prose Edda and the Volsunga Saga, mixing Norse gods with Germanic legendary heroes.

In Wagner's version, Wotan (Odin) struggles with fate and the consequences of his past actions. Gods build Valhalla but owe payment to giants. A cursed ring brings doom to all who possess it. The world ends in fire as Valhalla burns—an operatic Ragnarök.

Wagner transformed Snorri's myths into something new: a meditation on power, greed, and the price of ambition. His operas would influence everything from classical music to fantasy literature to modern film scores.

When you hear epic orchestral music in movies, you are hearing Wagner's influence. When you encounter cursed rings of power in fantasy stories, you are seeing Wagner's Ring Cycle echoed through generations.`,

      learningPoints: [
        {
          id: 'edda-ch6-lp-14',
          content: 'Wagner\'s Ring Cycle adapted Norse mythology to explore themes of power, fate, and moral consequence, transforming ancient myths into modern philosophical drama.',
          category: 'literary-context',
        },
        {
          id: 'edda-ch6-lp-15',
          content: 'Wagner\'s influence on film music and fantasy literature is profound—his musical techniques and mythological themes shaped how we experience epic storytelling in modern media.',
          category: 'cultural-context',
        },
      ],
    },

    // Scene 8: Tolkien's Norse Influence
    {
      id: 'edda-ch6-scene-8',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/9c5e5e02-6a7e-4a01-b708-d725051e8af9/0_0.png',

      content: `In the early 20th century, a young English scholar named J.R.R. Tolkien studied Old Norse at Oxford University. He read the Eddas in their original language, translating the poems and immersing himself in the mythology.

When Tolkien created Middle-earth, Norse mythology flowed through every page.

The dwarves? Their names come directly from the Prose Edda's list of dwarfs—Thorin, Fili, Kili, Dwalin, Balin, and even Gandalf (originally a dwarf name meaning "wand-elf"). Tolkien simply borrowed Snorri's catalog wholesale.

The concept of Middle-earth itself? That's Midgard, the human realm between Asgard and the other worlds. Elves as wise, immortal beings? From Norse tradition. The dark lord in his northern fortress? Echoes of the giants of Jotunheim. Even the idea of a ring of power that corrupts its bearer? Wagner's Ring via Norse mythology.

Tolkien didn't copy Norse myths directly—he absorbed them, letting them inspire his own creation. In doing so, he introduced millions of modern readers to Norse concepts without them even realizing it.`,

      learningPoints: [
        {
          id: 'edda-ch6-lp-16',
          content: 'Tolkien\'s deep knowledge of Old Norse profoundly shaped Middle-earth—from dwarf names directly borrowed from the Prose Edda to broader concepts like Midgard becoming Middle-earth.',
          category: 'literary-context',
        },
        {
          id: 'edda-ch6-lp-17',
          content: 'Modern fantasy literature owes much of its foundation to Norse mythology filtered through Tolkien\'s work, making the Eddas indirectly responsible for shaping contemporary fantasy.',
          category: 'cultural-context',
        },
      ],
    },

    // Scene 9: Timeline - Norse Mythology's Literary Influence
    {
      id: 'edda-ch6-scene-9',
      type: 'timeline-game',
      backgroundImage: 'https://cdn.midjourney.com/8b3d12e8-36ff-42b8-8875-9e3fe1272407/0_0.png',
      prompt: 'Now that you\'ve learned about Norse mythology\'s influence, order these key moments chronologically',
      successThreshold: 70,
      timelineEvents: [
        {
          id: 'event-1',
          title: 'Snorri Writes the Prose Edda',
          year: 1220,
          description: 'Snorri Sturluson compiles Norse myths in Iceland, creating the foundational text for understanding Norse mythology.',
        },
        {
          id: 'event-2',
          title: 'Codex Regius Rediscovered',
          year: 1643,
          description: 'Bishop Brynjólfur Sveinsson rediscovers the lost manuscript of the Poetic Edda, bringing ancient poems back into scholarly awareness.',
        },
        {
          id: 'event-3',
          title: 'First English Translation',
          year: 1797,
          description: 'Thomas Percy publishes the first English translation of Norse mythology, introducing these myths to British Romantic poets.',
        },
        {
          id: 'event-4',
          title: 'Wagner\'s Ring Cycle',
          year: 1876,
          description: 'Richard Wagner completes Der Ring des Nibelungen, transforming Norse myths into grand opera and cementing their place in Western culture.',
        },
        {
          id: 'event-5',
          title: 'Tolkien Publishes The Hobbit',
          year: 1937,
          description: 'J.R.R. Tolkien, a professor of Old Norse, publishes The Hobbit, beginning his Norse-influenced fantasy epic.',
        },
        {
          id: 'event-6',
          title: 'Marvel Introduces Thor',
          year: 1962,
          description: 'Marvel Comics introduces Thor as a superhero, bringing Norse mythology to mainstream American popular culture.',
        },
      ],
      learningPoints: [
        {
          id: 'edda-ch6-lp-9',
          content: 'Norse mythology experienced a major revival during the Romantic era (late 18th-19th centuries) when European artists sought alternatives to classical Greco-Roman traditions.',
          category: 'historical-context',
        },
        {
          id: 'edda-ch6-lp-10',
          content: 'Each generation has reinterpreted Norse myths for its own purposes—from medieval education to Romantic nationalism to modern entertainment.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 10: Cause-Effect - Norse Myths to Modern Adaptations
    {
      id: 'edda-ch6-scene-10',
      type: 'cause-effect',
      backgroundImage: 'https://cdn.midjourney.com/8cd97c2c-9b0e-490d-a95b-e541e53e85f0/0_0.png',
      prompt: 'Match each Norse mythological element to its modern adaptation or influence',
      pairs: [
        {
          id: 'pair-1',
          cause: 'Odin seeking wisdom at any cost, sacrificing his eye',
          effect: 'Wise old mentor figures who have suffered for knowledge (Gandalf, Dumbledore)',
          explanation: 'The archetype of the wise old wizard with mysterious past suffering comes partly from Odin\'s characterization as the one-eyed wanderer who sacrificed much for wisdom.',
        },
        {
          id: 'pair-2',
          cause: 'Ragnarök: the prophesied doom that cannot be prevented',
          effect: 'Apocalyptic prophecies and chosen-one narratives in modern fantasy',
          explanation: 'The concept that heroes must face inevitable doom with courage, knowing the outcome but fighting anyway, deeply influenced modern heroic fantasy and science fiction.',
        },
        {
          id: 'pair-3',
          cause: 'The nine worlds connected by Yggdrasil',
          effect: 'Multiple realms or parallel worlds in fantasy literature',
          explanation: 'The idea of multiple interconnected worlds or realms, each with distinct characteristics, became a staple of fantasy worldbuilding.',
        },
        {
          id: 'pair-4',
          cause: 'Dwarves as master craftsmen who forge magical items',
          effect: 'Fantasy dwarves as miners, smiths, and craftsmen',
          explanation: 'Modern depictions of dwarves as underground-dwelling craftsmen come directly from Norse mythology, where dwarfs forged Mjölnir and other legendary items.',
        },
        {
          id: 'pair-5',
          cause: 'Valkyries choosing warriors for Valhalla',
          effect: 'Female warriors and battle-maidens in fantasy and comics',
          explanation: 'The concept of powerful female warriors who determine the fate of battles influenced countless fantasy and comic book characters.',
        },
      ],
      learningPoints: [
        {
          id: 'edda-ch6-lp-18',
          content: 'Many tropes and character archetypes in modern fantasy can be traced back to specific elements in Norse mythology.',
          category: 'literary-context',
        },
        {
          id: 'edda-ch6-lp-19',
          content: 'Understanding the Norse sources helps readers recognize these influences and appreciate how ancient myths continue to shape contemporary storytelling.',
          category: 'cultural-context',
        },
      ],
    },

    // Scene 11: Modern Pop Culture
    {
      id: 'edda-ch6-scene-11',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/652236b1-1167-444c-8700-ebb998f05ec9/0_0.png',

      content: `Today, Norse mythology is everywhere.

Marvel's Thor appears in blockbuster films, bringing Asgard and its inhabitants to millions of viewers who have never read the Eddas. Video games from God of War to Assassin's Creed Valhalla immerse players in Norse worlds. Television shows like Vikings and American Gods feature Norse gods and concepts. Fantasy novels routinely draw on Norse elements.

But something has changed in these modern adaptations. The Marvel Thor, with his heroic optimism and happy endings, is quite different from the Thor of the Eddas—a strong but not particularly bright god who knows he's doomed to die at Ragnarök.

Modern adaptations often "Disnefy" the Norse myths, removing the darkness and fatalism that made them distinctive. Hollywood's Ragnarök becomes a spectacular battle scene rather than an inevitable tragedy that even courage cannot prevent.

This tension between authentic preservation and popular adaptation creates an interesting question: Is it better for myths to be widely known but changed, or accurately preserved but obscure?

Perhaps both have value. The scholarly Eddas remain, unchanged, for those who seek them. Meanwhile, popular adaptations introduce new audiences to Norse names and concepts, even if simplified. Some of those audiences will eventually discover the original sources—just as you have done.`,

      learningPoints: [
        {
          id: 'edda-ch6-lp-20',
          content: 'Modern pop culture adaptations of Norse mythology often simplify or change the myths to fit contemporary entertainment expectations, particularly regarding tone and endings.',
          category: 'cultural-context',
        },
        {
          id: 'edda-ch6-lp-21',
          content: 'Popular adaptations serve as gateways—they introduce broad audiences to mythological concepts, some of whom will pursue deeper study of the original sources.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 12: Final Reflection with Snorri
    {
      id: 'edda-ch6-scene-12',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/d8c413f5-9d0c-47f2-9a59-74e898daecc5/0_0.png',

      content: `You find yourself back in Snorri's study. Somehow, he seems aware of the centuries that have passed, the uses to which his work has been put.

"So," he says with a knowing smile, "the stories survived after all. Not just survived—they thrived, spreading far beyond Iceland, beyond Scandinavia, into worlds I could never have imagined."

He gestures to his completed manuscript. "I wrote this to preserve our poetry, to keep alive the cultural memory of my people. I could not have known that these myths would speak to so many across such vast spans of time."

"Wagner's operas, Tolkien's elves, Marvel's thunder god—" he shakes his head in wonder. "Each generation finds what it needs in these old stories. They adapt them, change them, make them new. Yet something essential remains: questions about fate and freedom, courage and doom, the price of wisdom and the value of honor."

"That is why myths endure. Not because they are old, but because they remain relevant. Each age finds its own meaning in them, speaks to its own concerns through them. The myths are like Yggdrasil itself—rooted in the past but with branches reaching into every future."

Outside, the Icelandic dawn breaks over the mountains. The fire in the hearth has burned down to embers. Snorri sets his hand on the manuscript—the Prose Edda, completed.

"These stories are no longer just ours," he says. "They belong to everyone who finds meaning in them. And they always will."`,

      learningPoints: [
        {
          id: 'edda-ch6-lp-22',
          content: 'Myths endure not merely as historical artifacts but as living stories that each generation reinterprets to address its own questions and concerns.',
          category: 'literary-context',
        },
        {
          id: 'edda-ch6-lp-23',
          content: 'Snorri\'s Prose Edda achieved far more than he intended—it didn\'t just preserve Norse mythology for poets, but made it accessible to global culture across eight centuries.',
          category: 'cultural-context',
        },
      ],

      events: {
        onExit: [{
          type: 'quiz',
          componentId: 'edda-ch6-quiz',
          condition: { type: 'if-not-completed' },
        }],
      },
    },
  ],

  endQuiz: chapter6Quiz,
};

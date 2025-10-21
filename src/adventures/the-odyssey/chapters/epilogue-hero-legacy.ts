import type { Chapter } from '../../../types';
import { epilogueQuiz } from '../quizzes/epilogue-quiz';

/**
 * Epilogue: The Hero's Legacy and the Epic's Importance
 *
 * This epilogue explores The Odyssey's enduring influence on Western literature,
 * the oral tradition, and the hero's journey pattern that continues to resonate
 * across time and culture.
 */
export const epilogue: Chapter = {
  id: 'epilogue-hero-legacy',
  title: 'Epilogue: The Hero\'s Legacy and the Epic\'s Importance',
  description: 'Discover how The Odyssey shaped Western literature and continues to influence storytelling across the ages.',
  learningObjectives: [
    'Understand The Odyssey\'s influence on Western literature and culture',
    'Analyze the hero\'s journey as a universal narrative pattern',
    'Explore the historical preservation of epic poetry through oral tradition',
    'Recognize themes from The Odyssey that resonate across time and culture',
  ],
  scenes: [
    // Scene 1: Peace restored to Ithaca
    {
      id: 'epilogue-1-peace-restored',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/1ca95a69-95b5-4bf3-8bbe-63036d459e02/0_0.png',
      image: 'https://cdn.midjourney.com/98bb18d1-04d3-4684-aa23-dd5c77c188c5/0_0.png',
      content: `The blood has been spilled. The suitors lie dead in Odysseus's great hall, their arrogance finally answered with bronze and fury.

But the killing is not yet finished. The families of the slain suitors gather, their grief turning to rage. They march toward the palace, spears in hand, demanding vengeance for their sons and brothers.

Ithaca stands on the brink of civil war. After twenty years of chaos, the island kingdom needs peace—but peace is the hardest victory to win.`,
      learningPoints: [
        {
          id: 'epilogue-lp-1-cycle',
          content: 'The epic recognizes that violence breeds violence, requiring divine intervention to break the cycle of revenge.',
          category: 'literary-context',
        },
        {
          id: 'epilogue-lp-2-restoration',
          content: 'True homecoming requires not just physical return but restoration of social order and harmony.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 2: Odysseus and Penelope reunited
    {
      id: 'epilogue-2-reunion-dialogue',
      type: 'dialogue',
      backgroundImage: 'https://cdn.midjourney.com/36583bff-7fb4-460a-be0d-609f09513530/0_0.png',
      character: {
        id: 'penelope',
        name: 'Penelope',
        portrait: 'https://cdn.midjourney.com/8fc0fd4b-0176-43f5-9753-fa207690b58c/0_0.png',
        description: 'Queen of Ithaca, faithful wife of Odysseus',
      },
      dialogueTree: {
        id: 'reunion-node-1',
        speaker: 'penelope',
        text: 'Twenty years, my husband. Twenty years I waited, weaving and unweaving, holding back the tide of suitors with nothing but wit and patience.',
        responses: [
          {
            id: 'reunion-resp-1',
            text: 'Your cunning matched my own',
            nextNodeId: 'reunion-node-2a',
            learningPoints: [
              {
                id: 'epilogue-lp-3-parallel',
                content: 'Homer deliberately parallels Penelope\'s cleverness with Odysseus\'s, showing intelligence as a shared virtue.',
                category: 'literary-context',
              },
            ],
          },
          {
            id: 'reunion-resp-2',
            text: 'You are the true hero of this tale',
            nextNodeId: 'reunion-node-2b',
            learningPoints: [
              {
                id: 'epilogue-lp-4-penelope-heroism',
                content: 'Penelope\'s patient endurance represents a different form of heroism—domestic rather than martial.',
                category: 'literary-context',
              },
            ],
          },
        ],
        allNodes: [
          {
            id: 'reunion-node-2a',
            speaker: 'penelope',
            text: 'The shroud I wove for Laertes became my weapon. Each night I unraveled the day\'s work, buying time, year after year. We are well matched, you and I—both survivors.',
            isEnd: true,
          },
          {
            id: 'reunion-node-2b',
            speaker: 'penelope',
            text: 'There is heroism in waiting as well as wandering, in holding ground as well as conquering it. We each fought our battles in our own way.',
            isEnd: true,
          },
        ],
      },
      learningPoints: [
        {
          id: 'epilogue-lp-5-reunion',
          content: 'The reunion of Odysseus and Penelope represents the restoration of order and the triumph of fidelity.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 3: Odysseus meets his father Laertes
    {
      id: 'epilogue-3-laertes',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/c97d520f-9c61-4588-b09d-70aae83a3027/0_0.png',
      image: 'https://cdn.midjourney.com/33106117-6d6c-4120-8f90-be797f3a7cc3/0_0.png',
      content: `In the orchard on the outskirts of the city, an old man tends the trees. His hands are gnarled, his back bent from labor and grief. This is Laertes, Odysseus's father, who has lived in self-imposed exile since his son's departure.

When Odysseus approaches, he does not recognize his own son. The young warrior who left for Troy is gone, replaced by this scarred, weathered stranger.

But Odysseus proves his identity through memory—reciting the exact number and type of trees Laertes gave him as a boy. Father and son embrace, and three generations of warriors stand together: Laertes, Odysseus, and Telemachus.

The line continues. The kingdom endures.`,
      learningPoints: [
        {
          id: 'epilogue-lp-6-generations',
          content: 'The reunion of three generations symbolizes the continuity of family, tradition, and kingship.',
          category: 'literary-context',
        },
        {
          id: 'epilogue-lp-7-recognition',
          content: 'Recognition scenes in epic poetry often use specific details from the past to verify identity and restore relationships.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 4: The families of the suitors seek revenge
    {
      id: 'epilogue-4-suitors-revenge',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/c97d520f-9c61-4588-b09d-70aae83a3027/0_0.png',
      image: 'https://cdn.midjourney.com/1168856d-c1ed-4008-bbf4-546f6c0ce88f/0_0.png',
      content: `The fathers of the dead suitors will not accept their sons' fate. Led by Eupeithes, father of Antinous, they form an armed mob and march on Odysseus.

"Blood for blood!" they cry. "Our sons are dead! Justice demands vengeance!"

Ancient Greek culture recognizes the blood feud as sacred duty. When a kinsman is killed, family honor demands retaliation. The cycle has no natural end.

Laertes, despite his age, stands beside his son and grandson. Three generations prepare for battle. The killing threatens to continue, spreading across Ithaca like plague.`,
      inlineAnnotations: [
        {
          id: 'epilogue-annot-1-blood-feud',
          text: 'blood feud',
          tooltip: {
            title: 'Ancient Greek Justice',
            content: 'In ancient Greece, family members were obligated to avenge slain relatives. This created endless cycles of violence until the development of legal courts offered an alternative to personal vendetta.',
            category: 'historical-context',
          },
        },
      ],
      learningPoints: [
        {
          id: 'epilogue-lp-8-vendetta',
          content: 'The vendetta culture of ancient Greece created cycles of violence that could destroy entire communities.',
          category: 'historical-context',
        },
        {
          id: 'epilogue-lp-9-conflict',
          content: 'The epic\'s final conflict tests whether Odysseus can transition from warrior to peacemaker.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 5: Athena brokers peace
    {
      id: 'epilogue-5-athena-peace',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/573cae62-4b25-4010-981a-0174d126bf10/0_0.png',
      image: 'https://cdn.midjourney.com/6499f6c6-c748-41a4-9bfe-2eb7c183514e/0_0.png',
      content: `As the two forces rush toward each other, the sky darkens. Thunder rolls across Ithaca.

Athena, goddess of wisdom, descends in a blaze of divine light. Her voice echoes like bronze on bronze: "ENOUGH!"

Zeus himself has decreed an end to bloodshed. The goddess strikes the earth between the two armies, and her presence freezes every warrior in place.

"Let there be peace," Athena commands. "Let oaths be sworn, and let the killing end. The suitors violated xenia—guest-friendship—and paid the price. Their deaths are just. But further vengeance serves only death itself."

Under divine compulsion, the families of the suitors lay down their weapons. Oaths are sworn. Peace settles over Ithaca at last, not through human choice but through divine command.

The age of heroes ends not with a final battle, but with the gods imposing order on mortal chaos.`,
      inlineAnnotations: [
        {
          id: 'epilogue-annot-2-xenia',
          text: 'xenia',
          tooltip: {
            title: 'Sacred Guest-Friendship',
            content: 'Xenia was the ancient Greek concept of hospitality and the relationship between host and guest, protected by Zeus himself. Violating xenia was a grave offense against both human custom and divine law.',
            category: 'cultural-context',
          },
        },
      ],
      learningPoints: [
        {
          id: 'epilogue-lp-10-divine-resolution',
          content: 'Greek epic often requires divine intervention to resolve conflicts that humans cannot solve alone.',
          category: 'literary-context',
        },
        {
          id: 'epilogue-lp-11-justice',
          content: 'The gods enforce cosmic justice, ensuring that sacred laws like xenia are upheld even when humans resist.',
          category: 'cultural-context',
        },
      ],
    },

    // Scene 6: Primary source - Ancient Greek pottery
    {
      id: 'epilogue-6-pottery-analysis',
      type: 'primary-source',
      backgroundImage: 'https://cdn.midjourney.com/36583bff-7fb4-460a-be0d-609f09513530/0_0.png',
      prompt: 'Examine this ancient Greek pottery depicting scenes from The Odyssey',
      source: {
        title: 'Red-Figure Stamnos: Odysseus and the Sirens',
        author: 'Siren Painter',
        date: 'c. 480-470 BCE',
        type: 'image',
        content: 'https://www.worldhistory.org/uploads/images/998.jpg',
        citation: 'British Museum, London (1843,1103.31). Red-figure stamnos from Vulci showing Odysseus bound to the mast while passing the Sirens.',
      },
      questions: [
        {
          id: 'epilogue-pottery-q1',
          question: 'What does this pottery reveal about The Odyssey\'s cultural importance in ancient Greece?',
          type: 'multiple-choice',
          options: [
            'It was only known to educated elites',
            'It was widely known and depicted in everyday objects',
            'It was considered sacred and rarely illustrated',
            'It was a recent invention when this pot was made',
          ],
          correctAnswer: 'It was widely known and depicted in everyday objects',
          explanation: 'The presence of Odyssey scenes on common pottery shows the epic was part of popular culture, not just elite literature. These stories were known by people across social classes.',
        },
        {
          id: 'epilogue-pottery-q2',
          question: 'Why might artists choose to depict Odysseus bound to the mast as a popular subject?',
          type: 'multiple-choice',
          options: [
            'It showed Odysseus as weak and helpless',
            'It demonstrated the value of preparation and self-control',
            'It was the easiest scene to draw',
            'It had no particular meaning beyond decoration',
          ],
          correctAnswer: 'It demonstrated the value of preparation and self-control',
          explanation: 'Odysseus binding himself to resist the Sirens represents foresight, self-awareness, and the ability to overcome temptation through planning—all valued Greek virtues.',
        },
        {
          id: 'epilogue-pottery-q3',
          question: 'What does the survival of these vessels tell us about The Odyssey\'s transmission?',
          type: 'multiple-choice',
          options: [
            'Only the written text preserved the story',
            'Visual art helped spread and preserve the epic\'s imagery',
            'The pottery came before the oral poetry',
            'The story was rarely told in ancient times',
          ],
          correctAnswer: 'Visual art helped spread and preserve the epic\'s imagery',
          explanation: 'Pottery, sculpture, and other visual arts worked alongside oral and written traditions to preserve and spread The Odyssey\'s stories and imagery throughout the Greek world.',
        },
      ],
      learningPoints: [
        {
          id: 'epilogue-lp-12-material-culture',
          content: 'Ancient pottery and visual art provide evidence of how widely known and culturally important The Odyssey was in Greek society.',
          category: 'historical-context',
        },
      ],
    },

    // Scene 7: The oral tradition and Homer
    {
      id: 'epilogue-7-oral-tradition',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/36583bff-7fb4-460a-be0d-609f09513530/0_0.png',
      image: 'https://cdn.midjourney.com/db443600-a5ab-4c7e-8903-853c0d7ee382/0_0.png',
      content: `Long before it was written down, The Odyssey lived in the voices of singers.

Picture a great hall in ancient Greece, firelight flickering on stone walls. A rhapsode—a professional reciter—steps forward with a lyre. The crowd falls silent.

"Sing to me, Muse, of the man of many ways..." he begins, and for hours the epic unfolds. Not read from a scroll, but performed from memory, with formulaic phrases that help the singer remember: "rosy-fingered dawn," "wine-dark sea," "grey-eyed Athena."

The rhapsode has not memorized the poem word-for-word like a script. Instead, he has learned the story, the characters, the formulaic building blocks. Each performance is both the same tale and slightly different, shaped by the singer and the audience.

This is how The Odyssey survived for centuries before writing. Homer—whether one person or many—gave final form to stories that had been sung for generations.`,
      inlineAnnotations: [
        {
          id: 'epilogue-annot-3-rhapsode',
          text: 'rhapsode',
          tooltip: {
            title: 'Professional Epic Singers',
            content: 'Rhapsodes were traveling performers who specialized in reciting epic poetry. They competed at festivals, performed at feasts, and passed down the oral tradition that preserved The Iliad and The Odyssey.',
            category: 'historical-context',
          },
        },
        {
          id: 'epilogue-annot-4-formulaic',
          text: 'formulaic phrases',
          tooltip: {
            title: 'Oral Poetry Techniques',
            content: 'Repeated phrases like "rosy-fingered dawn" served as memory aids and filled metric requirements in oral composition. They allowed singers to compose in performance rather than memorizing verbatim.',
            category: 'literary-context',
          },
        },
      ],
      learningPoints: [
        {
          id: 'epilogue-lp-13-oral-composition',
          content: 'The Odyssey was composed and transmitted orally for generations before being written down, using formulaic phrases as memory aids.',
          category: 'historical-context',
        },
        {
          id: 'epilogue-lp-14-performance',
          content: 'Ancient epic poetry was a living performance art, adapted by each singer for each audience, before becoming fixed in writing.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 8: Journey from oral tradition to modern times
    {
      id: 'epilogue-8-odyssey-journey',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/36583bff-7fb4-460a-be0d-609f09513530/0_0.png',
      image: 'https://cdn.midjourney.com/36583bff-7fb4-460a-be0d-609f09513530/0_0.png',

      content: `The Odyssey's own journey through time is almost as remarkable as Odysseus's voyage.

The story begins around 1200 BCE with the Trojan War itself—a real conflict that left ruins archaeologists can still excavate. For centuries after, singers passed down tales of the heroes who fought there.

Around 950 BCE, these stories circulated as oral poetry, performed by traveling rhapsodes. Each singer adapted the tale, but the core remained: Odysseus's long journey home.

Around 750 BCE, a poet we call Homer gave the epic its final form, possibly just as the Greeks were adopting writing from the Phoenicians. For the first time, The Odyssey could be written down, though oral performance continued for centuries.

By 600 BCE, written texts began to spread across Greece. Around 300 BCE, scholars at the great Library of Alexandria established a standardized version—the ancestor of the text we read today.

The epic never stopped traveling. In 20 BCE, the Roman poet Virgil wrote The Aeneid, deliberately echoing Homer. In 1300 CE, Dante placed Odysseus in his Inferno. In 1922, James Joyce reimagined the entire epic as one day in modern Dublin.

The Odyssey has journeyed from Bronze Age campfires to ancient scrolls, from medieval manuscripts to printed books, from silent reading to films and video games. It has crossed 3,000 years and every ocean, adapting to each new age while remaining essentially itself.

The epic that began as sung poetry in firelit halls now lives in countless forms—but its core questions remain: What does it mean to go home? What price do we pay for survival? How do we maintain our identity through transformation? These questions still resonate because they're fundamentally human.`,

      learningPoints: [
        {
          id: 'epilogue-lp-16-transmission',
          content: 'The Odyssey evolved from oral tradition (~950 BCE) through Homer\'s synthesis (~750 BCE) to written standardization (~300 BCE), showing how literature transforms across mediums.',
          category: 'historical-context',
        },
        {
          id: 'epilogue-lp-17-influence',
          content: 'Major works like Virgil\'s Aeneid (20 BCE), Dante\'s Inferno (1300 CE), and Joyce\'s Ulysses (1922) demonstrate The Odyssey\'s continuous cultural influence.',
          category: 'literary-context',
        },
        {
          id: 'epilogue-lp-18-longevity',
          content: 'The epic\'s 3,000-year journey from Bronze Age Greece to modern media illustrates how great stories adapt to new forms while preserving essential themes.',
          category: 'cultural-context',
        },
      ],
    },

    // Scene 9: Timeline - Historical context
    {
      id: 'epilogue-9-timeline',
      type: 'timeline-game',
      backgroundImage: 'https://cdn.midjourney.com/36583bff-7fb4-460a-be0d-609f09513530/0_0.png',
      prompt: 'Place these events in The Odyssey\'s history in chronological order',
      timelineEvents: [
        {
          id: 'epilogue-event-1',
          title: 'The Trojan War (Setting)',
          year: -1200,
          description: 'The legendary conflict that serves as backstory for The Odyssey. Archaeological evidence suggests a real war around this time.',
          image: 'https://cdn.midjourney.com/59737e94-117d-4863-a40b-8ec451739576/0_0.png',
        },
        {
          id: 'epilogue-event-2',
          title: 'Oral Composition Period',
          year: -950,
          description: 'The Odyssey exists as oral poetry, performed and adapted by many singers across generations.',
          image: 'https://cdn.midjourney.com/db443600-a5ab-4c7e-8903-853c0d7ee382/0_0.png',
        },
        {
          id: 'epilogue-event-3',
          title: 'Homer Creates the Epic',
          year: -750,
          description: 'A poet known as Homer composes the final version of The Odyssey, possibly performing it orally as the Greeks begin experimenting with writing.',
          image: 'https://cdn.midjourney.com/db443600-a5ab-4c7e-8903-853c0d7ee382/0_0.png',
        },
        {
          id: 'epilogue-event-4',
          title: 'Written Manuscripts Spread',
          year: -600,
          description: 'Multiple written copies of The Odyssey circulate across Greek city-states, with variations between different manuscripts.',
          image: 'https://cdn.midjourney.com/36583bff-7fb4-460a-be0d-609f09513530/0_0.png',
        },
        {
          id: 'epilogue-event-5',
          title: 'Library of Alexandria Creates Official Version',
          year: -300,
          description: 'Scholars at the great Library of Alexandria compare all versions and create one standardized "official" text that becomes the basis for all future copies.',
          image: 'https://cdn.midjourney.com/36583bff-7fb4-460a-be0d-609f09513530/0_0.png',
        },
        {
          id: 'epilogue-event-6',
          title: 'Virgil\'s Aeneid',
          year: -20,
          description: 'Roman poet Virgil writes The Aeneid, deliberately echoing and responding to The Odyssey.',
          image: 'https://cdn.midjourney.com/36583bff-7fb4-460a-be0d-609f09513530/0_0.png',
        },
        {
          id: 'epilogue-event-7',
          title: 'Medieval Retellings',
          year: 1300,
          description: 'Dante references Odysseus in the Inferno; medieval authors retell and adapt the epic.',
          image: 'https://cdn.midjourney.com/36583bff-7fb4-460a-be0d-609f09513530/0_0.png',
        },
        {
          id: 'epilogue-event-8',
          title: 'Modern Adaptations',
          year: 1922,
          description: 'James Joyce publishes Ulysses, reimagining The Odyssey in modern Dublin. Adaptations continue to present day.',
          image: 'https://cdn.midjourney.com/36583bff-7fb4-460a-be0d-609f09513530/0_0.png',
        },
      ],
      successThreshold: 70,
      learningPoints: [
        {
          id: 'epilogue-lp-15-chronology',
          content: 'The Odyssey spans over 3,000 years from its setting to modern adaptations, showing its enduring cultural power.',
          category: 'historical-context',
        },
      ],
    },

    // Scene 10: The Odyssey's influence on later works
    {
      id: 'epilogue-10-influence',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/36583bff-7fb4-460a-be0d-609f09513530/0_0.png',
      image: 'https://cdn.midjourney.com/36583bff-7fb4-460a-be0d-609f09513530/0_0.png',
      content: `The Odyssey's influence on Western literature is immeasurable. Its patterns and themes echo through 2,700 years of storytelling.

Virgil's Aeneid deliberately mirrors The Odyssey's structure—half wandering, half homecoming. Dante places Odysseus in Hell, punishing his curiosity. James Joyce rewrites the entire epic as a single day in Dublin.

But the influence goes far beyond direct adaptations. The "hero's journey" pattern identified by Joseph Campbell—departure, trials, return—is essentially The Odyssey's plot structure, now found everywhere from Star Wars to The Lord of the Rings.

The clever hero who uses intelligence over strength? That's Odysseus's legacy. The faithful spouse waiting at home? Penelope's archetype. The journey that changes the hero? That's The Odyssey's core insight.

Even the word "odyssey" itself has entered our language, meaning any long, eventful journey. The epic has become so fundamental to our culture that we use its patterns without knowing it.`,
      inlineAnnotations: [
        {
          id: 'epilogue-annot-5-campbell',
          text: 'Joseph Campbell',
          tooltip: {
            title: 'The Hero\'s Journey',
            content: 'Joseph Campbell (1904-1987) was a mythologist who identified the "monomyth"—a universal pattern in hero stories across cultures. His work was heavily influenced by The Odyssey and in turn influenced modern storytellers.',
            category: 'reference',
          },
        },
      ],
      learningPoints: [
        {
          id: 'epilogue-lp-16-literary-influence',
          content: 'The Odyssey established narrative patterns that continue to shape literature, film, and storytelling across all media.',
          category: 'literary-context',
        },
        {
          id: 'epilogue-lp-17-archetypes',
          content: 'Characters and situations from The Odyssey have become archetypes—fundamental patterns recognized across cultures.',
          category: 'literary-context',
        },
        {
          id: 'epilogue-lp-18-language',
          content: 'The epic\'s cultural impact is so deep that "odyssey" itself has become a common word in English.',
          category: 'cultural-context',
        },
      ],
    },

    // Scene 11: Quote attribution - Literary heroes and their Odyssean traits
    {
      id: 'epilogue-11-hero-traits',
      type: 'quote-attribution',
      backgroundImage: 'https://cdn.midjourney.com/36583bff-7fb4-460a-be0d-609f09513530/0_0.png',
      prompt: 'Match each literary hero to the Odyssean trait they share with Odysseus',
      quotes: [
        {
          id: 'epilogue-trait-1',
          text: 'Uses cunning and disguise rather than direct confrontation to achieve their goal',
          speaker: 'Sherlock Holmes',
          context: 'The famous Victorian detective created by Arthur Conan Doyle (1887). Holmes solves crimes through observation, logic, and deduction, often going undercover in disguise to gather information rather than confronting criminals directly.',
          explanation: 'Just as Odysseus disguises himself as a beggar to infiltrate his own palace and gather intelligence before striking, Sherlock Holmes frequently uses costumes and false identities to investigate crimes. Both heroes demonstrate that brains can triumph over brawn—Odysseus defeats 108 suitors not through direct combat but through clever strategy, while Holmes solves cases other detectives can\'t crack through pure intellect.',
        },
        {
          id: 'epilogue-trait-2',
          text: 'Undertakes a long journey to return home, facing monsters and supernatural threats',
          speaker: 'Frodo Baggins',
          context: 'The hobbit hero of J.R.R. Tolkien\'s The Lord of the Rings (1954). Frodo must journey from his peaceful home in the Shire across Middle-earth to destroy an evil ring in the fires of Mount Doom, facing orcs, giant spiders, and dark magic along the way.',
          explanation: 'Both heroes embark on epic journeys home through hostile territory filled with monsters. Odysseus battles the Cyclops, Scylla, and Charybdis to reach Ithaca; Frodo fights Shelob the spider and the forces of Sauron to return to the Shire. Tolkien deliberately modeled his epic on Homer—both stories follow small figures who survive through courage and cleverness where mighty warriors would fail. Even their companions die along the way (Odysseus loses all his men; Frodo loses the Fellowship\'s unity).',
        },
        {
          id: 'epilogue-trait-3',
          text: 'Must resist temptation that promises immortality or escape from mortality',
          speaker: 'Gilgamesh',
          context: 'The hero of humanity\'s oldest epic poem, written in ancient Mesopotamia around 2100 BCE—over 1,000 years before The Odyssey. Gilgamesh is a king who watches his best friend die and becomes obsessed with finding the secret of eternal life, journeying to the ends of the earth to escape death.',
          explanation: 'Both heroes face the fundamental human dilemma: accept mortality or grasp for immortality. Calypso offers Odysseus eternal life and youth if he stays with her—he refuses, choosing mortal life with Penelope over divine existence. Gilgamesh searches desperately for immortality but ultimately learns he must accept death as part of being human. The Odyssey was likely influenced by the much older Gilgamesh epic, showing how ancient stories built on one another.',
        },
        {
          id: 'epilogue-trait-4',
          text: 'Returns home after long absence to find home changed and must reclaim their place',
          speaker: 'Rip Van Winkle',
          context: 'The protagonist of Washington Irving\'s 1819 short story, an early American classic. Rip wanders into the mountains, falls asleep for twenty years, and wakes to find his village completely transformed—the American Revolution has happened, his wife has died, and nobody recognizes him.',
          explanation: 'The parallel is striking: both men are gone for exactly twenty years and return to find home utterly changed. Odysseus returns to find suitors occupying his palace and must prove his identity by stringing his bow; Rip returns to find King George\'s portrait replaced by George Washington\'s and must convince people he\'s really himself. Irving was deliberately echoing The Odyssey\'s theme of displacement—the returning stranger who must reclaim his place in a world that moved on without him.',
        },
        {
          id: 'epilogue-trait-5',
          text: 'Leads a small band of followers through deadly trials that kill many companions',
          speaker: 'Captain Ahab',
          context: 'The monomaniacal ship captain in Herman Melville\'s Moby-Dick (1851). Ahab leads the crew of the whaling ship Pequod on an obsessive hunt for the white whale that took his leg, driving them all toward destruction in the Pacific Ocean.',
          explanation: 'Both are sea captains who lead their crews to doom through perilous waters. Odysseus starts with twelve ships and hundreds of men but loses them all to monsters, storms, and their own recklessness—he alone survives. Ahab drags his entire crew to their deaths hunting Moby-Dick, with only one survivor to tell the tale. Melville inverted the Odyssey: where Odysseus desperately wants to go home, Ahab refuses to return until he has his revenge. Both show the terrible cost of leadership and the sea\'s indifference to human ambition.',
        },
        {
          id: 'epilogue-trait-6',
          text: 'Must prove their identity through a specific test that only they can pass',
          speaker: 'King Arthur',
          context: 'The legendary king of medieval British romance, whose stories were written down in the 1100s-1400s CE. Arthur proves he is the rightful king of Britain by being the only person who can pull the magical sword Excalibur from the stone where it is embedded.',
          explanation: 'Both heroes must pass an impossible physical test that proves their unique identity and right to rule. Penelope announces that she will marry whoever can string Odysseus\'s great bow and shoot an arrow through twelve axe heads—only Odysseus can do it, revealing his identity and right to reclaim his throne. Arthur pulls Excalibur from the stone when all other knights fail, proving his royal birthright. Medieval authors knew the Odyssey and deliberately echoed this pattern of the "test only the true hero can pass."',
        },
        {
          id: 'epilogue-trait-7',
          text: 'Receives crucial aid from a divine or supernatural female figure',
          speaker: 'Dante Alighieri',
          context: 'The Italian poet who wrote The Divine Comedy (1320), describing his journey through Hell, Purgatory, and Heaven. Dante the character is guided first by the Roman poet Virgil, then by Beatrice, a woman he loved who becomes his spiritual guide representing divine grace and wisdom.',
          explanation: 'Both heroes need divine feminine wisdom to complete their journeys. Athena constantly aids Odysseus—she disguises him, advises him, and even stops the final battle. Beatrice guides Dante through Paradise, representing the wisdom and grace needed to understand heaven. The pattern of the wise goddess/woman who helps the male hero runs throughout Western literature. Interestingly, Dante places Odysseus himself in the Inferno as a cautionary tale, while using Athena\'s role as a model for Beatrice.',
        },
        {
          id: 'epilogue-trait-8',
          text: 'Must balance desire to explore the unknown against the pull of home and family',
          speaker: 'Captain Kirk',
          context: 'The captain of the starship Enterprise in the original Star Trek series (1966-1969), created by Gene Roddenberry. Kirk explores the galaxy, encountering alien civilizations and cosmic dangers, while the Enterprise serves as his home and his crew as his family.',
          explanation: 'Odysseus embodies a fundamental contradiction: he\'s intensely curious (he insists on meeting the Cyclops, hearing the Sirens) yet desperately homesick. He wants to explore but also to return. Kirk lives this same tension in space—he\'s driven to "explore strange new worlds" but constantly torn between adventure and the human connections that anchor him. Science fiction often reimagines The Odyssey in space (Star Trek, Battlestar Galactica, The Expanse) because the core conflict remains timeless: the human need to explore versus the human need to belong.',
        },
      ],
      learningPoints: [
        {
          id: 'epilogue-lp-19-hero-pattern',
          content: 'The Odyssey established character traits and plot patterns that define the hero across Western literature.',
          category: 'literary-context',
        },
        {
          id: 'epilogue-lp-20-universality',
          content: 'Odyssean themes appear in literature across time periods, languages, and genres, showing the epic\'s universal resonance.',
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

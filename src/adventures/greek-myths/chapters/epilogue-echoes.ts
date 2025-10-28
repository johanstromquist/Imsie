import type { Chapter } from '../../../types';
import { epilogueQuiz } from '../quizzes/epilogue-quiz';

export const epilogue: Chapter = {
  id: 'epilogue-echoes',
  title: 'Epilogue: Echoes Through Time',
  description: 'Discover how Greek myths shaped Western literature and why these ancient stories still resonate today.',

  learningObjectives: [
    'Synthesize understanding of how Greek myths shaped Western literature',
    'Identify mythic structures and archetypes in contemporary stories',
    'Analyze the enduring relevance of Greek heroic themes',
    'Reflect on the lessons and values embedded in these myths',
    'Create connections between ancient and modern storytelling',
  ],

  scenes: [
    // Scene 1: Legacy of Greek mythology
    {
      id: 'epilogue-scene-1-legacy',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/bcc80410-7879-44ab-b630-50647ff09e00/0_0.png',
      image: 'https://cdn.midjourney.com/e32bf62f-96c2-4bab-aa14-d2b86651ca01/0_0.png',

      content: `You've journeyed through the Age of Heroes. You've witnessed prophecies fulfilled, monsters slain, impossible quests completed. You've seen heroes rise and fall, shaped by kleos, arete, hubris, and fate.

But these stories didn't end with ancient Greece. They echoed forward through time, shaping every culture they touched.

When Roman poets like Ovid retold them, they spread across the empire. When medieval monks copied manuscripts, they preserved them through the Dark Ages. When Renaissance scholars rediscovered them, they sparked a cultural revolution.

And today? Walk into any bookstore, any cinema, any streaming service. The Age of Heroes is still here. It just wears different costumes.`,

      learningPoints: [
        {
          id: 'lp-epilogue-1-continuity',
          content: 'Greek myths have influenced Western literature continuously for over 2,500 years, adapting to each new medium and era.',
          category: 'historical-context',
        },
        {
          id: 'lp-epilogue-1-transmission',
          content: 'Cultural transmission occurred through Roman adoption, medieval preservation, and Renaissance revival—each adding new interpretations.',
          category: 'historical-context',
        },
      ],
    },

    // Scene 2: Timeline game - Literary influence
    {
      id: 'epilogue-scene-2-timeline',
      type: 'timeline-game',
      backgroundImage: 'https://cdn.midjourney.com/fec9712e-222f-466d-950e-340758f41617/0_0.png',

      prompt: 'Order these major literary works influenced by Greek mythology, from earliest to most recent',
      image: 'https://cdn.midjourney.com/bcc80410-7879-44ab-b630-50647ff09e00/0_0.png',

      timelineEvents: [
        {
          id: 'event-1',
          title: 'The Divine Comedy',
          year: 1320,
          description: 'Dante Alighieri structures his journey through Hell, Purgatory, and Heaven using Greek underworld mythology, featuring figures like Charon and the Minotaur.',
          image: 'https://cdn.midjourney.com/c8813064-15f2-4480-837c-2bf49b66bcbf/0_3.png',
        },
        {
          id: 'event-2',
          title: 'A Midsummer Night\'s Dream',
          year: 1595,
          description: 'Shakespeare incorporates Theseus, Hippolyta, and references to Pyramus and Thisbe (from Ovid\'s Metamorphoses) into his romantic comedy.',
          image: 'https://cdn.midjourney.com/f10ccd97-560b-4096-9f93-6ce9d9138d66/0_3.png',
        },
        {
          id: 'event-3',
          title: 'Paradise Lost',
          year: 1667,
          description: 'John Milton blends Christian theology with Greek mythological structures, creating an epic that echoes Homer\'s style and scope.',
          image: 'https://cdn.midjourney.com/2ad02533-1498-4202-a02e-12447945cbbd/0_2.png',
        },
        {
          id: 'event-4',
          title: 'Ulysses',
          year: 1922,
          description: 'James Joyce reimagines Homer\'s Odyssey in modern Dublin, with Leopold Bloom as a contemporary Odysseus navigating urban life.',
          image: 'https://cdn.midjourney.com/312125a1-f3ac-4318-bbac-f58ea9df7973/0_0.png',
        },
        {
          id: 'event-5',
          title: 'The Penelopiad',
          year: 2005,
          description: 'Margaret Atwood retells the Odyssey from Penelope\'s perspective, giving voice to the women silenced in the original epic.',
          image: 'https://cdn.midjourney.com/7b95489a-0b8e-4945-ae8b-3c61471ef6a8/0_0.png',
        },
      ],

      successThreshold: 70,

      learningPoints: [
        {
          id: 'lp-epilogue-2-influence',
          content: 'Greek mythology has inspired major works across seven centuries, from Dante\'s medieval epic to Atwood\'s feminist reinterpretation.',
          category: 'reference',
        },
      ],
    },

    // Scene 3: Hero's journey - Greece to Hollywood
    {
      id: 'epilogue-scene-3-heros-journey',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/c3e3b7d3-7a54-47b6-8704-6309165f6a37/0_0.png',
      image: 'https://cdn.midjourney.com/c3e3b7d3-7a54-47b6-8704-6309165f6a37/0_0.png',

      content: `In 1949, scholar Joseph Campbell published "The Hero with a Thousand Faces." He argued that hero myths worldwide follow the same basic pattern—a pattern first fully articulated in Greek mythology.

The structure he identified:

**The Call to Adventure** - Perseus receiving an impossible quest
**Supernatural Aid** - Athena and Hermes providing magical items
**The Road of Trials** - Facing the Graeae, finding the Gorgons
**The Ultimate Boon** - Obtaining Medusa's head
**The Return** - Coming home transformed, using the gift to save his mother

Campbell called this "The Hero's Journey." Hollywood listened.

George Lucas explicitly used Campbell's structure for Star Wars. Luke Skywalker's journey mirrors Perseus's: prophecy, call to adventure, supernatural mentors (Obi-Wan/Yoda), magical weapons (lightsaber), trials, ultimate confrontation, return as hero.

The pattern repeats in Harry Potter, The Matrix, The Lord of the Rings, Black Panther—everywhere. The Age of Heroes never ended. It just moved to a galaxy far, far away.`,

      inlineAnnotations: [
        {
          id: 'annotation-campbell',
          text: 'Joseph Campbell',
          tooltip: {
            title: 'The Mythology Scholar',
            content: 'Campbell (1904-1987) was a comparative mythologist who identified universal patterns across world mythologies. His work profoundly influenced modern storytelling, especially in film.',
            category: 'reference',
          },
        },
      ],

      learningPoints: [
        {
          id: 'lp-epilogue-3-campbell',
          content: 'Joseph Campbell\'s "Hero\'s Journey" framework, derived from Greek myths, became the structural blueprint for modern Hollywood storytelling.',
          category: 'literary-context',
        },
        {
          id: 'lp-epilogue-3-universality',
          content: 'The hero\'s journey resonates across cultures because it mirrors universal human experiences: leaving safety, facing trials, returning transformed.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 4: Primary source - Ancient vs modern comparison
    {
      id: 'epilogue-scene-4-comparison',
      type: 'primary-source',
      backgroundImage: 'https://cdn.midjourney.com/32fff11a-c6e3-47fb-919d-7ca98aada92b/0_0.png',

      prompt: 'Compare these two passages: Homer\'s ancient text and Rick Riordan\'s modern adaptation. How does the core heroic moment translate across 2,800 years?',

      source: {
        title: 'The Odyssey vs. The Lightning Thief',
        author: 'Homer (8th century BCE) and Rick Riordan (2005 CE)',
        date: '~750 BCE and 2005 CE',
        type: 'text',
        content: `**Homer, The Odyssey, Book 9 (translated):**
"Then, taking up the massive stake of olive wood, I thrust it deep into the Cyclops's eye, and twisted with all my strength while my companions held it steady. As when a blacksmith plunges a red-hot axe into cold water and it hisses—thus did the eye hiss around the olive stake. The Cyclops roared with agony, and we fled in terror."


**Rick Riordan, The Lightning Thief, Chapter 4:**
"I swung the bat at the Minotaur's head. It shattered on impact, but I kept the splintered end and drove it straight into the monster's eye. The Minotaur bellowed—a sound of absolute rage and pain. Then it exploded into golden dust, the way monsters do when they're defeated. All that was left were its horns, which I picked up as proof."`,
        citation: 'Homer, Odyssey IX.382-394; Riordan, The Lightning Thief, 62',
      },

      questions: [
        {
          id: 'q-comparison',
          question: 'What core elements remain consistent between the ancient and modern versions of the hero-confronts-monster scene?',
          type: 'multiple-choice',
          options: [
            'Both use exactly the same monsters and weapons',
            'Both feature a young hero using a makeshift weapon to blind/defeat a powerful creature through courage and quick thinking',
            'Both emphasize the gods helping the hero win easily',
            'Both focus primarily on the physical description of the monster',
          ],
          correctAnswer: 'Both feature a young hero using a makeshift weapon to blind/defeat a powerful creature through courage and quick thinking',
          explanation: 'Despite 2,800 years of separation, both passages feature a young hero facing an overwhelming opponent, improvising with available weapons (olive stake/broken bat), targeting a vulnerable point, and prevailing through courage rather than superior strength. The core heroic moment—ordinary person doing extraordinary things—transcends time and medium. Riordan\'s modern prose and "golden dust" update the style, but the essence remains Greek.',
        },
      ],

      learningPoints: [
        {
          id: 'lp-epilogue-4-adaptation',
          content: 'Modern retellings preserve the core emotional beats of Greek myths while updating details to resonate with contemporary audiences.',
          category: 'literary-context',
        },
        {
          id: 'lp-epilogue-4-riordan',
          content: 'Rick Riordan\'s Percy Jackson series introduces Greek mythology to millions of young readers through accessible, modern language and settings.',
          category: 'reference',
        },
      ],
    },

    // Scene 5: Quote attribution - Modern quotes with Greek origins
    {
      id: 'epilogue-scene-5-quotes',
      type: 'quote-attribution',
      backgroundImage: 'https://cdn.midjourney.com/57e66d6c-7a8d-4c40-9ec7-001a85728102/0_0.png',

      prompt: 'These modern superhero quotes echo ancient Greek values. Match each to the Greek concept it reflects (kleos: glory/fame, arete: excellence/virtue, xenia: hospitality, sophrosyne: moderation):',

      quotes: [
        {
          id: 'quote-1',
          text: 'With great power comes great responsibility',
          speaker: 'Arete (excellence/virtue)',
          context: 'Spider-Man\'s defining principle echoes the Greek concept that those with abilities must use them for good.',
          explanation: 'The Greek value of arete demanded that heroes use their gifts responsibly, not selfishly. This moral imperative shapes modern superhero narratives.',
        },
        {
          id: 'quote-2',
          text: 'I am Iron Man',
          speaker: 'Kleos (glory/fame)',
          context: 'Tony Stark\'s public declaration echoes the Greek hero\'s need to be remembered for their deeds.',
          explanation: 'Greek heroes sought kleos—imperishable glory. Stark\'s revelation mirrors this: he wants credit, recognition, to be remembered. Fame matters.',
        },
        {
          id: 'quote-3',
          text: 'The Force will be with you, always',
          speaker: 'Divine assistance',
          context: 'Obi-Wan\'s promise to Luke echoes how Greek gods guided chosen heroes.',
          explanation: 'Just as Athena aided Perseus and Odysseus, the Force guides Luke. Heroes need supernatural support—human effort alone isn\'t enough.',
        },
        {
          id: 'quote-4',
          text: 'I can do this all day',
          speaker: 'Perseverance/endurance',
          context: 'Captain America\'s motto reflects the Greek heroic value of enduring impossible odds.',
          explanation: 'Greek heroes like Heracles proved worth through endurance, not just victory. The willingness to keep fighting defines heroism.',
        },
        {
          id: 'quote-5',
          text: 'I am inevitable',
          speaker: 'Fate/prophecy',
          context: 'Thanos invokes the Greek concept of unavoidable destiny.',
          explanation: 'Greek prophecies were inevitable—resistance was futile. Thanos claims the same certainty, though he\'s wrong. The heroes prove fate can be defied.',
        },
      ],

      learningPoints: [
        {
          id: 'lp-epilogue-5-values',
          content: 'Modern superhero philosophies directly echo Greek heroic values: arete, kleos, divine favor, endurance, and fate.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 6: Recurring archetypes
    {
      id: 'epilogue-scene-6-archetypes',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/09ad04d4-c5f3-4b8f-a4a1-2df95e044e04/0_0.png',
      image: 'https://cdn.midjourney.com/09ad04d4-c5f3-4b8f-a4a1-2df95e044e04/0_0.png',

      content: `Greek myths established character archetypes that appear in every story since. You've met them all:

**The Mentor** - Athena guiding Perseus; Chiron training heroes; the wise elder who provides guidance. Reincarnated as Gandalf, Dumbledore, Mr. Miyagi, Obi-Wan Kenobi.

**The Threshold Guardian** - Creatures and challenges that test whether the hero is ready to proceed. The Graeae, the Sphinx, the trials at the gates. Now security guards, bouncers, entrance exams—metaphorical and literal gatekeepers.

**The Shapeshifter** - Characters whose loyalty or nature remains ambiguous. Circe transforming men; Proteus changing forms. Now double agents, morally grey characters, anyone who might be friend or foe.

**The Shadow** - The dark reflection of the hero, often what they could become. The Minotaur as Theseus's monstrous possibility; Medusa as Perseus's victim. Now Darth Vader to Luke, Voldemort to Harry.

**The Trickster** - Hermes stealing Apollo's cattle; Odysseus's cunning lies. Chaos agents who break rules and force change. Now Loki, Jack Sparrow, Deadpool.

**The Herald** - The messenger who brings the Call to Adventure. Hermes bearing divine commands. R2-D2 carrying Leia's hologram. The invitation, the letter, the challenge that starts the journey. Often seems minor but triggers everything.

These aren't metaphors. These are the actual roles that human psyches recognize and respond to. Greek myths identified them first.`,

      learningPoints: [
        {
          id: 'lp-epilogue-6-archetypes',
          content: 'Character archetypes like the mentor, threshold guardian, and shapeshifter originated in Greek myths and recur across all storytelling traditions.',
          category: 'literary-context',
        },
        {
          id: 'lp-epilogue-6-psychology',
          content: 'Carl Jung argued these archetypes reflect universal patterns in the human unconscious—why they appear in myths worldwide.',
          category: 'reference',
        },
      ],
    },

    // Scene 7: Greek Narrative Patterns (NEW - inserted before cause-effect)
    {
      id: 'epilogue-scene-7-patterns',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/09ad04d4-c5f3-4b8f-a4a1-2df95e044e04/0_0.png',
      image: 'https://cdn.midjourney.com/bb2ddd6b-2578-4266-9842-9a347da3ccd3/0_0.png',

      content: `Beyond character archetypes, Greek myths established recurring narrative patterns—plot structures that writers have used for millennia.

**The Unavoidable Prophecy:** Oedipus tried to escape his fate. Perseus's grandfather locked Danaë in a bronze tower. Both were doomed by prophecy anyway. In Greek tragedy, fate is inevitable—running from it often brings it closer. Modern examples: Anakin Skywalker's fall to the Dark Side, Macbeth's bloody rise to power.

**Hubris Bringing Downfall:** Icarus flew too close to the sun. Bellerophon tried to reach Mount Olympus. Pride before the fall. The Greeks believed excessive pride angered the gods and brought nemesis—divine retribution. Today we see this in cautionary tales like Faust selling his soul or Victor Frankenstein playing god.

**The Impossible Task:** Heracles performed Twelve Labors. Jason sought the Golden Fleece. Perseus had to bring back Medusa's head. Heroes prove their worth through trials that seem impossible—but completion transforms them. Every quest narrative from King Arthur to Frodo Baggins follows this pattern.

**The Underworld Journey (Katabasis):** Orpheus descended for Eurydice. Odysseus consulted the shades. Heracles captured Cerberus. The hero must journey to the land of death and return transformed. Modern versions: Luke Skywalker in the cave on Dagobah, Katniss in the underground tunnels, Simba's vision quest.

**The Tragic Monster:** Medusa was beautiful before Athena cursed her. Scylla was transformed by jealous Circe. The monster was once human, often a victim. This adds moral complexity—the "villain" deserves sympathy. Think of Harvey Dent becoming Two-Face, or Anakin becoming Darth Vader.

These patterns structure every story you know. Once you see them, you can't unsee them. The Age of Heroes established the grammar of storytelling itself.`,

      learningPoints: [
        {
          id: 'lp-epilogue-7-patterns',
          content: 'Greek narrative patterns (prophecy, hubris, impossible tasks, katabasis, tragic monsters) form the structural foundation of Western storytelling across all media.',
          category: 'literary-context',
        },
        {
          id: 'lp-epilogue-7-universality',
          content: 'These patterns persist because they address universal human experiences: fate vs. free will, pride, worthiness, confronting death, and moral complexity.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 8: Cause-effect - Greek tropes to modern examples
    {
      id: 'epilogue-scene-8-cause-effect',
      type: 'cause-effect',
      backgroundImage: 'https://cdn.midjourney.com/bb2ddd6b-2578-4266-9842-9a347da3ccd3/0_0.png',

      prompt: 'Match Greek mythological tropes to their modern story examples',

      pairs: [
        {
          id: 'pair-1',
          cause: 'The prophecy that cannot be avoided (Oedipus, Perseus)',
          effect: 'Harry Potter: "The one with the power to vanquish the Dark Lord approaches"',
          explanation: 'The unavoidable prophecy trope persists: Harry is marked as Voldemort\'s equal, and despite all attempts to prevent or escape it, the prophecy drives the entire narrative to its conclusion.',
        },
        {
          id: 'pair-2',
          cause: 'The hubris that brings downfall (Icarus, Bellerophon)',
          effect: 'Tony Stark creating Ultron: "What if the world was safe?"',
          explanation: 'Stark\'s godlike confidence that he can single-handedly save humanity creates the very threat he feared—classic Greek hubris where pride creates catastrophe.',
        },
        {
          id: 'pair-3',
          cause: 'The impossible task that proves worthiness (Twelve Labors, Jason)',
          effect: 'Thor becoming worthy to lift Mjolnir again',
          explanation: 'Just as Heracles proved worth through impossible labors, Thor must demonstrate he\'s "worthy" through trials and moral growth before reclaiming his power.',
        },
        {
          id: 'pair-4',
          cause: 'The descent to the underworld (Orpheus, Odysseus)',
          effect: 'Katniss entering the Capitol sewers in Mockingjay',
          explanation: 'The katabasis (underworld journey) symbolizes confronting death and emerging transformed. Katniss\'s literal descent into dark tunnels mirrors the psychological journey to overcome trauma.',
        },
        {
          id: 'pair-5',
          cause: 'The monster that was once human (Medusa, Scylla)',
          effect: 'Anakin Skywalker becoming Darth Vader',
          explanation: 'The transformation from victim/person into monster through tragedy mirrors Medusa\'s curse. Vader retains humanity beneath the monstrous exterior, creating tragic complexity.',
        },
      ],

      learningPoints: [
        {
          id: 'lp-epilogue-8-tropes',
          content: 'Narrative tropes established by Greek myths—unavoidable prophecy, hubris, proving worth, underworld descent—structure modern blockbuster films.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 9: Dialogue - Ancient and modern heroes meet
    {
      id: 'epilogue-scene-9-dialogue',
      type: 'dialogue',
      backgroundImage: 'https://cdn.midjourney.com/e32bf62f-96c2-4bab-aa14-d2b86651ca01/0_0.png',

      character: {
        id: 'perseus',
        name: 'Perseus',
        portrait: 'https://cdn.midjourney.com/ef7e4839-017c-46c5-adbd-ad625597d1c1/0_3.png',
        description: 'The legendary slayer of Medusa',
      },

      dialogueTree: {
        id: 'node-1',
        speaker: 'perseus',
        text: 'You there! You look like a warrior. What\'s your name?',

        responses: [
          {
            id: 'response-luke',
            text: 'Luke Skywalker. I... destroyed the Death Star',
            nextNodeId: 'node-2',
          },
          {
            id: 'response-confused',
            text: 'This is strange. Where are we?',
            nextNodeId: 'node-3',
          },
        ],

        allNodes: [
          {
            id: 'node-2',
            speaker: 'perseus',
            text: 'A "death star"? Sounds ominous. I slew Medusa the Gorgon—her gaze turned men to stone. We\'re both monster slayers, then. Tell me, did the gods give you aid?',
            nextNodeId: 'node-4',
          },
          {
            id: 'node-3',
            speaker: 'perseus',
            text: 'A place between times, perhaps. But never mind that. You carry yourself like someone who\'s faced great trials. What quest defined you?',
            nextNodeId: 'node-5',
          },
          {
            id: 'node-4',
            speaker: 'perseus',
            text: 'I mean divine assistance. Athena gave me a shield, Hermes gave me winged sandals. Without them, I would have failed. Did you have such help?',
            responses: [
              {
                id: 'response-yes',
                text: 'Yes—Obi-Wan and Yoda guided me. The Force was with me',
                nextNodeId: 'node-6',
                learningPoints: [
                  {
                    id: 'lp-epilogue-9a-parallel',
                    content: 'Luke recognizes his mentors and the Force serve the same function as Perseus\'s divine aid—supernatural support for mortal heroes.',
                    category: 'literary-context',
                  },
                ],
              },
              {
                id: 'response-no',
                text: 'I had training, but I succeeded through my own choices',
                nextNodeId: 'node-7',
              },
            ],
          },
          {
            id: 'node-5',
            speaker: 'perseus',
            text: 'Ah, being mysterious. Very well. I\'ll tell you mine: I cut off Medusa\'s head and used it to rescue my mother from a tyrant king. What trial changed you?',
            nextNodeId: 'node-4',
          },
          {
            id: 'node-6',
            speaker: 'perseus',
            text: 'The Force... like divine will flowing through you? Yes, we\'re the same. The gods chose us, gave us tools, but we still had to be brave enough to act. That\'s what matters.',
            nextNodeId: 'node-8',
          },
          {
            id: 'node-7',
            speaker: 'perseus',
            text: 'Your own choices? Admirable pride, but dangerous. I thought that once. Then I learned: heroes don\'t succeed alone. We need others—mortal and divine.',
            nextNodeId: 'node-8',
          },
          {
            id: 'node-8',
            speaker: 'perseus',
            text: 'Tell me, Luke: why do you think people still tell stories about heroes? What are we really teaching?',
            responses: [
              {
                id: 'response-hope',
                text: 'That good can triumph over evil, no matter the odds',
                nextNodeId: 'node-9',
              },
              {
                id: 'response-courage',
                text: 'That ordinary people can do extraordinary things',
                nextNodeId: 'node-10',
              },
            ],
          },
          {
            id: 'node-9',
            speaker: 'perseus',
            text: 'Optimistic. I like it. Though I\'d add: we also show that the path is hard, the cost is real, and victory is never guaranteed. Hope, yes—but earned hope.',
            isEnd: true,
          },
          {
            id: 'node-10',
            speaker: 'perseus',
            text: 'Exactly. That\'s why our stories endure. Not because we\'re perfect, but because we\'re human. We feel fear—and act anyway. That\'s the lesson worth keeping.',
            isEnd: true,
          },
        ],
      },

      learningPoints: [
        {
          id: 'lp-epilogue-9-continuity',
          content: 'Perseus and Luke Skywalker share the same heroic DNA: divine/supernatural aid, mentor guidance, facing fears, and transforming through trials.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 10: Decision - Which heroic value resonates?
    {
      id: 'epilogue-scene-10-values',
      type: 'decision',
      backgroundImage: 'https://cdn.midjourney.com/22647143-91f0-469b-b13e-26d451ac1ec2/0_0.png',
      image: 'https://cdn.midjourney.com/22647143-91f0-469b-b13e-26d451ac1ec2/0_0.png',

      prompt: 'Which Greek heroic value resonates most with you today?',
      context: `You've learned about the four core values that shaped Greek heroes:

**Kleos** - The pursuit of glory and lasting fame

**Arete** - Excellence and virtue, using your abilities responsibly

**Xenia** - Sacred hospitality, treating strangers with respect

**Sophrosyne** - Moderation and self-control, knowing your limits

Each hero embodied these differently. Each value offers something to modern life.

Which speaks most to you?`,

      choices: [
        {
          id: 'choice-kleos',
          text: 'Kleos - The desire to be remembered for your achievements',
          consequence: `You choose glory and lasting impact. There's nothing wrong with wanting to be remembered—it drives people to accomplish extraordinary things.

But remember Achilles' choice: long, unremarkable life or short, glorious death? He chose kleos. He got it. His name echoes through millennia.

Was it worth the cost? That's the question kleos always asks.`,
          learningPoints: [
            {
              id: 'lp-epilogue-10a-kleos',
              content: 'The pursuit of glory motivates achievement but requires weighing personal cost against lasting impact—Achilles\' eternal dilemma.',
              category: 'literary-context',
            },
          ],
        },
        {
          id: 'choice-arete',
          text: 'Arete - The obligation to use your gifts for good',
          consequence: `You choose excellence and virtue. This is the most demanding value—it requires constant self-examination.

Perseus could have kept Medusa's head as a weapon of power. Instead, he gave it to Athena. His gifts weren't his to keep—they were responsibilities.

"With great power comes great responsibility." Spider-Man said it, but arete defined it millennia earlier.`,
          learningPoints: [
            {
              id: 'lp-epilogue-10b-arete',
              content: 'Arete demands using abilities for good rather than personal gain—the moral foundation of modern superhero narratives.',
              category: 'literary-context',
            },
          ],
        },
        {
          id: 'choice-xenia',
          text: 'Xenia - The sacred duty to welcome and protect strangers',
          consequence: `You choose hospitality and compassion. In a world of strangers, xenia may be the most radical value.

Odysseus survived because strangers honored xenia. The suitors died because they violated it. Perseus saved Andromeda because he couldn't ignore someone in need.

In our polarized world, the Greek reminder that strangers deserve dignity and care feels urgent.`,
          learningPoints: [
            {
              id: 'lp-epilogue-10c-xenia',
              content: 'Xenia—sacred hospitality toward strangers—addresses modern questions of community responsibility and compassion across differences.',
              category: 'cultural-context',
            },
          ],
        },
        {
          id: 'choice-sophrosyne',
          text: 'Sophrosyne - The wisdom to know your limits',
          consequence: `You choose moderation and self-knowledge. This is the hardest value to embrace—it requires admitting you're not omnipotent.

Icarus lacked it. Bellerophon lacked it. Arachne lacked it. They flew too high, literally or metaphorically, and paid the price.

Odysseus had it. He knew when to fight and when to flee, when to speak and when to stay silent. Wisdom isn't about what you can do—it's about what you should do.`,
          learningPoints: [
            {
              id: 'lp-epilogue-10d-sophrosyne',
              content: 'Sophrosyne—knowing your limits—counters hubris and offers wisdom about sustainable success rather than dramatic failure.',
              category: 'cultural-context',
            },
          ],
        },
      ],

      learningPoints: [],
    },

    // Scene 11: Why these stories matter
    {
      id: 'epilogue-scene-11-relevance',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/0ed3ad1a-a117-4279-9c7d-5e8503946d9c/0_0.png',
      image: 'https://cdn.midjourney.com/0ed3ad1a-a117-4279-9c7d-5e8503946d9c/0_0.png',

      content: `Why do Greek myths still matter? Why do we keep returning to stories about people who never existed, facing monsters that never lived, in a world that never was?

Because these myths aren't about Bronze Age Greece. They're about us.

**They explore mortality.** Heroes face death, confront it, sometimes escape it, sometimes don't. In a world that still dies, these stories help us think about what makes life meaningful.

**They examine identity.** Oedipus asks "Who am I?" Perseus discovers he's the son of Zeus. Heracles struggles with being half-mortal, half-divine. We still ask: who are we, really? What defines us?

**They confront purpose.** Why are we here? The Greek answer: to achieve arete, earn kleos, help others, know ourselves. Modern answers vary, but the question remains.

**They acknowledge complexity.** Greek myths don't offer simple morals. Medusa is victim and monster. Odysseus is hero and liar. Achilles is brave and brutal. The gods are powerful and petty.

Life is complicated. Greek myths honor that.

So when you watch Star Wars or read Harry Potter or see Thor on screen, you're not escaping ancient wisdom. You're engaging with it. The stories changed costumes, but the questions stayed the same.`,

      learningPoints: [
        {
          id: 'lp-epilogue-11-mortality',
          content: 'Greek myths confront mortality, identity, and purpose—timeless human questions that every generation must answer for themselves.',
          category: 'literary-context',
        },
        {
          id: 'lp-epilogue-11-complexity',
          content: 'The moral ambiguity in Greek myths—heroes with flaws, gods with failures—reflects real life\'s complexity better than simple good-vs-evil narratives.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 12: Custom mini-game - Spot the Archetype
    {
      id: 'epilogue-scene-12-spot-archetype',
      type: 'custom-mini-game',
      backgroundImage: 'https://cdn.midjourney.com/8d10977e-3867-46cb-82d0-8c5c4000dcde/0_0.png',
      gameType: 'image-choice',

      config: {
        prompt: 'Test your archetype recognition: Identify the Greek mythological archetype in each modern character or scene',
        title: 'Archetype Recognition Challenge',
        description: 'Identify which Greek archetype each modern character or scene exemplifies.',
        backgroundImage: 'https://cdn.midjourney.com/8d10977e-3867-46cb-82d0-8c5c4000dcde/0_0.png',

        scenarios: [
          {
            id: 'scenario-1',
            question: 'Dumbledore giving Harry the Invisibility Cloak and guidance',
            image: 'https://cdn.midjourney.com/ac2df11b-7e74-4a39-8daf-be6c66ce9bb4/0_2.png',
            options: [
              { id: 'mentor', label: 'The Mentor', description: 'Wise guide providing gifts and wisdom', image: 'https://cdn.midjourney.com/fefc48be-f147-4b5f-a658-918f3cc4924b/0_3.png' },
              { id: 'trickster', label: 'The Trickster', description: 'Clever deceiver causing chaos', image: 'https://cdn.midjourney.com/ccb501eb-c026-42c9-970e-0c45c910db30/0_0.png' },
              { id: 'herald', label: 'The Herald', description: 'Messenger bringing the call to adventure', image: 'https://cdn.midjourney.com/a9f7d148-da7e-47b0-b1ab-22bcdcbf929d/0_3.png' },
            ],
            correctAnswerId: 'mentor',
            explanation: 'Dumbledore serves as the classic Mentor archetype (like Athena or Chiron), providing magical gifts, wisdom, and guidance while allowing the hero to make their own choices and mistakes.',
          },
          {
            id: 'scenario-2',
            question: 'Loki switching between ally and enemy throughout the MCU',
            image: 'https://cdn.midjourney.com/aaf62f6d-45e4-4376-a76c-28a20b8eab4a/0_3.png',
            options: [
              { id: 'shapeshifter', label: 'The Shapeshifter', description: 'Ambiguous loyalty, changing roles', image: 'https://cdn.midjourney.com/3fe9fb98-853e-4f48-94f4-bb9e7ff6d658/0_1.png' },
              { id: 'shadow', label: 'The Shadow', description: 'Dark reflection of the hero', image: 'https://cdn.midjourney.com/60b38294-a31c-40f0-9d85-be274042a5ec/0_1.png' },
              { id: 'trickster', label: 'The Trickster', description: 'Clever deceiver causing chaos', image: 'https://cdn.midjourney.com/ccb501eb-c026-42c9-970e-0c45c910db30/0_0.png' },
            ],
            correctAnswerId: 'shapeshifter',
            explanation: 'Loki embodies the Shapeshifter archetype—his loyalty remains ambiguous, he literally changes form, and his role shifts between friend and foe, creating narrative tension through uncertainty.',
          },
          {
            id: 'scenario-3',
            question: 'The bouncer who won\'t let the protagonist into the exclusive club',
            image: 'https://cdn.midjourney.com/6d270712-373f-495a-88dc-b6482772e3dd/0_1.png',
            options: [
              { id: 'mentor', label: 'The Mentor', description: 'Wise guide providing gifts and wisdom', image: 'https://cdn.midjourney.com/fefc48be-f147-4b5f-a658-918f3cc4924b/0_3.png' },
              { id: 'threshold', label: 'The Threshold Guardian', description: 'Tests hero\'s worthiness to proceed', image: 'https://cdn.midjourney.com/b1543b4b-497b-4412-9048-aa83bddce93c/0_0.png' },
              { id: 'trickster', label: 'The Trickster', description: 'Clever deceiver causing chaos', image: 'https://cdn.midjourney.com/ccb501eb-c026-42c9-970e-0c45c910db30/0_0.png' },
            ],
            correctAnswerId: 'threshold',
            explanation: 'This is the Threshold Guardian archetype (like the Graeae or Sphinx)—testing whether the hero is ready to proceed, blocking passage until worthiness is proven.',
          },
          {
            id: 'scenario-4',
            question: 'Gollum in The Lord of the Rings—both guide and threat',
            image: 'https://cdn.midjourney.com/8f31a848-caf7-417d-8608-ca674a6297c1/0_1.png',
            options: [
              { id: 'shadow', label: 'The Shadow', description: 'Dark reflection of the hero', image: 'https://cdn.midjourney.com/60b38294-a31c-40f0-9d85-be274042a5ec/0_1.png' },
              { id: 'herald', label: 'The Herald', description: 'Messenger bringing the call to adventure', image: 'https://cdn.midjourney.com/a9f7d148-da7e-47b0-b1ab-22bcdcbf929d/0_3.png' },
              { id: 'shapeshifter', label: 'The Shapeshifter', description: 'Ambiguous loyalty, changing roles', image: 'https://cdn.midjourney.com/3fe9fb98-853e-4f48-94f4-bb9e7ff6d658/0_1.png' },
            ],
            correctAnswerId: 'shadow',
            explanation: 'Gollum is Frodo\'s Shadow—the dark reflection of what Frodo could become if corrupted by the Ring. He represents the hero\'s potential dark path.',
          },
          {
            id: 'scenario-5',
            question: 'R2-D2 delivering Princess Leia\'s message to Obi-Wan',
            image: 'https://cdn.midjourney.com/1e35086f-2d9f-4f96-92f9-ef7a59ea34bc/0_2.png',
            options: [
              { id: 'trickster', label: 'The Trickster', description: 'Clever deceiver causing chaos', image: 'https://cdn.midjourney.com/ccb501eb-c026-42c9-970e-0c45c910db30/0_0.png' },
              { id: 'herald', label: 'The Herald', description: 'Messenger bringing the call to adventure', image: 'https://cdn.midjourney.com/a9f7d148-da7e-47b0-b1ab-22bcdcbf929d/0_3.png' },
              { id: 'mentor', label: 'The Mentor', description: 'Wise guide providing gifts and wisdom', image: 'https://cdn.midjourney.com/fefc48be-f147-4b5f-a658-918f3cc4924b/0_3.png' },
            ],
            correctAnswerId: 'herald',
            explanation: 'R2-D2 serves as the Herald archetype—bringing the Call to Adventure, delivering the message that sets the hero\'s journey in motion (like Hermes bearing news from the gods).',
          },
        ],
      },

      learningPoints: [
        {
          id: 'lp-epilogue-12-recognition',
          content: 'Recognizing Greek archetypes in modern media reveals how deeply these patterns structure contemporary storytelling across all genres.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 13: Closing - Eternal return of myth
    {
      id: 'epilogue-scene-13-closing',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/8d10977e-3867-46cb-82d0-8c5c4000dcde/0_0.png',
      image: 'https://cdn.midjourney.com/039b0bd3-5ff1-4a9b-a79c-27fb414a9e62/0_3.png',

      content: `There's an ancient symbol: the ouroboros, a serpent eating its own tail, representing eternal return. The cycle that never ends.

That's what Greek mythology is. Not a dead tradition from the past, but a living conversation across time.

Every generation receives these stories and transforms them. The Romans made them more orderly. Medieval writers made them Christian allegories. Renaissance artists made them beautiful. Romantics made them passionate. Modernists made them psychological. Contemporary authors make them diverse, inclusive, questioning.

And each generation asks: What do these stories mean for us? What wisdom can we extract? How do they help us navigate our world?

You've journeyed through the Age of Heroes. You've met chosen ones and tricksters, faced monsters and prophecies, witnessed hubris and arete. You've seen how Perseus became Percy Jackson, how Theseus became Captain America, how Athena's wisdom echoes in every mentor.

The Age of Heroes didn't end. It evolved. It's still here, in every story about ordinary people doing extraordinary things, in every tale of facing your fears, in every narrative about finding your purpose.

The Greeks asked the eternal questions. We're still answering them.

And that's why these myths endure. Not because they're old, but because they're forever young. Not because they're finished, but because they're still being written.

Your story is part of the cycle now. The hero's journey awaits.`,

      learningPoints: [
        {
          id: 'lp-epilogue-13-eternal',
          content: 'The "eternal return" of myth means each generation reinterprets Greek stories for their context while preserving core human questions.',
          category: 'literary-context',
        },
        {
          id: 'lp-epilogue-13-participation',
          content: 'Engaging with Greek myths makes us participants in a 3,000-year conversation about what it means to be human.',
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

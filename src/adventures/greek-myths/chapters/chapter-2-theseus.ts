import type { Chapter } from '../../../types';
import { chapter2Quiz } from '../quizzes/chapter-2-quiz';

export const chapter2: Chapter = {
  id: 'chapter-2-theseus',
  title: 'Chapter 2: Theseus - The Civilizing Hero',
  description: 'Follow Athens\' greatest hero from road-clearing labors to the heart of the labyrinth, and discover how even noble leaders can fall prey to their own flaws.',

  learningObjectives: [
    'Understand the hero as civilizer and founder, not merely monster-slayer',
    'Analyze the political dimensions of Greek heroism and leadership',
    'Explore the labyrinth as both literal maze and psychological metaphor',
    'Recognize how power and success can corrupt even the noblest heroes',
    'Compare Theseus\'s story to modern political narratives and leadership tales',
  ],

  scenes: [
    // Scene 1: Discovering the tokens
    {
      id: 'theseus-scene-1-tokens',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/91c24124-375f-42f5-8c64-b9b85c65eded/0_0.png',
      image: 'https://cdn.midjourney.com/91c24124-375f-42f5-8c64-b9b85c65eded/0_0.png',

      content: `In the small city of Troezen, far from the centers of power, a young man named Theseus grew to manhood knowing he was different.

His mother Aethra had raised him in secret, telling him only that his father was a great king who had left tokens of identity hidden beneath an enormous boulder. "When you're strong enough to lift that stone," she said, "you'll know who you truly are."

On his sixteenth birthday, Theseus approached the boulder that had haunted his childhood. Others had tried to move it and failed. But Theseus, son of King Aegeus of Athens (and some whispered, also of Poseidon), gripped the stone and heaved.

It moved.

Beneath it, wrapped in oilcloth, he found a sword and a pair of sandals—his father's tokens. His birthright. His destiny lay not in quiet Troezen, but in Athens, the greatest city in Greece.`,

      learningPoints: [
        {
          id: 'lp-theseus-1-birthright',
          content: 'The hidden tokens motif appears in many hero myths, symbolizing the revelation of true identity and destiny.',
          category: 'literary-context',
        },
        {
          id: 'lp-theseus-1-dual-parentage',
          content: 'Theseus claimed both mortal (Aegeus) and divine (Poseidon) paternity, a duality that gave him political legitimacy and supernatural favor.',
          category: 'cultural-context',
        },
      ],
    },

    // Scene 2: Choosing the Dangerous Road
    {
      id: 'theseus-scene-2-road-choice',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/418f9ebd-7956-40ac-ac11-aca7b8b6e91e/0_0.png',
      image: 'https://cdn.midjourney.com/418f9ebd-7956-40ac-ac11-aca7b8b6e91e/0_0.png',

      content: `With his father's tokens in hand, Theseus faced a choice: how to reach Athens.

The sea route was safe and quick—a few days' sailing around the coast of the Saronic Gulf.

But the land route was notorious. The road from Troezen to Athens was plagued by bandits and monsters who preyed on travelers. For years, people had avoided it, choosing the longer sea journey rather than risk the dangerous overland path.

Theseus looked at the sword and sandals his father had left beneath the boulder. Aegeus had been strong enough to move that massive stone. Perseus had been brave enough to face Medusa. Heracles had completed twelve impossible labors.

"I won't arrive in Athens as someone who took the easy path," Theseus decided. "I'll make the roads safe. I'll clear the way so others can travel without fear."

He chose the land route, deliberately seeking the challenges that lay between Troezen and Athens. What he faced on that journey would prove he was more than just another hero—he would become a civilizer, someone who made the world safer for everyone.`,

      learningPoints: [
        {
          id: 'lp-theseus-2-choice',
          content: 'Theseus deliberately chose danger over safety, establishing his character as someone who seeks challenges to benefit society, not just personal glory.',
          category: 'literary-context',
        },
        {
          id: 'lp-theseus-2-civilizer',
          content: 'The "civilizer hero" clears roads, defeats bandits, and makes the world safer—differing from the "monster-slayer" who hunts specific beasts.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 3A: The First Labors
    {
      id: 'theseus-scene-3a-first-labors',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/418f9ebd-7956-40ac-ac11-aca7b8b6e91e/0_0.png',
      image: 'https://cdn.midjourney.com/c8e156e8-038f-448f-be41-2759e2e6f2d8/0_0.png',

      content: `The road from Troezen to Athens was not merely dangerous—it was cursed by the men who controlled it.

Theseus's first encounter came near Epidaurus, where the road narrowed between rocky outcrops. A massive figure stepped out to block his path: Periphetes, called the Club-Bearer, who had murdered travelers here for years.

"Your sword," Periphetes growled, hefting an enormous bronze club. "Your sandals. Everything you carry."

Theseus had trained for strength his whole life, preparing to lift that boulder. Now he would test himself against a man who had crushed dozens of skulls.

When Periphetes swung, Theseus dodged and struck with his father's sword. The bandit fell, and Theseus took the bronze club as his own—a weapon and a trophy. His first victory on the road to Athens.

**The Pine-Bender**

At the Isthmus of Corinth, where the road crossed the narrow strip of land between two seas, Theseus met something worse than a mere robber.

Sinis was a giant of a man who called himself "the Pine-Bender" for good reason. When travelers passed, he would force them to help him bend two pine trees down to the ground. Then he would tie each of the victim's arms to a different tree—and release them both.

The trees would spring back upright, tearing the person in half.

Theseus found him near two bent pines, waiting for his next victim. The ground around the trees was stained dark.

"Help me with these trees, friend," Sinis said with false friendliness. "Just hold this rope..."

But Theseus had heard the stories. When Sinis lunged to grab him, Theseus fought back with the bronze club he'd taken from Periphetes. The giant fell, stunned.

"Let me show you your own game," Theseus said coldly.

He tied Sinis between the two pine trees and released them. The forest echoed with the sound of justice.

**The Beast of Crommyon**

Not every threat on the road was human.

Near the town of Crommyon, Theseus encountered a massive wild boar, larger than any natural animal. The locals called it the Crommyonian Sow, and it had terrorized the region for years, killing farmers and travelers alike.

Some said it was descended from monsters. Others whispered it was sent by the gods. What mattered was that no one had been able to stop it.

Theseus tracked it to its lair in a dense thicket. The beast charged with terrifying speed, tusks gleaming. But Theseus had faced men who used cruelty as a weapon. A beast, no matter how monstrous, was simply another challenge.

He dodged its charge and drove his sword between its ribs. The Crommyonian Sow fell, and the road grew a little safer.

Three challenges conquered. But Theseus was only halfway to Athens, and the worst was yet to come.`,

      learningPoints: [
        {
          id: 'lp-theseus-3a-escalation',
          content: 'Theseus\'s labors escalate in horror—from a simple robber with a club, to a torturer with a gruesome method, to a monstrous beast—mirroring his growing reputation.',
          category: 'literary-context',
        },
        {
          id: 'lp-theseus-3a-justice',
          content: 'The theme of poetic justice appears early: Theseus uses Periphetes\' club and Sinis\'s own method against them, showing he understands their crimes.',
          category: 'literary-context',
        },
        {
          id: 'lp-theseus-3a-trophies',
          content: 'Taking Periphetes\' club as a weapon shows how heroes in Greek myth claimed the weapons and symbols of defeated enemies.',
          category: 'cultural-context',
        },
      ],
    },

    // Scene 3B: The Final Labors
    {
      id: 'theseus-scene-3b-final-labors',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/418f9ebd-7956-40ac-ac11-aca7b8b6e91e/0_0.png',
      image: 'https://cdn.midjourney.com/4b5e6619-4756-45e3-ac4c-41906f84f605/0_0.png',

      content: `Word of Theseus's deeds spread faster than he could travel. By the time he approached the cliffs near Megara, the bandits knew a young hero was clearing the road. But they were too arrogant—or too cruel—to flee.

**The Cliff-Kicker**

The coastal path near Megara ran along high cliffs above the sea. Here lived Sciron, who had devised a method of murder both humiliating and deadly.

He would stop travelers and force them to kneel and wash his feet. While they knelt in submission, he would kick them off the cliff into the sea below, where a giant turtle waited to devour the bodies.

Theseus approached the narrow cliff path, and Sciron stepped out with his basin of water.

"Wash my feet, boy, if you want to pass."

Theseus knelt as if complying. But when Sciron moved to kick him, Theseus caught his leg and twisted. The bandit lost his balance, arms windmilling—and fell screaming toward his own turtle.

The road by the cliffs was clear at last.

**The Host's Deadly Bed**

Just outside Athens, so close Theseus could see the city's walls in the distance, he came to a roadside inn run by a man named Procrustes.

"Welcome, traveler!" Procrustes said with elaborate courtesy. "The road is dangerous. Please, stay the night. I have the perfect bed for you."

But Theseus had heard the final horror story of the road to Athens.

Procrustes claimed to have a magical bed that fit every guest perfectly. The truth was darker: if guests were too short for the bed, he would stretch them on a rack until they fit. If they were too tall, he would cut off their legs.

Either way, they "fit" the bed. And either way, they died.

"Your hospitality is famous," Theseus said carefully, hand on his sword. "Let me see this remarkable bed."

When Procrustes turned to show him, Theseus struck. The murderous host fell, and Theseus fitted him to his own bed—permanently.

**The Road Is Clear**

Theseus walked the final miles to Athens as the sun set behind him. His father's sword was notched from battle. The iron club hung at his belt. His clothes were travel-stained and torn.

But behind him, the road from Troezen to Athens was safe for the first time in a generation. Merchants could travel without fear. Families could visit distant relatives. Children could make the journey their parents never dared attempt.

He had done what he set out to do. Not to win glory, though glory would come. Not to prove himself the strongest, though he had proven that too.

He had made the world better. That was what separated a civilizer from a mere warrior.

Athens rose before him, its temples catching the last light of day. He came to claim his birthright, to meet the father he had never known.

He had no idea what challenges awaited him in the great city. But he had already proven something important: whatever came next, he was ready.`,

      learningPoints: [
        {
          id: 'lp-theseus-3b-psychology',
          content: 'The later villains (Sciron and Procrustes) combine physical violence with psychological cruelty—forcing submission and violating hospitality customs.',
          category: 'literary-context',
        },
        {
          id: 'lp-theseus-3b-civilizer',
          content: 'Theseus\'s journey emphasizes the hero as civilizer: he doesn\'t just defeat enemies, he makes society safer for ordinary people to live and travel.',
          category: 'cultural-context',
        },
        {
          id: 'lp-theseus-3b-complete',
          content: 'By clearing all threats on the road, Theseus establishes himself as ready for leadership—he can protect his people, not just win battles.',
          category: 'thematic-analysis',
        },
      ],
    },

    // Scene 3C: Timeline game - Labors on the road
    {
      id: 'theseus-scene-3-labors',
      type: 'timeline-game',
      backgroundImage: 'https://cdn.midjourney.com/418f9ebd-7956-40ac-ac11-aca7b8b6e91e/0_0.png',

      prompt: 'You\'ve just witnessed Theseus clear the road from Troezen to Athens. Can you order these encounters correctly, from first to last?',

      timelineEvents: [
        {
          id: 'labor-periphetes',
          title: 'Periphetes the Club-Bearer',
          year: 1,
          description: 'Near Epidaurus, Theseus encountered a bandit who crushed travelers with an iron club. Theseus defeated him and took the club as his own weapon.',
          image: 'https://cdn.midjourney.com/c8e156e8-038f-448f-be41-2759e2e6f2d8/0_0.png',
        },
        {
          id: 'labor-sinis',
          title: 'Sinis the Pine-Bender',
          year: 2,
          description: 'At the Isthmus of Corinth, Theseus met a giant who tied victims to bent pine trees and tore them apart. Theseus gave him the same death.',
          image: 'https://cdn.midjourney.com/e6a3f88e-f242-477f-b8e5-24e7d498c63b/0_1.png',
        },
        {
          id: 'labor-crommyonian-sow',
          title: 'The Crommyonian Sow',
          year: 3,
          description: 'He slew a monstrous wild boar that had been terrorizing the region of Crommyon, proving he could defeat beasts as well as bandits.',
          image: 'https://cdn.midjourney.com/fa564ea8-e1f0-473d-9691-aaab79905913/0_0.png',
        },
        {
          id: 'labor-sciron',
          title: 'Sciron the Kicker',
          year: 4,
          description: 'On the cliffs near Megara, he defeated a bandit who forced travelers to wash his feet, then kicked them off the cliff to a giant turtle below.',
          image: '/Imsie/assets/greek-myths/timeline/sciron.jpg',
        },
        {
          id: 'labor-procrustes',
          title: 'Procrustes the Stretcher',
          year: 5,
          description: 'Just outside Athens, he encountered the infamous host who fitted guests to his bed by stretching or cutting them. Theseus fitted Procrustes to his own bed.',
          image: 'https://cdn.midjourney.com/4b5e6619-4756-45e3-ac4c-41906f84f605/0_0.png',
        },
      ],

      successThreshold: 70,

      learningPoints: [
        {
          id: 'lp-theseus-3-multiple',
          content: 'Unlike Perseus who slew one monster, Theseus cleared the road to Athens of multiple threats, establishing him as a civilizer who made the world safer for ordinary travelers.',
          category: 'literary-context',
        },
        {
          id: 'lp-theseus-3-justice',
          content: 'Theseus often killed villains using their own methods—a form of poetic justice that showed he understood both their crimes and proportional retribution.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 4: Arriving in Athens
    {
      id: 'theseus-scene-4-athens',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/01ac8abf-47fe-43b3-a2f4-562d4fb9b667/0_0.png',
      image: 'https://cdn.midjourney.com/45ba54dd-b54c-489b-854e-8d7870b56966/0_0.png',

      content: `Theseus arrived in Athens as a hero already. Word of his labors had spread before him—the young man who had made the roads safe, who had cleared away the monsters and bandits that plagued travelers.

But Athens itself was gripped by a darker terror.

Every nine years, King Aegeus was forced to send a tribute to Crete: seven young men and seven young women, the finest youth of Athens. They were sent into the Labyrinth beneath the palace of King Minos, where they would be devoured by the Minotaur—a monster that was half-man, half-bull.

This year, the tribute was due again.

The lottery was being held in the agora as Theseus approached. Parents clutched their children, praying their names would not be drawn. Some wept openly, knowing their sons or daughters were already selected.

It was the price of a long-ago defeat, a humiliation Athens could not escape.`,

      inlineAnnotations: [
        {
          id: 'annotation-minotaur',
          text: 'Minotaur',
          tooltip: {
            title: 'The Bull-Headed Monster',
            content: 'The Minotaur (literally "Bull of Minos") was born from King Minos\'s wife Pasiphaë and a sacred bull. The Greeks saw it as a symbol of divine punishment and the dangerous fusion of human and beast.',
            category: 'cultural-context',
          },
        },
      ],

      learningPoints: [
        {
          id: 'lp-theseus-4-tribute',
          content: 'The tribute to Crete represented not just loss of life but political subjugation—Athens was subordinate to Cretan power.',
          category: 'historical-context',
        },
        {
          id: 'lp-theseus-4-founding',
          content: 'Theseus\'s story is deeply political: he becomes hero not just by slaying monsters but by liberating Athens from foreign domination.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 5: Decision - Volunteer or not?
    {
      id: 'theseus-scene-5-volunteer',
      type: 'decision',
      backgroundImage: 'https://cdn.midjourney.com/01ac8abf-47fe-43b3-a2f4-562d4fb9b667/0_0.png',
      image: 'https://cdn.midjourney.com/52308b2f-3a05-4b4b-955f-53cd3efeccd8/0_0.png',

      prompt: 'Will you volunteer?',
      context: `You are Theseus. You've just arrived in Athens. Your father doesn't even know you're his son yet—you still carry his tokens, but haven't revealed yourself.

The lottery for the tribute is happening now. Fourteen young Athenians will be selected. None have ever returned.

You've spent your journey to Athens fighting monsters and villains. You've made the roads safe. But this is different—this is the Labyrinth, an impossible maze guarded by an unkillable monster.

You could reveal your identity as the prince and claim your birthright in safety. Or you could volunteer to go to Crete with the tribute.

What defines a hero? Fighting monsters on the open road? Or stepping forward when your people need someone willing to die for them?`,

      choices: [
        {
          id: 'choice-volunteer',
          text: 'Volunteer to go with the tribute to Crete',
          consequence: `You step forward before they even begin the lottery.

"I'll go," you say. "Count me among the fourteen."

The crowd falls silent. Who is this stranger volunteering for certain death?

King Aegeus, on his throne, looks at you with something like recognition stirring in his eyes. There's something familiar about you, something in your bearing...

"You don't know what you're choosing," Aegeus says. "No one returns from the Labyrinth."

"Then it's time someone did," you reply.

This is what separates you from Perseus, from the monster-slayers. They fought their battles alone. You're choosing to stand with ordinary people, to risk everything for those who cannot fight.

This is what it means to be a leader.`,
          learningPoints: [
            {
              id: 'lp-theseus-5a-leadership',
              content: 'Theseus\'s voluntary sacrifice distinguishes him as a political hero—he risks himself not for glory but for his people\'s freedom.',
              category: 'literary-context',
            },
          ],
        },
        {
          id: 'choice-reveal',
          text: 'Reveal your identity as the prince first',
          consequence: `A reasonable thought—claim your birthright, then use your authority to address the tribute.

But Theseus didn't think this way. He understood that a prince who watched from safety while his people died would never truly lead them. Authority must be earned through shared sacrifice.

He volunteered first, as an equal, as one of them.`,
        },
        {
          id: 'choice-wait',
          text: 'Wait and gather information before acting',
          consequence: `Caution has its place. But as you hesitate, you watch parents embrace their children one last time. You see fourteen young people herded toward the harbor like sacrificial animals.

Theseus could not wait. Heroes act when action is needed, even when the odds are impossible.

He stepped forward and volunteered.`,
        },
      ],

      learningPoints: [],
    },

    // Scene 6: Dialogue - Aegeus and the sails
    {
      id: 'theseus-scene-6-aegeus-dialogue',
      type: 'dialogue',
      backgroundImage: 'https://cdn.midjourney.com/01ac8abf-47fe-43b3-a2f4-562d4fb9b667/0_0.png',

      character: {
        id: 'aegeus',
        name: 'King Aegeus',
        portrait: 'https://cdn.midjourney.com/8b1d9ceb-deaa-4f79-bd6a-7da97ee544c5/0_2.png',
        description: 'Aging king of Athens, haunted by his city\'s subjugation to Crete',
      },

      dialogueTree: {
        id: 'node-1',
        speaker: 'aegeus',
        text: 'Before you sail to Crete, come to me privately. There\'s something about you... Who are you, truly?',

        responses: [
          {
            id: 'response-reveal',
            text: 'Show him the sword and sandals from beneath the stone',
            nextNodeId: 'node-2',
            learningPoints: [
              {
                id: 'lp-theseus-6a-recognition',
                content: 'The recognition scene (anagnorisis in Greek) where true identity is revealed is a crucial moment in heroic narratives.',
                category: 'literary-context',
              },
            ],
          },
          {
            id: 'response-mystery',
            text: 'Tell him you\'re just a traveler willing to help',
            nextNodeId: 'node-3',
          },
        ],

        allNodes: [
          {
            id: 'node-2',
            speaker: 'aegeus',
            text: 'My son! I left those tokens in Troezen sixteen years ago... I never thought—you\'re alive! And you\'ve come home!',
            nextNodeId: 'node-4',
          },
          {
            id: 'node-3',
            speaker: 'aegeus',
            text: 'No traveler volunteers for certain death. You remind me of someone... but no matter. If you truly go to Crete, take this advice.',
            nextNodeId: 'node-4',
          },
          {
            id: 'node-4',
            speaker: 'aegeus',
            text: 'The ship sails with black sails—the color of mourning, for we never expect the tribute to return. But if by some miracle you survive and slay the Minotaur... change the sails to white. Let me see from the cliffs that you live.',
            nextNodeId: 'node-5',
          },
          {
            id: 'node-5',
            speaker: 'aegeus',
            text: 'Promise me you\'ll remember. Black sails mean death. White sails mean victory and life. Will you remember?',
            responses: [
              {
                id: 'response-promise',
                text: 'I promise. White sails if I succeed.',
                nextNodeId: 'node-6',
              },
              {
                id: 'response-confident',
                text: 'I\'ll remember. I won\'t fail.',
                nextNodeId: 'node-6',
              },
            ],
          },
          {
            id: 'node-6',
            speaker: 'aegeus',
            text: 'Good. I\'ll watch the cliffs every day until you return. Come back alive, my son. Athens needs you. I need you.',
            isEnd: true,
          },
        ],
      },

      learningPoints: [
        {
          id: 'lp-theseus-6-sails',
          content: 'The black/white sails become a crucial plot device—Aegeus\'s specific instruction sets up the tragedy that will follow.',
          category: 'literary-context',
        },
        {
          id: 'lp-theseus-6-foreshadowing',
          content: 'The detailed emphasis on remembering the sails is dramatic foreshadowing—the audience knows this instruction will be significant later.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 7: Interlude - The hero as founder
    {
      id: 'theseus-scene-7-founder',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/01ac8abf-47fe-43b3-a2f4-562d4fb9b667/0_0.png',
      image: 'https://cdn.midjourney.com/6133bd7f-02ab-4990-ad20-dd9aeef3c0fc/0_0.png',

      content: `Before we continue Theseus's journey, let's pause to understand what makes him different from heroes like Perseus or Heracles.

Perseus slew Medusa and saved individuals. Heracles performed twelve impossible labors. But Theseus did something more: he founded institutions and unified communities.

In Greek tradition, Theseus would later unite the scattered towns of Attica into a single political entity—the city-state of Athens. He established courts of justice. He created the festival of Panathenaia. He built democracy's foundations.

This is the "civilizing hero"—not just a warrior who slays monsters, but a leader who creates order from chaos, who builds something lasting.

Think of modern parallels:
- Captain America doesn't just fight villains; he represents ideals
- Black Panther isn't just powerful; he's a king responsible for Wakanda
- Wonder Woman bridges worlds and advocates for justice beyond personal glory

Theseus's story is as much about politics and leadership as it is about courage. Keep this in mind as we watch him navigate the labyrinth—both the literal maze in Crete and the metaphorical mazes of power.`,

      learningPoints: [
        {
          id: 'lp-theseus-7-civilizer',
          content: 'The "civilizing hero" transforms society through institution-building, not just individual heroic deeds.',
          category: 'literary-context',
        },
        {
          id: 'lp-theseus-7-politics',
          content: 'Theseus\'s myth served Athenian political purposes—he legitimized their government and united their communities through shared legendary ancestry.',
          category: 'historical-context',
        },
      ],
    },

    // Scene 8: Arriving in Crete
    {
      id: 'theseus-scene-8-crete',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/d41e2c48-e269-4221-a39e-44ec26b9fa90/0_0.png',
      image: 'https://cdn.midjourney.com/0ce354dd-6478-423e-af19-c3cf1bc186b7/0_0.png',

      content: `The ship arrived in Crete under black sails, carrying fourteen young Athenians to their deaths. They were marched through the streets of Knossos to the palace of King Minos—a vast complex of courtyards and corridors that seemed designed to confuse visitors.

The Cretans watched with a mixture of pity and satisfaction. This was the price of Athens's old rebellion, paid in youth and blood.

But someone else was watching too.

Princess Ariadne, daughter of King Minos, stood on a palace balcony as the tribute passed below. Her eyes found Theseus immediately—there was something different about him, a bearing that set him apart from the others.

He walked not as a victim, but as a challenger.

Ariadne had seen twenty-eight tributes die in previous years, fed to her half-brother the Minotaur in the darkness below the palace. But something about this young man made her think: perhaps this time could be different.

Perhaps this time, someone might actually survive.`,

      inlineAnnotations: [
        {
          id: 'annotation-knossos',
          text: 'Knossos',
          tooltip: {
            title: 'The Labyrinthine Palace',
            content: 'The real palace of Knossos in Crete was discovered in 1900. Its complex layout of 1,300+ rooms may have inspired the labyrinth legend—to visitors unfamiliar with Minoan architecture, it would have seemed like an impossible maze.',
            category: 'historical-context',
          },
        },
      ],

      learningPoints: [
        {
          id: 'lp-theseus-8-ariadne',
          content: 'Ariadne\'s introduction as the helper figure is crucial—Greek heroes rarely succeed alone but through alliances, especially with women who provide crucial assistance.',
          category: 'literary-context',
        },
        {
          id: 'lp-theseus-8-palace',
          content: 'The palace of Knossos itself was labyrinthine—the myth may reflect actual historical memory of Crete\'s complex architecture.',
          category: 'historical-context',
        },
      ],
    },

    // Scene 9: Dialogue - Ariadne's offer
    {
      id: 'theseus-scene-9-ariadne-offer',
      type: 'dialogue',
      backgroundImage: 'https://cdn.midjourney.com/d41e2c48-e269-4221-a39e-44ec26b9fa90/0_0.png',

      character: {
        id: 'ariadne',
        name: 'Princess Ariadne',
        portrait: 'https://cdn.midjourney.com/0ce354dd-6478-423e-af19-c3cf1bc186b7/0_0.png',
        description: 'Daughter of King Minos, tormented by her half-brother\'s murders',
      },

      dialogueTree: {
        id: 'node-1',
        speaker: 'ariadne',
        text: 'You there—the one who walks like a prince among the condemned. I\'m Ariadne. I need to speak with you.',

        responses: [
          {
            id: 'response-why',
            text: 'Why would a Cretan princess speak to Athenian tribute?',
            nextNodeId: 'node-2',
          },
          {
            id: 'response-listening',
            text: 'I\'m listening.',
            nextNodeId: 'node-3',
          },
        ],

        allNodes: [
          {
            id: 'node-2',
            speaker: 'ariadne',
            text: 'Because I\'m tired of watching children die to feed a monster. My half-brother, the Minotaur... this isn\'t justice. It\'s cruelty.',
            nextNodeId: 'node-3',
          },
          {
            id: 'node-3',
            speaker: 'ariadne',
            text: 'I can help you survive the Labyrinth. I know its secrets. But in return, you must take me with you when you escape. You must marry me and take me to Athens.',
            nextNodeId: 'node-4',
          },
          {
            id: 'node-4',
            speaker: 'ariadne',
            text: 'I can give you a ball of thread—you tie one end at the entrance and unwind it as you go. After you slay the Minotaur, you follow the thread back. Without it, you\'ll wander forever in darkness.',
            responses: [
              {
                id: 'response-why-help',
                text: 'Why betray your own father to help me?',
                nextNodeId: 'node-5',
              },
              {
                id: 'response-trust',
                text: 'How do I know this isn\'t a trap?',
                nextNodeId: 'node-6',
              },
            ],
          },
          {
            id: 'node-5',
            speaker: 'ariadne',
            text: 'Because this tribute is barbarism. Because I want to escape Crete and its darkness. Because... because I see in you someone who could end this horror. Will you accept my help?',
            nextNodeId: 'node-7',
          },
          {
            id: 'node-6',
            speaker: 'ariadne',
            text: 'You don\'t. But you have no other choice. Without the thread, you\'re dead even if you somehow kill the Minotaur. With it, you have a chance. Will you accept?',
            nextNodeId: 'node-7',
          },
          {
            id: 'node-7',
            speaker: 'ariadne',
            text: 'Do we have a bargain? The thread for marriage and escape?',
            responses: [
              {
                id: 'response-accept',
                text: 'Yes. I accept your help and your terms.',
                nextNodeId: 'node-8',
              },
            ],
          },
          {
            id: 'node-8',
            speaker: 'ariadne',
            text: 'Then tomorrow, when they send you into the Labyrinth, you\'ll find the thread waiting at the entrance. Follow it back to life. Follow it back to me.',
            isEnd: true,
          },
        ],
      },

      learningPoints: [
        {
          id: 'lp-theseus-9-bargain',
          content: 'Ariadne\'s assistance comes with conditions—heroes must make bargains and alliances, exchanging promises for aid.',
          category: 'literary-context',
        },
        {
          id: 'lp-theseus-9-betrayal',
          content: 'Ariadne\'s choice to help Theseus requires betraying her father and her kingdom—love and ethics can conflict with familial loyalty.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 10: Decision - Accept Ariadne's help?
    {
      id: 'theseus-scene-10-accept-help',
      type: 'decision',
      backgroundImage: 'https://cdn.midjourney.com/d41e2c48-e269-4221-a39e-44ec26b9fa90/0_0.png',

      prompt: 'Will you accept Ariadne\'s bargain?',
      context: `You are Theseus. You've been offered a solution to the impossible: a thread that will guide you back through the Labyrinth.

But it comes with strings attached—literally and figuratively. You must marry Ariadne and take her from Crete. You must make her your queen.

She's beautiful, intelligent, and clearly brave enough to defy her father. But you hardly know her. Can you trust her? Should you make such a binding promise just to gain an advantage?

On the other hand, without her help, you'll almost certainly die. So will the thirteen other Athenians counting on you.

Sometimes heroes must make bargains. Sometimes the price of victory is a promise.`,

      choices: [
        {
          id: 'choice-accept-bargain',
          text: 'Accept her help and promise to marry her',
          consequence: `You agree. You take her hands and swear an oath by the gods that if you survive, you'll take her to Athens as your bride.

It's a promise you mean in this moment—she's saving your life and the lives of your companions. That deserves honor and loyalty.

Ariadne smiles with relief and hope. "Tomorrow," she says. "Tomorrow you'll show them that the tribute ends now."

You don't yet know that promises made in desperation can be hard to keep when circumstances change. But that's a lesson for later.`,
          learningPoints: [
            {
              id: 'lp-theseus-10a-oath',
              content: 'Sacred oaths in Greek culture were binding—breaking them brought divine retribution and personal dishonor.',
              category: 'cultural-context',
            },
          ],
        },
        {
          id: 'choice-refuse',
          text: 'Refuse—you won\'t make promises you might not keep',
          consequence: `An honorable thought—don't make promises unless you're certain you can fulfill them.

But Theseus couldn't afford such scruples. Thirteen other lives depended on his success. Personal honor had to yield to responsibility.

He accepted Ariadne's bargain, knowing that sometimes leadership means making difficult compromises.`,
        },
        {
          id: 'choice-negotiate',
          text: 'Try to negotiate different terms',
          consequence: `You could try to negotiate—offer her escape without marriage, perhaps.

But Ariadne isn't a merchant haggling in the marketplace. She's a princess offering everything she has—her knowledge, her future, her homeland—for a chance at a different life.

The price is what it is. Theseus understood this and accepted her terms.`,
        },
      ],

      learningPoints: [],
    },

    // Scene 11: Map Exploration - The Labyrinth
    {
      id: 'theseus-scene-11-labyrinth',
      type: 'map-exploration',
      backgroundImage: 'https://cdn.midjourney.com/de9464b0-39e5-4703-817b-046e7ed36286/0_0.png',
      mapImage: 'https://cdn.midjourney.com/78a60e8d-afa3-437a-bb57-a749ba81ee36/0_0.png',

      prompt: 'Navigate the Labyrinth\'s twisting passages, following Ariadne\'s thread deeper into darkness',

      locations: [
        {
          id: 'loc-entrance',
          name: 'The Entrance',
          x: 82,
          y: 4,
          content: 'Here at the entrance, you find Ariadne\'s thread as promised—a ball of red yarn. You tie one end to the doorpost and begin unwinding it as you descend into darkness.',
          image: 'https://cdn.midjourney.com/ec9030d6-f427-416e-89b9-73a17f606516/0_1.png',
        },
        {
          id: 'loc-first-turn',
          name: 'The First Turning',
          x: 70,
          y: 25,
          content: 'The passage splits three ways. Without the thread, you\'d have no idea which way you came from. You mark your path and continue, following the sound of breathing ahead.',
          image: 'https://cdn.midjourney.com/835930ee-48ce-4f31-9e81-6d141a4a4a8b/0_0.png',
        },
        {
          id: 'loc-bones',
          name: 'Chamber of Bones',
          x: 50,
          y: 20,
          content: 'You pass through a chamber littered with bones—the remains of previous tributes. Some died fighting. Others died lost in the darkness, starved and hopeless.',
          image: 'https://cdn.midjourney.com/de4e6ba0-9405-4c72-a86d-ce494a62cc73/0_0.png',
        },
        {
          id: 'loc-crossroads',
          name: 'The Crossroads',
          x: 40,
          y: 60,
          content: 'Five passages meet here. The Labyrinth seems designed to confuse, to make explorers lose all sense of direction. But the thread holds firm, a lifeline to the world above.',
          image: 'https://cdn.midjourney.com/30e19e6d-c69f-49b4-8d8a-303992c2c925/0_3.png',
        },
        {
          id: 'loc-center',
          name: 'The Center',
          x: 24,
          y: 41,
          content: 'The passages open into a central chamber. Here, among scattered bones and ancient darkness, you hear the heavy breathing of something massive. The Minotaur\'s lair.',
          image: 'https://cdn.midjourney.com/8e08cbcd-2733-4397-be80-9bbe6db94f36/0_1.png',
        },
      ],

      learningPoints: [
        {
          id: 'lp-theseus-11-thread',
          content: 'Ariadne\'s thread represents intelligence and planning conquering chaos—the Labyrinth is solvable with the right approach.',
          category: 'literary-context',
        },
        {
          id: 'lp-theseus-11-metaphor',
          content: 'The Labyrinth works as metaphor for life\'s complexity—we need guidance (mentors, wisdom, tools) to navigate seemingly impossible situations.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 12: Confronting the Minotaur
    {
      id: 'theseus-scene-12-minotaur',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/e61522da-0e46-44ff-92d4-3f07eddf7aaf/0_0.png',
      image: 'https://cdn.midjourney.com/8ff7a8e4-2b56-454d-93ab-0308d36db5d8/0_0.png',

      content: `The Minotaur was waiting.

He was massive—a creature with the body of a man but the head and neck of a bull, muscles rippling beneath hide, eyes reflecting dim light like an animal's. But those eyes also held something disturbingly human: awareness, intelligence, perhaps even misery.

This was Ariadne's half-brother, after all—born from divine curse, hidden in darkness, fed on human flesh. He was both victim and monster.

He charged.

Theseus had no sword—weapons were forbidden in the Labyrinth. He had only his strength, his courage, and his determination to end the tribute once and for all.

The fight was brutal. Theseus dodged the first charge, grabbed the creature's horns, wrestled it to the ground. They grappled in the darkness, man against beast-man, until finally Theseus broke the Minotaur's neck with his bare hands.

The creature died with something like relief in its eyes.

Silence fell in the Labyrinth. After decades of horror, the Minotaur was dead.`,

      learningPoints: [
        {
          id: 'lp-theseus-12-monster',
          content: 'The Minotaur represents the intersection of human and beast, civilization and savagery—its death symbolizes Athens\'s triumph over barbarism.',
          category: 'literary-context',
        },
        {
          id: 'lp-theseus-12-liberation',
          content: 'Unlike Perseus\'s solo quest, Theseus\'s victory liberates an entire city—his heroism has explicit political and communal consequences.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 13: Primary Source - Analyzing the Minotaur
    {
      id: 'theseus-scene-13-symbol',
      type: 'primary-source',
      backgroundImage: 'https://cdn.midjourney.com/9aa5a99a-6452-4b0d-a12f-1ca5dba54332/0_0.png',

      prompt: 'The Minotaur has fascinated scholars for millennia. What does this hybrid monster represent? Consider this analysis:',

      source: {
        title: 'The Minotaur as Symbol',
        author: 'Various Classical Scholars',
        date: 'Various periods',
        type: 'text',
        content: `The Minotaur represents the boundary between civilization and savagery, human and animal nature. Hidden in the Labyrinth beneath the palace—beneath civilization itself—it suggests the beast lurking within all of us.


Some scholars argue it reflects Greek anxieties about the powerful Minoan civilization, which dominated the Mediterranean before Greek ascendancy. The tribute represents subjugation; the Labyrinth represents the confusing complexity of Cretan culture; the Minotaur itself represents the "other"—foreign, powerful, and dangerous.


The maze itself is significant. Unlike a puzzle with one solution, a true labyrinth is a winding path with no wrong turns—you simply follow it to the center. The Minotaur is thus inevitable. Everyone who enters will find it eventually. The question is whether they can escape afterward.


Modern interpretations see the Labyrinth as representing the human psyche—the dark, confusing inner world where we must confront our own shadows.`,
        citation: 'Compiled from classical interpretations',
      },

      questions: [
        {
          id: 'q-minotaur-meaning',
          question: 'What does the Minotaur most fundamentally represent in Greek thought?',
          type: 'multiple-choice',
          options: [
            'Simply an exciting monster to make the story more entertaining',
            'The boundary between civilization and savagery, human reason and animal nature',
            'A historical memory of actual bulls used in Minoan rituals',
            'A warning against interspecies relationships',
          ],
          correctAnswer: 'The boundary between civilization and savagery, human reason and animal nature',
          explanation: 'The Minotaur\'s hybrid nature—half-human, half-beast—embodies the Greek philosophical concern with what separates humans from animals. Its imprisonment beneath the palace (beneath civilization) suggests that barbarism lurks beneath even the most advanced societies.',
        },
      ],

      learningPoints: [
        {
          id: 'lp-theseus-13-symbolism',
          content: 'Greek monsters often symbolize abstract concepts—the Minotaur represents the tension between human civilization and animal nature.',
          category: 'literary-context',
        },
        {
          id: 'lp-theseus-13-psychology',
          content: 'Modern psychological readings see the Labyrinth as representing the unconscious mind, with the Minotaur as the shadow-self that must be confronted.',
          category: 'reference',
        },
      ],
    },

    // Scene 14: Escaping Crete, abandoning Ariadne
    {
      id: 'theseus-scene-14-naxos',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/a2660283-0ce5-4d4c-9ad2-9b4a38d76f03/0_0.png',
      image: 'https://cdn.midjourney.com/a2660283-0ce5-4d4c-9ad2-9b4a38d76f03/0_0.png',

      content: `Following Ariadne's thread back through the darkness, Theseus and the thirteen other Athenians emerged into sunlight. They'd done the impossible. They'd killed the Minotaur.

Ariadne was waiting. Together they fled to the harbor, seized a ship, and sailed before King Minos discovered what had happened. Athens was free. The tribute was ended.

But on the journey home, they stopped at the island of Naxos to resupply.

That night, while Ariadne slept on the beach, exhausted from their escape, Theseus made a choice that would haunt him forever.

He ordered the crew to sail without her.

Why? The ancient sources offer different explanations:
- Some say the god Dionysus appeared to him in a dream, claiming Ariadne for himself
- Some say Theseus feared bringing a foreign princess to Athens would complicate his rule
- Some say he simply fell out of love, or never loved her at all

Whatever the reason, when Ariadne woke at dawn, she found herself alone on an empty beach, watching the Athenian ship disappear over the horizon.

The woman who had saved him—who had betrayed her father and her kingdom for him—was abandoned without a word.`,

      learningPoints: [
        {
          id: 'lp-theseus-14-betrayal',
          content: 'Theseus\'s abandonment of Ariadne is one of mythology\'s great betrayals, transforming him from pure hero to morally complex figure.',
          category: 'literary-context',
        },
        {
          id: 'lp-theseus-14-ambiguity',
          content: 'The multiple explanations for abandoning Ariadne reflect the myth\'s moral ambiguity—even the Greeks couldn\'t agree if Theseus was justified.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 15: Decision - Justify abandoning Ariadne
    {
      id: 'theseus-scene-15-justify',
      type: 'decision',
      backgroundImage: 'https://cdn.midjourney.com/45ba54dd-b54c-489b-854e-8d7870b56966/0_0.png',

      prompt: 'How do you justify leaving Ariadne?',
      context: `You are Theseus. You're sailing away from Naxos. Behind you, the woman who saved your life sleeps on the beach, unaware she's been abandoned.

The crew watches you, waiting for an explanation. You're their hero, the man who slew the Minotaur. But right now, you're also the man who broke his sacred oath.

How do you justify this?`,

      choices: [
        {
          id: 'choice-politics',
          text: 'Athens needs a diplomatic marriage, not a foreign princess who betrayed her father',
          consequence: `You tell yourself it's about politics. Marrying Ariadne would complicate Athenian foreign relations. She's valuable as an ally but dangerous as a queen.

It's a rational explanation. But it doesn't erase the fact that you swore an oath and broke it. That you used her knowledge to survive and then discarded her when she was no longer useful.

This is how corruption begins—with rational justifications for dishonorable acts.`,
          learningPoints: [
            {
              id: 'lp-theseus-15a-corruption',
              content: 'Power corrupts through rationalization—Theseus frames his betrayal as political necessity rather than moral failing.',
              category: 'literary-context',
            },
          ],
        },
        {
          id: 'choice-divine',
          text: 'Dionysus claimed her in a vision—the gods\' will supersedes human promises',
          consequence: `You claim divine intervention—Dionysus wants Ariadne for himself, and mortals can't refuse the gods.

It's possible this is true. Or it's possible you're hiding behind divine authority to excuse your choice.

Either way, you've learned that power means being able to rewrite your own story, to frame your failures as necessities.`,
        },
        {
          id: 'choice-honest',
          text: 'Admit you made a promise you shouldn\'t have and broke it',
          consequence: `Rare and difficult—admitting you were wrong. That you made a promise in desperation, used Ariadne's help to survive, and then chose political convenience over honor.

But this level of honesty is perhaps beyond Theseus in this moment. He's tasted victory and glory. He's not yet ready to face his own moral failures.

That reckoning will come later.`,
        },
      ],

      learningPoints: [],
    },

    // Scene 16: Forgetting the sails
    {
      id: 'theseus-scene-16-black-sails',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/7922f988-5365-4bd6-92ea-28c814737844/0_0.png',
      image: 'https://cdn.midjourney.com/7922f988-5365-4bd6-92ea-28c814737844/0_0.png',

      content: `As the ship sailed toward Athens, Theseus was distracted—by his triumph over the Minotaur, by his guilt over Ariadne, by dreams of the glory awaiting him.

And in that distraction, he forgot something critical.

The ship approached Athens in triumph. They'd done it—killed the Minotaur, freed Athens from tribute, ended Crete's dominance.

Theseus stood at the prow, imagining his reception. He'd be hailed as a hero, perhaps even crowned king. His name would be legendary.

On the cliffs above Athens, King Aegeus stood watching, as he had every day since the ship departed. He was looking for one thing: the color of the sails.

Black sails would mean death. White sails would mean his son lived.

But Theseus, in his distraction, had forgotten to change the sails.

The ship approached with black sails billowing.

Aegeus saw them from the cliff. His son was dead. The tribute had failed again. Athens would remain subjugated.

Unable to bear the grief, the old king threw himself from the cliff into the sea below.

By the time Theseus remembered the sails—by the time he realized what he'd forgotten—it was too late. His father was dead. And it was his fault.`,

      inlineAnnotations: [
        {
          id: 'annotation-aegean',
          text: 'sea below',
          tooltip: {
            title: 'The Aegean Sea',
            content: 'The sea into which Aegeus fell was named after him—the Aegean Sea. This naming preserves the memory of his tragic death in the very geography of Greece.',
            category: 'historical-context',
          },
        },
      ],

      learningPoints: [
        {
          id: 'lp-theseus-16-tragedy',
          content: 'The forgotten sails demonstrate how small oversights born of pride or distraction can have catastrophic consequences.',
          category: 'literary-context',
        },
        {
          id: 'lp-theseus-16-pattern',
          content: 'Theseus\'s tragedy mirrors Acrisius in Perseus\'s story—prophecy and accident converge to kill the father figure.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 17: Cause-Effect - Tragic consequences
    {
      id: 'theseus-scene-17-consequences',
      type: 'cause-effect',
      backgroundImage: 'https://cdn.midjourney.com/7922f988-5365-4bd6-92ea-28c814737844/0_0.png',

      prompt: 'Trace how Theseus\'s choices—noble and ignoble—led to tragedy. Match each decision to its consequence:',

      pairs: [
        {
          id: 'pair-1',
          cause: 'Theseus volunteers to go with the tribute',
          effect: 'He gains opportunity to confront the Minotaur and free Athens',
          explanation: 'His noble choice to sacrifice himself for his people creates the circumstances for heroism—leadership requires personal risk.',
        },
        {
          id: 'pair-2',
          cause: 'Theseus accepts Ariadne\'s help and promises to marry her',
          effect: 'He survives the Labyrinth but creates a moral debt',
          explanation: 'The bargain saves his life but binds him to obligations that will later conflict with his political ambitions.',
        },
        {
          id: 'pair-3',
          cause: 'Theseus abandons Ariadne on Naxos',
          effect: 'He breaks a sacred oath and begins his moral decline',
          explanation: 'This betrayal marks the turning point from pure hero to flawed leader—success and power begin to corrupt his judgment.',
        },
        {
          id: 'pair-4',
          cause: 'Theseus forgets to change the sails from black to white',
          effect: 'Aegeus believes his son is dead and throws himself into the sea',
          explanation: 'His distraction and pride—thinking of his triumph rather than his father\'s worry—directly causes Aegeus\'s death.',
        },
        {
          id: 'pair-5',
          cause: 'Aegeus\'s death makes Theseus king of Athens',
          effect: 'Theseus gains power but carries guilt for his father\'s death',
          explanation: 'His greatest achievement (becoming king) is tainted by his greatest failure (killing his father through negligence).',
        },
      ],

      learningPoints: [
        {
          id: 'lp-theseus-17-causality',
          content: 'Greek tragedy shows how heroic virtues (courage, ambition) and human flaws (pride, forgetfulness) interweave to create inevitable catastrophe.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 18: Theseus as king
    {
      id: 'theseus-scene-18-king',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/01ac8abf-47fe-43b3-a2f4-562d4fb9b667/0_0.png',
      image: 'https://cdn.midjourney.com/01ac8abf-47fe-43b3-a2f4-562d4fb9b667/0_0.png',

      content: `Theseus became king of Athens in triumph and tragedy. He unified the scattered communities of Attica, established courts of justice, and laid foundations for Athenian democracy.

But his personal life was marked by continued poor judgment:

He married Hippolyta, queen of the Amazons, in what some say was an abduction. Their son Hippolytus would later die because of false accusations and curses—another innocent destroyed by Theseus's choices.

He later married Phaedra, Ariadne's younger sister (yes, daughter of the man whose trust he betrayed). Phaedra would fall in love with her stepson Hippolytus, leading to more tragedy.

He attempted to help his friend Pirithous kidnap Persephone from the Underworld—an act of staggering hubris that got them both trapped there until Heracles rescued Theseus (but not Pirithous).

The great civilizer, the hero who made Athens safe, proved unable to manage his own household or check his own ambitions.

Eventually, exiled from the city he founded, Theseus died alone on the island of Scyros, pushed off a cliff by the local king who feared his reputation.

The hero who began with such promise ended in ignominy and failure.`,

      learningPoints: [
        {
          id: 'lp-theseus-18-decline',
          content: 'Theseus\'s later life demonstrates how early successes don\'t guarantee continued wisdom—power can accelerate moral decay.',
          category: 'literary-context',
        },
        {
          id: 'lp-theseus-18-hubris',
          content: 'His attempt to kidnap Persephone shows classic hubris—believing his earlier victories entitled him to challenge even death itself.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 19: Interlude - Leadership burdens (modern parallels)
    {
      id: 'theseus-scene-19-modern',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/01ac8abf-47fe-43b3-a2f4-562d4fb9b667/0_0.png',
      image: 'https://cdn.midjourney.com/208b68bf-9de7-4713-ae20-db070f170744/0_1.png',

      content: `Theseus's story is ultimately about the burden of leadership and how power corrupts even the well-intentioned.

Think of modern stories that explore similar themes:

**Game of Thrones:** Characters like Daenerys Targaryen begin with noble goals (freeing slaves) but power and circumstance gradually corrupt them into tyrants.

**The West Wing / House of Cards:** Political dramas showing how leaders must make impossible choices, compromise principles, and live with consequences.

**The Dark Knight trilogy:** Bruce Wayne tries to be both hero and leader, but the role costs him personally and ethically—he makes questionable choices justified as "necessary."

**Succession:** The Roy children fight for power, but inheriting leadership proves hollow—they've confused authority with fulfillment.

Theseus's tragedy is that he was genuinely heroic—he really did slay the Minotaur, really did free Athens. But heroism in crisis doesn't translate to wisdom in governance. Defeating monsters is simpler than managing power, relationships, and responsibility.

The Greeks knew what we're still learning: there are no permanent heroes. Everyone is capable of both greatness and failure. The question isn't whether you'll face moral tests—it's whether you'll recognize them and how you'll respond.

Theseus failed many of his tests. But his story endures because we recognize ourselves in both his triumphs and his failures.`,

      learningPoints: [
        {
          id: 'lp-theseus-19-modern',
          content: 'Modern political dramas and leadership narratives echo Theseus\'s themes: power corrupts, good intentions don\'t guarantee good outcomes, and heroism has limits.',
          category: 'reference',
        },
        {
          id: 'lp-theseus-19-complexity',
          content: 'Greek myths refused simple morality—their heroes were neither pure good nor pure evil, but complex humans capable of both.',
          category: 'literary-context',
        },
      ],

      events: {
        onExit: [{
          type: 'quiz',
          componentId: 'quiz-chapter-2',
          condition: { type: 'if-not-completed' },
        }],
      },
    },
  ],

  endQuiz: chapter2Quiz,
};

import type { Chapter } from '../../../types';
import { chapter1Quiz } from '../quizzes/chapter-1-quiz';

/**
 * Chapter 1: The Beginning of All Things
 *
 * This chapter introduces the Norse creation myth, from the primordial void
 * of Ginnungagap through the formation of the Nine Worlds and the rise of
 * the gods. Students explore Yggdrasil, the world tree, and learn about the
 * cosmic order that structures Norse mythology.
 */
export const chapter1: Chapter = {
  id: 'edda-ch1-beginning',
  title: 'The Beginning of All Things',
  description: 'Journey to the dawn of Norse mythology, where ice and fire collide to birth the cosmos, and the world tree Yggdrasil connects Nine Worlds of wonder.',
  learningObjectives: [
    'Understand the Norse creation myth and cosmological structure',
    'Identify the Nine Worlds and their inhabitants',
    'Recognize Yggdrasil as the cosmic world tree and its symbolism',
    'Analyze the role of Odin as the Allfather and seeker of wisdom',
  ],
  scenes: [
    {
      id: 'edda-ch1-scene-1-snorri',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/9c5e5e02-6a7e-4a01-b708-d725051e8af9/0_0.png',
      image: 'https://cdn.midjourney.com/895a0fc8-1017-49ff-9593-d08bb50231d3/0_1.png',
      content: `Greetings, traveler! I am Snorri Sturluson, an Icelandic poet, historian, and lawspeaker. In the year 1220, I set out to preserve the ancient stories of my people—the tales of gods and giants, of heroes and monsters, of creation and destruction.

These are the stories our ancestors told around fires on long winter nights. They are tales of the Aesir and Vanir, the divine beings who shaped the world. They speak of courage, wisdom, fate, and the inevitable twilight of all things.

But before we can understand the deeds of the gods, we must first understand how the world itself came to be. Join me as I tell you of the beginning of all things, when nothing existed but ice, fire, and the great emptiness between them.

This is the Prose Edda—the wellspring of Norse mythology.`,
      inlineAnnotations: [
        {
          id: 'snorri-sturluson',
          text: 'Snorri Sturluson',
          tooltip: {
            title: 'Iceland\'s Master Storyteller',
            content: 'Snorri Sturluson (1179-1241) was one of medieval Iceland\'s greatest writers. He wrote the Prose Edda to preserve Norse myths and teach the art of poetry. His work is our primary source for understanding Viking Age beliefs.',
            category: 'historical-context',
          },
        },
        {
          id: 'prose-edda',
          text: 'Prose Edda',
          tooltip: {
            title: 'The Book of Norse Myths',
            content: 'Written around 1220 CE, the Prose Edda is a manual of Norse mythology and poetics. It consists of four parts: a prologue, Gylfaginning (the deception of Gylfi), Skáldskaparmál (the language of poetry), and Háttatal (a list of verse forms).',
            category: 'literary-context',
          },
        },
      ],
      learningPoints: [
        {
          id: 'edda-ch1-lp-1-snorri',
          content: 'Snorri Sturluson preserved Norse mythology in the Prose Edda around 1220 CE, centuries after the Viking Age ended.',
          category: 'historical-context',
        },
        {
          id: 'edda-ch1-lp-2-preservation',
          content: 'The Prose Edda was written to preserve dying oral traditions and teach the complex art of skaldic poetry.',
          category: 'literary-technique',
        },
      ],
    },
    {
      id: 'edda-ch1-scene-2-ginnungagap',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/9e4a118d-38db-4cc3-90d5-de06d57bb8ac/0_0.png',
      image: 'https://cdn.midjourney.com/559b7d1c-8e5c-42cd-b70e-04da90115c88/0_0.png',
      content: `In the beginning, there was neither earth nor sky, neither sea nor shore. There was only Ginnungagap—the great yawning void, an emptiness beyond comprehension.

To the north of Ginnungagap lay Niflheim, a realm of primordial ice, mist, and darkness. Eleven rivers of frozen venom flowed from the spring called Hvergelmir, spreading frost across the void.

To the south lay Muspelheim, a realm of raging fire, guarded by the fire giant Surtr with his flaming sword. Burning embers and sparks flew from Muspelheim into the void.

For uncounted ages, these two forces existed in opposition—ice and fire, cold and heat, darkness and light. Neither could overcome the other. But in Ginnungagap, where they met, something miraculous began to happen.

The ice began to melt. The sparks began to cool. And from this meeting of opposites, life itself was born.`,
      inlineAnnotations: [
        {
          id: 'ginnungagap',
          text: 'Ginnungagap',
          tooltip: {
            title: 'The Yawning Void',
            content: 'In Old Norse, Ginnungagap means "gaping abyss" or "yawning void." It represents the primordial chaos before creation—a concept similar to the Greek Chaos or the Biblical "formless and empty" void.',
            category: 'cultural-context',
          },
        },
        {
          id: 'niflheim',
          text: 'Niflheim',
          tooltip: {
            title: 'World of Ice and Mist',
            content: 'Niflheim means "mist-home" in Old Norse. This dark, cold realm existed before the world was created and would outlast even Ragnarök. It represents the principle of ice, cold, and preservation.',
            category: 'cultural-context',
          },
        },
        {
          id: 'muspelheim',
          text: 'Muspelheim',
          tooltip: {
            title: 'Realm of Fire',
            content: 'Muspelheim is the realm of fire and heat, home to fire giants and their leader Surtr. The name may derive from "Muspell," possibly referring to the end of the world. It represents chaos, destruction, and transformation.',
            category: 'cultural-context',
          },
        },
      ],
      learningPoints: [
        {
          id: 'edda-ch1-lp-3-creation',
          content: 'Norse creation emerges from the meeting of opposites: ice (Niflheim) and fire (Muspelheim) colliding in the void (Ginnungagap).',
          category: 'thematic-analysis',
        },
        {
          id: 'edda-ch1-lp-4-duality',
          content: 'The duality of ice and fire reflects the Norse worldview that creation requires tension between opposing forces.',
          category: 'thematic-analysis',
        },
      ],
    },
    {
      id: 'edda-ch1-scene-3-creation-decision',
      type: 'decision',
      backgroundImage: 'https://cdn.midjourney.com/bba9e25c-6094-435d-af93-641c47adc925/0_0.png',
      prompt: 'How should the world be formed from ice and fire?',
      context: `You stand at the edge of Ginnungagap, watching the eternal dance of ice and fire. As Snorri's student, you must understand the creation process. Three theories have been proposed by different scholars of Norse mythology.

Which interpretation of the creation process do you find most compelling?`,
      choices: [
        {
          id: 'edda-ch1-choice-1-gradual',
          text: 'Through gradual melting—ice slowly thawing creates life drop by drop',
          consequence: 'You recognize the power of gradual transformation. Indeed, the Norse believed that life emerged slowly as the ice of Niflheim met the heat of Muspelheim, melting into the first living being. This process mirrors the slow cycles of nature that Vikings observed—spring thaws, seasonal changes, the patient work of creation.',
          learningPoints: [
            {
              id: 'edda-ch1-lp-5-gradual',
              content: 'Norse creation is gradual and organic, not instantaneous—reflecting the Norse observation of natural cycles.',
              category: 'thematic-analysis',
            },
          ],
        },
        {
          id: 'edda-ch1-choice-2-violent',
          text: 'Through violent collision—fire and ice clash to spark life instantly',
          consequence: 'You sense the dramatic nature of creation. While the Norse did see creation as involving conflict, it was not purely violent. The meeting of ice and fire was transformative rather than destructive—heat melting ice, cold tempering fire. This balance was crucial. Violence would come later, when Odin and his brothers would slay the giant Ymir.',
          learningPoints: [
            {
              id: 'edda-ch1-lp-6-balance',
              content: 'Creation requires balance between opposing forces, not the dominance of one over another.',
              category: 'thematic-analysis',
            },
          ],
        },
        {
          id: 'edda-ch1-choice-3-mystery',
          text: 'Through divine mystery—the gods willed life into existence',
          consequence: 'You recognize the limits of human understanding. However, in Norse cosmology, even the gods did not exist yet at this first moment of creation. The gods themselves would be born from the earliest beings. This distinguishes Norse myth from many other traditions—the gods are not eternal creators but products of the cosmos themselves.',
          learningPoints: [
            {
              id: 'edda-ch1-lp-7-gods-origin',
              content: 'Unlike many mythologies, Norse gods are not eternal—they too were born from the primordial beings of creation.',
              category: 'thematic-analysis',
            },
          ],
        },
      ],
      learningPoints: [
        {
          id: 'edda-ch1-lp-8-interpretation',
          content: 'Different interpretations of Norse creation myths reflect scholars\' attempts to understand pre-Christian Scandinavian beliefs.',
          category: 'historical-context',
        },
      ],
    },
    {
      id: 'edda-ch1-scene-4-ymir',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/9d63c9b9-c455-4f04-94db-ceaa10a98f5d/0_0.png',
      image: 'https://cdn.midjourney.com/644cc8b0-a0b1-4288-933e-71edd52f05df/0_2.png',
      content: `From the melting ice emerged the first living being: Ymir, the primordial giant. He was enormous beyond measure, formed from frost and venom, neither fully conscious nor truly alive in the way we understand life.

As Ymir slept, he began to sweat from the heat of Muspelheim. From the sweat under his left arm sprang a male and a female—the first frost giants. His legs mated with each other and produced a six-headed son. Thus the race of frost giants came into being, all descended from Ymir.

But Ymir needed sustenance. From the melting ice emerged Audhumla, the primordial cow. Four rivers of milk flowed from her udders, and from this milk Ymir drank and grew strong.

Audhumla herself fed by licking the salty ice blocks of Niflheim. As she licked, something remarkable appeared. On the first day, hair emerged from the ice. On the second day, a head. On the third day, an entire man stepped forth.

This was Búri, the first of the gods' ancestors. Búri was beautiful, strong, and great. He fathered a son named Borr, who married Bestla, daughter of a giant. Together they had three divine sons: Odin, Vili, and Vé.

The age of the gods had begun.`,
      inlineAnnotations: [
        {
          id: 'ymir',
          text: 'Ymir',
          tooltip: {
            title: 'The First Being',
            content: 'Ymir (sometimes called Aurgelmir) is the ancestor of all frost giants. His name possibly means "twin" or "hermaphrodite," referencing his ability to reproduce asexually. His body would later become the world itself.',
            category: 'cultural-context',
          },
        },
        {
          id: 'audhumla',
          text: 'Audhumla',
          tooltip: {
            title: 'The Nourishing Cow',
            content: 'Audhumla means "hornless cow rich in milk." In a harsh landscape like Scandinavia, cattle were essential for survival. Audhumla represents the nourishing power of nature that sustains all life.',
            category: 'cultural-context',
          },
        },
      ],
      learningPoints: [
        {
          id: 'edda-ch1-lp-9-ymir',
          content: 'Ymir, the primordial giant, is the ancestor of all frost giants and will become the physical substance of the world.',
          category: 'character-analysis',
        },
        {
          id: 'edda-ch1-lp-10-audhumla',
          content: 'Audhumla the cow nourished Ymir and revealed Búri, showing the importance of sustenance and discovery in Norse creation.',
          category: 'thematic-analysis',
        },
        {
          id: 'edda-ch1-lp-11-divine-lineage',
          content: 'The gods descended from Búri through Borr, creating a divine lineage separate from but contemporary with the giants.',
          category: 'historical-context',
        },
      ],
    },
    {
      id: 'edda-ch1-scene-5-nine-worlds',
      type: 'map-exploration',
      backgroundImage: 'https://cdn.midjourney.com/bdf3f119-433f-4187-982b-075d9d2e74ff/0_0.png',
      mapImage: 'https://cdn.midjourney.com/604d7384-3a1b-4ed2-81ef-6208cbec611c/0_1.png',
      prompt: 'Explore the Nine Worlds connected by Yggdrasil',
      locations: [
        {
          id: 'edda-ch1-asgard',
          name: 'Asgard',
          x: 51,
          y: 25,
          content: `Asgard is the realm of the Aesir gods, home to Odin, Thor, and the other principal deities. Here stands Valhalla, Odin's great hall where fallen warriors feast.

Asgard is connected to Midgard by the rainbow bridge Bifrost, guarded by the god Heimdall. The gods hold council here at the Well of Urd beneath Yggdrasil's branches.

This is the seat of divine power, where the gods rule and make decisions that affect all Nine Worlds.`,
          image: 'https://cdn.midjourney.com/1749ed07-a8d1-4723-86b6-050724e02737/0_0.png',
        },
        {
          id: 'edda-ch1-midgard',
          name: 'Midgard',
          x: 61,
          y: 42,
          content: `Midgard is the realm of humans—"Middle-Earth," the world we inhabit. It was created from Ymir's body and encircled by the Midgard Serpent, Jörmungandr, who bites his own tail.

The first humans, Ask and Embla, were created here by Odin and his brothers from two trees they found on the shore. Midgard is protected by the gods but also vulnerable to the chaos of giants and monsters.

This is the central world, connected to others yet distinct in its mortal nature.`,
          image: 'https://cdn.midjourney.com/b9ee4ee1-001c-458f-b6ce-b157e08dbd73/0_3.png',
        },
        {
          id: 'edda-ch1-jotunheim',
          name: 'Jotunheim',
          x: 87,
          y: 49,
          content: `Jotunheim is the realm of the giants (jotnar), ancient beings who represent the forces of chaos and nature. While often in conflict with the gods, giants are not purely evil—many gods have giant ancestry.

The giants possess great wisdom and power. They dwell in mountains and forests, commanding the raw forces of the natural world. The boundary between Jotunheim and Midgard is often unclear.

This is a realm of wildness and primal power, essential to the cosmic balance.`,
          image: 'https://cdn.midjourney.com/1496bcea-c2cd-4eb7-b696-6bbe506e13d4/0_1.png',
        },
        {
          id: 'edda-ch1-vanaheim',
          name: 'Vanaheim',
          x: 25,
          y: 22,
          content: `Vanaheim is home to the Vanir, a group of gods associated with fertility, wisdom, and the ability to see the future. They once warred with the Aesir but later made peace, exchanging hostages.

The Vanir include Njord (god of the sea), and his children Freyr and Freya. They represent the agricultural and maritime aspects of Norse society, complementing the warrior Aesir.

This realm reminds us that divine power has many forms, not all martial.`,
          image: 'https://cdn.midjourney.com/2e42fd29-983a-4f1b-8a9e-c79f27b3170e/0_2.png',
        },
        {
          id: 'edda-ch1-niflheim',
          name: 'Niflheim',
          x: 40,
          y: 43,
          content: `Niflheim, the world of ice and mist, existed before creation and contains the spring Hvergelmir, from which all rivers flow. It is a place of primordial cold and darkness.

Within or near Niflheim lies Helheim, the realm of Hel, daughter of Loki, where those who die of sickness or old age reside. Unlike Valhalla, this is not a place of honor but neither is it torment—it is simply where most dead go.

This is the realm of endings and ancient cold, the origin and destination of much.`,
          image: 'https://cdn.midjourney.com/fadb419f-e3f2-45c2-8046-8d6208ceb6a2/0_0.png',
        },
        {
          id: 'edda-ch1-muspelheim',
          name: 'Muspelheim',
          x: 72,
          y: 65,
          content: `Muspelheim is the realm of fire, home to the fire giant Surtr and his kin. It existed before creation, a counterpoint to icy Niflheim.

At Ragnarök, Surtr will march forth from Muspelheim and set the world ablaze, fulfilling his role as the agent of final destruction. Even now, he guards the borders of his realm with his flaming sword.

This is a realm of inevitable ending, the fire that will consume all at the twilight of the gods.`,
          image: 'https://cdn.midjourney.com/5cb1b40b-0a34-40a9-8214-41c622dbc981/0_3.png',
        },
        {
          id: 'edda-ch1-alfheim',
          name: 'Alfheim',
          x: 14,
          y: 47,
          content: `Alfheim is the realm of the light elves (ljósálfar), beautiful and radiant beings associated with light, fertility, and magic. The god Freyr rules here as its lord.

The light elves are benevolent beings who interact occasionally with gods and humans. They represent the luminous, beneficial aspects of the supernatural world.

Little is known of their daily lives, but they stand as guardians of light against darkness.`,
          image: 'https://cdn.midjourney.com/15e306b8-a658-4bae-9560-33114dc8e80e/0_0.png',
        },
        {
          id: 'edda-ch1-svartalfheim',
          name: 'Svartalfheim',
          x: 28,
          y: 64,
          content: `Svartalfheim is the realm of the dark elves or dwarves (dökkálfar or dvergar), master craftsmen who dwell underground. They forged many of the gods' greatest treasures: Thor's hammer Mjölnir, Odin's spear Gungnir, and Freya's necklace Brísingamen.

These beings are skilled beyond measure but often demand high prices for their work. They shun sunlight, which turns them to stone, and prefer the depths of the earth.

This is a realm of craft, skill, and the hidden treasures beneath the world.`,
          image: 'https://cdn.midjourney.com/5fd1055f-01f9-4635-8703-be637538da68/0_1.png',
        },
        {
          id: 'edda-ch1-helheim',
          name: 'Helheim',
          x: 50,
          y: 85,
          content: `Helheim is the realm of the dead, presided over by Hel, daughter of Loki. This is where those who die of sickness or old age go—unlike warriors who fall in battle and are chosen for Valhalla.

Helheim is neither a place of torture nor reward. It is a shadowy realm of mists and darkness, where the dead exist in a pale reflection of life. Hel herself is half-living, half-dead in appearance, ruling fairly but without mercy.

This is the final destination for most mortals, a realm of endings and the inevitability of death.`,
          image: 'https://cdn.midjourney.com/28992b1c-eb28-4224-974b-033ae27f2c94/0_3.png',
        },
      ],
      requiredLocations: ['edda-ch1-asgard', 'edda-ch1-midgard', 'edda-ch1-jotunheim'],
      learningPoints: [
        {
          id: 'edda-ch1-lp-12-nine-worlds',
          content: 'The Nine Worlds represent different aspects of existence: divine (Asgard), human (Midgard), chaotic (Jotunheim), dead (Niflheim/Helheim), and others.',
          category: 'thematic-analysis',
        },
        {
          id: 'edda-ch1-lp-13-cosmology',
          content: 'Norse cosmology organizes the universe spatially and conceptually, with each realm serving a distinct role in the cosmic order.',
          category: 'historical-context',
        },
      ],
    },
    {
      id: 'edda-ch1-scene-6-ymir-slain',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/69ea2d26-1312-4083-9390-4e233677aa11/0_0.png',
      image: 'https://cdn.midjourney.com/0ceee051-02f0-423a-b59e-6af57eff8998/0_1.png',
      content: `As Odin, Vili, and Vé grew to maturity, they looked upon the world and saw only chaos. Ymir and his giant offspring threatened to overwhelm all creation. The young gods knew they must act.

In a deed both terrible and necessary, the three brothers attacked Ymir and slew him. So much blood poured from his wounds that it drowned all the frost giants except one—Bergelmir—who escaped with his wife in a boat. From Bergelmir, the giant race would continue.

But the brothers' work had just begun. From Ymir's massive corpse, they would create the world:

From his flesh, they made the earth. From his blood, the seas and lakes. From his bones, the mountains. From his teeth and broken bones, the stones and pebbles. From his skull, they formed the dome of the sky, which they set upon four dwarves—Nordri, Sudri, Austri, and Vestri—stationed at the four corners to hold it aloft.

From Ymir's brains, they created the clouds. They took the sparks from Muspelheim and set them in the sky as stars, sun, and moon, establishing the cycle of day and night.

Thus was Midgard created from sacrifice—order carved from chaos, beauty born from violence. The world itself was a giant's corpse, transformed into something new.`,
      inlineAnnotations: [
        {
          id: 'ymir-slaying',
          text: 'slew him',
          tooltip: {
            title: 'Creation Through Sacrifice',
            content: 'The theme of creation through sacrifice is common in mythology. Compare this to the Babylonian Marduk slaying Tiamat or the Vedic Purusha being sacrificed. The Norse version emphasizes that order requires the defeat of primordial chaos.',
            category: 'literary-context',
          },
        },
      ],
      learningPoints: [
        {
          id: 'edda-ch1-lp-14-sacrifice',
          content: 'The world was created through sacrifice—Ymir\'s body became the earth, seas, mountains, and sky.',
          category: 'thematic-analysis',
        },
        {
          id: 'edda-ch1-lp-15-order-chaos',
          content: 'Norse creation involves imposing order upon chaos through violent transformation, not creation ex nihilo (from nothing).',
          category: 'thematic-analysis',
        },
        {
          id: 'edda-ch1-lp-16-world-structure',
          content: 'Each part of Ymir\'s body corresponds to a natural feature—flesh to earth, blood to seas, bones to mountains—showing how myths explain nature.',
          category: 'literary-technique',
        },
      ],
    },
    {
      id: 'edda-ch1-scene-7-primary-source',
      type: 'primary-source',
      backgroundImage: 'https://cdn.midjourney.com/b12337f4-52af-4f81-9a7c-62480d025b1d/0_0.png',
      prompt: 'Examine this passage from the Prose Edda about creation',
      source: {
        title: 'Gylfaginning (The Deception of Gylfi) - Chapter 8',
        author: 'Snorri Sturluson',
        date: 'circa 1220 CE',
        type: 'text',
        content: `Then spoke Gangleri: "What did Bor's sons do, whom you say are gods?"

Hár answered: "Not a little is there to be told of this. They took Ymir and carried him into the middle of Ginnungagap, and made of him the world. Of his blood they made the seas and lakes. Of his flesh the earth was made, but of his bones the mountains; gravel and stones they fashioned of his teeth and the bones that were broken."

Then spoke Jafnhár: "Of the blood which flowed from his wounds they made the ocean, when they put together the earth and girdled it, laying the ocean in a ring round about it. For most men it would seem an impossible task to cross it."

Then spoke Thridi: "They also took his skull and made the heavens of it, and raised it over the earth with four sides. Under each corner they set a dwarf, whose names are East, West, North, and South."`,
        citation: 'Prose Edda, translated by Arthur Gilchrist Brodeur (1916)',
      },
      questions: [
        {
          id: 'edda-ch1-q1',
          question: 'What is the narrative structure Snorri uses here?',
          type: 'multiple-choice',
          options: [
            'First-person narration from Odin',
            'A dialogue between Gangleri and three mysterious figures',
            'Third-person omniscient description',
            'A poetic verse in skaldic meter',
          ],
          correctAnswer: 'A dialogue between Gangleri and three mysterious figures',
          explanation: 'Snorri uses a frame narrative where King Gylfi (disguised as Gangleri) questions three mysterious figures (Hár, Jafnhár, and Thridi—actually Odin in disguise). This dialogue format makes the myths educational and engaging.',
        },
        {
          id: 'edda-ch1-q2',
          question: 'According to the text, what did the gods make from Ymir\'s blood?',
          type: 'multiple-choice',
          options: [
            'The earth and mountains',
            'The seas and lakes',
            'The clouds',
            'The stars',
          ],
          correctAnswer: 'The seas and lakes',
          explanation: 'The text explicitly states "Of his blood they made the seas and lakes" and later mentions how the blood "flowed from his wounds" to make the ocean that girds the earth.',
        },
        {
          id: 'edda-ch1-q3',
          question: 'Why might Snorri have chosen the dialogue format for the Prose Edda?',
          type: 'multiple-choice',
          options: [
            'To make it easier to memorize',
            'To make it educational and allow for questions and explanations',
            'Because he was writing a play',
            'To hide his Christian beliefs',
          ],
          correctAnswer: 'To make it educational and allow for questions and explanations',
          explanation: 'The dialogue format allows Gangleri to ask questions that readers might have, and the three figures to provide detailed answers. This pedagogical approach made complex myths accessible and organized.',
        },
      ],
      learningPoints: [
        {
          id: 'edda-ch1-lp-17-frame-narrative',
          content: 'Snorri uses a frame narrative where a disguised king questions Odin (also disguised), creating layers of storytelling and irony.',
          category: 'literary-technique',
        },
        {
          id: 'edda-ch1-lp-18-pedagogy',
          content: 'The question-and-answer format serves an educational purpose, making mythological knowledge accessible to medieval readers.',
          category: 'literary-technique',
        },
      ],
    },
    {
      id: 'edda-ch1-scene-8-first-humans',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/f5fe55bc-2606-4e14-8b8d-28d29b3ca982/0_0.png',
      image: 'https://cdn.midjourney.com/7f84b6a5-a6cb-469e-9cad-fe1ae70ebb71/0_1.png',
      content: `With the world formed, Odin and his brothers walked along the seashore, admiring their creation. But they saw that something was missing. The world was empty, awaiting inhabitants.

There on the shore they found two trees—an ash and an elm—fallen and lifeless. The three brothers looked at each other and understood what must be done.

Odin breathed into the trees and gave them spirit and life. Vili gave them consciousness and the power of movement. Vé gave them faces, speech, hearing, and sight.

The ash became a man, whom they named Ask. The elm became a woman, whom they named Embla. They were the first humans, ancestors of all humankind.

The gods gave them Midgard as their home, protected by the ocean and the mountains made from Ymir's body. From Ask and Embla descended all the races of humans, who would fill the world with their stories, struggles, and brief but bright lives.

The gods looked upon their work and were satisfied. Humans would till the fields, build halls, compose poetry, and honor the gods with sacrifices. The divine and mortal realms were now linked, each dependent upon the other.`,
      inlineAnnotations: [
        {
          id: 'ask-embla',
          text: 'Ask and Embla',
          tooltip: {
            title: 'The First Humans',
            content: 'Ask (ash tree) and Embla (possibly elm or vine) are the Norse equivalents of Adam and Eve. Their creation from trees emphasizes humanity\'s connection to nature—a key theme in Norse thought. Trees were sacred in Germanic culture.',
            category: 'cultural-context',
          },
        },
      ],
      learningPoints: [
        {
          id: 'edda-ch1-lp-19-humanity',
          content: 'Humans were created by Odin, Vili, and Vé from trees, each god contributing different essential qualities: spirit, consciousness, and senses.',
          category: 'thematic-analysis',
        },
        {
          id: 'edda-ch1-lp-20-trees',
          content: 'The creation of humans from trees reflects the Norse reverence for nature and the interconnection between natural and human realms.',
          category: 'cultural-context',
        },
        {
          id: 'edda-ch1-lp-21-reciprocity',
          content: 'The relationship between gods and humans is reciprocal—gods protect humans, humans honor gods through sacrifice and memory.',
          category: 'thematic-analysis',
        },
      ],
    },
    {
      id: 'edda-ch1-scene-9-quotes',
      type: 'quote-attribution',
      backgroundImage: 'https://cdn.midjourney.com/68265663-15ba-4910-9ff7-9de94fcf69a1/0_0.png',
      prompt: 'Match each action or role to the being who performed it in the creation story',
      quotes: [
        {
          id: 'edda-ch1-quote-1',
          text: 'I am the primordial being whose body became the earth, seas, mountains, and sky after the gods slew me.',
          speaker: 'Ymir',
          context: 'The first giant, from whose body the world was created.',
          explanation: 'Ymir was the first being to emerge from the meeting of fire and ice. After Odin and his brothers killed him, they used his body to create the physical world—his flesh became earth, blood became seas, bones became mountains, and skull became the sky.',
        },
        {
          id: 'edda-ch1-quote-2',
          text: 'I licked the salty ice blocks and freed Búri, the grandfather of the gods, from the frozen rime.',
          speaker: 'Audhumla',
          context: 'The primordial cow who nourished Ymir and freed the first god.',
          explanation: 'Audhumla the cosmic cow emerged from the melting ice alongside Ymir. While Ymir fed on her milk, she licked the salty ice blocks for three days, gradually freeing Búri, whose grandson would be Odin. She is essential to both the giant and divine lineages.',
        },
        {
          id: 'edda-ch1-quote-3',
          text: 'We three brothers—Odin, Vili, and Ve—slew the primordial giant and shaped the cosmos from his remains.',
          speaker: 'Odin and his brothers',
          context: 'The three gods who created the ordered world from chaos.',
          explanation: 'Odin, Vili, and Ve killed Ymir and used his body to create the physical world. They then established the structure of the cosmos, creating the Nine Worlds and placing Yggdrasil at the center. This act transformed chaos into order.',
        },
        {
          id: 'edda-ch1-quote-4',
          text: 'We were two pieces of driftwood on the shore until the gods gave us breath, consciousness, and names—making us the first humans.',
          speaker: 'Ask and Embla',
          context: 'The first man and woman, created from trees.',
          explanation: 'Ask (ash tree) and Embla (elm tree) were lifeless logs until Odin and his brothers transformed them into the first humans. Each god gave different gifts: breath and life, consciousness and movement, clothing and names. This shows humanity as a divine creation requiring multiple gifts.',
        },
        {
          id: 'edda-ch1-quote-5',
          text: 'I am the World Tree, the cosmic ash that connects all Nine Worlds—though I suffer constantly from beasts that gnaw at my roots and branches.',
          speaker: 'Yggdrasil',
          context: 'The great tree at the center of Norse cosmology.',
          explanation: 'Yggdrasil is not just a tree but the structural axis of the cosmos, connecting all realms. Despite its cosmic importance, it suffers constant assault from creatures like the dragon Níðhöggr at its roots and deer at its branches—symbolizing that even the fundamental structures of existence are subject to decay.',
        },
      ],
      learningPoints: [
        {
          id: 'edda-ch1-lp-22-quotes',
          content: 'Famous Norse quotations often express core values: wisdom through sacrifice, the inevitability of decay, and the importance of lasting fame.',
          category: 'thematic-analysis',
        },
        {
          id: 'edda-ch1-lp-23-poetry',
          content: 'Norse wisdom was often transmitted through poetic quotations, which were easier to memorize in an oral culture.',
          category: 'literary-technique',
        },
      ],
    },
    {
      id: 'edda-ch1-scene-10-gods',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/68265663-15ba-4910-9ff7-9de94fcf69a1/0_0.png',
      image: 'https://cdn.midjourney.com/bb8c71f1-0287-4ef6-aa9b-dfe3d2726c5b/0_3.png',
      content: `Now let me tell you of the Aesir, the principal gods who rule from Asgard.

Odin is the Allfather, chief of the gods and ruler of Asgard. He sits upon the high seat Hlidskjalf, from which he can see into all the Nine Worlds. Two ravens, Huginn (Thought) and Muninn (Memory), fly throughout the realms each day and return to whisper news in his ears. He is the god of wisdom, war, poetry, and death—a complex figure who values knowledge above all else. He has many names—Grimnir, Gangleri, Harbard—for he often wanders Midgard in disguise.

Thor is Odin's son, strongest of the gods. He wields the mighty hammer Mjölnir and protects both gods and humans from giants and monsters. He is the thunder god, riding across the sky in his chariot pulled by goats. While Odin is cunning, Thor is straightforward and brave, beloved by common folk who call upon him for protection.

Frigg is Odin's wife, queen of the gods and goddess of marriage and motherhood. She knows the fates of all beings, though she speaks them rarely. She sits beside Odin in Hlidskjalf, sharing his view of all the Nine Worlds. Her hall is Fensalir, and she is greatly honored among the goddesses.

Freya is the goddess of love, beauty, fertility, war, and death. She receives half of those who fall in battle in her hall Sessrúmnir, the other half going to Odin's Valhalla. She weeps tears of gold and possesses the magnificent necklace Brísingamen. She is of the Vanir gods but dwells in Asgard after the peace was made between the two divine races.

Loki is... complicated. Born of giants but dwelling among the Aesir, he is clever, cunning, and unpredictable. Sometimes he helps the gods with his wit; sometimes his tricks cause trouble. His nature is dual—both friend and potential threat to the divine order.

These and many others make up the company of the gods, each with their own stories, their own strengths and flaws. They are not perfect—far from it. But they are mighty, and they shape the fate of the Nine Worlds.`,
      inlineAnnotations: [
        {
          id: 'odin-names',
          text: 'many names',
          tooltip: {
            title: 'Odin\'s Many Names',
            content: 'Odin has over 200 names recorded in the Eddas, including Allfather, One-Eyed, Father of Hosts, God of the Hanged, and many more. Each name reveals a different aspect of his complex character and powers.',
            category: 'cultural-context',
          },
        },
        {
          id: 'mjolnir',
          text: 'Mjölnir',
          tooltip: {
            title: 'Thor\'s Hammer',
            content: 'Mjölnir means "that which smashes" or "grinder." It always returns to Thor after being thrown and can level mountains. Hammer amulets were worn by Vikings for protection, much as Christians wore crosses.',
            category: 'cultural-context',
          },
        },
      ],
      learningPoints: [
        {
          id: 'edda-ch1-lp-24-odin',
          content: 'Odin is a complex god of wisdom, war, and death who sacrifices constantly (his eye, hanging on Yggdrasil) to gain knowledge and forestall Ragnarök.',
          category: 'character-analysis',
        },
        {
          id: 'edda-ch1-lp-25-thor',
          content: 'Thor is the protector god, straightforward and strong, who defends both gods and humans from the forces of chaos.',
          category: 'character-analysis',
        },
        {
          id: 'edda-ch1-lp-26-loki',
          content: 'Loki is a liminal figure—born of giants but dwelling with gods—whose trickery both helps and harms the Aesir.',
          category: 'character-analysis',
        },
      ],
    },
    {
      id: 'edda-ch1-scene-11-timeline',
      type: 'timeline-game',
      backgroundImage: 'https://cdn.midjourney.com/0377a234-5eef-4717-a4a7-eafe0fc2ecdb/0_0.png',
      prompt: 'Order the events of creation from earliest to latest',
      timelineEvents: [
        {
          id: 'edda-ch1-event-1',
          title: 'Ginnungagap exists as void between ice and fire',
          year: 1,
          description: 'Before creation, there was only the yawning void with Niflheim to the north and Muspelheim to the south.',
        },
        {
          id: 'edda-ch1-event-2',
          title: 'Ymir emerges from melting ice',
          year: 2,
          description: 'The first living being forms where ice and fire meet, beginning the process of creation.',
        },
        {
          id: 'edda-ch1-event-3',
          title: 'Audhumla licks Búri from the ice',
          year: 3,
          description: 'The primordial cow reveals the first of the gods\' ancestors by licking the salty ice blocks over three days.',
        },
        {
          id: 'edda-ch1-event-4',
          title: 'Borr marries Bestla and fathers Odin, Vili, and Vé',
          year: 4,
          description: 'Búri\'s son Borr marries a giantess, creating the divine lineage that will reshape the cosmos.',
        },
        {
          id: 'edda-ch1-event-5',
          title: 'Odin and his brothers slay Ymir',
          year: 5,
          description: 'The three brothers kill the primordial giant, whose blood drowns all other giants except one.',
        },
        {
          id: 'edda-ch1-event-6',
          title: 'The world is created from Ymir\'s body',
          year: 6,
          description: 'The brothers fashion earth, seas, mountains, and sky from the giant\'s corpse, establishing the physical world.',
        },
        {
          id: 'edda-ch1-event-7',
          title: 'Ask and Embla are created from trees',
          year: 7,
          description: 'The gods give life, consciousness, and senses to two trees, creating the first humans.',
        },
        {
          id: 'edda-ch1-event-8',
          title: 'The gods establish Asgard and organize the cosmos',
          year: 8,
          description: 'The Aesir create their realm and establish the structure of the Nine Worlds, bringing order to creation.',
        },
      ],
      successThreshold: 75,
      learningPoints: [
        {
          id: 'edda-ch1-lp-27-sequence',
          content: 'The Norse creation follows a clear sequence: void → primordial beings → divine beings → world formation → human creation.',
          category: 'plot-structure',
        },
        {
          id: 'edda-ch1-lp-28-progression',
          content: 'Creation moves from chaos to order, with each stage building upon the previous through transformation and sacrifice.',
          category: 'thematic-analysis',
        },
      ],
    },
    {
      id: 'edda-ch1-scene-12-transition',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/4509e847-6fe9-4dea-8674-a76fe3b6df72/0_0.png',
      image: 'https://cdn.midjourney.com/604d7384-3a1b-4ed2-81ef-6208cbec611c/0_1.png',
      content: `And so the world came to be. From the void of Ginnungagap, through the sacrifice of Ymir, to the establishment of the Nine Worlds and the creation of humankind—this is the foundation of all that follows.

Yggdrasil, the great world tree, connects all these realms. Its roots delve into three wells: Urðarbrunnr (the Well of Fate) in Asgard, Mímisbrunnr (Mimir's Well of Wisdom), and Hvergelmir (the roaring kettle) in Niflheim. Its branches spread over all the worlds, and beneath it the gods hold their councils.

But the world tree suffers. The dragon Níðhöggr gnaws at its roots from below. Four stags—Dáinn, Dvalinn, Duneyrr, and Duraþrór—eat its leaves. And an eagle sits in its highest branches, with a hawk perched between its eyes, observing all.

This is the nature of the cosmos—even the most sacred and fundamental structures are under constant attack, slowly decaying. Nothing lasts forever, not even the gods themselves. All moves toward Ragnarök, the twilight of the gods, when everything will end and begin again.

But that is a story for another time. For now, you have learned how the world began. You understand the Nine Worlds and the great beings who inhabit them. You have heard how order was carved from chaos, how sacrifice created beauty, and how all things are connected by the world tree Yggdrasil.

The stage is set. Now let us turn to the deeds of the gods themselves...`,
      inlineAnnotations: [
        {
          id: 'yggdrasil-name',
          text: 'Yggdrasil',
          tooltip: {
            title: 'The World Tree',
            content: 'Yggdrasil means "Odin\'s horse" (Yggr is one of Odin\'s names, and drasil means "horse"). This refers to when Odin hanged himself from the tree for nine nights to gain the knowledge of runes—the tree was his "steed" during that ordeal.',
            category: 'cultural-context',
          },
        },
        {
          id: 'nidhogg',
          text: 'Níðhöggr',
          tooltip: {
            title: 'The Corpse-Chewer',
            content: 'Níðhöggr is a dragon that gnaws at the roots of Yggdrasil and chews on corpses in Niflheim. The name means "curse-striker" or "malice-striker," representing the forces of entropy constantly attacking the cosmic order.',
            category: 'cultural-context',
          },
        },
      ],
      learningPoints: [
        {
          id: 'edda-ch1-lp-29-yggdrasil',
          content: 'Yggdrasil, the world tree, connects all Nine Worlds and serves as the axis of the Norse cosmos, but it is constantly under attack.',
          category: 'thematic-analysis',
        },
        {
          id: 'edda-ch1-lp-30-decay',
          content: 'The Norse worldview emphasizes constant decay and entropy—even the world tree and the gods themselves are mortal and will eventually fall.',
          category: 'thematic-analysis',
        },
        {
          id: 'edda-ch1-lp-31-structure',
          content: 'The creation myth establishes the cosmic structure and fundamental themes that will drive all subsequent Norse myths.',
          category: 'plot-structure',
        },
      ],
      events: {
        onExit: [
          {
            type: 'quiz',
            componentId: 'edda-ch1-quiz',
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

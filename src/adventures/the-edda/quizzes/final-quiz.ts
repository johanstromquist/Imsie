import type { Quiz } from '../../../types';

/**
 * Final comprehensive quiz for The Edda adventure
 * This quiz synthesizes learning across all 6 chapters, testing understanding
 * of Norse mythology, cosmology, cultural values, the Prose Edda's significance,
 * and the legacy of these myths in Western culture
 */
export const finalQuiz: Quiz = {
  id: 'quiz-final-the-edda',
  title: 'Final Quiz: Masters of the Nine Worlds',
  description:
    'A comprehensive challenge testing your mastery of Norse mythology from creation to Ragnarök, ' +
    'the deeds of gods and heroes, the cultural significance of the Prose Edda, and its enduring legacy in Western culture.',
  passingScore: 70,
  allowRetry: true,

  questions: [
    // CHAPTER 1: CREATION AND COSMOLOGY
    {
      id: 'q-final-1-creation-pattern',
      question:
        'How does Norse creation differ fundamentally from creation myths in Christianity and many other traditions?',
      type: 'multiple-choice',
      points: 5,
      options: [
        'Creation emerges from transformation and conflict rather than divine command',
        'Norse creation involves a divine speaking the world into existence',
        'The gods created the world from nothing through an act of pure will',
        'A single creator deity shaped the cosmos according to a perfect plan',
      ],
      correctAnswer:
        'Creation emerges from transformation and conflict rather than divine command',
      explanation:
        'Unlike creation ex nihilo (from nothing) or by divine command, Norse creation emerges from pre-existing elements—ice and fire meeting in the void. The world is literally made from Ymir\'s body, representing transformation rather than pure creation. This reflects the Norse view that order emerges from conflict between opposing forces, not from a single omnipotent deity.',
      relatedLearningPoints: ['edda-ch1-lp-3-creation', 'edda-ch1-lp-4-duality', 'edda-ch1-lp-15-order-chaos'],
    },

    {
      id: 'q-final-2-yggdrasil',
      question:
        'Yggdrasil is constantly under attack from Níðhöggr, stags, and decay. What does this symbolize about the Norse worldview?',
      type: 'multiple-choice',
      points: 5,
      options: [
        'The world tree was poorly constructed by inexperienced gods',
        'Natural forces are inherently evil and seek to destroy creation',
        'Even cosmic structures require constant maintenance against decay',
        'Yggdrasil symbolizes the weakness of the Norse pantheon',
      ],
      correctAnswer: 'Even cosmic structures require constant maintenance against decay',
      explanation:
        'That Yggdrasil suffers constant damage yet continues to stand represents the Norse understanding that nothing is eternal or perfect—even the axis of the cosmos requires ongoing maintenance and struggle. This reflects a worldview that accepted impermanence and saw existence as constant work against inevitable decay, rather than eternal divine perfection.',
      relatedLearningPoints: ['edda-ch1-lp-30-decay', 'edda-ch1-lp-29-yggdrasil'],
    },

    {
      id: 'q-final-3-nine-worlds',
      question: 'The Nine Worlds are organized in a vertical hierarchy. What principle determines this structure?',
      type: 'multiple-choice',
      points: 5,
      options: [
        'The magical power level of inhabitants in each realm',
        'Distance from Yggdrasil\'s trunk determines vertical position',
        'Social order: gods above, humans in middle, chaos below',
        'The age of each realm—oldest at top, newest at bottom',
      ],
      correctAnswer: 'Social order: gods above, humans in middle, chaos below',
      explanation:
        'The vertical arrangement reflects social hierarchy and cosmic order: Asgard (gods) at the top, Midgard (humans) in the middle, and realms of giants, dark elves, and the dead below. This spatial organization manifests the Norse understanding of cosmic order—those who maintain civilization occupy higher realms, while forces of chaos and death occupy lower ones.',
      relatedLearningPoints: ['edda-ch1-lp-12-nine-worlds', 'edda-ch1-lp-13-cosmology'],
    },

    // CHAPTER 2: THOR AND LOKI
    {
      id: 'q-final-4-thor-role',
      question:
        'Thor is the most popular god in Norse mythology despite Odin being the Allfather. Why was Thor so important to common Norse people?',
      type: 'multiple-choice',
      points: 5,
      options: [
        'He defended Midgard from giants, protecting common people',
        'He possessed the most powerful weapon among all gods',
        'He offered better material rewards to his worshippers',
        'His worship required less complicated rituals than Odin\'s',
      ],
      correctAnswer: 'He defended Midgard from giants, protecting common people',
      explanation:
        'While Odin was associated with aristocratic concerns (wisdom, poetry, war strategy), Thor was the protector of common people. He defended Midgard from giants who threatened humanity, controlled weather crucial to farming, and embodied accessible virtues like strength, loyalty, and straightforward honesty. This made him the most worshipped god among farmers and common folk.',
      relatedLearningPoints: ['edda-ch2-lp-1', 'edda-ch2-lp-2', 'edda-ch2-lp-25'],
    },

    {
      id: 'q-final-5-loki-duality',
      question:
        'Loki helps the gods on some occasions and harms them on others. What does his ambiguous nature represent in Norse mythology?',
      type: 'multiple-choice',
      points: 5,
      options: [
        'Inconsistent storytelling from contradictory oral sources',
        'Chaos and change within order—necessary but dangerous',
        'A character borrowed from Greek trickster god traditions',
        'Evidence that Norse mythology evolved over many centuries',
      ],
      correctAnswer: 'Chaos and change within order—necessary but dangerous',
      explanation:
        'Loki embodies the paradox that order needs disruption to remain vital. His tricks sometimes benefit the gods (getting them treasures) but eventually spiral into true malevolence (killing Baldr). This represents the Norse understanding that chaos, change, and boundary-breaking can be creative or destructive—necessary in small doses but catastrophic when uncontrolled.',
      relatedLearningPoints: ['edda-ch2-lp-10', 'edda-ch2-lp-35', 'edda-ch2-lp-36'],
    },

    {
      id: 'q-final-6-giants',
      question:
        'True or False: Giants in Norse mythology are purely evil enemies that the gods must destroy.',
      type: 'true-false',
      points: 5,
      options: ['True', 'False'],
      correctAnswer: 'False',
      explanation:
        'False. Giants are not simply evil—they represent chaos and the forces of nature, but the gods frequently marry giants (Odin\'s mother was a giantess), and some giants are wise (Mimir). Giants represent wildness and disorder that opposes civilization, but they\'re part of the cosmic balance, not absolute evil. The conflict is between order and chaos, not good and evil.',
      relatedLearningPoints: ['edda-ch2-lp-8', 'edda-ch2-lp-9', 'edda-ch1-lp-11-divine-lineage'],
    },

    // CHAPTER 3: ODIN'S WISDOM
    {
      id: 'q-final-7-odin-sacrifice',
      question: 'Odin sacrifices his eye and hangs himself from Yggdrasil. What do these sacrifices teach?',
      type: 'multiple-choice',
      points: 5,
      options: [
        'Physical strength matters less than wisdom and mental power',
        'True wisdom requires sacrifice—knowledge demands a price',
        'Self-inflicted pain brings the gods closer to understanding',
        'Desperation drove Odin to make increasingly poor decisions',
      ],
      correctAnswer: 'True wisdom requires sacrifice—knowledge demands a price',
      explanation:
        'Odin\'s sacrifices establish the principle that true wisdom costs something valuable. He gives up physical sight to gain insight, endures suffering to earn the runes. This reflects the Norse value system where nothing worthwhile comes easily—wisdom, power, and knowledge must be earned through ordeal, sacrifice, and personal transformation. Odin models the pursuit of wisdom even at great personal cost.',
      relatedLearningPoints: ['edda-ch3-lp-1', 'edda-ch3-lp-2', 'edda-ch3-lp-15'],
    },

    {
      id: 'q-final-8-runes',
      question: 'What made runes powerful in Norse belief beyond just being an alphabet?',
      type: 'multiple-choice',
      points: 5,
      options: [
        'Runes were discovered symbols of cosmic truth, not invented',
        'The gods created them specifically for magical purposes',
        'Their angular shape made them easier to carve on stone',
        'Runes had prettier, more decorative forms than other scripts',
      ],
      correctAnswer: 'Runes were discovered symbols of cosmic truth, not invented',
      explanation:
        'Runes were not merely letters but symbols of cosmic principles that existed before their discovery. Odin\'s ordeal revealed them, he did not invent them. Each rune represented a fundamental concept (protection, journey, harvest, etc.) and could invoke that power when properly used. This made literacy itself a form of magic and power in Norse culture.',
      relatedLearningPoints: ['edda-ch3-lp-10', 'edda-ch3-lp-11', 'edda-ch3-lp-12'],
    },

    {
      id: 'q-final-9-poetry',
      question: 'Why was poetry (the Mead of Poetry) so important in Norse culture?',
      type: 'multiple-choice',
      points: 5,
      options: [
        'Poetry preserved history, law, and memory in oral culture',
        'It provided entertainment during long winter nights',
        'Successful poets received generous payment from rulers',
        'Composing poetry required less skill than other crafts',
      ],
      correctAnswer: 'Poetry preserved history, law, and memory in oral culture',
      explanation:
        'In a primarily oral culture with limited literacy, poetry served crucial functions beyond entertainment. The structured meter and alliteration made information memorable, preserving laws, genealogies, historical events, and cultural values across generations. A skilled poet (skald) could immortalize a king\'s deeds or destroy a reputation—making poetry a form of power. This explains why Odin goes to such lengths to acquire the Mead of Poetry.',
      relatedLearningPoints: ['edda-ch3-lp-18', 'edda-ch3-lp-19', 'edda-ch3-lp-22'],
    },

    // CHAPTER 4: BALDR'S DEATH
    {
      id: 'q-final-10-baldr-significance',
      question:
        'What makes Baldr\'s death the pivotal moment that sets Ragnarök in motion rather than just another tragedy?',
      type: 'multiple-choice',
      points: 5,
      options: [
        'His death showed perfect innocence couldn\'t be protected—fate wins',
        'Baldr was Odin\'s favorite and most powerful son among gods',
        'The prophecy specifically stated Baldr\'s death triggers Ragnarök',
        'The gods\' rage and desire for revenge clouded their judgment',
      ],
      correctAnswer:
        'His death showed perfect innocence couldn\'t be protected—fate wins',
      explanation:
        'Baldr embodied goodness, light, and joy—the best of what the gods\' world represented. His death was not just personal tragedy but symbolic: it proved that even perfect innocence cannot be protected, that fate (wyrd) overpowers divine power, and that the golden age is ending. Once the best could be killed, nothing was safe, and the slide toward Ragnarök became inevitable.',
      relatedLearningPoints: ['edda-ch4-lp-15', 'edda-ch4-lp-27', 'edda-ch4-lp-3'],
    },

    {
      id: 'q-final-11-fate-theme',
      question:
        'Frigg tries to prevent Baldr\'s death but fails. The gods try to bring him back from Hel but fail. What does this teach about wyrd (fate) in Norse mythology?',
      type: 'multiple-choice',
      points: 5,
      options: [
        'Frigg\'s protective magic was insufficiently powerful or thorough',
        'Fate is absolute—gods cannot change what is destined',
        'The gods lack the competence to protect what they love',
        'Wyrd (fate) controls mortals but shouldn\'t affect immortals',
      ],
      correctAnswer: 'Fate is absolute—gods cannot change what is destined',
      explanation:
        'The myth demonstrates that wyrd (fate/destiny) is the most powerful force in Norse cosmology—more powerful even than the gods themselves. No amount of precaution, no divine power, can prevent what is fated. The gods, despite all their might and wisdom, are ultimately subject to fate just as humans are. This fatalistic worldview shapes the heroic ideal: since you cannot escape destiny, what matters is how courageously you face it.',
      relatedLearningPoints: ['edda-ch4-lp-10', 'edda-ch4-lp-27', 'edda-ch4-lp-23'],
    },

    {
      id: 'q-final-12-loki-transformation',
      question: 'How does Loki\'s role change from the Thor stories (Chapter 2) to the Baldr myth (Chapter 4)?',
      type: 'multiple-choice',
      points: 5,
      options: [
        'Loki transforms from mischievous trickster to villain',
        'No change—Loki\'s character remains consistently evil',
        'Loki actually becomes more helpful to the gods over time',
        'His character shows inconsistency from contradictory sources',
      ],
      correctAnswer: 'Loki transforms from mischievous trickster to villain',
      explanation:
        'In Thor\'s adventures, Loki is a trickster whose schemes sometimes cause problems but often help the gods acquire treasures or overcome challenges. But in Baldr\'s death, Loki crosses a line—he deliberately murders the most beloved god, then prevents his return by refusing to mourn. This marks his transformation from ambiguous trickster to enemy of order itself, foreshadowing his role leading chaos forces at Ragnarök.',
      relatedLearningPoints: ['edda-ch4-lp-12', 'edda-ch2-lp-10', 'edda-ch4-lp-7'],
    },

    // CHAPTER 5: RAGNARÖK
    {
      id: 'q-final-13-heroic-courage',
      question:
        'The gods know they will lose at Ragnarök but fight anyway. What does this reveal about Norse values?',
      type: 'multiple-choice',
      points: 5,
      options: [
        'Courage and honor matter more than victory or survival',
        'The gods foolishly chose to fight when fleeing made sense',
        'They secretly hoped the prophecy might prove incorrect',
        'Fate compelled them to fight—they had no actual choice',
      ],
      correctAnswer: 'Courage and honor matter more than victory or survival',
      explanation:
        'The gods\' decision to fight despite knowing they will fall embodies the ultimate Norse value: reputation and honorable conduct matter more than outcomes. A warrior who dies bravely earns eternal glory in the sagas, while a coward who survives is forgotten or shamed. The gods model this perfectly—they cannot win, but they can control how they face defeat. This reflects Viking Age culture where honor, courage, and glorious death were valued above mere survival.',
      relatedLearningPoints: ['edda-ch5-14-courage', 'edda-ch5-5-preparation', 'edda-ch5-10-inevitability'],
    },

    {
      id: 'q-final-14-cyclical-time',
      question:
        'After Ragnarök, the world is destroyed but then reborn. How does this cyclical view differ from linear eschatology?',
      type: 'multiple-choice',
      points: 5,
      options: [
        'Existence is temporary and renewable, not linear toward judgment',
        'Cyclical time means exact repetition of the same events',
        'This cyclical view is unique to Norse mythological tradition',
        'The cycle ensures the gods will eventually achieve permanent victory',
      ],
      correctAnswer:
        'Existence is temporary and renewable, not linear toward judgment',
      explanation:
        'Unlike Christian eschatology (linear time ending in eternal heaven/hell) or Greek mythology (immortal gods ruling eternally), Norse cosmology is cyclical—creation, golden age, decline, destruction, renewal. Nothing is permanent, not even cosmic order or the gods themselves. This reflects the rhythms of Nordic life (harsh winters, brief summers) and may have provided psychological resilience: disasters are not final but part of natural cycles where renewal follows destruction.',
      relatedLearningPoints: ['edda-ch5-13-cyclical', 'edda-ch5-15-comparison', 'edda-ch5-13-survivors'],
    },

    {
      id: 'q-final-15-survivors',
      question: 'What is the significance of Baldr returning in the new world after Ragnarök?',
      type: 'multiple-choice',
      points: 5,
      options: [
        'Goodness and light are reborn after destruction',
        'It proves Baldr was never truly dead in the first place',
        'Christian scribes added this as a more hopeful ending',
        'The new world required a leader and Baldr was best suited',
      ],
      correctAnswer: 'Goodness and light are reborn after destruction',
      explanation:
        'Baldr, representing light, beauty, and goodness, returns in the reborn world. His return is not arbitrary—it symbolizes that while the old world\'s order is destroyed, its best qualities are not lost forever but reborn. This provides hope within the cyclical worldview: destruction is total, but goodness persists across the cycles. The new world won\'t repeat the old world\'s mistakes because Baldr returns wiser.',
      relatedLearningPoints: ['edda-ch5-13-survivors', 'edda-ch5-13-cyclical'],
    },

    // TRUE/FALSE QUESTIONS
    {
      id: 'q-final-16-snorri',
      question:
        'Snorri Sturluson created Norse mythology from his imagination rather than preserving existing traditions.',
      type: 'true-false',
      points: 5,
      options: ['True', 'False'],
      correctAnswer: 'False',
      explanation:
        'False. Snorri did not invent these myths—he compiled and preserved oral traditions that were dying out after Iceland\'s conversion to Christianity. He wrote in the early 13th century (c. 1220 CE) to preserve knowledge of the old myths for poetic education. While he may have shaped the narratives, the core myths were ancient traditions. Without Snorri\'s work, much of Norse mythology would have been lost forever.',
      relatedLearningPoints: ['edda-ch1-lp-1-snorri', 'edda-ch1-lp-2-preservation'],
    },

    {
      id: 'q-final-17-einherjar',
      question:
        'Warriors who died in battle went to Valhalla to feast and fight each day, preparing for Ragnarök.',
      type: 'true-false',
      points: 5,
      options: ['True', 'False'],
      correctAnswer: 'True',
      explanation:
        'True. The einherjar (those chosen by Odin from among the battle-slain) spend their afterlife in Valhalla feasting at night and fighting each day. Those who "die" in the daily battles are resurrected for the evening feast. This trains them for Ragnarök when they will fight alongside the gods in the final battle. This belief likely encouraged warrior courage—death in battle was not an end but recruitment to Odin\'s army.',
      relatedLearningPoints: ['edda-ch3-lp-5', 'edda-ch5-5-preparation'],
    },

    // MATCHING QUESTION
    {
      id: 'q-final-18-matchups',
      question: 'Match each god with their destined opponent at Ragnarök:',
      type: 'matching',
      points: 10,
      options: ['Odin', 'Thor', 'Heimdall', 'Freyr', 'Fenrir the wolf', 'Jörmungandr the world serpent', 'Loki', 'Surtr the fire giant'],
      correctAnswer: {
        'Odin': 'Fenrir the wolf',
        'Thor': 'Jörmungandr the world serpent',
        'Heimdall': 'Loki',
        'Freyr': 'Surtr the fire giant',
      },
      explanation:
        'Each god faces their destined opponent: Odin (father of gods, wisdom) versus Fenrir (chaos, prophecy). Thor (protector, strength) versus his ancient enemy Jörmungandr. Heimdall (watchman, order) versus Loki (trickster, chaos). Freyr (fertility, life) versus Surtr (fire, destruction). These matchups represent thematic oppositions—order versus chaos, life versus destruction—embodying the cosmic conflict.',
      relatedLearningPoints: ['edda-ch5-8-odin', 'edda-ch5-8-thor', 'edda-ch5-8-heimdall-loki', 'edda-ch5-6-freyr'],
    },

    // CHAPTER 6: PRESERVATION AND LEGACY
    {
      id: 'q-final-19-preservation',
      question:
        'How did Norse mythology survive despite Iceland\'s conversion to Christianity in 1000 CE?',
      type: 'multiple-choice',
      points: 5,
      options: [
        'Icelandic Christians valued it as cultural heritage',
        'Viking raiders spread it throughout Europe, preserving it',
        'The Catholic Church officially mandated preservation of myths',
        'It continued as a secret religion practiced until modern times',
      ],
      correctAnswer: 'Icelandic Christians valued it as cultural heritage',
      explanation:
        'Norse mythology survived because Icelandic Christians saw value in preserving their cultural heritage even after religious conversion. Snorri Sturluson (c. 1220) and anonymous scribes who compiled the Poetic Edda wrote down oral traditions not for religious reasons but to preserve cultural memory and poetic knowledge. Without this cultural preservation effort, these myths would have been lost.',
      relatedLearningPoints: ['edda-ch6-lp-1', 'edda-ch6-lp-2', 'edda-ch1-lp-1-snorri'],
    },

    {
      id: 'q-final-20-tolkien',
      question:
        'J.R.R. Tolkien, author of The Lord of the Rings, was deeply influenced by Norse mythology. Which elements did modern fantasy literature inherit from the Eddas through Tolkien?',
      type: 'multiple-choice',
      points: 5,
      options: [
        'Dwarf names, elves as immortals, and Middle-earth from Midgard',
        'Just the general concept of creating fantasy worlds',
        'Dragons guarding treasure, which Tolkien created uniquely',
        'Nothing significant—modern fantasy is entirely original',
      ],
      correctAnswer: 'Dwarf names, elves as immortals, and Middle-earth from Midgard',
      explanation:
        'Tolkien, an Oxford professor who studied Old Norse, borrowed extensively: dwarf names like Thorin, Gandalf, and Balin come directly from the Prose Edda\'s dwarf catalog. "Middle-earth" is Midgard. His wise, immortal elves draw from Norse tradition. Through Tolkien\'s immense influence on fantasy literature, Norse mythology indirectly shaped the entire modern fantasy genre—most fantasy authors today work in traditions Tolkien established using Norse sources.',
      relatedLearningPoints: ['edda-ch6-lp-16', 'edda-ch6-lp-17'],
    },

    {
      id: 'q-final-21-cultural-transmission',
      question:
        'The Codex Regius manuscript containing the Poetic Edda disappeared for centuries and was rediscovered in 1643. What does this teach about cultural preservation?',
      type: 'multiple-choice',
      points: 5,
      options: [
        'Cultural knowledge depends on fragile artifacts and preservers',
        'Medieval manuscripts were always carefully protected by churches',
        'Eventually all ancient texts are discovered and recovered',
        'Oral tradition proves more reliable than written manuscripts',
      ],
      correctAnswer: 'Cultural knowledge depends on fragile artifacts and preservers',
      explanation:
        'The Codex Regius nearly didn\'t survive—it was lost for centuries and could easily have been destroyed by fire, decay, or neglect. Before printing, each manuscript was unique, so losing one meant permanent loss of irreplaceable texts. Cultural transmission depends on luck, dedicated scribes who copy texts, and people who recognize their value. Much ancient knowledge has been lost forever; what survives represents only a fraction of what once existed.',
      relatedLearningPoints: ['edda-ch6-lp-5', 'edda-ch6-lp-7', 'edda-ch6-lp-8'],
    },

    // SELF-ASSESSMENT QUESTIONS
    {
      id: 'q-final-22-comparative',
      question:
        'Compare Norse mythology\'s treatment of fate (wyrd) with other mythological traditions you know (Greek, Christian, etc.). How does the Norse view that even gods are subject to fate create a different worldview about power, mortality, and meaning?',
      type: 'self-assessment',
      points: 10,
      modelAnswer:
        'Norse mythology is unique in making fate (wyrd) more powerful than the gods themselves. In Greek mythology, the gods are immortal and fate affects mortals but rarely the gods directly. In Christianity, God is omnipotent and outside fate—He is the author of destiny. But in Norse belief, even Odin, the Allfather, learns of his fated death and cannot prevent it. This creates a fundamentally different worldview: Power is temporary, nothing is permanent, and even cosmic order will end. This makes how you face fate more important than whether you control it. Courage, honor, and reputation become supreme values because they\'re the only things that transcend fate—your story, how you died, is what persists. The gods model this by fighting at Ragnarök despite knowing they\'ll lose. This Norse fatalism likely reflected the harsh Viking Age environment—catastrophe was inevitable (brutal winters, dangerous seas, warfare), so what mattered was facing hardship with courage and dignity. It also undermines absolute power structures: even the most powerful are subject to forces beyond their control, making humility and acceptance wisdom rather than weakness.',
      assessmentCriteria: [
        {
          id: 'criterion-comparison',
          text: 'I compared Norse fate (wyrd) with at least one other tradition (Greek, Christian, etc.)',
          points: 2,
        },
        {
          id: 'criterion-gods-subject',
          text: 'I explained that Norse gods are subject to fate, unlike immortal Greek gods or omnipotent Christian God',
          points: 3,
        },
        {
          id: 'criterion-worldview',
          text: 'I discussed how this affects worldview (values courage/honor over control, nothing is permanent)',
          points: 3,
        },
        {
          id: 'criterion-cultural',
          text: 'I connected this to Norse/Viking culture, environment, or how it shaped behavior and values',
          points: 2,
        },
      ],
      explanation:
        'Norse mythology\'s treatment of fate as absolute—even gods cannot escape wyrd—creates a unique worldview emphasizing courage, honor, and how you face inevitable doom rather than trying to control destiny. This reflects Viking Age values and harsh environmental realities.',
      relatedLearningPoints: [
        'edda-ch4-lp-10',
        'edda-ch4-lp-27',
        'edda-ch5-14-courage',
        'edda-ch5-15-comparison',
      ],
    },

    {
      id: 'q-final-23-synthesis',
      question:
        'After completing your journey through The Edda, what do you believe is the deepest lesson or theme that connects all six chapters—from creation through Ragnarök to the myths\' modern legacy? How does this ancient Norse worldview speak to modern concerns or questions?',
      type: 'self-assessment',
      points: 10,
      modelAnswer:
        'The deepest theme connecting all of The Edda is that impermanence and struggle define existence at every level. From creation (order emerging from chaos through conflict), to the gods\' constant battles with giants, to Yggdrasil under perpetual attack, to Baldr\'s death showing even perfection cannot last, to Ragnarök\'s inevitable destruction, to the fragile survival of these stories themselves in manuscripts that nearly didn\'t survive—everything is temporary and must be maintained through effort against entropy. Yet within this harsh truth lies meaning: What matters is not permanence but how you engage with impermanence. The gods fight knowing they will fall. Odin seeks wisdom knowing he is still fated to die. The world is reborn after destruction. Snorri preserves myths knowing Christianity has replaced them, yet their cultural value persists. This speaks powerfully to modern concerns about mortality, meaning, and climate catastrophe. We live in an age aware that civilizations fall, species go extinct, even our sun will die. Norse mythology offers an alternative to either denying impermanence or despairing over it: find meaning in the struggle itself, in maintaining order knowing it\'s temporary, in facing challenges courageously despite ultimate limits. The myths themselves demonstrate this—they survived not by being eternal but by being adaptable, reinterpreted by each generation from Romantic poets to Tolkien to modern media. The Norse don\'t promise eternal victory or life after death that erases mortality. Instead they ask: given that everything ends, how will you live? What will your story be? This is perhaps more relevant now than ever—a worldview that acknowledged endings, found meaning anyway, and valued courage, wisdom, and community in the face of inevitable catastrophe.',
      assessmentCriteria: [
        {
          id: 'criterion-theme',
          text: 'I identified a unifying theme across all chapters (impermanence, struggle, fate, courage, etc.)',
          points: 3,
        },
        {
          id: 'criterion-examples',
          text: 'I referenced multiple chapters/stories to support my interpretation',
          points: 2,
        },
        {
          id: 'criterion-meaning',
          text: 'I explained how Norse mythology creates meaning within harsh reality rather than denying it',
          points: 3,
        },
        {
          id: 'criterion-modern',
          text: 'I connected the ancient worldview to modern concerns (mortality, meaning, climate, etc.)',
          points: 2,
        },
      ],
      explanation:
        'The Edda teaches that impermanence and struggle define existence, but meaning is found not in permanence but in how you engage with inevitable endings—through courage, wisdom, and community. This ancient acceptance of limits and focus on how we face them speaks to modern concerns about mortality and environmental catastrophe.',
      relatedLearningPoints: [
        'edda-ch1-lp-15-order-chaos',
        'edda-ch5-14-courage',
        'edda-ch5-13-cyclical',
        'edda-ch4-lp-27',
        'edda-ch3-lp-2',
      ],
    },
  ],
};

import type { Quiz } from '../../../types';

/**
 * Final comprehensive quiz for Greek Myths adventure
 * This quiz synthesizes learning across all chapters, challenging readers
 * to demonstrate deep understanding of themes, patterns, and connections
 */
export const finalQuiz: Quiz = {
  id: 'quiz-final-greek-myths',
  title: 'Final Quiz: Masters of Greek Mythology',
  description: 'A supreme challenge testing your comprehensive understanding of Greek heroic narratives, their themes, and their lasting influence on storytelling.',
  passingScore: 70,
  allowRetry: true,

  questions: [
    // COMPARATIVE HEROISM
    {
      id: 'q-final-1-hero-types',
      question: 'Perseus, Theseus, Jason, and Heracles represent four different types of heroes. Which statement most accurately describes how they differ?',
      type: 'multiple-choice',
      points: 4,
      options: [
        'They differ only in which monsters they fight',
        'Each represents a distinct archetype: chosen one, civilizer, antihero, and redemption seeker',
        'They all follow identical heroic patterns with minor variations in setting and antagonists',
        'Their differences are purely geographical—Perseus represents island heroism, Theseus represents Athenian political heroism, Jason represents seafaring heroism, and Heracles represents pan-Hellenic heroism that transcends regional boundaries',
      ],
      correctAnswer: 'Each represents a distinct archetype: chosen one, civilizer, antihero, and redemption seeker',
      explanation: 'Each hero represents a distinct archetype: Perseus embodies the "chosen one" narrative with destiny and divine support. Theseus is the civilizer hero who makes society safer for ordinary people. Jason is Greek mythology\'s antihero whose character flaws lead to complete destruction. Heracles is the superpowered figure seeking redemption for terrible crimes. Understanding these differences reveals the sophistication of Greek storytelling.',
      relatedLearningPoints: ['lp-perseus-6-modern', 'lp-theseus-2-civilizer', 'lp-jason-16-antihero', 'lp-heracles-7-penance'],
    },

    // PROPHECY AND FATE
    {
      id: 'q-final-2-prophecy-pattern',
      question: 'Acrisius (Perseus\'s grandfather) and King Pelias (Jason\'s uncle) both try to prevent prophecies. What pattern do their stories reveal about fate in Greek mythology?',
      type: 'multiple-choice',
      points: 4,
      options: [
        'Prophecies are unreliable and can be safely ignored if you take proper precautions',
        'Only the weak-minded fail to overcome prophecy through determination',
        'Attempting to prevent prophecy creates the circumstances that fulfill it',
        'Greek prophecies function differently from other cultural traditions because they incorporate both divine will and human agency, creating a complex interplay where mortals have freedom to choose their actions but the ultimate outcomes remain fixed by the Fates, making prevention simultaneously possible and impossible',
      ],
      correctAnswer: 'Attempting to prevent prophecy creates the circumstances that fulfill it',
      explanation: 'Both Acrisius and Pelias assign "impossible" quests to eliminate threats, but these quests transform Perseus and Jason into the heroes who ultimately destroy them. This is the core pattern of Greek tragedy: fate is inevitable, but it works through human choices rather than against them. The very actions taken to prevent prophecy become the mechanism of its fulfillment.',
      relatedLearningPoints: ['lp-perseus-3-futility', 'lp-jason-3-impossible-quest', 'lp-prologue-7-fate'],
    },

    // WOMEN IN GREEK MYTHS
    {
      id: 'q-final-3-female-agency',
      question: 'Compare how Ariadne (Theseus\'s helper), Medea (Jason\'s helper), and Deianira (Heracles\'s wife) are portrayed. What do their stories collectively reveal?',
      type: 'multiple-choice',
      points: 4,
      options: [
        'Women in Greek myths lack agency and exist only to support male heroes',
        'Female characters possess power and intelligence but face betrayal, with catastrophic consequences when their agency is denied',
        'All three women are portrayed as villains who ultimately destroy the heroes they were meant to help',
        'Greek mythology presents a progressive view of gender equality where women and men share equal narrative importance',
      ],
      correctAnswer: 'Female characters possess power and intelligence but face betrayal, with catastrophic consequences when their agency is denied',
      explanation: 'All three women demonstrate agency and intelligence—Ariadne solves the Labyrinth, Medea\'s magic enables Jason\'s success, Deianira challenges Heracles to grow beyond violence. But all three are betrayed or abandoned by their heroes. The myths show that denying female agency creates tragedy: Medea\'s revenge destroys Jason completely, and Deianira\'s manipulation by Nessus kills Heracles. Greek tragedy understood that marginalizing powerful women leads to catastrophe.',
      relatedLearningPoints: ['lp-theseus-14-abandonment', 'lp-jason-11-female-perspective', 'lp-heracles-3-relationship'],
    },

    // DIVINE AID PRINCIPLE
    {
      id: 'q-final-4-divine-aid',
      question: 'Perseus receives gifts from Athena and Hermes. Theseus gets Ariadne\'s thread. Jason succeeds entirely through Medea\'s magic. What principle about heroism do these patterns establish?',
      type: 'multiple-choice',
      points: 4,
      options: [
        'True heroes succeed through their own strength alone',
        'The gods do all the work while heroes take credit',
        'Heroism requires both personal courage and divine/supernatural assistance',
        'Greek heroism presents a paradox where individual achievement is celebrated yet impossible without external intervention, suggesting the culture valued acknowledging one\'s debts and dependencies rather than claiming sole credit for success',
      ],
      correctAnswer: 'Heroism requires both personal courage and divine/supernatural assistance',
      explanation: 'Greek mythology consistently teaches that heroism requires BOTH human courage and divine aid. Perseus needed both his bravery AND Athena\'s gifts. Theseus had to have courage to enter the Labyrinth AND Ariadne\'s thread to escape. Jason\'s failure to honor Medea after she made his success possible reveals what happens when heroes forget this principle. This balanced view of heroism—neither pure self-reliance nor passive dependency—reflects a sophisticated understanding of human achievement.',
      relatedLearningPoints: ['lp-perseus-8-divine-aid', 'lp-theseus-11-thread', 'lp-jason-10-magic'],
    },

    // HUBRIS ACROSS STORIES
    {
      id: 'q-final-5-hubris-spectrum',
      question: 'Icarus flies too high, Bellerophon tries to reach Olympus, and Queen Cassiopeia boasts about her daughter\'s beauty. How does hubris function differently in these three cases?',
      type: 'multiple-choice',
      points: 4,
      options: [
        'All three are identical examples of flying too high',
        'Icarus shows youthful recklessness; Bellerophon shows arrogance after success; Cassiopeia\'s pride harms her innocent daughter',
        'Only Bellerophon demonstrates true hubris—the others are accidents or misunderstandings that shouldn\'t be classified as pride',
        'Hubris functions identically in all cases regardless of motivation',
      ],
      correctAnswer: 'Icarus shows youthful recklessness; Bellerophon shows arrogance after success; Cassiopeia\'s pride harms her innocent daughter',
      explanation: 'These three examples show the spectrum of hubris: Icarus represents youthful overconfidence and ignoring wise counsel. Bellerophon demonstrates how success itself breeds hubris—his achievements made him believe he could join the gods. Cassiopeia\'s hubris is particularly cruel because it endangers her innocent daughter. Greek mythology understood that excessive pride takes many forms, but all violate the principle of sophrosyne (knowing your place and limits).',
      relatedLearningPoints: ['lp-tragedy-4-hubris', 'lp-tragedy-13-hubris-defined', 'lp-perseus-12-hubris'],
    },

    // TRANSFORMATION AND REDEMPTION
    {
      id: 'q-final-6-redemption-arc',
      question: 'Heracles\'s Twelve Labors represent a redemption arc. How does this structure differ from the quest narratives of Perseus, Theseus, and Jason?',
      type: 'multiple-choice',
      points: 4,
      options: [
        'There is no meaningful difference between their quest structures',
        'Heracles seeks redemption for crimes; the others seek glory or power',
        'The Twelve Labors are longer and more difficult, requiring greater physical strength and endurance than the relatively simple quests undertaken by Perseus, Theseus, and Jason',
        'Only Heracles completes all his assigned tasks successfully',
      ],
      correctAnswer: 'Heracles seeks redemption for crimes; the others seek glory or power',
      explanation: 'Heracles\'s Labors are fundamentally different in purpose: Perseus seeks to eliminate a threat and prove himself; Theseus aims to free Athens from tribute and establish himself as a leader; Jason quests to reclaim his throne. But Heracles serves penance for the unforgivable—killing his own family. His labors aren\'t about glory; they\'re about atonement. This makes Heracles the first "redemption through heroic deeds" narrative in Western literature, establishing a pattern seen in countless modern heroes (Spider-Man, Batman, etc.).',
      relatedLearningPoints: ['lp-heracles-7-penance', 'lp-heracles-8-redemption', 'lp-perseus-5-impossible-quest'],
    },

    // CAUTIONARY TALES VS HEROIC NARRATIVES
    {
      id: 'q-final-7-cautionary-vs-heroic',
      question: 'Icarus, Orpheus, and Bellerophon fail catastrophically, while Perseus, Theseus, and Heracles ultimately succeed (at least initially). What determines success versus failure in Greek mythology?',
      type: 'multiple-choice',
      points: 4,
      options: [
        'Physical strength determines all outcomes',
        'Divine parentage guarantees success',
        'Self-control and knowing limits (sophrosyne) versus excessive pride (hubris)',
        'Success in Greek mythology depends primarily on the hero\'s relationship with their patron deity, their ability to interpret omens correctly, and their willingness to make appropriate sacrifices at temples—those who maintain proper religious observance succeed',
      ],
      correctAnswer: 'Self-control and knowing limits (sophrosyne) versus excessive pride (hubris)',
      explanation: 'The key distinction is sophrosyne versus hubris. Successful heroes (even flawed ones) ultimately respect boundaries: Perseus uses his gifts wisely, Theseus (initially) balances courage with strategy, Heracles learns humility through suffering. Failed heroes overstep: Icarus ignores warnings, Orpheus can\'t trust without seeing, Bellerophon believes success makes him divine. Greek mythology teaches that understanding your limits is more important than raw ability.',
      relatedLearningPoints: ['lp-tragedy-3-warning', 'lp-tragedy-9-doubt', 'lp-epilogue-9d-sophrosyne'],
    },

    // THE LABYRINTH AS METAPHOR
    {
      id: 'q-final-8-labyrinth-meaning',
      question: 'The Labyrinth and the Minotaur function on multiple symbolic levels. Which interpretation is MOST supported by the text?',
      type: 'multiple-choice',
      points: 4,
      options: [
        'It\'s an exciting monster-slaying adventure with no deeper meaning',
        'The Labyrinth represents life\'s complexity; the Minotaur represents civilization\'s hidden sins; Ariadne\'s thread represents guidance',
        'The Labyrinth symbolizes only Minoan architectural achievement',
        'The Minotaur represents natural chaos civilization must dominate',
      ],
      correctAnswer: 'The Labyrinth represents life\'s complexity; the Minotaur represents civilization\'s hidden sins; Ariadne\'s thread represents guidance',
      explanation: 'The myth operates on multiple symbolic levels: The Labyrinth represents life\'s confusing challenges where you need guidance (mentors, wisdom, tools) to navigate. The Minotaur is particularly significant—born from Pasiphaë\'s unnatural union, it represents the monsters created by civilization\'s own sins, then hidden rather than confronted. Theseus doesn\'t just kill a random beast; he confronts the dark secret at the heart of Cretan power. This layered symbolism shows the sophistication of Greek mythological thinking.',
      relatedLearningPoints: ['lp-theseus-11-metaphor', 'lp-theseus-13-symbol'],
    },

    // OATH-BREAKING
    {
      id: 'q-final-9-sacred-oaths',
      question: 'Jason swears by all the gods to never abandon Medea, then breaks this oath. Why is this oath-breaking presented as Jason\'s most catastrophic mistake?',
      type: 'multiple-choice',
      points: 4,
      options: [
        'Medea is a powerful sorceress who can take revenge',
        'Breaking sacred oaths violates cosmic order—it\'s not just betrayal but divine transgression',
        'Divorce was legally prohibited in ancient Greek society',
        'Jason makes a poor strategic calculation about the political consequences',
      ],
      correctAnswer: 'Breaking sacred oaths violates cosmic order—it\'s not just betrayal but divine transgression',
      explanation: 'In Greek culture, oaths sworn by the gods created sacred bonds witnessed by divine powers. Breaking such oaths wasn\'t merely betrayal—it was a violation of cosmic order that demanded divine retribution. Medea sacrificed everything (family, homeland, innocence) based on Jason\'s sacred oath. His oath-breaking transforms her revenge from murder into a form of justice. The gods themselves witness and enforce sacred oaths, making Jason\'s betrayal a cosmic crime, not just a personal failing.',
      relatedLearningPoints: ['lp-jason-8-medea-oath', 'lp-jason-15b-rationalization'],
    },

    // HERO'S JOURNEY PATTERN
    {
      id: 'q-final-10-monomyth',
      question: 'Joseph Campbell identified the Hero\'s Journey pattern from Greek myths. Which hero MOST completely demonstrates all stages: Call to Adventure, Divine Aid, Trials, Transformation, and Return?',
      type: 'multiple-choice',
      points: 4,
      options: [
        'Icarus—his flight represents the complete journey',
        'Perseus—from Medusa quest through trials to transformed return',
        'Jason—despite his failures, he completes every stage of Campbell\'s pattern',
        'Orpheus—his underworld descent demonstrates the pattern perfectly',
      ],
      correctAnswer: 'Perseus—from Medusa quest through trials to transformed return',
      explanation: 'Perseus demonstrates Campbell\'s Hero\'s Journey most completely: The Call (Polydectes\' impossible quest), Supernatural Aid (Athena\'s shield, Hermes\' sandals), Threshold Crossing (leaving Seriphos), Trials and Helpers (Graiae, killing Medusa), The Ordeal (facing the Gorgon), Reward (Medusa\'s head), The Road Back (return journey), and Return and Transformation (using the head to rescue Andromeda and defeat Polydectes). His story became the template for this universal narrative pattern.',
      relatedLearningPoints: ['lp-prologue-9-monomyth', 'lp-perseus-6-call', 'lp-perseus-8-divine-aid'],
    },

    // ANTIHERO COMPARISON
    {
      id: 'q-final-11-antihero',
      question: 'Jason is described as Greek mythology\'s antihero. How does his character arc differ from traditional tragic heroes like Heracles or Theseus?',
      type: 'multiple-choice',
      points: 4,
      options: [
        'Jason is physically weaker and less brave',
        'His downfall comes from external forces beyond his control',
        'He never achieves genuine heroism—his victories come from others, and his character flaws lead to complete ruin',
        'Jason is identical to other heroes but with worse luck',
      ],
      correctAnswer: 'He never achieves genuine heroism—his victories come from others, and his character flaws lead to complete ruin',
      explanation: 'Jason differs from traditional heroes in crucial ways: His "heroic" achievements all come from Medea\'s magic, not his own abilities. His character flaws (pragmatic selfishness, inability to honor those who help him, short-term thinking) aren\'t balanced by heroic virtues. He ends not in tragic glory but pathetic obscurity—killed by debris from his own decaying ship. Unlike Heracles who finds redemption or Theseus who at least achieves kingship, Jason loses everything: wife, children, kingdom, glory, and dies unmourned. He\'s an early example of the flawed protagonist whose character directly causes their destruction.',
      relatedLearningPoints: ['lp-jason-16-antihero', 'lp-jason-9a-pragmatism', 'lp-jason-16-tragedy'],
    },

    // POWER AND RESPONSIBILITY
    {
      id: 'q-final-12-power-corruption',
      question: 'Heracles possesses superhuman strength but kills his family in madness, then struggles with rage throughout his life. What does his story teach about power?',
      type: 'multiple-choice',
      points: 4,
      options: [
        'Power inevitably corrupts everyone who possesses it',
        'Superhuman power in flawed human hands is dangerous—strength without wisdom creates tragedy',
        'Power is morally neutral with no inherent ethical dimension',
        'The gods should never grant mortals special abilities under any circumstances',
      ],
      correctAnswer: 'Superhuman power in flawed human hands is dangerous—strength without wisdom creates tragedy',
      explanation: 'Heracles\'s tragedy demonstrates that power amplifies human flaws rather than eliminating them. His strength makes every angry gesture potentially lethal. He can strangle monsters but also crushes his music teacher in a rage. The Greeks understood 2,400 years ago what modern "Watchmen," "The Boys," and "Logan" explore: superhuman abilities in human hands create tragedy because power without wisdom is destructive. Heracles\'s life shows that the greatest heroes are those who learn to control their power, not those who simply possess it.',
      relatedLearningPoints: ['lp-heracles-7-deconstruction', 'lp-heracles-15-flaws', 'lp-heracles-7-power-danger'],
    },

    // CIVILIZER HERO
    {
      id: 'q-final-13-civilization',
      question: 'Theseus is called a "civilizer hero" who clears roads of bandits and frees Athens from tribute. How does this differ from monster-slaying heroes like Perseus or Heracles?',
      type: 'multiple-choice',
      points: 4,
      options: [
        'There is no meaningful difference—all heroes fight monsters',
        'Civilizer heroes systematically make society safer for ordinary people, not just defeating individual threats',
        'Civilizer heroes are weaker and can only defeat human enemies, not monsters',
        'Only civilizer heroes achieve kingship at the end of their journeys',
      ],
      correctAnswer: 'Civilizer heroes systematically make society safer for ordinary people, not just defeating individual threats',
      explanation: 'The civilizer hero archetype represents a distinct form of heroism. Perseus slays Medusa (one specific threat); Heracles completes assigned labors (personal redemption). But Theseus systematically clears the road to Athens, defeating multiple threats (Periphetes, Sinis, Procrustes) to make travel safe for everyone. He volunteers for the Minotaur tribute to stand with his people, not for personal glory. Civilizer heroes are fundamentally political—they build and protect civilization rather than just demonstrating individual prowess.',
      relatedLearningPoints: ['lp-theseus-2-civilizer', 'lp-theseus-3b-civilizer', 'lp-theseus-5a-leadership'],
    },

    // THRESHOLD MOMENTS
    {
      id: 'q-final-14-threshold-failure',
      question: 'Orpheus fails at the threshold of success when he looks back at Eurydice. What makes "failure at the threshold" particularly tragic?',
      type: 'multiple-choice',
      points: 4,
      options: [
        'It\'s no more tragic than any other type of failure',
        'Proximity to success magnifies tragedy—almost achieving the impossible makes loss infinitely more painful',
        'Threshold failures are actually less tragic since you were close to winning',
        'Starting strong matters more than finishing, so threshold failures are relatively minor disappointments compared to never attempting the challenge at all',
      ],
      correctAnswer: 'Proximity to success magnifies tragedy—almost achieving the impossible makes loss infinitely more painful',
      explanation: 'Orpheus had achieved the impossible—convincing Hades to return a soul from death. He was steps away from the surface when doubt made him turn. This "failure at the moment of victory" is psychologically devastating because it adds "what if?" to grief. The knowledge that success was within reach makes failure unbearable. This pattern appears throughout Greek tragedy and modern storytelling because it captures the cruelest form of loss—not having failed absolutely, but having almost succeeded.',
      relatedLearningPoints: ['lp-tragedy-10-threshold', 'lp-tragedy-9-doubt'],
    },

    // KLEOS AND MORTALITY
    {
      id: 'q-final-15-kleos',
      question: 'Achilles chose a short, glorious life over a long, obscure one. What does the concept of kleos reveal about Greek attitudes toward mortality?',
      type: 'multiple-choice',
      points: 4,
      options: [
        'Greeks believed physical immortality was achievable through proper rituals',
        'Greeks viewed death as absolute evil to be avoided at all costs',
        'Greeks sought immortality through lasting fame—being remembered was a form of defeating death',
        'Greeks had no developed concept of an afterlife or legacy',
      ],
      correctAnswer: 'Greeks sought immortality through lasting fame—being remembered was a form of defeating death',
      explanation: 'Kleos (glory/fame that lives in story) represents the Greek solution to mortality. Since physical immortality is impossible for mortals, they sought immortality through memory—having their names and deeds live forever in songs and tales. Achilles chose to die young but be remembered eternally rather than live long in obscurity. His name echoes 3,000 years later, proving kleos works. This valuing of legacy over longevity shaped Greek heroic culture and influences how we think about meaningful lives today.',
      relatedLearningPoints: ['lp-prologue-5-kleos', 'lp-prologue-6b-cost', 'lp-epilogue-9a-kleos'],
    },

    // ENSEMBLE HEROISM
    {
      id: 'q-final-16-ensemble',
      question: 'The Argonauts represent the first major ensemble quest in Western literature. How does this team structure enable different narrative possibilities than solo heroes?',
      type: 'multiple-choice',
      points: 4,
      options: [
        'Ensemble quests are just solo hero stories with extra characters',
        'Teams enable diverse specialists, role conflicts, and complex interpersonal dynamics',
        'Ensemble quests are easier to write because characters do less individually',
        'Teams appear only in Greek myths, not in modern narratives',
      ],
      correctAnswer: 'Teams enable diverse specialists, role conflicts, and complex interpersonal dynamics',
      explanation: 'The Argonauts pioneered ensemble storytelling: Orpheus provides music/charm, Heracles brings strength, Castor and Pollux offer combat skills, Atalanta provides hunting expertise. This diversity creates new narrative possibilities: specialists for different challenges, interpersonal conflicts, loyalty questions, and the shift from "lone hero" to "leader coordinating diverse talents." This pattern dominates modern storytelling—from Fellowship of the Ring to Avengers to Ocean\'s Eleven. The Argonauts established that team dynamics could be as compelling as individual heroism.',
      relatedLearningPoints: ['lp-jason-4-ensemble', 'lp-jason-4-modern'],
    },

    // TRAGIC STRUCTURE
    {
      id: 'q-final-17-tragic-irony',
      question: 'Heracles dies from Hydra poison he created during his second labor. Jason is killed by his own ship, the Argo. What structural principle do these endings demonstrate?',
      type: 'multiple-choice',
      points: 4,
      options: [
        'Greek heroes die randomly with no connection to their past',
        'Tragic irony—heroes are destroyed by their own past victories',
        'All heroes die identically regardless of their individual stories',
        'Death serves as punishment for specific crimes in every case',
      ],
      correctAnswer: 'Tragic irony—heroes are destroyed by their own past victories',
      explanation: 'Greek tragedy loves causally complete circles: Heracles\'s second labor (Hydra) creates the poison that kills him through Nessus. Jason\'s greatest triumph (the Argo) becomes literally what crushes him as a broken, forgotten man. This isn\'t coincidence—it\'s tragic irony. Past victories contain seeds of future destruction. This demonstrates the Greek understanding of inevitable consequence and the interconnection of all actions. What makes you successful can become what destroys you. This pattern appears throughout sophisticated tragedy, ancient and modern.',
      relatedLearningPoints: ['lp-heracles-11-poison', 'lp-jason-16-tragedy', 'lp-heracles-12-irony'],
    },

    // MODERN ARCHETYPES
    {
      id: 'q-final-18-archetypes',
      question: 'Athena (wise mentor), Medusa (victim transformed into monster), the Minotaur (the beast created by civilization\'s sins), and Hera (the antagonist who persecutes the hero) are archetypes that appear in modern stories. Why do these character types persist across cultures and centuries?',
      type: 'multiple-choice',
      points: 4,
      options: [
        'Modern writers lack creativity and simply copy Greek myths',
        'These archetypes reflect universal patterns in the human psyche',
        'Greek military conquest spread these character types to all civilizations',
        'Film studios contractually require these character types in every production',
      ],
      correctAnswer: 'These archetypes reflect universal patterns in the human psyche',
      explanation: 'As Carl Jung argued, archetypes aren\'t just literary devices—they\'re fundamental patterns in the human unconscious. The Mentor (Athena, Dumbledore, Obi-Wan) represents wisdom and guidance we seek. The Tragic Monster (Medusa, the Minotaur, Gollum) represents how victims can become threats. The Antagonist (Hera, jealous stepmothers, persecutors) represents forces that test heroes. These recur because they reflect how humans psychologically experience life\'s challenges. Greek myths identified these patterns first, and they persist because human psychology hasn\'t fundamentally changed.',
      relatedLearningPoints: ['lp-epilogue-6-archetypes', 'lp-epilogue-6-psychology', 'lp-epilogue-11-recognition'],
    },

    // CONTEMPORARY RELEVANCE
    {
      id: 'q-final-19-relevance',
      question: 'Modern retellings like "The Hunger Games" (Theseus tribute), "Percy Jackson" (divine parentage), and "Black Panther" (chosen one) adapt Greek patterns. Why do these 2,500-year-old structures still resonate with contemporary audiences?',
      type: 'multiple-choice',
      points: 4,
      options: [
        'People are nostalgic for ancient Greece',
        'These patterns address fundamental human experiences that transcend historical periods',
        'Modern audiences have become less sophisticated over time',
        'The entertainment industry forces writers to use these patterns',
      ],
      correctAnswer: 'These patterns address fundamental human experiences that transcend historical periods',
      explanation: 'Greek heroic patterns persist because they encode universal human experiences: the anxiety of facing overwhelming challenges (Perseus vs. Medusa = Katniss vs. the Capitol), the search for identity and belonging (demigod heritage = any coming-of-age discovery), the burden of inherited responsibility. While specific details change (arrows to laser swords, gods to Force), the emotional core remains because human psychology and fundamental life questions haven\'t changed. Greek myths identified narrative structures that reflect how humans experience growth, challenge, and transformation.',
      relatedLearningPoints: ['lp-epilogue-3-universality', 'lp-epilogue-4-adaptation', 'lp-epilogue-10-mortality'],
    },

    // SELF-ASSESSMENT SYNTHESIS QUESTION
    {
      id: 'q-final-20-self-assessment',
      question: 'You\'ve now completed your journey through Greek mythology. In your own words, what eternal question do all these myths—Perseus, Theseus, Jason, Heracles, Icarus, Orpheus—collectively explore? Write 2-3 sentences explaining the deepest theme that connects these stories across centuries.',
      type: 'self-assessment',
      points: 20,
      modelAnswer: 'All these myths explore the question: What makes a life meaningful in the face of mortality? Every hero faces death but seeks to transcend it through meaningful action—Perseus through protecting others, Theseus through building civilization, Jason through legacy (which he loses through betrayal), Heracles through transforming suffering into redemption, and Icarus and Orpheus through attempting the impossible. Given that we all die, these stories ask what makes the time we have matter—which is why they still resonate 2,500 years later.',
      explanation: 'This is the ultimate synthesis: Every hero faces mortality but seeks to transcend it through meaningful action. Perseus seeks significance through protecting others. Theseus through building civilization. Jason seeks legacy but loses it through betrayal. Heracles transforms suffering into redemption. Icarus and Orpheus fail but are remembered for attempting the impossible. Achilles chose glory over longevity. All these stories ask: Given that we die, what makes the time we have matter? This is why 2,500-year-old myths still resonate—we\'re still asking the same question about how to live meaningfully in the shadow of death.',
      relatedLearningPoints: ['lp-prologue-5-kleos', 'lp-epilogue-10-mortality', 'lp-epilogue-12-eternal', 'lp-prologue-6b-cost'],
      assessmentCriteria: [
        {
          id: 'criterion-mortality',
          text: 'I mentioned that the myths deal with mortality, death, or the limited nature of human life',
          points: 5,
        },
        {
          id: 'criterion-meaning',
          text: 'I discussed the search for meaning, purpose, legacy, or significance in life',
          points: 5,
        },
        {
          id: 'criterion-examples',
          text: 'I referenced specific heroes and how they pursued meaning (e.g., Perseus protecting others, Heracles seeking redemption, Achilles choosing glory)',
          points: 5,
        },
        {
          id: 'criterion-universality',
          text: 'I explained why these ancient stories still matter today—because we face the same fundamental questions',
          points: 5,
        },
      ],
    },
  ],
};

import type { Chapter } from '../../../types';
import { chapter3Quiz } from '../quizzes/chapter-3-quiz';

/**
 * Chapter 3: The City of Dis (VI-VII)
 *
 * Lower Hell begins with the fortified City of Dis.
 * Circles Six (heresy) and Seven (violence) with strong
 * connections to Florentine politics.
 */
export const chapter3: Chapter = {
  id: 'inferno-chapter-3',
  title: 'Chapter 3: The City of Dis',
  description: 'Enter Lower Hell through the burning City of Dis, encountering heretics and the violent.',

  learningObjectives: [
    'Understand Florentine political history and its impact on Dante',
    'Recognize how Dante used poetry for political commentary',
    'Analyze medieval concepts of heresy and violence',
    'Explore the structure of Lower Hell',
  ],

  scenes: [
    // Scene 1: The Gates of Dis
    {
      id: 'scene-1-gates-of-dis',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/547bf481-1989-4184-9733-d6173be62752/0_0.png',
      content: `You and Virgil approach a massive iron wall rising from the infernal landscape. This is the City of Dis—the fortress of Lower Hell.

At the gates, a horde of demons blocks your path. Their faces are twisted with malice, their bodies wreathed in flames.

Virgil steps forward confidently. "We are on a journey decreed by Heaven. Let us pass."

But the demons laugh mockingly and slam the massive gates shut with a thunderous crash. For the first time in your journey, you see uncertainty flicker across Virgil's face.

"Master, what do we do?" you ask, fear creeping into your voice.

Virgil's expression is grave. "We wait. Reason alone cannot open these gates. We need divine help."`,
      learningPoints: [
        {
          id: 'lp-ch3-1',
          content: 'The walls of Dis separate Upper and Lower Hell. Beyond lie sins of malice (intentional evil) rather than weakness.',
          category: 'plot-structure',
        },
        {
          id: 'lp-ch3-2',
          content: "Virgil's failure shows reason's limits. Some barriers require divine intervention—foreshadowing grace's necessity.",
          category: 'thematic-analysis',
        },
      ],
    },

    // Scene 2: The Three Furies and Medusa
    {
      id: 'scene-2-furies-medusa',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/bec28588-9e69-4a32-a28f-5b9357cbfd71/0_0.png',
      content: `Atop the iron walls, three horrifying figures appear. They are the Furies—ancient spirits of vengeance with serpents writhing in their hair and blood streaming from their eyes.

"Look!" they shriek, "It's Dante! Call Medusa to turn him to stone!"

"Cover your eyes!" Virgil commands urgently, placing his hands over your face. "If you look upon Medusa, you will be petrified forever—trapped in despair!"

Just as terror threatens to overwhelm you, a brilliant light pierces the darkness. A divine messenger arrives, walking calmly across the burning landscape. With a simple gesture of his wand, the gates of Dis swing open.

The demons scatter in terror, and the messenger departs without a word.

"Come," says Virgil, his confidence restored. "Divine will has opened the way. Let us continue."`,
      inlineAnnotations: [
        {
          id: 'furies',
          text: 'Furies',
          tooltip: {
            title: 'The Furies of Greek Mythology',
            content: 'The Furies (Alecto, Megaera, and Tisiphone) were ancient Greek goddesses of vengeance who punished those guilty of crimes. They appear with serpents in their hair, similar to Medusa, and represent the torment of guilt and the pursuit of justice.',
            category: 'historical-context',
          },
        },
        {
          id: 'medusa',
          text: 'Medusa',
          tooltip: {
            title: 'The Gorgon Who Turns to Stone',
            content: 'Medusa was a Gorgon in Greek mythology whose gaze turned anyone who looked at her into stone. In Dante\'s allegory, she represents paralyzing despair—the spiritual death that prevents souls from seeking salvation.',
            category: 'literary-technique',
          },
        },
      ],
      learningPoints: [
        {
          id: 'lp-ch3-3',
          content: 'The Furies (Alecto, Megaera, Tisiphone) personify guilt and vengeance in Greek myth. Dante uses them as guardians of Lower Hell.',
          category: 'historical-context',
        },
        {
          id: 'lp-ch3-4',
          content: 'Medusa (turns viewers to stone) represents paralyzing despair. Virgil protects Dante—reason shields against spiritual petrification.',
          category: 'literary-technique',
        },
        {
          id: 'lp-ch3-5',
          content: "The divine messenger represents God's direct intervention when human effort fails. Grace breaks what reason cannot.",
          category: 'thematic-analysis',
        },
      ],
    },

    // Scene 3: Entering Circle VI - The Heretics
    {
      id: 'scene-3-circle-six-heretics',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/2e2f07b8-8ff9-4d98-91d0-d10c94d12e4d/0_0.png',
      content: `Beyond the gates of Dis stretches a vast plain covered with countless stone tombs. Unlike the marble monuments of the living world, these are iron sepulchers, and from each one pours a constant stream of flames.

The lids are half-open, and you can see the tortured souls within, burning for eternity. Their screams echo across the desolate landscape.

"Who are these souls?" you ask.

"These are the heretics," Virgil explains. "In life, they denied the soul's immortality. They believed death was the end—that there was nothing after."

You look at the burning tombs with a mixture of horror and irony. "So those who denied eternal life now experience it... as eternal torment. And the flames..."

"Mirror their earthly punishment," Virgil completes your thought. "In your world, the Church burns heretics at the stake—the Inquisition's way of purging corruption. Here in Hell, those fires burn eternally."

"Precisely," Virgil nods. "This is the contrapasso—the punishment fits the crime. They rejected the afterlife, so they suffer in it forever. They burned in life, they burn in death."`,
      learningPoints: [
        {
          id: 'lp-ch3-6',
          content: "Heretics denied the soul's immortality. Their punishment: Trapped in burning tombs, they experience the eternal existence they denied.",
          category: 'thematic-analysis',
        },
        {
          id: 'lp-ch3-7',
          content: 'Medieval heresy primarily meant theological dissent (Epicureans, Cathars, etc.). Dante focuses on materialists who rejected afterlife.',
          category: 'historical-context',
        },
      ],
    },

    // Scene 4: What is Heresy? (Primary Source)
    {
      id: 'scene-4-heresy-source',
      type: 'primary-source',
      backgroundImage: 'https://cdn.midjourney.com/2e2f07b8-8ff9-4d98-91d0-d10c94d12e4d/0_0.png',
      prompt: 'Analyze this medieval definition of heresy',
      source: {
        title: 'Summa Theologica, Question on Heresy',
        author: 'Thomas Aquinas',
        date: '1265-1274',
        type: 'text',
        content: `Heresy is a species of unbelief, belonging to those who profess the Christian faith but corrupt its dogmas.

The heretic who disbelieves one article of faith has no faith at all, for faith consists in submission to divine revelation. To pick and choose what to believe is to substitute one's own judgment for God's authority.

Therefore, the heretic is more dangerous than the unbeliever. The pagan who never knew Christ's truth may be forgiven in ignorance. But the heretic who twists divine truth from within the Church spreads corruption like a disease through the faithful.`,
        citation: 'Summa Theologica II-II, Q. 11, Arts. 1-2 (adapted)',
      },
      questions: [
        {
          id: 'q1',
          question: 'According to Aquinas, why was heresy considered worse than non-belief?',
          type: 'multiple-choice',
          options: [
            'Because heretics were more numerous than non-believers',
            'Because heretics corrupted Christianity from within, threatening the Church',
            'Because heretics were always violent and dangerous',
            'Because heretics denied God completely',
          ],
          correctAnswer: 'Because heretics corrupted Christianity from within, threatening the Church',
          explanation: "Non-Christians were outside the faith. Heretics were insiders spreading false doctrine—seen as more dangerous because they corrupted believers from within.",
        },
        {
          id: 'q2',
          question: 'What punishment did heretics face in medieval life?',
          type: 'multiple-choice',
          options: [
            'Excommunication only',
            'Imprisonment in monasteries',
            'Execution by burning',
            'Banishment from Christian lands',
          ],
          correctAnswer: 'Execution by burning',
          explanation: "The Inquisition burned heretics alive at the stake. Dante mirrors this earthly punishment with eternal burning tombs in Hell.",
        },
      ],
      learningPoints: [
        {
          id: 'lp-ch3-8',
          content: 'Medieval Christianity tolerated non-believers but harshly punished heretics. Internal dissent threatened Church power.',
          category: 'historical-context',
        },
        {
          id: 'lp-ch3-9',
          content: 'The Inquisition (founded 1231) sought out heretics. Dante lived during its peak—heresy trials were common in Florence.',
          category: 'historical-context',
        },
      ],
    },

    // Scene 5: Meeting Farinata (Introduction)
    {
      id: 'scene-5-farinata-intro',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/2e2f07b8-8ff9-4d98-91d0-d10c94d12e4d/0_0.png',
      image: 'https://cdn.midjourney.com/be1ed248-8055-40bd-b794-39b6bc2d14a5/0_0.png',
      content: `As you walk among the burning tombs, a deep voice calls out from one of the sepulchers.

"You there! A living soul walking through Hell—and a Florentine by your accent. Stop a moment!"

You turn to see a figure rising from one of the flaming tombs. Despite the flames surrounding him, he stands with proud, defiant dignity—chest out, chin raised, utterly unbowed by his torment.

This is no ordinary damned soul. His bearing suggests nobility, command, a man who refused to bend even in life.

"I know that voice," Virgil whispers to you. "Farinata degli Uberti—the great Ghibelline leader who nearly destroyed your family's political faction."

Your blood runs cold. The Uberti and your family were bitter enemies. Farinata led the pro-Emperor party that defeated the pro-Pope Guelphs—your party—in a devastating battle decades ago. The Arbia river ran red with Guelph blood that day.

Yet here he stands, not cowering, but regarding you with aristocratic interest—a political enemy meeting face to face in the afterlife.`,
      learningPoints: [
        {
          id: 'lp-ch3-9a',
          content: 'Florence was torn by civil war between Guelphs (pro-Pope) and Ghibellines (pro-Emperor). Dante was a Guelph; Farinata led the Ghibellines.',
          category: 'historical-context',
        },
        {
          id: 'lp-ch3-9b',
          content: 'The Battle of Montaperti (1260) saw Ghibellines crush the Guelphs. This political trauma haunted Florence for generations.',
          category: 'historical-context',
        },
      ],
    },

    // Scene 6: Farinata degli Uberti (Dialogue)
    {
      id: 'scene-6-farinata-dialogue',
      type: 'dialogue',
      backgroundImage: 'https://cdn.midjourney.com/2e2f07b8-8ff9-4d98-91d0-d10c94d12e4d/0_0.png',
      image: 'https://cdn.midjourney.com/be1ed248-8055-40bd-b794-39b6bc2d14a5/0_0.png',
      character: {
        id: 'farinata',
        name: 'Farinata degli Uberti',
        portrait: 'https://cdn.midjourney.com/6e08ecbc-1ef4-41db-87ec-cd5f61a19b50/0_0.png',
        description: 'Ghibelline leader of Florence (c. 1212-1264), Epicurean heretic',
      },
      dialogueTree: {
        id: 'node-1',
        speaker: 'farinata',
        text: "So, a living Florentine walks through Hell. Tell me—who were your ancestors? What family do you come from?",
        responses: [
          {
            id: 'response-my-family',
            text: 'I am a Guelph—your enemy',
            nextNodeId: 'node-2',
            learningPoints: [
              {
                id: 'lp-ch3-10',
                content: 'Farinata led the Ghibellines (pro-Emperor) who defeated Dante\'s Guelphs (pro-Pope) at Montaperti (1260). Political enemies meeting in Hell.',
                category: 'historical-context',
              },
            ],
          },
          {
            id: 'response-why-hell',
            text: 'Why are YOU in Hell?',
            nextNodeId: 'node-3',
            learningPoints: [
              {
                id: 'lp-ch3-11',
                content: 'Farinata was an Epicurean—believing death ends existence. This philosophical heresy (not his political deeds) damns him.',
                category: 'thematic-analysis',
              },
            ],
          },
          {
            id: 'response-battle',
            text: 'You slaughtered my political allies at Montaperti!',
            nextNodeId: 'node-4',
            learningPoints: [
              {
                id: 'lp-ch3-12',
                content: 'After victory at Montaperti, Farinata saved Florence from destruction—even though the city was his enemy\'s stronghold.',
                category: 'character-analysis',
              },
            ],
          },
        ],
        allNodes: [
          {
            id: 'node-2',
            speaker: 'farinata',
            text: 'Ah, a Guelph. I should have known from your bearing. Yes, I am Farinata degli Uberti—the man who led the Ghibelline forces to victory at Montaperti. We crushed your faction that day. The Arbia river ran red.',
            nextNodeId: 'node-5',
          },
          {
            id: 'node-3',
            speaker: 'farinata',
            text: 'I am here for heresy, not politics. I believed as the Epicureans did—that the soul dies with the body, that death is the end. I was wrong, obviously. But I lived with honor and courage. I do not regret that.',
            nextNodeId: 'node-5',
          },
          {
            id: 'node-4',
            speaker: 'farinata',
            text: 'Yes, we defeated you utterly. Twice I drove the Guelphs from Florence. But hear this—when my Ghibelline allies wanted to burn Florence to the ground after our victory, I alone stood against them. I saved your city. Remember that when you curse my name.',
            nextNodeId: 'node-5',
          },
          {
            id: 'node-5',
            speaker: 'farinata',
            text: 'But tell me—what has become of my family? The Uberti were the greatest house in Florence. Are we still exiled from our own city? Do the Guelphs still punish my descendants for my victories?',
            responses: [
              {
                id: 'response-yes-exiled',
                text: 'Yes, your family remains in exile',
                nextNodeId: 'node-6',
              },
              {
                id: 'response-vengeance',
                text: 'The Guelphs will never forgive Montaperti',
                nextNodeId: 'node-6',
              },
            ],
          },
          {
            id: 'node-6',
            speaker: 'farinata',
            text: 'Still exiled... After all these years. That news weighs on me far more than these flames. I conquered armies, ruled Florence, commanded thousands. But I could not secure my family\'s future. That failure burns deeper than any hellfire.',
            nextNodeId: 'node-7',
          },
          {
            id: 'node-7',
            speaker: 'virgil',
            text: 'Come, Dante. We must continue. This soul will stand here, proud and unbroken, until Judgment Day—caring more about his family\'s earthly fate than his own eternal torment.',
            isEnd: true,
            learningPoints: [
              {
                id: 'lp-ch3-14',
                content: 'Farinata maintains dignified pride even in Hell. His concern for Florence and family (not his own suffering) shows noble character despite damnation.',
                category: 'character-analysis',
              },
              {
                id: 'lp-ch3-15',
                content: "Dante's encounter with Farinata is deeply personal—a political enemy portrayed with respect. Good people can be damned for wrong beliefs.",
                category: 'thematic-analysis',
              },
            ],
          },
        ],
      },
      learningPoints: [],
    },

    // Scene 7: Circle VII Structure (Map Exploration)
    {
      id: 'scene-7-circle-seven-map',
      type: 'map-exploration',
      backgroundImage: 'https://cdn.midjourney.com/07e5160b-272a-404f-8537-9909c6b91cfc/0_0.png',
      mapImage: 'https://cdn.midjourney.com/fca20967-e8d7-4378-b871-f52359611b8e/0_0.png',
      prompt: 'Explore the structure of Circle VII and its three rings of violence',
      locations: [
        {
          id: 'steep-descent',
          name: 'The Steep Descent',
          x: 50,
          y: 20,
          content: `The cliff descending to Circle VII is treacherous and steep. A massive landslide, caused by the earthquake at Christ's death, provides rough stairs down into the abyss.

Even the landscape of Hell felt the crucifixion—rocks broken, paths shattered. This descent marks your entry into the realm of violence.`,
          learningPoints: [
            {
              id: 'lp-ch3-16',
              content: "The landscape changed when Christ died—earthquakes broke Hell's structure. Even Hell felt Christ's crucifixion.",
              category: 'thematic-analysis',
            },
          ],
        },
        {
          id: 'phlegethon',
          name: 'The Phlegethon (River of Blood)',
          x: 50,
          y: 45,
          content: `Ring 1: The Phlegethon, a river of boiling blood. Those who were violent against their neighbors—murderers, tyrants, warriors—are submerged based on the severity of their crimes.

Tyrants who caused mass death are submerged up to their eyebrows. Common murderers stand chest-deep. All burn in the blood they spilled.`,
          learningPoints: [
            {
              id: 'lp-ch3-17',
              content: 'The Phlegethon (from Greek mythology) is a river of boiling blood. Violent souls immersed based on sin—tyrants up to eyebrows, murderers to chin.',
              category: 'literary-technique',
            },
          ],
        },
        {
          id: 'wood-suicides',
          name: 'The Bleeding Trees (Wood of Suicides)',
          x: 30,
          y: 65,
          content: `Ring 2: A dark, twisted forest where suicides are transformed into gnarled trees. They rejected their God-given bodies, so they are denied human form.

When the branches break, they bleed and scream. Harpies nest in the branches, constantly tearing at the leaves, causing eternal pain.`,
          learningPoints: [
            {
              id: 'lp-ch3-18',
              content: 'Suicides rejected their God-given bodies. Punishment: Denied human form, trapped as trees. When they speak, they bleed.',
              category: 'thematic-analysis',
            },
          ],
        },
        {
          id: 'burning-sand',
          name: 'The Burning Sand',
          x: 70,
          y: 65,
          content: `Ring 3: An endless desert of burning sand beneath a rain of fire. Three groups suffer here: blasphemers lying on their backs, sodomites running endlessly, and usurers sitting hunched over their money purses.

All three committed violence against God—either by rejecting Him directly or by perverting His natural order.`,
          learningPoints: [
            {
              id: 'lp-ch3-19',
              content: 'Violence against God includes blasphemy (rejecting God), sodomy (violating natural law), and usury (violating nature\'s productivity).',
              category: 'historical-context',
            },
          ],
        },
        {
          id: 'centaurs-patrol',
          name: "The Centaurs' Patrol",
          x: 40,
          y: 50,
          content: `Centaurs armed with bows and arrows patrol the banks of the Phlegethon. If any soul tries to rise higher from the blood than their sin allows, the centaurs shoot them back down.

These half-human, half-horse creatures perfectly symbolize violence—the rational mind enslaved to bestial passion.`,
          learningPoints: [
            {
              id: 'lp-ch3-20',
              content: "Centaurs (half-human, half-horse) symbolize violence's dual nature—rational mind (human) serving bestial passion (horse).",
              category: 'literary-technique',
            },
          ],
        },
        {
          id: 'three-heads',
          name: 'The Three Heads of Violence',
          x: 50,
          y: 80,
          content: `This diagram shows Dante's philosophical organization of Circle VII:

Ring 1: Violence Against Neighbors (murder, warfare, tyranny)
Ring 2: Violence Against Self (suicide, squandering)
Ring 3: Violence Against God (blasphemy, sodomy, usury)

Each category moves from harming others, to harming oneself, to offending the Divine—increasing in spiritual severity.`,
          learningPoints: [
            {
              id: 'lp-ch3-21',
              content: 'Dante organizes violence philosophically: against others, self, or God. Medieval ethics saw all three as violations of love.',
              category: 'plot-structure',
            },
          ],
        },
      ],
      requiredLocations: ['steep-descent', 'phlegethon'],
      learningPoints: [],
    },

    // Scene 8: The Tyrants in Blood
    {
      id: 'scene-8-tyrants-blood',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/faf352d5-fe97-4d87-b05e-cf28c5365e00/0_0.png',
      image: '/Imsie/assets/dantes-inferno/scenes/centaurs.jpg',
      content: `Nessus, one of the centaurs, carries you across the Phlegethon on his back. As you traverse the boiling river of blood, he points out the damned souls.

"There," he gestures with his arrow, "submerged to his eyebrows—that is Alexander the Great, whose wars drowned the world in blood."

"And there, Attila the Hun, the Scourge of God, who devastated entire nations."

"Closer to the shore, less deeply immersed, you see Ezzelino da Romano—a tyrant of your own time, known for his cruelty throughout Italy."

The river levels are precise. Each tyrant's immersion matches the depth of blood they caused to flow. The greater the massacre, the deeper the suffering.

You realize with horror: the blood they spilled in life becomes their eternal prison in death.`,
      learningPoints: [
        {
          id: 'lp-ch3-22',
          content: 'Alexander the Great appears in medieval legend as a bloodthirsty conqueror. Dante follows popular tradition, not historical accuracy.',
          category: 'historical-context',
        },
        {
          id: 'lp-ch3-23',
          content: 'Ezzelino da Romano (1194-1259) was a contemporary tyrant known for extreme cruelty. Dante places recent figures alongside mythical ones—showing sin as timeless.',
          category: 'historical-context',
        },
      ],
    },

    // Scene 9: The Forest of Suicides
    {
      id: 'scene-9-forest-suicides',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/73afefad-1746-4fda-9a5c-d925e8b39295/0_0.png',
      image: 'https://cdn.midjourney.com/84f546b1-9c8d-4227-b13c-9779174fa840/0_0.png',
      content: `Leaving the river of blood, you enter a strange forest. The trees here are unlike any in the living world—twisted, gnarled, with dark bark and no green leaves. Thorns cover every branch.

Horrible bird-like creatures with women's faces—Harpies—nest in the branches, their mournful cries filling the air.

"Break a twig," Virgil instructs you quietly.

Hesitantly, you snap a small branch from the nearest tree.

Blood pours from the wound, and the tree shrieks in agony: "Why do you tear me? Have you no pity?"

You stumble backward in horror. These are not trees—they are human souls, transformed and trapped.

The voice continues, anguished: "We were once human. We took our own lives, rejecting the gift of our bodies. Now we can never have human form again. We destroyed ourselves, so we remain broken forever."`,
      learningPoints: [
        {
          id: 'lp-ch3-24',
          content: "The bleeding trees are one of Dante's most memorable images. Medieval Christianity condemned suicide as rejecting God's gift of life.",
          category: 'literary-technique',
        },
        {
          id: 'lp-ch3-25',
          content: 'At Judgment Day, suicides will retrieve their bodies but never wear them—hanging on their own trees forever. They chose death, so cannot have full resurrection.',
          category: 'thematic-analysis',
        },
      ],
    },

    // Scene 10: Pier della Vigna (Dialogue)
    {
      id: 'scene-10-pier-dialogue',
      type: 'dialogue',
      backgroundImage: 'https://cdn.midjourney.com/73afefad-1746-4fda-9a5c-d925e8b39295/0_0.png',
      character: {
        id: 'pier-della-vigna',
        name: 'Pier della Vigna',
        portrait: 'https://cdn.midjourney.com/67895e04-0bd8-4040-a2b6-a280c4379de2/0_0.png',
        description: 'Chancellor to Emperor Frederick II (c. 1190-1249), falsely accused and imprisoned, died by suicide',
      },
      dialogueTree: {
        id: 'node-1',
        speaker: 'pier-della-vigna',
        text: 'I am he who held both keys to Frederick\'s heart, locking and unlocking so softly that I kept almost everyone from his secrets. I was his most faithful servant.',
        responses: [
          {
            id: 'response-what-brought',
            text: 'What brought you to this place?',
            nextNodeId: 'node-2',
            learningPoints: [
              {
                id: 'lp-ch3-26',
                content: "Pier was Frederick II's most trusted advisor. False accusations of betrayal led to his imprisonment. He killed himself to escape shame.",
                category: 'historical-context',
              },
            ],
          },
          {
            id: 'response-why-harsh',
            text: 'Why are suicides punished so harshly?',
            nextNodeId: 'node-3',
            learningPoints: [
              {
                id: 'lp-ch3-27',
                content: "Suicide was seen as ultimate despair—losing faith in God's mercy. It combines violence with rejection of divine providence.",
                category: 'thematic-analysis',
              },
            ],
          },
          {
            id: 'response-regret',
            text: 'Do you regret your choice?',
            nextNodeId: 'node-4',
            learningPoints: [
              {
                id: 'lp-ch3-28',
                content: 'Pier killed himself to preserve honor (medieval value). Yet honor meant nothing compared to the sin of self-murder.',
                category: 'character-analysis',
              },
            ],
          },
        ],
        allNodes: [
          {
            id: 'node-2',
            speaker: 'pier-della-vigna',
            text: 'Envy—the harlot vice of courts—inflamed all minds against me. False accusations of betrayal reached the Emperor. He believed them. I, who had never been anything but faithful, was imprisoned and blinded. To escape the shame, I made myself unjust against my just self.',
            nextNodeId: 'node-5',
          },
          {
            id: 'node-3',
            speaker: 'pier-della-vigna',
            text: 'Because we were violent against ourselves. God gave us life and body as gifts—we had no right to destroy them. To take one\'s own life is to despair of God\'s mercy, to say that no redemption is possible. It is the ultimate rejection of hope.',
            nextNodeId: 'node-5',
          },
          {
            id: 'node-4',
            speaker: 'pier-della-vigna',
            text: 'I thought I was preserving my honor by choosing death over disgrace. But what is honor compared to eternal damnation? I traded momentary shame for everlasting suffering. If I could speak to those who contemplate the same path, I would beg them: endure, have faith, do not despair.',
            nextNodeId: 'node-5',
          },
          {
            id: 'node-5',
            speaker: 'pier-della-vigna',
            text: 'When Judgment Day comes, we suicides will retrieve our bodies like all the dead. But we will never wear them again. We will hang our corpses on our own branches—eternally separated from the human form we rejected. We chose death, so we cannot have full resurrection.',
            isEnd: true,
            learningPoints: [
              {
                id: 'lp-ch3-29',
                content: "Pier's eloquent speech mirrors his reputation as master rhetorician. Even in Hell, his verbal skill persists.",
                category: 'literary-technique',
              },
            ],
          },
        ],
      },
      learningPoints: [],
    },

    // Scene 11: The Burning Sand - Blasphemers
    {
      id: 'scene-11-burning-sand',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/c62e14c6-52a9-408a-a59b-170954564876/0_0.png',
      content: `Leaving the dark forest, you emerge onto an endless plain of burning sand. The sky above rains fire—not like lightning, quick and fierce, but like snow, slow and relentless. Every flake is flame.

Three groups of souls suffer on this scorching desert:

Some lie flat on their backs, faces turned upward to receive the fire. These are the blasphemers—those who cursed God directly.

Others run in endless circles across the burning sand, never resting. These are the sodomites—those who violated the natural order.

A final group sits hunched over, clutching purses around their necks, weighed down by their gold.

"And those?" you ask, pointing to the hunched figures.

"Usurers," Virgil says with disgust. "Moneylenders who grew rich by charging interest."

You nod, understanding. God designed nature to be productive—farmers plant seeds that grow into crops, shepherds tend flocks that multiply, craftsmen labor to create goods. Honest work produces wealth through natural increase.

But money itself is dead metal. Coins do not grow or multiply on their own. When a usurer lends ten coins and demands twelve back, where do those extra two come from? Not from labor, not from nature's increase—they come from time alone. The usurer makes barren gold reproduce as if it were a living thing, which perverts the natural order God created.

"They tried to make sterile metal bear fruit," Virgil continues. "Now they sit on sterile sand, clutching their precious gold—which here in Hell is utterly worthless."`,
      learningPoints: [
        {
          id: 'lp-ch3-30',
          content: "The burning sand reverses God's Creation. Instead of life-giving rain, fire falls. Instead of fertile earth, sterile desert.",
          category: 'literary-technique',
        },
        {
          id: 'lp-ch3-31',
          content: 'Usury (charging interest on loans) was seen as violence against God. Medieval thought: money is sterile, so making it "reproduce" through interest perverts nature.',
          category: 'historical-context',
        },
      ],
    },

    // Scene 12: Capaneus the Blasphemer (Dialogue)
    {
      id: 'scene-12-capaneus-dialogue',
      type: 'dialogue',
      backgroundImage: 'https://cdn.midjourney.com/c62e14c6-52a9-408a-a59b-170954564876/0_0.png',
      character: {
        id: 'capaneus',
        name: 'Capaneus',
        portrait: 'https://cdn.midjourney.com/0e9dae60-3fd7-4e65-847f-136c8ca32356/0_0.png',
        description: 'Greek warrior from the Seven Against Thebes, struck by Zeus for blasphemy',
      },
      dialogueTree: {
        id: 'node-1',
        speaker: 'capaneus',
        text: 'What I was in life, I am in death! Though Zeus weary his blacksmith Vulcan and beg the others for thunderbolts, he shall not have glad vengeance on me! Let him hurl his fires—I do not fear him!',
        responses: [
          {
            id: 'response-why-rage',
            text: 'Why do you rage against God?',
            nextNodeId: 'node-2',
            learningPoints: [
              {
                id: 'lp-ch3-32',
                content: 'Capaneus besieged Thebes and blasphemed Zeus, who killed him with lightning. His eternal defiance shows impenitence—the core trait of the damned.',
                category: 'character-analysis',
              },
            ],
          },
          {
            id: 'response-punishment-light',
            text: 'Your punishment seems no worse than others here',
            nextNodeId: 'node-3',
            learningPoints: [
              {
                id: 'lp-ch3-33',
                content: "Virgil says Capaneus's greatest torment is his own rage—'his pride is its own fit punishment.' Internal suffering exceeds external.",
                category: 'thematic-analysis',
              },
            ],
          },
        ],
        allNodes: [
          {
            id: 'node-2',
            speaker: 'capaneus',
            text: 'I defied the gods in life, and I defy them in death! When I besieged Thebes, I shouted that even Zeus could not stop me. He struck me with lightning, but even that did not break my will. I remain unbowed!',
            nextNodeId: 'node-4',
          },
          {
            id: 'node-3',
            speaker: 'virgil',
            text: 'O Capaneus, your unbridled arrogance makes you suffer more! No torment but your own fury would be adequate pain for your rage. Your pride is its own fit punishment.',
            nextNodeId: 'node-4',
          },
          {
            id: 'node-4',
            speaker: 'virgil',
            text: 'Come, Dante. Do not speak with him further. The unrepentant suffer most from their own unchanged character. Hell does not reform—it freezes souls in their sins eternally.',
            isEnd: true,
            learningPoints: [
              {
                id: 'lp-ch3-34',
                content: 'The unrepentant suffer most from their own unchanged character. Hell doesn\'t reform—it freezes souls in their sins eternally.',
                category: 'thematic-analysis',
              },
            ],
          },
        ],
      },
      learningPoints: [],
    },

    // Scene 13: Understanding Violence (Cause-Effect)
    {
      id: 'scene-13-understanding-violence',
      type: 'cause-effect',
      backgroundImage: 'https://cdn.midjourney.com/07e5160b-272a-404f-8537-9909c6b91cfc/0_0.png',
      prompt: 'Match each type of violence to its contrapasso (fitting punishment)',
      pairs: [
        {
          id: 'pair-1',
          cause: 'Violence against neighbors: Murder, warfare, tyranny',
          effect: 'Immersed in boiling blood (Phlegethon) based on severity',
          explanation: 'They spilled others\' blood, so drown in boiling blood. Tyrants who caused mass death submerged deepest.',
        },
        {
          id: 'pair-2',
          cause: "Violence against self: Suicide, squandering one's goods",
          effect: 'Transformed into bleeding trees, denied human form',
          explanation: 'They rejected their God-given bodies. Punishment: They can\'t have human form. When they speak/break, they bleed.',
        },
        {
          id: 'pair-3',
          cause: 'Violence against God: Blasphemy (rejecting God directly)',
          effect: 'Lying on burning sand, fire raining down',
          explanation: 'Blasphemers face God\'s wrath directly—lying on backs, unable to escape the rain of divine fire.',
        },
        {
          id: 'pair-4',
          cause: 'Violence against God: Sodomy (violating natural law)',
          effect: 'Running endlessly across burning sand',
          explanation: 'Active violation of nature requires restless punishment—constant motion without purpose or rest.',
        },
        {
          id: 'pair-5',
          cause: 'Violence against God: Usury (making barren wealth reproduce)',
          effect: 'Sitting hunched on burning sand with purses around necks',
          explanation: 'They loved sterile wealth. Now sit protecting money bags on sterile sand—their idol made useless.',
        },
      ],
      distractors: [
        'Blown by winds in a whirlwind',
        'Frozen in ice, unable to speak',
      ],
      learningPoints: [
        {
          id: 'lp-ch3-35',
          content: "Violence against God is worst because it attacks the highest good. Violence against self ranks above violence against neighbors—your life is God's gift, not yours to take.",
          category: 'thematic-analysis',
        },
        {
          id: 'lp-ch3-36',
          content: 'Medieval ethics ranked sins by their object: Violence against God > self > neighbors. Dante follows this hierarchy precisely.',
          category: 'historical-context',
        },
      ],
      events: {
        onExit: [
          {
            type: 'quiz',
            componentId: 'quiz-inferno-chapter-3',
            condition: { type: 'if-not-completed' },
          },
        ],
      },
    },
  ],

  endQuiz: chapter3Quiz,
};

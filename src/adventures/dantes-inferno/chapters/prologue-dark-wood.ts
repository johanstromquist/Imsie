import type { Chapter } from '../../../types';
import { prologueQuiz } from '../quizzes/prologue-quiz';

/**
 * Prologue: The Dark Wood
 *
 * Introduction to Dante's Inferno, establishing the narrative framework,
 * the character of Dante, and his guide Virgil. This chapter introduces
 * the concept of allegory and sets up the journey through Hell.
 *
 * Learning focus: Allegory, medieval worldview, Dante's life and context
 */
export const prologue: Chapter = {
  id: 'inferno-prologue',
  title: 'Prologue: The Dark Wood',
  description: 'Lost in a dark forest at the midpoint of life, Dante encounters three beasts and meets his guide Virgil.',

  learningObjectives: [
    'Understand allegory as a literary device in medieval literature',
    'Recognize the historical context of Dante\'s life in 14th-century Florence',
    'Analyze the symbolic meaning of the dark wood and three beasts',
    'Explore the role of Virgil as both character and symbol',
  ],

  scenes: [
    // Scene 1: Introduction to Dante Alighieri (Narrative)
    {
      id: 'prologue-scene-1-intro-dante',
      type: 'narrative',

      backgroundImage: 'https://cdn.midjourney.com/cca646ee-a3d5-4fd6-be80-3ddad70b79cd/0_0.png',
      image: 'https://cdn.midjourney.com/4c47d475-1806-49fe-91db-16a7f4ec501f/0_0.png',

      content: `Welcome to Dante's Inferno, one of the greatest works of medieval literature. Before we begin the journey, let's meet our protagonist.

In the year 1300, a poet named Dante Alighieri found himself at a crossroads—both literally and figuratively. Born in Florence in 1265, Dante was a man of many talents: poet, politician, philosopher. But by 1300, his world had fallen apart.

Florence was torn by civil war between two political factions: the Guelphs and the Ghibellines. Dante, a White Guelph, found himself on the losing side. In 1302, he would be banished from his beloved city forever. He would never see Florence again.

It was during this exile—bitter, angry, and searching for meaning—that Dante began writing the Divine Comedy. Part autobiography, part political revenge, part spiritual journey, this epic poem would change literature forever.`,

      continueButtonText: 'Continue',

      inlineAnnotations: [
        {
          id: 'anno-florence',
          text: 'Florence',
          tooltip: {
            title: 'Florence in the 14th Century',
            content: 'Florence was a wealthy Italian city-state torn by conflict between Guelphs (papal supporters) and Ghibellines (imperial supporters). These factions further split into Blacks and Whites, with Dante supporting the White Guelphs.',
            category: 'historical-context',
          },
        },
        {
          id: 'anno-exile',
          text: 'exile',
          tooltip: {
            title: 'Dante\'s Exile',
            content: 'In 1302, Dante was banished from Florence on false corruption charges. He spent the rest of his life wandering Italy, writing the Divine Comedy as both revenge against his enemies and spiritual exploration.',
            category: 'historical-context',
          },
        },
        {
          id: 'anno-divine-comedy',
          text: 'Divine Comedy',
          tooltip: {
            title: 'The Divine Comedy',
            content: 'Dante\'s epic poem is divided into three parts: Inferno (Hell), Purgatorio (Purgatory), and Paradiso (Paradise). Each part contains 33 cantos, plus an introductory canto in Inferno, totaling 100 cantos.',
            category: 'literary-context',
          },
        },
      ],

      learningPoints: [
        {
          id: 'lp-prologue-1',
          content: 'Dante Alighieri (1265-1321) wrote the Divine Comedy while in political exile from Florence, using poetry to critique his enemies and explore redemption.',
          category: 'historical-context',
        },
        {
          id: 'lp-prologue-2',
          content: 'The year 1300 (the story\'s setting) was a Jubilee year in the Catholic Church, significant for themes of forgiveness and pilgrimage.',
          category: 'historical-context',
        },
      ],
    },

    // Scene 2: "Midway Upon the Journey" (Primary Source)
    {
      id: 'prologue-scene-2-midway-journey',
      type: 'primary-source',

      backgroundImage: 'https://cdn.midjourney.com/cca646ee-a3d5-4fd6-be80-3ddad70b79cd/0_0.png',

      prompt: 'Analyze the opening lines of Dante\'s Inferno',

      source: {
        title: 'Inferno, Canto I, lines 1-3',
        author: 'Dante Alighieri',
        date: 'c. 1308-1320',
        type: 'text',
        content: `**Italian (Original):**
Nel mezzo del cammin di nostra vita
mi ritrovai per una selva oscura,
ché la diritta via era smarrita.

**English (Translation):**
Midway upon the journey of our life
I found myself within a forest dark,
For the straightforward pathway had been lost.`,
        citation: 'The Divine Comedy, translated by Henry Wadsworth Longfellow',
      },

      questions: [
        {
          id: 'q1-midway',
          question: 'What does "midway upon the journey of our life" mean?',
          type: 'multiple-choice',
          options: [
            'Birth',
            'Age 35 (midpoint of biblical 70 years)',
            'Death',
            'Adolescence',
          ],
          correctAnswer: 'Age 35 (midpoint of biblical 70 years)',
          explanation: 'Biblical lifespan was 70 years (Psalm 90:10). Dante was 35 in 1300, the perfect allegorical midpoint for a crisis of faith.',
        },
        {
          id: 'q2-dark-forest',
          question: 'What does the "dark forest" symbolize?',
          type: 'multiple-choice',
          options: [
            'Actual wilderness',
            'Sin and spiritual confusion',
            'Political exile',
            'Mental illness',
          ],
          correctAnswer: 'Sin and spiritual confusion',
          explanation: 'In medieval allegory, forests represented chaos and sin. Being "lost" meant spiritual disorientation.',
        },
      ],

      learningPoints: [
        {
          id: 'lp-prologue-3',
          content: 'Allegory uses literal events to represent abstract concepts. The dark forest literally represents Dante lost in woods, allegorically represents a soul lost in sin.',
          category: 'literary-context',
        },
        {
          id: 'lp-prologue-4',
          content: 'Dante wrote in Italian (not Latin), making literature accessible to common people—a revolutionary act.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 3: Lost in the Dark Wood (Narrative)
    {
      id: 'prologue-scene-3-lost-wood',
      type: 'narrative',

      backgroundImage: 'https://cdn.midjourney.com/cca646ee-a3d5-4fd6-be80-3ddad70b79cd/0_0.png',
      image: 'https://cdn.midjourney.com/ce996970-57db-4e57-af66-814a847285ff/0_0.png',

      content: `You are Dante, and you are lost.

The forest surrounds you—dark, oppressive, terrifying. How did you get here? You cannot remember. Sleep overcame you somewhere on the path of righteousness, and now you find yourself in this savage wilderness.

Every direction looks the same. Twisted trees with gnarled branches block out the sky. The undergrowth tears at your clothes. Fear grips your heart—not just fear of the physical danger, but a deeper terror. You are lost not just in body but in soul.

Then, through a break in the trees, you see it: a mountain bathed in sunlight. Hope surges in your chest. The Mountain of Joy! If you can just reach the summit, you'll be safe. You'll find your way back to the righteous path.

With renewed determination, you begin to climb. The light grows brighter. Salvation seems within reach.`,

      continueButtonText: 'Continue',

      learningPoints: [
        {
          id: 'lp-prologue-5',
          content: 'The mountain represents salvation and virtue. Dante\'s initial attempt to climb it directly (without guidance) fails—showing human limitations.',
          category: 'cultural-context',
        },
        {
          id: 'lp-prologue-6',
          content: 'Sleep and forgetfulness in medieval literature often symbolize sin\'s power to cloud judgment.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 4: The Three Beasts (Decision Scene)
    {
      id: 'prologue-scene-4-three-beasts',
      type: 'decision',

      backgroundImage: 'https://cdn.midjourney.com/353b4f84-1739-4aca-9b77-d58d6020fd46/0_0.png',
      image: 'https://cdn.midjourney.com/773a1177-d9d4-4f1b-bc16-ba7410554dd6/0_0.png',

      prompt: 'Three beasts block your path up the mountain. Which do you fear most?',

      context: `As you climb toward the light, three beasts emerge from the shadows to block your way.

First comes a leopard—spotted and agile, beautiful yet deadly. It circles you with predatory grace.

Then a lion appears—fierce and proud, its roar shaking the very air. Its eyes burn with arrogant fury.

Finally, a she-wolf—lean, hungry, insatiable. Her gaunt frame trembles with endless desire. Of all three, she seems the most terrifying, for her hunger can never be satisfied.

These are not ordinary animals. Medieval readers would recognize them as symbols—obstacles on the path to virtue. Each represents a different sin, a different barrier to salvation.

Which beast fills you with the greatest dread?`,

      choices: [
        {
          id: 'choice-leopard',
          text: 'The Leopard (Lust and Fraud)',
          consequence: 'The leopard\'s spots represent deceit—appearing beautiful but hiding danger beneath. This is the sin of seduction and trickery, where truth is twisted and appearances deceive. The leopard\'s grace masks its lethal intent, just as fraud uses charm to conceal malice.',
          learningPoints: [
            {
              id: 'lp-prologue-7',
              content: 'The leopard symbolizes lust and fraud (malice). Dante places fraud deeper in Hell than violence because it requires human reason—making it worse.',
              category: 'cultural-context',
            },
          ],
        },
        {
          id: 'choice-lion',
          text: 'The Lion (Pride and Violence)',
          consequence: 'The lion\'s roar shakes the air with pure dominance. Pride was considered the first sin—Lucifer\'s fall from grace—making it the root of all evil. The lion represents not just violence but the arrogance that believes might makes right, that power justifies any action.',
          learningPoints: [
            {
              id: 'lp-prologue-8',
              content: 'The lion represents pride and violence (bestiality). Medieval theology saw pride as the sin that separated humanity from God.',
              category: 'cultural-context',
            },
          ],
        },
        {
          id: 'choice-she-wolf',
          text: 'The She-Wolf (Avarice and Greed)',
          consequence: 'The she-wolf\'s insatiable hunger drives you back down the mountain. No matter how much she consumes, she remains gaunt and desperate. Greed was the sin Dante believed plagued his Florence—especially the corruption of the Church, which should have guided souls to Heaven but instead hoarded wealth on Earth.',
          learningPoints: [
            {
              id: 'lp-prologue-9',
              content: 'The she-wolf symbolizes avarice (greed). Dante believed greed corrupted both Church and State in his era.',
              category: 'cultural-context',
            },
          ],
        },
      ],

      learningPoints: [
        {
          id: 'lp-prologue-10',
          content: 'The three beasts correspond to the three major divisions of Hell: incontinence, violence, and fraud.',
          category: 'plot-structure',
        },
      ],
    },

    // Scene 5: Virgil's Appearance (Dialogue Scene)
    {
      id: 'prologue-scene-5-virgil-appears',
      type: 'dialogue',

      backgroundImage: 'https://cdn.midjourney.com/cb3c9bb0-5ff6-4952-8c3f-eb6d6d860fc5/0_0.png',
      image: 'https://cdn.midjourney.com/006aeffc-b827-4113-b026-3598cc50387d/0_0.png',

      character: {
        id: 'virgil',
        name: 'Virgil',
        portrait: 'https://cdn.midjourney.com/32db65bc-da37-4f11-b35d-cc8c648a3d81/0_0.png',
        description: 'Ancient Roman poet (70-19 BCE), author of the Aeneid',
      },

      dialogueTree: {
        id: 'node-1-virgil-intro',
        speaker: 'virgil',
        text: 'Hold, mortal. I see you are driven back by the beasts. You cannot pass this way—not alone. I am Virgil of Mantua, who sang of pious Aeneas and the founding of Rome. A blessed soul in Heaven has sent me to guide you, but the path I offer goes not up, but down.',

        responses: [
          {
            id: 'response-1-why-you',
            text: 'Why you? Why not a Christian guide?',
            nextNodeId: 'node-2-why-virgil',
            learningPoints: [
              {
                id: 'lp-prologue-11',
                content: 'Virgil represents human reason and classical wisdom. He can guide through Hell and Purgatory but not Paradise (requires faith/grace).',
                category: 'character-analysis',
              },
            ],
          },
          {
            id: 'response-2-who-beatrice',
            text: 'Who is this blessed soul that sent you?',
            nextNodeId: 'node-3-beatrice',
            learningPoints: [
              {
                id: 'lp-prologue-12',
                content: 'Beatrice Portinari died in 1290. Dante idealized her as divine love incarnate—a guiding force toward God.',
                category: 'character-analysis',
              },
            ],
          },
          {
            id: 'response-3-why-hell',
            text: 'Why must I go down through Hell?',
            nextNodeId: 'node-4-why-hell',
            learningPoints: [
              {
                id: 'lp-prologue-13',
                content: 'To reach Paradise, one must first understand sin (Hell) and purification (Purgatory). Knowledge precedes redemption.',
                category: 'cultural-context',
              },
            ],
          },
        ],

        allNodes: [
          {
            id: 'node-2-why-virgil',
            speaker: 'virgil',
            text: 'A fair question. I lived and died before Christ walked the Earth. I knew not baptism, nor the grace of faith. Therefore, I dwell in Limbo—not tormented, but barred from Paradise. Yet I possess something valuable: human reason and the wisdom of classical learning. I can guide you through Hell and Purgatory, showing you the consequences of sin. But Paradise? That requires divine grace, which I lack.',
            responses: [
              {
                id: 'response-understand',
                text: 'I understand. Continue.',
                nextNodeId: 'node-5-beatrice-sent',
              },
            ],
          },
          {
            id: 'node-3-beatrice',
            speaker: 'virgil',
            text: 'Beatrice—a soul so blessed that even we in Limbo know her radiance. She came to me with tears in her eyes, begging me to save you from this dark wood. She loves you still, Dante, even from Heaven. She sees you lost and fears for your soul. But she cannot descend herself—a blessed soul cannot enter Hell. Therefore, she asked me, and I have come.',
            responses: [
              {
                id: 'response-beatrice',
                text: 'Beatrice... she remembers me?',
                nextNodeId: 'node-5-beatrice-sent',
              },
            ],
          },
          {
            id: 'node-4-why-hell',
            speaker: 'virgil',
            text: 'Because the beasts block the direct path upward. The mountain of virtue cannot be climbed from this side—not while you are lost in sin. To reach Paradise, you must first understand the full consequence of every vice. You must descend through all the circles of Hell, witness every punishment, and emerge on the far side. Only then can you climb Mount Purgatory and enter Heaven.',
            responses: [
              {
                id: 'response-understand2',
                text: 'I see. Lead the way.',
                nextNodeId: 'node-5-beatrice-sent',
              },
            ],
          },
          {
            id: 'node-5-beatrice-sent',
            speaker: 'virgil',
            text: 'The path will be terrible. You will see suffering beyond imagination. You will meet the damned—some of whom you knew in life. You will witness the architecture of divine justice, where every punishment fits its crime with perfect precision. But you must not falter. Come, then. Abandon fear, and let us descend.',
            isEnd: true,
          },
        ],
      },

      learningPoints: [
        {
          id: 'lp-prologue-13',
          content: 'To reach Paradise, one must first understand sin (Hell) and purification (Purgatory). Knowledge precedes redemption.',
          category: 'cultural-context',
        },
      ],
    },

    // Scene 6: Why Virgil? (Primary Source)
    {
      id: 'prologue-scene-6-why-virgil',
      type: 'primary-source',

      backgroundImage: 'https://cdn.midjourney.com/cb3c9bb0-5ff6-4952-8c3f-eb6d6d860fc5/0_0.png',

      prompt: 'Understand why Dante chose Virgil as his guide',

      source: {
        title: 'The Aeneid, Book VI (Descent to Underworld)',
        author: 'Virgil',
        date: '29-19 BCE',
        type: 'text',
        content: `From Virgil's Aeneid, the epic poem that inspired Dante:

"Easy is the descent to Avernus [the underworld]; night and day the door of gloomy Dis stands open; but to recall thy steps and pass out to the upper air, this is the task, this the toil!"

In Book VI of the Aeneid, the hero Aeneas descends to the underworld guided by the Sibyl. There he meets the shade of his father and learns of Rome's glorious future. This episode provided the literary template for Dante's journey through Hell.`,
        citation: 'Virgil, Aeneid, Book VI, translated by H. Rushton Fairclough',
      },

      questions: [
        {
          id: 'q1-chose-virgil',
          question: 'Why did Dante choose Virgil as his guide?',
          type: 'multiple-choice',
          options: [
            'Virgil was Dante\'s personal friend',
            'Virgil wrote the Aeneid, which includes a descent to the underworld',
            'Virgil was a Christian saint',
            'Virgil was the Pope\'s choice',
          ],
          correctAnswer: 'Virgil wrote the Aeneid, which includes a descent to the underworld',
          explanation: 'Virgil\'s Aeneid provided the literary precedent for a journey through the afterlife. By choosing Virgil as his guide, Dante connected his Christian epic to classical tradition.',
        },
        {
          id: 'q2-virgil-symbolize',
          question: 'What does Virgil symbolize?',
          type: 'multiple-choice',
          options: [
            'Divine grace',
            'Human reason and classical wisdom',
            'Political power',
            'Artistic inspiration',
          ],
          correctAnswer: 'Human reason and classical wisdom',
          explanation: 'Virgil represents what human intellect can achieve without divine revelation. He shows both the power and limitations of reason.',
        },
      ],

      learningPoints: [
        {
          id: 'lp-prologue-14',
          content: 'Virgil\'s Aeneid (Book VI) depicts Aeneas descending to the underworld. Dante modeled his Hell on Virgil\'s vision, creating literary continuity across 1,300 years.',
          category: 'literary-context',
        },
        {
          id: 'lp-prologue-15',
          content: 'Dante considered Virgil his "master and author"—the greatest poet. Medieval Christians revered pagan writers who approached truth through reason.',
          category: 'historical-context',
        },
      ],
    },

    // Scene 7: Approaching the Gate (Narrative)
    {
      id: 'prologue-scene-7-approaching-gate',
      type: 'narrative',

      backgroundImage: 'https://cdn.midjourney.com/784bec3d-7170-43b5-92d9-ca668e597c35/0_0.png',
      image: 'https://cdn.midjourney.com/fa81a209-2ff4-4f70-b9ec-0dddb7d9d01d/0_0.png',

      content: `You follow Virgil through the darkening forest. The twilight deepens into true night, and the air grows cold.

Strange sounds echo through the trees—moans, wails, sounds that might be human or might be something else. The hair rises on the back of your neck. You are grateful for Virgil's steady presence ahead of you.

"Steel yourself," Virgil says without turning. "What you are about to see will test your resolve."

The trees thin, and suddenly you emerge into a clearing. Before you stands a massive gate—ancient stone, carved with strange inscriptions. Beyond it, darkness yawns like the mouth of some cosmic beast. A faint red glow emanates from within, and the sounds of lamentation grow louder.

This is it. The entrance to Hell itself.

Virgil stops before the gate and gestures for you to read the inscription carved above.`,

      continueButtonText: 'Read the inscription',

      learningPoints: [
        {
          id: 'lp-prologue-16',
          content: 'The vestibule of Hell (before the gate) represents spiritual indecision—neither good nor evil. Medieval theology condemned neutrality as cowardice.',
          category: 'cultural-context',
        },
      ],
    },

    // Scene 8: The Gate of Hell (Narrative with Annotations)
    {
      id: 'prologue-scene-8-gate-inscription',
      type: 'narrative',

      backgroundImage: 'https://cdn.midjourney.com/784bec3d-7170-43b5-92d9-ca668e597c35/0_0.png',
      image: '/Imsie/assets/dantes-inferno/scenes/hell-gate-closeup.png',

      content: `The inscription is carved in letters of fire:

PER ME SI VA NE LA CITTÀ DOLENTE,
PER ME SI VA NE L'ETTERNO DOLORE,
PER ME SI VA TRA LA PERDUTA GENTE.
...
LASCIATE OGNE SPERANZA, VOI CH'INTRATE.

Your hands tremble as you read the translation:

THROUGH ME THE WAY INTO THE SUFFERING CITY,
THROUGH ME THE WAY TO THE ETERNAL PAIN,
THROUGH ME THE WAY THAT RUNS AMONG THE LOST...
ABANDON EVERY HOPE, YOU WHO ENTER.

The words strike you like physical blows. Abandon hope? Eternal pain? The finality of it is overwhelming. Your legs weaken beneath you.

"Master," you whisper to Virgil, "these words... their meaning is hard."

Virgil's eyes are gentle but firm. "Here must all distrust be left behind; all cowardice must here be dead. We are come to the place where I have told you that you shall see the miserable people who have lost the good of intellect."

He extends his hand to you, giving you courage. "Trust in me, and I will guide you through."`,

      continueButtonText: 'Take Virgil\'s hand',

      inlineAnnotations: [
        {
          id: 'anno-citta-dolente',
          text: 'città dolente',
          tooltip: {
            title: 'The Suffering City',
            content: 'Hell is described as a city ("città") because Dante imagines it as an organized society with laws, borders, and governance—a dark mirror of earthly cities like Florence.',
            category: 'literary-context',
          },
        },
        {
          id: 'anno-etterno-dolore',
          text: 'etterno dolore',
          tooltip: {
            title: 'Eternal Pain',
            content: 'The concept of eternity was central to medieval theology. Hell\'s punishments last forever without possibility of reprieve or redemption.',
            category: 'historical-context',
          },
        },
        {
          id: 'anno-lasciate-speranza',
          text: 'LASCIATE OGNE SPERANZA',
          tooltip: {
            title: 'Abandon All Hope',
            content: 'Perhaps the most famous line in the Divine Comedy. Hope is a theological virtue; its complete absence defines Hell\'s essence.',
            category: 'reference',
          },
        },
      ],

      learningPoints: [
        {
          id: 'lp-prologue-17',
          content: '"Abandon all hope" defines Hell\'s essence: permanence. In Catholic theology, Hell is eternal—no second chances, no parole.',
          category: 'cultural-context',
        },
        {
          id: 'lp-prologue-18',
          content: 'The gate\'s inscription describes Hell as a city. Dante structures Hell like a well-organized medieval city-state, reflecting his political obsessions.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 9: Entering Hell (Narrative with Event)
    {
      id: 'prologue-scene-9-entering-hell',
      type: 'narrative',

      backgroundImage: 'https://cdn.midjourney.com/784bec3d-7170-43b5-92d9-ca668e597c35/0_0.png',
      image: 'https://cdn.midjourney.com/e2378de8-e463-497d-bbd8-8f2a35b7ecb6/0_0.png',

      content: `You take Virgil's hand. His grip is firm, reassuring—though you notice it is cold, the hand of a shade, not a living man.

Together, you step through the gate.

The moment you cross the threshold, the air changes. It becomes thick, heavy, difficult to breathe. The temperature drops. The sounds of lamentation crash over you like waves—crying, wailing, sounds of anguish in a thousand languages.

Behind you, the gate swings shut with a hollow boom that resonates through your bones. The finality of it makes your heart race. There is no going back. The only way out is through.

"Come," Virgil says, his voice cutting through the chaos. "The journey begins."

You descend into darkness.`,

      continueButtonText: 'Continue',

      events: {
        onExit: [
          {
            type: 'quiz',
            componentId: 'quiz-inferno-prologue',
            condition: { type: 'if-not-completed' },
          },
        ],
      },

      learningPoints: [
        {
          id: 'lp-prologue-19',
          content: 'Crossing thresholds in epic literature symbolizes commitment. Entering Hell, Dante commits to confronting sin.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 10: Transition to Chapter 1 (Narrative)
    {
      id: 'prologue-scene-10-transition',
      type: 'narrative',

      backgroundImage: 'https://cdn.midjourney.com/784bec3d-7170-43b5-92d9-ca668e597c35/0_0.png',

      content: `For a moment, there is only darkness and the overwhelming sound of suffering.

Then, slowly, your eyes adjust. You see shapes in the gloom—countless souls, wandering without purpose. Ahead, a faint light suggests a path forward.

Virgil glances back at you. "We approach the First Circle of Hell. What you will see there is different from what lies deeper. The souls in Limbo are not tortured—they simply exist without hope of Paradise."

He pauses, as if considering whether to say more.

"That is where I dwell, when not summoned forth as a guide. Come. Let me show you my home, and the noble souls who share my eternal fate."

You steel yourself and follow your guide deeper into Hell.`,

      continueButtonText: 'Continue to Chapter 1',

      learningPoints: [
        {
          id: 'lp-prologue-20',
          content: 'The descent through Hell follows a moral logic: sins of incontinence (least severe) near the top, fraud and treachery (most severe) at the bottom.',
          category: 'plot-structure',
        },
      ],
    },
  ],

  endQuiz: prologueQuiz,
};

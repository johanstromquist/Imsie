import type { Chapter } from '../../../types';
import { chapter2Quiz } from '../quizzes/chapter-2-quiz';

export const chapter2: Chapter = {
  id: 'chapter-2-romeo-juliet',
  title: 'Chapter 2: Romeo and Juliet - Love Against All Odds',
  description: 'Experience Shakespeare\'s timeless romantic tragedy of star-crossed lovers caught between family hatred and passionate devotion.',

  learningObjectives: [
    'Analyze Romeo and Juliet as a romantic tragedy bridging comedy and tragedy',
    'Understand the role of fate vs. free will in the play\'s structure',
    'Recognize how family loyalty conflicts with individual love',
    'Identify Shakespeare\'s use of light/dark imagery and poetic language',
    'Compare the impulsive passion of young love with mature love',
  ],

  scenes: [
    // Scene 1: Prologue and the Montague/Capulet feud
    {
      id: 'romeo-scene-1-prologue',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/32cce980-9470-44e6-998f-1635c3026992/0_0.png',
      image: 'https://cdn.midjourney.com/32cce980-9470-44e6-998f-1635c3026992/0_0.png',

      content: `"Two households, both alike in dignity, in fair Verona, where we lay our scene..."

In the sun-drenched streets of Verona, Italy, two noble families have turned the city into a battlefield. The Montagues and the Capulets—both wealthy, both powerful, both consumed by an ancient grudge whose origins have been forgotten but whose hatred burns as fierce as ever.

The feud has infected everything. Servants brawl in the marketplace. Young men draw swords at the slightest insult. Even the Prince of Verona has grown weary of breaking up street fights that turn the city's fountains red with blood.

"If ever you disturb our streets again," Prince Escalus warns both families, "your lives shall pay the forfeit of the peace."

But ancient hatred does not die easily. And in this poisoned atmosphere, two young hearts are about to discover a love so powerful it might heal the rift between their families—or destroy them both.`,

      learningPoints: [
        {
          id: 'lp-romeo-1-prologue',
          content: 'Shakespeare\'s prologue reveals the entire plot (the lovers will die), creating dramatic irony as we watch them fall in love knowing their fate.',
          category: 'literary-context',
        },
        {
          id: 'lp-romeo-1-feud',
          content: 'The ancient feud between noble families reflects Renaissance Italy\'s factional violence and the destructive nature of inherited hatred.',
          category: 'historical-context',
        },
      ],
    },

    // Scene 2: Map exploration - Explore Verona
    {
      id: 'romeo-scene-2-map',
      type: 'map-exploration',
      backgroundImage: 'https://cdn.midjourney.com/32cce980-9470-44e6-998f-1635c3026992/0_0.png',
      mapImage: 'https://cdn.midjourney.com/cc83824d-91d2-4d73-b1a7-513766cedbab/0_2.png',

      prompt: 'Explore the key locations of Verona where Romeo and Juliet\'s tragedy unfolds',

      locations: [
        {
          id: 'location-capulet-mansion',
          name: 'Capulet Mansion',
          x: 35,
          y: 40,
          content: `The grand palazzo of the Capulet family dominates one quarter of Verona. Its marble halls have hosted elaborate feasts and masked balls where the city's elite gather.

Here, beneath glittering chandeliers, Romeo will first see Juliet and fall instantly in love. Here, Juliet's father will demand she marry Paris. And here, in Juliet's bedroom chamber, the secret lovers will spend their one and only night together before Romeo's banishment.

The famous balcony extends from Juliet's window—the setting for literature's most romantic scene.`,
          image: 'https://cdn.midjourney.com/c6a942c4-624f-4ec0-bc6e-f4b9f6d4dced/0_0.png',
        },
        {
          id: 'location-friar-cell',
          name: 'Friar Laurence\'s Cell',
          x: 60,
          y: 30,
          content: `Outside Verona's walls, in a quiet monastery garden, lives Friar Laurence—a holy man skilled in the properties of herbs and natural philosophy.

His cell becomes a sanctuary for the lovers. Here, Romeo comes for counsel and confession. Here, in secret, Friar Laurence will perform the marriage ceremony that binds Romeo and Juliet as husband and wife.

The Friar, well-intentioned but naive, believes their love might heal the family feud. He does not foresee how his plans will unravel into tragedy.`,
          image: 'https://cdn.midjourney.com/3abc83be-bf9c-45cf-a0a1-9dca50fe20ec/0_0.png',
        },
        {
          id: 'location-verona-square',
          name: 'Verona\'s Public Square',
          x: 50,
          y: 55,
          content: `The heart of Verona, where merchants sell their wares and citizens gather to hear pronouncements from Prince Escalus.

This square has witnessed too many fights between Montague and Capulet servants. It is here that Tybalt will challenge Romeo, that Mercutio will die cursing "a plague on both your houses," and that Romeo will kill Tybalt in grief and rage—sealing his own banishment.`,
          image: 'https://cdn.midjourney.com/32cce980-9470-44e6-998f-1635c3026992/0_0.png',
        },
        {
          id: 'location-capulet-tomb',
          name: 'Capulet Family Tomb',
          x: 70,
          y: 70,
          content: `In the darkness beneath an ancient cemetery lies the Capulet family crypt, where generations of the noble family rest in marble silence.

Here, Juliet will be laid to rest—or so it will appear. In this tomb of death, the final tragedy will unfold: Paris slain, Romeo poisoned beside what he believes is Juliet's corpse, and Juliet waking to find her beloved dead and choosing to join him in death.

"For never was a story of more woe / Than this of Juliet and her Romeo."`,
          image: 'https://cdn.midjourney.com/48a636d5-bff3-41e0-8497-ddc354f33391/0_0.png',
        },
      ],

      requiredLocations: ['location-capulet-mansion', 'location-friar-cell', 'location-capulet-tomb'],

      learningPoints: [
        {
          id: 'lp-romeo-2-setting',
          content: 'Shakespeare chose Verona, Italy as the setting to evoke Renaissance passion and factional violence, distancing English audiences from the story while exploring universal themes.',
          category: 'historical-context',
        },
        {
          id: 'lp-romeo-2-spaces',
          content: 'The contrast between public spaces (where violence erupts) and private spaces (where love flourishes) emphasizes the lovers\' isolation from their society.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 3: The masked ball
    {
      id: 'romeo-scene-3-ball',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/c6a942c4-624f-4ec0-bc6e-f4b9f6d4dced/0_0.png',
      image: 'https://cdn.midjourney.com/c3934743-ea4c-4c35-bcb0-408652142ec5/0_0.png',

      content: `The Capulet mansion blazed with light and music. Lord Capulet had thrown open his doors for a grand masked ball, inviting all the noble families of Verona—except, of course, the Montagues.

But Romeo Montague, nursing a broken heart over the cold Rosaline who refused his love, allowed his friends Mercutio and Benvolio to convince him to crash the party in disguise.

"Come, we'll go in disguise," Mercutio urged. "There'll be beautiful women, good wine, and dancing. You'll forget all about Rosaline."

Romeo agreed, though his heart felt heavy. He had been having dark dreams lately, premonitions of "some consequence yet hanging in the stars."

The moment Romeo entered the ballroom, he saw her.

A young woman moved through the dancers like light itself, her beauty so radiant that Romeo forgot Rosaline instantly. He forgot his friends. He forgot where he was. He could only stare.

"Who is she?" he whispered. "Did my heart love till now? For I ne'er saw true beauty till this night."

But across the room, Tybalt—Juliet's hot-headed cousin—recognized Romeo's voice beneath the mask. His hand went to his sword. A Montague, here, daring to pollute the Capulet home with his presence!

Only Lord Capulet's command stayed Tybalt's hand. "He shall be endured," the old man insisted, not wanting violence to spoil his party. But Tybalt's fury would not be forgotten.

Romeo approached the beautiful stranger. Their hands touched. They spoke in perfect sonnet form, their words creating poetry together, as if their souls were already joined.

Then Juliet's nurse pulled her away to meet her mother, and Romeo learned the terrible truth: "Is she a Capulet? O dear account! My life is my foe's debt."

And Juliet, discovering Romeo's identity, gasped: "My only love sprung from my only hate! Too early seen unknown, and known too late!"

They had fallen in love at first sight. And they belonged to families sworn to eternal enmity.`,

      inlineAnnotations: [
        {
          id: 'annotation-sonnet',
          text: 'perfect sonnet form',
          tooltip: {
            title: 'The Sonnet Meeting',
            content: 'Romeo and Juliet\'s first conversation forms a perfect 14-line sonnet, with each speaking alternate lines. This poetic structure suggests their souls are perfectly matched—they complete each other\'s poetry.',
            category: 'literary-context',
          },
        },
      ],

      learningPoints: [
        {
          id: 'lp-romeo-3-love-at-first-sight',
          content: 'Romeo and Juliet\'s instant attraction subverts expectations—Romeo enters loving Rosaline and instantly forgets her, suggesting the fickleness of young passion.',
          category: 'literary-context',
        },
        {
          id: 'lp-romeo-3-dramatic-irony',
          content: 'The audience knows from the prologue that the lovers are doomed, creating dramatic irony as we watch them fall in love with joy and hope.',
          category: 'literary-context',
        },
        {
          id: 'lp-romeo-3-tybalt',
          content: 'Tybalt\'s rage at Romeo\'s presence plants the seed of the violence that will destroy the lovers, linking love and death from their first meeting.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 4: Dialogue - The balcony scene (interactive)
    {
      id: 'romeo-scene-4-balcony',
      type: 'dialogue',
      backgroundImage: 'https://cdn.midjourney.com/15485821-7e20-43ef-822d-31b38b79254b/0_0.png',

      character: {
        id: 'juliet',
        name: 'Juliet Capulet',
        portrait: 'https://cdn.midjourney.com/76ab94c5-d117-41b9-ab8d-1ce730379f38/0_3.png',
        description: 'The only daughter of the Capulet family, age 13',
      },

      dialogueTree: {
        id: 'node-1',
        speaker: 'juliet',
        text: 'O Romeo, Romeo! Wherefore art thou Romeo? Deny thy father and refuse thy name. Or, if thou wilt not, be but sworn my love, and I\'ll no longer be a Capulet.',

        responses: [
          {
            id: 'response-reveal',
            text: '[Reveal yourself] "Shall I hear more, or shall I speak at this?"',
            nextNodeId: 'node-2-reveal',
            learningPoints: [
              {
                id: 'lp-romeo-5-eavesdrop',
                content: 'Romeo overhears Juliet\'s private thoughts, creating intimacy—she speaks her true feelings not knowing he listens.',
                category: 'literary-context',
              },
            ],
          },
          {
            id: 'response-listen',
            text: '[Stay hidden and listen longer]',
            nextNodeId: 'node-2-listen',
          },
        ],

        allNodes: [
          {
            id: 'node-2-reveal',
            speaker: 'juliet',
            text: 'What man art thou that thus bescreen\'d in night so stumblest on my counsel?',
            responses: [
              {
                id: 'response-name',
                text: 'I am Romeo Montague, and I love you.',
                nextNodeId: 'node-3-name',
              },
              {
                id: 'response-poetic',
                text: 'I know not how to tell thee who I am. My name, dear saint, is hateful to myself because it is an enemy to thee.',
                nextNodeId: 'node-3-poetic',
                learningPoints: [
                  {
                    id: 'lp-romeo-5-language',
                    content: 'Romeo speaks in elevated, poetic language, using religious imagery ("saint") to express his devotion to Juliet.',
                    category: 'literary-context',
                  },
                ],
              },
            ],
          },
          {
            id: 'node-2-listen',
            speaker: 'juliet',
            text: '\'Tis but thy name that is my enemy. Thou art thyself, though not a Montague. What\'s Montague? It is nor hand, nor foot, nor arm, nor face, nor any other part belonging to a man. O, be some other name!',
            nextNodeId: 'node-2-reveal',
          },
          {
            id: 'node-3-name',
            speaker: 'juliet',
            text: 'Art thou not Romeo, and a Montague? How camest thou hither, tell me, and wherefore? The orchard walls are high and hard to climb, and the place death, considering who thou art, if any of my kinsmen find thee here.',
            responses: [
              {
                id: 'response-love-wings',
                text: 'With love\'s light wings did I o\'erperch these walls, for stony limits cannot hold love out.',
                nextNodeId: 'node-4-vows',
                learningPoints: [
                  {
                    id: 'lp-romeo-5-imagery-flight',
                    content: 'Romeo uses imagery of flight and wings to describe love\'s power to transcend physical and social barriers.',
                    category: 'literary-context',
                  },
                ],
              },
              {
                id: 'response-danger',
                text: 'I would brave any danger for you. My life were better ended by their hate than death prorogued, wanting of thy love.',
                nextNodeId: 'node-4-vows',
              },
            ],
          },
          {
            id: 'node-3-poetic',
            speaker: 'juliet',
            text: 'My ears have not yet drunk a hundred words of that tongue\'s uttering, yet I know the sound. Art thou not Romeo, and a Montague?',
            nextNodeId: 'node-3-name',
          },
          {
            id: 'node-4-vows',
            speaker: 'juliet',
            text: 'Dost thou love me? I know thou wilt say "Ay," and I will take thy word. Yet if thou swear\'st, thou mayst prove false. At lovers\' perjuries, they say, Jove laughs. O gentle Romeo, if thou dost love, pronounce it faithfully.',
            responses: [
              {
                id: 'response-swear-moon',
                text: 'Lady, by yonder blessed moon I swear, that tips with silver all these fruit-tree tops—',
                nextNodeId: 'node-5-moon',
              },
              {
                id: 'response-swear-self',
                text: 'I swear by myself, by my love for you, which is the truest thing I know.',
                nextNodeId: 'node-5-accept',
              },
            ],
          },
          {
            id: 'node-5-moon',
            speaker: 'juliet',
            text: 'O, swear not by the moon, th\' inconstant moon, that monthly changes in her circle orb, lest that thy love prove likewise variable.',
            responses: [
              {
                id: 'response-what-swear',
                text: 'What shall I swear by?',
                nextNodeId: 'node-5-no-swear',
                learningPoints: [
                  {
                    id: 'lp-romeo-5-moon',
                    content: 'Juliet rejects swearing by the moon because it\'s inconstant (constantly changing), fearing Romeo\'s love might prove equally changeable.',
                    category: 'literary-context',
                  },
                ],
              },
            ],
          },
          {
            id: 'node-5-no-swear',
            speaker: 'juliet',
            text: 'Do not swear at all. Or, if thou wilt, swear by thy gracious self, which is the god of my idolatry, and I\'ll believe thee.',
            nextNodeId: 'node-5-accept',
          },
          {
            id: 'node-5-accept',
            speaker: 'juliet',
            text: 'Three words, dear Romeo, and good night indeed. If that thy bent of love be honourable, thy purpose marriage, send me word tomorrow. I will follow thee my lord throughout the world.',
            responses: [
              {
                id: 'response-marry',
                text: 'I will send word tomorrow. We shall be married.',
                nextNodeId: 'node-6-end',
              },
            ],
          },
          {
            id: 'node-6-end',
            speaker: 'juliet',
            text: 'Good night, good night! Parting is such sweet sorrow that I shall say good night till it be morrow.',
            isEnd: true,
          },
        ],
      },

      learningPoints: [
        {
          id: 'lp-romeo-5-balcony',
          content: 'The balcony scene is literature\'s most famous love scene, establishing the lovers\' commitment while foreshadowing the barriers they must overcome.',
          category: 'literary-context',
        },
        {
          id: 'lp-romeo-5-marriage',
          content: 'Unlike Part II\'s Othello (where love is corrupted by jealousy) or Part III\'s dark romances, Romeo and Juliet\'s love is pure but doomed by circumstance.',
          category: 'reference',
        },
      ],
    },

    // Scene 5: Secret marriage with Friar Laurence
    {
      id: 'romeo-scene-5-marriage',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/3abc83be-bf9c-45cf-a0a1-9dca50fe20ec/0_0.png',
      image: 'https://cdn.midjourney.com/3abc83be-bf9c-45cf-a0a1-9dca50fe20ec/0_0.png',

      content: `In the cool morning light of Friar Laurence's cell, surrounded by herbs and holy books, Romeo and Juliet were joined in marriage.

The ceremony was simple. No guests attended. No families rejoiced. Only the Friar spoke the sacred words that bound them as husband and wife.

"So smile the heavens upon this holy act," Friar Laurence prayed, "that after-hours with sorrow chide us not."

The good Friar had agreed to perform the secret marriage not just for the lovers' sake, but because he hoped it might heal the ancient feud. "For this alliance may so happy prove to turn your households' rancour to pure love," he told Romeo.

It was a beautiful hope. But as Romeo kissed his new bride, neither the lovers nor the Friar could foresee how quickly their secret would unravel into tragedy.

That very afternoon, everything would change.`,

      learningPoints: [
        {
          id: 'lp-romeo-6-friar',
          content: 'Friar Laurence represents well-intentioned interference—his hope that love will heal hatred is noble but tragically naive.',
          category: 'literary-context',
        },
        {
          id: 'lp-romeo-6-secret',
          content: 'The secret marriage creates dramatic irony—we know what other characters don\'t, heightening tension as misunderstandings accumulate.',
          category: 'literary-context',
        },
        {
          id: 'lp-romeo-6-speed',
          content: 'The play\'s compressed timeline (events occur over just a few days) emphasizes the impulsive haste that characterizes young love and contributes to tragedy.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 6: Decision - Tybalt's challenge
    {
      id: 'romeo-scene-6-decision',
      type: 'decision',
      backgroundImage: 'https://cdn.midjourney.com/32cce980-9470-44e6-998f-1635c3026992/0_0.png',
      image: 'https://cdn.midjourney.com/32cce980-9470-44e6-998f-1635c3026992/0_0.png',

      prompt: 'What should Romeo do?',
      context: `Hours after his secret wedding to Juliet, Romeo walked through Verona's streets in a daze of joy. He was married! He was a husband! Nothing could disturb his happiness.

But in the public square, Tybalt—Juliet's cousin, the man who had recognized Romeo at the Capulet ball—waited with drawn sword.

"Romeo, the love I bear thee can afford no better term than this: thou art a villain."

Romeo's friends Mercutio and Benvolio tensed, ready for a fight. But Romeo, now secretly married to Juliet, felt only love for Tybalt—his new cousin by marriage.

"Tybalt, I have reason to love thee," Romeo said gently, refusing to draw his sword. "Therefore farewell. I see thou know'st me not."

But Mercutio, not knowing Romeo's secret, was outraged at what seemed like cowardice. "O calm, dishonourable, vile submission!" he cried, and drew his own sword to fight Tybalt in Romeo's place.

Romeo must choose how to respond...`,

      timeLimit: 45,

      choices: [
        {
          id: 'choice-peace',
          text: 'Continue to refuse violence and try to keep the peace',
          consequence: 'Romeo made his choice—he would maintain peace at all costs. He stepped between Mercutio and Tybalt, arms spread wide. "Gentle Mercutio, put thy rapier up!" But Mercutio, not understanding Romeo\'s secret bond to Tybalt, saw only shameful cowardice. He pushed Romeo aside and engaged Tybalt himself. Romeo tried again to intervene, to separate them—and in that fatal moment of confusion, Tybalt\'s blade slipped under Romeo\'s arm and found Mercutio\'s heart. This was exactly what happened in Shakespeare\'s play—Romeo\'s attempt at peace became the mechanism of tragedy.',
          learningPoints: [
            {
              id: 'lp-romeo-7-peace-fails',
              content: 'Romeo\'s attempt to maintain peace backfires tragically—his intervention enables Tybalt to kill Mercutio, showing how good intentions can have terrible consequences.',
              category: 'literary-context',
            },
          ],
          nextSceneId: 'romeo-scene-7-revenge',
        },
        {
          id: 'choice-fight',
          text: 'Draw your sword and fight Tybalt honorably',
          consequence: 'Romeo\'s hand moved to his sword—but then he hesitated. How could he fight Juliet\'s own cousin, now his kinsman by marriage? In that moment of hesitation, Mercutio exploded in fury. "O calm, dishonourable, vile submission! Tybalt, you rat-catcher, will you walk?" Mercutio drew his own blade and lunged at Tybalt. Romeo, seeing his friend in danger, instinctively stepped between them to stop the fight—and in the confusion, Tybalt\'s sword found its mark under Romeo\'s arm, piercing Mercutio. Romeo\'s divided heart—his love for both friend and new family—had paralyzed him at the crucial moment, leading to the same tragic result Shakespeare wrote.',
          learningPoints: [
            {
              id: 'lp-romeo-7-fight-fails',
              content: 'Even intending to fight doesn\'t prevent tragedy—Romeo\'s divided loyalties between friend and family-by-marriage paralyze him, and his peace-making attempt costs Mercutio his life.',
              category: 'literary-context',
            },
          ],
          nextSceneId: 'romeo-scene-7-revenge',
        },
        {
          id: 'choice-reveal',
          text: 'Reveal your secret marriage to Juliet and explain your refusal to fight',
          consequence: 'Romeo opened his mouth to speak the truth—"Tybalt, I am married to your cousin! We are family now!" But before the words could form, Mercutio\'s voice cut through like a whip. "O calm, dishonourable, vile submission!" His friend\'s rage was too swift, too hot. Mercutio drew his rapier and attacked Tybalt, seeing Romeo\'s hesitation as betrayal of honor. Romeo lunged forward to separate them, still trying to explain—and Tybalt\'s blade found Mercutio under Romeo\'s arm. The secret had been kept one moment too long. By the time truth might have been spoken, violence had already chosen its course.',
          learningPoints: [
            {
              id: 'lp-romeo-7-reveal-fails',
              content: 'The tragedy of secrets: by the time Romeo might reveal his marriage, events move too fast for truth to matter, showing how concealment leads to catastrophe.',
              category: 'literary-context',
            },
          ],
          nextSceneId: 'romeo-scene-7-revenge',
        },
      ],

      learningPoints: [
        {
          id: 'lp-romeo-7-impossible-choice',
          content: 'Romeo faces an impossible dilemma with no good options—any choice leads to Mercutio\'s death, illustrating how fate operates through seemingly free choices.',
          category: 'literary-context',
        },
        {
          id: 'lp-romeo-7-contrast',
          content: 'Unlike the jealous violence we\'ll see in Othello (Part II), Romeo\'s violence comes from family loyalty and grief, not personal passion.',
          category: 'reference',
        },
      ],
    },

    // Scene 7: Mercutio's death and Romeo's revenge
    {
      id: 'romeo-scene-7-revenge',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/32cce980-9470-44e6-998f-1635c3026992/0_0.png',
      image: 'https://cdn.midjourney.com/32cce980-9470-44e6-998f-1635c3026992/0_0.png',

      content: `Mercutio lay dying in the dust of the Verona square, his blood darkening the cobblestones.

"I am hurt," he gasped, trying to joke even now. "A plague on both your houses! They have made worms' meat of me. A plague on both your houses!"

Romeo knelt beside his friend, horror and guilt flooding through him. He had tried to make peace. He had tried to refuse violence. And his pacifism had gotten his best friend killed.

"This gentleman," Romeo said brokenly, "the Prince's near ally, my very friend, hath got his mortal hurt in my behalf."

Mercutio died cursing both Montagues and Capulets. And something died in Romeo too—the gentle lover who had walked in clouds of joy just hours before.

When Tybalt returned, swaggering and proud of his kill, Romeo's grief exploded into rage.

"Alive in triumph, and Mercutio slain! Away to heaven, respective lenity, and fire-eyed fury be my conduct now!"

Romeo drew his sword and attacked Tybalt with all the fury of his grief. This time, he did not hesitate. This time, his blade found its mark.

Tybalt fell dead.

For a moment, Romeo stood over his wife's cousin's corpse, his sword dripping blood. Then the terrible reality crashed over him.

"O, I am fortune's fool!"

He had killed Juliet's cousin. He had murdered a Capulet. The Prince's decree was clear: any who disturbed the peace would pay with their lives.

"Romeo, away, be gone!" Benvolio urged. "The Prince will doom thee death if thou art taken!"

Romeo fled into exile, leaving behind his new wife, his home, and any hope of happiness.

The Prince arrived to find Tybalt's body and Mercutio's. His judgment was swift: "And for that offense immediately we do exile him hence."

Romeo Montague was banished from Verona on pain of death.`,

      learningPoints: [
        {
          id: 'lp-romeo-8-turning-point',
          content: 'Mercutio\'s death and Tybalt\'s killing mark the play\'s turning point from romantic comedy to inevitable tragedy.',
          category: 'literary-context',
        },
        {
          id: 'lp-romeo-8-fortune',
          content: 'Romeo\'s cry "I am fortune\'s fool!" expresses the play\'s central theme—individuals caught in the machinery of fate and circumstance beyond their control.',
          category: 'literary-context',
        },
        {
          id: 'lp-romeo-8-plague',
          content: 'Mercutio\'s curse "a plague on both your houses" proves prophetic—the feud will destroy the children of both families.',
          category: 'literary-context',
        },
        {
          id: 'lp-romeo-8-violence',
          content: 'Unlike Romeo\'s family-loyalty violence, we\'ll see jealous rage in Othello (Part II) and calculated revenge in Hamlet (Part III).',
          category: 'reference',
        },
      ],
    },

    // Scene 8: Primary source - Friar's letter about the sleeping potion
    {
      id: 'romeo-scene-8-letter',
      type: 'primary-source',
      backgroundImage: 'https://cdn.midjourney.com/3abc83be-bf9c-45cf-a0a1-9dca50fe20ec/0_0.png',

      prompt: 'Examine the letter Friar Laurence sent to Romeo explaining the sleeping potion plan',

      source: {
        title: 'Letter from Friar Laurence to Romeo Montague',
        author: 'Friar Laurence',
        date: 'Never delivered due to plague quarantine',
        type: 'text',
        content: `To my son Romeo, in Mantua,

In haste I write to tell thee of a desperate plan, undertaken to save thy young wife from a forced marriage to the County Paris.

Juliet came to my cell in desperation. Her father insists she wed Paris, and she would rather die than break her vows to thee. I have given her a potion of my own devising—a distilling liquor that will make her appear as one dead for two-and-forty hours. She will seem lifeless, cold, and pale as death itself.

Her family will find her thus and, believing her deceased, will lay her in the Capulet monument according to custom.

Thou must come to Verona in secret on the night she wakes. I will be there when she wakes from this borrowed likeness of shrunk death, and thou shalt bear her hence to Mantua. There you may live in safety until we can make your marriage public and reconcile your warring families through the joy of your union.

All depends upon thy receiving this letter and arriving at the tomb at the appointed hour. Come not too early, lest thou despair seeing her corpse-like. Come not too late, lest she wake alone in that charnel house of death.

I pray this plan succeeds where others have failed, and that love may yet triumph over hatred.

In faith and hope,
Friar Laurence`,
        citation: 'Educational dramatization based on Romeo and Juliet, Acts IV-V. Note: This letter does not appear in Shakespeare\'s text. The Friar\'s plan and its failure are described in dialogue, but the undelivered letter itself is mentioned only briefly. This reconstruction imagines what that letter might have contained based on the play\'s events.',
      },

      questions: [
        {
          id: 'q1',
          question: 'What is the Friar\'s primary motivation for creating this elaborate plan?',
          type: 'multiple-choice',
          options: [
            'To prove his skill with herbs and potions',
            'To save Juliet from being forced to marry Paris while honoring her marriage to Romeo',
            'To punish the Capulets for their role in the feud',
            'To gain favor with both families by solving their problems',
          ],
          correctAnswer: 'To save Juliet from being forced to marry Paris while honoring her marriage to Romeo',
          explanation: 'The Friar acts to help Juliet avoid bigamy (marrying Paris while married to Romeo) and to reunite the lovers, though his plan is overly complex and risky.',
        },
        {
          id: 'q2',
          question: 'What does the Friar\'s plan depend upon for success?',
          type: 'multiple-choice',
          options: [
            'The Capulets discovering the truth about the secret marriage',
            'Romeo receiving the letter and arriving at the tomb at exactly the right time',
            'Juliet\'s family deciding not to bury her in the tomb',
            'The Prince of Verona pardoning Romeo\'s banishment',
          ],
          correctAnswer: 'Romeo receiving the letter and arriving at the tomb at exactly the right time',
          explanation: 'The plan\'s success hinges entirely on precise timing and communication—both of which fail tragically when the letter never reaches Romeo.',
        },
        {
          id: 'q3',
          question: 'What does this letter reveal about Friar Laurence\'s character?',
          type: 'multiple-choice',
          options: [
            'He is a calculating manipulator who enjoys controlling others',
            'He is well-intentioned but relies on overly complicated schemes that assume perfect conditions',
            'He is a coward who refuses to take responsibility for his actions',
            'He is supremely confident that all will work exactly as planned',
          ],
          correctAnswer: 'He is well-intentioned but relies on overly complicated schemes that assume perfect conditions',
          explanation: 'The Friar genuinely wants to help, but his plan requires too many things to go exactly right—precise timing, successful message delivery, and perfect execution.',
        },
        {
          id: 'q4',
          question: 'Why does the Friar warn Romeo about the timing of his arrival?',
          type: 'multiple-choice',
          options: [
            'Too early and Romeo might despair seeing Juliet appear dead; too late and she might wake alone',
            'Too early and the Capulets might still be at the tomb; too late and Juliet will have left',
            'Too early and the potion won\'t have worn off; too late and the potion will be permanent',
            'Too early and he might wake other corpses; too late and he might miss the opening of the tomb',
          ],
          correctAnswer: 'Too early and Romeo might despair seeing Juliet appear dead; too late and she might wake alone',
          explanation: 'The Friar understands the psychological danger (Romeo\'s despair) and the practical danger (Juliet waking alone in a tomb), but ironically, Romeo arrives at the worst possible moment.',
        },
      ],

      learningPoints: [
        {
          id: 'lp-romeo-10-plan',
          content: 'The Friar\'s elaborate plan represents well-intentioned schemes that fail because they assume perfect conditions in an imperfect world.',
          category: 'literary-context',
        },
        {
          id: 'lp-romeo-10-communication',
          content: 'The failure of communication (the undelivered letter) drives the final tragedy, showing how small accidents can have catastrophic consequences.',
          category: 'literary-context',
        },
        {
          id: 'lp-romeo-10-irony',
          content: 'The irony is devastating—the Friar\'s plan to save the lovers becomes the mechanism of their deaths, good intentions producing evil outcomes.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 9: The tragic miscommunication and deaths
    {
      id: 'romeo-scene-9-deaths',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/48a636d5-bff3-41e0-8497-ddc354f33391/0_0.png',
      image: 'https://cdn.midjourney.com/48a636d5-bff3-41e0-8497-ddc354f33391/0_0.png',

      content: `## The letter never arrived.

Friar John, tasked with delivering Friar Laurence's message to Romeo in Mantua, was detained by plague quarantine. The crucial letter explaining Juliet's feigned death remained undelivered.

Instead, Romeo's servant Balthasar brought different news: "Her body sleeps in Capel's monument, and her immortal part with angels lives."

Juliet was dead.

Romeo's world collapsed. Without the Friar's letter, he had no reason to doubt Balthasar's report. His wife—his Juliet—was gone.

"Is it e'en so?" Romeo whispered. "Then I defy you, stars!"

He went immediately to an apothecary and bought poison, illegal in Mantua but available to those desperate enough. "Come, cordial and not poison, go with me to Juliet's grave, for there must I use thee."

## In the Capulet Tomb

That night, Romeo broke into the Capulet family tomb where Juliet lay in her death-like sleep. In the darkness, by torchlight, he found her on her bier, still beautiful, still seemingly perfect.

"Death, that hath sucked the honey of thy breath, hath had no power yet upon thy beauty," Romeo marveled. If only he had known she lived!

He kissed her cold lips one last time. Then he drank the poison.

"Here's to my love! O true apothecary! Thy drugs are quick. Thus with a kiss I die."

Romeo collapsed beside Juliet's bier and died.

## Juliet Wakes

Moments later—just moments too late—Juliet stirred. The potion was wearing off. Her eyes opened.

Friar Laurence arrived, breathless and desperate, having discovered his letter had not been delivered. He found Romeo's body and knew immediately what had happened.

"Romeo!" Juliet cried, seeing her husband dead beside her. "What's here? Poison? O churl! Drunk all, and left no friendly drop to help me after?"

The Friar tried to lead her away, to save her life at least. But Juliet refused to leave Romeo.

She kissed his lips, hoping the poison on them might kill her too. It didn't.

So she took Romeo's dagger and drove it into her heart.

"This is thy sheath. There rust, and let me die."

Juliet collapsed across Romeo's body, joining him in death.

The Friar fled in fear and grief, leaving the lovers united at last—in death, if not in life.`,

      learningPoints: [
        {
          id: 'lp-romeo-11-timing',
          content: 'The tragedy hinges on terrible timing—Romeo arrives moments before Juliet wakes, close enough to save each other but separated by minutes.',
          category: 'literary-context',
        },
        {
          id: 'lp-romeo-11-stars',
          content: 'Romeo\'s "Then I defy you, stars!" shows him trying to take control of fate, but his defiance leads him to fulfill the very fate he resists.',
          category: 'literary-context',
        },
        {
          id: 'lp-romeo-11-union',
          content: 'The lovers\' deaths unite them permanently where life could not—a bitter fulfillment of their desire to be together forever.',
          category: 'literary-context',
        },
        {
          id: 'lp-romeo-11-near-miss',
          content: 'This tragic "near-miss" contrasts with the dark inevitability we\'ll see in Part II\'s tragedies (Othello, Macbeth) where evil is more certain.',
          category: 'reference',
        },
      ],
    },

    // Scene 10: Cause-effect - Chain of events leading to tragedy
    {
      id: 'romeo-scene-10-cause-effect',
      type: 'cause-effect',
      backgroundImage: 'https://cdn.midjourney.com/75e8d053-5770-417f-a5f2-deca438ff24f/0_2.png',

      prompt: 'Match each cause with its tragic effect in the chain of events that doomed the lovers',

      pairs: [
        {
          id: 'pair-feud',
          cause: 'The ancient feud makes Romeo and Juliet enemies by birth',
          effect: 'The lovers must marry in secret without their families knowing',
          explanation: 'The family hatred forces the lovers to hide their marriage, preventing them from seeking help openly when tragedy strikes.',
        },
        {
          id: 'pair-secret',
          cause: 'The secret marriage is hidden from everyone',
          effect: 'Romeo tries to make peace with Tybalt, but Mercutio intervenes',
          explanation: 'Romeo refuses to fight Tybalt because they\'re now family by marriage, but Mercutio doesn\'t know this and attacks Tybalt himself, seeing Romeo\'s peace-making as shameful cowardice.',
        },
        {
          id: 'pair-mercutio',
          cause: 'Mercutio dies defending Romeo\'s honor',
          effect: 'Romeo kills Tybalt in grief and rage',
          explanation: 'Mercutio\'s death transforms Romeo from peaceful lover to vengeful killer, sealing his banishment.',
        },
        {
          id: 'pair-banishment',
          cause: 'Romeo is banished from Verona',
          effect: 'Juliet is isolated and desperate when forced to marry Paris',
          explanation: 'Without Romeo nearby, Juliet has no ally when her father demands she wed Paris, driving her to extreme measures.',
        },
        {
          id: 'pair-potion',
          cause: 'Juliet takes the sleeping potion',
          effect: 'Romeo believes she is truly dead',
          explanation: 'The Friar\'s plan depends on getting a message to Romeo, but the plague prevents the letter from arriving.',
        },
        {
          id: 'pair-poison',
          cause: 'Romeo poisons himself beside Juliet\'s "corpse"',
          effect: 'Juliet wakes to find Romeo dead and kills herself',
          explanation: 'The tragic timing—Romeo dies moments before Juliet wakes—completes the chain of misunderstandings and missed chances.',
        },
      ],

      distractors: [
        'The Nurse becomes Juliet\'s trusted friend',
        'The Prince declares peace in Verona',
        'Friar Laurence becomes a wise counselor',
      ],

      learningPoints: [
        {
          id: 'lp-romeo-9-causation',
          content: 'The tragedy operates through a tight chain of cause and effect—each event flows logically from the previous, yet the outcome seems both inevitable and preventable.',
          category: 'literary-context',
        },
        {
          id: 'lp-romeo-9-fate-choice',
          content: 'The play explores whether the lovers are doomed by fate or by their own choices—the answer seems to be both, intertwined impossibly.',
          category: 'literary-context',
        },
        {
          id: 'lp-romeo-9-timing',
          content: 'Timing is crucial—the plague that prevents the letter, Romeo arriving moments before Juliet wakes—suggesting fate manipulates chance itself.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 11: Families reconcile
    {
      id: 'romeo-scene-11-reconciliation',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/32cce980-9470-44e6-998f-1635c3026992/0_0.png',
      image: 'https://cdn.midjourney.com/32cce980-9470-44e6-998f-1635c3026992/0_0.png',

      content: `Dawn broke over Verona as the Prince, the Capulets, and the Montagues gathered at the tomb, drawn by reports of death and violence in the night.

They found Romeo and Juliet lying together in death, the knife in Juliet's breast, the poison vial in Romeo's hand.

Friar Laurence, apprehended while fleeing, confessed everything. The secret marriage. The sleeping potion. The undelivered letter. The terrible chain of accidents and misunderstandings that had led to this moment.

"I am the greatest, able to do least," the Friar said, "yet most suspected, as the time and place doth make against me, of this direful murder."

But the Prince understood the truth. The Friar had tried to help. The lovers had tried to bridge the gap between their families. It was the ancient hatred itself—the senseless feud—that had killed the children.

Lord Montague and Lord Capulet stood over the bodies of their dead children and finally understood what their hatred had cost.

"O brother Montague," Capulet said, extending his hand, "give me thy hand. This is my daughter's jointure, for no more can I demand."

"But I can give thee more," Montague replied, clasping his enemy's hand. "For I will raise her statue in pure gold, that while Verona by that name is known, there shall no figure at such rate be set as that of true and faithful Juliet."

"As rich shall Romeo's by his lady's lie," Capulet answered. "Poor sacrifices of our enmity!"

The two old men embraced, their feud ended at last—too late for Romeo and Juliet, but perhaps not too late for Verona.

The Prince spoke the final words:

"A glooming peace this morning with it brings.
The sun, for sorrow, will not show his head.
Go hence, to have more talk of these sad things.
Some shall be pardoned, and some punished.
For never was a story of more woe
Than this of Juliet and her Romeo."

The families would build golden statues to commemorate the lovers. But no monument could restore what had been lost—two young lives, full of promise and love, destroyed by inherited hatred.

It took death to teach the families what love could not. Perhaps that is Romeo and Juliet's true tragedy.`,

      learningPoints: [
        {
          id: 'lp-romeo-11-reconciliation',
          content: 'The families finally make peace, but only after their children\'s deaths—showing that tragedy can teach what reason cannot.',
          category: 'literary-context',
        },
        {
          id: 'lp-romeo-11-sacrifice',
          content: 'The lovers become "poor sacrifices of our enmity," martyrs whose deaths expose the futility of the feud.',
          category: 'literary-context',
        },
        {
          id: 'lp-romeo-11-glooming-peace',
          content: 'The Prince\'s "glooming peace" is bittersweet—order is restored, but at a devastating cost that shadows any hope.',
          category: 'literary-context',
        },
        {
          id: 'lp-romeo-11-contrast',
          content: 'This reconciliation through sacrifice differs from Part II\'s dark endings (Macbeth, Othello) and Part III\'s complex resolutions, showing Shakespeare exploring different tragic outcomes.',
          category: 'reference',
        },
        {
          id: 'lp-romeo-11-bridge',
          content: 'Notice how close Romeo and Juliet comes to being a comedy—only timing makes it tragic. In Twelfth Night (next chapter), we\'ll see how comedy resolves similar obstacles.',
          category: 'reference',
        },
      ],
    },

    // Scene 12: Quote attribution - Famous lines
    {
      id: 'romeo-scene-12-quotes',
      type: 'quote-attribution',
      backgroundImage: 'https://cdn.midjourney.com/75e8d053-5770-417f-a5f2-deca438ff24f/0_2.png',

      prompt: 'Romeo and Juliet contains some of Shakespeare\'s most famous lines. Can you identify who speaks each quote?',

      quotes: [
        {
          id: 'quote-rose',
          text: 'What\'s in a name? That which we call a rose / By any other name would smell as sweet.',
          speaker: 'Juliet',
          context: 'Spoken on the balcony, lamenting that Romeo is a Montague.',
          explanation: 'Juliet argues that names are arbitrary—Romeo would still be perfect even if he weren\'t called "Montague." This reflects the play\'s exploration of identity versus social labels.',
        },
        {
          id: 'quote-light',
          text: 'But soft! What light through yonder window breaks? It is the east, and Juliet is the sun.',
          speaker: 'Romeo',
          context: 'Romeo\'s first words upon seeing Juliet on her balcony.',
          explanation: 'Romeo uses light imagery to describe Juliet, establishing the play\'s central metaphor of Juliet as light in Romeo\'s darkness.',
        },
        {
          id: 'quote-plague',
          text: 'A plague on both your houses!',
          speaker: 'Mercutio',
          context: 'Mercutio\'s dying words after being stabbed by Tybalt.',
          explanation: 'Mercutio, neither Montague nor Capulet, curses both families for the feud that caused his death. His curse seems prophetic as tragedy unfolds.',
        },
        {
          id: 'quote-parting',
          text: 'Parting is such sweet sorrow / That I shall say good night till it be morrow.',
          speaker: 'Juliet',
          context: 'Juliet to Romeo at the end of the balcony scene.',
          explanation: 'The oxymoron "sweet sorrow" captures the lovers\' paradoxical experience—the pain of separation mixed with the joy of love.',
        },
        {
          id: 'quote-stars',
          text: 'O, I am fortune\'s fool!',
          speaker: 'Romeo',
          context: 'Romeo\'s cry after killing Tybalt.',
          explanation: 'Romeo recognizes he is a plaything of fate, expressing the theme that forces beyond their control doom the lovers.',
        },
        {
          id: 'quote-death',
          text: 'For never was a story of more woe / Than this of Juliet and her Romeo.',
          speaker: 'Prince Escalus',
          context: 'The final lines of the play, after discovering the dead lovers.',
          explanation: 'The Prince\'s concluding couplet frames the tragedy as a cautionary tale, the ultimate consequence of the families\' hatred.',
        },
      ],

      learningPoints: [
        {
          id: 'lp-romeo-12-language',
          content: 'Shakespeare\'s poetic language in Romeo and Juliet balances lyrical beauty with dramatic power, making the play quotable across centuries.',
          category: 'literary-context',
        },
        {
          id: 'lp-romeo-12-imagery',
          content: 'Light/dark imagery pervades the play—Juliet is the sun, their love shines in darkness, and death is figured as eternal night.',
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

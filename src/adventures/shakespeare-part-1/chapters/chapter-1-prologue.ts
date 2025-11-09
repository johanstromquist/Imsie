import type { Chapter } from '../../../types';
import { chapter1Quiz } from '../quizzes/chapter-1-quiz';

/**
 * Chapter 1: Prologue - Welcome to Shakespeare's World
 *
 * This chapter serves as the PROLOGUE to the entire Shakespeare series (Parts I, II, III).
 * It establishes foundational knowledge about Shakespeare, the Globe Theatre, and Elizabethan
 * England that will be referenced throughout all three parts.
 */
export const chapter1: Chapter = {
  id: 'chapter-1-prologue',
  title: 'Prologue: Welcome to Shakespeare\'s World',
  description: 'Step into 1599 London and discover the life, theater, and times of William Shakespeare—the foundation for your journey through his greatest plays.',
  learningObjectives: [
    'Understand Shakespeare\'s biography and his role in the Elizabethan theater world',
    'Identify the structure and function of the Globe Theatre',
    'Recognize key aspects of Elizabethan England (social hierarchy, daily life, cultural values)',
    'Understand the basics of iambic pentameter and blank verse',
    'Recognize the distinction between Shakespeare\'s comedies, tragedies, and histories',
  ],
  scenes: [
    // Scene 1: Welcome to the Globe Theatre, 1599
    {
      id: 'scene-1-welcome-globe',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/7278f1e6-e0b6-481c-a013-14ffefc3abc0/0_0.png',
      image: 'https://cdn.midjourney.com/7278f1e6-e0b6-481c-a013-14ffefc3abc0/0_0.png',
      content: `## Welcome to London, 1599!

The autumn air is crisp as you approach the south bank of the Thames River. Rising before you is a magnificent wooden structure—the Globe Theatre, its flag flying high to announce today's performance.

"All the world's a stage," a voice will soon declare from within these walls, "and all the men and women merely players."

You are about to embark on a journey through the works of the greatest playwright in the English language: William Shakespeare. But before we explore his plays of love, disguise, and identity, we must first understand the man, his theater, and the vibrant world of Elizabethan England that shaped his art.`,
      learningPoints: [
        {
          id: 'lp-1-globe-opening',
          content: 'The Globe Theatre opened in 1599 and became the primary venue for Shakespeare\'s company, the Lord Chamberlain\'s Men (later the King\'s Men).',
          category: 'historical-context',
        },
        {
          id: 'lp-2-theatrical-world',
          content: 'Elizabethan theater was a thriving commercial enterprise, with multiple playhouses competing for audiences across London.',
          category: 'cultural-context',
        },
      ],
    },

    // Scene 2: Explore Elizabethan London
    {
      id: 'scene-2-explore-london',
      type: 'map-exploration',
      backgroundImage: 'https://cdn.midjourney.com/a6ba0b70-0320-43f4-9bd1-9fa52a736873/0_0.png',
      mapImage: '/Imsie/assets/shakespeare-part-1/maps/london.jpg',
      prompt: 'Explore the key locations of Shakespeare\'s London',
      locations: [
        {
          id: 'location-globe',
          name: 'The Globe Theatre',
          x: 52,
          y: 74,
          content: `The Globe Theatre sits on the south bank of the Thames in Bankside, outside the city's jurisdiction. This location allowed theaters to operate more freely, away from Puritan city officials who viewed plays as immoral.

The Globe is an open-air amphitheater that can hold up to 3,000 spectators. Its wooden structure is circular (actually 20-sided), with three levels of galleries surrounding a thrust stage that extends into the audience.

A flag flies from the roof when performances are scheduled—different colors indicate different types of plays.`,
          image: 'https://cdn.midjourney.com/2953272b-8210-4755-ac9c-da70a8c9ac91/0_0.png',
        },
        {
          id: 'location-thames',
          name: 'The River Thames',
          x: 71,
          y: 80,
          content: `The Thames is the lifeblood of London, serving as the primary transportation route. Thousands cross daily by ferry or the single bridge—London Bridge—which is lined with shops and houses.

Watermen ferry theatergoers across the river to Bankside, shouting "Eastward ho!" and "Westward ho!" to advertise their destinations. For a penny, you can cross to see a play.

The river is also the city's sewer, making the south bank less desirable for the wealthy but perfect for popular entertainment.`,
          image: 'https://cdn.midjourney.com/6fc1341b-a1ff-4406-8e72-10f3dcc7eefb/0_2.png',
        },
        {
          id: 'location-bankside',
          name: 'Bankside District',
          x: 44,
          y: 87,
          content: `Bankside is the entertainment district of Elizabethan London—a place of theaters, bear-baiting arenas, taverns, and brothels. The area has a rough reputation but thrives with energy.

Multiple theaters compete here: the Globe, the Rose, the Swan. On any given afternoon, you might hear five different plays being performed within earshot of each other.

The mix of high art and low entertainment creates a unique cultural melting pot where nobles, merchants, apprentices, and groundlings all gather for spectacle.`,
          image: 'https://cdn.midjourney.com/a6ba0b70-0320-43f4-9bd1-9fa52a736873/0_0.png',
        },
        {
          id: 'location-palace',
          name: 'Whitehall Palace',
          x: 14,
          y: 57,
          content: `Whitehall Palace is Queen Elizabeth I's primary residence in London. The Virgin Queen has ruled England for over 40 years, presiding over a golden age of exploration, literature, and theater.

Elizabeth herself is a patron of the arts and enjoys theatrical performances at court. Shakespeare's company performs for her regularly, and royal patronage brings prestige and protection.

The Queen's favor has helped legitimize theater as an art form worthy of respect, despite Puritan opposition.`,
          image: 'https://cdn.midjourney.com/342390df-ccb4-489e-8174-1a20b29ccf17/0_2.png',
        },
      ],
      requiredLocations: ['location-globe', 'location-bankside', 'location-thames'],
      learningPoints: [
        {
          id: 'lp-3-london-geography',
          content: 'The geography of Elizabethan London shaped theatrical culture, with playhouses located in Bankside to avoid city regulations.',
          category: 'historical-context',
        },
        {
          id: 'lp-4-cross-class-audience',
          content: 'Theaters drew audiences from all social classes, creating a unique democratic space in hierarchical Elizabethan society.',
          category: 'cultural-context',
        },
      ],
    },

    // Scene 3: Who was William Shakespeare?
    {
      id: 'scene-3-shakespeare-biography',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/67cc2936-ec28-45b4-82f8-996a1ed09618/0_0.png',
      image: 'https://cdn.midjourney.com/e9727794-023a-4323-b603-6e6650265bec/0_2.png',
      content: `## Who was William Shakespeare?

Born in Stratford-upon-Avon in April 1564, William Shakespeare was the son of John Shakespeare, a glove-maker and local official, and Mary Arden, from a prominent family. He likely attended Stratford's grammar school, receiving a solid education in Latin literature and rhetoric.

At 18, Shakespeare married Anne Hathaway, eight years his senior. They had three children together. Then, sometime in the late 1580s, Shakespeare left Stratford for London. These "lost years" remain mysterious—we don't know exactly what drew him to the theater.

By 1592, Shakespeare had established himself as both an actor and playwright in London. He became a shareholder in the Lord Chamberlain's Men, one of the leading theater companies. When the Globe opened in 1599, Shakespeare was part-owner, receiving a share of the profits.

Shakespeare wrote approximately 37 plays and 154 sonnets. He retired to Stratford around 1613 and died there in 1616, on what may have been his 52nd birthday—April 23rd.`,
      inlineAnnotations: [
        {
          id: 'annotation-lost-years',
          text: 'lost years',
          tooltip: {
            title: 'The Missing Chapter',
            content: 'We have no records of Shakespeare\'s activities between 1585 and 1592. Some speculate he was a schoolteacher, a soldier, or worked in various trades. This gap has fueled centuries of speculation and mystery.',
            category: 'historical-context',
          },
        },
        {
          id: 'annotation-37-plays',
          text: '37 plays',
          tooltip: {
            title: 'Shakespeare\'s Complete Works',
            content: 'Scholars generally agree on 37 plays, though some collaborations and disputed works complicate the count. The plays are divided into comedies, tragedies, and histories.',
            category: 'reference',
          },
        },
      ],
      learningPoints: [
        {
          id: 'lp-5-shakespeare-biography',
          content: 'Shakespeare came from a middle-class background and rose to become one of England\'s most successful playwrights through talent and business acumen.',
          category: 'historical-context',
        },
        {
          id: 'lp-6-shareholder-model',
          content: 'Shakespeare was unusual in being both a writer and a shareholder in his theater company, giving him creative and financial control.',
          category: 'cultural-context',
        },
      ],
    },

    // Scene 4: Examine the First Folio
    {
      id: 'scene-4-first-folio',
      type: 'primary-source',
      backgroundImage: 'https://cdn.midjourney.com/67cc2936-ec28-45b4-82f8-996a1ed09618/0_0.png',
      prompt: 'Examine the First Folio, the first collected edition of Shakespeare\'s plays',
      source: {
        title: 'Mr. William Shakespeare\'s Comedies, Histories, & Tragedies',
        author: 'William Shakespeare (compiled by John Heminges and Henry Condell)',
        date: '1623',
        type: 'text',
        content: `To the great Variety of Readers.

From the most able, to him that can but spell: There you are number'd. We had rather you were weighd. Especially, when the fate of all Bookes depends upon your capacities: and not of your heads alone, but of your purses.

It had bene a thing, we confesse, worthie to have bene wished, that the Author himselfe had liv'd to have set forth, and overseen his owne writings; But since it hath bin ordain'd otherwise, and he by death departed from that right, we pray you do not envie his Friends, the office of their care, and paine, to have collected & publish'd them.

We have but collected them, and done an office to the dead, to procure his Orphanes, Guardians; without ambition either of selfe-profit, or fame: onely to keepe the memory of so worthy a Friend, & Fellow alive, as was our Shakespeare.`,
        citation: 'The First Folio, 1623, "To the great Variety of Readers" (modern spelling adjusted for readability)',
      },
      questions: [
        {
          id: 'q1',
          question: 'Why is the First Folio significant in preserving Shakespeare\'s work?',
          type: 'multiple-choice',
          options: [
            'It was the only way Shakespeare\'s plays were ever written down',
            'Without it, about half of Shakespeare\'s plays might have been lost forever',
            'It proved Shakespeare was the true author of the plays',
            'It was the first time plays were considered worthy of publication',
          ],
          correctAnswer: 'Without it, about half of Shakespeare\'s plays might have been lost forever',
          explanation: 'The First Folio, published seven years after Shakespeare\'s death, preserved 36 of his plays. About half had never been printed before, including masterpieces like Macbeth, Julius Caesar, Twelfth Night, and As You Like It. Without the dedication of his fellow actors John Heminges and Henry Condell, these works might have been lost.',
        },
        {
          id: 'q2',
          question: 'What does the preface reveal about attitudes toward published plays in 1623?',
          type: 'multiple-choice',
          options: [
            'Plays were considered the highest form of literature',
            'Publishing plays was unusual and required justification—this was done out of friendship',
            'Only wealthy people could read published plays',
            'Plays were banned from publication by the government',
          ],
          correctAnswer: 'Publishing plays was unusual and required justification—this was done out of friendship',
          explanation: 'The editors emphasize they are doing this "without ambition either of selfe-profit, or fame" but purely to honor their "worthy Friend." This reflects the era\'s view that plays were popular entertainment, not "serious" literature worthy of permanent publication. The First Folio helped elevate drama\'s literary status.',
        },
        {
          id: 'q3',
          question: 'How does the preface address readers "from the most able, to him that can but spell"?',
          type: 'multiple-choice',
          options: [
            'It suggests only educated readers should buy the book',
            'It indicates the book was intended for readers of all literacy levels and social classes',
            'It mocks readers who cannot read well',
            'It explains that the book requires advanced education to understand',
          ],
          correctAnswer: 'It indicates the book was intended for readers of all literacy levels and social classes',
          explanation: 'This opening line is surprisingly democratic for 1623. It welcomes everyone from scholars ("the most able") to those barely literate ("him that can but spell"), reflecting theater\'s cross-class appeal. However, it then suggests readers are "weighd" by their judgment and their purses—acknowledging the book\'s price (about £1, equivalent to several weeks\' wages for a laborer).',
        },
      ],
      learningPoints: [
        {
          id: 'lp-7-first-folio-importance',
          content: 'The First Folio (1623) preserved half of Shakespeare\'s plays that had never been printed, ensuring their survival for future generations.',
          category: 'historical-context',
        },
        {
          id: 'lp-8-plays-as-literature',
          content: 'The First Folio helped establish plays as worthy of literary preservation, elevating theater from mere popular entertainment to art.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 5: Inside the Globe Theatre
    {
      id: 'scene-5-inside-globe',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/2953272b-8210-4755-ac9c-da70a8c9ac91/0_0.png',
      image: 'https://cdn.midjourney.com/e2a41e33-bd37-48eb-9826-96bf44f8d167/0_2.png',
      content: `## Step inside the Globe Theatre!

The theater is circular, open to the sky, with three levels of covered galleries surrounding a thrust stage. The stage extends into the yard, where "groundlings" stand for a penny—the cheapest admission.

For another penny, you can sit in the galleries. For sixpence, you might get a cushioned seat in the upper gallery, closest to the gentry. The most expensive seats are actually on the stage itself, where wealthy patrons can show off their fine clothes.

The stage has no curtain and minimal scenery. A painted backdrop and a few props suggest the setting—the audience's imagination does the rest. Two doors at the back provide entrances and exits. Above is a balcony (perfect for Romeo and Juliet's famous scene), and below is a trapdoor for ghosts and special effects.

The "heavens"—a painted ceiling over part of the stage—depicts the cosmos. The underside of the stage is called "hell." Thus, the Globe contains the entire universe: heaven, earth, and hell on a single platform.

Performances happen in daylight (usually 2 PM), rain or shine. The flag flying outside tells you what to expect: white for comedy, black for tragedy, red for history. Today, white flutters in the breeze.`,
      inlineAnnotations: [
        {
          id: 'annotation-groundlings',
          text: 'groundlings',
          tooltip: {
            title: 'The Standing Crowd',
            content: 'Groundlings stood in the pit (the yard) for the entire 2-3 hour performance. They were often rowdy, eating, drinking, and heckling actors. Shakespeare wrote comedy and action scenes partly to keep groundlings engaged, calling them "the understanding gentlemen of the ground" (with some irony).',
            category: 'cultural-context',
          },
        },
      ],
      learningPoints: [
        {
          id: 'lp-9-globe-structure',
          content: 'The Globe\'s architectural design—thrust stage, multiple levels, trapdoor, balcony—enabled Shakespeare to stage complex action and move fluidly between locations.',
          category: 'cultural-context',
        },
        {
          id: 'lp-10-universal-theater',
          content: 'The Globe represented the entire cosmos (heaven, earth, hell) in its structure, reinforcing the metaphor that theater mirrors all of life.',
          category: 'literary-context',
        },
        {
          id: 'lp-11-cross-reference-globe',
          content: 'The Globe Theatre techniques we observe here—minimal scenery, direct address to audience, rapid scene changes—will appear in all the plays we study throughout this series (Parts I, II, and III).',
          category: 'reference',
        },
      ],
    },

    // Scene 6: Conversation with theater company member
    {
      id: 'scene-6-dialogue-company',
      type: 'dialogue',
      backgroundImage: 'https://cdn.midjourney.com/2953272b-8210-4755-ac9c-da70a8c9ac91/0_0.png',
      character: {
        id: 'richard-burbage',
        name: 'Richard Burbage',
        portrait: 'https://cdn.midjourney.com/80f05d17-1361-4863-a4c7-708234426bd5/0_3.png',
        description: 'Lead actor of the Lord Chamberlain\'s Men and Shakespeare\'s longtime collaborator',
      },
      dialogueTree: {
        id: 'node-1',
        speaker: 'richard-burbage',
        text: 'Welcome backstage at the Globe! I\'m Richard Burbage, lead actor of the Lord Chamberlain\'s Men. You\'ve arrived just as we\'re preparing for this afternoon\'s performance. What would you like to know about our work?',
        responses: [
          {
            id: 'response-shakespeare',
            text: 'Tell me about working with Shakespeare',
            nextNodeId: 'node-shakespeare',
          },
          {
            id: 'response-audience',
            text: 'What is performing for these audiences like?',
            nextNodeId: 'node-audience',
          },
          {
            id: 'response-roles',
            text: 'How do you create so many different characters?',
            nextNodeId: 'node-roles',
          },
        ],
        allNodes: [
          {
            id: 'node-shakespeare',
            speaker: 'richard-burbage',
            text: 'Ah, Will Shakespeare! The man is a marvel. He writes with the company in mind—he knows my voice, my strengths, even my weaknesses. When he writes a role, I can hear myself speaking the lines before I\'ve even read them. He\'s both playwright and actor, you see, so he understands what works on stage. And he\'s not precious about his words—if something doesn\'t play well, he\'ll rewrite it on the spot!',
            responses: [
              {
                id: 'response-continue-1',
                text: 'What about the audiences?',
                nextNodeId: 'node-audience',
                learningPoints: [
                  {
                    id: 'lp-12-collaborative-writing',
                    content: 'Shakespeare wrote with specific actors in mind, tailoring roles to their strengths and adjusting scripts based on what worked in performance.',
                    category: 'literary-context',
                  },
                ],
              },
              {
                id: 'response-continue-2',
                text: 'Tell me about playing different roles',
                nextNodeId: 'node-roles',
              },
            ],
          },
          {
            id: 'node-audience',
            speaker: 'richard-burbage',
            text: 'The audiences! They\'re like a living beast. Groundlings in the yard shout, laugh, weep—they let you know immediately if a scene works. The gentry in the galleries might be more reserved, but they\'re listening closely. We must satisfy both the apprentice who paid a penny and the earl who paid sixpence. That\'s why Shakespeare mixes high poetry with bawdy jokes, philosophy with swordplay.',
            responses: [
              {
                id: 'response-continue-3',
                text: 'How do you handle creating characters?',
                nextNodeId: 'node-roles',
                learningPoints: [
                  {
                    id: 'lp-13-mixed-audience',
                    content: 'Shakespeare\'s plays blend high and low art—poetic soliloquies alongside bawdy humor—to engage audiences across all social classes.',
                    category: 'literary-context',
                  },
                ],
              },
              {
                id: 'response-finish',
                text: 'Thank you for the insights',
                nextNodeId: 'node-farewell',
              },
            ],
          },
          {
            id: 'node-roles',
            speaker: 'richard-burbage',
            text: 'I\'ve played Romeo, Hamlet, Othello, King Lear—each demands something different. Shakespeare writes such depth into his characters that I must find the truth in each one. A prince is not just "noble"—he doubts, fears, loves. I draw on observation, imagination, and experience. And remember, we have no long rehearsal time! We must be ready quickly, learning lines while performing other plays.',
            responses: [
              {
                id: 'response-continue-4',
                text: 'What is Shakespeare like to work with?',
                nextNodeId: 'node-shakespeare',
                learningPoints: [
                  {
                    id: 'lp-14-character-depth',
                    content: 'Shakespearean characters have psychological depth and complexity that requires actors to find the human truth beneath the poetry.',
                    category: 'literary-context',
                  },
                ],
              },
              {
                id: 'response-continue-5',
                text: 'Tell me about the audiences',
                nextNodeId: 'node-audience',
              },
            ],
          },
          {
            id: 'node-farewell',
            speaker: 'richard-burbage',
            text: 'You\'re most welcome! The performance begins soon—you\'ll see for yourself how the magic happens. Remember, in the theater, we hold a mirror up to nature. What you see on this stage is nothing less than life itself!',
            isEnd: true,
          },
        ],
      },
      learningPoints: [
        {
          id: 'lp-15-actor-collaboration',
          content: 'Shakespeare\'s partnership with lead actor Richard Burbage shaped the creation of his greatest roles, from Romeo to Hamlet to Lear.',
          category: 'historical-context',
        },
      ],
    },

    // Scene 7: Iambic pentameter rhythm game
    {
      id: 'scene-7-iambic-rhythm',
      type: 'custom-mini-game',
      backgroundImage: 'https://cdn.midjourney.com/d2631b5a-8bb9-4603-9869-4fc8389cd392/0_0.png',
      gameType: 'rhythm-game',
      config: {
        audioFile: '/Imsie/assets/shakespeare-part-1/music/pentameter.mp3',
        beats: [
          8.817, 9.277, 9.736, 10.665, 11.018,
          12.929, 13.259, 13.825, 14.377, 14.704,
          16.465, 17.113, 17.643, 18.016, 18.713,
          20.202, 20.473, 21.361, 21.825, 22.242,
          23.721, 24.049, 24.625, 25.882, 26.769,
          27.848, 29.096, 29.424, 30.001, 30.417,
          31.514, 32.089, 32.618, 33.17, 33.752,
          35.281, 36.522, 39.807,
        ],
        tolerance: 0.15,
        backgroundImage: 'https://cdn.midjourney.com/b0ffc9da-f5fb-4471-b9ed-9cea54bf39c5/0_0.png',
        introImage: 'https://cdn.midjourney.com/fb520797-1e9a-4079-aa4d-2fd4f0401e63/0_3.png',
        title: 'The Rhythm of Shakespeare\'s Verse',
        introText: 'Shakespeare wrote most of his plays in iambic pentameter—a rhythmic pattern that mimics natural English speech. An iamb is an unstressed syllable followed by a stressed syllable (da-DUM), and pentameter means five iambs per line. Learn the rhythm by tapping along!',
        instructionsText: 'Listen for the stressed syllables (the "DUM" in da-DUM) and press SPACEBAR or click when you hear them. Each line has five stressed beats.',
        startButtonText: 'Begin the Lesson',
        successTitle: 'You Found the Rhythm!',
        successText: 'You\'ve discovered the heartbeat of Shakespeare\'s verse! This rhythm—iambic pentameter—flows through his plays like a pulse, from the romantic comedies of Part I to the dark tragedies of Part II and the complex dramas of Part III.',
        failureTitle: 'Practice Makes Perfect',
        failureText: 'Iambic pentameter takes practice to hear. Don\'t worry—you\'ll encounter this rhythm throughout your journey with Shakespeare!',
        continueButtonText: 'Continue →',
        passingScore: 60,
        showAccuracyInResults: true,
        showComboInResults: true,
      },
      learningPoints: [
        {
          id: 'lp-16-iambic-pentameter',
          content: 'Iambic pentameter (five pairs of unstressed-stressed syllables) creates a rhythm that sounds natural in English while elevating everyday speech to poetry.',
          category: 'literary-context',
        },
        {
          id: 'lp-17-verse-prose',
          content: 'Shakespeare shifts between verse (for nobles, heightened emotion, soliloquies) and prose (for commoners, comedy, madness), using form to convey meaning.',
          category: 'literary-context',
        },
        {
          id: 'lp-18-cross-reference-verse',
          content: 'This iambic rhythm will pulse through all of Shakespeare\'s plays—from the romantic poetry of Romeo and Juliet (Part I) to the tortured soliloquies of Hamlet (Part III).',
          category: 'reference',
        },
      ],
      events: {
        onEnter: [{
          type: 'music-fade',
          fadeDirection: 'out',
          fadeDuration: 2000,
          targetVolume: 0,
        }],
        onExit: [{
          type: 'music-fade',
          fadeDirection: 'in',
          fadeDuration: 2000,
          targetVolume: 1,
        }],
        onBack: [{
          type: 'music-fade',
          fadeDirection: 'in',
          fadeDuration: 2000,
          targetVolume: 1,
        }],
      },
    },

    // Scene 8: Elizabethan England context
    {
      id: 'scene-8-elizabethan-context',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/a6ba0b70-0320-43f4-9bd1-9fa52a736873/0_0.png',
      image: 'https://cdn.midjourney.com/a6ba0b70-0320-43f4-9bd1-9fa52a736873/0_0.png',
      content: `## Elizabethan England: A World of Contrasts

The England of Shakespeare's time is a land of dramatic contrasts. Queen Elizabeth I, the "Virgin Queen," has ruled for over 40 years, presiding over an era of exploration, cultural flowering, and relative peace.

Yet this is also a world of rigid social hierarchy. The Great Chain of Being orders all creation from God down to the lowest creatures. Everyone has their place: monarch, nobility, gentry, merchants, artisans, laborers. To challenge this order is to challenge God himself—a theme that will echo through many of Shakespeare's plays, especially the tragedies we'll encounter in Part II.

London is a city of about 200,000 people, growing rapidly. Wealth flows from new trade routes, but poverty is widespread. The plague strikes regularly, closing theaters and killing thousands. When plague deaths exceed 30 per week, all public gatherings are banned.

Education is expanding. Grammar schools teach Latin, rhetoric, and classical texts to middle-class boys like young William Shakespeare. But most people remain illiterate. Theater provides education, entertainment, and shared cultural experience for all classes.

Religious tension simmers beneath the surface. England is Protestant, but Catholic sympathies remain strong. Puritans view theaters as sinful. In this atmosphere, playwrights must navigate politics carefully—which is why Shakespeare often sets his plays in Italy, Denmark, or ancient Rome rather than England.`,
      inlineAnnotations: [
        {
          id: 'annotation-great-chain',
          text: 'Great Chain of Being',
          tooltip: {
            title: 'The Divine Hierarchy',
            content: 'The Great Chain of Being was the Elizabethan worldview: a divinely ordered hierarchy with God at the top, then angels, humans (king, nobles, commoners), animals, plants, and minerals. Disrupting this order—like killing a king—was thought to cause chaos in nature itself. This belief underlies many of Shakespeare\'s tragedies, particularly in Parts II and III.',
            category: 'cultural-context',
          },
        },
        {
          id: 'annotation-plague',
          text: 'plague',
          tooltip: {
            title: 'The Black Death\'s Legacy',
            content: 'Bubonic plague, the "Black Death," struck London regularly. The Globe closed during outbreaks, forcing theater companies to tour the countryside or face bankruptcy. Shakespeare lived through multiple plague years. The disease killed indiscriminately, reinforcing both fatalism and the urgency to enjoy life—themes in many of his comedies.',
            category: 'historical-context',
          },
        },
      ],
      learningPoints: [
        {
          id: 'lp-19-social-hierarchy',
          content: 'Elizabethan society\'s rigid social hierarchy shaped Shakespeare\'s plays, where characters who disrupt the natural order often face tragic consequences—a theme central to Part II.',
          category: 'cultural-context',
        },
        {
          id: 'lp-20-religious-politics',
          content: 'Shakespeare navigated religious and political tensions by setting plays in foreign lands, allowing him to explore dangerous themes like power, betrayal, and rebellion safely.',
          category: 'historical-context',
        },
        {
          id: 'lp-21-cross-reference-context',
          content: 'These Elizabethan values about honor, hierarchy, and social class will create conflict in both the comedies of Part I and the tragedies of Parts II and III.',
          category: 'reference',
        },
      ],
    },

    // Scene 9: Timeline game - Shakespeare's life
    {
      id: 'scene-9-timeline-shakespeare',
      type: 'timeline-game',
      backgroundImage: 'https://cdn.midjourney.com/75e8d053-5770-417f-a5f2-deca438ff24f/0_2.png',
      prompt: 'Order these key events in Shakespeare\'s life',
      timelineEvents: [
        {
          id: 'event-birth',
          title: 'Birth in Stratford',
          year: 1564,
          description: 'William Shakespeare is born in Stratford-upon-Avon to John Shakespeare, a glove-maker and local official, and Mary Arden. He likely attends the local grammar school, receiving a solid education in Latin literature and rhetoric.',
          image: 'https://cdn.midjourney.com/67cc2936-ec28-45b4-82f8-996a1ed09618/0_0.png',
        },
        {
          id: 'event-marriage',
          title: 'Marriage to Anne Hathaway',
          year: 1582,
          description: 'At age 18, Shakespeare marries Anne Hathaway, age 26. They have three children: Susanna (1583) and twins Hamnet and Judith (1585).',
          image: 'https://cdn.midjourney.com/67cc2936-ec28-45b4-82f8-996a1ed09618/0_0.png',
        },
        {
          id: 'event-london',
          title: 'Arrival in London',
          year: 1592,
          description: 'By 1592, Shakespeare has established himself in London as both an actor and playwright. The "lost years" between leaving Stratford and arriving in London remain a mystery.',
          image: 'https://cdn.midjourney.com/a6ba0b70-0320-43f4-9bd1-9fa52a736873/0_0.png',
        },
        {
          id: 'event-company',
          title: 'Joining the Lord Chamberlain\'s Men',
          year: 1594,
          description: 'Shakespeare becomes a shareholder in the Lord Chamberlain\'s Men, one of London\'s premier theater companies. This partnership gives him both creative and financial control.',
          image: 'https://cdn.midjourney.com/2953272b-8210-4755-ac9c-da70a8c9ac91/0_0.png',
        },
        {
          id: 'event-globe',
          title: 'The Globe Theatre Opens',
          year: 1599,
          description: 'The Globe Theatre opens in Bankside with Shakespeare as part-owner, receiving a share of the profits. It becomes the primary venue for his company\'s performances.',
          image: 'https://cdn.midjourney.com/7278f1e6-e0b6-481c-a013-14ffefc3abc0/0_0.png',
        },
        {
          id: 'event-retirement',
          title: 'Retirement to Stratford',
          year: 1613,
          description: 'Shakespeare retires to Stratford around 1613, having achieved both artistic success and financial security. He has written approximately 37 plays and 154 sonnets.',
          image: 'https://cdn.midjourney.com/67cc2936-ec28-45b4-82f8-996a1ed09618/0_0.png',
        },
        {
          id: 'event-death',
          title: 'Death',
          year: 1616,
          description: 'Shakespeare dies in Stratford on April 23rd, 1616, possibly on his 52nd birthday. He is buried in Holy Trinity Church.',
          image: 'https://cdn.midjourney.com/67cc2936-ec28-45b4-82f8-996a1ed09618/0_0.png',
        },
        {
          id: 'event-first-folio',
          title: 'First Folio Published',
          year: 1623,
          description: 'Seven years after Shakespeare\'s death, his fellow actors John Heminges and Henry Condell publish the First Folio, preserving 36 of his plays—about half had never been printed before.',
          image: 'https://cdn.midjourney.com/75e8d053-5770-417f-a5f2-deca438ff24f/0_2.png',
        },
      ],
      successThreshold: 70,
      learningPoints: [
        {
          id: 'lp-22-career-arc',
          content: 'Shakespeare\'s career evolved from early comedies and histories through romantic works to profound tragedies and finally to late romances—a progression we\'ll trace through Parts I, II, and III.',
          category: 'historical-context',
        },
        {
          id: 'lp-23-business-success',
          content: 'Shakespeare\'s success as both artist and businessman was unusual, giving him creative freedom and financial security rare for playwrights of his era.',
          category: 'historical-context',
        },
      ],
    },

    // Scene 10: Introduction to three genres
    {
      id: 'scene-10-three-genres',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/2953272b-8210-4755-ac9c-da70a8c9ac91/0_0.png',
      image: 'https://cdn.midjourney.com/2953272b-8210-4755-ac9c-da70a8c9ac91/0_0.png',
      content: `## The Three Faces of Shakespeare

Shakespeare wrote three main types of plays: comedies, tragedies, and histories. Each explores different aspects of human experience, but all share his genius for language, character, and insight into the human condition.

**Comedies** end in marriage and celebration. They explore love, identity, disguise, and the triumph of youth over age. Misunderstandings multiply, but order is restored by the final act. Comedies affirm life's possibilities and the power of love to overcome obstacles. Think of mistaken identities, witty banter, music, and multiple weddings.

**Tragedies** end in death and destruction. They explore ambition, jealousy, revenge, and fatal flaws. The protagonist—often a noble figure—makes choices that lead to catastrophe. Tragedies force us to confront mortality, suffering, and the limits of human power. The tone is somber, the poetry darker, the questions more troubling.

**Histories** dramatize the reigns of English kings, exploring power, politics, and leadership. They blend comedy and tragedy, showing how personal failings affect entire nations. Shakespeare used history to examine timeless questions about legitimacy, rebellion, honor, and the nature of kingship.

Throughout this adventure series, you'll experience all three genres:

**Part I: Love, Identity & Disguise** focuses on comedies and one romantic tragedy (Romeo and Juliet). You'll explore themes of love, disguise, and self-discovery in a lighter tone.

**Part II: Power, Ambition, Jealousy & Guilt** plunges into the great tragedies—Macbeth, Othello, King Lear. You'll confront darker themes of ambition, corruption, and destruction.

**Part III: Betrayal, Revenge, Justice & Reconciliation** examines problem plays and late works, including Hamlet and The Tempest, exploring revenge, political betrayal, and the possibility of redemption.

But it all begins here, in the Globe Theatre, with a simple question: What happens when two young lovers from feuding families fall in love at first sight?`,
      learningPoints: [
        {
          id: 'lp-24-three-genres',
          content: 'Shakespeare\'s comedies, tragedies, and histories each use distinct structures and tones to explore different aspects of human experience.',
          category: 'literary-context',
        },
        {
          id: 'lp-25-comedy-structure',
          content: 'Shakespearean comedy follows a pattern: disruption of social order, confusion and disguise, resolution through revelation, and restoration of harmony through marriage.',
          category: 'literary-context',
        },
        {
          id: 'lp-26-tragedy-structure',
          content: 'Shakespearean tragedy follows a pattern: a noble protagonist with a fatal flaw makes choices that lead to suffering, insight, and ultimately death—themes we\'ll explore deeply in Part II.',
          category: 'literary-context',
        },
        {
          id: 'lp-27-series-progression',
          content: 'This three-part series moves from the comedies and romantic tragedy of Part I, through the dark tragedies of Part II, to the complex problem plays and reconciliation of Part III—mirroring Shakespeare\'s own creative evolution.',
          category: 'reference',
        },
      ],
      events: {
        onExit: [{
          type: 'quiz',
          componentId: 'quiz-chapter-1',
          condition: { type: 'if-not-completed' },
        }],
      },
    },
  ],

  endQuiz: chapter1Quiz,
};

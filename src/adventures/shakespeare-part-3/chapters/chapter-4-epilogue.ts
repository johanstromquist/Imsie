import type { Chapter } from '../../../types';
import { chapter4Quiz } from '../quizzes/chapter-4-quiz';

export const chapter4Epilogue: Chapter = {
  id: 'chapter-4-epilogue',
  title: 'Epilogue: Shakespeare\'s Legacy - "All the World\'s a Stage"',
  description: 'Step back from the plays to explore Shakespeare\'s enduring influence on language, literature, and culture. Why does the Bard still matter 400 years later?',

  learningObjectives: [
    'Evaluate Shakespeare\'s lasting influence on English language (words and phrases he invented)',
    'Analyze how Shakespeare\'s archetypes persist in modern storytelling (film, TV, literature)',
    'Understand Shakespeare\'s historical context and how he transcended it',
    'Recognize adaptations and transformations of Shakespeare in contemporary culture',
    'Synthesize the entire trilogy: From comedy to tragedy to wisdom',
  ],

  scenes: [
    // Scene 1: Introduction - Why Shakespeare Still Matters
    {
      id: 'epilogue-scene-1-intro',
      type: 'narrative',
      backgroundImage: '[PLACEHOLDER-BG]/globe-exterior.png',
      image: '[PLACEHOLDER-IMG]/shakespeare-portrait.png',

      content: `The play is done. The actors take their bows.

But Shakespeare's story does not end with The Tempest.

Four hundred years after his death, William Shakespeare remains the most performed, adapted, translated, and quoted playwright in history. His words are embedded in our language. His characters inhabit our imaginations. His stories have been retold in every medium from opera to anime.

Why?

What is it about a glove-maker's son from a market town in rural England that still speaks to audiences across centuries and cultures?

In this final chapter, we step back from the plays themselves to ask larger questions:
- How did Shakespeare shape the English language?
- What makes his characters so enduring?
- How do modern artists continue to adapt and transform his work?
- And what have we learned from this trilogy—from comedies of love, through tragedies of power, to the wisdom of reconciliation?

Let's explore the legacy of the Bard.`,

      learningPoints: [
        {
          id: 'lp-epilogue-1-endurance',
          content: 'Shakespeare\'s works have been continuously performed for over 400 years—a record of cultural endurance unmatched in Western literature.',
          category: 'cultural-context',
        },
        {
          id: 'lp-epilogue-1-universal',
          content: 'Shakespeare\'s global popularity suggests that his themes—love, power, jealousy, forgiveness—are genuinely universal human concerns.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 2: Historical Context
    {
      id: 'epilogue-scene-2-history',
      type: 'narrative',
      backgroundImage: '[PLACEHOLDER-BG]/elizabethan-london.png',
      image: '[PLACEHOLDER-IMG]/globe-theatre.png',

      content: `William Shakespeare was born in 1564 in Stratford-upon-Avon, a small English market town. His father was a glove-maker and local official; his mother came from a prosperous farming family.

We know surprisingly little about his life. No personal letters survive. We have legal documents, business records, and the plays themselves—but Shakespeare the man remains mysterious.

What we do know: By 1592, he was working in London as an actor and playwright. He became a shareholder in the Lord Chamberlain's Men (later the King's Men), the most successful acting company of the age. They built the Globe Theatre in 1599, and Shakespeare's plays were its main attraction.

He wrote approximately 37 plays over a 25-year career—comedies, tragedies, histories, romances. He collaborated with other writers, acted in his own productions, and became wealthy enough to purchase one of the largest houses in Stratford.

He retired around 1613 and died in 1616, at age 52.

Yet this provincial playwright, writing for a wooden theater that held 3,000 groundlings paying a penny each, produced works that would outlast empires.`,

      inlineAnnotations: [
        {
          id: 'annotation-globe',
          text: 'Globe Theatre',
          tooltip: {
            title: 'The Globe',
            content: 'The original Globe was built from timber salvaged from another theater. It burned down in 1613 during a performance of Henry VIII when a cannon misfired. A reconstruction opened in 1997 near the original site in London.',
            category: 'historical-context',
          },
        },
      ],

      learningPoints: [
        {
          id: 'lp-epilogue-2-mystery',
          content: 'The scarcity of biographical information about Shakespeare has fueled centuries of speculation—and conspiracy theories about authorship.',
          category: 'historical-context',
        },
        {
          id: 'lp-epilogue-2-business',
          content: 'Shakespeare was a practical theater professional—part playwright, part actor, part businessman. His art emerged from commercial necessity as much as artistic vision.',
          category: 'historical-context',
        },
      ],
    },

    // Scene 3: Custom Mini-Game - Language Matching
    {
      id: 'epilogue-scene-3-language',
      type: 'custom-mini-game',
      backgroundImage: '[PLACEHOLDER-BG]/shakespeare-study.png',

      gameType: 'memory-match',
      config: {
        title: 'Shakespeare\'s Words',
        instructions: 'Match each common modern phrase to its Shakespearean origin. These phrases were invented or popularized by Shakespeare.',
        pairs: [
          {
            id: 'pair-1',
            term: 'Break the ice',
            definition: 'The Taming of the Shrew - to initiate social interaction',
          },
          {
            id: 'pair-2',
            term: 'Wild goose chase',
            definition: 'Romeo and Juliet - a hopeless pursuit',
          },
          {
            id: 'pair-3',
            term: 'Heart of gold',
            definition: 'Henry V - someone with a generous, kind nature',
          },
          {
            id: 'pair-4',
            term: 'Wear your heart on your sleeve',
            definition: 'Othello - to show emotions openly',
          },
          {
            id: 'pair-5',
            term: 'In a pickle',
            definition: 'The Tempest - in a difficult situation',
          },
          {
            id: 'pair-6',
            term: 'Good riddance',
            definition: 'Troilus and Cressida - relief at someone\'s departure',
          },
        ],
      },

      learningPoints: [
        {
          id: 'lp-epilogue-3-phrases',
          content: 'Shakespeare invented or popularized over 1,700 words and countless phrases now embedded in everyday English.',
          category: 'cultural-context',
        },
      ],
    },

    // Scene 4: Linguistic Legacy
    {
      id: 'epilogue-scene-4-words',
      type: 'narrative',
      backgroundImage: '[PLACEHOLDER-BG]/library.png',
      image: '[PLACEHOLDER-IMG]/dictionary.png',

      content: `Shakespeare didn't just write plays. He expanded the English language itself.

Scholars estimate that Shakespeare invented or first recorded over 1,700 words. Some examples:

**Words Shakespeare invented:**
- Assassination
- Bedroom
- Lonely
- Generous
- Hurry
- Gloomy
- Laughable
- Majestic
- Obscene
- Suspicious

**Phrases Shakespeare popularized:**
- "Break the ice"
- "Wear your heart on your sleeve"
- "Wild goose chase"
- "Heart of gold"
- "Kill with kindness"
- "Laughing stock"
- "Love is blind"
- "Star-crossed lovers"
- "Too much of a good thing"

Every day, in casual conversation, we quote Shakespeare without knowing it. He didn't just describe human experience—he gave us the words to describe it.

This linguistic innovation came from necessity: the English language of 1600 was still developing, and Shakespeare needed words that didn't exist. So he created them—from Latin roots, from other languages, from combining existing words.

The language expanded to contain his thought, and we inherited the expanded language.`,

      learningPoints: [
        {
          id: 'lp-epilogue-4-invention',
          content: 'Shakespeare\'s linguistic creativity reflects Renaissance English—a language actively expanding through contact with Latin, Italian, and new ideas.',
          category: 'historical-context',
        },
        {
          id: 'lp-epilogue-4-legacy',
          content: 'Shakespeare\'s linguistic inventions demonstrate how individual artists can permanently shape the tools of thought available to their culture.',
          category: 'cultural-context',
        },
      ],
    },

    // Scene 5: Quote Attribution - Across the Trilogy
    {
      id: 'epilogue-scene-5-quotes',
      type: 'quote-attribution',
      backgroundImage: '[PLACEHOLDER-BG]/scroll-background.png',

      prompt: 'Test your knowledge of quotes from across the entire Shakespeare trilogy. Which play does each quote come from?',

      quotes: [
        {
          id: 'quote-1',
          text: 'What\'s in a name? That which we call a rose by any other name would smell as sweet.',
          speaker: 'Juliet (Part I - Romeo and Juliet)',
          context: 'Juliet argues that Romeo\'s family name should not define him.',
          explanation: 'A philosophical statement about identity and naming that has become a common expression.',
        },
        {
          id: 'quote-2',
          text: 'Out, out, brief candle! Life\'s but a walking shadow.',
          speaker: 'Macbeth (Part II - Macbeth)',
          context: 'Macbeth\'s response to news of Lady Macbeth\'s death—nihilistic despair.',
          explanation: 'One of literature\'s most powerful expressions of existential meaninglessness.',
        },
        {
          id: 'quote-3',
          text: 'Lord, what fools these mortals be!',
          speaker: 'Puck (Part I - A Midsummer Night\'s Dream)',
          context: 'Puck observes the chaos caused by his love potions.',
          explanation: 'A comedic perspective on human folly—ironic since the chaos is Puck\'s own doing.',
        },
        {
          id: 'quote-4',
          text: 'The quality of mercy is not strained; it droppeth as the gentle rain from heaven.',
          speaker: 'Portia (The Merchant of Venice)',
          context: 'Portia argues for mercy in a trial scene.',
          explanation: 'Shakespeare\'s most eloquent defense of mercy over strict justice.',
        },
        {
          id: 'quote-5',
          text: 'Nothing will come of nothing.',
          speaker: 'King Lear (Part II - King Lear)',
          context: 'Lear\'s response when Cordelia refuses to flatter him.',
          explanation: 'An ancient philosophical maxim that becomes ironic—from nothing, catastrophe comes.',
        },
        {
          id: 'quote-6',
          text: 'Cowards die many times before their deaths; the valiant never taste of death but once.',
          speaker: 'Caesar (Part III - Julius Caesar)',
          context: 'Caesar dismisses warnings about the Ides of March.',
          explanation: 'Bravery as facing death once, honestly, rather than living in constant fear—ironic given his imminent murder.',
        },
      ],

      learningPoints: [
        {
          id: 'lp-epilogue-5-quotable',
          content: 'Shakespeare\'s quotability reflects his ability to crystallize complex ideas into memorable phrases—a skill that transcends historical context.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 6: Character Archetypes
    {
      id: 'epilogue-scene-6-archetypes',
      type: 'narrative',
      backgroundImage: '[PLACEHOLDER-BG]/theater-stage.png',
      image: '[PLACEHOLDER-IMG]/character-masks.png',

      content: `Shakespeare's characters have become archetypes—patterns that recur across all storytelling.

**The Star-Crossed Lovers (Romeo and Juliet)**
From West Side Story to Titanic, the tale of lovers doomed by circumstances beyond their control endures. Every "forbidden love" story owes something to Romeo and Juliet.

**The Jealous Destroyer (Othello)**
Iago's motiveless malignity and Othello's consuming jealousy appear in countless villains and tragic figures—from Iago-like manipulators in Game of Thrones to jealousy-driven catastrophes in modern drama.

**The Ambitious Usurper (Macbeth)**
The story of ambition corrupting a noble person appears in everything from The Godfather to Breaking Bad. Lady Macbeth's "unsex me here" remains the template for ruthless female ambition.

**The Melancholy Prince (Hamlet)**
The intellectual hero paralyzed by thought appears everywhere from Dostoyevsky to superhero stories. Batman, Luke Skywalker, and countless others carry Hamlet's psychological complexity.

**The Wise Fool**
Lear's Fool, Feste, Touchstone—the character who speaks truth through jest appears from court jesters to modern stand-up comics.

These archetypes are not simple stereotypes. They are complex patterns that Shakespeare developed with such depth that all subsequent writers work in dialogue with them.`,

      learningPoints: [
        {
          id: 'lp-epilogue-6-archetypes',
          content: 'Shakespeare\'s characters have become reference points—modern writers consciously or unconsciously echo Hamlet, Iago, Lady Macbeth, and others.',
          category: 'literary-context',
        },
        {
          id: 'lp-epilogue-6-depth',
          content: 'The enduring power of these archetypes comes from their psychological complexity—they are not simple types but multidimensional human beings.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 7: Custom Mini-Game - Modern Equivalents
    {
      id: 'epilogue-scene-7-modern',
      type: 'custom-mini-game',
      backgroundImage: '[PLACEHOLDER-BG]/modern-theater.png',

      gameType: 'memory-match',
      config: {
        title: 'Shakespeare in Modern Stories',
        instructions: 'Match these modern characters or stories to their Shakespearean inspiration.',
        pairs: [
          {
            id: 'pair-1',
            term: 'The Lion King (1994)',
            definition: 'Based on Hamlet - Simba mirrors Hamlet\'s journey of exile and return to avenge his father',
          },
          {
            id: 'pair-2',
            term: 'West Side Story (1957)',
            definition: 'Adaptation of Romeo and Juliet set among New York gang warfare',
          },
          {
            id: 'pair-3',
            term: '10 Things I Hate About You (1999)',
            definition: 'Modern retelling of The Taming of the Shrew set in high school',
          },
          {
            id: 'pair-4',
            term: 'Throne of Blood (1957)',
            definition: 'Kurosawa\'s samurai adaptation of Macbeth',
          },
          {
            id: 'pair-5',
            term: 'She\'s the Man (2006)',
            definition: 'Teen comedy based on Twelfth Night with gender disguise',
          },
          {
            id: 'pair-6',
            term: 'My Own Private Idaho (1991)',
            definition: 'Loosely based on Henry IV, featuring a Falstaff-like mentor figure',
          },
        ],
      },

      learningPoints: [
        {
          id: 'lp-epilogue-7-adaptation',
          content: 'Shakespeare\'s plots and characters are endlessly adaptable—they work in feudal Japan, modern America, animated Africa, and countless other settings.',
          category: 'cultural-context',
        },
      ],
    },

    // Scene 8: Global Shakespeare
    {
      id: 'epilogue-scene-8-global',
      type: 'narrative',
      backgroundImage: '[PLACEHOLDER-BG]/world-stage.png',
      image: '[PLACEHOLDER-IMG]/global-shakespeare.png',

      content: `Shakespeare's influence extends far beyond the English-speaking world.

**Japan:** Akira Kurosawa's films "Throne of Blood" (Macbeth), "Ran" (King Lear), and "The Bad Sleep Well" (Hamlet) are considered masterpieces. Japanese Noh and Kabuki traditions have embraced Shakespeare.

**India:** Bollywood has produced numerous Shakespeare adaptations, including "Maqbool" (Macbeth), "Omkara" (Othello), and "Haider" (Hamlet). Shakespeare was taught in colonial India and became embedded in Indian literary culture.

**Africa:** Shakespeare has been performed and adapted across the continent, often to explore post-colonial themes. Plays like "Welcome Msomi's uMabatha" (Macbeth in Zulu) transform Shakespeare into African cultural idioms.

**Latin America:** From Argentina to Mexico, Shakespeare has been reimagined through local traditions, magical realism, and political commentary.

**China:** Shakespeare has been performed and studied in China since the late 19th century, with modern adaptations exploring Chinese political and cultural contexts.

This global embrace is not cultural imperialism—these cultures have taken Shakespeare and made him their own, finding in his works a language for their own experiences and concerns.

Shakespeare belongs to the world.`,

      learningPoints: [
        {
          id: 'lp-epilogue-8-global',
          content: 'Shakespeare\'s global reach demonstrates that great art can transcend its original cultural context while being transformed by new contexts.',
          category: 'cultural-context',
        },
        {
          id: 'lp-epilogue-8-adaptation',
          content: 'Non-Western adaptations often reveal aspects of Shakespeare\'s plays invisible to English-speaking audiences—cultural translation as discovery.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 9: Timeline Game - Shakespeare's Career
    {
      id: 'epilogue-scene-9-timeline',
      type: 'timeline-game',
      backgroundImage: '[PLACEHOLDER-BG]/scroll-background.png',
      image: '[PLACEHOLDER-IMG]/shakespeare-timeline.png',

      prompt: 'Arrange these phases of Shakespeare\'s career in chronological order',

      timelineEvents: [
        {
          id: 'event-1',
          title: 'Early Comedies and Histories',
          year: 1590,
          description: 'Shakespeare begins his career with romantic comedies (Two Gentlemen of Verona, Comedy of Errors) and English histories (Henry VI trilogy).',
          image: '[PLACEHOLDER-EVENT]/early-plays.png',
        },
        {
          id: 'event-2',
          title: 'Great Romantic Comedies',
          year: 1595,
          description: 'The mature comedies emerge: A Midsummer Night\'s Dream, Much Ado About Nothing, Twelfth Night—and the tragic-romantic Romeo and Juliet.',
          image: '[PLACEHOLDER-EVENT]/romantic-comedies.png',
        },
        {
          id: 'event-3',
          title: 'The Great Tragedies',
          year: 1600,
          description: 'Shakespeare\'s darkest and most profound period: Hamlet, Othello, King Lear, Macbeth—psychological depth and existential questioning.',
          image: '[PLACEHOLDER-EVENT]/great-tragedies.png',
        },
        {
          id: 'event-4',
          title: 'The Late Romances',
          year: 1608,
          description: 'The final plays combine tragedy and comedy: The Winter\'s Tale, Cymbeline, The Tempest—themes of reconciliation, forgiveness, and renewal.',
          image: '[PLACEHOLDER-EVENT]/late-romances.png',
        },
        {
          id: 'event-5',
          title: 'Retirement and Death',
          year: 1613,
          description: 'Shakespeare largely retires to Stratford after The Tempest and collaborations. He dies in 1616, leaving behind 37 plays.',
          image: '[PLACEHOLDER-EVENT]/retirement.png',
        },
      ],

      successThreshold: 80,

      learningPoints: [
        {
          id: 'lp-epilogue-9-evolution',
          content: 'Shakespeare\'s career shows artistic evolution: from comedies of youth through tragedies of maturity to reconciliations of wisdom.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 10: Primary Source - "All the World's a Stage"
    {
      id: 'epilogue-scene-10-stage',
      type: 'primary-source',
      backgroundImage: '[PLACEHOLDER-BG]/globe-interior.png',
      image: '[PLACEHOLDER-IMG]/all-world-stage.png',

      prompt: 'Examine Shakespeare\'s most famous meditation on life and theater',

      source: {
        title: '"All the World\'s a Stage" (As You Like It, Act 2, Scene 7)',
        type: 'text',
        content: `JAQUES:
All the world's a stage,
And all the men and women merely players;
They have their exits and their entrances,
And one man in his time plays many parts,
His acts being seven ages. At first, the infant,
Mewling and puking in the nurse's arms.
Then the whining schoolboy, with his satchel
And shining morning face, creeping like snail
Unwillingly to school. And then the lover,
Sighing like furnace, with a woeful ballad
Made to his mistress' eyebrow. Then a soldier,
Full of strange oaths and bearded like the pard,
Jealous in honor, sudden and quick in quarrel,
Seeking the bubble reputation
Even in the cannon's mouth. And then the justice,
In fair round belly with good capon lined,
With eyes severe and beard of formal cut,
Full of wise saws and modern instances;
And so he plays his part. The sixth age shifts
Into the lean and slippered pantaloon,
With spectacles on nose and pouch on side;
His youthful hose, well saved, a world too wide
For his shrunk shank, and his big manly voice,
Turning again toward childish treble, pipes
And whistles in his sound. Last scene of all,
That ends this strange eventful history,
Is second childishness and mere oblivion,
Sans teeth, sans eyes, sans taste, sans everything.`,
        citation: 'As You Like It, Act 2, Scene 7',
      },

      questions: [
        {
          id: 'q-stage-1',
          question: 'What does the theater metaphor suggest about human life?',
          type: 'multiple-choice',
          options: [
            'Life is meaningless and we are all just pretending',
            'We all play roles that change as we age, and our performances are temporary',
            'Only actors have meaningful lives',
            'The world is literally a stage where God watches us perform',
          ],
          correctAnswer: 'We all play roles that change as we age, and our performances are temporary',
          explanation: 'The speech uses theater as metaphor for life\'s roles—infant, student, lover, soldier, judge, old man, death. We "perform" different selves at different ages.',
        },
        {
          id: 'q-stage-2',
          question: 'What is the tone of this speech?',
          type: 'multiple-choice',
          options: [
            'Joyfully optimistic about human possibility',
            'Melancholic and somewhat cynical, though not entirely despairing',
            'Angry and bitter about social injustice',
            'Religious and focused on the afterlife',
          ],
          correctAnswer: 'Melancholic and somewhat cynical, though not entirely despairing',
          explanation: 'Jaques is a melancholic character. His speech is more wry than despairing—observing human life\'s patterns with detached, slightly sad amusement.',
        },
      ],

      learningPoints: [
        {
          id: 'lp-epilogue-10-meta',
          content: '"All the world\'s a stage" exemplifies Shakespeare\'s meta-theatrical awareness—using theater to comment on life, and life to comment on theater.',
          category: 'literary-context',
        },
        {
          id: 'lp-epilogue-10-ages',
          content: 'The "seven ages of man" became a cultural touchstone—a framework for thinking about life stages that persists today.',
          category: 'cultural-context',
        },
      ],
    },

    // Scene 11: Trilogy Synthesis
    {
      id: 'epilogue-scene-11-synthesis',
      type: 'decision',
      backgroundImage: '[PLACEHOLDER-BG]/theater-stage.png',
      image: '[PLACEHOLDER-IMG]/trilogy-synthesis.png',

      prompt: 'Reflecting on the entire trilogy: Which play resonated most with you, and why?',
      context: `We've journeyed through ten of Shakespeare's greatest plays:

**Part I - Love, Identity & Disguise:**
- Romeo and Juliet (tragic young love)
- Twelfth Night (disguise and self-discovery)
- Much Ado About Nothing (wit and deception)
- A Midsummer Night's Dream (magic and transformation)

**Part II - Power, Ambition, Jealousy & Guilt:**
- Macbeth (ambition and guilt)
- Othello (jealousy and manipulation)
- King Lear (pride and madness)

**Part III - Betrayal, Revenge, Justice & Reconciliation:**
- Hamlet (philosophical revenge)
- Julius Caesar (political assassination)
- The Tempest (forgiveness and farewell)

Each play asks different questions about what it means to be human. Which questions speak most to you?`,

      choices: [
        {
          id: 'choice-tragedy',
          text: 'The tragedies—I\'m drawn to exploring darkness and human limits',
          consequence: 'The tragedies confront us with the worst of human nature—and the most profound questions. Hamlet asks why we hesitate; Macbeth shows how ambition corrupts; Othello reveals jealousy\'s poison; Lear strips away everything to find what remains.',
          learningPoints: [
            {
              id: 'lp-epilogue-11a-tragedy',
              content: 'Shakespeare\'s tragedies explore the boundaries of human experience—what happens when virtue fails, when passion overcomes reason, when the world falls apart.',
              category: 'literary-context',
            },
          ],
        },
        {
          id: 'choice-comedy',
          text: 'The comedies—I prefer hope, love, and transformation',
          consequence: 'The comedies celebrate human resilience and the power of love to overcome obstacles. They don\'t ignore darkness—but they believe in restoration, in second chances, in the possibility of joy.',
          learningPoints: [
            {
              id: 'lp-epilogue-11b-comedy',
              content: 'Shakespeare\'s comedies are not simple entertainment—they explore identity, social constraints, and the transformative power of love and imagination.',
              category: 'literary-context',
            },
          ],
        },
        {
          id: 'choice-romance',
          text: 'The Tempest—I\'m moved by forgiveness and reconciliation',
          consequence: 'The Tempest represents Shakespeare\'s final word on the revenge cycle. After all the tragedies, after all the deaths, it offers a model of power wielded for restoration rather than destruction. It asks: can we choose mercy?',
          learningPoints: [
            {
              id: 'lp-epilogue-11c-romance',
              content: 'The late romances suggest Shakespeare\'s own evolution—from the certainties of comedy and tragedy to the ambiguities of reconciliation and wisdom.',
              category: 'literary-context',
            },
          ],
        },
        {
          id: 'choice-all',
          text: 'They work together—the journey through all genres is what matters',
          consequence: 'Perhaps this is the wisest answer. Shakespeare\'s comedies and tragedies illuminate each other. The joy of Twelfth Night deepens after experiencing Lear\'s suffering. The Tempest\'s forgiveness means more after Hamlet\'s failure to find peace. The trilogy is a complete education in human possibility.',
          learningPoints: [
            {
              id: 'lp-epilogue-11d-synthesis',
              content: 'Shakespeare\'s genius lies in his range—he explored every human experience, and his works form a conversation across genres about what it means to be human.',
              category: 'literary-context',
            },
          ],
        },
      ],

      learningPoints: [],
    },

    // Scene 12: Conclusion with Quiz Trigger
    {
      id: 'epilogue-scene-12-conclusion',
      type: 'narrative',
      backgroundImage: '[PLACEHOLDER-BG]/globe-sunset.png',
      image: '[PLACEHOLDER-IMG]/epilogue-conclusion.png',

      content: `We began this journey in the Globe Theatre, surrounded by the noise and energy of Elizabethan London. We end it with a question that still reverberates:

Why does Shakespeare matter?

Perhaps because his plays are not just about kings and lovers and murderers from long ago. They are about us.

We have all been Hamlet, paralyzed by thought when action was needed.
We have all been Macbeth, tempted by ambition beyond our reach.
We have all been Romeo, overwhelmed by passion.
We have all been Prospero, faced with the choice between revenge and forgiveness.

Shakespeare holds up a mirror. In his characters, we see ourselves—our best possibilities and our worst fears, our capacity for love and our potential for destruction.

The trilogy we've experienced moves from joy to suffering to wisdom:
- Part I taught us to laugh at ourselves and believe in love.
- Part II warned us about the darkness within.
- Part III offered a way forward: forgiveness, reconciliation, letting go.

This is Shakespeare's gift: not answers, but better questions. Not judgment, but understanding. Not escape from humanity, but deeper entry into it.

The plays end. The stage empties. But the words remain.

"All the world's a stage, and all the men and women merely players."

What role will you play?`,

      learningPoints: [
        {
          id: 'lp-epilogue-12-mirror',
          content: 'Shakespeare described theater as holding "a mirror up to nature"—his enduring power lies in showing us ourselves.',
          category: 'literary-context',
        },
        {
          id: 'lp-epilogue-12-trilogy',
          content: 'The trilogy\'s arc from comedy through tragedy to romance mirrors a complete human education—joy, suffering, wisdom.',
          category: 'literary-context',
        },
        {
          id: 'lp-epilogue-12-questions',
          content: 'Great literature provides not answers but better questions—Shakespeare\'s plays continue to generate new meanings for each generation.',
          category: 'literary-context',
        },
      ],

      events: {
        onExit: [{
          type: 'quiz',
          componentId: 'quiz-chapter-4-epilogue',
          condition: { type: 'if-not-completed' },
        }],
      },
    },
  ],

  endQuiz: chapter4Quiz,
};

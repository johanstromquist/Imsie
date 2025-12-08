import type { Chapter } from '../../../types';
import { chapter2Quiz } from '../quizzes/chapter-2-quiz';

export const chapter2: Chapter = {
  id: 'chapter-2-othello',
  title: 'Chapter 2: Othello - "O, Beware, My Lord, of Jealousy"',
  description: 'Enter the psychological warfare of manipulation as Iago transforms Othello\'s love into murderous jealousy, proving that the greatest tragedies are not of fate but of perception.',

  learningObjectives: [
    'Analyze how jealousy functions as a destructive psychological force, contrasting with ambition in Macbeth',
    'Understand the mechanics of manipulation and how Iago exploits Othello\'s insecurities',
    'Examine the role of race, outsider status, and social perception in tragedy',
    'Recognize dramatic irony as Shakespeare\'s key technique for building tragic tension',
    'Explore the transformation of love into violence and the tragic gap between perception and reality',
  ],

  scenes: [
    // Scene 1: Introduction - Domestic tragedy
    {
      id: 'othello-scene-1-intro',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/cd842336-cc25-40bb-996d-a92ba7c59227/0_0.png',
      image: 'https://cdn.midjourney.com/5f09862c-4a74-4b54-816c-6390ca8c08b9/0_0.png',

      content: `Where Macbeth showed us ambition destroying a warrior from within, Othello reveals something even more intimate and terrifying: how love can be corrupted into murderous hate through manipulation.

This is Shakespeare's most psychologically complex tragedy. There are no witches here, no supernatural forces. Just one man's genius for evil and another man's vulnerability to suggestion.

Unlike Macbeth, who chooses his crimes knowingly, Othello will be deceived into believing he acts righteously. Unlike Lady Macbeth who pushes her husband toward ambition, Iago will push Othello toward destroying the woman he loves most.

This is domestic tragedy—set not on battlefields or in kingdoms, but in bedrooms and hearts. The casualties are not armies but souls.

"O, beware, my lord, of jealousy," Iago warns Othello—even as he plants the seeds of jealousy with every word. "It is the green-eyed monster which doth mock the meat it feeds on."

Welcome to the tragedy of perception, where seeing is not believing, and belief destroys everything.`,

      learningPoints: [
        {
          id: 'lp-othello-1-domestic',
          content: 'Othello is Shakespeare\'s most intimate tragedy, focusing on domestic relationships rather than kingdoms—making the destruction feel more personal and horrifying.',
          category: 'literary-context',
        },
        {
          id: 'lp-othello-1-contrast-macbeth',
          content: 'Where Macbeth\'s Lady pushes him toward ambition, Iago pushes Othello toward jealousy—both explore psychological manipulation but from opposite dynamics.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 2: Map exploration - Venice and Cyprus
    {
      id: 'othello-scene-2-map',
      type: 'map-exploration',
      backgroundImage: 'https://cdn.midjourney.com/55b2479a-6bbd-494a-a712-47825260cb30/0_0.png',
      mapImage: 'https://cdn.midjourney.com/07b1df9e-590c-40d1-ab4f-8c15639a44bd/0_0.png',

      prompt: 'Explore the Renaissance Mediterranean world where Othello\'s tragedy unfolds',

      locations: [
        {
          id: 'location-venice',
          name: 'Venice',
          x: 22,
          y: 2,
          content: `The Republic of Venice—center of Renaissance commerce, power, and sophistication. A city of merchants and politicians, art and intrigue.

Othello serves Venice as a general, defending the republic against the Ottoman Empire. But he is an outsider here: a Moor (North African) in a European city, respected for his military prowess but viewed with suspicion for his race and foreign origins.

Here he secretly marries Desdemona, daughter of the Venetian senator Brabantio. Here Iago's resentment begins. And here the stage is set for tragedy that will play out on distant Cyprus.

Venice represents civilization, order, and sophisticated prejudice disguised as courtesy.`,
          image: 'https://cdn.midjourney.com/cf8ee9f0-c494-4788-8290-a374fc9f23e7/0_0.png',
        },
        {
          id: 'location-cyprus',
          name: 'Cyprus',
          x: 87,
          y: 71,
          content: `A Venetian colony on the edge of the Ottoman Empire. Remote, militarized, isolated from the refinements of Venice.

On Cyprus, removed from civilization's restraints, Iago's manipulations will flourish. The island becomes a psychological pressure cooker where jealousy festers, paranoia grows, and violence erupts without witnesses or intervention.

The Turkish fleet threatening Cyprus is destroyed by a storm—the only external threat eliminated. But the internal threat (Iago's malice, Othello's jealousy) proves far more destructive than any foreign enemy.

Cyprus represents isolation, exposure, and the stripping away of social masks to reveal raw human darkness.`,
          image: 'https://cdn.midjourney.com/1a323bde-0997-4fd1-9456-5499630998ce/0_0.png',
        },
      ],

      learningPoints: [
        {
          id: 'lp-othello-2-venice',
          content: 'Venice\'s sophisticated cosmopolitanism masks subtle racial prejudices, creating the social vulnerabilities Iago will exploit.',
          category: 'historical-context',
        },
        {
          id: 'lp-othello-2-cyprus',
          content: 'The shift from Venice to Cyprus mirrors the psychological shift from civilized restraint to raw passion and violence.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 3: The secret marriage and Iago's resentment
    {
      id: 'othello-scene-3-marriage',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/fb07240d-ad84-4b27-a83b-d8d441a45029/0_0.png',
      image: 'https://cdn.midjourney.com/5f1e143b-3236-4841-91c3-5c00b1115375/0_2.png',

      content: `Othello, a Moorish general, has secretly married Desdemona, the beautiful daughter of Senator Brabantio. When Brabantio discovers this, he is outraged—not because Othello is unworthy, but because he is different.

Othello is summoned before the Venetian Senate. Brabantio accuses him of using witchcraft to seduce his daughter: "For nature so preposterously to err... sans witchcraft could not."

But Othello defends himself with dignity and eloquence, recounting how he won Desdemona's love through stories of his adventures. Desdemona herself appears and confirms: "I saw Othello's visage in his mind."

The Senate accepts their marriage. Brabantio, defeated, gives a poisonous warning: "Look to her, Moor, if thou hast eyes to see. She has deceived her father, and may thee."

The seed is planted—though it will not sprout until Iago tends it.

Meanwhile, Othello has promoted Michael Cassio to lieutenant, passing over his ensign Iago. This slight festers in Iago's mind, mixing with darker resentments. He suspects (baselessly) that Othello has slept with his wife Emilia.

Iago begins to plot: "I hate the Moor... And nothing can or shall content my soul till I am evened with him, wife for wife."`,

      learningPoints: [
        {
          id: 'lp-othello-3-race',
          content: 'Othello\'s race makes him simultaneously valued (as a warrior) and suspect (as an outsider)—a duality Iago will weaponize.',
          category: 'historical-context',
        },
        {
          id: 'lp-othello-3-brabantio',
          content: 'Brabantio\'s warning "she deceived her father" plants the idea that Desdemona is capable of deception—a lie that will destroy them both.',
          category: 'literary-context',
        },
        {
          id: 'lp-othello-3-iago-motive',
          content: 'Iago\'s motives are deliberately unclear and excessive (resentment, suspicion, racial hatred, pure malice)—Shakespeare creates "motiveless malignity."',
          category: 'literary-context',
        },
      ],
    },

    // Scene 4: Primary source - Renaissance attitudes toward race
    {
      id: 'othello-scene-4-race-context',
      type: 'primary-source',
      backgroundImage: 'https://cdn.midjourney.com/40689ccd-7617-469a-ac6d-120fe912018a/0_0.png',
      image: 'https://cdn.midjourney.com/672c47a7-79c0-44d2-8c23-9bdb2cdbf4c1/0_1.png',

      prompt: 'Examine Renaissance attitudes toward race and "the Moor" in Othello',

      source: {
        title: 'Historical Context: Race in Renaissance Venice',
        type: 'text',
        content: `In Shakespeare's England and Renaissance Venice, the term "Moor" was ambiguous and loaded with contradictions.

**Who was a "Moor"?** The term referred to North Africans, particularly from Morocco and the Maghreb. Some were Muslim, some Christian converts. The category was both racial and religious, mixing skin color with faith and culture.

**Contradictory Attitudes:** Renaissance Europeans simultaneously:
- Admired Moorish culture for its mathematical and scientific achievements
- Feared and demonized Muslims as religious enemies during the Ottoman wars
- Valued converted "Moors" as allies against the Ottoman Empire
- Associated darker skin with the exotic, the dangerous, and the hypersexual

**Othello's Position:** Othello occupies a unique position—he is:
- Christian (converted, serving Christian Venice)
- Military hero (defending Venice against Ottoman Turks)
- Foreign and different (marked by race and culture as outsider)
- Honored publicly but suspected privately

**Shakespeare's Innovation:** Previous portrayals of Moors in English drama tended toward villainous stereotypes (like Aaron in "Titus Andronicus"). Othello is revolutionary because the Moor is the tragic hero, noble and eloquent, while the white Venetian Iago is the true villain.

Yet Shakespeare also dramatizes how Othello's outsider status creates psychological vulnerabilities—he lacks confidence in understanding Venetian women, doubts his own worth, and is susceptible to Iago's insinuations that Desdemona must "naturally" prefer her own kind.

The tragedy is both universal (jealousy destroys anyone) and specific (Othello's racial outsider status makes him particularly vulnerable to Iago's particular lies).`,
        citation: 'Adapted from Renaissance history and Shakespeare scholarship',
      },

      questions: [
        {
          id: 'q1',
          question: 'How does Othello\'s position in Venice create psychological vulnerability that Iago exploits?',
          type: 'multiple-choice',
          options: [
            'He is confident in his military skills but insecure about understanding Venetian society and relationships',
            'He is wealthy but politically powerless in Venice',
            'He is uneducated and easily fooled by sophisticated Venetians',
            'He secretly plans to betray Venice to the Ottoman Empire',
          ],
          correctAnswer: 'He is confident in his military skills but insecure about understanding Venetian society and relationships',
          explanation: 'Othello is honored for his military prowess but feels like an outsider in Venetian culture. Iago exploits this insecurity, suggesting that he cannot understand Venetian women and that Desdemona\'s love is unnatural.',
        },
        {
          id: 'q2',
          question: 'What makes Shakespeare\'s portrayal of Othello innovative for Renaissance drama?',
          type: 'multiple-choice',
          options: [
            'It makes a Moor the tragic hero rather than the villain, challenging racial stereotypes',
            'It portrays Venice as a corrupt city rather than a noble republic',
            'It removes all references to race and treats Othello as identical to white characters',
            'It portrays Othello as purely a victim with no tragic flaws',
          ],
          correctAnswer: 'It makes a Moor the tragic hero rather than the villain, challenging racial stereotypes',
          explanation: 'Previous Moorish characters in English drama were typically villains. Shakespeare makes Othello noble and eloquent, while the white Venetian Iago is the true villain—a revolutionary reversal of dramatic stereotypes.',
        },
      ],

      learningPoints: [
        {
          id: 'lp-othello-4-innovation',
          content: 'Shakespeare challenges Renaissance racial stereotypes by making the Moor his tragic hero and the white Venetian his villain.',
          category: 'historical-context',
        },
        {
          id: 'lp-othello-4-vulnerability',
          content: 'Othello\'s tragedy is both universal (anyone can fall to jealousy) and specific (his outsider status creates particular vulnerabilities).',
          category: 'literary-context',
        },
      ],
    },

    // Scene 5: Dialogue - Othello defends his marriage
    {
      id: 'othello-scene-5-defense',
      type: 'dialogue',
      backgroundImage: 'https://cdn.midjourney.com/86aab0c4-f705-4166-96ff-8b2a83a3c141/0_0.png',

      character: {
        id: 'othello',
        name: 'Othello',
        portrait: 'https://cdn.midjourney.com/a79f12f0-58a0-4e21-8d0d-22a8356b9ad2/0_0.png',
        description: 'The Moor of Venice, noble general',
      },

      dialogueTree: {
        id: 'node-1',
        speaker: 'othello',
        text: 'Her father loved me, oft invited me, still questioned me the story of my life from year to year—the battles, sieges, fortunes that I have passed.',

        responses: [
          {
            id: 'response-witchcraft',
            text: 'But Brabantio accuses you of using witchcraft to seduce her.',
            nextNodeId: 'node-2',
          },
          {
            id: 'response-love',
            text: 'How did Desdemona come to love you?',
            nextNodeId: 'node-3',
          },
        ],

        allNodes: [
          {
            id: 'node-2',
            speaker: 'othello',
            text: 'This only is the witchcraft I have used. She loved me for the dangers I had passed, and I loved her that she did pity them. This is the only witchcraft I have used.',
            responses: [
              {
                id: 'response-stories',
                text: 'Tell us of these stories.',
                nextNodeId: 'node-3',
              },
            ],
          },
          {
            id: 'node-3',
            speaker: 'othello',
            text: 'I spoke of most disastrous chances, of moving accidents by flood and field, of hair-breadth scapes in the imminent deadly breach, of being taken by the insolent foe and sold to slavery. My story being done, she gave me for my pains a world of sighs. She wished she had not heard it, yet she wished that heaven had made her such a man.',
            responses: [
              {
                id: 'response-choice',
                text: 'And she chose to love you freely?',
                nextNodeId: 'node-4',
              },
            ],
          },
          {
            id: 'node-4',
            speaker: 'othello',
            text: 'She loved me for the dangers I had passed, and I loved her that she did pity them. If you will have me speak of myself, it will appear I am yet so rude in speech that I could not plead my own cause. But let Desdemona speak for herself.',
            isEnd: true,
          },
        ],
      },

      learningPoints: [
        {
          id: 'lp-othello-5-eloquence',
          content: 'Othello claims to be "rude in speech" yet speaks with poetic eloquence—a humility that contrasts with his genuine dignity.',
          category: 'literary-context',
        },
        {
          id: 'lp-othello-5-love-foundation',
          content: 'Othello and Desdemona\'s love is founded on mutual admiration and storytelling—making its destruction through lies especially tragic.',
          category: 'literary-context',
        },
        {
          id: 'lp-othello-5-contrast-part1',
          content: 'Unlike Romeo and Juliet whose families opposed them, Othello and Desdemona\'s love will be destroyed from within by Othello\'s own jealousy—a darker inversion.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 6: Cyprus - war abroad, war within
    {
      id: 'othello-scene-6-cyprus',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/d4131467-eb0f-4285-9e00-c6d7c0088806/0_0.png',
      image: 'https://cdn.midjourney.com/38810e27-88b4-4154-8782-dcdb2a80b9e9/0_2.png',

      content: `A Turkish fleet threatens Cyprus. Othello is sent to defend the Venetian colony. Desdemona insists on accompanying him.

A terrible storm scatters the Turkish ships—the external threat is eliminated before any battle occurs. But the internal threat has just arrived on the island.

Iago begins his campaign.

First, he gets Cassio drunk and orchestrates a brawl that forces Othello to strip Cassio of his lieutenancy. Cassio is devastated—his reputation destroyed.

Iago then offers poisonous advice: "Our general's wife is now the general... Confess yourself freely to her; importune her help to put you in your place again."

Why does Iago want Cassio to seek Desdemona's help? So he can make Othello suspicious of their private meetings. So he can transform innocent advocacy into apparent evidence of an affair.

The trap is set. Now Iago begins planting seeds.`,

      learningPoints: [
        {
          id: 'lp-othello-6-irony',
          content: 'The Turkish threat (external) is destroyed by nature, but the real destruction comes from within (Iago\'s manipulation)—a tragic inversion of expectations.',
          category: 'literary-context',
        },
        {
          id: 'lp-othello-6-reputation',
          content: 'Cassio\'s anguish over lost reputation foreshadows Othello\'s later concern—"Reputation, reputation, reputation! I have lost my reputation!"',
          category: 'literary-context',
        },
      ],
    },

    // Scene 7: Decision - As Iago, how do you plant doubt?
    {
      id: 'othello-scene-7-iago-decision',
      type: 'decision',
      backgroundImage: 'https://cdn.midjourney.com/cb4c14cf-033f-4da4-be66-38f089ebe3f4/0_0.png',

      prompt: 'You are Iago. How do you plant the first seeds of doubt in Othello\'s mind?',
      context: `Iago is a master manipulator. He never makes direct accusations—that would make Othello defensive. Instead, he uses insinuation, half-finished thoughts, and strategic warnings that make Othello convince himself.

As Iago, which approach do you take?`,

      choices: [
        {
          id: 'choice-direct',
          text: 'Directly accuse Desdemona of infidelity with Cassio',
          consequence: 'Too obvious! Othello would demand proof and investigate. Iago\'s genius is subtler—he makes Othello feel like he\'s discovering the truth himself, not being told what to think.',
          learningPoints: [
            {
              id: 'lp-othello-7-direct',
              content: 'Effective manipulation avoids direct accusations; it makes the victim feel like they are discovering truth rather than being told what to believe.',
              category: 'literary-context',
            },
          ],
        },
        {
          id: 'choice-insinuation',
          text: 'Use vague insinuations and "honest concern" that force Othello to ask questions',
          consequence: 'Perfect! This is exactly Iago\'s method. "Did Michael Cassio, when you wooed my lady, know of your love?" Innocent question—poisonous implication. "Ha! I like not that." What doesn\'t he like? He won\'t say. Let Othello\'s imagination do the work.',
          learningPoints: [
            {
              id: 'lp-othello-7-insinuation',
              content: 'Iago\'s manipulation succeeds because he plants seeds and lets Othello\'s imagination nurture them into certainty.',
              category: 'literary-context',
            },
          ],
        },
        {
          id: 'choice-warning',
          text: 'Warn Othello against jealousy while describing it in vivid detail',
          consequence: 'Brilliant! "O, beware, my lord, of jealousy. It is the green-eyed monster." By warning against jealousy, Iago actually creates it—making Othello hyper-aware of the possibility while claiming to protect him.',
          learningPoints: [
            {
              id: 'lp-othello-7-reverse',
              content: 'Iago\'s warnings against jealousy actually create jealousy—a psychological technique where naming the fear makes it real.',
              category: 'literary-context',
            },
          ],
        },
      ],

      learningPoints: [],
    },

    // Scene 8: The handkerchief - symbol becomes proof
    {
      id: 'othello-scene-8-handkerchief',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/b9d7e3b6-d796-4739-8e31-95a674c08385/0_0.png',
      image: 'https://cdn.midjourney.com/de472f40-74dc-4a53-b55f-6a0d31fb1f78/0_1.png',

      content: `Othello gave Desdemona a handkerchief—his first gift to her, embroidered with strawberries, precious beyond its material value.

Desdemona accidentally drops it. Emilia (Iago's wife) picks it up, planning to give it back. But Iago sees it and demands she give it to him. He has been begging her to steal it for some time.

"What will you do with it, that you have been so earnest to have me filch it?" Emilia asks.

"Be not acknown on't," Iago replies. "I have use for it."

That "use" is devastating: Iago plants the handkerchief in Cassio's lodging.

Then he tells Othello he saw Cassio wipe his beard with a strawberry-spotted handkerchief.

To Othello, already poisoned by Iago's insinuations, this is proof. The handkerchief—symbol of his love—becomes evidence of Desdemona's betrayal.

"Damn her, lewd minx!" Othello rages. "O, damn her! Damn her!"

Iago has transformed love into hate, trust into certainty of betrayal. And all through one small piece of cloth.`,

      learningPoints: [
        {
          id: 'lp-othello-8-symbol',
          content: 'The handkerchief functions as both symbol (of Othello\'s love) and plot device (proof of betrayal)—Shakespeare makes objects carry psychological weight.',
          category: 'literary-context',
        },
        {
          id: 'lp-othello-8-evidence',
          content: 'Iago manufactures "evidence" to confirm the suspicion he has already planted—showing how bias makes us interpret neutral facts as proof.',
          category: 'literary-context',
        },
        {
          id: 'lp-othello-8-speed',
          content: 'Othello\'s transformation from "My life upon her faith!" to "Damn her!" happens with shocking speed—showing jealousy\'s power to corrupt.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 9: Cause-Effect game - Iago's manipulations
    {
      id: 'othello-scene-9-cause-effect',
      type: 'cause-effect',
      backgroundImage: 'https://cdn.midjourney.com/9fd65b6d-9281-4f6d-9493-fd4784420756/0_0.png',

      prompt: 'Match Iago\'s manipulations to their effects on Othello',

      pairs: [
        {
          id: 'pair-1',
          cause: 'Iago says "Ha! I like not that" when seeing Cassio leave Desdemona',
          effect: 'Othello begins to notice and interpret Desdemona\'s meetings with Cassio as suspicious',
          explanation: 'Iago\'s vague comment plants a seed—Othello now sees innocent meetings as evidence of guilt.',
        },
        {
          id: 'pair-2',
          cause: 'Iago warns Othello "O, beware, my lord, of jealousy"',
          effect: 'Othello becomes hyper-aware of jealousy, making him more susceptible to it',
          explanation: 'By warning against jealousy, Iago actually creates it—making Othello conscious of a possibility he hadn\'t considered.',
        },
        {
          id: 'pair-3',
          cause: 'Iago tells Othello he saw Cassio with the handkerchief',
          effect: 'Othello treats the handkerchief as concrete proof of Desdemona\'s adultery',
          explanation: 'The handkerchief—symbol of love—becomes manufactured "evidence" that Othello desperately wanted to confirm his suspicions.',
        },
        {
          id: 'pair-4',
          cause: 'Iago claims Cassio confessed the affair in his sleep',
          effect: 'Othello accepts fabricated "confession" as truth, cementing his belief in betrayal',
          explanation: 'Iago\'s complete fabrication is accepted as fact because Othello is already convinced—confirmation bias at work.',
        },
      ],

      learningPoints: [
        {
          id: 'lp-othello-9-systematic',
          content: 'Iago\'s manipulation is systematic: he creates suspicion, nurtures it with insinuations, then provides "proof"—a deliberate psychological campaign.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 10: Quote attribution with dramatic irony
    {
      id: 'othello-scene-10-quotes',
      type: 'quote-attribution',
      backgroundImage: 'https://cdn.midjourney.com/daebe82b-78c4-4598-acf2-5e0827709f55/0_0.png',

      prompt: 'Identify who speaks these lines and recognize the dramatic irony',

      quotes: [
        {
          id: 'quote-1',
          text: 'I am not what I am',
          speaker: 'Iago',
          context: 'Early in the play, revealing his true duplicitous nature',
          explanation: 'Iago announces his fundamental dishonesty to the audience. We know he is evil, but every character trusts "honest Iago"—creating terrible dramatic irony.',
        },
        {
          id: 'quote-2',
          text: 'O, beware, my lord, of jealousy! It is the green-eyed monster which doth mock the meat it feeds on',
          speaker: 'Iago',
          context: 'Warning Othello while actually creating jealousy',
          explanation: 'Iago warns against the very poison he is administering—a cruel irony where the warning itself is the weapon.',
        },
        {
          id: 'quote-3',
          text: 'My life upon her faith!',
          speaker: 'Othello',
          context: 'Declaring absolute trust in Desdemona before Iago\'s corruption',
          explanation: 'Tragic because Othello will lose both—his life (he will kill himself) and his faith in Desdemona (though she was always faithful).',
        },
        {
          id: 'quote-4',
          text: 'I took you for that cunning whore of Venice that married with Othello',
          speaker: 'Othello',
          context: 'Accusing Desdemona of infidelity',
          explanation: 'The dramatic irony is excruciating: we know Desdemona is innocent, Othello does not. His false belief will lead him to murder her.',
        },
        {
          id: 'quote-5',
          text: 'Nobody. I myself. Farewell. Commend me to my kind lord',
          speaker: 'Desdemona',
          context: 'Dying, protecting Othello even after he has strangled her',
          explanation: 'Desdemona\'s final lie (claiming she killed herself) shows her love endures even unto death—making the tragedy unbearable.',
        },
      ],

      learningPoints: [
        {
          id: 'lp-othello-10-irony',
          content: 'Dramatic irony (audience knows truth, characters don\'t) makes Othello almost unwatchably painful—we see the tragedy unfold helplessly.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 11: Dialogue - Iago's soliloquies
    {
      id: 'othello-scene-11-iago-soliloquy',
      type: 'dialogue',
      backgroundImage: 'https://cdn.midjourney.com/0f227441-175d-41e0-a38b-60d413278272/0_0.png',

      character: {
        id: 'iago-solo',
        name: 'Iago',
        portrait: 'https://cdn.midjourney.com/91bfda26-ea72-43ce-ba08-76763a0799ce/0_2.png',
        description: 'The villain in soliloquy, revealing his mind',
      },

      dialogueTree: {
        id: 'node-1',
        speaker: 'iago-solo',
        text: 'And what\'s he then that says I play the villain, when this advice I give is free and honest, probal to thinking, and indeed the course to win the Moor again?',

        responses: [
          {
            id: 'response-why',
            text: 'Why do you hate Othello so much?',
            nextNodeId: 'node-2',
          },
          {
            id: 'response-plan',
            text: 'What is your plan?',
            nextNodeId: 'node-3',
          },
        ],

        allNodes: [
          {
            id: 'node-2',
            speaker: 'iago-solo',
            text: 'I hate the Moor, and it is thought abroad that \'twixt my sheets he\'s done my office. I know not if\'t be true, but I, for mere suspicion in that kind, will do as if for surety.',
            responses: [
              {
                id: 'response-surety',
                text: 'You\'ll act on mere suspicion?',
                nextNodeId: 'node-4',
              },
            ],
          },
          {
            id: 'node-3',
            speaker: 'iago-solo',
            text: 'How am I then a villain to counsel Cassio to this parallel course, directly to his good? Divinity of hell! When devils will the blackest sins put on, they do suggest at first with heavenly shows, as I do now.',
            responses: [
              {
                id: 'response-devils',
                text: 'You acknowledge you are devilish?',
                nextNodeId: 'node-4',
              },
            ],
          },
          {
            id: 'node-4',
            speaker: 'iago-solo',
            text: 'So will I turn her virtue into pitch, and out of her own goodness make the net that shall enmesh them all. I have\'t. It is engendered. Hell and night must bring this monstrous birth to the world\'s light.',
            isEnd: true,
          },
        ],
      },

      learningPoints: [
        {
          id: 'lp-othello-11-soliloquy',
          content: 'Iago\'s soliloquies reveal his consciousness of his own evil—he is not self-deceived but deliberately chooses malice, making him terrifyingly modern.',
          category: 'literary-context',
        },
        {
          id: 'lp-othello-11-motiveless',
          content: 'Iago provides multiple motives (resentment, suspicion, racism) but none fully explain his malice—critics call this "motiveless malignity."',
          category: 'literary-context',
        },
        {
          id: 'lp-othello-11-contrast-part3',
          content: 'Unlike Part III\'s revenge tragedies where villains have clear motivations, Iago\'s evil is more disturbing because it lacks proportionate cause.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 12: Othello's transformation
    {
      id: 'othello-scene-12-transformation',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/fb6b7a2a-5b74-485f-b488-ead49c7a8d17/0_0.png',
      image: 'https://cdn.midjourney.com/dece8962-73c7-4272-a558-7f000e54ebd7/0_1.png',

      content: `Watch Othello's language transform as jealousy consumes him.

**Before Iago's poison:**
"She loved me for the dangers I had passed..."
"My life upon her faith!"
"Perdition catch my soul but I do love thee!"

**After Iago's manipulation:**
"Damn her, lewd minx! O, damn her!"
"I will chop her into messes!"
"Goats and monkeys!"

The eloquent general becomes incoherent with rage. The man who spoke in poetry now speaks in brutal fragments. Jealousy has not just corrupted his belief—it has transformed his very self.

Othello demands proof. Iago offers the handkerchief and a fabricated story about Cassio confessing in his sleep.

"I will have some proof," Othello insists. Then, almost immediately: "Damn her! I will kill her!"

The "proof" is circumstantial, the story obviously invented. But Othello no longer reasons. He has been transformed from a man who weighs evidence into a man consumed by certainty of betrayal.

"Arise, black vengeance, from thy hollow cell!" he cries. He kneels with Iago and vows: "In the due reverence of a sacred vow I here engage my words."

Iago kneels beside him: "I am your own forever."

A dark marriage—far more binding than Othello's vows to Desdemona. He belongs to Iago now, and Iago will lead him to murder.`,

      learningPoints: [
        {
          id: 'lp-othello-12-language',
          content: 'Othello\'s linguistic breakdown from poetry to brutal fragments dramatizes jealousy\'s destruction of his noble self.',
          category: 'literary-context',
        },
        {
          id: 'lp-othello-12-certainty',
          content: 'Othello moves from demanding proof to ignoring evidence in favor of emotional certainty—showing how bias overcomes reason.',
          category: 'literary-context',
        },
        {
          id: 'lp-othello-12-contrast-macbeth',
          content: 'Where Macbeth knows his murders are wrong, Othello believes he acts righteously—making his tragedy even more terrible.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 13: Custom mini-game - Web of Deception
    {
      id: 'othello-scene-13-web',
      type: 'custom-mini-game',
      backgroundImage: 'https://cdn.midjourney.com/d7d27a6d-204c-4622-bcdb-5ce02aeba2bc/0_0.png',

      gameType: 'memory-match',
      config: {
        prompt: 'Match Iago\'s lies to their effects—trace the web of deception',
        timeLimit: 120,
        cards: [
          { id: 'card-1a', text: 'Lie: "Cassio knows about the affair"', matchId: 'match-1' },
          { id: 'card-1b', text: 'Effect: Suspicion begins', matchId: 'match-1' },
          { id: 'card-2a', text: 'Lie: "I saw Cassio with the handkerchief"', matchId: 'match-2' },
          { id: 'card-2b', text: 'Effect: "Proof" of the affair', matchId: 'match-2' },
          { id: 'card-3a', text: 'Lie: "Cassio confessed in his sleep"', matchId: 'match-3' },
          { id: 'card-3b', text: 'Effect: Certainty of betrayal', matchId: 'match-3' },
          { id: 'card-4a', text: 'Lie: "I\'m helping Cassio regain his position"', matchId: 'match-4' },
          { id: 'card-4b', text: 'Effect: Cassio seeks Desdemona\'s help', matchId: 'match-4' },
          { id: 'card-5a', text: 'Lie: "I\'m protecting you from jealousy"', matchId: 'match-5' },
          { id: 'card-5b', text: 'Effect: Creates jealousy while seeming to prevent it', matchId: 'match-5' },
        ],
      },

      learningPoints: [
        {
          id: 'lp-othello-13-web',
          content: 'Iago\'s lies interconnect in a self-reinforcing web where each deception makes the others more believable.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 14: The murder of Desdemona
    {
      id: 'othello-scene-14-murder',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/ffdd065a-fde3-454e-8574-be7b10e35344/0_0.png',
      image: 'https://cdn.midjourney.com/fe4e24c0-9fc1-45f2-bb2f-9c1ec4973faa/0_0.png',

      content: `In Desdemona's bedchamber, Othello prepares to kill her.

He enters with a candle and speaks a terrible soliloquy: "It is the cause, it is the cause, my soul. Let me not name it to you, you chaste stars. It is the cause."

He cannot even name what he believes she has done—so corrupted is the idea to him. Yet he proceeds with terrible resolve.

He wakes her. "Have you prayed tonight, Desdemona?"

She does not understand. He tells her: "If you bethink yourself of any crime unreconciled as yet to heaven and grace, solicit for it straight."

"Talk you of killing?" she asks, beginning to comprehend the horror.

"Think on thy sins," he commands.

"They are loves I bear to you," she replies.

"Ay, and for that thou diest."

She begs for mercy, for time, for one more prayer. She swears her innocence. "I never did offend you in my life, never loved Cassio but with such general warranty of heaven as I might love. I never gave him token."

But Othello will not hear. "That handkerchief which I so loved and gave thee, thou gav'st to Cassio."

"No, by my life and soul!" she cries. "Send for the man and ask him."

"He hath confessed," Othello lies. And strangles her.

She dies. And with her last breath, she protects him still: "Nobody. I myself. Farewell. Commend me to my kind lord."

Even in death, she loves him. Even in murder, she lies to save him.`,

      learningPoints: [
        {
          id: 'lp-othello-14-cause',
          content: 'Othello\'s "it is the cause" shows he believes he acts from justice, not jealousy—making the murder even more tragic because he thinks it righteous.',
          category: 'literary-context',
        },
        {
          id: 'lp-othello-14-innocence',
          content: 'Desdemona\'s final lie (claiming self-murder) is her last act of love—protecting the man who killed her.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 15: Recognition and despair
    {
      id: 'othello-scene-15-recognition',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/6ea13abd-8c06-4c34-9771-f8cf13074f27/0_0.png',
      image: 'https://cdn.midjourney.com/2c8a5929-1f7d-4114-8b4c-7335c356181a/0_0.png',

      content: `Emilia returns and discovers what Othello has done.

"She was false!" Othello insists. "Your husband knew it all."

"My husband?"

"Thy husband."

"That she was false to wedlock?"

"Ay, with Cassio. Had all his hairs been lives, my great revenge had stomach for them all."

"My husband!" Emilia cries, understanding at last. She calls for help: "Villainy, villainy, villainy!"

The truth emerges. Emilia reveals that she gave the handkerchief to Iago. Cassio confirms he found it in his chamber, never understanding why. Iago's deception unravels completely.

Othello sees at last. "Are there no stones in heaven but what serve for the thunder?" he cries. "Precious villain!"

He tries to kill Iago but fails. Iago stabs Emilia and flees, but is captured.

And Othello is left with the unbearable truth: Desdemona was innocent. Everything was Iago's lie. He has murdered the only person who truly loved him.

"Whip me, ye devils," he begs, "From the possession of this heavenly sight! Blow me about in winds! Roast me in sulfur! Wash me in steep-down gulfs of liquid fire! O Desdemona! Dead, Desdemona! Dead!"

But there is no punishment sufficient. No atonement possible. He has destroyed the best thing in his life based on lies he chose to believe.`,

      learningPoints: [
        {
          id: 'lp-othello-15-recognition',
          content: 'Othello\'s anagnorisis (recognition of truth) comes too late—a key tragic pattern where understanding arrives after irreversible action.',
          category: 'literary-context',
        },
        {
          id: 'lp-othello-15-self-torture',
          content: 'Othello\'s vision of hell is psychological—the torture of knowing what he has done and that it cannot be undone.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 16: Decision - Interpreting Othello
    {
      id: 'othello-scene-16-interpretation',
      type: 'decision',
      backgroundImage: 'https://cdn.midjourney.com/8990b245-20a8-433d-b8e2-ef80d92bcf00/0_0.png',

      prompt: 'How do you judge Othello\'s tragedy?',
      context: `Othello kills himself shortly after discovering the truth. But how should we understand his tragedy?`,

      choices: [
        {
          id: 'interpretation-victim',
          text: 'Othello is primarily a victim of Iago\'s evil manipulation',
          consequence: 'Partly true—but this reading removes Othello\'s agency. He chose to believe Iago despite Desdemona\'s innocence. His insecurity and jealousy made him vulnerable, but he still chose.',
          learningPoints: [
            {
              id: 'lp-othello-16-victim',
              content: 'While Iago is evil, tragedy requires the hero to participate in his own destruction—Othello\'s choices matter.',
              category: 'literary-context',
            },
          ],
        },
        {
          id: 'interpretation-flawed',
          text: 'Othello\'s insecurity as an outsider made him vulnerable to manipulation',
          consequence: 'Yes—this is central to the tragedy. Othello\'s racial and cultural outsider status creates specific vulnerabilities that Iago exploits. His tragedy is both universal (jealousy destroys anyone) and particular (his specific circumstances make him especially vulnerable).',
          learningPoints: [
            {
              id: 'lp-othello-16-specific',
              content: 'Othello\'s tragedy is both universal (anyone can fall to jealousy) and specific (his outsider status creates particular vulnerabilities).',
              category: 'literary-context',
            },
          ],
        },
        {
          id: 'interpretation-perception',
          text: 'The tragedy is about the gap between perception and reality',
          consequence: 'Exactly—Othello sees "proof" everywhere because he wants to believe it. Dramatic irony tortures the audience: we see Desdemona\'s innocence, Othello does not. The tragedy is perceptual as much as circumstantial.',
          learningPoints: [
            {
              id: 'lp-othello-16-perception',
              content: 'Othello demonstrates how perception shapes reality—once jealousy takes hold, every innocent action appears guilty.',
              category: 'literary-context',
            },
          ],
        },
      ],

      learningPoints: [],
    },

    // Scene 17: Conclusion and transition to King Lear
    {
      id: 'othello-scene-17-conclusion',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/8d25295f-bde5-40af-9424-f5b4e64b1190/0_0.png',

      content: `Othello's final words before his suicide attempt a kind of restoration:

"Speak of me as I am. Nothing extenuate, nor set down aught in malice. Then must you speak of one that loved not wisely but too well; of one not easily jealous but, being wrought, perplexed in the extreme..."

Then he stabs himself, falls upon Desdemona's body, and dies with a kiss: "I kissed thee ere I killed thee. No way but this, killing myself, to die upon a kiss."

**What Othello teaches us:**

Where Macbeth showed ambition destroying from within, Othello reveals how jealousy—that "green-eyed monster"—can be weaponized by manipulation.

Where Macbeth knows his evil and proceeds anyway, Othello believes he acts righteously—making his tragedy even more terrible.

Dramatic irony: the audience knows the truth while Othello does not, creating almost unbearable tension.

The domestic scale: this is not a kingdom destroyed but a marriage—making the tragedy intimate and personal.

But we have one more descent to make. Where Macbeth explored ambition and Othello jealousy, our final tragedy will confront the most terrible internal force of all: pride.

King Lear will show us what happens when power is relinquished foolishly, when everything is stripped away, when we are reduced to nothing but our naked humanity.

The darkness deepens still. Prepare for the abyss.`,

      learningPoints: [
        {
          id: 'lp-othello-17-loved-too-well',
          content: 'Othello\'s self-description "loved not wisely but too well" captures the tragedy—his love was real but his judgment was fatally flawed.',
          category: 'literary-context',
        },
        {
          id: 'lp-othello-17-part2-progression',
          content: 'Part II progresses from ambition (Macbeth) to jealousy (Othello) to pride (Lear)—each internal force more psychologically complex and devastating.',
          category: 'literary-context',
        },
      ],

      events: {
        onExit: [{
          type: 'quiz',
          componentId: 'quiz-chapter-2-othello',
          condition: { type: 'if-not-completed' },
        }],
      },
    },
  ],

  endQuiz: chapter2Quiz,
};

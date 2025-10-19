import type { Chapter } from '../../../types';
import { chapter3Quiz } from '../quizzes/chapter-3-quiz';

export const chapter3: Chapter = {
  id: 'don-quixote-chapter-3',
  title: 'Chapter 3: Dulcinea and Idealism',
  description: 'Don Quixote\'s devotion to the imaginary Dulcinea del Toboso reveals the power and peril of idealization.',

  learningObjectives: [
    'Analyze the concept of courtly love and its role in chivalric tradition',
    'Understand how Don Quixote\'s idealization of Dulcinea reflects broader themes',
    'Examine the gap between the real Aldonza Lorenzo and the imagined Dulcinea',
    'Recognize how ideals function independently of reality',
  ],

  scenes: [
    // Scene 1: Don Quixote Explains His Devotion
    {
      id: 'dq-ch3-s1-devotion',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/16228307-ae28-4bcb-b386-a7a31a9be60c/0_0.png',

      content: `As they rested by the roadside, Sancho asked a question that had been troubling him.

"Master, you keep talking about this Lady Dulcinea. Who is she exactly? Have you ever spoken to her?"

Don Quixote's face took on a dreamy expression. "Dulcinea del Toboso is the most beautiful, virtuous, and gracious lady in all the world, Sancho. Her beauty surpasses the sun. Her virtue puts the saints to shame. Her grace makes angels weep with envy."

"But have you ever actually talked to her?" Sancho pressed.

"A knight serves his lady from afar, Sancho. It is enough that she exists, that she inspires me to greatness. Every deed I perform, I perform in her name."`,

      learningPoints: [
        {
          id: 'dq-lp-ch3-s1-courtly-love',
          content: 'Courtly love was a medieval literary convention where knights served ladies from a distance, often without hope of reciprocation—idealizing rather than knowing them.',
          category: 'historical-context',
        },
        {
          id: 'dq-lp-ch3-s1-function',
          content: 'For Don Quixote, Dulcinea serves a psychological function—she gives his adventures meaning and purpose, even though she doesn\'t know he exists.',
          category: 'character-analysis',
        },
      ],
    },

    // Scene 2: Primary Source on Courtly Love
    {
      id: 'dq-ch3-s2-primary-source',
      type: 'primary-source',
      backgroundImage: 'https://cdn.midjourney.com/a8c9fff3-2606-4a23-b1fb-481c13709f76/0_0.png',

      prompt: 'Why is Don Quixote\'s application of courtly love both perfect and absurd?',

      source: {
        title: 'The Tradition of Courtly Love',
        author: 'Various troubadours and romance authors',
        date: 'Medieval Era',
        type: 'text',
        content: `## The Medieval Tradition of Courtly Love

Courtly love was a literary convention that dominated medieval romances. Knights were expected to follow strict rules when loving their ladies:

### The Six Rules

1. **Idealization** — The lady must be placed on a pedestal, far above the knight
2. **Distance** — The knight serves from afar, often without hope of reciprocation
3. **Ennobling Effect** — Love makes the knight braver, nobler, more virtuous
4. **Service** — The knight performs deeds in the lady's name, seeking her favor
5. **Secrecy** — The knight's love must often remain hidden or unrequited
6. **Suffering** — The knight must endure trials and pain to prove devotion

### A Historical Voice

From Andreas Capellanus' *"The Art of Courtly Love"* (12th century):

> "He who is not jealous cannot love. Every lover regularly turns pale in the presence of his beloved. Real jealousy always increases the worth of love."

<br/>

---

## Don Quixote's Perfect (But Absurd) Application

Don Quixote follows every single rule:

- Places Dulcinea above all other women ✓
- Has never actually spoken to her (extreme distance!) ✓
- Believes love for her makes him a better knight ✓
- Performs all deeds in her name ✓
- His love is entirely secret (she doesn't know he exists) ✓
- Endures constant suffering and defeats ✓

### The Critical Problem

Courtly love was always a **literary convention**—a fictional ideal meant for poetry and romance, not real life.

Don Quixote makes a fundamental mistake: he treats these fictional ideals as real-world instructions. He lives the convention literally, revealing both its beauty and its absurdity.`,
        citation: 'Understanding the literary convention that shapes Don Quixote\'s behavior',
      },

      questions: [
        {
          id: 'dq-ch3-s2-q1',
          question: 'Why is Don Quixote\'s application of courtly love both perfect and absurd?',
          type: 'multiple-choice',
          options: [
            'He follows every courtly love rule perfectly, but applies a literary convention meant for fiction to real life—loving someone he\'s never met',
            'He breaks all the rules of courtly love by speaking openly about his devotion instead of keeping it secret',
            'He correctly understands that courtly love was always meant to be practiced in real life, making his approach entirely sensible',
            'He misunderstands the rules entirely and creates his own version that has nothing to do with medieval tradition',
          ],
          correctAnswer: 'He follows every courtly love rule perfectly, but applies a literary convention meant for fiction to real life—loving someone he\'s never met',
          explanation: 'Don Quixote\'s approach to courtly love is perfect in execution but absurd in application. He meticulously follows every rule: idealization (placing Dulcinea on a pedestal), distance (never speaking to her), service (performing deeds in her name), secrecy (she doesn\'t know he exists), and suffering (enduring constant defeats). However, it\'s absurd because courtly love was always a literary convention meant for poetry and romance, not meant to be lived literally in the real world. His extreme version—loving someone he\'s never even met—reveals both the artificiality of the tradition and its power to motivate behavior.',
        },
      ],

      learningPoints: [
        {
          id: 'dq-lp-ch3-s2-convention',
          content: 'Don Quixote takes literary conventions literally—he lives out courtly love exactly as described in books, without understanding it was always artificial.',
          category: 'literary-technique',
        },
        {
          id: 'dq-lp-ch3-s2-extreme',
          content: 'His version of courtly love is so pure and extreme that it becomes absurd—he\'s never even met the woman he claims to love.',
          category: 'thematic-analysis',
        },
      ],
    },

    // Scene 3: Dialogue About Dulcinea's Identity
    {
      id: 'dq-ch3-s3-dialogue',
      type: 'dialogue',
      backgroundImage: 'https://cdn.midjourney.com/f6174afb-c97a-4155-9e85-d13f313db436/0_0.png',

      character: {
        id: 'sancho-panza',
        name: 'Sancho Panza',
        portrait: 'https://cdn.midjourney.com/c9ea39d4-3ec8-43ea-aa00-aa12782044aa/0_0.png',
        description: 'Growing increasingly curious about this mysterious lady',
      },

      dialogueTree: {
        id: 'node-1',
        speaker: 'sancho-panza',
        text: 'Master, this Lady Dulcinea del Toboso... what does she look like? Where exactly does she live?',

        responses: [
          {
            id: 'response-describe',
            text: 'She has golden hair, pearl teeth, ruby lips, and skin like alabaster!',
            nextNodeId: 'node-2',
          },
          {
            id: 'response-toboso',
            text: 'She lives in El Toboso, naturally. The most beautiful lady in the most beautiful village!',
            nextNodeId: 'node-3',
          },
        ],

        allNodes: [
          {
            id: 'node-2',
            speaker: 'sancho-panza',
            text: 'Hmm. Master... that sounds like every lady described in those books of yours. Is it possible you\'re thinking of someone specific, or just... the idea of someone?',
            responses: [
              {
                id: 'response-specific',
                text: 'She is real, Sancho! I know in my heart she exists!',
                nextNodeId: 'node-4',
              },
            ],
          },
          {
            id: 'node-3',
            speaker: 'sancho-panza',
            text: 'El Toboso? But master, I know that village. It\'s small and poor, like our own. And I may know who you\'re thinking of... there\'s a farm girl there named Aldonza Lorenzo.',
            responses: [
              {
                id: 'response-aldonza',
                text: 'Yes! Aldonza Lorenzo is merely her common name. Her true name is Dulcinea del Toboso!',
                nextNodeId: 'node-4',
              },
            ],
          },
          {
            id: 'node-4',
            speaker: 'sancho-panza',
            text: 'If you say so, master. But I should tell you—if it\'s the Aldonza I\'m thinking of, she\'s strong as an ox from farm work and has a voice like a sergeant. Not exactly... delicate.',
            isEnd: true,
          },
        ],
      },

      learningPoints: [
        {
          id: 'dq-lp-ch3-s3-reality',
          content: 'Sancho knows the real Aldonza Lorenzo—a sturdy peasant woman nothing like Don Quixote\'s description, revealing the complete disconnect from reality.',
          category: 'character-analysis',
        },
      ],
    },

    // Scene 4: The Reality of Aldonza
    {
      id: 'dq-ch3-s4-aldonza',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/0001a318-4b95-4fe5-ad3d-c5873076147a/0_0.png',
      image: 'https://cdn.midjourney.com/817a8605-8f4b-4b9e-ab87-a2c9482cb38a/0_0.png',

      content: `The truth, which Sancho knew but Don Quixote refused to acknowledge, was straightforward enough.

Aldonza Lorenzo was a farm girl from El Toboso. She was strong from years of field work, with rough hands and a loud voice. She could gut a pig, shear a sheep, and outwork most men in the fields. She was competent, practical, and completely ordinary.

She had probably never even noticed Alonso Quixano the few times they might have crossed paths. To her, he would have been just another aging landowner, if she thought of him at all.

But in Don Quixote's mind, she had become Dulcinea del Toboso—delicate, refined, ethereally beautiful, impossibly virtuous. A lady of such perfection that the moon itself dimmed in comparison to her radiance.

The gap between these two versions of the same person was vast as an ocean.`,

      inlineAnnotations: [
        {
          id: 'dq-ann-transformation',
          text: 'Dulcinea del Toboso',
          tooltip: {
            title: 'The Power of Naming',
            content: '"Dulcinea" suggests sweetness (from Spanish "dulce"). "Del Toboso" makes her sound noble. Don Quixote transforms a common name into an aristocratic title through language alone.',
            category: 'literary-context',
          },
        },
      ],

      learningPoints: [
        {
          id: 'dq-lp-ch3-s4-idealization',
          content: 'Idealization requires ignoring or transforming reality—Don Quixote must erase the real Aldonza to create the perfect Dulcinea.',
          category: 'thematic-analysis',
        },
        {
          id: 'dq-lp-ch3-s4-projection',
          content: 'Don Quixote loves not a person but a projection—an imagined ideal that serves his psychological needs, not a real relationship.',
          category: 'character-analysis',
        },
      ],
    },

    // Scene 5: Decision About Truth
    {
      id: 'dq-ch3-s5-decision',
      type: 'decision',
      backgroundImage: 'https://cdn.midjourney.com/28d6844c-4384-4725-8ac2-6f8ba12867c8/0_0.png',

      prompt: 'Sancho knows the truth about Aldonza. What should he do?',
      context: `Sancho faced a dilemma. He knew that Aldonza Lorenzo was nothing like Don Quixote described. He could easily ride to El Toboso, find her, and bring Don Quixote face-to-face with reality.

But would that help? Or would it destroy something important, even if that something was based on delusion?

And what if Don Quixote simply refused to believe his own eyes?`,

      choices: [
        {
          id: 'dq-choice-tell-truth',
          text: 'Tell Don Quixote the plain truth about Aldonza',
          consequence: 'Sancho considers confronting Don Quixote directly, but realizes it would be futile—his master would simply claim Sancho is enchanted or blind to true nobility. Instead, Sancho plays along with the fantasy, occasionally dropping hints about Aldonza\'s real nature that Don Quixote ignores. Later, when forced to "deliver" Don Quixote to Dulcinea, Sancho invents the famous "enchanted Dulcinea" story, pointing to peasant girls and claiming enchanters transformed them.',
          learningPoints: [
            {
              id: 'dq-lp-ch3-s5-resistance',
              content: 'Those deeply invested in their beliefs will resist contradictory evidence—Sancho realizes direct confrontation would only make Don Quixote more defensive.',
              category: 'character-analysis',
            },
          ],
        },
        {
          id: 'dq-choice-play-along',
          text: 'Play along with the fantasy to keep the peace',
          consequence: 'Sancho decides there\'s no point arguing with a dreamer. He plays along with Don Quixote\'s fantasy, nodding when his master speaks of Dulcinea\'s beauty. When Don Quixote writes a letter to her, Sancho pretends to deliver it and invents a story about her response. Later, when they approach El Toboso and Don Quixote wants to visit her, Sancho creates the "enchanted Dulcinea" deception—pointing to peasant girls on donkeys and claiming enchanters transformed them.',
          learningPoints: [
            {
              id: 'dq-lp-ch3-s5-enabling',
              content: 'By playing along, Sancho enables the delusion—but he also maintains their relationship and partnership, showing the complexity of dealing with loved ones\' fantasies.',
              category: 'thematic-analysis',
            },
          ],
        },
        {
          id: 'dq-choice-protect',
          text: 'Actively protect Don Quixote from confronting the truth',
          consequence: 'Sancho realizes that some truths are too painful and decides to shield his master from devastating reality. He plays along with the Dulcinea fantasy, inventing stories about delivering letters. Later, when Don Quixote insists on visiting Dulcinea in El Toboso, Sancho improvises brilliantly—pointing to peasant girls on donkeys and claiming they\'re Dulcinea and her handmaids transformed by enchanters. This compassionate lie uses Don Quixote\'s own belief system to protect him from truth.',
          learningPoints: [
            {
              id: 'dq-lp-ch3-s5-compassion',
              content: 'Sancho\'s "enchanted Dulcinea" deception shows how love can motivate protective lies—he uses Don Quixote\'s own belief system to shield him from painful truth.',
              category: 'character-analysis',
            },
          ],
        },
      ],

      learningPoints: [],
    },

    // Scene 6: Writing the Letter
    {
      id: 'dq-ch3-s6-letter',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/92ce6a49-0fad-4c54-9945-c3cb2f5bd094/0_0.png',
      image: 'https://cdn.midjourney.com/42a5a8f6-0a9f-494c-9f6b-4b67d0ee503d/0_0.png',

      content: `Don Quixote decided to write a letter to Dulcinea, as any proper knight would do. He sat beneath a tree, pulled out a small notebook, and began composing in his most flowery language.

"Sovereign and most esteemed Lady,
The wounded by the point of absence and pierced to the very heart, most sweet Dulcinea del Toboso, sends thee the health that he himself enjoys not..."

It went on in this vein for pages—elaborate declarations of devotion, descriptions of his suffering, promises of future glory, all in the most elevated language imaginable.

When he finished, he handed it proudly to Sancho. "Take this to Lady Dulcinea. Tell her that her knight errant awaits her response with bated breath!"

Sancho looked at the letter doubtfully. "And where exactly do I deliver this, master? To Aldonza Lorenzo's farm?"`,

      learningPoints: [
        {
          id: 'dq-lp-ch3-s6-language',
          content: 'Don Quixote\'s letter parodies the conventions of courtly love poetry—it\'s so exaggerated that it reveals the artificiality of the genre itself.',
          category: 'literary-technique',
        },
        {
          id: 'dq-lp-ch3-s6-one-sided',
          content: 'The letter is entirely one-sided—Don Quixote talks about his own feelings without any real consideration of Dulcinea as an actual person with her own thoughts.',
          category: 'thematic-analysis',
        },
      ],
    },

    // Scene 7: Quote Attribution
    {
      id: 'dq-ch3-s7-quotes',
      type: 'quote-attribution',
      backgroundImage: 'https://cdn.midjourney.com/92ce6a49-0fad-4c54-9945-c3cb2f5bd094/0_0.png',

      prompt: 'Match these quotes about love and idealism to their speakers',

      quotes: [
        {
          id: 'quote-1',
          text: 'I have imagined what I desire, and I shall paint her in my mind as I wish her to be',
          speaker: 'Don Quixote',
          context: 'Don Quixote explaining how he envisions Dulcinea',
          explanation: 'This quote perfectly captures the essence of Don Quixote\'s approach—he openly admits that Dulcinea is his creation, yet somehow this doesn\'t diminish his devotion.',
        },
        {
          id: 'quote-2',
          text: 'If it\'s the Aldonza I\'m thinking of, she\'s strong as an ox from farm work and has a voice like a sergeant',
          speaker: 'Sancho Panza',
          context: 'Sancho gently trying to tell Don Quixote the truth about Aldonza Lorenzo',
          explanation: 'Sancho knows the real woman behind the fantasy—his practical description contrasts sharply with Don Quixote\'s romantic idealization, showing the gap between reality and delusion.',
        },
        {
          id: 'quote-3',
          text: 'He sees what he wants to see anyway. At least I kept him happy. Is that wrong?',
          speaker: 'Sancho Panza',
          context: 'Sancho\'s aside to himself after inventing stories about delivering the letter',
          explanation: 'Sancho grapples with the ethics of enabling Don Quixote\'s delusion—is compassionate deception better than painful truth? This question haunts their entire relationship.',
        },
        {
          id: 'quote-4',
          text: 'For him alone was Don Quixote born, and he for her—he to be brave, she to be virtuous',
          speaker: 'Cervantes (Narrator)',
          context: 'The narrator\'s commentary on the symbiotic relationship between Don Quixote and Dulcinea',
          explanation: 'Cervantes\' narrator speaks with deliberate ambiguity—is this celebrating their devotion or mocking its artificiality? The answer, characteristically, is both.',
        },
      ],

      learningPoints: [
        {
          id: 'dq-lp-ch3-s7-contradiction',
          content: 'Don Quixote\'s quotes often contain contradictions—he admits Dulcinea is imagined yet treats her as real, showing the complexity of self-deception.',
          category: 'character-analysis',
        },
        {
          id: 'dq-lp-ch3-s7-standards',
          content: 'The impossible standards of courtly love reduce women to abstract ideals rather than humans—a critique Cervantes weaves throughout the novel.',
          category: 'thematic-analysis',
        },
      ],
    },

    // Scene 8: Sancho's Dilemma (Narrative)
    {
      id: 'dq-ch3-s8-dilemma',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/28d6844c-4384-4725-8ac2-6f8ba12867c8/0_0.png',

      content: `Sancho rode toward El Toboso with the letter in his hand, wrestling with an impossible task. How could he deliver a love letter to a woman who didn't know she was the object of devotion? How could he ask Aldonza Lorenzo to respond to "Dulcinea del Toboso"?

The more he thought about it, the more absurd it seemed. If he actually delivered the letter, Aldonza would think them both mad. She might mock Don Quixote, or worse, humiliate him. And his master's fragile fantasy would shatter.

So Sancho made a decision. He wouldn't deliver the letter at all.

Instead, he rode to a quiet spot, waited a few hours, and then turned back. He would tell Don Quixote whatever the old man wanted to hear. It was kinder than the truth, wasn't it? And it would keep the peace.

As he rode back toward his master, Sancho rehearsed his lies, feeling both guilty and protective.`,

      learningPoints: [
        {
          id: 'dq-lp-ch3-s8-choice',
          content: 'Sancho chooses compassionate deception over painful truth—he never delivers the letter, instead inventing a fictional encounter.',
          category: 'character-analysis',
        },
        {
          id: 'dq-lp-ch3-s8-practical',
          content: 'Sancho\'s practical wisdom recognizes that some situations have no good solutions—delivering the letter would cause more harm than good.',
          category: 'thematic-analysis',
        },
      ],
    },

    // Scene 9: Sancho's Fictional Report (Dialogue)
    {
      id: 'dq-ch3-s9-report',
      type: 'dialogue',
      backgroundImage: 'https://cdn.midjourney.com/e0be5542-2004-47ac-b63f-dc9a6b64d492/0_0.png',

      character: {
        id: 'sancho-panza',
        name: 'Sancho Panza',
        portrait: 'https://cdn.midjourney.com/c9ea39d4-3ec8-43ea-aa00-aa12782044aa/0_0.png',
        description: 'Returning from his "mission" to deliver the letter',
      },

      dialogueTree: {
        id: 'node-1',
        speaker: 'sancho-panza',
        text: 'Master, I\'m back from El Toboso. I delivered your letter to... to Lady Dulcinea.',

        responses: [
          {
            id: 'response-eager',
            text: 'You saw her? You spoke with her? Tell me everything!',
            nextNodeId: 'node-2',
          },
          {
            id: 'response-response',
            text: 'What did she say? Did she send a response?',
            nextNodeId: 'node-3',
          },
        ],

        allNodes: [
          {
            id: 'node-2',
            speaker: 'sancho-panza',
            text: '*thinking fast* She was... winnowing wheat in her yard. Very busy, very... practical. When I gave her the letter, she said—uh—she said she\'d read it later. After the harvest.',
            responses: [
              {
                id: 'response-harvest',
                text: 'Ah! Her devotion to duty! Truly she is as noble as I imagined!',
                nextNodeId: 'node-4',
              },
            ],
          },
          {
            id: 'node-3',
            speaker: 'sancho-panza',
            text: 'Well, she was quite busy with farm work—I mean, with her ladylike duties. She said... she said she thinks of you fondly and wishes you well on your adventures.',
            responses: [
              {
                id: 'response-pleased',
                text: 'She thinks of me! Oh, Sancho, I am the most fortunate knight in the world!',
                nextNodeId: 'node-4',
              },
            ],
          },
          {
            id: 'node-4',
            speaker: 'sancho-panza',
            text: '*aside to himself* He sees what he wants to see anyway. At least I kept him happy. Is that wrong?',
            isEnd: true,
          },
        ],
      },

      learningPoints: [
        {
          id: 'dq-lp-ch3-s8-complicity',
          content: 'Sancho becomes complicit in Don Quixote\'s fantasy—he invents a story rather than tell the truth, showing how delusions can be socially sustained.',
          category: 'character-analysis',
        },
        {
          id: 'dq-lp-ch3-s8-interpretation',
          content: 'Don Quixote reinterprets even mundane details to fit his worldview—"winnowing wheat" becomes "noble devotion to duty" in his mind.',
          category: 'literary-technique',
        },
      ],
    },

    // Scene 10: The Enchanted Dulcinea
    {
      id: 'dq-ch3-s10-enchanted',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/e0be5542-2004-47ac-b63f-dc9a6b64d492/0_0.png',
      image: 'https://cdn.midjourney.com/e48569af-8322-4a59-8291-ff148f04adc4/0_0.png',

      content: `One day, as they approached El Toboso, Sancho panicked. Don Quixote wanted to visit Dulcinea in person!

Thinking quickly, Sancho spotted three peasant girls riding donkeys along the road. He pointed to them urgently.

"Master! Look! There's Lady Dulcinea with her handmaids!"

Don Quixote looked at the dusty peasant girls in confusion. "Sancho... I see only three farm girls on donkeys."

Sancho had to commit to his lie. "Master! An enchanter has transformed them! That's Dulcinea right there—can't you see her beauty despite the enchantment?"

Don Quixote approached the confused girls and dropped to his knees, declaring his devotion to "Dulcinea." The girls, thinking him mad, rode away quickly.`,

      learningPoints: [
        {
          id: 'dq-lp-ch3-s9-reversal',
          content: 'In a brilliant reversal, Sancho uses Don Quixote\'s own logic against him—claiming enchanters have transformed Dulcinea, forcing Don Quixote to see ugliness where he wants beauty.',
          category: 'literary-technique',
        },
        {
          id: 'dq-lp-ch3-s9-torment',
          content: 'This "enchanted Dulcinea" episode becomes a source of torment for Don Quixote—he\'s forced to see his ideal reduced to reality by the very magic he believes in.',
          category: 'thematic-analysis',
        },
      ],
    },

    // Scene 11: Cause and Effect - Idealizations
    {
      id: 'dq-ch3-s11-cause-effect',
      type: 'cause-effect',
      backgroundImage: 'https://cdn.midjourney.com/34bdf0d6-b6e6-412b-917e-160aa3a6192b/0_0.png',

      prompt: 'Match Don Quixote\'s idealizations with their real-world counterparts',

      pairs: [
        {
          id: 'pair-1',
          cause: 'Dulcinea del Toboso: noble lady of incomparable beauty and virtue',
          effect: 'Reality: Aldonza Lorenzo, sturdy peasant farm girl',
          explanation: 'Don Quixote transforms a working-class woman he barely knows into an aristocratic ideal, revealing how idealization erases the actual person.',
        },
        {
          id: 'pair-2',
          cause: 'A relationship of courtly love with profound spiritual connection',
          effect: 'Reality: One-sided fantasy; Aldonza doesn\'t know he exists',
          explanation: 'Don Quixote imagines a deep relationship when there is no relationship at all—pure projection without mutual recognition.',
        },
        {
          id: 'pair-3',
          cause: 'Letter filled with elevated poetry and declarations of eternal devotion',
          effect: 'Reality: Undelivered letter to someone who can\'t read',
          explanation: 'Don Quixote\'s elaborate literary effort goes nowhere—his performance of courtly love requires no actual audience.',
        },
        {
          id: 'pair-4',
          cause: 'Dulcinea as motivation for heroic deeds and noble behavior',
          effect: 'Reality: Don Quixote\'s actions cause harm regardless of intention',
          explanation: 'While Dulcinea inspires Don Quixote to what he sees as heroism, his actual deeds often hurt innocent people and animals.',
        },
        {
          id: 'pair-5',
          cause: 'Peasant women on donkeys',
          effect: 'Sancho\'s claim: Dulcinea and handmaids under enchantment',
          explanation: 'The tables turn—Sancho uses Don Quixote\'s own belief in enchanters to force him to see reality as transformed ideal, creating painful irony.',
        },
      ],

      learningPoints: [
        {
          id: 'dq-lp-ch3-s10-gap',
          content: 'The gap between idealization and reality is vast—Don Quixote\'s Dulcinea and the real Aldonza share nothing but a vague physical proximity.',
          category: 'thematic-analysis',
        },
        {
          id: 'dq-lp-ch3-s10-function',
          content: 'Ideals can function powerfully even when completely disconnected from reality—Don Quixote\'s devotion is genuine regardless of its false foundation.',
          category: 'thematic-analysis',
        },
      ],
    },

    // Scene 12: Narrative - The Persistence of Idealism
    {
      id: 'dq-ch3-s12-persistence',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/34bdf0d6-b6e6-412b-917e-160aa3a6192b/0_0.png',

      content: `Despite everything—despite Sancho's hints about Aldonza's true nature, despite the "enchanted" peasant girls, despite never receiving a response to his letter—Don Quixote's devotion to Dulcinea never wavered.

In fact, every obstacle seemed to strengthen his belief. If reality contradicted his vision, then reality must be enchanted or corrupted. The purity of his ideal could not be touched by mere facts.

"Don't you see, Sancho?" he explained as they rode on. "The more the enchanters work against me, the more I know I'm on the right path. They fear the power of true love!"

Sancho said nothing. He was beginning to understand that Don Quixote needed Dulcinea—needed the idea of her—more than bread or water. Take away his fantasy and there would be nothing left but a lonely old man in rusty armor.`,

      learningPoints: [
        {
          id: 'dq-lp-ch3-s11-necessity',
          content: 'Don Quixote\'s idealism isn\'t optional—it\'s existentially necessary, giving meaning to an otherwise meaningless existence.',
          category: 'thematic-analysis',
        },
        {
          id: 'dq-lp-ch3-s11-confirmation',
          content: 'Confirmation bias makes contradictory evidence strengthen beliefs—Don Quixote interprets obstacles as proof of conspiracies against him rather than evidence of error.',
          category: 'character-analysis',
        },
      ],
    },

    // Scene 13: Decision - The Value of Ideals
    {
      id: 'dq-ch3-s13-decision',
      type: 'decision',
      backgroundImage: 'https://cdn.midjourney.com/bdda7c13-dc6d-4a9e-b6a2-b6fcc967b522/0_0.png',

      prompt: 'Is Don Quixote\'s idealism admirable or delusional?',
      context: `Sancho found himself pondering a difficult question. Don Quixote's love for Dulcinea was based entirely on fantasy. The woman he loved didn't exist. He devoted himself to an illusion.

And yet... there was something noble about it too. Don Quixote's ideals made him brave, generous, and devoted. He acted as if the world could be better than it was. He refused to accept a reality of mere practicality and survival.

Was that madness? Or was that the only thing that made life worth living?`,

      choices: [
        {
          id: 'dq-choice-admirable',
          text: 'Admirable—ideals inspire us to be better than mere reality',
          consequence: 'Sancho nods slowly. Perhaps there\'s wisdom in refusing to accept the world as it is. Maybe we need dreamers, even mad ones, to show us what could be.',
          learningPoints: [
            {
              id: 'dq-lp-ch3-s12-inspiration',
              content: 'Idealism, even when based on fantasy, can inspire genuine virtue and excellence—Don Quixote\'s imaginary lady makes him more generous and brave.',
              category: 'thematic-analysis',
            },
          ],
        },
        {
          id: 'dq-choice-delusional',
          text: 'Delusional—truth matters, and self-deception is dangerous',
          consequence: 'Sancho shakes his head. No, this is madness. Don Quixote hurts himself and others because he can\'t see reality. That can\'t be good, no matter how noble the intentions.',
          learningPoints: [
            {
              id: 'dq-lp-ch3-s12-harm',
              content: 'Idealism disconnected from reality causes harm—Don Quixote\'s noble intentions lead to actual damage to himself and innocent bystanders.',
              category: 'thematic-analysis',
            },
          ],
        },
        {
          id: 'dq-choice-both',
          text: 'Both—the tension between ideal and real is the human condition',
          consequence: 'Sancho sighs. Maybe it\'s both. Maybe we need ideals to aspire to, but we also need to see the world clearly. The challenge is balancing both.',
          learningPoints: [
            {
              id: 'dq-lp-ch3-s12-tension',
              content: 'Cervantes doesn\'t resolve the tension between idealism and realism—instead, he shows both have value and both have costs, leaving readers to grapple with the ambiguity.',
              category: 'thematic-analysis',
            },
          ],
        },
      ],

      learningPoints: [],
    },

    // Scene 14: Primary Source - Cervantes' Commentary
    {
      id: 'dq-ch3-s14-primary-source',
      type: 'primary-source',
      backgroundImage: 'https://cdn.midjourney.com/bdda7c13-dc6d-4a9e-b6a2-b6fcc967b522/0_0.png',

      prompt: 'What is Cervantes suggesting about the relationship between fiction and reality?',

      source: {
        title: 'Cervantes on Idealization and Literature',
        author: 'Miguel de Cervantes',
        date: '1605-1615',
        type: 'text',
        content: `## The Author's Paradox

From *Don Quixote* (narrator's commentary):

> "For him alone was Don Quixote born, and he for her; he to be wise, she to be famous; he to be brave, she to be virtuous; he to win glory and to accomplish great feats, she to be honored by his devotion."

---

### Cervantes' Deliberate Ambiguity

Cervantes writes about Dulcinea with purposeful contradiction. Is he celebrating Don Quixote's devotion or mocking it?

**The answer:** Both.

This ambiguity is the heart of the novel's genius. We're meant to hold two contradictory thoughts at once—that Don Quixote is noble *and* ridiculous, inspiring *and* delusional.

---

### The Deeper Question

**If Dulcinea inspires Don Quixote to generosity, bravery, and honor—does it matter that she doesn't exist?**

If the ideal produces real virtue, is the ideal somehow "true" despite being factually false? This is the philosophical puzzle at the center of the Dulcinea story.

---

### Cervantes' Innovation

**Traditional romances:** Presented idealized ladies as simply perfect—no explanation needed.

**Cervantes' approach:** Shows us the *process* of idealization—how an ordinary peasant woman gets transformed into an impossible ideal.

By revealing the mechanism, he simultaneously:
- **Critiques** the artificiality of courtly love conventions
- **Validates** their power to inspire excellence

---

### The Modern Question

We all idealize—partners, heroes, nations, causes. Don Quixote is an extreme version of something universal.

**The novel asks:** How much idealization is necessary for a meaningful life? When does it become harmful?

These questions remain relevant four centuries later.`,
        citation: 'The author\'s perspective on the relationship between fiction and reality',
      },

      questions: [
        {
          id: 'dq-ch3-s13-q1',
          question: 'What is Cervantes suggesting about the relationship between fiction and reality? Can something be both false and valuable?',
          type: 'multiple-choice',
          options: [
            'Dulcinea is factually false but produces real virtues like bravery and generosity—Cervantes shows ideals can be powerful even when disconnected from reality, maintaining deliberate ambiguity about whether this is wisdom or madness',
            'Fiction is always harmful—Cervantes clearly condemns Don Quixote\'s idealization as pure delusion that should be rejected in favor of accepting reality as it is',
            'Reality is an illusion—Cervantes suggests that Don Quixote\'s imagined Dulcinea is actually more "real" than the peasant woman Aldonza because ideals are all that truly matter',
            'Fiction and reality are completely separate—Cervantes shows they have no relationship to each other, and ideals cannot affect behavior in the real world',
          ],
          correctAnswer: 'Dulcinea is factually false but produces real virtues like bravery and generosity—Cervantes shows ideals can be powerful even when disconnected from reality, maintaining deliberate ambiguity about whether this is wisdom or madness',
          explanation: 'Cervantes maintains deliberate ambiguity about idealism. He shows that Don Quixote\'s false belief in Dulcinea produces real virtues like bravery and generosity, suggesting that ideals can function powerfully even when disconnected from reality. By revealing the process of idealization (how Aldonza becomes Dulcinea), Cervantes both critiques its artificiality and validates its power to inspire excellence. The novel refuses to simply condemn or celebrate this—instead asking whether we all create "Dulcineas" in our lives, and whether that\'s madness or wisdom. This ambiguity is central to the novel\'s genius.',
        },
      ],

      learningPoints: [
        {
          id: 'dq-lp-ch3-s13-ambiguity',
          content: 'Cervantes refuses to simply condemn or celebrate Don Quixote—the novel maintains deliberate ambiguity about whether idealism is noble or foolish.',
          category: 'literary-technique',
        },
        {
          id: 'dq-lp-ch3-s13-modern',
          content: 'The Dulcinea story remains relevant because we all grapple with the gap between how we want the world to be and how it actually is.',
          category: 'literary-significance',
        },
      ],

      events: {
        onExit: [
          {
            type: 'quiz',
            componentId: 'quiz-don-quixote-chapter-3',
            condition: { type: 'if-not-completed' },
          },
        ],
      },
    },
  ],

  endQuiz: chapter3Quiz,
};

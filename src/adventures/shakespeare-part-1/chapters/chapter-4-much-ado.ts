import type { Chapter } from '../../../types';
import { chapter4Quiz } from '../quizzes/chapter-4-quiz';

export const chapter4: Chapter = {
  id: 'chapter-4-much-ado',
  title: 'Chapter 4: Much Ado About Nothing - Wit, Deception, and True Love',
  description: 'In Messina, two love stories intertwine. Witness the witty battle between Beatrice and Benedick, while young Claudio and Hero face the dangers of malicious deception and honor culture.',

  learningObjectives: [
    'Analyze the "merry war" between Beatrice and Benedick as mature love',
    'Understand the role of wit and wordplay in Shakespearean comedy',
    'Recognize how malicious deception (Don John) contrasts with playful tricks',
    'Identify the theme of honor and reputation in Renaissance society',
    'Compare arranged/conventional love (Claudio/Hero) with earned love (Beatrice/Benedick)',
  ],

  scenes: [
    // Scene 1: Opening narrative - Return from war
    {
      id: 'much-ado-scene-1-return',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/c4fcc0eb-1f8d-42ba-83a7-57d7b81c06f6/0_0.png',
      image: 'https://cdn.midjourney.com/c4fcc0eb-1f8d-42ba-83a7-57d7b81c06f6/0_0.png',

      content: `Welcome to Messina, a sun-drenched city in Sicily where soldiers return home from war. The battle is won, and the young men of Don Pedro's army march through the streets to the sound of celebration.

Among them is Count Claudio, a promising young officer who distinguished himself in battle. His friend Benedick, a witty bachelor who claims to despise love and marriage, walks beside him. Leading them all is Don Pedro, the Prince of Aragon, accompanied by his melancholy brother Don John.

They are bound for the house of Leonato, the governor of Messina, whose daughter Hero awaits news of the war. And with her is Leonato's sharp-tongued niece Beatrice, who has been asking pointed questions about a certain Signor Benedick.

The stage is set for two love stories—one conventional, one anything but. And both will face the test of deception before they reach their conclusion.`,

      learningPoints: [
        {
          id: 'lp-much-ado-1-setting',
          content: 'Much Ado About Nothing is set in peacetime after military victory, creating an atmosphere of celebration that allows for romantic comedy.',
          category: 'literary-context',
        },
        {
          id: 'lp-much-ado-1-two-plots',
          content: 'The play features two parallel love plots: the conventional romance of Claudio and Hero, and the witty battle between Beatrice and Benedick.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 2: Dialogue - The "merry war" between Beatrice and Benedick
    {
      id: 'much-ado-scene-2-merry-war',
      type: 'dialogue',
      backgroundImage: 'https://cdn.midjourney.com/c4fcc0eb-1f8d-42ba-83a7-57d7b81c06f6/0_0.png',

      character: {
        id: 'beatrice',
        name: 'Beatrice',
        portrait: 'https://cdn.midjourney.com/3b15f419-0675-4e7c-a486-637936acf413/0_3.png',
        description: 'Leonato\'s witty and sharp-tongued niece',
      },

      dialogueTree: {
        id: 'node-1',
        speaker: 'beatrice',
        text: 'I pray you, is Signor Mountanto returned from the wars or no?',

        responses: [
          {
            id: 'response-who',
            text: 'Who is Signor Mountanto?',
            nextNodeId: 'node-2',
          },
          {
            id: 'response-why',
            text: 'Why do you ask about him with such mockery?',
            nextNodeId: 'node-3',
          },
        ],

        allNodes: [
          {
            id: 'node-2',
            speaker: 'beatrice',
            text: '"Mountanto" is my name for Benedick—it\'s a fencing term for an upward thrust. He fancies himself quite the swordsman, both in battle and in wit.',
            responses: [
              {
                id: 'response-fond',
                text: 'It sounds like you think of him often',
                nextNodeId: 'node-4',
              },
              {
                id: 'response-rivalry',
                text: 'You two seem to be rivals',
                nextNodeId: 'node-5',
              },
            ],
          },
          {
            id: 'node-3',
            speaker: 'beatrice',
            text: 'There is a kind of merry war between Signor Benedick and me. We never meet but there\'s a skirmish of wit between us.',
            responses: [
              {
                id: 'response-enjoy',
                text: 'But you seem to enjoy this war',
                nextNodeId: 'node-4',
              },
              {
                id: 'response-why-fight',
                text: 'What started this conflict?',
                nextNodeId: 'node-5',
              },
            ],
          },
          {
            id: 'node-4',
            speaker: 'beatrice',
            text: 'I would not deny it. But I assure you, I had rather hear my dog bark at a crow than a man swear he loves me. Marriage? Not for Beatrice!',
            isEnd: true,
          },
          {
            id: 'node-5',
            speaker: 'beatrice',
            text: 'He once set out to woo me, and I gave him double-dealing with words. He\'s now convinced all women are deceitful. And I? I am equally convinced all men are tedious.',
            isEnd: true,
          },
        ],
      },

      learningPoints: [
        {
          id: 'lp-much-ado-2-merry-war',
          content: 'The "merry war" between Beatrice and Benedick consists of witty verbal sparring that masks (or reveals?) deeper feelings.',
          category: 'literary-context',
        },
        {
          id: 'lp-much-ado-2-wit',
          content: 'Shakespeare uses wordplay and quick exchanges to show intellectual equality between Beatrice and Benedick—unusual for the time.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 3: Narrative - Claudio falls for Hero
    {
      id: 'much-ado-scene-3-claudio-hero',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/93f207c5-5663-4db8-aca6-544e6b486202/0_0.png',
      image: 'https://cdn.midjourney.com/c4fcc0eb-1f8d-42ba-83a7-57d7b81c06f6/0_0.png',

      content: `## While Beatrice and Benedick trade barbs, a quieter romance blooms.

Young Count Claudio has noticed Hero, Leonato's gentle daughter. She said little during the evening—she is modest, soft-spoken, the ideal Renaissance lady.

"Did you note the daughter of Signor Leonato?" Claudio asks Don Pedro.

"I noted her not," the Prince replies, "but I looked on her."

Claudio, emboldened by wine and victory, declares his love. Hero is beautiful, virtuous, and—importantly—Leonato's heir. It is a match that makes perfect sense by every social measure.

Unlike Beatrice and Benedick's sharp-edged equality, this is conventional romance: the young man declares his love, the woman waits modestly, the father approves, and marriage swiftly follows. Or would follow, if not for the plotting of Don John, whose melancholy has curdled into something more sinister.`,

      inlineAnnotations: [
        {
          id: 'annotation-ideal-lady',
          text: 'ideal Renaissance lady',
          tooltip: {
            title: 'The Renaissance Ideal Woman',
            content: 'Hero embodies the Renaissance ideal: modest, obedient, chaste, and soft-spoken. Beatrice, by contrast, violates nearly every expectation—making her both shocking and fascinating to contemporary audiences.',
            category: 'cultural-context',
          },
        },
      ],

      learningPoints: [
        {
          id: 'lp-much-ado-3-contrast',
          content: 'Claudio and Hero represent conventional courtship based on appearance and social standing, contrasting with Beatrice and Benedick\'s intellectual connection.',
          category: 'literary-context',
        },
        {
          id: 'lp-much-ado-3-speed',
          content: 'Claudio\'s rapid courtship of Hero (from first meeting to engagement) sets up the play\'s later crisis—he doesn\'t truly know her.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 4: Map exploration - Explore Messina
    {
      id: 'much-ado-scene-4-messina-map',
      type: 'map-exploration',
      backgroundImage: 'https://cdn.midjourney.com/c4fcc0eb-1f8d-42ba-83a7-57d7b81c06f6/0_0.png',
      mapImage: 'https://cdn.midjourney.com/c4fcc0eb-1f8d-42ba-83a7-57d7b81c06f6/0_0.png',

      prompt: 'Explore the key locations of Messina where the comedy and drama unfold',

      locations: [
        {
          id: 'location-leonato-house',
          name: "Leonato's Estate",
          x: 40,
          y: 35,
          content: `The grand house of Leonato, governor of Messina, serves as the main setting for the play. Here the soldiers lodge after the war, and here the romance and deceptions take place.

The household is lively and prosperous, full of music, dancing, and witty conversation. Leonato is a genial host, proud of his daughter Hero and fond of his sharp-witted niece Beatrice.

This is a world of social ceremony and careful reputation—which makes Don John's attack on Hero's honor all the more devastating.`,
          image: 'https://cdn.midjourney.com/c4fcc0eb-1f8d-42ba-83a7-57d7b81c06f6/0_0.png',
        },
        {
          id: 'location-garden',
          name: 'The Garden',
          x: 60,
          y: 50,
          content: `The garden of Leonato's estate becomes the site of the play's central deception—the "gulling" of Benedick and Beatrice.

In these arbors and walkways, Benedick will overhear his friends discussing how Beatrice secretly loves him. Later, in the same spot, Beatrice will hear Hero and her maid reveal that Benedick pines for her.

Both are elaborate tricks, staged by Don Pedro and the others to make the proud pair admit their feelings. It is playful deception—deception that leads to happiness rather than tragedy.`,
          image: 'https://cdn.midjourney.com/93f207c5-5663-4db8-aca6-544e6b486202/0_0.png',
        },
        {
          id: 'location-church',
          name: 'The Church',
          x: 25,
          y: 60,
          content: `The church is where the play's darkest moment occurs. Claudio is to marry Hero here, but Don John has poisoned his mind with lies about her infidelity.

At the altar, in front of everyone, Claudio publicly shames Hero, calling her a wanton and refusing to marry her. The accusation is false, but in Renaissance society, a woman's reputation once destroyed can rarely be recovered.

Hero faints, seemingly dead from the shock. It is the moment when comedy nearly tips into tragedy—saved only by the intervention of truth and the comic incompetence of the Watch.`,
          image: 'https://cdn.midjourney.com/81bbd57d-a60e-454e-94df-cb62f90f6c6e/0_0.png',
        },
        {
          id: 'location-watch-house',
          name: 'The Watch House',
          x: 70,
          y: 30,
          content: `Here the city's bumbling night watchmen gather, led by the incomparable Dogberry, a constable whose malapropisms and self-importance provide comic relief.

Though Dogberry mangles the English language ("You are thought here to be the most senseless and fit man for the constable of the watch"), he and his men accidentally uncover Don John's plot. They overhear Borachio bragging about the deception.

Their testimony, eventually delivered (after much comic delay), saves Hero's reputation and restores order. In Shakespeare's world, even fools can serve justice—sometimes better than the wise.`,
          image: 'https://cdn.midjourney.com/c4fcc0eb-1f8d-42ba-83a7-57d7b81c06f6/0_0.png',
        },
      ],

      requiredLocations: ['location-leonato-house', 'location-garden', 'location-church'],

      learningPoints: [
        {
          id: 'lp-much-ado-4-settings',
          content: 'Much Ado uses different locations to represent different types of action: the house for society, the garden for intimate deception, the church for public judgment.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 5: Decision - Should friends trick Beatrice and Benedick?
    {
      id: 'much-ado-scene-5-trick-decision',
      type: 'decision',
      backgroundImage: 'https://cdn.midjourney.com/c4fcc0eb-1f8d-42ba-83a7-57d7b81c06f6/0_0.png',
      image: 'https://cdn.midjourney.com/c4fcc0eb-1f8d-42ba-83a7-57d7b81c06f6/0_0.png',

      prompt: 'Don Pedro has a plan to trick Beatrice and Benedick into confessing their love. Should you support it?',
      context: `Don Pedro, having successfully arranged Claudio and Hero's marriage, turns his attention to another match. He sees what everyone sees: Beatrice and Benedick are perfect for each other, but too proud to admit it.

His plan is elaborate. First, they'll stage a conversation where Benedick "overhears" that Beatrice is dying of love for him. Then they'll do the same for Beatrice, making her think Benedick adores her.

It's manipulation, yes—but is it kind? Does tricking someone into happiness justify the deception?`,

      choices: [
        {
          id: 'choice-support',
          text: 'Support the plan—sometimes love needs a push',
          consequence: `You agree with Don Pedro. Beatrice and Benedick are wasting their lives in stubborn pride. A little friendly deception might save them both from loneliness.

Besides, the plan isn't malicious—it's designed to help them admit feelings they already have. It's not creating false love, just removing the barriers to true love.

And as you'll see, it works beautifully. Sometimes the ends do justify the means—especially when the means are harmless and the ends are happiness.`,
          learningPoints: [
            {
              id: 'lp-much-ado-5a-playful',
              content: 'The gulling of Beatrice and Benedick represents playful, benevolent deception—trickery that brings happiness rather than harm.',
              category: 'literary-context',
            },
          ],
        },
        {
          id: 'choice-oppose',
          text: 'Oppose it—deception is wrong even with good intentions',
          consequence: `You have moral qualms. Even well-intentioned manipulation is still manipulation. Shouldn't people be allowed to make their own choices about love, even if those choices seem foolish?

It's a fair objection. But in Shakespeare's comedy, the friends proceed anyway. And importantly, the trick only works because the feelings are already there, waiting to be acknowledged.

Still, your concern raises an important question: where is the line between helpful intervention and controlling manipulation? The play asks us to compare this playful trick with Don John's malicious deception—the contrast matters.`,
          learningPoints: [
            {
              id: 'lp-much-ado-5b-ethics',
              content: 'The play asks us to consider the ethics of benevolent deception—can trickery be justified if it leads to genuine happiness?',
              category: 'literary-context',
            },
          ],
        },
        {
          id: 'choice-unnecessary',
          text: 'It\'s unnecessary—they\'ll figure it out eventually',
          consequence: `You\'re an optimist. Given enough time, surely Beatrice and Benedick would realize their feelings naturally?

Perhaps. But Shakespeare suggests otherwise. Both characters have built such elaborate defenses—Benedick swearing he\'ll never marry, Beatrice claiming she\'d rather hear her dog bark than a man profess love—that they might never break free without external help.

Sometimes pride needs a mirror held up to it. And sometimes friends know us better than we know ourselves.`,
        },
      ],

      learningPoints: [],
    },

    // Scene 6: Narrative - Benedick's gulling scene
    {
      id: 'much-ado-scene-6-benedick-tricked',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/93f207c5-5663-4db8-aca6-544e6b486202/0_0.png',
      image: 'https://cdn.midjourney.com/bdf51051-d686-4766-bc1d-4727cde2dcaa/0_1.png',

      content: `The plan unfolds in Leonato's garden. Benedick strolls among the trees, convinced he is alone, musing on Claudio's sudden transformation into a lover: "I do much wonder that one man, seeing how much another man is a fool when he dedicates his behaviors to love, will become the prey to himself."

He hides in an arbor as Don Pedro, Claudio, and Leonato approach, speaking loudly enough to be "overheard."

"Is it possible?" says Don Pedro. "Beatrice, who seems to disdain all men—she loves Benedick?"

They lay it on thick. Beatrice is dying of love for Benedick, they say. She writes him passionate letters, then tears them up. She weeps in private. But she knows he mocks love and would only ridicule her, so she conceals her feelings.

Benedick, listening, is stunned. Could it be true? The proud, witty Beatrice—in love with him? His entire worldview shifts in a single scene. "When I said I would die a bachelor, I did not think I should live till I were married," he declares. "The world must be peopled!"`,

      inlineAnnotations: [
        {
          id: 'annotation-peopled',
          text: 'The world must be peopled',
          tooltip: {
            title: 'A Quick Change of Mind',
            content: 'Benedick\'s justification for marriage—"the world must be peopled"—is hilariously pragmatic. Minutes earlier he swore never to marry. Now he needs a reason, any reason, to change his stance without admitting he was wrong.',
            category: 'literary-context',
          },
        },
      ],

      learningPoints: [
        {
          id: 'lp-much-ado-6-transformation',
          content: 'Benedick\'s instant transformation from sworn bachelor to eager suitor is comic, but it reveals that his feelings for Beatrice were already there, just suppressed.',
          category: 'literary-context',
        },
        {
          id: 'lp-much-ado-6-self-justification',
          content: 'Shakespeare shows how we rationalize our changes of heart—Benedick immediately finds reasons why marriage was actually sensible all along.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 7: Narrative - Beatrice's gulling scene
    {
      id: 'much-ado-scene-7-beatrice-tricked',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/93f207c5-5663-4db8-aca6-544e6b486202/0_0.png',
      image: 'https://cdn.midjourney.com/3b15f419-0675-4e7c-a486-637936acf413/0_3.png',

      content: `The trick is repeated for Beatrice. Hero and her gentlewoman Ursula walk in the garden, speaking of Benedick's secret love for Beatrice, knowing she is hidden nearby and listening.

"But are you sure that Benedick loves Beatrice so entirely?" asks Ursula.

"So says the Prince and my new-trothed lord," Hero replies. The man is dying of love, they claim. He sighs, he pines, he cannot sleep. But they dare not tell Beatrice—she is too scornful, too mocking. She would turn his love into a joke.

"She cannot be so much without true judgment," Ursula argues. But Hero is firm: Beatrice must never know, lest she make sport of it.

Beatrice, hearing all this, is transformed. The woman who declared "I had rather hear my dog bark at a crow than a man swear he loves me" now vows: "Benedick, love on; I will requite thee."

In parallel gardens, through parallel deceptions, two proud people admit what they've been denying all along.`,

      learningPoints: [
        {
          id: 'lp-much-ado-7-parallel',
          content: 'The parallel gulling scenes create symmetry—both Beatrice and Benedick undergo the same transformation, reinforcing their equality as partners.',
          category: 'literary-context',
        },
        {
          id: 'lp-much-ado-7-pride',
          content: 'The trick works because both characters fear ridicule more than they fear being alone—pride is their barrier to love.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 8: Quote attribution - Match witty exchanges
    {
      id: 'much-ado-scene-8-quote-game',
      type: 'quote-attribution',
      backgroundImage: 'https://cdn.midjourney.com/75e8d053-5770-417f-a5f2-deca438ff24f/0_2.png',

      prompt: 'Match these witty exchanges to the characters who spoke them',

      quotes: [
        {
          id: 'quote-1',
          text: 'I wonder that you will still be talking, Signor Benedick. Nobody marks you.',
          speaker: 'Beatrice',
          context: 'Beatrice\'s opening salvo in their first encounter in the play.',
          explanation: 'Beatrice immediately establishes her wit by implying that Benedick talks too much and no one listens—a devastating social cut in a society that values eloquence.',
        },
        {
          id: 'quote-2',
          text: 'What, my dear Lady Disdain! Are you yet living?',
          speaker: 'Benedick',
          context: 'Benedick\'s reply to Beatrice, giving her a mocking nickname.',
          explanation: '"Lady Disdain" captures Beatrice\'s scornful attitude toward men and marriage—Benedick turns her personality into a title.',
        },
        {
          id: 'quote-3',
          text: 'I had rather hear my dog bark at a crow than a man swear he loves me.',
          speaker: 'Beatrice',
          context: 'Beatrice declares her opposition to romantic love and marriage.',
          explanation: 'This colorful comparison shows Beatrice\'s wit—she doesn\'t just reject romance, she makes it absurd through imagery.',
        },
        {
          id: 'quote-4',
          text: 'Shall I never see a bachelor of threescore again?',
          speaker: 'Benedick',
          context: 'Benedick laments that Claudio is getting married.',
          explanation: 'Benedick exaggerates comically—he wants to stay a bachelor until he\'s 60, seeing marriage as the end of freedom and masculinity.',
        },
        {
          id: 'quote-5',
          text: 'There is a kind of merry war betwixt Signor Benedick and me.',
          speaker: 'Beatrice',
          context: 'Beatrice describes her relationship with Benedick to others.',
          explanation: 'The phrase "merry war" perfectly captures their dynamic—conflict that\'s also enjoyable, combat that\'s also flirtation.',
        },
        {
          id: 'quote-6',
          text: 'The world must be peopled!',
          speaker: 'Benedick',
          context: 'Benedick suddenly justifies marriage after being tricked.',
          explanation: 'Having sworn never to marry, Benedick now needs a rational excuse—he frames marriage as a civic duty, which is both practical and hilarious.',
        },
      ],

      learningPoints: [
        {
          id: 'lp-much-ado-8-wit',
          content: 'Wit in Shakespeare consists of quick wordplay, clever metaphors, and the ability to turn an opponent\'s words against them.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 9: Narrative - Don John's plot to slander Hero
    {
      id: 'much-ado-scene-9-don-john-plot',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/c4fcc0eb-1f8d-42ba-83a7-57d7b81c06f6/0_0.png',
      image: 'https://cdn.midjourney.com/07e5a123-06ac-4220-9b80-90f78a54f10e/0_2.png',

      content: `While Beatrice and Benedick move toward love, a darker plot unfolds. Don John, Don Pedro's illegitimate brother, is bitter and malcontent. He has always been the outsider, always the bastard brother, always resentful.

He seeks to cause mischief, and he finds his opportunity in Claudio's upcoming marriage to Hero. Why does he target them? Shakespeare doesn't give him complex motivation—Don John is melancholy and villainous by nature, a troublemaker who delights in others' misery.

His henchman Borachio devises the plan. Hero's maid Margaret (innocent of the plot) will be dressed in Hero's clothes and stand at Hero's window at night. Borachio will woo her there, while Claudio and Don Pedro watch from below.

They will think they see Hero being unfaithful on the eve of her wedding—proof of her unchastity. In Renaissance society, this would destroy her utterly. Honor and reputation, especially a woman's reputation, are everything.

Don John smiles. "Only to despite them I will endeavor anything."`,

      inlineAnnotations: [
        {
          id: 'annotation-honor-culture',
          text: 'Honor and reputation',
          tooltip: {
            title: 'Honor Culture in Renaissance Drama',
            content: 'In Shakespeare\'s world, honor—especially female chastity—is more valuable than life itself. A woman accused of sexual impropriety, even falsely, is ruined. This honor culture drives the tragedy in Much Ado and will appear even more darkly in Othello (Part II).',
            category: 'cultural-context',
          },
        },
      ],

      learningPoints: [
        {
          id: 'lp-much-ado-9-don-john',
          content: 'Don John represents motiveless malignity—he does evil for its own sake, without complex reasons. He\'s a sketch for Shakespeare\'s later, more developed villains.',
          category: 'literary-context',
        },
        {
          id: 'lp-much-ado-9-contrast',
          content: 'Don John\'s malicious deception contrasts sharply with Don Pedro\'s playful tricks—same method, opposite intent and consequence.',
          category: 'literary-context',
        },
        {
          id: 'lp-much-ado-9-foreshadowing',
          content: 'Don John\'s petty villainy foreshadows Iago\'s calculated destruction in Othello (Part II), where false accusation becomes deadly.',
          category: 'reference',
        },
      ],
    },

    // Scene 10: Primary source - The accusation scene from Hero's perspective
    {
      id: 'much-ado-scene-10-accusation',
      type: 'primary-source',
      backgroundImage: 'https://cdn.midjourney.com/81bbd57d-a60e-454e-94df-cb62f90f6c6e/0_0.png',

      prompt: 'Read this excerpt from the church scene and analyze the public shaming of Hero',

      source: {
        title: 'From Much Ado About Nothing, Act IV, Scene 1',
        author: 'William Shakespeare',
        date: '1598-1599',
        type: 'text',
        content: `CLAUDIO: There, Leonato, take her back again.
Give not this rotten orange to your friend.
She's but the sign and semblance of her honor.
Behold how like a maid she blushes here!
O, what authority and show of truth
Can cunning sin cover itself withal!
Comes not that blood as modest evidence
To witness simple virtue? Would you not swear,
All you that see her, that she were a maid
By these exterior shows? But she is none.
She knows the heat of a luxurious bed.
Her blush is guiltiness, not modesty.

LEONATO: What do you mean, my lord?

CLAUDIO: Not to be married,
Not to knit my soul to an approvèd wanton.

[Hero faints]

BEATRICE: Why, how now, cousin, wherefore sink you down?

DON JOHN: Come, let us go. These things, come thus to light,
Smother her spirits up.`,
        citation: 'William Shakespeare, Much Ado About Nothing (1598-99), Act IV, Scene 1',
      },

      questions: [
        {
          id: 'q1',
          question: 'How does Claudio use Hero\'s blush as "evidence" against her?',
          type: 'multiple-choice',
          options: [
            'He argues her blush proves she is lying about her virtue',
            'He says her blush shows she is innocent and modest',
            'He ignores her blush entirely',
            'He claims her blush is a sign of illness',
          ],
          correctAnswer: 'He argues her blush proves she is lying about her virtue',
          explanation: 'Claudio twists Hero\'s modest blush—traditionally a sign of innocence—into proof of guilt. This demonstrates how accusers can reinterpret any evidence to fit their narrative once suspicion is planted.',
        },
        {
          id: 'q2',
          question: 'What does Claudio\'s public accusation reveal about Renaissance honor culture?',
          type: 'multiple-choice',
          options: [
            'Women\'s reputations are fragile and can be destroyed by mere accusation',
            'Public shaming was considered inappropriate in Renaissance society',
            'Men were held to the same standards of chastity as women',
            'Evidence was required before making accusations in church',
          ],
          correctAnswer: 'Women\'s reputations are fragile and can be destroyed by mere accusation',
          explanation: 'Claudio doesn\'t need proof—the mere accusation, made publicly, is enough to ruin Hero. Renaissance honor culture placed impossible standards on women\'s chastity, and reputation once lost could never be fully recovered.',
        },
        {
          id: 'q3',
          question: 'How does this scene relate to Shakespeare\'s later tragedy Othello?',
          type: 'multiple-choice',
          options: [
            'Both involve men publicly shaming innocent women based on false evidence',
            'Both end with the women being forgiven immediately',
            'Both women are actually guilty of the accusations',
            'Both men realize their mistake before making the accusation',
          ],
          correctAnswer: 'Both involve men publicly shaming innocent women based on false evidence',
          explanation: 'Hero\'s false accusation foreshadows Desdemona\'s in Othello (Part II), but with a crucial difference: Much Ado is a comedy where truth emerges in time to save Hero. In Othello, the same dynamic becomes tragedy when truth arrives too late.',
        },
      ],

      learningPoints: [
        {
          id: 'lp-much-ado-10-public-shame',
          content: 'The church scene shows how public accusation can destroy reputation instantly—Claudio doesn\'t just refuse to marry Hero, he must publicly shame her.',
          category: 'cultural-context',
        },
      ],
    },

    // Scene 11: Dialogue - Beatrice demands "Kill Claudio!"
    {
      id: 'much-ado-scene-11-kill-claudio',
      type: 'dialogue',
      backgroundImage: 'https://cdn.midjourney.com/81bbd57d-a60e-454e-94df-cb62f90f6c6e/0_0.png',

      character: {
        id: 'beatrice-serious',
        name: 'Beatrice',
        portrait: 'https://cdn.midjourney.com/3b15f419-0675-4e7c-a486-637936acf413/0_3.png',
        description: 'Beatrice, furious at the injustice done to Hero',
      },

      dialogueTree: {
        id: 'node-1',
        speaker: 'beatrice-serious',
        text: 'O that I were a man! I would eat his heart in the marketplace!',

        responses: [
          {
            id: 'response-why-man',
            text: 'Why do you wish to be a man?',
            nextNodeId: 'node-2',
          },
          {
            id: 'response-what-happened',
            text: 'What would you do if you could?',
            nextNodeId: 'node-3',
          },
        ],

        allNodes: [
          {
            id: 'node-2',
            speaker: 'beatrice-serious',
            text: 'Because men can act! They can challenge, they can fight, they can defend honor. I can only weep and rage in this chamber, powerless to help my wronged cousin.',
            responses: [
              {
                id: 'response-benedick',
                text: 'Could Benedick help you?',
                nextNodeId: 'node-4',
              },
            ],
          },
          {
            id: 'node-3',
            speaker: 'beatrice-serious',
            text: 'I would challenge Claudio! I would demand satisfaction for this slander against Hero. But I am a woman, and women cannot fight duels. I need a man to be my champion.',
            responses: [
              {
                id: 'response-benedick-2',
                text: 'What about Benedick?',
                nextNodeId: 'node-4',
              },
            ],
          },
          {
            id: 'node-4',
            speaker: 'beatrice-serious',
            text: 'Benedick has just confessed his love to me. If he truly loves me, he will do what I ask. [She turns to face you directly] Kill Claudio.',
            responses: [
              {
                id: 'response-shock',
                text: 'Can you ask that of someone who loves you?',
                nextNodeId: 'node-5',
              },
              {
                id: 'response-friendship',
                text: 'But Claudio is Benedick\'s friend!',
                nextNodeId: 'node-6',
              },
            ],
          },
          {
            id: 'node-5',
            speaker: 'beatrice-serious',
            text: 'If he will not do this, his love is worth nothing. Hero has been destroyed by lies. Someone must defend her honor, and if the men who claim to love us will not act, what good are their pretty words?',
            isEnd: true,
          },
          {
            id: 'node-6',
            speaker: 'beatrice-serious',
            text: 'And Hero is my cousin, my closest companion! Claudio has slandered her with lies. Friendship does not excuse injustice. Benedick must choose: Claudio\'s friendship or my love.',
            isEnd: true,
          },
        ],
      },

      learningPoints: [
        {
          id: 'lp-much-ado-11-gender',
          content: 'Beatrice\'s cry "O that I were a man!" reveals the powerlessness of Renaissance women—she cannot defend Hero\'s honor herself.',
          category: 'cultural-context',
        },
        {
          id: 'lp-much-ado-11-test',
          content: 'Beatrice\'s demand that Benedick "kill Claudio" tests the sincerity of his love—words are easy, but will he act?',
          category: 'literary-context',
        },
      ],
    },

    // Scene 12: Narrative - Truth revealed - Dogberry's watch saves the day
    {
      id: 'much-ado-scene-12-truth-revealed',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/c4fcc0eb-1f8d-42ba-83a7-57d7b81c06f6/0_0.png',
      image: 'https://cdn.midjourney.com/c4fcc0eb-1f8d-42ba-83a7-57d7b81c06f6/0_0.png',

      content: `The crisis is resolved not by the clever nobles but by Dogberry and the bumbling Watch. These comic constables, who mangle the English language and take themselves far too seriously, have accidentally overheard Borachio bragging about Don John's plot in a tavern.

"Thou wilt be condemned into everlasting redemption for this," Dogberry declares, meaning damnation. He is a master of malapropisms—using the wrong word while meaning the right one. He calls the prisoners "auspicious" (suspicious), describes himself as "senseless" (sensible), and declares things to be "tolerable" when he means intolerable.

Yet despite his linguistic chaos, Dogberry's testimony reveals the truth. Don John has fled (coward that he is), but Borachio confesses. Hero's innocence is proven. The nobles, for all their wit and education, couldn't solve the problem—it took comic constables who didn't even know they were doing anything important.

Shakespeare's point is clear: wisdom can come from unexpected places, and sometimes society's "low" characters prove more reliable than the high.`,

      inlineAnnotations: [
        {
          id: 'annotation-malapropism',
          text: 'malapropisms',
          tooltip: {
            title: 'What Is a Malapropism?',
            content: 'A malapropism is using the wrong word that sounds similar to the intended word. Dogberry\'s "everlasting redemption" instead of "damnation" is a perfect example. Shakespeare uses this device for both comedy and to show that even the "ignorant" can stumble into truth.',
            category: 'literary-context',
          },
        },
      ],

      learningPoints: [
        {
          id: 'lp-much-ado-13-comic-justice',
          content: 'Dogberry and the Watch provide both comic relief and the solution to the plot—Shakespeare often uses "low" characters to resolve problems the nobles created.',
          category: 'literary-context',
        },
        {
          id: 'lp-much-ado-13-language',
          content: 'Dogberry\'s malapropisms are comic, but they also demonstrate that effective action matters more than eloquent speech.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 13: Narrative - Double wedding and conclusion
    {
      id: 'much-ado-scene-13-wedding',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/81bbd57d-a60e-454e-94df-cb62f90f6c6e/0_0.png',
      image: 'https://cdn.midjourney.com/c4fcc0eb-1f8d-42ba-83a7-57d7b81c06f6/0_0.png',

      content: `The play ends as comedies should: with marriage. Not one wedding, but two.

Hero, revealed to be alive (she had only fainted and been hidden away), forgives Claudio. He has mourned her, accepted his punishment, and agreed to marry Leonato's "niece" sight unseen as penance. When Hero unmasks, he is stunned and grateful. "Another Hero!" he cries. It is the reunion of a conventional couple, scarred but restored.

But the more satisfying wedding is Beatrice and Benedick's. These two proud individuals, tricked into admitting love, now stand before each other awkwardly. Each claims they're only marrying out of pity for the other, not true love. Neither will surrender their pride entirely.

But when their friends produce the love poems each secretly wrote to the other (yet more evidence!), they have no choice but to laugh and admit the truth. "Peace!" Benedick finally declares. "I will stop your mouth." And he kisses her.

Don John has been captured and will face justice—Shakespeare dismisses him in a single line. The villain who tried to destroy love through deception is defeated, and happiness is restored through truth and wit.

"Man is a giddy thing," Benedick observes, "and this is my conclusion."`,

      learningPoints: [
        {
          id: 'lp-much-ado-14-comedy-resolution',
          content: 'Shakespearean comedy typically ends with marriage and reconciliation—social order is restored, and conflicts are resolved.',
          category: 'literary-context',
        },
        {
          id: 'lp-much-ado-14-earned-love',
          content: 'Beatrice and Benedick\'s marriage is more satisfying than Claudio and Hero\'s because it\'s based on intellectual equality and earned through mutual respect.',
          category: 'literary-context',
        },
        {
          id: 'lp-much-ado-14-themes',
          content: 'Much Ado explores how love requires both wit and honesty, how deception can harm or help depending on intent, and how pride is love\'s greatest obstacle.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 14: Cause-effect - Match deceptions to consequences
    {
      id: 'much-ado-scene-14-deceptions',
      type: 'cause-effect',
      backgroundImage: 'https://cdn.midjourney.com/67cc2936-ec28-45b4-82f8-996a1ed09618/0_0.png',

      prompt: 'Match each deception in the play with its consequence',

      pairs: [
        {
          id: 'pair-1',
          cause: 'Don Pedro tricks Benedick into thinking Beatrice loves him',
          effect: 'Benedick admits his love and abandons his bachelor stance',
          explanation: 'This playful deception removes Benedick\'s pride, allowing him to confess feelings he already had but was too stubborn to acknowledge.',
        },
        {
          id: 'pair-2',
          cause: 'Hero and Ursula trick Beatrice into thinking Benedick loves her',
          effect: 'Beatrice vows to requite Benedick\'s love',
          explanation: 'The parallel trick works on Beatrice for the same reason—the deception doesn\'t create false feelings, it just removes the barrier of pride.',
        },
        {
          id: 'pair-3',
          cause: 'Don John stages a false scene of Hero\'s infidelity',
          effect: 'Claudio publicly shames Hero at their wedding',
          explanation: 'Don John\'s malicious deception nearly destroys Hero. Unlike the playful tricks, this deception is designed to harm and succeeds in causing real damage.',
        },
        {
          id: 'pair-4',
          cause: 'The Watch overhears Borachio confessing Don John\'s plot',
          effect: 'Hero\'s innocence is proven and her honor restored',
          explanation: 'Comic incompetence saves the day—Dogberry and the Watch accidentally uncover the truth, showing how even fools can serve justice.',
        },
        {
          id: 'pair-5',
          cause: 'Leonato stages Hero\'s "death" to make Claudio regret his accusation',
          effect: 'Claudio mourns and agrees to marry Leonato\'s "niece" as penance',
          explanation: 'This final deception gives Claudio a chance to prove his remorse. When the "niece" is revealed to be Hero alive, the couple can reunite with Claudio properly humbled.',
        },
      ],

      learningPoints: [
        {
          id: 'lp-much-ado-14-deception-types',
          content: 'Much Ado distinguishes between playful deception (gulling Beatrice and Benedick) and malicious deception (slandering Hero)—intent and consequence matter.',
          category: 'literary-context',
        },
      ],

      events: {
        onExit: [{
          type: 'quiz',
          componentId: 'quiz-chapter-4',
          condition: { type: 'if-not-completed' },
        }],
      },
    },
  ],

  endQuiz: chapter4Quiz,
};

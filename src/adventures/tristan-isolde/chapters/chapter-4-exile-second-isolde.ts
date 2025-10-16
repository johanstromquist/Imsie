import type { Chapter } from '../../../types';
import { chapter4Quiz } from '../quizzes/chapter-4-quiz';

/**
 * Chapter 4: Exile and the Second Isolde
 *
 * After King Mark's mercy allows them to return from the forest, the potion's
 * power begins to wane. Isolde returns to Mark while Tristan is exiled from
 * Cornwall. In Brittany, Tristan meets another woman named Isolde and faces
 * impossible choices between duty and desire. His attempts to see Isolde the
 * Fair again lead to a fateful wound that will set up the tragic conclusion.
 */

export const chapter4: Chapter = {
  id: 'chapter-4-tristan-isolde',
  title: 'Chapter 4: Exile and the Second Isolde',
  description:
    "The potion's power fades, forcing Tristan and Isolde to face painful choices. " +
    'Tristan is exiled to Brittany where he meets another Isolde, while his heart remains ' +
    'bound to his true love across the sea.',

  learningObjectives: [
    'Understand the narrative function of the "double" or parallel character (two Isoldes)',
    "Analyze the degradation of the potion\'s power and what it represents",
    'Recognize the theme of impossible choices and divided loyalties',
    'Explore the contrast between passionate and dutiful love',
  ],

  scenes: [
    // Scene 1: Hermit Ogrin's Counsel
    {
      id: 'scene-ch4-1-hermit-counsel',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/4895d6ea-e07a-4b40-b3a5-eb1c14b2ee5d/0_0.png',
      image: 'https://cdn.midjourney.com/fecf8d1e-83f0-4b96-877a-0bb2d69388af/0_0.png',

      content: `After three years in the Forest of Morois, the lovers seek counsel from Ogrin, a holy hermit who lives in a simple cell deep in the woods. The old man receives them with compassion but speaks hard truths.

      "You live in sin," Ogrin says gently. "Isolde is another man's wife--anointed queen, consecrated by holy vows. Tristan, you betray your lord who raised you and loved you as a son. This cannot continue."

      The lovers try to explain about the potion, how it bound them against their will. But Ogrin shakes his head. "Three years have passed. The strongest potions lose their power after three years. What holds you together now is not magic--it is your own choice."

      His words strike like hammers. The potion is fading. Their love is no longer fate's doing but their own decision to defy honor, duty, and divine law.

      Ogrin counsels them to separate: Isolde must return to King Mark and seek his forgiveness. Tristan must leave Cornwall entirely, going into exile to spare them all further suffering.

      The lovers listen in anguished silence. They know the hermit speaks truth, but the thought of parting is unbearable.`,

      learningPoints: [
        {
          id: 'lp-ch4-1-potion-fade',
          content: 'The potion lasting three years represents a narrative transition--their love must now become a matter of choice rather than magical compulsion. This deepens the moral complexity.',
          category: 'literary-technique',
        },
        {
          id: 'lp-ch4-1-hermit-role',
          content: "The hermit represents medieval religious perspective: compassionate but firm about sin and duty. His counsel reflects the Church's view of marriage as sacred and indissoluble.",
          category: 'cultural-context',
        },
        {
          id: 'lp-ch4-1-choice',
          content: 'Removing the magical excuse forces the lovers to take responsibility for their actions. This makes them more morally complex characters.',
          category: 'character-analysis',
        },
      ],
    },

    // Scene 2: Decision - Return or Remain?
    {
      id: 'scene-ch4-2-decision-return',
      type: 'decision',
      backgroundImage: 'https://cdn.midjourney.com/4895d6ea-e07a-4b40-b3a5-eb1c14b2ee5d/0_0.png',

      prompt: 'What should the lovers do now that the potion has faded?',
      context: `The hermit's words hang heavy in the air. Three years of exile in the forest have been hard--beautiful in their freedom, but marked by hunger, danger, and the knowledge that they are hunted.

      Isolde speaks first: "I am weary, Tristan. I love you more than life, but I cannot bear to see you suffer this way--living as outlaws, always in fear. Perhaps the hermit is right. Perhaps we must choose duty over desire."

      Tristan feels his heart breaking, but he also knows she speaks truth. He cannot give Isolde the life she deserves. She should be a queen in a castle, not a fugitive in the forest.

      Yet the thought of letting her return to Mark's bed while he wanders in exile is agony beyond words.`,

      choices: [
        {
          id: 'choice-accept-separation',
          text: "Accept the hermit's counsel--Isolde returns to Mark, Tristan goes into exile",
          consequence: `"The hermit is right," Tristan says, though his voice breaks. "We have been selfish, thinking only of our love while the kingdom suffers. You are the rightful queen, Isolde. You must return to your throne and your duty."

          Isolde weeps, but nods. "And you must live, Tristan. Not as an outlaw, but as the noble knight you were meant to be. Go to another land where no one knows your shame. Find honor again, if you can."

          They embrace one final time in the hermit's cell, knowing this parting must happen even as it tears them apart. Love alone is not enough--duty and honor demand their sacrifice.

          Ogrin sends word to King Mark, proposing Isolde's return and Tristan's voluntary exile. To their surprise, Mark agrees with unexpected mercy.`,

          learningPoints: [
            {
              id: 'lp-ch4-2a-sacrifice',
              content: 'The lovers choose duty over desire, showing growth and moral complexity. This selflessness makes them more sympathetic despite their transgression.',
              category: 'character-analysis',
            },
          ],
        },
        {
          id: 'choice-stay-together',
          text: "Reject the hermit's counsel--stay together in the forest",
          consequence: `"No," Tristan says fiercely. "Three years or thirty, potion or not--my love for you is real, Isolde. I will not give you up to please the hermit or anyone else."

          Isolde looks at him with both joy and sorrow. "Then we stay together, come what may. Let them call us sinners. We have found something rare and precious--why should we surrender it?"

          But even as they speak these brave words, doubt gnaws at them. Can they truly live this way forever? The forest that seemed a paradise now feels like a prison.

          Within a week, hunger and desperation drive them to reconsider. They return to Ogrin, this time ready to hear his counsel. The hermit receives them with patience: "You needed to choose this for yourselves, not have it forced upon you. Now, let us speak of how to part with dignity and honor."`,

          learningPoints: [
            {
              id: 'lp-ch4-2b-inevitability',
              content: 'Even when they try to defy fate, circumstances force them back to the inevitable path. This reinforces the tragic structure--some outcomes cannot be avoided.',
              category: 'plot-structure',
            },
          ],
        },
      ],

      learningPoints: [],
    },

    // Scene 3: Dialogue - Isolde Returns to Mark
    {
      id: 'scene-ch4-3-isolde-returns',
      type: 'dialogue',
      backgroundImage: 'https://cdn.midjourney.com/e6ca64c1-039c-4051-bcf3-7c23aa666667/0_0.png',
      image: 'https://cdn.midjourney.com/cbd2abdd-ca45-4750-af2e-b72fc73b4aa4/0_0.png',

      character: {
        id: 'king-mark-forgiving',
        name: 'King Mark',
        portrait: 'https://cdn.midjourney.com/ea2ee67c-ecf5-4705-b641-da5d65507ec9/0_0.png',
        description: 'The king who accepts his queen back despite betrayal, torn between love and wounded pride',
      },

      dialogueTree: {
        id: 'node-1',
        speaker: 'king-mark-forgiving',
        text: 'Isolde. You return to me at last. The hermit says the potion has faded--that you come of your own will.',
        responses: [
          {
            id: 'response-contrition',
            text: 'Yes, my lord. I come to beg your forgiveness and resume my duties as your queen',
            nextNodeId: 'node-2',
            learningPoints: [
              {
                id: 'lp-ch4-3-dialogue-humility',
                content: 'Isolde shows humility in seeking forgiveness, acknowledging the wrong done to Mark.',
                category: 'character-analysis',
              },
            ],
          },
          {
            id: 'response-honest',
            text: 'I come because duty demands it, though my heart will always belong to another',
            nextNodeId: 'node-2',
            learningPoints: [
              {
                id: 'lp-ch4-3-dialogue-truth',
                content: 'Brutal honesty may wound but prevents false hope. Mark prefers truth to comfortable lies.',
                category: 'character-analysis',
              },
            ],
          },
        ],
        allNodes: [
          {
            id: 'node-1',
            speaker: 'king-mark-forgiving',
            text: 'Isolde. You return to me at last. The hermit says the potion has faded--that you come of your own will.',
            responses: [
              {
                id: 'response-contrition',
                text: 'Yes, my lord. I come to beg your forgiveness and resume my duties as your queen',
                nextNodeId: 'node-2',
              },
              {
                id: 'response-honest',
                text: 'I come because duty demands it, though my heart will always belong to another',
                nextNodeId: 'node-2',
              },
            ],
          },
          {
            id: 'node-2',
            speaker: 'king-mark-forgiving',
            text: 'I take you back not because I am weak, but because I loved you before the potion and cannot stop now. But know this: Tristan is banished forever. If he returns to Cornwall, he will be treated as a traitor.',
            responses: [
              {
                id: 'response-accept-terms',
                text: 'I understand and accept these terms',
                nextNodeId: 'node-3',
              },
              {
                id: 'response-confirm',
                text: 'That is just, my lord. He has already left these shores',
                nextNodeId: 'node-3',
              },
            ],
          },
          {
            id: 'node-3',
            speaker: 'king-mark-forgiving',
            text: 'Then let us speak of this no more. You are my queen again. I ask only that you try--in time--to be my wife in truth.',
            responses: [
              {
                id: 'response-try',
                text: 'I will try, my lord. You deserve that much and more',
                nextNodeId: null,
              },
              {
                id: 'response-dignity',
                text: 'I promise to honor you and rule at your side with dignity',
                nextNodeId: null,
              },
            ],
          },
        ],
      },

      learningPoints: [
        {
          id: 'lp-ch4-3-mark-complexity',
          content: 'King Mark shows remarkable emotional complexity--betrayed but forgiving, hurt but dignified. He is not a villain but a tragic figure himself, caught in circumstances beyond his control.',
          category: 'character-analysis',
        },
        {
          id: 'lp-ch4-3-medieval-marriage',
          content: 'Medieval queens had political and ceremonial duties separate from romantic love. Isolde can return to her role even without loving Mark, though it pains them both.',
          category: 'historical-context',
        },
      ],
    },

    // Scene 4: Tristan's Exile - Fighting in Foreign Lands
    {
      id: 'scene-ch4-4-exile-wandering',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/c74e4a56-154a-4948-8d5e-fc122b14893f/0_0.png',

      content: `Tristan wanders through foreign lands, hiring himself out as a mercenary knight to any lord who will have him. He seeks glory in battle, hoping to lose himself in the clash of swords and forget the woman he left behind.

      But battle brings no peace. He fights with reckless courage that borders on desperation, earning a reputation as a brilliant but haunted warrior. Other knights whisper that he fights like a man who wants to die but cannot quite manage it.

      At night, Tristan lies awake in army camps, staring at the stars and wondering what Isolde is doing at this moment. Is she sleeping in Mark's arms? Has she learned to love her husband as duty demands?

      The thoughts torture him more than any wound.

      Months turn into a year. Tristan drifts south through France, taking service with various lords. His name is forgotten--he calls himself "Tantris" again, the same false name he used when Isolde first healed him. It is as if he is trying to return to that earlier, simpler time before the potion, before the love that ruined them both.

      Finally, he arrives in Brittany, in the service of Duke Hoel. Here, his wanderings will end--though not in the way he expects.`,

      learningPoints: [
        {
          id: 'lp-ch4-4-exile-psychology',
          content: "Tristan's reckless behavior in battle represents his internal death wish. Unable to live with Isolde or without her, he seeks oblivion through violence.",
          category: 'character-analysis',
        },
        {
          id: 'lp-ch4-4-tantris-return',
          content: 'Using the name "Tantris" again shows Tristan trying to erase his identity, to return to a time before the tragedy. Names and identity are recurring motifs in the legend.',
          category: 'literary-technique',
        },
        {
          id: 'lp-ch4-4-wandering-knight',
          content: "The wandering knight-errant was a common medieval figure--knights without lands or lords who sold their services. Tristan's exile would have been historically plausible.",
          category: 'historical-context',
        },
      ],
    },

    // Scene 5: Quote Attribution - Tristan's Laments
    {
      id: 'scene-ch4-5-quote-attribution',
      type: 'quote-attribution',
      backgroundImage: 'https://cdn.midjourney.com/c74e4a56-154a-4948-8d5e-fc122b14893f/0_0.png',

      prompt: 'Match these laments and statements to who spoke them:',

      quotes: [
        {
          id: 'quote-1',
          text: 'Three years have passed. The strongest potions lose their power after three years. What holds you together now is your own choice.',
          speaker: 'Hermit Ogrin',
          context: 'Said by the hermit when counseling the lovers after three years in the Forest of Morois',
          explanation: 'This pivotal statement transforms the lovers\' relationship from one of magical compulsion to moral choice, deepening the ethical complexity of their continued affair.',
        },
        {
          id: 'quote-2',
          text: 'I love you more than life, but I cannot bear to see you suffer this way--living as outlaws, always in fear.',
          speaker: 'Isolde',
          context: 'Spoken to Tristan when discussing whether to follow the hermit\'s counsel to separate',
          explanation: 'Isolde\'s words reveal the harsh reality of their forest exile and her growing awareness that love alone cannot sustain them against duty and hardship.',
        },
        {
          id: 'quote-3',
          text: 'I take you back not because I am weak, but because I loved you before the potion and cannot stop now.',
          speaker: 'King Mark',
          context: 'Declared when Isolde returns to court after the three-year exile in the forest',
          explanation: 'Mark\'s statement shows his emotional depth and vulnerability, revealing that his love for Isolde predates and transcends the potion\'s influence.',
        },
        {
          id: 'quote-4',
          text: 'You are the rightful queen. You must return to your throne and your duty.',
          speaker: 'Tristan',
          context: 'Said to Isolde during their painful discussion about accepting separation',
          explanation: 'Tristan\'s selfless words prioritize Isolde\'s honor and duty over his own desires, demonstrating his nobility even in heartbreak.',
        },
      ],

      learningPoints: [
        {
          id: 'lp-ch4-5-voice',
          content: 'Each character has a distinctive voice: Ogrin speaks with religious authority, Mark with wounded dignity, Tristan with self-sacrifice, Isolde with emotional honesty.',
          category: 'character-analysis',
        },
      ],
    },

    // Scene 6: Narrative - Meeting Kaherdin and His Sister
    {
      id: 'scene-ch4-6-brittany-arrival',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/a1063d97-cde8-4a27-b0fc-ec0ebaa305da/0_0.png',
      image: 'https://cdn.midjourney.com/b8aaf957-e0f1-4363-b3e6-3f91bff4c183/0_0.png',

      content: `In Duke Hoel"s court in Brittany, Tristan finds an unexpected friendship. Kaherdin, the duke's son, is close to Tristan's age--a skilled warrior with an open, honest nature. He befriends the mysterious knight who calls himself Tantris, sensing the sorrow beneath the stern exterior.

      "You fight like a man with nothing to lose," Kaherdin says one day after a tournament. "I have seen that look before--in men whose hearts are broken. Was it a woman?"

      Tristan does not answer, but his silence speaks volumes.

      Kaherdin takes him to meet his sister, Isolde of the White Hands. She is beautiful in a gentle, innocent way--dark-haired where Isolde the Fair is golden, pale where the other is vibrant. When Tristan hears her name, he staggers as if struck.

      "Your sister is called... Isolde?" he asks.

      "Yes," Kaherdin says, puzzled. "Is something wrong?"

      Tristan forces a smile. "No. It is just... I knew someone by that name once. Long ago."

      But it is not long ago--it has been only a year since he left Cornwall. And the name, the same cursed name, seems like fate laughing at him.`,

      learningPoints: [
        {
          id: 'lp-ch4-6-double-motif',
          content: 'The "double" or doppelgänger is a powerful literary device. The second Isolde represents an alternative path Tristan might take--duty instead of passion, peace instead of suffering.',
          category: 'literary-technique',
        },
        {
          id: 'lp-ch4-6-name-irony',
          content: "That both women share the same name creates dramatic irony and emphasizes fate's role. Tristan cannot escape his destiny even by fleeing to another country.",
          category: 'thematic-analysis',
        },
        {
          id: 'lp-ch4-6-contrast',
          content: 'Isolde of the White Hands is described in contrast to Isolde the Fair--gentler, paler, more innocent. These contrasts will become thematically important.',
          category: 'character-analysis',
        },
      ],
    },

    // Scene 7: Dialogue - Getting to Know Isolde of the White Hands
    {
      id: 'scene-ch4-7-meeting-second-isolde',
      type: 'dialogue',
      backgroundImage: 'https://cdn.midjourney.com/db87cc84-aa5e-4dd2-ab5e-29c3cf8274ed/0_0.png',

      character: {
        id: 'isolde-white-hands',
        name: 'Isolde of the White Hands',
        portrait: 'https://cdn.midjourney.com/39821936-23e0-4998-9330-ee5636797b84/0_0.png',
        description: 'The innocent and gentle daughter of Duke Hoel, drawn to the mysterious knight',
      },

      dialogueTree: {
        id: 'node-1',
        speaker: 'isolde-white-hands',
        text: 'That melody is so sad. Does it have words, or is it just the music of sorrow itself?',
        responses: [
          {
            id: 'response-celtic-lament',
            text: 'It is an old Celtic lament about love lost across the sea',
            nextNodeId: 'node-2',
            learningPoints: [
              {
                id: 'lp-ch4-7-dialogue-music',
                content: 'Music becomes a way to express grief that words cannot capture, connecting past and present.',
                category: 'literary-technique',
              },
            ],
          },
          {
            id: 'response-cannot-forget',
            text: 'Just something I learned long ago, from someone I can never forget',
            nextNodeId: 'node-2',
            learningPoints: [
              {
                id: 'lp-ch4-7-dialogue-haunted',
                content: "Tristan's inability to forget reveals how deeply his past holds him captive.",
                category: 'character-analysis',
              },
            ],
          },
        ],
        allNodes: [
          {
            id: 'node-1',
            speaker: 'isolde-white-hands',
            text: 'That melody is so sad. Does it have words, or is it just the music of sorrow itself?',
            responses: [
              {
                id: 'response-celtic-lament',
                text: 'It is an old Celtic lament about love lost across the sea',
                nextNodeId: 'node-2',
              },
              {
                id: 'response-cannot-forget',
                text: 'Just something I learned long ago, from someone I can never forget',
                nextNodeId: 'node-2',
              },
            ],
          },
          {
            id: 'node-2',
            speaker: 'isolde-white-hands',
            text: 'My brother says you are running from a broken heart. I am sorry for your pain, Tantris. Whoever she was, she must have been extraordinary.',
            responses: [
              {
                id: 'response-she-is',
                text: 'She was. She is. But she can never be mine',
                nextNodeId: 'node-3',
              },
              {
                id: 'response-past',
                text: 'The past is past. I must learn to live in the present',
                nextNodeId: 'node-3',
              },
            ],
          },
          {
            id: 'node-3',
            speaker: 'isolde-white-hands',
            text: 'Perhaps... in time... you might find peace here in Brittany. My father likes you. My brother calls you the best friend he has ever had. And I... I would miss you if you left.',
            responses: [
              {
                id: 'response-kind',
                text: 'You are kind, Lady Isolde. Kinder than I deserve',
                nextNodeId: null,
              },
              {
                id: 'response-stay',
                text: 'Brittany has been good to me. I think I will stay',
                nextNodeId: null,
              },
            ],
          },
        ],
      },

      learningPoints: [
        {
          id: 'lp-ch4-7-second-isolde-innocence',
          content: "Isolde of the White Hands is innocent and genuine in her affection. This makes Tristan's inability to love her back even more tragic--she deserves better than a man whose heart belongs to another.",
          category: 'character-analysis',
        },
        {
          id: 'lp-ch4-7-unfair',
          content: "Tristan's situation is unfair to everyone: he cannot forget Isolde the Fair, he uses the second Isolde as a substitute, and Isolde of the White Hands loves a man who will never truly love her back.",
          category: 'thematic-analysis',
        },
      ],
    },

    // Scene 8: Decision - Marriage Proposal
    {
      id: 'scene-ch4-8-marriage-proposal',
      type: 'decision',
      backgroundImage: 'https://cdn.midjourney.com/a1063d97-cde8-4a27-b0fc-ec0ebaa305da/0_0.png',

      prompt: 'Duke Hoel proposes a marriage between Tristan and his daughter. What should Tristan do?',
      context: `Duke Hoel summons Tristan to his private chamber. "Tantris--or whatever your true name is, for I suspect you hide your past--I want you to become my son-in-law. Marry my daughter Isolde."

      Tristan is stunned. "My lord, I am honored, but--"

      "You are a skilled knight of noble bearing," Hoel continues. "My daughter loves you. My son vouches for your character. I can see you are running from something, but I do not care about your past. Here in Brittany, you can start anew."

      Kaherdin adds his voice: "Say yes, my friend. You are like a ghost, haunting your own life. Let my sister bring you back to the living. She loves you--and love can heal."

      But Tristan knows: Isolde of the White Hands is kind and beautiful, but she is not Isolde the Fair. Can duty replace passion? Can a convenient marriage heal a heart broken by true love?`,

      choices: [
        {
          id: 'choice-accept-marriage',
          text: 'Accept the marriage--try to build a new life in Brittany',
          consequence: `Tristan bows his head. "I accept, my lord. It would be an honor to join your family."

          The duke is delighted. Kaherdin embraces him as a brother. Isolde of the White Hands weeps with joy when she hears the news.

          Only Tristan feels the hollowness of it. He is marrying her because she shares a name with the woman he truly loves. He is using her innocence and affection as a bandage for a wound that will never heal.

          But perhaps, he tells himself, duty will be enough. Perhaps in time, companionship will grow into something resembling love.

          The wedding is arranged for a month hence. Tristan goes through the preparations like a man in a dream.`,

          learningPoints: [
            {
              id: 'lp-ch4-8a-duty-marriage',
              content: 'Medieval marriages among nobility were often matters of duty and alliance rather than love. Tristan chooses the socially acceptable path, but without real conviction.',
              category: 'historical-context',
            },
          ],
        },
        {
          id: 'choice-refuse-marriage',
          text: 'Refuse the marriage--admit he still loves another',
          consequence: `"My lord," Tristan says carefully, "I cannot accept. It would not be fair to your daughter. My heart... belongs to another. It always will."

          Duke Hoel's face darkens. "Then you should have said so before leading my daughter to hope! Do you know how she speaks of you? How she dreams of you?"

          Tristan feels shame wash over him. The duke is right--he has been unfair to Isolde of the White Hands by spending time with her, by letting her fall in love with him when he knew he could never love her back.

          Kaherdin looks betrayed. "I trusted you with my sister's heart, my friend. I see that was a mistake."

          But even as Tristan faces their anger, he knows he made the right choice. Better to hurt them now with truth than later with a loveless marriage.

          However, Duke Hoel is a powerful man, and Tristan has insulted him. "You will leave Brittany tomorrow," the duke says coldly. "And you will never return."

          Tristan bows and departs, once again an exile. But at least he has been honest.

          **[For the story to continue, Tristan reconsiders and returns to accept the marriage after all--he has nowhere else to go, and duty demands it]**`,

          learningPoints: [
            {
              id: 'lp-ch4-8b-honest',
              content: "Tristan's honesty, while painful, shows his moral core. However, the story requires him to eventually accept the marriage for the tragedy to unfold as it must.",
              category: 'character-analysis',
            },
          ],
        },
      ],

      learningPoints: [],
    },

    // Scene 9: The Wedding Night (Unconsummated)
    {
      id: 'scene-ch4-9-wedding-night',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/009e6fb1-a0ba-4900-9aca-3d38b0d57494/0_0.png',
      image: 'https://cdn.midjourney.com/40c8291e-b580-4521-9d4b-6a4892ae81be/0_0.png',

      content: `The wedding is celebrated with all the splendor of a duke's daughter's marriage. Isolde of the White Hands looks radiant in her bridal gown. Tristan stands beside her, handsome and hollow.

      That night, in the bridal chamber, the terrible truth emerges.

      Isolde of the White Hands waits for her husband to join her in bed. But Tristan stands by the window, staring out at the stars over the sea--the sea that separates him from Cornwall, from Isolde the Fair.

      "My lord?" his bride asks softly. "Will you not come to bed?"

      Tristan turns, and she sees tears on his face. "I cannot," he says. "Forgive me, Isolde. I cannot."

      She does not understand at first. Then, slowly, the realization dawns: her husband does not desire her. He will not consummate their marriage.

      "Is it... the other woman?" she asks, her voice breaking. "The one you will not name?"

      Tristan cannot speak. His silence is answer enough.

      Isolde of the White Hands lies down alone in the marriage bed, weeping silently. Her husband sleeps in a chair by the window, as far from her as he can be while remaining in the same room.

      The marriage is a mockery, a lie. They are husband and wife in name only, and everyone in the castle will soon know it.`,

      learningPoints: [
        {
          id: 'lp-ch4-9-unconsummated',
          content: 'The unconsummated marriage is crucial to the story. Tristan is legally married but has not truly betrayed Isolde the Fair. This makes his tragedy even more complex--he is trapped in a marriage without releasing himself from his love.',
          category: 'plot-structure',
        },
        {
          id: 'lp-ch4-9-isolde-victim',
          content: 'Isolde of the White Hands becomes a tragic figure herself--innocent, loving, and humiliated by a husband who cannot forget another woman. Her later actions, while destructive, are understandable.',
          category: 'character-analysis',
        },
        {
          id: 'lp-ch4-9-medieval-marriage',
          content: "In medieval law and theology, a marriage not consummated could potentially be annulled. Tristan's refusal to consummate keeps the marriage in a liminal state--legally binding but spiritually incomplete.",
          category: 'historical-context',
        },
      ],
    },

    // Scene 10: Cause-Effect - Consequences in Brittany
    {
      id: 'scene-ch4-10-cause-effect',
      type: 'cause-effect',
      backgroundImage: 'https://cdn.midjourney.com/db87cc84-aa5e-4dd2-ab5e-29c3cf8274ed/0_0.png',

      prompt: "Match Tristan's actions in Brittany to their consequences:",

      pairs: [
        {
          id: 'pair-1-friendship',
          cause: 'Tristan befriends Kaherdin in battle',
          effect: 'Kaherdin introduces Tristan to his sister, Isolde of the White Hands',
          explanation: "Kaherdin's friendship opened the door to meeting his sister, setting in motion the chain of events that would trap Tristan in an impossible marriage.",
        },
        {
          id: 'pair-2-name',
          cause: 'Tristan hears the name "Isolde" again',
          effect: 'He is drawn to the second Isolde as a substitute for his true love',
          explanation: "The shared name created a false sense of connection, making Tristan vulnerable to the illusion that he could replace one Isolde with another.",
        },
        {
          id: 'pair-3-marriage',
          cause: "Tristan accepts Duke Hoel's marriage proposal",
          effect: 'He traps himself in a marriage without love, dishonoring his bride',
          explanation: "By marrying for duty and escape rather than love, Tristan created a situation that would hurt everyone involved, especially his innocent bride.",
        },
        {
          id: 'pair-4-refusal',
          cause: 'Tristan refuses to consummate the marriage',
          effect: 'Isolde of the White Hands is humiliated and begins to resent him deeply',
          explanation: "His inability to fulfill his marital duties publicly humiliated his wife and planted seeds of resentment that would have tragic consequences.",
        },
      ],

      learningPoints: [
        {
          id: 'lp-ch4-10-consequences',
          content: 'Every choice Tristan makes in Brittany creates new complications. His attempt to escape his past only tangles him further in impossible situations.',
          category: 'thematic-analysis',
        },
        {
          id: 'lp-ch4-10-tragic-irony',
          content: 'Tristan thought marrying someone else might help him forget Isolde the Fair. Instead, it makes him even more miserable and adds guilt to his suffering.',
          category: 'literary-technique',
        },
      ],
    },

    // Scene 11: Dialogue - Kaherdin Discovers the Truth
    {
      id: 'scene-ch4-11-kaherdin-truth',
      type: 'dialogue',
      backgroundImage: 'https://cdn.midjourney.com/a1063d97-cde8-4a27-b0fc-ec0ebaa305da/0_0.png',

      character: {
        id: 'kaherdin',
        name: 'Kaherdin',
        portrait: 'https://cdn.midjourney.com/093123ac-e2c1-48fc-ad2a-ce5a98c350b6/0_0.png',
        description: "Tristan's friend and brother-in-law, torn between loyalty and anger over his sister's treatment",
      },

      dialogueTree: {
        id: 'node-1',
        speaker: 'kaherdin',
        text: 'My friend--if I can still call you that--what have you done to my sister? The whole court knows you do not share her bed. You have made her a laughingstock!',
        responses: [
          {
            id: 'response-sorry',
            text: 'I am sorry, Kaherdin. I should never have agreed to the marriage',
            nextNodeId: 'node-2',
            learningPoints: [
              {
                id: 'lp-ch4-11-dialogue-regret',
                content: "Tristan's genuine contrition shows he knows he wronged Isolde of the White Hands, even if he couldn't help it.",
                category: 'character-analysis',
              },
            ],
          },
          {
            id: 'response-trapped',
            text: 'I am trapped, Kaherdin. Trapped between two Isoldes and two lives',
            nextNodeId: 'node-2',
            learningPoints: [
              {
                id: 'lp-ch4-11-dialogue-paralysis',
                content: "Tristan's sense of being trapped reveals his complete emotional paralysis between duty and love.",
                category: 'thematic-analysis',
              },
            ],
          },
        ],
        allNodes: [
          {
            id: 'node-1',
            speaker: 'kaherdin',
            text: 'My friend--if I can still call you that--what have you done to my sister? The whole court knows you do not share her bed. You have made her a laughingstock!',
            responses: [
              {
                id: 'response-sorry',
                text: 'I am sorry, Kaherdin. I should never have agreed to the marriage',
                nextNodeId: 'node-2',
              },
              {
                id: 'response-trapped',
                text: 'I am trapped, Kaherdin. Trapped between two Isoldes and two lives',
                nextNodeId: 'node-2',
              },
            ],
          },
          {
            id: 'node-2',
            speaker: 'kaherdin',
            text: 'Two Isoldes? What do you mean? Tell me the truth, Tristan--for I know that is your real name. Tell me everything.',
            responses: [
              {
                id: 'response-full-story',
                text: '[Tell him the whole story--the potion, the exile, Isolde the Fair]',
                nextNodeId: 'node-3',
              },
              {
                id: 'response-essential',
                text: 'I loved a woman named Isolde in Cornwall. I still love her. I always will',
                nextNodeId: 'node-3',
              },
            ],
          },
          {
            id: 'node-3',
            speaker: 'kaherdin',
            text: 'So my sister is a substitute. A replacement for a love you lost. Tristan, that is cruel beyond measure--and yet I see you suffer too. What a cursed situation. What will you do now?',
            responses: [
              {
                id: 'response-trapped-now',
                text: 'I do not know. I am trapped in a marriage I cannot honor and a love I cannot have',
                nextNodeId: null,
              },
              {
                id: 'response-leave',
                text: 'Perhaps I should leave Brittany, free your sister from this mockery',
                nextNodeId: null,
              },
            ],
          },
        ],
      },

      learningPoints: [
        {
          id: 'lp-ch4-11-confession',
          content: "Tristan's confession to Kaherdin provides narrative explanation and deepens their friendship. Kaherdin becomes a confidant who understands Tristan's impossible position.",
          category: 'plot-structure',
        },
        {
          id: 'lp-ch4-11-trapped',
          content: 'Tristan is truly trapped--he cannot be with Isolde the Fair, but he also cannot make himself love his wife. His situation is one of complete emotional paralysis.',
          category: 'thematic-analysis',
        },
      ],
    },

    // Scene 12: Tristan Returns to Cornwall as a Fool
    {
      id: 'scene-ch4-12-fool-disguise',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/b2f00883-5a75-41cc-b77b-df33902d6852/0_0.png',
      image: 'https://cdn.midjourney.com/fd0a9aaa-bf15-4e7b-84f3-0e4f795f341e/0_0.png',

      content: `Unable to bear the separation any longer, Tristan devises a desperate plan. He will return to Cornwall in disguise--not as a knight, but as a fool, a jester, a madman. Such men wander freely through courts, entertaining nobles with their wit and absurdity. No one suspects them or takes them seriously.

      He cuts his hair strangely, stains his face, dresses in motley clothes, and arrives at King Mark's court during a great feast.

      "Who is this fool?" the courtiers laugh as Tristan capers and speaks in riddles.

      But Isolde, seated at the high table beside Mark, goes pale when she sees the "fool's" eyes. She knows those eyes. She knows that voice, disguised though it is.

      Tristan approaches the high table, bowing and speaking nonsense: "A fool knows many things, my lord king! A fool knows that love is madness, and madness is truth, and truth is what we dare not speak aloud!"

      He holds Isolde's gaze for just a moment, and she understands: he has come back to her, risking everything for one more moment in her presence.

      Later, when the feast ends, Isolde sends her trusted maid to the fool: "Come to the garden at midnight. Someone wishes to speak with you."`,

      learningPoints: [
        {
          id: 'lp-ch4-12-fool-motif',
          content: 'The fool or madman disguise appears in many medieval romances. Fools could speak truths that others dared not say, making them perfect disguises for forbidden meetings.',
          category: 'literary-technique',
        },
        {
          id: 'lp-ch4-12-risk',
          content: "Tristan's return to Cornwall despite his exile shows the irresistible pull of his love. He risks death for a chance to see Isolde, demonstrating love's power over reason.",
          category: 'character-analysis',
        },
        {
          id: 'lp-ch4-12-speaking-truth',
          content: 'Tristan\'s "nonsense" as a fool is actually profound truth about love and madness. Medieval literature often used the fool figure to speak uncomfortable truths through the veil of humor.',
          category: 'cultural-context',
        },
      ],
    },

    // Scene 13: Primary Source - The Fool's Disguise
    {
      id: 'scene-ch4-13-primary-source-fool',
      type: 'primary-source',
      backgroundImage: 'https://cdn.midjourney.com/b2f00883-5a75-41cc-b77b-df33902d6852/0_0.png',

      prompt: 'Examine this passage from a medieval version of the Tristan legend:',
      source: {
        type: 'text',
        title: "Folie Tristan (Tristan's Madness)",
        date: '12th century',
        content: `"And Tristan came to the court dressed in fool's clothing, with his hair cut in strange fashion, and he spoke as one mad. But his words held more wisdom than any sage's, for the fool can speak the truth that wise men must hide.

'Sire,' said Tristan to the King, 'I have traveled far to serve in your court. I am skilled at many things--I can play music to make the sad rejoice, and I know the language of birds and beasts. But most of all, I understand love--that greatest folly of all.'

The Queen watched the fool with strange intensity, and though he seemed mad to all others, she alone recognized the sanity beneath the disguise. For love has eyes that see through all deceptions."`,
      },

      questions: [
        {
          id: 'q1',
          question: 'According to the text, why can the fool speak truth that wise men must hide?',
          type: 'multiple-choice',
          options: [
            'Because no one takes a fool seriously, so they can say dangerous things safely',
            'Because fools are divinely inspired and protected by God from punishment',
            'Because wise men are envious and try to silence those who speak the truth',
            'Because the King grants fools special immunity from all laws and consequences',
          ],
          correctAnswer: 'Because no one takes a fool seriously, so they can say dangerous things safely',
          explanation: 'Fools and madmen were given social license to speak uncomfortable truths because their apparent insanity made them seem harmless, allowing Tristan to hide in plain sight.',
        },
        {
          id: 'q2',
          question: 'What does Tristan call the "greatest folly of all"?',
          type: 'multiple-choice',
          options: [
            'Love',
            'War',
            'Madness',
            'Pride',
          ],
          correctAnswer: 'Love',
          explanation: 'By calling love the greatest folly while disguised as a fool, Tristan speaks truth through irony - love has indeed led to his seemingly mad behavior.',
        },
        {
          id: 'q3',
          question: 'Why does Isolde recognize Tristan when others do not?',
          type: 'multiple-choice',
          options: [
            'Love gives her eyes that see through all deceptions',
            'She secretly received a message from Kaherdin warning her of his arrival',
            'She notices the ring he wears which she gave him years ago',
            'His disguise was poorly made and anyone paying close attention would notice',
          ],
          correctAnswer: 'Love gives her eyes that see through all deceptions',
          explanation: 'The text suggests love grants a special perception - Isolde\'s deep connection to Tristan allows her to see past the disguise that fools everyone else.',
        },
      ],

      learningPoints: [
        {
          id: 'lp-ch4-13-medieval-text',
          content: 'The "Folie Tristan" is an actual medieval text from the 12th century. Multiple versions of the Tristan legend existed, emphasizing different episodes.',
          category: 'historical-context',
        },
        {
          id: 'lp-ch4-13-disguise-theme',
          content: "Disguise is a recurring theme in the Tristan legend (Tantris, the fool, etc.). It represents the hidden truth of the lovers' relationship--apparent to some, invisible to others.",
          category: 'literary-technique',
        },
      ],
    },

    // Scene 14: The Poisoned Spear
    {
      id: 'scene-ch4-14-poisoned-wound',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/c74e4a56-154a-4948-8d5e-fc122b14893f/0_0.png',
      image: 'https://cdn.midjourney.com/b6645462-a27d-45be-89f6-141f878c620d/0_0.png',

      content: `After his secret meeting with Isolde--bittersweet, passionate, and far too brief--Tristan returns to Brittany. He has seen his true love one last time, but the separation is even more agonizing now.

      Back in Brittany, Tristan throws himself into battle once more, fighting alongside Kaherdin in a border skirmish. But his mind is elsewhere, still in that moonlit garden with Isolde.

      His distraction proves fatal.

      An enemy knight's spear catches Tristan in the side. It is not a mortal wound--until Kaherdin examines it more closely and his face goes pale.

      "Tristan... the spear was poisoned. Look--the wound already darkens. The poison spreads."

      Tristan stares at the blackening flesh and laughs bitterly. It is happening again. Just as the Morholt's poisoned sword once sent him to Ireland and to Isolde's healing hands, now another poisoned weapon will bring him to his end.

      "There is only one person who can heal a wound like this," Tristan says quietly. "The same person who healed me before. But she is in Cornwall, married to a king, and I am dying in Brittany."

      Fate, it seems, has come full circle. The story that began with a poisoned wound will end with one as well.`,

      learningPoints: [
        {
          id: 'lp-ch4-14-parallel',
          content: "The poisoned wound parallels the Morholt's wound from Chapter 1, creating a circular structure. What began with poison will end with poison--a classic tragic pattern.",
          category: 'plot-structure',
        },
        {
          id: 'lp-ch4-14-only-isolde',
          content: 'Only Isolde the Fair can heal Tristan, just as before. This reinforces their unique bond--no one else has the knowledge or the love to save him.',
          category: 'thematic-analysis',
        },
        {
          id: 'lp-ch4-14-fate',
          content: "Tristan's distraction in battle shows how his divided heart has weakened him. Unable to be with Isolde or without her, he has become vulnerable in all areas of his life.",
          category: 'character-analysis',
        },
      ],

      events: {
        onExit: [
          {
            type: 'quiz',
            componentId: 'quiz-chapter-4-tristan-isolde',
            condition: { type: 'if-not-completed' },
          },
        ],
      },
    },
  ],

  endQuiz: chapter4Quiz,
};

import type { Chapter } from '../../../types';
import { chapter2Quiz } from '../quizzes/chapter-2-quiz';

/**
 * Chapter 2: The Fateful Potion
 *
 * Tristan returns to Ireland to slay the dragon and win Isolde for King Mark.
 * During the voyage back to Cornwall, Tristan and Isolde accidentally drink
 * the love potion, binding them in passion that will destroy lives.
 */

export const chapter2: Chapter = {
  id: 'chapter-2-tristan-isolde',
  title: 'Chapter 2: The Fateful Potion',
  description:
    'Tristan wins Isolde for King Mark by slaying a fearsome dragon, but on the voyage to Cornwall, ' +
    'fate intervenes in the form of a mysterious potion that changes everything.',

  learningObjectives: [
    'Understand the literary function of the love potion as a plot device',
    "Analyze the theme of fate versus choice in the lovers' story",
    "Recognize the irony of Tristan's dual loyalty (to King Mark and to Isolde)",
    'Explore the symbolism of the potion in medieval romance',
  ],

  scenes: [
    // Scene 1: Dragon's Lair
    {
      id: 'scene-ch2-1-dragon-lair',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/33696607-b45f-47f7-9309-4c1c938754bd/0_0.png',

      content: `Tristan returns to Ireland, this time openly as a Cornish knight seeking to win Princess Isolde for King Mark. The dragon terrorizing Ireland is no mere legend--its lair is a burned wasteland of blackened trees and scorched earth.

      Local villagers point Tristan toward the cave with trembling fingers. "Many brave knights have gone in," an old man says. "None have come out. The dragon is a demon, breathing fire and death."

      But Tristan is undeterred. He has faced the Morholt; he will face this beast too. For Cornwall. For peace. And, though he barely admits it to himself, for a chance to see Isolde again.

      He approaches the dark cave entrance, where smoke curls into the grey Irish sky like fingers beckoning him toward doom.`,

      learningPoints: [
        {
          id: 'lp-ch2-1-dragon-symbolism',
          content: "Dragons in medieval romance often symbolize chaos or evil that must be overcome. Slaying the dragon proves the hero worthy of the prize (in this case, Isolde).",
          category: 'literary-technique',
        },
        {
          id: 'lp-ch2-1-secondary-quest',
          content: "The dragon quest serves as a secondary challenge after the Morholt, escalating the stakes and proving Tristan's worthiness repeatedly.",
          category: 'plot-structure',
        },
      ],
    },

    // Scene 2: Slaying the Dragon
    {
      id: 'scene-ch2-2-dragon-battle',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/33696607-b45f-47f7-9309-4c1c938754bd/0_0.png',
      image: 'https://cdn.midjourney.com/1da7a225-6d0a-4359-9d5b-28550911cada/0_0.png',

      content: `The battle with the dragon is fierce and terrifying. The beast is massive, with scales like iron and breath that scorches stone. Its roar shakes the earth, and its tail can shatter trees.

      Tristan fights with desperate courage, dodging gouts of flame and seeking any weakness in the monster's armor. His sword glances off the scales again and again until he finds his opportunity: when the dragon rears back to breathe fire, its throat is exposed.

      Tristan drives his sword deep into the soft flesh beneath the dragon's jaw. The beast thrashes in its death throes, and Tristan narrowly avoids being crushed. As proof of his victory, he cuts out the dragon's tongue--a grisly trophy.

      But the dragon's poison affects Tristan again. Wounded and overcome by toxic fumes, he collapses near the dragon's corpse, the tongue still clutched in his hand.`,

      learningPoints: [
        {
          id: 'lp-ch2-2-heroic-deed',
          content: "The dragon's tongue serves as proof of the deed--medieval stories often required tangible evidence of heroic acts to prevent impostors from claiming glory.",
          category: 'cultural-context',
        },
        {
          id: 'lp-ch2-2-parallel',
          content: "Tristan being poisoned again parallels the Morholt battle, creating a pattern: he wins victories but suffers for them, needing Isolde's healing.",
          category: 'literary-technique',
        },
      ],
    },

    // Scene 3: Dialogue - Isolde Discovers Tristan's Identity
    {
      id: 'scene-ch2-3-identity-discovered',
      type: 'dialogue',
      backgroundImage: 'https://cdn.midjourney.com/e599508e-b0c5-47c3-b451-09479f6c1b1d/0_0.png',

      character: {
        id: 'isolde-fair',
        name: 'Isolde the Fair',
        portrait: 'https://cdn.midjourney.com/ea2ee67c-ecf5-4705-b641-da5d65507ec9/0_0.png',
        description: 'Princess of Ireland, torn between vengeance and mercy',
      },


      dialogueTree: {
        id: 'node-1',
        speaker: 'isolde-fair',
        text: "You... you killed the Morholt. You are Tristan of Cornwall, not the minstrel Tantris. I healed my uncle's killer!",
        responses: [
          {
            id: 'response-sorry',
            text: 'I am sorry for the deception, but I would have been killed if you knew',
            nextNodeId: 'node-2',
            learningPoints: [
              {
                id: 'lp-ch2-3a-honesty',
                content: 'Honesty about your motives, acknowledging the deception. Tristan must balance truth with self-preservation.',
                category: 'character-analysis',
              },
            ],
          },
          {
            id: 'response-freedom',
            text: "The Morholt forced the combat. I fought for my people's freedom",
            nextNodeId: 'node-2',
            learningPoints: [
              {
                id: 'lp-ch2-3b-justify',
                content: "You justify your actions by explaining the context. The Morholt's role as oppressor complicates Isolde's grief.",
                category: 'thematic-analysis',
              },
            ],
          },
        ],
        allNodes: [
          {
            id: 'node-1',
            speaker: 'isolde-fair',
            text: "You... you killed the Morholt. You are Tristan of Cornwall, not the minstrel Tantris. I healed my uncle's killer!",
            responses: [
              {
                id: 'response-sorry',
                text: 'I am sorry for the deception, but I would have been killed if you knew',
                nextNodeId: 'node-2',
                learningPoints: [
                  {
                    id: 'lp-ch2-3a-honesty',
                    content: 'Honesty about your motives, acknowledging the deception. Tristan must balance truth with self-preservation.',
                    category: 'character-analysis',
                  },
                ],
              },
              {
                id: 'response-freedom',
                text: "The Morholt forced the combat. I fought for my people's freedom",
                nextNodeId: 'node-2',
                learningPoints: [
                  {
                    id: 'lp-ch2-3b-justify',
                    content: "You justify your actions by explaining the context. The Morholt's role as oppressor complicates Isolde's grief.",
                    category: 'thematic-analysis',
                  },
                ],
              },
            ],
          },
          {
            id: 'node-2',
            speaker: 'isolde-fair',
            text: "You lied to me! I trusted you, learned from you, and all the while you were my family's enemy. Give me one reason why I should not end your life now.",
            responses: [
              {
                id: 'response-know-me',
                text: 'Because you know me. You know I am not a murderer or villain',
                nextNodeId: 'node-3',
                learningPoints: [
                  {
                    id: 'lp-ch2-3c-bond',
                    content: 'You appeal to the bond you formed during your first healing. Their relationship transcends political enmity.',
                    category: 'character-analysis',
                  },
                ],
              },
              {
                id: 'response-peace',
                text: 'Because I came here to win peace between our kingdoms, not war',
                nextNodeId: 'node-3',
                learningPoints: [
                  {
                    id: 'lp-ch2-3d-mission',
                    content: "You emphasize your current mission's peaceful intent. Tristan seeks to redeem past violence with future peace.",
                    category: 'thematic-analysis',
                  },
                ],
              },
            ],
          },
          {
            id: 'node-3',
            speaker: 'isolde-fair',
            text: 'Peace? By slaying our dragon and taking me to Cornwall as a prize? How is that peace?',
            responses: [
              {
                id: 'response-marriage',
                text: 'A marriage between Ireland and Cornwall ends the bloodshed forever',
                nextNodeId: 'node-end',
                learningPoints: [
                  {
                    id: 'lp-ch2-3e-practical',
                    content: 'A practical political argument. Medieval royal marriages were peace treaties sealed by blood.',
                    category: 'historical-context',
                  },
                ],
              },
              {
                id: 'response-extraordinary',
                text: 'I would never see you as merely a prize. You are extraordinary',
                nextNodeId: 'node-end',
                learningPoints: [
                  {
                    id: 'lp-ch2-3f-personal',
                    content: 'A more personal response that reveals deeper feelings. This foreshadows their forbidden love.',
                    category: 'plot-structure',
                  },
                ],
              },
            ],
          },
          {
            id: 'node-end',
            speaker: 'isolde-fair',
            text: "I should kill you for my uncle's sake. But... I cannot. Despite everything, I cannot. Perhaps it is weakness, or perhaps the heavens want this peace. I will spare you, Tristan, but things between us can never be as they were.",
            responses: [
              {
                id: 'response-understand',
                text: 'I understand, and I am grateful for your mercy',
                nextNodeId: null,
                learningPoints: [
                  {
                    id: 'lp-ch2-3g-grace',
                    content: 'Accepting the changed dynamic with grace. Tristan shows maturity in acknowledging consequences.',
                    category: 'character-analysis',
                  },
                ],
              },
              {
                id: 'response-regret',
                text: 'I regret that our friendship must be a casualty of politics',
                nextNodeId: null,
                learningPoints: [
                  {
                    id: 'lp-ch2-3h-loss',
                    content: 'Acknowledging what has been lost. The personal cost of political conflicts becomes clear.',
                    category: 'thematic-analysis',
                  },
                ],
              },
            ],
          },
        ],
      },

      learningPoints: [
        {
          id: 'lp-ch2-3-identity-crisis',
          content: "The revelation of Tristan's identity creates dramatic tension. Isolde must choose between family honor (vengeance) and personal feeling (mercy).",
          category: 'character-analysis',
        },
        {
          id: 'lp-ch2-3-complexity',
          content: 'Medieval romances often explored complex moral questions without easy answers. Is Tristan villain or hero? Can there be justified killing?',
          category: 'thematic-analysis',
        },
      ],
    },

    // Scene 4: Decision - Isolde's Dilemma
    {
      id: 'scene-ch2-4-isolde-choice',
      type: 'decision',
      backgroundImage: 'https://cdn.midjourney.com/e599508e-b0c5-47c3-b451-09479f6c1b1d/0_0.png',

      prompt: 'As Isolde, what do you feel about this impossible situation?',
      context: `Isolde stands alone in her chamber after sparing Tristan. The sword fragment that proved his identity lies on the table, glinting in the candlelight.

      Her heart is in turmoil. Part of her still burns with anger at the deception. Part of her mourns her uncle. But another part--a part she doesn't fully understand--is relieved she didn't kill Tristan.

      Now she must decide whether to marry King Mark of Cornwall as a sacrifice for peace, knowing his nephew is the man who killed her uncle.`,

      choices: [
        {
          id: 'choice-accept-duty',
          text: 'Accept the marriage as her duty to Ireland',
          consequence: `Isolde makes the decision with a heavy heart. She is a princess, and princesses sometimes must marry for political reasons rather than love. If her marriage to King Mark brings peace between Ireland and Cornwall, then at least the Morholt's death will have served a purpose.

          "I will do my duty," she tells her parents. "I will marry King Mark and unite our kingdoms."

          Her father the King is proud. Her mother the Queen looks worried, as if she senses the storm gathering on the horizon.

          As she prepares for the journey to Cornwall, Isolde tells herself that she can forget the complex feelings stirred by Tristan. She will be a good wife to King Mark. She will be a good queen.

          It is a beautiful lie, but she clings to it.`,

          learningPoints: [
            {
              id: 'lp-ch2-4a-duty',
              content: 'Isolde chooses duty over personal feeling, mirroring the choice Tristan made to fight for Cornwall. Both are trapped by obligations.',
              category: 'thematic-analysis',
            },
          ],
        },
        {
          id: 'choice-reluctant-acceptance',
          text: 'Accept reluctantly, feeling trapped by circumstances',
          consequence: `Isolde feels like a pawn in a game of thrones. She doesn't want this marriage, but what choice does she have? To refuse would shame her father and possibly restart the cycle of violence.

          "I will go to Cornwall," she says, though her voice lacks enthusiasm. "But do not expect me to rejoice in it."

          Her parents see her reluctance but press forward nonetheless. Peace is too important. The dragon is slain, the bargain must be kept.

          As servants pack her belongings, Isolde feels her freedom slipping away. She will be Queen of Cornwall--powerful in title, perhaps, but powerless over her own fate.

          And Tristan will be there, a constant reminder of everything complicated and confusing about this arrangement.`,

          learningPoints: [
            {
              id: 'lp-ch2-4b-agency',
              content: 'Despite being central to the story, Isolde has little agency over her fate--a common reality for medieval noblewomen, though romance literature sometimes critiqued this.',
              category: 'cultural-context',
            },
          ],
        },
      ],

      learningPoints: [],
    },

    // Scene 5: Reconciliation and Departure
    {
      id: 'scene-ch2-5-reconciliation',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/e599508e-b0c5-47c3-b451-09479f6c1b1d/0_0.png',

      content: `The Irish court holds a grand ceremony. Princess Isolde is officially betrothed to King Mark of Cornwall, with Tristan standing as his uncle's representative. The irony is not lost on Isolde.

      Before they depart, Isolde's mother, the Queen, prepares something special: a love potion of extraordinary power. She calls her most trusted maid, Brangien.

      "Guard this potion with your life," the Queen whispers. "On Isolde's wedding night, she and King Mark must drink it together. It will bind them in perfect love, ensuring a happy marriage despite the political nature of their union."

      The potion glimmers golden in its crystal flask, mysterious and potent. Brangien promises to guard it carefully.

      As the ship prepares to sail, Isolde stands at the rail, watching Ireland's green hills recede. She is leaving her homeland, perhaps forever, to marry a man she has never met and live alongside the nephew who killed her uncle.

      What could possibly go wrong?`,

      learningPoints: [
        {
          id: 'lp-ch2-5-potion-foreshadow',
          content: "The love potion is introduced with clear instructions: it's meant for Isolde and King Mark. This setup makes the eventual mistake more impactful.",
          category: 'plot-structure',
        },
        {
          id: 'lp-ch2-5-queens-magic',
          content: "The Queen's creation of the potion shows knowledge of magic/herbalism, a common attribute of wise women in medieval romance.",
          category: 'cultural-context',
        },
      ],
    },

    // Scene 6: Map Exploration - The Voyage
    {
      id: 'scene-ch2-6-voyage-map',
      type: 'map-exploration',
      backgroundImage: 'https://cdn.midjourney.com/337c2c68-b482-4f66-ac5b-7bf3ff95f287/0_0.png',
      mapImage: 'https://cdn.midjourney.com/e86787fe-d292-4633-ab72-9d549426761a/0_0.png',
      prompt: "Follow the ship's journey across the Irish Sea. The voyage takes several days, and the close quarters of the ship bring Tristan and Isolde into constant contact despite the tension between them.",
      locations: [
        {
          id: 'loc-irish-coast',
          x: 10,
          y: 35,
          name: 'Irish Coast',
          content: `The ship departs from Ireland's eastern shore. Isolde stands at the stern, watching her homeland disappear. Tristan maintains a respectful distance, but he watches her from across the deck.`,
        },
        {
          id: 'loc-irish-sea',
          x: 16,
          y: 42,
          name: 'Irish Sea',
          content: `Days pass on the open water. The enforced intimacy of ship life means Tristan and Isolde must interact. They are polite but distant, the weight of their history hanging between them like fog.`,
        },
        {
          id: 'loc-mid-voyage',
          x: 22,
          y: 48,
          name: 'Mid-Voyage',
          content: `A storm rises, forcing everyone below deck. In the rolling ship, Isolde and Tristan are thrown together more than either would like. They begin to talk again, tentatively, about music and poetry--safe subjects.`,
        },
        {
          id: 'loc-near-cornwall',
          x: 27,
          y: 53,
          name: 'Approaching Cornwall',
          content: `The Cornish coast comes into view. The ship will arrive in a day. Isolde knows her life is about to change forever. In the cabin, Brangien checks on the precious potion, still safely stored for the wedding night.`,
        },
      ],

      learningPoints: [
        {
          id: 'lp-ch2-6-geography',
          content: 'The Irish Sea voyage was a real journey medieval travelers made, taking several days by ship. Geography shaped medieval politics and relationships.',
          category: 'historical-context',
        },
        {
          id: 'lp-ch2-6-tension',
          content: "The map exploration provides breathing room before the potion scene, building anticipation while showing Tristan and Isolde's gradual warming to each other.",
          category: 'plot-structure',
        },
      ],
    },

    // Scene 7: The Hot Day on Deck
    {
      id: 'scene-ch2-7-hot-day',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/337c2c68-b482-4f66-ac5b-7bf3ff95f287/0_0.png',

      content: `The sun beats down mercilessly on the ship's deck. It is one of those rare, sweltering days when the Irish Sea feels more like the Mediterranean. Tristan and Isolde sit in the shade of the sail, having exhausted the safe topics of conversation.

      The ice between them has thawed somewhat. They have spoken of music, of poetry, of the stars. Carefully, they have rebuilt something like the friendship they had when Tristan was "Tantris."

      But neither speaks of the deeper currents running between them--the confusion, the attraction neither will name, the impossible situation they're in.

      "I am thirsty," Isolde says, fanning herself. "This heat is unbearable."

      "I'll ask Brangien for wine," Tristan says, rising.

      It is such a small, innocent request. But fate turns on small moments.`,

      learningPoints: [
        {
          id: 'lp-ch2-7-setup',
          content: 'The scene deliberately creates ordinary circumstances before the extraordinary event. The mundane detail (being thirsty) makes what follows feel like terrible luck rather than contrivance.',
          category: 'literary-technique',
        },
        {
          id: 'lp-ch2-7-reconnection',
          content: 'By showing their friendship rebuilding, the story makes us care about both characters and dread the complications coming.',
          category: 'plot-structure',
        },
      ],
    },

    // Scene 8: Decision - The Fateful Moment
    {
      id: 'scene-ch2-8-potion-offered',
      type: 'decision',
      backgroundImage: 'https://cdn.midjourney.com/dd628c00-0230-4812-b322-1d2eb10d30c4/0_0.png',

      prompt: 'Brangien brings out a flask--but is it the right one?',
      context: `Brangien is exhausted from her duties and the heat. She goes to fetch wine but in her fatigue, she grabs the wrong flask--not the ordinary wine, but the crystal flask containing the love potion.

      She doesn't realize her mistake. To her tired eyes, both vessels look similar.

      She returns to where Tristan and Isolde sit and offers the flask. "Wine, my lady. Fresh and cool."

      Isolde takes the flask, drinks deeply, then passes it to Tristan who also drinks. It tastes like wine--sweet, refreshing, innocent.

      They hand the flask back to Brangien and return to their conversation, unaware that everything has just changed.`,

      choices: [
        {
          id: 'choice-immediate-effect',
          text: 'The potion takes effect immediately',
          consequence: `As Tristan and Isolde talk, something shifts. The air between them seems to shimmer, to thicken. Their eyes meet, and neither can look away.

          Isolde's heart begins to race. Every word Tristan speaks sounds like poetry. The sight of his face fills her with an emotion so powerful it frightens her. This isn't mere attraction--this is overwhelming, all-consuming need.

          Tristan feels as if scales have fallen from his eyes. How did he not see before how beautiful Isolde is? How perfect? The thought of her marrying his uncle suddenly feels like a knife in his chest.

          "What is happening?" Isolde whispers, even as she knows. The potion. The terrible, powerful potion meant for her wedding night.

          "We drank the potion," Tristan says, horror and joy warring in his voice. "We drank it."

          And there is no cure for a love potion. None at all.`,

          learningPoints: [
            {
              id: 'lp-ch2-8a-instant',
              content: 'The immediate effect emphasizes the potion as an irresistible magical force--fate intervening directly in human affairs.',
              category: 'literary-technique',
            },
          ],
        },
        {
          id: 'choice-gradual-effect',
          text: 'The potion works gradually, deepening existing feelings',
          consequence: `At first, nothing seems different. But as the afternoon wears on, Tristan notices he cannot stop watching Isolde. Every gesture she makes seems graceful. Every word she speaks seems wise and wonderful.

          For her part, Isolde finds herself laughing more at Tristan's remarks, finding excuses to sit closer, feeling a warmth in her chest that has nothing to do with the sun.

          By evening, they realize something is terribly wrong. These feelings are too intense, too sudden. Then Brangien discovers her mistake and comes to them weeping, confessing what she's done.

          The love potion hasn't created feelings from nothing--it has taken the attraction that was already budding between them and amplified it a thousandfold, making it irresistible and eternal.

          "What have we done?" Isolde whispers.

          "What fate has done to us," Tristan replies, taking her hand. And he does not let go.`,

          learningPoints: [
            {
              id: 'lp-ch2-8b-amplification',
              content: 'The gradual effect suggests the potion amplified existing feelings rather than creating them from nothing--making the love feel more "real" even while supernatural.',
              category: 'thematic-analysis',
            },
          ],
        },
      ],

      learningPoints: [],
    },

    // Scene 9: The First Declaration
    {
      id: 'scene-ch2-9-first-declaration',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/dd628c00-0230-4812-b322-1d2eb10d30c4/0_0.png',
      image: 'https://cdn.midjourney.com/316040e4-edbf-46d2-b7b4-9581f0cfd1bc/0_0.png',

      content: `Alone in the cabin, Tristan and Isolde face the truth of what has happened. The potion has bound them together with a love that will not fade, cannot be denied, and must not be acted upon.

      "I love you," Tristan says, the words both a declaration and a lament. "I love you more than life, more than honor, more than heaven itself. And I wish to God I did not, because this love will destroy us both."

      Isolde's eyes fill with tears. "I love you too. From the moment we drank, it was as if my soul recognized yours. But I am promised to your uncle. I will be his wife. This love is impossible."

      "I know," Tristan says. "And yet it is real. The potion did not create a lie--it has bound us to a terrible truth."

      They hold each other as the ship rocks gently, knowing that when they reach Cornwall, they will have to hide this love or watch it tear apart everything they both hold dear.

      The greatest love story of the age has begun. And it is already a tragedy.`,

      learningPoints: [
        {
          id: 'lp-ch2-9-love-death',
          content: "The phrase \"this love will destroy us\" introduces the Liebestod theme--love and death intertwined. This becomes the central tragedy.",
          category: 'thematic-analysis',
        },
        {
          id: 'lp-ch2-9-impossible-love',
          content: "The potion makes their love both genuine and forbidden. They can't help loving each other, but acting on that love would be betrayal.",
          category: 'thematic-analysis',
        },
      ],
    },

    // Scene 10: Dialogue - Brangien's Confession and Oath
    {
      id: 'scene-ch2-10-brangien',
      type: 'dialogue',
      backgroundImage: 'https://cdn.midjourney.com/dd628c00-0230-4812-b322-1d2eb10d30c4/0_0.png',

      character: {
        id: 'brangien',
        name: 'Brangien',
        portrait: 'https://cdn.midjourney.com/ea2ee67c-ecf5-4705-b641-da5d65507ec9/0_0.png',
        description: "Isolde's loyal maid who accidentally gave the lovers the love potion",
      },

      dialogueTree: {
        id: 'node-1',
        speaker: 'brangien',
        text: 'My lady, I am so sorry. I have ruined everything. The potion was meant for you and King Mark, and I... I gave it to you and Tristan by mistake. Please, punish me as I deserve.',
        responses: [
          {
            id: 'response-accident',
            text: 'It was an accident, Brangien. You cannot be blamed for this',
            nextNodeId: 'node-2',
            learningPoints: [
              {
                id: 'lp-ch2-10a-mercy',
                content: "You show mercy and understanding. Isolde's compassion despite her own suffering demonstrates nobility of character.",
                category: 'character-analysis',
              },
            ],
          },
          {
            id: 'response-practical',
            text: "What's done is done. We must focus on what happens now",
            nextNodeId: 'node-2',
            learningPoints: [
              {
                id: 'lp-ch2-10b-pragmatic',
                content: 'Practical but not unkind. Isolde recognizes that dwelling on blame serves no purpose.',
                category: 'character-analysis',
              },
            ],
          },
        ],
        allNodes: [
          {
            id: 'node-1',
            speaker: 'brangien',
            text: 'My lady, I am so sorry. I have ruined everything. The potion was meant for you and King Mark, and I... I gave it to you and Tristan by mistake. Please, punish me as I deserve.',
            responses: [
              {
                id: 'response-accident',
                text: 'It was an accident, Brangien. You cannot be blamed for this',
                nextNodeId: 'node-2',
                learningPoints: [
                  {
                    id: 'lp-ch2-10a-mercy',
                    content: "You show mercy and understanding. Isolde's compassion despite her own suffering demonstrates nobility of character.",
                    category: 'character-analysis',
                  },
                ],
              },
              {
                id: 'response-practical',
                text: "What's done is done. We must focus on what happens now",
                nextNodeId: 'node-2',
                learningPoints: [
                  {
                    id: 'lp-ch2-10b-pragmatic',
                    content: 'Practical but not unkind. Isolde recognizes that dwelling on blame serves no purpose.',
                    category: 'character-analysis',
                  },
                ],
              },
            ],
          },
          {
            id: 'node-2',
            speaker: 'brangien',
            text: 'But what will you do? You must marry King Mark in days, and now you love Tristan. This is impossible!',
            responses: [
              {
                id: 'response-duty',
                text: 'I will fulfill my duty to marry Mark, but my heart belongs to Tristan',
                nextNodeId: 'node-end',
                learningPoints: [
                  {
                    id: 'lp-ch2-10c-divided',
                    content: 'Acknowledging the divide between duty and love. This becomes the central tension of the entire story.',
                    category: 'thematic-analysis',
                  },
                ],
              },
              {
                id: 'response-secret',
                text: 'We must keep this secret. No one can ever know',
                nextNodeId: 'node-end',
                learningPoints: [
                  {
                    id: 'lp-ch2-10d-secrecy',
                    content: 'Emphasizing the need for secrecy. The forbidden love must remain hidden or destroy everyone involved.',
                    category: 'plot-structure',
                  },
                ],
              },
            ],
          },
          {
            id: 'node-end',
            speaker: 'brangien',
            text: 'I will help you, my lady, in any way I can. I will keep your secret to my death. I swear it.',
            responses: [
              {
                id: 'response-grateful',
                text: 'Thank you, Brangien. Your loyalty means everything',
                nextNodeId: null,
                learningPoints: [
                  {
                    id: 'lp-ch2-10e-gratitude',
                    content: "Accepting her help gratefully. Brangien's loyalty will be tested repeatedly throughout the story.",
                    category: 'character-analysis',
                  },
                ],
              },
              {
                id: 'response-oath',
                text: 'We will need all the help we can get. Swear your oath of silence',
                nextNodeId: null,
                learningPoints: [
                  {
                    id: 'lp-ch2-10f-formal',
                    content: "Formal acknowledgment of the pact. Medieval oaths were sacred and binding--Brangien's vow is her life commitment.",
                    category: 'cultural-context',
                  },
                ],
              },
            ],
          },
        ],
      },

      learningPoints: [
        {
          id: 'lp-ch2-10-brangien-role',
          content: "Brangien becomes a key supporting character--the loyal maid who knows the secret and helps protect the lovers. Her oath of silence is crucial to the plot.",
          category: 'character-analysis',
        },
        {
          id: 'lp-ch2-10-secrecy',
          content: 'The need for absolute secrecy is established here. The forbidden love must be hidden, creating tension that drives the plot forward.',
          category: 'plot-structure',
        },
      ],
    },

    // Scene 11: Timeline Game - The Sequence of Events
    {
      id: 'scene-ch2-11-timeline',
      type: 'timeline-game',
      backgroundImage: 'https://cdn.midjourney.com/337c2c68-b482-4f66-ac5b-7bf3ff95f287/0_0.png',

      prompt: 'Put these events in the correct order:',

      successThreshold: 70,

      timelineEvents: [
        {
          id: 'evt-1',
          title: 'Tristan returns to Ireland',
          year: 1155,
          description: 'Tristan returns to Ireland to slay the dragon and win Isolde for King Mark',
        },
        {
          id: 'evt-2',
          title: 'Isolde discovers the truth',
          year: 1155,
          description: 'Isolde discovers Tristan killed the Morholt but spares him',
        },
        {
          id: 'evt-3',
          title: 'Political betrothal',
          year: 1155,
          description: 'Isolde agrees to marry King Mark for political peace',
        },
        {
          id: 'evt-4',
          title: 'The potion is created',
          year: 1155,
          description: 'The Queen prepares a love potion for the wedding night',
        },
        {
          id: 'evt-5',
          title: 'Journey begins',
          year: 1155,
          description: 'The ship departs for Cornwall with Tristan and Isolde aboard',
        },
        {
          id: 'evt-6',
          title: 'The tragic mistake',
          year: 1155,
          description: 'Brangien accidentally gives the love potion to Tristan and Isolde',
        },
        {
          id: 'evt-7',
          title: 'The fateful drink',
          year: 1155,
          description: 'Tristan and Isolde drink the potion thinking it is wine',
        },
        {
          id: 'evt-8',
          title: 'Love awakens',
          year: 1155,
          description: 'They realize they are bound by irresistible love',
        },
        {
          id: 'evt-9',
          title: 'The oath of secrecy',
          year: 1155,
          description: 'Brangien confesses her mistake and swears secrecy',
        },
      ],

      learningPoints: [
        {
          id: 'lp-ch2-11-causation',
          content: "The timeline shows how each event logically led to the next, creating an inevitability even though the potion's consumption was accidental.",
          category: 'plot-structure',
        },
      ],
    },

    // Scene 12: Primary Source - Medieval Views on Love Potions
    {
      id: 'scene-ch2-12-primary-source',
      type: 'primary-source',
      backgroundImage: 'https://cdn.midjourney.com/dd628c00-0230-4812-b322-1d2eb10d30c4/0_0.png',

      prompt: 'Examine this medieval text about love potions:',
      source: {
        type: 'text',
        title: 'On the Nature of Love Potions',
        date: 'Medieval text',
        content: `"There are those who seek to bind hearts through magical draughts, believing that love can be compelled as the body can be moved. Such potions are made from rare herbs, blessed (or cursed) under the moon, and mixed with wine.

The scholars debate whether such magic creates true love or merely the illusion thereof. Some say the potion reveals love that was always meant to be--that it is destiny's tool, not its defiance. Others claim it is the devil's work, forcing souls into sin against their will.

If a love potion works, can the lovers be blamed for their passion? The Church says yes, for they could resist if their faith were strong. The poets say no, for love compelled by magic is not a choice but a fate. The question remains: is a love created by potion real, or the cruelest of deceptions?"`,
      },

      questions: [
        {
          id: 'q1',
          question: 'According to the text, what do "scholars debate" about love potions?',
          type: 'multiple-choice',
          options: [
            'Whether they create true love or merely an illusion',
            'Whether the herbs should be blessed or cursed under the moon',
            'Whether wine or water makes a better base for the potion',
            'Whether the potion should be taken by both lovers or just one',
          ],
          correctAnswer: 'Whether they create true love or merely an illusion',
          explanation: 'Medieval scholars questioned whether love potions created genuine emotion or just the appearance of love - a philosophical question about the nature of compelled feelings.',
        },
        {
          id: 'q2',
          question: 'What do "poets" believe about lovers who drink a love potion?',
          type: 'multiple-choice',
          options: [
            'They cannot be blamed because it is fate, not choice',
            'They should be condemned for their weakness of faith',
            'They are victims of the devil\'s work and must seek redemption',
            'They can resist the potion if their willpower is strong enough',
          ],
          correctAnswer: 'They cannot be blamed because it is fate, not choice',
          explanation: 'Poets took a more romantic view than the Church, arguing that love compelled by magic removes moral responsibility since it is fate rather than free will.',
        },
        {
          id: 'q3',
          question: 'What does one interpretation suggest the potion actually does?',
          type: 'multiple-choice',
          options: [
            'It reveals love that was always meant to be--destiny\'s tool',
            'It forces souls into sin against God\'s will',
            'It creates an illusion that fades when the potion wears off',
            'It binds hearts temporarily until true love develops naturally',
          ],
          correctAnswer: 'It reveals love that was always meant to be--destiny\'s tool',
          explanation: 'Some believed love potions didn\'t create new feelings but revealed what was destined to be - making the potion an instrument of fate rather than a creator of false love.',
        },
      ],

      learningPoints: [
        {
          id: 'lp-ch2-12-medieval-debate',
          content: 'Medieval audiences actually debated the meaning of the love potion--does it excuse the lovers or condemn them? This ambiguity is intentional.',
          category: 'literary-technique',
        },
        {
          id: 'lp-ch2-12-fate-choice',
          content: 'The potion raises the central question: fate versus free will. If magic compels love, are the lovers responsible for their actions?',
          category: 'thematic-analysis',
        },
      ],
    },

    // Scene 13: Arrival in Cornwall
    {
      id: 'scene-ch2-13-arrival',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/2d05aa58-da69-4125-ab27-d7de91f67aea/0_0.png',

      content: `The ship reaches Cornwall's rocky shores as the sun sets, painting the sky in gold and crimson. King Mark waits on the dock with his entire court to greet his bride.

      Tristan and Isolde stand at the rail, their hands almost touching but not quite. They have spent the rest of the voyage preparing themselves for this moment--steeling themselves to hide their love, to play their roles, to endure.

      "I will be faithful to my uncle," Tristan whispers. "In every way but one."

      "And I will be a good wife to King Mark," Isolde replies. "In every way I can bear."

      As the ship docks, they separate. Tristan bows formally, the perfect nephew. Isolde stands regally, the perfect princess.

      Only Brangien sees the way their eyes linger on each other, full of longing and despair.`,

      learningPoints: [
        {
          id: 'lp-ch2-13-duality',
          content: "The lovers must now live a dual existence: public duty and private passion. This divided life creates the tension that drives the story forward.",
          category: 'thematic-analysis',
        },
        {
          id: 'lp-ch2-13-ironic-promises',
          content: "Their promises to be \"faithful\" and \"good\" are sincere but already compromised. The irony is that they mean well while being caught in an impossible situation.",
          category: 'character-analysis',
        },
      ],
    },

    // Scene 14: The Wedding Night Substitution
    {
      id: 'scene-ch2-14-wedding-night',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/2d05aa58-da69-4125-ab27-d7de91f67aea/0_0.png',

      content: `The wedding takes place with great ceremony. Isolde wears white and gold, and King Mark is kind and gentle, pleased with his beautiful bride. The hall celebrates late into the night.

      But when the wedding night comes, Isolde and Brangien enact a desperate plan. In the darkness of the bedchamber, Brangien takes Isolde's place. King Mark, in the dark and after much wine, does not realize the substitution.

      Isolde waits in an adjacent chamber, her heart breaking. She is married but has deceived her husband on the very first night. The web of lies has already begun, woven from the moment the potion was drunk.

      When morning comes, Brangien returns to Isolde, and they embrace, both women weeping for the impossible situation they're in.

      "It is done," Brangien whispers. "Your secret is kept. But oh, my lady, how long can this last?"

      "As long as it must," Isolde replies. But she does not know the answer either.`,

      learningPoints: [
        {
          id: 'lp-ch2-14-deception-begins',
          content: 'The wedding night deception is a common element in medieval romance, but here it shows how love forces the characters into progressively worse betrayals.',
          category: 'plot-structure',
        },
        {
          id: 'lp-ch2-14-brangien-sacrifice',
          content: "Brangien's willingness to take Isolde's place shows extreme loyalty and also the complicated ethics of the situation--is this help or enabling?",
          category: 'character-analysis',
        },
      ],

      events: {
        onExit: [
          {
            type: 'quiz',
            componentId: 'quiz-chapter-2-tristan-isolde',
            condition: { type: 'if-not-completed' },
          },
        ],
      },
    },
  ],

  endQuiz: chapter2Quiz,
};

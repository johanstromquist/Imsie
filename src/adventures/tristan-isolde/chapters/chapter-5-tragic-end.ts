import type { Chapter } from '../../../types';
import { chapter5Quiz } from '../quizzes/chapter-5-quiz';

/**
 * Chapter 5: The Tragic End
 *
 * The final chapter brings Tristan and Isolde's story to its heartbreaking conclusion.
 * Tristan lies dying in Brittany from a poisoned wound, and only Isolde the Fair can heal him.
 * But miscommunication, jealousy, and fate conspire to create one of literature's most
 * beautiful and tragic endings - the Liebestod, where love conquers death itself.
 */

export const chapter5: Chapter = {
  id: 'chapter-5-tristan-isolde',
  title: 'Chapter 5: The Tragic End',
  description:
    'Witness the heartbreaking conclusion as Tristan lies dying in Brittany, ' +
    'sending for the only person who can save him. But fate has one final cruel twist, ' +
    'leading to a tragic ending that will live forever in legend.',

  learningObjectives: [
    'Understand the elements of tragic conclusion in medieval romance',
    'Analyze the role of miscommunication and deception in tragedy',
    'Recognize the Liebestod (love-death) motif in literature',
    'Synthesize the major themes of duty, fate, and forbidden love',
  ],

  scenes: [
    // Scene 1: Opening - Tristan Dying
    {
      id: 'scene-ch5-1-dying',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/bc988edb-d455-47dd-8b27-cfe2568bfb75/0_0.png',

      content: `In his chamber in Brittany, Tristan lies dying. The wound he received from the poisoned spear will not heal--it festers and blackens, spreading its venom through his body just as the Morholt's poisoned blade did years ago.

      Physicians come and go, shaking their heads. Isolde of the White Hands tends him dutifully, but her remedies have no effect. The wound is beyond mortal healing.

      Tristan knows the terrible truth: he has been poisoned before, and only one person in the world possesses the skill to save him now. The same person who healed him when he first lay dying in Ireland, who saved him from the dragon's poison, who knows the secret arts of Celtic healing.

      Isolde the Fair. His true love, the woman he has not seen in years, who lives far across the sea in Cornwall as King Mark's queen.

      As fever consumes him and death draws near, Tristan makes a desperate decision. He must send for her. One last time, he will see the woman he has loved beyond reason, beyond duty, beyond life itself.`,

      learningPoints: [
        {
          id: 'lp-ch5-1-parallel',
          content: "The poisoned wound parallels Tristan's first wound from the Morholt, creating a circular narrative structure where the story returns to its beginning themes.",
          category: 'plot-structure',
        },
        {
          id: 'lp-ch5-1-inevitability',
          content: 'Tragic structure depends on inevitability. We know this cannot end well, but watch helplessly as events unfold--this creates dramatic tension.',
          category: 'literary-technique',
        },
      ],
    },

    // Scene 2: Dialogue - Sending for Isolde
    {
      id: 'scene-ch5-2-dialogue-kaherdin',
      type: 'dialogue',
      backgroundImage: 'https://cdn.midjourney.com/bc988edb-d455-47dd-8b27-cfe2568bfb75/0_0.png',
      image: 'https://cdn.midjourney.com/1a71f587-b11e-4919-90e5-83e237c29e0b/0_0.png',

      character: {
        id: 'kaherdin-loyal',
        name: 'Kaherdin',
        portrait: 'https://cdn.midjourney.com/093123ac-e2c1-48fc-ad2a-ce5a98c350b6/0_0.png',
        description: "Tristan's loyal friend and brother-in-law who understands his impossible love",
      },

      dialogueTree: {
        id: 'node-1',
        speaker: 'kaherdin-loyal',
        text: 'Isolde the Fair? You want me to sail to Cornwall and bring her here? Tristan, that is madness--King Mark would never allow it.',
        responses: [
          {
            id: 'response-desperate',
            text: 'I know the risks, but without her, I will surely die',
            nextNodeId: 'node-2',
            learningPoints: [
              {
                id: 'lp-ch5-2-dialogue-desperation',
                content: "Tristan's desperation shows how completely he depends on Isolde--physically and emotionally.",
                category: 'character-analysis',
              },
            ],
          },
          {
            id: 'response-healing',
            text: 'She alone has the knowledge to heal this poison. Please, I beg you',
            nextNodeId: 'node-2',
            learningPoints: [
              {
                id: 'lp-ch5-2-dialogue-appeal',
                content: 'Appeals to both reason and friendship show the bonds between the two men.',
                category: 'character-analysis',
              },
            ],
          },
        ],
        allNodes: [
          {
            id: 'node-1',
            speaker: 'kaherdin-loyal',
            text: 'Isolde the Fair? You want me to sail to Cornwall and bring her here? Tristan, that is madness--King Mark would never allow it.',
            responses: [
              {
                id: 'response-desperate',
                text: 'I know the risks, but without her, I will surely die',
                nextNodeId: 'node-2',
              },
              {
                id: 'response-healing',
                text: 'She alone has the knowledge to heal this poison. Please, I beg you',
                nextNodeId: 'node-2',
              },
            ],
          },
          {
            id: 'node-2',
            speaker: 'kaherdin-loyal',
            text: "If I do this, I may not return. Mark's guards would stop me if they knew our purpose. How will I even find her, much less convince her to come?",
            responses: [
              {
                id: 'response-ring',
                text: 'Take this ring--she will recognize it. Tell her I am dying and only she can save me',
                nextNodeId: 'node-3',
              },
              {
                id: 'response-name',
                text: 'Tell her Tristan is dying. That will be enough. She will come',
                nextNodeId: 'node-3',
              },
            ],
          },
          {
            id: 'node-3',
            speaker: 'kaherdin-loyal',
            text: 'Very well. I will go. But how will you know if I have succeeded? You may not live long enough for me to return and tell you in person.',
            responses: [
              {
                id: 'response-white-black',
                text: 'We will arrange a signal. If she comes with you, raise a white sail. If she refuses, raise a black sail',
              },
              {
                id: 'response-hope-despair',
                text: 'Let us agree on this: a white sail means hope and healing. A black sail means I am beyond saving',
              },
            ],
          },
        ],
      },

      learningPoints: [
        {
          id: 'lp-ch5-2-ring-token',
          content: 'The ring as a token of identity and love is a common medieval romance motif--physical objects carry emotional and narrative weight.',
          category: 'literary-technique',
        },
        {
          id: 'lp-ch5-2-sail-symbolism',
          content: "The white/black sail is the story's most crucial symbol. Its dual meaning (hope/despair) sets up the tragic miscommunication to come.",
          category: 'symbolism',
        },
      ],
    },

    // Scene 3: Narrative - Kaherdin Departs
    {
      id: 'scene-ch5-3-departure',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/a0d03e05-9fdb-4144-95d9-360163ebaca1/0_0.png',

      content: `Kaherdin prepares for his desperate voyage. He chooses his fastest ship, a crew of loyal sailors who ask no questions, and provisions for a swift journey across treacherous waters.

      Tristan's ring burns in his pocket--a simple band of gold that has touched Isolde's hand, that carries years of love and longing within its circle.

      As the ship leaves Brittany"s harbor, Tristan watches from his window, his fevered eyes straining to see the vessel disappear beyond the horizon. Everything now depends on Kaherdin's speed, Isolde's willingness to come, and whether Tristan can hold onto life long enough for her arrival.

      In the sickroom, Isolde of the White Hands also watches the ship depart. She has overheard everything. She knows her husband's brother sails to fetch the woman Tristan truly loves--the woman whose very name has haunted their unconsummated marriage.

      Jealousy, hurt, and anger bloom in her heart like poison spreading through a wound.`,

      learningPoints: [
        {
          id: 'lp-ch5-3-isolde-whh-position',
          content: 'Isolde of the White Hands is trapped in an impossible situation--married but unloved, dutiful but betrayed. Her jealousy, while destructive, is understandable and human.',
          category: 'character-analysis',
        },
        {
          id: 'lp-ch5-3-dual-narrative',
          content: 'The story now splits between multiple locations and perspectives, creating dramatic irony as we know more than any single character.',
          category: 'plot-structure',
        },
      ],
    },

    // Scene 4: Decision - The White Sail Agreement
    {
      id: 'scene-ch5-4-decision-sail',
      type: 'decision',
      backgroundImage: 'https://cdn.midjourney.com/bc988edb-d455-47dd-8b27-cfe2568bfb75/0_0.png',
      image: 'https://cdn.midjourney.com/bd48e54c-f793-476b-8aac-afbd2015e14c/0_0.png',

      prompt: 'As Tristan grows weaker, he reviews the plan with those who remain. What details matter most?',
      context: `Days pass. Tristan's condition worsens. He can no longer leave his bed, can barely speak. But his mind remains fixed on one thing: the signal that will tell him whether Isolde is coming.

      He gathers his strength to speak to those around him--servants, physicians, and his wife--explaining the arrangement so that when the ship returns, someone can tell him what color the sail bears.

      "Remember," he whispers hoarsely, "if the sail is white, Isolde the Fair comes to heal me. If it is black, I am lost."

      But in making the signal so widely known, he has ensured that Isolde of the White Hands learns the exact plan she will later exploit.`,

      choices: [
        {
          id: 'choice-trust-wife',
          text: "Ask your wife to watch for the ship and report the sail's color",
          consequence: `You turn to Isolde of the White Hands, trusting in her duty as your wife. "When the ship returns," you tell her, "you must tell me immediately what color sail it bears. My life depends on knowing."

          She nods, her face unreadable. "I will watch from the harbor every day," she promises. "The moment I see the ship, I will come to you."

          But behind her composed expression, pain and anger war within her. She knows this ship carries the woman you truly love, the reason your marriage has never been consummated, the phantom who has stood between you from the beginning.

          You have placed your fate in the hands of a woman you have wounded deeply.`,

          learningPoints: [
            {
              id: 'lp-ch5-4a-tragic-irony',
              content: 'This is tragic irony at its most painful: Tristan trusts the very person who has the most reason to betray him, unknowingly sealing his own fate.',
              category: 'literary-technique',
            },
          ],
        },
        {
          id: 'choice-trust-servant',
          text: 'Ask a loyal servant to watch for the ship',
          consequence: `You try to assign the task to a trusted servant, but your wife interrupts. "I will watch for the ship," Isolde of the White Hands insists. "It is my duty as your wife to attend your sickbed and bring you news."

          In your weakened state, you cannot argue. Medieval custom supports her claim--a wife's place is by her dying husband's side, receiving news and making decisions.

          "Very well," you whisper. "But please, when you see the ship, tell me immediately what color the sail bears."

          She promises, but you cannot read her expression. Have you just placed your life in the hands of someone who has every reason to feel betrayed?`,

          learningPoints: [
            {
              id: 'lp-ch5-4b-inevitability',
              content: 'Even when characters try to avoid disaster, social customs and circumstances trap them. This reinforces the theme of fate versus free will.',
              category: 'thematic-analysis',
            },
          ],
        },
      ],

      learningPoints: [],
    },

    // Scene 5: Narrative - Isolde Receives the Message
    {
      id: 'scene-ch5-5-isolde-receives',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/b151f49c-846d-42ba-b14a-f926ef01b2de/0_0.png',
      image: 'https://cdn.midjourney.com/39b5e5b6-08e5-4229-b0e7-63d1f200a7e5/0_0.png',

      content: `In Cornwall, Isolde the Fair sits in her chamber when a stranger seeks urgent audience. Kaherdin bows before her and holds out a simple gold ring.

      The moment she sees it, Isolde's breath catches. Tristan's ring. The token they exchanged long ago, proof of their enduring bond.

      "He is dying, my lady," Kaherdin says quietly. "Poisoned, as he was when you first healed him in Ireland. No physician in Brittany can cure him. He asks--no, he begs--that you come. You alone can save him."

      Isolde's mind races. To go would mean leaving Cornwall, risking King Mark's wrath, perhaps never returning. To refuse would mean letting Tristan die alone in a foreign land, never seeing him again in this life.

      But in her heart, there is no real choice. There never has been.

      "I will come," she says, her voice steady despite the tears in her eyes. "Prepare your ship. We leave tonight."`,

      learningPoints: [
        {
          id: 'lp-ch5-6-isolde-agency',
          content: 'Isolde makes her choice immediately and decisively. She is not a passive character but an active agent who chooses love over safety and duty.',
          category: 'character-analysis',
        },
        {
          id: 'lp-ch5-6-ring-moment',
          content: "The ring's appearance is a recognition scene--a moment of truth where hidden things are revealed and decisions must be made.",
          category: 'literary-technique',
        },
      ],
    },

    // Scene 6: Dialogue - Isolde's Departure
    {
      id: 'scene-ch5-6-dialogue-departure',
      type: 'dialogue',
      backgroundImage: 'https://cdn.midjourney.com/b151f49c-846d-42ba-b14a-f926ef01b2de/0_0.png',

      character: {
        id: 'brangien',
        name: 'Brangien',
        portrait: 'https://cdn.midjourney.com/7d367bcb-4502-4b86-b52d-495e5cd30b13/0_0.png',
        description: "Isolde's loyal maid who has witnessed the entire tragic love story",
      },

      dialogueTree: {
        id: 'node-1',
        speaker: 'brangien',
        text: 'My lady, if King Mark discovers you have gone to Tristan, he may never forgive this. You could lose everything--your position, your safety, your home.',
        responses: [
          {
            id: 'response-save-him',
            text: 'I know the cost, but I cannot let Tristan die when I might save him',
            nextNodeId: 'node-2',
            learningPoints: [
              {
                id: 'lp-ch5-7-dialogue-devotion',
                content: "Isolde's willingness to risk everything shows her unwavering devotion despite years of separation.",
                category: 'character-analysis',
              },
            ],
          },
          {
            id: 'response-lost-everything',
            text: 'I lost everything that mattered long ago. I will not lose this final chance',
            nextNodeId: 'node-2',
            learningPoints: [
              {
                id: 'lp-ch5-7-dialogue-resigned',
                content: 'Resigned acknowledgment that she lost what truly mattered when separated from Tristan.',
                category: 'character-analysis',
              },
            ],
          },
        ],
        allNodes: [
          {
            id: 'node-1',
            speaker: 'brangien',
            text: 'My lady, if King Mark discovers you have gone to Tristan, he may never forgive this. You could lose everything--your position, your safety, your home.',
            responses: [
              {
                id: 'response-save-him',
                text: 'I know the cost, but I cannot let Tristan die when I might save him',
                nextNodeId: 'node-2',
              },
              {
                id: 'response-lost-everything',
                text: 'I lost everything that mattered long ago. I will not lose this final chance',
                nextNodeId: 'node-2',
              },
            ],
          },
          {
            id: 'node-2',
            speaker: 'brangien',
            text: 'What shall I tell the King when he asks where you have gone?',
            responses: [
              {
                id: 'response-truth',
                text: 'Tell him I have gone to attend a dying friend, which is the truth',
                nextNodeId: 'node-3',
              },
              {
                id: 'response-nothing',
                text: 'Tell him nothing until I return--if I return',
                nextNodeId: 'node-3',
              },
            ],
          },
          {
            id: 'node-3',
            speaker: 'brangien',
            text: 'I wish you had drunk that potion all those years ago, my lady. Then none of this pain would have come to pass.',
            responses: [
              {
                id: 'response-no-regret',
                text: 'I would drink it again, knowing all that came after. I would choose him every time',
              },
              {
                id: 'response-real-love',
                text: 'Perhaps. But the potion only awakened what was already in our hearts',
              },
            ],
          },
        ],
      },

      learningPoints: [
        {
          id: 'lp-ch5-7-potion-reflection',
          content: 'References to the original love potion invite us to reconsider: was their love ever just magic, or did the potion merely catalyze something genuine?',
          category: 'thematic-analysis',
        },
      ],
    },

    // Scene 7: Map Exploration - The Final Voyage
    {
      id: 'scene-ch5-7-map-voyage',
      type: 'map-exploration',
      backgroundImage: 'https://cdn.midjourney.com/c860b157-ba68-4d30-b4c5-e7d4fe169345/0_0.png',
      mapImage: 'https://cdn.midjourney.com/6c10ac41-5e6e-486c-95a2-d56a290fa603/0_0.png',

      prompt: "Follow Isolde's desperate journey from Cornwall to Brittany as she races against time to reach Tristan.",

      locations: [
        {
          id: 'cornwall-departure',
          name: 'Cornwall Harbor',
          x: 25,
          y: 35,
          content: `Under cover of darkness, Kaherdin's ship slips out of Cornwall harbor. Isolde stands at the prow, watching her homeland recede into the night. She has left King Mark, her crown, her safety--everything--for one desperate chance to save Tristan.

The white sail is raised, a banner of hope billowing in the night wind.`,
        },
        {
          id: 'open-sea',
          name: 'The Celtic Sea',
          x: 50,
          y: 50,
          content: `The ship cuts through dark waters, driven by favorable winds and the urgency of love. Isolde does not sleep, does not eat--her entire being is focused on reaching Brittany in time.

Kaherdin marvels at her composure. "You are as brave as any knight I have known," he tells her.

"Love makes us brave," she replies, "and desperate."`,
        },
        {
          id: 'brittany-approach',
          name: 'Brittany Coast in Sight',
          x: 75,
          y: 65,
          content: `Land appears on the horizon. Brittany's coast, and somewhere beyond it, Tristan lying on the edge of death. The crew makes ready to enter the harbor, ensuring the white sail remains prominently visible.

Isolde's heart pounds. After years apart, she will finally see Tristan again. Will she arrive in time? Will her healing knowledge be enough?

The ship sails toward the harbor, its white sail gleaming in the afternoon sun--a message of hope that should save a life.`,
        },
      ],

      learningPoints: [
        {
          id: 'lp-ch5-8-race-against-time',
          content: "The journey across the sea creates suspense through physical distance and time. We feel Isolde racing against Tristan's approaching death.",
          category: 'plot-structure',
        },
      ],
    },

    // Scene 8: Narrative - Isolde of White Hands' Jealousy
    {
      id: 'scene-ch5-8-jealousy',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/bc988edb-d455-47dd-8b27-cfe2568bfb75/0_0.png',
      image: 'https://cdn.midjourney.com/8474e3b9-c390-4792-b510-baf3389d4fc3/0_0.png',

      content: `In Tristan's chamber, Isolde of the White Hands maintains her vigil. Day after day, she tends her dying husband, changing bandages, offering water, watching him slip further from life.

      And day after day, she hears him whisper one name: "Isolde... Isolde..."

      But it is not her name he calls. It has never been her name.

      She thinks of their wedding night, when he could not bring himself to consummate their marriage. She thinks of the distance in his eyes when he looks at her, the way he flinches when she takes his hand. She thinks of all the ways she has been a wife in name only, married to a man whose heart belongs to someone else.

      When she overheard the sail plan--white for the woman he loves, black for death--she felt something harden in her chest. Why should the other Isolde have everything? Why should she arrive and play the hero, healing Tristan and claiming his gratitude, his love, his very life?

      A dark thought takes root: she alone will know what color the sail bears. She alone will tell Tristan. And in that moment of reporting, she will have the power that has eluded her throughout this hollow marriage--the power to determine his fate.`,

      learningPoints: [
        {
          id: 'lp-ch5-9-sympathetic-villain',
          content: 'Isolde of the White Hands is not a simple villain. Her pain is real, her position is impossible, and her jealousy is understandable even if her actions are not.',
          category: 'character-analysis',
        },
        {
          id: 'lp-ch5-9-power-knowledge',
          content: "The theme of knowledge as power appears here. Isolde of the White Hands recognizes that controlling information gives her control over Tristan's fate.",
          category: 'thematic-analysis',
        },
      ],
    },

    // Scene 9: Narrative - The Ship Arrives
    {
      id: 'scene-ch5-9-ship-arrives',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/a0d03e05-9fdb-4144-95d9-360163ebaca1/0_0.png',

      content: `The cry goes up from the harbor: "A ship! A ship approaches!"

      Isolde of the White Hands leaves Tristan's chamber and hurries to the harbor. From the docks, she can see the vessel clearly--Kaherdin's ship, returned from Cornwall.

      And flying from its mast, brilliant in the afternoon sun, is a white sail.

      White. The color of hope, of healing, of salvation. The signal that means Isolde the Fair has come to save Tristan's life.

      For a long moment, Isolde of the White Hands stands frozen, staring at that white sail. She knows what it means. She knows what she should do--run back to Tristan, tell him his love has come, give him hope to cling to while they bring Isolde to his bedside.

      But she also knows what she could do. What no one could prove or disprove. What would keep that other Isolde from playing the rescuer, from succeeding where she has failed, from taking even this final moment from her.

      She could lie.

      Making her decision, Isolde of the White Hands turns and walks slowly back to the castle, back to the sickroom where Tristan waits for news that will mean life or death.`,

      learningPoints: [
        {
          id: 'lp-ch5-10-moment-of-choice',
          content: "This is Isolde of the White Hands' decision point--her free will moment. The tragedy lies in her choice, but also in the circumstances that led her to it.",
          category: 'thematic-analysis',
        },
        {
          id: 'lp-ch5-10-suspense',
          content: 'The narrative slows down at the crucial moment, stretching out the suspense. We see the truth clearly but must wait to learn what she will report.',
          category: 'literary-technique',
        },
      ],
    },

    // Scene 10: Timeline Game - Events Unfolding
    {
      id: 'scene-ch5-10-timeline',
      type: 'timeline-game',
      backgroundImage: 'https://cdn.midjourney.com/bc988edb-d455-47dd-8b27-cfe2568bfb75/0_0.png',

      prompt: 'Order these events as they unfold in the final days:',

      successThreshold: 70,

      timelineEvents: [
        {
          id: 'evt-1',
          title: 'Arrival in Cornwall',
          year: 1160,
          description: "Kaherdin's ship arrives in Cornwall and he seeks audience with Isolde",
        },
        {
          id: 'evt-2',
          title: 'The ring of recognition',
          year: 1160,
          description: "Isolde the Fair recognizes Tristan's ring and learns he is dying",
        },
        {
          id: 'evt-3',
          title: 'Isolde makes her choice',
          year: 1160,
          description: "Isolde decides to go to Brittany despite King Mark's likely opposition",
        },
        {
          id: 'evt-4',
          title: 'Journey of hope begins',
          year: 1160,
          description: 'The return voyage begins with white sail raised for hope',
        },
        {
          id: 'evt-5',
          title: 'Tristan fades',
          year: 1160,
          description: 'In Brittany, Tristan grows weaker, barely clinging to life',
        },
        {
          id: 'evt-6',
          title: 'The white sail appears',
          year: 1160,
          description: 'The ship comes into view of Brittany harbor',
        },
      ],

      learningPoints: [
        {
          id: 'lp-ch5-5-cross-cutting',
          content: 'Cross-cutting between locations (Cornwall and Brittany) creates suspense as we see events converging toward their tragic conclusion.',
          category: 'plot-structure',
        },
      ],
    },

    // Scene 11: Narrative - The Fatal Lie
    {
      id: 'scene-ch5-11-fatal-lie',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/bc988edb-d455-47dd-8b27-cfe2568bfb75/0_0.png',
      image: 'https://cdn.midjourney.com/3386f02f-6616-4252-b79a-b344732537c3/0_0.png',

      content: `Tristan lies in his bed, barely conscious. He has held on this long through sheer force of will, waiting for news, waiting for hope.

      When Isolde of the White Hands enters, he summons his last reserves of strength to speak. "The ship... has it returned? What color is the sail?"

      She stands beside his bed and looks down at him. This man she married, this man who never loved her, this man who even now calls for someone else. One lie. Just one small lie.

      "The sail is black," she says quietly.

      Tristan's eyes close. A sound like a sob escapes him. "Black," he whispers. "Then she has refused to come. She will not save me."

      "I am sorry," Isolde of the White Hands says, and perhaps she means it.

      But Tristan no longer hears. All the hope that kept him alive drains away in an instant. If Isolde will not come, if she has refused him this final time, then there is nothing left to fight for, no reason to cling to life.

      "Isolde," he murmurs one last time--and dies, his heart breaking before his body does.`,

      learningPoints: [
        {
          id: 'lp-ch5-11-tragic-irony',
          content: 'The supreme tragic irony: Tristan dies believing himself abandoned, while Isolde is literally within minutes of reaching him. Truth and perception diverge fatally.',
          category: 'literary-technique',
        },
        {
          id: 'lp-ch5-11-death-by-grief',
          content: 'Tristan dies of grief, not poison. This emphasizes that the wound to his heart, not his body, is what kills him--foreshadowing the Liebestod to come.',
          category: 'symbolism',
        },
      ],
    },

    // Scene 12: Dialogue - Isolde Arrives Too Late
    {
      id: 'scene-ch5-12-dialogue-arrives',
      type: 'dialogue',
      backgroundImage: 'https://cdn.midjourney.com/28b49e78-e049-49ab-aeaf-149d2d381515/0_0.png',
      image: 'https://cdn.midjourney.com/c61b3e5f-786c-4672-979f-d28106354140/0_0.png',

      character: {
        id: 'isolde-fair',
        name: 'Isolde the Fair',
        portrait: 'https://cdn.midjourney.com/7d367bcb-4502-4b86-b52d-495e5cd30b13/0_0.png',
        description: 'The grieving queen who has arrived too late to save the man she loves',
      },

      dialogueTree: {
        id: 'node-1',
        speaker: 'isolde-fair',
        text: 'No... no, Tristan, I came as fast as I could. I came to save you. Wake up. Please wake up.',
        responses: [
          {
            id: 'response-kneel',
            text: '[Kneel beside him, take his hand]',
            nextNodeId: 'node-2',
            learningPoints: [
              {
                id: 'lp-ch5-12-dialogue-grief',
                content: "Isolde's desperate plea to wake him shows the denial phase of grief--refusing to accept reality.",
                category: 'character-analysis',
              },
            ],
          },
        ],
        allNodes: [
          {
            id: 'node-1',
            speaker: 'isolde-fair',
            text: 'No... no, Tristan, I came as fast as I could. I came to save you. Wake up. Please wake up.',
            responses: [
              {
                id: 'response-kneel',
                text: '[Kneel beside him, take his hand]',
                nextNodeId: 'node-2',
              },
            ],
          },
          {
            id: 'node-2',
            speaker: 'kaherdin-witness',
            text: 'My lady, I am so sorry. He died just moments ago. We should have sailed faster, should have--',
            responses: [
              {
                id: 'response-not-fault',
                text: 'You did all you could. It was not your fault',
                nextNodeId: 'node-3',
              },
            ],
          },
          {
            id: 'node-3',
            speaker: 'isolde-fair',
            text: '[To Isolde of the White Hands] You were with him at the end. Did he... did he know I was coming?',
            responses: [
              {
                id: 'response-wait',
                text: '[Wait for her answer]',
                nextNodeId: 'node-4',
              },
            ],
          },
          {
            id: 'node-4',
            speaker: 'isolde-white-hands-guilt',
            text: '[Quietly] He asked about the sail. I told him what I saw.',
            responses: [
              {
                id: 'response-did-he-know',
                text: 'Then he knew I was here? He knew I came for him?',
              },
            ],
          },
        ],
      },

      learningPoints: [
        {
          id: 'lp-ch5-12-dramatic-timing',
          content: 'The "too late" arrival is a classic tragic device. The timing is cruelly precise--minutes separate reunion from disaster.',
          category: 'plot-structure',
        },
        {
          id: 'lp-ch5-12-silence',
          content: 'Isolde of the White Hands\' ambiguous response ("I told him what I saw") is technically true but completely misleading--language can deceive without lying.',
          category: 'character-analysis',
        },
      ],
    },

    // Scene 13: Narrative - Liebestod
    {
      id: 'scene-ch5-13-liebestod',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/28b49e78-e049-49ab-aeaf-149d2d381515/0_0.png',
      image: 'https://cdn.midjourney.com/fc48da6b-ff9e-4be1-abd3-af8e04b98983/0_0.png',

      content: `Isolde the Fair does not weep. She does not cry out. Instead, she lies down beside Tristan on the bed, taking his cold hand in hers.

      "All these years," she whispers, "we were kept apart by duty, by honor, by the demands of others. I was queen to a king I did not love. You were husband to a woman you could not love. We stole moments in gardens, in forests, in secret meetings that could never be enough.

      But no one can separate us now."

      She pulls his hand to her heart. "In life, we could not be together. But in death, no force on earth can keep us apart."

      Kaherdin starts forward, realizing what she intends, but it is already too late. Isolde closes her eyes, and with an act of pure will, she follows Tristan into death. Not through poison or violence, but through grief so absolute that her body simply surrenders.

      She dies with her hand in his, a peaceful smile on her face, released at last from years of impossible love and separation.

      This is the Liebestod--the love-death. The final union that not even death can deny.`,

      learningPoints: [
        {
          id: 'lp-ch5-13-liebestod-motif',
          content: "The Liebestod (German for 'love-death') is a romantic motif where love is consummated in death. Wagner's opera made this famous, but the concept originates here in medieval romance.",
          category: 'literary-technique',
        },
        {
          id: 'lp-ch5-13-agency-in-death',
          content: 'Isolde chooses death deliberately, asserting agency one final time. In death, she takes what life denied her--eternal union with Tristan.',
          category: 'character-analysis',
        },
        {
          id: 'lp-ch5-13-transcendence',
          content: "The lovers' death is portrayed as beautiful and transcendent, not tragic--suggesting that true love can conquer even mortality.",
          category: 'thematic-analysis',
        },
      ],
    },

    // Scene 14: Primary Source - Different Versions
    {
      id: 'scene-ch5-14-primary-source',
      type: 'primary-source',
      backgroundImage: 'https://cdn.midjourney.com/f7898601-2fd3-4444-94d0-22773187e731/0_0.png',

      prompt: "Compare how different medieval versions describe the story's conclusion:",
      source: {
        type: 'text',
        title: 'Three Medieval Versions of the Tristan Legend',
        date: '12th-13th century',
        content: `From Béroul's Version (12th century):

"When Isolde learned that Tristan was dead, she died of grief beside him. King Mark had them buried in Cornwall, one on each side of a chapel. From Tristan's grave grew a beautiful rosebush, and from Isolde's a vine. The two plants grew toward each other, intertwining above the chapel so completely that no one could separate them. Three times King Mark had them cut down, and three times they grew back, ever more tightly entwined."

From Thomas's Version (12th century):

"Isolde came and found her love dead. She lay beside him and died of grief, for her heart could not bear to live without him. The King was moved to pity and had them buried together in a single tomb, for in death they achieved the union that life denied them."

From Gottfried's Version (13th century):

"Their love was so pure and true that death could not conquer it. Those who heard their story learned that love is stronger than all earthly laws, more powerful than duty or honor, and survives beyond the grave. They live forever in the hearts of all who love truly."`,
      },

      questions: [
        {
          id: 'q1',
          question: 'What do all three versions agree on?',
          type: 'multiple-choice',
          options: [
            'Isolde dies of grief after finding Tristan dead',
            'King Mark buries them together in the same tomb',
            'Plants grow from their graves and intertwine above them',
            'Their story teaches that love is stronger than all earthly laws',
          ],
          correctAnswer: 'Isolde dies of grief after finding Tristan dead',
          explanation: 'Despite variations in burial details and symbolism, all versions agree on the central fact: Isolde dies of grief upon finding Tristan dead, unable to live without him.',
        },
        {
          id: 'q2',
          question: "What does Béroul's version emphasize with the rose and vine imagery?",
          type: 'multiple-choice',
          options: [
            'Their love cannot be separated, even by death and despite attempts to keep them apart',
            'The beauty of the natural world reflects the beauty of true love',
            'King Mark finally accepts their love and tends the plants himself',
            'The chapel is blessed by a miracle that proves their love was holy',
          ],
          correctAnswer: 'Their love cannot be separated, even by death and despite attempts to keep them apart',
          explanation: 'The plants growing back after being cut down three times symbolizes that their love is eternal and indestructible, impossible to separate even through deliberate effort.',
        },
        {
          id: 'q3',
          question: "How does Gottfried's version differ from the others in focus?",
          type: 'multiple-choice',
          options: [
            'It focuses on the moral lesson and universal meaning rather than burial details',
            'It describes King Mark as cruel and vindictive rather than merciful',
            'It adds new characters who witness the burial and spread the story',
            'It includes supernatural events like angels appearing at their graves',
          ],
          correctAnswer: 'It focuses on the moral lesson and universal meaning rather than burial details',
          explanation: 'Gottfried emphasizes the philosophical and didactic aspects - what the story teaches about love\'s power - rather than the physical details of burial and miraculous plants.',
        },
      ],

      learningPoints: [
        {
          id: 'lp-ch5-14-textual-variants',
          content: 'Medieval stories existed in multiple versions, each emphasizing different aspects--romantic, moral, symbolic. There is no single "true" version.',
          category: 'historical-context',
        },
        {
          id: 'lp-ch5-14-rose-vine-symbol',
          content: 'The rose and vine symbolize eternal union. Their intertwining above the graves makes the spiritual connection physical and visible--love made manifest.',
          category: 'symbolism',
        },
      ],
    },

    // Scene 15: Narrative - Epilogue
    {
      id: 'scene-ch5-15-epilogue',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/f7898601-2fd3-4444-94d0-22773187e731/0_0.png',
      image: 'https://cdn.midjourney.com/327c6d70-6093-439e-839c-2cf13c273f23/0_0.png',

      content: `When news reached Cornwall of the lovers' death, King Mark wept. Despite everything--the betrayal, the lies, the years of pain--he had loved them both. Tristan had been like a son to him. Isolde had been his queen.

      Mark ordered their bodies brought home to Cornwall and buried with honor. He placed their graves side by side in the castle cemetery, beneath the sky they had both loved.

      And as the legends tell, a miracle occurred. From Tristan's grave grew a thornless rose bush, its blooms the color of blood and passion. From Isolde's grave grew a vine with white flowers, pure as her name. The two plants grew toward each other, their branches intertwining above the graves in an embrace that no force could break.

      Three times, it is said, King Mark ordered the plants cut down--perhaps unable to bear this reminder of a love that exceeded his own. Three times they grew back, ever more tightly entwined, until finally he understood: some loves cannot be severed by any earthly power.

      He let them grow.

      The story of Tristan and Isolde spread throughout the Celtic lands, across Europe, through the centuries. Poets sang of them, lovers invoked them, and their names became synonymous with a love so powerful that not even death could defeat it.

      They had paid a terrible price--years of separation, hearts divided between duty and desire, a tragic end that came too soon. But in dying, they achieved what life denied them: eternal union, remembered always, their love preserved forever in story and song.

      The rose and the vine still grow there, legend says, intertwined above the graves in Cornwall, where the Celtic sea crashes against ancient cliffs and the wind carries whispers of a love that would not die.`,

      learningPoints: [
        {
          id: 'lp-ch5-15-mark-forgiveness',
          content: "King Mark's final acceptance and grief add depth to his character. He is not a villain but another victim of the tragic circumstances, capable of love and forgiveness.",
          category: 'character-analysis',
        },
        {
          id: 'lp-ch5-15-legendary-status',
          content: "The story's fame and retelling across centuries is acknowledged within the narrative itself--making the lovers' immortality through legend part of the story's meaning.",
          category: 'thematic-analysis',
        },
        {
          id: 'lp-ch5-15-bittersweet',
          content: 'The ending is both tragic (they died too young, separated) and triumphant (their love endured, they found union). This bittersweet duality is the essence of romance.',
          category: 'literary-technique',
        },
      ],

      events: {
        onExit: [
          {
            type: 'quiz',
            componentId: 'quiz-chapter-5-tristan-isolde',
            condition: { type: 'if-not-completed' },
          },
        ],
      },
    },
  ],

  endQuiz: chapter5Quiz,
};

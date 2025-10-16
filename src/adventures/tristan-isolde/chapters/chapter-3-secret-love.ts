import type { Chapter } from '../../../types';
import { chapter3Quiz } from '../quizzes/chapter-3-quiz';

/**
 * Chapter 3: Secret Love and Discovery
 *
 * The lovers must navigate the dangerous world of court intrigue while
 * hiding their forbidden passion. Discovery, condemnation, dramatic escape,
 * and exile in the Forest of Morois culminate in King Mark's discovery
 * with the sword placed between them.
 */

export const chapter3: Chapter = {
  id: 'chapter-3-tristan-isolde',
  title: 'Chapter 3: Secret Love and Discovery',
  description:
    'Tristan and Isolde struggle to hide their forbidden love at court, but suspicion grows. ' +
    'Discovery leads to condemnation and a desperate flight to the wilderness, where nature ' +
    'becomes both sanctuary and test.',

  learningObjectives: [
    'Analyze the structure of forbidden romance in medieval literature',
    'Understand the role of secrecy and deception in courtly love',
    'Recognize the function of obstacles and near-discoveries in building tension',
    'Explore the symbolism of nature and meeting places in romance literature',
  ],

  scenes: [
    // Scene 1: Life at Court - Hidden Passion
    {
      id: 'scene-ch3-1-court-life',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/32c4878c-826e-43c3-8881-c1669107cc92/0_0.png',

      content: `Life at King Mark's court has settled into a dangerous routine. Isolde sits at the high table as queen, wearing her crown and royal robes, every inch the proper consort. Tristan stands among the king's closest knights, his face a mask of loyalty and duty.

      But beneath the surface, a fire burns that the love potion kindled and cannot extinguish. Every glance between them carries the weight of unspoken words. Every formal conversation masks desperate longing. The court sees a devoted queen and a loyal nephew--they do not see the lovers dying by inches, separated by mere feet yet unable to touch.

      At night, Isolde lies in the royal chamber, Mark sleeping peacefully beside her. She stares at the ceiling, her heart across the corridor in Tristan's chamber, where he too lies sleepless, tormented by proximity and impossibility.

      They are careful--so careful. But love this powerful cannot remain hidden forever.`,

      learningPoints: [
        {
          id: 'lp-ch3-1-courtly-love',
          content:
            'Courtly love often involved secret passion hidden behind formal courtesy. The contrast between public duty and private desire created dramatic tension.',
          category: 'cultural-context',
        },
        {
          id: 'lp-ch3-1-dramatic-irony',
          content:
            "Dramatic irony occurs when the audience knows the truth while other characters do not. The court's ignorance of the affair creates suspense.",
          category: 'literary-technique',
        },
      ],
    },

    // Scene 2: First Secret Meeting - Garden Dialogue
    {
      id: 'scene-ch3-2-garden-meeting',
      type: 'dialogue',
      backgroundImage: 'https://cdn.midjourney.com/e7c6493c-dd63-422c-8953-7736ae115410/0_0.png',
      image: 'https://cdn.midjourney.com/fa9c1668-f654-44b9-9aa6-7aee4ac31af6/0_0.png',

      character: {
        id: 'tristan',
        name: 'Tristan',
        portrait: 'https://cdn.midjourney.com/ea2ee67c-ecf5-4705-b641-da5d65507ec9/0_0.png',
        description: 'The conflicted knight torn between loyalty to his uncle and forbidden love for Isolde',
      },

      dialogueTree: {
        id: 'node-1',
        speaker: 'tristan',
        text: 'We should not be here. If we are discovered--',
        responses: [
          {
            id: 'response-risk-everything',
            text: 'I know the danger. But I would risk everything for these moments.',
            nextNodeId: 'node-2',
            learningPoints: [
              {
                id: 'lp-ch3-2-dialogue-passion',
                content: 'Passionate declarations reveal the depth of commitment despite the forbidden nature of their love.',
                category: 'character-analysis',
              },
            ],
          },
          {
            id: 'response-cannot-live',
            text: 'The risk is worth it. I cannot live without seeing you.',
            nextNodeId: 'node-2',
            learningPoints: [
              {
                id: 'lp-ch3-2-dialogue-need',
                content: 'Honest expressions of need show how the lovers depend on these stolen moments for survival.',
                category: 'character-analysis',
              },
            ],
          },
        ],
        allNodes: [
          {
            id: 'node-1',
            speaker: 'tristan',
            text: 'We should not be here. If we are discovered--',
            responses: [
              {
                id: 'response-risk-everything',
                text: 'I know the danger. But I would risk everything for these moments.',
                nextNodeId: 'node-2',
              },
              {
                id: 'response-cannot-live',
                text: 'The risk is worth it. I cannot live without seeing you.',
                nextNodeId: 'node-2',
              },
            ],
          },
          {
            id: 'node-2',
            speaker: 'isolde',
            text: 'I am queen to your uncle, the man who raised you as a son. We have betrayed the most generous of men. Does this not tear at your heart as it tears at mine?',
            responses: [
              {
                id: 'response-torn-apart',
                text: 'It destroys me. I love Mark--yet I love you more. I am torn apart.',
                nextNodeId: 'node-3',
              },
              {
                id: 'response-potion',
                text: 'We did not choose this. The potion bound us against our will.',
                nextNodeId: 'node-3',
              },
            ],
          },
          {
            id: 'node-3',
            speaker: 'tristan',
            text: 'We must be more careful than ever. There are those at court who watch us with suspicious eyes. The dwarf Frocin especially--he is cunning and observant.',
            responses: [
              {
                id: 'response-caution',
                text: 'Then we meet rarely, and only with the greatest caution.',
                nextNodeId: null,
              },
              {
                id: 'response-defiant',
                text: 'Let them watch. I will not give up these moments, no matter the cost.',
                nextNodeId: null,
              },
            ],
          },
        ],
      },

      learningPoints: [
        {
          id: 'lp-ch3-2-moral-complexity',
          content:
            'Medieval romances often featured morally complex situations where no choice is purely right. Tristan and Isolde feel genuine guilt alongside genuine love.',
          category: 'thematic-analysis',
        },
        {
          id: 'lp-ch3-2-obstacles',
          content:
            'Obstacles in romance create narrative tension. The forbidden nature of their love makes it more intense but also more tragic.',
          category: 'plot-structure',
        },
      ],
    },

    // Scene 3: The Dwarf's Suspicion - Decision Point
    {
      id: 'scene-ch3-3-dwarf-suspicion',
      type: 'decision',
      backgroundImage: 'https://cdn.midjourney.com/e7c6493c-dd63-422c-8953-7736ae115410/0_0.png',

      prompt: 'How should the lovers respond to growing suspicion?',
      context: `Frocin the dwarf is a cunning advisor to King Mark, skilled in astronomy and observation. He has begun to notice things: how Tristan"s eyes follow the queen, how Isolde's voice changes when Tristan enters a room, how they seem always aware of each other's presence.

      One evening, Frocin approaches King Mark with careful words: "My lord, I would not trouble you with idle gossip, but have you noticed how Sir Tristan and the Queen seem... particularly friendly?"

      Mark bristles at the suggestion. "Tristan is my nephew, the most loyal knight in Cornwall. And Isolde is an honorable queen. I will hear no more of this, Frocin."

      But the seed of doubt has been planted. Frocin begins watching more carefully, and the lovers sense the scrutiny.`,

      choices: [
        {
          id: 'choice-distance',
          text: 'Avoid each other completely in public to allay suspicion',
          consequence: `For weeks, Tristan and Isolde maintain careful distance. They barely speak in public, avoid looking at each other, seem almost cold. The court murmurs about a falling-out between the queen and the king's nephew.

          Frocin watches but sees nothing amiss. His suspicions begin to fade--perhaps he imagined the attraction.

          But the separation torments the lovers. Unable to meet even briefly, they suffer terribly. Isolde grows pale and listless. Tristan becomes withdrawn and melancholy.

          King Mark notices his wife's unhappiness and tries to cheer her, never guessing the true cause. The irony cuts deep: she suffers from being parted from Tristan, while Mark thinks she simply needs more attention from him.`,

          learningPoints: [
            {
              id: 'lp-ch3-3a-sacrifice',
              content:
                'The lovers sacrifice their own happiness attempting to preserve their secret. This self-denial shows the cost of forbidden love.',
              category: 'character-analysis',
            },
          ],
        },
        {
          id: 'choice-careful-meetings',
          text: 'Continue meeting but with extreme caution and planning',
          consequence: `The lovers decide that complete separation is unbearable. Instead, they devise elaborate precautions for their meetings.

          They use Brangaine, Isolde"s loyal maid who knows their secret, as a messenger and lookout. They meet only when certain conditions are safe. They develop codes and signals--a particular song played on Tristan's harp means the garden is watched; a certain arrangement of flowers in Isolde's chamber means she can receive no visitor.

          The intrigue becomes a dangerous game. Every meeting is planned like a military campaign. They leave no trace, take no chances they can avoid.

          But Frocin is patient and clever. He continues watching, waiting for them to make a mistake. It is only a matter of time.`,

          learningPoints: [
            {
              id: 'lp-ch3-3b-intrigue',
              content:
                'Medieval court intrigue often involved elaborate deception and counter-deception. Secret messages and signals were common in romance literature.',
              category: 'cultural-context',
            },
          ],
        },
      ],

      learningPoints: [],
    },

    // Scene 4: The Flour Trap
    {
      id: 'scene-ch3-4-flour-trap',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/32c4878c-826e-43c3-8881-c1669107cc92/0_0.png',
      image: 'https://cdn.midjourney.com/f85ba9ab-a97e-4c98-8fee-38d3ed02dcca/0_0.png',

      content: `Frocin's patience yields a sinister plan. He convinces King Mark to test his nephew and wife with a trap so clever it seems foolproof.

      Tristan's chamber is across a corridor from the royal bedchamber. The distance is short but visible--no one could cross it unseen. However, Frocin notes that Tristan sleeps with his door ajar, and sometimes wakes in the night to pace the corridor.

      "My lord," Frocin whispers to Mark, "let me spread fine flour upon the floor between the chambers. If anyone crosses in the night, their footprints will reveal the truth. If your nephew and wife are innocent, the flour will remain undisturbed."

      Mark reluctantly agrees, desperate to prove his suspicions wrong.

      That very night, Tristan, restless and tormented by Isolde's proximity, wakes and sees moonlight on the corridor floor. Something makes him pause--the floor looks strange, too white, too even. Understanding floods through him: a trap.

      He dares not cross. He lies back down, frustrated but safe. The flour remains untouched.

      But Frocin is not finished. The next night, he whispers to Mark: "The queen was recently injured by a thorn and has a small wound on her foot. Watch whether it bleeds in the night, which would suggest she walked despite the pain."`,

      learningPoints: [
        {
          id: 'lp-ch3-4-tests',
          content:
            'Medieval literature often featured tests and trials of virtue. The flour trap represents the detective-like elements sometimes found in romance narratives.',
          category: 'plot-structure',
        },
        {
          id: 'lp-ch3-4-paranoia',
          content:
            'The increasing surveillance creates a claustrophobic atmosphere. The lovers are hunted within the very castle that should be their home.',
          category: 'thematic-analysis',
        },
      ],
    },

    // Scene 5: Tristan's Desperate Leap
    {
      id: 'scene-ch3-5-desperate-leap',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/32c4878c-826e-43c3-8881-c1669107cc92/0_0.png',

      content: `Unable to bear another night of separation, Tristan makes a reckless decision. Late at night, when the moon has set and darkness covers the castle, he decides to cross to Isolde's chamber--not by the corridor, but by leaping from his window across the gap to hers.

      It is a desperate, dangerous act. The distance is considerable, and below lies a courtyard of stone. One slip means death. But love has made him reckless.

      He makes the leap successfully and climbs through Isolde's window. They have precious hours together while Mark, exhausted from weeks of surveillance, sleeps deeply.

      But Tristan has one wound that never fully healed--an old injury to his leg, reopened by the strain of the leap. It bleeds onto Isolde's chamber floor.

      As dawn approaches, Tristan must return. He leaps back across the gap, landing hard in his own chamber. But the damage is done.

      In the morning, Brangaine discovers the blood. She wakes Isolde in terror, but it is too late to clean all traces. When King Mark enters his wife's chamber, he sees the blood on the floor.

      The trap has sprung. Not through Frocin's cleverness, but through love's own recklessness.`,

      learningPoints: [
        {
          id: 'lp-ch3-5-recklessness',
          content:
            "Passion overcoming reason is a key element in tragic romance. Tristan's leap is both heroic and foolish--love makes people take impossible risks.",
          category: 'character-analysis',
        },
        {
          id: 'lp-ch3-5-blood-symbol',
          content:
            "Blood often symbolizes both passion and guilt in medieval literature. Tristan's blood betrays the lovers just as their hearts betrayed Mark.",
          category: 'literary-technique',
        },
      ],
    },

    // Scene 6: Cause-Effect - Suspicions and Evidence
    {
      id: 'scene-ch3-6-cause-effect',
      type: 'cause-effect',
      backgroundImage: 'https://cdn.midjourney.com/32c4878c-826e-43c3-8881-c1669107cc92/0_0.png',

      prompt: "Match the courtiers' suspicions to the evidence they observed:",

      pairs: [
        {
          id: 'pair-1-awareness',
          cause: "Frocin noticed Tristan and Isolde always aware of each other's presence",
          effect: 'He suspected an unnatural connection between them',
          explanation: "Frocin's keen observations revealed the lovers' unconscious awareness of each other, a tell-tale sign of their deep emotional bond.",
        },
        {
          id: 'pair-2-flour',
          cause: 'The flour remained undisturbed across the corridor',
          effect: "This seemed to prove their innocence and allay Mark's fears",
          explanation: "Tristan's caution in avoiding the flour trap temporarily cleared their names, though it only delayed the inevitable discovery.",
        },
        {
          id: 'pair-3-bleeding',
          cause: "Isolde's injured foot bled during the night",
          effect: 'This suggested she had been walking when she should have been resting',
          explanation: "This physical evidence contradicted the flour trap's 'proof,' reigniting suspicions and showing how one small detail can undo careful planning.",
        },
        {
          id: 'pair-4-knowledge',
          cause: 'Tristan seemed to know about the flour trap without being told',
          effect: 'This implied either magical awareness or a warning from a conspirator',
          explanation: "Tristan's avoidance of the trap, while smart, was too perfect--it suggested someone had warned him, pointing to a conspiracy at court.",
        },
      ],

      learningPoints: [
        {
          id: 'lp-ch3-6-evidence',
          content:
            'The accumulation of small pieces of evidence creates a web of suspicion. Medieval courts were places of constant observation and judgment.',
          category: 'historical-context',
        },
        {
          id: 'lp-ch3-6-inevitability',
          content:
            'No matter how careful the lovers are, discovery becomes inevitable. This creates tragic tension--we know they cannot hide forever.',
          category: 'plot-structure',
        },
      ],
    },

    // Scene 7: King Mark Confronts the Evidence - Dialogue
    {
      id: 'scene-ch3-7-mark-confronts',
      type: 'dialogue',
      backgroundImage: 'https://cdn.midjourney.com/32c4878c-826e-43c3-8881-c1669107cc92/0_0.png',

      character: {
        id: 'king-mark',
        name: 'King Mark',
        portrait: 'https://cdn.midjourney.com/b1d403f7-0456-42d2-bf24-7c39a6daebdd/0_0.png',
        description: 'The betrayed king torn between his love for his nephew and wife, and his duty to justice',
      },

      dialogueTree: {
        id: 'node-1',
        speaker: 'king-mark',
        text: 'Blood in your chamber, wife. And my nephew has a fresh wound that matches. What am I to believe?',
        responses: [
          {
            id: 'response-explain',
            text: 'I can explain, my lord. The truth is not what it appears.',
            nextNodeId: 'node-2',
            learningPoints: [
              {
                id: 'lp-ch3-7-dialogue-weak-defense',
                content: 'Weak defenses in the face of clear evidence highlight the impossible situation the lovers face.',
                category: 'character-analysis',
              },
            ],
          },
          {
            id: 'response-defiant',
            text: 'Believe what you will. I cannot change what you have decided.',
            nextNodeId: 'node-2',
            learningPoints: [
              {
                id: 'lp-ch3-7-dialogue-defiance',
                content: 'Defiance born of desperation shows how trapped the lovers are with no viable defense.',
                category: 'character-analysis',
              },
            ],
          },
        ],
        allNodes: [
          {
            id: 'node-1',
            speaker: 'king-mark',
            text: 'Blood in your chamber, wife. And my nephew has a fresh wound that matches. What am I to believe?',
            responses: [
              {
                id: 'response-explain',
                text: 'I can explain, my lord. The truth is not what it appears.',
                nextNodeId: 'node-2',
              },
              {
                id: 'response-defiant',
                text: 'Believe what you will. I cannot change what you have decided.',
                nextNodeId: 'node-2',
              },
            ],
          },
          {
            id: 'node-2',
            speaker: 'king-mark',
            text: 'I raised Tristan as my own son. I trusted him above all others. And you, Isolde--I married you with joy, thinking to find companionship in my later years. How have you repaid this trust?',
            responses: [
              {
                id: 'response-potion-excuse',
                text: 'My lord, we never wanted to hurt you. The love potion--',
                nextNodeId: 'node-3',
              },
              {
                id: 'response-honest',
                text: 'You have been kind, and we have been cruel. There is no defense for what we have done.',
                nextNodeId: 'node-3',
              },
            ],
          },
          {
            id: 'node-3',
            speaker: 'king-mark',
            text: 'I am a king. I cannot overlook this, no matter what my heart desires. The court demands justice. You both will be tried and, if found guilty, punished according to the law.',
            responses: [
              {
                id: 'response-accept',
                text: 'Then do what you must. We accept the consequences of our love.',
                nextNodeId: null,
              },
              {
                id: 'response-mercy',
                text: 'Please, Mark, remember the love you bore us. Show mercy.',
                nextNodeId: null,
              },
            ],
          },
        ],
      },

      learningPoints: [
        {
          id: 'lp-ch3-7-mark-complexity',
          content:
            'King Mark is not a villain but a victim. Medieval romance often portrayed the wronged husband as a complex, sympathetic figure torn between love and duty.',
          category: 'character-analysis',
        },
        {
          id: 'lp-ch3-7-public-private',
          content:
            'Medieval rulers faced the conflict between private feelings and public duty. Mark must punish them to maintain his authority, even if it breaks his heart.',
          category: 'historical-context',
        },
      ],
    },

    // Scene 8: Trial and Condemnation - Decision
    {
      id: 'scene-ch3-8-trial-decision',
      type: 'decision',
      backgroundImage: 'https://cdn.midjourney.com/20e6e3af-e761-4d84-9f51-b199db5c83b2/0_0.png',

      prompt: 'What should Tristan do when faced with trial?',
      context: `The court is assembled. Frocin and the hostile barons demand the harshest punishment. Some sympathetic knights plead for mercy, but they are outnumbered.

      King Mark, though personally anguished, has allowed the trial to proceed. He sits on his throne, looking older than his years, silent.

      Tristan and Isolde stand accused of treason through adultery. The punishment, if they are found guilty, is death.

      Tristan must choose: face the judgment, or attempt to escape while he still can.`,

      choices: [
        {
          id: 'choice-face-trial',
          text: 'Face the trial with dignity and accept the judgment',
          consequence: `Tristan stands tall before the court. "I will face any ordeal you demand," he says. "I will not flee like a coward."

          The barons demand trial by combat--let God decide the truth. Tristan is one of the finest knights in the realm, but they will pit him against three champions simultaneously, ensuring his defeat.

          Before the trial can begin, however, Isolde intervenes. "If my lord Tristan must die, then I die with him. We face judgment together."

          Her words move even the hardest hearts. Some knights begin to question whether justice should be so harsh.

          But Frocin and the hostile barons press forward. The trial is set for dawn. Tristan and Isolde are imprisoned separately to await their fate.

          That night, as they wait in their cells, they each resolve that if they must die, they will die bravely, as befits their love and their honor.`,

          learningPoints: [
            {
              id: 'lp-ch3-8a-honor',
              content:
                'Facing judgment rather than fleeing demonstrates knightly honor, even when the cause is unjust. Medieval culture valued courage in facing consequences.',
              category: 'cultural-context',
            },
          ],
        },
        {
          id: 'choice-attempt-escape',
          text: 'Try to escape before judgment can be passed',
          consequence: `Tristan looks around the hall and realizes the trial is a farce--the verdict is already decided, and mercy will not be granted. He cannot let Isolde die for their love.

          "Forgive me, uncle," Tristan says, and suddenly moves. With the speed and skill that made him Cornwall's champion, he seizes a sword from a guard and fights his way to Isolde.

          The court erupts in chaos. Knights rush forward to stop him, but Tristan is formidable. He reaches Isolde and cuts her bonds.

          "Will you come with me?" he asks. "Into exile, with nothing but each other?"

          "Anywhere," she answers. "Always."

          They fight their way out of the hall, Tristan holding off multiple attackers while Isolde runs ahead. The escape is desperate, violent, and exhilarating.

          But they are not free yet. The entire kingdom will be hunting them. They must flee to the one place where royal authority cannot reach: the wild Forest of Morois.`,

          learningPoints: [
            {
              id: 'lp-ch3-8b-action',
              content:
                'The dramatic escape adds action and urgency to the romance. Medieval literature often mixed courtly love with adventure and combat.',
              category: 'literary-technique',
            },
          ],
        },
      ],

      learningPoints: [],
    },

    // Scene 9: Condemnation and Sentence
    {
      id: 'scene-ch3-9-condemnation',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/20e6e3af-e761-4d84-9f51-b199db5c83b2/0_0.png',

      content: `The verdict is pronounced: guilty of treason. The sentence: death by burning for Queen Isolde, and execution by beheading for Sir Tristan.

      But before the sentence can be carried out, King Mark's barons suggest something even crueler. "Give the queen to the lepers who live outside the city walls," one suggests. "A fate worse than death, and one that will serve as a warning to others who might betray their lord."

      Mark, in his anguish and anger, agrees. Isolde will be handed over to the leper colony--a terrible fate, as lepers were outcasts, their disease considered both curse and punishment.

      As for Tristan, he is to be led to the execution site the next morning. But that night, as he is transferred between prisons, he is taken through the castle chapel so he might make his confession and final prayers.

      The chapel sits on a high cliff overlooking the sea. Inside, Tristan looks out the window at the sheer drop below. Sharp rocks jut from the surf far below. No one could survive such a fall--or could they?

      His guards stand at the chapel door, confident. What condemned man would leap to certain death?

      But Tristan is not ready to die. And he cannot let Isolde suffer her terrible fate.

      He remembers a story from his youth--a man who dove from these very cliffs and, by God's grace or sheer luck, survived. The window is narrow, the rocks below deadly. But it is a chance.

      Tristan says a prayer--not for forgiveness, but for success. And then he leaps.`,

      learningPoints: [
        {
          id: 'lp-ch3-9-leper-punishment',
          content:
            'In medieval society, leprosy was seen as both a disease and a moral judgment. Being given to lepers was considered a fate worse than death.',
          category: 'historical-context',
        },
        {
          id: 'lp-ch3-9-chapel-symbolism',
          content:
            "The chapel represents Tristan's last moment of sanctity before he chooses love over salvation. His prayer and leap are both sacred and profane acts.",
          category: 'literary-technique',
        },
      ],
    },

    // Scene 10: The Leap from the Chapel
    {
      id: 'scene-ch3-10-chapel-leap',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/e513c783-5845-457f-8560-2552e03b3d36/0_0.png',
      image: 'https://cdn.midjourney.com/74fd85e8-9d1b-455f-a925-1aa9651da8f7/0_0.png',

      content: `Tristan hurls himself through the chapel window. For a moment, he hangs in the air, the sea wind rushing past him, the rocks reaching up like teeth.

      He twists his body, trying to aim for the one spot where deep water meets the cliff--the only place survival is possible. Time seems to slow. He thinks of Isolde, and what will happen to her if he dies.

      He strikes the water hard, the impact driving the air from his lungs. The cold sea engulfs him, and for terrible moments he cannot tell up from down. His wounded leg screams in agony.

      But he surfaces, gasping, alive. The current is strong, pulling him away from the rocks. He swims with desperate strength, making for the shoreline.

      Above, his guards stare down in amazement. Some cross themselves--surely this is a miracle, or the devil's work. But Tristan is already too far away to recapture. The alarm is raised, but he has a lead.

      Soaking, injured, but free, Tristan drags himself onto a rocky beach. He has no weapons, no horse, no allies. But he is alive, and Isolde still needs him.

      He knows where they are taking her--to the leper colony on the edge of the forest. He has until nightfall to reach her. It is just enough time.`,

      learningPoints: [
        {
          id: 'lp-ch3-10-heroic-feat',
          content:
            "The impossible leap demonstrates Tristan's heroic nature. Medieval heroes often accomplished seemingly supernatural feats through courage and desperation.",
          category: 'character-analysis',
        },
        {
          id: 'lp-ch3-10-survival',
          content:
            "Tristan's survival can be read as divine favor, luck, or skill--the ambiguity reflects medieval uncertainty about fate versus agency.",
          category: 'thematic-analysis',
        },
      ],
    },

    // Scene 11: Rescue from the Lepers - Dialogue
    {
      id: 'scene-ch3-11-rescue-lepers',
      type: 'dialogue',
      backgroundImage: 'https://cdn.midjourney.com/5436df27-3d90-4cc5-82df-96a69298fd53/0_0.png',
      image: 'https://cdn.midjourney.com/46b3961c-e024-4cef-b289-ebfd06c5cb9d/0_0.png',

      character: {
        id: 'tristan-rescuer',
        name: 'Tristan',
        portrait: 'https://cdn.midjourney.com/ea2ee67c-ecf5-4705-b641-da5d65507ec9/0_0.png',
        description: 'The heroic knight arriving to rescue Isolde from a terrible fate',
      },

      dialogueTree: {
        id: 'node-1',
        speaker: 'tristan-rescuer',
        text: 'Release her. I will fight every one of you if I must.',
        responses: [
          {
            id: 'response-joy',
            text: "Tristan! You're alive! I thought you dead!",
            nextNodeId: 'node-2',
            learningPoints: [
              {
                id: 'lp-ch3-11-dialogue-reunion',
                content: 'The joyful reunion after near-death emphasizes the strength of their bond and relief at survival.',
                category: 'character-analysis',
              },
            ],
          },
          {
            id: 'response-fear',
            text: 'You should not have come. Now they will kill you too.',
            nextNodeId: 'node-2',
            learningPoints: [
              {
                id: 'lp-ch3-11-dialogue-selfless',
                content: 'Isolde fears for Tristan even in her own dire circumstances, showing selfless love.',
                category: 'character-analysis',
              },
            ],
          },
        ],
        allNodes: [
          {
            id: 'node-1',
            speaker: 'tristan-rescuer',
            text: 'Release her. I will fight every one of you if I must.',
            responses: [
              {
                id: 'response-joy',
                text: "Tristan! You're alive! I thought you dead!",
                nextNodeId: 'node-2',
              },
              {
                id: 'response-fear',
                text: 'You should not have come. Now they will kill you too.',
                nextNodeId: 'node-2',
              },
            ],
          },
          {
            id: 'node-2',
            speaker: 'isolde-rescued',
            text: 'What do we do now? We cannot return to Cornwall. We are condemned, hunted. Where can we go?',
            responses: [
              {
                id: 'response-forest-plan',
                text: 'We go into the forest. We will live as exiles, but we will live together.',
                nextNodeId: 'node-3',
              },
              {
                id: 'response-together',
                text: "I don't know. But wherever we go, we go together. That is enough.",
                nextNodeId: 'node-3',
              },
            ],
          },
          {
            id: 'node-3',
            speaker: 'tristan-rescuer',
            text: "The Forest of Morois is vast and wild. No king's men will find us there. We will have nothing--no comfort, no luxury--but we will have each other. Can you bear such a life?",
            responses: [
              {
                id: 'response-embrace-exile',
                text: 'I was a princess who became a queen. Now I will be a forest exile. For you, I embrace it.',
                nextNodeId: null,
              },
              {
                id: 'response-romantic',
                text: 'As long as we are together, I fear nothing. The forest will be our kingdom.',
                nextNodeId: null,
              },
            ],
          },
        ],
      },

      learningPoints: [
        {
          id: 'lp-ch3-11-rescue',
          content:
            "The rescue scene demonstrates Tristan's role as protector and hero, even when he himself has nothing. Love motivates heroic action.",
          category: 'character-analysis',
        },
        {
          id: 'lp-ch3-11-exile',
          content:
            'Voluntary exile was a common motif in medieval romance. Leaving civilization for nature represented both punishment and freedom.',
          category: 'cultural-context',
        },
      ],
    },

    // Scene 12: Forest of Morois - Map Exploration
    {
      id: 'scene-ch3-12-forest-map',
      type: 'map-exploration',
      backgroundImage: 'https://cdn.midjourney.com/5436df27-3d90-4cc5-82df-96a69298fd53/0_0.png',
      mapImage: 'https://cdn.midjourney.com/2b363f32-a11d-4b24-9a3c-664dda94d588/0_0.png',

      prompt:
        'Tristan and Isolde flee deep into the ancient forest. Explore the wilderness that becomes their sanctuary and prison.',

      locations: [
        {
          id: 'forest-edge',
          name: 'Forest Edge',
          x: 15,
          y: 45,
          content: `The boundary between King Mark's civilized realm and the wild forest. Here, the last farms and villages give way to ancient trees. Hunters come this far, but few venture deeper.

Tristan and Isolde cross this threshold knowing they may never return to the world they knew.`,
        },
        {
          id: 'clear-stream',
          name: 'Clear Stream',
          x: 40,
          y: 30,
          content: `A stream of pure water runs through the forest, providing drink and fish. Tristan fashions a spear from a straight branch and catches trout.

They drink the cold water and wash away the dust of their flight. For the first time in days, they rest without fear of immediate pursuit.`,
        },
        {
          id: 'ancient-oak',
          name: 'Ancient Oak',
          x: 60,
          y: 50,
          content: `A massive oak tree, centuries old, its trunk as wide as a small house. Celtic carvings mark its base--this was a sacred place long before Cornwall had kings.

They rest in its shade, and Tristan tells Isolde stories of the old gods who once walked these woods. The forest feels protective here, sheltering them from the world's judgment.`,
        },
        {
          id: 'lovers-bower',
          name: "The Lovers' Bower",
          x: 70,
          y: 65,
          content: `A natural bower formed by intertwining branches and vines. Here, Tristan and Isolde build their shelter--a simple hut of woven branches, moss for bedding, a cleared space for a fire.

It is crude compared to the castle, but it is theirs. No one watches them here. No one judges. They are free, in a way they never were at court.

This becomes their home in exile, the center of their forest life.`,
        },
        {
          id: 'hunting-grounds',
          name: 'Hunting Grounds',
          x: 50,
          y: 75,
          content: `Deer trails crisscross this part of the forest. Tristan, with his sword and improvised bow, hunts for their food. He is skilled, but the work is hard and constant.

Isolde learns to prepare the meat, to tan the hides, to gather edible plants and roots. A queen's hands, once soft, become calloused with work.`,
        },
        {
          id: 'lookout-hill',
          name: 'Lookout Hill',
          x: 35,
          y: 55,
          content: `A high point in the forest where one can see the surrounding woodland and, distantly, the towers of King Mark's castle.

Sometimes Tristan climbs here to watch for pursuers. Sometimes they both come to look at the distant castle and remember the life they left behind.

Isolde sometimes weeps when she sees it--not for the lost luxury, but for the uncle-king they both still love and have betrayed.`,
        },
      ],

      learningPoints: [
        {
          id: 'lp-ch3-12-nature-sanctuary',
          content:
            'In medieval romance, nature often serves as a place of refuge from corrupt civilization. The forest is harsh but honest, free from courtly deception.',
          category: 'thematic-analysis',
        },
        {
          id: 'lp-ch3-12-simplicity',
          content:
            "The lovers' simple life in the forest contrasts with courtly luxury. This tests whether their love can survive without the trappings of civilization.",
          category: 'plot-structure',
        },
      ],
    },

    // Scene 13: Life in the Forest
    {
      id: 'scene-ch3-13-forest-life',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/536ac1da-5d65-4058-b3c6-1bb33a04eaa4/0_0.png',
      image: 'https://cdn.midjourney.com/e35a3284-9058-4974-8c65-473108be5631/0_0.png',

      content: `Weeks pass in the Forest of Morois. Tristan and Isolde learn to survive as exiles.

      They wake with the sun and sleep when darkness falls. Tristan hunts and guards their bower. Isolde tends the fire, cooks their simple meals, and gathers berries and herbs. They drink from clear streams and bathe in forest pools.

      Their clothes grow worn and patched. Isolde's hands, once carefully tended, become rough with work. Tristan's hair and beard grow long. They look like wild folk now, not court nobles.

      But in some ways, they are happier than they ever were at Cornwall's court. Here, they can love openly. No one watches them with suspicious eyes. No one whispers accusations. They are free to be together, to speak freely, to hold each other without fear.

      At night, they lie in their bower looking up at stars through the branches. Tristan plays melodies on a simple flute he carved. Isolde sings old Irish songs her mother taught her.

      "Are you sorry?" Tristan asks one night. "You were a queen. Now you live like a peasant in the wilderness."

      "I was a queen in a cage," Isolde answers. "Now I am free. No, I am not sorry. Not while we have this."

      They are not alone in the forest. Tristan's hunting dog, Husdent, followed them from the castle and found them in the woods. The faithful hound becomes their companion, warning them of any approach and sharing their shelter.

      The forest is hard, but they endure. They even find moments of joy. For a brief time, it seems they might live like this forever, forgotten by the world.

      But the world has not forgotten them. King Mark, torn between anger and love, still searches. And the forest cannot hide them forever.`,

      learningPoints: [
        {
          id: 'lp-ch3-13-pastoral',
          content:
            'The pastoral life in the forest represents an idealized escape from complex society. This "green world" motif appears throughout literature as a place of truth and renewal.',
          category: 'literary-technique',
        },
        {
          id: 'lp-ch3-13-simplicity-test',
          content:
            "Their forest life tests whether their love is based on physical attraction and potion magic, or something deeper. They must choose each other daily without the potion's compulsion.",
          category: 'character-analysis',
        },
        {
          id: 'lp-ch3-13-husdent',
          content:
            'The faithful dog Husdent represents loyalty that transcends human betrayal. Animals in medieval romance often embody virtues humans struggle with.',
          category: 'literary-technique',
        },
      ],
    },

    // Scene 14: King Mark Discovers the Lovers
    {
      id: 'scene-ch3-14-mark-discovers',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/7c47278d-de38-47ab-b115-c929c93e9cb0/0_0.png',
      image: 'https://cdn.midjourney.com/2ed40ec6-a164-46e2-9926-2fd28fedaacd/0_0.png',

      content: `It happens on a summer morning when the heat is oppressive even in the forest shade. Tristan and Isolde, exhausted from a night of little sleep, lie down to rest in their bower.

      They mean to rest only briefly, but the heat and weariness overcome them. They fall into deep sleep, lying side by side on the soft moss.

      But--and this is crucial--Tristan has placed his naked sword between them. It is a ritual they have maintained throughout their exile: a symbol that though they love, they do not fully consummate that love while Isolde remains lawfully wed to Mark.

      It is this detail that saves their lives.

      King Mark, guided by his huntsmen, approaches the bower. He has come with armed men, prepared to execute them on the spot. The betrayal has burned in his heart for months, and he is determined to end it.

      But when he peers into the bower and sees them sleeping, something stops him. The sword between them catches his eye. He knows what it means--what it has always meant in knightly tradition.

      Mark stands frozen, emotions warring within him. Here are the two people who betrayed him, helpless before him. Justice demands their death. His wounded pride screams for vengeance.

      But the sword speaks of restraint, of honor maintained even in impossible circumstances. And looking at their sleeping faces, he sees not triumphant lovers but weary exiles, aged by hardship, their fine clothes reduced to rags.

      Isolde's face is uncovered, and a shaft of sunlight falls directly upon it. Gently, Mark removes his glove and places it to shade her face--his first gesture of tenderness toward her in months.

      Then he makes his decision. He takes Tristan's sword and leaves his own royal blade in its place. He removes his ring and places it where they will see it upon waking. These are his messages: "I have been here. I saw the sword between you. I remember mercy."

      He signals his men to retreat silently. They withdraw through the forest, leaving the lovers sleeping, spared.

      When Tristan and Isolde wake and discover what happened, they weep--not from relief at being spared, but from grief at Mark's generosity and their own guilt. The sword saved them, but it also reminds them of what they have cost the king they both still love.`,

      learningPoints: [
        {
          id: 'lp-ch3-14-discovery-scene',
          content:
            "The discovery scene is the climax of the forest sequence. Mark's mercy, rather than expected vengeance, deepens the tragedy by showing all three characters' humanity.",
          category: 'plot-structure',
        },
        {
          id: 'lp-ch3-14-restraint',
          content:
            "The lovers' self-imposed restraint (the sword) paradoxically both honors and dishonors Mark. They respect the marriage vow even while violating it through their love.",
          category: 'thematic-analysis',
        },
        {
          id: 'lp-ch3-14-mercy-complexity',
          content:
            "Mark's mercy is neither weakness nor forgiveness--it is recognition of moral complexity. Medieval literature often showed mercy as the highest form of justice.",
          category: 'cultural-context',
        },
      ],
    },

    // Scene 15: Primary Source - The Tryst Under the Tree
    {
      id: 'scene-ch3-15-primary-source',
      type: 'primary-source',
      backgroundImage: 'https://cdn.midjourney.com/536ac1da-5d65-4058-b3c6-1bb33a04eaa4/0_0.png',

      prompt: 'Analyze this passage from a medieval manuscript of the Tristan legend:',
      source: {
        type: 'text',
        title: "Béroul's Roman de Tristan",
        author: 'Béroul',
        date: '12th century',
        content: `"The lovers dwelt in the forest for many months, suffering great hardship yet never regretting their choice. The forest was harsh and wild, yet it gave them what the court could not: freedom to love without shame.

King Mark searched for them ceaselessly, torn between desire for justice and longing to forgive. His heart was divided: the king in him demanded punishment, but the uncle in him mourned the loss of those he loved.

When at last his huntsmen tracked the lovers to their bower, Mark came alone to see them with his own eyes. He found them sleeping in the forest glade, weary from their labors. But between them lay Tristan's naked sword, its blade separating their bodies.

Mark looked upon this sight and understood its meaning: the sword was a symbol of chastity, showing that even in exile, the lovers maintained some honor. Though they loved, they did not lie together as man and wife, for Isolde belonged to Mark by law and sacred vow.

The king's heart softened. He took off his own glove and placed it where the sun fell on Isolde's face, shading her sleep. He took Tristan's sword and left his own royal blade in its place. Then he departed without waking them, his actions speaking what his words could not: 'I have seen your restraint, and I remember my love for you both.'"`,
      },

      questions: [
        {
          id: 'q1',
          question: 'According to the text, what did the sword between Tristan and Isolde symbolize?',
          type: 'multiple-choice',
          options: [
            'Chastity and restraint, showing they maintained honor even in exile',
            'A barrier proving they no longer loved each other',
            'Tristan\'s readiness to defend Isolde from forest dangers',
            'Their intention to eventually duel for Isolde\'s freedom',
          ],
          correctAnswer: 'Chastity and restraint, showing they maintained honor even in exile',
          explanation: 'The sword placed between sleeping lovers was a medieval symbol of chastity, demonstrating that despite their love, they respected the bounds of Isolde\'s marriage to Mark.',
        },
        {
          id: 'q2',
          question: "Why was King Mark's heart divided in his search for the lovers?",
          type: 'multiple-choice',
          options: [
            'The king demanded justice but the uncle mourned and longed to forgive',
            'He wanted vengeance but feared losing his strongest knight',
            'His advisors demanded mercy but his pride demanded blood',
            'He loved Isolde still but felt nothing for Tristan anymore',
          ],
          correctAnswer: 'The king demanded justice but the uncle mourned and longed to forgive',
          explanation: 'Mark faced a conflict between his public role as king (requiring justice) and his private feelings as an uncle and husband (desiring mercy and forgiveness).',
        },
        {
          id: 'q3',
          question: 'What did King Mark do to show mercy without waking the lovers?',
          type: 'multiple-choice',
          options: [
            'Placed his glove to shade Isolde and exchanged his sword for Tristan\'s',
            'Left food and supplies near their bower and departed',
            'Carved a message of forgiveness on a nearby tree',
            'Instructed his men to stop all future searches for the lovers',
          ],
          correctAnswer: 'Placed his glove to shade Isolde and exchanged his sword for Tristan\'s',
          explanation: 'Mark\'s symbolic actions - shading Isolde, exchanging swords, and departing silently - communicated his mercy and recognition of their restraint without direct confrontation.',
        },
      ],

      learningPoints: [
        {
          id: 'lp-ch3-15-sword-symbol',
          content:
            'The sword between lovers was a powerful medieval symbol of chastity and honor. It showed they could love without surrendering all moral restraint.',
          category: 'literary-technique',
        },
        {
          id: 'lp-ch3-15-marks-mercy',
          content:
            "Mark's actions show his complex nature--he is angry but not cruel, betrayed but still loving. His mercy makes the tragedy deeper by showing what could have been.",
          category: 'character-analysis',
        },
      ],
    },

    // Scene 16: Mark's Choice - Final Decision
    {
      id: 'scene-ch3-16-marks-choice',
      type: 'decision',
      backgroundImage: 'https://cdn.midjourney.com/7c47278d-de38-47ab-b115-c929c93e9cb0/0_0.png',

      prompt: 'What should King Mark do after discovering the lovers?',
      context: `King Mark walks back through the forest, his mind churning. His men wait at a distance, ready to follow whatever command he gives.

      He has spared the lovers in the moment, moved by the sight of the sword and their pitiful condition. But what now? Should he leave them to their exile? Try to bring them back? Pursue justice after all?

      His advisors will demand explanations. Frocin and the hostile barons will call him weak if he does not punish the betrayal. But Mark has seen something in that bower that changed him--evidence that even in their guilt, Tristan and Isolde maintained some shred of honor.

      The choice before him will determine not just their fates, but his own character. What kind of king is he? What kind of man?`,

      choices: [
        {
          id: 'choice-leave-exile',
          text: 'Leave them in exile--they are punished enough, and the sword proves some honor remains',
          consequence: `Mark decides to leave them in the forest. They have lost everything--crown, comfort, reputation. That is punishment sufficient. The sword between them showed they maintained some boundary, some honor even in their guilt.

          He tells his men: "We found no trace of them. The forest is vast--they may be dead already, or have fled to distant lands. We will search no more."

          The barons grumble but cannot disobey a direct order. The search is called off.

          Tristan and Isolde, discovering Mark's tokens, understand his message. They have been granted their lives and their forest sanctuary. But they also understand this is not forgiveness--merely a temporary mercy.

          They remain in the Forest of Morois, living their simple life, grateful for reprieve but uncertain how long it can last. The sword stays between them every night, a promise to the king who spared them.`,

          learningPoints: [
            {
              id: 'lp-ch3-16a-exile-mercy',
              content:
                'Exile was both punishment and mercy in medieval justice. It removed the offender from society without killing them--a compromise between justice and compassion.',
              category: 'historical-context',
            },
          ],
        },
        {
          id: 'choice-send-message',
          text: 'Send a message offering conditional reconciliation if they agree to separate forever',
          consequence: `Mark decides on a middle path. He will offer terms: Isolde may return to court as queen, and Tristan may return as a knight--but they must swear never to speak privately again, never to meet alone, never to continue their love.

          It is a cruel mercy: life and honor restored, but at the cost of what makes life worth living for them. They can see each other daily but never touch. They can speak in public but never share private words.

          Through a messenger (for Mark will not face them himself), the offer is conveyed. Tristan and Isolde must choose: accept these terms and return to civilization, or remain exiles forever.

          The choice tears at them. Return means seeing each other constantly while being forbidden to love. Exile means poverty and hardship, but freedom to be together.

          They ask for time to decide, and the messenger agrees to return in three days for their answer. Those three days in the forest, knowing they might be their last together, are among the most bittersweet of their lives.`,

          learningPoints: [
            {
              id: 'lp-ch3-16b-impossible-choice',
              content:
                'The impossible choice between separation with honor or exile with love creates ongoing tension. This dilemma drives the next chapter of the story.',
              category: 'plot-structure',
            },
          ],
        },
      ],

      learningPoints: [],

      events: {
        onExit: [
          {
            type: 'quiz',
            componentId: 'quiz-chapter-3-tristan-isolde',
            condition: { type: 'if-not-completed' },
          },
        ],
      },
    },
  ],

  endQuiz: chapter3Quiz,
};

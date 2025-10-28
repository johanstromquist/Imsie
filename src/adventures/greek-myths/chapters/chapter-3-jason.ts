import type { Chapter } from '../../../types';
import { chapter3Quiz } from '../quizzes/chapter-3-quiz';

export const chapter3: Chapter = {
  id: 'chapter-3-jason',
  title: 'Chapter 3: Jason - The Flawed Leader',
  description: 'Assemble the greatest heroes of Greece, retrieve the Golden Fleece, and witness how betrayal leads to tragedy.',

  learningObjectives: [
    'Analyze the quest narrative structure and team dynamics in ensemble storytelling',
    'Understand the antihero and morally complex protagonist in Greek myth',
    'Explore themes of betrayal, ambition, and consequences through Jason\'s downfall',
    'Recognize how Jason\'s character flaws lead directly to his tragic end',
    'Compare Jason\'s story to modern ensemble casts and antihero narratives',
  ],

  scenes: [
    // Scene 1: Jason's birthright stolen
    {
      id: 'jason-scene-1-birthright',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/3af98760-1d34-4482-9ad6-f30db5cd86c6/0_0.png',
      image: 'https://cdn.midjourney.com/a9371f0e-b928-4492-b21e-2966161d1cd2/0_0.png',

      content: `In the kingdom of Iolcus, a usurper sits on the throne that doesn't belong to him.

His name is Pelias, and years ago he seized power from his half-brother, the rightful king Aeson. But Pelias couldn't kill Aeson outright—that would anger the gods. So he imprisoned him instead, letting him rot in a cell while Pelias ruled.

There was one problem: Aeson had a son. An infant named Jason.

If the boy grew up, he would have a legitimate claim to the throne. Pelias would have sent assassins, but Aeson acted first. In the dead of night, loyal servants smuggled baby Jason out of the palace. They carried him to Mount Pelion, where the centaur Chiron lived—the wisest teacher in all of Greece.

"Raise him," they begged. "Teach him to be a hero. One day, he'll return and reclaim what was stolen."

Chiron agreed. And Jason grew up far from civilization, learning warfare, medicine, music, and wisdom from a creature who was half-man, half-horse, and all teacher.`,

      learningPoints: [
        {
          id: 'lp-jason-1-usurpation',
          content: 'The stolen birthright is a common catalyst in hero myths, creating the initial injustice that drives the heroic quest.',
          category: 'literary-context',
        },
        {
          id: 'lp-jason-1-chiron',
          content: 'Chiron the centaur trained many Greek heroes including Achilles, Heracles, and Jason—he represents the essential role of mentorship in heroic development.',
          category: 'cultural-context',
        },
      ],
    },

    // Scene 2: Decision - Diplomacy or force?
    {
      id: 'jason-scene-2-approach',
      type: 'decision',
      backgroundImage: 'https://cdn.midjourney.com/3af98760-1d34-4482-9ad6-f30db5cd86c6/0_0.png',
      image: 'https://cdn.midjourney.com/8a1c2502-dbc7-43e9-8154-31bb44b8d521/0_1.png',

      prompt: 'How will you reclaim your throne?',
      context: `You are Jason, now twenty years old. Chiron has taught you everything: how to fight, how to lead, how to think. Now he's told you the truth about your birth.

You are the rightful king of Iolcus. Your uncle Pelias is a usurper who stole the throne from your father.

As you walk toward the city for the first time, you must decide: What kind of king will you be?

Pelias has ruled for twenty years. He has guards, wealth, and power. You have legitimacy, youth, and training—but no army.`,

      choices: [
        {
          id: 'choice-diplomacy',
          text: 'Approach with diplomacy—demand your throne through rightful claim',
          consequence: `You choose the civilized path. You'll walk into Pelias's court not as an enemy, but as the rightful heir demanding what's yours by law and blood.

It's idealistic. Noble. And as you'll learn, dangerously naive.

But this is how Jason thinks—he believes in rightful claims and justice. He doesn't yet understand that men like Pelias don't surrender power because it's "right."

Still, you walk toward the palace gates with your head high and your claim ready on your lips.`,
          learningPoints: [
            {
              id: 'lp-jason-2a-idealism',
              content: 'Jason\'s initial idealism and faith in justice contrasts with the harsh political realities he\'ll face—a key flaw in his character.',
              category: 'literary-context',
            },
          ],
        },
        {
          id: 'choice-force',
          text: 'Gather allies first—take the throne by force when you\'re ready',
          consequence: `A pragmatic approach. Power respects power. If you arrive with an army behind you, Pelias might negotiate.

But Jason doesn't think this way. He's been raised by Chiron on principles of honor and legitimacy. He believes his birthright should be enough.

It's a fatal flaw in his character: he assumes the world operates on fairness. He'll learn otherwise.`,
        },
        {
          id: 'choice-subtle',
          text: 'Infiltrate the court in disguise and undermine Pelias from within',
          consequence: `Clever, but Jason isn't the type. He's not a schemer or a spy. He's been trained as a warrior and a leader, not a manipulator.

That role will fall to someone else in this story—someone who will ultimately destroy him.

Jason chooses the direct approach. He walks into Pelias's throne room and makes his claim openly.`,
        },
      ],

      learningPoints: [],
    },

    // Scene 3: The impossible quest
    {
      id: 'jason-scene-3-quest',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/3af98760-1d34-4482-9ad6-f30db5cd86c6/0_0.png',
      image: 'https://cdn.midjourney.com/3af98760-1d34-4482-9ad6-f30db5cd86c6/0_0.png',

      content: `Whatever path Jason chose, he walked through the gates of Iolcus wearing only one sandal—he'd lost the other helping an old woman cross a river. (The woman was actually Hera in disguise, testing his character. Jason passed. Hera would remember this.)

Guards eyed him warily—a stranger with one missing sandal. Word spread quickly through the palace.

By the time Jason reached the throne room, King Pelias was waiting, his face pale with recognition. An oracle had warned him: "Beware the man who comes with one sandal. He will take your throne."

But Pelias was cunning. He didn't call his guards. Instead, he smiled.

"Jason! My nephew! I've been waiting for you." Lies, all of it. "You're right—the throne is yours by birth. But first, prove yourself worthy. Bring me something that will make Iolcus great: the Golden Fleece."

The Golden Fleece—the skin of a magical flying ram, guarded in distant Colchis by a sleepless dragon and King Aeëtes. Countless heroes had tried to steal it. None had returned.

It was an impossible quest. Pelias knew it. Jason didn't care.

"I'll bring you the Fleece," Jason declared. "And then I'll take my throne."`,

      inlineAnnotations: [
        {
          id: 'annotation-one-sandal',
          text: 'one sandal',
          tooltip: {
            title: 'The Prophecy of the Single Sandal',
            content: 'Ancient oracles often gave specific visual signs to identify fated individuals. The one-sandal detail made Jason instantly recognizable to Pelias, triggering the quest.',
            category: 'cultural-context',
          },
        },
      ],

      learningPoints: [
        {
          id: 'lp-jason-3-impossible-quest',
          content: 'The Golden Fleece quest, like Perseus\'s Medusa task, is designed to fail—tyrants assign impossible tasks to remove threats.',
          category: 'literary-context',
        },
        {
          id: 'lp-jason-3-fleece',
          content: 'The Golden Fleece symbolized kingship and divine favor—retrieving it would prove Jason\'s worthiness to rule.',
          category: 'cultural-context',
        },
      ],
    },

    // Scene 4: Interlude - Ensemble cast and team dynamics
    {
      id: 'jason-scene-4-ensemble',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/8bf3c785-ffc3-4272-9b3f-f38fab6bcd3e/0_0.png',
      image: 'https://cdn.midjourney.com/8bf3c785-ffc3-4272-9b3f-f38fab6bcd3e/0_0.png',

      content: `Here's where Jason's story becomes different from Perseus's or Theseus's.

Jason doesn't go alone. He can't. The quest is too dangerous, too vast. So he sends out a call across Greece: "The greatest heroes, come sail with me."

And they came. They called themselves the Argonauts, after their ship, the Argo.

This is the birth of the ensemble cast—the team adventure. You've seen this pattern everywhere:
- The Avengers assembling to face Thanos
- The Fellowship of the Ring journeying to Mordor
- Ocean's Eleven gathering for the heist
- The Guardians of the Galaxy coming together
- The crew of the Millennium Falcon

Each member brings unique skills. Each has their own arc. The leader (Jason, Thor, Aragorn, Danny Ocean, Star-Lord, Han Solo) must unite them and navigate their egos, their conflicts, their individual goals.

Jason will prove to be both an inspiring leader and a terrible one. He'll unite Greece's greatest heroes—and he'll betray the person who makes his success possible.

But first, let's meet the team.`,

      learningPoints: [
        {
          id: 'lp-jason-4-ensemble',
          content: 'The Argonauts represent the first major "ensemble quest" in Western literature, establishing patterns still used in modern team adventures.',
          category: 'literary-context',
        },
        {
          id: 'lp-jason-4-modern',
          content: 'Modern ensemble casts from Marvel to Ocean\'s films follow the Argonauts\' template: diverse specialists uniting for an impossible goal.',
          category: 'reference',
        },
      ],
    },

    // Scene 5: Map exploration - Journey of the Argo
    {
      id: 'jason-scene-5-map',
      type: 'map-exploration',
      backgroundImage: 'https://cdn.midjourney.com/2e7cefa8-b59b-475d-8418-cdb0707ed108/0_0.png',
      mapImage: 'https://cdn.midjourney.com/e7015add-926e-4926-928b-b48127bee231/0_0.png',

      prompt: 'Follow the Argo\'s perilous voyage from Greece to Colchis and back—a journey across the known world',

      locations: [
        {
          id: 'loc-iolcus',
          name: 'Iolcus',
          x: 32,
          y: 40,
          content: 'Where Jason assembled the Argonauts. Fifty heroes boarded the Argo, including Heracles, Orpheus, Castor and Pollux, and the huntress Atalanta.',
          image: 'https://cdn.midjourney.com/5eb3c559-8913-465b-906b-9640c64c2c48/0_0.png',
        },
        {
          id: 'loc-lemnos',
          name: 'Lemnos',
          x: 35,
          y: 34,
          content: 'An island inhabited only by women who had killed their husbands. The Argonauts stayed for a year before Heracles urged them onward.',
          image: 'https://cdn.midjourney.com/f0b1abae-8a67-48ea-be62-faca0b2a93f4/0_3.png',
        },
        {
          id: 'loc-clashing-rocks',
          name: 'The Clashing Rocks',
          x: 42,
          y: 29,
          content: 'The Symplegades—two massive rocks that crashed together, crushing any ship that tried to pass. The Argonauts sent a dove through first; when it lost only tail feathers, they rowed with all their might and barely escaped.',
          image: 'https://cdn.midjourney.com/cef9621b-8f4d-48ec-bfc2-101eb9ac696e/0_2.png',
        },
        {
          id: 'loc-colchis',
          name: 'Colchis',
          x: 65,
          y: 15,
          content: 'The distant kingdom at the edge of the known world, where King Aeëtes guarded the Golden Fleece. Here Jason would meet Medea—and seal his doom.',
          image: 'https://cdn.midjourney.com/9834fc74-be37-44e3-8c4f-3888812b6b6d/0_1.png',
        },
        {
          id: 'loc-return',
          name: 'The Return Route',
          x: 49,
          y: 28,
          content: 'Fleeing Colchis with the Fleece and Medea, the Argonauts took a different route home, sailing up unknown rivers and facing new perils—including Medea\'s murder of her own brother to slow pursuit.',
          image: 'https://cdn.midjourney.com/1fbdef31-88de-4708-91a6-e496de4baca4/0_0.png',
        },
      ],

      learningPoints: [
        {
          id: 'lp-jason-5-geography',
          content: 'The Argo\'s journey to the Black Sea represented the limits of Greek geographical knowledge, making it a voyage into the unknown.',
          category: 'historical-context',
        },
      ],
    },

    // Scene 6: Trials of the Journey
    {
      id: 'jason-scene-6-trials',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/2e7cefa8-b59b-475d-8418-cdb0707ed108/0_0.png',
      image: 'https://cdn.midjourney.com/2e7cefa8-b59b-475d-8418-cdb0707ed108/0_0.png',

      content: `The journey to Colchis was no simple voyage. The Argonauts faced trial after trial, each testing their courage and unity.

On the island of Lemnos, they found a society of women who had killed all their men. The crew stayed nearly a year, seduced by hospitality and romance, until Heracles finally urged them onward. "We came for the Golden Fleece," he reminded them, "not to settle down."

But soon after, tragedy struck. Heracles' beloved companion Hylas went to fetch water and was abducted by water nymphs, enchanted by his beauty. Heracles searched desperately, refusing to leave without the boy. Finally, the Argonauts sailed on without him—the greatest warrior of Greece lost to grief and search.

In Thrace, they met the blind prophet Phineus, tormented by Harpies—foul bird-women who stole or fouled his food whenever he tried to eat. The winged sons of the North Wind, Zetes and Calais, drove the Harpies away. In gratitude, Phineus revealed the secret of how to pass the Symplegades—the Clashing Rocks that guarded the entrance to the Black Sea.

Those massive rocks crashed together, crushing any ship that tried to pass between them. Following Phineus's advice, Jason sent a dove through first. The rocks snapped shut, clipping only the bird's tail feathers. As they sprang apart, the Argo rowed through at full speed, escaping with only minor damage to the stern.

Each trial brought them closer to Colchis—but also revealed that this quest would demand more than strength alone.`,

      learningPoints: [
        {
          id: 'lp-jason-6-trials',
          content: 'The Argonauts\' trials follow the "Road of Trials" stage of the Hero\'s Journey—each challenge teaches lessons needed for the ultimate confrontation.',
          category: 'literary-context',
        },
        {
          id: 'lp-jason-6-loss',
          content: 'Losing Heracles foreshadows Jason\'s fundamental weakness—he succeeds not through his own strength but through others\' aid, which he\'ll later betray.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 7: Timeline game - Order the trials
    {
      id: 'jason-scene-7-timeline',
      type: 'timeline-game',
      backgroundImage: 'https://cdn.midjourney.com/2e7cefa8-b59b-475d-8418-cdb0707ed108/0_0.png',

      prompt: 'The journey to Colchis was filled with trials. Can you order them correctly?',

      timelineEvents: [
        {
          id: 'event-1',
          title: 'Assembling the Heroes',
          year: 1,
          description: 'Jason gathers fifty heroes including Heracles, Orpheus, and Atalanta. They launch from Iolcus.',
          image: 'https://cdn.midjourney.com/ceb97324-0e7f-4919-b3bd-8500ca7aec5d/0_0.png',
        },
        {
          id: 'event-2',
          title: 'The Island of Lemnos',
          year: 2,
          description: 'The Argonauts stay with the women of Lemnos. They linger too long until Heracles reminds them of their quest.',
          image: 'https://cdn.midjourney.com/599beaf8-497d-48c6-b99f-b47755732f6f/0_3.png',
        },
        {
          id: 'event-3',
          title: 'Heracles Leaves the Quest',
          year: 3,
          description: 'When his companion Hylas is kidnapped by water nymphs, Heracles abandons the quest to search for him. The Argonauts continue without their strongest warrior.',
          image: 'https://cdn.midjourney.com/b5fc6f9b-a1e3-46da-8104-6dda18e3f02b/0_3.png',
        },
        {
          id: 'event-4',
          title: 'King Phineus and the Harpies',
          year: 4,
          description: 'The blind prophet Phineus is tormented by Harpies who steal his food. The Argonauts drive them away, and in gratitude, Phineus tells them how to pass the Clashing Rocks.',
          image: 'https://cdn.midjourney.com/de053470-9e46-49c6-aea4-33117dfba891/0_3.png',
        },
        {
          id: 'event-5',
          title: 'The Clashing Rocks',
          year: 5,
          description: 'Following Phineus\'s advice, the Argonauts send a dove through the Symplegades. When it survives, they row through with supernatural speed, barely escaping.',
          image: 'https://cdn.midjourney.com/a82d039b-a092-4509-8bf8-4ef0202ff97e/0_1.png',
        },
        {
          id: 'event-6',
          title: 'Arrival at Colchis',
          year: 6,
          description: 'The Argo reaches Colchis. King Aeëtes agrees to give Jason the Fleece—if he can complete three impossible tasks.',
          image: 'https://cdn.midjourney.com/84d55a67-9ee2-41e9-b188-45f3c948d315/0_3.png',
        },
      ],

      successThreshold: 70,

      learningPoints: [
        {
          id: 'lp-jason-7-journey',
          content: 'The sequential trials on the journey create narrative momentum and test the heroes\' worthiness before the main quest.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 8: Arriving in Colchis - impossible tasks
    {
      id: 'jason-scene-8-tasks',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/1070007e-fca9-4bb0-9c8e-48af79adfee0/0_0.png',
      image: 'https://cdn.midjourney.com/1070007e-fca9-4bb0-9c8e-48af79adfee0/0_0.png',

      content: `King Aeëtes of Colchis sat on his throne, looking at the Greek heroes who had dared to ask for his greatest treasure.

"You want the Golden Fleece?" He smiled, but there was no warmth in it. "Of course. I'm a reasonable man. Complete three simple tasks, and it's yours."

The tasks were anything but simple:

**First:** Yoke two fire-breathing bulls with bronze hooves and plow a field with them.

**Second:** Sow the field with dragon's teeth, which would spring up as armed warriors. Defeat them all.

**Third:** Get past the sleepless dragon that guards the Fleece—a serpent that has never closed its eyes in its entire immortal life.

Jason stood silent. Even Heracles couldn't have done this—and Heracles had left the quest.

Aeëtes knew it was impossible. He'd seen the hope in Jason's eyes die.

But someone else in the throne room was watching Jason with very different eyes.`,

      learningPoints: [
        {
          id: 'lp-jason-8-impossible',
          content: 'Aeëtes\' three tasks mirror other Greek "trial by ordeal" scenes, designed to be impossible without divine or magical intervention.',
          category: 'literary-context',
        },
        {
          id: 'lp-jason-8-dragon-teeth',
          content: 'The dragon\'s teeth that spawn warriors appear in multiple Greek myths, symbolizing how violence breeds more violence.',
          category: 'cultural-context',
        },
      ],
    },

    // Scene 9: Dialogue - Medea offers help
    {
      id: 'jason-scene-9-medea',
      type: 'dialogue',
      backgroundImage: 'https://cdn.midjourney.com/1070007e-fca9-4bb0-9c8e-48af79adfee0/0_0.png',

      character: {
        id: 'medea',
        name: 'Medea',
        portrait: 'https://cdn.midjourney.com/0b95112c-cd1a-4ec0-af71-e82d19438d62/0_1.png',
        description: 'Princess of Colchis and powerful sorceress',
      },

      dialogueTree: {
        id: 'node-1',
        speaker: 'medea',
        text: 'Jason. I watched you in the throne room. My father has condemned you to death with those tasks. But I can help you—if you swear an oath.',

        responses: [
          {
            id: 'response-who',
            text: 'Who are you? Why would you help me?',
            nextNodeId: 'node-2',
          },
          {
            id: 'response-what-oath',
            text: 'What kind of oath?',
            nextNodeId: 'node-3',
          },
        ],

        allNodes: [
          {
            id: 'node-2',
            speaker: 'medea',
            text: 'I am Medea, daughter of Aeëtes. I am also a priestess of Hecate, goddess of witchcraft. I have power my father doesn\'t suspect. And I... I cannot bear to see you die.',
            nextNodeId: 'node-4',
          },
          {
            id: 'node-3',
            speaker: 'medea',
            text: 'Swear by all the gods that when you take the Fleece, you will take me with you to Greece. Swear you will make me your wife. Swear you will never abandon me.',
            nextNodeId: 'node-4',
          },
          {
            id: 'node-4',
            speaker: 'medea',
            text: 'I will betray my father, my city, my homeland—everything—for you. All I ask is that you never betray me in return. Will you swear this oath?',
            responses: [
              {
                id: 'response-hesitate',
                text: 'This is asking a lot. You\'re asking me to bind my entire future...',
                nextNodeId: 'node-5',
                learningPoints: [
                  {
                    id: 'lp-jason-9a-hesitation',
                    content: 'Jason\'s hesitation reveals his character flaw: he\'ll make the oath not from love but from desperation, a foundation that dooms the relationship.',
                    category: 'literary-context',
                  },
                ],
              },
              {
                id: 'response-accept',
                text: 'I understand. You need a binding oath.',
                nextNodeId: 'node-8',
              },
            ],
          },
          {
            id: 'node-5',
            speaker: 'medea',
            text: 'Then die tomorrow. The bulls will burn you to ash, and my father will mount your head on the walls. I\'m offering you your life, Jason. And all I ask for in return is... to be loved. Is that truly too much?',
            nextNodeId: 'node-7',
          },
          {
            id: 'node-6',
            speaker: 'medea',
            text: 'Then it is done. Tomorrow, I will give you a salve that makes you immune to fire, and a spell to defeat the warriors. But remember your oath, Jason. The gods are listening. And so am I.',
            isEnd: true,
          },
          {
            id: 'node-7',
            speaker: 'medea',
            text: 'Will you swear the oath or not?',
            responses: [
              {
                id: 'response-final-swear',
                text: 'Yes. I swear by all the gods—I will make you my wife and never abandon you',
                nextNodeId: 'node-6',
              },
            ],
          },
          {
            id: 'node-8',
            speaker: 'medea',
            text: 'Then speak the words, Jason. Swear to me by the gods. Swear you will take me as your wife and never forsake me.',
            responses: [
              {
                id: 'response-swear-oath',
                text: 'I swear it. By Zeus, by the River Styx—I will make you my wife and never abandon you',
                nextNodeId: 'node-6',
              },
            ],
          },
        ],
      },

      learningPoints: [
        {
          id: 'lp-jason-9-medea-oath',
          content: 'The oath Jason swears to Medea becomes the fulcrum of the tragedy—his eventual breaking of it brings catastrophic revenge.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 10: Decision - Accept Medea's help?
    {
      id: 'jason-scene-10-choice',
      type: 'decision',
      backgroundImage: 'https://cdn.midjourney.com/1070007e-fca9-4bb0-9c8e-48af79adfee0/0_0.png',

      prompt: 'Will you accept Medea\'s help, knowing the price?',
      context: `You are Jason, alone in your tent. Tomorrow you face tasks that will kill you.

Medea has offered salvation. She has the power to make you fireproof, to help you defeat the warriors, to put the dragon to sleep. She can give you everything.

But the price is an eternal oath. You'll have to marry her, take her from her homeland, bind your life to hers forever.

You barely know her. She's a sorceress, a foreigner, the daughter of your enemy. Your whole future depends on this choice.

And yet—without her, you die tomorrow. Without her, you never get the Fleece. Without her, you fail.`,

      choices: [
        {
          id: 'choice-accept-help',
          text: 'Accept her help—you need her to survive',
          consequence: `You take the practical path. You need to survive. You need the Fleece. You need to return home.

Medea's magic will give you all of this. The oath is a problem for later. Right now, you need to live through tomorrow.

This is Jason's fatal flaw: short-term thinking. He solves the immediate crisis without considering the future consequences.

He accepts Medea's help. He swears the oath. And he seals both their fates.`,
          learningPoints: [
            {
              id: 'lp-jason-10a-pragmatism',
              content: 'Jason\'s pragmatic acceptance of Medea\'s help without truly considering the oath\'s weight foreshadows his eventual betrayal.',
              category: 'literary-context',
            },
          ],
        },
        {
          id: 'choice-refuse',
          text: 'Refuse—find another way without binding yourself',
          consequence: `Noble. Independent. Doomed.

There is no other way. The tasks are impossible by design. Even the greatest Argonauts together couldn't yoke fire-breathing bulls or defeat an army of undead warriors or bypass a sleepless dragon.

Jason needs magic. And the only magic available is Medea's.

He swallows his pride and accepts her help.`,
        },
        {
          id: 'choice-lie',
          text: 'Accept her help but plan to break the oath later',
          consequence: `Treacherous. And unfortunately, close to what Jason actually does.

He accepts. He swears the oath. And in his heart, perhaps he doesn't quite mean it. Perhaps he's thinking "I'll deal with this later."

The gods notice when oaths are sworn falsely. They exact terrible prices for broken vows.

Jason will learn this the hardest way possible.`,
        },
      ],

      learningPoints: [],
    },

    // Scene 11: Completing the trials
    {
      id: 'jason-scene-11-trials',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/8ecb4df0-be23-45d4-9d74-3098c3d00b64/0_0.png',
      image: 'https://cdn.midjourney.com/8ecb4df0-be23-45d4-9d74-3098c3d00b64/0_0.png',

      content: `The next day, Jason entered the field before a crowd of Colchians who'd come to watch the Greek hero die.

King Aeëtes smiled from his throne. The bronze bulls were already released, breathing fire, pawing the earth with hooves that struck sparks from stone.

But Jason had rubbed Medea's salve over every inch of his skin. When the bulls charged and bathed him in flame, he stood untouched. The crowd gasped. Aeëtes stopped smiling.

Jason seized the bulls by their horns and forced their massive heads down, yoking them with supernatural strength the salve provided. He plowed the field while fire washed over him harmlessly.

Then he sowed the dragon's teeth.

Instantly, warriors sprouted from the furrows—fully armed, hostile, converging on Jason from all sides. But Medea had taught him a trick: he threw a stone into their midst.

The warriors, confused, thought one of their own had struck them. They turned on each other, and in moments, they'd slaughtered themselves while Jason stood back and watched.

Two tasks complete. One remained: the sleepless dragon.`,

      learningPoints: [
        {
          id: 'lp-jason-11-magic',
          content: 'Jason succeeds not through his own strength but entirely through Medea\'s magic—establishing his dependency on her power.',
          category: 'literary-context',
        },
        {
          id: 'lp-jason-11-cleverness',
          content: 'The trick of making the warriors fight each other appears in other Greek myths, representing intelligence triumphing over brute force.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 12: Primary source - Euripides on Medea
    {
      id: 'jason-scene-12-euripides',
      type: 'primary-source',
      backgroundImage: 'https://cdn.midjourney.com/1070007e-fca9-4bb0-9c8e-48af79adfee0/0_0.png',

      prompt: 'The playwright Euripides gave Medea a voice in his tragedy. Read her words carefully—what do they reveal about power, betrayal, and being a woman in the ancient world?',

      source: {
        title: 'Medea',
        author: 'Euripides',
        date: '431 BCE',
        type: 'text',
        content: `MEDEA: Of all creatures that have breath and sensation, we women are the most unfortunate. First, we must buy a husband with an enormous sum, and take a master for our bodies—an evil even worse than the first. And the greatest gamble lies in this: whether we take a good man or a bad one.


For divorce brings disgrace to women, nor can we refuse a husband. And when a woman comes to live among new laws and customs, she needs to be a prophet—she hasn't learned at home how best to deal with her bedmate.


And if we manage this well, and our husband lives with us without resenting the yoke of marriage, our life is enviable. But if not, death is better.


A man, when he's tired of the company at home, goes elsewhere and relieves his heart. But we must look to one person only.


They say we live a life free from danger at home while they fight with spears—fools! I would rather stand three times in the battle line than give birth once.`,
        citation: 'Euripides, Medea, lines 230-251 (translated)',
      },

      questions: [
        {
          id: 'q-medea-power',
          question: 'What does Medea\'s speech reveal about the position of women in ancient Greek society, and how does this context deepen our understanding of her later revenge?',
          type: 'multiple-choice',
          options: [
            'It shows women had complete freedom and power in Greek society',
            'It reveals the powerlessness and economic dependency of women, making her eventual reclamation of agency through violence tragically understandable',
            'It suggests Medea is simply complaining about normal marriage',
            'It proves that all Greek women became violent when betrayed',
          ],
          correctAnswer: 'It reveals the powerlessness and economic dependency of women, making her eventual reclamation of agency through violence tragically understandable',
          explanation: 'Euripides portrays Medea\'s systematic powerlessness: she must "buy" a husband, becomes his property, cannot divorce, has no recourse if he\'s cruel. When Jason betrays her, she loses everything—home, status, security. Her revenge, while horrific, is the only power available to her in a system that strips women of all other agency. This doesn\'t justify her actions, but it contextualizes them within the brutal realities of ancient gender dynamics.',
        },
      ],

      learningPoints: [
        {
          id: 'lp-jason-12-female-perspective',
          content: 'Euripides\' Medea is remarkable for giving voice to female rage and powerlessness in a male-dominated society, making her one of the first complex female characters in Western literature.',
          category: 'literary-context',
        },
        {
          id: 'lp-jason-12-tragedy',
          content: 'Greek tragedy often explores how systemic injustice creates monsters—Medea\'s violence emerges from her complete lack of legitimate power.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 13: Stealing the Fleece and fleeing
    {
      id: 'jason-scene-13-fleece',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/313e947e-bd80-4eed-878b-e05eff7ed90b/0_0.png',
      image: 'https://cdn.midjourney.com/a4d59b6c-dc71-4a4d-a159-b978a49d36d7/0_0.png',

      content: `That night, Jason and Medea crept to the sacred grove where the Golden Fleece hung from an oak tree, glowing softly in the moonlight.

The dragon coiled around the tree trunk, massive beyond imagining, its eyes open and alert. It had never slept. It would never sleep.

Except tonight.

Medea sang a spell in a language older than Greek, older than Colchian. The dragon's eyes began to droop. Its massive head lowered. For the first time in its immortal existence, it slept.

Jason snatched the Fleece from the tree and ran.

Behind them, horns began to blow. King Aeëtes had discovered the theft. His soldiers poured from the palace, and Aeëtes himself led the pursuit to the harbor where the Argo waited.

They would have been caught—except Medea did something unthinkable.

She had brought her younger brother Apsyrtus with her. As their father's ships gained on them, she killed the boy, dismembered his body, and scattered the pieces in the sea.

Aeëtes had to stop. He had to collect his son's remains for proper burial. By the time he'd gathered every piece, the Argo was gone, vanished into the darkness.

Medea had murdered her own brother to save Jason.

Remember this. Remember what she sacrificed. Remember what she was willing to do for love.

Because Jason will forget.`,

      learningPoints: [
        {
          id: 'lp-jason-13-brother',
          content: 'Medea\'s murder of Apsyrtus demonstrates the absolute totality of her betrayal of her family for Jason—she literally cannot go home.',
          category: 'literary-context',
        },
        {
          id: 'lp-jason-13-cost',
          content: 'The myth emphasizes what Medea gives up for Jason: family, homeland, honor, innocence—everything. This makes his later betrayal even more devastating.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 14: Return and Medea's revenge on Pelias
    {
      id: 'jason-scene-14-pelias',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/3af98760-1d34-4482-9ad6-f30db5cd86c6/0_0.png',
      image: 'https://cdn.midjourney.com/94448e3c-5422-408c-b1b6-5b8a8ee5bcff/0_2.png',

      content: `Jason returned to Iolcus with the Golden Fleece in triumph. But Pelias refused to honor their bargain. He wouldn't give up the throne.

Medea solved this problem too.

She approached Pelias's daughters with a demonstration: she took an old ram, cut it into pieces, threw the pieces into a boiling cauldron along with magic herbs, and out leaped a young lamb, vigorous and restored.

"See?" she told the princesses. "I can make your aging father young again. All you have to do is cut him up and put him in the pot with these herbs."

The daughters, desperate to restore their father's youth, did exactly that.

Except Medea didn't give them the magic herbs. She gave them ordinary plants.

Pelias died screaming in boiling water, murdered by his own daughters who thought they were saving him.

It was brilliant. It was horrific. And Jason didn't stop her.

He took the throne of Iolcus—briefly. But the people were horrified by the murder, and Jason and Medea were exiled. They fled to Corinth, where they would live for ten years.

Ten years of peace. Ten years of marriage. Two children.

And then Jason made his fatal mistake.`,

      learningPoints: [
        {
          id: 'lp-jason-14-medea-violence',
          content: 'Medea\'s escalating violence (brother, Pelias) establishes her as both Jason\'s greatest ally and most dangerous enemy.',
          category: 'literary-context',
        },
        {
          id: 'lp-jason-14-complicity',
          content: 'Jason\'s acceptance of Medea\'s violent methods without protest makes him complicit in her crimes, further corrupting his heroism.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 15: Jason and Medea in Corinth
    {
      id: 'jason-scene-15-corinth',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/fe871d6e-b7a6-43d7-b225-40fd06858f5d/0_0.png',
      image: 'https://cdn.midjourney.com/fe871d6e-b7a6-43d7-b225-40fd06858f5d/0_0.png',

      content: `In Corinth, Jason and Medea lived quietly. He was no longer the great hero, the leader of the Argonauts. That was ancient history. He was middle-aged now, and his glory days were behind him.

Medea had given him everything: the Fleece, the throne (briefly), two sons. She had betrayed her father, murdered her brother, destroyed Pelias—all for him.

But Corinth's king, Creon, had a daughter. Her name was Glauce, and she was young, beautiful, and Greek.

Creon offered Jason a deal: divorce the foreign witch and marry the princess. Jason would become heir to Corinth's throne. His sons would be princes.

All he had to do was abandon the woman who had sacrificed everything for him.

Remember the oath? "By all the gods, I will never abandon you."

Remember Medea's words when he swore it? "The gods are listening."

They were indeed.`,

      inlineAnnotations: [
        {
          id: 'annotation-foreign-witch',
          text: 'foreign witch',
          tooltip: {
            title: 'Xenophobia in Ancient Greece',
            content: 'Greeks considered all non-Greeks "barbarians" (literally "bar-bar speakers"). Medea\'s foreignness made her permanently othered in Greek society, regardless of what she\'d done for Jason.',
            category: 'cultural-context',
          },
        },
      ],

      learningPoints: [
        {
          id: 'lp-jason-15-temptation',
          content: 'Jason\'s temptation represents the classic mid-life crisis: trading the partner who sacrificed for you for youth, status, and a fresh start.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 16: Decision - Marry the princess or stay loyal?
    {
      id: 'jason-scene-16-choice',
      type: 'decision',
      backgroundImage: 'https://cdn.midjourney.com/df24fc8b-b966-4d42-b364-45ad680cef86/0_0.png',

      prompt: 'What will you choose: ambition or loyalty?',
      context: `You are Jason, facing the defining choice of your life.

King Creon is offering you everything you thought you wanted: power, legitimacy, a Greek wife, a secure future for your sons.

All you have to do is divorce Medea.

She's a foreigner, a sorceress, a reminder of all the violent things you've done. People fear her. People don't trust you because of her.

But she gave you everything. She loved you. She trusted you. She swore oaths, and you swore them back.

Your sons are watching. The gods are watching.

What will you choose?`,

      choices: [
        {
          id: 'choice-stay-loyal',
          text: 'Honor your oath—refuse the marriage and stay with Medea',
          consequence: `The right choice. The honorable choice.

You'd remain in Corinth as a minor figure, raising your sons with Medea, growing old together, bound by the oaths you swore in Colchis decades ago.

It's not glorious. But it's right.

Unfortunately, Jason doesn't choose this. Jason has always been about ambition, about glory, about taking the easy path that solves immediate problems.

He chooses the princess. He breaks his oath.

And Medea, who gave up everything for him, becomes something terrifying.`,
          learningPoints: [
            {
              id: 'lp-jason-16a-honor',
              content: 'Had Jason chosen loyalty over ambition, the tragedy would be avoided—but he wouldn\'t be Jason, the flawed antihero.',
              category: 'literary-context',
            },
          ],
        },
        {
          id: 'choice-princess',
          text: 'Accept the marriage—it\'s best for your sons\' future',
          consequence: `Jason justifies it this way: "I'm doing this for our sons. As princes of Corinth, they'll have everything."

But he's lying to himself. He's doing it for himself. For power. For status. For a younger, more acceptable wife.

He tells Medea it's practical. Political. Not personal.

She sees through every word.`,
          learningPoints: [
            {
              id: 'lp-jason-16b-rationalization',
              content: 'Jason\'s rationalization that he\'s "doing it for the children" is self-deception—he\'s choosing ambition and discarding the woman who sacrificed everything.',
              category: 'literary-context',
            },
          ],
        },
      ],

      learningPoints: [],
    },

    // Scene 17: Medea's Revenge
    {
      id: 'jason-scene-17-revenge',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/df24fc8b-b966-4d42-b364-45ad680cef86/0_0.png',
      image: 'https://cdn.midjourney.com/d680a2a3-1deb-472d-8c42-cd3dbd449a92/0_0.png',

      content: `Medea did not weep. She did not plead. She planned.

First, she sent a gift to the new bride—a beautiful golden dress and a crown, seemingly in acceptance of her defeat. Glauce, delighted, put them on immediately.

The dress and crown were coated in poison. Within moments, they burst into flames. Glauce died screaming, the golden metal fused to her burning skin. Her father Creon tried to save her and died in the same magical fire.

Jason rushed to the palace, finding only ashes and horror.

But Medea wasn't finished. She had given Jason everything—murdered her brother, destroyed her homeland, killed a king. And for what? To be discarded for a younger princess?

In their home, she looked at their two sons—Jason's children. His legacy. His hope for the future. The only thing he had left to love.

"You took everything from me," she thought. "Now I take everything from you."

With a mother's tears and a sorceress's resolve, Medea killed her own children. It was the most terrible revenge imaginable—destroying not just Jason's present but his entire future.

When Jason arrived, mad with grief and rage, Medea appeared above the house in a chariot pulled by dragons—a gift from her grandfather, the sun god Helios.

"You broke your oath," she said, her voice cold as winter. "You destroyed the woman who saved you. Live with that, Jason. Live with what your choices have cost."

She flew away to Athens, leaving Jason alone in the ruins of his life. Everything he'd built, everyone he'd loved—gone. Not because of monsters or gods, but because of his own betrayal.

Years later, Jason would die alone and unmourned, crushed by a falling beam from the rotting Argo—the ship that had once carried him to glory. Even his death was pathetic.`,

      learningPoints: [
        {
          id: 'lp-jason-17-revenge',
          content: 'Medea\'s infanticide represents the ultimate revenge—destroying not just the person but their entire legacy and hope for immortality through children.',
          category: 'literary-context',
        },
        {
          id: 'lp-jason-17-tragedy',
          content: 'Greek tragedy often punishes oath-breakers with losses that mirror their crimes—Jason abandoned his family, so Medea ensures he has no family to return to.',
          category: 'literary-context',
        },
        {
          id: 'lp-jason-17-cost',
          content: 'Jason\'s death under the Argo\'s beam symbolizes how his greatest achievement becomes his doom—the glory of the quest ends in pathetic isolation.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 18: Cause-effect - Match betrayal to revenge
    {
      id: 'jason-scene-18-consequences',
      type: 'cause-effect',
      backgroundImage: 'https://cdn.midjourney.com/df24fc8b-b966-4d42-b364-45ad680cef86/0_0.png',

      prompt: 'Match Jason\'s actions to their devastating consequences. How does betrayal echo through this tragedy?',

      pairs: [
        {
          id: 'pair-1',
          cause: 'Jason swears an oath to Medea but doesn\'t truly mean it',
          effect: 'Medea remembers every word when he eventually breaks it',
          explanation: 'The oath sworn in Colchis becomes the moral foundation of Medea\'s revenge. Jason treated it as a means to an end; Medea treated it as sacred.',
        },
        {
          id: 'pair-2',
          cause: 'Medea murders her brother to help Jason escape',
          effect: 'She can never return home—Jason is literally all she has',
          explanation: 'Medea\'s absolute commitment to Jason leaves her with no safety net. When he betrays her, she has nothing and no one left in the world.',
        },
        {
          id: 'pair-3',
          cause: 'Jason accepts Medea\'s help but takes credit for the victories',
          effect: 'He comes to see her as disposable rather than essential',
          explanation: 'Jason forgets that every triumph—the bulls, the warriors, the dragon, even Pelias\'s death—came from Medea\'s power, not his own.',
        },
        {
          id: 'pair-4',
          cause: 'Jason abandons Medea to marry Glauce',
          effect: 'Medea sends a poisoned dress that burns Glauce and Creon alive',
          explanation: 'Medea destroys Jason\'s new bride and future in Corinth, eliminating the life he tried to build on her betrayal.',
        },
        {
          id: 'pair-5',
          cause: 'Jason claims he divorced Medea "for the children"',
          effect: 'Medea kills their children to punish him',
          explanation: 'In the most horrific act in Greek mythology, Medea murders her own sons to destroy the last thing Jason loves. She chooses revenge over motherhood, proving that Jason has broken her completely.',
        },
        {
          id: 'pair-6',
          cause: 'Jason ends with no wife, no children, no kingdom, no glory',
          effect: 'He dies alone when the rotting Argo\'s beam falls and crushes him',
          explanation: 'Jason\'s death is pathetic and unmourned—the once-great hero dies under the wreckage of his former glory, killed by his own decaying ship.',
        },
      ],

      learningPoints: [
        {
          id: 'lp-jason-18-tragedy',
          content: 'Jason\'s story is a perfect Greek tragedy: his character flaw (ambition and disloyalty) directly causes his complete destruction.',
          category: 'literary-context',
        },
        {
          id: 'lp-jason-18-antihero',
          content: 'Unlike Perseus or Theseus, Jason ends in ruin—he\'s an early example of the antihero whose flaws lead to downfall, like Walter White or Tony Soprano.',
          category: 'reference',
        },
      ],

      events: {
        onExit: [{
          type: 'quiz',
          componentId: 'quiz-chapter-3',
          condition: { type: 'if-not-completed' },
        }],
      },
    },
  ],

  endQuiz: chapter3Quiz,
};

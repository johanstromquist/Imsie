import type { Chapter } from '../../../types';
import { chapter1Quiz } from '../quizzes/chapter-1-quiz';

/**
 * Chapter 1: The Wrath of Achilles
 *
 * The Iliad's famous opening: in the tenth year of the Trojan War, a plague
 * ravages the Greek camp. When Agamemnon is forced to return his war prize,
 * he seizes Achilles' prize instead, sparking a rage that will cost countless lives.
 *
 * Duration: 35-40 minutes
 * Scenes: 12
 */
export const chapter1: Chapter = {
  id: 'iliad-ch1-wrath',
  title: 'Chapter 1: The Wrath of Achilles',
  description: 'Witness the legendary opening of Homer\'s epic: a quarrel between kings that will doom the Greek army.',

  learningObjectives: [
    'Understand the cause and significance of Achilles\' rage',
    'Identify the concept of timé (honor) in Greek warrior culture',
    'Analyze the relationship between kings and warriors in the Greek army',
    'Recognize how in medias res opening creates dramatic tension',
  ],

  scenes: [
    // Scene 1: Epic Opening - "Sing, Goddess, the Rage..."
    {
      id: 'iliad-ch1-sc1-opening',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/06efb085-6559-475f-b242-c883368ea80c/0_0.png',

      content: `**Sing, goddess, the rage of Achilles, son of Peleus—**
**that murderous rage which condemned Achaeans to countless agonies**
**and sent many valiant souls hurrying down to Hades...**

So begins the Iliad, with one of the most famous opening lines in all of literature. Not "tell the story of the Trojan War." Not "this is what happened." But **sing the rage**.

From the very first words, Homer tells you what this epic is about: anger. Wrath. The destructive power of unchecked fury. Everything that follows—all the death, all the suffering, all the tragedy—flows from one man's rage.

The Greek camp sprawls along the beach, ten years into the siege of Troy. A thousand black ships pulled onto the sand. Tens of thousands of warriors far from home, exhausted from a decade of fighting with no end in sight.

And now, a new disaster: plague.

For nine days, a pestilence has ravaged the Greek army. Men collapse burning with fever. Funeral pyres burn day and night, the smoke rising like a dark omen above the camp. Something has angered the gods—but what?`,

      learningPoints: [
        {
          id: 'lp-ch1-1-opening',
          content: 'The Iliad\'s opening "Sing, goddess..." is an epic invocation asking the Muse for inspiration, establishing that this story comes from divine sources.',
          category: 'literary-context',
        },
        {
          id: 'lp-ch1-1-theme',
          content: 'Homer announces his theme in the first line: "rage." The entire epic explores how one man\'s anger ripples outward to cause catastrophic consequences.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 2: Primary Source - Opening Lines Analysis
    {
      id: 'iliad-ch1-sc2-source',
      type: 'primary-source',
      backgroundImage: 'https://cdn.midjourney.com/06efb085-6559-475f-b242-c883368ea80c/0_0.png',
      prompt: `Read the opening lines of the Iliad and answer the questions below.`,

      source: {
        title: 'Iliad, Book 1, Lines 1-7',
        author: 'Homer',
        date: 'Circa 750 BCE',
        type: 'text',
        content: `**Original Opening (translated):**
<br /><br />
"Sing, goddess, the rage of Achilles, son of Peleus—<br />
that murderous rage which condemned Achaeans to countless agonies<br />
and sent many valiant souls hurrying down to Hades,<br />
and left their bodies to be devoured by dogs and birds,<br />
as the will of Zeus was fulfilled.<br />
Begin where they first quarreled—<br />
Agamemnon, lord of men, and godlike Achilles."
<br /><br />
**What to Notice:**
<br /><br />
1. **Immediate focus on rage** - Not the war's beginning, not Helen, but anger<br />
2. **Consequences listed first** - Death and suffering before cause<br />
3. **Divine will** - "As the will of Zeus was fulfilled" - fate is already determined<br />
4. **Two characters named** - Agamemnon and Achilles, not Trojans vs Greeks<br />
5. **"Where they first quarreled"** - We're starting with a specific argument, not background
<br /><br />
This is in medias res at its finest. Homer throws you into year ten, into a quarrel between two Greeks, and assumes you'll catch up. The tension is immediate. The stakes are cosmic. The tragedy is already in motion.`,
      },

      questions: [
        {
          id: 'opening-q1',
          question: 'Why does Homer begin with "rage" rather than explaining how the Trojan War started?',
          type: 'multiple-choice',
          options: [
            'He forgot to include the background story',
            'He assumes his audience already knows the war\'s origins and wants to start with immediate dramatic tension',
            'The rage is the only important part of the story',
            'He wants to confuse readers',
          ],
          correctAnswer: 'He assumes his audience already knows the war\'s origins and wants to start with immediate dramatic tension',
          explanation: 'Homer\'s audience knew the Trojan War myths. By starting in medias res (in the middle) with Achilles\' rage, he creates immediate dramatic intensity and establishes the epic\'s psychological focus.',
        },
        {
          id: 'opening-q2',
          question: 'What does "as the will of Zeus was fulfilled" suggest about the epic\'s view of fate?',
          type: 'multiple-choice',
          options: [
            'Zeus is the villain of the story',
            'Everything happens by chance with no divine involvement',
            'Events are predetermined and even great heroes cannot escape fate',
            'Zeus controls only minor details',
          ],
          correctAnswer: 'Events are predetermined and even great heroes cannot escape fate',
          explanation: 'This phrase establishes that even the catastrophic events of the Iliad fulfill divine will. Greek tragedy often explores how humans act freely while simultaneously fulfilling predetermined fate.',
        },
      ],

      learningPoints: [
        {
          id: 'lp-ch1-2-analysis',
          content: 'Analyzing opening lines reveals how authors establish theme, tone, and focus—the Iliad\'s opening is a masterclass in economical storytelling.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 3: The Plague
    {
      id: 'iliad-ch1-sc3-plague',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/06efb085-6559-475f-b242-c883368ea80c/0_0.png',
      image: 'https://cdn.midjourney.com/1ed4f86c-f9db-43a2-85ff-4904acfeb022/0_0.png',

      content: `On the tenth day of the plague, Achilles calls an assembly. Someone must discover why the gods are punishing them.

Calchas, the Greek army's prophet, stands before the gathered warriors. He knows the truth—but he's afraid to speak it. Finally, with Achilles promising protection, he reveals the cause:

Agamemnon has dishonored Apollo.

Nine days ago, Agamemnon seized a young woman named Chryseis as his war prize. She was the daughter of Chryses, a priest of Apollo. The priest came to the Greek camp, offered a rich ransom for his daughter's return, and begged for mercy.

Agamemnon refused—and did so with such arrogance that he drove the old priest away with threats and insults.

Chryses prayed to Apollo for vengeance. The god heard him. The plague is Apollo's punishment for disrespecting his priest.

The solution is obvious: Agamemnon must return Chryseis and apologize to Apollo. The plague will end.

But Agamemnon, king of Mycenae and commander of the entire Greek expedition, doesn't take kindly to being told what to do—especially not by a warrior like Achilles, no matter how great.`,

      inlineAnnotations: [
        {
          id: 'annotation-war-prize',
          text: 'war prize',
          tooltip: {
            title: 'War Prizes and Honor',
            content: 'In Greek warrior culture, captured women and treasure (geras) were symbols of honor and achievement. Losing a war prize meant losing face—which is why Agamemnon\'s response is so explosive.',
            category: 'cultural-context',
          },
        },
      ],

      learningPoints: [
        {
          id: 'lp-ch1-3-apollo',
          content: 'Divine intervention in the Iliad is often triggered by human disrespect—gods punish hubris and protect those who honor them.',
          category: 'cultural-context',
        },
        {
          id: 'lp-ch1-3-time',
          content: 'Timé (honor) was the central value in Greek warrior culture—more important than life itself. War prizes symbolized this honor visibly.',
          category: 'cultural-context',
        },
      ],
    },

    // Scene 4: Confrontation Between Achilles and Agamemnon
    {
      id: 'iliad-ch1-sc4-confrontation',
      type: 'dialogue',
      backgroundImage: 'https://cdn.midjourney.com/6f304870-e022-452b-a0f3-b3df467dfcff/0_0.png',

      character: {
        id: 'agamemnon',
        name: 'Agamemnon',
        portrait: 'https://cdn.midjourney.com/42038ca8-a35d-4e65-975a-538bd9d6ce0c/0_0.png',
        description: 'King of Mycenae, commander of the Greek forces',
      },

      dialogueTree: {
        id: 'conf-node-1',
        speaker: 'agamemnon',
        text: 'You dare tell me to give up my prize? Fine! I\'ll return the girl to save the army. But I won\'t be left without honor while you and the other kings keep yours. I\'ll take someone else\'s prize as replacement—perhaps yours, Achilles!',

        responses: [
          {
            id: 'resp-submit',
            text: 'Accept the insult and submit to his authority',
            nextNodeId: 'node-submit',
            learningPoints: [
              {
                id: 'lp-ch1-4a-submission',
                content: 'Submission might have prevented disaster, but would have violated Achilles\' heroic identity—Greek heroes couldn\'t accept dishonor and remain heroes.',
                category: 'cultural-context',
              },
            ],
          },
          {
            id: 'resp-rage',
            text: 'Respond with fury at the disrespect',
            nextNodeId: 'node-rage',
            learningPoints: [
              {
                id: 'lp-ch1-4b-rage',
                content: 'Achilles\' rage is both understandable (by Greek standards) and catastrophic—the Iliad explores how justified anger can still destroy.',
                category: 'cultural-context',
              },
            ],
          },
        ],

        allNodes: [
          {
            id: 'node-submit',
            speaker: 'agamemnon',
            text: 'But of course you won\'t submit. You never could. You\'re the greatest warrior, Achilles, but I am the KING. And you will learn that power outranks prowess.',
            responses: [
              {
                id: 'resp-submit2',
                text: 'Continue...',
                nextNodeId: 'node-final',
              },
            ],
          },
          {
            id: 'node-rage',
            speaker: 'agamemnon',
            text: 'Ah, there it is—the famous rage! Go ahead, Achilles. Threaten me. Draw your sword. But remember: I command this army, not you. And I will take Briseis from your tent as my new prize!',
            responses: [
              {
                id: 'resp-rage2',
                text: 'This is unbearable dishonor...',
                nextNodeId: 'node-final',
              },
            ],
          },
          {
            id: 'node-final',
            speaker: 'agamemnon',
            text: 'Briseis will be mine by sunset. If you don\'t like it, go home to your father\'s kingdom. See if I care. The Greek army doesn\'t need you as much as you think it does.',
            isEnd: true,
          },
        ],
      },

      learningPoints: [
        {
          id: 'lp-ch1-4-conflict',
          content: 'The conflict between Achilles (greatest warrior) and Agamemnon (most powerful king) embodies tension between merit and authority.',
          category: 'cultural-context',
        },
      ],
    },

    // Scene 5: Decision - Achilles' Response
    {
      id: 'iliad-ch1-sc5-decision',
      type: 'decision',
      backgroundImage: 'https://cdn.midjourney.com/6f304870-e022-452b-a0f3-b3df467dfcff/0_0.png',
      image: 'https://cdn.midjourney.com/1d4826e4-604e-4102-ad67-1367ede573e5/0_0.png',

      prompt: 'Achilles reaches for his sword. What should he do?',
      context: `Achilles' hand moves to his sword hilt. Agamemnon stands before him, arrogant and unyielding. One strike and the king would fall. But Agamemnon is not just any man—he is the commander of the Greek forces.

In Homer's telling, the goddess Athena appears (visible only to Achilles) and restrains him: "Do not kill him. Withdraw from battle instead. Someday Agamemnon will offer you gifts three times the value of what he takes now."

What will Achilles do?`,

      choices: [
        {
          id: 'choice-kill',
          text: 'Kill Agamemnon and seize command',
          consequence: 'This would solve the immediate problem but destroy the Greek unity. Achilles would be executed or exiled. He chooses differently—though his actual choice may be worse.',
          learningPoints: [
            {
              id: 'lp-ch1-5a-violence',
              content: 'Murder would give immediate satisfaction but violate Greek codes of conduct—even justified rage has limits.',
              category: 'cultural-context',
            },
          ],
        },
        {
          id: 'choice-withdraw',
          text: 'Sheathe the sword and withdraw from battle',
          consequence: 'This is what Achilles chooses. He will not kill Agamemnon—but he will not fight for him either. He and his Myrmidons will sit out the war. Let Agamemnon see how well his army fares without its greatest warrior. This withdrawal will cost thousands of Greek lives.',
          learningPoints: [
            {
              id: 'lp-ch1-5b-withdrawal',
              content: 'Achilles\' withdrawal is a calculated revenge: he will prove his worth by withholding it, making Agamemnon beg for his return.',
              category: 'cultural-context',
            },
          ],
        },
        {
          id: 'choice-reconcile',
          text: 'Swallow pride and reconcile with Agamemnon',
          consequence: 'The wise choice—but impossible for Achilles. To accept this dishonor would mean betraying his very identity as the greatest warrior. His timé (honor) is worth more than Greek victory, more than countless lives, more than anything.',
          learningPoints: [
            {
              id: 'lp-ch1-5c-honor',
              content: 'The tragedy of the Iliad is that Achilles\' sense of honor makes reconciliation impossible—his greatest strength is also his fatal flaw.',
              category: 'cultural-context',
            },
          ],
        },
      ],

      learningPoints: [
        {
          id: 'lp-ch1-5-choice',
          content: 'Achilles\' choice defines the entire epic: withdrawal from battle is both justified (by Greek honor codes) and catastrophic (causing massive Greek losses).',
          category: 'literary-context',
        },
      ],
    },

    // Scene 6: Achilles Withdraws
    {
      id: 'iliad-ch1-sc6-withdraw',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/06efb085-6559-475f-b242-c883368ea80c/0_0.png',

      content: `Achilles sheathes his sword.

"Take Briseis," he says, his voice cold with fury. "Take her and see how far it gets you. I will not lift a finger to help you anymore, Agamemnon. When Hector comes with fire to burn your ships, when your soldiers are dying in heaps, when you're screaming for me to save you—I will not come."

"I will sit by my ships and watch you lose."

The assembly dissolves in shocked silence. Agamemnon sends his heralds to Achilles' tent. They take Briseis, the woman who symbolized Achilles' honor and prowess. She goes unwillingly, looking back as they lead her away.

Achilles watches her go. He could stop this with a word, with a gesture. He doesn't.

Instead, he walks alone to the beach, far from the Greek camp. There he sits on the shore and weeps. Not for Briseis, though he cared for her. But for the dishonor. For the humiliation. For the rage that consumes him.

And there, beside the wine-dark sea, he calls out to his mother.`,

      learningPoints: [
        {
          id: 'lp-ch1-6-pride',
          content: 'Achilles\' pride (choosing honor over pragmatism) is both his defining heroic quality and his tragic flaw—Greek tragedy often explores this duality.',
          category: 'cultural-context',
        },
        {
          id: 'lp-ch1-6-epithets',
          content: 'Homer\'s repeated epithets like "wine-dark sea" served mnemonic purposes in oral performance and create rhythmic, ritualistic language.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 7: Thetis and Achilles
    {
      id: 'iliad-ch1-sc7-thetis',
      type: 'dialogue',
      backgroundImage: 'https://cdn.midjourney.com/6040d240-6897-45ec-b421-0c40f2d481a4/0_0.png',

      character: {
        id: 'thetis',
        name: 'Thetis',
        portrait: 'https://cdn.midjourney.com/b966bb42-3b36-4a73-a30e-318b9f30b854/0_0.png',
        description: 'Sea goddess, mother of Achilles',
      },

      dialogueTree: {
        id: 'thetis-node-1',
        speaker: 'thetis',
        text: 'My son, why do you weep? Tell me your grief—hide nothing from your mother. You chose to come to Troy knowing your fate. You chose the short life with eternal glory. Has something changed?',

        responses: [
          {
            id: 'resp-tell',
            text: 'Tell her about Agamemnon\'s dishonor',
            nextNodeId: 'node-explain',
          },
        ],

        allNodes: [
          {
            id: 'node-explain',
            speaker: 'thetis',
            text: 'Ah, my child. Agamemnon has shamed you before the entire army. This I cannot bear. What would you have me do?',
            responses: [
              {
                id: 'resp-zeus',
                text: 'Ask Zeus to make the Trojans win while I sit out',
                nextNodeId: 'node-request',
              },
            ],
          },
          {
            id: 'node-request',
            speaker: 'thetis',
            text: 'You want the Greeks to suffer without you? You want Agamemnon to crawl back begging for your help? This is a dark request, my son. If the Greeks lose battles, many will die—your friends among them.',
            responses: [
              {
                id: 'resp-proceed',
                text: 'My honor demands it. Let them see my worth.',
                nextNodeId: 'node-final',
              },
            ],
          },
          {
            id: 'node-final',
            speaker: 'thetis',
            text: 'So be it. I will go to Olympus and petition Zeus. He owes me a favor, and he will grant this request. The Greeks will learn what it means to dishonor Achilles, son of Peleus and Thetis. But remember, my child: once this is set in motion, many will die. Even your dearest friends.',
            isEnd: true,
          },
        ],
      },

      learningPoints: [
        {
          id: 'lp-ch1-7-thetis',
          content: 'Thetis embodies the tragic knowledge of a mother who knows her son is doomed—she will do anything for him, even though she knows it leads to his death.',
          category: 'cultural-context',
        },
        {
          id: 'lp-ch1-7-consequences',
          content: 'Achilles\' request for Greek defeat shows how personal honor outweighs communal loyalty—his rage blinds him to the cost.',
          category: 'cultural-context',
        },
      ],
    },

    // Scene 8: Map Exploration - The Trojan Plain
    {
      id: 'iliad-ch1-sc8-map',
      type: 'map-exploration',
      backgroundImage: 'https://cdn.midjourney.com/b6d28234-1c80-4bc9-8d73-d9942d91fba0/0_0.png',
      prompt: 'Explore the strategic landscape where the Greeks and Trojans will clash. Understanding this geography helps you follow the battles to come.',

      mapImage: 'https://cdn.midjourney.com/bdd21b9b-8905-4f08-8a81-418c0efb6660/0_0.png',

      locations: [
        {
          id: 'loc-greek-camp',
          name: 'Greek Camp',
          x: 35,
          y: 52,
          content: 'The Greek encampment along the beach, with over 1,000 black ships pulled onto shore. This is where Agamemnon commands and where Achilles now sulks.',
          image: 'https://cdn.midjourney.com/06efb085-6559-475f-b242-c883368ea80c/0_0.png',
        },
        {
          id: 'loc-achilles-tent',
          name: 'Achilles\' Tent',
          x: 33,
          y: 85,
          content: 'Achilles camps apart from the main Greek army with his Myrmidons. His isolation reflects his separation from the Greek cause.',
          image: 'https://cdn.midjourney.com/6040d240-6897-45ec-b421-0c40f2d481a4/0_0.png',
        },
        {
          id: 'loc-battlefield',
          name: 'The Trojan Plain',
          x: 51,
          y: 42,
          content: 'The open ground between the Greek ships and Troy\'s walls. This is where armies clash, heroes duel, and the tide of war shifts back and forth.',
          image: 'https://cdn.midjourney.com/7f6379e2-a4cd-43c5-8d6a-5a0d0293b594/0_0.png',
        },
        {
          id: 'loc-scamander',
          name: 'River Scamander',
          x: 32,
          y: 31,
          content: 'The sacred river flowing through the Trojan plain. In later books, even the river god will join the fighting against Achilles.',
          image: 'https://cdn.midjourney.com/c79c6a9f-2760-41a4-9a35-d50c7a7aab94/0_0.png',
        },
        {
          id: 'loc-troy-walls',
          name: 'Walls of Troy',
          x: 71,
          y: 36,
          content: 'The massive walls protecting the city. Impregnable for ten years, they represent the stalemate that frustrates both sides.',
          image: 'https://cdn.midjourney.com/6455c502-8b69-4a98-8e75-ff32c4f211b4/0_0.png',
        },
        {
          id: 'loc-scaean-gates',
          name: 'Scaean Gates',
          x: 62,
          y: 25,
          content: 'The main gates of Troy, where warriors emerge to fight and retreat. Hector will stand alone before these gates in his final moments.',
          image: 'https://cdn.midjourney.com/da54e840-bd75-41fb-b289-1cda697297be/0_0.png',
        },
      ],

      learningPoints: [
        {
          id: 'lp-ch1-8-geography',
          content: 'The geography of the Iliad (ships to plain to walls) creates a strategic back-and-forth that mirrors the larger themes of conflict and stalemate.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 9: Quote Attribution Game
    {
      id: 'iliad-ch1-sc9-quotes',
      type: 'quote-attribution',
      backgroundImage: 'https://cdn.midjourney.com/06efb085-6559-475f-b242-c883368ea80c/0_0.png',

      prompt: 'Who said these famous lines from Book 1 of the Iliad?',

      quotes: [
        {
          id: 'quote-sing',
          text: 'Sing, goddess, the rage of Achilles',
          speaker: 'Homer (narrator)',
          context: 'The epic\'s opening invocation',
          explanation: 'This is the narrator (Homer) invoking the Muse to tell the story. Epic poems traditionally begin with such invocations.',
        },
        {
          id: 'quote-will-not-come',
          text: 'When you beg for me to save you from Hector, I will not come',
          speaker: 'Achilles',
          context: 'Achilles\' prophecy of Greek defeat during his argument with Agamemnon',
          explanation: 'Achilles predicts what will happen: the Greeks will lose without him and Agamemnon will beg for his return. This foreshadows the entire plot.',
        },
        {
          id: 'quote-prize',
          text: 'I will take someone else\'s prize as replacement—perhaps yours, Achilles!',
          speaker: 'Agamemnon',
          context: 'Agamemnon\'s threat that triggers Achilles\' withdrawal',
          explanation: 'This threat to seize Briseis is the spark that ignites the tragedy. Agamemnon\'s pride matches Achilles\' own.',
        },
        {
          id: 'quote-short-life',
          text: 'The gods gave me a choice: long life without glory, or short life with eternal fame',
          speaker: 'Achilles',
          context: 'Achilles explaining his fate to Thetis',
          explanation: 'This prophecy hangs over Achilles throughout the epic. He chose kleos (glory) over length of days—a choice he will later question.',
        },
      ],

      learningPoints: [
        {
          id: 'lp-ch1-9-voices',
          content: 'Homer gives each character a distinct voice and perspective—part of what makes the Iliad psychologically sophisticated for its time.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 10: Zeus Agrees
    {
      id: 'iliad-ch1-sc10-zeus',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/a5f099e8-b864-4f64-85c1-18634789a427/0_0.png',

      content: `On Mount Olympus, Thetis finds Zeus sitting apart from the other gods.

She kneels before him and makes her plea: honor her son Achilles by granting the Trojans victory. Let the Greeks be driven back to their ships. Let them suffer losses. Let Agamemnon realize his mistake and beg Achilles to return.

Zeus hesitates. This will anger Hera, his wife, who favors the Greeks. It will complicate the divine politics of Olympus. It will prolong the war and cause immense suffering.

But he owes Thetis a debt. Long ago, when other gods conspired to overthrow him, Thetis alone remained loyal and summoned help to save his throne. Zeus does not forget debts.

He nods his head—the gesture that cannot be undone, the signal that his will is fixed. "It shall be as you ask," he tells her. "The Trojans will drive the Greeks back. Agamemnon will learn the cost of dishonoring Achilles."

The plan is set. The doom of many Greek warriors is sealed. All because of one man's rage and wounded pride.`,

      inlineAnnotations: [
        {
          id: 'annotation-zeus-nod',
          text: 'nods his head',
          tooltip: {
            title: 'Zeus\'s Nod',
            content: 'In Greek mythology, Zeus\'s nod was irrevocable—once he nodded, fate was sealed. This gesture appears repeatedly in ancient art and literature as a symbol of ultimate divine authority.',
            category: 'cultural-context',
          },
        },
      ],

      learningPoints: [
        {
          id: 'lp-ch1-10-divine-politics',
          content: 'The gods in the Iliad have their own politics, debts, and conflicts that mirror human society—they are powerful but not omnipotent or perfectly moral.',
          category: 'cultural-context',
        },
        {
          id: 'lp-ch1-10-fate',
          content: 'Divine will and mortal choice intertwine: Zeus grants Thetis\'s request, but Achilles chose to make that request. Who bears responsibility?',
          category: 'cultural-context',
        },
      ],
    },

    // Scene 11: Cause-Effect Game
    {
      id: 'iliad-ch1-sc11-cause-effect',
      type: 'cause-effect',
      backgroundImage: 'https://cdn.midjourney.com/06efb085-6559-475f-b242-c883368ea80c/0_0.png',
      prompt: 'Match each action to its consequence. The chain of causation is key to Greek tragedy. See if you can trace the chain of cause and effect in Book 1.',

      pairs: [
        {
          id: 'pair-1',
          cause: 'Agamemnon dishonors Apollo\'s priest',
          effect: 'Apollo sends a plague to punish the Greek army',
          explanation: 'Disrespecting the gods (or their servants) brings divine punishment—a constant theme in Greek mythology.',
        },
        {
          id: 'pair-2',
          cause: 'Calchas reveals that Agamemnon must return Chryseis',
          effect: 'Agamemnon agrees but demands a replacement prize',
          explanation: 'Agamemnon\'s pride won\'t let him be the only king without a prize—his status anxiety drives the conflict.',
        },
        {
          id: 'pair-3',
          cause: 'Agamemnon seizes Briseis from Achilles',
          effect: 'Achilles withdraws from battle in rage',
          explanation: 'This is the central cause-effect chain of the entire epic. Achilles\' withdrawal will cause massive Greek casualties.',
        },
        {
          id: 'pair-4',
          cause: 'Achilles asks Thetis to petition Zeus',
          effect: 'Zeus grants Trojan victory to punish the Greeks',
          explanation: 'Achilles\' request sets the plot in motion: Greeks will lose without him, proving his worth and shaming Agamemnon.',
        },
      ],

      learningPoints: [
        {
          id: 'lp-ch1-11-causation',
          content: 'Greek tragedy emphasizes chains of causation where each choice leads inevitably to the next—free will exists but consequences are inescapable.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 12: Chapter Conclusion
    {
      id: 'iliad-ch1-sc12-conclusion',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/06efb085-6559-475f-b242-c883368ea80c/0_0.png',

      content: `The pieces are now in place.

Agamemnon has his replacement prize but has made a mortal enemy of his best warrior. Achilles sits by his ships, burning with rage, while Zeus's plan unfolds. The Trojans, granted divine favor, will soon surge onto the battlefield with renewed strength.

Thousands of Greeks will die—not because of the war between Greeks and Trojans, but because of a quarrel between two Greeks. The rage of Achilles, that "murderous rage" Homer announced in his opening line, will now demonstrate its terrible cost.

And there's a deeper irony: Achilles chose to come to Troy for kleos—eternal glory through great deeds. But now he refuses to perform any great deeds. He sulks in his tent while others fight and die. His absence from battle is as significant as his presence would be.

The Iliad has begun. The rage is unleashed. The consequences will be catastrophic.

Let's see what happens when Greece's greatest warrior abandons his comrades to prove a point about honor.`,

      learningPoints: [
        {
          id: 'lp-ch1-12-irony',
          content: 'The central irony of the Iliad: Achilles came for glory but achieves it through withdrawal and suffering, not through traditional heroic action.',
          category: 'literary-context',
        },
        {
          id: 'lp-ch1-12-human-cost',
          content: 'Homer never lets us forget that the heroes\' glory comes at the cost of countless ordinary soldiers\' lives—an unusually empathetic perspective for epic poetry.',
          category: 'literary-context',
        },
      ],

      events: {
        onExit: [{
          type: 'quiz',
          componentId: 'quiz-iliad-ch1',
          condition: { type: 'if-not-completed' },
        }],
      },
    },
  ],

  endQuiz: chapter1Quiz,
};

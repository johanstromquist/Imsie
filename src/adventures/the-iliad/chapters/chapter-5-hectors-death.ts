import type { Chapter } from '../../../types';
import { chapter5Quiz } from '../quizzes/chapter-5-quiz';

/**
 * Chapter 5: Hector's Death and Priam's Plea
 *
 * Hector, knowing his fate, chooses to face Achilles rather than hide in Troy.
 * In a brutal duel witnessed by both armies, Achilles kills Hector and desecrates
 * his body by dragging it behind his chariot. For days, Achilles abuses Hector's
 * corpse while mourning Patroclus. Finally, King Priam sneaks into Achilles' tent
 * to beg for his son's body. Their meeting transforms both men.
 *
 * Duration: 40-45 minutes
 * Scenes: 13
 */
export const chapter5: Chapter = {
  id: 'iliad-ch5-death',
  title: 'Chapter 5: Hector\'s Death and Priam\'s Plea',
  description: 'The epic\'s climax: a duel, a death, and a father\'s love that finally breaks through Achilles\' rage.',

  learningObjectives: [
    'Analyze the climactic duel between Achilles and Hector',
    'Understand the theme of humanization through compassion',
    'Recognize the significance of funeral rites in Greek culture',
    'Examine how the epic resolves its central conflict',
  ],

  scenes: [
    // Scene 1: Hector's Moment of Choice
    {
      id: 'iliad-ch5-sc1-choice',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/1c546a98-0276-47db-a5c8-4326a7014d8d/0_0.png',

      content: `Hector stands alone before the Scaean Gates, watching Achilles approach.

For a moment—just a moment—Hector considers fleeing. The walls are right there. Safety is ten steps away. His parents are screaming at him to run. His wife Andromache is somewhere in the city, holding their son, praying he'll come home.

He could run. He could live.

But he cannot. The entire city is watching. His warriors, who followed him into battle, who trusted him to lead them—they're watching from the walls. If their prince and defender flees, what hope do they have? What reason to keep fighting?

And there's the deeper truth: Hector knows he's responsible for this moment. He killed Patroclus. He stripped Achilles' armor. He led the Trojans to victories that pushed Achilles into this terrible rage.

He caused this. He cannot run from it.

So Hector stands and waits, and watches death approach in the form of a grief-maddened warrior in divine armor.`,

      learningPoints: [
        {
          id: 'lp-ch5-1-choice',
          content: 'Hector\'s choice to stand despite overwhelming odds embodies the tragic hero\'s dilemma—honor requires death.',
          category: 'cultural-context',
        },
        {
          id: 'lp-ch5-1-responsibility',
          content: 'Hector\'s sense of responsibility for killing Patroclus shows his moral awareness—unlike heroes who avoid consequence.',
          category: 'cultural-context',
        },
      ],
    },

    // Scene 2: Priam and Hecuba Beg Hector
    {
      id: 'iliad-ch5-sc2-parents',
      type: 'dialogue',
      backgroundImage: 'https://cdn.midjourney.com/1c546a98-0276-47db-a5c8-4326a7014d8d/0_0.png',

      character: {
        id: 'priam',
        name: 'Priam',
        portrait: 'https://cdn.midjourney.com/e2783f2c-35e0-4aef-a43c-7c27763b7a5d/0_0.png',
        description: 'King of Troy, Hector\'s father',
      },

      dialogueTree: {
        id: 'priam-node-1',
        speaker: 'priam',
        text: 'Hector, my son! Do not face him alone! Come inside the walls! Achilles has killed so many of my sons already—I cannot lose you too! You are Troy\'s last hope. If you die, we all die. Please, my child, please—come inside!',

        responses: [
          {
            id: 'resp-father',
            text: '[As Hector] Father, I cannot abandon my post',
            nextNodeId: 'node-mother',
          },
        ],

        allNodes: [
          {
            id: 'node-mother',
            speaker: 'priam',
            text: 'Then your mother speaks: "Hector, have pity on me! I bore you, I raised you, I nursed you. Do not make me watch you die! If Achilles kills you, I cannot even bury you properly—he will feed your body to dogs!"',
            responses: [
              {
                id: 'resp-continue',
                text: 'Continue...',
                nextNodeId: 'node-hector-resolve',
              },
            ],
          },
          {
            id: 'node-hector-resolve',
            speaker: 'priam',
            text: 'But Hector shakes his head. "I led our warriors to battle. I killed Patroclus. I cannot hide now. If I die, remember me as Troy\'s defender who faced his doom with courage."',
            isEnd: true,
          },
        ],
      },

      learningPoints: [
        {
          id: 'lp-ch5-2-parental-grief',
          content: 'Priam and Hecuba\'s pleas emphasize the human cost of heroic values—parents watching their child choose death.',
          category: 'cultural-context',
        },
        {
          id: 'lp-ch5-2-family-vs-honor',
          content: 'The conflict between family love and heroic duty is the Iliad\'s central tragedy—there\'s no way to satisfy both.',
          category: 'cultural-context',
        },
      ],
    },

    // Scene 3: Decision - Hector's Final Choice
    {
      id: 'iliad-ch5-sc3-decision',
      type: 'decision',
      backgroundImage: 'https://cdn.midjourney.com/1c546a98-0276-47db-a5c8-4326a7014d8d/0_0.png',

      prompt: 'What should Hector do?',
      context: `Achilles is coming. Hector can see him now—armor blazing, moving with inhuman speed and fury. Behind Hector, the gates stand open. His parents are screaming. Troy is begging.

He has seconds to decide.

What would you do?`,

      choices: [
        {
          id: 'choice-flee',
          text: 'Flee into the city and live to fight another day',
          consequence: 'The practical choice. But impossible for Hector. His identity, his honor, his entire sense of self depends on being Troy\'s defender. To flee would destroy him as surely as Achilles\' spear.',
          learningPoints: [
            {
              id: 'lp-ch5-3a-identity',
              content: 'Hector\'s heroic identity makes survival psychologically impossible—he would rather die than live dishonored.',
              category: 'cultural-context',
            },
          ],
        },
        {
          id: 'choice-negotiate',
          text: 'Try to negotiate—offer to return Helen and end the war',
          consequence: 'Hector briefly considers this. But he knows Achilles isn\'t here for Helen or Troy or politics. Achilles wants Hector\'s blood to wash away his guilt for Patroclus. There can be no negotiation.',
          learningPoints: [
            {
              id: 'lp-ch5-3b-vengeance',
              content: 'Achilles\' transformation into pure vengeance makes negotiation impossible—he\'s beyond reason or mercy.',
              category: 'cultural-context',
            },
          ],
        },
        {
          id: 'choice-stand',
          text: 'Stand and fight, accept his fate with courage',
          consequence: 'This is what Hector chooses. He will face Achilles, knowing he cannot win. He will die protecting his honor and his city\'s hope. His choice is both noble and tragic—the essence of heroism.',
          learningPoints: [
            {
              id: 'lp-ch5-3c-tragic-heroism',
              content: 'Hector embodies tragic heroism—choosing certain death over dishonor because his values leave no alternative.',
              category: 'cultural-context',
            },
          ],
        },
      ],

      learningPoints: [
        {
          id: 'lp-ch5-3-no-good-choice',
          content: 'Tragic heroes face impossible choices where all options lead to suffering—this is what makes their stories tragic.',
          category: 'plot-structure',
        },
      ],
    },

    // Scene 4: Athena's Deception
    {
      id: 'iliad-ch5-sc4-athena',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/c4e4e8b6-f6c9-4a65-95f8-7f6fda64120b/0_0.png',
      image: 'https://cdn.midjourney.com/7448de8e-efe7-42c6-a192-dc0cd2c00446/0_0.png',

      content: `As Achilles approaches, Hector's courage nearly breaks. He begins to run.

Three times Achilles chases him around Troy's walls while both armies watch in shocked silence. The greatest duel in the war has become a pursuit—Hector fleeing, Achilles hunting, neither able to catch or escape.

Then Athena intervenes. She disguises herself as Deiphobus, Hector's beloved brother, and appears beside him.

"Brother!" she says. "Let's face Achilles together. With both of us, we can win."

Hector's heart lifts. He's not alone! With his brother beside him, he has a chance. He stops running and turns to face Achilles.

They exchange taunts. They hurl spears. Hector's spear bounces off Achilles' divine shield. Achilles' spear misses—Hector dodges.

"Deiphobus!" Hector calls. "Give me your spear!"

He turns—and Deiphobus is gone. There's no one there. It was Athena, and she has abandoned him, leaving him defenseless before Achilles with no spear, no brother, no hope.

Hector understands: the gods have doomed him. This was always how it would end.`,

      inlineAnnotations: [
        {
          id: 'annotation-divine-deception',
          text: 'Athena disguises herself',
          tooltip: {
            title: 'Divine Deception',
            content: 'Athena\'s deception shows the gods\' cruel manipulation of mortals—they don\'t fight fairly but actively sabotage and deceive to achieve their preferred outcomes.',
            category: 'cultural-context',
          },
        },
      ],

      learningPoints: [
        {
          id: 'lp-ch5-4-divine-manipulation',
          content: 'The gods in the Iliad don\'t play fair—they actively deceive and manipulate mortals to ensure their favorites win.',
          category: 'cultural-context',
        },
        {
          id: 'lp-ch5-4-hector-realization',
          content: 'Hector\'s realization that the gods have doomed him transforms the duel from contest to execution—fate is sealed.',
          category: 'cultural-context',
        },
      ],
    },

    // Scene 5: The Duel - Achilles Kills Hector
    {
      id: 'iliad-ch5-sc5-duel',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/c4e4e8b6-f6c9-4a65-95f8-7f6fda64120b/0_0.png',

      content: `Hector stands alone, unarmed except for his sword, facing Achilles in full divine armor with spear and shield.

"I know I'm doomed," Hector says. "But let us make a pact: if I kill you, I will return your body to the Greeks for burial. Promise me the same—let my parents give me funeral rites."

Achilles' response is cold as death: "No pacts. Lions do not make pacts with sheep. When you die, dogs will eat you while I watch."

They fight.

Achilles knows Hector's armor—it's his own armor, stripped from Patroclus's body. He knows every seam, every weak point. He aims his spear at the one gap in the bronze, at Hector's throat where the collarbone meets.

The spear drives through. Hector falls, dying but still conscious.

"I beg you," Hector gasps, "by your parents, by the gods—let my body be ransomed. Don't leave me for dogs."

"I wish my rage was strong enough to eat your flesh raw," Achilles says. "Your parents will never get you back. Never."

Hector's dying words: "Your own death follows close. Paris and Apollo will kill you at the Scaean Gates."

Then Hector dies. And Achilles begins the desecration.`,

      learningPoints: [
        {
          id: 'lp-ch5-5-achilles-inhuman',
          content: 'Achilles\' refusal of Hector\'s dying request violates all codes of honor—grief has made him monstrous.',
          category: 'cultural-context',
        },
        {
          id: 'lp-ch5-5-hector-dignity',
          content: 'Hector maintains dignity even in defeat, making reasonable requests and prophesying Achilles\' death—he dies a hero.',
          category: 'cultural-context',
        },
      ],
    },

    // Scene 6: Cause-Effect - The Duel's Outcomes
    {
      id: 'iliad-ch5-sc6-cause-effect',
      type: 'cause-effect',
      backgroundImage: 'https://cdn.midjourney.com/c4e4e8b6-f6c9-4a65-95f8-7f6fda64120b/0_0.png',

      prompt: 'Match actions to their consequences',

      pairs: [
        {
          id: 'pair-duel-1',
          cause: 'Athena deceives Hector by appearing as his brother',
          effect: 'Hector faces Achilles without weapon, ensuring his defeat',
          explanation: 'Divine intervention tips the scales—Hector never had a fair chance against both Achilles and the gods.',
        },
        {
          id: 'pair-duel-2',
          cause: 'Achilles refuses to return Hector\'s body for burial',
          effect: 'He violates sacred customs, angering gods and mortals alike',
          explanation: 'Achilles\' desecration of Hector exceeds all bounds—even his Greek allies are horrified.',
        },
        {
          id: 'pair-duel-3',
          cause: 'Hector prophesies Achilles\' death at the Scaean Gates',
          effect: 'Achilles knows his own doom is near but doesn\'t care',
          explanation: 'Achilles has accepted death—vengeance was worth dying for.',
        },
        {
          id: 'pair-duel-4',
          cause: 'Troy\'s greatest defender dies',
          effect: 'Troy is doomed; the city will eventually fall',
          explanation: 'Without Hector, Troy has no champion—the war\'s outcome is sealed, though not yet realized.',
        },
      ],

      learningPoints: [
        {
          id: 'lp-ch5-6-consequences',
          content: 'Single events (Hector\'s death) have cascading consequences—personal, political, and cosmic.',
          category: 'plot-structure',
        },
      ],
    },

    // Scene 7: Achilles Desecrates Hector's Body
    {
      id: 'iliad-ch5-sc7-desecration',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/306517ca-0e2c-4bc3-aab2-9393a3de4de6/0_0.png',

      content: `Achilles strips Hector's armor—his own armor, returned at last.

Then he does something unthinkable: he pierces Hector's ankles, threads leather straps through them, and ties the body to his chariot. He drags Hector's corpse through the dust, around Troy's walls, while Hector's parents and wife watch in horror from above.

For days afterward, Achilles drags Hector's body around Patroclus's funeral pyre. Every morning he circles the tomb three times, Hector's body trailing behind. The dust, the rocks, the brutal treatment should destroy the corpse completely.

But Apollo protects it. The god covers Hector's body with his golden aegis, preventing the flesh from tearing, the face from being ruined. Even in death, even abused by Achilles, Hector retains his dignity through divine grace.

The Greeks watch, horrified. Even they—even Achilles' own allies—think he's gone too far. There's a difference between killing an enemy and desecrating the dead. Achilles has crossed a line that even war doesn't excuse.`,

      learningPoints: [
        {
          id: 'lp-ch5-7-desecration',
          content: 'Desecrating corpses violated sacred Greek customs—even enemies deserved burial. Achilles\' actions shock everyone.',
          category: 'cultural-context',
        },
        {
          id: 'lp-ch5-7-apollo-protection',
          content: 'Apollo\'s protection of Hector\'s body shows the gods still honor those who honored them—Hector remains beloved.',
          category: 'cultural-context',
        },
      ],
    },

    // Scene 8: Primary Source - Funeral Rites Revisited
    {
      id: 'iliad-ch5-sc8-source',
      type: 'primary-source',
      backgroundImage: 'https://cdn.midjourney.com/306517ca-0e2c-4bc3-aab2-9393a3de4de6/0_0.png',
      prompt: 'Read about Greek religious beliefs regarding the dead and answer the questions below.',
      source: {
        title: 'Greek Religious Beliefs About the Dead',
        author: 'Based on Homeric values',
        date: 'Circa 750 BCE',
        type: 'text',
        content: `**The Sacred Duty to the Dead**
<br /><br />
For the ancient Greeks, the treatment of the dead was not simply a matter of custom—it was a sacred religious obligation that transcended the boundaries of war and enmity.
<br /><br />
**Religious Beliefs:**
<br /><br />
Greeks believed the soul could not enter the underworld and find peace without proper funeral rites. A corpse left unburied or desecrated condemned the soul to wander eternally between worlds—neither fully alive nor truly dead. This fate was considered worse than death itself.
<br /><br />
**The Rules of War:**
<br /><br />
Even in warfare, certain boundaries were sacred:<br />
- Enemies who died in battle deserved burial<br />
- Battles would pause to allow both sides to retrieve their dead<br />
- Mutilating or desecrating corpses was an offense against the gods<br />
- Denying funeral rites was considered barbaric and inhuman
<br /><br />
**Why Achilles' Actions Shock Everyone:**
<br /><br />
When Achilles drags Hector's body behind his chariot and refuses to return it for burial, he commits one of the most horrifying acts imaginable in Greek culture. Even his own allies are disturbed. This isn't just revenge—it's a violation of cosmic order, an offense against both gods and humanity.
<br /><br />
The fact that Apollo must intervene to protect Hector's body from mutilation shows how profoundly Achilles has transgressed. He has allowed his grief and rage to drive him beyond the bounds of acceptable human behavior.
<br /><br />
**Priam's Journey:**
<br /><br />
This is why King Priam will risk everything—sneaking through enemy lines at night—to beg for his son's body. Without proper burial, Hector's soul will never rest. A father's duty to his dead son transcends even the danger of death.`,
      },

      questions: [
        {
          id: 'funeral-q1',
          question: 'Why was Achilles\' desecration of Hector\'s body considered so horrifying?',
          type: 'multiple-choice',
          options: [
            'It violated sacred Greek beliefs about honoring the dead',
            'It was against the laws of war',
            'It angered the Trojan gods',
            'It was considered cowardly',
          ],
          correctAnswer: 'It violated sacred Greek beliefs about honoring the dead',
          explanation: 'Desecrating a corpse was one of the most terrible acts in Greek culture, as it prevented the soul from finding peace in the afterlife.',
        },
      ],

      learningPoints: [
        {
          id: 'iliad-ch5-lp-funeral',
          content: 'Proper funeral rites were sacred to ancient Greeks; desecrating a corpse was considered one of the most terrible violations.',
          category: 'historical-context',
        },
      ],
    },

    // Scene 9: The Gods Intervene
    {
      id: 'iliad-ch5-sc9-gods-debate',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/a5f099e8-b864-4f64-85c1-18634789a427/0_0.png', // Mount Olympus - Divine Realm

      content: `On Olympus, the gods debate.

Nine days have passed since Hector's death. For nine days, Achilles has dragged the corpse around Patroclus's tomb. The gods watch in growing disgust.

"This is too much," Apollo says. "Achilles dishonors the dead and shows no pity. Even in grief, there are limits. The man has become a monster."

Several gods agree—Hector was pious, he made offerings, he honored the divine. He deserves better than this brutal desecration.

But Hera, Athena, and Poseidon remain unmoved. They hate Troy. They want it destroyed. If Achilles' rage serves that purpose, let him rage.

Finally, Zeus speaks: "Enough. Thetis, go to your son. Tell him he must return Hector's body when Priam comes to ransom it. This has gone on long enough."

And to Iris, the messenger goddess: "Tell Priam to take ransom gifts and go to Achilles' tent—alone, at night. Tell him the gods will protect him. It is time to end this."

The gods have decided. Achilles' rage must be broken. And only a father's grief can break it.`,

      learningPoints: [
        {
          id: 'lp-ch5-9-divine-limits',
          content: 'Even the gods have limits—Achilles\' excessive brutality finally crosses a line that Zeus must address.',
          category: 'cultural-context',
        },
        {
          id: 'lp-ch5-9-divine-pity',
          content: 'Apollo\'s defense of Hector shows gods can feel pity and demand justice, even for mortals on the "wrong" side.',
          category: 'cultural-context',
        },
      ],
    },

    // Scene 10: Priam's Journey
    {
      id: 'iliad-ch5-sc10-priams-journey',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/d3a2bc69-adaa-42ea-b9d9-94312d169b7f/0_0.png', // Priam's Nighttime Journey

      content: `Night falls. King Priam, eighty years old, loads a wagon with ransom gifts: gold, bronze, fine robes, precious vessels. Treasures that could ransom a dozen warriors.

His family begs him not to go. "Father, you'll be killed! Achilles has no mercy! He's murdered so many of your sons already!"

But Priam is resolute. "My son needs burial. His soul wanders in torment. If I must die to bring him peace, so be it. I am old. I have lived my life. But Hector—Hector deserves rest."

He drives through the night, alone except for a herald. The journey to the Greek camp is terrifying—enemy territory, darkness, certain death if he's discovered.

But Hermes, disguised as a young Greek soldier, appears and guides him safely through. The god himself escorts this grieving father on his impossible mission.

They reach Achilles' tent. Priam dismounts, trembling with age and fear. Inside, he can hear voices—Achilles and his Myrmidons, finishing their evening meal.

Priam takes a breath and enters.`,

      learningPoints: [
        {
          id: 'lp-ch5-10-priams-courage',
          content: 'Priam\'s willingness to risk death for his son\'s burial shows how sacred funeral rites were—worth dying for.',
          category: 'cultural-context',
        },
        {
          id: 'lp-ch5-10-divine-protection',
          content: 'Hermes guiding Priam shows the gods actively supporting this mission of mercy and reconciliation.',
          category: 'thematic-analysis',
        },
      ],
    },

    // Scene 11: Priam Kneels Before Achilles
    {
      id: 'iliad-ch5-sc11-supplication',
      type: 'dialogue',
      backgroundImage: 'https://cdn.midjourney.com/4a912911-cff9-4d6e-a955-19b2d73ca501/0_0.png', // Achilles' Tent - Meeting of Enemies

      character: {
        id: 'priam-supplication',
        name: 'Priam',
        portrait: 'https://cdn.midjourney.com/e2783f2c-35e0-4aef-a43c-7c27763b7a5d/0_0.png',
        description: 'King of Troy, risking everything',
      },

      dialogueTree: {
        id: 'priam-supplication-node-1',
        speaker: 'priam-supplication',
        text: '[Priam enters the tent and does the unthinkable: he kneels before Achilles and kisses his hands—the hands that killed his sons.] "Achilles, think of your own father. Peleus is old, like me. He waits at home, hoping to see his son again. I had fifty sons. You and this war have killed most of them. But Hector—Hector was the best of them. I come to ransom his body. I kiss the hands of the man who murdered my children. Have pity, Achilles. Remember your father."',

        responses: [
          {
            id: 'resp-silent',
            text: '[As Achilles, remain silent, stunned by this old man\'s courage]',
            nextNodeId: 'node-achilles-moved',
          },
        ],

        allNodes: [
          {
            id: 'node-achilles-moved',
            speaker: 'priam-supplication',
            text: 'Achilles stares at the old king kneeling before him. Priam\'s beard is white, his hands shake with age. He looks exactly like Peleus—like Achilles\' own father, whom he will never see again. The anger that has consumed Achilles for weeks suddenly... cracks.',
            responses: [
              {
                id: 'resp-continue2',
                text: 'Continue...',
                nextNodeId: 'node-tears',
              },
            ],
          },
          {
            id: 'node-tears',
            speaker: 'priam-supplication',
            text: 'Achilles begins to weep. Not from rage this time, but from grief—real grief, shared grief. Priam weeps too. They sit together in Achilles\' tent, enemies united by loss. One mourns a son, the other a beloved friend. For a moment, the war doesn\'t matter. Only their shared humanity remains.',
            isEnd: true,
          },
        ],
      },

      learningPoints: [
        {
          id: 'lp-ch5-11-supplication-power',
          content: 'Priam\'s supplication (ritual begging) is powerful because he humbles himself completely, appealing to Achilles\' shared humanity.',
          category: 'cultural-context',
        },
        {
          id: 'lp-ch5-11-father-parallel',
          content: 'Priam\'s invocation of Achilles\' father creates empathy—Achilles sees his own father in this grieving old man.',
          category: 'character-analysis',
        },
        {
          id: 'lp-ch5-11-shared-grief',
          content: 'Shared grief transcends enmity—both men have lost what they loved most, creating unexpected connection.',
          category: 'thematic-analysis',
        },
      ],
    },

    // Scene 12: Decision - Achilles' Choice
    {
      id: 'iliad-ch5-sc12-decision',
      type: 'decision',
      backgroundImage: 'https://cdn.midjourney.com/4a912911-cff9-4d6e-a955-19b2d73ca501/0_0.png', // Achilles' Tent - Meeting of Enemies

      prompt: 'An old man who killed your sons kneels before you, begging for mercy. What do you feel?',

      choices: [
        {
          id: 'choice-rage',
          text: 'Rage—he is the enemy, father of the man who killed Patroclus',
          consequence: 'The rage flares for a moment. But then you see his tears, his trembling hands, and the rage... fades. He is just an old man who lost his son. Like your father will lose you.',
          nextSceneId: 'iliad-ch5-sc13-resolution',
        },
        {
          id: 'choice-pity',
          text: 'Pity—he reminds you of your own father, waiting at home',
          consequence: 'You see Peleus in Priam\'s face. Old, grieving, powerless. Your father will weep like this when news of your death reaches home. The thought breaks something in you.',
          nextSceneId: 'iliad-ch5-sc13-resolution',
        },
        {
          id: 'choice-recognition',
          text: 'Recognition—we are all victims of fate and loss',
          consequence: 'For the first time since Patroclus died, you see clearly: you and Priam are the same. War has destroyed you both. Neither of you chose this suffering.',
          nextSceneId: 'iliad-ch5-sc13-resolution',
        },
      ],

      learningPoints: [
        {
          id: 'lp-ch5-12-humanization',
          content: 'Priam\'s supplication humanizes the enemy—Achilles can no longer see Trojans as mere targets for revenge.',
          category: 'thematic-analysis',
        },
      ],
    },

    // Scene 13: The Resolution - Humanity Restored
    {
      id: 'iliad-ch5-sc13-resolution',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/ce207752-6373-496f-b270-0d6d146d3a79/0_0.png', // Hector's Funeral Pyre

      content: `Achilles gently raises Priam to his feet.

"Old man," he says, his voice soft for the first time in weeks, "you have extraordinary courage to come here. The gods must love you to bring you safely through our camp."

He calls for his servants. "Wash Hector's body. Prepare it for burial. Do it where Priam cannot see—I don't want him to witness what I've done to his son. I don't want him to see and lose his temper, and force me to kill him too."

They wash Hector carefully, anoint him with oil, wrap him in fine robes. The corpse is perfect—Apollo has protected it. Despite nine days of abuse, Hector looks like he's merely sleeping.

Achilles and Priam share a meal. They sit together, really looking at each other for the first time.

"You are beautiful," Priam says quietly, "like a god. My son was beautiful too."

"Your son fought bravely," Achilles replies. "He knew he would die, but he stood and faced me anyway. There is honor in that."

They talk through the night—not as enemies, but as men bound by grief and fate. Achilles gives Priam twelve days of truce for Hector's funeral. Priam accepts gratefully.

When dawn comes, Priam loads his son's body onto the wagon and returns to Troy.

Achilles watches him go, knowing he has done something right at last. Patroclus would have approved. Patroclus, who always had compassion even when Achilles had only rage.`,

      learningPoints: [
        {
          id: 'lp-ch5-13-restoration',
          content: 'Achilles\' act of mercy restores his humanity—compassion succeeds where vengeance failed to heal his grief.',
          category: 'character-analysis',
        },
        {
          id: 'lp-ch5-13-shared-humanity',
          content: 'The meal shared between Achilles and Priam symbolizes reconciliation and recognition of shared humanity across enemy lines.',
          category: 'thematic-analysis',
        },
        {
          id: 'lp-ch5-13-patroclus-influence',
          content: 'Achilles honors Patroclus best not through revenge, but by reclaiming the compassion Patroclus embodied.',
          category: 'character-analysis',
        },
        {
          id: 'lp-ch5-13-tragic-beauty',
          content: 'The Iliad ends not with victory but with shared grief and small acts of mercy—finding beauty in tragedy.',
          category: 'thematic-analysis',
        },
      ],

      events: {
        onExit: [
          {
            type: 'quiz',
            componentId: 'quiz-iliad-ch5',
            condition: { type: 'if-not-completed' },
          },
        ],
      },
    },
  ],

  endQuiz: chapter5Quiz,
};

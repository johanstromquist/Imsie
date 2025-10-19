import type { Chapter } from '../../../types';
import { chapter3Quiz } from '../quizzes/chapter-3-quiz';

/**
 * Chapter 3: The Death of Patroclus
 *
 * As Greeks face annihilation, Patroclus—Achilles' closest companion—begs to
 * borrow Achilles' armor and lead the Myrmidons into battle. Achilles reluctantly
 * agrees but warns him only to defend the ships. Patroclus drives back the Trojans
 * but, ignoring Achilles' warning, pursues them to Troy's walls where Apollo
 * intervenes and Hector delivers the killing blow.
 *
 * Duration: 45-50 minutes
 * Scenes: 15
 */
export const chapter3: Chapter = {
  id: 'iliad-ch3-patroclus',
  title: 'Chapter 3: The Death of Patroclus',
  description: 'Witness the tragedy that will transform Achilles\' rage into grief—and grief into something far more terrible.',

  learningObjectives: [
    'Analyze the relationship between Achilles and Patroclus',
    'Understand dramatic irony and tragic reversal',
    'Recognize how personal loss transforms motivation',
    'Examine the theme of mortality and glory',
  ],

  scenes: [
    // Scene 1: Greeks Desperate
    {
      id: 'iliad-ch3-sc1-desperate',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/3a3728c1-643d-4c06-ae8c-9dc4d19acdbd/0_0.png',

      content: `The Greek camp is burning.

Hector has smashed through the fortifications. Trojan warriors swarm among the ships with torches. One ship catches fire—black smoke billows into the sky. If the flames spread, the entire fleet will burn. The Greeks will be trapped in a foreign land, far from home, facing annihilation.

Agamemnon weeps. His offers to Achilles—gifts worth a kingdom—have been refused. Ajax and Diomedes are wounded. Odysseus is bleeding. Every Greek hero is being driven back.

And Achilles watches from afar, unmoved.

But someone else watches too: Patroclus, Achilles' dearest friend and companion. He stands beside Achilles, looking at the burning ship, listening to the screams of dying Greeks—men they've fought beside for ten years.

Patroclus can no longer bear it.`,

      learningPoints: [
        {
          id: 'lp-ch3-1-crisis',
          content: 'The burning ship is the story\'s crisis point—the moment of maximum danger that forces decisive action.',
          category: 'plot-structure',
        },
        {
          id: 'lp-ch3-1-patroclus',
          content: 'Patroclus embodies compassion and loyalty—he cannot watch others suffer even when they dishonored his friend.',
          category: 'cultural-context',
        },
      ],
    },

    // Scene 2: Patroclus Pleads with Achilles
    {
      id: 'iliad-ch3-sc2-plea',
      type: 'dialogue',
      backgroundImage: 'https://cdn.midjourney.com/838a3990-f063-4c16-aaad-15332265012f/0_0.png',

      character: {
        id: 'patroclus',
        name: 'Patroclus',
        portrait: 'https://cdn.midjourney.com/13476f46-ea1b-4ddb-a333-3fb54ff9cdb0/0_0.png',
        description: 'Achilles\' closest companion',
      },

      dialogueTree: {
        id: 'pat-node-1',
        speaker: 'patroclus',
        text: 'Achilles, I am begging you. Our friends are dying! Look at them—Ajax bleeding, Odysseus wounded, the ships burning! How can you just sit here? Is your rage worth more than their lives?',

        responses: [
          {
            id: 'resp-ach-honor',
            text: '[As Achilles] My honor was violated. They deserve this.',
            nextNodeId: 'node-honor',
          },
          {
            id: 'resp-ach-stubborn',
            text: '[As Achilles] Agamemnon must beg. I will not relent.',
            nextNodeId: 'node-stubborn',
          },
        ],

        allNodes: [
          {
            id: 'node-honor',
            speaker: 'patroclus',
            text: 'Your honor? What about theirs? What about mine? I am Greek too! Must I die because of your pride? These are our comrades, Achilles! Men we\'ve shared wine with, fought beside for ten years!',
            responses: [
              {
                id: 'resp-continue',
                text: 'Continue...',
                nextNodeId: 'node-compromise',
              },
            ],
          },
          {
            id: 'node-stubborn',
            speaker: 'patroclus',
            text: 'He DID beg! He sent ambassadors with treasure, with apologies, with Briseis herself! But you refused! Your stubbornness has become cruelty, my friend.',
            responses: [
              {
                id: 'resp-continue2',
                text: 'Continue...',
                nextNodeId: 'node-compromise',
              },
            ],
          },
          {
            id: 'node-compromise',
            speaker: 'patroclus',
            text: 'If you will not fight, at least let ME go. Give me your armor, let me lead the Myrmidons. The Trojans will see your armor and think you\'ve returned—they\'ll flee! I can save the ships without you having to yield.',
            responses: [
              {
                id: 'resp-consider',
                text: '[As Achilles] ...Tell me more',
                nextNodeId: 'node-agreement',
              },
            ],
          },
          {
            id: 'node-agreement',
            speaker: 'patroclus',
            text: 'Just let me drive them from the ships! I won\'t pursue them far—just enough to save our people. Please, Achilles. If you love me at all, let me save them.',
            isEnd: true,
          },
        ],
      },

      learningPoints: [
        {
          id: 'lp-ch3-2-relationship',
          content: 'Patroclus and Achilles\' relationship is the epic\'s emotional core—deeper than friendship, defined by absolute loyalty and love.',
          category: 'cultural-context',
        },
        {
          id: 'lp-ch3-2-compassion',
          content: 'Patroclus\'s compassion for suffering Greeks contrasts with Achilles\' continued rage—showing different heroic values.',
          category: 'cultural-context',
        },
      ],
    },

    // Scene 3: Decision - Achilles' Choice
    {
      id: 'iliad-ch3-sc3-decision',
      type: 'decision',
      backgroundImage: 'https://cdn.midjourney.com/838a3990-f063-4c16-aaad-15332265012f/0_0.png',

      prompt: 'Should Achilles let Patroclus go?',
      context: `Achilles looks at his dearest friend. Patroclus is weeping—not for himself, but for the Greeks dying on the beach. Achilles can see the ships burning. He can hear the screaming.

His rage has been satisfied. Agamemnon has been humiliated. Everyone knows now what happens when Achilles is dishonored. But the price... the price is so high.

He could return himself. He could end this in an hour. But his pride won't let him.

Patroclus offers a compromise: wear Achilles' armor, frighten the Trojans, save the ships. Achilles won't have to yield—he can claim his friend did it, not him.

What should he decide?`,

      choices: [
        {
          id: 'choice-refuse',
          text: 'Refuse. Keep Patroclus safe. Let the ships burn.',
          consequence: 'The safest choice for Patroclus, but Achilles cannot make it. To refuse his dearest friend\'s plea would betray their bond. Even Achilles\' rage has limits.',
          learningPoints: [
            {
              id: 'lp-ch3-3a-safety',
              content: 'Refusing would save Patroclus but betray their friendship—Achilles is trapped between love and pride.',
              category: 'cultural-context',
            },
          ],
        },
        {
          id: 'choice-allow',
          text: 'Allow it, but warn him: defend the ships only, do not pursue.',
          consequence: 'This is what Achilles chooses. He lends Patroclus his armor and his Myrmidons, but strictly forbids pursuit. "Drive them from the ships, then STOP. Don\'t go further. Don\'t try to take Troy." If only Patroclus had listened...',
          learningPoints: [
            {
              id: 'lp-ch3-3b-warning',
              content: 'Achilles\' warning is the setup for tragic irony—we know Patroclus will ignore it, and the consequences will be fatal.',
              category: 'literary-context',
            },
          ],
        },
        {
          id: 'choice-return',
          text: 'Return to battle yourself. End this.',
          consequence: 'The wise choice, but impossible for Achilles. His pride is still wounded. He needs Agamemnon to crawl, to truly suffer. He chooses the middle path instead—and dooms his friend.',
          learningPoints: [
            {
              id: 'lp-ch3-3c-pride',
              content: 'Achilles\' continued pride makes him choose a compromise that satisfies neither honor nor safety—the worst of both options.',
              category: 'cultural-context',
            },
          ],
        },
      ],

      learningPoints: [
        {
          id: 'lp-ch3-3-tragic-choice',
          content: 'Achilles\' decision to let Patroclus go wearing his armor is the tragic turning point—the moment the story becomes irreversible.',
          category: 'plot-structure',
        },
      ],
    },

    // Scene 4: Patroclus Dons the Armor
    {
      id: 'iliad-ch3-sc4-arming',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/838a3990-f063-4c16-aaad-15332265012f/0_0.png',
      image: 'https://cdn.midjourney.com/75c6bac3-02cb-4a31-a018-dda026bb534d/0_0.png',

      content: `Patroclus puts on Achilles' legendary armor.

The bronze gleams. The horsehair plume flows from the helmet. The great shield, the breastplate, the greaves—all mark him as Achilles, the greatest warrior in the world. The Myrmidons gather around him, eager to finally return to battle after sitting idle for so long.

Achilles watches his friend transform. For a moment, he sees himself—the warrior he was before rage consumed him. He feels a pang of fear, a premonition.

"Remember," Achilles says. "Drive them from the ships, then stop. Do not pursue them to the walls. Do not try to take Troy. Just save the ships and come back. Come back to me."

Patroclus nods. He promises. He means it.

But in the heat of battle, with victory in reach, with glory calling... will he remember?

The Myrmidons march to war. Achilles watches them go. He has armed his dearest friend and sent him into danger to satisfy both pride and compassion—a compromise that pleases neither the gods nor fate.`,

      learningPoints: [
        {
          id: 'lp-ch3-4-armor-identity',
          content: 'Armor in the Iliad signifies identity—when Patroclus wears Achilles\' armor, he becomes Achilles in the eyes of others, but cannot match his skill.',
          category: 'cultural-context',
        },
        {
          id: 'lp-ch3-4-dramatic-irony',
          content: 'The audience knows Patroclus is doomed—this creates dramatic irony as we watch him march confidently to his death.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 5: Patroclus' Aristeia Begins
    {
      id: 'iliad-ch3-sc5-aristeia',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/86f92843-b5a3-46f4-9f85-c92cab172506/0_0.png',

      content: `Patroclus storms onto the battlefield, and the Trojans recoil in terror.

"Achilles has returned!" they cry. "Achilles is back!"

The armor gleams. The Myrmidons surge forward, fresh and fierce after their long rest. And Patroclus fights like a man possessed—better than he's ever fought before, as if Achilles' armor grants him Achilles' power.

He cuts through the Trojan ranks like a scythe through wheat. Warriors flee before him. Hector himself pulls back, uncertain. The tide of battle reverses instantly.

Patroclus drives the Trojans back from the ships. The fires are extinguished. The Greeks cheer, rallying around the warrior they believe is Achilles. Patroclus pushes forward, and forward, and forward.

He should stop. He promised Achilles he would stop.

He doesn't stop.`,

      learningPoints: [
        {
          id: 'lp-ch3-5-aristeia-convention',
          content: 'Patroclus\' aristeia (warrior\'s finest hour) follows epic conventions—but subverts them by ending in death rather than triumph.',
          category: 'literary-context',
        },
        {
          id: 'lp-ch3-5-hubris',
          content: 'Patroclus\' decision to continue fighting despite his promise is hubris—overconfidence that brings divine punishment.',
          category: 'cultural-context',
        },
      ],
    },

    // Scene 6: Patroclus Kills Sarpedon
    {
      id: 'iliad-ch3-sc6-sarpedon',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/86f92843-b5a3-46f4-9f85-c92cab172506/0_0.png',

      content: `Patroclus achieves his greatest kill: Sarpedon, son of Zeus, king of Lycia, one of Troy's most powerful allies.

The duel is fierce. Sarpedon is a hero in his own right, beloved by his father Zeus. But Patroclus, fighting in Achilles' armor with Achilles' fury, drives his spear through Sarpedon's heart.

On Mount Olympus, Zeus watches his son die. He considers intervening—he could save Sarpedon, lift him from the battlefield, deny fate itself. But Hera stops him: "If you save your son, every god will want to save their favorites. Fate must stand."

Zeus weeps tears of blood. But he lets his son die, because not even Zeus can overturn fate when its time has come.

Patroclus stands over Sarpedon's body, triumph surging through him. He has killed a demigod. He has proven himself equal to Achilles. He is invincible.

He is wrong.`,

      inlineAnnotations: [
        {
          id: 'annotation-zeus-tears',
          text: 'Zeus weeps tears of blood',
          tooltip: {
            title: 'Divine Grief',
            content: 'Zeus\'s tears of blood show that even the king of gods suffers—yet even he must submit to fate. This moment emphasizes fate\'s supremacy over divine power.',
            category: 'cultural-context',
          },
        },
      ],

      learningPoints: [
        {
          id: 'lp-ch3-7-fate-supreme',
          content: 'Even Zeus cannot overturn fate—in Greek cosmology, fate (moira) is more fundamental than the gods\' will.',
          category: 'cultural-context',
        },
        {
          id: 'lp-ch3-7-peak-moment',
          content: 'Patroclus\' killing of Sarpedon is his peak moment—making his immediate downfall more tragic through contrast.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 7: Patroclus Pursues to Troy's Walls
    {
      id: 'iliad-ch3-sc7-pursuit',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/e2c56eeb-b110-4968-980e-6a45ede55338/0_0.png',

      content: `Victory turns Patroclus reckless.

He's driven the Trojans back. He's saved the ships. He's killed Sarpedon. The enemy flees before him in terror. This is what it feels like to be Achilles—invincible, unstoppable, beyond mortal limits.

Achilles told him: "Drive them from the ships, then return. Don't pursue them. Don't attack the city."

But Patroclus doesn't stop.

The Trojans run toward Troy's walls, and Patroclus chases them. He forgets Achilles' warning. He forgets his own limitations. In this moment, wearing Achilles' armor, feeling Achilles' power, he believes he IS Achilles.

He's wrong.

Three times Patroclus tries to scale Troy's walls. Three times he's repelled. On the fourth attempt, a voice speaks—divine, terrible, unmistakable:

"Back, Patroclus. Troy is not fated to fall to your spear, nor even to Achilles'. The city will stand until the gods themselves decree otherwise."

Apollo has intervened.`,

      learningPoints: [
        {
          id: 'lp-ch3-7-hubris',
          content: 'Patroclus\'s hubris (excessive pride) leads him to ignore Achilles\' warning and attack beyond his limits—the classic setup for tragic downfall.',
          category: 'cultural-context',
        },
        {
          id: 'lp-ch3-7-fate-walls',
          content: 'Apollo\'s statement that Troy won\'t fall to Achilles foreshadows both Achilles\' death and Troy\'s eventual fall by other means (the Trojan Horse).',
          category: 'literary-context',
        },
      ],
    },

    // Scene 8: Apollo Strikes
    {
      id: 'iliad-ch3-sc8-apollo',
      type: 'dialogue',
      backgroundImage: 'https://cdn.midjourney.com/e2c56eeb-b110-4968-980e-6a45ede55338/0_0.png',
      image: 'https://cdn.midjourney.com/43d80cd7-d4b2-415d-86f0-00bbef7f6e56/0_0.png',

      character: {
        id: 'apollo',
        name: 'Apollo',
        portrait: 'https://cdn.midjourney.com/d5c31344-7405-4ec0-978b-d7a352899c22/0_0.png',
        description: 'God of prophecy, music, and plague—protector of Troy',
      },

      dialogueTree: {
        id: 'apollo-node-1',
        speaker: 'apollo',
        text: 'You overstep, mortal. This is not your day to take Troy. This is not even Achilles\' day. Step back.',

        responses: [
          {
            id: 'resp-defy',
            text: 'I will not stop—not when victory is so close!',
            nextNodeId: 'node-strike',
          },
        ],

        allNodes: [
          {
            id: 'node-strike',
            speaker: 'apollo',
            text: 'Then face the consequences of defying a god.',
            isEnd: true,
          },
        ],
      },

      learningPoints: [
        {
          id: 'lp-ch3-8-divine-intervention',
          content: 'Gods in the Iliad directly intervene in battle when mortals threaten to upset fate—divine will ultimately controls the war\'s outcome.',
          category: 'cultural-context',
        },
      ],
    },

    // Scene 9: Patroclus Stripped and Stunned
    {
      id: 'iliad-ch3-sc9-stunned',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/e49fb964-6f09-4bd7-8694-e7ac0a07bec8/0_0.png',

      content: `Apollo strikes.

Not with sword or spear—gods don't need such crude weapons. Apollo strikes with divine power, and Patroclus staggers as if hit by a battering ram.

His helmet flies off—Achilles' great plumed helmet, rolling in the dust.

His shield drops from numb fingers.

His spear shatters.

His armor—Achilles' divine armor that has protected him through the entire battle—comes undone. Straps break. Bronze plates fall clattering to the ground.

Patroclus stands exposed, vulnerable, mortal again.

He realizes, too late, the terrible truth: he is not Achilles. He never was. The armor doesn't make the hero. And now, stripped of that protection, he faces Troy's greatest warrior.

Hector approaches, spear raised.`,

      learningPoints: [
        {
          id: 'lp-ch3-9-reversal',
          content: 'The moment when Patroclus is stripped is the peripeteia (reversal)—his highest triumph immediately becomes his lowest point.',
          category: 'plot-structure',
        },
        {
          id: 'lp-ch3-9-identity',
          content: 'Losing the armor symbolizes Patroclus losing his borrowed identity—he can\'t be Achilles, and the attempt costs him everything.',
          category: 'thematic-analysis',
        },
      ],
    },

    // Scene 10: Hector Kills Patroclus
    {
      id: 'iliad-ch3-sc10-death',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/e49fb964-6f09-4bd7-8694-e7ac0a07bec8/0_0.png',

      content: `Hector's spear takes Patroclus in the belly.

Patroclus falls. The man who saved the Greek ships, who killed Sarpedon, who drove back the entire Trojan army—falls in the dust, mortal and dying.

Hector stands over him, triumphant but unaware. He doesn't know this is Patroclus. He thinks he's killed some lesser warrior wearing stolen armor.

"Who are you?" Hector demands. "Some coward who thought Achilles' armor would make you brave?"

Patroclus, with his dying breath, speaks:

"You boast now, Hector... but Apollo defeated me... not you. And know this—Achilles will avenge me. He will kill you before Troy's gates. Your death follows mine... as night follows day."

Then Patroclus dies, and his soul flees down to Hades—mourning his youth, leaving the light unwillingly.

Hector pulls his spear free. "Perhaps. Or perhaps Achilles will die at my hands instead. Who can say? Only the gods know which of us is doomed."

But we know. The prophecy is clear. Hector has just killed the one person Achilles loved more than life itself.

The consequences will be terrible.`,

      inlineAnnotations: [
        {
          id: 'annotation-prophecy',
          text: 'Achilles will avenge me',
          tooltip: {
            title: 'Dying Prophecy',
            content: 'Dying warriors in Greek epic often prophesy the future with supernatural accuracy. Patroclus knows exactly how his death will unfold—making it all the more tragic.',
            category: 'literary-context',
          },
        },
      ],

      learningPoints: [
        {
          id: 'lp-ch3-10-dramatic-irony',
          content: 'Dramatic irony: readers know Patroclus\'s prophecy will come true, but Hector doesn\'t—making his confidence tragic.',
          category: 'literary-context',
        },
        {
          id: 'lp-ch3-10-death-scene',
          content: 'Homer treats warrior deaths with dignity and pathos—even in violent epics, individual mortality is mourned.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 11: Fight Over the Body
    {
      id: 'iliad-ch3-sc11-fight',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/3c6e1074-b54a-4fed-bfac-58ed2eef6756/0_0.png',

      content: `What follows is one of the most brutal sequences in the entire Iliad.

The Greeks see Patroclus fall. Ajax and Menelaus rush forward to protect the body—because in Greek culture, allowing an enemy to desecrate or ransom a hero's corpse is an unbearable shame.

The Trojans want the body too. Hector wants to decapitate it, drag it to Troy, and display it as a trophy.

A savage battle erupts over Patroclus's fallen form. Men fight and die to protect or seize a corpse. The dust rises. Blood soaks into the earth. Warriors fall on all sides.

Ajax fights like a lion, standing over Patroclus's body, shield raised, spear thrusting at any Trojan who comes close. Menelaus weeps as he fights—for shame, for grief, for fury.

Hector strips Achilles' armor from the corpse and puts it on himself. He wears the armor of the greatest Greek warrior—not knowing it will be his death shroud.

The fight rages for hours. Finally, the Greeks manage to pull Patroclus's body back toward their lines. But it comes at terrible cost—dozens dead, hundreds wounded.

And still, no one has told Achilles what happened.`,

      learningPoints: [
        {
          id: 'lp-ch3-11-body-significance',
          content: 'The fight over Patroclus\'s body shows how important proper burial was—Greeks would die to prevent their comrade\'s desecration.',
          category: 'cultural-context',
        },
        {
          id: 'lp-ch3-11-hector-armor',
          content: 'Hector wearing Achilles\' armor creates dramatic irony—the armor that should protect him will actually mark him for death.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 12: Timeline Game - Patroclus' Tragic Arc
    {
      id: 'iliad-ch3-sc12-timeline',
      type: 'timeline-game',
      backgroundImage: 'https://cdn.midjourney.com/86f92843-b5a3-46f4-9f85-c92cab172506/0_0.png',

      prompt: 'Order the events of Patroclus\' tragic arc from triumph to disaster.',
      successThreshold: 70,
      timelineEvents: [
        {
          id: 'event-pat-1',
          title: 'Patroclus Dons Achilles\' Armor',
          description: 'He borrows the armor and leads the Myrmidons into battle',
          year: 1,
        },
        {
          id: 'event-pat-2',
          title: 'Trojans Flee in Terror',
          description: 'Thinking Achilles has returned, they retreat',
          year: 2,
        },
        {
          id: 'event-pat-3',
          title: 'Patroclus Saves the Greek Ships',
          description: 'He extinguishes the fires and drives Trojans back',
          year: 3,
        },
        {
          id: 'event-pat-4',
          title: 'Patroclus Kills Sarpedon',
          description: 'He slays Zeus\'s son in single combat',
          year: 4,
        },
        {
          id: 'event-pat-5',
          title: 'Patroclus Ignores Achilles\' Warning',
          description: 'He pursues Trojans to the walls instead of stopping',
          year: 5,
        },
        {
          id: 'event-pat-6',
          title: 'Apollo Strikes Patroclus',
          description: 'The god strips away his armor and stuns him',
          year: 6,
        },
        {
          id: 'event-pat-7',
          title: 'Hector Kills Patroclus',
          description: 'Hector\'s spear delivers the killing blow',
          year: 7,
        },
        {
          id: 'event-pat-8',
          title: 'Greeks Fight for the Body',
          description: 'Ajax and Menelaus defend Patroclus\'s corpse',
          year: 8,
        },
      ],

      learningPoints: [
        {
          id: 'lp-ch3-12-tragic-structure',
          content: 'Patroclus\'s story follows classic tragic structure: rise (victory), hubris (overconfidence), peripeteia (reversal), catastrophe (death).',
          category: 'plot-structure',
        },
      ],
    },

    // Scene 13: Primary Source - Funeral Practices
    {
      id: 'iliad-ch3-sc13-source',
      type: 'primary-source',
      backgroundImage: 'https://cdn.midjourney.com/86f92843-b5a3-46f4-9f85-c92cab172506/0_0.png',
      prompt: 'Read this description of ancient Greek burial customs and answer the questions below.',
      source: {
        title: 'Ancient Greek Burial Customs',
        author: 'Based on Homeric evidence',
        date: 'Circa 750 BCE',
        type: 'text',
        content: `**The Sacred Duty of Burial**
<br /><br />
In ancient Greek culture, proper burial rites were not merely custom—they were a sacred obligation. Greeks believed that without these rites, the soul of the deceased could not cross the river Styx to enter the afterlife. Instead, the soul would wander restlessly between worlds, finding no peace.
<br /><br />
**The Burial Process:**
<br /><br />
1. **Washing and anointing** - The body was cleaned and anointed with oils<br />
2. **Mourning** - Family members would lament, often with ritualized crying and tearing of garments<br />
3. **Cremation or burial** - Bodies were either cremated on a funeral pyre or buried<br />
4. **Funeral games** - For important warriors, athletic competitions honored their memory<br />
5. **Tomb offerings** - Food, wine, and valuables were left at the grave
<br /><br />
**Religious Significance:**
<br /><br />
The Greeks believed that denying someone burial was one of the most terrible acts possible. It condemned the soul to eternal restlessness and was an offense against both the gods and the dead. This is why battles would often pause to allow both sides to retrieve and bury their fallen.
<br /><br />
When Achilles later refuses to return Hector's body for burial, it represents a violation of this sacred custom—an act so extreme that even the gods are horrified.`,
      },

      questions: [
        {
          id: 'burial-q1',
          question: 'Why were burial rites so important to the ancient Greeks?',
          type: 'multiple-choice',
          options: [
            'They believed the soul could not rest without proper burial',
            'It was a legal requirement',
            'To prevent disease',
            'To honor the gods of war',
          ],
          correctAnswer: 'They believed the soul could not rest without proper burial',
          explanation: 'Greeks believed that without proper burial rites, the soul would wander restlessly and could not enter the afterlife.',
        },
      ],

      learningPoints: [
        {
          id: 'iliad-ch3-lp-burial',
          content: 'Ancient Greeks believed proper burial rites were essential for the soul to find peace in the afterlife.',
          category: 'historical-context',
        },
      ],
    },

    // Scene 14: News Reaches Achilles
    {
      id: 'iliad-ch3-sc14-news',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/28b724f5-51d8-4398-9815-6cdd0fcd3643/0_0.png',

      content: `Antilochus runs to Achilles' tent with tears streaming down his face.

He doesn't need to speak. Achilles sees the grief, sees the blood, sees the horror in his eyes—and knows.

"Patroclus?" Achilles whispers.

Antilochus nods, unable to find words.

"Dead?"

Another nod.

Achilles collapses. The greatest warrior in the world, the man who fears nothing, falls to his knees and screams. It's not a war cry or a battle shout—it's pure anguish, the sound of a soul breaking.

He tears at his hair. He throws dust over his head. He lies in the dirt, weeping.

His mother Thetis hears that cry even in the ocean's depths. She rises from the waves and comes to him, knowing what it means. Her son is about to do something that will seal his own fate.

Because Achilles knows one thing with absolute certainty: Hector must die. And if Hector's death means Achilles' own death follows—so be it.

His grief is transforming into something terrible. Something that will change the course of the war.

Rage.`,

      learningPoints: [
        {
          id: 'lp-ch3-14-grief-catalyst',
          content: 'Achilles\' grief becomes the catalyst for his return to battle—personal loss transforms his petty anger into genuine tragedy.',
          category: 'character-analysis',
        },
        {
          id: 'lp-ch3-14-prophecy-acceptance',
          content: 'Achilles accepts his own death as the price for avenging Patroclus—love becomes more important than his own life.',
          category: 'thematic-analysis',
        },
      ],
    },

    // Scene 15: Chapter Conclusion - The Price of Pride
    {
      id: 'iliad-ch3-sc15-conclusion',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/28b724f5-51d8-4398-9815-6cdd0fcd3643/0_0.png',
      image: 'https://cdn.midjourney.com/f452f74b-b36c-4d8a-86f1-2c593990a655/0_0.png',

      content: `Patroclus is dead because Achilles sulked in his tent.

Let that sink in.

If Achilles had swallowed his pride after Agamemnon's insult, if he'd fought alongside the Greeks from the beginning, Patroclus would still be alive. The ships wouldn't have burned. The Greeks wouldn't have been desperate. Patroclus wouldn't have needed to wear borrowed armor and fight a battle that wasn't his.

Achilles' pride cost him the one person he loved more than glory itself.

And now that pride transforms into something worse: vengeance without limit, rage without mercy. Achilles will return to battle—but not as the hero who left it. He will become something monstrous, something barely human.

He will slaughter Trojans by the hundreds. He will fight the river god itself. He will kill Hector and desecrate his body, violating every sacred custom.

The Iliad began with one man's rage. Now we'll see what happens when that rage loses all restraint, when grief strips away humanity and leaves only fury.

Patroclus's death changes everything. The story that began with a quarrel over a war prize becomes something far darker—a meditation on grief, vengeance, and the terrible price of honor.

The consequences will be catastrophic. For Troy. For Hector. For Achilles himself.`,

      learningPoints: [
        {
          id: 'lp-ch3-15-cause-consequence',
          content: 'The chapter\'s conclusion emphasizes causation: Achilles\' initial pride directly led to Patroclus\'s death—every choice has consequences.',
          category: 'thematic-analysis',
        },
        {
          id: 'lp-ch3-15-transformation',
          content: 'Achilles\' character arc shifts from petulant pride to genuine tragedy—his grief will make him both more sympathetic and more terrible.',
          category: 'character-analysis',
        },
      ],

      events: {
        onExit: [{
          type: 'quiz',
          componentId: 'quiz-iliad-ch3',
          condition: { type: 'if-not-completed' },
        }],
      },
    },
  ],

  endQuiz: chapter3Quiz,
};

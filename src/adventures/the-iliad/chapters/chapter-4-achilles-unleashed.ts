import type { Chapter } from '../../../types';
import { chapter4Quiz } from '../quizzes/chapter-4-quiz';

/**
 * Chapter 4: The Rage of Achilles Unleashed
 *
 * Consumed by grief and rage, Achilles reconciles with Agamemnon and prepares
 * to return to battle. His mother Thetis brings him new armor forged by Hephaestus,
 * including a magnificent shield depicting the entire world. Achilles storms into
 * battle like a force of nature, slaughtering Trojans by the hundreds.
 *
 * Duration: 45-50 minutes
 * Scenes: 14
 */
export const chapter4: Chapter = {
  id: 'iliad-ch4-unleashed',
  title: 'Chapter 4: The Rage of Achilles Unleashed',
  description: 'Watch as grief transforms Achilles into an unstoppable force of vengeance—beautiful, terrible, and utterly inhuman.',

  learningObjectives: [
    'Understand the transformation of Achilles\' character through grief',
    'Analyze the role of divine craftsmanship (Hephaestus\'s shield)',
    'Recognize aristeia (warrior\'s finest hour) as an epic convention',
    'Examine the brutality and glory of heroic combat',
  ],

  scenes: [
    // Scene 1: Achilles' Grief Transforms
    {
      id: 'iliad-ch4-sc1-grief',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/28b724f5-51d8-4398-9815-6cdd0fcd3643/0_0.png',
      image: 'https://cdn.midjourney.com/f452f74b-b36c-4d8a-86f1-2c593990a655/0_0.png',

      content: `Achilles' grief is beyond measure.

He refuses food. He refuses sleep. He lies in the dust beside Patroclus's body, holding his friend's hand, weeping. The Myrmidons try to comfort him—they fail. Even his mother Thetis, rising from the sea, can barely reach him through his anguish.

This is what Achilles chose. He came to Troy for kleos—eternal glory through great deeds. He chose the short life with undying fame over long years in obscurity. But that choice was bearable only because Patroclus was with him.

Now Patroclus is gone. And Achilles realizes the terrible truth: glory without love is empty. Fame without friendship is meaningless. He will be remembered forever, sung about for millennia—but Patroclus, the person who made it all worthwhile, is dead.

And it's his fault.

His rage against Agamemnon seems petty now. He sat out the war to prove a point about honor while his friend died wearing his armor, fighting his battle, paying for his pride.

Grief transforms into self-hatred. Self-hatred transforms into rage—not the petulant anger at Agamemnon, but something darker and more terrible. A rage that will consume everything in its path.`,

      learningPoints: [
        {
          id: 'lp-ch4-1-transformation',
          content: 'Achilles\' grief-driven transformation shows how personal loss can fundamentally change a character\'s motivations and moral framework.',
          category: 'cultural-context',
        },
        {
          id: 'lp-ch4-1-kleos-hollow',
          content: 'Achilles\' realization that kleos without Patroclus is meaningless questions the central value of Greek heroic culture.',
          category: 'cultural-context',
        },
      ],
    },

    // Scene 2: Thetis Brings Divine Armor
    {
      id: 'iliad-ch4-sc2-thetis',
      type: 'dialogue',
      backgroundImage: 'https://cdn.midjourney.com/8c28c7af-51fc-4f3c-aa16-4c2771dc7231/0_0.png',

      character: {
        id: 'thetis',
        name: 'Thetis',
        portrait: 'https://cdn.midjourney.com/b966bb42-3b36-4a73-a30e-318b9f30b854/0_0.png',
        description: 'Sea goddess, mother of Achilles',
      },

      dialogueTree: {
        id: 'thetis2-node-1',
        speaker: 'thetis',
        text: 'My child, I know your grief. I feel it with you. But you cannot lie here forever weeping. If you truly wish to avenge Patroclus, you need armor—Hector has yours. I will go to Hephaestus, the smith god. He will forge you armor such as no mortal has ever worn.',

        responses: [
          {
            id: 'resp-vengeance',
            text: 'I will kill Hector. I will make Troy pay.',
            nextNodeId: 'node-warning',
          },
        ],

        allNodes: [
          {
            id: 'node-warning',
            speaker: 'thetis',
            text: 'I know. And I grieve for it. Because when Hector dies, your own death follows close behind. The prophecy is clear: you will not long survive the Trojan prince.',
            responses: [
              {
                id: 'resp-accept',
                text: 'Then I will die. But Hector dies first.',
                nextNodeId: 'node-choice',
              },
            ],
          },
          {
            id: 'node-choice',
            speaker: 'thetis',
            text: 'You still have a choice, my son. You could return home. You could live a long life, marry, have children, grow old. Patroclus is gone, but you could survive. Is revenge worth your life?',
            responses: [
              {
                id: 'resp-no-choice',
                text: 'There is no choice. Without Patroclus, I have no life.',
                nextNodeId: 'node-final',
              },
            ],
          },
          {
            id: 'node-final',
            speaker: 'thetis',
            text: 'Then I will get you the armor. And I will watch my son die, as I always knew I would. At least you will die gloriously, with all the world remembering your name. Small comfort for a mother, but all I have.',
            isEnd: true,
          },
        ],
      },

      learningPoints: [
        {
          id: 'lp-ch4-2-prophecy',
          content: 'Achilles knows killing Hector means his own death—yet chooses it anyway, showing how grief overrides even the survival instinct.',
          category: 'cultural-context',
        },
        {
          id: 'lp-ch4-2-thetis-tragic',
          content: 'Thetis knows her son will die but helps him anyway—embodying parental love that supports even fatal choices.',
          category: 'cultural-context',
        },
      ],
    },

    // Scene 3: Primary Source - The Shield of Achilles
    {
      id: 'iliad-ch4-sc3-shield',
      type: 'primary-source',
      backgroundImage: 'https://cdn.midjourney.com/52b0d4c8-27c4-45bd-b3a8-23720ce62837/0_0.png',
      prompt: 'Read Homer\'s description of the Shield of Achilles and answer the questions below.',
      image: 'https://cdn.midjourney.com/0cded1a8-e985-41ec-9011-2326812af502/0_0.png',

      source: {
        title: 'The Shield of Achilles (Iliad, Book 18, Lines 478-608)',
        author: 'Homer',
        date: 'Circa 750 BCE',
        type: 'text',
        content: `**Homer's Ekphrasis**
<br /><br />
Homer dedicates 130 lines—the longest ekphrasis (description of visual art) in ancient literature—to describing the shield that Hephaestus forges for Achilles. This is what he depicts on its surface:
<br /><br />
**The Cosmos:**
<br /><br />
- The earth, sea, and sky<br />
- The sun, moon, and constellations<br />
- The Ocean stream flowing around the rim
<br /><br />
**Two Cities:**
<br /><br />
**City at Peace:** A wedding celebration with music and dancing, and a legal dispute being resolved peacefully in the marketplace
<br /><br />
**City at War:** A city under siege, with armies clashing and warriors dying
<br /><br />
**Rural Life:**
<br /><br />
- Plowing and harvesting in fertile fields<br />
- A vineyard at grape-harvest time<br />
- Cattle being attacked by lions<br />
- Sheep grazing peacefully in a meadow
<br /><br />
**Human Celebration:**
<br /><br />
- Young people dancing in a circle<br />
- Musicians playing lyres<br />
- The community gathered in joyful celebration
<br /><br />
**The Paradox:**
<br /><br />
Achilles is about to enter battle wearing a shield that depicts not just war, but the entire world—marriage and murder, harvest and hunting, peace and conflict. He carries the whole of human civilization into combat, even as he dedicates himself to destruction. The shield shows everything Achilles is giving up by choosing revenge over life.`,
      },

      questions: [
        {
          id: 'shield-q1',
          question: 'What is the significance of the Shield of Achilles in the Iliad?',
          type: 'multiple-choice',
          options: [
            'It represents the entire cosmos and human civilization in miniature',
            'It makes Achilles invincible in battle',
            'It was stolen from the gods',
            'It contains magical powers',
          ],
          correctAnswer: 'It represents the entire cosmos and human civilization in miniature',
          explanation: 'The Shield of Achilles is a microcosm depicting both war and peace, city and country, life and death—the entirety of human experience.',
        },
      ],

      learningPoints: [
        {
          id: 'iliad-ch4-lp-shield',
          content: 'The Shield of Achilles is the longest ekphrasis in ancient literature, representing the entire cosmos in miniature.',
          category: 'literary-technique',
        },
      ],
    },

    // Scene 4: Reconciliation with Agamemnon
    {
      id: 'iliad-ch4-sc4-reconciliation',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/06efb085-6559-475f-b242-c883368ea80c/0_0.png', // Greek Camp at Dawn

      content: `The assembly gathers. Greeks who haven't seen Achilles in months stare at him now—and what they see frightens them.

This is not the proud warrior who stormed off in anger. This is something else entirely. His eyes are hollow, his face gaunt from refusing food. But the rage that burns in him is almost visible, like heat waves rising from summer sand.

Agamemnon stands before him, nervous despite his royal authority. He offers everything back—Briseis, the gifts, an apology. He blames ate (divine madness sent by Zeus) for their quarrel, absolving himself while technically apologizing.

Achilles barely listens.

"Keep the gifts. Give them away. I don't care." His voice is flat, emotionless. "Patroclus is dead. Nothing you offer matters. I just want to kill Trojans. Now. Today."

The generals try to insist on a feast first—proper ritual before battle. Achilles refuses food. "How can I eat when Patroclus lies dead? Let the army feast. I will not taste food or drink until Hector's blood stains this sand."

They stare at him, understanding: the man before them has already died inside. What fights today is just vengeance given form.`,

      learningPoints: [
        {
          id: 'lp-ch4-4-reconciliation',
          content: 'Achilles\' indifference to Agamemnon\'s apology shows how grief has made their quarrel meaningless—personal honor means nothing compared to his loss.',
          category: 'character-analysis',
        },
        {
          id: 'lp-ch4-4-ate',
          content: 'Agamemnon blames "ate" (divine madness) for his actions, showing how Greeks attributed disastrous decisions to divine interference rather than accepting full responsibility.',
          category: 'cultural-context',
        },
      ],
    },

    // Scene 5: Decision - The Nature of Revenge
    {
      id: 'iliad-ch4-sc5-revenge',
      type: 'decision',
      backgroundImage: 'https://cdn.midjourney.com/06efb085-6559-475f-b242-c883368ea80c/0_0.png', // Greek Camp at Dawn

      prompt: 'Odysseus approaches you before battle. What drives your vengeance?',

      choices: [
        {
          id: 'choice-honor',
          text: 'Honor demands it—Hector killed my friend and took my armor',
          consequence: 'Odysseus nods gravely. "Then fight for honor, as heroes should."',
          nextSceneId: 'iliad-ch4-sc6-arming',
        },
        {
          id: 'choice-love',
          text: 'Love drives me—I cannot exist in a world without Patroclus',
          consequence: 'Odysseus looks at you with unexpected gentleness. "That is the truest reason of all. Fight well, Achilles. May the gods grant you peace."',
          nextSceneId: 'iliad-ch4-sc6-arming',
        },
        {
          id: 'choice-rage',
          text: 'Rage consumes me—I will drown Troy in blood',
          consequence: 'Odysseus steps back, seeing something inhuman in your eyes. "Then may the gods have mercy on Troy. You will have none."',
          nextSceneId: 'iliad-ch4-sc6-arming',
        },
      ],

      learningPoints: [
        {
          id: 'lp-ch4-5-motivation',
          content: 'Different motivations for vengeance (honor, love, rage) reveal how the same action can stem from fundamentally different emotional and moral foundations.',
          category: 'thematic-analysis',
        },
      ],
    },

    // Scene 6: The Arming of Achilles
    {
      id: 'iliad-ch4-sc6-arming',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/c2bff8fd-e052-4864-9494-9a179d7f56e5/0_0.png', // Achilles Enters Battle - Transformation
      image: 'https://cdn.midjourney.com/0cded1a8-e985-41ec-9011-2326812af502/0_0.png', // Hephaestus Forging Achilles' Armor

      content: `Thetis returns from Olympus carrying armor that glows with inner fire.

The bronze greaves first, fitted perfectly to your shins. Then the breastplate, harder than any mortal smith could forge, light as cloth but strong enough to turn any blade. The helmet with its horse-hair plume that once terrified enemies when Hector wore your old armor.

And finally, the shield.

You lift it—impossibly large, impossibly light. On its surface, Hephaestus has wrought the entire world: cities at peace and war, farmers harvesting grain, dancers celebrating, the stars wheeling overhead. You carry civilization itself into battle, even as you dedicate yourself to destroying one.

The armor fits perfectly. It should—it was made for you specifically, crafted by a god who knew every measure of your body and soul.

When you lift your father's spear—the great Pelian ash that only you can wield—the Myrmidons cry out in recognition. Their champion has returned.

You are no longer Achilles the man. You are Achilles the weapon, forged for a single purpose: death.`,

      learningPoints: [
        {
          id: 'lp-ch4-6-arming-scene',
          content: 'The arming scene is a traditional epic convention that signals a warrior\'s aristeia (finest hour in battle) is about to begin.',
          category: 'literary-technique',
        },
        {
          id: 'lp-ch4-6-dehumanization',
          content: 'Achilles transforming from man to weapon shows how grief and rage can strip away humanity, leaving only purpose and violence.',
          category: 'character-analysis',
        },
      ],
    },

    // Scene 7: Achilles' Horse Prophesies
    {
      id: 'iliad-ch4-sc7-prophecy',
      type: 'dialogue',
      backgroundImage: 'https://cdn.midjourney.com/c2bff8fd-e052-4864-9494-9a179d7f56e5/0_0.png', // Achilles Enters Battle - Transformation

      character: {
        id: 'xanthus',
        name: 'Xanthus',
        portrait: 'https://cdn.midjourney.com/62c0488e-8d36-4198-a795-fbb776c31eff/0_0.png', // Achilles portrait (horse speaks with his voice metaphorically)
        description: 'Achilles\' immortal horse',
      },

      dialogueTree: {
        id: 'xanthus-node-1',
        speaker: 'xanthus',
        text: 'Master, we will bear you safely through battle today. But a day comes—soon—when god and man will bring you down. Your death is near.',

        responses: [
          {
            id: 'resp-know',
            text: 'I know. I have always known.',
            nextNodeId: 'node-acceptance',
          },
        ],

        allNodes: [
          {
            id: 'node-acceptance',
            speaker: 'xanthus',
            text: 'Then why do you race toward it? Why not turn your chariot and sail for home?',
            responses: [
              {
                id: 'resp-patroclus',
                text: 'Because Patroclus cannot come home. How can I?',
                nextNodeId: 'node-final',
              },
            ],
          },
          {
            id: 'node-final',
            speaker: 'xanthus',
            text: '[The horse weeps, unable to speak further. The Furies strike him silent for revealing too much of fate. But his message is clear: you ride to glory, and to death.]',
            isEnd: true,
          },
        ],
      },

      learningPoints: [
        {
          id: 'lp-ch4-7-prophecy',
          content: 'The immortal horse speaking prophecy emphasizes the supernatural significance of this moment—even nature recognizes Achilles is choosing death.',
          category: 'cultural-context',
        },
        {
          id: 'lp-ch4-7-fated-death',
          content: 'Achilles knowingly races toward his fated death, transforming his aristeia into a form of suicide by glory.',
          category: 'thematic-analysis',
        },
      ],
    },

    // Scene 8: The Aristeia Begins
    {
      id: 'iliad-ch4-sc8-aristeia',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/7f6379e2-a4cd-43c5-8d6a-5a0d0293b594/0_0.png', // The Battlefield - Full Combat

      content: `You storm into battle like a force of nature.

The first Trojan who faces you doesn't even have time to raise his shield. Your spear punches through his chest and out his back. You don't bother to retrieve it—you have more spears, and there are more Trojans.

The next warrior tries to run. Your spear takes him between the shoulder blades. He falls face-first in the dust, clawing at the ground.

More come. They die.

The Trojans have faced you before, but this is different. Before, you fought for glory, for honor, for kleos. There was artistry in your violence, pride in your skill.

Now you fight like a butcher. Efficient. Merciless. Mechanical.

A young Trojan—barely old enough for his first beard—falls to his knees, begging for mercy. He offers ransom. His father is rich. He can pay.

You drive your sword through his throat mid-plea.

"Patroclus died," you say to his corpse. "Why should you live?"

The Trojans begin to flee. You pursue.`,

      learningPoints: [
        {
          id: 'lp-ch4-8-aristeia',
          content: 'Aristeia (a warrior\'s finest hour) is an epic convention showing a hero at peak performance—but Achilles\' version is notably brutal and joyless.',
          category: 'literary-technique',
        },
        {
          id: 'lp-ch4-8-dehumanized-combat',
          content: 'Achilles refuses supplication (begging for mercy), violating the heroic code—his grief has made him more monster than man.',
          category: 'character-analysis',
        },
      ],
    },

    // Scene 9: Quote Attribution - The Brutality of Achilles
    {
      id: 'iliad-ch4-sc9-quotes',
      type: 'quote-attribution',
      backgroundImage: 'https://cdn.midjourney.com/a04ac1c6-29b1-4d2b-8b75-9cd1f9959a78/0_0.png', // Battlefield Carnage - Achilles' Rampage

      prompt: 'Match each brutal statement to the character who speaks it during Achilles\' rampage:',

      quotes: [
        {
          id: 'quote-1',
          text: 'Not one of you shall escape death at my hands. I will kill every Trojan I can reach, and I will throw your bodies to the dogs.',
          speaker: 'Achilles',
          context: 'His merciless vow as he slaughters Trojans',
        },
        {
          id: 'quote-2',
          text: 'Some god is driving him mad! He fights like a demon, not a man!',
          speaker: 'Trojan Warrior',
          context: 'Fleeing in terror from Achilles',
        },
        {
          id: 'quote-3',
          text: 'He has forgotten he is mortal. Pride like this will bring divine punishment.',
          speaker: 'Apollo',
          context: 'Watching Achilles exceed human limits',
        },
        {
          id: 'quote-4',
          text: 'This is not glory—this is slaughter. What he does now will stain his kleos forever.',
          speaker: 'Zeus',
          context: 'Observing from Olympus',
        },
      ],

      learningPoints: [
        {
          id: 'lp-ch4-9-perspectives',
          content: 'Multiple perspectives on Achilles\' rampage (his own, enemies\', gods\') show how the same actions can be simultaneously heroic and monstrous.',
          category: 'literary-technique',
        },
        {
          id: 'lp-ch4-9-kleos-tarnished',
          content: 'Excessive brutality can tarnish kleos—even in warrior culture, there are limits to acceptable violence.',
          category: 'cultural-context',
        },
      ],
    },

    // Scene 10: The River Battle
    {
      id: 'iliad-ch4-sc10-river',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/c79c6a9f-2760-41a4-9a35-d50c7a7aab94/0_0.png', // Achilles vs. River Scamander

      content: `You chase the fleeing Trojans to the Scamander River. They plunge into the water, desperate to escape. You plunge in after them.

The water runs red with blood.

You kill twelve Trojans in the river, dragging them under, drowning them with your hands when weapons won't suffice. Bodies pile up, damming the flow.

And then the river itself speaks.

"ENOUGH!"

The god Scamander rises in fury. "You choke my waters with corpses! You defile my sacred stream with slaughter! I am a GOD, son of Peleus, and I will not tolerate this pollution!"

The river surges. Waves taller than horses crash over you, trying to drown you, to sweep you away. Water fills your helmet, your lungs. The current drags at your armor, pulling you under.

For the first time since Patroclus died, you feel something other than rage: fear.

You are drowning. The river god is killing you.

But Hephaestus intervenes—his divine fire boils the river, creating steam that drives Scamander back. The god retreats, cursing, and you stagger onto the bank.

Your rampage has escalated beyond mortal combat into theomachy—battle between gods themselves. When a mortal warrior can force gods to fight each other, he has transcended human limits entirely.

Even nature itself cannot stop you. You are beyond mortal limits now, protected by the gods who both admire and fear what you've become.`,

      learningPoints: [
        {
          id: 'lp-ch4-10-river-battle',
          content: 'The battle with the river god Scamander (theomachy - god battle) shows Achilles has transcended human limits, fighting nature itself.',
          category: 'cultural-context',
        },
        {
          id: 'lp-ch4-10-pollution',
          content: 'Scamander\'s rage about pollution reflects Greek religious concern with ritual purity—even in war, excessive killing can be sacrilege.',
          category: 'cultural-context',
        },
        {
          id: 'lp-ch4-10-divine-protection',
          content: 'Hephaestus saving Achilles shows the gods are invested in his rampage—they need him to kill Hector to fulfill fate.',
          category: 'thematic-analysis',
        },
      ],
    },

    // Scene 11: Cause and Effect - The Consequences of Rage
    {
      id: 'iliad-ch4-sc11-consequences',
      type: 'cause-effect',
      backgroundImage: 'https://cdn.midjourney.com/a04ac1c6-29b1-4d2b-8b75-9cd1f9959a78/0_0.png', // Battlefield Carnage - Achilles' Rampage

      prompt: 'Match each action in Achilles\' rampage to its consequence:',

      pairs: [
        {
          id: 'pair-1',
          cause: 'Achilles refuses mercy to suppliant Trojans',
          effect: 'He violates heroic code and becomes more monster than hero',
          explanation: 'By refusing supplication, Achilles breaks sacred customs that even enemies must respect, dehumanizing himself.',
        },
        {
          id: 'pair-2',
          cause: 'Achilles fills the Scamander River with corpses',
          effect: 'The river god attacks him in fury',
          explanation: 'Excessive slaughter pollutes the sacred river, angering the god Scamander who rises to defend his waters.',
        },
        {
          id: 'pair-3',
          cause: 'Achilles fights beyond mortal limits',
          effect: 'Gods must intervene to save him from nature itself',
          explanation: 'Achilles transcends human boundaries, requiring divine protection (Hephaestus) to survive divine opposition (Scamander).',
        },
        {
          id: 'pair-4',
          cause: 'Achilles\' excessive brutality terrorizes Troy',
          effect: 'Hector must face him alone to save his people',
          explanation: 'Achilles\' rampage creates such terror that only Hector\'s sacrifice can give Troy any hope.',
        },
      ],

      learningPoints: [
        {
          id: 'lp-ch4-11-causation',
          content: 'Each escalation in Achilles\' violence creates new consequences, showing how unchecked rage spirals beyond control.',
          category: 'thematic-analysis',
        },
      ],
    },

    // Scene 12: Trojans Flee to the City
    {
      id: 'iliad-ch4-sc12-retreat',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/da54e840-bd75-41fb-b289-1cda697297be/0_0.png', // Troy's Walls - Hector Alone

      content: `The Trojans flee in absolute panic.

They pour through Troy's gates like a flood, abandoning formation, dropping weapons, trampling the slow. Old King Priam watches from the walls, tears streaming down his face as he sees his army destroyed.

Apollo appears among the fleeing soldiers, taking mortal form to rally them. "To the city! Get behind the walls! Do not face him in open combat—he is beyond mortal now. Get inside! Live to fight another day!"

The gates slam shut just as you reach them. Trojans crowd the walls, staring down at you.

You stand alone before Troy's great Scaean Gate, drenched in blood—most of it not your own. Bodies litter the plain behind you. The dust is red with slaughter.

And then you see him.

One figure hasn't fled behind the walls.

Hector stands outside the gates, alone, waiting for you.

His helmet gleams in the afternoon sun. His armor—YOUR old armor, stripped from Patroclus's corpse—catches the light. Behind him, you can hear his mother Hecuba screaming for him to come inside, his father Priam begging.

But Hector waits.

He knows what you've come for. And he will give it to you.`,

      learningPoints: [
        {
          id: 'lp-ch4-12-terror',
          content: 'Achilles\' rampage creates such terror that Apollo himself must evacuate the Trojan army—even divine warriors fear facing him.',
          category: 'character-analysis',
        },
        {
          id: 'lp-ch4-12-stage-set',
          content: 'The setup for the duel (Achilles vs Hector, alone before Troy) creates maximum dramatic tension for the climax.',
          category: 'literary-technique',
        },
      ],
    },

    // Scene 13: Decision - Facing Hector
    {
      id: 'iliad-ch4-sc13-before-duel',
      type: 'decision',
      backgroundImage: 'https://cdn.midjourney.com/da54e840-bd75-41fb-b289-1cda697297be/0_0.png', // Troy's Walls - Hector Alone

      prompt: 'Hector stands before you. What do you feel in this moment?',

      choices: [
        {
          id: 'choice-hate',
          text: 'Pure hatred—he killed Patroclus and must die',
          consequence: 'Rage fills your vision. You see only the target of your vengeance.',
          nextSceneId: 'iliad-ch4-sc14-chapter-end',
        },
        {
          id: 'choice-respect',
          text: 'Grim respect—he stands bravely to face certain death',
          consequence: 'Despite everything, you recognize courage when you see it. But it changes nothing.',
          nextSceneId: 'iliad-ch4-sc14-chapter-end',
        },
        {
          id: 'choice-empty',
          text: 'Emptiness—killing him won\'t bring Patroclus back',
          consequence: 'The truth settles over you like ash: revenge is hollow. But you will take it anyway.',
          nextSceneId: 'iliad-ch4-sc14-chapter-end',
        },
      ],

      learningPoints: [
        {
          id: 'lp-ch4-13-motivation-check',
          content: 'The moment before the climactic duel forces reflection on what drives vengeance—hatred, honor, or the recognition of its futility.',
          category: 'thematic-analysis',
        },
      ],
    },

    // Scene 14: Chapter End - The Duel Awaits
    {
      id: 'iliad-ch4-sc14-chapter-end',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/da54e840-bd75-41fb-b289-1cda697297be/0_0.png', // Troy's Walls - Hector Alone

      content: `The entire world seems to hold its breath.

On Troy's walls, thousands watch in silence. Priam and Hecuba clutch each other, watching their son face his doom. Andromache hasn't come—someone mercifully kept her away, though she will learn soon enough.

Behind you, the Greek army has stopped to watch. This is the moment they've waited for since the war began: the two greatest warriors of their age, about to settle everything with bronze and blood.

The gods themselves pause their quarrels to witness this duel.

Hector adjusts his grip on his spear—your old spear, taken from Patroclus's body. The irony isn't lost on either of you.

You plant your feet, feeling the divine armor settle perfectly against your skin. Hephaestus forged it for exactly this moment.

"Achilles," Hector calls across the dusty space between you. His voice is steady despite the fear you can see in his eyes. "Before we fight, let us make a pact. If I kill you, I will return your body to your people for proper burial. Promise me you will do the same."

You laugh—a sound without humor, without humanity.

"There are no pacts between lions and men, Hector. No oaths between wolves and sheep. One of us dies here. And I will feed your corpse to the dogs."

You raise your spear.

The duel is about to begin.`,

      learningPoints: [
        {
          id: 'lp-ch4-14-supplication-denied',
          content: 'Achilles refusing Hector\'s reasonable request for burial rights shows how completely grief has destroyed his humanity and honor.',
          category: 'character-analysis',
        },
        {
          id: 'lp-ch4-14-climax-setup',
          content: 'Building tension through pausing before the climactic moment (gods watching, armies silent, stakes clear) is classic epic technique.',
          category: 'literary-technique',
        },
        {
          id: 'lp-ch4-14-lion-simile',
          content: 'Achilles comparing himself to a lion and Hector to prey uses epic simile to show he no longer sees Hector as a fellow human warrior.',
          category: 'literary-technique',
        },
      ],

      events: {
        onExit: [
          {
            type: 'quiz',
            componentId: 'quiz-iliad-ch4',
            condition: { type: 'if-not-completed' },
          },
        ],
      },
    },
  ],

  endQuiz: chapter4Quiz,
};

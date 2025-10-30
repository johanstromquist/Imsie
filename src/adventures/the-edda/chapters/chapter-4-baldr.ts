import type { Chapter } from '../../../types';
import { chapter4Quiz } from '../quizzes/chapter-4-quiz';

/**
 * Chapter 4: The Death of Baldr
 *
 * This tragic chapter explores the death of Baldr, the beloved god of light and purity,
 * and how this event marks the beginning of the end for the Norse gods. Through Loki's
 * treachery and the inexorable power of fate, students learn about Norse concepts of
 * death, the afterlife, and the inevitability of Ragnarök.
 */
export const chapter4: Chapter = {
  id: 'edda-ch4-baldr',
  title: 'The Death of Baldr',
  description: 'Witness the tragic death of the most beloved god and the beginning of the end for the Norse pantheon.',

  prerequisites: {
    type: 'sequential',
  },

  learningObjectives: [
    'Analyze the myth of Baldr\'s death as a turning point toward Ragnarök',
    'Understand the theme of inevitable fate (wyrd) in Norse mythology',
    'Recognize Loki\'s transformation from trickster to villain',
    'Explore Norse beliefs about death and the afterlife',
  ],

  scenes: [
    // Scene 1: Baldr's Ominous Dreams
    {
      id: 'edda-ch4-scene-1',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/600f238b-340a-4674-9149-78d59d16f5cc/0_0.png',
      content: `In the golden halls of Asgard, a shadow falls over the gods. Baldr, the most beloved of all the Aesir, begins to suffer from terrible dreams.

Night after night, Baldr wakes in cold sweat, haunted by visions of his own death. The god of light and purity, whose very presence brings joy to all who see him, cannot find peace in sleep.

The gods gather in council, deeply troubled. Baldr's mother, Frigg, the queen of the gods, sees the fear in her son's eyes and makes a decision. She will do whatever it takes to protect him.

In Norse belief, dreams were not mere fantasies but omens and warnings from the threads of fate itself. And fate, the gods knew, was not easily defied.`,
      learningPoints: [
        {
          id: 'edda-ch4-lp-1',
          content: 'In Norse mythology, prophetic dreams were taken seriously as glimpses of fate that could rarely be changed.',
          category: 'cultural-context',
        },
        {
          id: 'edda-ch4-lp-2',
          content: 'Baldr represents purity, light, and innocence among the Norse gods, making his death especially tragic.',
          category: 'character-analysis',
        },
      ],
    },

    // Scene 2: Frigg Seeks Oaths (Dialogue)
    {
      id: 'edda-ch4-scene-2',
      type: 'dialogue',
      backgroundImage: 'https://cdn.midjourney.com/0c646aa3-4363-467f-8226-da20d7bde154/0_0.png',
      character: {
        id: 'frigg',
        name: 'Frigg',
        portrait: 'https://cdn.midjourney.com/d5baa0e6-9dd6-49fa-9ee1-ba67b2776a6a/0_0.png',
        description: 'Queen of the gods, wife of Odin, and mother of Baldr',
      },
      dialogueTree: {
        id: 'node-1',
        speaker: 'frigg',
        text: 'I shall travel through all the nine worlds and extract oaths from everything that exists. Nothing shall harm my son.',
        responses: [
          {
            id: 'response-1',
            text: 'Can you truly make everything swear an oath?',
            nextNodeId: 'node-2',
          },
          {
            id: 'response-2',
            text: 'What will you ask them to promise?',
            nextNodeId: 'node-3',
          },
        ],
        allNodes: [
          {
            id: 'node-2',
            speaker: 'frigg',
            text: 'I must try. Fire and water, iron and all metals, stones and earth, trees, diseases, beasts, birds, poisons, and serpents—all shall swear not to harm Baldr.',
            nextNodeId: 'node-4',
          },
          {
            id: 'node-3',
            speaker: 'frigg',
            text: 'Each thing shall promise never to hurt Baldr. With these oaths, my son will be invulnerable to all harm.',
            nextNodeId: 'node-4',
          },
          {
            id: 'node-4',
            speaker: 'frigg',
            text: 'A mother\'s love knows no bounds. I would bargain with the very stones themselves to keep my child safe. And so I shall.',
            isEnd: true,
          },
        ],
      },
      learningPoints: [
        {
          id: 'edda-ch4-lp-3',
          content: 'Frigg\'s quest to extract oaths from all things shows the Norse belief that everything in nature possessed consciousness and agency.',
          category: 'cultural-context',
        },
        {
          id: 'edda-ch4-lp-4',
          content: 'The oath-taking emphasizes the importance of sworn promises in Norse culture.',
          category: 'thematic-analysis',
        },
      ],
    },

    // Scene 3: The Gods Test Baldr's Invulnerability
    {
      id: 'edda-ch4-scene-3',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/8b3d12e8-36ff-42b8-8875-9e3fe1272407/0_0.png',
      content: `Frigg traveled far and wide, and true to her word, she received oaths from all things. When she returned to Asgard, Baldr was indeed invulnerable.

The gods discovered this in the most playful way imaginable. They made a game of it. In the great assembly, they took turns throwing things at Baldr—stones, spears, axes—and watched in amazement as nothing could harm him. Everything simply bounced off or swerved away at the last moment.

The gods laughed with delight. Thor hurled his mighty hammer, and it veered aside. Tyr shot arrows that fell harmlessly at Baldr's feet. Even fire could not burn him.

Baldr stood at the center of it all, smiling radiantly, invincible and beloved. For a brief, shining moment, it seemed that fate itself had been overcome, and that tragedy had been averted.

But in the shadows, one figure did not join in the celebration. Loki watched with narrow eyes, his mind already working...`,
      learningPoints: [
        {
          id: 'edda-ch4-lp-5',
          content: 'The gods\' "throwing game" reflects the Norse warrior culture\'s celebration of strength and invulnerability.',
          category: 'cultural-context',
        },
        {
          id: 'edda-ch4-lp-6',
          content: 'The scene\'s joyful tone creates dramatic irony, as readers familiar with myth know tragedy approaches.',
          category: 'literary-technique',
        },
      ],
    },

    // Scene 4: Loki Questions Frigg (Dialogue)
    {
      id: 'edda-ch4-scene-4',
      type: 'dialogue',
      backgroundImage: 'https://cdn.midjourney.com/ede2911e-13d3-4b56-81d9-ba05167cb956/0_0.png',
      character: {
        id: 'loki-disguised',
        name: 'An Old Woman',
        portrait: 'https://cdn.midjourney.com/3d3d4b68-52a4-450c-9b74-b40852df159a/0_3.png',
        description: 'A seemingly harmless elderly woman who approaches Frigg',
      },
      dialogueTree: {
        id: 'node-1',
        speaker: 'loki-disguised',
        text: 'Good Frigg, I have heard of your remarkable achievement. Is it truly so that all things have sworn to protect Baldr?',
        responses: [
          {
            id: 'response-1',
            text: 'Who are you?',
            nextNodeId: 'node-2',
          },
          {
            id: 'response-2',
            text: 'Yes, everything has sworn the oath.',
            nextNodeId: 'node-3',
          },
        ],
        allNodes: [
          {
            id: 'node-2',
            speaker: 'loki-disguised',
            text: 'Just an old woman who has heard tales of your motherly devotion. Such love is rare, even among the gods. Did truly everything swear the oath?',
            responses: [
              {
                id: 'response-2a',
                text: 'Yes, everything of consequence.',
                nextNodeId: 'node-3',
              },
            ],
          },
          {
            id: 'node-3',
            speaker: 'player',
            text: 'Everything... except...',
            nextNodeId: 'node-4',
          },
          {
            id: 'node-4',
            speaker: 'loki-disguised',
            text: 'Except? Do go on, dear Frigg.',
            nextNodeId: 'node-5',
          },
          {
            id: 'node-5',
            speaker: 'frigg',
            text: 'There grows a small plant west of Valhalla called mistletoe. It seemed so young and harmless that I thought it unnecessary to ask it for an oath.',
            nextNodeId: 'node-6',
          },
          {
            id: 'node-6',
            speaker: 'loki-disguised',
            text: 'Mistletoe, you say? How... interesting. Thank you, gracious queen.',
            isEnd: true,
          },
        ],
      },
      learningPoints: [
        {
          id: 'edda-ch4-lp-7',
          content: 'Loki\'s use of disguise to extract information demonstrates his cunning and deceptive nature.',
          category: 'character-analysis',
        },
        {
          id: 'edda-ch4-lp-8',
          content: 'The mistletoe\'s exemption from the oath becomes the fatal flaw in Frigg\'s plan, showing how small oversights can have catastrophic consequences.',
          category: 'plot-structure',
        },
      ],
    },

    // Scene 5: Should Frigg Reveal the Secret? (Decision)
    {
      id: 'edda-ch4-scene-5',
      type: 'decision',
      backgroundImage: 'https://cdn.midjourney.com/a5b3a72b-603e-404b-8938-c166bbd8f13c/0_0.png',
      prompt: 'Should Frigg tell the old woman about the mistletoe?',
      context: `You sense something in this moment. The old woman seems genuinely curious, but there's something you can't quite place about her manner. Frigg is proud of her achievement and sees no harm in a small detail.

The mistletoe is just a tiny, insignificant plant. What harm could possibly come from mentioning it?`,
      choices: [
        {
          id: 'choice-reveal',
          text: 'Tell her about the mistletoe—it\'s harmless information',
          consequence: 'Frigg reveals the secret. The old woman smiles knowingly and departs. Within minutes, Loki transforms back to his true form and heads west of Valhalla...',
          learningPoints: [
            {
              id: 'edda-ch4-lp-9',
              content: 'In Norse myths, the tragic flaw often comes from a moment of pride or carelessness.',
              category: 'thematic-analysis',
            },
          ],
        },
        {
          id: 'choice-withhold',
          text: 'Keep the secret—something feels wrong',
          consequence: 'You sense danger, but fate is already in motion. Even if Frigg had refused, the Norns had already woven Baldr\'s death into the threads of destiny. One way or another, Loki would have discovered the truth...',
          learningPoints: [
            {
              id: 'edda-ch4-lp-10',
              content: 'The concept of wyrd (fate) in Norse mythology suggests that certain events are inevitable, regardless of individual choices.',
              category: 'thematic-analysis',
            },
          ],
        },
      ],
      learningPoints: [
        {
          id: 'edda-ch4-lp-11',
          content: 'Decision points in myths often reveal character flaws or test moral judgment.',
          category: 'literary-technique',
        },
      ],
    },

    // Scene 6: Loki Fashions the Mistletoe Dart
    {
      id: 'edda-ch4-scene-6',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/da8411c6-1db4-47c5-a47b-98e1939d22af/0_0.png',
      content: `West of Valhalla, Loki found the mistletoe growing on an ancient oak. It was indeed a small, innocuous thing—pale green with white berries, clinging to the tree like a parasite.

With careful hands, Loki cut a branch and shaped it into a dart. Though small, it was straight and true. The trickster god smiled a cold smile.

"So the gods think they have conquered fate," he muttered. "Let us see how invincible Baldr truly is."

Loki had long grown bitter toward the other gods. Once his tricks had been tolerated, even appreciated. But over time, his jests had turned cruel, his pranks malicious. The gods had grown wary of him, and he of them.

Now, armed with the one thing in all the nine worlds that could harm Baldr, Loki returned to the assembly where the gods continued their celebration.`,
      learningPoints: [
        {
          id: 'edda-ch4-lp-12',
          content: 'Loki\'s transformation from clever trickster to malicious villain represents a key shift in Norse mythology, foreshadowing Ragnarök.',
          category: 'character-analysis',
        },
        {
          id: 'edda-ch4-lp-13',
          content: 'Mistletoe is a parasitic plant, symbolically appropriate as the instrument of death that undermines Baldr from within the gods\' celebration.',
          category: 'symbolism',
        },
      ],
    },

    // Scene 7: Höðr Unknowingly Kills Baldr
    {
      id: 'edda-ch4-scene-7',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/652236b1-1167-444c-8700-ebb998f05ec9/0_0.png',
      content: `At the edge of the assembly stood Höðr, Baldr's blind brother. He did not participate in the throwing game, for he could not see to aim.

Loki approached him with feigned kindness. "Why do you not honor your brother as the others do?"

"I am blind," Höðr replied simply. "I cannot see where Baldr stands, and I have no weapon to throw."

"How unfortunate," Loki said, his voice dripping with false sympathy. "Here, I will help you. I have a small dart, and I will guide your hand. Surely Baldr would be honored if his own brother joined the celebration."

Höðr, sensing no malice and trusting in his brother's invulnerability, allowed Loki to place the mistletoe dart in his hand and guide his aim.

The dart flew true.

It struck Baldr in the chest, and the god of light fell. The laughter died. The golden halls grew dark. And Baldr the Beautiful lay dead upon the ground.

The silence that followed was absolute. The age of innocence for the gods had ended.`,
      learningPoints: [
        {
          id: 'edda-ch4-lp-14',
          content: 'Höðr\'s blindness makes him the unwitting instrument of Baldr\'s death, emphasizing how innocents can become tools of tragedy.',
          category: 'character-analysis',
        },
        {
          id: 'edda-ch4-lp-15',
          content: 'Baldr\'s death marks the beginning of the end for the Norse gods, setting the inevitable path toward Ragnarök in motion.',
          category: 'plot-structure',
        },
      ],
    },

    // Scene 8: Primary Source - Norse Funeral Practices
    {
      id: 'edda-ch4-scene-8',
      type: 'primary-source',
      backgroundImage: 'https://cdn.midjourney.com/2603b7c7-8793-41bd-af39-0cb33e98faa6/0_0.png',
      prompt: 'Analyze this historical evidence about Norse funeral practices',
      source: {
        title: 'Account of a Rus Viking Funeral',
        author: 'Ahmad ibn Fadlan',
        date: '921 CE',
        type: 'text',
        content: `I was told that when their chieftains die, the least they do is cremate them. I was very keen to verify this.

They placed him in his grave, covered it over, and built a marker above him. Then they built a small house over the grave. They took his weapons and placed them in the grave with him. Then they brought his two horses and ran them until they sweated, after which they cut them into pieces with their swords and threw the meat into the ship.

Next they took his slave girl, and she said: "Look! I see my master sitting in Paradise, and Paradise is beautiful and green, and together with him are his men and his male slaves. He is calling me. Take me to him."

The account describes the most elaborate funeral rites, including the burning of a great ship with all the chieftain's possessions and sacrificial offerings, showing the importance of death rituals in Viking culture.`,
        citation: 'Ahmad ibn Fadlan, Mission to the Volga (921 CE), translated by James E. Montgomery',
      },
      questions: [
        {
          id: 'q1',
          question: 'What does this account reveal about Viking beliefs about the afterlife?',
          type: 'multiple-choice',
          options: [
            'Vikings believed in complete annihilation after death',
            'Vikings believed the dead needed possessions and companions in the afterlife',
            'Vikings believed only weapons were important after death',
            'Vikings had no specific beliefs about death',
          ],
          correctAnswer: 'Vikings believed the dead needed possessions and companions in the afterlife',
          explanation: 'The elaborate burial with weapons, horses, and even human sacrifices shows Vikings believed the dead would need these things in the next world, reflecting their concept of death as a journey rather than an ending.',
        },
        {
          id: 'q2',
          question: 'How do these funeral practices relate to Baldr\'s story?',
          type: 'multiple-choice',
          options: [
            'They show funerals were not important to Vikings',
            'They demonstrate why the gods would give Baldr an elaborate funeral with valuable grave goods',
            'They prove Baldr\'s story is not historically accurate',
            'They have no connection to mythological accounts',
          ],
          correctAnswer: 'They demonstrate why the gods would give Baldr an elaborate funeral with valuable grave goods',
          explanation: 'The historical practices mirror what happens in the myth: Baldr receives an elaborate ship funeral with his possessions, reflecting real Viking beliefs about honoring the dead and preparing them for the afterlife.',
        },
        {
          id: 'q3',
          question: 'What does the presence of the slave girl reveal about Viking society?',
          type: 'multiple-choice',
          options: [
            'It shows the harsh reality of human sacrifice in some Viking funeral rites',
            'It proves Vikings were always peaceful',
            'It shows all Vikings practiced human sacrifice',
            'It has no historical significance',
          ],
          correctAnswer: 'It shows the harsh reality of human sacrifice in some Viking funeral rites',
          explanation: 'While disturbing to modern sensibilities, this account provides evidence that some Viking communities practiced human sacrifice at elite funerals, believing the sacrificed would serve the deceased in the afterlife.',
        },
      ],
      learningPoints: [
        {
          id: 'edda-ch4-lp-16',
          content: 'Viking funeral practices, including ship burials and grave goods, reflected beliefs about the afterlife and the importance of honoring the dead.',
          category: 'historical-context',
        },
        {
          id: 'edda-ch4-lp-17',
          content: 'Primary sources like Ibn Fadlan\'s account help us understand the real cultural practices that informed mythological narratives.',
          category: 'historical-context',
        },
      ],
    },

    // Scene 9: Baldr's Funeral
    {
      id: 'edda-ch4-scene-9',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/f22c7a1f-797b-4d0b-b089-9cb65c1ab77e/0_0.png',
      content: `The gods prepared a funeral worthy of the most beloved among them. They brought forth Baldr's ship, Ringhorn, the greatest vessel ever built.

They placed Baldr's body upon the ship with his armor and weapons. His wife Nanna, overcome with grief, died of a broken heart and was placed beside him. Even Baldr's horse was sacrificed to accompany him to the afterlife.

Odin stepped forward, his one eye wet with tears. He placed his precious ring Draupnir—which dripped eight new rings every ninth night—upon his son's chest. He leaned close and whispered something in Baldr's ear, words that no one else could hear.

Thor consecrated the pyre with his hammer Mjölnir. Then a giantess named Hyrrokkin pushed the massive ship into the sea with such force that fire burst from the rollers and the earth shook.

As the ship drifted out to sea, they set it ablaze. The gods stood upon the shore and watched as fire consumed their brightest light. The smoke rose to the heavens, carrying Baldr to Hel's realm, the land of the dead.

Odin's grief was not just that of a father, but of one who knew what this death foretold. With Baldr's death, the countdown to Ragnarök had begun.`,
      learningPoints: [
        {
          id: 'edda-ch4-lp-18',
          content: 'Ship funerals were reserved for the most important members of Viking society, reflecting Baldr\'s significance among the gods.',
          category: 'cultural-context',
        },
        {
          id: 'edda-ch4-lp-19',
          content: 'The mystery of what Odin whispered to Baldr has been debated for centuries, adding to the myth\'s enduring power.',
          category: 'literary-technique',
        },
      ],
    },

    // Scene 10: Hermóðr's Journey to Hel (Dialogue)
    {
      id: 'edda-ch4-scene-10',
      type: 'dialogue',
      backgroundImage: 'https://cdn.midjourney.com/0ec1c588-a50f-43c6-b474-a5aebcd04125/0_0.png',
      character: {
        id: 'hel',
        name: 'Hel',
        portrait: 'https://cdn.midjourney.com/ebf3b805-cc76-40bc-84c5-806f40c1c512/0_0.png',
        description: 'Goddess of the underworld, daughter of Loki, half living and half dead in appearance',
      },
      dialogueTree: {
        id: 'node-1',
        speaker: 'player',
        text: 'Great Hel, I am Hermóðr, messenger of the gods. I come to ask for the release of Baldr.',
        nextNodeId: 'node-2',
        allNodes: [
          {
            id: 'node-2',
            speaker: 'hel',
            text: 'Baldr sits in the seat of honor here in my halls. The dead do not easily return to the living world, Hermóðr. What makes you think I should release him?',
            responses: [
              {
                id: 'response-1',
                text: 'All the gods mourn him. He was beloved by all.',
                nextNodeId: 'node-3',
              },
              {
                id: 'response-2',
                text: 'His death was unjust. He deserves to live.',
                nextNodeId: 'node-4',
              },
            ],
          },
          {
            id: 'node-3',
            speaker: 'hel',
            text: 'Beloved by all, you say? Then let that be the test.',
            nextNodeId: 'node-5',
          },
          {
            id: 'node-4',
            speaker: 'hel',
            text: 'Justice has no meaning in the realm of death, messenger. But perhaps a test will prove your words.',
            nextNodeId: 'node-5',
          },
          {
            id: 'node-5',
            speaker: 'hel',
            text: 'I will release Baldr on one condition: if all things in the nine worlds, living and dead, weep for him. If even one creature refuses to shed tears, Baldr stays with me forever.',
            nextNodeId: 'node-6',
          },
          {
            id: 'node-6',
            speaker: 'player',
            text: 'All things shall weep for Baldr! I shall ensure it!',
            nextNodeId: 'node-7',
          },
          {
            id: 'node-7',
            speaker: 'hel',
            text: 'Then go, Hermóðr. But know this: fate is not so easily cheated. Return only when every last thing in creation has mourned.',
            isEnd: true,
          },
        ],
      },
      learningPoints: [
        {
          id: 'edda-ch4-lp-20',
          content: 'Hel\'s realm was not necessarily a place of punishment, but rather the destination for those who died of illness or old age, as opposed to battle.',
          category: 'cultural-context',
        },
        {
          id: 'edda-ch4-lp-21',
          content: 'The condition that "all things must weep" sets up an impossible task, reflecting the Norse belief that death is final and irreversible.',
          category: 'thematic-analysis',
        },
      ],
    },

    // Scene 11: Hel's Condition
    {
      id: 'edda-ch4-scene-11',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/71402d18-c34a-4cba-8419-2af2d2163707/0_0.png',
      content: `Hermóðr rode back to Asgard bearing Hel's message. The gods immediately sent messengers throughout all the nine worlds with a simple request: weep for Baldr.

And weep they did. Men wept. Women wept. Children wept. The animals in the forest shed tears. The birds in the sky mourned. Even the stones wept, and the trees, and the earth itself.

Water flowed from all things, as if the whole world was crying. It seemed certain that Baldr would return.

But in a dark cave, the messengers found an old giantess named Þökk. They asked her to weep for Baldr.

"Let Hel hold what she has," the giantess said coldly. "I never loved Baldr in life. Why should I mourn him in death?"

The messengers pleaded, but Þökk refused. And so, for want of one creature's tears, Baldr remained in Hel's realm.

Later, the gods suspected that Þökk was actually Loki in disguise, ensuring that his evil deed could not be undone. But by then, it was too late.`,
      learningPoints: [
        {
          id: 'edda-ch4-lp-22',
          content: 'The universal weeping shows Baldr\'s importance, but also emphasizes how one act of spite can doom even the most beloved.',
          category: 'thematic-analysis',
        },
        {
          id: 'edda-ch4-lp-23',
          content: 'Þökk\'s refusal to weep represents the final, irrevocable nature of death in Norse mythology, where not even the gods can truly conquer mortality.',
          category: 'thematic-analysis',
        },
      ],
    },

    // Scene 12: Cause-Effect - The Chain of Events
    {
      id: 'edda-ch4-scene-12',
      type: 'cause-effect',
      backgroundImage: 'https://cdn.midjourney.com/2e348541-c394-42e6-9420-fa836d47fa8d/0_0.png',
      prompt: 'Match each cause to its effect in the tragic sequence of Baldr\'s death',
      pairs: [
        {
          id: 'pair-1',
          cause: 'Baldr has prophetic dreams of his own death',
          effect: 'Frigg travels the worlds extracting oaths from all things',
          explanation: 'Baldr\'s ominous dreams prompted his mother Frigg to take extreme measures to protect him, seeking promises from everything in existence.',
        },
        {
          id: 'pair-2',
          cause: 'Frigg overlooks the young mistletoe plant',
          effect: 'Loki discovers the one thing that can harm Baldr',
          explanation: 'The mistletoe\'s exemption from the oath becomes the fatal vulnerability that Loki exploits, showing how small oversights can have catastrophic consequences.',
        },
        {
          id: 'pair-3',
          cause: 'Loki gives Höðr the mistletoe dart and guides his throw',
          effect: 'Baldr is killed by his own blind brother',
          explanation: 'Loki uses Höðr\'s blindness and trust to make him the unwitting instrument of his brother\'s death, adding another layer of tragedy to the myth.',
        },
        {
          id: 'pair-4',
          cause: 'Þökk (possibly Loki in disguise) refuses to weep',
          effect: 'Baldr remains in Hel\'s realm permanently',
          explanation: 'Because not all things wept for Baldr, Hel\'s condition was not met, making his death irreversible and setting Ragnarök in motion.',
        },
        {
          id: 'pair-5',
          cause: 'Baldr\'s death cannot be reversed',
          effect: 'The countdown to Ragnarök begins',
          explanation: 'Baldr\'s permanent death marks the beginning of the end for the gods, as it was prophesied that his death would trigger the events leading to the apocalypse.',
        },
      ],
      learningPoints: [
        {
          id: 'edda-ch4-lp-24',
          content: 'The myth of Baldr demonstrates how a chain of seemingly small events can lead to catastrophic consequences, a key theme in Norse mythology.',
          category: 'plot-structure',
        },
        {
          id: 'edda-ch4-lp-25',
          content: 'Understanding cause-and-effect relationships in myths helps reveal how ancient cultures explained tragedy and fate.',
          category: 'literary-technique',
        },
      ],
    },

    // Scene 13: Loki's Punishment and the Approach of Ragnarök
    {
      id: 'edda-ch4-scene-13',
      type: 'narrative',
      backgroundImage: '/Imsie/public/assets/the-edda/backgrounds/lokis-punishment.png',
      content: `The gods hunted Loki for his crime. He fled to the mountains, transforming himself into a salmon to hide in a waterfall. But the gods found him, and brought him deep beneath the earth.

There, they bound Loki with the entrails of his own son, transformed into iron chains. They placed him beneath a serpent whose venom dripped onto his face. Only Loki's wife Sigyn remained loyal, holding a bowl to catch the poison drops.

But when the bowl fills and she must turn away to empty it, the venom falls upon Loki's face. He writhes in agony, and his struggles cause earthquakes throughout Midgard.

There Loki remains, bound and tortured, growing ever more bitter. The gods know that he will eventually break free, and when he does, he will lead the forces of chaos against them in the final battle of Ragnarök.

Baldr's death was the first falling stone in an avalanche that cannot be stopped. The golden age of the gods has ended. The age of heroes is passing. Soon will come the Fimbulwinter, three years of endless cold, and then the twilight of the gods themselves.

The prophecy is clear: Ragnarök is coming. And nothing can prevent it.`,
      learningPoints: [
        {
          id: 'edda-ch4-lp-26',
          content: 'Loki\'s punishment reflects Norse ideas of justice while also explaining natural phenomena like earthquakes.',
          category: 'cultural-context',
        },
        {
          id: 'edda-ch4-lp-27',
          content: 'The inevitability of Ragnarök, triggered by Baldr\'s death, reflects the Norse worldview that even gods are subject to fate.',
          category: 'thematic-analysis',
        },
      ],
      events: {
        onExit: [
          {
            type: 'quiz',
            componentId: 'edda-ch4-quiz',
            condition: {
              type: 'if-not-completed',
            },
          },
        ],
      },
    },
  ],

  endQuiz: chapter4Quiz,
};

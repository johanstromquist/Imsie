import type { Chapter } from '../../../types';
import { chapter1Quiz } from '../quizzes/chapter-1-quiz';

export const chapter1: Chapter = {
  id: 'chapter-1-perseus',
  title: 'Chapter 1: Perseus - The Monster Slayer',
  description: 'Follow the archetypal chosen one on his quest to slay Medusa and discover how prophecy shapes destiny.',

  learningObjectives: [
    'Identify the archetypal "chosen one" narrative and its modern iterations',
    'Understand the role of prophecy and fate in Greek tragedy',
    'Analyze Perseus as the quintessential monster-slayer hero',
    'Recognize divine assistance as a key component of Greek heroic success',
    'Compare Perseus\'s journey to modern "chosen one" stories',
  ],

  scenes: [
    // Scene 1: The prophecy
    {
      id: 'perseus-scene-1-prophecy',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/bc8729c8-e5b5-4efe-984e-17bf437b8565/0_0.png',
      image: 'https://cdn.midjourney.com/bc8729c8-e5b5-4efe-984e-17bf437b8565/0_0.png',

      content: `Long ago in the city of Argos, King Acrisius ruled with an iron grip. He was wealthy, powerful, and had everything a king could want—except a son to inherit his throne.

He had only one child: his daughter Danaë, lovely but of no use to him in securing his legacy. Or so he thought, until the day he consulted the Oracle at Delphi.

The Oracle's answer chilled his blood: "You will have no son. But your daughter will bear a son who will kill you."

It was a prophecy that set in motion one of the greatest heroic tales ever told.`,

      learningPoints: [
        {
          id: 'lp-perseus-1-prophecy',
          content: 'Prophecies in Greek myth typically come from oracles like the Oracle at Delphi, who channeled Apollo\'s divine knowledge.',
          category: 'cultural-context',
        },
        {
          id: 'lp-perseus-1-oracle',
          content: 'The Oracle\'s cryptic prophecies were considered inevitable—attempts to prevent them often brought them about.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 2: Decision - As Acrisius
    {
      id: 'perseus-scene-2-acrisius-choice',
      type: 'decision',
      backgroundImage: 'https://cdn.midjourney.com/bc8729c8-e5b5-4efe-984e-17bf437b8565/0_0.png',
      image: 'https://cdn.midjourney.com/d053e2fd-2662-448f-88a4-12894e754a4e/0_0.png',

      prompt: 'How will you prevent the prophecy?',
      context: `You are King Acrisius. The Oracle's words echo in your mind: your grandson will kill you.

Your daughter Danaë is young, unmarried, childless. The prophecy hasn't come to pass yet. Perhaps you can prevent it. But how?

Kill Danaë? The gods punish those who murder their own kin—and you're not certain you could bring yourself to do it.

Ensure she never has a child? But how can you guarantee that?`,

      choices: [
        {
          id: 'choice-lock-away',
          text: 'Lock Danaë in a bronze chamber where no man can reach her',
          consequence: `You choose isolation. You build an underground chamber of bronze, windowless and sealed. Here Danaë will live, tended by servants but cut off from the world.

If she can never meet a man, she can never bear a child. The prophecy will fail.

Or so you believe. You've forgotten that the gods themselves can go anywhere...`,
          learningPoints: [
            {
              id: 'lp-perseus-2a-isolation',
              content: 'Acrisius attempts to prevent prophecy through isolation—a common but ultimately futile strategy in Greek tragedy.',
              category: 'literary-context',
            },
          ],
        },
        {
          id: 'choice-marry-far',
          text: 'Marry her to someone far away, beyond the reach of Argos',
          consequence: `An interesting thought—if Danaë lives far from Argos, perhaps her son will never find you.

But Acrisius doesn't think of this. He fears that wherever she goes, her son will somehow return. Besides, what foreign king would accept a bride whose son is prophesied to be a killer?

Acrisius chooses a more drastic measure.`,
        },
        {
          id: 'choice-kill',
          text: 'Kill Danaë now and end the bloodline',
          consequence: `The cold logic of a desperate king. If Danaë dies childless, there can be no grandson to fulfill the prophecy.

But you hesitate. The Furies punish those who murder kin—they will drive you mad. And somewhere in your heart, despite your fear, she is still your daughter.

Acrisius cannot bring himself to do this. He seeks another way.`,
        },
      ],

      learningPoints: [],
    },

    // Scene 3: Zeus visits Danaë
    {
      id: 'perseus-scene-3-golden-rain',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/fc1af0c6-45eb-4c8f-9e83-cfa24bf3dbbf/0_0.png',
      image: 'https://cdn.midjourney.com/fc1af0c6-45eb-4c8f-9e83-cfa24bf3dbbf/0_0.png',

      content: `Acrisius chose isolation. He built a bronze chamber beneath the palace, sealed with a single roof vent for air. Into this prison he placed Danaë, his own daughter, convinced that no man could ever reach her.

But he had not accounted for the gods.

Zeus, king of the gods, saw the beautiful Danaë locked away and desired her. Walls and locks meant nothing to him. He transformed himself into a shower of golden rain, slipping through the roof vent into her chamber.

Danaë, alone in the darkness, suddenly found herself bathed in divine light. Nine months later, she gave birth to a son.

She named him Perseus.`,

      inlineAnnotations: [
        {
          id: 'annotation-zeus-transformations',
          text: 'transformed himself',
          tooltip: {
            title: 'Zeus\'s Many Forms',
            content: 'Zeus famously transformed into various forms to seduce mortals—a swan for Leda, a bull for Europa, golden rain for Danaë. These stories reflect both divine power and the problematic dynamics of god-mortal relationships.',
            category: 'cultural-context',
          },
        },
      ],

      learningPoints: [
        {
          id: 'lp-perseus-3-divine-conception',
          content: 'Perseus\'s divine conception (Zeus as golden rain) marks him as a demi-god, destined for extraordinary deeds.',
          category: 'literary-context',
        },
        {
          id: 'lp-perseus-3-futility',
          content: 'Acrisius\'s attempt to prevent prophecy actually creates the circumstances for it—a common pattern in Greek tragedy.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 4: Cast into the sea
    {
      id: 'perseus-scene-4-chest',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/b55bf0b9-fd6c-45e5-96c8-167377bdbe18/0_0.png',
      image: 'https://cdn.midjourney.com/b55bf0b9-fd6c-45e5-96c8-167377bdbe18/0_0.png',

      content: `When Acrisius discovered that Danaë had borne a child despite his precautions, he was torn between rage and terror.

He dared not kill them outright—that would surely bring the gods' wrath. But he couldn't let them stay in Argos, where the boy might one day fulfill the prophecy.

So he chose a coward's solution. He locked Danaë and infant Perseus in a wooden chest and cast them into the sea. Let the waves decide their fate. Their blood wouldn't be on his hands.

For days, mother and child drifted at the mercy of currents and storms. But Poseidon, god of the sea, took pity on them. He guided their chest to the island of Seriphos, where a kind fisherman named Dictys found them alive on the shore.

Perseus would grow up far from Argos, raised by a fisherman, with no idea of his royal blood or divine father—yet.

Dictys's brother, King Polydectes, ruled Seriphos. He had long desired the beautiful Danaë, but she refused him, and Perseus's presence protected her. For years, an uneasy peace held.

But Perseus was growing older, stronger. And Polydectes was growing impatient.`,

      learningPoints: [
        {
          id: 'lp-perseus-4-exile',
          content: 'The "child cast out and raised in exile" is a common motif in hero myths, appearing in stories of Moses, Oedipus, and Romulus.',
          category: 'literary-context',
        },
        {
          id: 'lp-perseus-4-divine-protection',
          content: 'Poseidon\'s intervention shows how the gods protect demi-god children, even when other mortals try to destroy them.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 5: The Legend of Medusa
    {
      id: 'perseus-scene-5-medusa-legend',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/48cfa423-b88b-4b7b-80d4-cbb928a5ec79/0_0.png',
      image: 'https://cdn.midjourney.com/c06588a1-2fe4-4ac7-b510-cea6e4273590/0_0.png',

      content: `Growing up on Seriphos, Perseus heard the old stories like any Greek child.

Among the most terrifying was the tale of the Gorgons—three monstrous sisters who lived at the edge of the world. They had serpents for hair, bronze hands, and golden wings. But their most fearsome power was their gaze.

Anyone who looked directly at a Gorgon turned instantly to stone.

Two of the sisters—Stheno and Euryale—were immortal, unable to be killed. But the third, Medusa, was mortal. She had once been beautiful, some whispered, before the gods cursed her.

Warriors had tried to hunt her over the years. All had failed. The approach to her lair was said to be littered with stone statues—petrified heroes frozen in their final moments of terror.

No one had ever faced Medusa and returned alive.

Perseus knew these stories. He never imagined they would become his own fate.`,

      learningPoints: [
        {
          id: 'lp-perseus-5-gorgon-lore',
          content: 'The Gorgons represent primal fear in Greek mythology—monsters whose very appearance is deadly, requiring heroes to fight without looking.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 6: Dialogue - Polydectes demands the impossible
    {
      id: 'perseus-scene-6-polydectes',
      type: 'dialogue',
      backgroundImage: 'https://cdn.midjourney.com/dbc74b9e-f3d0-44f6-800e-3bb047d9bf6d/0_0.png',

      character: {
        id: 'polydectes',
        name: 'King Polydectes',
        portrait: 'https://cdn.midjourney.com/8050083c-c9dc-4c57-9963-64b0faa4e2ff/0_2.png',
        description: 'Cunning king of Seriphos who desires Danaë',
      },

      dialogueTree: {
        id: 'node-1',
        speaker: 'polydectes',
        text: 'Perseus, you\'ve grown into a fine young man. Your mother Danaë is the most beautiful woman on Seriphos, and I wish to marry her. Surely you approve?',

        responses: [
          {
            id: 'response-refuse',
            text: 'My mother doesn\'t wish to marry you, King Polydectes',
            nextNodeId: 'node-2',
          },
          {
            id: 'response-suspicious',
            text: 'Why ask my permission? You\'re the king',
            nextNodeId: 'node-3',
          },
        ],

        allNodes: [
          {
            id: 'node-2',
            speaker: 'polydectes',
            text: 'Her wishes? How quaint. But you stand in my way, boy. Unless... perhaps you could perform a service for me? A wedding gift, so to speak.',
            nextNodeId: 'node-4',
          },
          {
            id: 'node-3',
            speaker: 'polydectes',
            text: 'Clever boy. You\'re right—I don\'t need your permission. But perhaps I should be... generous. After all, custom demands that every man at my wedding banquet bring a gift worthy of a king.',
            nextNodeId: 'node-4',
          },
          {
            id: 'node-4',
            speaker: 'polydectes',
            text: 'I\'m holding a banquet, and every man must bring a gift. Since you\'re too poor for horses or treasure, bring me... the head of Medusa the Gorgon.',
            nextNodeId: 'node-5',
          },
          {
            id: 'node-5',
            speaker: 'polydectes',
            text: 'What\'s the matter? Too difficult for a simple fisherman\'s ward? Or are you brave enough to try?',
            responses: [
              {
                id: 'response-accept',
                text: 'I\'ll bring you Medusa\'s head',
                nextNodeId: 'node-6',
                learningPoints: [
                  {
                    id: 'lp-perseus-6a-boast',
                    content: 'Perseus\'s rash promise to bring Medusa\'s head demonstrates youthful pride—a common trigger for heroic quests.',
                    category: 'literary-context',
                  },
                ],
              },
              {
                id: 'response-impossible',
                text: 'That\'s impossible! Anyone who looks at Medusa turns to stone',
                nextNodeId: 'node-7',
              },
            ],
          },
          {
            id: 'node-6',
            speaker: 'polydectes',
            text: 'Excellent! I look forward to seeing it at my wedding banquet. Your mother will be so proud of such a heroic son. Now go—you have much to prepare.',
            isEnd: true,
          },
          {
            id: 'node-7',
            speaker: 'polydectes',
            text: 'Impossible? Surely not for a brave young man who protects his mother so fiercely. Now run along, boy, unless you wish to admit defeat. What will your mother think when she learns you couldn\'t even attempt one little quest?',
            nextNodeId: 'node-8',
          },
          {
            id: 'node-8',
            speaker: 'polydectes',
            text: 'Well? Will you try, or concede?',
            responses: [
              {
                id: 'response-forced-accept',
                text: 'I\'ll do it. I\'ll bring you Medusa\'s head',
                nextNodeId: 'node-6',
              },
            ],
          },
        ],
      },

      learningPoints: [
        {
          id: 'lp-perseus-6-impossible-quest',
          content: 'The "impossible task" is a common device used by villains to remove heroes, but it often triggers the heroic journey instead.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 7: Interlude - The Call to Adventure
    {
      id: 'perseus-scene-7-call',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/d30f3278-9d73-408e-9ca2-e916354b7ea4/0_0.png',
      image: 'https://cdn.midjourney.com/f328c1f0-52cc-4379-9d4f-593a68e1b8e4/0_3.png',

      content: `Perseus had been trapped. Polydectes knew that a young man raised on stories of heroes couldn't refuse the challenge without losing honor. And honor meant everything.

This moment—when an ordinary person receives a challenge that will take them from safety into danger—is what Joseph Campbell called "The Call to Adventure."

You've seen it countless times:
- Luke Skywalker finding Leia's message
- Harry Potter receiving his Hogwarts letter
- Frodo Baggins inheriting the One Ring
- Neo being offered the red pill

In every case, accepting the call means leaving the comfortable, known world and stepping into the unknown. For Perseus, it meant attempting the impossible: killing a monster whose mere gaze turned mortals to stone.

The question is never whether heroes can succeed. The question is whether they have the courage to try.`,

      learningPoints: [
        {
          id: 'lp-perseus-7-call',
          content: 'The "Call to Adventure" is the moment when the hero must choose between safety and destiny—refusing means staying ordinary, accepting means becoming legendary.',
          category: 'literary-context',
        },
        {
          id: 'lp-perseus-7-modern',
          content: 'Modern "chosen one" narratives from Star Wars to Harry Potter follow the same pattern established by myths like Perseus.',
          category: 'reference',
        },
      ],
    },

    // Scene 8: Map Exploration - Perseus's journey
    {
      id: 'perseus-scene-8-map',
      type: 'map-exploration',
      backgroundImage: 'https://cdn.midjourney.com/64ba58d1-9a9c-430b-becb-13955494089b/0_0.png',
      mapImage: 'https://cdn.midjourney.com/64ba58d1-9a9c-430b-becb-13955494089b/0_0.png',

      prompt: 'Follow Perseus\'s epic quest across the Mediterranean, from Seriphos to the edge of the known world',

      locations: [
        {
          id: 'loc-seriphos',
          name: 'Seriphos',
          x: 45,
          y: 55,
          content: 'The island where Perseus was raised. Here he received Polydectes\' deadly challenge and began his impossible quest.',
          image: 'https://cdn.midjourney.com/a7cdea1a-4dfa-4f5e-b7d9-f95ba6144ce7/0_3.png',
        },
        {
          id: 'loc-dodona',
          name: 'Dodona',
          x: 38,
          y: 42,
          content: 'Site of Zeus\'s oracle, where Perseus learned how to find the Gorgons. The oracle spoke through rustling oak leaves.',
          image: 'https://cdn.midjourney.com/e8dff570-11ce-4725-bcee-487a6994fd4b/0_0.png',
        },
        {
          id: 'loc-edge-world',
          name: 'The Edge of the World',
          x: 10,
          y: 20,
          content: 'The realm of the Gorgons, far beyond the known world. Here, in a land of perpetual twilight, Medusa and her sisters dwelt among the statues of their victims.',
          image: 'https://cdn.midjourney.com/326a961d-833f-41f5-b2a0-93cb551cd945/0_1.png',
        },
        {
          id: 'loc-ethiopia',
          name: 'Ethiopia',
          x: 75,
          y: 70,
          content: 'On his return journey, Perseus discovered Princess Andromeda chained to a rock as sacrifice to a sea monster.',
          image: 'https://cdn.midjourney.com/b0b9f830-e629-49e1-8258-86d983928593/0_3.png',
        },
        {
          id: 'loc-argos',
          name: 'Argos',
          x: 50,
          y: 48,
          content: 'The city of his grandfather Acrisius, where Perseus would eventually return—and where prophecy would finally come to pass.',
          image: 'https://cdn.midjourney.com/325529eb-bacc-4a7d-9851-6d9b2c3f8a05/0_1.png',
        },
      ],

      learningPoints: [
        {
          id: 'lp-perseus-8-geography',
          content: 'Perseus\'s journey spans the known world and beyond, a pattern common in Greek hero myths where distance represents difficulty.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 9: Divine aid from Athena and Hermes
    {
      id: 'perseus-scene-9-divine-gifts',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/ae322e65-4e5f-4751-bfc7-273456a747bc/0_0.png',
      image: 'https://cdn.midjourney.com/ae322e65-4e5f-4751-bfc7-273456a747bc/0_0.png',

      content: `Perseus stood at the beginning of an impossible quest. He had no idea where the Gorgons lived, no weapon that could harm them, and no defense against Medusa's petrifying gaze.

Then, the gods intervened.

Athena, goddess of wisdom and warfare, appeared to him. She had her own grudge against Medusa (who had once been beautiful before Athena cursed her). She gave Perseus a polished bronze shield, mirror-bright, with crucial advice: "Never look directly at Medusa. Use the reflection."

Hermes, the messenger god, brought more gifts: winged sandals to carry Perseus swiftly through the air, and an adamantine sword sharp enough to cut through anything—even a Gorgon's neck.

Finally, they sent him to the Graeae, three ancient sisters who shared a single eye, to learn the location of the Gorgons' lair.`,

      inlineAnnotations: [
        {
          id: 'annotation-adamantine',
          text: 'adamantine',
          tooltip: {
            title: 'Unbreakable Divine Metal',
            content: 'Adamantine (or adamant) was a mythical, unbreakable substance used for divine weapons and chains. The word gives us "adamant" meaning unyielding.',
            category: 'vocabulary',
          },
        },
      ],

      learningPoints: [
        {
          id: 'lp-perseus-9-divine-aid',
          content: 'Greek heroes typically succeed through a combination of their own courage and divine assistance—neither alone is sufficient.',
          category: 'literary-context',
        },
        {
          id: 'lp-perseus-9-tools',
          content: 'Magical items (shield, sword, sandals) are external manifestations of the hero\'s divine favor and preparation for the trial.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 10: Decision - Approaching the Gorgons
    {
      id: 'perseus-scene-10-approach',
      type: 'decision',
      backgroundImage: 'https://cdn.midjourney.com/b2387510-0657-431b-939d-7b0da5d38dad/0_0.png',

      prompt: 'How will you approach the sleeping Gorgons?',
      context: `You are Perseus. You've flown on winged sandals to the edge of the world. Before you lies the Gorgons' lair—a nightmare landscape of stone statues frozen in expressions of terror. These were warriors who tried to kill Medusa. They failed.

You can hear the hissing of serpents—the snakes that form Medusa's hair. Three Gorgons sleep inside: Stheno, Euryale, and Medusa.

Only Medusa is mortal. Only she can be killed. The other two are immortal—if they wake, they'll hunt you forever.

Athena's shield gleams on your arm. You hold Hermes' sword. The winged sandals hover at your feet.

How do you approach?`,

      choices: [
        {
          id: 'choice-night',
          text: 'Strike at night while all three sleep',
          consequence: `Wise. You wait for deep night when the Gorgons sleep most soundly.

Using the winged sandals, you hover silently into the cave, looking only at the shield's reflection. The serpents writhe even in sleep. You identify Medusa—the only one who was once beautiful, the only one who is mortal.

Your timing is perfect. The immortal sisters don't stir.`,
          learningPoints: [
            {
              id: 'lp-perseus-10a-wisdom',
              content: 'Perseus succeeds through careful planning and wisdom, not just courage—showing that Greek heroism requires cleverness.',
              category: 'literary-context',
            },
          ],
        },
        {
          id: 'choice-lure',
          text: 'Lure Medusa away from her sisters',
          consequence: `An interesting strategy, but impossible. The Gorgons never separate. They've lived together for eons in this cave, and Medusa's sisters are fiercely protective.

Perseus realizes he must strike while all three sleep, hoping the immortal sisters don't wake until he's escaped.`,
        },
        {
          id: 'choice-dawn',
          text: 'Attack at dawn when light is best',
          consequence: `A natural thought—but fatal. At dawn, the Gorgons wake. Even looking at their reflection in bright light might be dangerous.

Perseus realizes he needs darkness and silence. He waits for deep night.`,
        },
      ],

      learningPoints: [],
    },

    // Scene 11: The slaying of Medusa
    {
      id: 'perseus-scene-11-medusa-slain',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/b2387510-0657-431b-939d-7b0da5d38dad/0_0.png',
      image: 'https://cdn.midjourney.com/3e13e6ab-54f0-4092-8711-4003b1c40ba5/0_0.png',

      content: `Perseus descended silently into the cave, eyes locked on Athena's polished shield. In its reflection, he saw the three Gorgons sleeping among stone warriors.

The serpents in Medusa's hair sensed him and began to hiss. She started to wake.

There was no time to hesitate. Perseus brought the adamantine sword down with all his strength, guided only by the reflection. The blade, sharp enough to cut anything, passed through Medusa's neck in a single stroke.

Her eyes opened in that final instant—but Perseus never looked. He grabbed her head by its serpent locks, stuffing it into a leather bag even as the blood dripped and hissed on the stone floor.

The other Gorgons woke, shrieking with rage. But Perseus was already airborne, the winged sandals carrying him up and away into the night. Behind him, Stheno and Euryale screamed curses, but they could not fly. They could not follow.

Perseus had done the impossible. He had killed Medusa.`,

      learningPoints: [
        {
          id: 'lp-perseus-11-climax',
          content: 'The beheading of Medusa represents the climax of the quest—the moment of greatest danger when the hero must act decisively.',
          category: 'literary-context',
        },
        {
          id: 'lp-perseus-11-reflection',
          content: 'The mirror shield solution shows how intelligence and divine gifts combine to overcome otherwise impossible challenges.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 12: Primary Source - Ovid on Medusa
    {
      id: 'perseus-scene-12-ovid',
      type: 'primary-source',
      backgroundImage: 'https://cdn.midjourney.com/c06588a1-2fe4-4ac7-b510-cea6e4273590/0_0.png',

      prompt: 'The Roman poet Ovid told Medusa\'s backstory—a tragic tale of transformation. Read this passage and consider: how does it change your view of the "monster"?',

      source: {
        title: 'Metamorphoses, Book IV',
        author: 'Ovid',
        date: '8 CE',
        type: 'text',
        content: `"Medusa once had charms; to win a spouse
was her great hope; of all her beauties, none
more striking than her lovely hair. I met
a man who claimed he'd seen her. He declared
the Lord of Ocean ravished her, defiled
her in Minerva's temple. Jove's great daughter,
shocked, turned away and covered up her eyes.
And then, that such a crime not go unpunished,
she changed the Gorgon's lovely hair to serpents,
horrible. And still today, to strike her foes
with fear, she wears upon her breastplate those
same snakes—the ones she made—her aegis badge."`,
        citation: 'Ovid, Metamorphoses IV.794-803, translated',
      },

      questions: [
        {
          id: 'q-medusa-tragedy',
          question: 'How does Ovid\'s backstory complicate the simple "hero slays monster" narrative?',
          type: 'multiple-choice',
          options: [
            'It shows Medusa was always evil and deserved her fate',
            'It reveals Medusa as a victim who was punished for being assaulted, making Perseus\'s victory more morally ambiguous',
            'It proves that the gods were always fair in their judgments',
            'It suggests Medusa wanted to become a Gorgon',
          ],
          correctAnswer: 'It reveals Medusa as a victim who was punished for being assaulted, making Perseus\'s victory more morally ambiguous',
          explanation: 'Ovid presents Medusa as a tragic figure—a beautiful woman assaulted by Poseidon and then cursed by Athena for being violated in her temple. This transformation from victim to monster adds moral complexity to Perseus\'s quest, showing how Greek myths explore uncomfortable truths about justice and suffering.',
        },
      ],

      learningPoints: [
        {
          id: 'lp-perseus-12-transformation',
          content: 'Ovid\'s version emphasizes transformation as punishment and tragedy—Medusa becomes monstrous through no fault of her own.',
          category: 'literary-context',
        },
        {
          id: 'lp-perseus-12-perspective',
          content: 'Considering the "monster\'s" backstory reveals how Greek myths often explore moral ambiguity rather than simple good vs. evil.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 13: Encountering Andromeda
    {
      id: 'perseus-scene-13-andromeda',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/05b6bc0c-cbdb-4906-abc9-77cc782a14b5/0_0.png',
      image: 'https://cdn.midjourney.com/05b6bc0c-cbdb-4906-abc9-77cc782a14b5/0_0.png',

      content: `Flying homeward over the coast of Ethiopia, Perseus spotted something that made him descend: a woman chained to a seaside cliff, waves crashing around her feet.

At first he thought her a marble statue, so still she stood. But then the wind stirred her hair, and tears rolled down her cheeks.

Perseus landed beside her. "What is your name? Why are you chained here like a criminal?"

Through her tears, she told him: she was Princess Andromeda. Her mother, Queen Cassiopeia, had boasted that Andromeda was more beautiful than the sea nymphs. Poseidon, offended on their behalf, sent a sea monster to ravage the coast. The Oracle declared the only way to appease the beast was to sacrifice her.

In the distance, the monster rose from the depths.

Perseus made his offer: "I will save you—if you will become my wife."

Andromeda, facing death, agreed. It was a proposal born of desperation, but perhaps also of hope.`,

      learningPoints: [
        {
          id: 'lp-perseus-13-rescue',
          content: 'The "damsel in distress" narrative appears frequently in Greek myth, often as a way for heroes to demonstrate heroism and secure a royal marriage.',
          category: 'literary-context',
        },
        {
          id: 'lp-perseus-13-hubris',
          content: 'Cassiopeia\'s boast exemplifies hubris—her pride in her daughter\'s beauty offends divine beings and brings catastrophe.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 14: Decision - Save Andromeda?
    {
      id: 'perseus-scene-14-choice',
      type: 'decision',
      backgroundImage: 'https://cdn.midjourney.com/05b6bc0c-cbdb-4906-abc9-77cc782a14b5/0_0.png',

      prompt: 'Will you fight the sea monster?',
      context: `You are Perseus. You've accomplished your quest—you have Medusa's head in your bag. Polydectes is waiting. Your mother needs rescue.

But here's this princess, chained to die for her mother's pride. The sea monster is rising from the waves, massive and terrible.

You could fly away. Your quest is complete. This isn't your responsibility.

Or you could stay. You could fight one more monster. You could save one more life.

What do heroes do?`,

      choices: [
        {
          id: 'choice-save',
          text: 'Stay and fight the sea monster',
          consequence: `You don't hesitate. Heroes don't abandon the innocent.

You draw Medusa's head from the bag and hold it toward the approaching sea monster. The beast rises from the waves, massive and terrible—and its eyes meet the Gorgon's gaze.

Stone spreads across its flesh in an instant. The monster freezes mid-lunge, becoming a massive statue that crashes back into the sea, sending up a tremendous spray.

Andromeda is saved. And you've gained not just a bride, but proof that heroism isn't just about completing quests—it's about choosing to help when you could walk away.`,
          learningPoints: [
            {
              id: 'lp-perseus-14a-heroism',
              content: 'True heroism involves choosing to help others even when it\'s not part of your assigned quest—Perseus could have simply flown home.',
              category: 'literary-context',
            },
          ],
        },
        {
          id: 'choice-leave',
          text: 'Continue home—you have your own quest to complete',
          consequence: `A pragmatic choice. You have responsibilities. Your mother is in danger. Polydectes is waiting.

But Perseus couldn't make this choice. He saw someone in need and couldn't fly away. That's what separates heroes from ordinary people—not divine parentage or magical weapons, but the willingness to help when help is needed.

Perseus stayed. He fought. He won.`,
        },
      ],

      learningPoints: [],
    },

    // Scene 15: Return and victory
    {
      id: 'perseus-scene-15-return',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/dbc74b9e-f3d0-44f6-800e-3bb047d9bf6d/0_0.png',
      image: 'https://cdn.midjourney.com/d89e4ce4-8d22-4b4f-8472-ebcfd7082227/0_3.png',

      content: `Perseus returned to Seriphos with Andromeda as his bride. He found that Polydectes had spent his absence forcing himself on Danaë, who had taken refuge in a temple with the fisherman Dictys.

Perseus burst into Polydectes' banquet hall where the king feasted with his supporters.

"I've brought your wedding gift, King Polydectes," Perseus announced.

"The boy returns!" Polydectes laughed. "And what have you brought? A basket of fish? You certainly didn't bring Medusa's head—"

Perseus drew out the Gorgon's head.

"Look upon it," he said.

Those who looked—Polydectes and his cronies—turned instantly to stone, frozen forever in expressions of mockery and disbelief.

Perseus had completed his impossible quest. He had saved his mother. And he had proven that sometimes, the gods really do favor the righteous.`,

      learningPoints: [
        {
          id: 'lp-perseus-15-return',
          content: 'The hero\'s return often involves using the gained power (Medusa\'s head) to resolve the original conflict (Polydectes\' threat).',
          category: 'literary-context',
        },
        {
          id: 'lp-perseus-15-justice',
          content: 'Polydectes\' petrification represents poetic justice—he who sent Perseus to die becomes a permanent statue of his own mockery.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 16: The Prophecy Fulfilled
    {
      id: 'perseus-scene-16-prophecy',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/bc8729c8-e5b5-4efe-984e-17bf437b8565/0_0.png',
      image: 'https://cdn.midjourney.com/b6d015ef-09ad-40f4-8512-8569fc599b52/0_2.png',

      content: `Perseus eventually traveled to Argos to meet his grandfather and reclaim his birthright. But when Acrisius heard that his grandson—the one prophesied to kill him—approached the city, terror seized him.

He fled Argos that very night, traveling to the distant city of Larissa where he hoped the prophecy could not reach him.

Years passed. Perseus ruled well, married Andromeda, and had children. The prophecy seemed forgotten.

Then came the athletic games at Larissa. Perseus, invited as a hero and honored guest, competed in the discus throw. He hurled the heavy bronze disc with all his legendary strength.

But a sudden gust of wind caught it mid-flight, sending it wildly off course into the crowd of spectators.

The discus struck an elderly man in the stands, killing him instantly.

The man was Acrisius. He had fled to Larissa years ago—to this very city—seeking safety from his fate.

The Oracle's prophecy, spoken decades earlier, had come true. No bronze chambers, no wooden chests cast into the sea, no running to distant cities could prevent it. Acrisius died by his grandson's hand, just as foretold.

Prophecy in Greek myth is not a warning—it is a certainty. The only question is the path it takes to fulfillment.`,

      learningPoints: [
        {
          id: 'lp-perseus-16-fate',
          content: 'The accidental nature of Acrisius\'s death emphasizes that prophecy is inevitable—running from fate often leads directly to it.',
          category: 'literary-context',
        },
        {
          id: 'lp-perseus-16-tragedy',
          content: 'Perseus becomes a tragic figure: blameless yet cursed by prophecy, achieving everything yet unable to escape the doom spoken at his birth.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 17: Cause-Effect - Perseus's journey consequences
    {
      id: 'perseus-scene-17-cause-effect',
      type: 'cause-effect',
      backgroundImage: 'https://cdn.midjourney.com/d30f3278-9d73-408e-9ca2-e916354b7ea4/0_0.png',

      prompt: 'Match each of Perseus\'s actions to their consequences. How do choices echo through his story?',

      pairs: [
        {
          id: 'pair-1',
          cause: 'Acrisius locks Danaë in bronze chamber',
          effect: 'Zeus visits her as golden rain; Perseus is born',
          explanation: 'Attempts to prevent prophecy often create the exact circumstances for it to occur—Acrisius\'s precautions directly lead to Perseus\'s divine conception.',
        },
        {
          id: 'pair-2',
          cause: 'Perseus rashly promises to bring Medusa\'s head',
          effect: 'He receives divine aid from Athena and Hermes',
          explanation: 'His acceptance of an impossible quest demonstrates heroic courage, which attracts divine favor—the gods help those who attempt the impossible.',
        },
        {
          id: 'pair-3',
          cause: 'Perseus saves Andromeda from sea monster',
          effect: 'He gains a royal bride and an ally',
          explanation: 'Choosing to help others beyond his required quest brings unexpected rewards—heroism creates connections and alliances.',
        },
        {
          id: 'pair-4',
          cause: 'Perseus shows Medusa\'s head to Polydectes',
          effect: 'The tyrant king turns to stone',
          explanation: 'The weapon gained in the quest (Medusa\'s head) solves the original problem (Polydectes\' threat), completing the heroic cycle.',
        },
        {
          id: 'pair-5',
          cause: 'Perseus accidentally kills Acrisius with discus',
          effect: 'The original prophecy is fulfilled',
          explanation: 'Despite all attempts to prevent it, the Oracle\'s prophecy comes true—fate in Greek myth is inevitable, though its path may surprise.',
        },
      ],

      learningPoints: [
        {
          id: 'lp-perseus-17-causality',
          content: 'Greek myths demonstrate how actions have far-reaching consequences, often fulfilling prophecies through the very attempts to prevent them.',
          category: 'literary-context',
        },
      ],

      events: {
        onExit: [{
          type: 'quiz',
          componentId: 'quiz-chapter-1',
          condition: { type: 'if-not-completed' },
        }],
      },
    },
  ],

  endQuiz: chapter1Quiz,
};

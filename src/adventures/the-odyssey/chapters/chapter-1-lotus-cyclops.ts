import type { Chapter } from '../../../types';
import { chapter1Quiz } from '../quizzes/chapter-1-quiz';

/**
 * Chapter 1: The Lotus-Eaters and the Cyclops
 *
 * This chapter explores Odysseus's first major challenges after leaving Troy,
 * examining themes of leadership, temptation, hubris, and divine retribution.
 * Visual style: Frank Miller's 300 - dramatic, bold, epic.
 */
export const chapter1: Chapter = {
  id: 'chapter-1-lotus-cyclops',
  title: 'Chapter 1: The Lotus-Eaters and the Cyclops',
  description: 'Join Odysseus as he faces the temptation of the Lotus-Eaters and the terrifying Cyclops Polyphemus, learning harsh lessons about leadership and the price of pride.',

  learningObjectives: [
    'Analyze Odysseus\'s leadership qualities and critical flaws',
    'Understand the theme of temptation and the importance of self-control',
    'Explore the ancient Greek concept of xenia (hospitality)',
    'Recognize hubris as a tragic flaw and its consequences',
    'Examine the role of divine retribution in Greek mythology',
  ],

  scenes: [
    // Scene 1: Fleet departs from Troy
    {
      id: 'chapter-1-scene-1-departure',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/59737e94-117d-4863-a40b-8ec451739576/0_0.png',
      image: 'https://cdn.midjourney.com/1168856d-c1ed-4008-bbf4-546f6c0ce88f/0_0.png',

      content: `The great city of Troy burns behind you. Ten years of brutal warfare have finally ended, and the Greek heroes prepare to sail home victorious.

You are Odysseus, King of Ithaca, renowned for your cunning mind and silver tongue. It was your stratagem—the wooden horse—that brought Troy to its knees. Now you command a fleet of twelve black-prowed ships, each filled with your loyal companions who dream only of home.

As your vessels cut through the wine-dark sea, you stand at the prow, watching Troy's funeral pyre shrink on the horizon. Your heart swells with triumph, yet something troubles you. The journey ahead feels uncertain, as if the gods themselves watch your every move.

Little do you know that your voyage home will take ten years—a journey as long and arduous as the war itself. The gods have plans for you, Odysseus, and your true trials are only beginning.`,

      learningPoints: [
        {
          id: 'chapter-1-lp-1-context',
          content: 'The Odyssey begins immediately after the events of the Trojan War, forming a sequel to Homer\'s Iliad.',
          category: 'historical-context',
        },
        {
          id: 'chapter-1-lp-2-odysseus',
          content: 'Odysseus is characterized by his intelligence and cunning, earning the epithet "polytropos" (man of many turns).',
          category: 'literary-context',
        },
      ],
    },

    // Scene 2: Storm to Lotus-Eaters
    {
      id: 'chapter-1-scene-2-storm',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/928a104f-cfac-455d-b51f-adfcff3eed38/0_0.png',
      image: 'https://cdn.midjourney.com/1168856d-c1ed-4008-bbf4-546f6c0ce88f/0_0.png',

      content: `Nine days of favorable winds carry your fleet across the Aegean. But on the tenth day, the sky darkens ominously.

A violent storm descends without warning—winds howl like tortured souls, waves tower higher than your masts, and lightning splits the heavens. Your ships are scattered like leaves in a gale. Men cling to the rails, praying to Poseidon for mercy.

For two days and nights, the tempest rages. When it finally subsides, you find your fleet battered but intact, though you have no idea where you are. The coastline ahead is unfamiliar—a strange land shrouded in mist.

As your ships approach the shore, you see a peaceful bay surrounded by lush vegetation. Palm trees sway gently, and the air smells sweet, almost intoxicating. Your men, exhausted and frightened, look to you for guidance.`,

      inlineAnnotations: [
        {
          id: 'chapter-1-annotation-poseidon',
          text: 'Poseidon',
          tooltip: {
            title: 'God of the Sea',
            content: 'Poseidon, brother of Zeus, ruled the seas and was known for his volatile temper. Sailors regularly offered prayers and sacrifices to ensure safe passage. He will become Odysseus\'s greatest divine antagonist.',
            category: 'cultural-context',
          },
        },
      ],

      learningPoints: [
        {
          id: 'chapter-1-lp-3-divine-power',
          content: 'In Greek mythology, gods actively intervene in mortal affairs, often using natural phenomena like storms as expressions of divine will.',
          category: 'cultural-context',
        },
        {
          id: 'chapter-1-lp-4-wine-dark-sea',
          content: 'Homer\'s recurring phrase "wine-dark sea" exemplifies the use of epithets and formulaic language in oral poetry tradition.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 3: Decision - Which men to send
    {
      id: 'chapter-1-scene-3-decision-scouts',
      type: 'decision',
      backgroundImage: 'https://cdn.midjourney.com/eb637fbf-e371-47b2-a765-29f35bb85ace/0_0.png',
      image: 'https://cdn.midjourney.com/db443600-a5ab-4c7e-8903-853c0d7ee382/0_0.png',

      prompt: 'Who should you send to scout this unknown land?',

      context: `Your ships rest at anchor in the calm bay. The island appears peaceful, but after ten years of war, you know that appearances deceive.

You must send scouts to explore this land—to find fresh water, food, and determine if the inhabitants are friendly or hostile. The question is: whom should you send?`,

      choices: [
        {
          id: 'chapter-1-choice-best-warriors',
          text: 'Your strongest warriors—men who can fight if threatened',
          consequence: 'You select your three finest warriors, battle-hardened veterans who can handle any danger. They arm themselves with spears and swords before heading inland with confidence.',
          learningPoints: [
            {
              id: 'chapter-1-lp-5-warrior-choice',
              content: 'Choosing strength over wisdom reflects a warrior\'s mindset, but not all challenges can be overcome with force.',
              category: 'literary-context',
            },
          ],
        },
        {
          id: 'chapter-1-choice-trusted-officers',
          text: 'Your most trusted officers—experienced men with good judgment',
          consequence: 'You choose three seasoned officers who served you well throughout the war. These men know when to fight and when to observe. They depart cautiously, senses alert.',
          learningPoints: [
            {
              id: 'chapter-1-lp-6-wisdom-choice',
              content: 'Good leadership requires balancing strength with wisdom, trusting those with sound judgment.',
              category: 'literary-context',
            },
          ],
        },
        {
          id: 'chapter-1-choice-youngest',
          text: 'Younger men—eager to prove themselves but expendable if needed',
          consequence: 'You select three young sailors, keen-eyed and swift. They are honored by your trust and rush off eagerly to explore. You watch them disappear into the vegetation, hoping their enthusiasm doesn\'t outpace their caution.',
          learningPoints: [
            {
              id: 'chapter-1-lp-7-pragmatic-choice',
              content: 'This choice reveals the harsh pragmatism of ancient leadership—sometimes leaders must risk those whose loss would hurt the mission least.',
              category: 'historical-context',
            },
          ],
        },
      ],

      learningPoints: [
        {
          id: 'chapter-1-lp-8-leadership',
          content: 'Odysseus frequently faces difficult leadership decisions that test both his tactical skills and his care for his men.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 4: The lotus effect
    {
      id: 'chapter-1-scene-4-lotus-effect',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/eb637fbf-e371-47b2-a765-29f35bb85ace/0_0.png',
      image: 'https://cdn.midjourney.com/c2b0418d-a11c-4afd-8f31-0d3206ba161e/0_0.png',

      content: `Hours pass. The sun climbs higher, and still your scouts do not return. Anxiety grows among the crew. Finally, you decide to investigate yourself.

Leading a group of armed men inland, you follow your scouts' trail through the sweet-smelling vegetation. The air grows thicker, more intoxicating with every step. Soon you hear voices—singing, laughing, speaking in dreamy, disconnected tones.

You find your scouts in a clearing, sitting among strange people with glazed expressions. The inhabitants—the Lotus-Eaters—are offering your men flowers with thick, fleshy petals. Your scouts have already eaten them.

"Captain!" one of your men calls out, his voice slurred and distant. "Captain, you must try this! It's wonderful... I've never felt so peaceful. We should stay here. Why would we ever want to leave? Home? What home? This is paradise..."

Your other scouts nod dreamily, their weapons abandoned in the grass. The Lotus-Eaters smile benevolently, offering you the same flowers. They mean no harm—but their gift is more dangerous than any sword.`,

      inlineAnnotations: [
        {
          id: 'chapter-1-annotation-lotus',
          text: 'Lotus-Eaters',
          tooltip: {
            title: 'The Lotophagi',
            content: 'The Lotus-Eaters (Lotophagi in Greek) were a peaceful people who ate the lotus plant, which caused blissful forgetfulness. They represent the danger of escapism and forgetting one\'s duties and identity.',
            category: 'cultural-context',
          },
        },
      ],

      learningPoints: [
        {
          id: 'chapter-1-lp-9-temptation',
          content: 'The lotus represents the temptation of forgetting pain and responsibility—a surrender to comfortable oblivion rather than facing life\'s challenges.',
          category: 'literary-context',
        },
        {
          id: 'chapter-1-lp-10-nostos',
          content: 'The concept of "nostos" (homecoming) is central to the Odyssey; the lotus threatens this fundamental goal by making men forget their desire to return home.',
          category: 'cultural-context',
        },
      ],
    },

    // Scene 5: Dialogue - Confronting drugged men
    {
      id: 'chapter-1-scene-5-dialogue-scouts',
      type: 'dialogue',
      backgroundImage: 'https://cdn.midjourney.com/eb637fbf-e371-47b2-a765-29f35bb85ace/0_0.png',

      character: {
        id: 'chapter-1-drugged-scout',
        name: 'Your Scout',
        portrait: 'https://cdn.midjourney.com/ae85d6c5-b6dc-4572-8a45-09842d42b9a9/0_0.png',
        description: 'A trusted warrior now under the lotus\'s spell',
      },

      dialogueTree: {
        id: 'chapter-1-node-1',
        speaker: 'chapter-1-drugged-scout',
        text: 'Odysseus... my king... why do you look so troubled? Here, take this flower. Just one taste, and all your worries disappear. The war, the voyage, the deaths... all forgotten. Only peace remains.',

        responses: [
          {
            id: 'chapter-1-response-1-reason',
            text: 'Remind him of home—of Ithaca, his family, his purpose',
            nextNodeId: 'chapter-1-node-2',
            learningPoints: [
              {
                id: 'chapter-1-lp-11-reason',
                content: 'Odysseus often relies on persuasion and reason before resorting to force, showing his reputation for clever speech.',
                category: 'literary-context',
              },
            ],
          },
          {
            id: 'chapter-1-response-2-command',
            text: 'Order him to return to the ships immediately',
            nextNodeId: 'chapter-1-node-3',
            learningPoints: [
              {
                id: 'chapter-1-lp-12-authority',
                content: 'Direct commands work when reason fails, but the lotus has weakened their respect for authority.',
                category: 'literary-context',
              },
            ],
          },
        ],

        allNodes: [
          {
            id: 'chapter-1-node-2',
            speaker: 'chapter-1-drugged-scout',
            text: 'Ithaca? I... I had a wife there, didn\'t I? And a son... their faces are so dim now, like a dream. But why should I care? Here I have no pain, no loss, no fear. This peace is better than memory.',
            responses: [
              {
                id: 'chapter-1-response-3-force',
                text: 'You realize words won\'t work—you must use force',
                nextNodeId: 'chapter-1-node-4',
              },
            ],
          },
          {
            id: 'chapter-1-node-3',
            speaker: 'chapter-1-drugged-scout',
            text: 'Commands? What are commands to me now? I have no king, no duty. I am free... finally, gloriously free. Stay with us, Odysseus. Let it all go.',
            responses: [
              {
                id: 'chapter-1-response-4-force',
                text: 'You realize words won\'t work—you must use force',
                nextNodeId: 'chapter-1-node-4',
              },
            ],
          },
          {
            id: 'chapter-1-node-4',
            speaker: 'player',
            text: 'You signal your armed men. They seize your scouts, who resist weakly, still smiling their dreamy smiles. "Bind them," you command. "Take them to the ships. Do not let them eat any more of that flower. And do not—under any circumstances—taste it yourselves."',
            isEnd: true,
          },
        ],
      },

      learningPoints: [
        {
          id: 'chapter-1-lp-13-force-necessary',
          content: 'Sometimes a leader must use force to save his men from themselves—compassion can require harsh action.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 6: Arrival at Cyclops island
    {
      id: 'chapter-1-scene-6-cyclops-island',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/b43b8ee9-efec-45e0-ab5f-e168254d1ef3/0_0.png',
      image: 'https://cdn.midjourney.com/1168856d-c1ed-4008-bbf4-546f6c0ce88f/0_0.png',

      content: `Your men drag the scouts back to the ships, weeping and pleading to be left behind. You have them bound and locked below deck until the lotus's effects wear off. Within hours, the fleet departs the lotus land.

After several days of sailing, you spot another island. This one is wild and rugged—towering cliffs, dense forests, and no signs of civilization. Your supplies run low, and you need fresh water and food.

Anchoring the main fleet in a protected harbor, you take your own ship and crew to investigate. As you approach the shore, you notice something peculiar: herds of fat sheep and goats grazing on the hillsides, but no shepherds in sight.

You beach your ship and lead twelve of your best men inland. The island seems deserted, yet clearly someone tends these flocks. Soon you discover a massive cave set into a cliff face—and the smell of cheese aging inside makes your empty stomachs growl.

"We should take what we need and leave," suggests one of your men. But curiosity—always your weakness and your strength—makes you want to see who lives here. Perhaps you can establish guest-friendship with the inhabitants.

You settle in to wait for the cave's master to return.`,

      learningPoints: [
        {
          id: 'chapter-1-lp-14-curiosity',
          content: 'Odysseus\'s curiosity is both a virtue (driving his cleverness) and a flaw (leading him into danger)—a classic example of a complex hero.',
          category: 'literary-context',
        },
        {
          id: 'chapter-1-lp-15-foreshadowing',
          content: 'Homer uses subtle foreshadowing—the unattended flocks and massive cave create ominous tension before revealing what dwells there.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 7: Map exploration - Cyclops island
    {
      id: 'chapter-1-scene-7-map-exploration',
      type: 'map-exploration',
      backgroundImage: 'https://cdn.midjourney.com/b43b8ee9-efec-45e0-ab5f-e168254d1ef3/0_0.png',
      mapImage: 'https://cdn.midjourney.com/8d498c74-5e91-4540-846f-41b8b1f68a95/0_0.png',

      prompt: 'Explore the Cyclops\'s island and discover its key locations',

      locations: [
        {
          id: 'chapter-1-location-harbor',
          name: 'Protected Harbor',
          x: 15,
          y: 75,
          content: `A natural harbor where your ship rests at anchor, protected by rocky outcroppings. Your remaining crew waits nervously, watching the hills for your return.

The eleven ships in your main fleet are anchored safely across the strait, too far to hear if you call for help. You made this choice deliberately—one ship to investigate, the rest protected. But now that distance feels ominous.`,
          image: 'https://cdn.midjourney.com/1168856d-c1ed-4008-bbf4-546f6c0ce88f/0_0.png',
        },
        {
          id: 'chapter-1-location-grazing-fields',
          name: 'Grazing Fields',
          x: 45,
          y: 60,
          content: `Lush meadows filled with fat sheep and goats, the finest livestock you've ever seen. The animals are huge—some sheep stand as tall as a man's chest. They graze peacefully, but you see no shepherds anywhere.

The absence of human activity is eerie. Who could tend such magnificent herds yet leave them completely unguarded?`,
        },
        {
          id: 'chapter-1-location-olive-groves',
          name: 'Wild Olive Groves',
          x: 70,
          y: 45,
          content: `Dense groves of wild olive trees grow on the hillside. The trees are ancient and gnarled, their trunks thick as temple columns.

The wild olives provide food for the island's wildlife, and their sturdy wood has many uses. It's the kind of timber that could serve as construction material, ship masts, or even weapons—strong, hard, and flexible.`,
        },
        {
          id: 'chapter-1-location-cave',
          name: 'Polyphemus\'s Cave',
          x: 60,
          y: 25,
          content: `A massive cave carved into the cliff face, its entrance tall enough for three men stacked atop one another. Inside, you find evidence of a giant inhabitant: huge cheese wheels, enormous milk pails, and pens for the livestock.

The cave is divided into sections—a living area with a crude hearth, a cheese-making area with massive vats, and animal pens at the rear. Everything is sized for a being of tremendous proportions.

Your men urge you to take cheese and leave immediately. But you insist on waiting to meet the cave's owner, hoping for guest-gifts. This decision will cost you dearly.`,
          image: 'https://cdn.midjourney.com/61204888-a34a-4d6c-9d12-23c211f10bcf/0_0.png',
        },
        {
          id: 'chapter-1-location-cliffs',
          name: 'Rocky Cliffs',
          x: 85,
          y: 15,
          content: `Towering limestone cliffs dominate the island's interior, creating natural fortifications. From this vantage point, you can see for miles—other islands in the distance, and the vast, empty sea.

The isolation of this place becomes clear. The Cyclopes live apart from civilization, recognizing no laws but their own strength. They fear no gods and respect no customs of hospitality.`,
        },
      ],

      requiredLocations: ['chapter-1-location-cave', 'chapter-1-location-grazing-fields'],

      learningPoints: [
        {
          id: 'chapter-1-lp-16-cyclopes',
          content: 'The Cyclopes in the Odyssey are primitive giants who live without laws or agriculture, representing the opposite of civilized Greek society.',
          category: 'cultural-context',
        },
        {
          id: 'chapter-1-lp-17-geography',
          content: 'Homer uses geographical isolation to emphasize moral and cultural isolation—the Cyclopes\' remote island reflects their savage nature.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 8: Cyclops traps the men
    {
      id: 'chapter-1-scene-8-trapped',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/61204888-a34a-4d6c-9d12-23c211f10bcf/0_0.png',
      image: '/Imsie/assets/the-odyssey/scenes/cyclops_eye.jpg',

      content: `As evening falls, you hear thunderous footsteps approaching. Your men freeze in terror as a massive shape blocks the cave entrance—a giant easily three times the height of a man.

Polyphemus the Cyclops enters, driving his flocks before him. He is monstrous: hulking muscles, matted hair, and most horrifying of all, a single enormous eye centered in his forehead. The eye swivels, scanning the cave, then fixes on you and your men.

"Who are you?" his voice rumbles like an avalanche. "How dare you enter my home?"

You step forward, trying to maintain composure. "Great Cyclops, we are Achaeans returning from Troy. We claim the sacred rights of guests. Zeus himself protects travelers and suppliants. Will you offer us hospitality and guest-gifts, as custom demands?"

Polyphemus laughs—a terrible sound. "Zeus? The gods mean nothing to me! We Cyclopes are stronger than Zeus. I owe you nothing, stranger. Tell me—where is your ship?"

Some instinct makes you lie: "Poseidon smashed our ship on the rocks. We are all that remain."

The Cyclops grins, revealing teeth like tombstones. Then, without warning, he snatches two of your men, dashes their heads against the cave floor, and devours them whole—flesh, bones, and all. Your remaining men scream in horror.

After his gruesome meal, Polyphemus rolls a massive boulder across the cave entrance—a stone so huge that twenty oxen couldn't budge it. You and your men are trapped with a man-eating monster.

In the dim firelight, you notice a massive olive trunk lying in the corner of the cave—one of those ancient trees you saw on the hillside, cut and brought here by the Cyclops, perhaps as a walking staff. Your mind begins to race with desperate plans.`,

      inlineAnnotations: [
        {
          id: 'chapter-1-annotation-xenia',
          text: 'sacred rights of guests',
          tooltip: {
            title: 'Xenia: The Sacred Law of Hospitality',
            content: 'Xenia was the ancient Greek custom of hospitality, protected by Zeus himself. Hosts were obligated to provide food, shelter, and gifts to travelers, while guests must show respect and not abuse hospitality. Violating xenia was a grave offense against divine law.',
            category: 'cultural-context',
          },
        },
      ],

      learningPoints: [
        {
          id: 'chapter-1-lp-18-xenia-violation',
          content: 'Polyphemus\'s violation of xenia marks him as savage and impious, justifying Odysseus\'s eventual revenge while highlighting Greek cultural values.',
          category: 'cultural-context',
        },
        {
          id: 'chapter-1-lp-19-clever-lie',
          content: 'Odysseus\'s instinctive lie about his ship shows his quick thinking—protecting his vessel ensures escape remains possible.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 9: Decision - Escape strategy
    {
      id: 'chapter-1-scene-9-decision-strategy',
      type: 'decision',
      backgroundImage: 'https://cdn.midjourney.com/61204888-a34a-4d6c-9d12-23c211f10bcf/0_0.png',
      image: 'https://cdn.midjourney.com/db443600-a5ab-4c7e-8903-853c0d7ee382/0_0.png',

      prompt: 'How will you escape the Cyclops\'s cave?',

      context: `That night, after Polyphemus falls into drunken sleep, you and your surviving men huddle in the darkness, desperate to find a way out.

You could kill the Cyclops while he sleeps—but then you'd be trapped forever, unable to move the massive boulder. You need a plan that uses cunning, not just force.

You notice several things that might help: the Cyclops has wine skins, there's the massive olive trunk you could fashion into a weapon, and his sheep are penned at the back of the cave. How will you combine these elements into an escape plan?`,

      choices: [
        {
          id: 'chapter-1-choice-poison-wine',
          text: 'Poison the Cyclops\'s wine and wait for him to die slowly',
          consequence: 'You consider poisoning the wine, but realize you have no poison, and even if you did, a slow death would leave you trapped. This won\'t work—you need the Cyclops mobile enough to move the stone. You must think of something else.',
          learningPoints: [
            {
              id: 'chapter-1-lp-20-rejected-plan',
              content: 'Homer shows Odysseus considering and rejecting flawed plans, demonstrating his intelligence through his reasoning process.',
              category: 'literary-context',
            },
          ],
        },
        {
          id: 'chapter-1-choice-get-him-drunk',
          text: 'Get him drunk, blind his eye, then hide under the sheep when he lets them out',
          consequence: 'Yes—this plan could work! You\'ll need to craft a weapon from the olive wood, get Polyphemus drunk enough to pass out, blind his single eye, and then hide beneath the sheep when he releases them to graze. It\'s dangerous, but it\'s your only chance.',
          learningPoints: [
            {
              id: 'chapter-1-lp-21-metis',
              content: 'This plan exemplifies "metis" (cunning intelligence)—using deception, patience, and cleverness rather than direct confrontation.',
              category: 'cultural-context',
            },
          ],
        },
        {
          id: 'chapter-1-choice-dig-tunnel',
          text: 'Dig a tunnel through the cave wall while the Cyclops sleeps',
          consequence: 'You examine the cave walls—solid limestone, impossible to dig through with your bare hands or bronze weapons. Even if you could, the noise would wake the Cyclops. This plan won\'t work. You need something more clever.',
        },
      ],

      learningPoints: [
        {
          id: 'chapter-1-lp-22-intelligence',
          content: 'The Cyclops episode emphasizes intelligence over strength—Odysseus cannot overpower Polyphemus but can outwit him.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 10: Blinding of Polyphemus
    {
      id: 'chapter-1-scene-10-blinding',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/61204888-a34a-4d6c-9d12-23c211f10bcf/0_0.png',
      image: 'https://cdn.midjourney.com/18a147c0-a284-4583-a93d-ba656c506007/0_0.png',

      content: `The next evening, you put your plan into motion. You and your men sharpen the massive olive trunk into a pointed stake and harden its tip in the fire.

When Polyphemus returns from herding, you approach him with a bowl of wine—strong, undiluted wine from your ship's stores.

"Great Cyclops," you say smoothly, "you asked my name. I will tell you, if you grant me a guest-gift as custom demands. My name is Nobody. Nobody is what my mother and father call me, and all my companions."

Polyphemus drinks deeply, savoring the wine. "Nobody? Then Nobody, my gift to you is this: I shall eat you last, after all your companions!" He laughs at his own cruel joke and demands more wine.

Bowl after bowl he drinks, until finally he collapses in a stupor, vomiting wine and chunks of human flesh.

"Now!" you command. Your men seize the olive stake, heat its tip until it glows red-hot, then drive it deep into the Cyclops's single eye.

Polyphemus's scream shakes the very cave. He tears the stake from his ruined eye and stumbles about, blind and howling. His cries bring other Cyclopes to the cave entrance.

"Polyphemus! Who attacks you?" they shout through the stone.

"Nobody! Nobody is attacking me!" he roars.

"If nobody attacks you, then you must be sick. Pray to your father Poseidon for healing!" The other Cyclopes leave, dismissing his screams.

Your plan has worked perfectly.`,

      inlineAnnotations: [
        {
          id: 'chapter-1-annotation-nobody',
          text: 'Nobody',
          tooltip: {
            title: 'The "Nobody" Trick',
            content: 'Odysseus calls himself "Nobody" (Outis in Greek), creating a brilliant wordplay. When Polyphemus cries "Nobody is attacking me," the other Cyclopes think he means no one attacks him. This demonstrates Odysseus\'s command of language as a weapon.',
            category: 'literary-context',
          },
        },
      ],

      learningPoints: [
        {
          id: 'chapter-1-lp-23-wordplay',
          content: 'The "Nobody" deception showcases how language itself can be a weapon—Odysseus\'s reputation for clever speech is well-earned.',
          category: 'literary-context',
        },
        {
          id: 'chapter-1-lp-24-teamwork',
          content: 'The blinding requires coordinated teamwork under extreme pressure, showing Odysseus\'s ability to lead men through terrifying ordeals.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 11: Dialogue - Hubris moment
    {
      id: 'chapter-1-scene-11-dialogue-hubris',
      type: 'dialogue',
      backgroundImage: 'https://cdn.midjourney.com/5b73f8c0-19fe-4088-99e6-b24f42129a00/0_0.png',

      character: {
        id: 'chapter-1-polyphemus',
        name: 'Polyphemus',
        portrait: '/Imsie/assets/the-odyssey/portraits/polyphemus.jpg',
        description: 'The blinded Cyclops, son of Poseidon',
      },

      dialogueTree: {
        id: 'chapter-1-hubris-node-1',
        speaker: 'player',
        text: 'The next morning, when Polyphemus releases his sheep to graze, you and your men cling to the undersides of the largest rams. The blind Cyclops feels each sheep\'s back as it passes, but never thinks to check beneath them. You escape to your ship and push off from shore.',

        responses: [
          {
            id: 'chapter-1-hubris-response-1-silent',
            text: 'Sail away silently—you\'ve won, no need to risk more',
            nextNodeId: 'chapter-1-hubris-node-2',
            learningPoints: [
              {
                id: 'chapter-1-lp-25-wisdom-path',
                content: 'This would be the wise choice—victory achieved, men saved, escape completed. But it\'s not the choice Odysseus makes.',
                category: 'literary-context',
              },
            ],
          },
          {
            id: 'chapter-1-hubris-response-2-taunt',
            text: 'Taunt the Cyclops—he deserves to know who outwitted him',
            nextNodeId: 'chapter-1-hubris-node-3',
            learningPoints: [
              {
                id: 'chapter-1-lp-26-hubris-choice',
                content: 'This choice demonstrates hubris—excessive pride that leads to revealing your identity to a dangerous enemy.',
                category: 'cultural-context',
              },
            ],
          },
        ],

        allNodes: [
          {
            id: 'chapter-1-hubris-node-2',
            speaker: 'player',
            text: 'You intend to sail away in silence—wisdom, after all, is your greatest virtue. But as the ship pulls away and you see the Cyclops stumbling blind on the shore, a rush of exhilaration overwhelms you. The victory is too sweet. The triumph too great. Before you can stop yourself, the words burst from your lips: "Cyclops! If any man asks who blinded you, tell them it was Odysseus, son of Laertes, King of Ithaca!"',
            responses: [
              {
                id: 'chapter-1-hubris-response-2a-continue',
                text: 'Continue',
                nextNodeId: 'chapter-1-hubris-node-4',
              },
            ],
          },
          {
            id: 'chapter-1-hubris-node-3',
            speaker: 'player',
            text: 'Your pride overcomes your caution. "Cyclops!" you shout across the water. "If any man asks who blinded you, tell them it was Odysseus, son of Laertes, King of Ithaca! Remember that name!"',
            responses: [
              {
                id: 'chapter-1-hubris-response-3-continue',
                text: 'Continue',
                nextNodeId: 'chapter-1-hubris-node-4',
              },
            ],
          },
          {
            id: 'chapter-1-hubris-node-4',
            speaker: 'chapter-1-polyphemus',
            text: 'Odysseus! Now I know your name! My father Poseidon will hear of this! He will hunt you across every sea, and you will know suffering beyond measure! Ten years it will take you to reach home—if you ever reach it at all!',
            responses: [
              {
                id: 'chapter-1-hubris-response-4-continue',
                text: 'Continue',
                nextNodeId: 'chapter-1-hubris-node-5',
              },
            ],
          },
          {
            id: 'chapter-1-hubris-node-5',
            speaker: 'player',
            text: 'The Cyclops tears a mountain peak from the cliff and hurls it toward your voice. The massive rock crashes into the sea just ahead of your ship, creating a wave that drives you back toward the shore. Your men row frantically, cursing your pride. They know what you have just learned: victory means nothing if you throw it away with boasting.',
            isEnd: true,
          },
        ],
      },

      learningPoints: [
        {
          id: 'chapter-1-lp-27-hubris-definition',
          content: 'Hubris—excessive pride or arrogance—is the defining flaw of Greek tragic heroes, leading them to defy divine will or common sense.',
          category: 'cultural-context',
        },
        {
          id: 'chapter-1-lp-28-dramatic-irony',
          content: 'The audience knows that revealing his name will doom Odysseus to ten more years of wandering, creating dramatic irony.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 12: Poseidon's curse (WITH QUIZ TRIGGER)
    {
      id: 'chapter-1-scene-12-curse',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/928a104f-cfac-455d-b51f-adfcff3eed38/0_0.png',
      image: 'https://cdn.midjourney.com/974b2c37-0ce0-40f9-bff8-aa49e075b0e2/0_0.png',
      imageVideo: 'https://cdn.midjourney.com/video/87b0eb45-41b3-4782-93d5-84b584ca2b98/0.mp4',

      content: `Far beneath the waves, in his coral palace, Poseidon hears his son's prayers. The god of earthquakes and storms rises from the depths, his face dark with fury.

"So, the mortal Odysseus has blinded my son," Poseidon rumbles, his voice shaking the ocean floor. "He may have Zeus's favor, but the seas are mine. Every wave, every current, every storm shall turn against him."

The god raises his trident high. "I curse you, Odysseus of Ithaca! You who were so eager to reveal your name and lineage—now that name will be your doom. You will wander the seas for years uncounted. Your men will perish. Your ships will sink. Every time you approach home, I shall drive you back.

Only when you have suffered as my son has suffered will I allow you to set foot on Ithaca again. This I swear by the river Styx—so shall it be!"

Lightning splits the sky, and the sea churns with supernatural fury. Your ship rocks violently as waves rise around you.

Your men look at you with fear and accusation in their eyes. They know—as you now know—that your moment of pride has cost them dearly. The journey home just became infinitely longer and more dangerous.

But there is no turning back now. Ahead lies the open sea, and somewhere beyond it, home. You can only pray that your cunning will prove greater than the god's wrath.`,

      inlineAnnotations: [
        {
          id: 'chapter-1-annotation-styx',
          text: 'river Styx',
          tooltip: {
            title: 'The Unbreakable Oath',
            content: 'The river Styx flows through the underworld. Oaths sworn by the Styx are absolutely binding, even for gods. Breaking such an oath results in terrible punishment. Poseidon\'s curse is now irreversible.',
            category: 'cultural-context',
          },
        },
      ],

      learningPoints: [
        {
          id: 'chapter-1-lp-29-divine-retribution',
          content: 'Divine retribution in Greek mythology is inevitable and proportional—Odysseus\'s offense against Poseidon\'s son brings the god\'s eternal enmity.',
          category: 'cultural-context',
        },
        {
          id: 'chapter-1-lp-30-consequences',
          content: 'This scene establishes the central conflict of the Odyssey—Odysseus\'s struggle to reach home despite a god\'s active opposition.',
          category: 'literary-context',
        },
        {
          id: 'chapter-1-lp-31-tragedy',
          content: 'The tragic irony is complete: Odysseus\'s greatest strengths (cleverness, pride in achievement) become the source of his greatest suffering.',
          category: 'literary-context',
        },
      ],

      events: {
        onExit: [
          {
            type: 'quiz',
            componentId: 'quiz-chapter-1',
            condition: {
              type: 'if-not-completed',
            },
          },
        ],
      },
    },
  ],

  endQuiz: chapter1Quiz,
};

import type { Chapter } from '../../../types';
import { chapter4Quiz } from '../quizzes/chapter-4-quiz';

export const chapter4: Chapter = {
  id: 'chapter-4-heracles-labors',
  title: 'Chapter 4: Heracles - Part I: The Labors',
  description: 'Follow the greatest of Greek heroes from madness to redemption through twelve impossible labors.',

  learningObjectives: [
    'Understand the redemption arc through penance and deeds',
    'Analyze Heracles as the archetypal strongman hero',
    'Explore themes of madness, guilt, and atonement',
    'Recognize the structure of episodic heroic trials',
    'Compare to modern superhero narratives and origin stories',
  ],

  scenes: [
    // Scene 1: Birth of Heracles; Hera's jealousy
    {
      id: 'heracles-scene-1-birth',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/1e1224fa-8f05-46db-ace9-3c875c70b39e/0_0.png',
      image: 'https://cdn.midjourney.com/1e1224fa-8f05-46db-ace9-3c875c70b39e/0_0.png',

      content: `Of all the heroes who walked the earth in the Age of Heroes, none was stronger than Heracles. None performed greater deeds. And none suffered more for their greatness.

His story begins, as so many Greek tragedies do, with Zeus and his wandering eye.

Zeus fell in love with Alcmene, a mortal woman of great beauty and virtue, wife of Amphitryon of Thebes. Zeus, as was his habit, disguised himself—this time as Amphitryon himself—and seduced Alcmene. Nine months later, she gave birth to twins: Iphicles, son of her mortal husband, and Heracles, son of Zeus.

Hera, Zeus's wife and queen of the gods, was furious. She had endured countless infidelities, but this child represented everything she despised: proof of her husband's betrayal, destined for greatness she could never grant to her own children.

From the moment of his birth, Hera hated Heracles. And she would spend his entire life trying to destroy him.`,

      learningPoints: [
        {
          id: 'lp-heracles-1-divine-birth',
          content: 'Heracles\'s birth as Zeus\'s illegitimate son immediately marks him for both greatness and suffering—divine favor attracts divine wrath.',
          category: 'literary-context',
        },
        {
          id: 'lp-heracles-1-hera-antagonist',
          content: 'Hera serves as Heracles\'s lifelong antagonist, representing the consequences of Zeus\'s infidelities and the price heroes pay for divine parentage.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 2: Young Heracles: strangling serpents
    {
      id: 'heracles-scene-2-serpents',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/1e1224fa-8f05-46db-ace9-3c875c70b39e/0_0.png',
      image: 'https://cdn.midjourney.com/1e1224fa-8f05-46db-ace9-3c875c70b39e/0_0.png',

      content: `Hera's first attempt to kill Heracles came when he was just eight months old.

She sent two massive serpents to strangle the infant twins in their cradle. They slithered through the darkness, venomous and deadly, sent by a jealous goddess to murder a helpless child.

Iphicles, the mortal twin, screamed in terror.

Heracles laughed.

When Alcmene and Amphitryon rushed into the nursery, they found Iphicles wailing and Heracles gurgling with delight, a strangled serpent clutched in each tiny fist. The child who would become the world's greatest hero had already claimed his first two kills.

Even as a baby, his strength was extraordinary. Even as an infant, he was marked for destiny—and for suffering.`,

      inlineAnnotations: [
        {
          id: 'annotation-serpents',
          text: 'serpents',
          tooltip: {
            title: 'Serpents in Greek Myth',
            content: 'Serpents often represent divine power or tests in Greek mythology. That baby Heracles strangled Hera\'s serpents foreshadows his future victories over monsters—and his eternal conflict with the queen of the gods.',
            category: 'cultural-context',
          },
        },
      ],

      learningPoints: [
        {
          id: 'lp-heracles-2-infant-strength',
          content: 'The infant Heracles strangling serpents demonstrates his supernatural strength from birth, establishing him as exceptional even among heroes.',
          category: 'literary-context',
        },
        {
          id: 'lp-heracles-2-foreshadowing',
          content: 'This early victory over monsters foreshadows the labors to come—Heracles\'s life will be defined by overcoming impossible challenges.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 3: Dialogue - The Choice of Heracles (Virtue vs Vice)
    {
      id: 'heracles-scene-3-choice',
      type: 'dialogue',
      backgroundImage: 'https://cdn.midjourney.com/44d885b4-2177-4191-b0cc-e84f198f8058/0_0.png',

      character: {
        id: 'virtue',
        name: 'Virtue',
        portrait: 'https://cdn.midjourney.com/b1e5b9fd-2695-4d51-903c-394ef7a33a9c/0_1.png',
        description: 'A dignified woman in simple robes',
      },

      inlineAnnotations: [
        {
          id: 'annotation-arete',
          text: 'arete',
          tooltip: {
            title: 'Arete: Excellence and Virtue',
            content: 'Arete (ἀρετή) is a central concept in Greek culture meaning excellence, virtue, and living up to one\'s full potential. It encompasses moral virtue, courage, skill, and fulfilling one\'s purpose. For the Greeks, achieving arete was the highest human aspiration.',
            category: 'cultural-context',
          },
        },
      ],

      dialogueTree: {
        id: 'node-1',
        speaker: 'virtue',
        text: 'Heracles, you stand at a crossroads. You have extraordinary strength, but strength alone does not make a hero. How will you use your power?',

        responses: [
          {
            id: 'response-easy',
            text: 'I want an easy life filled with pleasure',
            nextNodeId: 'node-2',
          },
          {
            id: 'response-glory',
            text: 'I want to achieve great deeds and earn glory',
            nextNodeId: 'node-3',
          },
        ],

        allNodes: [
          {
            id: 'node-2',
            speaker: 'virtue',
            text: 'A beautiful woman appears beside me, dressed in fine clothes. She is Vice, and she speaks sweetly: "Choose me, Heracles, and you will have comfort, wealth, endless pleasure without effort."',
            nextNodeId: 'node-4',
          },
          {
            id: 'node-3',
            speaker: 'virtue',
            text: 'You choose wisely. The path I offer is hard—filled with labor, pain, and sacrifice. But it is the only path to true excellence, to arete.',
            nextNodeId: 'node-5',
          },
          {
            id: 'node-4',
            speaker: 'virtue',
            text: 'She offers comfort, but I offer meaning. Vice promises pleasure without price—but that is a lie. Everything worth having must be earned through struggle.',
            responses: [
              {
                id: 'response-virtue',
                text: 'I choose the difficult path of virtue',
                nextNodeId: 'node-5',
                learningPoints: [
                  {
                    id: 'lp-heracles-3a-choice',
                    content: 'The Choice of Heracles represents the Greek philosophical ideal that true excellence (arete) requires choosing difficulty and virtue over easy pleasure.',
                    category: 'cultural-context',
                  },
                ],
              },
            ],
          },
          {
            id: 'node-5',
            speaker: 'virtue',
            text: 'Then prepare yourself, Heracles. The road ahead will test you beyond measure. You will face monsters, madness, and impossible tasks. But if you endure, your name will echo through eternity.',
            isEnd: true,
          },
        ],
      },

      learningPoints: [
        {
          id: 'lp-heracles-3-allegory',
          content: 'The Choice of Heracles is a famous philosophical allegory showing that heroism requires consciously choosing hardship over comfort.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 4: Marriage and children; happiness
    {
      id: 'heracles-scene-4-family',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/3cf6bef7-7d19-4167-ae20-4a32774d5ac5/0_0.png',
      image: 'https://cdn.midjourney.com/3cf6bef7-7d19-4167-ae20-4a32774d5ac5/0_0.png',

      content: `Heracles grew into a man of extraordinary strength and courage. He defended Thebes from its enemies, and as a reward, King Creon gave him his daughter Megara as a bride.

For a time, Heracles was happy.

He married Megara and they had children—sources say three sons, though some accounts mention more. He built a home, trained as a warrior, and seemed destined for the life of a great but normal hero.

He had a family. He had love. He had purpose.

These were the best years of his life. They would also be the briefest.

Hera, watching from Olympus, had not forgotten her hatred. She had simply been waiting for the perfect moment to strike—the moment when Heracles had the most to lose.`,

      learningPoints: [
        {
          id: 'lp-heracles-4-happiness',
          content: 'The brief period of domestic happiness makes the coming tragedy more devastating—Greek drama often shows how joy precedes catastrophe.',
          category: 'literary-context',
        },
        {
          id: 'lp-heracles-4-normal-life',
          content: 'Heracles\'s attempt to live a normal life shows that heroes cannot escape their destiny, no matter how much they desire ordinary happiness.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 5: Hera sends madness; kills family
    {
      id: 'heracles-scene-5-madness',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/dc79056c-a568-4d34-b626-e205018abaec/0_0.png',
      image: 'https://cdn.midjourney.com/dc79056c-a568-4d34-b626-e205018abaec/0_0.png',

      content: `Hera's revenge was terrible.

She sent divine madness upon Heracles—a supernatural frenzy that destroyed his mind and twisted his perceptions. In his madness, he saw enemies where he should have seen family.

He believed his wife was a hostile invader. He thought his children were the offspring of his enemies.

With the same strength that had once protected them, he killed them all.

When the madness lifted, Heracles found himself standing in his ruined home, surrounded by the bodies of his wife and children. He had no memory of what he'd done—only the terrible evidence before him.

The strongest man in the world collapsed to his knees and wept. No monster he would ever fight would haunt him like this. No labor would be harder than living with what he had done.`,

      learningPoints: [
        {
          id: 'lp-heracles-5-madness',
          content: 'Divine madness in Greek myth removes moral responsibility but not psychological guilt—Heracles is both innocent and traumatized.',
          category: 'cultural-context',
        },
        {
          id: 'lp-heracles-5-tragedy',
          content: 'The murder of his family represents the ultimate tragedy—strength without control, power that destroys what it should protect.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 6: Primary Source - Greek views on madness
    {
      id: 'heracles-scene-6-madness-source',
      type: 'primary-source',
      backgroundImage: 'https://cdn.midjourney.com/6b3921b7-8632-44f3-9cac-e658ad0d86e7/0_0.png',

      prompt: 'The playwright Euripides explored Heracles\'s madness in his tragedy "Heracles." Read this passage and consider: how did Greeks understand divine madness and moral responsibility?',

      source: {
        title: 'Heracles',
        author: 'Euripides',
        date: '416 BCE',
        type: 'text',
        content: `HERACLES:
Alas! What darkness lifts from my eyes?
What is this sight before me—my children lying here,
their bodies still, my wife beside them?
Father, who has done this? Whose hand destroyed them?

AMPHITRYON:
You, my son—your own hand did this.
No one else is guilty.

HERACLES:
What do you say? What dreadful word is this?
I—killed them? My children?
How could my hands have done such horror?

AMPHITRYON:
It was not of your will, my son.
Hera sent madness upon you,
and in that frenzy you saw enemies where there were none.
You thought you fought Eurystheus' kin;
you struck your own sons and your wife, believing them foes.
Their blood is upon your hands,
but the deed was born of a god's cruelty, not your intent.

HERACLES:
O misery upon misery!
I have destroyed the fruit of my own body.
I have made my house a place of death.
No mortal is more wretched than I.
Would that I had died before this madness took me—
before my hands were stained with their blood!
What atonement can there be?
How shall I look upon the sun, or speak to men again?

CHORUS:
You suffer what the gods have forced upon you.
Though your will was innocent,
still you must bear this burden.
No man can escape the fate the gods decree.`,
        citation: 'Euripides, Heracles, lines 1143-1161 (adapted translation)',
      },

      questions: [
        {
          id: 'q-madness-responsibility',
          question: 'How does Euripides present the tension between divine causation and human responsibility?',
          type: 'multiple-choice',
          options: [
            'Heracles is completely innocent because the gods controlled him',
            'Heracles is fully guilty and deserves punishment',
            'Heracles is both innocent of intent and responsible for atonement—divine causation does not erase the need for redemption',
            'The play argues that divine madness is just an excuse for violence',
          ],
          correctAnswer: 'Heracles is both innocent of intent and responsible for atonement—divine causation does not erase the need for redemption',
          explanation: 'Greek tragedy often explores moral complexity: Heracles did not choose to kill his family (Hera caused his madness), yet he still must live with what he did and atone for it. The gods may cause suffering, but mortals must still find a way to redeem themselves.',
        },
      ],

      learningPoints: [
        {
          id: 'lp-heracles-6-greek-madness',
          content: 'Ancient Greeks saw madness as both a divine affliction and a state requiring purification—the victim must atone even if not morally culpable.',
          category: 'cultural-context',
        },
        {
          id: 'lp-heracles-6-complexity',
          content: 'Euripides explores the psychological complexity of trauma—Heracles must live with memories of actions he didn\'t choose to commit.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 7: Oracle; must serve Eurystheus
    {
      id: 'heracles-scene-7-oracle',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/75364813-58ce-4f69-80b1-047d622d95c0/0_0.png',
      image: 'https://cdn.midjourney.com/75364813-58ce-4f69-80b1-047d622d95c0/0_0.png',

      content: `Heracles, consumed by guilt, went to the Oracle at Delphi seeking purification and redemption.

The Oracle's answer was harsh: to atone for his crime, he must serve his cousin Eurystheus, King of Mycenae, for twelve years. Whatever tasks Eurystheus demanded, Heracles must complete.

This was a bitter pill. Eurystheus was a weak, cowardly man who had only become king because Hera had once tricked Zeus into granting the throne to him instead of Heracles. Now this lesser man would command the greatest hero alive.

But Heracles had no choice. He had committed the ultimate crime, even if unwillingly. Atonement required submission.

"I will serve," he said. "Give me labors to complete. Let me earn redemption through deeds."

And so the Twelve Labors of Heracles began—not as glory-seeking adventures, but as penance for unspeakable tragedy.`,

      learningPoints: [
        {
          id: 'lp-heracles-7-penance',
          content: 'The Labors represent penance rather than glory-seeking—Heracles performs impossible tasks to atone for crimes committed under divine madness.',
          category: 'literary-context',
        },
        {
          id: 'lp-heracles-7-submission',
          content: 'Serving the inferior Eurystheus represents ultimate humility—true strength means submitting to authority to achieve redemption.',
          category: 'cultural-context',
        },
      ],
    },

    // Scene 8: Interlude - Superhero origin story
    {
      id: 'heracles-scene-8-superhero',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/49f1494e-cced-4f29-8033-4e50704c7f22/0_0.png',
      image: 'https://cdn.midjourney.com/49f1494e-cced-4f29-8033-4e50704c7f22/0_0.png',

      content: `Heracles's story is the template for nearly every superhero origin you've ever encountered.

Think about it:

**Superman:** Extraordinary power from birth, struggles to fit into normal life, uses strength to protect others. An immigrant (alien) story about finding purpose.

**The Hulk:** Immense strength coupled with loss of control and the fear of hurting loved ones. Bruce Banner's constant struggle is Heracles's tragedy—power that can destroy what it should protect.

**Spider-Man:** "With great power comes great responsibility." Peter Parker learns what Heracles knew—that extraordinary abilities demand extraordinary accountability. Both carry guilt for failing to protect those they love.

The pattern is ancient: superpowered individual commits tragedy (often accidentally), seeks redemption through heroic deeds, struggles with the burden of power.

Heracles invented this narrative 3,000 years ago. Every "hero with a dark past seeking redemption" owes him a debt.`,

      learningPoints: [
        {
          id: 'lp-heracles-8-superman',
          content: 'Superman\'s immigrant narrative and struggle to control godlike power directly parallels Heracles\'s divine heritage and supernatural strength.',
          category: 'reference',
        },
        {
          id: 'lp-heracles-8-hulk',
          content: 'The Hulk\'s uncontrollable rage and fear of hurting others mirrors Heracles\'s divine madness and the tragedy of misdirected strength.',
          category: 'reference',
        },
        {
          id: 'lp-heracles-8-redemption',
          content: 'The "redemption arc through heroic deeds" structure originated with Heracles and remains central to superhero narratives today.',
          category: 'reference',
        },
      ],
    },

    // Scene 9: Decision - Choose which labors to depict
    {
      id: 'heracles-scene-9-choose-labors',
      type: 'decision',
      backgroundImage: 'https://cdn.midjourney.com/75364813-58ce-4f69-80b1-047d622d95c0/0_0.png',
      image: 'https://cdn.midjourney.com/28e7b33e-8406-4962-8c0d-f96682ad0ed3/0_3.png',

      prompt: 'Which approach to the labors interests you most?',
      context: `Eurystheus, delighting in his power over the mighty Heracles, devised twelve impossible tasks. Each labor was designed to kill the hero—yet each became a legend.

There are twelve labors in total:
1. The Nemean Lion (invulnerable beast)
2. The Lernaean Hydra (regenerating heads)
3. The Ceryneian Hind (sacred deer)
4. The Erymanthian Boar (massive wild boar)
5. The Augean Stables (impossible cleaning)
6. The Stymphalian Birds (bronze-beaked flock)
7. The Cretan Bull (raging bull)
8. The Mares of Diomedes (man-eating horses)
9. The Belt of Hippolyta (Amazon queen)
10. The Cattle of Geryon (three-bodied giant)
11. The Apples of the Hesperides (guarded by dragon)
12. Cerberus (three-headed guard dog of the Underworld)

How shall we explore them?`,

      choices: [
        {
          id: 'choice-chronological',
          text: 'Experience them in order, seeing how Heracles develops',
          consequence: 'We\'ll explore a selection of labors that show Heracles\'s evolution from brute strength to strategic thinking. Each labor teaches him something new about heroism.',
          learningPoints: [
            {
              id: 'lp-heracles-9a-progression',
              content: 'The Labors progress from pure strength challenges to tasks requiring cleverness, showing Heracles\'s growth beyond physical power.',
              category: 'literary-context',
            },
          ],
        },
        {
          id: 'choice-thematic',
          text: 'Focus on the most symbolically significant labors',
          consequence: 'We\'ll examine labors that represent different aspects of heroism: brute force, strategy, humility, endurance, and confronting death itself.',
        },
        {
          id: 'choice-famous',
          text: 'See the most famous and influential labors',
          consequence: 'We\'ll focus on the labors that have most influenced art, literature, and modern culture—the ones everyone remembers.',
        },
      ],

      learningPoints: [],
    },

    // Scene 10: Labor 1 - Nemean Lion
    {
      id: 'heracles-scene-10-lion',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/219cef0a-f414-4120-a4be-e4d8f4f2a3c0/0_0.png',
      image: 'https://cdn.midjourney.com/fa668c55-2018-4408-8913-ca44a7601a15/0_0.png',

      content: `The first labor: slay the Nemean Lion, a beast whose golden hide could not be pierced by any weapon.

Heracles tracked the lion to its cave in the valley of Nemea. He fired arrows—they bounced off. He thrust his sword—it bent. His spear shattered against the creature's impenetrable hide.

The lion roared and charged.

Heracles realized something crucial: if weapons couldn't harm the beast, he'd have to use what made him unique—his own supernatural strength.

He dropped his weapons. When the lion lunged, he caught it in his bare hands. For thirty minutes they struggled, Heracles's muscles straining against the creature's massive form. Finally, he locked his arms around the lion's throat and squeezed.

The Nemean Lion, invulnerable to every weapon forged by man, strangled to death in the grip of Zeus's son.

Heracles skinned the lion using its own claws (the only thing sharp enough to cut it) and wore its pelt as armor. From that day forward, the lion-skin cloak became his trademark—proof that he'd overcome the impossible.`,

      learningPoints: [
        {
          id: 'lp-heracles-10-strength',
          content: 'The Nemean Lion establishes Heracles\'s defining trait: raw physical power that surpasses any mortal weapon or technique.',
          category: 'literary-context',
        },
        {
          id: 'lp-heracles-10-iconography',
          content: 'The lion-skin became Heracles\'s iconic symbol, appearing in art and literature for millennia as shorthand for heroic strength.',
          category: 'cultural-context',
        },
      ],
    },

    // Scene 11: Map Exploration - Locations of twelve labors
    {
      id: 'heracles-scene-11-map',
      type: 'map-exploration',
      backgroundImage: 'https://cdn.midjourney.com/76913aaf-7030-4426-9f08-fac520be23ac/0_0.png',
      mapImage: 'https://cdn.midjourney.com/58662250-7476-4951-8893-a9261443e82f/0_2.png',

      prompt: 'Discover the locations across Greece where Heracles will perform his legendary labors. Each place holds a different challenge—explore the geography of his redemption.',

      locations: [
        {
          id: 'loc-nemea',
          name: 'Nemea',
          x: 47,
          y: 59,
          content: 'Site of the Nemean Lion. This valley became sacred to Zeus, and the Nemean Games were founded in honor of Heracles\'s victory.',
          image: 'https://cdn.midjourney.com/a11d1627-ec83-4f6f-9aeb-233c291bc56f/0_0.png',
        },
        {
          id: 'loc-lerna',
          name: 'Lerna',
          x: 48,
          y: 63,
          content: 'The swamps where the Lernaean Hydra lurked. A multi-headed serpent that grew two heads for each one cut off.',
          image: 'https://cdn.midjourney.com/fa53efe4-7db7-45b9-9d27-258559ba44f6/0_3.png',
        },
        {
          id: 'loc-stymphalus',
          name: 'Stymphalus',
          x: 42,
          y: 59,
          content: 'Lake Stymphalus, where bronze-beaked birds terrorized the region, their metallic feathers sharp as arrows.',
          image: 'https://cdn.midjourney.com/d95ea6eb-868c-4276-bded-1c8165576d31/0_1.png',
        },
        {
          id: 'loc-themyscira',
          name: 'Land of the Amazons',
          x: 89,
          y: 1,
          content: 'Home of the warrior women, where Heracles sought the belt of Queen Hippolyta—a task that ended in tragic misunderstanding.',
          image: 'https://cdn.midjourney.com/d0550654-97e4-4e9b-a6f5-3991b1c3a2ef/0_2.png',
        },
        {
          id: 'loc-hesperides',
          name: 'Garden of the Hesperides',
          x: 1,
          y: 96,
          content: 'At the western edge of the world, where the golden apples grew, guarded by a hundred-headed dragon and the Titan Atlas.',
          image: 'https://cdn.midjourney.com/8e07871f-c70b-406a-8086-eb46ba18ed0a/0_2.png',
        },
        {
          id: 'loc-underworld',
          name: 'The Underworld',
          x: 50,
          y: 77,
          content: 'The realm of Hades, where Heracles descended to capture Cerberus, the three-headed guardian of the dead.',
          image: 'https://cdn.midjourney.com/9258cd36-2288-4319-81bd-e42b607f31ff/0_0.png',
        },
      ],

      learningPoints: [
        {
          id: 'lp-heracles-11-geography',
          content: 'The geographic spread of the Labors—from Greece to the edge of the world and even the Underworld—represents the universal scope of heroism.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 12: Labor 2 - Lernaean Hydra
    {
      id: 'heracles-scene-12-hydra',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/c849c0a0-5157-4b70-b95d-1ba9feff1e8a/0_0.png',
      image: 'https://cdn.midjourney.com/67897eb7-5937-4005-a8c2-519222adbd2f/0_0.png',

      content: `The second labor sent Heracles to the swamps of Lerna to slay the Hydra—a serpentine monster with nine heads.

Heracles began confidently, smashing one of the heads with his club.

Two grew back in its place.

He cut off another head. Two more sprouted. The more he fought, the stronger the Hydra became. Brute force alone wouldn't work.

This time, Heracles had to think.

He called for his nephew Iolaus to help. As Heracles cut off each head, Iolaus immediately cauterized the wound with a burning torch, preventing regrowth. Together, they methodically destroyed each head until only the immortal central head remained.

That one, Heracles couldn't kill—so he buried it under an enormous boulder, trapping it forever.

The lesson: some enemies can't be defeated by strength alone. Sometimes the hero must adapt, strategize, and accept help from others.`,

      inlineAnnotations: [
        {
          id: 'annotation-iolaus',
          text: 'Iolaus',
          tooltip: {
            title: 'The Importance of Companions',
            content: 'Iolaus, Heracles\'s nephew and companion, represents how even the greatest heroes need allies. Eurystheus later claimed this labor didn\'t count because Heracles received help—but that objection misses the point of growth through collaboration.',
            category: 'literary-context',
          },
        },
      ],

      learningPoints: [
        {
          id: 'lp-heracles-12-strategy',
          content: 'The Hydra forces Heracles to evolve beyond pure strength—he must use tactics, problem-solving, and teamwork to succeed.',
          category: 'literary-context',
        },
        {
          id: 'lp-heracles-12-adaptation',
          content: 'The regenerating heads represent problems that worsen with conventional approaches—heroism requires adapting strategy to circumstance.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 13: Labor 6 - Stymphalian Birds
    {
      id: 'heracles-scene-13-birds',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/0c3d2222-643d-47ca-82f3-c37efcb29522/0_0.png',
      image: 'https://cdn.midjourney.com/4b8fdcff-867b-4b55-9fd3-37fb59d812bc/0_0.png',

      content: `For the sixth labor, Eurystheus commanded Heracles to drive away the Stymphalian Birds—a flock of man-eating birds with bronze beaks and metallic feathers sharp as arrows.

The birds nested in thick woods surrounding Lake Stymphalus. Heracles couldn't reach them to fight, and they were too numerous to kill one by one.

Once again, brute force was useless.

Athena, watching Heracles's growth, gave him a gift: a bronze rattle (or castanets, in some versions) made by the god Hephaestus. The noise it created was so loud and terrible that it terrified the birds.

Heracles climbed a mountain overlooking the lake and shook the rattle. The terrifying sound drove the birds into the air in a panicked flock. As they rose, Heracles shot them down with arrows—those he couldn't kill fled far away, never to return.

The lesson: strength must be paired with divine wisdom. The right tool, used cleverly, accomplishes what raw power cannot.`,

      learningPoints: [
        {
          id: 'lp-heracles-13-tools',
          content: 'The bronze rattle represents how heroes must combine divine gifts, clever tools, and skill—not just rely on personal strength.',
          category: 'literary-context',
        },
        {
          id: 'lp-heracles-13-wisdom',
          content: 'Athena\'s assistance shows that as Heracles grows in wisdom and humility, he earns more divine aid—the gods favor those who learn.',
          category: 'cultural-context',
        },
      ],
    },

    // Scene 14: Labor 9 - Belt of Hippolyta
    {
      id: 'heracles-scene-14-hippolyta',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/5fbfb580-3835-4d3a-8c58-7283a223e829/0_0.png',
      image: 'https://cdn.midjourney.com/5fbfb580-3835-4d3a-8c58-7283a223e829/0_0.png',

      content: `The ninth labor required Heracles to obtain the belt of Hippolyta, Queen of the Amazons—a gift from her father Ares, god of war.

Heracles sailed to the land of the Amazons expecting a battle. These were warrior women, after all, feared throughout the known world for their martial prowess.

But when he arrived and explained his quest, Queen Hippolyta surprised him. She was impressed by his fame and his honesty. She agreed to give him the belt willingly, without violence.

For a brief moment, it seemed that not all labors required bloodshed.

Then Hera intervened. Disguised as an Amazon warrior, she spread a rumor that Heracles planned to kidnap their queen. The Amazons attacked, believing their queen betrayed.

In the chaos and confusion, Hippolyta died—some say Heracles killed her in self-defense, others that she died protecting him. Either way, Heracles took the belt and left, haunted by another death he hadn't intended.

The lesson: even when heroes choose peace, tragedy can follow. Some forces conspire against reconciliation.`,

      learningPoints: [
        {
          id: 'lp-heracles-14-tragedy',
          content: 'The death of Hippolyta represents how Heracles\'s attempts at peaceful resolution are sabotaged by Hera—his past (divine curse) prevents him from escaping violence.',
          category: 'literary-context',
        },
        {
          id: 'lp-heracles-14-amazons',
          content: 'The Amazons represent a culture of female warriors who are both respected enemies and potential allies—Greek myth explores gender and power through their stories.',
          category: 'cultural-context',
        },
      ],
    },

    // Scene 15: Anachronism - Spot errors in labor depictions
    {
      id: 'heracles-scene-15-anachronism',
      type: 'anachronism',
      backgroundImage: 'https://cdn.midjourney.com/82d53e4b-dd3e-4100-8149-f3dfc5c71c75/0_0.png',

      prompt: 'A Renaissance artist painted Heracles performing his labors—but included items that didn\'t exist in ancient Greece! Can you spot the anachronisms?',
      scenario: 'Artists throughout history have depicted Heracles, but they often added details from their own time period rather than ancient Greece. Test your knowledge of what belongs in the mythic past and what doesn\'t!',

      image: 'https://cdn.midjourney.com/82d53e4b-dd3e-4100-8149-f3dfc5c71c75/0_0.png',

      correctAnswers: ['item-compass', 'item-gunpowder', 'item-telescope'],

      items: [
        {
          id: 'item-compass',
          name: 'Magnetic compass',
          image: '/Imsie/assets/greek-myths/items/compass.png',
          description: 'A navigation device pointing north',
          explanation: 'Magnetic compasses weren\'t invented until the Han Dynasty in China (around 200 BCE) and didn\'t reach Europe until much later. Ancient Greeks navigated by stars and landmarks.',
        },
        {
          id: 'item-lion-skin',
          name: 'Lion-skin cloak',
          image: '/Imsie/assets/greek-myths/items/lion-skin.png',
          description: 'The pelt of a great lion worn as armor',
          explanation: 'Correct! The Nemean Lion\'s pelt became Heracles\'s signature armor after his first labor. This absolutely belongs in any depiction of the hero.',
        },
        {
          id: 'item-gunpowder',
          name: 'Gunpowder barrel',
          image: '/Imsie/assets/greek-myths/items/gunpowder.png',
          description: 'A barrel of explosive powder',
          explanation: 'Gunpowder wasn\'t invented until 9th century CE China, over a thousand years after the mythical age of heroes. Heracles relied on strength, not explosives.',
        },
        {
          id: 'item-club',
          name: 'Wooden club',
          image: '/Imsie/assets/greek-myths/items/club.png',
          description: 'A heavy wooden weapon',
          explanation: 'Correct! Heracles\'s olive-wood club was one of his iconic weapons. Clubs are among humanity\'s oldest weapons and definitely existed in ancient Greece.',
        },
        {
          id: 'item-telescope',
          name: 'Telescope',
          image: '/Imsie/assets/greek-myths/items/telescope.png',
          description: 'An optical instrument for viewing distant objects',
          explanation: 'The telescope wasn\'t invented until 1608 CE by Dutch opticians. Ancient Greeks had remarkable astronomy but used only their naked eyes.',
        },
        {
          id: 'item-bow',
          name: 'Bow and arrows',
          image: '/Imsie/assets/greek-myths/items/bow.png',
          description: 'A ranged weapon with projectiles',
          explanation: 'Correct! Heracles famously used poisoned arrows (dipped in Hydra venom) for many of his labors. Bows existed in ancient Greece and earlier.',
        },
      ],

      learningPoints: [
        {
          id: 'lp-heracles-15-historical-context',
          content: 'Understanding what technology existed in ancient Greece versus later periods helps us read myths in their proper cultural context.',
          category: 'historical-context',
        },
      ],
    },

    // Scene 16: Labor 11 - Apples of the Hesperides
    {
      id: 'heracles-scene-16-apples',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/f0049625-fbba-456c-8b71-885b63d22222/0_0.png',
      image: 'https://cdn.midjourney.com/c31f89be-583b-4a17-a2a6-116e20e81823/0_0.png',

      content: `The eleventh labor sent Heracles to the Garden of the Hesperides at the western edge of the world, to retrieve the golden apples that granted immortality.

These apples were guarded by Ladon, a hundred-headed dragon, and watched over by Atlas, the Titan condemned to hold up the sky for eternity.

Heracles realized he couldn't defeat a hundred-headed dragon, nor could he simply take the apples—they were too well protected.

So he made Atlas an offer.

"I'll hold the sky for you," Heracles said, "if you'll retrieve the apples for me. You know this garden. The dragon won't attack you."

Atlas, desperate for even brief relief from his eternal burden, agreed. Heracles took the weight of the heavens upon his shoulders—and understood instantly why Atlas had been driven nearly mad by this punishment. The weight was beyond comprehension.

When Atlas returned with the apples, he was reluctant to take the sky back. "I'll deliver these apples to Eurystheus myself," he said, planning to leave Heracles there forever.

But Heracles had learned cunning. "Of course," he said. "But first, could you hold the sky just for a moment? I need to pad my shoulders."

Atlas, not thinking clearly after eons of torment, took back the burden. Heracles grabbed the apples and left, having tricked a Titan.

The lesson: sometimes the greatest strength is knowing when to use your mind instead of your muscles.`,

      learningPoints: [
        {
          id: 'lp-heracles-16-cunning',
          content: 'The Atlas deception shows Heracles\'s complete evolution—from relying solely on strength to using cleverness, negotiation, and strategic thinking.',
          category: 'literary-context',
        },
        {
          id: 'lp-heracles-16-burden',
          content: 'Briefly bearing the sky gives Heracles empathy for another\'s suffering—even Titans deserve compassion, though not at the expense of his quest.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 17: Labor 12 - Cerberus and the Underworld
    {
      id: 'heracles-scene-17-cerberus',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/f315f108-b2af-4062-ad54-e101aa9988ff/0_0.png',
      image: 'https://cdn.midjourney.com/9258cd36-2288-4319-81bd-e42b607f31ff/0_0.png',

      content: `For the twelfth and final labor, Eurystheus commanded something no living hero had attempted: "Go to the Underworld. Capture Cerberus, the three-headed hound of Hades. Bring him to me."

It was the ultimate test. Not of strength or cunning, but of facing death itself.

Heracles descended through a cave at Cape Taenarum, entering the realm where all mortals eventually go. The spirits of the dead parted before him—some in fear, others in wonder. A living man, walking among shades.

He reached the throne of Hades and Persephone, king and queen of the dead. Rather than fight, Heracles showed respect. "Lord Hades," he said, kneeling. "I ask permission to borrow your guard dog. I swear by the River Styx I will return him unharmed."

Hades, impressed by the hero's courage and courtesy, agreed. "You may take Cerberus—but only if you can subdue him without weapons. Prove your strength matches your respect."

Cerberus was massive—a monstrous dog with three heads, a serpent for a tail, and snakes growing from his back. His purpose was to prevent the dead from leaving. He had never been challenged by the living.

Heracles approached bare-handed. The beast lunged, three sets of jaws snapping. The hero dodged, grappled, and locked his arms around the central throat. Cerberus thrashed, bit, and poisoned him with snake venom from his hide. But Heracles held on, his strength enhanced by divine blood, until the great hound finally submitted.

Heracles carried Cerberus to the surface—and for a moment, the living and dead realms touched. Eurystheus, seeing the beast, screamed and hid in his bronze jar, begging Heracles to take it back immediately.

The hero returned Cerberus to his post, completing the twelfth labor. He had descended to death and returned. There were no more labors. His penance was complete.

But more importantly, Heracles had proven something profound: that mortality itself could be faced and overcome—not through immortality, but through courage.`,

      learningPoints: [
        {
          id: 'lp-heracles-17-death',
          content: 'The Cerberus labor represents confronting mortality itself—Heracles must enter death\'s realm and return, proving the hero\'s ultimate courage is accepting what cannot be defeated.',
          category: 'literary-context',
        },
        {
          id: 'lp-heracles-17-respect',
          content: 'Heracles shows respect to Hades rather than violence, demonstrating his complete evolution—true heroism knows when to fight and when to honor others\' authority.',
          category: 'literary-context',
        },
        {
          id: 'lp-heracles-17-katabasis',
          content: 'The "katabasis" (descent to the underworld) is a recurring Greek motif—Orpheus, Odysseus, and Heracles all made the journey, each for different reasons.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 18: Cause-Effect - Match labors to skills demonstrated
    {
      id: 'heracles-scene-18-cause-effect',
      type: 'cause-effect',
      backgroundImage: 'https://cdn.midjourney.com/f315f108-b2af-4062-ad54-e101aa9988ff/0_0.png',

      prompt: 'Match each labor to the heroic quality it demonstrates. See how Heracles evolved from pure strength to complete heroism.',

      pairs: [
        {
          id: 'pair-1',
          cause: 'Nemean Lion (strangling with bare hands)',
          effect: 'Raw physical strength and courage',
          explanation: 'The first labor establishes Heracles as the strongest mortal alive—his defining trait is supernatural power that surpasses any weapon.',
        },
        {
          id: 'pair-2',
          cause: 'Lernaean Hydra (teamwork with Iolaus)',
          effect: 'Strategic thinking and accepting help',
          explanation: 'The Hydra forces Heracles to evolve beyond solo strength—he learns that some challenges require collaboration and adaptive strategy.',
        },
        {
          id: 'pair-3',
          cause: 'Stymphalian Birds (using Athena\'s rattle)',
          effect: 'Using divine gifts and tools wisely',
          explanation: 'This labor shows Heracles learning to combine his strength with divine wisdom and specialized tools—heroism requires more than muscles.',
        },
        {
          id: 'pair-4',
          cause: 'Belt of Hippolyta (diplomatic attempt)',
          effect: 'Seeking peaceful solutions first',
          explanation: 'Heracles tries diplomacy before violence—though Hera sabotages peace, the attempt shows his moral growth beyond pure warrior instinct.',
        },
        {
          id: 'pair-5',
          cause: 'Apples of Hesperides (tricking Atlas)',
          effect: 'Cunning, negotiation, and mental agility',
          explanation: 'The Atlas deception represents Heracles\'s complete transformation—he uses intellect, empathy, and clever planning instead of force.',
        },
        {
          id: 'pair-6',
          cause: 'Cerberus (descending to Underworld)',
          effect: 'Facing death and the ultimate unknown',
          explanation: 'The final labor (capturing Cerberus) requires confronting mortality itself—Heracles must literally enter death\'s realm and return, proving he has conquered even that final fear.',
        },
      ],

      learningPoints: [
        {
          id: 'lp-heracles-18-progression',
          content: 'The Labors function as a bildungsroman (coming-of-age story)—each trial teaches Heracles new skills until he achieves complete heroism.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 19: Quote Attribution - Match quotes to labors/lessons
    {
      id: 'heracles-scene-19-quotes',
      type: 'quote-attribution',
      backgroundImage: 'https://cdn.midjourney.com/f315f108-b2af-4062-ad54-e101aa9988ff/0_0.png',

      prompt: 'Match these famous quotes about strength, heroism, and redemption to the labors or lessons they reflect',

      quotes: [
        {
          id: 'quote-1',
          text: 'True strength is not in muscles alone, but in the wisdom to know when to use them',
          speaker: 'The Hydra\'s Lesson',
          context: 'After learning that cutting hydra heads made them multiply',
          explanation: 'The Hydra taught Heracles that brute force can make problems worse—strategic thinking matters as much as physical power.',
        },
        {
          id: 'quote-2',
          text: 'With great power comes great responsibility',
          speaker: 'Modern Heracles Parallel',
          context: 'Spider-Man\'s famous quote echoing Heracles\'s burden',
          explanation: 'This modern superhero phrase captures Heracles\'s central tragedy—his extraordinary strength made his madness-driven crime even more devastating, and his redemption required equally extraordinary labors.',
        },
        {
          id: 'quote-3',
          text: 'Redemption is not given freely—it must be earned through deeds',
          speaker: 'The Oracle\'s Judgment',
          context: 'Commanding Heracles to perform twelve labors as penance',
          explanation: 'The Oracle established that Heracles couldn\'t simply be forgiven—his guilt required action, suffering, and proof of transformation through completed labors.',
        },
        {
          id: 'quote-4',
          text: 'Sometimes accepting help is the bravest choice',
          speaker: 'Iolaus and the Hydra',
          context: 'Heracles calling his nephew to cauterize the Hydra\'s necks',
          explanation: 'Heracles had to overcome the warrior\'s pride that demands solo victory—accepting Iolaus\'s help showed growth beyond toxic self-reliance.',
        },
        {
          id: 'quote-5',
          text: 'A clever mind can lift burdens that no muscle can bear',
          speaker: 'Atlas and the Golden Apples',
          context: 'Tricking Atlas to retake the burden of the sky',
          explanation: 'After literally bearing the weight of the heavens, Heracles used cunning rather than strength to escape—showing his complete evolution as a hero.',
        },
        {
          id: 'quote-6',
          text: 'Even the strongest must eventually face what cannot be defeated—only endured',
          speaker: 'The Twelfth Labor',
          context: 'Descending to the Underworld to face mortality itself',
          explanation: 'The final labor required Heracles to confront death—not defeat it (impossible even for heroes) but prove he could enter its realm and return, having faced the ultimate fear.',
        },
      ],

      learningPoints: [
        {
          id: 'lp-heracles-19-wisdom',
          content: 'The quotes distilled from Heracles\'s labors reveal universal truths about strength, responsibility, and redemption that echo through modern superhero narratives.',
          category: 'reference',
        },
        {
          id: 'lp-heracles-19-legacy',
          content: 'Heracles\'s story established the template for "redemption through heroic deeds" that appears in Spider-Man, Batman, and countless other modern heroes.',
          category: 'reference',
        },
      ],
    },

    // Scene 20: Closing Narrative - Redemption Earned
    {
      id: 'heracles-scene-20-redemption',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/f315f108-b2af-4062-ad54-e101aa9988ff/0_0.png',
      image: 'https://cdn.midjourney.com/19999167-62e8-4def-89aa-769a1f3e8856/0_0.png',

      inlineAnnotations: [
        {
          id: 'annotation-bildungsroman-2',
          text: 'bildungsroman',
          tooltip: {
            title: 'Bildungsroman: Coming-of-Age Story',
            content: 'Bildungsroman (German: "formation novel") is a literary genre focused on the psychological and moral growth of a protagonist from youth to adulthood. Coined in 19th-century Germany, it describes narratives where the hero undergoes trials that shape their character. Heracles\'s Labors follow this structure—each challenge teaches him new virtues until he achieves complete maturity.',
            category: 'literary-context',
          },
        },
      ],

      content: `Twelve labors. Twelve impossible tasks. Twelve lessons in what it truly means to be a hero.

When Heracles completed the final labor and returned to Eurystheus for the last time, he was no longer the same man who had begun this journey in madness and guilt. The Labors had burned away his hubris, his reliance on strength alone, his impulsive rage.

He had evolved from a warrior into a complete hero—one who combined physical might with strategic thinking, divine wisdom with human compassion, and relentless determination with mental agility.

The Oracle's judgment had been perfect: redemption couldn't be granted through forgiveness alone. It required transformation through suffering, growth through impossible challenges, and proof through extraordinary deeds.

Heracles earned his freedom not by completing twelve tasks, but by becoming worthy of it. The man who strangled the Nemean Lion was not the same man who tricked Atlas at the edge of the world.

Yet this is not the end of Heracles's story. The Labors made him the greatest hero of Greece, but they didn't make him immortal. They didn't protect him from human flaws, terrible mistakes, and tragic consequences.

The man behind the myth—the hero's darker chapters—still await. For even the strongest hero remains mortal, and mortality brings suffering that no labor can prevent.`,

      learningPoints: [
        {
          id: 'lp-heracles-20-transformation',
          content: 'The Labors represent the ancient Greek concept that true redemption requires transformation, not just punishment—Heracles had to become a different person to earn forgiveness.',
          category: 'cultural-context',
        },
        {
          id: 'lp-heracles-20-bildungsroman',
          content: 'Heracles\'s twelve labors follow the bildungsroman structure—a coming-of-age narrative where each trial teaches essential lessons that build toward complete maturity.',
          category: 'literary-context',
        },
        {
          id: 'lp-heracles-20-mortality',
          content: 'The foreshadowing of future tragedy reminds us that heroic achievement doesn\'t exempt anyone from human vulnerability—a theme that will dominate Chapter 5.',
          category: 'literary-context',
        },
      ],

      events: {
        onExit: [{
          type: 'quiz',
          componentId: 'quiz-chapter-4',
          condition: { type: 'if-not-completed' },
        }],
      },
    },
  ],

  endQuiz: chapter4Quiz,
};

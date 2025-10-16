import type { Chapter } from '../../../types';
import { chapter5Quiz } from '../quizzes/chapter-5-quiz';

/**
 * Chapter 5: Treachery - Cocytus & Satan (IX)
 *
 * The final circle, a frozen lake where traitors are punished.
 * Culminates with Satan at the center, chewing the ultimate traitors,
 * and the exit from Hell. Most dramatic and theologically significant chapter.
 */
export const chapter5: Chapter = {
  id: 'inferno-chapter-5',
  title: 'Chapter 5: Treachery - Cocytus & Satan',
  description: 'Reach the frozen center of Hell where Satan eternally punishes the greatest traitors, then climb to freedom.',

  learningObjectives: [
    'Understand medieval concepts of betrayal and treachery',
    'Analyze why betrayal is considered the worst sin in Dante\'s cosmology',
    'Recognize historical and biblical figures (Judas, Brutus, Cassius)',
    'Explore the structure of Hell as inverted mountain',
    'Understand the theological significance of the journey\'s completion',
  ],

  scenes: [
    // Scene 1: Landing on Cocytus
    {
      id: 'inferno-ch5-scene-1-landing',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/93267244-785b-44b5-9c23-1852c2d3a46b/0_0.png',
      content: `Antaeus gently sets you and Virgil down on the frozen surface. The ground beneath your feet is hard as stone, but it's ice—vast, endless ice stretching in every direction.

You take a step and accidentally kick something solid. A frozen head erupts with curses: "Clumsy fool! Why kick me? Are you here to add to Montaperti's vengeance?"

You recoil in horror. The ice is full of them—souls frozen at various depths, some to their necks, others completely submerged. Their faces contorted in eternal anguish, trapped in the cold.

Everything here is frozen. This is Cocytus, the final circle, where all warmth has died.`,
      continueButtonText: 'Explore the frozen lake',
      learningPoints: [
        {
          id: 'lp-ch5-1',
          content: 'Cocytus is frozen—ultimate evil is cold, not hot. Traitors lack love\'s warmth, frozen in their own betrayals.',
          category: 'thematic-analysis',
        },
        {
          id: 'lp-ch5-2',
          content: 'The contrapasso begins: Betrayal isolates. Traitors are frozen alone, unable to move, some unable to speak or even cry.',
          category: 'literary-technique',
        },
      ],
    },

    // Scene 2: The Structure of Treachery (Map Exploration)
    {
      id: 'inferno-ch5-scene-2-map',
      type: 'map-exploration',
      backgroundImage: 'https://cdn.midjourney.com/93267244-785b-44b5-9c23-1852c2d3a46b/0_0.png',
      mapImage: 'https://cdn.midjourney.com/0f152564-03db-4694-8220-92e6cb54511b/0_0.png',
      prompt: 'Explore the four zones of Cocytus to understand the structure of treachery',
      locations: [
        {
          id: 'caina',
          name: 'Caina (Zone 1)',
          x: 40,
          y: 40,
          content: `The outermost zone of Cocytus, named for Cain who killed his brother Abel.

Here traitors to family are punished. They're frozen up to their necks, able to move their heads but not their bodies. Many are forced to face each other for eternity—brothers who killed brothers, children who betrayed parents.

The ice here is the "warmest" of Cocytus—if such a word can be used in this frozen wasteland. Family bonds are sacred, but their betrayal is only the first circle of treachery.`,
          image: 'https://cdn.midjourney.com/a51f6b76-c9ee-419e-bd66-220f31a16a20/0_0.png',
        },
        {
          id: 'antenora',
          name: 'Antenora (Zone 2)',
          x: 50,
          y: 50,
          content: `Named for Antenor, who allegedly betrayed Troy to the Greeks.

This zone punishes traitors to country and political party. They're frozen deeper than in Caina, their bodies locked in ice. Here you see medieval Italian politicians, military leaders who switched sides, and those who sold out their cities.

Dante's own exile was caused by political betrayal—his fury at these sinners is personal. Political betrayal ranks worse than familial because it destroys entire communities, not just families.`,
          image: 'https://cdn.midjourney.com/7ccc124d-722b-4586-b185-2f95d0ddfb9c/0_0.png',
        },
        {
          id: 'ptolomea',
          name: 'Ptolomea (Zone 3)',
          x: 60,
          y: 60,
          content: `Named for Ptolemy XII, who murdered guests at his feast.

Here lie traitors to guests—those who violated the sacred laws of hospitality. They're frozen on their backs, and their tears freeze immediately, forming crystal visors over their eyes. They cannot weep even if they wanted to.

Medieval hospitality was sacred—sharing bread created obligation. "Breaking bread" meant trust. These traitors invited people into their homes, fed them, then murdered them. Their punishment is complete isolation: unable to see, move, or express remorse.`,
          image: 'https://cdn.midjourney.com/fb1f3303-4f50-4a7f-a3d0-2e0cc0af5eb9/0_0.png',
        },
        {
          id: 'judecca',
          name: 'Judecca (Zone 4)',
          x: 70,
          y: 70,
          content: `The innermost zone, named for Judas Iscariot who betrayed Jesus Christ.

Traitors to benefactors—those who betrayed the people who helped them most, who trusted them most—are completely submerged in ice. Frozen in various twisted positions, they cannot speak, cannot move, cannot interact at all.

This is the worst treachery. Your benefactor gave you everything, trusted you completely, and you destroyed them. The punishment is total spiritual death—absolute isolation, cut off from all communication and sensation.`,
          image: 'https://cdn.midjourney.com/3611f670-ded0-4534-a275-0677711cc9ab/0_0.png',
        },
        {
          id: 'satan-pit',
          name: 'Satan\'s Pit (Center)',
          x: 75,
          y: 75,
          content: `At the absolute center of Hell, at the bottom of the universe, stands Satan himself.

He's not ruling—he's trapped, waist-deep in ice. His massive bat-like wings flap constantly, trying to escape, but they only create the freezing wind that keeps Cocytus frozen. In his three mouths, he eternally chews three arch-traitors.

Satan is Hell's greatest prisoner, the ultimate traitor who betrayed God. His flapping wings freeze him deeper. Evil generates its own punishment—it is self-defeating, self-imprisoning.`,
          image: 'https://cdn.midjourney.com/21e56cee-03f5-488e-aa12-ff02a093720f/0_0.png',
        },
        {
          id: 'exit-passage',
          name: 'The Exit Passage',
          x: 50,
          y: 90,
          content: `Beyond Satan, through his frozen body, lies a rocky passage.

This tunnel leads down through Earth's center (where gravity reverses) and then up to the other side of the world. At its end: the shore of Mount Purgatory, where souls climb toward redemption.

The exit requires passing Satan and climbing through Earth. There are no shortcuts—escape from Hell means confronting ultimate evil face to face, then ascending.`,
          image: 'https://cdn.midjourney.com/5bf36628-b06f-4f18-afc5-fe28e375a7e6/0_0.png',
        },
      ],
      requiredLocations: ['caina', 'antenora', 'ptolomea', 'judecca', 'satan-pit'],
      learningPoints: [
        {
          id: 'lp-ch5-3',
          content: 'Caina punishes familial betrayal—the first circle of treachery. Family bonds are sacred; breaking them is deepest evil\'s outer ring.',
          category: 'historical-context',
        },
        {
          id: 'lp-ch5-4',
          content: 'Political betrayal ranks worse than familial. Dante\'s exile fuels his fury—traitors destroyed his Florence.',
          category: 'historical-context',
        },
        {
          id: 'lp-ch5-5',
          content: 'Guest-betrayal violates sacred hospitality laws. Frozen tears prevent weeping—can\'t express remorse even if they felt it.',
          category: 'cultural-context',
        },
        {
          id: 'lp-ch5-6',
          content: 'Betraying benefactors is worst treachery. Those who helped you most trusted you—their betrayal is ultimate evil.',
          category: 'thematic-analysis',
        },
        {
          id: 'lp-ch5-7',
          content: 'Satan is trapped, not ruling. He\'s Hell\'s prisoner, the ultimate traitor (betrayed God). His flapping wings freeze the lake—evil generates its own punishment.',
          category: 'thematic-analysis',
        },
        {
          id: 'lp-ch5-8',
          content: 'The exit requires passing Satan and climbing through Earth\'s center to Mount Purgatory\'s base. Escape from Hell means confronting ultimate evil, then ascending.',
          category: 'plot-structure',
        },
      ],
    },

    // Scene 3: Understanding Treachery Types (Anachronism)
    {
      id: 'inferno-ch5-scene-3-anachronism',
      type: 'anachronism',
      backgroundImage: 'https://cdn.midjourney.com/93267244-785b-44b5-9c23-1852c2d3a46b/0_0.png',
      prompt: 'Which of these betrayals are ANACHRONISMS—they happened AFTER Dante\'s death and couldn\'t appear in his Hell?',
      scenario: 'Dante wrote the Inferno around 1320. He included traitors from biblical times (Cain, Judas), classical history (Brutus), and his own era. But which of these betrayals are anachronisms—events that happened centuries AFTER Dante died and therefore don\'t belong in his medieval Hell?',
      items: [
        {
          id: 'cain',
          name: 'Cain killing Abel',
          image: '/assets/dantes-inferno/traitors/cain.png',
          description: 'The first murder—brother killed brother in biblical times',
          explanation: 'First murder—brother killed brother. Caina is named for him. Familial betrayal begins human sin. This is from Genesis, well before Dante\'s time.',
        },
        {
          id: 'mordred',
          name: 'Mordred betraying King Arthur',
          image: '/assets/dantes-inferno/traitors/mordred.png',
          description: 'Medieval legend of nephew betraying uncle and usurping throne',
          explanation: 'Mordred betrayed uncle/father figure Arthur and usurped kingdom. Double betrayal—family and country. Medieval legend (5th-6th century setting, 12th century literary form) known to Dante.',
        },
        {
          id: 'brutus',
          name: 'Brutus assassinating Julius Caesar',
          image: '/assets/dantes-inferno/traitors/brutus.png',
          description: 'Roman senator who killed Caesar in 44 BCE',
          explanation: 'Caesar trusted and promoted Brutus. His betrayal (\'Et tu, Brute?\') damns him to Satan\'s mouth. This classical event was central to Dante\'s worldview.',
        },
        {
          id: 'judas',
          name: 'Judas Iscariot betraying Jesus',
          image: '/assets/dantes-inferno/traitors/judas.png',
          description: 'Apostle who betrayed Christ for thirty pieces of silver',
          explanation: 'Betrayed God incarnate for 30 silver pieces. Satan eternally chews Judas in his center mouth—worst traitor. Biblical event from c. 30 CE.',
        },
        {
          id: 'ugolino',
          name: 'Count Ugolino betraying Pisa',
          image: '/assets/dantes-inferno/traitors/ugolino.png',
          description: 'Pisan nobleman who switched political sides in the 1280s',
          explanation: 'Ugolino switched sides in Pisan politics in the 1280s. Later imprisoned with sons and starved. Dante gives him the longest speech in Inferno. This happened just decades before Dante wrote.',
        },
        {
          id: 'ptolemy',
          name: 'Ptolemy XII murdering dinner guests',
          image: '/assets/dantes-inferno/traitors/ptolemy.png',
          description: 'Ancient ruler who killed guests at a feast',
          explanation: 'Invited guests to feast, murdered them. Violating hospitality is sacred crime—hence Ptolomea\'s name. Ancient history (2nd century BCE) known to medieval scholars.',
        },
        {
          id: 'guy-fawkes',
          name: 'Guy Fawkes\' Gunpowder Plot',
          image: '/assets/dantes-inferno/traitors/guy-fawkes.png',
          description: 'English conspirator who attempted to blow up Parliament',
          explanation: '1605 is 300+ years after Dante wrote Inferno (c. 1320). Anachronism—doesn\'t belong in medieval hell. This happened centuries after Dante\'s death.',
        },
        {
          id: 'benedict-arnold',
          name: 'Benedict Arnold betraying America',
          image: '/assets/dantes-inferno/traitors/benedict-arnold.png',
          description: 'American general who defected to British forces',
          explanation: '1780 is 450+ years after Dante. America didn\'t exist in Dante\'s time. Clear anachronism—this is from the American Revolutionary War.',
        },
      ],
      correctAnswers: ['guy-fawkes', 'benedict-arnold'],
      learningPoints: [
        {
          id: 'lp-ch5-9',
          content: 'Betrayal is universal—every culture has traitors. Dante\'s categories (family, country, guests, benefactors) span cultures and eras.',
          category: 'thematic-analysis',
        },
        {
          id: 'lp-ch5-10',
          content: 'Medieval people knew classical and recent history intimately. Dante mixes Cain, Brutus, and contemporary Italians—sin is timeless.',
          category: 'historical-context',
        },
      ],
    },

    // Scene 4: Caina - Brothers and Kin (Narrative)
    {
      id: 'inferno-ch5-scene-4-caina',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/a51f6b76-c9ee-419e-bd66-220f31a16a20/0_0.png',
      image: 'https://cdn.midjourney.com/a51f6b76-c9ee-419e-bd66-220f31a16a20/0_0.png',
      content: `You pass through Caina, where traitors to family are punished.

Two heads protrude from the ice, frozen face-to-face. They cannot look away from each other. One glares with eternal hatred; the other weeps frozen tears.

"Alessandro and Napoleone degli Alberti," Virgil explains quietly. "Brothers who killed each other over their inheritance. Now they must stare at each other for eternity—frozen together, unable to escape the face of their betrayal."

All around you, similar scenes repeat: fathers and sons, siblings, relatives who destroyed their families for greed, ambition, or revenge. They destroyed family unity; now they're stuck forever with their victim.`,
      continueButtonText: 'Continue to Antenora',
      learningPoints: [
        {
          id: 'lp-ch5-11',
          content: 'Familial traitors face each other frozen. They destroyed family unity; now stuck forever with their victim/co-sinner.',
          category: 'literary-technique',
        },
        {
          id: 'lp-ch5-12',
          content: 'Inheritance disputes frequently caused medieval family violence. Dante saw property dividing blood bonds.',
          category: 'historical-context',
        },
      ],
    },

    // Scene 5: Approaching Ugolino (Narrative - Setup)
    {
      id: 'inferno-ch5-scene-5-approach',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/7ccc124d-722b-4586-b185-2f95d0ddfb9c/0_0.png',
      image: 'https://cdn.midjourney.com/52faebd8-6674-45c5-beec-26addcd0a11d/0_0.png',
      content: `You move deeper into Antenora, where political traitors suffer. The ice is darker here, the cold more biting.

Then you see something that makes you freeze in horror.

Two heads protrude from the ice, impossibly close together. One man's head is bent over the other's skull—and he is gnawing on it. His teeth work methodically at the frozen flesh, tearing away pieces with savage intensity. The sound is sickening.

Both figures are damned, both frozen in eternal punishment. Yet one punishes the other with his teeth, an eternal revenge playing out in the ice.

"That is Count Ugolino," Virgil says quietly. "And the skull he gnaws belongs to Archbishop Ruggieri. Their story is one of betrayal and counter-betrayal—a cycle of treachery that ended in horror."

The gnawing man pauses, lifts his head, and looks at you. His face is terrible—grief and rage frozen together. He speaks.`,
      continueButtonText: 'Listen to his story',
      learningPoints: [
        {
          id: 'lp-ch5-12a',
          content: 'Ugolino gnaws Ruggieri\'s skull eternally—physical manifestation of hatred. Both damned, one takes revenge on the other forever.',
          category: 'literary-technique',
        },
      ],
    },

    // Scene 6: Count Ugolino's Tale (Dialogue)
    {
      id: 'inferno-ch5-scene-6-ugolino',
      type: 'dialogue',
      backgroundImage: 'https://cdn.midjourney.com/7ccc124d-722b-4586-b185-2f95d0ddfb9c/0_0.png',
      image: 'https://cdn.midjourney.com/52faebd8-6674-45c5-beec-26addcd0a11d/0_0.png',
      character: {
        id: 'count-ugolino',
        name: 'Count Ugolino della Gherardesca',
        portrait: 'https://cdn.midjourney.com/a5839ca7-b0c3-4c70-85c1-9e8b98607a21/0_0.png',
        description: 'Pisan noble (c. 1220-1289), imprisoned and starved with sons/grandsons',
      },
      inlineAnnotations: [
        {
          id: 'anno-pisa',
          text: 'Pisa',
          tooltip: {
            title: 'Dante\'s Curse on Pisa',
            content: 'Dante erupts with fury at the city of Pisa for starving Ugolino\'s innocent children. Regardless of their father\'s political crimes, killing children through starvation was an unforgivable atrocity. This outburst shows Dante\'s moral outrage overcoming his usual restraint.',
            category: 'thematic-analysis',
          },
        },
        {
          id: 'anno-si',
          text: "'si'",
          tooltip: {
            title: 'The Italian Language',
            content: '"Si" (sì) means "yes" in Italian. Dante refers to Italy as "the fair land where \'si\' is heard" to distinguish it from other Romance languages (French uses "oui", Spanish uses "sí" with different pronunciation).',
            category: 'cultural-context',
          },
        },
        {
          id: 'anno-islands',
          text: 'Capraia and Gorgona',
          tooltip: {
            title: 'Islands Near Pisa',
            content: 'Two small islands in the Tyrrhenian Sea, northwest of Pisa. Dante curses Pisa by wishing these islands would block the Arno River\'s mouth, drowning the entire city.',
            category: 'historical-context',
          },
        },
        {
          id: 'anno-arno',
          text: 'Arno',
          tooltip: {
            title: 'The Arno River',
            content: 'The major river flowing through Tuscany, passing through Florence and Pisa before emptying into the Tyrrhenian Sea. The river was vital to Pisa\'s economy and power as a maritime republic.',
            category: 'historical-context',
          },
        },
      ],
      dialogueTree: {
        id: 'ugolino-1',
        speaker: 'count-ugolino',
        text: 'You want me to renew desperate grief... But if my words can plant seeds of infamy for this traitor I gnaw, you\'ll see me speak and weep together.',
        responses: [
          {
            id: 'ugolino-resp-1',
            text: 'Who is that you\'re eating?',
            nextNodeId: 'ugolino-2',
            learningPoints: [
              {
                id: 'lp-ch5-13',
                content: 'Ruggieri imprisoned Ugolino and his sons/grandsons in a tower, starved them to death. Ugolino\'s revenge: eternal gnawing.',
                category: 'character-analysis',
              },
            ],
          },
          {
            id: 'ugolino-resp-2',
            text: 'What happened to you?',
            nextNodeId: 'ugolino-3',
            learningPoints: [
              {
                id: 'lp-ch5-14',
                content: 'This is Inferno\'s most emotionally devastating story. Dante gives Ugolino 60+ lines—longest single speech.',
                category: 'literary-technique',
              },
            ],
          },
        ],
        allNodes: [
          {
            id: 'ugolino-2',
            speaker: 'count-ugolino',
            text: 'This skull belongs to Archbishop Ruggieri. He betrayed me—imprisoned me and my sons, my grandsons, in a tower. Then he threw away the key and let us starve.',
            nextNodeId: 'ugolino-3',
          },
          {
            id: 'ugolino-3',
            speaker: 'count-ugolino',
            text: 'I heard them nailing shut the door below. I looked into my children\'s faces without speaking. I did not weep—I turned to stone inside... They wept.',
            responses: [
              {
                id: 'ugolino-resp-3',
                text: 'What happened next?',
                nextNodeId: 'ugolino-4',
              },
            ],
          },
          {
            id: 'ugolino-4',
            speaker: 'count-ugolino',
            text: 'Day after day passed. One by one they fell... I saw them fall dead, the four of them, between the fifth and sixth days. Blind by then, I crawled over each, calling them for two days after they were dead... Then hunger proved stronger than grief.',
            nextNodeId: 'ugolino-5',
          },
          {
            id: 'ugolino-5',
            speaker: 'player',
            text: 'You erupt with fury: "Ah, Pisa! You shame the people of the fair land where \'si\' is heard! Since your neighbors are slow to punish you, may Capraia and Gorgona shift and dam the Arno\'s mouth, drowning every soul in you!"',
            isEnd: true,
          },
        ],
      },
      learningPoints: [
        {
          id: 'lp-ch5-15',
          content: 'The final line is ambiguous: Did Ugolino resort to cannibalism? Dante leaves it uncertain—horrible either way.',
          category: 'literary-technique',
        },
        {
          id: 'lp-ch5-16',
          content: 'Dante erupts with fury at Pisa. Starving children (whatever their father\'s crimes) is unforgivable. His rage is personal—moral outrage.',
          category: 'character-analysis',
        },
        {
          id: 'lp-ch5-17',
          content: 'Ugolino is both victim and traitor. He betrayed Pisa politically; Ruggieri betrayed him personally. Both are damned—mutual betrayal.',
          category: 'thematic-analysis',
        },
        {
          id: 'lp-ch5-18',
          content: 'Guest-traitors\' tears freeze instantly. Medieval hospitality was sacred—\'breaking bread\' created obligation. Violating it deserves frozen tears.',
          category: 'cultural-context',
        },
      ],
    },

    // Scene 7: Ptolomea - Frozen Tears (Narrative)
    {
      id: 'inferno-ch5-scene-6-ptolomea',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/fb1f3303-4f50-4a7f-a3d0-2e0cc0af5eb9/0_0.png',
      image: 'https://cdn.midjourney.com/fb1f3303-4f50-4a7f-a3d0-2e0cc0af5eb9/0_0.png',
      content: `You enter Ptolomea, and the sight chills you more than the ice itself.

Souls lie frozen on their backs, unable to move. When they try to weep, their tears freeze instantly, forming crystal visors over their eyes. The ice seals their faces completely—they cannot see, cannot cry, cannot express anything.

Complete isolation. Even if they felt remorse (which they don't), they couldn't show it. Even if they wanted to weep for their crimes, the ice prevents it.

These are the guest-traitors: people who invited others into their homes, shared meals with them, then murdered them. They violated the most sacred bond—hospitality, trust, breaking bread together.`,
      continueButtonText: 'Approach a calling voice',
      inlineAnnotations: [
        {
          id: 'anno-hospitality',
          text: 'hospitality',
          tooltip: {
            title: 'Medieval Hospitality Laws',
            content: 'In medieval culture, sharing food created sacred obligation. A host was duty-bound to protect guests; guests were bound to respect hosts. Violating this was considered one of the worst crimes.',
            category: 'cultural-context',
          },
        },
      ],
      learningPoints: [
        {
          id: 'lp-ch5-19',
          content: 'The frozen tears symbolize impenitence. If they could cry (show remorse), they wouldn\'t be damned. Frozen tears = frozen hearts.',
          category: 'thematic-analysis',
        },
      ],
    },

    // Scene 8: Fra Alberigo (Dialogue)
    {
      id: 'inferno-ch5-scene-7-alberigo',
      type: 'dialogue',
      backgroundImage: 'https://cdn.midjourney.com/fb1f3303-4f50-4a7f-a3d0-2e0cc0af5eb9/0_0.png',
      character: {
        id: 'fra-alberigo',
        name: 'Fra Alberigo',
        portrait: 'https://cdn.midjourney.com/6e70b75a-e561-4684-8b40-90ca9a6e9588/0_0.png',
        description: 'Jovial Friar who murdered relatives at feast (1285)',
      },
      dialogueTree: {
        id: 'alberigo-1',
        speaker: 'fra-alberigo',
        text: 'Remove the hard veils from my face, so I may vent the grief that soaks my heart before tears freeze again.',
        responses: [
          {
            id: 'alberigo-resp-1',
            text: 'Who are you?',
            nextNodeId: 'alberigo-2',
            learningPoints: [
              {
                id: 'lp-ch5-20',
                content: 'Alberigo invited relatives to feast, signaled servants (with fruit course) to murder them. Guest-betrayal at its vilest.',
                category: 'character-analysis',
              },
            ],
          },
          {
            id: 'alberigo-resp-2',
            text: 'I\'ll help if you tell me your story.',
            nextNodeId: 'alberigo-2',
            learningPoints: [
              {
                id: 'lp-ch5-21',
                content: 'Dante promises to help, then breaks his promise. Is lying to the damned justified? Moral ambiguity—reader must judge.',
                category: 'thematic-analysis',
              },
            ],
          },
        ],
        allNodes: [
          {
            id: 'alberigo-2',
            speaker: 'fra-alberigo',
            text: 'I am Fra Alberigo, he of the fruit. I invited my relatives to a feast in my house. When the fruit course came, that was the signal—my servants murdered them all. Guest-betrayal at its finest.',
            nextNodeId: 'alberigo-3',
          },
          {
            id: 'alberigo-3',
            speaker: 'fra-alberigo',
            text: 'But here\'s the truly remarkable part: my body still walks the world above, as if alive. This zone has a special privilege—guest-traitors are so vile their souls fall to Hell immediately, while demons possess their bodies until natural death. My soul fell here before Atropos should cut my thread.',
            nextNodeId: 'alberigo-4',
          },
          {
            id: 'alberigo-4',
            speaker: 'player',
            text: 'You walk away without clearing the ice from his eyes. Virgil nods approvingly. "To be rude to him was courtesy."',
            isEnd: true,
          },
        ],
      },
      learningPoints: [
        {
          id: 'lp-ch5-22',
          content: 'Shocking theology: Guest-traitors are so evil their souls fall to Hell while bodies still live above, possessed by demons. Dante invents this.',
          category: 'thematic-analysis',
        },
        {
          id: 'lp-ch5-23',
          content: 'Dante breaks his promise to Alberigo—lying to traitors is \'courtesy.\' This moral complexity challenges readers: Is betraying betrayers just?',
          category: 'thematic-analysis',
        },
        {
          id: 'lp-ch5-24',
          content: 'Judecca is silent—no speech, no interaction. Traitors to benefactors destroyed love completely; they\'re isolated eternally.',
          category: 'thematic-analysis',
        },
      ],
    },

    // Scene 9: Judecca - The Silent Depths (Narrative)
    {
      id: 'inferno-ch5-scene-8-judecca',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/3611f670-ded0-4534-a275-0677711cc9ab/0_0.png',
      content: `You reach Judecca, the innermost zone, and the silence is absolute.

No voices. No movement. The souls here are completely submerged in ice, frozen in various twisted positions. Some are horizontal, some vertical, some bent backward. All are silent.

These are the traitors to benefactors—people who betrayed those who loved them most, who helped them most, who trusted them completely. The ultimate betrayal: destroying the person who gave you everything.

They destroyed love so completely that now they are utterly cut off. No communication, no sensation, no connection to anything. Total spiritual death—the complete absence of love, warmth, connection.

Ahead, you see a massive form in the ice.`,
      continueButtonText: 'Approach Satan',
      inlineAnnotations: [
        {
          id: 'anno-judecca',
          text: 'Judecca',
          tooltip: {
            title: 'Named for Judas Iscariot',
            content: 'This zone is named for Judas, who betrayed Jesus Christ—the ultimate benefactor. Judas received love, friendship, and divine teaching, then sold Jesus for thirty pieces of silver.',
            category: 'historical-context',
          },
        },
      ],
      learningPoints: [
        {
          id: 'lp-ch5-25',
          content: 'Complete submersion represents total spiritual death. They cannot communicate, move, or sense—utterly cut off.',
          category: 'literary-technique',
        },
      ],
    },

    // Scene 10: Satan's Appearance (Narrative)
    {
      id: 'inferno-ch5-scene-9-satan',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/21e56cee-03f5-488e-aa12-ff02a093720f/0_0.png',
      image: 'https://cdn.midjourney.com/02e85215-7a3b-4060-b1f3-41a2bcb14e77/0_0.png',
      content: `The form grows larger as you approach. Virgil's voice is quiet: "Behold, Dis. The emperor of the sorrowful kingdom."

Satan is monstrous—but not in the way you expected. He's not powerful or terrifying in his majesty. He's pathetic.

Waist-deep in ice at the center of everything, he cannot move. His body is enormous, twisted. Where once he had the most beautiful angel wings, now he has six bat-like wings, leathery and useless.

He has three faces: one red, one black, one pale yellow. Where the Holy Trinity represents unity in love, Satan's three heads represent division, hatred, separation.

His wings flap constantly, desperately, trying to escape. But they only generate the freezing wind that keeps Cocytus frozen. He created his own prison, and every attempt to escape makes it worse.

In each of his three mouths, he chews a sinner.`,
      continueButtonText: 'Examine the three victims',
      inlineAnnotations: [
        {
          id: 'anno-satan',
          text: 'Satan',
          tooltip: {
            title: 'Lucifer - The Fallen Angel',
            content: 'Satan was once Lucifer ("light-bearer"), the most beautiful angel. His pride led him to rebel against God. Now he\'s trapped at the bottom of creation, the opposite of God\'s light at the top of Paradise.',
            category: 'historical-context',
          },
        },
        {
          id: 'anno-trinity',
          text: 'Holy Trinity',
          tooltip: {
            title: 'The Christian Trinity',
            content: 'The Trinity (Father, Son, Holy Spirit) represents perfect unity—three persons, one God, united in love. Satan\'s three heads grotesquely parody this: division instead of unity, hatred instead of love.',
            category: 'historical-context',
          },
        },
      ],
      learningPoints: [
        {
          id: 'lp-ch5-26',
          content: 'Satan has three heads—grotesque parody of Holy Trinity. Where Trinity represents unity in love, Satan\'s heads represent division.',
          category: 'thematic-analysis',
        },
        {
          id: 'lp-ch5-27',
          content: 'Satan once had the most beautiful angel wings. Now bat-like and useless—his rebellion grotesquely warped God\'s gifts.',
          category: 'thematic-analysis',
        },
        {
          id: 'lp-ch5-28',
          content: 'Satan doesn\'t rule Hell—he\'s imprisoned in it. Flapping wings to escape only freezes him deeper. Evil is self-defeating.',
          category: 'thematic-analysis',
        },
      ],
    },

    // Scene 11: The Three Arch-Traitors (Primary Source)
    {
      id: 'inferno-ch5-scene-10-primary-source',
      type: 'primary-source',
      backgroundImage: 'https://cdn.midjourney.com/21e56cee-03f5-488e-aa12-ff02a093720f/0_0.png',
      image: 'https://cdn.midjourney.com/91f0f448-86ad-4f3e-ae35-63d25f08ac0d/0_0.png',
      prompt: 'Analyze this passage describing Satan\'s three victims',
      source: {
        title: 'Inferno, Canto XXXIV',
        author: 'Dante Alighieri',
        date: 'c. 1308-1320',
        type: 'text',
        content: `In every mouth he crushed a sinner with his teeth as with a hackle, so that he made three of them woeful at once. To the one in front the biting was nothing to the clawing, for sometimes his back was left all stripped of skin.

"That soul up there who suffers most," my master said, "is Judas Iscariot: his head inside, he jerks his legs without. Of the other two whose heads hang down, the one from the black face is Brutus—see how he writhes and cannot speak; the other, who seems so robust, is Cassius.

"But night is rising again, and now we must depart, for we have seen the whole."`,
        citation: 'Divine Comedy: Inferno, trans. Allen Mandelbaum (1980)',
      },
      questions: [
        {
          id: 'q1',
          question: 'Why these three traitors specifically?',
          type: 'multiple-choice',
          options: [
            'They were Dante\'s personal enemies',
            'They killed the most people',
            'They betrayed the two supreme authorities: Jesus (divine) and Caesar (earthly)',
            'They committed treason in Italy',
          ],
          correctAnswer: 'They betrayed the two supreme authorities: Jesus (divine) and Caesar (earthly)',
          explanation: 'Medieval worldview had two powers: Church (divine) and Empire (earthly). Judas betrayed God; Brutus and Cassius betrayed the ideal Emperor. This represents the destruction of both pillars of medieval order.',
        },
        {
          id: 'q2',
          question: 'Why is Judas\' punishment worst (head inside, center mouth)?',
          type: 'multiple-choice',
          options: [
            'He was the first traitor',
            'Betraying God is worse than betraying earthly power',
            'He killed more people than the others',
            'It\'s random chance',
          ],
          correctAnswer: 'Betraying God is worse than betraying earthly power',
          explanation: 'Judas gets the center mouth and worst position—head inside being chewed while his legs kick helplessly outside, and his back is clawed until stripped of skin. Spiritual betrayal exceeds political betrayal—divine authority outranks human. Medieval ethics: quality (who was betrayed) exceeds quantity (how many were hurt).',
        },
      ],
      learningPoints: [
        {
          id: 'lp-ch5-29',
          content: 'Dante\'s politics: Church and Empire should rule together. Judas (anti-Church) and Brutus/Cassius (anti-Empire) destroyed this dual order.',
          category: 'historical-context',
        },
        {
          id: 'lp-ch5-30',
          content: 'Judas suffers most despite Brutus/Cassius killing more people. Medieval ethics: quality (who betrayed) exceeds quantity (how many killed).',
          category: 'thematic-analysis',
        },
      ],
    },

    // Scene 12: Understanding Satan (Decision)
    {
      id: 'inferno-ch5-scene-11-decision',
      type: 'decision',
      backgroundImage: 'https://cdn.midjourney.com/21e56cee-03f5-488e-aa12-ff02a093720f/0_0.png',
      image: 'https://cdn.midjourney.com/21e56cee-03f5-488e-aa12-ff02a093720f/0_0.png',
      prompt: 'Why is Satan frozen and imprisoned rather than ruling Hell?',
      context: `Popular imagination sees Satan as Hell's king—powerful, commanding demons, ruling the underworld.

Dante portrays him as trapped, pathetic prisoner at the bottom of everything. His wings don't fly—they freeze. He doesn't command—he chews. He doesn't rule—he's imprisoned.

Why?`,
      choices: [
        {
          id: 'choice-evil-self-defeating',
          text: 'Evil is self-defeating—Satan\'s rebellion trapped himself.',
          consequence: 'Correct. Rejecting God (infinite good) means choosing nothing. Evil lacks substance—it\'s absence of good. Like darkness is absence of light, evil is absence of good. Satan chose nothing, became imprisoned in nothing.',
          learningPoints: [
            {
              id: 'lp-ch5-31',
              content: 'Medieval theology: Evil has no positive existence. It\'s privation of good (like darkness is absence of light). Satan chose nothing, became imprisoned in nothing.',
              category: 'thematic-analysis',
            },
          ],
        },
        {
          id: 'choice-god-punishes',
          text: 'God punishes Satan by making him powerless.',
          consequence: 'Partly true, but misses the deeper point. Satan\'s punishment comes from his own choice—he imprisoned himself. God doesn\'t need to punish Satan; Satan\'s choice to reject infinite Good is itself the punishment.',
          learningPoints: [
            {
              id: 'lp-ch5-32',
              content: 'Satan\'s flapping to escape freezes him deeper. Every evil act worsens the sinner\'s state—Hell is self-inflicted.',
              category: 'thematic-analysis',
            },
          ],
        },
        {
          id: 'choice-ultimate-order',
          text: 'Satan represents ultimate order, not chaos.',
          consequence: 'Interesting point. Hell is structured, organized, precise. Evil follows logic—it\'s ordered toward nothing. The order mirrors Heaven\'s order, but inverted: Hell orders toward absence (frozen center), Heaven toward presence (God\'s light).',
          learningPoints: [
            {
              id: 'lp-ch5-33',
              content: 'Hell\'s precise structure mirrors Heaven\'s—both ordered. But Hell orders toward absence (frozen center), Heaven toward presence (God\'s light).',
              category: 'thematic-analysis',
            },
          ],
        },
      ],
      learningPoints: [
        {
          id: 'lp-ch5-34',
          content: 'Popular culture\'s powerful, ruling Satan comes later. Dante\'s Satan is pathetic, trapped, weeping—ultimate failure.',
          category: 'thematic-analysis',
        },
      ],
    },

    // Scene 13: The Climb from Hell (Narrative)
    {
      id: 'inferno-ch5-scene-12-climb',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/5bf36628-b06f-4f18-afc5-fe28e375a7e6/0_0.png',
      content: `"Hold tight to me," Virgil commands.

He grabs onto Satan's frozen fur, and you cling to his back. Slowly, hand over hand, he climbs down Satan's massive body—down through the matted hair, down past the waist where Satan is frozen in ice.

At Satan's waist—Earth's absolute center, the point of maximum gravity—Virgil suddenly flips. Now he's climbing up.

You're confused. "Master, why are we going down?"

"We're not," Virgil says. "We passed Earth's center. Down became up. We're climbing now."

The passage opens into a rocky tunnel. You climb and climb, following the sound of a stream—Lethe, flowing from Purgatory above down to Hell below. The air grows less oppressive.`,
      continueButtonText: 'Continue climbing',
      inlineAnnotations: [
        {
          id: 'anno-earth-center',
          text: 'Earth\'s center',
          tooltip: {
            title: 'Medieval Cosmology',
            content: 'In medieval cosmology, Hell was a conical pit extending to Earth\'s center. Satan fell from Heaven and burrowed into Earth, creating Hell. At the center, gravity is zero—"down" and "up" reverse.',
            category: 'historical-context',
          },
        },
      ],
      learningPoints: [
        {
          id: 'lp-ch5-35',
          content: 'Earth\'s center is gravity\'s zero point. Satan\'s waist marks absolute bottom. Beyond this, \'down\' becomes \'up\'—exiting Hell requires inverting.',
          category: 'plot-structure',
        },
        {
          id: 'lp-ch5-36',
          content: 'The climb mirrors the descent: to exit Hell, you must face evil (climb Satan), then ascend. No shortcuts—confrontation precedes redemption.',
          category: 'thematic-analysis',
        },
      ],
    },

    // Scene 14: Emerging to Stars (Narrative)
    {
      id: 'inferno-ch5-scene-13-stars',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/989530f2-d768-48a0-aac8-3d4272b83acb/0_0.png',
      image: 'https://cdn.midjourney.com/989530f2-d768-48a0-aac8-3d4272b83acb/0_0.png',
      content: `The passage opens.

Fresh air hits your face. You gasp—you'd forgotten what clean air felt like. Light appears ahead, growing brighter.

You emerge onto a shore. A vast ocean stretches before you. Behind you, rising from the water, stands a mountain—Mount Purgatory, where souls climb toward redemption.

Dawn is breaking. The sky transitions from black to deep blue to pink. You've been in Hell from Good Friday night to Easter morning—three days, mirroring Christ's death and resurrection.

Above, the stars shine clearly. You look up at them, and for the first time since entering Hell, you feel hope.

The journey through Hell is complete. Now the climb toward Paradise begins.`,
      continueButtonText: 'Complete chapter',
      inlineAnnotations: [
        {
          id: 'anno-purgatory',
          text: 'Mount Purgatory',
          tooltip: {
            title: 'The Second Realm',
            content: 'In Dante\'s cosmology, Mount Purgatory rises in the Southern Hemisphere, opposite Jerusalem. Souls climb it to purge their sins and prepare for Paradise. It represents the journey of repentance and spiritual growth.',
            category: 'historical-context',
          },
        },
        {
          id: 'anno-stars',
          text: 'stars',
          tooltip: {
            title: 'The Final Word',
            content: 'All three parts of the Divine Comedy (Inferno, Purgatorio, Paradiso) end with the word "stars" (stelle in Italian). Stars represent divine guidance, hope, navigation, and the ordered cosmos.',
            category: 'literary-context',
          },
        },
      ],
      learningPoints: [
        {
          id: 'lp-ch5-37',
          content: 'Inferno ends with \'stars\'—the same word closing all three parts. Stars represent divine guidance, hope, salvation.',
          category: 'literary-technique',
        },
        {
          id: 'lp-ch5-38',
          content: 'The timeline: Good Friday (crucifixion) to Easter Sunday (resurrection). Dante\'s journey mirrors Christ\'s death and revival—personal resurrection.',
          category: 'thematic-analysis',
        },
        {
          id: 'lp-ch5-39',
          content: 'Mount Purgatory rises in the southern ocean, opposite Jerusalem. The geography is theological—Hell (north) vs. Purgatory/Paradise (south).',
          category: 'historical-context',
        },
      ],
    },

    // Scene 15: Reflections on Hell (Cause-Effect)
    {
      id: 'inferno-ch5-scene-14-cause-effect',
      type: 'cause-effect',
      backgroundImage: 'https://cdn.midjourney.com/989530f2-d768-48a0-aac8-3d4272b83acb/0_0.png',
      prompt: 'Match each zone of treachery to its contrapasso',
      pairs: [
        {
          id: 'pair-1',
          cause: 'Caina: Betraying family (brothers, parents, children)',
          effect: 'Frozen to neck, facing each other eternally',
          explanation: 'Family bonds are natural and sacred. Betrayers face their victims forever—forced intimacy replacing destroyed love.',
        },
        {
          id: 'pair-2',
          cause: 'Antenora: Betraying country or political party',
          effect: 'Frozen deeper, heads free but bodies locked',
          explanation: 'Political betrayal destroyed communities beyond families. Deeper ice represents greater sin—affecting entire cities and nations.',
        },
        {
          id: 'pair-3',
          cause: 'Ptolomea: Betraying guests (violating hospitality)',
          effect: 'Frozen on backs, tears freeze over eyes instantly',
          explanation: 'Guest-betrayal violated sacred trust. Frozen tears show impenitence—if they could weep (remorse), they wouldn\'t be damned.',
        },
        {
          id: 'pair-4',
          cause: 'Judecca: Betraying benefactors (those who loved and helped you)',
          effect: 'Completely submerged, twisted positions, silent',
          explanation: 'Ultimate betrayal—benefactors trusted most. Complete submersion = total spiritual death, no communication possible.',
        },
        {
          id: 'pair-5',
          cause: 'Satan: Betraying God (ultimate benefactor and Creator)',
          effect: 'Imprisoned in ice, chewing three arch-traitors, wings frozen',
          explanation: 'Satan rejected infinite Good. He\'s trapped at evil\'s absolute nadir—his power gone, reduced to pathetic chewing.',
        },
      ],
      distractors: [
        'Wrapped in flames',
        'Transformed into trees',
      ],
      learningPoints: [
        {
          id: 'lp-ch5-40',
          content: 'Treachery\'s contrapasso is cold isolation. Betrayal destroys relationships; punishment reflects severed bonds—frozen, alone, silent.',
          category: 'literary-technique',
        },
        {
          id: 'lp-ch5-41',
          content: 'The four zones rank betrayals by relationship sanctity: family → country → guests → benefactors. Dante structures sin like Aristotle structures virtue.',
          category: 'thematic-analysis',
        },
      ],
      events: {
        onExit: [
          {
            type: 'quiz',
            componentId: 'quiz-inferno-chapter-5',
            condition: { type: 'if-not-completed' },
          },
        ],
      },
    },
  ],

  endQuiz: chapter5Quiz,
};

import type { Chapter, Character } from '../../../types';
import { chapter4Quiz } from '../quizzes/chapter-4-quiz';

/**
 * Chapter 4: Fraud - Malebolge (VIII)
 *
 * The Eighth Circle with its ten concentric trenches (bolgias),
 * each punishing a different type of fraud. Most complex chapter
 * with many subdivisions and famous characters like Ulysses.
 */

// Shared character definition for Virgil (appears in multiple dialogue scenes)
const virgilCharacter: Character = {
  id: 'virgil',
  name: 'Virgil',
  portrait: 'https://cdn.midjourney.com/32db65bc-da37-4f11-b35d-cc8c648a3d81/0_0.png',
  description: 'Roman poet, Dante\'s guide through Hell and Purgatory',
};
export const chapter4: Chapter = {
  id: 'inferno-chapter-4',
  title: 'Chapter 4: Fraud - Malebolge',
  description: 'Navigate the ten evil trenches of Malebolge, where various types of fraudsters receive poetic justice.',

  learningObjectives: [
    'Understand fraud as worse than violence (requires intelligence)',
    'Recognize ten types of fraud and their punishments',
    'Analyze Dante\'s critique of Church corruption (simony)',
    'Explore Ulysses\' complex heroism and damnation',
    'Understand medieval views on knowledge and limits',
    'Recognize contrapasso\'s symbolic sophistication in Malebolge',
  ],

  scenes: [
    // Scene 1: Geryon - The Monster of Fraud
    {
      id: 'ch4-scene-1',
      type: 'narrative',
      backgroundImage: '/Imsie/assets/dantes-inferno/scenes/geryon.jpg',
      content: `As you and Virgil descend from the circle of violence, a monstrous creature appears before you. Geryon—a being of contradictions—has the face of an honest man, the paws of a lion, and the body of a great serpent. His tail ends in a venomous scorpion's sting.

"Look well," Virgil says. "This is the image of fraud itself—fair face, but poisonous beneath."

Virgil negotiates with Geryon, and the monster agrees to carry you both down to Malebolge. You climb upon his back, your heart pounding with fear. With a great beat of his wings, Geryon lifts off into the darkness and begins a terrifying spiraling descent into the abyss.

The flight seems to last forever. The walls of Hell spin past you. The air grows heavier, more oppressive. Finally, Geryon sets you down in a vast circular valley and disappears into the gloom.`,
      learningPoints: [
        {
          id: 'lp-ch4-1',
          content: 'Geryon has an honest face but a fraudulent body—perfect symbol of fraud (appears trustworthy, hides poison).',
          category: 'literary-technique',
        },
        {
          id: 'lp-ch4-2',
          content: 'The flight on Geryon mirrors Dante\'s increasing moral understanding—he must trust the symbol of fraud to descend deeper.',
          category: 'thematic-analysis',
        },
      ],
    },

    // Scene 2: Malebolge Structure (Map Exploration)
    {
      id: 'ch4-scene-2',
      type: 'map-exploration',
      backgroundImage: 'https://cdn.midjourney.com/95233e45-c652-4dfd-8f87-f3b9ed748675/0_0.png',
      mapImage: 'https://cdn.midjourney.com/4d9136a1-2e63-4165-b7d1-ecc880b05fc7/0_0.png',
      prompt: 'Explore the ten bolgias of Malebolge to understand the structure of fraud',
      locations: [
        {
          id: 'bolgia-1',
          name: 'Bolgia 1: Panders and Seducers',
          x: 70,
          y: 20,
          content: `The first ditch is filled with two lines of sinners, marching in opposite directions. Horned demons whip them forward relentlessly.

These are the panders and seducers—those who exploited others through seduction or sold the dignity of others for their own gain. In life they drove others forward for their own purposes; in death they are driven by demons.`,
          image: 'https://cdn.midjourney.com/95233e45-c652-4dfd-8f87-f3b9ed748675/0_0.png',
        },
        {
          id: 'bolgia-2',
          name: 'Bolgia 2: Flatterers',
          x: 85,
          y: 30,
          content: `A terrible stench rises from the second ditch. Looking down, you see sinners completely immersed in human excrement, their faces barely visible above the filth.

These are the flatterers—those who produced verbal filth in life through false praise and sycophancy. They swim in literal sewage, their honeyed words made manifest in the most disgusting way imaginable.`,
          image: 'https://cdn.midjourney.com/95233e45-c652-4dfd-8f87-f3b9ed748675/0_0.png',
        },
        {
          id: 'bolgia-3',
          name: 'Bolgia 3: Simoniacs',
          x: 88,
          y: 48,
          content: `In the third ditch you see countless round holes, each the size of a baptismal font. From each hole protrude a pair of legs, kicking and struggling. Flames lick at the soles of their feet.

These are the simoniacs—corrupt clergy who sold Church offices and spiritual goods for money. They inverted spiritual values, putting gold above God, so they are inverted in holes. Fire burns where they walked, consuming their corrupt path.`,
          image: 'https://cdn.midjourney.com/a64c746b-6643-4e9e-8033-fe460dc7ff4c/0_0.png',
        },
        {
          id: 'bolgia-4',
          name: 'Bolgia 4: Sorcerers and Diviners',
          x: 80,
          y: 65,
          content: `A procession of souls walks slowly in a circle, weeping. As they draw closer, you realize with horror that their heads are twisted completely backward. Tears stream down their backs.

These are sorcerers and diviners—those who tried to see the future through forbidden means. They perverted vision by claiming to see what was not theirs to know, so now they cannot see forward at all, only behind them.`,
          image: 'https://cdn.midjourney.com/5f1dc7f9-6386-49a7-b1ab-cf3c42e01145/0_0.png',
        },
        {
          id: 'bolgia-5',
          name: 'Bolgia 5: Barrators',
          x: 62,
          y: 75,
          content: `Boiling black pitch fills the fifth ditch. Occasionally a sinner surfaces, only to be immediately hooked by one of the Malebranche—grotesque demons with names like Draghignazzo and Ciriatto.

These are the barrators—corrupt politicians who made secret deals and took bribes. Their deals were "sticky" and hidden in darkness, so now they are literally stuck in tar, their crimes made visible and inescapable.`,
          image: 'https://cdn.midjourney.com/5fc7f1f2-c6e7-4ff4-973d-b561f603981d/0_0.png',
        },
        {
          id: 'bolgia-6',
          name: 'Bolgia 6: Hypocrites',
          x: 40,
          y: 78,
          content: `Figures in brilliant golden cloaks walk extremely slowly around the sixth ditch. As they approach, you see their faces contorted with effort. The cloaks, while beautiful on the outside, are lined with heavy lead.

These are the hypocrites—those who appeared virtuous outside while hiding vice within. Their external beauty concealed internal corruption, so they wear cloaks gilded on the outside but crushing on the inside, their duality made eternal.`,
          image: 'https://cdn.midjourney.com/f8c4526d-ca67-42ad-86c7-a5a21e058deb/0_0.png',
        },
        {
          id: 'bolgia-7',
          name: 'Bolgia 7: Thieves',
          x: 22,
          y: 70,
          content: `The seventh ditch swarms with serpents of every description. The sinners run in terror, but there is no escape. When a serpent bites, the victim burns to ash and immediately reforms—or worse, merges with the serpent in grotesque transformation.

These are the thieves—those who stole property and identity from others. Now serpents steal their human forms, their identities constantly shifting and dissolving. The thieves lose their very selves, mirroring how they took from others.`,
          image: 'https://cdn.midjourney.com/128ab45d-ac56-42d3-9b20-24728da983f5/0_0.png',
        },
        {
          id: 'bolgia-8',
          name: 'Bolgia 8: Fraudulent Counselors',
          x: 12,
          y: 52,
          content: `Flames—thousands of flames—dance through the eighth ditch like fireflies. But these are not ordinary flames; each one contains a soul, wrapped and hidden in fire.

These are the fraudulent counselors—those who gave evil advice hidden in clever words. They hid truth in deceptive speech, so now they are hidden in flames, their cunning intellect become fire that consumes them.`,
          image: 'https://cdn.midjourney.com/8944e5a7-6584-4173-84d5-9a94f33cb8b2/0_0.png',
        },
        {
          id: 'bolgia-9',
          name: 'Bolgia 9: Sowers of Discord',
          x: 15,
          y: 35,
          content: `A demon with a great sword stands on the bridge, hacking at the sinners as they pass. Their wounds are terrible—bodies split open, limbs severed, heads carried like lanterns. Yet as they circle the ditch, their wounds heal, only to be hacked open again when they return.

These are the sowers of discord—those who divided communities, families, and religions. They split others apart in life, so they are eternally divided themselves, their bodies cut and reassembled in endless cycles.`,
          image: 'https://cdn.midjourney.com/25c9f086-4f57-4e81-bf44-7edefcf47ae3/0_0.png',
        },
        {
          id: 'bolgia-10',
          name: 'Bolgia 10: Falsifiers',
          x: 30,
          y: 22,
          content: `The final ditch is filled with the diseased and dying—though they cannot die. Some are covered in scabs, scratching furiously until their skin peels away. Others bloat with dropsy, consumed by unquenchable thirst. All are rotting, mad with their afflictions.

These are the falsifiers—alchemists who falsified metals, counterfeiters who falsified money, perjurers who falsified words. They corrupted reality and truth, so disease corrupts their bodies, falsification reflected in their physical decay.`,
          image: 'https://cdn.midjourney.com/2b7ee6ce-21f6-41c1-9199-d9a1f0306b29/0_0.png',
        },
      ],
      requiredLocations: ['bolgia-1', 'bolgia-3', 'bolgia-6', 'bolgia-8'],
      learningPoints: [
        {
          id: 'lp-ch4-3',
          content: 'Panders sold others\' dignity. Demons whip them forward—exploiters now exploited.',
          category: 'thematic-analysis',
        },
        {
          id: 'lp-ch4-4',
          content: 'Flatterers\' false praise was spiritual excrement. Now they wallow in physical sewage—words made concrete.',
          category: 'thematic-analysis',
        },
        {
          id: 'lp-ch4-5',
          content: 'Simoniacs inverted spiritual values (made holy things commercial). Punishment: Inverted position, fire consuming from below.',
          category: 'thematic-analysis',
        },
        {
          id: 'lp-ch4-6',
          content: 'Sorcerers perverted sight (claiming to see future). Now their heads face backward—perfect symbolic punishment.',
          category: 'thematic-analysis',
        },
        {
          id: 'lp-ch4-7',
          content: 'Barrators\' deals were "sticky" (hard to escape). Now literally stuck in tar—corruption made physical.',
          category: 'thematic-analysis',
        },
        {
          id: 'lp-ch4-8',
          content: 'Hypocrites\' external virtue concealed internal vice. Lead cloaks gilded on outside, crushing inside—duality made eternal.',
          category: 'thematic-analysis',
        },
        {
          id: 'lp-ch4-9',
          content: 'Thieves stole property. Now their very identities are stolen by serpents—losing self mirrors losing others\' goods.',
          category: 'thematic-analysis',
        },
        {
          id: 'lp-ch4-10',
          content: 'Counselors hid truth in deceptive speech. Now hidden in flames—their wisdom became fire consuming them.',
          category: 'thematic-analysis',
        },
        {
          id: 'lp-ch4-11',
          content: 'Discord-sowers split political/religious unity. Demon hacks them apart—wounds heal, cycle repeats. Division made eternal.',
          category: 'thematic-analysis',
        },
        {
          id: 'lp-ch4-12',
          content: 'Falsifiers corrupted metals, identities, words. Disease corrupts their bodies—falsification turned inward.',
          category: 'thematic-analysis',
        },
      ],
    },

    // Scene 3: Approaching the Simoniacs (Narrative - Setup)
    {
      id: 'ch4-scene-3',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/a64c746b-6643-4e9e-8033-fe460dc7ff4c/0_0.png',
      content: `You descend into the third bolgia, and a wave of outrage surges through you. The air shimmers with heat, and the ground is pockmarked with countless round holes, each resembling a baptismal font carved into the rock.

From each hole, a pair of legs protrudes, kicking frantically. Flames lick at the soles of their feet, and you can hear muffled screams from within the stone.

"These are the simoniacs," Virgil says, his voice heavy with contempt. "Those who made merchandise of the things of God—selling Church offices, pardons, and holy positions to the highest bidder. They transformed the house of prayer into a marketplace."

He points to the holes. "Just as they inverted the proper order of things—placing gold above God, earthly treasure above spiritual truth—so they are inverted here, planted headfirst in the stone like grotesque seeds that will never grow."

You approach one hole where the legs kick with particular violence. The soles burn brightest here, the flames most intense.

"That one is different," Virgil observes. "The fire burns hotter—he must have been a greater sinner. Let us see who this is."

You lean closer to the hole, and suddenly a muffled voice echoes up from the depths of the stone, filled with desperate urgency.`,
      learningPoints: [
        {
          id: 'lp-ch4-13a',
          content: 'Holes resemble baptismal fonts—sacred objects profaned. Simoniacs corrupted baptism (entry to Church) by making it transactional.',
          category: 'literary-technique',
        },
        {
          id: 'lp-ch4-13b',
          content: 'Intensity of fire indicates severity of sin. Worse simoniacs burn hotter—hierarchical punishment within categories.',
          category: 'thematic-analysis',
        },
      ],
    },

    // Scene 4: Pope Nicholas III (Dialogue - Simoniacs)
    {
      id: 'ch4-scene-4',
      type: 'dialogue',
      backgroundImage: 'https://cdn.midjourney.com/a64c746b-6643-4e9e-8033-fe460dc7ff4c/0_0.png',
      character: {
        id: 'pope-nicholas-iii',
        name: 'Pope Nicholas III',
        portrait: 'https://cdn.midjourney.com/ce7a1a43-a7fa-482a-ba09-1d3b80f7e434/0_0.png',
        description: 'Pope (1277-1280), notorious for nepotism and selling Church offices',
      },
      characters: [virgilCharacter],
      dialogueTree: {
        id: 'node-1',
        speaker: 'pope-nicholas-iii',
        text: 'Are you here already, Boniface? Are you here already? The prophecy has lied by several years! Or are you sated so soon with the wealth for which you did not fear to take the beautiful Lady by guile, and then to violate her?',
        responses: [
          {
            id: 'response-1',
            text: 'I am not Boniface. Who are you?',
            nextNodeId: 'node-2',
            learningPoints: [
              {
                id: 'lp-ch4-13',
                content: 'Nicholas expects Pope Boniface VIII (Dante\'s enemy) to arrive soon. Even popes are damned—institutional corruption.',
                category: 'historical-context',
              },
            ],
          },
          {
            id: 'response-2',
            text: 'What is simony?',
            nextNodeId: 'node-3',
            learningPoints: [
              {
                id: 'lp-ch4-14',
                content: 'Simony (named for Simon Magus who tried to buy apostolic power) is selling spiritual offices for money. Dante saw it destroying the Church.',
                category: 'historical-context',
              },
            ],
          },
          {
            id: 'response-3',
            text: 'Why are you punished this way?',
            nextNodeId: 'node-4',
            learningPoints: [
              {
                id: 'lp-ch4-15',
                content: 'Simoniacs inverted spiritual priorities (put money above God). Inverted in holes, pushed down by each new arrival—their greed made eternal pressure.',
                category: 'thematic-analysis',
              },
            ],
          },
        ],
        allNodes: [
          {
            id: 'node-2',
            speaker: 'pope-nicholas-iii',
            text: 'I was a son of the she-bear, so eager to advance the cubs that up there I pocketed wealth, and here I pocket myself. The beautiful Lady—the Church—I made a purse for gold. Now I am pursed in stone.',
            responses: [
              {
                id: 'response-continue',
                text: 'Tell me more about your crimes.',
                nextNodeId: 'node-5',
                learningPoints: [
                  {
                    id: 'lp-ch4-16',
                    content: '"Son of the she-bear" refers to the Orsini family (orso = bear). Nicholas enriched relatives through nepotism.',
                    category: 'historical-context',
                  },
                ],
              },
            ],
          },
          {
            id: 'node-3',
            speaker: 'pope-nicholas-iii',
            text: 'Simony is the sin of making Church offices into merchandise—selling bishoprics, pardons, holy positions to the highest bidder. We turned the house of God into a marketplace, and for this we burn.',
            responses: [
              {
                id: 'response-continue-2',
                text: 'How does your punishment fit this sin?',
                nextNodeId: 'node-4',
              },
            ],
          },
          {
            id: 'node-4',
            speaker: 'pope-nicholas-iii',
            text: 'In life, I inverted the proper order—I put gold above God, earthly wealth above spiritual treasure. So here I am inverted, my head down in the earth, my feet burning where I walked. When the next simoniac arrives, I will be pushed deeper into the stone, compressed by his weight as I compressed others with my greed.',
            responses: [
              {
                id: 'response-rebuke',
                text: 'You deserved better than this.',
                nextNodeId: 'node-6',
              },
            ],
          },
          {
            id: 'node-5',
            speaker: 'virgil',
            text: 'Dante, you have heard enough. Stand back—now I must speak to this corrupt soul. [Virgil turns to address Pope Nicholas in the hole] Tell me, Pope Nicholas, how much treasure did our Lord require of Saint Peter before He gave him the keys to the kingdom? He asked only "Follow me." And when Matthias was chosen to replace the traitor Judas, was gold demanded? Never! You and your fellow simoniacs are justly punished here, hoarding the ill-gotten gold that made you bold against Charles of Anjou.',
            nextNodeId: 'node-6',
          },
          {
            id: 'node-6',
            speaker: 'virgil',
            text: 'Come, we have seen enough of this. The sins of the Church cry out to Heaven, but Heaven\'s justice answers in these depths.',
            isEnd: true,
          },
        ],
      },
      learningPoints: [
        {
          id: 'lp-ch4-17',
          content: 'Dante attacks papal corruption directly—radical for medieval writer. He risks heresy charges to speak truth.',
          category: 'historical-context',
        },
      ],
      inlineAnnotations: [
        {
          id: 'annotation-charles',
          text: 'Charles of Anjou',
          tooltip: {
            title: 'Who was Charles of Anjou?',
            content: 'Charles of Anjou (1226-1285) was a French prince who became King of Sicily. Pope Nicholas III opposed Charles\'s political ambitions in Italy, using Church wealth and influence in the power struggle between French and Italian factions.',
            category: 'historical-context',
          },
        },
      ],
    },

    // Scene 5: The Sorcerers' Punishment (Narrative)
    {
      id: 'ch4-scene-5',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/5f1dc7f9-6386-49a7-b1ab-cf3c42e01145/0_0.png',
      content: `Moving to the fourth bolgia, you encounter a sight that fills you with unexpected pity. A line of souls walks weeping in slow procession, their heads twisted completely backward so they face their own spines.

One figure stumbles, unable to see where he is going. Tears stream down his back. You recognize the face—or would, if it were facing the right direction. This is the punishment of those who claimed to see the future.

"Do you weep?" Virgil asks you sharply. "Here pity lives when it is altogether dead. What greater wrong than to make divine judgment subject to human will? These sinners sought to pierce the veil of time, to know what God alone should know."

You realize your error. To pity those justly punished is to question God's justice itself. You steel your heart and move on.`,
      learningPoints: [
        {
          id: 'lp-ch4-18',
          content: 'Sorcerers tried to see the future through forbidden means. Now they cannot see ahead at all—only behind.',
          category: 'thematic-analysis',
        },
        {
          id: 'lp-ch4-19',
          content: 'Dante learns to harden his heart. Pity for the justly punished is itself a sin—questioning God\'s justice.',
          category: 'character-analysis',
        },
      ],
    },

    // Scene 6: The Barrators and Malebranche (Narrative with action)
    {
      id: 'ch4-scene-6',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/5fc7f1f2-c6e7-4ff4-973d-b561f603981d/0_0.png',
      content: `The fifth bolgia is filled with boiling black pitch, bubbling and steaming. Demons patrol the banks—the Malebranche, or "Evil Claws," each more grotesque than the last.

As you watch, a demon arrives carrying a politician over his shoulder like a sack of grain. "Make way for one of Saint Zita's elders!" he shouts mockingly, and hurls the screaming soul into the pitch.

Immediately other demons rush forward with their hooks. One sinner tries to surface for air, and a demon named Draghignazzo hooks him in the hair. "Stay under, like a mouse in cheese!" the demon cackles, pushing him back down.

Virgil negotiates safe passage with the demon leader, Malacoda, who assigns an escort of ten Malebranche. Their names are absurd—Calcabrina, Ciriatto, Graffiacane—a rogues' gallery of devils. The scene has the quality of dark comedy, bureaucrats punished by monstrous bureaucrats.`,
      learningPoints: [
        {
          id: 'lp-ch4-20',
          content: 'Barrators made corrupt deals in darkness. Pitch is black, sticky—their secret dealings made visible and inescapable.',
          category: 'thematic-analysis',
        },
        {
          id: 'lp-ch4-21',
          content: 'Malebranche demons have absurd names (Draghignazzo, Ciriatto, etc.). Dante satirizes corruption with dark comedy.',
          category: 'literary-technique',
        },
      ],
    },

    // Scene 7: The Hypocrites' Heavy Cloaks (Narrative)
    {
      id: 'ch4-scene-7',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/f8c4526d-ca67-42ad-86c7-a5a21e058deb/0_0.png',
      content: `In the sixth bolgia, you see figures in magnificent golden cloaks, walking in slow procession. From a distance they appear glorious, like monks in ceremonial vestments.

But as they approach, you see the reality. The cloaks are lined with lead, so heavy that each step is agony. The figures' faces are contorted with exhaustion, but they cannot remove the cloaks, cannot rest, cannot stop walking.

"We are the Jovial Friars," one explains in a strained voice. "Our order claimed to bring joy and reconciliation, but we used our positions for political gain. We appeared golden outside while rotting inside."

On the ground, you notice something horrifying—a man crucified to the earth with three stakes. The hypocrites must walk over him eternally.

"That is Caiaphas," Virgil explains. "He counseled that one man should die for the people—condemning Christ to save political stability. The ultimate hypocrisy: a religious leader killing God."`,
      learningPoints: [
        {
          id: 'lp-ch4-22',
          content: 'Hypocrites\' beauty was superficial. Lead cloaks gilded on outside, crushing inside—their duality made permanent.',
          category: 'thematic-analysis',
        },
        {
          id: 'lp-ch4-23',
          content: 'Caiaphas (Jewish high priest who condemned Jesus) is crucified on the floor. Ultimate hypocrisy: religious leader killing God. Others must walk on him forever.',
          category: 'historical-context',
        },
      ],
    },

    // Scene 8: The Thieves' Transformations (Narrative - extended)
    {
      id: 'ch4-scene-8',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/128ab45d-ac56-42d3-9b20-24728da983f5/0_0.png',
      content: `The seventh bolgia swarms with serpents—vipers, asps, pythons, and creatures you cannot name. The naked sinners run through this nest of snakes, their hands bound behind them with more serpents.

As you watch, a small snake darts forward and bites a man in the navel. He freezes, mouth open in silent scream, and suddenly bursts into flame. In an instant he is reduced to ash that falls to the ground—but immediately the ash swirls together and reforms into the same man, whole again, only to resume his terrified flight.

Then you witness something even more grotesque. A six-legged serpent latches onto a man. The two begin to merge, melting together like hot wax. The serpent becomes more human, the human more serpentine, until you cannot tell which was which. Their identities have been stolen from each other.

"Note this well," Dante later wrote, "for I claim that neither Ovid describing Cadmus and Arethusa, nor Lucan describing Sabellus and Nasidius, ever transformed two natures face to face so that both forms were ready to exchange their substance. Let Ovid be silent!"

The thieves stole others' property and identity. Now serpents steal their very forms.`,
      learningPoints: [
        {
          id: 'lp-ch4-24',
          content: 'Thieves stole others\' property and identity. Serpents steal their human forms—losing self mirrors their theft.',
          category: 'thematic-analysis',
        },
        {
          id: 'lp-ch4-25',
          content: 'Dante describes transformations in elaborate detail, challenging Ovid\'s Metamorphoses. He claims his version surpasses the classical master.',
          category: 'literary-technique',
        },
      ],
    },

    // Scene 9: Approaching the Fraudulent Counselors (Narrative - Setup)
    {
      id: 'ch4-scene-9',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/8944e5a7-6584-4173-84d5-9a94f33cb8b2/0_0.png',
      image: 'https://cdn.midjourney.com/5e30c13b-428c-45dc-9ab2-382b40d5a979/0_0.png',
      content: `The eighth bolgia stretches before you, and unlike the grotesque physical horrors of the previous trenches, this one is strangely beautiful. Thousands of flames dance through the darkness like fireflies on a summer evening, flickering and swaying in a silent choreography.

But as you draw closer, you realize each flame contains a soul—tongues of fire that move with terrible purpose, hiding the damned within their burning forms.

"These are the fraudulent counselors," Virgil explains, his voice tinged with both sadness and reverence. "Those who used their intellect—the divine gift of reason—to give evil advice hidden in clever words. They concealed truth in deceptive speech, and now they are concealed forever in flames."

One flame approaches, larger than the others, split at the top like a forked tongue. It flickers with a peculiar intensity.

"That flame holds two souls," Virgil continues. "Ulysses and Diomedes—Greek heroes of the Trojan War. They are punished together for their shared cunning: the Trojan Horse stratagem, the deception of Achilles, the theft of the Palladium from Athena's temple."

You lean forward, eager to hear from the legendary Odysseus himself. But Virgil raises a hand.

"Let me speak to them. They were Greek, and might disdain your speech. I wrote of them in my verses—they may answer me."`,
      learningPoints: [
        {
          id: 'lp-ch4-26a',
          content: 'Fraudulent counselors are wrapped in flames—their cunning intellect (divine gift) perverted for evil becomes fire consuming them.',
          category: 'thematic-analysis',
        },
        {
          id: 'lp-ch4-26b',
          content: 'Ulysses and Diomedes share one flame—their partnership in deception binds them in punishment. Shared sin, shared suffering.',
          category: 'thematic-analysis',
        },
      ],
    },

    // Scene 10: Ulysses (Dialogue - Fraudulent Counselors)
    {
      id: 'ch4-scene-10',
      type: 'dialogue',
      backgroundImage: 'https://cdn.midjourney.com/8944e5a7-6584-4173-84d5-9a94f33cb8b2/0_0.png',
      character: {
        id: 'ulysses',
        name: 'Ulysses (Odysseus)',
        portrait: 'https://cdn.midjourney.com/5e30c13b-428c-45dc-9ab2-382b40d5a979/0_0.png',
        description: 'Greek hero of the Trojan War, famous for cunning and the Trojan Horse',
      },
      characters: [virgilCharacter],
      dialogueTree: {
        id: 'node-1',
        speaker: 'virgil',
        text: 'You within the fire—if I deserved of you while I lived, if I deserved of you much or little when on earth I wrote my lofty verses—do not move, but let one of you tell where he went, lost, to die.',
        responses: [
          {
            id: 'response-1',
            text: 'Why are you in Hell? You\'re a hero!',
            nextNodeId: 'node-2',
            learningPoints: [
              {
                id: 'lp-ch4-26',
                content: 'Ulysses is punished for fraudulent counsel: the Trojan Horse, deceiving Achilles, stealing Athena\'s statue. Cunning without virtue damns.',
                category: 'thematic-analysis',
              },
            ],
          },
        ],
        allNodes: [
          {
            id: 'node-2',
            speaker: 'ulysses',
            text: 'When I departed from Circe, who had detained me more than a year near Gaeta... neither fondness for my son, nor pity for my old father, nor the love I owed Penelope could conquer the ardor that I had to gain experience of the world and of human vice and virtue.',
            responses: [
              {
                id: 'response-2',
                text: 'What happened on your final voyage?',
                nextNodeId: 'node-3',
              },
            ],
            learningPoints: [
              {
                id: 'lp-ch4-27',
                content: 'Ulysses abandoned duty for forbidden knowledge—sailing beyond the known world. Renaissance spirit (exploration) but medieval sin (pride, curiosity).',
                category: 'thematic-analysis',
              },
            ],
          },
          {
            id: 'node-3',
            speaker: 'ulysses',
            text: 'I and my companions were old and slow when we reached that narrow strait where Hercules set up his boundary stones to warn men not to venture farther. I left Seville on the right and on the left already had left Ceuta. "O brothers," I said, "who through a hundred thousand dangers have reached the West, do not deny this brief vigil of your senses what remains to experience: following the sun, of the world that has no people. Consider your origin: you were not made to live like brutes, but to pursue virtue and knowledge."',
            responses: [
              {
                id: 'response-3',
                text: 'That speech is magnificent!',
                nextNodeId: 'node-4',
              },
            ],
            learningPoints: [
              {
                id: 'lp-ch4-28',
                content: 'This is one of literature\'s great speeches. Ulysses\' eloquence shows why he\'s both admirable and damned—noble ideals, sinful execution.',
                category: 'literary-analysis',
              },
            ],
          },
          {
            id: 'node-4',
            speaker: 'ulysses',
            text: 'With this brief speech I made my companions so eager for the voyage that I could hardly have held them back. Turning our stern toward morning, we made wings of our oars for the mad flight. For five months we sailed on, until we saw a mountain, dark in the distance, and it seemed to me the highest I had ever seen. We rejoiced, but soon our joy turned to grief, for from that new land a whirlwind rose and struck the forepart of the ship. Three times it made her whirl with all the waters; the fourth time it lifted the stern on high and plunged the prow below, as pleased Another, until the sea closed over us.',
            isEnd: true,
            learningPoints: [
              {
                id: 'lp-ch4-29',
                content: 'The mountain is Mount Purgatory. God sinks Ulysses\' ship—humans cannot reach salvation through reason/exploration alone. Grace is required.',
                category: 'thematic-analysis',
              },
              {
                id: 'lp-ch4-30',
                content: 'Dante admires Ulysses but condemns him. This tension—heroic yet damned—captures medieval ambivalence toward classical virtues.',
                category: 'thematic-analysis',
              },
            ],
          },
        ],
      },
      learningPoints: [],
      inlineAnnotations: [
        {
          id: 'annotation-ulysses',
          text: 'Ulysses',
          tooltip: {
            title: 'Who is Ulysses?',
            content: 'Ulysses (Greek: Odysseus) was the legendary hero of Homer\'s Odyssey, known for cunning intelligence. Dante places him in Hell for fraudulent counsel, particularly the Trojan Horse stratagem.',
            category: 'historical-context',
          },
        },
      ],
    },

    // Scene 11: Understanding Ulysses (Primary Source)
    {
      id: 'ch4-scene-11',
      type: 'primary-source',
      backgroundImage: 'https://cdn.midjourney.com/f3032189-93cd-4ec0-9ea3-1c034235709e/0_0.png',
      prompt: 'Analyze Ulysses\' final voyage and its meaning',
      source: {
        title: 'Inferno, Canto XXVI - Ulysses\' Speech',
        author: 'Dante Alighieri',
        date: 'c. 1308-1320',
        type: 'text',
        content: `"O brothers," I said, "who through a hundred thousand dangers have reached the West, do not deny this brief vigil of your senses what remains to experience: following the sun, of the world that has no people. Consider your origin: you were not made to live like brutes, but to pursue virtue and knowledge."

With this brief speech I made my companions so eager for the voyage that I could hardly have held them back.`,
        citation: 'Inferno XXVI:112-123, translated by Robert Hollander',
      },
      questions: [
        {
          id: 'q1',
          question: 'How does Dante\'s Ulysses differ from Homer\'s?',
          type: 'multiple-choice',
          options: [
            'Dante\'s Ulysses is more heroic',
            'Dante invents Ulysses\' final voyage and death—not in Homer',
            'Dante makes Ulysses a coward',
            'There is no difference',
          ],
          correctAnswer: 'Dante invents Ulysses\' final voyage and death—not in Homer',
          explanation: 'Homer\'s Ulysses returns home. Dante creates a final voyage beyond Gibraltar, ending in death—reflecting medieval fears of forbidden knowledge.',
        },
        {
          id: 'q2',
          question: 'Why is Ulysses\' speech both inspiring and sinful?',
          type: 'multiple-choice',
          options: [
            'It\'s purely heroic with no sinful elements',
            'It exalts virtue and knowledge but violates divine limits—abandoning duty for forbidden curiosity',
            'It\'s purely sinful with no admirable qualities',
            'It shows weakness and cowardice',
          ],
          correctAnswer: 'It exalts virtue and knowledge but violates divine limits—abandoning duty for forbidden curiosity',
          explanation: 'Ulysses exalts virtue and knowledge—Renaissance ideals. But he violates divine limits, abandoning duty for curiosity—medieval sin. He\'s heroically damned.',
        },
      ],
      learningPoints: [
        {
          id: 'lp-ch4-31',
          content: 'Dante rewrites classical mythology to fit Christian morality. Ulysses\' heroism becomes sin when it violates God\'s boundaries.',
          category: 'literary-technique',
        },
        {
          id: 'lp-ch4-32',
          content: 'The Ulysses canto foreshadows the Renaissance: pursuit of knowledge as both noble and dangerous.',
          category: 'thematic-analysis',
        },
      ],
    },

    // Scene 12: The Sowers of Discord (Narrative - graphic)
    {
      id: 'ch4-scene-12',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/25c9f086-4f57-4e81-bf44-7edefcf47ae3/0_0.png',
      content: `The ninth bolgia presents the most gruesome sight yet. A demon stands on the bridge, wielding a great sword. As the sinners pass, he hacks them open with systematic precision.

One figure carries his own severed head by the hair, like a lantern lighting his way. "I am Bertran de Born," the head says from his hand. "I severed father from son—counseling Prince Henry to rebel against King Henry II. So I carry my severed head, my body divided from my reason."

Another soul approaches, split from chin to groin, his entrails hanging out. "I am Muhammad," he cries. "Look how I am torn! And before me goes Ali, cleft from chin to forelock. All who sowed scandal and schism are here mutilated in this way."

The demon hacks them, they walk the circuit as their wounds heal, and return to be hacked open again. The cycle never ends—division made eternal.`,
      learningPoints: [
        {
          id: 'lp-ch4-33',
          content: 'Sowers of discord divided communities. They\'re physically divided—wounds heal, cycle repeats. The sin made eternal.',
          category: 'thematic-analysis',
        },
        {
          id: 'lp-ch4-34',
          content: 'Dante places Muhammad here (not as prophet but as schismatic who divided Christianity). Medieval view, now considered deeply problematic.',
          category: 'historical-context',
        },
        {
          id: 'lp-ch4-35',
          content: 'Bertran de Born divided father and son (Henry II and Prince Henry). Carries severed head—body divided from reason.',
          category: 'historical-context',
        },
      ],
    },

    // Scene 13: The Falsifiers' Diseases (Narrative)
    {
      id: 'ch4-scene-13',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/2b7ee6ce-21f6-41c1-9199-d9a1f0306b29/0_0.png',
      content: `The tenth and final bolgia is a scene of utter degradation. The air reeks of infected wounds and unwashed bodies. Souls lie heaped like corpses, scratching themselves with such fury that their skin peels away in sheets.

Some are covered in scabs like fish scales. Others bloat with dropsy, their bellies swollen while they beg for water. Still others rage with fever, their minds gone to madness.

"We are the falsifiers," one rasps. "Alchemists who promised to turn lead to gold. Counterfeiters who debased currency. Perjurers who twisted truth with lies. We corrupted reality itself, and so corruption consumes us."

Disease was thought to come from inner corruption. These sinners' moral rot has become physical decay, falsification reflected in their rotting flesh.`,
      learningPoints: [
        {
          id: 'lp-ch4-36',
          content: 'Falsifiers corrupted reality—metals, identities, truth. Disease corrupts their bodies—falsification reflected in physical decay.',
          category: 'thematic-analysis',
        },
        {
          id: 'lp-ch4-37',
          content: 'Medieval medicine believed disease came from inner corruption. Falsifiers\' moral corruption becomes physical contagion.',
          category: 'historical-context',
        },
      ],
    },

    // Scene 14: Master Adam the Counterfeiter (Dialogue)
    {
      id: 'ch4-scene-14',
      type: 'dialogue',
      backgroundImage: 'https://cdn.midjourney.com/2b7ee6ce-21f6-41c1-9199-d9a1f0306b29/0_0.png',
      character: {
        id: 'master-adam',
        name: 'Master Adam',
        portrait: 'https://cdn.midjourney.com/10352562-3ae9-4173-8b77-ef4f759e07e3/0_0.png',
        description: 'English counterfeiter (d. 1281), burned alive for making false florins',
      },
      characters: [virgilCharacter],
      dialogueTree: {
        id: 'node-1',
        speaker: 'master-adam',
        text: 'I had everything I wanted there in life, and here I crave a drop of water. The little brooks that from the green hills of Casentino descend into the Arno, making their channels cool and soft, are always in my mind, and not in vain, for that image withers me far more than this disease that strips the flesh from off my face.',
        responses: [
          {
            id: 'response-1',
            text: 'What did you falsify?',
            nextNodeId: 'node-2',
            learningPoints: [
              {
                id: 'lp-ch4-38',
                content: 'Master Adam counterfeited Florence\'s gold florin (trusted currency). His crime destabilized economy—personal greed, public harm.',
                category: 'historical-context',
              },
            ],
          },
          {
            id: 'response-2',
            text: 'Why are you so thirsty?',
            nextNodeId: 'node-3',
            learningPoints: [
              {
                id: 'lp-ch4-39',
                content: 'Counterfeiters falsified gold (associated with water in alchemy). Dropsy disease causes unquenchable thirst—wanting what they corrupted.',
                category: 'thematic-analysis',
              },
            ],
          },
          {
            id: 'response-3',
            text: 'Do you regret it?',
            nextNodeId: 'node-4',
          },
        ],
        allNodes: [
          {
            id: 'node-2',
            speaker: 'master-adam',
            text: 'The Counts of Romena hired me to make florins—but with only three carats of gold instead of twenty-four. I was an artist! Each coin looked perfect. But I was caught, and they burned me alive. Now those brothers are here too, nearby.',
            responses: [
              {
                id: 'response-continue',
                text: 'What is your punishment?',
                nextNodeId: 'node-3',
              },
            ],
          },
          {
            id: 'node-3',
            speaker: 'master-adam',
            text: 'Dropsy. My belly swells while my throat burns. I would give anything—ANYTHING—for one drop of cool water from those mountain streams I remember. But here there is only dust and disease.',
            responses: [
              {
                id: 'response-ask',
                text: 'Do you feel remorse?',
                nextNodeId: 'node-4',
              },
            ],
          },
          {
            id: 'node-4',
            speaker: 'master-adam',
            text: 'Remorse? I feel rage! If I could move, I would crawl to find those Counts who led me into this. They are the ones who should suffer most! As for my crime... I only wish I could see them punished worse than I am.',
            responses: [
              {
                id: 'response-observe',
                text: '[Watch as Master Adam argues with another falsifier]',
                nextNodeId: 'node-5',
              },
            ],
            learningPoints: [
              {
                id: 'lp-ch4-40',
                content: 'Master Adam blames employers, not himself. The damned never accept responsibility—impenitence defines Hell.',
                category: 'thematic-analysis',
              },
            ],
          },
          {
            id: 'node-5',
            speaker: 'virgil',
            text: 'Dante, why do you watch them so eagerly? Do you take pleasure in their degradation? To listen to such vile wrangling is a base desire. I expected better of you.',
            isEnd: true,
            learningPoints: [
              {
                id: 'lp-ch4-41',
                content: 'Virgil\'s rebuke teaches Dante: Taking pleasure in others\' degradation, even the damned, is itself sinful.',
                category: 'character-analysis',
              },
            ],
          },
        ],
      },
      learningPoints: [],
    },

    // Scene 15: Reflections on Fraud (Decision)
    {
      id: 'ch4-scene-15',
      type: 'decision',
      backgroundImage: 'https://cdn.midjourney.com/95233e45-c652-4dfd-8f87-f3b9ed748675/0_0.png',
      prompt: 'Of all the types of fraud you\'ve seen, which is worst?',
      context: `You've witnessed ten types of fraud, from seduction to falsification. Medieval ethics ranked sins by their damage. Which does the most harm?`,
      choices: [
        {
          id: 'choice-simony',
          text: 'Simony—corrupting the Church corrupts souls.',
          consequence: 'This aligns with Dante\'s view. Corrupt clergy mislead entire populations, multiplying sin.',
          learningPoints: [
            {
              id: 'lp-ch4-42',
              content: 'Dante reserves special fury for simoniacs. Church corruption damns both clergy and flock—institutional betrayal of the highest order.',
              category: 'thematic-analysis',
            },
          ],
        },
        {
          id: 'choice-counsel',
          text: 'Fraudulent counsel—like Ulysses\' deceptive advice.',
          consequence: 'Evil advice shapes actions. Ulysses\' Trojan Horse killed thousands. Ideas have consequences.',
          learningPoints: [
            {
              id: 'lp-ch4-43',
              content: 'Fraudulent counselors weaponize intelligence. They use reason (God\'s gift) for evil—perverting humanity\'s highest faculty.',
              category: 'thematic-analysis',
            },
          ],
        },
        {
          id: 'choice-discord',
          text: 'Sowing discord—destroying communities and unity.',
          consequence: 'Discord-sowers fracture society. Muhammad and Bertran de Born divided religions and families.',
          learningPoints: [
            {
              id: 'lp-ch4-44',
              content: 'Medieval society valued unity (one Church, one Empire). Schismatics threatened the entire social order.',
              category: 'historical-context',
            },
          ],
        },
        {
          id: 'choice-all',
          text: 'All fraud is equal—it betrays trust.',
          consequence: 'A fair point. All fraud exploits human relationships, violating the bond of trust essential to society.',
          learningPoints: [
            {
              id: 'lp-ch4-45',
              content: 'Fraud is worse than violence because it requires human intelligence. Animals can be violent; only humans can deceive.',
              category: 'thematic-analysis',
            },
          ],
        },
      ],
      learningPoints: [
        {
          id: 'lp-ch4-46',
          content: 'Fraud requires reason—humans\' divine spark. Using intelligence for evil is worse than bestial violence. That\'s why fraud is deeper than violence in Hell.',
          category: 'thematic-analysis',
        },
      ],
    },

    // Scene 16: The Giants at the Pit (Narrative)
    {
      id: 'ch4-scene-16',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/54d34eff-40c2-4f77-9bd4-aa627471c8c5/0_0.png',
      content: `Leaving Malebolge behind, you approach a vast pit at the center—the final descent into the deepest part of Hell. But the pit is guarded.

Enormous forms loom in the darkness. At first you think they are towers, but as you draw closer, you realize they are giants—beings so massive that they dwarf even the landscape of Hell.

"That is Nimrod," Virgil says, pointing to one who shouts incomprehensible syllables. "He built the Tower of Babel, trying to reach Heaven through human pride. His punishment is to speak gibberish—he caused linguistic confusion, so suffers incomprehensibility forever."

Other giants stand chained: Ephialtes who warred against the gods, Briareus with his hundred arms. They are too dangerous for any circle, so they serve as guards and tools instead.

One giant, Antaeus, is unchained. Virgil negotiates with him, and Antaeus agrees to lower you both into the final pit.`,
      learningPoints: [
        {
          id: 'lp-ch4-47',
          content: 'Giants represent prideful rebellion against God. They\'re too dangerous for any circle—used as guards/tools instead.',
          category: 'thematic-analysis',
        },
        {
          id: 'lp-ch4-48',
          content: 'Nimrod speaks gibberish—his Tower of Babel caused linguistic confusion. His punishment is incomprehensibility.',
          category: 'thematic-analysis',
        },
      ],
    },

    // Scene 17: Descent to Cocytus (Narrative)
    {
      id: 'ch4-scene-17',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/54d34eff-40c2-4f77-9bd4-aa627471c8c5/0_0.png',
      content: `Antaeus bends down, his massive hand forming a platform. You and Virgil climb on, and with surprising gentleness, the giant lowers you into the pit.

The descent seems endless. The air grows colder with every moment. Your breath comes out in white clouds. The heat of the upper circles is gone—replaced by creeping, bone-deep cold.

Finally, Antaeus sets you down on solid ground. But the ground is not earth or stone—it is ice. A vast frozen lake stretches out before you, and embedded in that ice are souls, frozen in various positions and depths.

"This is Cocytus," Virgil says quietly. "The frozen lake at Hell's center. Here traitors suffer. We have descended from the hot sins of passion to the cold sins of calculation. The worst evil is not fire—it is the absolute coldness of heart."

You are standing on the threshold of treachery itself.`,
      learningPoints: [
        {
          id: 'lp-ch4-49',
          content: 'The descent from fire (Malebolge) to ice (Cocytus) represents evil\'s progression. Fraud is \'hot\' passion; treachery is \'cold\' calculation.',
          category: 'thematic-analysis',
        },
        {
          id: 'lp-ch4-50',
          content: 'Hell\'s very bottom is frozen, not fire—medieval inversion. Ultimate evil is coldness of heart, absence of love\'s warmth.',
          category: 'thematic-analysis',
        },
      ],
    },

    // Scene 18: Fraud vs. Treachery (Decision)
    {
      id: 'ch4-scene-18',
      type: 'decision',
      backgroundImage: 'https://cdn.midjourney.com/95233e45-c652-4dfd-8f87-f3b9ed748675/0_0.png',
      prompt: 'Why is treachery (Circle IX) worse than fraud (Circle VIII)?',
      context: `Both involve deception. What makes betrayal of trust worse than other fraud?`,
      choices: [
        {
          id: 'choice-relationship',
          text: 'Treachery betrays special relationships (family, country, guests, benefactors).',
          consequence: 'Correct. Treachery violates bonds that should be sacred. Fraud deceives strangers; treachery betrays intimates.',
          learningPoints: [
            {
              id: 'lp-ch4-51',
              content: 'Treachery destroys love—betraying those who trust you most. It\'s the coldest sin, closest to Satan.',
              category: 'thematic-analysis',
            },
          ],
        },
        {
          id: 'choice-premeditated',
          text: 'Treachery is premeditated—calculated, not impulsive.',
          consequence: 'True. Traitors plan betrayals carefully. Cold calculation is worse than hot passion.',
          learningPoints: [
            {
              id: 'lp-ch4-52',
              content: 'Premeditation makes sin worse. Treachery requires sustained evil intent—not momentary weakness.',
              category: 'thematic-analysis',
            },
          ],
        },
        {
          id: 'choice-fraud-worse',
          text: 'Actually, fraud seems worse—it affects more people.',
          consequence: 'Dante disagrees. Treachery\'s intensity (depth of betrayal) exceeds fraud\'s breadth (number affected).',
          learningPoints: [
            {
              id: 'lp-ch4-53',
              content: 'Medieval ethics valued quality over quantity. Betraying one intimate is worse than deceiving many strangers.',
              category: 'historical-context',
            },
          ],
        },
      ],
      learningPoints: [
        {
          id: 'lp-ch4-54',
          content: 'Hell\'s structure is moral: incontinence (weakness) → violence (malice) → fraud (intelligent evil) → treachery (betrayal of love). Each level colder, more calculated.',
          category: 'thematic-analysis',
        },
      ],
    },

    // Scene 19: Types of Fraud Matching (Timeline Game)
    {
      id: 'ch4-scene-19',
      type: 'timeline-game',
      backgroundImage: 'https://cdn.midjourney.com/978729bf-2631-42a5-8505-f93792e8fe7f/0_0.png',
      prompt: 'Order the 10 bolgias of Malebolge from entrance to center',
      timelineEvents: [
        {
          id: 'bolgia-1',
          title: 'Bolgia 1: Panders and Seducers',
          year: 1,
          description: 'Whipped by demons in two lines, marching eternally. They exploited others through seduction or sold the dignity of others.',
        },
        {
          id: 'bolgia-2',
          title: 'Bolgia 2: Flatterers',
          year: 2,
          description: 'Immersed in excrement. Flatterers produced verbal filth, so drown in literal filth.',
        },
        {
          id: 'bolgia-3',
          title: 'Bolgia 3: Simoniacs',
          year: 3,
          description: 'Upside-down in stone holes, feet on fire. They sold Church offices (simony).',
        },
        {
          id: 'bolgia-4',
          title: 'Bolgia 4: Sorcerers and Diviners',
          year: 4,
          description: 'Heads twisted backward. They tried to see the future, so cannot see forward.',
        },
        {
          id: 'bolgia-5',
          title: 'Bolgia 5: Barrators (Corrupt Politicians)',
          year: 5,
          description: 'Boiling pitch, guarded by Malebranche demons. Corrupt officials made secret deals, so hidden in boiling tar.',
        },
        {
          id: 'bolgia-6',
          title: 'Bolgia 6: Hypocrites',
          year: 6,
          description: 'Walking slowly in gilded lead cloaks. They appeared golden outside but were heavy with sin inside.',
        },
        {
          id: 'bolgia-7',
          title: 'Bolgia 7: Thieves',
          year: 7,
          description: 'Bitten by serpents, burning to ash, reforming. Identity theft—serpents steal human forms.',
        },
        {
          id: 'bolgia-8',
          title: 'Bolgia 8: Fraudulent Counselors',
          year: 8,
          description: 'Wrapped in flames, tongues of fire. Evil advice given in secret, so encased in flame. Ulysses is here.',
        },
        {
          id: 'bolgia-9',
          title: 'Bolgia 9: Sowers of Discord',
          year: 9,
          description: 'Hacked by demons, wounds heal, hacked again. They divided communities, so eternally divided themselves.',
        },
        {
          id: 'bolgia-10',
          title: 'Bolgia 10: Falsifiers',
          year: 10,
          description: 'Diseased, scratching, rotting. Alchemists, counterfeiters, perjurers. They corrupted truth/reality.',
        },
      ],
      successThreshold: 70,
      learningPoints: [
        {
          id: 'lp-ch4-55',
          content: 'The ten bolgias systematically categorize fraud. Dante creates a taxonomy of deception—medieval scholastic method applied to sin.',
          category: 'plot-structure',
        },
        {
          id: 'lp-ch4-56',
          content: 'Fraudulent counselors (Bolgia 8) and sowers of discord (Bolgia 9) are deepest—intellectual sins worse than physical theft or seduction.',
          category: 'thematic-analysis',
        },
      ],
    },

    // Scene 20: Understanding Fraud (Cause-Effect)
    {
      id: 'ch4-scene-20',
      type: 'cause-effect',
      backgroundImage: 'https://cdn.midjourney.com/95233e45-c652-4dfd-8f87-f3b9ed748675/0_0.png',
      prompt: 'Match each type of fraud to its contrapasso',
      pairs: [
        {
          id: 'pair-1',
          cause: 'Simony: Selling Church offices for money',
          effect: 'Upside-down in stone holes with feet burning',
          explanation: 'They inverted spiritual priorities. Upside-down position reflects inversion; fire burns where they walked—their evil path aflame.',
        },
        {
          id: 'pair-2',
          cause: 'Sorcery: Attempting to see the future through forbidden means',
          effect: 'Heads twisted backward, unable to see forward',
          explanation: 'They perverted vision. Now cannot see ahead—only behind. Perfect symbolic punishment for false prophecy.',
        },
        {
          id: 'pair-3',
          cause: 'Hypocrisy: Appearing virtuous while hiding vice',
          effect: 'Gilded lead cloaks, beautiful outside but crushing inside',
          explanation: 'External beauty concealed inner corruption. Cloaks replicate their duality—golden appearance, leaden reality.',
        },
        {
          id: 'pair-4',
          cause: 'Theft: Stealing others\' property and identity',
          effect: 'Bitten by serpents, bodies transformed, identities stolen',
          explanation: 'They stole from others. Serpents steal their human forms—losing self mirrors their thefts.',
        },
        {
          id: 'pair-5',
          cause: 'Fraudulent counsel: Giving deceptive advice',
          effect: 'Wrapped in flames, hidden like tongues of fire',
          explanation: 'They hid truth in false words. Now hidden in flames—their cunning intellect burns them.',
        },
        {
          id: 'pair-6',
          cause: 'Sowing discord: Dividing communities, families, religions',
          effect: 'Hacked apart by demons, wounds heal, cycle repeats',
          explanation: 'They divided others. Now eternally divided themselves—bodies split, reassemble, split again.',
        },
      ],
      distractors: [
        'Blown by violent winds',
        'Frozen in ice unable to move',
      ],
      learningPoints: [
        {
          id: 'lp-ch4-57',
          content: 'Fraud\'s contrapasso is intellectual: reversals, transformations, hidden made visible. Punishments mirror the mind\'s deceptions.',
          category: 'thematic-analysis',
        },
        {
          id: 'lp-ch4-58',
          content: 'Dante\'s creativity peaks in Malebolge. Ten unique punishments show his imaginative range—allegory becomes art.',
          category: 'literary-technique',
        },
      ],
      events: {
        onExit: [
          {
            type: 'quiz',
            componentId: 'quiz-inferno-chapter-4',
            condition: { type: 'if-not-completed' },
          },
        ],
      },
    },
  ],

  endQuiz: chapter4Quiz,
};

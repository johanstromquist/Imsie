import type { Quiz } from '../../../types';

export const chapter5Quiz: Quiz = {
  id: 'edda-ch5-quiz',
  title: 'Chapter 5: Ragnarök - The Twilight of the Gods - Quiz',
  description:
    'Test your knowledge of the prophesied end of the world, the final battle, and the rebirth that follows.',
  passingScore: 70,
  allowRetry: true,

  questions: [
    // Multiple Choice Questions
    {
      id: 'q1',
      question: 'What is the Fimbulwinter?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'A single winter that lasts one hundred years',
        'Three winters with no summer in between, accompanied by moral collapse',
        'The first snowfall that signals the gods to prepare for battle',
        'A magical winter created by frost giants to weaken the gods',
      ],
      correctAnswer: 'Three winters with no summer in between, accompanied by moral collapse',
      explanation:
        'The Fimbulwinter (Mighty Winter) consists of three consecutive winters with no summer, during which brothers kill brothers and all social bonds break. This represents both climate catastrophe and moral decay preceding Ragnarök.',
      relatedLearningPoints: ['edda-ch5-1-fimbulwinter', 'edda-ch5-1-inevitability'],
    },

    {
      id: 'q2',
      question: 'Which powerful beings break free from their bonds at the beginning of Ragnarök?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'Thor and Odin',
        'Fenrir the wolf and Loki the trickster',
        'The frost giants and fire giants',
        'Baldr and Höðr from Hel',
      ],
      correctAnswer: 'Fenrir the wolf and Loki the trickster',
      explanation:
        'Both Fenrir (bound by the magical chain Gleipnir) and Loki (imprisoned with poison dripping on him) break free from their restraints, marking the beginning of Ragnarök. Their escape represents chaos finally overwhelming the order the gods created.',
      relatedLearningPoints: ['edda-ch5-3-fenrir', 'edda-ch5-3-loki-punishment'],
    },

    {
      id: 'q3',
      question: 'What is the Gjallarhorn and who sounds it?',
      type: 'multiple-choice',
      points: 10,
      options: [
        "Thor's horn that he uses to call thunder",
        'A musical instrument that Loki steals from the gods',
        'Heimdall\'s horn whose sound reaches all nine worlds, signaling Ragnarök',
        "Odin's horn used to summon the einherjar to Valhalla",
      ],
      correctAnswer: "Heimdall's horn whose sound reaches all nine worlds, signaling Ragnarök",
      explanation:
        'Heimdall, the watchman of the gods, sounds the Gjallarhorn when he sees the armies of chaos approaching. The horn\'s blast reaches all nine worlds simultaneously, alerting everyone that the final battle has begun.',
      relatedLearningPoints: ['edda-ch5-5-gjallarhorn', 'edda-ch5-5-preparation'],
    },

    {
      id: 'q4',
      question: 'How does Thor die at Ragnarök?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'Fenrir the wolf devours him like his father Odin',
        'Surtr burns him with his flaming sword',
        'He is killed in battle by frost giants',
        'He kills Jörmungandr but dies from the serpent\'s poison',
      ],
      correctAnswer: "He kills Jörmungandr but dies from the serpent's poison",
      explanation:
        'Thor defeats his ancient enemy Jörmungandr, the world serpent, but is poisoned by its venom. He staggers back nine steps before falling dead, his final act being to protect the world by taking the poison into himself.',
      relatedLearningPoints: ['edda-ch5-7-matchups', 'edda-ch5-8-thor'],
    },

    {
      id: 'q5',
      question: 'Who avenges Odin\'s death by killing Fenrir?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'Thor with his hammer Mjölnir',
        'Vidar the Silent, Odin\'s son',
        'Heimdall with his sword',
        'Tyr the one-handed god of war',
      ],
      correctAnswer: "Vidar the Silent, Odin's son",
      explanation:
        'Vidar, called the Silent God, immediately avenges his father by tearing Fenrir\'s jaws apart. He uses his special shoe (made from all the leather scraps ever discarded) to hold down the wolf\'s lower jaw while ripping the upper jaw away.',
      relatedLearningPoints: ['edda-ch5-8-odin', 'edda-ch5-11-connections'],
    },

    {
      id: 'q6',
      question: 'What happens to Heimdall and Loki at Ragnarök?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'They reconcile and fight together against the giants',
        'They kill each other in combat',
        'Heimdall kills Loki and survives the battle',
        'Loki escapes while Heimdall dies defending Bifrost',
      ],
      correctAnswer: 'They kill each other in combat',
      explanation:
        'Heimdall and Loki, ancient enemies representing order and chaos, fight to mutual destruction. Each delivers a fatal blow to the other, and they fall together, their blood mingling--symbolizing that pure order and pure chaos cannot coexist.',
      relatedLearningPoints: ['edda-ch5-8-heimdall-loki', 'edda-ch5-11-fate'],
    },

    {
      id: 'q7',
      question: 'Who destroys the nine worlds with fire after the gods have fallen?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'Fenrir the wolf',
        'Loki the trickster',
        'Surtr the fire giant',
        'The dragon Niðhöggr',
      ],
      correctAnswer: 'Surtr the fire giant',
      explanation:
        'Surtr, the fire giant from Muspelheim, has waited since before creation for this moment. After the gods fall, he raises his blazing sword and sets the nine worlds on fire, consuming everything in flame before the earth sinks beneath the sea.',
      relatedLearningPoints: ['edda-ch5-10-surtr', 'edda-ch5-10-totality'],
    },

    {
      id: 'q8',
      question: 'What survives Surtr\'s fire to shelter the human survivors?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'The hall of Valhalla',
        'A hidden cave in the mountains',
        'Yggdrasil, the world tree',
        'The ship Naglfar',
      ],
      correctAnswer: 'Yggdrasil, the world tree',
      explanation:
        'Yggdrasil, though damaged and burned, survives the fire. Two humans, Lif and Lifthrasir (Life and Eager for Life), hide in its branches and are protected from the flames. They emerge after the fire to repopulate the reborn world.',
      relatedLearningPoints: ['edda-ch5-13-yggdrasil', 'edda-ch5-13-survivors'],
    },

    {
      id: 'q9',
      question: 'Which god returns from Hel after Ragnarök, reborn with the world?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'Odin, resurrected by his sons',
        'Thor, healed from the serpent\'s poison',
        'Baldr, the beautiful god of light',
        'Heimdall, who survived the battle',
      ],
      correctAnswer: 'Baldr, the beautiful god of light',
      explanation:
        'Baldr, who died before Ragnarök and was trapped in Hel, returns in the reborn world. His return symbolizes redemption and the restoration of goodness. He comes with his brother Höðr, and they are reconciled.',
      relatedLearningPoints: ['edda-ch5-13-survivors', 'edda-ch5-13-cyclical'],
    },

    // True/False Questions
    {
      id: 'q10',
      question: 'The gods knew they would lose the battle of Ragnarök but fought anyway.',
      type: 'true-false',
      points: 10,
      options: ['True', 'False'],
      correctAnswer: 'True',
      explanation:
        'True. The gods had heard the prophecy from the völva and knew their fate. Odin learned it when he drank from Mimir\'s well. They fought not because they could win, but because courage and honor demanded it--embodying the Norse heroic ideal.',
      relatedLearningPoints: ['edda-ch5-5-preparation', 'edda-ch5-14-courage'],
    },

    {
      id: 'q11',
      question:
        'Norse mythology views the destruction of the world as permanent with no possibility of renewal.',
      type: 'true-false',
      points: 10,
      options: ['True', 'False'],
      correctAnswer: 'False',
      explanation:
        'False. Norse cosmology is cyclical--after the destruction of Ragnarök, the earth rises from the sea, green and renewed. Surviving gods and humans build a new world. This cycle of death and rebirth is central to Norse mythology.',
      relatedLearningPoints: ['edda-ch5-13-cyclical', 'edda-ch5-6-cyclical'],
    },

    {
      id: 'q12',
      question: 'The Völuspá is an ancient poem that prophesies the events of Ragnarök.',
      type: 'true-false',
      points: 10,
      options: ['True', 'False'],
      correctAnswer: 'True',
      explanation:
        'True. The Völuspá (Prophecy of the Seer) is one of the most important poems in the Poetic Edda. It presents the entire history of the cosmos from creation through Ragnarök to rebirth, told from the perspective of a völva (seer).',
      relatedLearningPoints: ['edda-ch5-12-voluspa', 'edda-ch5-12-poetry'],
    },

    // Short Answer Questions
    {
      id: 'q13',
      question: 'What are the names of the two human survivors who repopulate the world after Ragnarök?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'Líf and Lífþrasir',
        'Baldr and Höðr',
        'Modi and Magni',
        'Askr and Embla',
      ],
      correctAnswer: 'Líf and Lífþrasir',
      explanation:
        'Líf and Lífþrasir (whose names mean "Life" and "Eager for Life") hide in Yggdrasil during the fire and emerge to repopulate the reborn earth. Their names themselves symbolize the persistence of life through catastrophe.',
      relatedLearningPoints: ['edda-ch5-13-survivors'],
    },

    {
      id: 'q14',
      question:
        'What is the name of the plain where the final battle of Ragnarök takes place?',
      type: 'short-answer',
      points: 10,
      correctAnswer: ['Vigrid', 'vigrid', 'the plain of Vigrid', 'The plain of Vigrid', 'The Plains of Vigrid', 'the plains of Vigrid'],
      explanation:
        'Vigrid is the vast plain (stretching a hundred leagues in all directions) where all the forces converge for the final battle. It was prophesied as the destined battlefield for Ragnarök.',
      relatedLearningPoints: ['edda-ch5-4-vigrid'],
    },

    // Self-Assessment Questions
    {
      id: 'q15',
      question:
        'Analyze the Norse heroic ideal as demonstrated in Ragnarök. What does it mean that the gods fight despite knowing they will lose? How does this reflect Viking Age values about courage, fate, and honorable action?',
      type: 'self-assessment',
      points: 10,
      modelAnswer:
        'The gods\' decision to fight at Ragnarök despite knowing their fate embodies the ultimate expression of the Norse heroic ideal. Odin learned from the völva that the gods would fall, yet he prepared the einherjar in Valhalla and led the charge anyway. This demonstrates that in Norse culture, courage is not about winning—it\'s about how you face the inevitable. The value lies in the struggle itself, in maintaining honor and dignity even in defeat. This reflects Viking Age values where reputation and glory mattered more than survival. A warrior who died bravely earned eternal fame in the sagas, while one who lived as a coward was forgotten. The gods model this perfectly: they cannot escape wyrd (fate), but they can choose how to meet it. This worldview likely helped Vikings face the harsh realities of their environment—brutal weather, dangerous seas, constant warfare—by elevating courage above outcomes.',
      assessmentCriteria: [
        {
          id: 'criterion-knowledge',
          text: 'Explained that the gods knew they would lose but fought anyway',
          points: 2,
        },
        {
          id: 'criterion-heroic-ideal',
          text: 'Identified that courage means facing fate with honor, not avoiding it or winning',
          points: 3,
        },
        {
          id: 'criterion-values',
          text: 'Connected this to Viking Age cultural values (reputation, glory, honor over survival)',
          points: 3,
        },
        {
          id: 'criterion-wyrd',
          text: 'Discussed the concept of wyrd/fate and how you cannot escape destiny but can control your response',
          points: 2,
        },
      ],
      explanation:
        'The Norse heroic ideal, as shown in Ragnarök, teaches that true courage is not about victory but about facing inevitable defeat with honor and dignity. This shaped Viking culture profoundly, creating warriors who valued reputation and glorious death over survival.',
      relatedLearningPoints: [
        'edda-ch5-14-courage',
        'edda-ch5-5-preparation',
        'edda-ch5-10-inevitability',
      ],
    },

    {
      id: 'q16',
      question:
        'Explain the significance of the cyclical nature of Norse cosmology as shown in Ragnarök. How does the world\'s rebirth after total destruction relate to Norse understanding of time, existence, and the relationship between order and chaos?',
      type: 'self-assessment',
      points: 10,
      modelAnswer:
        'Norse cosmology presents a fundamentally cyclical view of existence rather than linear progression. Unlike Christianity (creation → judgment → eternal afterlife) or Greek thought (immortal gods presiding forever), Norse mythology shows that even cosmic order is temporary. The world begins when order (the gods) imposes structure on chaos (Ymir), reaches a golden age, declines after Baldr\'s death, is destroyed at Ragnarök, and then is reborn—only to presumably repeat the cycle. This reflects several Norse concepts: First, time is cyclical, seen in the seasonal rhythms crucial to Nordic life (long winters, brief summers). Second, neither order nor chaos is permanent or absolute—they exist in dynamic tension. The gods don\'t represent pure "good" defeating "evil"; they are order temporarily holding back chaos, which will eventually return. Third, destruction is necessary for renewal. The fire that ends the old world purifies and makes way for the new. Baldr returning in the new world suggests past goodness isn\'t lost but reborn. This worldview may have helped Norse peoples endure catastrophes—raids, harsh winters, plagues—by framing disaster not as final but as part of natural cycles where renewal follows destruction.',
      assessmentCriteria: [
        {
          id: 'criterion-cyclical',
          text: 'Identified that Norse cosmology is cyclical rather than linear (destruction → rebirth → repetition)',
          points: 3,
        },
        {
          id: 'criterion-order-chaos',
          text: 'Explained the dynamic relationship between order and chaos (neither is permanent)',
          points: 2,
        },
        {
          id: 'criterion-renewal',
          text: 'Discussed how destruction enables renewal (fire purifies, Baldr returns, new world emerges)',
          points: 3,
        },
        {
          id: 'criterion-cultural',
          text: 'Connected cyclical cosmology to Norse culture, environment, or understanding of time',
          points: 2,
        },
      ],
      explanation:
        'The cyclical nature of Ragnarök—total destruction followed by rebirth—reflects a worldview where neither order nor chaos is permanent. This cycle may have provided psychological resilience to Norse peoples facing harsh environments and frequent disasters by framing catastrophe as temporary and necessary for renewal.',
      relatedLearningPoints: [
        'edda-ch5-13-cyclical',
        'edda-ch5-13-survivors',
        'edda-ch5-15-comparison',
      ],
    },
  ],
};

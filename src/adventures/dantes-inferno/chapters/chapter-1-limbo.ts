import type { Chapter } from '../../../types';
import { chapter1Quiz } from '../quizzes/chapter-1-quiz';

/**
 * Chapter 1: Limbo & The Virtuous Pagans
 *
 * First Circle of Hell - where virtuous non-Christians reside,
 * including classical poets and philosophers. Introduces the
 * concept of contrapasso and medieval Christian theology.
 */
export const chapter1: Chapter = {
  id: 'inferno-chapter-1',
  title: 'Chapter 1: Limbo & The Virtuous Pagans',
  description: 'Enter the First Circle where noble souls who lived before Christ or without baptism reside in eternal longing.',

  learningObjectives: [
    'Understand medieval Christian theology of salvation and limbo',
    'Recognize classical influences on Dante and medieval culture',
    'Analyze the concept of contrapasso (punishment fitting the sin)',
    'Explore Dante\'s respect for pre-Christian wisdom',
  ],

  scenes: [
    // Scene 1: The Vestibule of the Uncommitted
    {
      id: 'inferno-ch1-scene-1',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/d7649e87-9b3a-48db-8c03-491134bd0473/0_0.png',
      image: 'https://cdn.midjourney.com/4b3e5c0c-406c-40c0-af85-f28b890868cb/0_0.png',

      content: `As you pass through the Gate of Hell, you enter a gray, misty wasteland. This is the Vestibule—not truly part of Hell's circles, but a realm of the uncommitted.

Souls run endlessly after a blank banner, driven forward by wasps and hornets. Their blood feeds the worms beneath their feet. These are those who never took a stand in life, who remained neutral in times of moral crisis.

Among them you recognize historical figures who refused to choose sides. Celestino V, the pope who abdicated rather than govern. The uncommitted angels who took neither God's side nor Satan's during the rebellion.

Virgil hurries you past them. "These are despised by Heaven and by Hell alike," he says with contempt. "Speak not of them, but look and pass."`,

      learningPoints: [
        {
          id: 'lp-ch1-1',
          content: 'The vestibule punishes those who never took moral stances. Dante despised neutrality—"The hottest places in hell are reserved for those who maintain neutrality in times of moral crisis."',
          category: 'thematic-analysis',
        },
        {
          id: 'lp-ch1-2',
          content: 'Contrapasso (punishment fitting crime) begins: They followed nothing in life, so chase a meaningless banner in death. They avoided pain in life, so suffer stings eternally.',
          category: 'literary-technique',
        },
      ],
    },

    // Scene 2: Crossing the Acheron
    {
      id: 'inferno-ch1-scene-2',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/cca577f8-e00d-45b1-8f4a-9fe110734037/0_0.png',
      image: 'https://cdn.midjourney.com/014b8a79-ad5d-4ff7-9c37-4d6ff0d0ab85/0_0.png',

      content: `You approach the River Acheron, the first boundary separating the living world from Hell proper. Dark waters churn beneath a black sky.

On the shore, a terrible ferryman awaits. Charon is skeletal and demonic, his hollow eyes burning with rage. When he sees you, he shouts, "Woe to you, depraved spirits! You shall never see Heaven! I come to lead you to the other shore, into eternal darkness, heat, and cold!"

He refuses to take you—a living soul—across. But Virgil steps forward with authority: "Charon, do not torment yourself. This journey is willed where what is willed must be. Ask no more."

At these words, the ferryman falls silent. Suddenly, an earthquake shakes the ground. Thunder rolls. You faint from the overwhelming terror.

When you awaken, you find yourself on the other side of the river. The crossing is complete.`,

      learningPoints: [
        {
          id: 'lp-ch1-3',
          content: 'Rivers divide Hell\'s regions. Acheron separates the living world from Hell proper. Classical mythology (Charon, river crossings) merges with Christian Hell.',
          category: 'historical-context',
        },
        {
          id: 'lp-ch1-4',
          content: 'Dante faints when overwhelmed—a recurring motif showing human frailty before divine mysteries.',
          category: 'character-analysis',
        },
      ],

      inlineAnnotations: [
        {
          id: 'acheron-annotation',
          text: 'Acheron',
          tooltip: {
            title: 'River Acheron',
            content: 'In Greek mythology, Acheron was one of the five rivers of the underworld. Souls of the dead were ferried across by Charon. Dante adapts this classical geography for his Christian Hell.',
            category: 'historical-context',
          },
        },
        {
          id: 'charon-annotation',
          text: 'Charon',
          tooltip: {
            title: 'Charon the Ferryman',
            content: 'Ancient Greek psychopomp (guide of souls) who transports the dead across the river Acheron. Traditionally paid with a coin placed in the corpse\'s mouth.',
            category: 'historical-context',
          },
        },
      ],
    },

    // Scene 3: Entering Limbo
    {
      id: 'inferno-ch1-scene-3',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/7d550a36-7f14-47d5-adaf-ecdd6292b154/0_0.png',
      image: 'https://cdn.midjourney.com/e1b9a924-4685-480f-8af6-e05c02ec5e8a/0_0.png',

      content: `You descend into the First Circle: Limbo.

This place is unlike the horrors you glimpsed beyond. Here there is no screaming, no fire, no torment. Only sighs—endless, melancholic sighs that tremble in the air.

The atmosphere is neither bright nor dark, but perpetually twilight. Souls walk in dignified groups, conversing quietly. There is sadness here, but no agony. These spirits suffer no active punishment.

Yet their faces bear unmistakable grief. They know that Paradise exists, that perfect joy is possible—but they can never reach it. This knowledge is their torment: eternal longing without fulfillment, eternal awareness of what they cannot have.

"This is the sorrow of Limbo," Virgil explains. "We live in desire without hope."`,

      learningPoints: [
        {
          id: 'lp-ch1-5',
          content: 'Limbo holds virtuous non-Christians: those born before Christ, unbaptized infants, and righteous pagans. Their only pain is knowing Paradise exists but they can\'t enter.',
          category: 'historical-context',
        },
        {
          id: 'lp-ch1-6',
          content: 'This is the "contrapasso" for Limbo: They lived virtuously but lacked Christian revelation. Their punishment is absence—eternal unfulfillment, not torture.',
          category: 'thematic-analysis',
        },
      ],
    },

    // Scene 4: The Noble Castle (Map Exploration)
    {
      id: 'inferno-ch1-scene-4',
      type: 'map-exploration',
      backgroundImage: 'https://cdn.midjourney.com/7d550a36-7f14-47d5-adaf-ecdd6292b154/0_0.png',
      mapImage: 'https://cdn.midjourney.com/52bf3075-dbb4-4c6a-966d-64cb680788fe/0_0.png',

      prompt: 'Explore the noble castle to discover the great minds of antiquity',

      locations: [
        {
          id: 'location-castle',
          name: 'The Illuminated Castle',
          x: 50,
          y: 30,
          content: `A castle with seven concentric walls and seven gates rises before you, illuminated by reason's light rather than divine grace.

The seven walls represent the seven liberal arts: grammar, logic, rhetoric, arithmetic, geometry, music, and astronomy. These disciplines protect and ennoble the minds within, yet cannot save them.

Inside reside the greatest minds of antiquity, conversing eternally in dignified discourse.`,
        },
        {
          id: 'location-philosophers',
          name: 'The Philosophers\' Grove',
          x: 30,
          y: 50,
          content: `In a peaceful grove, the great philosophers debate eternally. Socrates questions, Plato contemplates, and Aristotle stands at their center.

Dante calls Aristotle "the master of those who know"—the highest honor for a pagan thinker. His works, transmitted through Arabic scholars and Christianized by Thomas Aquinas, dominated medieval philosophy.

These men sought truth through reason alone, and came remarkably close to divine wisdom—yet without revelation, they could never complete the journey.`,
        },
        {
          id: 'location-poets',
          name: 'The Poets\' Circle',
          x: 70,
          y: 50,
          content: `Here stand the five greatest poets of antiquity: Homer with his blind eyes, Horace with his satires, Ovid with his transformations, and Lucan with his civil war epic.

Virgil rejoins them, and they turn to acknowledge you. "Make way for the sixth great poet," Homer declares. You are humbled to be accepted among these masters, yet aware of your unworthiness.

This bold self-positioning shows both Dante's confidence in his literary achievement and his humility—he places himself last among the immortals.`,
        },
        {
          id: 'location-scientists',
          name: 'The Scientists and Mathematicians',
          x: 40,
          y: 70,
          content: `Euclid demonstrates his geometric proofs on the ground. Ptolemy studies the heavens. Hippocrates and Galen discuss the nature of medicine and the human body.

Medieval Europe rediscovered classical science through Arabic translations. These figures represent human reason's peak achievement—the power of observation, logic, and inquiry.

Yet even perfect knowledge of the natural world cannot, by itself, lead to salvation.`,
        },
        {
          id: 'location-heroes',
          name: 'The Heroes and Leaders',
          x: 60,
          y: 70,
          content: `Great warriors and noble leaders from classical literature stand together: Hector of Troy, Aeneas the founder of Rome, Julius Caesar the conqueror.

Their nobility of character counted for much in Dante's eyes. Virtue transcended the battlefield—courage, loyalty, and honor were worthy even without Christian faith.

These are the models of heroism that inspired medieval chivalry, yet they too remain in eternal twilight.`,
        },
        {
          id: 'location-saladin',
          name: 'Saladin and Avicenna',
          x: 50,
          y: 85,
          content: `Surprisingly, Dante includes Muslim figures here: Saladin, the warrior-king who fought the Crusaders with honor, and Avicenna, the Persian philosopher-physician who preserved and expanded Aristotle's works.

Including Muslims in noble Limbo was radical in Crusade-era Europe. Dante recognized virtue and wisdom outside Christianity, challenging the prejudices of his time.

Through Arabic translations, Islamic scholars transmitted classical knowledge back to medieval Europe. Dante acknowledges this intellectual debt.`,
        },
        {
          id: 'location-meadow',
          name: 'The Green Meadow',
          x: 50,
          y: 60,
          content: `A verdant meadow spreads beneath the castle, where souls walk and converse in gentle groups. There is no pain here, only the soft melancholy of unfulfilled longing.

This meadow evokes the Elysian Fields from classical mythology—the afterlife for virtuous souls in Greek and Roman belief. Dante merges pagan and Christian concepts, creating a unique space that honors both traditions.

It is beautiful, peaceful, and eternally sad—a place of dignity without joy, knowledge without salvation.`,
        },
      ],

      requiredLocations: ['location-philosophers', 'location-poets', 'location-scientists', 'location-saladin'],

      learningPoints: [
        {
          id: 'lp-ch1-9',
          content: 'Seven walls represent the seven liberal arts (grammar, logic, rhetoric, arithmetic, geometry, music, astronomy). Knowledge protects but can\'t save.',
          category: 'literary-technique',
        },
        {
          id: 'lp-ch1-10',
          content: 'Aristotle dominated medieval philosophy (via Thomas Aquinas). Dante places him highest among pagans—"master of those who know."',
          category: 'historical-context',
        },
        {
          id: 'lp-ch1-11',
          content: 'Dante includes himself among the greatest poets—bold self-positioning that also shows humility (he\'s #6, they\'re the masters).',
          category: 'character-analysis',
        },
        {
          id: 'lp-ch1-12',
          content: 'Medieval Europe rediscovered classical science through Arabic translations. These figures represent human reason\'s peak achievement.',
          category: 'historical-context',
        },
        {
          id: 'lp-ch1-13',
          content: 'Virtuous pagans include warriors and leaders. Nobility of character counted, even without Christian faith.',
          category: 'thematic-analysis',
        },
        {
          id: 'lp-ch1-14',
          content: 'Including Muslims in Limbo was radical. Dante recognized virtue and wisdom outside Christianity—challenging Crusade-era prejudices.',
          category: 'historical-context',
        },
        {
          id: 'lp-ch1-15',
          content: 'The meadow evokes the Elysian Fields from classical mythology. Dante merges pagan and Christian afterlife concepts.',
          category: 'literary-technique',
        },
      ],
    },

    // Scene 5: Meeting the Great Poets (Dialogue)
    {
      id: 'inferno-ch1-scene-5',
      type: 'dialogue',
      backgroundImage: 'https://cdn.midjourney.com/7d550a36-7f14-47d5-adaf-ecdd6292b154/0_0.png',
      image: 'https://cdn.midjourney.com/7b028e38-4591-4128-8a30-4e6a69c22110/0_0.png',

      character: {
        id: 'homer',
        name: 'Homer',
        portrait: 'https://cdn.midjourney.com/30204d63-d55d-478e-ab82-2f0a526ae784/0_0.png',
        description: 'Ancient Greek epic poet, author of the Iliad and Odyssey (c. 8th century BCE)',
      },

      dialogueTree: {
        id: 'node-homer-1',
        speaker: 'homer',
        text: 'Virgil speaks of you, Dante. He says you carry the burden of poetry forward into your modern age. Tell me, what drives men to write epics in your time?',

        responses: [
          {
            id: 'response-truth',
            text: 'To preserve truth and condemn injustice.',
            nextNodeId: 'node-homer-2',
            learningPoints: [
              {
                id: 'lp-ch1-16',
                content: 'Epic poetry traditionally records heroic deeds. Dante innovates: His epic records moral geography and political critique.',
                category: 'literary-technique',
              },
            ],
          },
          {
            id: 'response-divine',
            text: 'To explore the divine mysteries.',
            nextNodeId: 'node-homer-3',
            learningPoints: [
              {
                id: 'lp-ch1-17',
                content: 'Classical epics featured gods but lacked monotheistic salvation. Dante\'s epic integrates Catholic cosmology with epic tradition.',
                category: 'literary-technique',
              },
            ],
          },
          {
            id: 'response-virgil',
            text: 'Because Virgil inspired me.',
            nextNodeId: 'node-homer-4',
            learningPoints: [
              {
                id: 'lp-ch1-18',
                content: 'Literature builds on literature. Dante sees himself continuing Homer → Virgil → Ovid → Dante lineage.',
                category: 'literary-technique',
              },
            ],
          },
        ],

        allNodes: [
          {
            id: 'node-homer-2',
            speaker: 'homer',
            text: 'Ah, so poetry becomes a weapon against corruption. In my time, we sang of heroes to inspire virtue. You sing of sinners to inspire fear and reform.',
            nextNodeId: 'node-homer-5',
          },
          {
            id: 'node-homer-3',
            speaker: 'homer',
            text: 'The divine mysteries... We too pondered the gods, though we saw them as capricious and flawed. Your God is different—singular, perfect, unreachable by reason alone.',
            nextNodeId: 'node-homer-5',
          },
          {
            id: 'node-homer-4',
            speaker: 'homer',
            text: 'Virgil is worthy of such devotion. He learned from my verses, then surpassed me in craft and depth. And now you learn from him. This is how greatness perpetuates.',
            nextNodeId: 'node-homer-5',
          },
          {
            id: 'node-homer-5',
            speaker: 'homer',
            text: 'Tell me, young poet—does it trouble you that we are here? That those you admire are denied your Heaven?',
            responses: [
              {
                id: 'response-yes',
                text: 'Yes. It seems unjust that virtue goes unrewarded.',
                nextNodeId: 'node-homer-6',
              },
              {
                id: 'response-mystery',
                text: 'It is a divine mystery beyond my understanding.',
                nextNodeId: 'node-homer-7',
              },
              {
                id: 'response-honored',
                text: 'I honor you by placing you in the least painful circle.',
                nextNodeId: 'node-homer-8',
              },
            ],
          },
          {
            id: 'node-homer-6',
            speaker: 'homer',
            text: 'Your sympathy honors us. But do not let it shake your faith. We lived by different lights, and we accept our fate with dignity.',
            isEnd: true,
          },
          {
            id: 'node-homer-7',
            speaker: 'homer',
            text: 'Spoken like a faithful son of the Church. Mystery is the refuge when reason fails—and sometimes, that is wisdom itself.',
            isEnd: true,
          },
          {
            id: 'node-homer-8',
            speaker: 'homer',
            text: 'We recognize your kindness in placing us here rather than deeper. You bend your theology as much as you dare. That is the mark of a poet—honoring truth while serving faith.',
            isEnd: true,
          },
        ],
      },

      learningPoints: [
        {
          id: 'lp-ch1-16',
          content: 'Epic poetry traditionally records heroic deeds. Dante innovates: His epic records moral geography and political critique.',
          category: 'literary-technique',
        },
      ],
    },

    // Scene 6: Virgil's Sadness
    {
      id: 'inferno-ch1-scene-6',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/7d550a36-7f14-47d5-adaf-ecdd6292b154/0_0.png',
      image: 'https://cdn.midjourney.com/f032ea8b-6ee9-412a-a598-11a032e34219/0_0.png',

      content: `As you walk through the noble company, a realization strikes you with terrible force: Virgil himself belongs here.

Your guide, your master, your inspiration—he too is denied Paradise. Born before Christ, lacking baptism, he can illuminate sin but cannot escape it. He can guide you to salvation but cannot save himself.

You see the sorrow in his eyes as he speaks: "We are lost, and afflicted only this: that without hope we live in desire."

Dante's heart breaks. These noble souls—so wise, so virtuous, so worthy of love—are eternally separated from God not by wickedness but by timing. The tragedy of their fate moves you deeply.

Virgil notices your tears. "Do not weep for us," he says gently. "We have accepted what we are. Now come—there is much to see, and you must complete your journey."`,

      learningPoints: [
        {
          id: 'lp-ch1-19',
          content: 'Virgil guides Dante but cannot save himself. This irony pervades Inferno: Reason illuminates sin but can\'t provide grace.',
          category: 'character-analysis',
        },
        {
          id: 'lp-ch1-20',
          content: 'Dante\'s compassion for the damned marks him as unusual. Most medieval visions of Hell celebrate punishment; Dante questions justice.',
          category: 'thematic-analysis',
        },
      ],
    },

    // Scene 7: Why Limbo? (Primary Source)
    {
      id: 'inferno-ch1-scene-7',
      type: 'primary-source',
      backgroundImage: 'https://cdn.midjourney.com/7d550a36-7f14-47d5-adaf-ecdd6292b154/0_0.png',

      prompt: 'Analyze this medieval theological document',

      source: {
        title: 'Extra Ecclesiam nulla salus (Outside the Church there is no salvation)',
        author: 'Medieval Church Doctrine',
        date: 'Formalized at Council of Florence, 1442',
        type: 'text',
        content: `"The most Holy Roman Church firmly believes, professes and preaches that none of those existing outside the Catholic Church, not only pagans, but also Jews and heretics and schismatics, can have a share in life eternal; but that they will go into the eternal fire which was prepared for the devil and his angels, unless before death they are joined with Her.

So important is the unity of this ecclesiastical body that only those remaining within this unity can profit by the sacraments of the Church unto salvation, and they alone can receive an eternal recompense for their fasts, their almsgivings, their other works of Christian piety and the duties of a Christian soldier. No one, let his almsgiving be as great as it may, no one, even if he pour out his blood for the Name of Christ, can be saved, unless he remain within the bosom and the unity of the Catholic Church."`,
        citation: 'Council of Florence, Cantate Domino, 1442',
      },

      questions: [
        {
          id: 'limbo-theology-q1',
          question: 'According to medieval theology as expressed in this document, could virtuous pagans reach Heaven?',
          type: 'multiple-choice',
          options: [
            'Yes, if they lived virtuously',
            'No, because they lacked baptism and Christian faith',
            'Yes, if they believed in one God',
            'Only if they died before Christ\'s time',
          ],
          correctAnswer: 'No, because they lacked baptism and Christian faith',
          explanation: 'The Council clearly states that those outside the Catholic Church, including pagans, cannot achieve salvation regardless of their virtue. This strict doctrine troubled many medieval intellectuals.',
        },
        {
          id: 'limbo-theology-q2',
          question: 'Why does Dante seem uncomfortable with this doctrine?',
          type: 'multiple-choice',
          options: [
            'He believed baptism was unnecessary',
            'He revered pagan thinkers like Homer and Aristotle and struggled to accept they were damned',
            'He thought all non-Christians should be in deeper Hell',
            'He wanted to challenge the Pope\'s authority',
          ],
          correctAnswer: 'He revered pagan thinkers like Homer and Aristotle and struggled to accept they were damned',
          explanation: 'Dante revered pagan thinkers like Homer and Aristotle. Placing them in Limbo (not deeper Hell) shows his struggle with Church doctrine vs. respect for human achievement. He bends the rules to honor his intellectual heroes.',
        },
      ],

      learningPoints: [
        {
          id: 'lp-ch1-7',
          content: 'Medieval Christianity taught salvation required baptism and faith in Christ. Virtuous pagans\' fate troubled intellectuals who admired classical philosophy.',
          category: 'historical-context',
        },
        {
          id: 'lp-ch1-8',
          content: 'Dante\'s Limbo is controversial: It\'s technically Hell but functions like a noble afterlife. He bends doctrine to honor his intellectual heroes.',
          category: 'thematic-analysis',
        },
      ],
    },

    // Scene 8: Who Belongs in Limbo? (Quote Attribution)
    {
      id: 'inferno-ch1-scene-8',
      type: 'quote-attribution',
      backgroundImage: 'https://cdn.midjourney.com/7d550a36-7f14-47d5-adaf-ecdd6292b154/0_0.png',
      image: 'https://cdn.midjourney.com/2e67861f-062b-4dd7-b55c-27208cb9145d/0_0.png',

      prompt: 'Match these residents of Limbo to their fields of achievement',

      quotes: [
        {
          id: 'quote-aristotle',
          text: 'Philosophy - "the master of those who know"',
          speaker: 'Aristotle',
          context: 'Greek philosopher whose works dominated medieval thought through Thomas Aquinas.',
          explanation: 'Aristotle stands at the center of the Philosophers\' Grove. His logic and ethics, transmitted through Arabic scholars, formed the foundation of medieval university education.',
        },
        {
          id: 'quote-euclid',
          text: 'Geometry - demonstrating mathematical proofs',
          speaker: 'Euclid',
          context: 'Greek mathematician whose Elements became the foundation of geometry.',
          explanation: 'Euclid represents the power of mathematical reasoning. His geometric proofs show how human reason can discover universal truths through logic alone.',
        },
        {
          id: 'quote-ptolemy',
          text: 'Astronomy - studying the heavens',
          speaker: 'Ptolemy',
          context: 'Greek-Egyptian astronomer whose geocentric model dominated medieval cosmology.',
          explanation: 'Ptolemy\'s astronomical system placed Earth at the center of concentric spheres—the same cosmic structure Dante uses for Hell, Purgatory, and Paradise.',
        },
        {
          id: 'quote-hippocrates',
          text: 'Medicine - understanding the human body',
          speaker: 'Hippocrates',
          context: 'Ancient Greek physician known as the father of medicine.',
          explanation: 'Hippocrates and Galen represent medical knowledge. Their theories of humors and anatomy guided medieval physicians for over a thousand years.',
        },
        {
          id: 'quote-homer',
          text: 'Epic poetry - author of the Iliad and Odyssey',
          speaker: 'Homer',
          context: 'Ancient Greek epic poet, first in the lineage Homer → Virgil → Dante.',
          explanation: 'Homer stands among the five greatest poets. Though Dante never read Greek, he honored Homer as the founder of the epic tradition he continues.',
        },
        {
          id: 'quote-avicenna',
          text: 'Philosophy and medicine - preserved Aristotle\'s works',
          speaker: 'Avicenna',
          context: 'Persian Islamic scholar who transmitted classical knowledge to medieval Europe.',
          explanation: 'Avicenna preserved and expanded Aristotle through Arabic commentaries. Medieval Europe rediscovered Greek philosophy through Islamic scholars—an intellectual debt Dante acknowledges.',
        },
        {
          id: 'quote-saladin',
          text: 'Military leadership - the honorable warrior-king',
          speaker: 'Saladin',
          context: 'Muslim sultan who fought the Crusaders with chivalry and honor.',
          explanation: 'Saladin\'s inclusion is radical for Crusade-era Europe. Dante recognized virtue transcends religion—noble character matters even in an enemy.',
        },
      ],

      learningPoints: [
        {
          id: 'lp-ch1-21',
          content: 'Dante\'s Limbo includes pagans, Muslims, and even mythical figures. He constructs a cosmopolitan intellectual community.',
          category: 'thematic-analysis',
        },
        {
          id: 'lp-ch1-22',
          content: 'Classical philosophy reached medieval Europe through Islamic scholars. Avicenna and Averroes preserved and expanded Aristotle\'s works.',
          category: 'historical-context',
        },
      ],
    },

    // Scene 9: Classical vs. Christian Worldviews (Decision)
    {
      id: 'inferno-ch1-scene-9',
      type: 'decision',
      backgroundImage: 'https://cdn.midjourney.com/7d550a36-7f14-47d5-adaf-ecdd6292b154/0_0.png',

      prompt: 'Dante struggles with a contradiction: These noble souls lived virtuously yet are denied Paradise. What is the resolution?',

      context: `Medieval theology demanded baptism and faith for salvation. Yet Aristotle, who died 300+ years before Christ, couldn't have believed. Is eternal exclusion from Paradise just?`,

      choices: [
        {
          id: 'choice-orthodox',
          text: 'Yes, God\'s justice is perfect even if we don\'t understand it.',
          consequence: 'This is the orthodox view. Divine justice transcends human logic. Faith requires accepting paradoxes—God\'s ways surpass our understanding.',
          learningPoints: [
            {
              id: 'lp-ch1-23',
              content: 'Medieval theology emphasized divine mystery: God\'s ways surpass human understanding (Romans 11:33). Questioning doctrine risked heresy.',
              category: 'historical-context',
            },
          ],
        },
        {
          id: 'choice-unjust',
          text: 'No, this seems unjust. Virtue should be rewarded.',
          consequence: 'Dante seems to agree. He makes Limbo pleasant and honors its inhabitants. This subtle critique questions Church teaching while technically obeying doctrine.',
          learningPoints: [
            {
              id: 'lp-ch1-24',
              content: 'Dante bends doctrine: Limbo isn\'t torment but melancholy. He honors pagan wisdom while technically obeying Church cosmology.',
              category: 'thematic-analysis',
            },
          ],
        },
        {
          id: 'choice-harrowing',
          text: 'Perhaps Christ descended to Limbo and saved some souls.',
          consequence: 'This refers to the "Harrowing of Hell"—Christ\'s descent between crucifixion and resurrection. Some Church fathers taught He freed virtuous pre-Christians, though Dante doesn\'t fully explore this possibility.',
          learningPoints: [
            {
              id: 'lp-ch1-25',
              content: 'The "Harrowing of Hell" (1 Peter 3:19) says Christ freed Old Testament prophets from Limbo. Dante references this but doesn\'t fully explore it.',
              category: 'historical-context',
            },
          ],
        },
      ],

      learningPoints: [
        {
          id: 'lp-ch1-26',
          content: 'Dante\'s Limbo reveals tension between classical humanism and Christian exclusivity. Renaissance humanism would later embrace this tension.',
          category: 'thematic-analysis',
        },
      ],
    },

    // Scene 10: Departing Limbo
    {
      id: 'inferno-ch1-scene-10',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/7d550a36-7f14-47d5-adaf-ecdd6292b154/0_0.png',
      image: 'https://cdn.midjourney.com/aac91c4c-278d-4913-9080-cde36e64544b/0_0.png',

      content: `Virgil touches your shoulder. "We must continue our descent," he says. "Greater darkness awaits."

You take one last look at the noble castle, at the great minds conversing in their twilight realm. Part of you wishes you could stay in this place of dignity and learning, even with its melancholy.

But your journey is not yet complete. Limbo is Upper Hell—the first and mildest circle. Beyond it lie the true punishments for active sins.

"We leave the air that trembles with these sighs," Virgil says, "and enter regions where lament is louder, where the souls have lost all claim to reason's light."

You steel yourself and follow your guide deeper into the darkness. The comfort of Limbo gives way to the beginning of true torment.`,

      learningPoints: [
        {
          id: 'lp-ch1-27',
          content: 'Limbo is Upper Hell (Circle I). Circles II-V house "incontinence" (lack of self-control). The descent represents moral and physical deepening.',
          category: 'plot-structure',
        },
      ],
    },

    // Scene 11: Understanding Contrapasso
    {
      id: 'inferno-ch1-scene-11',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/7d550a36-7f14-47d5-adaf-ecdd6292b154/0_0.png',
      image: 'https://cdn.midjourney.com/aac91c4c-278d-4913-9080-cde36e64544b/0_0.png',

      content: `As you prepare to leave Limbo, you reflect on what you've witnessed. A pattern begins to emerge in your mind—each punishment seems to mirror the nature of the sin itself.

"Master," you ask Virgil, "I've noticed something. In the Vestibule, those who took no moral stand in life now chase a meaningless banner forever. And here in Limbo, those who lacked Christian revelation now lack God's presence eternally. Is there a principle at work?"

Virgil nods approvingly. "You're beginning to understand contrapasso—the law of symbolic retribution that governs all of Hell. The word means 'counter-suffering' or 'counter-penalty.' Each punishment reflects the essential nature of the sin committed."

"The uncommitted avoided commitment, so now chase nothing forever," Virgil continues. "The virtuous pagans achieved all that reason alone could accomplish, yet lacked divine grace—so now they dwell in a noble castle illuminated by reason's light, eternally aware of the Heaven they cannot reach."

"It's not mere revenge," Virgil explains. "It's poetic justice. The punishment reveals the sin's true spiritual nature. What seemed pleasurable or harmless in life shows its hollow essence in death."

You look back at the noble souls of Limbo, understanding more deeply now. Their melancholy longing isn't arbitrary cruelty—it's the logical conclusion of living virtuously without God. The punishment is the sin itself, made visible and eternal.

"In the circles below," Virgil says, "you'll see contrapasso in many forms. Some punishments mirror sins literally, others symbolically. But always, the penalty fits the crime—not in simple equivalence, but in profound spiritual truth."

You steel yourself for the journey ahead, knowing that each circle will reveal new dimensions of this terrible symmetry between sin and suffering.`,

      learningPoints: [
        {
          id: 'lp-ch1-28',
          content: 'Contrapasso means "counter-suffering"—punishments mirror crimes. Dante creates poetic justice where penalty reflects the sin\'s nature.',
          category: 'literary-technique',
        },
        {
          id: 'lp-ch1-29',
          content: 'The uncommitted chase a meaningless banner; the virtuous unbaptized long eternally for unreachable Heaven. Each punishment reveals the sin\'s spiritual essence.',
          category: 'thematic-analysis',
        },
        {
          id: 'lp-ch1-30',
          content: 'Contrapasso operates through symbolic logic, not simple revenge. Punishments can be literal (chasers chase) or metaphorical (absence punishes those who lacked opportunity).',
          category: 'literary-technique',
        },
      ],

      events: {
        onExit: [
          {
            type: 'quiz',
            componentId: 'quiz-inferno-chapter-1',
            condition: { type: 'if-not-completed' },
          },
        ],
      },
    },
  ],

  endQuiz: chapter1Quiz,
};

import type { Chapter } from '../../../types';
import { chapter3Quiz } from '../quizzes/chapter-3-quiz';

/**
 * Chapter 3: The Sirens and Scylla & Charybdis
 *
 * This chapter explores the themes of impossible choices, sacrifice, and the
 * burden of leadership. Odysseus must navigate between knowledge and safety,
 * face choices where any option causes harm, and bear the weight of command.
 *
 * Visual Style: Frank Miller's 300 aesthetic - high contrast, dramatic shadows,
 * bold compositions, burnished bronze/sepia tones.
 */
export const chapter3: Chapter = {
  id: 'chapter-3-sirens-scylla',
  title: 'Chapter 3: The Sirens and Scylla & Charybdis',
  description: 'Armed with prophecy from the Underworld, Odysseus faces impossible choices: the temptation of forbidden knowledge and a decision where any path leads to death. Some choices have no right answer—only lesser evils.',

  learningObjectives: [
    'Analyze the theme of knowledge versus safety in Greek mythology',
    'Understand the concept of impossible choices in leadership',
    'Explore the ethics of sacrifice and the burden of command',
    'Recognize foreshadowing and dramatic irony as literary techniques',
    'Examine how Greek heroes navigate moral dilemmas',
  ],

  scenes: [
    // Scene 1: Return from the Underworld
    {
      id: 'chapter-3-1-return',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/5b73f8c0-19fe-4088-99e6-b24f42129a00/0_0.png',
      content: `The grey shores of the Underworld recede behind you as your ship cuts through dark waters toward the living world. The crew rows in silence—no man speaks of what he witnessed in the realm of shades.

You, Odysseus, stand at the prow, your mind heavy with prophecy. Tiresias's words echo in your memory: the path home leads through terrors yet unnamed, through choices that will test not your strength, but your will and wisdom.

Dawn breaks across the horizon—not the pale dawn of Hades, but the burning gold of the living sun. The light seems almost painful after the grey depths below.

"Back to Aeaea," you command. "Back to Circe. She promised guidance, and I would hear her counsel before we sail for home."

The crew obeys without question. They do not know what awaits ahead. Perhaps that is a mercy.`,
      learningPoints: [
        {
          id: 'lp-chapter-3-1-return',
          content: 'The transition from the Underworld back to the living world symbolizes the hero\'s return with knowledge that separates him from ordinary men.',
          category: 'literary-context',
        },
        {
          id: 'lp-chapter-3-1-prophecy',
          content: 'Prophecy in Greek mythology creates dramatic irony—the audience knows what fate awaits, building tension as the hero must still face it.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 2: Circe's Warning
    {
      id: 'chapter-3-2-circe-warning',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/84195156-de2d-4807-b442-6a79f07b55e7/0_0.png',
      image: 'https://cdn.midjourney.com/7ab534a0-04bb-4157-877a-06f01cf2bb4e/0_0.png',
      content: `Circe awaits you on the shores of Aeaea, her eyes knowing. The sorceress who once turned your men to swine now greets you as an ally—or something more complicated than enemy or friend.

"You have walked among the dead," she says, not a question. "You carry the weight of prophecy in your eyes."

"I do," you reply. "And I come seeking your wisdom. What dangers lie ahead?"

Her expression grows grave. She leads you to her palace, and there, over wine dark as blood, she speaks of terrors.

"First, the Sirens," Circe warns. "They sit on an island of bones—bones of sailors who heard their song and forgot everything: home, family, life itself. Their voices promise knowledge of all that has happened on earth. It is a temptation few can resist."

She pauses, her gaze searching yours. "You can plug your ears with wax, sail past deaf and safe. Or..." Her lips curve in a knowing smile. "Or you can hear what no living man has heard and survived. But only if you bind yourself so you cannot surrender to their call."

"And beyond the Sirens?" you ask.

Circe's smile fades. "Beyond lies something worse. A narrow strait between two cliffs. On one side dwells Scylla—a monster with six heads, each hungry for flesh. On the other, Charybdis, a whirlpool that swallows the sea itself three times a day."

"There must be a way past both," you insist.

"No." Her voice is iron. "The strait is narrow. Sail close to Charybdis and she will swallow your entire ship. Sail close to Scylla..." She pauses. "Scylla will take six men. Six heads, six men. It is certain."

The weight of her words settles on you like armor before battle. A choice where someone dies no matter what you choose.

"Which would you choose?" you ask quietly.

"I am a goddess," Circe replies. "I do not face such choices. But you, Odysseus—you are a man, a leader, a commander. That is precisely the burden you must bear."`,
      learningPoints: [
        {
          id: 'lp-chapter-3-circe-knowledge',
          content: 'Circe serves as a guide who provides crucial knowledge, transforming from antagonist to advisor—a common pattern in hero myths.',
          category: 'literary-context',
        },
        {
          id: 'lp-chapter-3-sirens-temptation',
          content: 'The Sirens represent intellectual temptation—the dangerous allure of forbidden knowledge—not merely physical danger.',
          category: 'literary-context',
        },
        {
          id: 'lp-chapter-3-impossible-choice',
          content: 'The Scylla and Charybdis scenario creates an impossible choice—a dilemma where any option causes harm, forcing the hero to choose the lesser evil.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 3: Decision - How to Handle the Sirens
    {
      id: 'chapter-3-3-sirens-decision',
      type: 'decision',
      backgroundImage: 'https://cdn.midjourney.com/1168856d-c1ed-4008-bbf4-546f6c0ce88f/0_0.png',
      prompt: 'The ship approaches the Sirens\' island. How should you handle their song?',
      context: `The crew prepares for departure. You have Circe's beeswax and her instructions. The Sirens lie ahead—their song irresistible, their promise of knowledge intoxicating.

You could order everyone's ears sealed with wax and sail past in safety, deaf to temptation. Or you could do what no man has done: hear their song and survive.

But to hear it means being bound to the mast, helpless, begging to be released while your crew—deaf—rows on. It means surrendering control, trusting your men absolutely.

What do you choose?`,
      timeLimit: 30,
      choices: [
        {
          id: 'choice-all-deaf',
          text: 'Seal everyone\'s ears—including your own. Pass in safety.',
          consequence: 'You consider it—the safe path, the wise path. But then you think of what would be lost: knowledge that no living man has gained. You are Odysseus the curious, Odysseus the cunning. How can you pass by such a mystery? No. You will hear their song. Your men will bind you to the mast.',
          learningPoints: [
            {
              id: 'lp-choice-curiosity',
              content: 'Odysseus\'s curiosity overcomes caution—his defining trait is the hunger for knowledge and experience, even at great personal risk.',
              category: 'character-analysis',
            },
          ],
        },
        {
          id: 'choice-hear-bound',
          text: 'Plug the crew\'s ears, but bind yourself to the mast so you can hear.',
          consequence: 'Yes. This is the path. Knowledge over ignorance, experience over safety—but wisdom enough to know you cannot resist alone. You will hear what no living man has heard and survived. Your men nod grimly and prepare the ropes.',
          learningPoints: [
            {
              id: 'lp-choice-knowledge',
              content: 'Odysseus\'s choice to hear the Sirens demonstrates his defining characteristic: valuing knowledge and experience even at terrible risk, while showing wisdom in recognizing his limits.',
              category: 'character-analysis',
            },
          ],
        },
        {
          id: 'choice-resist-alone',
          text: 'Try to resist the song through sheer will alone.',
          consequence: 'For a moment, pride speaks—surely you, Odysseus, sacker of cities, can resist a mere song. But then Circe\'s warning echoes: no mortal will can withstand them. You have cunning, not invincibility. No—you will need the ropes. Your men will bind you to the mast.',
          learningPoints: [
            {
              id: 'lp-choice-wisdom',
              content: 'Odysseus demonstrates wisdom by recognizing the limits of even his formidable will—true cunning means knowing when you need help.',
              category: 'character-analysis',
            },
          ],
        },
      ],
      learningPoints: [],
    },

    // Scene 4: Bound to the Mast
    {
      id: 'chapter-3-4-bound-mast',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/1168856d-c1ed-4008-bbf4-546f6c0ce88f/0_0.png',
      image: 'https://cdn.midjourney.com/aa190e19-130e-4b18-a408-63b943c6f61a/0_0.png',
      content: `Your men bind you to the mast with rope after rope, tying knots that would hold a bull. You test the bonds—they are iron-tight. You cannot move your arms, cannot step away, cannot free yourself no matter how you struggle.

"Remember," you command, meeting each man's eyes. "No matter what I say, no matter how I beg or order or threaten—do not release me. Row faster if anything, but do not untie these ropes."

They nod, solemn. One by one, they press beeswax into their ears until they hear nothing but the silence of the deaf.

The island appears on the horizon—a rocky spit of land gleaming white. But as you draw closer, you see the white is not stone.

It is bone.

Thousands upon thousands of bones, piled high. The remains of sailors who heard the song and never left. Ships lie broken on the rocks, their crews long since reduced to sun-bleached skeletons.

The Sirens perch among the bones, beautiful and terrible. As your ship enters their waters, they begin to sing.`,
      learningPoints: [
        {
          id: 'lp-chapter-3-knowledge-restraint',
          content: 'The binding to the mast represents a compromise between knowledge and safety—experiencing the forbidden while being physically prevented from acting on it.',
          category: 'literary-context',
        },
        {
          id: 'lp-chapter-3-trust',
          content: 'Odysseus must trust his crew absolutely, surrendering control to receive knowledge—a reversal of typical leadership hierarchy.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 5: Custom Mini-Game - Sirens' Song (Rhythm Game)
    {
      id: 'chapter-3-5-sirens-song',
      type: 'custom-mini-game',
      backgroundImage: 'https://cdn.midjourney.com/1a0bd8f6-873e-4068-93c3-dc1f90706417/0_0.png',
      gameType: 'rhythm-game',
      config: {
        // Audio configuration
        audioFile: "/Imsie/assets/the-odyssey/music/The Odyssey_ The Sirens' Song.mp3",
        beats: [
          2.097, 4.289, 6.385, 8.514, 10.641, 12.779, 14.929, 17.153, 19.201, 21.273,
          23.461, 24.529, 25.081, 27.722, 29.378, 29.859, 31.425, 31.937, 33.61, 34.066,
          35.705, 36.201, 38.377, 40.429, 42.594, 44.736, 46.881, 47.946, 49.026, 50.105,
          51.213, 53.29, 55.385, 57.498, 59.721, 61.785, 63.929, 64.937, 66.012, 68.138,
          70.233, 72.386, 74.499, 76.593, 78.769, 80.938, 83.033, 85.177, 86.229, 87.29,
          88.338, 89.478, 90.505, 91.57, 93.69, 95.795, 97.915, 99.013, 100.098, 101.196,
          102.278, 104.362, 106.418, 108.53, 110.698, 112.778, 114.962, 117.05, 119.131, 120.234,
          121.33, 122.413, 123.426, 124.418, 125.434, 126.522, 127.538, 129.723, 131.811, 133.922,
          136.154, 137.178, 138.17, 139.25, 140.338, 141.463, 142.49, 144.57, 146.723, 148.866,
          151.079, 153.65
        ],
        tolerance: 0.15,

        // Visual customization
        backgroundImage: 'https://cdn.midjourney.com/1a0bd8f6-873e-4068-93c3-dc1f90706417/0_0.png',
        introImage: 'https://cdn.midjourney.com/3a803a5e-01ac-47bb-936c-36844ad64ece/0_0.png',

        // Text customization
        title: "The Sirens' Song",
        introText: "The Sirens call to you with their enchanting melody. You are bound to the mast, but you can still command your crew to row forward.",
        instructionsText: "Press SPACEBAR or click the button when you see the beat indicators.",
        startButtonText: "Begin Journey",
        successTitle: "You Resisted!",
        successText: "Through your strength of will and the rhythm of your crew, you sailed past the Sirens' island!",
        failureTitle: "Shipwrecked...",
        failureText: "The Sirens' song proved too alluring. Your ship drifted toward the rocks...",
        continueButtonText: "Continue Journey →",

        // Gameplay customization
        passingScore: 70,
        showAccuracyInResults: true,
        showComboInResults: true,
      },
      events: {
        onEnter: [{
          type: 'music-fade',
          fadeDirection: 'out',
          fadeDuration: 2000,
          targetVolume: 0,
        }],
        onExit: [{
          type: 'music-fade',
          fadeDirection: 'in',
          fadeDuration: 2000,
          targetVolume: 1,
        }],
        onBack: [{
          type: 'music-fade',
          fadeDirection: 'in',
          fadeDuration: 2000,
          targetVolume: 1,
        }],
      },
      learningPoints: [
        {
          id: 'lp-chapter-3-intellectual-temptation',
          content: 'The Sirens tempt not with physical pleasures but with intellectual ones—knowledge, glory, understanding—making them particularly dangerous to the curious mind.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 6: Passing the Sirens
    {
      id: 'chapter-3-6-past-sirens',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/5b73f8c0-19fe-4088-99e6-b24f42129a00/0_0.png',
      content: `The song fades behind you. Your throat is raw from screaming—you begged, pleaded, ordered your men to release you, to turn the ship around, to let you go to them.

They rowed on, deaf to your cries.

Now, as the island recedes, your men remove the wax from their ears and untie your bonds. You collapse against the mast, trembling, soaked in sweat.

"What did they promise you?" asks one of your men quietly.

"Everything," you whisper. "They knew everything. My past, my future, my wife's face, my son's voice. They sang of Troy, of home, of things I've forgotten and things I've never known. They promised me knowledge—and it would have killed me as surely as a sword."

You straighten, finding your command voice again. "But now I have heard what no living man has heard. I know their secret: the song is sweet, but the price is death. Knowledge without the wisdom to use it is poison."

Your men nod, satisfied. They have saved their captain from himself.

But ahead, you see the narrow strait Circe described. Mist rises from the waters between two towering cliffs. From one side comes the sound of something sucking air—Charybdis, breathing before her next swallow.

From the other cliff, high above the waterline, a dark cave gapes like a wound in the stone.

The choice you have been dreading approaches. And this time, there will be no ropes to save you.`,
      learningPoints: [
        {
          id: 'lp-chapter-3-knowledge-vs-safety',
          content: 'The Sirens episode demonstrates the tension between the desire for knowledge and the necessity of safety—a central theme in Odysseus\'s character.',
          category: 'literary-context',
        },
        {
          id: 'lp-chapter-3-temptation-survived',
          content: 'Surviving the Sirens proves that knowledge can be gained without destruction, but only through self-restraint and trust in others.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 7: Approaching the Strait
    {
      id: 'chapter-3-7-approaching-strait',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/4aa00f66-589a-496e-9ccc-3ad84f9f292e/0_0.png',
      image: 'https://cdn.midjourney.com/a5c060f5-581b-40a8-9bf8-d3e90fe85a65/0_0.png',
      content: `The strait narrows. To port, Charybdis churns the sea—a massive whirlpool that swallows ships whole, then spits their wreckage skyward. You can see fish, seaweed, entire trees spinning in her maw before disappearing into darkness.

To starboard, the cliff rises sheer and black. High above the waterline, a cave pierces the stone—shrouded in mist, barely visible. Nothing moves, but you feel eyes watching from the darkness within.

"Scylla," you whisper.

Circe's words return to you: *Six heads. Six men. It is certain.*

Your crew looks to you for orders. They trust you absolutely. They do not know what you know—that sailing this strait means death. Not possibility of death. Not risk of death. Certain death.

The only question is: whose death, and how many?

Sail close to Charybdis, and the whirlpool might swallow your entire ship—all forty men lost. Or sail close to Scylla, and sacrifice six men to save the rest.

No third option exists. The strait is too narrow.

You must choose who dies. You must give the order. And you must live with it forever.`,
      learningPoints: [
        {
          id: 'lp-chapter-3-scylla-nature',
          content: 'Scylla, a six-headed monster, and Charybdis, a ship-swallowing whirlpool, represent the narrow passage between certain loss and total destruction.',
          category: 'historical-context',
        },
        {
          id: 'lp-chapter-3-tragic-knowledge',
          content: 'Odysseus faces a burden unique to leaders: possessing knowledge of inevitable loss while those who trust him remain ignorant.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 8: The Impossible Choice
    {
      id: 'chapter-3-8-impossible-choice',
      type: 'decision',
      backgroundImage: 'https://cdn.midjourney.com/4aa00f66-589a-496e-9ccc-3ad84f9f292e/0_0.png',
      prompt: 'The strait lies before you. Which danger will you face?',
      context: `Your heart pounds. Your men await your command. They trust you to choose the safest path.

But there is no safe path. Only degrees of terrible.

Charybdis to port—possible total destruction. Scylla to starboard—certain loss of six men. Men with names, with families, with lives that depend on your wisdom.

You are the captain. The burden is yours alone.

What do you command?`,
      timeLimit: 30,
      choices: [
        {
          id: 'choice-charybdis',
          text: 'Risk Charybdis—perhaps we can outmaneuver the whirlpool',
          consequence: 'You aim for Charybdis, hoping skill can beat fate. But the whirlpool is too powerful—it begins to pull your ship in. At the last moment, you must veer toward Scylla\'s cliff to avoid total destruction. Your gamble has failed.',
        },
        {
          id: 'choice-scylla',
          text: 'Sail close to Scylla—lose some to save the rest',
          consequence: 'Your throat tightens as you give the order. "Hug the starboard cliff. Row for your lives." Your men obey, not knowing you have just condemned six of them to death. It is the only way to save the others.',
          learningPoints: [
            {
              id: 'lp-choice-leadership',
              content: 'Choosing Scylla demonstrates tragic leadership—accepting certain loss to prevent possible total destruction, a calculus that haunts commanders.',
              category: 'literary-context',
            },
          ],
        },
        {
          id: 'choice-middle',
          text: 'Try to sail directly between them',
          consequence: 'You aim for the exact middle, hoping to avoid both. But the strait is too narrow—you drift toward Scylla\'s side despite your best efforts. Some choices cannot be escaped.',
        },
      ],
      learningPoints: [],
    },

    // Scene 9: Loss of Six Men
    {
      id: 'chapter-3-9-scylla-strikes',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/4aa00f66-589a-496e-9ccc-3ad84f9f292e/0_0.png',
      image: 'https://cdn.midjourney.com/a5c060f5-581b-40a8-9bf8-d3e90fe85a65/0_0.png',
      content: `It happens faster than thought.

Six necks—impossibly long, impossibly fast—lance down from the caves. Six heads with rows of teeth like daggers. Six screams.

Your men don't even have time to raise their weapons. One moment they are rowing. The next, they are gone—plucked from their benches like a hawk takes mice.

"Odysseus!" one screams—young Elpenor, barely twenty. "Captain, help—"

His voice cuts off as he disappears into the cave. The others don't even manage words.

The attack lasts three seconds. Three seconds, and six men are gone.

The remaining crew rows in terrified fury, pulling away from the cliff with strength born of panic. You clear the strait, emerging into open water beyond.

Charybdis rumbles behind you, swallowing the sea. But you are past it. You survived.

Thirty-four men survived.

Six did not.

The crew looks at you—horror, relief, confusion warring in their faces. They do not understand. They think it was chance, bad luck, that Scylla struck where she did.

Only you know the truth: you chose this. You steered close to Scylla's cliff knowing—knowing with certainty—that six men would die. You made the calculation: better six than forty.

The math is sound. The logic unassailable.

It does not make you feel any less like a murderer.`,
      learningPoints: [
        {
          id: 'lp-chapter-3-leadership-burden',
          content: 'The loss to Scylla illustrates the burden of command—leaders must sometimes choose who dies, a weight that statistics and logic cannot ease.',
          category: 'literary-context',
        },
        {
          id: 'lp-chapter-3-sacrifice',
          content: 'Odysseus sacrifices six men to save thirty-four, a decision that is both strategically sound and morally devastating.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 10: Cause-Effect - Matching Choices and Consequences
    {
      id: 'chapter-3-10-cause-effect',
      type: 'cause-effect',
      backgroundImage: 'https://cdn.midjourney.com/5b73f8c0-19fe-4088-99e6-b24f42129a00/0_0.png',
      prompt: 'Match Odysseus\'s choices with their consequences',
      pairs: [
        {
          id: 'pair-1',
          cause: 'Odysseus chose to hear the Sirens\' song while bound',
          effect: 'He gained forbidden knowledge but survived through self-restraint',
          explanation: 'By binding himself, Odysseus found a middle path—experiencing the Sirens\' song while being physically prevented from surrendering to it. This represents the balance between curiosity and survival.',
        },
        {
          id: 'pair-2',
          cause: 'Odysseus steered close to Scylla\'s cliff',
          effect: 'Six men died for certain, but the rest survived',
          explanation: 'This was a calculated sacrifice—choosing certain loss of some to prevent possible loss of all. It represents the tragic mathematics of command.',
        },
        {
          id: 'pair-3',
          cause: 'Odysseus did not tell his crew about Scylla',
          effect: 'The men rowed on in ignorance, not knowing their doom',
          explanation: 'This raises ethical questions: Was Odysseus protecting morale, or denying his men agency? Sometimes knowledge of fate is itself a burden.',
        },
        {
          id: 'pair-4',
          cause: 'The crew sealed their ears with wax',
          effect: 'They could not hear the Sirens\' temptation or Odysseus\'s pleas',
          explanation: 'Their deafness saved them twice—from the Sirens\' song and from Odysseus\'s commands to release him. Ignorance can be protective.',
        },
      ],
      distractors: [
        'The ship was destroyed completely',
        'All men survived unharmed',
        'The Sirens joined the crew',
        'Charybdis swallowed half the ship',
      ],
      learningPoints: [
        {
          id: 'lp-chapter-3-consequences',
          content: 'Every choice in the episode creates specific, unavoidable consequences—demonstrating the Greek concept of fate intertwined with free will.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 11: Grief and the Burden of Command (WITH QUIZ TRIGGER)
    {
      id: 'chapter-3-11-grief-burden',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/5b73f8c0-19fe-4088-99e6-b24f42129a00/0_0.png',
      image: 'https://cdn.midjourney.com/ae85d6c5-b6dc-4572-8a45-09842d42b9a9/0_0.png',
      content: `Night falls. The ship sails on through dark waters. Your surviving men are silent, each processing what happened in his own way.

You stand alone at the stern, staring back toward the strait that is now just a shadow on the horizon.

Six men. You knew their names, their stories. Elpenor who dreamed of returning to his mother. Polites who sang while rowing. Four others whose faces swim before your eyes.

"It was the right choice," you whisper to the uncaring stars. "Better six than forty. Any captain would have made the same decision."

The stars do not answer.

The logic is sound. Circe herself said there was no other way. Even the gods would have chosen as you did.

But the gods do not feel what you feel—this weight in your chest, this knowledge that you chose, you commanded, you steered the ship close to those caves knowing what would happen.

This is the burden Circe spoke of. Not the burden of choosing between good and evil—that would be easy. This is the burden of choosing between evils, where any choice causes harm, where the mathematics are clear but the cost is in human lives.

You are a leader. A commander. A king.

And tonight, you are a man who sent six friends to their deaths because the alternative was worse.

The ship sails on. The stars wheel overhead. And you carry the weight of those who will never see them again.

Tomorrow, new dangers await. Tomorrow, you must lead again, decide again, carry the burden again.

But tonight, you remember six names, six faces, six voices calling your name as they were taken.

Tonight, you learn what it truly means to command.`,
      learningPoints: [
        {
          id: 'lp-chapter-3-command-burden',
          content: 'The episode concludes by emphasizing that leadership means bearing the psychological weight of decisions that cannot be undone, even when they were correct.',
          category: 'literary-context',
        },
        {
          id: 'lp-chapter-3-dramatic-irony',
          content: 'The audience\'s foreknowledge of Odysseus\'s choice creates dramatic irony, allowing us to feel the weight of his burden before and after the moment of decision.',
          category: 'literary-context',
        },
        {
          id: 'lp-chapter-3-human-cost',
          content: 'Greek mythology often explores how even correct strategic decisions carry human costs that logic and necessity cannot erase.',
          category: 'historical-context',
        },
      ],
      events: {
        onExit: [
          {
            type: 'quiz',
            componentId: 'quiz-chapter-3',
            condition: {
              type: 'if-not-completed',
            },
          },
        ],
      },
    },
  ],

  endQuiz: chapter3Quiz,
};

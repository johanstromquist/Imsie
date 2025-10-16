import type { Quiz } from '../../../types';

/**
 * Chapter 5 Quiz: The Tragic End
 *
 * Tests understanding of:
 * - The poisoned wound's symbolic significance
 * - The white/black sail deception
 * - The Liebestod motif
 * - Different textual versions of the ending
 * - The rose and vine symbolism
 * - Tragic structure and inevitability
 */

export const chapter5Quiz: Quiz = {
  id: 'quiz-chapter-5-tristan-isolde',
  title: 'Chapter 5 Quiz: The Tragic End',
  description: "Test your understanding of the tragic conclusion to Tristan and Isolde's story.",
  passingScore: 70,
  allowRetry: true,

  questions: [
    // Question 1: Multiple Choice - Poisoned Wound Symbolism
    {
      id: 'q1-wound-parallel',
      question:
        "Why is it significant that Tristan's final wound is also caused by poison?",
      type: 'multiple-choice',
      points: 10,
      options: [
        "It proves that Isolde's healing powers have weakened over time",
        'It shows that Tristan never learned from his past mistakes',
        'It creates a circular narrative structure, connecting the ending to the beginning',
        'It demonstrates that medieval medicine was ineffective',
      ],
      correctAnswer:
        'It creates a circular narrative structure, connecting the ending to the beginning',
      explanation:
        "The poisoned wound parallels Tristan's first wound from the Morholt, which first brought him to Isolde in Ireland. This creates circular narrative structure where the story returns to its beginning themes of poison, healing, and Isolde's unique ability to cure him. It emphasizes fate and inevitability.",
      relatedLearningPoints: ['lp-ch5-1-parallel', 'lp-ch5-1-inevitability'],
    },

    // Question 2: Multiple Choice - The Sail Signal
    {
      id: 'q2-sail-symbolism',
      question: 'What do the white and black sails symbolize in the story?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'White represents Isolde the Fair, black represents Isolde of the White Hands',
        'White represents Cornwall, black represents Brittany',
        'White represents hope and healing, black represents despair and death',
        'White represents innocence, black represents guilt',
      ],
      correctAnswer: 'White represents hope and healing, black represents despair and death',
      explanation:
        "The white sail means Isolde the Fair is coming to heal Tristan (hope and life), while the black sail means she is not coming (despair and death). This dual symbolism sets up the tragic miscommunication--the sail IS white, but Tristan is told it's black, causing him to die of despair when help is actually arriving.",
      relatedLearningPoints: ['lp-ch5-2-sail-symbolism'],
    },

    // Question 3: True/False - Isolde of White Hands' Motivation
    {
      id: 'q3-isolde-whh-sympathetic',
      question:
        'True or False: Isolde of the White Hands is portrayed as a purely evil villain with no sympathetic qualities.',
      type: 'true-false',
      points: 10,
      correctAnswer: 'False',
      explanation:
        "False. While Isolde of the White Hands commits the fatal lie that kills Tristan, the story presents her sympathetically. She is trapped in an unconsummated marriage with a man who loves someone else, has been wounded by years of rejection, and her jealousy, though destructive, is understandable. She represents the human cost of Tristan and Isolde's forbidden love.",
      relatedLearningPoints: [
        'lp-ch5-9-sympathetic-villain',
        'lp-ch5-3-isolde-whh-position',
      ],
    },

    // Question 4: Multiple Choice - Dramatic Irony
    {
      id: 'q4-tragic-irony',
      question:
        "What makes Tristan's death an example of tragic irony?",
      type: 'multiple-choice',
      points: 10,
      options: [
        'He dies from the same type of wound that first brought him to Isolde',
        'He dies in Brittany instead of his homeland Cornwall',
        'He dies believing Isolde refused to come, when she is actually arriving to save him',
        'He dies married to the wrong Isolde',
      ],
      correctAnswer:
        'He dies believing Isolde refused to come, when she is actually arriving to save him',
      explanation:
        'Tragic irony occurs when the audience knows something crucial that the character does not. We know the sail is white and Isolde the Fair IS coming to save Tristan, but he dies believing she refused him--dying literally minutes before she arrives. Truth and perception diverge fatally, which is the essence of this tragedy.',
      relatedLearningPoints: ['lp-ch5-11-tragic-irony', 'lp-ch5-4a-tragic-irony'],
    },

    // Question 5: Multiple Choice - Liebestod Definition
    {
      id: 'q5-liebestod-meaning',
      question:
        'What does the term "Liebestod" mean, and how does it apply to this story?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'It means "love potion" and refers to the potion Tristan and Isolde drank',
        'It means "forbidden love" and refers to adulterous relationships',
        'It means "love-death" and refers to lovers finding union through death',
        'It means "eternal love" and refers to love that lasts forever',
      ],
      correctAnswer:
        'It means "love-death" and refers to lovers finding union through death',
      explanation:
        'Liebestod is a German term meaning "love-death." It refers to a romantic motif where lovers achieve their ultimate union through or in death. Isolde the Fair dies of grief beside Tristan, choosing death deliberately to be with him. In death, they achieve the union that life denied them--this is the classic Liebestod.',
      relatedLearningPoints: ['lp-ch5-13-liebestod-motif', 'lp-ch5-13-transcendence'],
    },

    // Question 6: Multiple Choice - Rose and Vine Symbolism
    {
      id: 'q6-rose-vine',
      question: "What do the rose and vine growing from the lovers' graves symbolize?",
      type: 'multiple-choice',
      points: 10,
      options: [
        'The natural beauty of Cornwall and its gardens',
        "King Mark's eventual forgiveness and acceptance",
        'Their eternal union and a love that cannot be separated even by death',
        'The destructive nature of forbidden love',
      ],
      correctAnswer:
        'Their eternal union and a love that cannot be separated even by death',
      explanation:
        "The rose and vine that grow from the graves and intertwine above them symbolize the lovers' eternal union. Even when King Mark tries to cut them down, they grow back more tightly entwined--showing that their love cannot be separated by any earthly power, not even death itself. The physical plants make their spiritual connection visible.",
      relatedLearningPoints: ['lp-ch5-14-rose-vine-symbol', 'lp-ch5-15-bittersweet'],
    },

    // Question 7: True/False - Tristan's Cause of Death
    {
      id: 'q7-death-cause',
      question:
        'True or False: Tristan dies primarily from the poisoned wound, not from grief.',
      type: 'true-false',
      points: 10,
      correctAnswer: 'False',
      explanation:
        'False. While Tristan is poisoned, the text explicitly states he dies of grief--his heart breaks before his body does. When he believes Isolde has refused to come (the black sail lie), he loses all will to live and dies immediately. This emphasizes that the wound to his heart, not his body, is what ultimately kills him, foreshadowing the Liebestod motif.',
      relatedLearningPoints: ['lp-ch5-11-death-by-grief'],
    },

    // Question 8: Multiple Choice - Timing and Tragedy
    {
      id: 'q8-timing',
      question: "Why is the timing of Isolde's arrival significant to the tragedy?",
      type: 'multiple-choice',
      points: 10,
      options: [
        "She arrives several days after Tristan's death, too late to matter",
        'She arrives before he dies but cannot heal him in time',
        'She arrives minutes after his death, making the near-miss unbearably cruel',
        'She arrives at exactly the moment he dies, so they see each other one last time',
      ],
      correctAnswer:
        'She arrives minutes after his death, making the near-miss unbearably cruel',
      explanation:
        "Isolde arrives literally minutes after Tristan dies--close enough that if the truth had been told, he would have lived. This precise timing makes the tragedy more painful; they came so close to reunion that the failure feels even more devastating. The 'too late' arrival is a classic tragic device that emphasizes fate's cruelty.",
      relatedLearningPoints: ['lp-ch5-12-dramatic-timing', 'lp-ch5-10-suspense'],
    },

    // Question 9: Multiple Choice - Different Versions
    {
      id: 'q9-textual-versions',
      question:
        'What do the different medieval versions of the story (Béroul, Thomas, Gottfried) reveal about medieval literature?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'There was only one correct version, and the others are mistakes',
        'The variations show that medieval authors plagiarized from each other',
        'Medieval stories existed in multiple versions emphasizing different aspects',
        'Different versions were created for different social classes',
      ],
      correctAnswer:
        'Medieval stories existed in multiple versions emphasizing different aspects',
      explanation:
        'Medieval literature existed in oral and written traditions with multiple versions of the same story. Each author emphasized different aspects--Béroul focused on the rose and vine symbolism, Thomas on shared burial, Gottfried on moral lessons. There was no single "true" version; the variations show how stories were adapted and reinterpreted.',
      relatedLearningPoints: ['lp-ch5-14-textual-variants'],
    },

    // Question 10: Self-Assessment - Tragic Structure
    {
      id: 'q10-self-assessment',
      question:
        "Reflect on the story's tragic structure. In your own words, explain how the ending demonstrates the concept of 'inevitability' in tragedy. Consider: Could the tragedy have been avoided? What role did fate versus choice play?",
      type: 'self-assessment',
      points: 10,
      modelAnswer:
        "The ending of Tristan and Isolde demonstrates <strong>tragic inevitability</strong> through a powerful combination of fate and human choice.\n\n<strong>Elements of Inevitability (Fate):</strong>\nThe tragedy feels destined from the start. The circular structure—where Tristan's story begins and ends with a poisoned wound that only Isolde can heal—suggests that his fate was sealed from the beginning. The years of separation, the impossible situation of loving someone married to his uncle, and the repeated near-misses all create a sense that disaster was unavoidable. The very setup of the story (forbidden love created by a potion) makes a happy ending feel impossible.\n\n<strong>The Role of Choice:</strong>\nYet the final tragedy hinges on a single human decision: Isolde of the White Hands' <strong>lie about the sail</strong>. She sees the white sail (Isolde is coming!) but tells Tristan it's black (she refused). This is a deliberate choice motivated by jealousy and pain. Without this lie, Tristan would have lived long enough for Isolde to arrive and heal him. The tragedy required both fate AND choice.\n\n<strong>Could It Have Been Avoided?</strong>\nYes and no. The poisoned wound was fate—Tristan couldn't control being wounded. But the lie was a choice—Isolde of the White Hands could have told the truth. The story suggests that while we can't control what happens to us (fate), we can control how we respond (choice). The tragedy arose from the intersection of these forces.\n\n<strong>The Meaning:</strong>\nThis tension between fate and choice is what makes the ending so powerful. The lovers aren't completely innocent (they had choices throughout) but they're also not completely guilty (the potion was real, circumstances were impossible). This moral complexity—where fate creates circumstances but humans choose how to respond—is what defines great tragedy.",
      assessmentCriteria: [
        {
          id: 'inevitability',
          text: 'Discussed <strong>inevitability</strong> and how the ending felt destined (circular structure, impossible situation)',
          points: 3,
        },
        {
          id: 'fate-vs-choice',
          text: 'Considered the balance between <strong>fate and human choice</strong> (the poisoned wound vs. the lie)',
          points: 3,
        },
        {
          id: 'avoidable',
          text: 'Reflected on whether the tragedy <strong>could have been avoided</strong> and why or why not',
          points: 2,
        },
        {
          id: 'engagement',
          text: 'Wrote a <strong>clear, thoughtful response</strong> demonstrating engagement with the themes',
          points: 2,
        },
      ],
      explanation:
        "This question asks you to synthesize the major themes of fate versus free will. The tragedy feels inevitable due to the circular structure (poisoned wound paralleling the beginning), the years of separation, and the impossibility of their situation. Yet it also hinges on a single human choice--Isolde of the White Hands' lie. Good answers explore this tension: the story suggests the lovers were doomed by circumstances beyond their control (fate), but the final tragedy required a specific act of deception (choice). The poisoned wound was fate; the fatal lie was choice; and together they created the perfect tragic storm.",
      relatedLearningPoints: [
        'lp-ch5-1-inevitability',
        'lp-ch5-4b-inevitability',
        'lp-ch5-10-moment-of-choice',
        'lp-ch5-9-power-knowledge',
      ],
    },
  ],
};

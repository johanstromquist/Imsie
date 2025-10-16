import type { Quiz } from '../../../types';

/**
 * Final Quiz: Tristan & Isolde - Comprehensive Assessment
 *
 * This quiz tests understanding of the entire Tristan & Isolde adventure,
 * integrating concepts from all five chapters. It covers narrative structure,
 * character development, themes, literary techniques, and cultural context.
 */

export const finalQuiz: Quiz = {
  id: 'quiz-final-tristan-isolde',
  title: 'Tristan & Isolde: Final Comprehensive Quiz',
  description:
    'Test your complete understanding of the Tristan & Isolde legend--its story, themes, characters, and significance in medieval literature.',
  passingScore: 75,
  allowRetry: true,

  questions: [
    // NARRATIVE STRUCTURE QUESTIONS
    {
      id: 'q1',
      question: "Which element of the hero's journey does Tristan's first voyage to Ireland represent?",
      type: 'multiple-choice',
      points: 10,
      options: [
        'The hero refuses the call to adventure',
        'The hero receives help in a dangerous place',
        'The hero returns home victorious',
        'The hero rejects supernatural aid',
      ],
      correctAnswer: 'The hero receives help in a dangerous place',
      explanation:
        "Tristan's first journey to Ireland follows the classic hero's journey pattern: he ventures into enemy territory (dangerous place) " +
        'and receives help from Isolde (the helper figure) who heals his poisoned wound. This establishes their connection before the love potion.',
      relatedLearningPoints: [],
    },

    {
      id: 'q2',
      question: 'How does the poisoned wound in Chapter 5 create a circular narrative structure?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'It happens in the same location as the original wound',
        'It is healed by the same person who healed the first wound',
        'It mirrors his first poisoned wound from the Morholt, bringing the story full circle',
        'It has nothing to do with the earlier story',
      ],
      correctAnswer: 'It mirrors his first poisoned wound from the Morholt, bringing the story full circle',
      explanation:
        "The circular structure is a sophisticated literary technique: Tristan's story begins with a poisoned wound that brings him to Isolde, " +
        "and ends with a poisoned wound that he hopes Isolde can heal again. The repetition emphasizes fate's role in the tragedy.",
      relatedLearningPoints: [],
    },

    {
      id: 'q3',
      question: 'What narrative function does the "double" motif (two Isoldes) serve in the story?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'It proves that all women named Isolde are the same',
        'It shows Tristan can easily replace one love with another',
        'It contrasts passionate love (Isolde the Fair) with dutiful love (Isolde of the White Hands)',
        'It has no particular symbolic meaning',
      ],
      correctAnswer: 'It contrasts passionate love (Isolde the Fair) with dutiful love (Isolde of the White Hands)',
      explanation:
        'The two Isoldes represent different kinds of love: Isolde the Fair embodies irresistible passion (created by the potion), while Isolde of ' +
        'the White Hands represents the kind of dutiful marriage Tristan could have chosen. The contrast highlights the impossibility of Tristan moving on.',
      relatedLearningPoints: [],
    },

    // CHARACTER ANALYSIS QUESTIONS
    {
      id: 'q4',
      question: 'What makes King Mark a complex character rather than a simple villain?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'He is purely evil and deserves what happens to him',
        'He knows about the love potion from the beginning',
        'He shows mercy and love for both Tristan and Isolde despite their betrayal',
        "He never suspects Tristan and Isolde's relationship",
      ],
      correctAnswer: 'He shows mercy and love for both Tristan and Isolde despite their betrayal',
      explanation:
        'King Mark is deliberately portrayed as sympathetic: he loves Tristan as a son and Isolde as a wife. When he discovers them in the forest ' +
        'with the sword between them, he chooses mercy. This complexity makes the betrayal more tragic--if Mark were a villain, the lovers would be heroic. ' +
        'Instead, everyone suffers.',
      relatedLearningPoints: [],
    },

    {
      id: 'q5',
      question: 'How does Isolde demonstrate agency (making her own choices) despite her limited medieval freedom?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'She successfully escapes all political marriages',
        'She refuses to marry King Mark',
        'She chooses to spare Tristan when she discovers his identity, and later chooses to go to him in death',
        'She has no agency at all in the story',
      ],
      correctAnswer: 'She chooses to spare Tristan when she discovers his identity, and later chooses to go to him in death',
      explanation:
        "Despite being subject to medieval constraints (political marriage), Isolde makes crucial choices: sparing Tristan's life, accepting exile " +
        'with him, and ultimately choosing to rush to his deathbed. Her final choice to die with him is the ultimate assertion of agency--choosing love ' +
        'and death over life without Tristan.',
      relatedLearningPoints: [],
    },

    {
      id: 'q6',
      question: 'What is significant about Isolde of the White Hands as a character?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'She is purely evil with no redeeming qualities',
        'She is portrayed sympathetically despite being an antagonist--wronged but capable of terrible revenge',
        'She truly loves Tristan and he loves her back equally',
        'She is identical in every way to Isolde the Fair',
      ],
      correctAnswer: 'She is portrayed sympathetically despite being an antagonist--wronged but capable of terrible revenge',
      explanation:
        'Isolde of the White Hands is innocent, trapped in an unconsummated marriage with a man who loves someone else. Her fatal lie about the ' +
        "sail's color is both terrible and understandable--she's been wronged, yet her revenge destroys everyone. This moral complexity is typical of great literature.",
      relatedLearningPoints: [],
    },

    // THEMATIC QUESTIONS
    {
      id: 'q7',
      question: 'What is the central thematic conflict throughout the entire story?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'Rich versus poor',
        'Duty and honor versus passionate love',
        'Christianity versus paganism',
        'Ireland versus Cornwall',
      ],
      correctAnswer: 'Duty and honor versus passionate love',
      explanation:
        'The entire tragedy stems from Tristan and Isolde being torn between duty (to King Mark, to political alliance, to honor) and love ' +
        '(created by the potion, irresistible and eternal). Neither can fully abandon either obligation, creating impossible suffering.',
      relatedLearningPoints: [],
    },

    {
      id: 'q8',
      question: "According to the story, does the love potion excuse Tristan and Isolde's betrayal of King Mark?",
      type: 'multiple-choice',
      points: 10,
      options: [
        'Yes, they have no responsibility for potion-induced love',
        'No, they should have resisted regardless of the potion',
        'The story deliberately leaves this ambiguous--medieval audiences debated it',
        'The potion is irrelevant to their moral culpability',
      ],
      correctAnswer: 'The story deliberately leaves this ambiguous--medieval audiences debated it',
      explanation:
        'This moral ambiguity is intentional. Poets argued the lovers were victims of fate; the Church said they should resist. The story never ' +
        'resolves this--it presents the tragedy without simple moral judgment, which is what makes it enduring literature.',
      relatedLearningPoints: [],
    },

    // LITERARY TECHNIQUE QUESTIONS
    {
      id: 'q9',
      question: 'What is the Liebestod motif demonstrated in the ending?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'Love conquering all obstacles',
        "Love and death intertwined--dying for or with one's beloved",
        'Death being preferable to love',
        'A happy ending where love triumphs',
      ],
      correctAnswer: "Love and death intertwined--dying for or with one's beloved",
      explanation:
        'Liebestod (German: "love-death") describes when love and death become inseparable. Isolde dies of grief beside Tristan--their love is so ' +
        "powerful that it literally cannot exist without both partners alive. This motif influenced countless later works, including Wagner's opera.",
      relatedLearningPoints: [],
    },

    {
      id: 'q10',
      question: 'How does the story use dramatic irony in the final chapter?',
      type: 'multiple-choice',
      points: 10,
      options: [
        "The audience doesn't know what will happen",
        'Tristan knows more than the audience',
        'The audience knows the sail is white while Tristan is told it is black',
        'There is no irony in the final chapter',
      ],
      correctAnswer: 'The audience knows the sail is white while Tristan is told it is black',
      explanation:
        "Dramatic irony occurs when the audience knows something the character doesn't. We see the white sail (Isolde has come!) while Tristan is " +
        "told it's black. This creates excruciating tension--we watch Tristan die of grief moments before Isolde arrives. The timing is tragic and inevitable.",
      relatedLearningPoints: [],
    },

    {
      id: 'q11',
      question: 'What symbolism is carried by the sword placed between the sleeping lovers in the forest?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'Their intention to fight each other',
        "King Mark's military power",
        'Chastity and restraint--proof they were not acting on their passion',
        'The division between Ireland and Cornwall',
      ],
      correctAnswer: 'Chastity and restraint--proof they were not acting on their passion',
      explanation:
        'In medieval romance, a sword between lovers symbolized chastity. Though Tristan and Isolde loved each other, they placed the sword between ' +
        'them while sleeping--showing restraint. When King Mark saw this, it influenced his merciful decision. The sword represents the lovers trying to ' +
        'honor their duty even in exile.',
      relatedLearningPoints: [],
    },

    // CULTURAL/HISTORICAL CONTEXT QUESTIONS
    {
      id: 'q12',
      question: 'What does the story reveal about medieval attitudes toward political marriages?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'They were forbidden by the Church',
        'They always resulted in happy marriages',
        'They were common and expected, used to forge alliances between kingdoms',
        'Only commoners had political marriages',
      ],
      correctAnswer: 'They were common and expected, used to forge alliances between kingdoms',
      explanation:
        "Isolde's marriage to King Mark represents standard medieval practice: noble women were married to forge political alliances. The Irish " +
        'Queen even prepared a love potion to help ensure happiness in an arranged marriage--showing awareness that such marriages needed help to succeed.',
      relatedLearningPoints: [],
    },

    {
      id: 'q13',
      question: 'What role did the hermit Ogrin serve in medieval society and in the story?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'Comic relief character with no serious purpose',
        'Royal advisor to King Mark',
        'Religious counselor who reminded the lovers of Christian morality and consequences of sin',
        'A wizard who could remove curses',
      ],
      correctAnswer: 'Religious counselor who reminded the lovers of Christian morality and consequences of sin',
      explanation:
        'Hermits in medieval literature represented religious/moral voices outside courtly society. Ogrin counseled Tristan and Isolde that their love ' +
        "was sinful and they should return to proper Christian life. He represents the medieval Church's view, contrasting with the romantic ideal the story also presents.",
      relatedLearningPoints: [],
    },

    // True/False Questions
    {
      id: 'q14',
      question:
        "The love potion's power eventually faded after three years, meaning Tristan and Isolde's continued love became a choice rather than magical compulsion.",
      type: 'true-false',
      points: 10,
      options: ['True', 'False'],
      correctAnswer: 'True',
      explanation:
        'True. In Chapter 4, the hermit tells them the potion has faded after three years. This is thematically crucial: their continued love is now ' +
        "their choice, not magical compulsion. This makes their ongoing affair more morally complex--they could stop but won't.",
      relatedLearningPoints: [],
    },

    {
      id: 'q15',
      question:
        "The rose and vine growing from the lovers' graves and intertwining represents the eternal nature of their love transcending death.",
      type: 'true-false',
      points: 10,
      options: ['True', 'False'],
      correctAnswer: 'True',
      explanation:
        'True. This powerful symbol (rose from one grave, vine from the other, growing together in a Celtic knot) shows their love cannot be separated ' +
        "even by death. It's a hopeful image in an otherwise tragic story--their love endures and is beautiful, even if it destroyed their lives.",
      relatedLearningPoints: [],
    },

    // Matching Question
    {
      id: 'q16',
      question: 'Match each character to their primary symbolic or thematic function in the story:',
      type: 'matching',
      points: 15,
      correctAnswer: {
        'Tristan': 'The hero torn between honor and passion',
        'Isolde the Fair': 'Forbidden love that defies duty',
        'King Mark': 'The wronged but sympathetic authority figure',
        'Isolde of the White Hands': 'Dutiful love that cannot compete with passion',
        'Brangien': 'Loyal confidante who enables the secret love',
      },
      explanation:
        'Each character serves a specific thematic function: Tristan embodies the knight caught between obligations; Isolde the Fair represents ' +
        "irresistible passion; Mark shows why betrayal is tragic (he doesn't deserve it); Isolde of the White Hands contrasts duty with passion; " +
        'Brangien enables the plot through her mistake and loyalty.',
      relatedLearningPoints: [],
    },

    // Short Answer
    {
      id: 'q17',
      question: 'What was the name Tristan used when he first came to Ireland disguised as a wounded minstrel?',
      type: 'short-answer',
      points: 10,
      correctAnswer: 'Tantris',
      explanation:
        'Tristan called himself "Tantris" to hide his identity as the killer of the Morholt. This disguise allowed Isolde to heal him--creating their ' +
        'initial bond before the love potion. The name is actually an anagram of Tristan in some versions.',
      relatedLearningPoints: [],
    },

    // Self-Assessment Question - Comprehensive
    {
      id: 'q18',
      question:
        'Analyze how the Tristan and Isolde legend explores the tension between fate and free will. Consider: the love potion (fate), the potion fading ' +
        "(choice), the white/black sail miscommunication (accident or destiny?), and the lovers' various decision points. Does the story ultimately suggest " +
        'we are controlled by fate or that we make our own choices? Use specific examples from all five chapters.',
      type: 'self-assessment',
      points: 30,
      modelAnswer: `The Tristan and Isolde legend presents a nuanced exploration of fate versus free will, never fully resolving the question:

<strong>Evidence for Fate:</strong>
- The love potion: The lovers don't choose to fall in love--magic compels them, suggesting fate controls crucial life events
- The circular structure: Tristan's poisoned wound at the beginning and end suggests his destiny was set from the start
- The white/black sail miscommunication: Isolde of the White Hands' lie seems almost fated--everything conspires toward tragedy
- Repeated "coincidences": Tristan washing up in Ireland (twice), being found by Isolde specifically, etc.

<strong>Evidence for Free Will:</strong>
- The potion fades after three years: Their continued love becomes a choice, not compulsion
- Isolde choosing to spare Tristan when discovering his identity
- Tristan choosing to marry Isolde of the White Hands (attempting to move on)
- Isolde the Fair choosing to rush to dying Tristan despite risks
- Multiple decision points where characters could have chosen differently

<strong>The Synthesis:</strong>
The story suggests a middle ground: fate creates circumstances, but characters choose how to respond. The potion created love, but Tristan and Isolde chose to act on it even after it faded. Isolde of the White Hands chose to lie about the sail--she could have told the truth.

<strong>Thematic Meaning:</strong>
The ambiguity is the point. Medieval audiences debated: are we responsible for feelings we can't control? The story refuses easy answers, making it more profound. It suggests that while we can't always control what happens to us (fate), we can control how we respond (free will)--and our choices carry moral weight even when circumstances are difficult.

The tragedy arises from this tension: the lovers are neither completely innocent (they had choices) nor completely guilty (the potion was real). This moral complexity is what makes the story endure--it reflects real human experience where circumstances and choices are always intertwined.`,
      assessmentCriteria: [
        {
          id: 'crit1',
          text: 'Identified specific examples of fate/destiny from the story (love potion, circular structure, coincidences)',
          points: 8,
        },
        {
          id: 'crit2',
          text: 'Identified specific examples of free will/choice (potion fading, character decisions, moral choices)',
          points: 8,
        },
        {
          id: 'crit3',
          text: 'Discussed examples from multiple chapters (not just one or two)',
          points: 7,
        },
        {
          id: 'crit4',
          text: 'Synthesized the themes--explaining how fate and free will interact rather than seeing them as opposites',
          points: 7,
        },
      ],
      explanation:
        'The fate versus free will question is central to the Tristan and Isolde legend and to medieval philosophy generally. The story presents both ' +
        'forces as real and interacting, making it philosophically sophisticated and eternally relevant.',
      relatedLearningPoints: [],
    },

    // Bonus Integration Question
    {
      id: 'q19',
      question:
        'How does the Tristan and Isolde legend reflect the values and concerns of medieval courtly love tradition?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'It celebrates arranged marriages as the highest form of love',
        'It rejects all forms of romantic love as sinful',
        'It shows love as ennobling but forbidden, existing outside marriage, and more powerful than duty',
        'It shows that love and marriage are always compatible',
      ],
      correctAnswer: 'It shows love as ennobling but forbidden, existing outside marriage, and more powerful than duty',
      explanation:
        'The story exemplifies courtly love ideals: passionate love is portrayed as ennobling (making Tristan and Isolde into noble tragic figures) but ' +
        'existing outside marriage (Isolde loves Tristan, not her husband). The tradition saw such love as more "real" than arranged marriages, though ' +
        'also dangerous and transgressive. The story both celebrates and mourns this kind of love.',
      relatedLearningPoints: [],
    },

    // Final Synthesis Question
    {
      id: 'q20',
      question: 'What makes the Tristan and Isolde legend a tragedy rather than just a sad story?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'Someone dies at the end',
        'The lovers never get to be together',
        'The protagonists are noble and sympathetic, their suffering is undeserved, and their fate seems inevitable yet heartbreaking',
        'It takes place in medieval times',
      ],
      correctAnswer:
        'The protagonists are noble and sympathetic, their suffering is undeserved, and their fate seems inevitable yet heartbreaking',
      explanation:
        "Classical tragedy requires noble protagonists (Tristan and Isolde are both of high birth and character), undeserved suffering (they didn't " +
        'choose to drink the potion), inevitability (once the potion is drunk, we sense disaster coming), and emotional catharsis. The story follows these ' +
        'patterns perfectly, making it one of the great tragic romances of Western literature. Its influence continues in modern stories of doomed love.',
      relatedLearningPoints: [],
    },
  ],
};

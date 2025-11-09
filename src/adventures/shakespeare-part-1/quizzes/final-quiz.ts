import type { Quiz } from '../../../types';

export const finalQuiz: Quiz = {
  id: 'quiz-shakespeare-part-1-final',
  title: 'Shakespeare Part I: Final Assessment',
  description: 'Test your comprehensive understanding of Shakespeare\'s life, theater, and the plays of love, identity, and disguise you\'ve explored in Part I.',
  passingScore: 70,
  allowRetry: true,

  questions: [
    // Q1: Shakespeare Biography (Chapter 1)
    {
      id: 'final-q1',
      question: 'What made Shakespeare\'s position as both playwright and shareholder in the Lord Chamberlain\'s Men significant?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'It made him the wealthiest writer in England',
        'It gave him both creative control and financial rewards from the company\'s success',
        'It meant he could never work with other theater companies',
        'It required him to perform in every play he wrote',
      ],
      correctAnswer: 'It gave him both creative control and financial rewards from the company\'s success',
      explanation: 'Shakespeare\'s dual role as writer and shareholder was unusual and advantageous. Unlike most playwrights who sold scripts for a flat fee, Shakespeare profited from his company\'s success and had more creative freedom than typical hired writers.',
      relatedLearningPoints: ['lp-6-shareholder-model', 'lp-23-business-success'],
    },

    // Q2: Globe Theatre (Chapter 1)
    {
      id: 'final-q2',
      question: 'The Globe Theatre\'s structure—with its thrust stage, multiple levels, and trapdoor—enabled Shakespeare to do what?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'Charge higher admission prices than other theaters',
        'Stage complex action and move fluidly between locations',
        'Prevent Puritan officials from shutting down performances',
        'Accommodate larger audiences than any other theater in London',
      ],
      correctAnswer: 'Stage complex action and move fluidly between locations',
      explanation: 'The Globe\'s innovative architecture—thrust stage extending into the audience, multiple levels (including balcony and trapdoor), and minimal scenery—allowed Shakespeare to stage fluid, complex action. Scenes could flow rapidly, actors could appear "in heaven" or rise from "hell," and imagination filled in the rest.',
      relatedLearningPoints: ['lp-9-globe-structure', 'lp-10-universal-theater'],
    },

    // Q3: Comedy vs. Tragedy Structure (Chapter 1)
    {
      id: 'final-q3',
      question: 'What is the key structural difference between Shakespearean comedy and tragedy?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'Comedy has funny characters; tragedy has serious characters',
        'Comedy ends in marriage and restoration of order; tragedy ends in death and destruction',
        'Comedy is written in prose; tragedy is written in verse',
        'Comedy takes place in England; tragedy takes place in foreign lands',
      ],
      correctAnswer: 'Comedy ends in marriage and restoration of order; tragedy ends in death and destruction',
      explanation: 'The fundamental structural difference is the ending: comedies resolve conflicts through marriage, reconciliation, and restored social harmony, while tragedies end with death, suffering, and often social collapse. This pattern holds true across Romeo and Juliet (tragic ending) versus Twelfth Night, Much Ado, and Midsummer Night\'s Dream (comic endings with multiple marriages).',
      relatedLearningPoints: ['lp-24-three-genres', 'lp-25-comedy-structure', 'lp-26-tragedy-structure'],
    },

    // Q4: Romeo and Juliet (Chapter 2)
    {
      id: 'final-q4',
      question: 'How does Romeo and Juliet bridge comedy and tragedy?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'Half the play is funny and half is sad',
        'It starts as a romantic comedy but turns tragic after Mercutio\'s death',
        'It\'s entirely tragic with no comic elements',
        'The comic subplot about the Nurse balances the tragic main plot',
      ],
      correctAnswer: 'It starts as a romantic comedy but turns tragic after Mercutio\'s death',
      explanation: 'Romeo and Juliet begins with comedy elements—witty banter, disguises at a masked ball, secret romance, helpful intermediaries. But Mercutio\'s death in Act III marks the turning point where comedy pivots to inevitable tragedy. The play demonstrates how close comedy and tragedy are—only timing and luck separate them.',
      relatedLearningPoints: ['lp-romeo-8-turning-point', 'lp-romeo-12-bridge'],
    },

    // Q5: Romeo and Juliet vs. Comedies (Comparative)
    {
      id: 'final-q5',
      question: 'What crucial element saves the lovers in Twelfth Night and Much Ado but is absent in Romeo and Juliet?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'True love between the main characters',
        'Family support for the relationships',
        'Time for truth to emerge before catastrophe',
        'Witty dialogue and clever planning',
      ],
      correctAnswer: 'Time for truth to emerge before catastrophe',
      explanation: 'In Much Ado, Dogberry\'s Watch discovers the truth about Hero\'s innocence in time to prevent permanent tragedy. In Twelfth Night, the twins\' reunion happens before anyone dies. But in Romeo and Juliet, Friar Laurence\'s letter never arrives, and Romeo reaches the tomb moments before Juliet wakes. Timing—the presence or absence of time for truth to emerge—separates comedy from tragedy.',
      relatedLearningPoints: ['lp-romeo-11-timing', 'lp-romeo-9-causation', 'lp-twelfth-11-contrast'],
    },

    // Q6: Disguise Theme (Chapter 3 - Twelfth Night)
    {
      id: 'final-q6',
      question: 'In Twelfth Night, what does Viola\'s disguise as Cesario ultimately reveal?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'That women are better actors than men',
        'That gender is a performance and attraction is irrational',
        'That disguise always leads to tragedy',
        'That honesty is always the best policy',
      ],
      correctAnswer: 'That gender is a performance and attraction is irrational',
      explanation: 'Viola\'s successful performance as Cesario demonstrates that gender is partly performance—she convincingly "acts" male. More importantly, Olivia falling for Cesario (a woman disguised as a man) and Orsino eventually loving Viola (whom he knew as a man) suggests that attraction operates beyond simple categories. The play explores how all identity involves performance.',
      relatedLearningPoints: ['lp-twelfth-1-disguise', 'lp-twelfth-8-performance', 'lp-twelfth-12-identity'],
    },

    // Q7: Twelfth Night Love Triangle
    {
      id: 'final-q7',
      question: 'The love triangle in Twelfth Night (Orsino → Olivia → Cesario → Orsino) is resolved when:',
      type: 'multiple-choice',
      points: 10,
      options: [
        'Viola reveals her disguise and everyone makes rational choices',
        'Sebastian arrives and Olivia marries him while Orsino chooses Viola',
        'Magic intervenes to change everyone\'s feelings',
        'Orsino gives up and Olivia stays single',
      ],
      correctAnswer: 'Sebastian arrives and Olivia marries him while Orsino chooses Viola',
      explanation: 'The resolution requires Sebastian\'s arrival—Olivia marries him thinking he\'s Cesario, then accepts the switch happily. Orsino transfers his affection to Viola once her true identity is revealed. Notably, one character (Demetrius in Midsummer) remains permanently enchanted, and the resolution depends on convenient timing and substitution, suggesting love\'s arbitrary nature.',
      relatedLearningPoints: ['lp-twelfth-4-complication', 'lp-twelfth-12-revelation', 'lp-twelfth-12-marriages'],
    },

    // Q8: Much Ado - Wit and Wordplay (Chapter 4)
    {
      id: 'final-q8',
      question: 'What makes Beatrice and Benedick\'s relationship more satisfying than Claudio and Hero\'s?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'They are wealthier and more socially prominent',
        'Their love is based on intellectual equality and mutual respect earned through wit',
        'They never face any obstacles or conflicts',
        'They marry first and set an example for the others',
      ],
      correctAnswer: 'Their love is based on intellectual equality and mutual respect earned through wit',
      explanation: 'Beatrice and Benedick\'s "merry war" of wit demonstrates intellectual equality rare in Renaissance drama. Unlike Claudio\'s conventional courtship of Hero (based on appearance and social suitability), Beatrice and Benedick\'s relationship is earned through verbal sparring that proves mutual respect. They know each other deeply before admitting love, making their union more satisfying.',
      relatedLearningPoints: ['lp-much-ado-2-wit', 'lp-much-ado-14-earned-love', 'lp-much-ado-3-contrast'],
    },

    // Q9: Deception in Much Ado (Theme comparison)
    {
      id: 'final-q9',
      question: 'Much Ado About Nothing shows that deception can be both helpful and harmful. What distinguishes benevolent from malicious deception?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'Benevolent deception is always honest; malicious deception always lies',
        'Benevolent deception intends to help and brings happiness; malicious deception intends to harm',
        'Benevolent deception is performed by nobles; malicious deception by villains',
        'There is no difference—all deception is equally wrong',
      ],
      correctAnswer: 'Benevolent deception intends to help and brings happiness; malicious deception intends to harm',
      explanation: 'The play contrasts Don Pedro\'s playful gulling of Beatrice and Benedick (which removes pride and enables love) with Don John\'s malicious slander of Hero (which aims to destroy). Both use deception, but intent and consequence differ radically. The play asks us to consider whether well-intentioned manipulation can be justified when it leads to genuine happiness.',
      relatedLearningPoints: ['lp-much-ado-5a-playful', 'lp-much-ado-9-contrast', 'lp-much-ado-12-deception-types'],
    },

    // Q10: Honor Culture (Much Ado)
    {
      id: 'final-q10',
      question: 'True or False: In Much Ado About Nothing, Claudio\'s public accusation of Hero at their wedding reflects Renaissance honor culture, where a woman\'s reputation could be destroyed by mere accusation.',
      type: 'true-false',
      points: 10,
      options: ['True', 'False'],
      correctAnswer: 'True',
      explanation: 'True. Renaissance honor culture placed enormous emphasis on female chastity and reputation. A public accusation of sexual impropriety, even without proof, could permanently ruin a woman. Claudio doesn\'t just refuse to marry Hero—he must publicly shame her to protect his own honor. This honor culture will appear even more darkly in Othello (Part II), where it contributes to tragedy.',
      relatedLearningPoints: ['lp-much-ado-10-public-shame', 'lp-much-ado-9-foreshadowing'],
    },

    // Q11: A Midsummer Night's Dream - Magic/Love (Chapter 5)
    {
      id: 'final-q11',
      question: 'What does the love potion in A Midsummer Night\'s Dream symbolize?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'The importance of magic in Elizabethan England',
        'The arbitrary, irrational nature of romantic attraction',
        'The power of science to control emotions',
        'The danger of trusting fairies',
      ],
      correctAnswer: 'The arbitrary, irrational nature of romantic attraction',
      explanation: 'The love potion—which makes people fall instantly in love with whoever they see first—is a metaphor for attraction itself. Shakespeare suggests that "real" love is equally arbitrary and irrational. We can\'t explain why we love who we love any more than the enchanted lovers can. As Helena says, "Love looks not with the eyes, but with the mind"—it\'s subjective, not objective.',
      relatedLearningPoints: ['midsummer-lp-15-potion-symbol', 'midsummer-lp-19-loves-irrationality', 'midsummer-lp-21-magic-metaphor'],
    },

    // Q12: Midsummer - Multiple Worlds
    {
      id: 'final-q12',
      question: 'A Midsummer Night\'s Dream operates in three distinct worlds. What does the forest represent that Athens cannot?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'Legal authority and patriarchal power',
        'The unconscious, the irrational, and transformative imagination',
        'Commercial theater and working-class life',
        'Historical accuracy and realism',
      ],
      correctAnswer: 'The unconscious, the irrational, and transformative imagination',
      explanation: 'Athens represents civilization, law, and reason—the world of patriarchal authority where Hermia must obey her father. The forest represents everything Athens suppresses: the unconscious, irrational desire, transformation, and imagination. In the forest, normal rules don\'t apply, identities shift, and magic is real. It\'s the space of dreams and possibility.',
      relatedLearningPoints: ['midsummer-lp-1-athens-order', 'midsummer-lp-7-forest-space', 'midsummer-lp-8-parallel-worlds'],
    },

    // Q13: Midsummer - Metatheatrical
    {
      id: 'final-q13',
      question: 'The mechanicals\' performance of "Pyramus and Thisbe" and Puck\'s epilogue both serve what metatheatrical purpose?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'They prove that Shakespeare\'s actors were superior to amateur performers',
        'They remind us that theater is illusion, inviting us to reflect on performance itself',
        'They show that tragedy is impossible to perform correctly',
        'They demonstrate that only educated people can appreciate theater',
      ],
      correctAnswer: 'They remind us that theater is illusion, inviting us to reflect on performance itself',
      explanation: 'The mechanicals\' obviously artificial performance and Puck\'s direct address to the audience ("If we shadows have offended...") break the theatrical illusion. They remind us we\'re watching a play, that actors are "shadows," and that theater requires imaginative participation. This metatheatrical awareness invites us to think about performance, imagination, and reality itself.',
      relatedLearningPoints: ['midsummer-lp-33-play-within-play', 'midsummer-lp-36-metatheatre', 'midsummer-lp-37-dream-metaphor'],
    },

    // Q14: Comparative - Themes Across Plays
    {
      id: 'final-q14',
      question: 'How does disguise function differently in Twelfth Night compared to Much Ado About Nothing?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'In Twelfth Night, disguise enables self-discovery; in Much Ado, disguise creates misunderstanding',
        'In Twelfth Night, disguise is always harmful; in Much Ado, it\'s always helpful',
        'There is no disguise in Much Ado About Nothing',
        'Both plays use disguise identically',
      ],
      correctAnswer: 'In Twelfth Night, disguise enables self-discovery; in Much Ado, disguise creates misunderstanding',
      explanation: 'In Twelfth Night, Viola\'s disguise as Cesario is central—it enables her to survive, express love indirectly, and ultimately leads to self-discovery for multiple characters. In Much Ado, disguise appears in the gulling scenes (where Beatrice and Benedick are "tricked" into admitting love) and in Don John\'s deception (using Margaret disguised as Hero). Much Ado focuses more on the ethics and effects of deception than on identity transformation.',
      relatedLearningPoints: ['lp-twelfth-1-disguise', 'lp-much-ado-12-deception-types', 'lp-twelfth-12-identity'],
    },

    // Q15: Literary Techniques
    {
      id: 'final-q15',
      question: 'Dramatic irony occurs when the audience knows something the characters don\'t. Which play uses this technique most extensively?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'Romeo and Juliet—we know from the prologue they will die',
        'Twelfth Night—we know Cesario is Viola in disguise',
        'Much Ado About Nothing—we know Don John is plotting against Hero',
        'All three plays use dramatic irony equally and extensively',
      ],
      correctAnswer: 'All three plays use dramatic irony equally and extensively',
      explanation: 'All three plays extensively use dramatic irony. Romeo and Juliet\'s prologue tells us they\'re "star-crossed" and doomed. In Twelfth Night, we know Cesario is Viola, creating irony in every scene with Orsino and Olivia. In Much Ado, we know about both the gulling plot and Don John\'s scheme. Dramatic irony creates tension, humor, and deeper meaning—we watch characters act on incomplete information.',
      relatedLearningPoints: ['lp-romeo-1-prologue', 'lp-romeo-3-dramatic-irony', 'lp-twelfth-2b-dramatic-irony'],
    },

    // Q16: Matching - Famous Quotes
    {
      id: 'final-q16',
      question: 'Match each famous quote to the correct play:',
      type: 'matching',
      points: 15,
      correctAnswer: {
        '"What\'s in a name? That which we call a rose / By any other name would smell as sweet"': 'Romeo and Juliet',
        '"If music be the food of love, play on"': 'Twelfth Night',
        '"Some are born great, some achieve greatness, and some have greatness thrust upon them"': 'Twelfth Night',
        '"The course of true love never did run smooth"': 'A Midsummer Night\'s Dream',
        '"Lord, what fools these mortals be!"': 'A Midsummer Night\'s Dream',
        '"Sigh no more, ladies, sigh no more"': 'Much Ado About Nothing',
      },
      explanation: 'These quotes represent each play\'s key themes: Romeo and Juliet explores identity versus family names; Twelfth Night opens with music and love, and includes the famous "greatness" line from the forged letter; Midsummer features Lysander on love\'s obstacles and Puck on mortal foolishness; Much Ado includes Balthasar\'s song about men\'s fickleness.',
      relatedLearningPoints: ['lp-romeo-4-language', 'lp-twelfth-13-language', 'midsummer-lp-35-famous-quotes'],
    },

    // Q17: Iambic Pentameter
    {
      id: 'final-q17',
      question: 'True or False: Shakespeare uses iambic pentameter for ALL dialogue in these plays, never switching to prose.',
      type: 'true-false',
      points: 10,
      options: ['True', 'False'],
      correctAnswer: 'False',
      explanation: 'False! Shakespeare strategically shifts between verse (including iambic pentameter) and prose. Generally, he uses verse for nobles, heightened emotion, and soliloquies, while prose is used for commoners, comedy, madness, and intimate conversations. The mechanicals in Midsummer speak prose; Beatrice and Benedick often use prose for their witty exchanges. The form itself conveys meaning.',
      relatedLearningPoints: ['lp-16-iambic-pentameter', 'lp-17-verse-prose'],
    },

    // Q18: Shakespeare's Language and Imagery
    {
      id: 'final-q18',
      question: 'How does Shakespeare use imagery and metaphor to develop themes in these plays?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'He uses simple, literal language with no symbolic meaning',
        'He consistently uses light/dark imagery in Romeo and Juliet, water imagery in Twelfth Night, and dream imagery in Midsummer to reinforce themes',
        'He only uses imagery in the comedies, never in Romeo and Juliet',
        'He avoids metaphor entirely in favor of direct statement',
      ],
      correctAnswer: 'He consistently uses light/dark imagery in Romeo and Juliet, water imagery in Twelfth Night, and dream imagery in Midsummer to reinforce themes',
      explanation: 'Shakespeare\'s imagery patterns reinforce each play\'s themes: Romeo and Juliet uses light/dark contrasts (Juliet is "the sun," their love is a "bright star" in the dark feud); Twelfth Night uses sea/water imagery (shipwreck, drowning, tides) to symbolize emotion and change; Midsummer uses dream/vision imagery throughout to blur reality and fantasy. This consistent imagery creates unity and deepens meaning.',
      relatedLearningPoints: ['lp-romeo-4-language', 'lp-twelfth-13-language', 'midsummer-lp-37-dream-metaphor'],
    },

    // Q19: Self-Assessment - Comparative Analysis
    {
      id: 'final-q19',
      question: 'Analyze how the theme of "love\'s irrationality" is explored differently across three plays: Romeo and Juliet, Twelfth Night, and A Midsummer Night\'s Dream. Consider the role of fate versus choice, the consequences of irrational love, and whether the plays suggest love can be controlled or understood.',
      type: 'self-assessment',
      points: 20,
      modelAnswer: `All three plays explore love as fundamentally irrational, but they reach different conclusions about its consequences and meaning.

In Romeo and Juliet, love is instant, overwhelming, and ultimately tragic. Romeo forgets Rosaline the moment he sees Juliet, suggesting passion's fickleness. Their love operates against reason—they marry within days, despite the family feud. The play suggests love is fate ("star-crossed"), an irresistible force that leads to both transcendent beauty and terrible destruction. Love here cannot be controlled, and its irrationality proves fatal.

Twelfth Night presents love as equally irrational but ultimately benevolent. Olivia falls for Cesario (a woman in disguise), Orsino eventually loves Viola (whom he knew as a boy), and all the attractions seem arbitrary. Yet the comedy suggests that love's irrationality is harmless—even delightful. The confusion resolves happily, and the play implies that we should embrace love's mystery rather than trying to rationalize it.

A Midsummer Night's Dream takes the most radical position: the love potion makes explicit that attraction is magical, arbitrary, and beyond rational explanation. The enchanted lovers' feelings are indistinguishable from "real" love, suggesting all love is a kind of enchantment. The play celebrates this irrationality as part of imagination's power, linking love to dreams, art, and transformation. Rather than controlling love, we should recognize we're all under its spell.

Together, these plays suggest love operates beyond reason or control. The difference lies in consequences: when love's irrationality meets tragic obstacles (feuding families), disaster follows. When it operates in comic space (Illyria's fantasy, Athens' magical forest), it creates confusion that resolves into marriage and joy.`,
      assessmentCriteria: [
        {
          id: 'crit1',
          text: 'Discussed how Romeo and Juliet presents love as fated, instant, and tragic',
          points: 5,
        },
        {
          id: 'crit2',
          text: 'Explained how Twelfth Night shows love as arbitrary but ultimately benevolent through disguise and confusion',
          points: 5,
        },
        {
          id: 'crit3',
          text: 'Analyzed how Midsummer Night\'s Dream uses the love potion as metaphor for love\'s magical, irrational nature',
          points: 5,
        },
        {
          id: 'crit4',
          text: 'Made comparative connections showing how the plays reach different conclusions about love\'s irrationality based on genre (tragedy vs. comedy)',
          points: 5,
        },
      ],
      explanation: 'This question tests your ability to synthesize themes across multiple works, recognize how genre affects treatment of similar themes, and articulate complex literary analysis—skills essential for understanding Shakespeare\'s artistry.',
      relatedLearningPoints: ['lp-romeo-3-love-at-first-sight', 'lp-twelfth-4-complication', 'midsummer-lp-19-loves-irrationality', 'lp-24-three-genres'],
    },

    // Q20: Self-Assessment - Reflection on Part I
    {
      id: 'final-q20',
      question: 'Reflect on your journey through Shakespeare Part I. How has your understanding of Shakespeare\'s comedies and their relationship to tragedy evolved? What surprised you most about these plays, and what questions do you still have as you prepare to enter the darker world of Part II?',
      type: 'self-assessment',
      points: 20,
      modelAnswer: `Before Part I, I might have viewed Shakespeare\'s comedies as simply "funny plays" and tragedies as "sad plays." But this journey revealed how intimately connected the two genres are, separated mainly by timing and luck rather than fundamental differences in human nature.

What surprised me most was how close comedy comes to tragedy. Romeo and Juliet could have been a comedy if the letter had arrived in time or if Romeo had waited five more minutes at the tomb. Much Ado nearly becomes tragedy when Hero is publicly shamed—only the comic incompetence of Dogberry's Watch saves her. Even the pure comedies contain elements of pain: Viola grieves her supposedly dead brother, Helena endures humiliation and rejection, Hermia faces death or lifelong celibacy. Comedy doesn't erase suffering—it resolves it.

I also discovered how sophisticated these "light" plays are. Twelfth Night explores gender as performance, Much Ado examines the ethics of benevolent deception, and Midsummer creates a metatheatrical meditation on imagination and reality. These aren't simple entertainments—they're profound explorations of identity, desire, and human nature.

The plays of Part I suggest that love is irrational, that social obstacles can be overcome (usually), and that confusion can resolve into clarity and marriage. But I'm now aware of how fragile this comic resolution is. As I prepare for Part II's tragedies (Macbeth, Othello, King Lear), I carry questions: What happens when the timing goes wrong? When magic can't fix things? When the obstacles prove insurmountable? Comedy feels like a narrow escape from tragedy—and Part II will show us what happens when there's no escape.`,
      assessmentCriteria: [
        {
          id: 'crit1',
          text: 'Reflected on how understanding of comedy and its relationship to tragedy evolved through Part I',
          points: 6,
        },
        {
          id: 'crit2',
          text: 'Identified specific surprises or insights gained from the plays studied',
          points: 6,
        },
        {
          id: 'crit3',
          text: 'Articulated questions or anticipations about Part II based on Part I\'s foundation',
          points: 4,
        },
        {
          id: 'crit4',
          text: 'Demonstrated personal engagement with the material and thoughtful synthesis of themes',
          points: 4,
        },
      ],
      explanation: 'This reflective question helps you consolidate your learning from Part I and prepare mentally for the transition to Part II\'s darker themes. There\'s no single "correct" answer—what matters is thoughtful, honest reflection on your learning journey.',
      relatedLearningPoints: ['lp-27-series-progression', 'lp-romeo-12-bridge', 'midsummer-lp-39-comedy-magic'],
    },
  ],
};

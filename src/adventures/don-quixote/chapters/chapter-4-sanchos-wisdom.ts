import type { Chapter } from '../../../types';
import { chapter4Quiz } from '../quizzes/chapter-4-quiz';

export const chapter4: Chapter = {
  id: 'don-quixote-chapter-4',
  title: 'Chapter 4: Sancho\'s Wisdom',
  description: 'Sancho Panza evolves from simple peasant to wise companion, revealing that there are different kinds of intelligence and wisdom.',

  learningObjectives: [
    'Understand how Sancho evolves from simple peasant to wise companion',
    'Analyze the use of proverbs and folk wisdom in the novel',
    'Examine role reversal and mutual transformation between Don Quixote and Sancho',
    'Recognize different forms of intelligence and wisdom',
  ],

  scenes: [
    // Scene 1: Sancho's Evolution
    {
      id: 'dq-ch4-s1-evolution',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/fdef35fe-57a3-494a-83ac-a3f95a59d49b/0_0.png',

      content: `Months had passed since Sancho first joined Don Quixote on the road. The simple peasant who once knew only farming and village life had changed.

He still had his donkey, his love of food and drink, and his practical nature. But something else had grown within him. He'd learned to navigate his master's madness. He'd developed strategies for survival. And most surprisingly, he'd begun to speak with a wisdom that surprised even himself.

As they rode together across the plains, Sancho found himself reflecting on their adventures with a depth he'd never shown back home.

"You know, master," he said thoughtfully, "I've learned that there's more than one way to see the world. Your way has its truths, and so does mine. The hard part is knowing when to use which."`,

      learningPoints: [
        {
          id: 'dq-lp-ch4-s1-growth',
          content: 'Sancho undergoes genuine character development—exposure to Don Quixote\'s idealism gradually elevates his thinking without destroying his practical nature.',
          category: 'character-analysis',
        },
        {
          id: 'dq-lp-ch4-s1-synthesis',
          content: 'Rather than one perspective defeating the other, Sancho learns to synthesize idealism and pragmatism—the novel\'s ultimate wisdom.',
          category: 'thematic-analysis',
        },
      ],
    },

    // Scene 2: Dialogue - Sharing Proverbs
    {
      id: 'dq-ch4-s2-proverbs',
      type: 'dialogue',
      backgroundImage: 'https://cdn.midjourney.com/6c559328-e661-495a-a455-830a1906c692/0_0.png',

      character: {
        id: 'sancho-panza',
        name: 'Sancho Panza',
        portrait: 'https://cdn.midjourney.com/c9ea39d4-3ec8-43ea-aa00-aa12782044aa/0_0.png',
        description: 'Displaying his encyclopedic knowledge of proverbs',
      },

      dialogueTree: {
        id: 'node-1',
        speaker: 'sancho-panza',
        text: 'You know what my grandmother used to say? "A bird in the hand is worth two in the bush." That\'s why I\'m happy with what I have, master.',

        responses: [
          {
            id: 'response-appreciate',
            text: 'Your folk wisdom has its place, Sancho, though it lacks the nobility of chivalric ideals',
            nextNodeId: 'node-2',
          },
          {
            id: 'response-dismiss',
            text: 'Enough proverbs, Sancho! You speak them endlessly!',
            nextNodeId: 'node-3',
          },
        ],

        allNodes: [
          {
            id: 'node-2',
            speaker: 'sancho-panza',
            text: 'Maybe so, but here\'s another: "He who grasps at too much holds nothing fast." Sometimes reaching for giants when you should be grateful for windmills—well, that\'s a problem too.',
            responses: [
              {
                id: 'response-point',
                text: 'Are you saying my quest is foolish, Sancho?',
                nextNodeId: 'node-4',
              },
            ],
          },
          {
            id: 'node-3',
            speaker: 'sancho-panza',
            text: 'But master, proverbs are the wisdom of the people! "More is learned in one day in the marketplace than in a hundred years in the study!" I\'m just saying, book learning isn\'t everything.',
            responses: [
              {
                id: 'response-continue',
                text: 'Perhaps you have a point there...',
                nextNodeId: 'node-4',
              },
            ],
          },
          {
            id: 'node-4',
            speaker: 'sancho-panza',
            text: 'Not foolish, master. Just... "One man\'s ceiling is another man\'s floor," as they say. What looks like madness from one angle might be wisdom from another. I\'m still figuring out which is which.',
            isEnd: true,
          },
        ],
      },

      learningPoints: [
        {
          id: 'dq-lp-ch4-s2-proverbs',
          content: 'Proverbs represent collective folk wisdom accumulated over generations—Sancho\'s peasant knowledge has its own validity alongside Don Quixote\'s book learning.',
          category: 'cultural-context',
        },
      ],
    },

    // Scene 3: Cause-Effect - Understanding Sancho's Proverbs
    {
      id: 'dq-ch4-s3-proverb-matching',
      type: 'cause-effect',
      backgroundImage: 'https://cdn.midjourney.com/6c559328-e661-495a-a455-830a1906c692/0_0.png',

      prompt: 'Match Sancho\'s proverbs with what they reveal about his wisdom',

      pairs: [
        {
          id: 'pair-1',
          cause: '"Tell me what company you keep, and I\'ll tell you who you are"',
          effect: 'Shows Sancho understands that his association with Don Quixote has transformed him',
          explanation: 'Sancho recognizes that for better or worse, we become like those we spend time with. His months with the idealistic knight have elevated his thinking without destroying his practical nature.',
        },
        {
          id: 'pair-2',
          cause: '"When the head aches, all the body is the worse for it"',
          effect: 'Reveals Sancho\'s awareness that Don Quixote\'s delusions affect everyone around him',
          explanation: 'This proverb shows Sancho\'s growing understanding that individual madness has social consequences—we are all interconnected, and one person\'s problems ripple outward.',
        },
        {
          id: 'pair-3',
          cause: '"Every man is the son of his own works"',
          effect: 'Demonstrates Sancho\'s democratic belief that actions matter more than noble birth',
          explanation: 'This proverb challenges the aristocratic assumptions of chivalry—merit comes from deeds, not bloodlines. It\'s a radical statement for a peasant in 17th-century Spain.',
        },
        {
          id: 'pair-4',
          cause: '"Better a sparrow in hand than a vulture on the wing"',
          effect: 'Expresses Sancho\'s practical preference for certain small goods over uncertain grand promises',
          explanation: 'This is the opposite of Don Quixote\'s approach. Sancho values what\'s real and present over what\'s merely possible or promised—the core of his pragmatic wisdom.',
        },
      ],

      learningPoints: [
        {
          id: 'dq-lp-ch4-s3-folk-wisdom',
          content: 'Folk proverbs encode practical survival knowledge—they represent the accumulated wisdom of ordinary people dealing with real-world challenges.',
          category: 'cultural-context',
        },
        {
          id: 'dq-lp-ch4-s3-class',
          content: 'Sancho\'s proverbs often contain subtle class critique—challenging aristocratic assumptions about nobility, worth, and intelligence.',
          category: 'thematic-analysis',
        },
      ],
    },

    // Scene 4: The Promise of the Island
    {
      id: 'dq-ch4-s4-promise',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/900e079d-ce42-4533-abbe-49997b264416/0_0.png',

      content: `Throughout their travels, Don Quixote had promised Sancho governorship of an island. It was the carrot that kept the peasant faithful through all the hardships and humiliations.

"When will I get my island, master?" Sancho would ask periodically.

"Soon, Sancho, soon! We must first conquer it, naturally."

But no islands appeared on the dry plains of La Mancha. The promise remained as distant and theoretical as Dulcinea del Toboso.

Still, something interesting had happened: Sancho no longer entirely believed in the island, yet he still followed Don Quixote. The promise had become less important than the journey itself.`,

      inlineAnnotations: [
        {
          id: 'dq-ann-island',
          text: 'island',
          tooltip: {
            title: 'The Promised Island',
            content: 'In chivalric romances, knights routinely conquered islands and made their squires governors. Don Quixote promises this impossible thing as if it were inevitable—typical of his confusion of literature with reality.',
            category: 'literary-context',
          },
        },
      ],

      learningPoints: [
        {
          id: 'dq-lp-ch4-s4-loyalty',
          content: 'Sancho\'s loyalty transforms from mercenary (seeking the island) to genuine—he stays not for the reward but because the relationship itself has become meaningful.',
          category: 'character-analysis',
        },
        {
          id: 'dq-lp-ch4-s4-journey',
          content: 'The novel suggests that the journey itself, not the destination, provides value—a common literary theme given philosophical depth here.',
          category: 'thematic-analysis',
        },
      ],
    },

    // Scene 5: Decision - Stay or Go
    {
      id: 'dq-ch4-s5-decision',
      type: 'decision',
      backgroundImage: 'https://cdn.midjourney.com/900e079d-ce42-4533-abbe-49997b264416/0_0.png',

      prompt: 'Should Sancho continue with Don Quixote or return to his farm?',
      context: `Sancho had been away from home for a long time. His wife missed him, his farm needed tending, and he'd endured countless beatings, hunger, and discomfort.

The island seemed no closer than when they'd started. Don Quixote was no less mad. The adventures were as ridiculous as ever.

He could leave. Just take his donkey and ride home. Go back to a normal, sensible life.

But something held him back.`,

      choices: [
        {
          id: 'dq-choice-stay',
          text: 'Stay with Don Quixote—the friendship is more valuable than comfort',
          consequence: 'Sancho realizes that despite everything, he\'s grown to care for the old madman. Who else would stay with Don Quixote? Who else would tell him the truth, even when he doesn\'t listen? Their bond has become real.',
          learningPoints: [
            {
              id: 'dq-lp-ch4-s5-bond',
              content: 'The master-servant relationship evolves into genuine friendship—transcending both material reward and social hierarchy.',
              category: 'character-analysis',
            },
          ],
        },
        {
          id: 'dq-choice-leave',
          text: 'Leave and return to practical reality—enough madness',
          consequence: 'Sancho starts to pack his things, but then Don Quixote looks so lost and alone that Sancho can\'t go through with it. "One more adventure," he tells himself. "Then I\'ll leave." But he knows he won\'t.',
          learningPoints: [
            {
              id: 'dq-lp-ch4-s5-responsibility',
              content: 'Sancho feels responsibility for Don Quixote\'s wellbeing—showing how relationships create ethical obligations beyond rational self-interest.',
              category: 'thematic-analysis',
            },
          ],
        },
        {
          id: 'dq-choice-negotiate',
          text: 'Negotiate better terms—if no island, then at least better treatment',
          consequence: 'Don Quixote immediately promises a larger island, better rewards, and more respect. Sancho smiles sadly—his master will promise anything, knowing the promises cost nothing since they\'ll never be fulfilled. But at least he asked.',
          learningPoints: [
            {
              id: 'dq-lp-ch4-s5-pragmatic',
              content: 'Sancho maintains his pragmatic nature even within the relationship—trying to extract value while understanding the game they\'re both playing.',
              category: 'character-analysis',
            },
          ],
        },
      ],

      learningPoints: [],
    },

    // Scene 6: Arrival at the Duke's Palace
    {
      id: 'dq-ch4-s6-palace',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/34e5aefc-a2f1-468f-9d47-90b2937cd0ee/0_0.png',

      content: `Their fortunes changed unexpectedly when they encountered a Duke and Duchess who had read about Don Quixote's adventures. (For by this point in the novel, Part One of Don Quixote's story had been published, making him inadvertently famous!)

The nobles found Don Quixote hilarious and decided to play an elaborate prank. They invited him to their palace, treated him like a real knight, and—most significantly for our story—they made Sancho the governor of "the island of Barataria."

It wasn't a real island, of course. It was a small village on the Duke's land. But they told Sancho it was an island and gave him the title of governor.

Finally, after all this time, the promise was coming true—or was it?`,

      learningPoints: [
        {
          id: 'dq-lp-ch4-s6-metafiction',
          content: 'The novel becomes metafictional—characters have read Part One and react to Don Quixote as a fictional character, blurring the line between literature and reality.',
          category: 'literary-technique',
        },
        {
          id: 'dq-lp-ch4-s6-mockery',
          content: 'The Duke and Duchess\'s elaborate prank is both entertaining and cruel—they treat Don Quixote and Sancho as performers for their amusement.',
          category: 'thematic-analysis',
        },
      ],
    },

    // Scene 7: Dialogue with the Duchess
    {
      id: 'dq-ch4-s7-duchess',
      type: 'dialogue',
      backgroundImage: 'https://cdn.midjourney.com/fe8b2ed2-38e4-4ba5-b898-0a0c9fc52e46/0_0.png',

      character: {
        id: 'duchess',
        name: 'The Duchess',
        portrait: 'https://cdn.midjourney.com/4a37b215-f9d7-4bfd-8f12-6acb1cf08909/0_0.png',
        description: 'An aristocrat finding entertainment in Don Quixote and Sancho',
      },

      dialogueTree: {
        id: 'node-1',
        speaker: 'duchess',
        text: 'So, Sancho Panza, you follow your master hoping for an island. Tell me—do you truly believe he can conquer one and make you governor?',

        responses: [
          {
            id: 'response-believe',
            text: 'My master is capable of great things, my lady',
            nextNodeId: 'node-2',
          },
          {
            id: 'response-honest',
            text: 'Honestly? I\'m not sure anymore, my lady',
            nextNodeId: 'node-3',
          },
        ],

        allNodes: [
          {
            id: 'node-2',
            speaker: 'duchess',
            text: '*laughing* How diplomatic! You\'re more clever than you pretend, Sancho. Well, I have good news—your master has already "conquered" an island for you! You are to be governor of Barataria immediately!',
            responses: [
              {
                id: 'response-excited',
                text: 'Really? Truly? I\'m to be a governor?',
                nextNodeId: 'node-4',
              },
            ],
          },
          {
            id: 'node-3',
            speaker: 'duchess',
            text: '*smiling* Such honesty! I like you, Sancho. You have more sense than your master. But guess what? You\'re going to be a governor anyway—we\'ve arranged it as entertainment!',
            responses: [
              {
                id: 'response-confused',
                text: 'Entertainment? What do you mean, my lady?',
                nextNodeId: 'node-4',
              },
            ],
          },
          {
            id: 'node-4',
            speaker: 'duchess',
            text: 'You\'ll govern the "island" of Barataria—actually a village on my husband\'s estate. We want to see if a peasant can actually govern wisely. Should be quite amusing!',
            isEnd: true,
          },
        ],
      },

      learningPoints: [
        {
          id: 'dq-lp-ch4-s7-exploitation',
          content: 'The aristocrats exploit Don Quixote and Sancho for entertainment—treating them as curiosities rather than people, revealing class cruelty.',
          category: 'thematic-analysis',
        },
      ],
    },

    // Scene 8: Governor Sancho
    {
      id: 'dq-ch4-s8-governor',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/4d261c6b-c79a-4c52-96f6-9efa20a49fef/0_0.png',

      content: `And so Sancho Panza, illiterate peasant farmer, became Governor Sancho Panza of the "island" of Barataria.

The Duke and Duchess expected comedy—poor decisions, corruption, maybe some amusing displays of ignorance. They set up elaborate pranks to humiliate him.

But something unexpected happened.

When people brought their disputes to Governor Sancho, he listened carefully. He asked questions. And then he delivered judgments that were remarkably wise and just.

He had no education, no legal training, no experience in governance. But he had common sense, practical wisdom accumulated from years of living, and an innate sense of fairness.

The pranks meant to expose him as a fool instead revealed his natural wisdom.`,

      learningPoints: [
        {
          id: 'dq-lp-ch4-s8-wisdom',
          content: 'Sancho demonstrates that wisdom doesn\'t require education—his practical intelligence and moral sense prove more valuable than book learning.',
          category: 'character-analysis',
        },
        {
          id: 'dq-lp-ch4-s8-subversion',
          content: 'The intended joke backfires—Sancho\'s success as governor subverts class assumptions about who is capable of leadership and wisdom.',
          category: 'thematic-analysis',
        },
      ],
    },

    // Scene 9: Primary Source - Historical Governance
    {
      id: 'dq-ch4-s9-primary-source',
      type: 'primary-source',
      backgroundImage: 'https://cdn.midjourney.com/4d261c6b-c79a-4c52-96f6-9efa20a49fef/0_0.png',

      prompt: 'What does Sancho\'s success as governor reveal about intelligence and wisdom?',

      source: {
        title: 'Governance: Theory vs. Practice',
        author: 'Cervantes (fictional document)',
        date: '17th Century',
        type: 'text',
        content: `**Traditional View of Governance (17th Century):**
- Requires noble birth and breeding
- Needs extensive education in law, philosophy, history
- Demands knowledge of classical texts (Aristotle, Cicero)
- Must understand Latin and legal codes
- Should maintain aristocratic dignity and distance

<br />

**Sancho's Actual Governing Approach:**
- Listens to both parties fully
- Asks practical, common-sense questions
- Draws on folk wisdom and proverbs
- Makes decisions based on fairness, not precedent
- Treats everyone equally regardless of class
- Uses clear language everyone can understand

<br />

**Example Case:**

Two men come before Sancho. One lent the other ten gold pieces. The borrower claims he already repaid it. No witnesses, no receipt.

<br />

**Learned Judge Might:** Cite legal precedents, require documentation, dismiss case for lack of evidence

<br />

**Sancho's Solution:** Sancho tells the borrower: "Hand your walking stick to the lender to hold while you take your oath." The borrower gives the stick to the lender, then swears he already repaid the debt. After swearing, the borrower reaches to take his stick back—but Sancho stops him. "No," Sancho says, "the stick now belongs to the lender as payment for the debt." When the lender examines his new walking stick, he discovers the ten gold pieces hidden inside! The borrower had hidden the money in the stick so he could swear truthfully ("I gave you the money"—literally, inside the stick he was holding) while planning to keep it. Caught by his own cleverness!

<br />

**Result:** Justice served through practical wisdom, not legal theory.`,
        citation: 'Comparing learned governance with Sancho\'s practical wisdom',
      },

      questions: [
        {
          id: 'dq-ch4-s9-q1',
          question: 'What does Sancho\'s success as governor reveal about intelligence and wisdom?',
          type: 'multiple-choice',
          options: [
            'Wisdom requires formal education and legal training—Sancho succeeds only because the cases are simple',
            'Practical experience and common sense can be more valuable than book learning—Sancho\'s lack of legal training helps him avoid technicalities and treat all classes equally',
            'All forms of intelligence are equally valuable in all situations—there is no difference between Sancho\'s wisdom and formal education',
            'Noble birth naturally confers wisdom—Sancho succeeds because he has hidden aristocratic ancestry',
          ],
          correctAnswer: 'Practical experience and common sense can be more valuable than book learning—Sancho\'s lack of legal training helps him avoid technicalities and treat all classes equally',
          explanation: 'Cervantes distinguishes between different types of intelligence. Sancho\'s practical experience gives him advantages: he listens fully, asks practical questions, uses common-sense tests, and treats all classes equally. His lack of legal education helps him avoid getting trapped in technicalities. This represents a radical class critique suggesting that peasants can govern as well as educated nobles, and that wisdom is experiential rather than purely academic.',
        },
      ],

      learningPoints: [
        {
          id: 'dq-lp-ch4-s9-intelligence',
          content: 'Cervantes distinguishes between different types of intelligence—book learning (Don Quixote) vs. practical wisdom (Sancho), suggesting both have value.',
          category: 'thematic-analysis',
        },
        {
          id: 'dq-lp-ch4-s9-class',
          content: 'The Barataria episode is a radical class critique—showing that a peasant can govern as well or better than educated nobles.',
          category: 'historical-context',
        },
      ],
    },

    // Scene 10: Cause and Effect - Sancho's Judgments
    {
      id: 'dq-ch4-s10-cause-effect',
      type: 'cause-effect',
      backgroundImage: 'https://cdn.midjourney.com/4d261c6b-c79a-4c52-96f6-9efa20a49fef/0_0.png',
      image: 'https://cdn.midjourney.com/489ed7ae-6636-41bd-9695-2520e631506a/0_0.png',

      prompt: 'Match Sancho\'s approach to the wise outcomes he achieves',

      pairs: [
        {
          id: 'pair-1',
          cause: 'Sancho listens fully to both sides before making any judgment',
          effect: 'People feel heard and respected, even those who lose their cases',
          explanation: 'Unlike educated judges who might interrupt or rely on precedent, Sancho\'s patient listening builds trust and fairness.',
        },
        {
          id: 'pair-2',
          cause: 'Sancho uses common sense and practical tests rather than legal theory',
          effect: 'He catches liars and frauds that clever legal arguments might have hidden',
          explanation: 'The walking stick trick shows how practical wisdom can outsmart those who try to manipulate legal technicalities.',
        },
        {
          id: 'pair-3',
          cause: 'Sancho treats peasants and nobles with equal respect and fairness',
          effect: 'All social classes find his court accessible and just',
          explanation: 'His lack of aristocratic prejudice becomes an advantage—he judges cases on merit, not on the status of the parties.',
        },
        {
          id: 'pair-4',
          cause: 'Sancho applies proverbs and folk wisdom to legal problems',
          effect: 'His judgments make sense to ordinary people and align with community values',
          explanation: 'Proverbs encode the accumulated wisdom of the community—Sancho speaks their language rather than the foreign language of legal codes.',
        },
        {
          id: 'pair-5',
          cause: 'Sancho explains his reasoning clearly in simple language',
          effect: 'People understand and accept his decisions, reducing appeals and resentment',
          explanation: 'Legal jargon often obscures rather than clarifies—Sancho\'s directness creates transparency and understanding.',
        },
      ],

      learningPoints: [
        {
          id: 'dq-lp-ch4-s10-leadership',
          content: 'Effective leadership requires emotional intelligence and fairness more than credentials—Sancho proves this through his governance.',
          category: 'thematic-analysis',
        },
        {
          id: 'dq-lp-ch4-s10-democracy',
          content: 'The novel contains surprisingly democratic implications—suggesting that common people possess wisdom and capability for self-governance.',
          category: 'historical-context',
        },
      ],
    },

    // Scene 11: Growing Disillusionment
    {
      id: 'dq-ch4-s11-disillusionment',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/cbebf991-4267-436f-8106-ac855c96b8a2/0_0.png',

      content: `Despite his success, Sancho found governing less satisfying than he'd imagined.

The Duke's servants played cruel pranks on him—serving him food he couldn't eat, waking him at odd hours, staging false emergencies. They were testing him, mocking him, and making the job far harder than it needed to be.

More deeply, Sancho realized that power brought stress and responsibility. Every decision affected someone's life. People constantly wanted something from him. He couldn't relax, couldn't be himself, couldn't even eat a simple meal without it becoming a state occasion.

"Is this what I dreamed of?" he asked himself, sitting in his lonely governor's chambers. "All that time on the road with Don Quixote, I thought an island would solve everything. But I was happier on the road."`,

      learningPoints: [
        {
          id: 'dq-lp-ch4-s11-realization',
          content: 'Sancho learns that achieving one\'s dreams can be disappointing—the fantasy of power was better than the reality of responsibility.',
          category: 'character-analysis',
        },
        {
          id: 'dq-lp-ch4-s11-freedom',
          content: 'The novel values freedom over status—Sancho ultimately prefers the liberty of the road to the constraints of power.',
          category: 'thematic-analysis',
        },
      ],
    },

    // Scene 12: Dialogue - Renunciation
    {
      id: 'dq-ch4-s12-renunciation',
      type: 'dialogue',
      backgroundImage: 'https://cdn.midjourney.com/cbebf991-4267-436f-8106-ac855c96b8a2/0_0.png',
      image: 'https://cdn.midjourney.com/fcd5bbeb-847f-4578-90e6-95a6bc8b6ee1/0_0.png',

      character: {
        id: 'duke',
        name: 'The Duke',
        portrait: 'https://cdn.midjourney.com/6d6aee99-a759-4417-a864-a41eec826764/0_0.png',
        description: 'Surprised by Sancho\'s decision',
      },

      dialogueTree: {
        id: 'node-1',
        speaker: 'duke',
        text: 'Governor Sancho, we hear you\'ve been doing remarkably well! Surely you want to continue governing your island?',

        responses: [
          {
            id: 'response-resign',
            text: 'Actually, my lord, I wish to resign. I want to return to my master.',
            nextNodeId: 'node-2',
          },
          {
            id: 'response-explain',
            text: 'The island is fine, but I miss the road and my friend Don Quixote',
            nextNodeId: 'node-3',
          },
        ],

        allNodes: [
          {
            id: 'node-2',
            speaker: 'duke',
            text: 'Resign? But you just got here! Most men would give anything for power and status. You\'re choosing to give it up?',
            responses: [
              {
                id: 'response-freedom',
                text: 'I came naked into this government, and naked I leave it. I gained nothing but experience.',
                nextNodeId: 'node-4',
              },
            ],
          },
          {
            id: 'node-3',
            speaker: 'duke',
            text: 'The mad knight? You\'d rather follow a lunatic than govern an island? I don\'t understand you at all, Sancho Panza!',
            responses: [
              {
                id: 'response-wisdom',
                text: 'That\'s because you\'ve never been truly free, my lord. Power isn\'t freedom—it\'s just a prettier cage.',
                nextNodeId: 'node-4',
              },
            ],
          },
          {
            id: 'node-4',
            speaker: 'duke',
            text: '*shaking his head in amazement* You know what, Sancho? You\'re wiser than I thought. Perhaps wiser than any of us. Go with my blessing.',
            isEnd: true,
          },
        ],
      },

      learningPoints: [
        {
          id: 'dq-lp-ch4-s12-choice',
          content: 'Sancho\'s choice to resign demonstrates genuine wisdom—he values authentic relationship and freedom over status and wealth.',
          category: 'character-analysis',
        },
        {
          id: 'dq-lp-ch4-s12-reversal',
          content: 'The role reversal is complete—the Duke acknowledges that the "simple" peasant possesses wisdom the nobles lack.',
          category: 'thematic-analysis',
        },
      ],
    },

    // Scene 13: Departure from Barataria
    {
      id: 'dq-ch4-s13-departure',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/df5a91c8-b17a-400a-8648-463aa21a8b6e/0_0.png',

      content: `Sancho rode his donkey away from Barataria without looking back. The servants watched in confusion—no one voluntarily gave up power and status.

But Sancho felt lighter with each step away from the island. The weight of responsibility lifted from his shoulders. He was free again.

"I came naked into this government," he said to his donkey, "and naked I leave it. I've neither lost nor won."

But that wasn't quite true. He'd learned something profound about himself and about what mattered in life. He'd proven his capability and then chosen something better than capability—authenticity.

As the palace disappeared behind him, Sancho thought of Don Quixote waiting somewhere ahead on the road. His friend. His mad, impossible, wonderful friend.

"Hold on, master," Sancho said to the wind. "I'm coming back."`,

      learningPoints: [
        {
          id: 'dq-lp-ch4-s13-return',
          content: 'Sancho\'s return to Don Quixote completes his transformation—he chooses freely what he once did for money, showing genuine character growth.',
          category: 'character-analysis',
        },
      ],
    },

    // Scene 14: Decision - What Matters Most
    {
      id: 'dq-ch4-s14-decision',
      type: 'decision',
      backgroundImage: 'https://cdn.midjourney.com/df5a91c8-b17a-400a-8648-463aa21a8b6e/0_0.png',

      prompt: 'Sancho leaves Barataria. What has he learned?',
      context: `As Sancho rode his donkey away from the island, he reflected on everything that had happened.

He'd achieved his dream—became a governor, proved he was capable, earned respect. And then he'd walked away from it all.

What did that mean? What had he learned?`,

      choices: [
        {
          id: 'dq-choice-freedom',
          text: 'That freedom is more valuable than power',
          consequence: 'Yes. He\'d rather be free with Don Quixote than trapped by responsibilities and expectations. The road itself was the real reward.',
          learningPoints: [
            {
              id: 'dq-lp-ch4-s13-freedom',
              content: 'True freedom means choosing one\'s own path—Sancho discovers that liberty matters more than status or comfort.',
              category: 'thematic-analysis',
            },
          ],
        },
        {
          id: 'dq-choice-friendship',
          text: 'That friendship is more valuable than ambition',
          consequence: 'Exactly. His bond with Don Quixote, for all its difficulties, was real and meaningful. The island was just a thing—Don Quixote was his friend.',
          learningPoints: [
            {
              id: 'dq-lp-ch4-s13-friendship',
              content: 'Authentic human connection trumps material success—the novel celebrates relationship over achievement.',
              category: 'thematic-analysis',
            },
          ],
        },
        {
          id: 'dq-choice-self-knowledge',
          text: 'That he knows who he is—and that\'s enough',
          consequence: 'Perhaps most importantly, yes. Sancho had discovered his own worth. He didn\'t need a title to prove his value. He was enough as he was.',
          learningPoints: [
            {
              id: 'dq-lp-ch4-s13-self',
              content: 'Self-knowledge and self-acceptance are forms of wisdom—Sancho achieves what Don Quixote cannot: peace with who he truly is.',
              category: 'character-analysis',
            },
          ],
        },
      ],

      learningPoints: [],
    },

    // Scene 15: Timeline Game
    {
      id: 'dq-ch4-s15-timeline',
      type: 'timeline-game',
      backgroundImage: 'https://cdn.midjourney.com/df5a91c8-b17a-400a-8648-463aa21a8b6e/0_0.png',

      prompt: 'Order the key moments in Sancho\'s character development',
      successThreshold: 50,

      timelineEvents: [
        {
          id: 'event-1',
          title: 'Simple Peasant Farmer',
          year: 1,
          description: 'Sancho starts as an illiterate farmer concerned only with survival and basic comforts. At this stage, Sancho has practical intelligence but no broader vision—he knows farming, not philosophy.',
        },
        {
          id: 'event-2',
          title: 'Joins Don Quixote for Material Reward',
          year: 2,
          description: 'Sancho becomes squire hoping for the promised island governorship. His motivation is purely mercenary—the island will lift him out of poverty and give his family security.',
        },
        {
          id: 'event-3',
          title: 'Begins Using Proverbs and Folk Wisdom',
          year: 3,
          description: 'Sancho starts articulating his practical knowledge through traditional sayings. Exposure to Don Quixote\'s eloquence encourages Sancho to find his own voice—proverbs become his form of philosophy.',
        },
        {
          id: 'event-4',
          title: 'Develops Genuine Loyalty Beyond Reward',
          year: 4,
          description: 'Sancho\'s attachment to Don Quixote becomes emotional and ethical, not just economic. The relationship transforms from contract to friendship—Sancho cares about Don Quixote as a person.',
        },
        {
          id: 'event-5',
          title: 'Becomes Governor of Barataria',
          year: 5,
          description: 'Sancho finally achieves his dream of governorship—and proves surprisingly capable. His wise judgments shock everyone, revealing that wisdom doesn\'t require education or nobility.',
        },
        {
          id: 'event-6',
          title: 'Renounces Power for Freedom',
          year: 6,
          description: 'Sancho voluntarily resigns his governorship to return to Don Quixote. This choice shows complete character transformation—he values relationship and freedom over status and comfort.',
        },
      ],

      learningPoints: [
        {
          id: 'dq-lp-ch4-s14-arc',
          content: 'Sancho undergoes a complete character arc—from mercenary peasant to wise man who understands what truly matters in life.',
          category: 'character-analysis',
        },
        {
          id: 'dq-lp-ch4-s14-transformation',
          content: 'Character transformation requires experience, not just intention—Sancho\'s journey teaches him what no book could have taught.',
          category: 'thematic-analysis',
        },
      ],

      events: {
        onExit: [
          {
            type: 'quiz',
            componentId: 'quiz-don-quixote-chapter-4',
            condition: { type: 'if-not-completed' },
          },
        ],
      },
    },
  ],

  endQuiz: chapter4Quiz,
};

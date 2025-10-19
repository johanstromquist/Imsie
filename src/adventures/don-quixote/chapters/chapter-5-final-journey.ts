import type { Chapter } from '../../../types';
import { chapter5Quiz} from '../quizzes/chapter-5-quiz';

export const chapter5: Chapter = {
  id: 'don-quixote-chapter-5',
  title: 'Chapter 5: The Final Journey',
  description: 'Don Quixote faces defeat, returns home, and in his final moments chooses between madness and sanity—with profound implications.',

  learningObjectives: [
    'Understand Don Quixote\'s return to sanity and its implications',
    'Analyze the bittersweet nature of the novel\'s conclusion',
    'Examine themes of death, legacy, and the value of a life lived',
    'Recognize metafictional elements in the novel\'s self-awareness',
  ],

  scenes: [
    // Scene 1: The Knight of the White Moon
    {
      id: 'dq-ch5-s1-defeat',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/786e6bbe-6d58-40af-9a2b-c02a21bfc873/0_0.png',
      image: 'https://cdn.midjourney.com/5ed66a82-0f9f-4c9c-8127-55e4396abf38/0_0.png',

      content: `On the beach near Barcelona, Don Quixote faced his final challenge: a mysterious knight in white armor who called himself the Knight of the White Moon.

"Don Quixote de la Mancha!" the stranger called out. "I challenge you! If I win, you must return home and abandon knight-errantry for one full year!"

What Don Quixote didn't know—what Sancho suspected but couldn't confirm—was that the Knight of the White Moon was actually Sansón Carrasco, the bachelor from their village. He had disguised himself to trick Don Quixote into returning home.

The fight was brief. Don Quixote charged valiantly, but the younger, stronger Sansón knocked him from his horse. For the first time, Don Quixote was truly defeated in combat—by the conditions of his own chivalric code.`,

      learningPoints: [
        {
          id: 'dq-lp-ch5-s1-defeat',
          content: 'Don Quixote\'s defeat is both physical and psychological—he loses according to the very rules he cherishes, making the defeat absolute.',
          category: 'plot-structure',
        },
        {
          id: 'dq-lp-ch5-s1-intervention',
          content: 'Sansón\'s well-meaning intervention uses Don Quixote\'s own beliefs against him—showing how love can justify deception for someone\'s "own good."',
          category: 'thematic-analysis',
        },
      ],
    },

    // Scene 2: Dialogue After Defeat
    {
      id: 'dq-ch5-s2-aftermath',
      type: 'dialogue',
      backgroundImage: 'https://cdn.midjourney.com/94bccbee-9831-4b26-8b0f-2ed1b2a4fa7d/0_0.png',

      character: {
        id: 'sancho-panza',
        name: 'Sancho Panza',
        portrait: 'https://cdn.midjourney.com/c9ea39d4-3ec8-43ea-aa00-aa12782044aa/0_0.png',
        description: 'Heartbroken by his master\'s defeat',
      },

      dialogueTree: {
        id: 'node-1',
        speaker: 'sancho-panza',
        text: 'Master... are you hurt? Please, get up. We can continue! This doesn\'t mean anything!',

        responses: [
          {
            id: 'response-honor',
            text: 'I am defeated, Sancho. My honor demands I keep my word and return home.',
            nextNodeId: 'node-2',
          },
          {
            id: 'response-broken',
            text: '*quietly* I have failed, Sancho. I have failed in everything.',
            nextNodeId: 'node-3',
          },
        ],

        allNodes: [
          {
            id: 'node-2',
            speaker: 'sancho-panza',
            text: 'But master! You\'ve had hundreds of adventures! You\'ve fought giants and armies! One defeat doesn\'t—',
            responses: [
              {
                id: 'response-correct',
                text: 'I fought windmills and sheep, Sancho. Let us speak truth now.',
                nextNodeId: 'node-4',
              },
            ],
          },
          {
            id: 'node-3',
            speaker: 'sancho-panza',
            text: 'Failed? Master, you gave me the greatest adventure of my life! You taught me to see beyond my narrow world! How is that failure?',
            responses: [
              {
                id: 'response-sancho-view',
                text: 'Perhaps you are right, faithful Sancho. Perhaps there is more than one way to measure success.',
                nextNodeId: 'node-4',
              },
            ],
          },
          {
            id: 'node-4',
            speaker: 'sancho-panza',
            text: '*tears in his eyes* Don\'t give up, master. Please. The world needs people like you, people who believe things can be better. Even if—even if they\'re a little mad.',
            isEnd: true,
          },
        ],
      },

      learningPoints: [
        {
          id: 'dq-lp-ch5-s2-loyalty',
          content: 'Sancho\'s heartbroken loyalty shows how deeply their relationship has developed—he\'s no longer following for reward but from genuine love.',
          category: 'character-analysis',
        },
        {
          id: 'dq-lp-ch5-s2-recognition',
          content: 'Don Quixote\'s admission of "windmills and sheep" suggests his grasp on his delusion is weakening—reality is breaking through.',
          category: 'character-analysis',
        },
      ],
    },

    // Scene 3: The Journey Home
    {
      id: 'dq-ch5-s3-return',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/f1257f21-1d37-4e53-8582-6da8120acfe9/0_0.png',

      content: `The journey home was unlike any they'd taken before. No more talk of adventures. No more pointing out giants or castles. Don Quixote rode in silence, his head down, the brass basin—the "Helmet of Mambrino"—hanging from Rocinante's saddle like a shameful reminder.

Sancho tried everything to lift his master's spirits, but nothing worked. It was as if defeating Don Quixote in combat had broken something essential inside him.

"Master," Sancho said gently, "when the year is up, we can ride out again. Think of all the adventures we'll have!"

But Don Quixote only shook his head. "Perhaps, Sancho. Perhaps."

They both knew he was lying.`,

      inlineAnnotations: [
        {
          id: 'dq-ann-melancholy',
          text: 'unlike any they\'d taken before',
          tooltip: {
            title: 'The Loss of Wonder',
            content: 'The journey home mirrors their outward journeys but inverted—where they once rode with hope and excitement, they now return in defeat and silence. The same roads feel completely different.',
            category: 'literary-context',
          },
        },
      ],

      learningPoints: [
        {
          id: 'dq-lp-ch5-s3-melancholy',
          content: 'The melancholic tone of the return journey emphasizes loss—not just of adventures but of the spirit and hope that made them possible.',
          category: 'thematic-analysis',
        },
        {
          id: 'dq-lp-ch5-s3-end',
          content: 'Both characters sense that something irreversible has happened—the adventure has truly ended, and no future year will bring it back.',
          category: 'plot-structure',
        },
      ],
    },

    // Scene 4: Decision - Should Friends Encourage the Fantasy?
    {
      id: 'dq-ch5-s4-decision',
      type: 'decision',
      backgroundImage: 'https://cdn.midjourney.com/f1257f21-1d37-4e53-8582-6da8120acfe9/0_0.png',

      prompt: 'Should Don Quixote\'s friends try to revive his chivalric fantasies or welcome his return to sanity?',
      context: `When they reached the village, friends and family gathered. They saw how defeated Don Quixote appeared. Some thought this was good—finally, he'd return to being sensible Alonso Quixano.

But others, especially Sancho, wondered: Was the madness really worse than this empty sadness?`,

      choices: [
        {
          id: 'dq-choice-encourage-sanity',
          text: 'Welcome sanity—he needs to face reality and heal',
          consequence: 'The priest and barber nod approvingly. "Finally, he\'s come to his senses! This is what we\'ve hoped for." But looking at Don Quixote\'s hollow eyes, it\'s hard to see this as victory.',
          learningPoints: [
            {
              id: 'dq-lp-ch5-s4-sanity-cost',
              content: 'Returning to sanity has a cost—Don Quixote loses not just his delusions but also his purpose, passion, and joy.',
              category: 'thematic-analysis',
            },
          ],
        },
        {
          id: 'dq-choice-encourage-fantasy',
          text: 'Try to revive the fantasy—mad and happy beats sane and miserable',
          consequence: 'Sancho tries desperately to interest Don Quixote in new adventures, new quests. But the spark is gone. Once the fantasy is broken, it cannot be simply restarted.',
          learningPoints: [
            {
              id: 'dq-lp-ch5-s4-irreversible',
              content: 'Some losses are irreversible—Don Quixote\'s belief system, once shattered, cannot be reassembled through willpower alone.',
              category: 'thematic-analysis',
            },
          ],
        },
        {
          id: 'dq-choice-acceptance',
          text: 'Simply accept and support him in whatever he becomes',
          consequence: 'The wisest choice may be to love Don Quixote as he is now—neither encouraging delusion nor forcing reality, but accepting the person rather than the performance.',
          learningPoints: [
            {
              id: 'dq-lp-ch5-s4-acceptance',
              content: 'True care means accepting people as they are, not as we wish them to be—a lesson all the characters must learn.',
              category: 'thematic-analysis',
            },
          ],
        },
      ],

      learningPoints: [],
    },

    // Scene 5: Map Exploration - Retracing the Journey
    {
      id: 'dq-ch5-s5-map',
      type: 'map-exploration',
      backgroundImage: 'https://cdn.midjourney.com/b9156132-33f4-4d64-b149-368cc8e2f945/0_0.png',
      mapImage: 'https://cdn.midjourney.com/2cd5547e-d3df-4b48-8aa0-ab61cbd809da/0_0.png',
      prompt: 'Retrace the complete journey from beginning to end',

      locations: [
        {
          id: 'loc-start',
          name: 'The Village - Where It Began',
          x: 35,
          y: 50,
          content: 'Alonso Quixano\'s home, where an ordinary man became Don Quixote. Now he returns, changed forever by what he\'s experienced.',
          image: 'https://cdn.midjourney.com/3f8c6c57-2a76-4365-9e57-8dc5bf2a73d8/0_0.png',
        },
        {
          id: 'loc-windmills-return',
          name: 'The Windmills - Site of Famous Defeat',
          x: 45,
          y: 42,
          content: 'The windmills still stand, grinding grain as they always have. They were never giants—but they became immortal through Don Quixote\'s imagination.',
          image: 'https://cdn.midjourney.com/e3423160-e433-4b09-9718-4f2fe6200e99/0_0.png',
        },
        {
          id: 'loc-barataria',
          name: 'Barataria - Where Sancho Governed',
          x: 52,
          y: 55,
          content: 'The "island" where Sancho proved his wisdom. He could have stayed and enjoyed power—but chose freedom and friendship instead.',
          image: 'https://cdn.midjourney.com/4d261c6b-c79a-4c52-96f6-9efa20a49fef/0_0.png',
        },
        {
          id: 'loc-barcelona',
          name: 'Barcelona Beach - The Final Defeat',
          x: 68,
          y: 35,
          content: 'The beach where the Knight of the White Moon defeated Don Quixote, forcing his return home and ending his adventures.',
          image: 'https://cdn.midjourney.com/786e6bbe-6d58-40af-9a2b-c02a21bfc873/0_0.png',
        },
        {
          id: 'loc-home-final',
          name: 'Home - The End of the Journey',
          x: 35,
          y: 50,
          content: 'The same village, but everything has changed. Don Quixote returns not as a conquering hero but as a defeated old man seeking only rest.',
          image: 'https://cdn.midjourney.com/b9156132-33f4-4d64-b149-368cc8e2f945/0_0.png',
        },
      ],

      learningPoints: [
        {
          id: 'dq-lp-ch5-s5-circular',
          content: 'The novel\'s structure is circular—Don Quixote returns to where he started, but transformed by the journey, for better and worse.',
          category: 'plot-structure',
        },
        {
          id: 'dq-lp-ch5-s5-journey',
          content: 'The physical journey mirrors the psychological journey—from madness to wisdom, from isolation to friendship, from hope to melancholy.',
          category: 'thematic-analysis',
        },
      ],
    },

    // Scene 6: Dialogue - Sancho's Final Appeal
    {
      id: 'dq-ch5-s6-appeal',
      type: 'dialogue',
      backgroundImage: 'https://cdn.midjourney.com/60665aef-5e5f-425a-9161-be33dd2d0556/0_0.png',

      character: {
        id: 'sancho-panza',
        name: 'Sancho Panza',
        portrait: 'https://cdn.midjourney.com/c9ea39d4-3ec8-43ea-aa00-aa12782044aa/0_0.png',
        description: 'Desperately trying to revive Don Quixote\'s spirits',
      },

      dialogueTree: {
        id: 'node-1',
        speaker: 'sancho-panza',
        text: 'Master, remember how we used to dream of great deeds? Remember Dulcinea? Remember the glory we would win?',

        responses: [
          {
            id: 'response-remember',
            text: 'I remember, Sancho. I remember dreams that never were.',
            nextNodeId: 'node-2',
          },
          {
            id: 'response-real',
            text: 'Those were the fantasies of a mad old man, good Sancho.',
            nextNodeId: 'node-3',
          },
        ],

        allNodes: [
          {
            id: 'node-2',
            speaker: 'sancho-panza',
            text: 'But they WERE real, master! They were real to us! To me! Isn\'t that enough? Why does everyone else get to decide what\'s real?',
            responses: [
              {
                id: 'response-sweet',
                text: 'You are sweet to say so, faithful Sancho. You always were the best of squires.',
                nextNodeId: 'node-4',
              },
            ],
          },
          {
            id: 'node-3',
            speaker: 'sancho-panza',
            text: 'Maybe you were mad. But you were also brave, and kind, and you made me believe in something bigger than myself. Was that all worthless?',
            responses: [
              {
                id: 'response-not-worthless',
                text: 'Not worthless, no. But a man must face truth eventually, even when truth is painful.',
                nextNodeId: 'node-4',
              },
            ],
          },
          {
            id: 'node-4',
            speaker: 'sancho-panza',
            text: '*voice breaking* Then I don\'t want truth, master. I want you back. I want my friend back. Please.',
            isEnd: true,
          },
        ],
      },

      learningPoints: [
        {
          id: 'dq-lp-ch5-s6-impact',
          content: 'Sancho\'s desperation shows that Don Quixote\'s madness, whatever its costs, gave meaning and purpose to both their lives.',
          category: 'character-analysis',
        },
        {
          id: 'dq-lp-ch5-s6-question',
          content: 'The novel poses its deepest question: If a beautiful delusion makes life meaningful, is facing ugly truth really better?',
          category: 'thematic-analysis',
        },
      ],
    },

    // Scene 7: The Illness
    {
      id: 'dq-ch5-s7-illness',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/d80e63e4-bdc8-4f82-a41d-c20679336202/0_0.png',

      content: `Not long after returning home, Don Quixote fell ill. He took to his bed with a fever, and for days he drifted in and out of consciousness.

His niece and housekeeper tended to him faithfully. The priest and barber visited daily. Sancho sat by his bedside, holding his hand, praying to saints he'd never believed in before.

"Please," Sancho whispered. "Don\'t take him yet. We need more time."

But time was running out. And something even more fundamental was happening: Don Quixote was changing. The fever seemed to be burning away the last remnants of his chivalric delusion, leaving only Alonso Quixano, the tired old man he\'d always been underneath.`,

      learningPoints: [
        {
          id: 'dq-lp-ch5-s7-stripping',
          content: 'Illness strips away pretense and illusion—Don Quixote\'s fever metaphorically burns away his fantasy, leaving only vulnerable humanity.',
          category: 'thematic-analysis',
        },
        {
          id: 'dq-lp-ch5-s7-mortality',
          content: 'The approach of death forces authenticity—people cannot maintain elaborate fictions when facing their own mortality.',
          category: 'character-analysis',
        },
      ],
    },

    // Scene 8: Primary Source - Cervantes on Legacy
    {
      id: 'dq-ch5-s8-primary-source',
      type: 'primary-source',
      backgroundImage: 'https://cdn.midjourney.com/d80e63e4-bdc8-4f82-a41d-c20679336202/0_0.png',

      prompt: 'What does Cervantes suggest about the relationship between life and legacy?',

      source: {
        title: 'Cervantes on Authorship and Immortality',
        author: 'Miguel de Cervantes',
        date: '1615',
        type: 'text',
        content: `**From the Author\'s Preface to Part Two:**

"They say I am old, they say I am poor, they say I am mad. Let them say what they will. I have created Don Quixote, and Don Quixote will live forever—long after those who mock me are dust."

<br />

**Metafictional Elements:**

In Part Two, characters have READ Part One of Don Quixote. They discuss Don Quixote as both a real person and a fictional character. Cervantes plays with the boundary between fiction and reality.

<br />

**The Paradox:**
- Don Quixote (character) is mad for confusing fiction with reality
- But Don Quixote (book) achieves immortality through fiction
- So which is more "real"—the life lived or the story told?

<br />

**Cervantes\' Fear:**

The real Cervantes died in poverty, largely forgotten in his own time. But he knew—somehow he knew—that Don Quixote would outlive him.

<br />

**The Ultimate Question:**

Alonso Quixano lived a quiet, sensible life before becoming Don Quixote. As Alonso, he would have died forgotten. As Don Quixote, he became immortal.

<br />

Was the madness worth it?`,
        citation: 'The author\'s reflection on how stories outlive their creators',
      },

      questions: [
        {
          id: 'dq-ch5-s8-q1',
          question: 'What does Cervantes suggest about the relationship between life and legacy? Can fiction be "truer" than fact?',
          type: 'multiple-choice',
          options: [
            'Fiction is always false and inferior to reality—Cervantes shows that Don Quixote\'s legacy is ultimately meaningless because it was based on delusion rather than factual accomplishment',
            'Life and legacy are unrelated—what happens in reality has no connection to how we are remembered, so there is no relationship between the two',
            'Fiction can be "truer" than fact in capturing meaning and influence—Don Quixote achieved immortality through story while Alonso Quixano would have been forgotten, suggesting the mad quest for meaning may be worth more than sensible contentment',
            'Only factual achievements create lasting legacy—Cervantes argues that fiction provides no real immortality and that Don Quixote\'s story will be forgotten because it wasn\'t based on truth',
          ],
          correctAnswer: 'Fiction can be "truer" than fact in capturing meaning and influence—Don Quixote achieved immortality through story while Alonso Quixano would have been forgotten, suggesting the mad quest for meaning may be worth more than sensible contentment',
          explanation: 'Cervantes suggests that stories grant a form of immortality that ordinary life cannot achieve. Fiction can be "truer" than fact in capturing meaning and influence—the character Don Quixote achieved immortality through the novel, remembered 400+ years later worldwide, while Alonso Quixano (the "real" person) would have been completely forgotten. The metafictional elements make the novel self-aware about its own power to create lasting meaning. This raises profound questions: Is it better to live safely and be forgotten, or to live memorably through story? Do fictional narratives make us more "real" than factual existence? The novel suggests that perhaps the mad quest for meaning and story is worth more than sensible but forgotten contentment.',
        },
      ],

      learningPoints: [
        {
          id: 'dq-lp-ch5-s8-immortality',
          content: 'Literature grants a kind of immortality—Don Quixote (the character) lives on through the novel long after Cervantes (the author) died.',
          category: 'literary-significance',
        },
        {
          id: 'dq-lp-ch5-s8-meta',
          content: 'The metafictional elements make the novel self-aware about its own status as fiction—blurring the lines between reality and art.',
          category: 'literary-technique',
        },
      ],
    },

    // Scene 9: The Return to Sanity
    {
      id: 'dq-ch5-s9-sanity',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/c711e579-cbe0-45f3-9dbc-21d1b85d5b58/0_0.png',
      image: 'https://cdn.midjourney.com/b3eed914-48b2-4e9f-9994-d19c6e9fb0d0/0_0.png',

      content: `When the fever broke, Don Quixote opened his eyes with a clarity they hadn't seen in years.

"I am Alonso Quixano," he said quietly. "I see now the folly of my madness. Dulcinea was a peasant girl. The windmills were just windmills. There were no giants, no enchanters, no grand adventures. I was simply... mad."

The priest and niece wept with joy. "Thanks be to God! You have returned to your senses!"

But Sancho, sitting in the corner, felt his heart break. The man who spoke such sensible words was not his friend. His friend had believed in impossible things. This stranger in the bed had killed that friend and taken his place.

"Master..." Sancho said, his voice trembling. "Don\'t you remember? The glory? The adventures? Dulcinea?"

"Those were dreams, Sancho. And I have awakened."`,

      learningPoints: [
        {
          id: 'dq-lp-ch5-s9-tragedy',
          content: 'The return to sanity is presented as both triumph and tragedy—Don Quixote is cured, but has he lost something essential?',
          category: 'thematic-analysis',
        },
        {
          id: 'dq-lp-ch5-s9-perspective',
          content: 'Different characters see the transformation differently—the niece and priest celebrate what Sancho mourns, showing the ambiguity of the change.',
          category: 'narrative-structure',
        },
      ],
    },

    // Scene 10: Dialogue - Final Words
    {
      id: 'dq-ch5-s10-farewell',
      type: 'dialogue',
      backgroundImage: 'https://cdn.midjourney.com/c711e579-cbe0-45f3-9dbc-21d1b85d5b58/0_0.png',
      image: 'https://cdn.midjourney.com/451a6b7d-8fac-476f-b157-ef43972d7907/0_0.png',

      character: {
        id: 'don-quixote',
        name: 'Alonso Quixano (Don Quixote)',
        portrait: 'https://cdn.midjourney.com/1996e73b-244d-47f5-b420-d85cc16c2949/0_0.png',
        description: 'Lucid but dying',
      },

      dialogueTree: {
        id: 'node-1',
        speaker: 'don-quixote',
        text: 'Sancho, my faithful friend. Forgive me. I led you on a mad quest and gave you nothing but empty promises.',

        responses: [
          {
            id: 'response-gave-everything',
            text: 'You gave me everything that mattered, master!',
            nextNodeId: 'node-2',
          },
          {
            id: 'response-come-back',
            text: 'Please, come back to me. Be Don Quixote again!',
            nextNodeId: 'node-3',
          },
        ],

        allNodes: [
          {
            id: 'node-2',
            speaker: 'don-quixote',
            text: '*smiling weakly* Did I, Sancho? Perhaps there is truth in that. Perhaps the journey itself was the reward, as they say. But I am tired now. So tired.',
            responses: [
              {
                id: 'response-rest',
                text: 'Then rest, master. You\'ve earned it.',
                nextNodeId: 'node-4',
              },
            ],
          },
          {
            id: 'node-3',
            speaker: 'don-quixote',
            text: 'Don Quixote is dead, Sancho. He died when truth finally defeated him. Only Alonso Quixano remains, and he hasn\'t much time left either.',
            responses: [
              {
                id: 'response-live-on',
                text: 'Then Don Quixote will live on in me! I\'ll remember for both of us!',
                nextNodeId: 'node-4',
              },
            ],
          },
          {
            id: 'node-4',
            speaker: 'don-quixote',
            text: '*taking Sancho\'s hand* You were the truest friend a mad old man could have hoped for. Thank you, Sancho Panza. Thank you for everything.',
            isEnd: true,
          },
        ],
      },

      learningPoints: [
        {
          id: 'dq-lp-ch5-s10-friendship',
          content: 'The deathbed scene emphasizes that the deepest truth of the novel is the friendship between Don Quixote and Sancho—a relationship that transcended delusion and reality.',
          category: 'thematic-analysis',
        },
      ],
    },

    // Scene 11: Quote Attribution - Reflective Quotes
    {
      id: 'dq-ch5-s11-quotes',
      type: 'quote-attribution',
      backgroundImage: 'https://cdn.midjourney.com/2502e4a1-aeb2-42b1-8afb-8b43cd75ab20/0_0.png',

      prompt: 'Match these final reflections to their themes',

      quotes: [
        {
          id: 'quote-1',
          text: 'I was mad, and now I am sane. I was Don Quixote, and now I am once more Alonso Quixano',
          speaker: 'Don Quixote (Alonso)',
          context: 'His deathbed renunciation of his chivalric identity',
          explanation: 'The simple statement masks profound complexity—is sanity always better than madness? Was Don Quixote a disease, or was he the cure for Alonso\'s empty life?',
        },
        {
          id: 'quote-2',
          text: 'May my death make amends for the foolishness I inspired',
          speaker: 'Don Quixote (Alonso)',
          context: 'Apologizing for the influence of his madness',
          explanation: 'He wants his death to erase his legacy—but Cervantes ensures the opposite happens. Don Quixote becomes immortal precisely because of his "foolishness."',
        },
        {
          id: 'quote-3',
          text: 'My master is dead! They killed him! They killed the best man who ever lived!',
          speaker: 'Sancho Panza',
          context: 'Sancho\'s reaction to Don Quixote\'s return to sanity',
          explanation: 'For Sancho, the return to sanity IS death—the man he loved has been replaced by a stranger wearing the same face.',
        },
        {
          id: 'quote-4',
          text: 'He lived a madman and died sane',
          speaker: 'Narrator',
          context: 'The novel\'s epitaph for Don Quixote',
          explanation: 'This paradoxical epitaph leaves ambiguous which state was better—is it praise or condemnation? The novel never resolves the question.',
        },
      ],

      learningPoints: [
        {
          id: 'dq-lp-ch5-s11-ambiguity',
          content: 'The novel\'s ending is deliberately ambiguous—Cervantes doesn\'t tell us whether Don Quixote\'s sanity is triumph or defeat.',
          category: 'literary-technique',
        },
        {
          id: 'dq-lp-ch5-s11-complexity',
          content: 'Great literature resists simple conclusions—the ending forces readers to grapple with complex questions about madness, sanity, and the value of life.',
          category: 'literary-significance',
        },
      ],
    },

    // Scene 12: Cause and Effect - Consequences
    {
      id: 'dq-ch5-s12-cause-effect',
      type: 'cause-effect',
      backgroundImage: 'https://cdn.midjourney.com/2502e4a1-aeb2-42b1-8afb-8b43cd75ab20/0_0.png',

      prompt: 'Match Don Quixote\'s life choices to their ultimate outcomes',

      pairs: [
        {
          id: 'pair-1',
          cause: 'Don Quixote chose to live as a knight errant, pursuing impossible dreams',
          effect: 'He experienced adventure, meaning, and deep friendship—but also pain, humiliation, and eventual defeat',
          explanation: 'His choice brought both joy and suffering—the novel asks whether the former justifies the latter.',
        },
        {
          id: 'pair-2',
          cause: 'Don Quixote inspired Sancho to see beyond his narrow peasant life',
          effect: 'Sancho gained wisdom, self-knowledge, and broader vision—forever changed by the experience',
          explanation: 'Even if Don Quixote was mad, his influence on Sancho was genuinely positive and transformative.',
        },
        {
          id: 'pair-3',
          cause: 'Don Quixote returned to sanity and renounced his knightly identity',
          effect: 'He gained peace and reconciliation—but lost purpose, and died soon after',
          explanation: 'The return to sanity brings death—suggesting that his madness was somehow keeping him alive.',
        },
        {
          id: 'pair-4',
          cause: 'Don Quixote\'s adventures were recorded in a book (metafictionally)',
          effect: 'He achieved literary immortality—remembered 400+ years later around the world',
          explanation: 'The fictional Don Quixote succeeded where the real Alonso Quixano could not—achieving lasting fame and influence.',
        },
        {
          id: 'pair-5',
          cause: 'Don Quixote chose idealism over realistic contentment',
          effect: 'His life had meaning and story—but not safety, comfort, or conventional success',
          explanation: 'The novel presents this choice without judging it—both paths have value and cost.',
        },
      ],

      learningPoints: [
        {
          id: 'dq-lp-ch5-s12-tradeoffs',
          content: 'Every choice involves tradeoffs—Don Quixote gained adventure and meaning but lost safety and sanity. Neither choice is purely right or wrong.',
          category: 'thematic-analysis',
        },
        {
          id: 'dq-lp-ch5-s12-legacy',
          content: 'Legacy is unpredictable—Don Quixote achieved immortality precisely through what seemed like failure and madness.',
          category: 'thematic-analysis',
        },
      ],
    },

    // Scene 13: The Final Scene
    {
      id: 'dq-ch5-s13-finale',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/2502e4a1-aeb2-42b1-8afb-8b43cd75ab20/0_0.png',

      content: `Alonso Quixano died peacefully, surrounded by those who loved him. The priest administered last rites. His niece wept. The barber mourned his friend.

And Sancho Panza wept most of all—not for Alonso Quixano, who had found peace, but for Don Quixote, who had been killed by sanity itself.

After the funeral, Sancho rode his donkey out of the village, past the windmills, across the plains they'd traveled together. He was going home to his wife and farm, back to his ordinary life.

But he carried something with him now: the memory of a mad old man who believed in impossible things. And sometimes, just sometimes, when the sun set over La Mancha in shades of gold and purple, Sancho would squint at the windmills on the horizon.

And just for a moment, they looked like giants.`,

      learningPoints: [
        {
          id: 'dq-lp-ch5-s13-legacy-lives',
          content: 'Don Quixote\'s legacy lives on in Sancho—the ability to see possibility and meaning beyond mere facts. The madness becomes transmuted into wisdom.',
          category: 'thematic-analysis',
        },
        {
          id: 'dq-lp-ch5-s13-ending',
          content: 'The ending is both sad and hopeful—Don Quixote dies, but his vision survives in those who loved him, suggesting that idealism can endure beyond the idealist.',
          category: 'literary-technique',
        },
        {
          id: 'dq-lp-ch5-s13-question',
          content: 'The final image leaves the central question unresolved—should we see windmills or giants? Cervantes lets us decide for ourselves.',
          category: 'thematic-analysis',
        },
      ],

      events: {
        onExit: [{
          type: 'quiz',
          componentId: 'quiz-don-quixote-chapter-5',
          condition: { type: 'if-not-completed' },
        }],
      },
    },
  ],

  endQuiz: chapter5Quiz,
};

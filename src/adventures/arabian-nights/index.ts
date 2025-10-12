import type { Adventure } from '../../types';

export const arabianNights: Adventure = {
  id: 'arabian-nights',
  title: 'Tales from the Arabian Nights',
  description: 'Journey through the legendary stories of Scheherazade, exploring the rich tapestry of Middle Eastern folklore, culture, and wisdom.',
  estimatedTime: 35,
  coverArt: 'https://cdn.midjourney.com/7f87418a-b7df-4ae3-bf22-10f51023d75d/0_0.png',
  coverVideo: 'https://cdn.midjourney.com/video/6a157fbc-21d2-4c3c-8904-ce38f0114ab5/2.mp4',
  theme: {
    primaryColor: '#1a0f2e',
    secondaryColor: '#d4af37',
    fontFamily: '"Crimson Text", serif',
    backgroundMusic: '/Imsie/assets/arabian-nights/music/Arabian%20Nights.mp3',
  },
  musicPlaylist: [
    '/Imsie/assets/arabian-nights/music/Arabian%20Nights.mp3',
    '/Imsie/assets/arabian-nights/music/Arabian%20Nights-2.mp3',
    '/Imsie/assets/arabian-nights/music/Arabian%20Nights-3.mp3',
    '/Imsie/assets/arabian-nights/music/Arabian%20Nights-4.mp3',
  ],
  chapters: [
    {
      id: 'chapter-1-scheherazade',
      title: 'The Tale of Scheherazade',
      description: 'Discover the framing story of the Arabian Nights and the clever princess who saved her life through storytelling.',
      learningObjectives: [
        'Understand the historical and cultural context of the Arabian Nights',
        'Learn about the framing device and its literary significance',
        'Explore themes of storytelling, wisdom, and survival',
        'Recognize the collection\'s influence on world literature',
      ],
      scenes: [
        {
          id: 'scene-1-introduction',
          type: 'narrative',
          backgroundImage: 'https://cdn.midjourney.com/8cd1435a-9bf0-4ce1-8d88-bc8d511d6466/0_0.png',
          image: 'https://cdn.midjourney.com/d2ac5dca-866f-4358-82d0-b08545745efd/0_0.png',
          content: `Welcome to the magical world of the Arabian Nights!

The collection known as "One Thousand and One Nights" or "The Arabian Nights" is one of the most influential works of literature in human history. These tales, compiled over centuries from sources across Persia, Arabia, India, and Egypt, have captivated audiences worldwide.

But before we dive into the famous adventures of Aladdin, Ali Baba, and Sinbad, we must first understand the remarkable frame story that holds all these tales together...`,
          learningPoints: [
            {
              id: 'lp-1-origins',
              content: 'The Arabian Nights is a collection compiled from multiple cultural sources over many centuries.',
              category: 'historical-context',
            },
            {
              id: 'lp-2-influence',
              content: 'These stories have profoundly influenced world literature and storytelling traditions.',
              category: 'literary-significance',
            },
          ],
        },
        {
          id: 'scene-2-sultan-betrayal',
          type: 'narrative',
          backgroundImage: 'https://cdn.midjourney.com/9e1851f6-db45-48e1-8b7b-ef9da83c35aa/0_0.png',
          image: 'https://cdn.midjourney.com/05468436-073d-4113-863f-ef36479fa98c/0_0.png',
          content: `Long ago, in the lands between India and China, there ruled a powerful sultan named Shahryar. He was a just and mighty ruler, beloved by his people.

But one fateful day, Sultan Shahryar discovered that his wife had betrayed him. Consumed by rage and heartbreak, he had her executed. His pain turned to bitterness, and his bitterness hardened into a terrible resolve.

"All women are deceitful," he declared. "Never again shall I be betrayed!"

From that day forward, the sultan enacted a cruel decree: he would marry a new bride each day, and at dawn, she would be executed. This way, he reasoned, no wife could ever betray him.`,
          learningPoints: [
            {
              id: 'lp-3-sultan-character',
              content: 'Sultan Shahryar\'s transformation shows how personal trauma can corrupt even just rulers.',
              category: 'character-analysis',
            },
            {
              id: 'lp-4-decree',
              content: 'The sultan\'s decree creates the central conflict that drives the entire collection.',
              category: 'plot-structure',
            },
          ],
        },
        {
          id: 'scene-3-kingdom-despair',
          type: 'narrative',
          backgroundImage: 'https://cdn.midjourney.com/0a8df3f1-d387-4d94-b235-381aeae0a0a5/0_0.png',
          image: 'https://cdn.midjourney.com/e71b040f-8e1e-4799-85a1-f0281a814ef5/0_0.png',
          content: `Day after day, the pattern continued. Each dawn brought a new execution, and each dusk brought a new wedding.

The kingdom fell into mourning. Families with daughters lived in terror. The vizier, the sultan's chief minister, had the grim task of finding each new bride. His heart grew heavy with the weight of these deaths.

Many families fled the kingdom. Those who remained locked their daughters away, hoping to keep them safe. But the sultan's guards always found someone.

The land that had once been filled with joy and prosperity now echoed with grief and despair.`,
          learningPoints: [
            {
              id: 'lp-5-consequences',
              content: 'The sultan\'s personal vendetta has devastating consequences for his entire kingdom.',
              category: 'thematic-analysis',
            },
            {
              id: 'lp-6-vizier-role',
              content: 'The vizier represents the moral conflict between duty to one\'s ruler and one\'s conscience.',
              category: 'character-analysis',
            },
          ],
        },
        {
          id: 'scene-4-scheherazade-intro',
          type: 'narrative',
          backgroundImage: 'https://cdn.midjourney.com/4a731daf-c582-43d5-816d-52b29e74f27c/0_0.png',
          image: 'https://cdn.midjourney.com/08873002-2d89-4490-a623-765f55027d9e/0_0.png',
          content: `The vizier himself had two daughters. The elder was named Scheherazade, and she was extraordinarily learned and wise beyond her years.

Scheherazade had read a thousand books of histories, poetry, and philosophy. She had studied the sciences, the arts, and the wisdom of the ages. But more than knowledge, she possessed courage and a compassionate heart.

When she learned of her father's anguish, Scheherazade made a decision that would change everything.

"Father," she said, "I wish to marry the sultan."

The vizier was horrified. "My daughter! You know what fate awaits the sultan's brides. I cannot allow this!"

But Scheherazade had a plan...`,
          learningPoints: [
            {
              id: 'lp-7-scheherazade-character',
              content: 'Scheherazade embodies the power of knowledge, courage, and cleverness combined.',
              category: 'character-analysis',
            },
            {
              id: 'lp-8-sacrifice',
              content: 'Her willingness to sacrifice herself for her people shows heroic virtue.',
              category: 'thematic-analysis',
            },
          ],
        },
        {
          id: 'scene-5-the-plan',
          type: 'narrative',
          backgroundImage: 'https://cdn.midjourney.com/2795e81c-b413-4f16-8080-8a7dbf92580e/0_0.png',
          image: 'https://cdn.midjourney.com/ed222cbf-2b1f-4e13-8a90-cb97416d5e34/0_0.png',
          content: `"Father, I have a plan to end this suffering," Scheherazade explained. "I will tell the sultan a story, but I will not finish it before dawn. His curiosity will keep me alive one more day."

"And what of the next night?" her father asked desperately.

"I will begin a new story, even more captivating than the first. Each night, I will leave him in suspense, eager to hear what happens next."

The vizier wept, but he knew his daughter's mind was set. Scheherazade had one more request.

"Send my sister Dinarzad to me in the bridal chamber. When the time is right, she will ask me to tell a story to pass the time before dawn. The sultan will listen, and my plan will begin."

And so it was arranged.`,
          learningPoints: [
            {
              id: 'lp-9-storytelling-power',
              content: 'Scheherazade uses storytelling as a tool for survival and transformation.',
              category: 'thematic-analysis',
            },
            {
              id: 'lp-10-narrative-device',
              content: 'The cliffhanger technique keeps audiences engaged - a strategy still used today.',
              category: 'literary-technique',
            },
          ],
        },
        {
          id: 'scene-6-first-night',
          type: 'narrative',
          backgroundImage: 'https://cdn.midjourney.com/21808ecf-81eb-41c8-8b95-b352c8fd3b42/0_0.png',
          image: 'https://cdn.midjourney.com/63bb0a80-10b5-4e99-9d74-8a8687daaba7/0_0.png',
          content: `On the wedding night, Sultan Shahryar found himself married to the vizier's daughter. He was puzzled why his loyal minister would offer his own child, but he said nothing of it.

As the night wore on, young Dinarzad, who had been hidden in the chamber, emerged and spoke: "Sister, won't you tell us one of your wonderful stories to pass the time until dawn?"

Scheherazade looked to the sultan. "If my lord permits, I would be honored."

The sultan, curious despite himself, nodded.

And so Scheherazade began the tale of the Merchant and the Jinni...

Her voice wove a spell in the darkness. The sultan found himself drawn into a world of magic, adventure, and wonder. But just as the story reached its most exciting moment—

Dawn broke.`,
          learningPoints: [
            {
              id: 'lp-11-execution',
              content: 'Scheherazade perfectly executes her plan, using her sister as an accomplice.',
              category: 'plot-structure',
            },
            {
              id: 'lp-12-first-tale',
              content: 'The tale within a tale structure creates layers of narrative complexity.',
              category: 'literary-technique',
            },
          ],
        },
        {
          id: 'scene-7-suspense',
          type: 'narrative',
          backgroundImage: 'https://cdn.midjourney.com/9e1851f6-db45-48e1-8b7b-ef9da83c35aa/0_0.png',
          image: 'https://cdn.midjourney.com/3430895d-04f4-4c4c-9be7-adeba74517fd/0_0.png',
          content: `"Wait," said the sultan, leaning forward. "What happened next?"

"Alas, my lord," said Scheherazade, "I see the morning has come. I should not take up more of your time."

The sultan stood, conflicted. His decree was clear - the bride must die at dawn. But the story... he had to know how it ended.

"You will finish this tale tonight," he declared. "The execution can wait one more day."

Scheherazade bowed, hiding her relief.

That night, she finished the first tale, but cleverly began another, even more enthralling. Again, she stopped at dawn, leaving the sultan in suspense.

One night became two. Two became ten. Ten became a hundred.`,
          learningPoints: [
            {
              id: 'lp-13-transformation-begins',
              content: 'The sultan\'s curiosity becomes the crack in his hardened heart.',
              category: 'character-development',
            },
            {
              id: 'lp-14-pattern',
              content: 'The repeating pattern of storytelling creates the rhythm of the entire work.',
              category: 'literary-structure',
            },
          ],
        },
        {
          id: 'scene-8-transformation',
          type: 'narrative',
          backgroundImage: 'https://cdn.midjourney.com/be7011c6-ede3-4657-8b0e-3cfc20969e9a/0_0.png',
          image: 'https://cdn.midjourney.com/f8a59f2b-efaf-4ede-9db7-d2a6b82f4188/0_0.png',
          content: `Night after night, Scheherazade told her stories. Tales of adventure and wisdom, of love and loss, of magic and mystery.

Through these stories, something remarkable happened. The sultan began to change.

He heard tales of faithful wives and virtuous women. He learned of mercy, justice, and forgiveness. Each story was a mirror, reflecting his own pain and showing him a path toward healing.

After one thousand and one nights, the sultan finally spoke:

"Scheherazade, you have saved not just your own life, but my soul. Through your stories, I have learned to trust again, to hope again, to love again. I hereby abolish my cruel decree. You shall be my queen, and together we shall rule with wisdom and compassion."

And so, through the power of storytelling, Scheherazade transformed a tyrant into a just ruler and saved her kingdom.`,
          learningPoints: [
            {
              id: 'lp-15-redemption',
              content: 'The sultan\'s redemption shows that storytelling can heal and transform.',
              category: 'thematic-analysis',
            },
            {
              id: 'lp-16-triumph',
              content: 'Scheherazade\'s triumph is won through intellect and art, not violence.',
              category: 'thematic-analysis',
            },
            {
              id: 'lp-17-frame-resolution',
              content: 'The frame story resolves after 1001 nights, giving structure to the entire collection.',
              category: 'literary-structure',
            },
          ],
        },
        {
          id: 'scene-9-legacy',
          type: 'narrative',
          backgroundImage: 'https://cdn.midjourney.com/ad46a552-f956-4c0d-b906-0194106486bb/0_0.png',
          image: 'https://cdn.midjourney.com/0c75f1cf-4088-4838-85e3-db15d5ac632f/0_0.png',
          content: `The story of Scheherazade reminds us of the transformative power of narrative.

Throughout history, the Arabian Nights has influenced countless writers, from Shakespeare to Dickens to modern fantasy authors. The tales within - Aladdin, Ali Baba, Sinbad - have become part of our global cultural heritage.

But at its heart, this collection celebrates the ancient art of storytelling itself. Like Scheherazade, storytellers throughout the ages have used their craft to teach, to heal, to preserve culture, and to bring people together.

The stories she told over those thousand and one nights continue to enchant us today, proof that great stories, like great truths, are timeless.

Now, let's test what you've learned about the Tale of Scheherazade!`,
          learningPoints: [
            {
              id: 'lp-18-influence',
              content: 'The Arabian Nights has had a profound and lasting impact on world literature.',
              category: 'literary-significance',
            },
            {
              id: 'lp-19-storytelling-power',
              content: 'The collection celebrates storytelling as a tool for preservation, education, and transformation.',
              category: 'thematic-analysis',
            },
          ],
          events: {
            onExit: [
              {
                type: 'quiz',
                componentId: 'quiz-chapter-1',
                condition: {
                  type: 'if-not-completed',
                },
              },
            ],
          },
        },
      ],
      endQuiz: {
        id: 'quiz-chapter-1',
        title: 'Chapter 1: Scheherazade Quiz',
        description: 'Test your knowledge of the framing story of the Arabian Nights.',
        passingScore: 70,
        allowRetry: true,
        questions: [
          {
            id: 'q1',
            question: 'What was Sultan Shahryar\'s cruel decree?',
            type: 'multiple-choice',
            points: 10,
            options: [
              'He would banish all women from the kingdom',
              'He would marry a new bride each day and execute her at dawn',
              'He would lock all women in the palace',
              'He would forbid anyone from marrying',
            ],
            correctAnswer: 'He would marry a new bride each day and execute her at dawn',
            explanation: 'After being betrayed, Sultan Shahryar decreed that he would marry a new bride each day and have her executed at dawn to prevent future betrayals.',
            relatedLearningPoints: ['lp-4-decree'],
          },
          {
            id: 'q2',
            question: 'What was Scheherazade\'s profession/background?',
            type: 'multiple-choice',
            points: 10,
            options: [
              'She was a merchant\'s daughter',
              'She was a dancer and entertainer',
              'She was learned and had read a thousand books',
              'She was a sorceress',
            ],
            correctAnswer: 'She was learned and had read a thousand books',
            explanation: 'Scheherazade was extraordinarily educated, having read a thousand books of histories, poetry, philosophy, and more. Her knowledge was key to her plan.',
            relatedLearningPoints: ['lp-7-scheherazade-character'],
          },
          {
            id: 'q3',
            question: 'How did Scheherazade plan to save her life?',
            type: 'multiple-choice',
            points: 10,
            options: [
              'She would poison the sultan',
              'She would tell stories but leave them unfinished at dawn',
              'She would use magic to escape',
              'She would convince the vizier to rebel',
            ],
            correctAnswer: 'She would tell stories but leave them unfinished at dawn',
            explanation: 'Scheherazade\'s clever plan was to tell captivating stories each night but stop at dawn, leaving the sultan in suspense and eager to hear more, thus postponing her execution.',
            relatedLearningPoints: ['lp-9-storytelling-power', 'lp-10-narrative-device'],
          },
          {
            id: 'q4',
            question: 'Who was Scheherazade\'s accomplice in her plan?',
            type: 'multiple-choice',
            points: 10,
            options: [
              'Her father, the vizier',
              'Her sister, Dinarzad',
              'A loyal servant',
              'The sultan\'s advisor',
            ],
            correctAnswer: 'Her sister, Dinarzad',
            explanation: 'Scheherazade\'s younger sister Dinarzad was her accomplice, asking her to tell stories each night to set the plan in motion.',
            relatedLearningPoints: ['lp-11-execution'],
          },
          {
            id: 'q5',
            question: 'How many nights did Scheherazade tell stories?',
            type: 'multiple-choice',
            points: 10,
            options: [
              '100 nights',
              '365 nights',
              '1,001 nights',
              '1,000 nights',
            ],
            correctAnswer: '1,001 nights',
            explanation: 'The collection is called "One Thousand and One Nights" because Scheherazade told stories for 1,001 nights before the sultan finally spared her life.',
            relatedLearningPoints: ['lp-17-frame-resolution'],
          },
          {
            id: 'q6',
            question: 'What ultimately happened to Sultan Shahryar?',
            type: 'multiple-choice',
            points: 10,
            options: [
              'He was overthrown by his people',
              'He was transformed through the stories and abolished his cruel decree',
              'He continued his cruel ways until his death',
              'He ran away from the kingdom in shame',
            ],
            correctAnswer: 'He was transformed through the stories and abolished his cruel decree',
            explanation: 'Through Scheherazade\'s stories, the sultan learned mercy, forgiveness, and love again. He abolished his decree and made her his queen.',
            relatedLearningPoints: ['lp-15-redemption'],
          },
          {
            id: 'q7',
            question: 'The Arabian Nights is a collection from multiple cultural sources.',
            type: 'true-false',
            points: 10,
            options: ['True', 'False'],
            correctAnswer: 'True',
            explanation: 'True! The Arabian Nights was compiled over centuries from sources across Persia, Arabia, India, and Egypt, making it a rich multicultural collection.',
            relatedLearningPoints: ['lp-1-origins'],
          },
          {
            id: 'q8',
            question: 'What literary technique did Scheherazade use to keep the sultan interested?',
            type: 'multiple-choice',
            points: 10,
            options: [
              'Rhyming verses',
              'Cliffhangers and suspense',
              'Comic relief',
              'Musical accompaniment',
            ],
            correctAnswer: 'Cliffhangers and suspense',
            explanation: 'Scheherazade used cliffhangers, stopping her stories at the most exciting moments to create suspense and ensure the sultan wanted to hear more.',
            relatedLearningPoints: ['lp-10-narrative-device'],
          },
          {
            id: 'q9',
            question: 'What does the story of Scheherazade suggest about the power of storytelling?',
            type: 'multiple-choice',
            points: 10,
            options: [
              'Stories are only for entertainment',
              'Stories can heal, transform, and preserve culture',
              'Stories are inferior to military might',
              'Stories should only be told by professionals',
            ],
            correctAnswer: 'Stories can heal, transform, and preserve culture',
            explanation: 'The frame story demonstrates that storytelling has the power to heal trauma, transform hearts, educate, and preserve cultural wisdom - themes central to the Arabian Nights.',
            relatedLearningPoints: ['lp-19-storytelling-power', 'lp-15-redemption'],
          },
          {
            id: 'q10',
            question: 'What was the vizier\'s relationship to Scheherazade?',
            type: 'multiple-choice',
            points: 10,
            options: [
              'He was her uncle',
              'He was her teacher',
              'He was her father',
              'He was her guardian',
            ],
            correctAnswer: 'He was her father',
            explanation: 'The vizier was Scheherazade\'s father, which made his duty to find brides for the sultan especially painful when his own daughter volunteered.',
            relatedLearningPoints: ['lp-6-vizier-role'],
          },
        ],
      },
    },
  ],
  finalQuiz: {
    id: 'final-quiz-arabian-nights',
    title: 'Arabian Nights: Final Assessment',
    description: 'A comprehensive quiz covering all chapters of the Arabian Nights adventure.',
    passingScore: 75,
    allowRetry: true,
    questions: [
      // This will be populated as more chapters are added
      {
        id: 'fq1',
        question: 'The Arabian Nights demonstrates that storytelling can be a tool for survival and transformation.',
        type: 'true-false',
        points: 20,
        options: ['True', 'False'],
        correctAnswer: 'True',
        explanation: 'True! Scheherazade uses storytelling not just to survive, but to transform the sultan and save her kingdom, demonstrating the profound power of narrative.',
        relatedLearningPoints: ['lp-9-storytelling-power', 'lp-15-redemption'],
      },
    ],
  },
};

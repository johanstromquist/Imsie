import type { Chapter } from '../../../types';
import { chapter5Quiz } from '../quizzes/chapter-5-quiz';

export const chapter5: Chapter = {
  id: 'chapter-5-heracles-man',
  title: 'Chapter 5: Heracles - Part II: The Man Behind the Myth',
  description: 'Beyond the labors, Heracles faces love, loss, betrayal, and his own flaws—revealing the deeply human hero beneath the superhuman strength.',

  learningObjectives: [
    'Deconstruct the superhero archetype to reveal the human beneath',
    'Analyze how even the greatest heroes are flawed and mortal',
    'Explore Heracles\' relationships, failures, and eventual apotheosis',
    'Understand the theme of suffering as the path to immortality',
    'Compare to modern deconstructions of superhero narratives',
  ],

  scenes: [
    // Scene 1: After the labors - adventurer and warrior
    {
      id: 'heracles-scene-1-after-labors',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/277cd3ff-f38e-4e64-851e-9b5f954de883/0_0.png',
      image: 'https://cdn.midjourney.com/277cd3ff-f38e-4e64-851e-9b5f954de883/0_0.png',

      content: `The labors were complete. The impossible tasks finished. King Eurystheus had no more demands, no more monsters to send Heracles against.

You might think this is where the story ends—the hero rides off into the sunset, his quest complete.

But Heracles was only in his thirties. He had decades ahead of him. And what does a man trained for nothing but violence and monster-slaying do in peacetime?

He became a wandering adventurer, a warrior-for-hire, a companion on other heroes' quests. He joined Jason and the Argonauts in their search for the Golden Fleece. He fought in wars. He wrestled with Death itself to save a friend's wife.

The labors had made him famous. But they hadn't made him happy. And they certainly hadn't made him wise.`,

      learningPoints: [
        {
          id: 'lp-heracles-1-aftermath',
          content: 'The completion of heroic tasks doesn\'t resolve a hero\'s life—Heracles must find purpose beyond his assigned labors.',
          category: 'literary-context',
        },
        {
          id: 'lp-heracles-1-wandering',
          content: 'Heracles as a wandering adventurer mirrors veterans who struggle to find purpose after war—the heroic skillset doesn\'t translate to peaceful life.',
          category: 'historical-context',
        },
      ],
    },

    // Scene 2: The sack of Troy (first time)
    {
      id: 'heracles-scene-2-troy',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/928ae83c-ff09-4d16-8394-872f55b06b74/0_0.png',
      image: 'https://cdn.midjourney.com/928ae83c-ff09-4d16-8394-872f55b06b74/0_0.png',

      content: `One of Heracles' adventures took him to Troy—yes, the same Troy that would fall to the Greeks in the famous war. But this was an earlier sacking, a generation before Achilles and Hector.

King Laomedon of Troy had refused to pay Poseidon and Apollo for building the city's walls. As punishment, Poseidon sent a sea monster to ravage the coast. The king, desperate, offered his divine horses—a gift from Zeus himself—to anyone who could kill the beast.

Heracles killed it easily. He'd fought far worse during his labors.

But when he came to collect his reward, Laomedon refused to give up the horses. He laughed at the hero and sent him away empty-handed.

Big mistake.

Heracles returned with a small army, sacked Troy, and killed Laomedon and all his sons except one: young Priam, who would one day watch his city burn again.

Heracles got his horses. But he also demonstrated what would become a fatal pattern: his inability to control his anger when insulted.`,

      inlineAnnotations: [
        {
          id: 'annotation-troy-sacked',
          text: 'sacked Troy',
          tooltip: {
            title: 'Troy\'s First Fall',
            content: 'Troy was sacked twice in Greek myth—first by Heracles, then by the Greeks in the famous Trojan War. The city\'s recurring destruction emphasizes how pride and broken promises lead to catastrophe.',
            category: 'historical-context',
          },
        },
      ],

      learningPoints: [
        {
          id: 'lp-heracles-2-anger',
          content: 'Heracles\' destruction of Troy over broken promises reveals his greatest flaw: explosive rage when his honor is challenged.',
          category: 'literary-context',
        },
        {
          id: 'lp-heracles-2-cycles',
          content: 'Troy\'s double destruction creates a mythological cycle, suggesting that some cities and bloodlines are cursed to repeat their fates.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 3: Dialogue - Heracles and Deianira
    {
      id: 'heracles-scene-3-deianira-dialogue',
      type: 'dialogue',
      backgroundImage: 'https://cdn.midjourney.com/21d41a37-aa4d-4a35-bb2a-8afb16f5aae1/0_0.png',

      character: {
        id: 'deianira',
        name: 'Deianira',
        portrait: 'https://cdn.midjourney.com/844b0a06-6241-425e-a610-5634631cff54/0_3.png',
        description: 'Daughter of King Oeneus, strong-willed and intelligent',
      },

      dialogueTree: {
        id: 'node-1',
        speaker: 'deianira',
        text: 'You defeated my other suitor, the river god Achelous, to win my hand. But I need to know—are you looking for a wife, or just another conquest?',

        responses: [
          {
            id: 'response-wife',
            text: 'I want a partner, someone to build a life with',
            nextNodeId: 'node-2',
            learningPoints: [
              {
                id: 'lp-heracles-3a-desire',
                content: 'Heracles genuinely seeks normalcy and companionship after years of violence—his desire for domestic life is sincere.',
                category: 'literary-context',
              },
            ],
          },
          {
            id: 'response-honest',
            text: 'I\'ve spent my life fighting. I don\'t know what peace looks like',
            nextNodeId: 'node-3',
          },
        ],

        allNodes: [
          {
            id: 'node-2',
            speaker: 'deianira',
            text: 'Good. Because I\'m not some helpless princess waiting to be saved. I can handle myself. But I need to know you can control that temper of yours. I\'ve heard the stories, Heracles.',
            nextNodeId: 'node-4',
          },
          {
            id: 'node-3',
            speaker: 'deianira',
            text: 'At least you\'re honest. That\'s more than most heroes. But you need to understand—I won\'t be married to a man who\'s always at war, even with himself. Can you try to find peace?',
            nextNodeId: 'node-4',
          },
          {
            id: 'node-4',
            speaker: 'deianira',
            text: 'The labors are behind you. You\'ve proven everything you need to prove. Maybe it\'s time to discover who Heracles is when he\'s not killing monsters.',
            responses: [
              {
                id: 'response-promise',
                text: 'I\'ll try. With you, I\'ll try',
                nextNodeId: 'node-5',
              },
            ],
          },
          {
            id: 'node-5',
            speaker: 'deianira',
            text: 'Then I\'ll marry you, Heracles. But remember this conversation when the anger comes. Because it will come.',
            isEnd: true,
          },
        ],
      },

      learningPoints: [
        {
          id: 'lp-heracles-3-relationship',
          content: 'Deianira is portrayed as an equal partner, not a passive prize—she challenges Heracles to confront his own nature.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 4: Decision - Handle anger and insult
    {
      id: 'heracles-scene-4-anger-decision',
      type: 'decision',
      backgroundImage: 'https://cdn.midjourney.com/a5678e07-1b01-452e-9234-154cde3953d1/0_0.png',

      prompt: 'How will you respond to the insult?',
      context: `You are Heracles, dining in the court of King Eurytus. You've been married to Deianira for several years now. You've tried to be peaceful.

But King Eurytus' cupbearer—a young man named Eunomus—accidentally spills wine on you. It's a simple accident. The boy apologizes immediately, stammering.

But some of the other guests snicker. They're laughing. At you. The greatest hero in Greece, covered in wine like a common drunk.

You feel the familiar heat rising. The rage. The need to respond to disrespect.

Deianira is watching you from across the hall. You promised her you'd control this.`,

      choices: [
        {
          id: 'choice-laugh',
          text: 'Laugh it off—it was an accident',
          consequence: `You force yourself to laugh. "No harm done, boy. Just be more careful next time."

The guests relax. Deianira smiles at you across the hall. You've passed the test.

This is what Heracles should have done. This is the man Deianira hoped he could become.

But this isn't what happened.`,
        },
        {
          id: 'choice-strike',
          text: 'Strike the boy—he must learn respect',
          consequence: `The rage wins.

You strike Eunomus on the side of the head. You only meant to cuff him, to teach him a lesson about clumsiness around heroes.

But you forget your own strength. The blow kills him instantly.

The hall goes silent. The boy lies dead at your feet. King Eurytus stares at you in horror.

Deianira's face is white with shock. You've broken your promise. Again.

This is the real Heracles—the man who cannot control his strength or his rage, even when he desperately wants to.`,
          learningPoints: [
            {
              id: 'lp-heracles-4a-tragedy',
              content: 'Heracles\' accidental murder of Eunomus shows how even his attempts at restraint fail—his strength makes every angry gesture potentially lethal.',
              category: 'literary-context',
            },
          ],
        },
      ],

      learningPoints: [],
    },

    // Scene 5: Centaur Nessus tries to abduct Deianira
    {
      id: 'heracles-scene-5-nessus',
      type: 'narrative',
      backgroundImage: '/Imsie/assets/greek-myths/backgrounds/nessus.jpg',
      image: '/Imsie/assets/greek-myths/backgrounds/nessus.jpg',

      content: `Years later, Heracles and Deianira were traveling when they came to a swollen river. The centaur Nessus offered to ferry Deianira across on his back while Heracles swam.

Heracles agreed. But halfway across, Nessus tried to abduct Deianira, galloping away with her on his back.

From the far shore, Heracles heard Deianira scream.

He didn't hesitate. He drew one of his arrows—still tipped with the Hydra's poison from his second labor—and shot Nessus through the back.

The centaur fell, mortally wounded. Heracles waded across and pulled Deianira to safety.

She was shaken but unharmed. "You saved me," she said.

Heracles nodded. For once, his violence had protected someone he loved rather than destroyed them.

But Nessus wasn't finished. As he lay dying, he would plant the seeds of Heracles' own destruction.`,

      learningPoints: [
        {
          id: 'lp-heracles-5-protection',
          content: 'Heracles\' use of Hydra-poisoned arrows to save Deianira is heroic, but the poison itself will become the instrument of his death.',
          category: 'literary-context',
        },
        {
          id: 'lp-heracles-5-tragic-irony',
          content: 'Greek tragedy often uses dramatic irony—actions that seem heroic in the moment carry the seeds of future catastrophe.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 6: Nessus's dying trick - poisoned blood
    {
      id: 'heracles-scene-6-trick',
      type: 'narrative',
      backgroundImage: '/Imsie/assets/greek-myths/backgrounds/love_potion.jpg',
      image: '/Imsie/assets/greek-myths/backgrounds/love_potion.jpg',

      content: `As Heracles turned away, the dying Nessus called out to Deianira.

"Princess," he gasped, blood frothing on his lips. "I'm dying. But let me give you a gift... a way to keep your husband's love forever."

Deianira hesitated, but something in his voice made her listen.

"My blood," Nessus whispered, "is now mixed with the Hydra's poison from Heracles' arrow. But it's also mixed with my desire for you. If you collect it and keep it, you can use it as a love charm. If Heracles ever strays... if he ever loves another woman... anoint a robe with my blood and give it to him. He'll love only you forever."

It was a lie, of course. A dying centaur's revenge.

But Deianira didn't know that. She saw only a way to ensure her husband's fidelity—something she'd already begun to doubt given his wandering ways and violent rages.

Secretly, she collected some of Nessus's blood in a vial and hid it away.

Years would pass before she used it. But when she did, it would destroy everything.`,

      learningPoints: [
        {
          id: 'lp-heracles-6-manipulation',
          content: 'Nessus manipulates Deianira\'s legitimate fears about Heracles\' faithfulness, turning her love into the weapon that kills him.',
          category: 'literary-context',
        },
        {
          id: 'lp-heracles-6-revenge',
          content: 'The centaur\'s dying revenge demonstrates how violence creates cycles—Heracles\' poisoned arrow becomes the poison that kills him.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 7: Interlude - Deconstructing superhero
    {
      id: 'heracles-scene-7-deconstruction',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/ae669414-5229-4554-bd62-14c6b24059d8/0_0.png',
      image: 'https://cdn.midjourney.com/ae669414-5229-4554-bd62-14c6b24059d8/0_0.png',

      content: `Let's pause here and talk about what we're really examining: the deconstruction of the superhero.

Heracles is often seen as the first superhero—super-strong, brave, completing impossible tasks. But look closer at his story. He's violent, impulsive, capable of murder when insulted. He struggles with relationships. He can't control his strength or his rage. He's more dangerous than most of the monsters he fights.

Sound familiar?

In 1986, Alan Moore wrote "Watchmen," asking: what if superheroes were real? They'd be damaged people. Violent. Unable to relate to normal humans. The comic deconstructed decades of simplistic hero worship.

"The Boys" (2019) does something similar—showing "heroes" as narcissistic, violent celebrities who care more about their image than helping people.

"Logan" (2017) presented an aging Wolverine, his healing factor failing, his past violence catching up with him, trying to protect one last child before he dies.

These modern stories do what Sophocles did 2,400 years ago with Heracles: they strip away the superhuman exterior to reveal the broken human underneath.

The Greeks understood that the most powerful heroes are also the most tragic—because power without wisdom destroys everything it touches.`,

      inlineAnnotations: [
        {
          id: 'annotation-watchmen',
          text: 'Watchmen',
          tooltip: {
            title: 'Deconstructing the Hero',
            content: 'Alan Moore\'s "Watchmen" revolutionized superhero storytelling by presenting heroes as flawed, violent, and morally compromised—much like the ancient Greeks portrayed Heracles.',
            category: 'reference',
          },
        },
      ],

      learningPoints: [
        {
          id: 'lp-heracles-7-deconstruction',
          content: 'Modern superhero deconstructions (Watchmen, The Boys, Logan) follow the pattern established by Greek tragedy—revealing the humanity beneath heroism.',
          category: 'reference',
        },
        {
          id: 'lp-heracles-7-power-danger',
          content: 'The Greeks understood that superhuman power in the hands of someone with human flaws creates tragedy—a theme central to both ancient and modern hero stories.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 8: Heracles' Wandering Years - Setup for timeline
    {
      id: 'heracles-scene-8-wandering',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/69abd955-7840-4a01-a64c-16123cf473d4/0_0.png',
      image: 'https://cdn.midjourney.com/69abd955-7840-4a01-a64c-16123cf473d4/0_0.png',

      content: `After the Twelve Labors ended, Heracles was free—but freedom brought its own curse. Who was he without monsters to fight? Without penance to complete?

He wandered Greece, seeking purpose through more adventures.

He joined Jason and the Argonauts on their quest for the Golden Fleece, though he left the expedition early. When his beloved companion Hylas was abducted by water nymphs, Heracles refused to continue without the boy. Some say he's still searching.

Years later, he attacked Troy for the first time. King Laomedon had promised Heracles divine horses in exchange for saving his daughter from a sea monster. When Laomedon broke his oath, Heracles returned with an army, sacked the city, and killed the king. The Trojan War's seeds were planted in that moment of rage.

He even wrestled Death itself. When Thanatos came for Queen Alcestis, who had agreed to die in place of her husband King Admetus, Heracles ambushed the god of death. He wrestled Thanatos into submission and forced him to release Alcestis back to the living world. It was one of Heracles' few victories that saved rather than destroyed.

Eventually, he won the hand of Deianira by defeating the river god Achelous in single combat. Finally, he thought, a chance at peace. A wife. A home. A normal life.

But years later, in another moment of pride and desire, Heracles would sack the city of Oechalia. King Eurytus had refused to give his daughter Iole to Heracles (having seen the hero's destructive rages before). Heracles destroyed the entire city and killed the king, taking Iole as a captive.

Every adventure added to his legend. But none addressed the fundamental problem: Heracles didn't know how to live in peace. He defined himself through conflict, conquest, and challenge. And that would lead him, finally, to his doom.`,

      learningPoints: [
        {
          id: 'lp-heracles-8-wandering',
          content: 'Heracles\' post-labors adventures reveal a hero unable to accept domestic life—he continually seeks external validation through conflict rather than inner peace.',
          category: 'literary-context',
        },
        {
          id: 'lp-heracles-8-pattern',
          content: 'The pattern is clear: glory → pride → broken promises → violence → destruction. Even after redemption, Heracles repeats his tragic flaws.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 9: Timeline Game - Heracles' later adventures
    {
      id: 'heracles-scene-9-timeline',
      type: 'timeline-game',
      backgroundImage: 'https://cdn.midjourney.com/69abd955-7840-4a01-a64c-16123cf473d4/0_0.png',
      image: 'https://cdn.midjourney.com/69abd955-7840-4a01-a64c-16123cf473d4/0_0.png',

      prompt: 'After the Labors ended, Heracles continued adventuring for years. Can you order these famous exploits chronologically?',

      timelineEvents: [
        {
          id: 'event-1',
          title: 'Joining the Argonauts',
          year: 1,
          description: 'Heracles joined Jason\'s quest for the Golden Fleece, though he left the expedition early when his companion Hylas was abducted by water nymphs.',
          image: 'https://cdn.midjourney.com/ab355622-1c71-49d5-90a6-e77e2eaa693a/0_1.png',
        },
        {
          id: 'event-2',
          title: 'The Sack of Troy (First Time)',
          year: 2,
          description: 'Heracles rescued King Laomedon\'s daughter from a sea monster, but when the king refused the promised reward (his divine horses), Heracles sacked Troy.',
          image: 'https://cdn.midjourney.com/9d2ab341-3d00-4c76-b21b-32156ea67a5a/0_0.png',
        },
        {
          id: 'event-3',
          title: 'Wrestling Death for Alcestis',
          year: 3,
          description: 'When Death came for Queen Alcestis, Heracles wrestled Thanatos himself and won, returning Alcestis to life and to her husband Admetus.',
          image: 'https://cdn.midjourney.com/bc3d2365-dddf-4dd9-9ec6-a1ba3dc52602/0_3.png',
        },
        {
          id: 'event-4',
          title: 'Marriage to Deianira',
          year: 4,
          description: 'Heracles won Deianira\'s hand by defeating the river god Achelous in combat, beginning the relationship that would lead to his doom.',
          image: 'https://cdn.midjourney.com/55a828a6-748d-4b1a-ac52-444c22295c42/0_2.png',
        },
        {
          id: 'event-5',
          title: 'Killing King Eurytus',
          year: 5,
          description: 'Years later, Heracles sacked the city of Oechalia and killed King Eurytus because the king refused to give him his daughter Iole, whom Heracles desired.',
          image: 'https://cdn.midjourney.com/cb37f8d0-a502-4790-9610-dc4cf74f8961/0_1.png',
        },
      ],

      successThreshold: 70,

      learningPoints: [
        {
          id: 'lp-heracles-9-restlessness',
          content: 'Heracles\' constant adventures suggest a hero unable to accept domestic life—he defines himself through conflict and achievement.',
          category: 'literary-context',
        },
        {
          id: 'lp-heracles-9-marriage',
          content: 'The strain on Heracles\' marriage reflects how heroic culture (based on glory and adventure) conflicts with domestic stability.',
          category: 'cultural-context',
        },
        {
          id: 'lp-heracles-9-pattern',
          content: 'Heracles\' post-labor adventures show a troubling pattern: violence, pride, and desire leading to tragedy—foreshadowing his ultimate fate.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 10: Dialogue - Falls for Iole; Deianira's jealousy
    {
      id: 'heracles-scene-10-iole-dialogue',
      type: 'dialogue',
      backgroundImage: 'https://cdn.midjourney.com/1070f967-8f21-4980-a19e-881aacc175f6/0_0.png',

      character: {
        id: 'deianira-older',
        name: 'Deianira',
        portrait: 'https://cdn.midjourney.com/844b0a06-6241-425e-a610-5634631cff54/0_3.png',
        description: 'Heracles\' wife, weathered by years of waiting',
      },

      dialogueTree: {
        id: 'node-1',
        speaker: 'deianira-older',
        text: 'You sacked the city of Oechalia. You killed King Eurytus. And now you\'re bringing his daughter Iole here? As a... what? A servant?',

        responses: [
          {
            id: 'response-servant',
            text: 'She\'s just a captive. It\'s customary',
            nextNodeId: 'node-2',
          },
          {
            id: 'response-honest',
            text: 'I won\'t lie to you. I care for her',
            nextNodeId: 'node-3',
          },
        ],

        allNodes: [
          {
            id: 'node-2',
            speaker: 'deianira-older',
            text: 'Don\'t insult my intelligence, Heracles. I\'ve seen the way you look at her. I\'ve heard the stories. You destroyed an entire city because her father refused to give her to you.',
            nextNodeId: 'node-4',
          },
          {
            id: 'node-3',
            speaker: 'deianira-older',
            text: 'At least you\'re honest. After all these years, at least you\'re finally honest. She\'s young. Beautiful. Not worn down by decades of waiting for you to come home from your adventures.',
            nextNodeId: 'node-4',
          },
          {
            id: 'node-4',
            speaker: 'deianira-older',
            text: 'I\'ve been loyal to you, Heracles. Through everything. Your rages. Your absences. Your other women. And this is how you repay me?',
            responses: [
              {
                id: 'response-sorry',
                text: 'You\'re still my wife. That hasn\'t changed',
                nextNodeId: 'node-5',
                learningPoints: [
                  {
                    id: 'lp-heracles-9a-betrayal',
                    content: 'Heracles\' casual dismissal of Deianira\'s feelings demonstrates how even loving heroes can be thoughtlessly cruel.',
                    category: 'literary-context',
                  },
                ],
              },
            ],
          },
          {
            id: 'node-5',
            speaker: 'deianira-older',
            text: 'No. Everything has changed. I see that now. But I won\'t simply accept it. I won\'t be replaced without a fight.',
            isEnd: true,
          },
        ],
      },

      learningPoints: [
        {
          id: 'lp-heracles-10-iole',
          content: 'Heracles\' infatuation with Iole (after destroying her city and killing her family) shows how heroes can be perpetrators as well as protectors.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 11: Decision - As Deianira, use "love charm"?
    {
      id: 'heracles-scene-11-deianira-choice',
      type: 'decision',
      backgroundImage: 'https://cdn.midjourney.com/013448a7-855d-4473-a816-3d8f0b33c3d4/0_0.png',

      prompt: 'Will you use Nessus\'s "love charm"?',
      context: `You are Deianira. Your husband has brought his new lover to live in your home. Young, beautiful Iole, a princess he destroyed a city to possess.

You've been loyal for decades. You've endured his absences, his rages, his violence. And now this.

You remember the vial hidden in your chamber. The blood of the centaur Nessus, given to you years ago. "A love charm," he called it. "If Heracles ever strays, anoint a robe with this and he'll love only you forever."

You've never used it. You've tried to trust your husband.

But now Iole sleeps under your roof. Now Heracles barely looks at you.

The vial is in your hand. A new robe lies ready—a gift for Heracles to wear at his victory sacrifice.

What do you do?`,

      choices: [
        {
          id: 'choice-use',
          text: 'Anoint the robe with the "love charm"',
          consequence: `You make your choice. Heracles is away at Cape Cenaeum, preparing to make a great sacrifice to Zeus in thanks for his victory over Oechalia.

You take out the finest robe you've woven and work alone in your chamber, carefully anointing it with the centaur's blood. It soaks in, leaving no trace.

"Take this to Heracles," you tell the messenger Lichas. "A gift for his sacrifice to Zeus. The finest robe I've ever made."

It's not really a love charm, you think. It's justice. After everything you've endured, you deserve to have your husband back.

But you've forgotten something crucial: Nessus was dying when he gave you this gift. Dying from an arrow tipped with the Hydra's poison.

Why would a dying centaur give you anything but revenge?`,
          learningPoints: [
            {
              id: 'lp-heracles-11a-desperation',
              content: 'Deianira\'s decision to use the "charm" comes from legitimate pain and desperation—her tragedy is that she trusts her enemy out of love.',
              category: 'literary-context',
            },
          ],
        },
        {
          id: 'choice-trust',
          text: 'Throw the vial away and confront Heracles honestly',
          consequence: `The wise choice. The strong choice.

But Deianira, worn down by years of betrayal, couldn't make it. She wanted to believe in magic. She wanted to believe there was a way to win back her husband's love without having to confront the truth: that Heracles had never really learned to love anyone, including himself.

Deianira used the charm. And in doing so, she destroyed the man she loved.`,
        },
      ],

      learningPoints: [],
    },

    // Scene 12: Heracles dons poisoned robe - agony
    {
      id: 'heracles-scene-12-robe',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/008eabab-7f8d-4eb6-93bb-6b4a1955c02a/0_0.png',
      image: 'https://cdn.midjourney.com/29059171-9c8d-4e05-8a7e-6542208e90ce/0_0.png',

      content: `Heracles put on the robe at the altar, preparing to offer sacrifice to Zeus in thanks for his victory.

As the altar's heat warmed the fabric, the centaur's blood—mixed with the Hydra's poison—activated.

The robe began to burn.

Not with fire, but with poison. It seared into Heracles' flesh, melting his skin, boring into his muscles. He tried to tear it off, but the fabric clung tighter, fused to his body by the poison.

Heracles, who had faced the Nemean Lion, who had wrestled Death itself, who had held up the sky—Heracles screamed.

The pain was unendurable. He grabbed a servant and threw him off a cliff in his agony. He uprooted trees. He tore at his own flesh trying to remove the robe.

But nothing helped. The poison that had killed the Hydra was now killing the man who had defeated it.

His strength, his greatest gift, became his curse. He couldn't die quickly. His divine heritage kept him alive while the poison slowly destroyed him.

For the first time in his life, Heracles begged for death.`,

      learningPoints: [
        {
          id: 'lp-heracles-12-poison',
          content: 'The Hydra\'s poison—Heracles\' weapon in his second labor—becomes the instrument of his death, completing a tragic circle.',
          category: 'literary-context',
        },
        {
          id: 'lp-heracles-12-strength-curse',
          content: 'Heracles\' divine strength, his greatest asset, becomes a curse by preventing him from dying quickly—power turns to suffering.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 13: Primary Source - Sophocles on suffering/death
    {
      id: 'heracles-scene-13-sophocles',
      type: 'primary-source',
      backgroundImage: 'https://cdn.midjourney.com/0c4a124e-f22b-432d-a5f1-e44ba25d7b22/0_0.png',

      prompt: 'Sophocles\' tragedy "Women of Trachis" depicts Heracles\' final moments. Read this passage and consider: how does the playwright humanize the ultimate hero?',

      source: {
        title: 'Women of Trachis',
        author: 'Sophocles',
        date: 'circa 450-425 BCE',
        type: 'text',
        content: `HERACLES: Ah! It comes again—the agony tears through me! Wretched, miserable man that I am—where will this suffering end?


O Zeus, my father! The creature's venom races through my blood, devouring me! Did I survive the Lion, the Hydra, the labors that broke lesser men—only to die like this, poisoned by my own wife's gift?


I, who cleared the earth of monsters, who brought order where chaos reigned—I am destroyed not by any enemy's strength, but by a woman's desperate love!


My son, look at what remains of Heracles! Look at this body that wrestled Death, that held the heavens—reduced to this writhing, screaming thing. Is this glory? Is this the reward for all my labors?


Better I had died in battle, sword in hand, than survive to this—to discover that the greatest hero is still only a man, still mortal, still subject to suffering and death.`,
        citation: 'Sophocles, Women of Trachis, lines 1046-1111 (adapted)',
      },

      questions: [
        {
          id: 'q-heracles-humanity',
          question: 'How does Sophocles use Heracles\' suffering to explore the relationship between heroism and mortality?',
          type: 'multiple-choice',
          options: [
            'He shows that true heroes never suffer because the gods protect them',
            'He reveals that superhuman achievements cannot escape human vulnerability—even the greatest hero is mortal',
            'He suggests that Heracles deserved to suffer for his violent past',
            'He demonstrates that heroes should never marry or trust anyone',
          ],
          correctAnswer: 'He reveals that superhuman achievements cannot escape human vulnerability—even the greatest hero is mortal',
          explanation: 'Sophocles deconstructs heroism by showing Heracles—the ultimate superhero—reduced to a "writhing, screaming thing" by poison. Despite all his legendary labors, he remains vulnerable to suffering and death. This is the core of Greek tragedy: greatness doesn\'t exempt anyone from human pain.',
        },
      ],

      learningPoints: [
        {
          id: 'lp-heracles-13-tragedy',
          content: 'Sophocles\' "Women of Trachis" transforms Heracles from invincible hero to suffering human, emphasizing that tragedy reveals truth about the human condition.',
          category: 'literary-context',
        },
        {
          id: 'lp-heracles-13-irony',
          content: 'The irony that Heracles is killed not by a worthy enemy but by his wife\'s misguided love makes his death more tragic than any battlefield defeat.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 14: Funeral pyre on Mount Oeta
    {
      id: 'heracles-scene-14-pyre',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/9d9b0e58-a232-4cc2-b73d-6b7192852b96/0_0.png',
      image: 'https://cdn.midjourney.com/19999167-62e8-4def-89aa-769a1f3e8856/0_0.png',

      content: `When Deianira learned what she had done—that her "love charm" was killing her husband—she took her own life in grief and horror. She had never meant to kill him. She had only wanted him to love her again.

Heracles, still in agony, commanded his followers to carry him to the summit of Mount Oeta. There, he built a massive funeral pyre of oak logs.

"Burn me," he ordered his son Hyllus. "It's the only way to end this pain."

Hyllus couldn't do it. No one could bring themselves to light the pyre for the greatest hero in Greece.

Finally, a passing shepherd named Philoctetes agreed. In gratitude, Heracles gave him his bow and poison arrows—the very weapons that had killed Nessus and, indirectly, himself.

Philoctetes lit the pyre. The flames rose. And Heracles, at last, began to die.

But the Greeks believed that Heracles didn't simply die—he was transformed. His mortal flesh burned away, but his divine essence, inherited from Zeus, ascended to Olympus.

The man died. The god was born.`,

      learningPoints: [
        {
          id: 'lp-heracles-14-pyre',
          content: 'The funeral pyre becomes a transformative ritual—burning away Heracles\' mortal suffering to reveal his divine essence.',
          category: 'cultural-context',
        },
        {
          id: 'lp-heracles-14-deianira',
          content: 'Deianira\'s suicide upon realizing her mistake completes the tragedy—both hero and wife are destroyed by love and misunderstanding.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 15: Apotheosis - becomes god, marries Hebe
    {
      id: 'heracles-scene-15-apotheosis',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/a2c9f9c2-d910-47e9-8d1c-9e174e08b648/0_0.png',
      image: 'https://cdn.midjourney.com/a2c9f9c2-d910-47e9-8d1c-9e174e08b648/0_0.png',

      content: `As the flames consumed his mortal body, Zeus sent a thunderbolt from Olympus. The divine fire lifted Heracles' immortal essence up to heaven.

On Olympus, he was welcomed as a god. Even Hera, who had persecuted him his entire life, finally made peace with her husband's son. She gave Heracles her daughter Hebe, goddess of youth, as his divine bride.

Heracles, the man who had never found peace in life, found it in death. As a god, he was no longer subject to rage, to jealousy, to the human flaws that had caused so much suffering.

This transformation—apotheosis, the elevation of a mortal to divine status—was rare in Greek myth. Only the very greatest heroes achieved it: Heracles, Dionysus, and later, a few Roman emperors who claimed divine status.

But here's the question the myth leaves us with: Did Heracles earn apotheosis through his heroic labors? Or did he earn it through his suffering—through experiencing the full range of human pain, failure, and mortality?

Perhaps the Greeks understood something we often forget: that the path to transcendence isn't through success and glory, but through enduring and accepting our own humanity—our flaws, our suffering, our inevitable deaths.

Heracles became a god not despite being human, but because he fully experienced what it meant to be human.`,

      inlineAnnotations: [
        {
          id: 'annotation-apotheosis',
          text: 'apotheosis',
          tooltip: {
            title: 'Elevation to Divinity',
            content: 'Apotheosis means the transformation from mortal to god. In Greek myth, it was extremely rare and usually required both heroic achievement and divine parentage. The word comes from Greek "apo" (from) + "theos" (god).',
            category: 'vocabulary',
          },
        },
      ],

      learningPoints: [
        {
          id: 'lp-heracles-15-apotheosis',
          content: 'Heracles\' apotheosis suggests that divinity is achieved not just through heroic deeds, but through fully experiencing and transcending human suffering.',
          category: 'literary-context',
        },
        {
          id: 'lp-heracles-15-redemption',
          content: 'The reconciliation with Hera and marriage to Hebe represents the ultimate resolution—peace comes only when Heracles transcends his mortal nature.',
          category: 'literary-context',
        },
      ],
    },

    // Scene 16: Cause-Effect - Match human flaws to tragic outcomes
    {
      id: 'heracles-scene-16-cause-effect',
      type: 'cause-effect',
      backgroundImage: 'https://cdn.midjourney.com/5e8b6e80-bc18-46d9-9d72-a8c1afc76108/0_0.png',

      prompt: 'Match Heracles\' human flaws and choices to their tragic consequences. How did the greatest hero destroy himself?',

      pairs: [
        {
          id: 'pair-1',
          cause: 'Heracles\' uncontrolled rage when insulted',
          effect: 'He accidentally kills Eunomus and destroys Troy over broken promises',
          explanation: 'Heracles\' inability to control his anger when his honor is challenged leads to both accidental and intentional killing—his strength makes every angry gesture potentially fatal.',
        },
        {
          id: 'pair-2',
          cause: 'Heracles falls for Iole and brings her home',
          effect: 'Deianira, desperate and betrayed, decides to use the "love charm"',
          explanation: 'Heracles\' casual infidelity and thoughtless cruelty toward his loyal wife drives her to desperate measures—his emotional failures are as destructive as his physical violence.',
        },
        {
          id: 'pair-3',
          cause: 'Heracles shoots Nessus with Hydra-poisoned arrow',
          effect: 'The dying centaur\'s blood becomes the poison that kills Heracles',
          explanation: 'The weapon from Heracles\' second labor (Hydra poison) ultimately becomes the instrument of his death—his past violence literally comes back to destroy him.',
        },
        {
          id: 'pair-4',
          cause: 'Deianira trusts Nessus\'s "gift" out of desperate love',
          effect: 'The poisoned robe causes unbearable agony, forcing Heracles to the pyre',
          explanation: 'Deianira\'s well-intentioned attempt to save her marriage destroys her husband—love without wisdom can be as deadly as hatred.',
        },
        {
          id: 'pair-5',
          cause: 'Heracles chooses death by fire on Mount Oeta',
          effect: 'His mortal flesh burns away; he achieves apotheosis and becomes divine',
          explanation: 'The funeral pyre meant to end suffering becomes the gateway to transformation—embracing mortality paradoxically leads to immortality.',
        },
      ],

      learningPoints: [
        {
          id: 'lp-heracles-16-flaws',
          content: 'Heracles\' tragedy stems from human flaws (rage, pride, lust) that his superhuman strength amplifies rather than mitigates.',
          category: 'literary-context',
        },
      ],

      events: {
        onExit: [{
          type: 'quiz',
          componentId: 'quiz-chapter-5',
          condition: { type: 'if-not-completed' },
        }],
      },
    },
  ],

  endQuiz: chapter5Quiz,
};

import type { Chapter } from '../../../types';
import { finalQuiz } from '../quizzes/final-quiz';

/**
 * Epilogue: The Fall of Troy
 *
 * After the Iliad ends with Hector's funeral, this epilogue completes the Trojan War story,
 * covering Achilles' death, the Trojan Horse, and Troy's fall. These events come from
 * other ancient sources (the Epic Cycle, Virgil's Aeneid, later Greek tragedies) rather
 * than Homer's Iliad itself.
 *
 * Duration: 20-25 minutes
 * Scenes: 8
 */
export const epilogue: Chapter = {
  id: 'iliad-epilogue',
  title: 'Epilogue: The Fall of Troy',
  description: 'The Iliad ends with Hector\'s funeral, but the war continues. Discover how Troy finally falls—and the fate of its greatest warriors.',

  learningObjectives: [
    'Understand what happens after the Iliad ends',
    'Learn how the Trojan Horse leads to Troy\'s fall',
    'Recognize which parts of the "Trojan War story" come from sources other than Homer',
    'See how the war\'s aftermath fulfills earlier prophecies',
  ],

  scenes: [
    // Scene 1: Note on Sources
    {
      id: 'iliad-epi-sc1-sources',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/0c803d89-4251-4253-a8a0-ffacf36d9118/0_0.png', // Troy Under Siege (reused from Ch0)

      content: `**A Note on What Follows**

Homer's *Iliad* ends with Hector's funeral. The epic doesn't tell you who wins the war, whether Troy falls, or how Achilles dies.

This might seem strange—but Homer's point was never about victory or defeat. The *Iliad* is about wrath, grief, and the moment when enemies recognize their shared humanity. It ends perfectly: with reconciliation, not triumph.

But the Trojan War story continued in other ancient works—the Epic Cycle (mostly lost), Virgil's *Aeneid*, and Greek tragedies. These texts complete the story you probably know from popular culture.

What follows is that completion: the death of Achilles, the Trojan Horse, and Troy's fall. This epilogue draws from those later sources to give you the full story—even though Homer chose to stop at a more meaningful place.

Think of this as "what happened next," told by other ancient voices.`,

      learningPoints: [
        {
          id: 'lp-epi-1-sources',
          content: 'The Iliad ends with Hector\'s funeral—Achilles\' death, the Trojan Horse, and Troy\'s fall come from other ancient sources, not Homer.',
          category: 'historical-context',
        },
        {
          id: 'lp-epi-1-homers-choice',
          content: 'Homer chose to end with reconciliation rather than victory, making a thematic point about humanity over military triumph.',
          category: 'literary-technique',
        },
      ],
    },

    // Scene 2: The Death of Achilles
    {
      id: 'iliad-epi-sc2-achilles-death',
      type: 'narrative',
      backgroundImage: '/Imsie/public/assets/the-iliad/backgrounds/death_of_achilles.jpg', // Achilles' Death at the Scaean Gates

      content: `After Hector's funeral, the war continues.

Achilles fights on, unstoppable, slaughtering Trojans by the hundreds. He kills Memnon, king of Ethiopia. He kills the Amazon queen Penthesilea, then weeps over her body, recognizing her beauty and courage too late.

But Achilles knows his death is near. His mother warned him. Hector prophesied it with his dying breath. Even his immortal horse told him his time was short.

One day, as Achilles storms Troy's Scaean Gates, Paris—the prince who started this war by stealing Helen—takes aim from the walls. Apollo guides the arrow.

The arrow strikes Achilles in the heel. His only vulnerable spot.

The greatest warrior of the age falls, killed by the least martial of Troy's princes, with divine help. His death fulfills every prophecy. It proves that even the mightiest hero cannot escape fate.

The Greeks recover his body and hold massive funeral games. His armor—the divine armor Hephaestus forged—becomes the prize in a competition that drives Ajax to madness and suicide.

Thetis was right: Achilles chose the short life with eternal glory. His name will be remembered forever. But he's still dead at twenty-something, killed by an arrow to the heel.`,

      learningPoints: [
        {
          id: 'lp-epi-2-achilles-heel',
          content: 'The "Achilles heel" myth (his only vulnerable spot) doesn\'t appear in the Iliad—it comes from much later sources.',
          category: 'historical-context',
        },
        {
          id: 'lp-epi-2-prophecy-fulfilled',
          content: 'Achilles\' death fulfills all the prophecies from earlier in the story—fate cannot be escaped, even by the greatest hero.',
          category: 'thematic-analysis',
        },
        {
          id: 'lp-epi-2-kleos-cost',
          content: 'Achilles achieves eternal kleos (glory) but dies young—the choice he made in Book 1 is finally realized.',
          category: 'character-analysis',
        },
      ],
    },

    // Scene 3: The Greeks' Desperation
    {
      id: 'iliad-epi-sc3-stalemate',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/4e156272-69b6-415c-882a-76f34773968f/0_0.png', // The Trojan Horse - Construction
      image: 'https://cdn.midjourney.com/aaafe36e-75b2-4d34-b675-42d6f567637a/0_0.png', // The Trojan Horse scene illustration

      content: `Ten years. The Greeks have besieged Troy for ten years.

They've killed Hector, Troy's greatest defender. They've killed Achilles, their own greatest warrior. Thousands have died on both sides. But Troy's walls still stand, impregnable.

The Greeks are exhausted, demoralized, ready to give up and go home. How can you conquer a city you cannot breach?

Odysseus—clever Odysseus, king of Ithaca—proposes a plan. Not a battle plan. A trick.

"We cannot take Troy by force," he says. "So we'll take it by deception."

The Greeks will build a giant wooden horse. They'll hide their best warriors inside it. They'll pretend to sail away, defeated, leaving the horse as a "gift to Athena" for safe passage home.

The Trojans, thinking they've won, will pull the horse inside the city as a trophy.

And that night, the warriors hidden inside will open Troy's gates from within.

It's insane. It's brilliant. It's the only plan they have left.

They build the horse.`,

      learningPoints: [
        {
          id: 'lp-epi-3-odysseus-intelligence',
          content: 'Odysseus represents cunning intelligence (métis) versus Achilles\' physical prowess—both are heroic virtues in Greek culture.',
          category: 'cultural-context',
        },
        {
          id: 'lp-epi-3-deception',
          content: 'The Trojan Horse story shows Greeks valued clever deception in warfare as much as direct combat—intelligence was a heroic quality.',
          category: 'cultural-context',
        },
      ],
    },

    // Scene 4: Decision - The Trojan Horse Debate
    {
      id: 'iliad-epi-sc4-decision',
      type: 'decision',
      backgroundImage: 'https://cdn.midjourney.com/fc525902-0fcb-4a64-b180-55b284f1b13c/0_0.png', // The Horse Before Troy's Gates

      prompt: 'You are a Trojan watching the Greeks sail away after ten years. A massive wooden horse sits on the beach. What should Troy do?',

      choices: [
        {
          id: 'choice-burn',
          text: 'Burn it—it\'s obviously a trick',
          consequence: 'Some Trojans agree. Laocoön, a priest, warns: "I fear Greeks even when they bring gifts!" But Cassandra\'s prophecies are never believed, and the crowd overrules caution.',
          nextSceneId: 'iliad-epi-sc5-horse-enters',
        },
        {
          id: 'choice-destroy',
          text: 'Drag it to the cliffs and push it into the sea',
          consequence: 'Wise counsel! But the Trojans, drunk on what they think is victory, ignore warnings. They want the horse as a trophy of their triumph over Greece.',
          nextSceneId: 'iliad-epi-sc5-horse-enters',
        },
        {
          id: 'choice-inside',
          text: 'Bring it inside the city as a victory trophy',
          consequence: 'The Trojans celebrate, certain the war is over. They ignore Cassandra\'s screams of warning, ignore Laocoön\'s prophecy. Hubris blinds them to danger.',
          nextSceneId: 'iliad-epi-sc5-horse-enters',
        },
      ],

      learningPoints: [
        {
          id: 'lp-epi-4-cassandra',
          content: 'Cassandra was cursed to speak true prophecies that no one would believe—a tragic irony that dooms Troy.',
          category: 'cultural-context',
        },
        {
          id: 'lp-epi-4-laocoon',
          content: 'Laocoön\'s warning "I fear Greeks even when they bring gifts" became proverbial—but he was ignored, and serpents killed him as a sign.',
          category: 'cultural-context',
        },
      ],
    },

    // Scene 5: The Horse Enters Troy
    {
      id: 'iliad-epi-sc5-horse-enters',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/fc525902-0fcb-4a64-b180-55b284f1b13c/0_0.png', // The Horse Before Troy's Gates

      content: `Despite all warnings, the Trojans pull the massive wooden horse through their gates.

They have to widen the gates to fit it. They have to tear down part of their sacred walls—the walls that protected them for ten years—to drag this "gift" inside.

The symbolism couldn't be clearer: in their hubris, the Trojans destroy their own defenses.

That night, Troy celebrates. Ten years of siege, ended! The Greeks have sailed away, defeated! Wine flows. Music plays. The whole city drinks and dances, convinced they've won.

Inside the horse, Odysseus and a dozen Greek warriors wait in darkness, barely breathing.

When Troy finally falls into drunken sleep, they emerge.

Silently, they creep through the city to the gates. They kill the guards. They open the gates from inside.

And the Greek army—which never left, only hid their ships beyond the headland—pours into sleeping Troy.

The city that withstood ten years of siege falls in a single night, destroyed by its own celebration of victory.`,

      learningPoints: [
        {
          id: 'lp-epi-5-tragic-irony',
          content: 'Troy literally tears down its own walls to let in the horse—destruction comes from within, invited by pride.',
          category: 'thematic-analysis',
        },
        {
          id: 'lp-epi-5-hubris-punishment',
          content: 'The Trojans\' hubris (thinking they\'d won) leads directly to their destruction—a recurring theme in Greek tragedy.',
          category: 'thematic-analysis',
        },
      ],
    },

    // Scene 6: The Fall of Troy
    {
      id: 'iliad-epi-sc6-sack',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/969688df-12cc-4095-9896-5d2b80dbd2b2/0_0.png', // Troy Burns - The Sack
      image: 'https://cdn.midjourney.com/a94ea85b-ba7f-44db-ab74-6a032f8ebb76/0_0.png', // The Sack of Troy - Priam's Death

      content: `The sack of Troy is brutal.

King Priam—who knelt before Achilles and ransomed Hector's body with such dignity—is murdered at the altar where he seeks sanctuary. The old king who showed such courage dies helpless, his city burning around him.

Hector's infant son Astyanax—the baby who cried at his father's helmet plume—is thrown from Troy's walls. The Greeks cannot allow Hector's line to survive and seek vengeance.

Hector's widow Andromache, who begged him not to fight, becomes a slave to Achilles' son.

Cassandra, who saw all this coming and was never believed, is dragged from Athena's temple and enslaved.

Helen—whose face launched a thousand ships—returns to Menelaus. After all this death, all this destruction, she goes home with her husband as if the war never happened.

Troy burns. The great city that stood for generations, that produced heroes like Hector, that held out for ten years—reduced to ash and rubble in one night.

The Greeks sail home victorious, but many will never reach their shores. The gods are not pleased with how Troy was sacked, and the Greeks' journeys home will be cursed.

Odysseus will wander for ten more years. Agamemnon will be murdered by his wife. Ajax already killed himself in madness.

No one truly wins this war.`,

      learningPoints: [
        {
          id: 'lp-epi-6-no-winners',
          content: 'The fall of Troy brings suffering to victors and vanquished alike—Greek tragedy emphasizes the cost of war for everyone.',
          category: 'thematic-analysis',
        },
        {
          id: 'lp-epi-6-cycle-of-violence',
          content: 'Killing Astyanax to prevent future vengeance shows how violence creates more violence in an endless cycle.',
          category: 'thematic-analysis',
        },
        {
          id: 'lp-epi-6-odyssey-setup',
          content: 'The Greeks\' cursed journeys home, especially Odysseus\'s ten-year wandering, are told in Homer\'s Odyssey.',
          category: 'historical-context',
        },
      ],
    },

    // Scene 7: Reflection - What the Iliad Teaches
    {
      id: 'iliad-epi-sc7-reflection',
      type: 'decision',
      backgroundImage: 'https://cdn.midjourney.com/7cfe6e87-ccec-4682-9731-612e41b7e78a/0_0.png', // The Aftermath - Trojan Women

      prompt: 'Now that you know the full story—from Achilles\' wrath to Troy\'s fall—what do you think is the Iliad\'s most important message?',

      choices: [
        {
          id: 'choice-glory',
          text: 'Glory in battle is worth dying for',
          consequence: 'The Iliad shows glory\'s cost as much as its appeal. Achilles achieves eternal fame but dies young. Hector dies honorably but his family is destroyed. Glory comes at a terrible price.',
          nextSceneId: 'iliad-epi-sc8-conclusion',
        },
        {
          id: 'choice-humanity',
          text: 'Our shared humanity transcends even the deepest conflicts',
          consequence: 'This is why Homer ends with Achilles and Priam weeping together. Enemies recognizing their common suffering is more powerful than any victory. Compassion matters more than conquest.',
          nextSceneId: 'iliad-epi-sc8-conclusion',
        },
        {
          id: 'choice-futility',
          text: 'War destroys everyone—there are no winners',
          consequence: 'Troy falls, but the Greeks suffer for it. Achilles dies young. Hector\'s family is destroyed. Ten years of suffering for what? The Iliad shows war\'s cost to all sides.',
          nextSceneId: 'iliad-epi-sc8-conclusion',
        },
        {
          id: 'choice-fate',
          text: 'Fate governs all—mortals cannot escape their doom',
          consequence: 'Every prophecy comes true. Achilles chooses death for glory. Troy falls despite Hector\'s heroism. The Iliad shows mortals navigating fate they cannot change, finding meaning in how they face the inevitable.',
          nextSceneId: 'iliad-epi-sc8-conclusion',
        },
      ],

      learningPoints: [
        {
          id: 'lp-epi-7-themes',
          content: 'The Iliad explores multiple themes simultaneously—glory and its cost, fate and free will, rage and compassion, war and humanity.',
          category: 'thematic-analysis',
        },
      ],
    },

    // Scene 8: Conclusion
    {
      id: 'iliad-epi-sc8-conclusion',
      type: 'narrative',
      backgroundImage: 'https://cdn.midjourney.com/a5f099e8-b864-4f64-85c1-18634789a427/0_0.png', // Mount Olympus

      content: `**The Iliad's Legacy**

You've experienced the complete arc: from Achilles' rage at Agamemnon to Troy's fall. But remember—Homer chose to end his epic not with triumph, but with two grieving men sharing a meal.

That choice matters.

The *Iliad* isn't ultimately about war—it's about humanity under extreme pressure. It asks: When everything drives us toward violence and vengeance, can we still recognize our enemies as human? Can grief lead to compassion instead of endless rage?

These questions echo through 2,800 years. The Iliad has inspired countless works: Virgil's *Aeneid*, Dante's *Inferno*, modern novels, films, and plays. Every generation finds new meaning in Achilles' rage, Hector's courage, and Priam's plea.

**What Comes Next:**

The Greeks' journey home becomes Homer's *Odyssey*—especially Odysseus's ten-year wandering, which you might explore in a future adventure.

But for now, you've witnessed one of humanity's foundational stories. You've walked with heroes and gods through grief, rage, love, and loss.

You've experienced the *Iliad*.

And like Achilles' name, these stories will live forever—not because of the glory won, but because of the humanity revealed.`,

      learningPoints: [
        {
          id: 'lp-epi-8-legacy',
          content: 'The Iliad has influenced Western literature for nearly 3,000 years, establishing many narrative patterns and themes still used today.',
          category: 'historical-context',
        },
        {
          id: 'lp-epi-8-odyssey-next',
          content: 'Homer\'s Odyssey tells the story of Odysseus\'s ten-year journey home—another epic of Greek heroes facing impossible challenges.',
          category: 'historical-context',
        },
        {
          id: 'lp-epi-8-timeless-themes',
          content: 'The Iliad\'s themes—rage and reconciliation, glory and its cost, fate and choice—remain relevant across all cultures and eras.',
          category: 'thematic-analysis',
        },
      ],

      events: {
        onExit: [
          {
            type: 'quiz',
            componentId: 'final-quiz-the-iliad',
            condition: { type: 'if-not-completed' },
          },
        ],
      },
    },
  ],

  endQuiz: finalQuiz,
};

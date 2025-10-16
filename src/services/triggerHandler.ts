import type {
  SceneTrigger,
  AdventureProgress,
  Quiz,
  Adventure,
} from '../types';
import type { ComponentType } from 'react';

/**
 * Trigger Handler Service
 * Manages event-driven triggers for quizzes, mini-games, and other components
 */

/**
 * Evaluates if a trigger should fire based on its condition
 */
export function shouldTriggerFire(
  trigger: SceneTrigger,
  progress: AdventureProgress,
  adventure: Adventure | null = null,
  triggeredBefore: boolean = false
): boolean {
  // If no condition, always trigger
  if (!trigger.condition) {
    return true;
  }

  const { type, customCheck } = trigger.condition;

  switch (type) {
    case 'always':
      return true;

    case 'once':
      // Only trigger if not triggered before
      return !triggeredBefore;

    case 'if-not-completed':
      // Check if the component (e.g., quiz) has been completed AND passed
      if (trigger.type === 'quiz' && adventure) {
        // Find the quiz score
        const quizScore = progress.quizScores.find(
          (score) => score.quizId === trigger.componentId
        );

        // If no score exists, quiz hasn't been attempted - should trigger
        if (!quizScore) {
          return true;
        }

        // Find the quiz to get the passing score
        const quiz = resolveQuizData(trigger.componentId, adventure);

        // If we can't find the quiz, default to checking if score exists
        if (!quiz) {
          return !quizScore;
        }

        // Only consider the quiz completed if the score meets the passing threshold
        return quizScore.score < quiz.passingScore;
      }
      // For other types, default to always trigger
      return true;

    case 'custom':
      // Use custom check function if provided
      if (customCheck) {
        return customCheck(progress);
      }
      return true;

    default:
      return true;
  }
}

/**
 * Filters triggers that should fire from a list of triggers
 */
export function getActiveTriggers(
  triggers: SceneTrigger[],
  progress: AdventureProgress,
  adventure: Adventure | null = null,
  triggeredIds: Set<string> = new Set()
): SceneTrigger[] {
  return triggers.filter((trigger) => {
    const triggeredBefore = triggeredIds.has(trigger.componentId);
    return shouldTriggerFire(trigger, progress, adventure, triggeredBefore);
  });
}

/**
 * Component registry mapping trigger types to components
 * This would be extended as more components are added
 */
export interface TriggerComponent {
  type: 'quiz' | 'mini-game' | 'cutscene' | 'custom';
  component: ComponentType<unknown>; // React component
  resolveData: (componentId: string, adventure: Adventure) => unknown;
}

/**
 * Resolves quiz data from quiz ID
 */
export function resolveQuizData(quizId: string, adventure: Adventure): Quiz | null {
  // Check chapter end quizzes
  for (const chapter of adventure.chapters) {
    if (chapter.endQuiz && chapter.endQuiz.id === quizId) {
      return chapter.endQuiz;
    }
  }

  // Check final quiz
  if (adventure.finalQuiz && adventure.finalQuiz.id === quizId) {
    return adventure.finalQuiz;
  }

  return null;
}

/**
 * Creates a registry key for tracking triggered components
 */
export function getTriggerKey(sceneId: string, triggerType: string, componentId: string): string {
  return `${sceneId}:${triggerType}:${componentId}`;
}

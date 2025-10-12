// Core Adventure Types

export interface Adventure {
  id: string;
  title: string;
  description: string;
  estimatedTime: number; // in minutes
  coverArt: string; // path to cover image
  coverVideo?: string; // optional video URL (plays on hover)
  theme: AdventureTheme;
  musicPlaylist?: string[]; // optional music playlist URLs
  chapters: Chapter[];
  finalQuiz: Quiz;
}

export interface AdventureTheme {
  primaryColor: string;
  secondaryColor: string;
  fontFamily?: string;
  backgroundMusic?: string; // path to audio file
  ambientSound?: string; // path to ambient audio
}

export interface Chapter {
  id: string;
  title: string;
  description?: string;
  scenes: Scene[];
  endQuiz: Quiz;
  learningObjectives: string[];
}

// Scene Types

export type Scene =
  | NarrativeScene
  | DecisionScene
  | TimelineGameScene
  | MapExplorationScene
  | PrimarySourceScene
  | DialogueScene
  | CauseEffectScene
  | QuoteAttributionScene
  | AnachronismScene
  | CustomMiniGameScene;

export interface BaseScene {
  id: string;
  type: SceneType;
  learningPoints: LearningPoint[];
  backgroundImage?: string;
  backgroundMusic?: string;
  events?: SceneEvents; // Event-driven trigger system
}

export type SceneType =
  | 'narrative'
  | 'decision'
  | 'timeline-game'
  | 'map-exploration'
  | 'primary-source'
  | 'dialogue'
  | 'cause-effect'
  | 'quote-attribution'
  | 'anachronism'
  | 'custom-mini-game';

export interface LearningPoint {
  id: string;
  content: string;
  category: string; // e.g., "historical-fact", "literary-analysis", "character-development"
}

// Event-Driven Trigger System

export interface SceneEvents {
  onEnter?: SceneTrigger[];
  onExit?: SceneTrigger[];
  onChoice?: Record<string, SceneTrigger[]>; // Per-choice triggers
}

export interface SceneTrigger {
  type: 'quiz' | 'mini-game' | 'cutscene' | 'custom';
  componentId: string; // ID of quiz, mini-game, or custom component
  condition?: TriggerCondition;
  data?: Record<string, unknown>; // Optional data to pass to component
}

export interface TriggerCondition {
  type: 'always' | 'once' | 'if-not-completed' | 'custom';
  customCheck?: (progress: AdventureProgress) => boolean;
}

// Specific Scene Types

export interface NarrativeScene extends BaseScene {
  type: 'narrative';
  content: string; // markdown supported
  image?: string;
  narration?: string; // path to audio file
  continueButtonText?: string;
}

export interface DecisionScene extends BaseScene {
  type: 'decision';
  prompt: string;
  context?: string;
  choices: Choice[];
  timeLimit?: number; // seconds
}

export interface Choice {
  id: string;
  text: string;
  consequence?: string; // immediate feedback
  learningPoints?: LearningPoint[];
  nextSceneId?: string; // for branching narratives
}

export interface TimelineGameScene extends BaseScene {
  type: 'timeline-game';
  prompt: string;
  events: TimelineEvent[];
  successThreshold: number; // percentage correct needed to pass
}

export interface TimelineEvent {
  id: string;
  title: string;
  year: number;
  description: string;
  image?: string;
}

export interface MapExplorationScene extends BaseScene {
  type: 'map-exploration';
  mapImage: string;
  prompt: string;
  locations: MapLocation[];
  requiredLocations?: string[]; // IDs of locations that must be visited
}

export interface MapLocation {
  id: string;
  name: string;
  x: number; // percentage from left
  y: number; // percentage from top
  content: string;
  image?: string;
  unlockCondition?: string; // condition to unlock this location
}

export interface PrimarySourceScene extends BaseScene {
  type: 'primary-source';
  prompt: string;
  source: PrimarySource;
  questions: AnalysisQuestion[];
}

export interface PrimarySource {
  title: string;
  author?: string;
  date?: string;
  type: 'text' | 'image' | 'audio' | 'video';
  content: string; // text or path to media
  citation?: string;
}

export interface AnalysisQuestion {
  id: string;
  question: string;
  type: 'multiple-choice' | 'short-answer' | 'highlight';
  options?: string[]; // for multiple choice
  correctAnswer: string | string[];
  explanation: string;
}

export interface DialogueScene extends BaseScene {
  type: 'dialogue';
  character: Character;
  dialogueTree: DialogueNode;
}

export interface Character {
  id: string;
  name: string;
  portrait: string;
  description: string;
  voiceActor?: string; // for future audio support
}

export interface DialogueNode {
  id: string;
  speaker: string; // character ID or 'player'
  text: string;
  audio?: string;
  responses?: DialogueResponse[];
  nextNodeId?: string; // if no responses (linear dialogue)
}

export interface DialogueResponse {
  id: string;
  text: string;
  nextNodeId: string;
  requiresCondition?: string;
  learningPoints?: LearningPoint[];
}

export interface CauseEffectScene extends BaseScene {
  type: 'cause-effect';
  prompt: string;
  pairs: CauseEffectPair[];
  distractors?: string[]; // wrong answers to mix in
}

export interface CauseEffectPair {
  id: string;
  cause: string;
  effect: string;
  explanation: string;
}

export interface QuoteAttributionScene extends BaseScene {
  type: 'quote-attribution';
  prompt: string;
  quotes: Quote[];
}

export interface Quote {
  id: string;
  text: string;
  speaker: string; // character or author
  context: string;
  explanation?: string;
}

export interface AnachronismScene extends BaseScene {
  type: 'anachronism';
  prompt: string;
  scenario: string;
  items: AnachronismItem[];
  correctAnswers: string[]; // IDs of items that are anachronisms
}

export interface AnachronismItem {
  id: string;
  name: string;
  image?: string;
  description: string;
  explanation: string; // shown after answer
}

export interface CustomMiniGameScene extends BaseScene {
  type: 'custom-mini-game';
  gameType: string; // identifier for custom game component
  config: Record<string, unknown>; // flexible config for custom games
}

// Quiz System

export interface Quiz {
  id: string;
  title: string;
  description?: string;
  questions: QuizQuestion[];
  passingScore: number; // percentage
  allowRetry: boolean;
}

export interface QuizQuestion {
  id: string;
  question: string;
  type: 'multiple-choice' | 'true-false' | 'short-answer' | 'matching';
  points: number;
  options?: string[]; // for multiple choice
  correctAnswer: string | string[] | Record<string, string>; // flexible for different types
  explanation: string;
  relatedLearningPoints: string[]; // IDs of learning points
}

// Progress Tracking

export interface AdventureProgress {
  adventureId: string;
  startedAt: Date;
  lastPlayedAt: Date;
  currentChapterId: string;
  currentSceneId: string;
  completedScenes: string[];
  completedChapters: string[];
  quizScores: QuizScore[];
  learnedPoints: string[]; // IDs of learning points encountered
  choices: Record<string, string>; // sceneId -> choiceId
  statistics: PlayerStatistics;
}

export interface QuizScore {
  quizId: string;
  score: number; // percentage
  answers: QuizAnswer[];
  completedAt: Date;
}

export interface QuizAnswer {
  questionId: string;
  answer: string | string[] | Record<string, string>;
  correct: boolean;
  pointsEarned: number;
}

export interface PlayerStatistics {
  totalPlayTime: number; // seconds
  scenesCompleted: number;
  quizzesPassed: number;
  perfectQuizzes: number;
  averageQuizScore: number;
}

// Global Progress

export interface GlobalProgress {
  adventures: AdventureProgress[];
  totalPlayTime: number;
  achievements: Achievement[];
  lastSavedAt: Date;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  unlockedAt: Date;
}

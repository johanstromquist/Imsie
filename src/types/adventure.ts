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
  transitionDuration?: number; // milliseconds, default 300
  transitionType?: 'fade' | 'slide' | 'zoom'; // default 'fade'
}

export interface Chapter {
  id: string;
  title: string;
  description?: string;
  prerequisites?: ChapterPrerequisite; // Optional - defaults to sequential if not specified
  scenes: Scene[];
  endQuiz: Quiz;
  learningObjectives: string[];
}

export interface ChapterPrerequisite {
  type: 'sequential' | 'any' | 'all'; // How to check prerequisites
  chapterIds?: string[]; // Required chapter IDs (not needed for 'sequential')
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
  backgroundVideo?: string; // NEW: optional video version of background
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

// NEW: Inline Annotations for Contextual Learning
export interface InlineAnnotation {
  id: string;
  text: string; // The word or phrase to underline in the content
  tooltip: AnnotationTooltip;
}

export interface AnnotationTooltip {
  title: string; // Tooltip header
  content: string; // Explanation or context
  category: 'historical-context' | 'literary-context' | 'cultural-context' | 'vocabulary' | 'reference';
  relatedLearningPoints?: string[]; // Optional: link to existing learning points
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
  imageVideo?: string; // optional video version of the image
  narration?: string; // path to audio file
  continueButtonText?: string;
  inlineAnnotations?: InlineAnnotation[]; // NEW: Contextual learning tooltips
}

export interface DecisionScene extends BaseScene {
  type: 'decision';
  prompt: string;
  context?: string;
  image?: string; // optional scene illustration
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
  image?: string; // optional scene illustration
  timelineEvents: TimelineEvent[]; // Renamed from 'events' to avoid conflict with BaseScene.events
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
  image?: string; // optional scene illustration (separate from the interactive map)
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
  image?: string; // optional scene illustration
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
  characters?: Character[]; // Optional: additional characters for multi-character dialogues
  dialogueTree: DialogueNode;
  image?: string; // optional scene illustration
  inlineAnnotations?: InlineAnnotation[]; // NEW: Contextual learning tooltips
}

export interface Character {
  id: string;
  name: string;
  portrait: string;
  portraitVideo?: string; // NEW: optional animated/video portrait
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
  isEnd?: boolean; // marks terminal nodes
  allNodes?: DialogueNode[]; // all other nodes in the tree (for easier definition)
}

export interface DialogueResponse {
  id: string;
  text: string;
  nextNodeId?: string;
  requiresCondition?: string;
  learningPoints?: LearningPoint[];
}

export interface CauseEffectScene extends BaseScene {
  type: 'cause-effect';
  prompt: string;
  image?: string; // optional scene illustration
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
  image?: string; // optional scene illustration
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
  image?: string; // optional scene illustration
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
  type: 'multiple-choice' | 'true-false' | 'short-answer' | 'matching' | 'self-assessment';
  points: number;
  options?: string[]; // for multiple choice
  correctAnswer?: string | string[] | Record<string, string>; // flexible for different types (optional for self-assessment)
  explanation: string;
  relatedLearningPoints: string[]; // IDs of learning points
  // Self-assessment specific fields
  modelAnswer?: string; // The expert answer to compare against
  assessmentCriteria?: AssessmentCriterion[]; // Points to self-evaluate
}

export interface AssessmentCriterion {
  id: string;
  text: string; // Description of what should be in the answer
  points: number; // Points awarded if student says they covered this
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
  // Self-assessment specific fields
  selfAssessment?: Record<string, 'covered' | 'not-covered'>; // criterionId -> selection
  selfAssessmentComplete?: boolean; // Whether self-assessment has been completed
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

import { openDB } from 'idb';
import type { DBSchema, IDBPDatabase } from 'idb';
import type { GlobalProgress, AdventureProgress, QuizScore } from '../types';

interface ImsieDB extends DBSchema {
  progress: {
    key: string;
    value: GlobalProgress;
  };
  adventures: {
    key: string;
    value: AdventureProgress;
  };
}

class ProgressManager {
  private db: IDBPDatabase<ImsieDB> | null = null;
  private dbName = 'imsie-db';
  private dbVersion = 1;

  async init(): Promise<void> {
    this.db = await openDB<ImsieDB>(this.dbName, this.dbVersion, {
      upgrade(db) {
        // Create stores if they don't exist
        if (!db.objectStoreNames.contains('progress')) {
          db.createObjectStore('progress');
        }
        if (!db.objectStoreNames.contains('adventures')) {
          db.createObjectStore('adventures');
        }
      },
    });
  }

  private async ensureDB(): Promise<IDBPDatabase<ImsieDB>> {
    if (!this.db) {
      await this.init();
    }
    return this.db!;
  }

  // Global Progress Methods

  async getGlobalProgress(): Promise<GlobalProgress | null> {
    const db = await this.ensureDB();
    const progress = await db.get('progress', 'global');
    return progress || null;
  }

  async saveGlobalProgress(progress: GlobalProgress): Promise<void> {
    const db = await this.ensureDB();
    progress.lastSavedAt = new Date();
    await db.put('progress', progress, 'global');
  }

  async initializeGlobalProgress(): Promise<GlobalProgress> {
    const progress: GlobalProgress = {
      adventures: [],
      totalPlayTime: 0,
      achievements: [],
      lastSavedAt: new Date(),
    };
    await this.saveGlobalProgress(progress);
    return progress;
  }

  // Adventure Progress Methods

  async getAdventureProgress(adventureId: string): Promise<AdventureProgress | null> {
    const db = await this.ensureDB();
    const progress = await db.get('adventures', adventureId);
    return progress || null;
  }

  async saveAdventureProgress(progress: AdventureProgress): Promise<void> {
    const db = await this.ensureDB();
    progress.lastPlayedAt = new Date();
    await db.put('adventures', progress, progress.adventureId);

    // Update global progress
    const globalProgress = await this.getGlobalProgress();
    if (globalProgress) {
      const index = globalProgress.adventures.findIndex(
        (a) => a.adventureId === progress.adventureId
      );
      if (index >= 0) {
        globalProgress.adventures[index] = progress;
      } else {
        globalProgress.adventures.push(progress);
      }
      await this.saveGlobalProgress(globalProgress);
    }
  }

  async initializeAdventureProgress(adventureId: string, firstChapterId: string, firstSceneId: string): Promise<AdventureProgress> {
    const progress: AdventureProgress = {
      adventureId,
      startedAt: new Date(),
      lastPlayedAt: new Date(),
      currentChapterId: firstChapterId,
      currentSceneId: firstSceneId,
      completedScenes: [],
      completedChapters: [],
      quizScores: [],
      learnedPoints: [],
      choices: {},
      statistics: {
        totalPlayTime: 0,
        scenesCompleted: 0,
        quizzesPassed: 0,
        perfectQuizzes: 0,
        averageQuizScore: 0,
      },
    };
    await this.saveAdventureProgress(progress);
    return progress;
  }

  // Scene Progress Methods

  async markSceneComplete(adventureId: string, sceneId: string): Promise<void> {
    const progress = await this.getAdventureProgress(adventureId);
    if (progress && !progress.completedScenes.includes(sceneId)) {
      progress.completedScenes.push(sceneId);
      progress.statistics.scenesCompleted += 1;
      await this.saveAdventureProgress(progress);
    }
  }

  async updateCurrentScene(adventureId: string, chapterId: string, sceneId: string): Promise<void> {
    const progress = await this.getAdventureProgress(adventureId);
    if (progress) {
      progress.currentChapterId = chapterId;
      progress.currentSceneId = sceneId;
      await this.saveAdventureProgress(progress);
    }
  }

  // Chapter Progress Methods

  async markChapterComplete(adventureId: string, chapterId: string): Promise<void> {
    const progress = await this.getAdventureProgress(adventureId);
    if (progress && !progress.completedChapters.includes(chapterId)) {
      progress.completedChapters.push(chapterId);
      await this.saveAdventureProgress(progress);
    }
  }

  // Quiz Methods

  async saveQuizScore(adventureId: string, quizScore: QuizScore): Promise<void> {
    const progress = await this.getAdventureProgress(adventureId);
    if (progress) {
      progress.quizScores.push(quizScore);

      // Update statistics
      if (quizScore.score >= 70) { // Assuming 70% is passing
        progress.statistics.quizzesPassed += 1;
      }
      if (quizScore.score === 100) {
        progress.statistics.perfectQuizzes += 1;
      }

      // Recalculate average
      const totalScore = progress.quizScores.reduce((sum, qs) => sum + qs.score, 0);
      progress.statistics.averageQuizScore = totalScore / progress.quizScores.length;

      await this.saveAdventureProgress(progress);
    }
  }

  // Learning Points Methods

  async addLearningPoints(adventureId: string, learningPointIds: string[]): Promise<void> {
    const progress = await this.getAdventureProgress(adventureId);
    if (progress) {
      learningPointIds.forEach((id) => {
        if (!progress.learnedPoints.includes(id)) {
          progress.learnedPoints.push(id);
        }
      });
      await this.saveAdventureProgress(progress);
    }
  }

  // Choice Recording

  async recordChoice(adventureId: string, sceneId: string, choiceId: string): Promise<void> {
    const progress = await this.getAdventureProgress(adventureId);
    if (progress) {
      progress.choices[sceneId] = choiceId;
      await this.saveAdventureProgress(progress);
    }
  }

  // Time Tracking

  async addPlayTime(adventureId: string, seconds: number): Promise<void> {
    const progress = await this.getAdventureProgress(adventureId);
    if (progress) {
      progress.statistics.totalPlayTime += seconds;
      await this.saveAdventureProgress(progress);
    }

    const globalProgress = await this.getGlobalProgress();
    if (globalProgress) {
      globalProgress.totalPlayTime += seconds;
      await this.saveGlobalProgress(globalProgress);
    }
  }

  // Export/Import Methods

  async exportProgress(): Promise<string> {
    const globalProgress = await this.getGlobalProgress();
    if (!globalProgress) {
      throw new Error('No progress to export');
    }

    const exportData = {
      version: this.dbVersion,
      exportedAt: new Date().toISOString(),
      globalProgress,
    };

    return JSON.stringify(exportData, null, 2);
  }

  async downloadProgress(): Promise<void> {
    const jsonData = await this.exportProgress();
    const blob = new Blob([jsonData], { type: 'application/json' });
    const url = URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = url;
    link.download = `imsie-progress-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }

  async importProgress(jsonData: string): Promise<void> {
    try {
      const importData = JSON.parse(jsonData);

      if (!importData.globalProgress) {
        throw new Error('Invalid progress file format');
      }

      const globalProgress: GlobalProgress = {
        ...importData.globalProgress,
        lastSavedAt: new Date(importData.globalProgress.lastSavedAt),
      };

      // Convert date strings back to Date objects
      globalProgress.adventures = globalProgress.adventures.map((adv) => ({
        ...adv,
        startedAt: new Date(adv.startedAt),
        lastPlayedAt: new Date(adv.lastPlayedAt),
        quizScores: adv.quizScores.map((qs) => ({
          ...qs,
          completedAt: new Date(qs.completedAt),
        })),
      }));

      globalProgress.achievements = globalProgress.achievements.map((ach) => ({
        ...ach,
        unlockedAt: new Date(ach.unlockedAt),
      }));

      // Save to database
      await this.saveGlobalProgress(globalProgress);

      // Save individual adventure progress
      for (const advProgress of globalProgress.adventures) {
        const db = await this.ensureDB();
        await db.put('adventures', advProgress, advProgress.adventureId);
      }
    } catch (error) {
      throw new Error(`Failed to import progress: ${error}`);
    }
  }

  async uploadProgress(file: File): Promise<void> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onload = async (e) => {
        try {
          const jsonData = e.target?.result as string;
          await this.importProgress(jsonData);
          resolve();
        } catch (error) {
          reject(error);
        }
      };

      reader.onerror = () => reject(new Error('Failed to read file'));
      reader.readAsText(file);
    });
  }

  // Clear all progress (for testing or reset)

  async clearAllProgress(): Promise<void> {
    const db = await this.ensureDB();
    await db.clear('progress');
    await db.clear('adventures');
  }

  // Clear progress for a specific adventure
  async clearAdventureProgress(adventureId: string): Promise<void> {
    const db = await this.ensureDB();

    // Delete from adventures store
    await db.delete('adventures', adventureId);

    // Remove from global progress
    const globalProgress = await this.getGlobalProgress();
    if (globalProgress) {
      globalProgress.adventures = globalProgress.adventures.filter(
        (a) => a.adventureId !== adventureId
      );
      await this.saveGlobalProgress(globalProgress);
    }
  }
}

// Export singleton instance
export const progressManager = new ProgressManager();

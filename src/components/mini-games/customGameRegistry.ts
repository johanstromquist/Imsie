import type { ComponentType } from 'react';
import type { AdventureTheme } from '../../types/adventure';

export interface CustomGameProps {
  config: Record<string, unknown>;
  theme: AdventureTheme;
  onComplete: (result?: unknown) => void;
  onBack: () => void;
  canGoBack: boolean;
}

type CustomGameComponent = ComponentType<CustomGameProps>;

class CustomGameRegistry {
  private games: Map<string, CustomGameComponent> = new Map();

  register(gameType: string, component: CustomGameComponent): void {
    if (this.games.has(gameType)) {
      console.warn(`Custom game type "${gameType}" is already registered. Overwriting...`);
    }
    this.games.set(gameType, component);
  }

  get(gameType: string): CustomGameComponent | undefined {
    return this.games.get(gameType);
  }

  has(gameType: string): boolean {
    return this.games.has(gameType);
  }

  unregister(gameType: string): boolean {
    return this.games.delete(gameType);
  }

  getAllGameTypes(): string[] {
    return Array.from(this.games.keys());
  }
}

export const customGameRegistry = new CustomGameRegistry();

type AssetType = 'image' | 'audio';

interface Asset {
  url: string;
  type: AssetType;
  data: HTMLImageElement | HTMLAudioElement | null;
  loaded: boolean;
  error: Error | null;
}

interface LoadProgress {
  total: number;
  loaded: number;
  percentage: number;
}

class AssetLoader {
  private assets: Map<string, Asset> = new Map();
  private loadingPromises: Map<string, Promise<void>> = new Map();

  /**
   * Preload a single asset
   */
  private async loadAsset(url: string, type: AssetType): Promise<void> {
    // Return existing promise if already loading
    if (this.loadingPromises.has(url)) {
      return this.loadingPromises.get(url)!;
    }

    // Return immediately if already loaded
    const existingAsset = this.assets.get(url);
    if (existingAsset?.loaded) {
      return Promise.resolve();
    }

    const loadPromise = new Promise<void>((resolve, reject) => {
      const asset: Asset = {
        url,
        type,
        data: null,
        loaded: false,
        error: null,
      };

      if (type === 'image') {
        const img = new Image();

        img.onload = () => {
          asset.data = img;
          asset.loaded = true;
          this.assets.set(url, asset);
          this.loadingPromises.delete(url);
          resolve();
        };

        img.onerror = () => {
          const error = new Error(`Failed to load image: ${url}`);
          asset.error = error;
          this.assets.set(url, asset);
          this.loadingPromises.delete(url);
          reject(error);
        };

        img.src = url;
      } else if (type === 'audio') {
        const audio = new Audio();

        audio.addEventListener('canplaythrough', () => {
          asset.data = audio;
          asset.loaded = true;
          this.assets.set(url, asset);
          this.loadingPromises.delete(url);
          resolve();
        }, { once: true });

        audio.addEventListener('error', () => {
          const error = new Error(`Failed to load audio: ${url}`);
          asset.error = error;
          this.assets.set(url, asset);
          this.loadingPromises.delete(url);
          reject(error);
        }, { once: true });

        audio.preload = 'auto';
        audio.src = url;
        audio.load();
      }
    });

    this.loadingPromises.set(url, loadPromise);
    return loadPromise;
  }

  /**
   * Preload multiple assets with progress tracking
   */
  async preloadAssets(
    assets: Array<{ url: string; type: AssetType }>,
    onProgress?: (progress: LoadProgress) => void
  ): Promise<void> {
    const total = assets.length;
    let loaded = 0;

    const updateProgress = () => {
      loaded++;
      if (onProgress) {
        onProgress({
          total,
          loaded,
          percentage: Math.round((loaded / total) * 100),
        });
      }
    };

    const promises = assets.map(async ({ url, type }) => {
      try {
        await this.loadAsset(url, type);
        updateProgress();
      } catch (error) {
        console.warn(`Failed to preload asset: ${url}`, error);
        updateProgress(); // Still count as processed even if failed
      }
    });

    await Promise.all(promises);
  }

  /**
   * Get a loaded asset
   */
  getAsset(url: string): HTMLImageElement | HTMLAudioElement | null {
    const asset = this.assets.get(url);
    if (!asset || !asset.loaded) {
      console.warn(`Asset not loaded: ${url}`);
      return null;
    }
    return asset.data;
  }

  /**
   * Get a loaded image
   */
  getImage(url: string): HTMLImageElement | null {
    const asset = this.getAsset(url);
    return asset instanceof HTMLImageElement ? asset : null;
  }

  /**
   * Get a loaded audio element
   */
  getAudio(url: string): HTMLAudioElement | null {
    const asset = this.getAsset(url);
    return asset instanceof HTMLAudioElement ? asset : null;
  }

  /**
   * Clone an audio element for playback (allows multiple instances)
   */
  cloneAudio(url: string): HTMLAudioElement | null {
    const original = this.getAudio(url);
    if (!original) return null;

    const clone = new Audio();
    clone.src = original.src;
    return clone;
  }

  /**
   * Check if an asset is loaded
   */
  isLoaded(url: string): boolean {
    return this.assets.get(url)?.loaded || false;
  }

  /**
   * Check if all assets are loaded
   */
  areAllLoaded(urls: string[]): boolean {
    return urls.every((url) => this.isLoaded(url));
  }

  /**
   * Get loading statistics
   */
  getStats(): { total: number; loaded: number; failed: number } {
    let total = 0;
    let loaded = 0;
    let failed = 0;

    this.assets.forEach((asset) => {
      total++;
      if (asset.loaded) loaded++;
      if (asset.error) failed++;
    });

    return { total, loaded, failed };
  }

  /**
   * Clear specific assets from cache
   */
  clearAssets(urls: string[]): void {
    urls.forEach((url) => {
      this.assets.delete(url);
      this.loadingPromises.delete(url);
    });
  }

  /**
   * Clear all cached assets
   */
  clearAll(): void {
    this.assets.clear();
    this.loadingPromises.clear();
  }

  /**
   * Get cache size estimate (approximate)
   */
  getCacheSizeEstimate(): number {
    let size = 0;
    this.assets.forEach((asset) => {
      if (asset.data instanceof HTMLImageElement) {
        // Rough estimate: width * height * 4 bytes per pixel
        size += asset.data.width * asset.data.height * 4;
      } else if (asset.data instanceof HTMLAudioElement) {
        // Rough estimate: 1MB per minute of audio (compressed)
        size += 1024 * 1024; // Placeholder
      }
    });
    return size;
  }
}

// Export singleton instance
export const assetLoader = new AssetLoader();

// Export types
export type { AssetType, LoadProgress };

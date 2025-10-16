# Custom Mini-Game Registry

This directory contains custom mini-game implementations that can be dynamically registered and used within the Imsie adventure platform.

## How the Registry System Works

The custom mini-game system uses a registry pattern to allow for extensible game types beyond the built-in scene types. This enables adventure creators to implement unique interactive experiences without modifying the core scene types.

### Architecture

1. **Registry** (`customGameRegistry.ts`): A singleton registry that maps game type strings to React components
2. **Scene Component** (`CustomMiniGameScene.tsx`): A scene wrapper that looks up and renders registered games
3. **Custom Games** (this directory): Individual game implementations that register themselves

### Registry API

```typescript
import { customGameRegistry } from '../customGameRegistry';

// Register a game
customGameRegistry.register('game-type-id', GameComponent);

// Check if a game exists
customGameRegistry.has('game-type-id'); // returns boolean

// Get a game component
customGameRegistry.get('game-type-id'); // returns component or undefined

// Unregister a game
customGameRegistry.unregister('game-type-id');

// List all registered games
customGameRegistry.getAllGameTypes(); // returns string[]
```

## Creating a Custom Game

### Step 1: Create the Component

Create a new TypeScript file in this directory (e.g., `MyCustomGame.tsx`):

```typescript
import { useState } from 'react';
import { customGameRegistry, CustomGameProps } from '../customGameRegistry';
import { assetLoader } from '../../../services/assetLoader';

// Define your config interface
interface MyGameConfig {
  // Your game-specific config properties
  difficulty: 'easy' | 'medium' | 'hard';
  items: string[];
  timeLimit?: number;
}

const MyCustomGame: React.FC<CustomGameProps> = ({
  config,
  theme,
  onComplete,
  onBack,
  canGoBack,
}) => {
  // Cast config to your type
  const gameConfig = config as MyGameConfig;

  // Implement your game logic
  const [gameState, setGameState] = useState(/* ... */);

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: theme.primaryColor,
        padding: '2rem',
        position: 'relative',
      }}
    >
      <div
        style={{
          maxWidth: '900px',
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          padding: '2rem',
          borderRadius: '1rem',
          color: 'white',
          backdropFilter: 'blur(10px)',
          position: 'relative',
          zIndex: 1,
        }}
      >
        {/* Your game UI */}

        {/* Include navigation buttons */}
        {canGoBack && (
          <button
            onClick={onBack}
            style={{
              position: 'absolute',
              left: '-22.5px',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '45px',
              height: '45px',
              borderRadius: '50%',
              backgroundColor: theme.secondaryColor,
              color: 'white',
              border: 'none',
              cursor: 'pointer',
              fontSize: '1.25rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              opacity: 0.2,
              transition: 'opacity 0.3s, transform 0.2s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.opacity = '1';
              e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.opacity = '0.2';
              e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
            }}
            aria-label="Go back"
          >
            ←
          </button>
        )}
      </div>
    </div>
  );
};

// Register the game
customGameRegistry.register('my-custom-game', MyCustomGame);

export default MyCustomGame;
```

### Step 2: Import in Your Adventure

Import your custom game file somewhere in your adventure setup (e.g., in the adventure definition file):

```typescript
// Import to trigger registration
import './components/mini-games/custom/MyCustomGame';
```

### Step 3: Use in Adventure Definition

Add a scene with type `custom-mini-game` to your adventure:

```typescript
{
  id: 'custom-game-1',
  type: 'custom-mini-game',
  gameType: 'my-custom-game',
  config: {
    difficulty: 'medium',
    items: ['item1', 'item2', 'item3'],
    timeLimit: 120,
  },
  learningPoints: [
    {
      id: 'lp1',
      content: 'Learning point about the game',
      category: 'game-mechanics',
    },
  ],
  backgroundImage: 'background.jpg',
}
```

## Styling Guidelines

To maintain consistency with other scenes, follow these styling patterns:

### Container Structure
- Full viewport height: `minHeight: '100vh'`
- Flexbox centering: `display: 'flex', alignItems: 'center', justifyContent: 'center'`
- Background color: `backgroundColor: theme.primaryColor`
- Padding: `padding: '2rem'`

### Content Box
- Dark overlay: `backgroundColor: 'rgba(0, 0, 0, 0.7)'`
- Backdrop blur: `backdropFilter: 'blur(10px)'`
- Rounded corners: `borderRadius: '1rem'`
- White text: `color: 'white'`
- Max width: `maxWidth: '800px'` to `'1200px'` (depending on content)

### Navigation Buttons
- Circular buttons: `borderRadius: '50%'`, `width: '45px'`, `height: '45px'`
- Positioned outside content box: `position: 'absolute'`, `left: '-22.5px'` or `right: '-22.5px'`
- Low initial opacity: `opacity: 0.2`
- Hover effects: Scale and opacity change
- Use theme colors: `backgroundColor: theme.secondaryColor`

### Interactive Elements
- Smooth transitions: `transition: 'all 0.3s'`
- Hover effects: Scale, color, or opacity changes
- Clear visual feedback for clickable items
- Use theme colors for consistency

### Color Usage
- Primary theme color: Backgrounds
- Secondary theme color: Accents, borders, buttons
- Success: `#4ade80` (green)
- Error: `#ef4444` (red)
- Warning: `#fb923c` (orange)
- Neutral: `#ccc`, `#aaa`, `rgba(255, 255, 255, 0.1)`

## Example: Memory Match Game

See `MemoryMatchGame.tsx` for a complete working example that demonstrates:

- Config type casting
- Game state management
- Card flipping mechanics
- Win condition detection
- Score tracking
- Reset functionality
- Proper styling and navigation
- Asset loading with `assetLoader`

## Best Practices

1. **Type Safety**: Always define an interface for your config and cast it from `Record<string, unknown>`
2. **Error Handling**: Validate config data and handle missing or invalid properties gracefully
3. **Asset Loading**: Use `assetLoader.getImage()` for all images to ensure proper caching
4. **Completion**: Call `onComplete()` when the game is finished or when the user should proceed
5. **Navigation**: Always include back button (if `canGoBack` is true) and handle `onBack`
6. **Accessibility**: Include ARIA labels and keyboard navigation where appropriate
7. **Performance**: Use React hooks properly, clean up timers and event listeners
8. **Theme Integration**: Use theme colors throughout for visual consistency

## Config Best Practices

When designing your game config:

- Use descriptive property names
- Provide sensible defaults for optional properties
- Document expected data structures
- Consider validation logic for required fields
- Keep config serializable (no functions or class instances)

## Testing Your Custom Game

1. Register your game in the registry
2. Create a test scene in an adventure definition
3. Navigate to the scene in the adventure player
4. Verify all interactions work correctly
5. Test back navigation
6. Test completion flow
7. Test with different theme colors
8. Test on mobile viewport sizes

## Registry Loading

The registry is a singleton that persists for the lifetime of the application. Games registered during app initialization will be available for all adventures.

For dynamic loading or adventure-specific games, import the game component in the adventure definition file to ensure it's registered before the adventure starts.

## Troubleshooting

### "Custom game type not found" Error

This means the game hasn't been registered yet. Make sure:
1. You're importing the game component file
2. The `customGameRegistry.register()` call is executing
3. The gameType string in your scene matches the registration string

### Type Errors with Config

The config is typed as `Record<string, unknown>` for flexibility. Always cast it to your specific interface:
```typescript
const typedConfig = config as MyGameConfig;
```

### Styling Inconsistencies

Refer to this README's styling guidelines and the example games to ensure your styling matches the platform's design system.

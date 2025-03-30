# expo-ios-blur-filter

A React Native component that applies a gaussian blur filter to its children on iOS. 

⚠️ Important: This library utilizes the private CAFilter API from iOS. Using private APIs may lead to App Store rejection.

# Why?

React Native's `filter: blur(10px)` style is not supported on iOS. This library provides a workaround using iOS's `CAFilter`. Since it is a private API, it will be tricky for RN to integrate in the core.

## Installation

```bash
npx expo install expo-ios-blur-filter
```

## Usage

```tsx
import { BlurFilter } from 'expo-ios-blur-filter';

// Basic usage with an image
<BlurFilter amount={5}>
  <Image
    source={{
      uri: "https://example.com/image.jpg"
    }}
    style={{ width: 200, height: 200 }}
  />
</BlurFilter>

// Usage with any view
<BlurFilter amount={8}>
  <View style={{ width: 120, height: 120, backgroundColor: "purple" }} />
</BlurFilter>
```

## Props

| Prop | Type | Description |
|------|------|-------------|
| `amount` | `number` | The blur radius in points. Higher values create a stronger blur effect. |
| `style` | `ViewStyle` | Standard React Native view style props. |

## License

MIT
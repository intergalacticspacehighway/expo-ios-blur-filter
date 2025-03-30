import type { StyleProp, ViewStyle, ViewProps } from 'react-native';

export interface ExpoIosBlurFilterViewProps extends ViewProps {
  style?: StyleProp<ViewStyle>;
  amount?: number;
}

export interface ExpoIosBlurFilterModule {
  // Add any module methods here if needed in the future
}

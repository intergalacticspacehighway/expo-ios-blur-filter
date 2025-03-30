import { requireNativeView } from 'expo';
import * as React from 'react';

import { ExpoIosBlurFilterViewProps } from './ExpoIosBlurFilter.types';

const NativeView: React.ComponentType<ExpoIosBlurFilterViewProps> =
  requireNativeView('ExpoIosBlurFilter');

export default function ExpoIosBlurFilterView(props: ExpoIosBlurFilterViewProps) {
  return <NativeView {...props} />;
}

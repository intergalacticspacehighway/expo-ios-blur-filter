import { NativeModule, requireNativeModule } from 'expo';

import { ExpoIosBlurFilterModuleEvents } from './ExpoIosBlurFilter.types';

declare class ExpoIosBlurFilterModule extends NativeModule<ExpoIosBlurFilterModuleEvents> {
  PI: number;
  hello(): string;
  setValueAsync(value: string): Promise<void>;
}

// This call loads the native module object from the JSI.
export default requireNativeModule<ExpoIosBlurFilterModule>('ExpoIosBlurFilter');

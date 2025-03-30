import { registerWebModule, NativeModule } from 'expo';

import { ExpoIosBlurFilterModuleEvents } from './ExpoIosBlurFilter.types';

class ExpoIosBlurFilterModule extends NativeModule<ExpoIosBlurFilterModuleEvents> {
  PI = Math.PI;
  async setValueAsync(value: string): Promise<void> {
    this.emit('onChange', { value });
  }
  hello() {
    return 'Hello world! 👋';
  }
}

export default registerWebModule(ExpoIosBlurFilterModule);

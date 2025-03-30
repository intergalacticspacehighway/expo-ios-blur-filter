import * as React from 'react';

import { ExpoIosBlurFilterViewProps } from './ExpoIosBlurFilter.types';

export default function ExpoIosBlurFilterView(props: ExpoIosBlurFilterViewProps) {
  return (
    <div>
      <iframe
        style={{ flex: 1 }}
        src={props.url}
        onLoad={() => props.onLoad({ nativeEvent: { url: props.url } })}
      />
    </div>
  );
}

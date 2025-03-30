import { requireNativeViewManager } from "expo-modules-core";
import * as React from "react";

import { ExpoIosBlurFilterViewProps } from "./ExpoBlurFilterView.types";

export function BlurFilter(props: ExpoIosBlurFilterViewProps) {
  const { amount = 0, children, ...rest } = props;

  return (
    <NativeExpoIosBlurFilterView amount={amount} {...rest}>
      {children}
    </NativeExpoIosBlurFilterView>
  );
}

const NativeExpoIosBlurFilterView =
  requireNativeViewManager<ExpoIosBlurFilterViewProps>("ExpoIosBlurFilter");

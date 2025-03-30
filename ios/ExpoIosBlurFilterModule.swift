import ExpoModulesCore

public class ExpoIosBlurFilterModule: Module {
  public func definition() -> ModuleDefinition {
    Name("ExpoIosBlurFilter")


    View(ExpoIosBlurFilterView.self) {
      Prop("amount") { (view: ExpoIosBlurFilterView, amount: Double) in
        view.setBlurAmount(CGFloat(amount))
      }
    }
  }
}

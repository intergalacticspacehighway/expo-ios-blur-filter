import ExpoModulesCore

class ExpoIosBlurFilterView: ExpoView {
  var prevClipsToBound = false
  private var blurAmount: CGFloat = 0 {
    didSet {
      updateBlur()
    }
  }
  

  override func didAddSubview(_ subview: UIView) {
    super.didAddSubview(subview)
    prevClipsToBound = subview.clipsToBounds
    updateBlur()
  }
  
  override func willRemoveSubview(_ subview: UIView) {
    // Reset everything or it can lead to bugs with RN's view recycling
    subview.layer.filters = nil
    subview.clipsToBounds = prevClipsToBound
    prevClipsToBound = false;
    
    super.willRemoveSubview(subview)
  }

  private func getBlurFilter(_ amount: CGFloat) -> Any? {
    let clsName = "CAFilter"
    if let clz = NSClassFromString(clsName) as? NSObject.Type {
      if let filter = clz.perform(NSSelectorFromString("filterWithName:"), with: "gaussianBlur")?.toOpaque() {
        let filterObj = unsafeBitCast(filter, to: NSObject.self)
        filterObj.setValue(NSNumber(value: Float(amount)), forKey: "inputRadius")
        return filterObj
      }
    }
    return nil
  }
  
  private func updateBlur() {
    guard let childView = self.subviews.first,
          let blurFilter = getBlurFilter(blurAmount) else { return }
    // RN's Image component sets clipsToBounds true for image container view. We need it false to allow image's blur to extend beyond it's container, similar to web.
    childView.clipsToBounds = false
    childView.layer.filters = [blurFilter]
  }
  
  func setBlurAmount(_ amount: CGFloat) {
    blurAmount = amount
  }
}

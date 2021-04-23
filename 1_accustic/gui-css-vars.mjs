const isCssVar = val => val.trimStart().startsWith("--")
const strTrim = str => str.trim()
const isColor = val => /^#[a-f0-9]{3,6}$/i.test(val)

const splitCssVar = val => {
  const [name, value] = val.split(":").map(strTrim)

  if (value.startsWith("calc") || value.startsWith("var")) return

  const num = Number.parseFloat(value)
  if (Number.isNaN(num)) {
    return [name, value]
  }
  const unit = value.slice(String(num).length)
  return [name, num, unit]
}

let css = {}

export default function (gui) {
  const folder = gui.addFolder("CSS Variables")
  // folder.open()

  for (const { cssRules } of document.styleSheets) {
    // prettier-ignore
    for (const { selectorText, cssText: selectorCssText, style } of cssRules) {
      if (selectorCssText.startsWith("@keyframes")) continue
      const { cssText } = style

      let ruleFolder
      let el = document.querySelector(selectorText)

      cssText
        .split(";")
        .filter(isCssVar)
        .map(splitCssVar)
        .filter(Boolean)
        .forEach(([name, value, unit]) => {

          if (ruleFolder === undefined) {
            ruleFolder = folder.addFolder(selectorText)
            ruleFolder.open()
          }

          css[name] = value
          let ctrl

          //console.log(name)

          if (isColor(value)) {
            ctrl = ruleFolder.addColor(css, name)
          } else {
            ctrl = ruleFolder.add(css, name)
            if (unit) ctrl.step(1)
          }

          //ctrl.listen()
          ctrl.unit = unit

          ctrl.onChange(function(newVal) {
            el.style.setProperty(name, `${newVal}${this.unit || ""}`)
          })

        })

    }
  }
}

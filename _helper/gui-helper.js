const root = document.documentElement
// const gui = new dat.GUI()
// const folder = gui.addFolder("CSS Properties")

// const cssUnits = new Map()



let css = {}

css = new Proxy(css, {
  set: (obj, prop, value) => {
    // console.log({obj, prop, value})
    console.log(typeof css[prop])
    root.style.setProperty(prop, `${value}${cssUnits.get(prop)}`)
    return true
  },
})

// function* cssVars(el) {
//   const elComputed = getComputedStyle(el)
//   const elDescriptors = Object.getOwnPropertyDescriptors(elComputed)
//   console.log(elDescriptors)

//   const rootProps = Object.values(elDescriptors)
//     .filter(({ value }) => value.startsWith("--"))
//     .map(({ value }) => value)

//   // console.log(Object.getOwnPropertyDescriptors(rootComputed))

//   for (const prop of rootProps) {
//     const raw = rootComputed.getPropertyValue(prop).trim()
//     const val = parseFloat(raw)
//     if (isNaN(val)) continue
//     const unit = raw.slice(String(val).length)
//     yield [prop, val, unit]
//   }
// }

// const importCSS = () => {
//   // const container = document.querySelector(".container")
//   const container = document.documentElement
//   // console.log(getComputedStyle(container))
//   console.log("START", cssVars(container).next())

//   // for (const [prop, val, unit] of cssVars(document.documentElement)) {
//   //   console.log({ prop, val, unit })
//   // }
// }

// export {importCSS}

// document.addEventListener("DOMContentLoaded", () => {

  // importCSS()
  // setTimeout(importCSS, 1000)

  // const el = document.documentElement

  const el = document.querySelector(".container")
  const elComputed = getComputedStyle(el)
  const elDescriptors = Object.getOwnPropertyDescriptors(elComputed)

  console.log(elDescriptors)

  const rootProps = Object.values(elDescriptors)
    .filter(({ value }) => value.startsWith("--"))
    .map(({ value }) => value)

  // console.log(prop, rootComputed.getPropertyValue(prop))
  rootProps.forEach(prop => {
    for (const prop of rootProps) {
      const raw = rootComputed.getPropertyValue(prop).trim()
      const val = parseFloat(raw)

      // console.log([val, isNaN(val)])
      if (isNaN(val)) continue


      // cssUnits.set(prop, raw.slice(String(val).length))
      cssUnits.set(prop, raw.slice(String(val).length))

      // console.log(cssUnits)
      // console.log("QQQ", raw.slice(String(val).length))
      // console.log({raw, val})
      css[prop] = val
      // console.log(css)
      // folder.add(css, prop)
    }
  })

// })

// console.log(cssUnits)


// css = new Proxy(css, {
//     set: (obj, prop, value) => {
//       // console.log({obj, prop, value})
//       // console.log(obj[prop])
//       // if (obj[prop] === undefined) {
//       //   console.log("AAA", prop)
//       //   obj[prop] = value
//       //   folder.add(css, prop).listen()
//       // } else {
//       //   console.log("BBB", prop)
//       //   root.style.setProperty(prop, value)
//       //   // root.style.setProperty(prop, `${value}${prop.split("-").pop()}`)
//       // }
//       // } else {
//       //   // obj[prop] = value
//       //   root.style.setProperty(prop, `${value}${prop.split("-").pop()}`)
//       // }

//       return true
//     },
//   }
// )


// folder.open()

// function* addCSSProperties(css, gui) {
//   const folder = gui.addFolder("CSS Properties")

//   for (const key of Object.keys(css)) {
//     css[key] = css[key] // immediately call set
//     yield folder.add(css, key).listen()
//   }
//   folder.open()
// }

// let css = {
//   "--border-width-px": 28,
//   "--edge-vw": 5,
//   "--rotate-x-deg": 0,
//   "--rotate-y-deg": 0,
//   "--rotate-z-deg": 0,
// }

// css = new Proxy(css, {
//   set: (obj, prop, value) => {
//     obj[prop] = value
//     root.style.setProperty(prop, `${value}${prop.split("-").pop()}`)
//     return true
//   },
// })

// const gui = new dat.GUI()

// for (const ctrl of addCSSProperties(css, gui)) {
//   switch (true) {
//     case ctrl.property.endsWith("-ms"):
//       ctrl.min(0).max(10000).step(10)
//       break
//     case ctrl.property.endsWith("-deg"):
//       ctrl.min(-180).max(180).step(1)
//       break
//     default:
//       ctrl.min(0).max(100).step(1)
//   }
// }

// const forms = {
//   hexagram: {
//     "--border-width-px": 50,
//     "--edge-vw": 0,
//     "--rotate-x-deg": 35,
//     "--rotate-y-deg": 45,
//     "--rotate-z-deg": 0,
//   },
// }

// const loader = { Load: "" }

// gui
//   .add(loader, "Load", Object.keys(forms))
//   .listen()
//   .onChange(key => {
//     Object.entries(forms[key]).forEach(([key, value]) => (css[key] = value))
//     loader.Load = ""
//   })

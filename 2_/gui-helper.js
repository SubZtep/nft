const root = document.documentElement

function* addCSSProperties(css, gui) {
  const folder = gui.addFolder("CSS Properties")

  for (const key of Object.keys(css)) {
    css[key] = css[key] // immediately call set
    yield folder.add(css, key).listen()
  }
  folder.open()
}

let css = {
  "--border-width-px": 28,
  "--edge-vw": 5,
  "--rotate-x-deg": 0,
  "--rotate-y-deg": 0,
  "--rotate-z-deg": 0,
}

css = new Proxy(css, {
  set: (obj, prop, value) => {
    obj[prop] = value
    root.style.setProperty(prop, `${value}${prop.split("-").pop()}`)
    return true
  },
})


const gui = new dat.GUI()

for (const ctrl of addCSSProperties(css, gui)) {
  switch (true) {
    case ctrl.property.endsWith("-ms"):
      ctrl.min(0).max(10000).step(10)
      break
    case ctrl.property.endsWith("-deg"):
      ctrl.min(-180).max(180).step(1)
      break
    default:
      ctrl.min(0).max(100).step(1)
  }
}

const forms = {
  "hexagram": {
    "--border-width-px": 50,
    "--edge-vw": 0,
    "--rotate-x-deg": 35,
    "--rotate-y-deg": 45,
    "--rotate-z-deg": 0,
  }
}

const loader = { Load: "" }

gui.add(loader, "Load", Object.keys(forms)).listen().onChange(key => {
  Object.entries(forms[key]).forEach(([key, value]) => (css[key] = value))
  loader.Load = ""
})

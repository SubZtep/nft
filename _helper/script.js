// import "./style.css" // dev only
// import { importCSS } from "./gui-helper.js"

// document.addEventListener("DOMContentLoaded", () => {

// console.log("START")
//   importCSS()
// })

/**
 * NOTE:
 * Please read the README.md file provided in this template.
 */

// If you want to create OBJKT's with different seeds, you can access the creator and viewer wallet ids. This values will only be injected once the piece has been minted
// they will not work locally.
// if the user is not sync, the viewer comes in as false
// const creator = new URLSearchParams(window.location.search).get("creator")
// const viewer = new URLSearchParams(window.location.search).get("viewer")

// console.log("OBJKT created by", creator)
// console.log("OBJKT viewed by", viewer)

// Dont forget to add your own resize handler. hicetnunc expects to get content in the whole width and heght
// const resize = () => {
//     console.log('resize')
// }
// window.addEventListener('resize', resize);

/**
** saves
**/

// console.log(getComputedStyle(document.documentElement).getPropertyValue('--edge') )
// console.log(getComputedStyle(document.documentElement))
// console.log(Object.getOwnPropertyDescriptors(getComputedStyle(document.documentElement)))

// Object.getOwnPropertyDescriptors(getComputedStyle(document.documentElement)).forEach(({value}) => {
  //   console.log(value)
  // })
// console.log(
//   // Array.from(Object.getOwnPropertyDescriptors(getComputedStyle(document.documentElement))).filter(({value}) => value.startsWith("--"))
//   // Array.from(Object.getOwnPropertyDescriptors(getComputedStyle(document.documentElement)))
//   // Object.values(Object.getOwnPropertyDescriptors(getComputedStyle(document.documentElement))).forEach(x => console.log(x))
//   Object.values(Object.getOwnPropertyDescriptors(getComputedStyle(document.documentElement))).filter(({value}) => value.startsWith("--"))
// )

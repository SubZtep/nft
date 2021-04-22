/**
 * NOTE:
 * Please read the README.md file provided in this template.
 */

// If you want to create OBJKT's with different seeds, you can access the creator and viewer wallet ids. This values will only be injected once the piece has been minted
// they will not work locally.
// if the user is not sync, the viewer comes in as false
const creator = new URLSearchParams(window.location.search).get('creator')
const viewer = new URLSearchParams(window.location.search).get('viewer')

console.log('OBJKT created by', creator)
console.log('OBJKT viewed by', viewer)

// Dont forget to add your own resize handler. hicetnunc expects to get content in the whole width and heght
// const resize = () => {
//     console.log('resize')
// }
// window.addEventListener('resize', resize);

////////

const num = 280.;

function main() {
  const colRate = .005;

  const span = 3.;
  const r = span / 2.;
  let color;
  let uv = 0 //surfacePosition;
  uv *= 360.;
  let zt = -9e9;
  let zb = 9e9;

  for (let y = -num; y <= num; y += span) {
    let x = (Math.floor(uv.x / span) + .5) * span + y / 2.;
    if (Math.abs(x) > num) continue;

    let t = radians(length(vec2(x, y)));
    t *= sin(time * .2) * 3.;
//		t -= time;
    float z = (cos(t) * 100. - cos(t * 3.) * 30.) + y / 2.;
    vec2 p = vec2(x - y / 2., z);
    float d = distance(uv, p) / r - 1.;
    float cd = length(vec2(x, y)) * colRate;
    float o = time * -1.5;
    if (d <= 0.) {
      if (z < zb || zt < z) { // occlusion
        color = vec3(1.0+sin(cd+o), 1.0+sin(cd+2.0+o), 1.0+sin(cd-2.0+o)) * -d;
      }
      break;
    }
    zt = max(zt, z);
    zb = min(zb, z);
  }
  gl_FragColor = vec4(color, 1);
}

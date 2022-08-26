// licensed with CC BY-NC-SA 4.0 https://creativecommons.org/licenses/by-nc-sa/4.0/
// hydra-meetup.js
// by MDN https://www.instagram.com/markdenardo/

const f		= 	(() => a.fft[2])
const t		= 	(() => time)
const pi	= 	(() => Math.random(Math.PI))

noise(pi,pi,f)
  .scale(0.5,0.5)
  .color(pi,f,pi)
  .modulateScale(osc(),f)
  .add(osc(),f)
  .out(o0)

render(o0)

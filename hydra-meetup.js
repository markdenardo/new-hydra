// licensed with CC BY-NC-SA 4.0 https://creativecommons.org/licenses/by-nc-sa/4.0/
// hydra-meetup.js
// by MDN
// https://www.instagram.com/markdenardo/

const f     = (() => a.fft[0])
const t     = (() => time)
const pi    = (() => Math.random(Math.PI))
const oscf  = (f) => (osc(f,f,f))
const oscra = (i) => (oscf(i).repeat(f,t).add(i,0.5))
      
noise(pi,f).scale(0.5,0.5).modulatePixelate(osc(1,1,1)).add(o0,f).out(o0)
noise(pi,pi,f).scale(0.5,0.5).color(pi,f,pi).modulateScale(oscra(o0),f).out(o1)
oscra(o0,osc(1,t,pi)).color(t,t,t).out(o2)
render(o1)

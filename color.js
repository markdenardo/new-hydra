//colors change based on audio source
//MDN
//const f=(a.fft[0])
//osc(f,1,1).colorama(f,0.1).modulateScrollX(osc(f,1,1)).out(o0)
//shape(f).modulateScrollX(f,1).out(o1)
//render(o0)
const f=(a.fft[0])
osc(f,1,1).colorama(f,0.1).modulateScrollX(osc(f,1,1)).out()
render()
shape(f).modulateScrollX(f,1).out(o1)
render(o0)

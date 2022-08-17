

p1 = new P5() // start again
s0.init({src: p1.canvas})
// By default, the P5 canvas is rendered on top of the hydra buffers. You can hide it by calling:
//p1.hide()
//p1.show() // show the canvas
p1.draw = () => {p1.clear()}
// using feedback

p1.noStroke()
p1.fill(255, 0, 100)
p1.hide()
p1.draw = () => {
  //p1.clear()
  p1.rect(p1.mouseX, p1.mouseY, 400, 300)
  for(i=50; i<p1.mouseX; i+=50){
for (j=50; j<p1.mouseX; j+=50){
      p1.noFill()
  p1.stroke(p1.mouseX-i,i, p1.mouseY-j, j)
  p1.strokeWeight(3)
  p1.rect(i,j,50,50)
  p1.ellipse(i,j,i,j)
}
  }
  
}
//
src(s0)
  .add(o0, 0.9)
  .modulate(o0, 0.01)
  .scale(1.01)
  .hue(0.04)
  .out(o1)

p1.hide()
render()

let myCanv = document.querySelector("#draw");
var ctx = myCanv.getContext("2d");

myCanv.width = window.innerWidth;
myCanv.height = window.innerHeight;

ctx.strokeStyle = "#d000de";
ctx.lineJoin = "round";
ctx.lineCap = "round";
ctx.lineWidth = 90
// checking variables
let isDrawing = false;
let X = 0;
let Y = 0;
let hue= 0
let dir = true



function Drawing(e) {
  if (!isDrawing) return;
  console.log(e.offsetX);
  console.log(e.offsetY);
  ctx.strokeStyle = `hsl(${hue},100%,50%)`
  ctx.beginPath();
  ctx.moveTo(X, Y);
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
  [X, Y] = [e.offsetX, e.offsetY];
  hue++

  if(hue >=360){
        hue++
    }

    if(ctx.lineWidth >=100 ||ctx.lineWidth <=1){
        dir=!dir
    }



    if(dir){
        ctx.lineWidth++
    }else{
        ctx.lineWidth--
    }


}

myCanv.addEventListener("mousemove", Drawing);

myCanv.addEventListener("mousedown", (e) => {
  isDrawing = true;
  [X, Y] = [e.offsetX, e.offsetY];
});
myCanv.addEventListener("mouseup", () => (isDrawing = false));
myCanv.addEventListener("mouseout", () => (isDrawing = false));

import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin, MorphSVGPlugin);


MorphSVGPlugin.convertToPath("circle, rect, ellipse, line, polygon, polyline");

const dashTL = gsap.timeline();


export function dashAnimation(){
    

  dashTL

  .to("#GrillCircle1Solid",{duration:1, fill:"45342C"},"circlecolor")
  .to("#GrillCircle4Solid",{duration:1, fill:"45342C"},"circlecolor")

  .to("#GrillCircle1Solid",{duration:.75, morphSVG:"#SpeedCircle"},"topo")
  .to("#GrillCircle4Solid",{duration:.75, morphSVG:"#RPMCircle"},"topo")


  .to("#GrillDivided",{duration:.75, alpha:0, scaleY:0, transformOrigin:"0% 50%"},"topo")
  .from("#Topo5",{duration:.75, drawSVG:"40% 40%"},"topo")
  .from("#Topo2",{duration:.75, drawSVG:"65% 65%"},"topo")
  .from("#Topo3",{duration:.75, drawSVG:"52% 52%"},"topo")
  .from("#Topo7",{duration:.75, drawSVG:"50% 50%"},"topo2")
  .from("#Topo1",{duration:.75, drawSVG:"40% 40%"},"topo2")
  .from("#Topo6",{duration:.75, drawSVG:0},"topo2")
  .from("#Topo4",{duration:.75, drawSVG:0},"topo2")


  .from("#SpeedInnerCircle",{duration:1, alpha:0},"innercircles")
  .from("#RPMInnerCircle",{duration:1, alpha:0},"innercircles")
  .from("#SpeedLines",{duration:1, alpha:0},"dashlines")
  .from("#RPMLines",{duration:1, alpha:0},"dashlines")
  .from("#SpeedNumbers",{duration:1, alpha:0},"dashlines")
  .from("#RPMNumbers",{duration:1, alpha:0},"dashlines")
  .from("#Mountain",{duration:1, alpha:0, x:-100},"dashlines")
  .from("#FuelBtm",{duration:1, alpha:0, y:-40},"dashlines")
  .from("#FuelNumbers",{duration:1, alpha:0},"drawtoplines")
  .from("#FuelTop",{duration:1, drawSVG:0},"drawtoplines")

  .from("#RPMTop",{duration:1, drawSVG:0},"drawtoplines")

  .from("#speedTag",{duration:1, alpha:0},"speednumber")
  .from("#mph",{duration:1, alpha:0},"speednumber")
  .from("#RPMLine",{duration:1, drawSVG:0},"speednumber")
  .to("#speedTag",{duration:1, onComplete: countIt},"speedcount")
  .from("#SpeedTop",{duration:3, drawSVG:0})

  .from("#RPM-3",{duration:1, alpha:0, x:15},"speednumber")
  .from("#x1000",{duration:1, alpha:0, x:10},"speednumber")
  .from("#PRND",{duration:1, alpha:0, x:-15},"speednumber")


  .from("#Sun",{duration:1, alpha:0, y:450},"RPMcontent")  
  .from("#temp-72",{duration:1, alpha:0},"-=.6") 
  .from("#ALT",{duration:1, alpha:0, y:25},"RPMcontent") 
  
  .from("#Time",{duration:1, alpha:0, scale:1, transformOrigin:"50% bottom"},"RPMcontent") 
  .from("#Date",{duration:1, alpha:0},"-=.75","RPMcontent") 

  .from("#NavPathBlue",{duration:1, drawSVG:0},"RPMcontent") 
  .from("#Arrow",{duration:.5, alpha:0, scaleY:0, transformOrigin:"50% 0%"},"arrow","RPMcontent") 
  .from("#Compass",{duration:.5, alpha:0, scaleY:0, transformOrigin:"0% 50%"},"arrow","RPMcontent") 
  .from("#NavPathOrange",{duration:1, drawSVG:0},"-=.25","RPMcontent") 

  return dashTL;
}

var startCount = 0,
    endCount,
    activeIndex = 1,
    tm = 3,
    num = { var: startCount },
    numbers = document.getElementById("speedTag");

function countIt() {
  activeIndex == 1 ? endCount = 34 : endCount = 34;
  gsap.to(num, tm, {var: endCount, onUpdate:changeNumber});
}

function changeNumber() {
  numbers.innerHTML = (num.var).toFixed();
}
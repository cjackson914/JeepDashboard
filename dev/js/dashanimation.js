import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin, MorphSVGPlugin);

console.log(speedCounter);

MorphSVGPlugin.convertToPath("circle, rect, ellipse, line, polygon, polyline");

const dashTL = gsap.timeline();



var counterSpeed = 100;
// Set this number you want your counter to count up to. Default is 20
var topSpeed = 34;
// If yu don't want your speed to start at 0, change it here. Default is 0.
var speedNumber = 0;

var myVar;

function startTimer(){
    myVar = setInterval(speedCounter, counterSpeed);
}

export function speedCounter() {
	if (speedNumber < topSpeed) {
        speedNumber++;
       $("#speedTag").html(speedNumber);
		//document.getElementById("HC-counter").innerHTML = speedNumber;
	} else {
		clearInterval(myVar);
	}
	return speedNumber;
}


export function dashAnimation(){
    

  dashTL
  // .from("#GrillCircle1",{duration:1, alpha:0, visibility:"visible"})
  // .to("#GrillCircle1Solid",{duration:1, alpha:0})
  .to("#GrillCircle1Solid",{duration:1, fill:"45342C"},"circlecolor")
  .to("#GrillCircle4Solid",{duration:1, fill:"45342C"},"circlecolor")

  .to("#GrillCircle1Solid",{duration:1, morphSVG:"#SpeedCircle"},"topo")
  .to("#GrillCircle4Solid",{duration:1, morphSVG:"#RPMCircle"},"topo")
  // .to("#GrillCircle1Solid",{duration:1, morphSVG:"#SpeedCircle", fill:"none", stroke:"#45342C", stroke-width:"6"})


  // .to("#GrillCircle1Solid, #GrillCircle4Solid",{duration:1, alpha:0},"topo")

  .to("#GrillDivided",{duration:1, alpha:0, scaleY:0, transformOrigin:"0% 50%"},"topo")
  .from("#Topo5",{duration:1, drawSVG:"40% 40%"},"topo")
  .from("#Topo2",{duration:1, drawSVG:"65% 65%"},"topo")
  .from("#Topo3",{duration:1, drawSVG:"52% 52%"},"topo")
  .from("#Topo7",{duration:1, drawSVG:"50% 50%"},"topo2")
  .from("#Topo1",{duration:1, drawSVG:"40% 40%"},"topo2")
  .from("#Topo6",{duration:1, drawSVG:0},"topo2")
  .from("#Topo4",{duration:1, drawSVG:0},"topo2")

  // .from("#SpeedCircle",{duration:1, alpha:0, scale:.2},"circles")
  // .from("#RPMCircle",{duration:1, alpha:0, scale:.2},"circles")
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
  .from("#SpeedTop",{duration:1, drawSVG:0},"drawtoplines")
  .from("#RPMTop",{duration:1, drawSVG:0},"drawtoplines")

  .from("#speedTag",{duration:1, onComplete: startTimer},"speednumber")
  .from("#mph",{duration:1, alpha:0},"speednumber")
  .from("#RPMLine",{duration:1, drawSVG:0},"speednumber")

  .from("#RPM-3",{duration:1, alpha:0, x:15},"RPMcontent")
  .from("#x1000",{duration:1, alpha:0, x:10},"RPMcontent")
  .from("#PRND",{duration:1, alpha:0, x:-15},"RPMcontent")

  // .from("#Sun",{duration:1, alpha:0, x:100,},"mtncontent")  
  // .from("#temp-72º",{duration:1, alpha:0},"-=.6") 
  // .from("#ALT",{duration:1, alpha:0, x:-25},"mtncontent") 

  .from("#Sun",{duration:1, alpha:0, y:450},"RPMcontent")  
  .from("#temp-72º",{duration:1, alpha:0},"-=.6") 
  .from("#ALT",{duration:1, alpha:0, y:25},"RPMcontent") 
  
  .from("#Time",{duration:1, alpha:0, scale:1, transformOrigin:"50% bottom"})
  .from("#Date",{duration:1, alpha:0},"-=.75")

  .from("#NavPathBlue",{duration:1, drawSVG:0})
  .from("#Arrow",{duration:.5, alpha:0, scaleY:0, transformOrigin:"50% 0%"},"arrow")
  .from("#Compass",{duration:.5, alpha:0, scaleY:0, transformOrigin:"0% 50%"},"arrow")
  .from("#NavPathOrange",{duration:1, drawSVG:0},"-=.25")



  return dashTL;
}


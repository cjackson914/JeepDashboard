import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
gsap.registerPlugin(DrawSVGPlugin, MorphSVGPlugin);

MorphSVGPlugin.convertToPath("circle, rect, ellipse, line, polygon, polyline");

var song = document.getElementById("song");

const startTL = gsap.timeline();


export function startAnimation(){
  startTL
  .from("#StartCircle2",{duration:1, drawSVG:0, ease:"none", stroke:"#B4D9FF" , onComplete: playSound})
  .to("#StartCircle2",{duration:.5, ease:"none", fill:"#B4D9FF"})
  .to("#StartCircleScreen",{duration:.5, alpha:0})

  return startTL;
}


function playSound(){
    console.log("play");
    song.muted = false;
    song.play();
}

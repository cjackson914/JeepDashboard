import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
gsap.registerPlugin(DrawSVGPlugin, MorphSVGPlugin);

MorphSVGPlugin.convertToPath("circle, rect, ellipse, line, polygon, polyline");

const startTL = gsap.timeline();

// var song = document.getElementById("song");

export function startAnimation(){

  startTL
  .from("#StartCircle2",{duration:1, drawSVG:0, ease:"none", stroke:"#B4D9FF"})
  .to("#StartCircle2",{duration:.5, ease:"none", fill:"#B4D9FF"})
  .to("#StartCircleScreen",{duration:.5, alpha:0})
//   .call(playSound());

  return startTL;
}

// function playSound(){
//     song.play();
// }
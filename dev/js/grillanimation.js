import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";


MorphSVGPlugin.convertToPath("circle, rect, ellipse, line, polygon, polyline");
// var endShape = document.getElementById("grillRect");

gsap.registerPlugin(DrawSVGPlugin, MorphSVGPlugin);

const grillTL = gsap.timeline();

export function grillAnimation(){

  grillTL
  .to("#JeepLogoFront",{duration:1, morphSVG:"#GrillRect"});
    // .from("svg-grill", {duration:1, alpha:0});
    // .from("#svg-grill", {duration:.01, alpha:0});
}
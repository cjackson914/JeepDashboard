import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";


MorphSVGPlugin.convertToPath("circle, rect, ellipse, line, polygon, polyline");
// var endShape = document.getElementById("grillRect");

gsap.registerPlugin(DrawSVGPlugin, MorphSVGPlugin);

const grillTL = gsap.timeline();

export function grillAnimation(){

  grillTL

  .to("#JeepLogoBack",{duration:.01, alpha:0}, "logoswitch")
  .to("#JeepLogoFront",{duration:.01, alpha:0}, "logoswitch")
  .from("#J, #e1, #e2, #p",{duration:.01, alpha:0}, "logoswitch")
  .to("#J",{duration:1, morphSVG:"#GrillCircle1", delay:1}, "logomorph")
  .to("#e1",{duration:1, morphSVG:"#GrillCircle2", delay:1}, "logomorph")
  .to("#e2",{duration:1, morphSVG:"#GrillCircle3", delay:1}, "logomorph")
  .to("#p",{duration:1, morphSVG:"#GrillCircle4", delay:1}, "logomorph")



  .to("#J",{duration:1, alpha:0}, "logomorph2")
  .to("#GrillCircle1Solid",{duration:1, alpha:1, visibility:"visible"}, "logomorph2")

  .to("#p",{duration:1, alpha:0}, "logomorph2")
  .to("#GrillCircle4Solid",{duration:1, alpha:1, visibility:"visible"}, "logomorph2")

  .to("#e1",{duration:1, morphSVG:"#SemiCircleLeft"},"semicircle")
  .to("#e2",{duration:1, morphSVG:"#SemiCircleRight"},"semicircle")

  .to("#e1",{duration:1, morphSVG:"#GrillRectLeft"},"Rect")
  .to("#e2",{duration:1, morphSVG:"#GrillRectRight"},"Rect")
  .to("#e1, #e2",{duration:.01, alpha:0},"newRect")
  .to("#GrillDivided",{duration:.01, alpha:1, visibility:"visible"},"newRect")

  .to("#GrillRect1",{duration:1, morphSVG:"#GrillLine1"}, "grillLines")
  .to("#GrillRect2",{duration:1, morphSVG:"#GrillLine2"}, "grillLines")
  .to("#GrillRect3",{duration:1, morphSVG:"#GrillLine3"}, "grillLines")
  .to("#GrillRect4",{duration:1, morphSVG:"#GrillLine4"}, "grillLines")
  .to("#GrillRect5",{duration:1, morphSVG:"#GrillLine5"}, "grillLines")
  .to("#GrillRect6",{duration:1, morphSVG:"#GrillLine6"}, "grillLines")
  .to("#GrillRect7",{duration:1, morphSVG:"#GrillLine7", x:37}, "grillLines");

  return grillTL;
}
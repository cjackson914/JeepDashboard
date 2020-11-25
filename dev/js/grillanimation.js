import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin, MorphSVGPlugin);

MorphSVGPlugin.convertToPath("circle, rect, ellipse, line, polygon, polyline");

const grillTL = gsap.timeline();

export function grillAnimation(){

  grillTL

  .to("#JeepLogoBack",{duration:.01, alpha:0}, "logoswitch")
  .to("#JeepLogoFront",{duration:.01, alpha:0}, "logoswitch")
  .from("#J, #e1, #e2, #p",{duration:.01, alpha:0}, "logoswitch")
  .to("#J, #e1, #e2, #p",{duration:.01, x:-1, y:1}, "logoswitch")
  .to("#J",{duration:.5, morphSVG:"#GrillCircle1", delay:.5}, "logomorph")
  .to("#e1",{duration:.5, morphSVG:"#GrillCircle2", delay:.5}, "logomorph")
  .to("#e2",{duration:.5, morphSVG:"#GrillCircle3", delay:.5}, "logomorph")
  .to("#p",{duration:.5, morphSVG:"#GrillCircle4", delay:.5}, "logomorph")



  .to("#J",{duration:.5, alpha:0}, "logomorph2")
  .to("#GrillCircle1Solid",{duration:.5, alpha:1, visibility:"visible"}, "logomorph2")

  .to("#p",{duration:.5, alpha:0}, "logomorph2")
  .to("#GrillCircle4Solid",{duration:.5, alpha:1, visibility:"visible"}, "logomorph2")

  .to("#e1",{duration:.3, morphSVG:"#SemiCircleLeft"},"logomorph2")
  .to("#e2",{duration:.3, morphSVG:"#SemiCircleRight"},"logomorph2")

  .to("#e1",{duration:.3, morphSVG:"#GrillRectLeft"},"Rect, -=.2")
  .to("#e2",{duration:.3, morphSVG:"#GrillRectRight"},"Rect, -=.2")
  .to("#e1, #e2",{duration:.01, alpha:0},"newRect")
  .to("#GrillDivided",{duration:.01, alpha:1, visibility:"visible"},"newRect")

  .to("#GrillRect1",{duration:.5, morphSVG:"#GrillLine1"}, "grillLines")
  .to("#GrillRect2",{duration:.5, morphSVG:"#GrillLine2"}, "grillLines")
  .to("#GrillRect3",{duration:.5, morphSVG:"#GrillLine3"}, "grillLines")
  .to("#GrillRect4",{duration:.5, morphSVG:"#GrillLine4"}, "grillLines")
  .to("#GrillRect5",{duration:.5, morphSVG:"#GrillLine5"}, "grillLines")
  .to("#GrillRect6",{duration:.5, morphSVG:"#GrillLine6"}, "grillLines")
  .to("#GrillRect7",{duration:.5, morphSVG:"#GrillLine7", x:37}, "grillLines");

  return grillTL;
}
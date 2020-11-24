import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";

// MorphSVGPlugin.convertToPath("circle, rect, ellipse, line, polygon, polyline");

gsap.registerPlugin(DrawSVGPlugin, MorphSVGPlugin);

const mountainTL = gsap.timeline();

export function mountainAnimation(){

  mountainTL
  .from("#Mtn1Path",{duration:1, drawSVG:0, ease:"none"})
  .from("#Mtn2Path",{duration:1, drawSVG:"100% 100%", ease:"none"},"-=.5")
  .from("#Mtn3Path",{duration:1, drawSVG:0, ease:"none"},"-=.5")
  .from("#Mtn35Path",{duration:.5, drawSVG:0, ease:"none"})
  .from("#Mtn4Path",{duration:1, drawSVG:"100% 100%", ease:"none"},"-=.5")
  .from("#Mtn5Path",{duration:1, drawSVG:0, ease:"none"},"-=.5")
  .from("#Mtn55Path",{duration:.25, drawSVG:0, ease:"none"})
  .from("#Mtn65Path",{duration:.25, drawSVG:"100% 100%", ease:"none"})
  .from("#Mtn6Path",{duration:1, drawSVG:"100% 100%", ease:"none"},"-=.5")


  // .from("#Mtn1",{duration:2, drawSVG:0, ease:"none"})
  // .from("#Mtn2",{duration:2, drawSVG:"100% 50%", ease:"none"}, "-=.5")
  // .from("#Mtn3",{duration:2, drawSVG:0, ease:"none"}, "-=.5")
  // .from("#Mtn35",{duration:2, drawSVG:0, ease:"none"}, "-=1")
  // .from("#Mtn4",{duration:2, drawSVG:"100% 50%", ease:"none"}, "-=.5")
  // .from("#Mtn5",{duration:2, drawSVG:0, ease:"none"}, "-=.5")
  // // .from("#Mtn55",{duration:2, drawSVG:0, ease:"none"}, "-=.5")
  // .from("#Mtn6",{duration:2, drawSVG:"100% 50%", ease:"none"}, "-=.5")
  // // .from("#Mtn65",{duration:2, drawSVG:"100% 50%", ease:"none"}, "-=.5")

  .from("#svg-mountain-intro", {duration:.01, alpha:0, delay:.5})
  .from("#Bkg",{duration:.5, fill:"#1D2A3F"})
  .from("#Mtn6",{duration:.5, fill:"#1D2A3F"},"-=.25")
  .from("#Mtn5",{duration:.5, fill:"#1D2A3F"},"-=.25")
  .from("#Mtn4",{duration:.5, fill:"#1D2A3F"},"-=.25")
  .from("#JeepLogoBack",{duration:.5, y:50, alpha:0},"Mtn3")
  .from("#Mtn3",{duration:.5, fill:"#1D2A3F"},"Mtn3")
  .to("#Mtn3",{duration:.5, alpha:0},"Mtn3")
  .from("#Mtn2",{duration:.5, fill:"#1D2A3F"},"-=.25")
  .from("#Mtn1",{duration:.5, fill:"#1D2A3F"},"-=.25")
  .from("#JeepLogoFront",{duration:.5, alpha:0})

  .to("#Mtn1",{duration:1, fill:"#1D2A3F", stroke:"#1D2A3F"})
  .to("#Mtn2",{duration:1, fill:"#1D2A3F", stroke:"#1D2A3F"},"-=.75")

  // .to("#Mtn3",{duration:.5, fill:"#1D2A3F"})
  .to("#Mtn35",{duration:1, fill:"#1D2A3F", stroke:"#1D2A3F"},"-=.75")
  .to("#Mtn4",{duration:1, fill:"#1D2A3F", stroke:"#1D2A3F"},"-=.75")
  .to("#Mtn5",{duration:1, fill:"#1D2A3F", stroke:"#1D2A3F"},"-=.75")
  .to("#Mtn6",{duration:1, fill:"#1D2A3F", stroke:"#1D2A3F"},"-=.75")
  .to("#Bkg",{duration:1, fill:"#1D2A3F", stroke:"#1D2A3F"},"-=.75")
  .to("#JeepLogoFront",{duration:1,fill:"#83A5C7"},"-=1")


  // .to("#GrillRect",{duration:1, morphSVG:"#GrillLines", visibility:"visible"});
  // .to("#p",{duration:1, morphSVG:"#GrillCircle4Solid"}, "logomorph2");

  return mountainTL;
}
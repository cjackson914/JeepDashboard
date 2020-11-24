import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";

MorphSVGPlugin.convertToPath("circle, rect, ellipse, line, polygon, polyline");

gsap.registerPlugin(DrawSVGPlugin, MorphSVGPlugin);

const dashTL = gsap.timeline();

export function dashAnimation(){
    

  dashTL
  .to("#bkg",{alpha:0});

  return dashTL;
}
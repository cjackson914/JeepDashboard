import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin, MorphSVGPlugin);

const mountainTL = gsap.timeline();

export function mountainAnimation(){

  mountainTL.to("#sky",{duration:1, fill:"#3a6f84"},"play")



  return mountainAnimation;
}
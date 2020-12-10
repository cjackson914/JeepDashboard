import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
gsap.registerPlugin(DrawSVGPlugin, MorphSVGPlugin);

MorphSVGPlugin.convertToPath("circle, rect, ellipse, line, polygon, polyline");

const settingsTL = gsap.timeline();

export function settingsAnimation(){

  settingsTL
  .to("#GrillCircle4Solid",{delay:1, duration:1, fill:"#B25B31"},"RPMcontent-leave")
  .to("#RPMLines",{delay:1, duration:1, alpha:0},"RPMcontent-leave")
  .to("#RPMNumbers",{delay:1, duration:1, alpha:0},"RPMcontent-leave")

  .to("#RPMLine",{delay:1, duration:1, alpha:0, x:-130},"RPMcontent-leave")
  .to("#RPM-3",{delay:1, duration:1, alpha:0, x:-130},"RPMcontent-leave")
  .to("#x1000",{delay:1, duration:1, alpha:0, x:-130},"RPMcontent-leave")
  .to("#PRND",{delay:1, duration:1, x:-160},"RPMcontent-leave")

  .from("#Music-group",{duration:1, alpha:0, x:770}, "-=1")
  .to("#Music-group",{duration:1, alpha:0, x:620, delay:2})
  .from("#Car",{duration:1, alpha:0, x:780}, "-=.5")

  .from("#Path-27",{duration:.75, drawSVG:"0"},"sport")
  .from("#Path-27-Copy",{duration:.25, drawSVG:"0"},"sport")
  .from("#SPORT-text",{duration:.75, alpha:0, x:50}, "sport")
  .to("#Path-27",{duration:.75, alpha:0, delay:1},"sport-leave")
  .to("#Path-27-Copy",{duration:.75, alpha:0, delay:1},"sport-leave")
  .to("#SPORT-text",{duration:.75, alpha:0, x:-50, delay:1}, "sport-leave")

  .from("#SNOW-Mode",{duration:1, alpha:0, y:240},"snow")
  .from("#SNOW-text",{duration:.75, alpha:0, x:50},"snow")
  .to("#SNOW-Mode",{duration:.25, alpha:0, y:300, delay:1},"snow-leave")
  .to("#SNOW-text",{duration:.75, alpha:0, x:-50, delay:1}, "snow-leave")

  .to("#Car",{duration:1, rotate:13, transformOrigin: "50% 50%"},"rock")
  .from("#rock1, #rock2, #rock3, #rock4",{duration:.75, alpha:0},"rock")
  .from("#ROCK-text",{duration:.75, alpha:0, x:50},"rock")


  return settingsTL;
}
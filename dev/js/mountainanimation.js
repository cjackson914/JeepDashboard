import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin, MorphSVGPlugin);

const mountainTL = gsap.timeline();

export function mountainAnimation(){

  mountainTL.from("#Bkg",{duration:.5, fill:"#1D2A3F"})
  .from("#Mtn6",{duration:.5, fill:"#1D2A3F"})
  .from("#Mtn5",{duration:.5, fill:"#1D2A3F"})
  .from("#Mtn4",{duration:.5, fill:"#1D2A3F"})
  .from("#JeepLogoBack",{duration:.5, y:50, alpha:0})
  .from("#Mtn3",{duration:.5, fill:"#1D2A3F"},"Mtn3")
  .to("#Mtn3",{duration:.5, alpha:0},"Mtn3")
  .from("#Mtn2",{duration:.5, fill:"#1D2A3F"})
  .from("#Mtn1",{duration:.5, fill:"#1D2A3F"})
  .from("#JeepLogoFront",{duration:.5, alpha:0})

  .to("#Mtn1",{duration:.5, fill:"#1D2A3F", stroke:"#1D2A3F"})
  .to("#Mtn2",{duration:.5, fill:"#1D2A3F", stroke:"#1D2A3F"})

  // .to("#Mtn3",{duration:.5, fill:"#1D2A3F"})
  .to("#Mtn35",{duration:.5, fill:"#1D2A3F", stroke:"#1D2A3F"})
  .to("#Mtn4",{duration:.5, fill:"#1D2A3F", stroke:"#1D2A3F"})
  .to("#Mtn5",{duration:.5, fill:"#1D2A3F", stroke:"#1D2A3F"})
  .to("#Mtn6",{duration:.5, fill:"#1D2A3F", stroke:"#1D2A3F"})
  .to("#Bkg",{duration:.5, fill:"#1D2A3F", stroke:"#1D2A3F"});

  // return mountainAnimation;
}
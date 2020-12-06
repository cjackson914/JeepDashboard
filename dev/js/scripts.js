import {gsap} from "gsap";
import {startAnimation} from "./startanimation.js";
import {mountainAnimation} from "./mountainanimation.js";
import {grillAnimation} from "./grillanimation.js";
import {dashAnimation} from "./dashanimation.js";

import {GSDevTools} from "gsap/GSDevTools";

gsap.registerPlugin(GSDevTools);

// var song = $("#song")[0];
var song = document.getElementById("song");

const mainTL = gsap.timeline();
mainTL
.add(startAnimation)
// .call(playSound())
.add(mountainAnimation())
.add(grillAnimation())
.add(dashAnimation());
// .call(pauseSound());

function playSound(){
    song.play();
}
// function pauseSound(){
//     song.pause();
// }

GSDevTools.create();

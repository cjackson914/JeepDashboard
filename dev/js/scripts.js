import {gsap} from "gsap";
import {mountainAnimation} from "./mountainanimation.js";
import {grillAnimation} from "./grillanimation.js";
import {dashAnimation} from "./dashanimation.js";

import {GSDevTools} from "gsap/GSDevTools";

gsap.registerPlugin(GSDevTools);

// var song = $("#song")[0];
var song = document.getElementById("song");

const mainTL = gsap.timeline();
mainTL

.add(mountainAnimation())
// .call(playSound())
.add(grillAnimation())
.add(dashAnimation());


function playSound(){
    song.play();
}

GSDevTools.create();

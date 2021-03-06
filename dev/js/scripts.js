import {gsap} from "gsap";
import $ from "jquery";
import {startAnimation} from "./startanimation.js";
import {mountainAnimation} from "./mountainanimation.js";
import {grillAnimation} from "./grillanimation.js";
import {dashAnimation} from "./dashanimation.js";
import {settingsAnimation} from "./settingsanimation.js";

import {GSDevTools} from "gsap/GSDevTools";

gsap.registerPlugin(GSDevTools);

const mainTL = gsap.timeline();

mainTL

.add(startAnimation())
.add(mountainAnimation())
.add(grillAnimation())
.add(dashAnimation())
.add(settingsAnimation())
.pause();

$("#svg-start").on("click", function(){
    console.log("click");
    mainTL.play();
});

// GSDevTools.create();

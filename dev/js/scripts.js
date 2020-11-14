import {gsap} from "gsap";
import {mountainAnimation} from "./mountainanimation.js";

import {GSDevTools} from "gsap/GSDevTools";

gsap.registerPlugin(GSDevTools);

const mainTL = gsap.timeline();
mainTL.add(mountainAnimation())


GSDevTools.create();

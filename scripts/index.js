import 'virtual:svg-to-font.css'
// import svgSprite from 'virtual:svg-sprite';
import '@/styles/index.scss';
// import '@/styles/tailwind.css';
// import * as bootstrap from 'bootstrap';
// import './helpers/focus-visible';
import './main/spoilers/spoilers.js';
import './helpers/toggle-mnu';
import './helpers/dynamic-adaptive/da.min.js';
// import './helpers/rem.js';
import {ReadMore} from './main/more-less/more-less.js';
// window.bootstrap = bootstrap;
import PureCounter from "./main/purecounter_vanilla.js";
const autosize = require('./main/autosize/autosize.js');
import {formhanlderInit} from "./main/formhandlerInit.js";
require('./main/scrollWidth.js');

const Marquee3k = require('./main/marquee3k.js');
Marquee3k.init();

new PureCounter();
const readMore = new ReadMore();
autosize(document.querySelectorAll('[data-autosize]'));
formhanlderInit();
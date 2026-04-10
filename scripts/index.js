// import 'virtual:svg-to-font.css'
// import svgSprite from 'virtual:svg-sprite';
import '@/styles/index.scss';
// import * as bootstrap from 'bootstrap';
import './helpers/focus-visible';

// window.bootstrap = bootstrap;

var VenoBox = require('./main/VenoBox/dist/venobox.js');

if(document.querySelector('.thumb') !== null){
	var myGallery = new VenoBox({
		selector: '.thumb',
		spinner: 'rotating-plane',
		// fitView: true, // отключение прокрутки вниз больших изображений 
		// maxWidth: '44.53%', // max размер фото в % от viewport
		// customClass: 'myClass' // свой класс для стилизации отдельных модалок
		onPreOpen: function(obj){
			// document.querySelector('#wrapper-for-scroll-fix').classList.add('modal-open');
		},
		onPostOpen: function(obj, gallIndex, thenext, theprev){

		},
		onPreClose: function(obj, gallIndex, thenext, theprev){
			// document.querySelector('#wrapper-for-scroll-fix').classList.remove('modal-open');
		}
	});
}

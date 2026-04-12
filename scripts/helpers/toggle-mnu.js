(() => {
	if(document.querySelector('.toggle-mnu') !== null){
		document.querySelector('.toggle-mnu').onclick = function(e) {
			this.classList.toggle('on');
			document.documentElement.classList.toggle('menu-opened');
			document.documentElement.classList.toggle('lock');
		}
	}
})();
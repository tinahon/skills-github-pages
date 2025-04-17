window.addEventListener('load', () => {
	const btnEle = document.querySelector('.back-top');

	window.addEventListener('scroll', () => {
		if (window.scrollY > 500) {
			btnEle.classList.add('active');
		} else {
			btnEle.classList.remove('active');
		}
	});

	btnEle.onclick = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	const offcanvasExample = new bootstrap.Offcanvas('#offcanvasExample');

	document.querySelector('.header-menu nav').onclick = () => offcanvasExample.hide();
});

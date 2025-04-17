document.addEventListener('DOMContentLoaded', function () {
	const scrollContainer = document.querySelector('.section-five-content');
	const scrollList = document.querySelector('.section-five-content>ul');
	const itemCount = 5;
	const itemWidth = 350;
	const itemSpacing = 35;
	const totalItemWidth = itemWidth + itemSpacing;

	scrollList.innerHTML = scrollList.innerHTML + scrollList.innerHTML;

	const totalWidth = itemCount * totalItemWidth - itemSpacing;
	scrollList.style.width = `${totalWidth * 2}px`;

	const speed = 1;
	let animationFrameId;
	let isPaused = false;

	function scroll() {
		if (isPaused) return;

		const currentTransform = parseFloat(scrollList.style.transform?.split('translateX(')[1]?.split(')')[0] || '0');
		let newTransform = currentTransform - speed;

		if (newTransform <= -totalWidth) newTransform = 0;

		scrollList.style.transform = `translateX(${newTransform}px)`;
		animationFrameId = requestAnimationFrame(scroll);
	}

	scroll();

	scrollContainer.addEventListener('mouseenter', function() {
		isPaused = true;
		cancelAnimationFrame(animationFrameId);
	});

	scrollContainer.addEventListener('mouseleave', function() {
		isPaused = false;
		scroll();
	});
});

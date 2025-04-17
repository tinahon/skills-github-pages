window.addEventListener('load', () => {
	const inputEle = document.querySelector('.header-search input');
	const resultEle = document.querySelector('.header-search-result');

	const data = [
		{
			id: 'section-one',
			title: document.querySelector('.section-one h1').innerText.trim(),
			content: document.querySelector('.section-one').innerText.trim(),
		},
		{
			id: 'section-two',
			title: document.querySelector('.section-two h2').innerText.trim(),
			content: document.querySelector('.section-two').innerText.trim(),
		},
		{
			id: 'section-three',
			title: document.querySelector('.section-three h2').innerText.trim(),
			content: document.querySelector('.section-three').innerText.trim(),
		},
		{
			id: 'section-four',
			title: document.querySelector('.section-four h2').innerText.trim(),
			content: document.querySelector('.section-four').innerText.trim(),
		},
		{
			id: 'section-five',
			title: document.querySelector('.section-five h2').innerText.trim(),
			content: document.querySelector('.section-five').innerText.trim(),
		},
		{
			id: 'footer',
			title: document.querySelector('footer h2').innerText.trim(),
			content: document.querySelector('footer').innerText.trim(),
		},
	];

	const searchHandle = () => {
		const results = [];
		for (const item of data) {
			const index = item.content.toLocaleUpperCase().indexOf(inputEle.value.toLocaleUpperCase());
			const start = index - 30;
			if (index > -1) {
				results.push({
					id: item.id,
					title: item.title,
					content: `${start <= 0 ? '' : '...'}${item.content.substring(start, start + 50)}...`,
				});
			}
		}
		resultEle.innerHTML = '';
		if (inputEle.value && results.length > 0) {
			for (const item of results) {
				const liEle = document.createElement('li');
				liEle.innerHTML = `<h3>${item.title}</h3><p>${item.content}</p>`;
				liEle.onclick = () => {
					location.href = `#${item.id}`;
				};
				resultEle.append(liEle);
			}
			resultEle.style.display = 'block';
		} else {
			resultEle.style.display = 'none';
		}
	};

	inputEle.oninput = searchHandle;
	inputEle.onfocus = searchHandle;
	inputEle.onblur = () => {
		setTimeout(() => resultEle.style.display = 'none', 100);
	};
});

function initAnimations() {
	let i=1;
	for (let elmnt of document.querySelectorAll('[data-animate]')) {
		elmnt.style.animation = `text-in .5s ${i*.05}s forwards`;
		i++;
	}
}
initAnimations();
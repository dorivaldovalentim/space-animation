let container = document.querySelector('#container'), i = 1;

while(i <= 100) {
	let item = document.createElement('div');
	item.classList.add('star');

	let random_size = Math.ceil(Math.random() * 4);

	let random_position = {
		x: Math.ceil(Math.random() * container.offsetWidth),
		y: Math.ceil(Math.random() * container.offsetHeight)
	}

	if (Math.ceil(Math.random() * 10) == i) {
		item.style.filter = 'invert(1)';
	}

	item.style.width =  random_size + 'px';
	item.style.height = item.style.width;
	item.style.transform = `translateX(${random_position.x}px) translateY(${random_position.y}px)`;
	container.appendChild(item);
	
	i++;
}


setInterval(() => {
	document.querySelectorAll('.star').forEach(star => {
		let random_position = {
			x: Math.ceil(Math.random() * container.offsetWidth),
			y: Math.ceil(Math.random() * container.offsetHeight)
		}

		star.style.transform = `translateX(${random_position.x}px) translateY(${random_position.y}px)`;
	});
}, 200);

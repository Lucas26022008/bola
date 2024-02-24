const ball = document.getElementById('ball');

document.addEventListener('mousemove', (e) => {
	ball.style.left = e.pageX + 'px';
	ball.style.top = e.pageY + 'px';
});

window.addEventListener('blur', () => {
	ball.style.display = 'none';
});

window.addEventListener('focus', () => {
	ball.style.display = 'block';
});
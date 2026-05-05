window.addEventListener('DOMContentLoaded', () => {
  const cursor = document.getElementById('custom-cursor');
  if (!cursor) return;

  let mouseX = 0, mouseY = 0;
  let rafId = null;

  window.addEventListener('mousemove', (e) => {
	mouseX = e.clientX;
	mouseY = e.clientY;

	if (!rafId) {
	  rafId = requestAnimationFrame(() => {
		cursor.style.transform = `translate(calc(${mouseX}px - 50%), calc(${mouseY}px - 50%))`;
		rafId = null;
	  });
	}
  });
});
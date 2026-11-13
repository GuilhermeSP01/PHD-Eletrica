const year = document.querySelector('#ano');
if (year) year.textContent = String(new Date().getFullYear());

const reviewStrip = document.querySelector('#comentarios');
if (reviewStrip) {
  const viewport = reviewStrip.closest('.reviews-viewport');
  const controls = document.querySelector('.reviews-navigation');
  const previous = controls.querySelector('[data-review-direction="-1"]');
  const next = controls.querySelector('[data-review-direction="1"]');
  const update = () => {
    const before = reviewStrip.scrollLeft > 2;
    const after = reviewStrip.scrollWidth - reviewStrip.clientWidth - reviewStrip.scrollLeft > 2;
    viewport.classList.toggle('has-before', before);
    viewport.classList.toggle('has-after', after);
    previous.disabled = !before;
    next.disabled = !after;
    controls.hidden = reviewStrip.scrollWidth <= reviewStrip.clientWidth + 2;
  };
  controls.addEventListener('click', (event) => {
    const button = event.target.closest('[data-review-direction]');
    if (!button) return;
    const step = reviewStrip.firstElementChild.getBoundingClientRect().width + parseFloat(getComputedStyle(reviewStrip).gap);
    reviewStrip.scrollBy({ left: Number(button.dataset.reviewDirection) * step,
      behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
  });
  let drag = null;
  reviewStrip.addEventListener('pointerdown', (event) => {
    if (event.pointerType !== 'mouse' || event.button !== 0) return;
    drag = { id: event.pointerId, x: event.clientX, scroll: reviewStrip.scrollLeft };
    reviewStrip.setPointerCapture(event.pointerId);
  });
  reviewStrip.addEventListener('pointermove', (event) => {
    if (!drag || event.pointerId !== drag.id) return;
    const distance = event.clientX - drag.x;
    if (Math.abs(distance) > 4) reviewStrip.classList.add('is-dragging');
    if (reviewStrip.classList.contains('is-dragging')) reviewStrip.scrollLeft = drag.scroll - distance;
  });
  const end = () => { drag = null; reviewStrip.classList.remove('is-dragging'); };
  for (const event of ['pointerup', 'pointercancel', 'lostpointercapture']) reviewStrip.addEventListener(event, end);
  reviewStrip.addEventListener('scroll', update, { passive: true });
  new ResizeObserver(update).observe(reviewStrip);
  update();
}

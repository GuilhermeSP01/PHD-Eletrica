const year = document.querySelector('#ano');
if (year) year.textContent = String(new Date().getFullYear());

const brandStrip = document.querySelector('#marcas');
if (brandStrip) {
  const viewport = brandStrip.closest('.brands-viewport');
  const controls = document.querySelector('.brands-controls');
  const previous = controls.querySelector('[data-brand-direction="-1"]');
  const next = controls.querySelector('[data-brand-direction="1"]');
  const updateBrands = () => {
    const remaining = brandStrip.scrollWidth - brandStrip.clientWidth - brandStrip.scrollLeft;
    const hasBefore = brandStrip.scrollLeft > 2;
    const hasAfter = remaining > 2;
    viewport.classList.toggle('has-before', hasBefore);
    viewport.classList.toggle('has-after', hasAfter);
    previous.disabled = !hasBefore;
    next.disabled = !hasAfter;
    controls.hidden = brandStrip.scrollWidth <= brandStrip.clientWidth + 2;
  };
  controls.addEventListener('click', (event) => {
    const button = event.target.closest('button[data-brand-direction]');
    if (!button) return;
    const card = brandStrip.firstElementChild;
    const step = card.getBoundingClientRect().width + parseFloat(getComputedStyle(brandStrip).gap);
    brandStrip.scrollBy({
      left: Number(button.dataset.brandDirection) * step,
      behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth',
    });
  });
  brandStrip.addEventListener('scroll', updateBrands, { passive: true });
  new ResizeObserver(updateBrands).observe(brandStrip);
  updateBrands();
}

// No toque, a faixa usa a rolagem nativa; no mouse, permite puxar os cards.
if (brandStrip) {
  let drag = null;
  brandStrip.addEventListener('pointerdown', (event) => {
    if (event.pointerType !== 'mouse' || event.button !== 0) return;
    drag = { id: event.pointerId, x: event.clientX, scroll: brandStrip.scrollLeft };
    brandStrip.setPointerCapture(event.pointerId);
  });
  brandStrip.addEventListener('pointermove', (event) => {
    if (!drag || event.pointerId !== drag.id) return;
    const distance = event.clientX - drag.x;
    if (Math.abs(distance) > 4) brandStrip.classList.add('is-dragging');
    if (brandStrip.classList.contains('is-dragging')) brandStrip.scrollLeft = drag.scroll - distance;
  });
  const endDrag = () => {
    drag = null;
    brandStrip.classList.remove('is-dragging');
  };
  brandStrip.addEventListener('pointerup', endDrag);
  brandStrip.addEventListener('pointercancel', endDrag);
  brandStrip.addEventListener('lostpointercapture', endDrag);
}

module.exports = {
  create,
  render,
  onDocumentEvent
}

function create(context) {
  const { e, view, viewModel, model, doc, win } = context;

  return require('./Resize.html.js')(e, view, model);
}

function render(context) {
  const { e, view, viewModel, model, doc, win } = context;

  const el = doc.getElementById(view.id);
  const wEl = el.querySelector('[data-key="width"]');
  const hEl = el.querySelector('[data-key="height"]');

  wEl.textContent = win.innerWidth;
  hEl.textContent = win.innerHeight;

  el.style.left = `${win.innerWidth/2 - wEl.clientHeight}px`;
  el.style.top = `${win.innerHeight/2 - Math.max(wEl.clientWidth, hEl.clientWidth)/2}px`;

}

function onDocumentEvent(context) {
  const { e, view, viewModel, model, doc } = context;

  switch (e.type) {
    case 'mousemove':
      render(e, view, viewModel, model, doc)
      break;
  }
}

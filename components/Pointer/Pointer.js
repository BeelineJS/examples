module.exports = {
  create,
  render,
  onDocumentEvent
}

function create(context) {
  const { e, view, viewModel, model, doc, win } = context;

  const value = {
    top: parseInt(win.innerHeight / 2),
    left: parseInt(win.innerWidth / 2)
  }

  return require('./Pointer.html.js')(value);
}

function render(context) {
  const { e, view, viewModel, model, doc, win } = context;

  const el = doc.getElementById(view.id);
  el.style.top = `${e.clientY}px`;
  el.style.left = `${e.clientX}px`;
}

function onDocumentEvent(context) {
  const { e } = context;

  switch (e.type) {
    case 'mousemove':
      render(context)
      break;
  }
}

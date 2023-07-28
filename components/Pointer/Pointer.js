module.exports = {
  create,
  render,
  init
}

const documentEvents = {
  'mousemove': render
};

function create(context) {
  const { win } = context;

  const value = {
    top: parseInt(win.innerHeight / 2),
    left: parseInt(win.innerWidth / 2)
  }

  return require('./Pointer.html.js')(value);
}

function init(context) {
  const { events } = context;
  events.document.set(documentEvents);
}

function render(context) {
  const { e, view, doc } = context;

  const el = doc.getElementById(view.id);
  el.style.top = `${e.clientY}px`;
  el.style.left = `${e.clientX}px`;
}
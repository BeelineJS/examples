module.exports = {
  create,
  render,
  init
}

const windowEvents = {
  'resize': render
}

function create(context) {
  const { e, view, model } = context;

  return require('./Resize.html.js')(e, view, model);
}

function init(context) {
  const { events } = context;
  events.window.set(windowEvents)
}

function render(context) {
  const { el, win } = context;
  const wEl = el.querySelector('[data-key="width"]');
  const hEl = el.querySelector('[data-key="height"]');

  wEl.textContent = win.innerWidth;
  hEl.textContent = win.innerHeight;

  el.style.left = `${win.innerWidth / 2 - wEl.clientHeight}px`;
  el.style.top = `${win.innerHeight / 2 - Math.max(wEl.clientWidth, hEl.clientWidth) / 2}px`;
}

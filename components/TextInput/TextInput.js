module.exports = {
  create,
  render,
  onUserEvent
}

function create(context) {
  const { e, view, viewModel, model, util, doc } = context;

  const value = util.encode(model.value);
  return require('./TextInput.html.js')(value);
}

function render(context) {
  const { e, view, viewModel, model, util, doc } = context;

  const html = util.encode(model.value);
  const el = doc.getElementById(view.id);
  el.innerHTML = html;
}

function onUserEvent(context) {
  const { e, view, viewModel, model, util, doc } = context;

  switch (e.type) {
    case 'change':
    case 'input':
      break;
    default:
      return;
  }

  return document.querySelector(`#${view.id}`)
    .value;
}

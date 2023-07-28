module.exports = {
  create,
  init,
  render,
  onUserEvent
}

function create(context) {
  const { e, view, viewModel, model, doc } = context;

  const value = _getOptions(viewModel.value);

  return require('./templates/Select.html.js')(value);
}

function init(context) {
  const { e, view, viewModel, model, doc } = context;

  const el = doc.getElementById(view.id);
  el.value = model.value;
}

function render(context) {
  const { e, view, viewModel, model, doc } = context;

  const el = doc.getElementById(view.id);
  el.value = model.value;
}

function onUserEvent(context) {
  const { e, view, viewModel, model, doc } = context;

  const el = doc.getElementById(view.id);

  switch (e.type) {
    case 'change':
      return el.value;
  }

  return model.value;
}

function _getOptions(options) {
  return options
    .map(option => require('./templates/Option.html.js')(option))
    .join('');
}

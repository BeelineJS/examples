module.exports = {
  create,
  init,
  render
}

function create(context) {
  const { e, view, viewModel, model, doc } = context;

  return require('./ClassNameSubscriber.html.js')(model.value.name);
}

function init(context) {
  const { e, view, viewModel, model, doc } = context;

  view.core.subscribe('set-colour', setColourFn);

  function setColourFn(data) {
    _setColour(data, view, viewModel, model, doc);
  }
}

function render(context) {
  const { e, view, viewModel, model, doc } = context;

  switch (e.type) {
    case 'click':
    case 'event':
      break;
    default:
      return;
  }
  const el = doc.getElementById(view.id);
  el.innerHTML = model.value.name;
  el.className = model.value.css;
}

function _setColour(data, view, viewModel, model, doc) {
  model.value = data;
  render({
    e: {
      type: 'event'
    },
    view,
    viewModel,
    model,
    util: view.util,
    doc
  })
}

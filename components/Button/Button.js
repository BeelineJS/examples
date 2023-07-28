module.exports = {
  create,
  render,
  onUserEvent
}

function create(context) {
  const { e, view, viewModel, model, util, doc } = context;

  const name =util.encode(model.value, doc);
  return require('./Button.html.js')(name);
}

function render(context) {
  const { e, view, viewModel, model, util, doc } = context;

  if (!['click'].includes(e.type)) return;

  model.value = util.encode(model.value, doc);
  const el = doc.getElementById(view.id);
  el.innerHTML = model.value;
}

function onUserEvent(context) {
  const { e, view, viewModel, model, util, doc } = context;

  if (!['click'].includes(e.type)) return;

  view.dispatch
    .filter(dis => dis.type === e.type)
    .forEach(dis => view.core.notify(dis.name, dis.data))

  return model.value;
}

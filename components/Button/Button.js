module.exports = {
  create,
  render,
  init
}

const userEvents = {
  'click': _onClick
};

function create(context) {
  const { model, util, doc } = context;

  const name = util.encode(model.value, doc);
  return require('./Button.html.js')(name);
}

function init(context) {
  const { events } = context;

  events.user.set(userEvents);
}

function render(context) {
  const { e, view, model, util, doc } = context;

  if (!['click'].includes(e.type)) return;

  model.value = util.encode(model.value, doc);
  const el = doc.getElementById(view.id);
  el.innerHTML = model.value;
}

function _onClick(context) {
  const { e, view, model } = context;

  view.dispatch
    .filter(dis => dis.type === e.type)
    .forEach(dis => view.core.notify(dis.name, dis.data))

  return model.value;
}
module.exports = {
  create,
  render,
  init
}

const userEvents = {
  'click': _onClick
};

function create(context) {
  const { value, util, doc } = context;
  const name = util.encode(value, doc);
  return require('./Button.html.js')(name);
}

function init(context) {
  const { events } = context;
  events.user.set(userEvents);
}

function render(context) {
  const { e, el, value, util, doc } = context;

  if (!['click'].includes(e.type)) return;

  value = util.encode(value, doc);
  el().innerHTML = value;
}

function _onClick(context) {
  const { e, view, events } = context;

  view.dispatch
    .filter(dis => dis.type === e.type)
    .forEach(dis => view.core.notify(dis.name, dis.data))

  events.submit();
}
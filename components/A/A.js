module.exports = {
  create,
  render,
  init
}

const userEvents = {
  'click': _submit
}

function create(context) {
  const { model, util } = context;

  const value = util.encode(model.value);
  return require('./A.html.js')(value);
}

function init(context) {
  const { events } = context;
  events.user.set(userEvents);
}

function render(context) {
  const { view, model, util, doc } = context;

  const html = util.encode(model.value);
  const el = doc.getElementById(view.id);
  el.innerHTML = html;
}

function _submit(context) {
  const { events } = context;
  events.submit();
}
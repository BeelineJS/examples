module.exports = {
  create,
  init,
  render
}

const userEvents = {
  'click': _submit
}

function create(context) {
  const { value, util } = context;

  return require('./A.html.js')(util.encode(value));
}

function init(context) {
  const { events } = context;
  events.user.set(userEvents);
}

function render(context) {
  const { el, value, util } = context;

  const html = util.encode(value);
  el().innerHTML = html;
}

function _submit(context) {
  const { events } = context;
  events.submit();
}
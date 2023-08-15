module.exports = {
  create,
  init,
  render
}

const userEvents = {
  'click/increment': _increment,
  'click/decrement': _decrement,
  'dblclick/increment': _increment,
  'dblclick/decrement': _decrement,
}

function create(context) {
  const { value, util } = context;

  return require('./ParentChild.html.js')(util.encode(value));
}

function init(context) {
  const { events } = context;
  events.user.set(userEvents);
}

function render(context) {
  const { util, value } = context;
  util.find('[data-key="value"]').textContent = value;
}

function _increment(context) {
  const { value } = context;
  return value + 1;
}

function _decrement(context) {
  const { value } = context;
  return value === 0
    ? 0
    : value - 1;
}
module.exports = {
  create,
  init,
  render
}

const userEvents = {
  'change': _onChange
}

function create(context) {
  const { data } = context;
  const value = _getOptions(data);

  return require('./templates/Select.html.js')(value);
}

function init(context) {
  const { el, events, value } = context;
  el.value = value;
  events.user.set(userEvents);
}

function render(context) {
  const { el, value } = context;
  el.value = value;
}

function _onChange(context) {
  const { el } = context;
  return el.value;
}

function _getOptions(options) {
  return options
    .map(option => require('./templates/Option.html.js')(option))
    .join('');
}

module.exports = {
  create,
  init,
  render
}

const userEvents = {
  'click/inc': _increment,
  'dblclick/inc': _increment
};

function create(context) {
  const { value, util } = context;
  const data = util.encode(value);

  return require('./Increment.html.js')(data);
}

function init(context) {
  const { events } = context;
  events.user.set(userEvents);
}

function render(context) {
  const { el, value, util } = context;
  const data = util.encode(value);
  el().innerHTML = data;
}

function _increment(context) {
  const { value } = context;
  return value + 1;
}
module.exports = {
  create,
  init,
  render
}

const userEvents = {
  'change': _onInput,
  'input': _onInput
}

function create(context) {
  const { value, util } = context;

  const templateValue = util.encode(value);
  return require('./TextInput.html.js')(templateValue);
}

function init(context) {
  const { events } = context;
  events.user.set(userEvents)
}

function render(context) {
  const { el, value, util } = context;
  const html = util.encode(value);
  el.innerHTML = html;
}

function _onInput(context) {
  return context.el.value;
}

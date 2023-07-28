module.exports = {
  create,
  init,
  render
}

const userEvents = {
  'click/inc': _increment
};

function create(context) {
  const { model, util } = context;
  const data = util.encode(model.value);

  return require('./Increment.html.js')(data);
}

function init(context) {
  const { events } = context;
  events.user.set(userEvents);
}

function render(context) {
  const { view, model, util, doc } = context;
  const data = util.encode(model.value);
  const el = doc.getElementById(view.id);
  el.innerHTML = data;
}

function _increment(context) {
  const { model } = context;
  return model.value + 1;
}
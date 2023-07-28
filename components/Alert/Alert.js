module.exports = {
  create,
  init
}

const userEvents = {
  'click/ok-button': _close
};

function create(context) {
  const { model, util } = context;

  const value = {
    title: util.encode(model.value.title),
    content: util.encode(model.value.content)
  }
  return require('./Alert.html.js')(value);
}

function init(context) {
  const { events } = context;
  events.user.set(userEvents);
}

function _close(context) {
  const { view } = context;
  view.core.remove();
}

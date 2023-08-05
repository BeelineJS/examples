module.exports = {
  create,
  init
}

const userEvents = {
  'click/ok-button': _close
};

function create(context) {
  const { value, util } = context;

  const templateValue = {
    title: util.encode(value.title),
    content: util.encode(value.content)
  }

  return require('./Alert.html.js')(templateValue);
}

function init(context) {
  const { events } = context;
  events.user.set(userEvents);
}

function _close(context) {
  const { view } = context;
  view.core.remove();
}

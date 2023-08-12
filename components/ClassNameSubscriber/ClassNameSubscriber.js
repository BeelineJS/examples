module.exports = {
  create,
  init
}

function create(context) {
  const { value } = context;

  return require('./ClassNameSubscriber.html.js')(value.name);
}

function init(context) {
  const { view } = context;
  view.core.subscribe('set-colour', _setColourFn(context));
}


function _setColourFn(context) {
  return function _setColour(value) {
    const { el } = context;

    el.innerHTML = value.name;
    el.className = value.css;
  }
}
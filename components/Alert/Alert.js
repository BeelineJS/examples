module.exports = {
  create,
  onUserEvent
}

function create(context) {
  const { e, view, viewModel, model, util, doc } = context;

  const value = {
    title: util.encode(model.value.title),
    content: util.encode(model.value.content)
  }
  return require('./Alert.html.js')(value);
}

function onUserEvent(context) {

  const { e, view, viewModel, model, util, doc } = context;
  switch (e.target.dataset.key) {
    case 'ok-button':
      view.core.remove();

      break;
  }

}

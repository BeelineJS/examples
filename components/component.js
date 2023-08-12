function create(context) {
  const { e, view, viewModel, value, doc } = context;
  return '';
}

function init(context) {
  const { e, view, viewModel, value, doc } = context;
}

function render(context) {
  const { e, view, viewModel, value, doc } = context;
}

function destroy(context) {
  const { view, viewModel, value, doc } = context;
}

module.exports = {
  create,
  init,
  render,
  destroy
}

module.exports = {
  create,
  render
}

function create(context) {
  const { e, view, viewModel, model, util, doc } = context;

  const content = {
    html: util.encode(model.value),
    type: viewModel.value
  }

  return require('./Hx.html.js')(content);
}

function render(context) {
  const { e, view, viewModel, model, util, doc } = context;

  const html = util.encode(model.value);
  const el = doc.getElementById(view.id);
  el.innerHTML = html;
}

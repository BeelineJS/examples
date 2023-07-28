module.exports = {
  create,
  render
}

function create(context) {
  const { model, util } = context;

  const value = util.encode(model.value);
  return require('./A.html.js')(value);
}

function render(context) {
  const { view, model, util, doc } = context;

  const html = util.encode(model.value);
  const el = doc.getElementById(view.id);
  el.innerHTML = html;
}

module.exports = {
  create,
  render
}

function create(context) {
  const { data, value, util } = context;
  const content = {
    html: util.encode(value),
    type: data
  }

  return require('./Hx.html.js')(content);
}

function render(context) {
  const { el, value, util, } = context;
  const html = util.encode(value);
  el.innerHTML = html;
}
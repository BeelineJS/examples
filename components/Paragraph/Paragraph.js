module.exports = {
  create,
  render
}

function create(context) {
  const { value, util } = context;
  const html = util.encode(value);

  return require('./paragraph.html.js')(html);
}

function render(context) {
  const { el, value, util } = context;
  const html = util.encode(value);
  el().innerHTML = html;
}

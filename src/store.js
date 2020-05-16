const _store = new Set();
const _deleters = new Map();

const add = (string, seconds) => {
  _store.add(string);
  if (_deleters.has(string)) clearTimeout(_deleters.get(string));
  const timeoutHandle = setTimeout(() => _store.delete(string), seconds * 1000);
  _deleters.set(string, timeoutHandle);
}

const has = _store.has.bind(_store);

const destroy = string => {
  if (_deleters.has(string)) clearTimeout(_deleters.get(string));
  _store.delete(string);
}

const count = () => _store.size;

module.exports = {
  add,
  has,
  destroy,
  count
}
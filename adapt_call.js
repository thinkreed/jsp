const call = (key, ...args) => context => context[key](...args);

Promise.resolve([1, 2, 3])
  .then(call('map', x => 2 * x))
  .then(console.log);
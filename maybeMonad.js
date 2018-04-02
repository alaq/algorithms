const maybe = val => ({
  value: () => val,
  map: fn => ((val === null || val === undefined) ? maybe(null) : maybe(fn(val))),
  flatMap: fn => ((val === null || val === undefined) ? maybe(null) : fn(val)),
});

console.log(
  maybe("yo")
    .map(s => s.length)
    .map(n => n + "!")
    .value() // '2!'
);

console.log(
  maybe("yo")
    .flatMap(s => s.length)
    .flatMap(n => n + "!")
    .value() // '2!'
);

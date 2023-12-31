import * as t from "https://deno.land/std/testing/asserts.ts";

export const assert = t.assert;
assert.assert = t.assert;
assert.equal = t.assertEquals;
assert.doesNotThrow = f => f();
assert.throws = t.assertThrows;
assert.deepEqual = t.assertEquals;
assert.ok = t.assert;

//console.log(t);

export const describe = (name, func) => func();
export const it = (name, func) => {
  const done = () => {};
  Deno.test(name, () => func(done));
};

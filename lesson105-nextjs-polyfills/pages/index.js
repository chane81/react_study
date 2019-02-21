
const object1 = {
  a: 1,
  b: 2,
  c: 3
};

const object2 = Object.assign({c: 4, d: 5}, object1);



console.log(object2.c, object2.d);

const set1 = new Set([1, 2, 3, 4, 5]);

console.log(set1.has(1));

export default () => (
  <div>
    test
  </div>
)

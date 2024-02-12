//The Map object holds key-value pairs and remembers the original insertion order of the keys.
// Any value (both objects and primitive values) may be used as either a key or a value.

const map2 = new Map();

map2.set('a', 1);
map2.set('b', 2);
map2.set('c', 3);

console.log(map2.get('a'));
// Expected output: 1

map2.set('a', 97);

console.log(map2.get('a'));
// Expected output: 97

console.log(map2.size);
// Expected output: 3

map2.delete('b');

console.log(map2.size);
// Expected output: 2
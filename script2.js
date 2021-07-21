// OPDRACHT DEEL 2
let color = ['pink', 'yellow', 'blue'];
console.log('array:', color)
console.log('length of array:', color.length)
console.log('first element of array:', color[0])
console.log('last element of array:', color[color.length - 1])

// expand array without using push method
color[color.length++] = 'orange';
console.log('expanded array zonder push:', color)

// expand array by using push method
color.push('purple');
console.log('expanded array dmv push:', color)

// expand array with a number by using push method
color.push(14);
console.log('expanded array with a number:', color)

// expand array with an object by using push method
color.push({ greeting: 'Hi ik ben een object' });
console.log('expanded array with an object', color)

// log van het laatste element
console.log('last element of array:', color[color.length - 1])
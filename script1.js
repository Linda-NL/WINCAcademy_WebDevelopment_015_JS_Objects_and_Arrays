// OPDRACHT DEEL 1
let person = {
    name: 'Linda',
    age: 37,
    evaluations: [7, 10, 9]
}

console.log(person)

// dot notation
console.log('name logged with dot notation:', person.name)
console.log('age logged with dot notation:', person.age)

// bracket notation
console.log('name logged with bracket notation:', person['name'])
console.log('age logged with bracket notation:', person['age'])

// add key value pair & log property 'evaluations'
console.log(person.evaluations)

// ik begrijp deel 1 vraag 8 niet.
// ik weet niet wat er bedoeld wordt met "Wat is de waarde?"" van de property 'evaluations'
// de value of the property 'evaluations' staat tussen brackets, dus is een array
console.log(typeof person.evaluations) // type is object
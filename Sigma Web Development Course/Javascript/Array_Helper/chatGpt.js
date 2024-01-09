// Nested array and object
const nestedData = [
    {
      name: 'John',
      age: 30,
      hobbies: ['reading', 'coding', 'gaming'],
      address: {
        city: 'New York',
        zip: '10001'
      }
    },
    {
      name: 'Alice',
      age: 25,
      hobbies: ['traveling', 'photography'],
      address: {
        city: 'San Francisco',
        zip: '94105'
      }
    }
  ];
  
  // Array methods on the nested data
  
  // 1. Map: Extracting names of individuals
  const names = nestedData.map(person => person.name);
  console.log('Names:', names);
  
  // 2. Filter: Finding people aged 30 or older
  const adults = nestedData.filter(person => person.age >= 30);
  console.log('Adults:', adults);
  
  // 3. Reduce: Calculating the total age
  const totalAge = nestedData.reduce((acc, person) => acc + person.age, 0);
  console.log('Total Age:', totalAge);
  
  // 4. forEach: Logging addresses
  console.log('Addresses:');
  nestedData.forEach(person => {
    console.log(`${person.name}'s address: ${person.address.city}, ${person.address.zip}`);
  });
  
  // 5. Some: Checking if anyone is from San Francisco
  const isFromSF = nestedData.some(person => person.address.city === 'San Francisco');
  console.log('Is anyone from San Francisco?', isFromSF);
  
  // 6. Every: Checking if all have at least one hobby
  const allHaveHobbies = nestedData.every(person => person.hobbies.length > 0);
  console.log('Do all have hobbies?', allHaveHobbies);
  
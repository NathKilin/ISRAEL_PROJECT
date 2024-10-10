//forEach

// const numbers = [1, 2, 3];
// let sumOfSquares = 0; 
// let square = 0
// numbers.forEach(function(number) {
//     let square = number * number; 
//     sumOfSquares += square;
//     console.log(square);
    
// });
// console.log(sumOfSquares); // Corrigido de 'quare'

/////////////////////////////////////////////////////

//map

// const numbers = [ 1, 2, 3]
// numbers.map(function(number){
//     let cubed = number ** 3
//     console.log(cubed)  
// })

/////////////////////////////////////////////////////

// filter
// const people = [
//     { name: 'Alice', age: 22 },
//     { name: 'Bob', age: 17 },
//     { name: 'Anna', age: 19 },
//     { name: 'Mike', age: 23 }
//   ];
// let filtered_People = people.filter(function(person){
//     return person.name[0] === 'A' && person.age >18
// })
// console.log(filtered_People)

////////////////////////////////////////////////////////

//reduce
// const fruits = ['apple', 'banana']
// const letterCount = fruits.reduce(function(counts, word) {
//     word.split('').forEach(function(letter) {
//       counts[letter] = (counts[letter] || 0) + 1;
//     });
//     return counts;
//   }, {});
//   console.log(letterCount);


////////////////////////////////////////////////////////

// some & every
// const passwords = ['1234', 'abc', '123abc', 'longpassword123']

// const hasValidPassword = passwords.some(function(password){
//     const hasLetters = /[a-zA-z]/.test(password)
//     const hasNumbers = /\d/.test(password)
//     return password.length > 8 && hasLetters && hasNumbers
// })
// console.log(hasValidPassword);

////////////////////////////////////////////////////////

// find & findIndex

// const products = [
//     {name: 'Kryptonite', price: 1200000.75, quantity: 3},
//     {name: 'Excalibur', price: 2300000, quantity: 1},
//     {name: 'T-800',  price: 40000, quantity: 300},
//     {name: 'hope', price: 0, quantity: 0}
// ];

// const findingOutOfStock = products.find(function(product){
//     return product.quantity === 0;
// });

// const findingMostExpensive = products.findIndex(function(product) {
//     return product.price === Math.max(...products.map(p => p.price));
// });

// console.log('Out of Stock: ', findingOutOfStock, 'Most expensive item index: ', findingMostExpensive);

///////////////////////////////////////////////////////////

// sort

// const students = [
//     {name: 'Dilan', grade: 9},
//     {name: 'Carlos', grade: 7},
//     {name: 'Baba', grade: 7},
//     {name: 'Albert', grade: 5},
//     {name: 'Eliza', grade: 10},
//     {name: 'Frank', grade: 3}
// ]
// const descOrderGrades = students.sort(function(a, b){
//     if (b.grade === a.grade){
//         return a.name.localeCompare(b.name);
//     }
//     return b.grade - a.grade
// })
// console.log(descOrderGrades);

///////////////////////////////////////////////////////////

// TO CHECK******

// flat

// const numbers = [1, [2, [3, [4, [5]]]]];
// const flatNumbers = numbers.flat(Infinity)
// let sum = 0;
// const sumingflatArray = flatNumbers.forEach(function(num){
//     sum += num
// })
// console.log('Flat array: ', flatNumbers);

// console.log('Suming flat array: ', sumingflatArray);


//**********************************************************

//                        EXERCISES

// EX. 1
// const numbers = [1, 2, 3, 4, 5]

// numbers.forEach(function(num){
//     console.log(num);
// })

//**********************************************************

// EX. 2
// const numbers = [1, 2, 3, 4, 5]

// numbers.forEach(function(num){
//     console.log(num * 2);
// })

//**********************************************************

// EX. 3
// const numbers = [1, 2, 3, 4, 5]
// const squares = []

// numbers.forEach(function(num){
//     squares.push(num * num);
// })

// console.log(squares);

//**********************************************************

// EX. 4
// const numbers = [1, 2, 3, 4, 5]
// let sum = 0

// numbers.forEach(function(num){
//     sum += num;
// })

// console.log(sum);

//**********************************************************

// EX. 5
// const strings = ['Hello', ' ', 'World', '!']
// let result = ''

// strings.forEach(function(str){
//     result += str;
// })

// console.log(result);

//**********************************************************

// EX. 6
// const numbers = [1, 2, 3, 4, 5]
// const doubled = numbers.map(function(num){
//     return num * 2;
// })

// console.log(doubled);

//**********************************************************

// EX. 7
// const words = ['תפוח', 'בננה', 'דובדבן']
// const lengths = words.map(function(word){
//     return word.length;
// })

// console.log(lengths);

//**********************************************************

// EX. 8
// const numbers = [1, 4, 9, 16, 25]
// const squareRoots = numbers.map(function(num){
//     return Math.sqrt(num);
// })

// console.log(squareRoots);

//**********************************************************

// EX. 9 // REVIEW EXERCISE
// const words = ['שלום', 'עולם']
// const uppercased = words.flat(function(word){
//     return word.toUpperCase();
// })

// console.log(uppercased);

//**********************************************************

// EX. 10
// const booleans = [true, false, true]
// const reversed = booleans.map(function(bool){
//     return !bool;
// })

// console.log(reversed);

//**********************************************************

// EX. 11
// const numbers = [1, 2, 3, 4, 5, 6]
// const evenNumbers = numbers.filter(function(num){
//     return num % 2 === 0;
// })

// console.log(evenNumbers);

//**********************************************************

// EX. 12
// const fruits = ['תפוח', 'בננה', 'דובדבן', 'תמר', 'אלדרברי']
// const longFruits = fruits.filter(function(fruit){
//     return fruit.length > 5;
// })

// console.log(longFruits);

//**********************************************************

// EX. 13
// const numbers = [5, 10, 15, 20, 25]
// const largeNumbers = numbers.filter(function(num){
//     return num > 10;
// })

// console.log(largeNumbers);

//**********************************************************

// EX. 14
// const fruits = ['תפוח', 'בננה', 'תפוז', 'דובדבן']
// const startsWithT = fruits.filter(function(fruit){
//     return fruit[0] === 'ת';
// })

// console.log(startsWithT);

//**********************************************************

// EX. 15 // REVIEW EXERCISE
// const numbers = [1, 2, 3, 4, 5, 6]
// const evenIndexes = numbers.map(function(num){
//     return num % 2 === 0;
// })

// console.log(evenIndexes);

//**********************************************************

// EX. 16
// const numbers = [1, 2, 3, 4, 5]
// const total = numbers.reduce(function(acc, num){
//     return acc + num;
// }, 0)

// console.log(total);

//**********************************************************

// EX. 17
// const numbers = [1, 2, 3, 4, 5]
// const product = numbers.reduce(function(acc, num){
//     return acc * num;
// }, 1)

// console.log(product);

//**********************************************************

// EX. 18
// const numbers = [10, 5, 15, 20, 25]
// const maxNumber = numbers.reduce(function(acc, num){
//     return Math.max(acc, num);
// })

// console.log(maxNumber);

//**********************************************************

// EX. 19
// const words = ['שלום', ' ', 'עולם', '!']
// const sentence = words.reduce(function(acc, word){
//     return acc + word;
// })

// console.log(sentence);

//**********************************************************

// EX. 20
// const numbers = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4]
// const frequency = numbers.reduce(function(acc, num){
//     acc[num] = (acc[num] || 0) + 1;
//     return acc;
// }, {})

// console.log(frequency);

//**********************************************************

// EX. 21 // REVIEW EXERCISE
// const numbers = [1, 2, 3, 4, 5]
// const hasNumberGreaterThan3 = numbers.find(function(num){
//     return num > 3;
// })

// console.log(hasNumberGreaterThan3);

//**********************************************************

// EX. 22
// const numbers = [2, 4, 6, 8, 10]
// const areAllEven = numbers.every(function(num){
//     return num % 2 === 0;
// })

// console.log(areAllEven);

//**********************************************************

// EX. 23 // REVIEW EXERCISE
// const fruits = ['תפוח', 'בננה', 'דובדבן']
// const hasLongString = fruits.every(function(fruit){
//     return fruit.length > 6;
// })

// console.log(hasLongString);

//**********************************************************

// EX. 24
// const words = ['שלום', 'עולם', 'ג'אווהסקריפט']
// const containsZayin = words.some(function(word){
//     return word.includes('ז');
// })

// console.log(containsZayin);

//**********************************************************

// EX. 25
// const booleans = [false, false, true, false]
// const hasTrueValue = booleans.some(function(bool){
//     return bool === true;
// })

// console.log(hasTrueValue);

//**********************************************************

// EX. 26
// const numbers = [1, 2, 3, 4, 5]
// const firstGreaterThan3 = numbers.find(function(num){
//     return num > 3;
// })

// console.log(firstGreaterThan3);

//**********************************************************

// EX. 27
// const numbers = [1, 3, 5, 2, 4, 6]
// const firstEvenIndex = numbers.findIndex(function(num){
//     return num % 2 === 0;
// })

// console.log(firstEvenIndex);

//**********************************************************

// EX. 28
// const fruits = ['תפוח', 'בננה', 'דובדבן']
// const firstLongString = fruits.find(function(fruit){
//     return fruit.length > 5;
// })

// console.log(firstLongString);

//**********************************************************

// EX. 29 // REVIEW EXERCISE
// const fruits = ['תפוח', 'בננה', 'דובדבן', 'תמר']
// const cherryIndex = fruits.find(function(fruit){
//     return fruit === 'דובדבן';
// })

// console.log(cherryIndex);

//**********************************************************

// EX. 30
// const numbers = [3, 1, 4, 1, 5, 9, 2, 6, 5]
// numbers.sort(function(a, b){
//     return a - b;
// })

// console.log(numbers);

//**********************************************************

// EX. 31 // REVIEW EXERCISE
// const fruits = ['בננה', 'דובדבן', 'תפוח', 'תמר']
// fruits.sort(function(a, b){
//     return a.localeCompare(b);
// })

// console.log(fruits);

//**********************************************************

// EX. 32
// const numbers = [3, 1, 4, 1, 5, 9, 2, 6, 5]
// numbers.sort(function(a, b){
//     return b - a;
// })

// console.log(numbers);

//**********************************************************

// EX. 33
// const fruits = ['בננה', 'דובדבן', 'תפוח', 'תמר']
// fruits.sort(function(a, b){
//     return a.length - b.length;
// })

// console.log(fruits);

//**********************************************************

// EX. 34
// const students = [
//     {name: 'יוחנן', age: 25},
//     {name: 'יעל', age: 30},
//     {name: 'בועז', age: 20}
// ]
// students.sort(function(a, b){
//     return a.age - b.age;
// })

// console.log(students);

//**********************************************************

// EX. 35
// const nestedArray = [1, [2, 3], [4, [5, 6]]]
// const flatArray = nestedArray.flat()

// console.log(flatArray);

//**********************************************************

// EX. 36
// const nestedArray = [1, [2, [3, [4]]]]
// const flatArray = nestedArray.flat(2)

// console.log(flatArray);

//**********************************************************

// EX. 37 // REVIEW EXERCISE
// const arrayWithHoles = [1, 2, , 4, 5]
// const cleanedArray = arrayWithHoles.flat()

// console.log(cleanedArray);

//**********************************************************

// EX. 38
// const nestedArray = ['א', ['ב', 'ג'], 'ד']
// const flatArray = nestedArray.flat()

// console.log(flatArray);

//**********************************************************

// EX. 39
// const deeplyNestedArray = [1, [2, [3, [4, [5]]]]]
// const flatArray = deeplyNestedArray.flat(Infinity)

// console.log(flatArray);

//**********************************************************

// EX. 40 // REVIEW EXERCISE
// const hebrewLetters = ['א', 'ב', 'ג', 'ד']
// hebrewLetters.forEach(function(letter, index){
//     return letter + index;
// })

// console.log(hebrewLetters);

//**********************************************************

// EX. 41
// const numbers = [10, 20, 30, 40]
// const indexValuePairs = numbers.map(function(num, index){
//     return {index: index, value: num};
// })

// console.log(indexValuePairs);

//**********************************************************

// EX. 42 // REVIEW EXERCISE
// const fruits = ['תפוח', 'בננה', 'אבטיח', 'תמר']
// const containsAleph = fruits.filter(function(fruit){
//     return fruit.includes('א');
// })

// console.log(containsAleph);

//**********************************************************

// EX. 43
// const letters = ['א', 'ב', 'א', 'ג', 'ב', 'א']
// const letterCount = letters.reduce(function(acc, letter){
//     acc[letter] = (acc[letter] || 0) + 1;
//     return acc;
// }, {})

// console.log(letterCount);

//**********************************************************

// EX. 44
// const words = ['שלום', 'עולם', 'ג'אווהסקריפט']
// const hasMoreThan10Chars = words.some(function(word){
//     return word.length > 10;
// })

// console.log(hasMoreThan10Chars);

//**********************************************************

// EX. 45 // REVIEW EXERCISE
// const numbers = [1, 3, 5, 7, 9]
// const hasEvenNumber = numbers.every(function(num){
//     return num % 2 === 0;
// })

// console.log(hasEvenNumber);

//**********************************************************

// EX. 46
// const objects = [{id: 1, completed: false}, {id: 2, completed: true}]
// const firstCompleted = objects.find(function(obj){
//     return obj.completed === true;
// })

// console.log(firstCompleted);

//**********************************************************

// EX. 47
// const numbers = [5, 10, 15, 20]
// const firstGreaterThan10Index = numbers.findIndex(function(num){
//     return num > 10;
// })

// console.log(firstGreaterThan10Index);

//**********************************************************

// EX. 48
// const fruits = ['תפוח', 'בננה', 'דובדבן']
// fruits.sort(function(a, b){
//     return a.localeCompare(b);
// })

// console.log(fruits);

//**********************************************************

// EX. 49 // REVIEW EXERCISE
// const arrayWithNestedArrays = [1, [2, [3]]]
// const flattenedOnce = arrayWithNestedArrays.flat()

// console.log(flattenedOnce);

//**********************************************************

// EX. 50
// const letters = ['ש', 'ל', 'ו', 'ם']
// let word = ''
// letters.forEach(function(letter){
//     word += letter;
// })

// console.log(word);

//**********************************************************

// EX. 51
// const numbers = [1, 2, 3, 4, 5]
// const increasedBy10 = numbers.map(function(num){
//     return num + 10;
// })

// console.log(increasedBy10);

//**********************************************************

// EX. 52
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const divisibleBy3 = numbers.filter(function(num){
//     return num % 3 === 0;
// })

// console.log(divisibleBy3);

//**********************************************************

// EX. 53
// const words = ['קצר', 'בינוני', 'הכי ארוך', 'ארוך יותר']
// const longestWord = words.reduce(function(acc, word){
//     return word.length > acc.length ? word : acc;
// })

// console.log(longestWord);

//**********************************************************

// EX. 54 // REVIEW EXERCISE
// const numbers = [1, 3, 5, 7, 9]
// const hasEven = numbers.every(function(num){
//     return num % 2 === 1;
// })

// console.log(hasEven);

//**********************************************************

// EX. 55
// const strings = ['תפוח', 'תפ', 'תפוז']
// const allStartWithTap = strings.every(function(str){
//     return str.startsWith('תפ');
// })

// console.log(allStartWithTap);

//**********************************************************

// EX. 56
// const tasks = [{id: 1, completed: false}, {id: 2, completed: true}]
// const firstCompletedTask = tasks.find(function(task){
//     return task.completed === true;
// })

// console.log(firstCompletedTask);

//**********************************************************

// EX. 57
// const fruits = ['תפוח', 'בננה', 'דובדבן']
// const bananaIndex = fruits.findIndex(function(fruit){
//     return fruit === 'בננה';
// })

// console.log(bananaIndex);

//**********************************************************

// EX. 58 // REVIEW EXERCISE
// const students = [
//     {name: 'יוחנן', age: 25},
//     {name: 'יעל', age: 30},
//     {name: 'בועז', age: 20}
// ]
// students.sort(function(a, b){
//     return a.name - b.name;
// })

// console.log(students);

//**********************************************************

// EX. 59
// const nestedNumbers = [1, [2, 3], [4, [5, 6]]]
// const flattened = nestedNumbers.flat(2)

// console.log(flattened);

//**********************************************************

// EX. 60
// const letters = ['ש', 'ל', 'ו', 'ם']
// let result = ''
// letters.forEach(function(letter){
//     result += letter;
// })

// console.log(result);

//**********************************************************

// EX. 61
// const words = ['תפוח', 'בננה', 'דובדבן']
// const firstLetters = words.map(function(word){
//     return word[0];
// })

// console.log(firstLetters);

//**********************************************************

// EX. 62
// const words = ['א', 'אב', 'אבג', 'אבגד']
// const longerThan3Chars = words.filter(function(word){
//     return word.length > 3;
// })

// console.log(longerThan3Chars);

//**********************************************************

// EX. 63
// const fruits = ['תפוח', 'בננה', 'דובדבן']
// const totalChars = fruits.reduce(function(acc, fruit){
//     return acc + fruit.length;
// }, 0)

// console.log(totalChars);

//**********************************************************

// EX. 64 // REVIEW EXERCISE
// const words = ['שלום', 'עולם', 'ג'אווהסקריפט']
// const hasMoreThan10 = words.every(function(word){
//     return word.length > 6;
// })

// console.log(hasMoreThan10);

//**********************************************************

// EX. 65
// const numbers = [10, 20, 30, 40, 50]
// const allGreaterThan5 = numbers.every(function(num){
//     return num > 5;
// })

// console.log(allGreaterThan5);

//**********************************************************

// EX. 66
// const words = ['ספר', 'דלת', 'חלון']
// const firstWithVav = words.find(function(word){
//     return word.includes('וו');
// })

// console.log(firstWithVav);

//**********************************************************

// EX. 67
// const numbers = [5, 10, 15, 20]
// const firstGreaterThan10Index = numbers.findIndex(function(num){
//     return num > 10;
// })

// console.log(firstGreaterThan10Index);

//**********************************************************

// EX. 68
// const strings = ['אאא', 'בב', 'ג']
// strings.sort(function(a, b){
//     return a.length - b.length;
// })

// console.log(strings);

//**********************************************************

// EX. 69
// const nestedNumbers = [1, [2, [3, [4]]]]
// const flatArray = nestedNumbers.flat(3)

// console.log(flatArray);

//**********************************************************

// EX. 70
// const numbers = [1, 4, 9, 16]
// const squareRoots = numbers.map(function(num){
//     return Math.sqrt(num);
// })

// console.log(squareRoots);

//**********************************************************

// EX. 71 // REVIEW EXERCISE
// const letters = ['א', 'ב', 'ג']
// const repeated = letters.map(function(letter){
//     return letter + letter;
// })

// console.log(repeated);

//**********************************************************

// EX. 72
// const numbers = [5, 10, 15, 20, 25]
// const between10and20 = numbers.filter(function(num){
//     return num >= 10 && num <= 20;
// })

// console.log(between10and20);

//**********************************************************

// EX. 73
// const objects = [{א: 1}, {ב: 2}, {ג: 3}]
// const combined = objects.reduce(function(acc, obj){
//     return {...acc, ...obj};
// }, {})

// console.log(combined);

//**********************************************************

// EX. 74
// const objects = [{x: 1}, {y: 2}, {z: 3}]
// const hasPropertyY = objects.some(function(obj){
//     return obj.hasOwnProperty('y');
// })

// console.log(hasPropertyY);

//**********************************************************

// EX. 75 // REVIEW EXERCISE
// const strings = ['א1', 'ב2', 'ג3']
// const allContainLetterAndNumber = strings.every(function(str){
//     return typeof str === 'string';
// })

// console.log(allContainLetterAndNumber);

//**********************************************************

// EX. 76
// const products = [{מחיר: 60}, {מחיר: 40}, {מחיר: 70}]
// const cheapProduct = products.find(function(product){
//     return product.מחיר < 50;
// })

// console.log(cheapProduct);

//**********************************************************

// EX. 77
// const mixedArray = [1, '', true, 0, null, 'שלום']
// const firstFalsyIndex = mixedArray.findIndex(function(value){
//     return !value;
// })

// console.log(firstFalsyIndex);

//**********************************************************

// EX. 78
// const numbers = [3.14, 2.71, 1.41, 1.73]
// numbers.sort(function(a, b){
//     return a - b;
// })

// console.log(numbers);

//**********************************************************

// EX. 79
// const nestedArray = ['א', ['ב', ['ג']]]
// const flatArray = nestedArray.flat(Infinity)

// console.log(flatArray);

//**********************************************************

// EX. 80
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const squaredEvens = numbers.filter(function(num){
//     return num % 2 === 0;
// }).map(function(num){
//     return num * num;
// })

// console.log(squaredEvens);

//**********************************************************

// EX. 81 // REVIEW EXERCISE
// const people = [
//     {name: 'אליס', age: 25},
//     {name: 'בוב', age: 30},
//     {name: 'צ'רלי', age: 25}
// ]
// const groupedByAge = people.reduce(function(acc, person){
//     acc[person.age] = person.name;
//     return acc;
// }, {})

// console.log(groupedByAge);

//**********************************************************

// EX. 82
// const functions = [
//     function() { return 'First'; },
//     function() { return 'Second'; },
//     function() { return 'Third'; }
// ]

// functions.forEach(function(func){
//     setTimeout(func, 1000);
// })

//**********************************************************

// EX. 83
// const urls = ['url1', 'url2', 'url3']
// const promises = urls.map(function(url){
//     return fetch(url).then(res => res.json());
// })

// Promise.all(promises).then(function(results){
//     console.log(results);
// })

//**********************************************************

// EX. 84 // REVIEW EXERCISE
// const memoizedFibonacci = function(num){
//     const cache = {};
//     if(num in cache){
//         return cache[num];
//     }
//     if(num < 2){
//         return num;
//     }
//     cache[num] = memoizedFibonacci(num - 1) + memoizedFibonacci(num - 2);
//     return cache[num];
// }

// const fibNumbers = [1, 2, 3, 4, 5].map(function(num){
//     return memoizedFibonacci(num);
// })

// console.log(fibNumbers);

//**********************************************************

// EX. 85
// const promises = [Promise.resolve(1), Promise.resolve(2), Promise.resolve(3)]
// const allValues = promises.reduce(function(acc, promise){
//     return acc.then(function(result){
//         return promise.then(function(value){
//             return [...result, value];
//         });
//     });
// }, Promise.resolve([]))

// allValues.then(function(values){
//     console.log(values);
// })

//**********************************************************

// EX. 86
// const numbers = [1, 2, 3, 4, 5]
// const median = numbers.sort(function(a, b){
//     return a - b;
// }).reduce(function(acc, num, index, arr){
//     const mid = Math.floor(arr.length / 2);
//     if(arr.length % 2 !== 0){
//         return arr[mid];
//     } else {
//         return (arr[mid - 1] + arr[mid]) / 2;
//     }
// }, 0)

// console.log(median);

//**********************************************************

// EX. 87 // REVIEW EXERCISE
// const arrays = [[1, 2], [3, 4], [5, 6]]
// const flatAndTransformed = arrays.reduce(function(acc, arr){
//     return [...acc, ...arr.map(function(num){ return num * 2 })];
// }, [])

// console.log(flatAndTransformed);

//**********************************************************

// EX. 88
// const numbers = [1, 2, 3, 4, 5]
// const composedFunction = numbers.reduce(function(acc, num){
//     return function(x){
//         return acc(num(x));
//     }
// }, function(x){ return x })

// const result = composedFunction(10)
// console.log(result);

//**********************************************************

// EX. 89
// const students = [
//     {name: 'אליס', age: 25},
//     {name: 'בוב', age: 30},
//     {name: 'צ'רלי', age: 25}
// ]
// const groupByAge = students.reduce(function(acc, student){
//     (acc[student.age] = acc[student.age] || []).push(student);
//     return acc;
// }, {})

// console.log(groupByAge);

//**********************************************************

// EX. 90
// const numbers = [1, 2, 3, 4, 5]
// const sumIfEven = numbers.reduce(function(acc, num){
//     return num % 2 === 0 ? acc + num : acc;
// }, 0)

// console.log(sumIfEven);

//**********************************************************

// EX. 91
// const words = ['hello', 'world', 'javascript', 'python']
// const shortestWord = words.reduce(function(acc, word){
//     return word.length < acc.length ? word : acc;
// })

// console.log(shortestWord);

//**********************************************************

// EX. 92
// const nestedArray = [1, [2, [3, [4]]], 5]
// const flat = nestedArray.flat(Infinity).map(function(num){
//     return num * 3;
// })

// console.log(flat);

//**********************************************************

// EX. 93 // REVIEW EXERCISE
// const letters = ['a', 'b', 'c', 'd']
// const flatMap = letters.reduce(function(acc, letter){
//     return [...acc, letter.repeat(2)];
// }, [])

// console.log(flatMap);

//**********************************************************

// EX. 94
// const strings = ['apple', 'banana', 'cherry']
// const concatenated = strings.reduceRight(function(acc, str){
//     return acc + str;
// }, '')

// console.log(concatenated);

//**********************************************************

// EX. 95
// const students = [
//     {name: 'אליס', score: 85},
//     {name: 'בוב', score: 90},
//     {name: 'צ'רלי', score: 80}
// ]
// students.sort(function(a, b){
//     return b.score - a.score;
// }).reduce(function(acc, student){
//     return acc + student.name + ' ';
// }, '')

//**********************************************************

// EX. 96
// const people = [
//     {name: 'Alice', age: 30},
//     {name: 'Bob', age: 25},
//     {name: 'Charlie', age: 35}
// ]
// const peopleGroupedByAge = people.reduce(function(acc, person){
//     if (!acc[person.age]) acc[person.age] = [];
//     acc[person.age].push(person);
//     return acc;
// }, {})

// console.log(peopleGroupedByAge);

//**********************************************************

// EX. 97
// const trie = ['apple', 'app', 'banana'].reduce(function(trie, word){
//     let node = trie;
//     word.split('').forEach(function(letter){
//         if (!node[letter]) node[letter] = {};
//         node = node[letter];
//     })
//     node.isEnd = true;
//     return trie;
// }, {})

// console.log(trie);

//**********************************************************

// EX. 98
// const numbers = [1, 2, [3, [4, 5]]]
// const flattenedAndTransformed = numbers.flat(2).reduce(function(acc, num){
//     return acc + num;
// }, 0)

// console.log(flattenedAndTransformed);

//**********************************************************

// EX. 99
// const numbers = [1, 2, 3, 4, 5]
// const balancedBST = numbers.sort(function(a, b){
//     return a - b;
// }).reduce(function(tree, num){
//     function insertNode(root, value){
//         if (!root) return {value: value, left: null, right: null};
//         if (value < root.value) root.left = insertNode(root.left, value);
//         else root.right = insertNode(root.right, value);
//         return root;
//     }
//     return insertNode(tree, num);
// }, null)

// console.log(balancedBST);

//**********************************************************

// EX. 100
// const people = [
//     {name: 'Alice', age: 25},
//     {name: 'Bob', age: 35},
//     {name: 'Charlie', age: 30}
// ]
// const sumIf = people.reduce(function(acc, person){
//     return person.age > 30 ? acc + person.age : acc;
// }, 0)

// console.log(sumIf);

//**********************************************************

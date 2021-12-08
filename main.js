// - Дано список імен.
// let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'
// let nameValide = (name) => {
//     let valid = name
//         .replaceAll('..', ' ')
//         .replaceAll('---', ' ')
//         .replaceAll('__', ' ');
//
//     return valid;
// }
// console.log(nameValide('Harry---Potter'));



// - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
// let randomArr = (size) => {
//     let arr = [];
//     for (let i = 0; i < size; i++) {
//         arr.push(Math.round(Math.random() * 100));
//     }
//     return arr;
// }
// console.log(randomArr(10));


// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort
// let randomArr = (size) => {
//     let arr = [];
//     for (let i = 0; i < size; i++) {
//         arr.push(Math.round(Math.random() * 100));
//     }
//     arr.sort((a, b) => a - b);
//     return arr
// }
// console.log(randomArr(10));


// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа
// let randomArr = (size) => {
//     let arr = [];
//     for (let i = 0; i < size; i++) {
//         arr.push(Math.round(Math.random() * 100));
//     }
//     let filter = arr.filter((item) => item % 2 === 0);
//     console.log(filter);
//     return arr;
// }
// console.log(randomArr(10));


// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
// let randomArr = (size) => {
//     let arr = [];
//     for (let i = 0; i < size; i++) {
//         arr.push(Math.round(Math.random() * 100));
//     }
//     let map = arr.map(item => {
//         return item + ''
//     })
//     console.log(map);
//     return arr
// }
// console.log(randomArr(10));


// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
//     let sortNums = ((nums, direction) => {
//     let sort = []
//     if (direction === 'ascending') {
//         sort = nums.sort((a, b) => a - b);
//     } else if (direction === 'descending') {
//         sort = nums.sort((a, b) => b - a);
//     }
//     return sort;
// });
// console.log(sortNums([11,21,3], 'descending'));
// sortNums('ascending') // [3,11,21]
// sortNums('descending') // [21,11,3]



// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// -- відсортувати його за спаданням за monthDuration
console.log(coursesAndDurationArray.sort((a, b) => b.monthDuration - a.monthDuration));
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
console.log(coursesAndDurationArray.filter(item => item.monthDuration > 5));

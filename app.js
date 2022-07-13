const utilitypkg = require('tl-utility');

const arr = [1,2,3,4,5];
const elementFind = utilitypkg.tlFind(arr, 4);
console.log('Element from array ==> ', elementFind);

const elementIndex = utilitypkg.tlFindIndex(arr, 4);
console.log('Index of element from array ==> ', elementIndex);

const elementContain = utilitypkg.tlContain(arr, 4);
console.log('Element available in array ==> ', elementContain);

const maxNumber = utilitypkg.tlMax(arr);
console.log('Maximum number from array ==> ', maxNumber);

const MinNumber = utilitypkg.tlMin(arr);
console.log('Minimum number from array ==> ', MinNumber);
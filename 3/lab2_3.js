const prompt = require("prompt-sync")({ sigint: true });

console.log("Введите размер массива:");
const size = Number(prompt());

let array = [];

console.log("Введите элементы массива:");

for (let i = 0; i < size; ++i) {
	let value = prompt(`element[${i}] - `);
	array.push({ index: i, value: value });
}


function sumOfDigits(numStr) {
	let sum = 0

	numStr.split('').forEach(symbol =>{
		sum = sum + Number(symbol) 
	})
	return sum
}


function printArray(arr) {
	console.log("index    [" + arr.map(el => el.index).join(', ') + "]");
	console.log("elements [" + arr.map(el => el.value).join(', ') + "]\n");
}

console.log("Исходный массив:");
printArray(array);


for (let el of array) {
	el.value = sumOfDigits(el.value);
}

console.log("После подсчёта суммы цифр:");
printArray(array);

function sSort(arr) {
	for (let i = 0; i < arr.length; ++i) {
		for (let j = i + 1; j < arr.length; ++j) {
			if (arr[i].value > arr[j].value) {
				[arr[i], arr[j]] = [arr[j], arr[i]];
			}
		}
	}
}

sSort(array);

console.log("После сортировки по сумме цифр:");
printArray(array);

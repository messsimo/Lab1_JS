// 2.1 
let myName = "Daniel";
let birthYear = 2005;
let isStudent = true;
console.log("Name" + myName + ", birth year " + birthYear + ", i'm student " + isStudent);

// 2.2 
let score = prompt("Введите ваш балл:");
if (score >= 90) {
 console.log("Отлично!");
} else if (score >= 70) {
 console.log("Хорошо");
} else {
 console.log("Можно лучше!");
}

for (let i = 1; i <= 5; i++) {
 console.log(`Итерация: ${i}`);
}
// Написать функцию, которая принимает в качестве аргументов строку и объект, 
// а затем проверяет есть ли у переданного объекта свойство с данным именем. 
// Функция должна возвращать true или false.


const education = {
    level: "высшее",
    skill:"инженер",
}

const candidate = Object.create(education); 
    candidate.name = 'Ivan';
    candidate.surname = 'Ivanov';
    candidate.age = 40;


function propertyName(str, a) {
	console.log(str in a);
};
propertyName('age', candidate);
propertyName('city', candidate);
// Написать функцию, которая принимает в качестве аргумента объект 
// и выводит в консоль все ключи и значения только собственных свойств.
// Данная функция не должна возвращать значение.

const education = {
    level: "высшее",
    skill:"инженер",
}

const candidate = Object.create(education); 
    candidate.name = 'Ivan';
    candidate.surname = 'Ivanov';
    candidate.age = 40;
    

function ownProperty (a) {
    for (let key in a) {
        if (a.hasOwnProperty(key)) {
            console.log (`${key}: ${a[key]}`);
        }
    }
}
ownProperty (candidate);


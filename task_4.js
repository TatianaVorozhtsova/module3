function ElectricalDevice (name) {
    this.class = "home electrical appliance",
    this.name = name,
    this.power = 0
}

// Метод для включения/выключения приборов
ElectricalDevice.prototype.plugIn = function (power) {
    console.log(`${this.name} включен, потребляемая мощность ${power} Вт.`);
    this.power = power;
}

function Climatic(name, parameter) {
    this.subclass = "climatic household appliance",
    this.name = name,
    this.parameter = parameter
}

Climatic.prototype = new ElectricalDevice();

//Создаем экземпляры объектов (приборов)
const fridge = new ElectricalDevice ("fridge")
fridge.weight = 90;
fridge.getVolume = function(width, length, height) {
    let Volume = (width * length * height);
    console.log(`Объём холодильника ${Volume} кв.см.`)
}
console.log(fridge)
fridge.getVolume(60, 80, 180)

const computer = new ElectricalDevice ("computer")
computer.os = "windows10";
computer.getInfo = function() {
    console.log("Привет, я домашний компьютер! Моя хозяйка учится в Skillfactory, поэтому я очень устаю :-(");
}
console.log(computer)
computer.getInfo()

const conditioner = new Climatic ("conditioner", "temperature")
conditioner.color = "white";
conditioner.plase = "living room";
conditioner.getInfo = function() {
    console.log("Зимой никто не обращает на меня внимания(( Очень жду лета!")
}
console.log(conditioner)
conditioner.getInfo()

const humidifier = new Climatic ("humidifier", "moisture")
humidifier.maxVolumeWater = 5;
humidifier.timeSpray = function(volume_water) {
    if (volume_water > 5) {
        console.log ("Это слишком много! Максимальный объем только 5 литров!")
    } else {
        let time = volume_water * 2;
        console.log(`${volume_water} литра испарятся за ${time} часов.`); // Условно, в этом увлажнителе только один режим испарения
    }
};
console.log(humidifier)
humidifier.timeSpray(3)

//Закомментировать/раскомментировать для включения/выключения прибора:
fridge.plugIn(200);
//computer.plugIn(250);
conditioner.plugIn(2400);
humidifier.plugIn(150);

function getPowerUsed() {
    let PowerUsed = (fridge.power + computer.power + conditioner.power + humidifier.power);
    console.log(`Суммарная потребляемая мощность всех включенных приборов ${PowerUsed} Вт.`)
}
getPowerUsed();
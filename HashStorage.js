    "use strict";

function HashStorage() { // конструктор класса HashStorage

            this.storage={}; // хэш, в котором хранилище будет сохранять всё что нужно

            this.addValue=function(key,value) {
                  this.storage[key]=value;  // сохраняем в хэше значение value под именем key
            }
               
            this.getValue=function(key) {  
                 return this.storage[key];
            }
               
            this.deleteValue=function(key) {
                  return delete this.storage[key]; 
            }
               
            this.getKeys=function(storage) {
                    return Object.keys(storage);
            }

}

var drinkStorage = new HashStorage();
    
function addDrink(key,value) {
    var key = prompt('Введите название напитка');
    var value = {};
    var alc = confirm('Он алкогольный? Если да нажмите Ок');
        if ( alc )
                value.alc = 'да';
        else
                value.alc = 'нет';
    value.recept = prompt('Введите рецепт напитка');
    drinkStorage.addValue(key,value);
    console.log(drinkStorage)
}

function getDrink() {
    var nameDrink = prompt('Введите название напитка');
    if (drinkStorage.getValue(nameDrink)) {
        alert('напиток:' + nameDrink + '\n' + 'алкогольный:' + drinkStorage.getValue(nameDrink).alc + '\n' + 'Рецепт:' + drinkStorage.getValue(nameDrink).recept);
    } else {
        alert('Такого напитка нет');
    }
    
}

function delDrink() {
    var nameDrink = prompt('Введите название напитка');
    drinkStorage.deleteValue(nameDrink);
    console.log(drinkStorage.deleteValue(nameDrink));
//    if (deleteValue(nameDrink)) {
//        alert('Напиток ' + nameDrink + ' удален');
//    }
//    else {
//        alert('Такого напитка нет');
//    }
}

function listDrink() {
    alert(drinkStorage.getKeys(drinkStorage.storage));
}
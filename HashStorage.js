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
                if (key in this.storage) {
                    delete this.storage[key];
                    return true;
                }
                else {
                    return false;
                }
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
    var drinkValue = drinkStorage.getValue(nameDrink);
    if (drinkValue) {
        alert('напиток:' + nameDrink + '\n' + 'алкогольный:' + drinkValue.alc + '\n' + 'Рецепт:' + drinkValue.recept);
    } else {
        alert('Такого напитка нет');
    }    
}

function delDrink() {
    var nameDrink = prompt('Введите название напитка');
    if (drinkStorage.deleteValue(nameDrink) == true) { 
        alert('Напиток ' + nameDrink + ' удален');
    }
    else {
        alert('Такого напитка нет');
    }
}

function listDrink() {
    console.log(drinkStorage.getKeys(drinkStorage.storage));
}
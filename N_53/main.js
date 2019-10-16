    "use strict";

function HashStorage(keyls) { // конструктор класса HashStorage(передаём ключ в ls)
            
            this.storage={}; // хэш, в котором хранилище будет сохранять всё что нужно
            if(localStorage[keyls]){   //проверяем, есть ли в ls ключи иначе может быть ошибка
                this.storage = JSON.parse(localStorage[keyls]); //и если есть добавляем в this.storage
            }
    
            this.addValue=function(key,value) {
                  this.storage[key]=value;  // сохраняем в хэше значение value под именем key
                  localStorage[keyls] = JSON.stringify(this.storage); // сохраняем в ls хэш storage
            }
               
            this.getValue=function(key) {  
                 return this.storage[key];
            }
               
            this.deleteValue=function(key) {  
                if (key in this.storage) {
                    delete this.storage[key];
                    localStorage[keyls] = JSON.stringify(this.storage); // удаляем (напиток\блюдо) и переписываем ls
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

var drinkStorage = new HashStorage("drinks");
var dishStorage = new HashStorage("dish");
    
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



function addDish(key,value) {
    var key = prompt('Введите название блюда');
    var value = {};
    var veg = confirm('Оно вегитарианское? Если да нажмите Ок');
        if ( veg )
                value.veg = 'да';
        else
                value.veg = 'нет';
    value.recept = prompt('Введите рецепт блюда');
    dishStorage.addValue(key,value);
}

function getDish() {
    var nameDish = prompt('Введите название блюда');
    var dishValue = dishStorage.getValue(nameDish);
    if (dishValue) {
        alert('Блюдо:' + nameDish + '\n' + 'вегетарианское:' + dishValue.veg + '\n' + 'Рецепт:' + dishValue.recept);
    } else {
        alert('Такого блюда нет');
    }    
}

function delDish() {
    var nameDish = prompt('Введите название блюда');
    if (dishStorage.deleteValue(nameDish) == true) { 
        alert('Блюдо ' + nameDish + ' удалено');
    }
    else {
        alert('Такого блюда нет');
    }
}

function listDish() {
    console.log(dishStorage.getKeys(dishStorage.storage));
}
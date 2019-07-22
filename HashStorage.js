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
                  delete this.storage[key]; 
            }
               
            this.getKeys=function(storage) {
                    return Object.keys(storage);
            }

}

var drinkStorage = new HashStorage();
    
function addDrink(key,value) {
    var key = prompt('Введите название напитка');
    var value;
    var yes = 'да';
    var no = 'нет';
    var alc = confirm('Он алкогольный? Если да нажмите Ок');
        if ( alc )
                value = yes;
        else
                value = no;
    drinkStorage.addValue(key,value);
}

function getDrink() {
    var nameDrink = prompt('Введите название напитка');
    if (nameDrink in drinkStorage.storage) 
        alert('напиток:' + nameDrink + '\n' + 'алкогольный:' + drinkStorage.getValue(nameDrink) + '\n');
    else 
        alert('Такого напитка нет');
    
}

function delDrink() {
    var nameDrink = prompt('Введите название напитка');
    if (nameDrink in drinkStorage.storage) {
        drinkStorage.deleteValue(nameDrink);
        alert('Напиток ' + nameDrink + ' удален');
    }
    else {
        alert('Такого напитка нет');
    }
}

function listDrink() {
    alert(drinkStorage.getKeys(drinkStorage.storage));
}
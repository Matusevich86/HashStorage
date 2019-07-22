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
               
            this.getKeys=function() {
                    return this.Object.keys(storage);
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
    }
function getDrink(){
    
}
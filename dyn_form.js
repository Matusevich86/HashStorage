"use strict";

var formDef1=
    [
        {label:'Название сайта:',kind:'longtext',name:'sitename'},
        {label:'URL сайта:',kind:'longtext',name:'siteurl'},
        {label:'Посетителей в сутки:',kind:'number',name:'visitors'},
        {label:'E-mail для связи:',kind:'shorttext',name:'email'},
        {label:'Рубрика каталога:',kind:'combo',name:'division',
            variants:[{text:'здоровье',value:1},{text:'домашний уют',value:2},{text:'бытовая техника',value:3}]},
        {label:'Размещение:',kind:'radio',name:'payment',
            variants:[{text:'бесплатное',value:1},{text:'платное',value:2},{text:'VIP',value:3}]},
        {label:'Разрешить отзывы:',kind:'check',name:'votes'},
        {label:'Описание сайта:',kind:'memo',name:'description'},
        {label:'Опубликовать:',kind:'submit'},
    ];

var formDef2=
    [
        {label:'Фамилия:',kind:'longtext',name:'lastname'},
        {label:'Имя:',kind:'longtext',name:'firstname'},
        {label:'Отчество:',kind:'longtext',name:'secondname'},
        {label:'Возраст:',kind:'number',name:'age'},
        {label:'Зарегистрироваться',kind:'submit'},
    ];
function createForm(formHash, formType){

    formHash.map(function (formElement) {

        if (formElement.kind == 'submit'){
            var submitelement = document.createElement('input'); // Append Submit Button
                 submitelement.setAttribute("type", "submit");
                 submitelement.setAttribute("value", formElement.label);
                 formType.appendChild(submitelement);
        }
        else {
            var namelabel = document.createElement('label'); // Create Label for Name Field
                namelabel.innerHTML = formElement.label;// Set Field Labels
                formType.appendChild(namelabel);

                if (formElement.kind == 'radio') {
                     formElement.variants.map(function (radioelement){
                         var inputelement = document.createElement("input");
                         inputelement.setAttribute("name", formElement.name);
                         var spanelement = document.createElement('span');
                         spanelement.innerText = radioelement.text;
                         inputelement.setAttribute("type", "radio");
                         formType.appendChild(inputelement);
                         formType.appendChild(spanelement);
                     });
                 }else {
                    if (formElement.kind == 'combo') {
                             var inputelement = document.createElement('select');
                             inputelement.setAttribute("name", formElement.name);
                             formElement.variants.map(function (subelement){
                                 var option = document.createElement("option");
                                 option.value = subelement.value;
                                 option.text = subelement.text;
                                 inputelement.appendChild(option);
                             });
                         }
                    else if (formElement.kind == 'memo') {
                             var inputelement = document.createElement('textarea');
                             inputelement.setAttribute("name", "description");
                         }
                    else {
                             var inputelement = document.createElement('input'); // Create Input Field for Name
                             inputelement.setAttribute("type", "text");
                             inputelement.setAttribute("name", formElement.name);
                         }
                    formType.appendChild(inputelement);
                }

        }

        var linebreak = document.createElement('br');
        formType.appendChild(linebreak);
    });
}
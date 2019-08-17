    "use strict";

var frm=document.forms.info;
var sitebuilders=frm.elements.sitebuilders;
var sitename = frm.elements.sitename;
var siteurl = frm.elements.siteurl;
var email = frm.elements.email;
var visitors = frm.elements.visitors;
var sitedate = frm.elements.sitedate;
var division = frm.elements.division;
var payment = frm.elements.payment;
var comments = frm.elements.comments;
var discription = frm.elements.discription;

sitebuilders.onblur = function(){validSiteB(false)};
sitename.onblur = function(){validSiteN(false)};
siteurl.onblur = function(){validSiteU(false)};
sitedate.onblur = function(){validSiteD(false)};
visitors.onblur = function(){validSiteV(false)};
email.onblur = function(){validSiteE(false)};
division.onchange = function(){validSiteDivis(false)};
payment.onchange = function(){validSitePay(false)};
comments.onchange = function(){validSiteC(false)};
discription.onchange = function(){validSiteDiscr(false)};


function validSiteB(tofocus){
    let valid = true;
    let siteBfield = frm.elements.sitebuilders;
    let siteBfieldValue = siteBfield.value;
    if(siteBfieldValue == ""){
        valid = false;
        var error = document.getElementById('errRaz');
        error.innerHTML = 'Поле не заполнено';
        if(tofocus){siteBfield.focus()};
    }else{
        var error = document.getElementById('errRaz');
        error.innerHTML = '';
    }
    return valid;
}
function validSiteN(tofocus){
    let valid = true;
    let siteNfield = frm.elements.sitename;
    let siteNfieldValue = siteNfield.value;
    if(siteNfieldValue == ""){
        valid = false;
        var error = document.getElementById('errName');
        error.innerHTML = 'Поле не заполнено';
        if(tofocus){siteNfield.focus()};
    }else{
        var error = document.getElementById('errName');
        error.innerHTML = '';
    }
    return valid;
}
function validSiteU(tofocus){
    let valid = true;
    let siteUfield = frm.elements.siteurl;
    let siteUfieldValue = siteUfield.value;
    if(siteUfieldValue == ""){
        valid = false;
        var error = document.getElementById('errUrl');
        error.innerHTML = 'Поле не заполнено';
        if(tofocus){siteUfield.focus()};
    }else{
        var error = document.getElementById('errUrl');
        error.innerHTML = '';
    }
    return valid;
}
function validSiteD(tofocus){
    let valid = true;
    let siteDfield = frm.elements.sitedate;
    let siteDfieldValue = siteDfield.value;
    if(siteDfieldValue == ""){
        valid = false;
        var error = document.getElementById('errDate');
        error.innerHTML = 'Поле не заполнено';
        if(tofocus){siteDfield.focus()};
    }else{
        var error = document.getElementById('errDate');
        error.innerHTML = '';
    }
    return valid;
}
function validSiteE(tofocus){
    let valid = true;
    let siteEfield = frm.elements.email;
    let siteEfieldValue = siteEfield.value;
    if(siteEfieldValue == ""){
        valid = false;
        var error = document.getElementById('errEmail');
        error.innerHTML = 'Поле не заполнено';
        if(tofocus){siteEfield.focus()};
    }else{
        var error = document.getElementById('errEmail');
        error.innerHTML = '';
    }
    return valid;
}
function validSiteV(tofocus){
    let valid = true;
    let siteVfield = frm.elements.visitors;
    let siteVfieldValue = parseInt(siteVfield.value.trim());
    if ( isNaN(siteVfieldValue) ) {
               valid = false;
               var error = document.getElementById('errVis');
               error.innerHTML = 'Введите число';
               if(tofocus){siteVfield.focus()};
    }else{
        var error = document.getElementById('errVis');
        error.innerHTML = '';
    }
    return valid;
}
function validSiteDivis(tofocus){
    let valid = true;
    let siteDivisfield = frm.elements.division;
    let siteDivisfieldValue = siteDivisfield.value;
    if(siteDivisfieldValue == 11){
        valid = false;
        var error = document.getElementById('errDiv');
        error.innerHTML = 'Выберите рубрику';
        if(tofocus){siteDivisfield.focus()};
    }else{
        var error = document.getElementById('errDiv');
        error.innerHTML = '';
    }
    return valid;
}
function validSitePay(tofocus){
    let valid = true;
    let sitePayfield = frm.elements.payment;
    let sitePayfieldValue = sitePayfield.value;
    if(sitePayfieldValue == ""){
        valid = false;
        var error = document.getElementById('errPay');
        error.innerHTML = 'Не выбран способ оплаты';
        if(tofocus){sitePayfield.onchange()};
    }else{
        var error = document.getElementById('errPay');
        error.innerHTML = '';
    }
    return valid;
}
function validSiteC(tofocus){
    let valid = true;
    let siteCfield = frm.elements.comments;
    let siteCfieldValue = siteCfield.checked;
    if(!siteCfieldValue){
        valid = false;
        var error = document.getElementById('errCom');
        error.innerHTML = 'Вы не согласились с правилами сайта!';
        if(tofocus){siteCfield.focus()};
    }else{
        var error = document.getElementById('errCom');
        error.innerHTML = '';
    }
    return valid;
}
function validSiteDiscr(tofocus){
    let valid = true;
    let siteDiscrfield = frm.elements.discription;
    let siteDiscrfieldValue = siteDiscrfield.value;
    if(siteDiscrfieldValue == ""){
        valid = false;
        var error = document.getElementById('errDiscr');
        error.innerHTML = 'Поле не заполнено';
        if(tofocus){siteDiscrfield.focus()};
    }else{
        var error = document.getElementById('errDiscr');
        error.innerHTML = '';
    }
    return valid;
}

frm.onsubmit = function CheckFields(){
    var ok = true;
    ok &= validSiteB(ok);
    ok &= validSiteN(ok);
    ok &= validSiteU(ok);
    ok &= validSiteD(ok);
    ok &= validSiteV(ok);
    ok &= validSiteE(ok);
    ok &= validSiteDivis(ok);
    ok &= validSitePay(ok);
    ok &= validSiteC(ok);
    ok &= validSiteDiscr(ok);
    if(!ok){
        event.preventDefault();
    }
}


























//    var formTag=document.forms.INFO; // а можно было найти через getElementById
//
//    var sBildersField=formTag.elements.SITEBILDERS; 
//    var sBildersValue=sBildersField.value; // текстовое значение
//            
//    var sNameField=formTag.elements.SITENAME; 
//    var sNameValue=sNameField.value; // текстовое значение
//            
//    var sUrlField=formTag.elements.SITEURL; 
//    var sUrlValue=sUrlField.value; // текстовое значение
//
//    var sDateField=formTag.elements.SITEDATE;
//    var sDateValue=parseInt(sDateField.value.trim()); // текст -> число
//            
//    var visitorsField=formTag.elements.VISITORS;
//    var visitorslue=parseInt(visitorsField.value.trim()); // текст -> число
//            
//    var emailField=formTag.elements.EMAIL; 
//    var emailValue=emailField.value; // текстовое значение
//            
//    var divisionField=formTag.elements.DIVISION;
//    var divisionValue=divisionField.value; // строковое значение
//            
//    var paymentField=formTag.elements.PAYMENT;
//    var paymentValue=paymentField.value; // строковое значение
//            
//    var commentsField=formTag.elements.COMMENTS;
//    var commentsValue=commentsField.checked; // логическое значение
//            
//    var discriptionField=formTag.elements.DISCRIPTION; 
//    var discriptionValue=discriptionField.value; // текстовое значение
//            
            
 
window.addEventListener("Load",init);
var isShowHide = false;
     var isRegister = false;
function init(){
    showHide();
    showRegister();
    bindEvents();
}
function bindEvents(){
    document.querySelector("#log").addEventListener("click",show);
    document.querySelector("#Register").addEventListener("click",shows);
}
function shows(){
    isShowHide = false;
    showHide();
    isRegister = true;
    showRegister();
}
function show(){
    isRegister = false;
    showRegister();
    isShowHide = true;
    showHide();
}
const showHide = ()=>document.querySelector("#loginDiv").className=isShowHide?'show':'hide';
const showRegister = ()=>document.querySelector("#registerDiv").className=isRegister?'show':'hide';
// function showHide(){
//     document.querySelector("#loginDiv").className=isShowHide?'show':'hide';
// }
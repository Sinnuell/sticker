

let panel = document.querySelector("#panel");
let move = false;
let offsetX, offsetY;
let currentDiv = document.getElementById("div");



// создаем новые стики
let createNote = document.querySelector(".btn");

createNote.addEventListener("click", () => {
        let newDiv = document.createElement("div");
        newDiv.setAttribute("class", "sticker")
        
        panel.appendChild(newDiv);


// кнопка закрытия
let removeStic = document.createElement("button");
removeStic.setAttribute("class", "close");


removeStic.addEventListener("click", function(e){
    panel.removeChild(newDiv);
})
newDiv.appendChild(removeStic);       
 
// создание текстового поля
        let textContent = document.createElement("textarea");
textContent.setAttribute("type","textarea");
textContent.setAttribute("name", "text");
textContent.setAttribute("maxlength", "65");
textContent.setAttribute("class", "textarea")


newDiv.appendChild(textContent);



        });
        
        


     


// обработчик один на все div, которые вложены в элемент #panel
panel.addEventListener("mousedown", function (e) {
    move = true;
    offsetX = e.offsetX;
    offsetY = e.offsetY;
    currentDiv = e.target; // запоминаем div, который будет перемещаться
});

document.addEventListener("mousemove", function (e) {
    if (move) {
       
        currentDiv.style.top = e.clientY - offsetY + "px";
        currentDiv.style.left = e.clientX - offsetX + "px";
    }
});

document.addEventListener("mouseup", function (e) {
    move = false;
});



//сохранение в локальном хранилище
//  localStorage.setItem('stic', newDiv);
//  divStor = localStorage.getItem('stic');

const isShow = !!parseInt(localStorage.getItem('isShow'));
if(isShow) {
    localStorage.appendChild("container");
}
localStorage.setItem('isShow', panel);
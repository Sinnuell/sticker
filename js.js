let panel = document.querySelector("#panel");
let move = false;
let offsetX, offsetY;
let currentDiv = document.getElementById("div");


// создаем новые стики
let createNote = document.querySelector(".btn");

createNote.addEventListener("click", () => {
        let newDiv = document.createElement("div");

        newDiv.style.cssText = "position: absolute;text-decoration:none; color:#000; background:#ffc;  display:block; height:15rem; width:15rem; padding:1em;  box-shadow: 0 5px 10px 3px rgba(33,33,33,.7); "
        panel.appendChild(newDiv);
    
       
        
        let textContent = document.createElement("textarea");
textContent.setAttribute("type","textarea");
textContent.setAttribute("name", "text");
textContent.setAttribute("maxlength", "100");

textContent.style.cssText = "width:180px; height:180px; padding: 5px; font-size: 1.5rem; background: #fff; overflow-wrap: break-word; font-family: 'Verdana'; overflow: hidden"
newDiv.appendChild(textContent);

        })
        
        


     


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

// let textContent = document.createElement("input");
// textContent.setAttribute("type","text");
// textContent.setAttribute("name", "text");
// newDiv.appendChild(textContent);

const login = document.getElementById("login")
const loginspan = document.getElementById("spanLogin")

let date = new Date()
date = date.toLocaleTimeString([], {hour12: false, hour: '2-digit', minute:'2-digit'});
document.querySelector("#login > span").innerText = date


login.onclick = function () {
    if(!login.querySelector("#main")) {

        loginspan.classList.add('animate');


        setTimeout(function(){
            login.removeChild(loginspan)
            const main = document.createElement("div")
            main.id = "main"
            login.appendChild(main)
        }, 100);
    }
}
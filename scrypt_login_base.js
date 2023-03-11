const login = document.getElementById("login")
const loginspan = document.getElementById("spanLogin")
const body = document.querySelector("body")
const song_connexion = new Audio("./asset/asset_login/login_song.mp3");


let date = new Date()
date = date.toLocaleTimeString([], {hour12: false, hour: '2-digit', minute:'2-digit'});
document.querySelector("#login > span").innerText = date


function create_desktop() {
{
    const desktop = document.createElement("div")
    desktop.id = "Desktop"
    body.appendChild(desktop)

        const taskbar = document.createElement("div")
        taskbar.id = "taskbar"
        desktop.appendChild(taskbar)

            const element_taskbar = document.createElement("div")
            element_taskbar.classList.add("element_taskbar")
            taskbar.appendChild(element_taskbar)

            const windows_icon = document.createElement("img")
            windows_icon.src = "./asset/asset_taskbar/microsoft-windows-11.svg"
            element_taskbar.appendChild(windows_icon)
}
}

login.onclick = function () {
    if(!login.querySelector("#main")) {

        loginspan.classList.add('animate');

        setTimeout(function(){
            login.removeChild(loginspan)

            const main_background = document.createElement("div")
            main_background.id="main_background"
            login.appendChild(main_background)

            const div_area = document.createElement("div")
            div_area.id = "div_area"
            main_background.appendChild(div_area)

            setTimeout(() => {
                const login_div = document.createElement("div")
                login_div.id = "login_div"
                main_background.appendChild(login_div)

                    const login_img = document.createElement("img")
                    login_img.src = "./asset/asset_login/profile.png"
                    login_div.appendChild(login_img)

                    const login_span = document.createElement("span")
                    login_span.innerText = "Portfolio d'Adrien Formoso"
                    login_div.appendChild(login_span)

                    const login_btn = document.createElement("button")
                    login_btn.innerText = "Se connecter"
                    login_btn.id = "login_btn"
                    login_div.appendChild(login_btn)

                    login_btn.onclick = function () {
                        body.removeChild(login)
                        create_desktop()
                        song_connexion.play()
                    }


                $(login_div).animate({ opacity: 1 }, 200);
            }, 100);

        }, 100);
    }
}

document.getElementById("login_btn").onclick = function () {
    document.getElementById("login_div").style.backgroundColor = "red"
}
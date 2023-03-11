
const login = document.getElementById("login")
const loginspan = document.getElementById("spanLogin")
const body = document.querySelector("body")
const song_connexion = new Audio("./asset/asset_login/login_song.mp3");


let date = new Date()
date = date.toLocaleTimeString([], {hour12: false, hour: '2-digit', minute:'2-digit'});
document.querySelector("#login > span").innerText = date

function open_fenetre_txt () {

    const fenetre_txt = document.createElement("div")
    fenetre_txt.id = "fenetre_txt"
    fenetre_txt.classList.add("fenetre")
    fenetre_txt.style="position: absolute; left: 0; top: 0; width: 50vw;; height: 50vh;"
    Desktop.appendChild(fenetre_txt)
    
    
        const fenetre_txt_header = document.createElement("div")
        fenetre_txt_header.id = "fenetre_txt_header"
        fenetre_txt_header.classList.add("fenetre_header")
        fenetre_txt.appendChild(fenetre_txt_header)
    
            const fenetre_txt_header_info = document.createElement("div")
            fenetre_txt_header_info.id = "fenetre_txt_header_info"
            fenetre_txt_header.appendChild(fenetre_txt_header_info)
    
                const fenetre_txt_header_logo = document.createElement("img")
                fenetre_txt_header_logo.id = "fenetre_txt_header_logo"
                fenetre_txt_header_logo.src = "./asset/asset_desktop/logo_txt.png"
                fenetre_txt_header_info.appendChild(fenetre_txt_header_logo)
    
                const fenetre_txt_header_span = document.createElement("span")
                fenetre_txt_header_span.id = "fenetre_txt_header_span"
                fenetre_txt_header_span.innerText = "contact.txt - Bloc-note"
                fenetre_txt_header_info.appendChild(fenetre_txt_header_span)
    
            const fenetre_txt_header_area_button = document.createElement("div")
            fenetre_txt_header_area_button.id = "fenetre_txt_header_area_button"
            fenetre_txt_header_area_button.classList.add("fenetre_header_area_button")
            fenetre_txt_header.appendChild(fenetre_txt_header_area_button)
    
                const fenetre_txt_header_close_button = document.createElement("div")
                fenetre_txt_header_close_button.id = "fenetre_txt_header_close_button"
                fenetre_txt_header_close_button.classList.add("fenetre_header_close_button")
                fenetre_txt_header_area_button.appendChild(fenetre_txt_header_close_button)
    
                const fenetre_txt_header_close_button_img = document.createElement("img")
                fenetre_txt_header_close_button_img.src = "./asset/asset_desktop/cross.svg"
                fenetre_txt_header_close_button.appendChild(fenetre_txt_header_close_button_img)
    
    
        const fenetre_txt_body = document.createElement("div")
        fenetre_txt_body.id = "fenetre_txt_body"
        fenetre_txt_body.classList.add("fenetre_body")
        fenetre_txt.appendChild(fenetre_txt_body)
    
        const fenetre_txt_footer = document.createElement("div")
        fenetre_txt_footer.id = "fenetre_txt_footer"
        fenetre_txt_footer.classList.add("fenetre_footer")
        fenetre_txt.appendChild(fenetre_txt_footer)
    
            const fenetre_txt_footer_resize = document.createElement("img")
            fenetre_txt_footer_resize.id = "fenetre_txt_footer_resize"
            fenetre_txt_footer_resize.src ="./asset/asset_desktop/triangle.svg"
            fenetre_txt_footer_resize.classList.add("fenetre_footer_resize")
            fenetre_txt_footer.appendChild(fenetre_txt_footer_resize)
        
    
        let right = parseInt(window.getComputedStyle(fenetre_txt).getPropertyValue('right'));
        let bottom = parseInt(window.getComputedStyle(fenetre_txt).getPropertyValue('bottom'));
        let width = fenetre_txt.clientWidth;
        let height = fenetre_txt.clientHeight;
    
    
        const header = document.getElementById("fenetre_txt_header_info");
        const div = header.parentNode.parentNode;
        let offsetX, offsetY;
    
        header.addEventListener("mousedown", (event) => {
        offsetX = event.clientX - parseInt(div.style.left);
        offsetY = event.clientY - parseInt(div.style.top);
    
        document.addEventListener("mousemove", onMouseMove);
        });
        
        function onMouseMove(event) {
            const left = event.clientX - offsetX;
            const right = window.innerWidth - offsetX-event.clientX ;
         
            const width = div.offsetWidth;
            const leftdiv = div.offsetLeft;
            const parentWidth = div.parentNode.offsetWidth;
            const remainingSpace = parentWidth - (leftdiv + width);
            div.style.maxWidth=remainingSpace+width-6+"px"
            
            const height_fenetre = div.offsetHeight;
            const topdiv = div.offsetTop;
            const parentHeight = div.parentNode.offsetHeight;
            const remainingSpaceHeight = parentHeight - (topdiv + height_fenetre);
            div.style.maxHeight=remainingSpaceHeight+height_fenetre-5+"px"
            console.log(parentHeight)
    
            const top = event.clientY - offsetY;
    
            
            if (left < 0) {
              div.style.left = "0px";
            } else {
              div.style.left = left + "px";
            }
    
            if (top < 0) {
              div.style.top = "0px";
            } else {
              div.style.top = top + "px";
            }
    
    
            const windowWidth = window.innerWidth;
            const windowRight = windowWidth - left - width;
            if (windowRight < 0) {
              div.style.left = (windowWidth - width-1) + "px";
            }
            
            const windowHeight = window.innerHeight;
            const windowBottom = windowHeight - top - height;
            if (windowBottom < 0) {
              div.style.top = (windowHeight - height) + "px";
            }
          }
    
        document.addEventListener("mouseup", () => {
        document.removeEventListener("mousemove", onMouseMove);
        });
    
      
        let taille_max_width_fenetre = (width+right).toString()
        taille_max_width_fenetre=taille_max_width_fenetre+"px";
    
        let taille_max_height_fenetre = (height+bottom).toString()
        taille_max_height_fenetre=taille_max_height_fenetre+"px";
      
        fenetre_txt.style.maxWidth = taille_max_width_fenetre;
        fenetre_txt.style.maxHeight = taille_max_height_fenetre;
    
    } 

function create_desktop() {

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
                        open_fenetre_txt()
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
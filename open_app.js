const Desktop = document.getElementById("Desktop")


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
    console.log(bottom);

} 

  open_fenetre_txt()


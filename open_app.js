const Desktop = document.getElementById("Desktop")


function open_fenetre_txt () {

const fenetre_txt = document.createElement("div")
fenetre_txt.id = "fenetre_txt"
fenetre_txt.classList.add("fenetre")
Desktop.appendChild(fenetre_txt)


    const fenetre_txt_header = document.createElement("div")
    fenetre_txt_header.id = "fenetre_txt_header"
    fenetre_txt_header.classList.add("fenetre_header")
    fenetre_txt.appendChild(fenetre_txt_header)

        const fenetre_txt_header_logo = document.createElement("img")
        fenetre_txt_header_logo.id = "fenetre_txt_header_logo"
        fenetre_txt_header_logo.src = "./asset/asset_desktop/logo_txt.png"
        fenetre_txt_header.appendChild(fenetre_txt_header_logo)

        const fenetre_txt_header_span = document.createElement("span")
        fenetre_txt_header_span.id = "fenetre_txt_header_span"
        fenetre_txt_header_span.innerText = "contact.txt - Bloc-note"
        fenetre_txt_header.appendChild(fenetre_txt_header_span)

    const fenetre_txt_body = document.createElement("div")
    fenetre_txt_body.id = "fenetre_txt_body"
    fenetre_txt_body.classList.add("fenetre_body")
    fenetre_txt.appendChild(fenetre_txt_body)

    const fenetre_txt_footer = document.createElement("div")
    fenetre_txt_footer.id = "fenetre_txt_footer"
    fenetre_txt_footer.classList.add("fenetre_footer")
    fenetre_txt.appendChild(fenetre_txt_footer)
    

    let right = parseInt(window.getComputedStyle(fenetre_txt).getPropertyValue('right'));
    let bottom = parseInt(window.getComputedStyle(fenetre_txt).getPropertyValue('bottom'));
    let width = fenetre_txt.clientWidth;
    let height = fenetre_txt.clientHeight;

  
    let taille_max_width_fenetre = (width+right).toString()
    taille_max_width_fenetre=taille_max_width_fenetre+"px";

    let taille_max_height_fenetre = (height+bottom).toString()
    taille_max_height_fenetre=taille_max_height_fenetre+"px";
  
    fenetre_txt.style.maxWidth = taille_max_width_fenetre;
    fenetre_txt.style.maxHeight = taille_max_height_fenetre;
    console.log(bottom);

} 

  open_fenetre_txt()

